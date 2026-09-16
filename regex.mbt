///|
/// RE2 syntax validation and empty-string analysis; this is not a regex executor.
priv struct RegexReader {
  cs : Array[Char]
  mut i : Int
  mut nodes : Int
}

///|
priv struct RegexInfo {
  nullable : Bool
  repeats : Int
}

///|
fn RegexReader::peek(self : RegexReader) -> Char {
  if self.i < self.cs.length() {
    self.cs[self.i]
  } else {
    '\u0000'
  }
}

///|
fn RegexReader::has(self : RegexReader, value : String) -> Bool {
  let chars = value.to_array()
  if self.i + chars.length() > self.cs.length() {
    return false
  }
  for i, c in chars {
    if self.cs[self.i + i] != c {
      return false
    }
  }
  true
}

///|
fn RegexReader::property(self : RegexReader) -> Unit raise ParseError {
  let name = if self.peek() == '{' {
    self.i += 1
    let start = self.i
    while self.i < self.cs.length() && self.peek() != '}' {
      self.i += 1
    }
    if self.i == self.cs.length() {
      raise Invalid("unterminated regex Unicode property")
    }
    let value = slice_chars(self.cs, start, self.i)
    self.i += 1
    value
  } else {
    if self.i == self.cs.length() {
      raise Invalid("missing regex Unicode property")
    }
    let c = self.cs[self.i]
    self.i += 1
    c.to_string()
  }
  let actual = if name.has_prefix("^") { name[1:].to_owned() } else { name }
  if !regex_property(actual) {
    raise Invalid("unknown regex Unicode property: " + name)
  }
}

