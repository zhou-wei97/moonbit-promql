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
    if token.raw_bytes != None ||
      token.text.is_empty() ||
      (
        !token.quoted &&
        (
          token.kind != "word" ||
          !metric_identifier(token.text) ||
          token.text.to_lower() == "without"
        )
      ) {
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
    Some(c.take().text.to_lower())
  } else {
    None
  }
  let labels = if mode != None { grouping(c) } else { [] }
  let group = if c.peek() == "group_left" || c.peek() == "group_right" {
    if mode == None {
      raise Invalid("group modifier requires on/ignoring")
    }
    Some(c.take().text.to_lower())
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
fn fill_modifiers(c : Cursor) -> (String?, String?) raise ParseError {
  let mut left : String? = None
  let mut right : String? = None
  while ["fill", "fill_left", "fill_right"].contains(c.peek()) {
    if !c.options.fill_modifiers {
      raise Invalid("binop fill modifiers are not enabled")
    }
    let kind = c.take().text.to_lower()
    c.need("(")
    let sign = if c.eat("-") { "-" } else if c.eat("+") { "+" } else { "" }
    let token = c.take()
    if token.kind != "number" && token.kind != "duration" {
      raise Invalid("fill requires numeric literal")
    }
    let value = sign + token.text
    ignore(number_value(value))
    c.need(")")
    if kind == "fill" || kind == "fill_left" {
      if left != None {
        raise Invalid("duplicate left fill")
      }
      left = Some(value)
    }
    if kind == "fill" || kind == "fill_right" {
      if right != None {
        raise Invalid("duplicate right fill")
      }
      right = Some(value)
    }
  }
  (left, right)
}

///|
fn aggregator(name : String) -> Bool {
  [
    "sum", "avg", "min", "max", "count", "group", "stddev", "stdvar", "topk", "bottomk",
    "quantile", "count_values", "limitk", "limit_ratio",
  ].contains(name)
}

///|
fn aggregate(c : Cursor, name : String, depth : Int) -> Expr raise ParseError {
  if ["limitk", "limit_ratio"].contains(name) &&
    !c.options.experimental_functions {
    raise Invalid("experimental aggregation is not enabled")
  }
  let before = c.peek() == "by" || c.peek() == "without"
  let mut without = false
  let mut labels = []
  if before {
    without = c.take().text.to_lower() == "without"
    labels = grouping(c)
  }
  c.need("(")
  let first = expression(c, 1, depth)
  let parameterized = [
    "topk", "bottomk", "quantile", "count_values", "limitk", "limit_ratio",
  ].contains(name)
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
    without = c.take().text.to_lower() == "without"
    labels = grouping(c)
  }
  if parameterized {
    AggregateParam(name, labels, without, first, body)
  } else {
    Aggregate(name, labels, without, body)
  }
}

///|
fn temporal_target(expr : Expr) -> Bool {
  match expr {
    Selector(_, _)
    | SelectorBytes(_, _)
    | Range(_, _)
    | RangeExpression(_, _)
    | Subquery(_, _, _)
    | SubqueryExpression(_, _, _) => true
    Offset(v, _) | At(v, _) | OffsetExpression(v, _) | ExtendedRange(v, _) =>
      temporal_target(v)
    _ => false
  }
}

///|
fn has_modifier(expr : Expr, offset : Bool) -> Bool {
  match expr {
    Offset(v, _) | OffsetExpression(v, _) => offset || has_modifier(v, offset)
    At(v, _) => !offset || has_modifier(v, offset)
    ExtendedRange(v, _) => has_modifier(v, offset)
    _ => false
  }
}

///|
fn direct_selector(expr : Expr) -> Bool {
  match expr {
    Selector(_, _) | SelectorBytes(_, _) => true
    ExtendedRange(v, _) => direct_selector(v)
    _ => false
  }
}

///|
fn extended_target(expr : Expr) -> Bool {
  match expr {
    Selector(_, _)
    | SelectorBytes(_, _)
    | Range(_, _)
    | RangeExpression(_, _) => true
    Offset(v, _) | At(v, _) | OffsetExpression(v, _) | ExtendedRange(v, _) =>
      extended_target(v)
    _ => false
  }
}

///|
fn has_extension_kind(expr : Expr, kind : String) -> Bool {
  match expr {
    ExtendedRange(v, k) => k == kind || has_extension_kind(v, kind)
    Range(v, _)
    | RangeExpression(v, _)
    | Offset(v, _)
    | At(v, _)
    | OffsetExpression(v, _) => has_extension_kind(v, kind)
    _ => false
  }
}

///|
fn postfix(c : Cursor, initial : Expr, depth : Int) -> Expr raise ParseError {
  let mut result = initial
  let mut has_offset = has_modifier(initial, true)
  let mut has_at = has_modifier(initial, false)
  let mut count = 0
  while ["[", "offset", "@", "anchored", "smoothed"].contains(c.peek()) {
    count += 1
    if count > 64 {
      raise Invalid("postfix nesting limit")
    }
    if c.eat("[") {
      let range = duration_expression(c, 1, depth + 1)
      require_positive_duration(range)
      if c.eat(":") {
        let resolution = if c.peek() == "]" {
          None
        } else {
          let step = duration_expression(c, 1, depth + 1)
          require_positive_duration(step)
          Some(step)
        }
        result = match (range, resolution) {
          (DurationValue(r), None) => Subquery(result, r, None)
          (DurationValue(r), Some(DurationValue(s))) =>
            Subquery(result, r, Some(s))
          _ => SubqueryExpression(result, range, resolution)
        }
        has_offset = false
        has_at = false
      } else {
        if !direct_selector(result) {
          raise Invalid(
            "range requires a direct vector selector before modifiers",
          )
        }
        result = match range {
          DurationValue(r) => Range(result, r)
          _ => RangeExpression(result, range)
        }
      }
      c.need("]")
    } else if c.eat("offset") {
      if has_offset || !temporal_target(result) {
        raise Invalid("duplicate or misplaced offset")
      }
      let duration = offset_duration(c, depth + 1)
      result = match duration {
        DurationValue(value) => Offset(result, value)
        _ => OffsetExpression(result, duration)
      }
      has_offset = match duration {
        DurationValue(value) => duration_value(value) != 0.0
        _ => true
      }
    } else if c.eat("@") {
      if has_at || !temporal_target(result) {
        raise Invalid("duplicate or misplaced @")
      }
      let timestamp = if c.peek() == "start" || c.peek() == "end" {
        let which = c.take().text.to_lower()
        c.need("(")
        c.need(")")
        which + "()"
      } else {
        let sign = if c.eat("-") { "-" } else if c.eat("+") { "+" } else { "" }
        let token = c.take()
        if token.kind != "number" && token.kind != "duration" {
          raise Invalid("@ requires a timestamp or start()/end()")
        }
        let text = sign + token.text
        let value = number_value(text)
        if value.is_nan() ||
          value.is_inf() ||
          value >= 9223372036854775807.0 ||
          value <= -9223372036854775808.0 {
          raise Invalid("@ timestamp out of bounds")
        }
        text
      }
      result = At(result, timestamp)
      has_at = true
    } else {
      let kind = c.take().text.to_lower()
      if !c.options.extended_ranges {
        raise Invalid("extended range modifier is not enabled")
      }
      if has_extension_kind(
          result,
          if kind == "anchored" {
            "smoothed"
          } else {
            "anchored"
          },
        ) ||
        !extended_target(result) {
        raise Invalid("conflicting or misplaced extended range modifier")
      }
      result = ExtendedRange(result, kind)
    }
  }
  result
}
