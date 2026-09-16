///|
pub(all) enum Expr {
  Number(String)
  StringLiteral(String)
  StringBytes(Bytes)
  Selector(String, Array[(String, String, String)])
  SelectorBytes(String, Array[(Bytes, String, Bytes)])
  Parenthesized(Expr)
  Range(Expr, String)
  Call(String, Array[Expr])
  Aggregate(String, Array[String], Bool, Expr)
  Binary(String, Expr, Expr)
  Unary(String, Expr)
  BinaryMatch(String, VectorMatching, Expr, Expr)
  BinaryFill(String, VectorMatching, String?, String?, Expr, Expr)
  AggregateParam(String, Array[String], Bool, Expr, Expr)
  Subquery(Expr, String, String?)
  Offset(Expr, String)
  At(Expr, String)
  RangeExpression(Expr, DurationExpr)
  SubqueryExpression(Expr, DurationExpr, DurationExpr?)
  OffsetExpression(Expr, DurationExpr)
  ExtendedRange(Expr, String)
} derive(Debug, Eq)

///|
pub(all) enum DurationExpr {
  DurationValue(String)
  DurationUnary(String, DurationExpr)
  DurationBinary(String, DurationExpr, DurationExpr)
  DurationCall(String, Array[DurationExpr])
} derive(Debug, Eq)

///|
fn identifier(s : String) -> Bool {
  let cs = s.to_array()
  !cs.is_empty() && ascii_alpha(cs[0]) && cs.iter().all(word)
}

///|
fn metric_identifier(s : String) -> Bool {
  let cs = s.to_array()
  !cs.is_empty() &&
  (ascii_alpha(cs[0]) || cs[0] == ':') &&
  cs.iter().all(c => word(c) || c == ':')
}

///|
fn precedence(op : String) -> Int {
  match op {
    "or" => 1
    "and" | "unless" => 2
    "==" | "!=" | ">" | "<" | ">=" | "<=" => 3
    "+" | "-" => 4
    "*" | "/" | "%" | "atan2" => 5
    "^" => 6
    _ => 0
  }
}

///|
fn selector(c : Cursor, name : String) -> Expr raise ParseError {
  let labels : Array[(Bytes, String, Bytes)] = []
  let mut raw = false
  if c.eat("{") && !c.eat("}") {
    while true {
      let key = c.take()
      if !key.quoted && (!identifier(key.text) || key.kind != "word") {
        raise Invalid("label name")
      }
      if key.quoted && (c.peek() == "," || c.peek() == "}") {
        labels.push((@utf8.encode("__name__"), "=", key.bytes()))
      } else {
        let op = c.take().text
        if !["=", "!=", "=~", "!~"].contains(op) {
          raise Invalid("matcher operator")
        }
        let value = c.take()
        if !value.quoted {
          raise Invalid("matcher requires string")
        }
        labels.push((key.bytes(), op, value.bytes()))
        if value.raw_bytes != None {
          raw = true
        }
      }
      if key.raw_bytes != None {
        raw = true
      }
      if c.eat("}") {
        break
      }
      c.need(",")
      if c.eat("}") {
        break
      }
    }
  }
  if raw {
    SelectorBytes(name, labels)
  } else {
    Selector(
      name,
      labels.map(t => {
        let key = @utf8.decode(t.0) catch {
          _ => raise Invalid("label decoding")
        }
        let value = @utf8.decode(t.2) catch {
          _ => raise Invalid("value decoding")
        }
        (key, t.1, value)
      }),
    )
  }
}

///|
fn expression(c : Cursor, min : Int, depth : Int) -> Expr raise ParseError {
  if depth > 64 {
    raise Invalid("nesting limit")
  }
  let t = c.take()
  let mut lhs = if t.quoted {
    match t.raw_bytes {
      Some(data) => StringBytes(data)
      None => StringLiteral(t.text)
    }
  } else if t.text == "+" || t.text == "-" {
    Unary(t.text, expression(c, 6, depth + 1))
  } else if t.text == "(" {
    let e = expression(c, 1, depth + 1)
    c.need(")")
    Parenthesized(e)
  } else if t.kind == "number" || t.kind == "duration" {
    Number(t.text)
  } else {
    let name = if t.text == "{" {
      c.pos -= 1
      ""
    } else {
      if !metric_identifier(t.text) || t.kind != "word" {
        raise Invalid("metric/function name")
      }
      t.text
    }
    let lower = name.to_lower()
    if ["bool", "on", "ignoring", "group_left", "group_right", "atan2"].contains(
        lower,
      ) {
      raise Invalid("reserved keyword cannot be a metric name")
    }
    if aggregator(lower) &&
      (c.peek() == "by" || c.peek() == "without" || c.peek() == "(") {
      aggregate(c, lower, depth + 1)
    } else if c.eat("(") {
      let call_name = if keyword(lower) { lower } else { name }
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
      Call(call_name, args)
    } else {
      selector(c, name)
    }
  }
  lhs = postfix(c, lhs, depth)
  while true {
    let op = c.peek()
    let prec = precedence(op)
    if prec == 0 || prec < min {
      break
    }
    c.pos += 1
    let matching = vector_matching(c)
    let (left_fill, right_fill) = fill_modifiers(c)
    let rhs = expression(c, if op == "^" { prec } else { prec + 1 }, depth + 1)
    lhs = if left_fill != None || right_fill != None {
      BinaryFill(op, matching, left_fill, right_fill, lhs, rhs)
    } else if matching.return_bool || matching.mode != None {
      BinaryMatch(op, matching, lhs, rhs)
    } else {
      Binary(op, lhs, rhs)
    }
  }
  lhs
}

///|
/// Parse and statically validate a query. Experimental syntax is opt-in.
pub fn parse(
  source : String,
  options? : ParserOptions = ParserOptions::new(),
) -> Expr raise ParseError {
  if !valid_unicode(source) {
    raise Invalid("ill-formed UTF-16 input")
  }
  let c = lex(source, options)
  let e = try {
    let value = expression(c, 1, 0)
    if c.pos != c.tokens.length() {
      raise Located("unsupported/trailing syntax: " + c.peek(), c.span())
    }
    value
  } catch {
    Located(message, span) => raise Located(message, span)
    Invalid(message) => {
      let offset = if c.pos > 0 { c.tokens[c.pos - 1].start } else { 0 }
      raise Located(
        message,
        source_span(
          c.source,
          offset,
          if c.pos > 0 {
            c.tokens[c.pos - 1].end
          } else {
            0
          },
        ),
      )
    }
  }
  ignore(infer_type(e, options~)) catch {
    Located(message, span) => raise Located(message, span)
    Invalid(message) =>
      raise Located(message, source_span(c.source, 0, c.source.length()))
  }
  e
}