///|
/// Return (matches empty, single character for class-range endpoints).
fn RegexReader::escape(
  self : RegexReader,
  in_class : Bool,
) -> (Bool, Int?) raise ParseError {
  self.i += 1
  if self.i == self.cs.length() {
    raise Invalid("trailing regex backslash")
  }
  let c = self.cs[self.i]
  self.i += 1
  if ['d', 'D', 's', 'S', 'w', 'W'].contains(c) {
    return (false, None)
  }
  if c == 'p' || c == 'P' {
    self.property()
    return (false, None)
  }
  if ['A', 'z', 'b', 'B'].contains(c) {
    if in_class {
      raise Invalid("assertion escape in regex character class")
    }
    return (c != 'b', None)
  }
  if c == 'Q' {
    if in_class {
      raise Invalid("quoted regex escape in character class")
    }
    let mut empty = true
    while self.i < self.cs.length() && !self.has("\\E") {
      empty = false
      self.i += 1
    }
    if self.has("\\E") {
      self.i += 2
    }
    return (empty, None)
  }
  let simple : Int? = match c {
    'a' => Some(7)
    'f' => Some(12)
    'n' => Some(10)
    'r' => Some(13)
    't' => Some(9)
    'v' => Some(11)
    _ => None
  }
  if simple is Some(n) {
    return (false, Some(n))
  }
  if c == 'x' {
    let braced = self.peek() == '{'
    if braced {
      self.i += 1
    }
    let mut n = 0
    let mut count = 0
    while self.i < self.cs.length() &&
          (if braced { self.peek() != '}' } else { count < 2 }) {
      let d = hex_digit(self.peek())
      if d < 0 || n > (1114111 - d) / 16 {
        raise Invalid("invalid regex hex escape")
      }
      n = n * 16 + d
      count += 1
      self.i += 1
    }
    if count == 0 || (!braced && count != 2) || (braced && self.peek() != '}') {
      raise Invalid("truncated regex hex escape")
    }
    if braced {
      self.i += 1
    }
    return (false, Some(n))
  }
  if c >= '0' && c <= '7' {
    let mut n = c.to_int() - 48
    let mut count = 1
    while count < 3 &&
          self.i < self.cs.length() &&
          self.peek() >= '0' &&
          self.peek() <= '7' {
      n = n * 8 + self.peek().to_int() - 48
      count += 1
      self.i += 1
    }
    if count == 1 && c != '0' {
      raise Invalid("regex backreferences are not supported")
    }
    return (false, Some(n))
  }
  if c.to_int() < 128 &&
    !((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || digit(c)) {
    return (false, Some(c.to_int()))
  }
  raise Invalid("invalid RE2 escape: \\" + c.to_string())
}

///|
fn RegexReader::class_atom(self : RegexReader) -> Int? raise ParseError {
  if self.i >= self.cs.length() {
    raise Invalid("unterminated regex class")
  }
  if self.has("[:") {
    self.i += 2
    let start = self.i
    while self.i < self.cs.length() && !self.has(":]") {
      self.i += 1
    }
    if !self.has(":]") {
      raise Invalid("unterminated POSIX character class")
    }
    let name = slice_chars(self.cs, start, self.i)
    let plain = if name.has_prefix("^") { name[1:].to_owned() } else { name }
    if ![
        "alnum", "alpha", "ascii", "blank", "cntrl", "digit", "graph", "lower", "print",
        "punct", "space", "upper", "word", "xdigit",
      ].contains(plain) {
      raise Invalid("unknown POSIX character class")
    }
    self.i += 2
    None
  } else if self.peek() == '\\' {
    self.escape(true).1
  } else {
    let c = self.peek()
    self.i += 1
    Some(c.to_int())
  }
}

///|
fn RegexReader::character_class(
  self : RegexReader,
) -> RegexInfo raise ParseError {
  self.i += 1
  if self.peek() == '^' {
    self.i += 1
  }
  let mut first = true
  while self.i < self.cs.length() {
    if self.peek() == ']' && !first {
      self.i += 1
      return { nullable: false, repeats: 1, }
    }
    let left = self.class_atom()
    first = false
    if left != None &&
      self.peek() == '-' &&
      self.i + 1 < self.cs.length() &&
      self.cs[self.i + 1] != ']' {
      self.i += 1
      let right = self.class_atom()
      if right == None || left.unwrap() > right.unwrap() {
        raise Invalid("invalid regex class range")
      }
    }
  }
  raise Invalid("unterminated regex character class")
}

///|
fn RegexReader::repetition(self : RegexReader) -> (Int, Int)? raise ParseError {
  match self.peek() {
    '*' => {
      self.i += 1
      return Some((0, -1))
    }
    '+' => {
      self.i += 1
      return Some((1, -1))
    }
    '?' => {
      self.i += 1
      return Some((0, 1))
    }
    '{' => ()
    _ => return None
  }
  let mut pos = self.i + 1
  let begin = pos
  let mut minimum = 0
  while pos < self.cs.length() && digit(self.cs[pos]) {
    minimum = (minimum * 10 + self.cs[pos].to_int() - 48).min(10001)
    pos += 1
  }
  if pos == begin || (pos > begin + 1 && self.cs[begin] == '0') {
    return None
  }
  let mut maximum = minimum
  if pos < self.cs.length() && self.cs[pos] == ',' {
    pos += 1
    let start = pos
    maximum = 0
    while pos < self.cs.length() && digit(self.cs[pos]) {
      maximum = (maximum * 10 + self.cs[pos].to_int() - 48).min(10001)
      pos += 1
    }
    if pos == start {
      maximum = -1
    } else if pos > start + 1 && self.cs[start] == '0' {
      return None
    }
  }
  if pos >= self.cs.length() || self.cs[pos] != '}' {
    return None
  }
  self.i = pos + 1
  if minimum > 1000 || maximum > 1000 || (maximum >= 0 && maximum < minimum) {
    raise Invalid("invalid regex repetition bounds")
  }
  Some((minimum, maximum))
}

///|
fn RegexReader::group(
  self : RegexReader,
  depth : Int,
) -> RegexInfo? raise ParseError {
  self.i += 1
  if self.peek() == '?' {
    self.i += 1
    if self.peek() == ':' {
      self.i += 1
    } else if self.has("P<") || self.peek() == '<' {
      self.i += if self.has("P<") { 2 } else { 1 }
      let start = self.i
      while self.i < self.cs.length() && self.peek() != '>' {
        if !word(self.peek()) {
          raise Invalid("invalid regex capture name")
        }
        self.i += 1
      }
      if self.i == start || self.peek() != '>' {
        raise Invalid("invalid regex named capture")
      }
      self.i += 1
    } else {
      let mut flags = 0
      let mut negative = false
      let mut after_minus = 0
      while self.i < self.cs.length() &&
            self.peek() != ':' &&
            self.peek() != ')' {
        let flag = self.peek()
        if flag == '-' && !negative {
          negative = true
        } else if ['i', 'm', 's', 'U'].contains(flag) {
          flags += 1
          if negative {
            after_minus += 1
          }
        } else {
          raise Invalid("unsupported regex group or flag")
        }
        self.i += 1
      }
      if flags == 0 || (negative && after_minus == 0) {
        raise Invalid("empty regex flags")
      }
      if self.peek() == ')' {
        self.i += 1
        return None
      }
      if self.peek() != ':' {
        raise Invalid("unterminated regex flags")
      }
      self.i += 1
    }
  }
  let inner = regex_expression(self, depth + 1)
  if self.peek() != ')' {
    raise Invalid("unclosed regex group")
  }
  self.i += 1
  Some(inner)
}

///|
fn regex_expression(r : RegexReader, depth : Int) -> RegexInfo raise ParseError {
  if depth > 64 {
    raise Invalid("regex nesting exceeds 64")
  }
  let mut any_empty = false
  let mut largest_repeat = 1
  let terms : Array[RegexInfo] = []
  let mut repeated = false
  while r.i < r.cs.length() && r.peek() != ')' {
    if r.has("\\Q") {
      r.i += 2
      while r.i < r.cs.length() && !r.has("\\E") {
        r.nodes += 1
        if r.nodes > 10000 {
          raise Invalid("regex node limit")
        }
        terms.push({ nullable: false, repeats: 1, })
        repeated = false
        r.i += 1
      }
      if r.has("\\E") {
        r.i += 2
      }
      continue
    }
    if r.peek() == '|' {
      any_empty = any_empty || terms.iter().all(x => x.nullable)
      for term in terms {
        largest_repeat = largest_repeat.max(term.repeats)
      }
      terms.clear()
      repeated = false
      r.i += 1
      continue
    }
    let repeat = r.repetition()
    if repeat is Some((minimum, maximum)) {
      if terms.is_empty() || repeated {
        raise Invalid("missing regex repetition argument or nested repetition")
      }
      let previous = terms[terms.length() - 1]
      let factor = if maximum < 0 { minimum } else { maximum }
      let count = previous.repeats * factor
      if count > 1000 {
        raise Invalid("nested regex repetition exceeds 1000")
      }
      terms[terms.length() - 1] = {
        nullable: minimum == 0 || previous.nullable,
        repeats: count,
      }
      if r.peek() == '?' {
        r.i += 1
      }
      repeated = true
      continue
    }
    r.nodes += 1
    if r.nodes > 10000 {
      raise Invalid("regex node limit")
    }
    let atom = match r.peek() {
      '(' => r.group(depth)
      '[' => Some(r.character_class())
      '\\' => {
        let (empty, _) = r.escape(false)
        Some({ nullable: empty, repeats: 1, })
      }
      '^' | '$' => {
        r.i += 1
        Some({ nullable: true, repeats: 1, })
      }
      _ => {
        r.i += 1
        Some({ nullable: false, repeats: 1, })
      }
    }
    if atom is Some(info) {
      terms.push(info)
      repeated = false
    }
  }
  for term in terms {
    largest_repeat = largest_repeat.max(term.repeats)
  }
  {
    nullable: any_empty || terms.iter().all(x => x.nullable),
    repeats: largest_repeat,
  }
}

///|
/// Validate supported RE2 syntax and report whether its fully anchored form matches "".
pub fn regex_matches_empty(pattern : String) -> Bool raise ParseError {
  if pattern.length() > 100000 || !valid_unicode(pattern) {
    raise Invalid("invalid or excessive regex input")
  }
  let r : RegexReader = { cs: pattern.to_array(), i: 0, nodes: 0, }
  let info = regex_expression(r, 0)
  if r.i != r.cs.length() {
    raise Invalid("unexpected regex closing parenthesis")
  }
  info.nullable
}

///|
fn regex_bytes_empty(value : Bytes) -> Bool raise ParseError {
  // Upstream's literal-alternation fast path also accepts arbitrary string bytes.
  let mut literal = true
  let mut branch_empty = true
  let mut any_empty = false
  for b in value {
    if b == 124 {
      any_empty = any_empty || branch_empty
      branch_empty = true
    } else {
      if [92, 46, 43, 42, 63, 40, 41, 91, 93, 123, 125, 94, 36].contains(
          b.to_int(),
        ) {
        literal = false
      }
      branch_empty = false
    }
  }
  if literal {
    return any_empty || branch_empty
  }
  let pattern = @utf8.decode(value) catch {
    _ => raise Invalid("non-literal regex must be valid UTF-8")
  }
  regex_matches_empty(pattern)
}
