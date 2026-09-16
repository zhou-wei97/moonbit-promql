///|
fn duration_millis(text : String) -> Int64 raise ParseError {
  let cs = text.to_array()
  let mut i = 0
  let mut previous = 8
  let mut total = 0L
  while i < cs.length() {
    let begin = i
    let mut amount = 0L
    while i < cs.length() && digit(cs[i]) {
      let d = (cs[i].to_int() - 48).to_int64()
      if amount > (9223372036854L - d) / 10L {
        raise Invalid("duration overflow")
      }
      amount = amount * 10L + d
      i += 1
    }
    if i == begin || i == cs.length() {
      raise Invalid("duration requires integer and unit")
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
      _ => raise Invalid("unknown duration unit")
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
  if cs.is_empty() {
    raise Invalid("empty duration")
  }
  total
}

///|
/// Convert a PromQL numeric or duration literal using the pinned language rules.
pub fn number_value(literal : String) -> Double raise ParseError {
  if literal.is_empty() || literal.length() > 100000 {
    raise Invalid("invalid numeric literal size")
  }
  let (negative, text) = if literal.has_prefix("-") {
    (true, literal[1:].to_owned())
  } else if literal.has_prefix("+") {
    (false, literal[1:].to_owned())
  } else {
    (false, literal)
  }
  let lower = text.to_lower()
  let value = if lower == "inf" {
    @double.infinity
  } else if lower == "nan" {
    @double.not_a_number
  } else if lower.has_prefix("0x") {
    let cs = text.to_array()
    let mut i = 2
    if i < cs.length() && cs[i] == '_' {
      i += 1
    }
    let begin = i
    let mut n = 0L
    while i < cs.length() {
      if cs[i] == '_' {
        if i == begin ||
          i + 1 >= cs.length() ||
          hex_digit(cs[i - 1]) < 0 ||
          hex_digit(cs[i + 1]) < 0 {
          raise Invalid("hexadecimal underscore placement")
        }
        i += 1
        continue
      }
      let d = hex_digit(cs[i])
      if d < 0 || n > (9223372036854775807L - d.to_int64()) / 16L {
        raise Invalid("hexadecimal integer syntax or signed-64 overflow")
      }
      n = n * 16L + d.to_int64()
      i += 1
    }
    if i == begin {
      raise Invalid("hexadecimal digits required")
    }
    n.to_double()
  } else if text
    .iter()
    .any(c => {
      c == 'm' || c == 's' || c == 'h' || c == 'd' || c == 'w' || c == 'y'
    }) {
    duration_millis(text).to_double() / 1000.0
  } else {
    let original = text.to_array()
    for i, c in original {
      if c == '_' &&
        (
          i == 0 ||
          i + 1 == original.length() ||
          !digit(original[i - 1]) ||
          !digit(original[i + 1])
        ) {
        raise Invalid("decimal underscore placement")
      }
    }
    let clean = text.replace_all(old="_", new="")
    let cs = clean.to_array()
    let mut i = 0
    let mut count = 0
    while i < cs.length() && digit(cs[i]) {
      i += 1
      count += 1
    }
    if i < cs.length() && cs[i] == '.' {
      i += 1
      while i < cs.length() && digit(cs[i]) {
        i += 1
        count += 1
      }
    }
    if count == 0 {
      raise Invalid("decimal digits required")
    }
    if i < cs.length() && (cs[i] == 'e' || cs[i] == 'E') {
      i += 1
      if i < cs.length() && (cs[i] == '+' || cs[i] == '-') {
        i += 1
      }
      let start = i
      while i < cs.length() && digit(cs[i]) {
        i += 1
      }
      if i == start {
        raise Invalid("exponent digits required")
      }
    }
    if i != cs.length() {
      raise Invalid("invalid decimal syntax")
    }
    let mut octal = cs.length() > 1 &&
      cs[0] == '0' &&
      cs.iter().all(c => c >= '0' && c <= '7')
    let mut integer = 0L
    if octal {
      for c in cs {
        let d = (c.to_int() - 48).to_int64()
        if integer > (9223372036854775807L - d) / 8L {
          octal = false
          break
        }
        integer = integer * 8L + d
      }
    }
    if octal {
      integer.to_double()
    } else {
      let parsed = @string.parse_double(clean) catch {
        _ => raise Invalid("numeric conversion failed")
      }
      if parsed.is_inf() {
        raise Invalid("numeric literal overflows float64")
      }
      parsed
    }
  }
  if negative {
    -value
  } else {
    value
  }
}
