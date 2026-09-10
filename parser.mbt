///|
pub(all) enum Expr {
  Number(String)
  Selector(String, Array[(String, String, String)])
  Range(Expr, String)
  Call(String, Array[Expr])
  Aggregate(String, Array[String], Bool, Expr)
  Binary(String, Expr, Expr)
  Unary(String, Expr)
} derive(Debug, Eq)

///|
fn identifier(s : String) -> Bool {
  if s.is_empty() {
    return false
  }
  let cs = s.to_array()
  if cs[0] >= '0' && cs[0] <= '9' {
    return false
  }
  cs.iter().all(word)
}

///|
fn precedence(op : String) -> Int {
  match op {
    "or" => 1
    "and" | "unless" => 2
    "==" | "!=" | ">" | "<" | ">=" | "<=" => 3
    "+" | "-" => 4
    "*" | "/" | "%" => 5
    "^" => 6
    _ => 0
  }
}

///|
fn expression(c : Cursor, min : Int, depth : Int) -> Expr raise ParseError {
  if depth > 64 {
    raise Invalid("nesting limit")
  }
  let t = c.take()
  if t.quoted {
    raise Invalid("string expression outside supported subset")
  }
  let mut lhs = if t.text == "+" || t.text == "-" {
    Unary(t.text, expression(c, 6, depth + 1))
  } else if t.text == "(" {
    let e = expression(c, 1, depth + 1)
    c.need(")")
    e
  } else if t.text.to_array().iter().all(fn(x) { x >= '0' && x <= '9' }) {
    let mut n = t.text
    if c.eat(".") {
      let f = c.take()
      if !f.text.to_array().iter().all(fn(x) { x >= '0' && x <= '9' }) {
        raise Invalid("invalid decimal")
      }
      n += "." + f.text
    }
    Number(n)
  } else {
    let mut name = if t.text == "{" {
      c.pos -= 1
      ""
    } else {
      if !identifier(t.text) {
        raise Invalid("metric/function name")
      }
      t.text
    }
    while c.eat(":") {
      let part = c.take()
      if !identifier(part.text) {
        raise Invalid("metric name")
      }
      name += ":" + part.text
    }
    if c.peek() == "by" || c.peek() == "without" {
      if name != "sum" &&
        name != "avg" &&
        name != "min" &&
        name != "max" &&
        name != "count" {
        raise Invalid("unsupported aggregator")
      }
      let without = c.take().text == "without"
      c.need("(")
      let labels : Array[String] = []
      if !c.eat(")") {
        while true {
          let x = c.take()
          if !identifier(x.text) || x.quoted {
            raise Invalid("label name")
          }
          labels.push(x.text)
          if c.eat(")") {
            break
          }
          c.need(",")
        }
      }
      c.need("(")
      let body = expression(c, 1, depth + 1)
      c.need(")")
      Aggregate(name, labels, without, body)
    } else if c.eat("(") {
      let args : Array[Expr] = []
      if !c.eat(")") {
        while true {
          args.push(expression(c, 1, depth + 1))
          if c.eat(")") {
            break
          }
          c.need(",")
        }
      }
      Call(name, args)
    } else {
      let labels : Array[(String, String, String)] = []
      if c.eat("{") && !c.eat("}") {
        while true {
          let key = c.take()
          if key.quoted || !identifier(key.text) {
            raise Invalid("label name")
          }
          let op = c.take().text
          if op != "=" && op != "!=" && op != "=~" && op != "!~" {
            raise Invalid("matcher operator")
          }
          let value = c.take()
          if !value.quoted {
            raise Invalid("matcher requires string")
          }
          labels.push((key.text, op, value.text))
          if c.eat("}") {
            break
          }
          c.need(",")
          if c.eat("}") {
            break
          }
        }
      }
      if name.is_empty() && labels.is_empty() {
        raise Invalid("empty selector")
      }
      Selector(name, labels)
    }
  }
  if c.eat("[") {
    match lhs {
      Selector(_, _) => ()
      _ => raise Invalid("range requires vector selector")
    }
    let d = c.take().text
    let ds = d.to_array()
    let mut split = 0
    while split < ds.length() && ds[split] >= '0' && ds[split] <= '9' {
      split += 1
    }
    if split == 0 || split == ds.length() {
      raise Invalid("duration requires number and unit")
    }
    let unit = String::from_array(ds[split:])
    if unit != "ms" &&
      unit != "s" &&
      unit != "m" &&
      unit != "h" &&
      unit != "d" &&
      unit != "w" &&
      unit != "y" {
      raise Invalid("duration unit")
    }
    if ds[0] == '0' && split == 1 {
      raise Invalid("zero range")
    }
    c.need("]")
    lhs = Range(lhs, d)
  }
  while true {
    let op = c.peek()
    let prec = precedence(op)
    if prec == 0 || prec < min {
      break
    }
    c.pos += 1
    let rhs = expression(c, if op == "^" { prec } else { prec + 1 }, depth + 1)
    lhs = Binary(op, lhs, rhs)
  }
  lhs
}

///|
pub fn parse(source : String) -> Expr raise ParseError {
  let c = lex(source, false)
  let e = expression(c, 1, 0)
  if c.pos != c.tokens.length() {
    raise Invalid("unsupported/trailing syntax: " + c.peek())
  }
  e
}
