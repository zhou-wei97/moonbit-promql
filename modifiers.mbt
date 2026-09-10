///|
pub(all) struct VectorMatching {
  return_bool : Bool
  mode : String?
  labels : Array[String]
  group : String?
  include_labels : Array[String]
} derive(Debug, Eq)

///|
fn grouping(c : Cursor) -> Array[String] raise ParseError {
  c.need("(")
  let out = []
  if c.eat(")") {
    return out
  }
  while true {
    let token = c.take()
    if !identifier(token.text) {
      raise Invalid("grouping label")
    }
    out.push(token.text)
    if c.eat(")") {
      break
    }
    c.need(",")
    if c.eat(")") {
      break
    }
  }
  out
}

///|
fn vector_matching(c : Cursor) -> VectorMatching raise ParseError {
  let return_bool = c.eat("bool")
  let mode = if c.peek() == "on" || c.peek() == "ignoring" {
    Some(c.take().text)
  } else {
    None
  }
  let labels = if mode != None { grouping(c) } else { [] }
  let group = if c.peek() == "group_left" || c.peek() == "group_right" {
    if mode == None {
      raise Invalid("group modifier requires on/ignoring")
    }
    Some(c.take().text)
  } else {
    None
  }
  let include_labels = if group != None && c.peek() == "(" {
    grouping(c)
  } else {
    []
  }
  { return_bool, mode, labels, group, include_labels, }
}

///|
fn aggregator(name : String) -> Bool {
  [
    "sum", "avg", "min", "max", "count", "group", "stddev", "stdvar", "topk", "bottomk",
    "quantile", "count_values",
  ].contains(name)
}

///|
fn aggregate(c : Cursor, name : String, depth : Int) -> Expr raise ParseError {
  let before = c.peek() == "by" || c.peek() == "without"
  let mut without = false
  let mut labels = []
  if before {
    without = c.take().text == "without"
    labels = grouping(c)
  }
  c.need("(")
  let first = expression(c, 1, depth)
  let parameterized = ["topk", "bottomk", "quantile", "count_values"].contains(
    name,
  )
  let body = if parameterized {
    c.need(",")
    expression(c, 1, depth)
  } else {
    first
  }
  c.need(")")
  if c.peek() == "by" || c.peek() == "without" {
    if before {
      raise Invalid("duplicate aggregation grouping")
    }
    without = c.take().text == "without"
    labels = grouping(c)
  }
  if parameterized {
    AggregateParam(name, labels, without, first, body)
  } else {
    Aggregate(name, labels, without, body)
  }
}

///|
/// Traditional duration literal, checked against the signed 64-bit nanosecond range.
fn duration(c : Cursor, positive : Bool) -> String raise ParseError {
  let token = c.take()
  if token.quoted {
    raise Invalid("duration cannot be quoted")
  }
  let cs = token.text.to_array()
  let mut i = 0
  let mut previous = 8
  let mut total = 0L
  while i < cs.length() {
    let begin = i
    let mut amount = 0L
    while i < cs.length() && cs[i] >= '0' && cs[i] <= '9' {
      let digit = (cs[i].to_int() - 48).to_int64()
      if amount > (9223372036854L - digit) / 10L {
        raise Invalid("duration overflow")
      }
      amount = amount * 10L + digit
      i += 1
    }
    if i == begin || i == cs.length() {
      raise Invalid("duration requires number and unit")
    }
    let (order, multiplier) = match cs[i] {
      'y' => (7, 31536000000L)
      'w' => (6, 604800000L)
      'd' => (5, 86400000L)
      'h' => (4, 3600000L)
      'm' =>
        if i + 1 < cs.length() && cs[i + 1] == 's' {
          i += 1
          (1, 1L)
        } else {
          (3, 60000L)
        }
      's' => (2, 1000L)
      _ => raise Invalid("duration unit")
    }
    i += 1
    if order >= previous {
      raise Invalid("duration units must be descending without repetition")
    }
    previous = order
    if amount > (9223372036854L - total) / multiplier {
      raise Invalid("duration overflow")
    }
    total += amount * multiplier
  }
  if i == 0 || (positive && total == 0L) {
    raise Invalid("positive duration required")
  }
  token.text
}

///|
fn temporal_target(expr : Expr) -> Bool {
  match expr {
    Selector(_, _) | Range(_, _) | Subquery(_, _, _) => true
    Offset(v, _) | At(v, _) => temporal_target(v)
    _ => false
  }
}

///|
fn has_modifier(expr : Expr, offset : Bool) -> Bool {
  match expr {
    Offset(v, _) => offset || has_modifier(v, offset)
    At(v, _) => !offset || has_modifier(v, offset)
    _ => false
  }
}

///|
fn postfix(c : Cursor, initial : Expr) -> Expr raise ParseError {
  let mut result = initial
  let mut has_offset = has_modifier(initial, true)
  let mut has_at = has_modifier(initial, false)
  let mut count = 0
  while c.peek() == "[" || c.peek() == "offset" || c.peek() == "@" {
    count += 1
    if count > 64 {
      raise Invalid("postfix nesting limit")
    }
    if c.eat("[") {
      let range = duration(c, true)
      if c.eat(":") {
        let resolution = if c.peek() == "]" {
          None
        } else {
          Some(duration(c, true))
        }
        result = Subquery(result, range, resolution)
        has_offset = false
        has_at = false
      } else {
        match result {
          Selector(_, _) => ()
          _ => raise Invalid("range requires vector selector before modifiers")
        }
        result = Range(result, range)
      }
      c.need("]")
    } else if c.eat("offset") {
      if has_offset || !temporal_target(result) {
        raise Invalid("duplicate or misplaced offset")
      }
      let negative = c.eat("-")
      let d = duration(c, false)
      result = Offset(result, (if negative { "-" } else { "" }) + d)
      has_offset = true
    } else {
      c.need("@")
      if has_at || !temporal_target(result) {
        raise Invalid("duplicate or misplaced @")
      }
      let timestamp = if c.peek() == "start" || c.peek() == "end" {
        let which = c.take().text
        c.need("(")
        c.need(")")
        which + "()"
      } else {
        let sign = if c.eat("-") { "-" } else if c.eat("+") { "+" } else { "" }
        let t = c.take()
        if t.quoted ||
          t.text.is_empty() ||
          !t.text.iter().all(x => x >= '0' && x <= '9') {
          raise Invalid("@ requires numeric timestamp or start()/end()")
        }
        let mut value = sign + t.text
        if c.eat(".") {
          let f = c.take()
          if f.quoted || !f.text.iter().all(x => x >= '0' && x <= '9') {
            raise Invalid("timestamp fraction")
          }
          value += "." + f.text
        }
        value
      }
      result = At(result, timestamp)
      has_at = true
    }
  }
  result
}
