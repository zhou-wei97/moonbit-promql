///|
fn duration_bound(value : Double) -> Unit raise ParseError {
  if value.is_inf() ||
    value > 9223372036.854775807 ||
    value < -9223372036.854775808 {
    raise Invalid("duration out of signed-64 nanosecond range")
  }
}

///|
fn require_positive_duration(expr : DurationExpr) -> Unit raise ParseError {
  if expr is DurationValue(s) {
    let value = number_value(s)
    duration_bound(value)
    if value <= 0.0 {
      raise Invalid("duration must be greater than zero")
    }
  }
}

///|
fn duration_unary(op : String, value : DurationExpr) -> DurationExpr {
  if op == "+" {
    return value
  }
  match value {
    DurationValue(s) =>
      if op == "+" {
        value
      } else {
        DurationValue(
          if s.has_prefix("-") {
            s[1:].to_owned()
          } else if s.has_prefix("+") {
            "-" + s[1:].to_owned()
          } else {
            "-" + s
          },
        )
      }
    _ => DurationUnary(op, value)
  }
}

///|
fn duration_expression(
  c : Cursor,
  min : Int,
  depth : Int,
) -> DurationExpr raise ParseError {
  if depth > 64 {
    raise Invalid("duration expression nesting limit")
  }
  let token = c.take()
  let mut lhs = if token.text == "+" || token.text == "-" {
    duration_unary(token.text, duration_expression(c, 6, depth + 1))
  } else if token.text == "(" {
    if !c.options.duration_expressions {
      raise Invalid("duration expressions are not enabled")
    }
    let e = duration_expression(c, 1, depth + 1)
    c.need(")")
    e
  } else if token.kind == "number" || token.kind == "duration" {
    if token.text.to_lower() == "inf" || token.text.to_lower() == "nan" {
      raise Invalid("non-finite duration")
    }
    duration_bound(number_value(token.text))
    DurationValue(token.text)
  } else {
    let name = token.text.to_lower()
    if !["step", "range", "min_of", "max_of"].contains(name) || token.quoted {
      raise Invalid("duration value or function required")
    }
    if !c.options.duration_expressions {
      raise Invalid("duration expressions are not enabled")
    }
    c.need("(")
    let args = if name == "step" || name == "range" {
      []
    } else {
      let left = duration_expression(c, 1, depth + 1)
      c.need(",")
      [left, duration_expression(c, 1, depth + 1)]
    }
    c.need(")")
    DurationCall(name, args)
  }
  while ["+", "-", "*", "/", "%", "^"].contains(c.peek()) &&
        precedence(c.peek()) >= min {
    if !c.options.duration_expressions {
      raise Invalid("duration expressions are not enabled")
    }
    let op = c.take().text
    let p = precedence(op)
    let rhs = duration_expression(
      c,
      if op == "^" {
        p
      } else {
        p + 1
      },
      depth + 1,
    )
    if (op == "/" || op == "%") &&
      rhs is DurationValue(value) &&
      number_value(value) == 0.0 {
      raise Invalid("duration division by zero")
    }
    lhs = DurationBinary(op, lhs, rhs)
  }
  lhs
}

///|
/// Unparenthesized offset consumes only one signed literal/function.
fn offset_duration(c : Cursor, depth : Int) -> DurationExpr raise ParseError {
  let sign = if c.eat("-") { "-" } else if c.eat("+") { "+" } else { "" }
  let result = if c.peek().to_lower() == "nan" {
    DurationValue(c.take().text)
  } else {
    duration_expression(c, 7, depth)
  }
  let result = if sign.is_empty() {
    result
  } else {
    duration_unary(sign, result)
  }
  if result is DurationValue(s) {
    duration_bound(number_value(s))
  }
  result
}

///|
/// Literal duration converted through signed-64 nanoseconds, as in Prometheus.
pub fn duration_value(text : String) -> Double raise ParseError {
  let value = number_value(text)
  duration_bound(value)
  let plain = if text.has_prefix("-") || text.has_prefix("+") {
    text[1:].to_owned()
  } else {
    text
  }
  if !plain.to_lower().has_prefix("0x") &&
    plain.iter().any(c => ['m', 's', 'h', 'd', 'w', 'y'].contains(c)) {
    return value
  }
  let ns = if value.is_nan() || value * 1000000000.0 >= 9223372036854775807.0 {
    -9223372036854775808L
  } else {
    (value * 1000000000.0).to_int64()
  }
  (ns / 1000000000L).to_double() + (ns % 1000000000L).to_double() / 1000000000.0
}

///|
/// Timestamp in milliseconds, with round-half-away-from-zero conversion.
/// Accepted seconds follow upstream bounds; overflowing milliseconds use Go/amd64's minimum-int64 sentinel.
pub fn timestamp_value(text : String) -> Int64 raise ParseError {
  let value = number_value(text)
  if value.is_nan() ||
    value.is_inf() ||
    value >= 9223372036854775807.0 ||
    value <= -9223372036854775808.0 {
    raise Invalid("timestamp out of bounds")
  }
  let millis = value * 1000.0
  if millis >= 9223372036854775807.0 || millis <= -9223372036854775808.0 {
    return -9223372036854775808L
  }
  (if millis < 0.0 {
    -@double.floor(-millis + 0.5)
  } else {
    @double.floor(millis + 0.5)
  }).to_int64()
}
