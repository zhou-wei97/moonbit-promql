///|
pub suberror ParseError {
  Invalid(String)
  Located(String, SourceSpan)
} derive(Debug)

///|
/// Offsets and columns count Unicode scalar values, starting at zero and one respectively.
pub(all) struct SourceSpan {
  start : Int
  end : Int
  line : Int
  column : Int
} derive(Debug, Eq, ToJson)

///|
pub(all) struct ParserOptions {
  experimental_functions : Bool
  duration_expressions : Bool
  extended_ranges : Bool
  fill_modifiers : Bool
} derive(Debug, Eq, ToJson)

///|
pub fn ParserOptions::new(
  experimental_functions? : Bool = false,
  duration_expressions? : Bool = false,
  extended_ranges? : Bool = false,
  fill_modifiers? : Bool = false,
) -> ParserOptions {
  {
    experimental_functions,
    duration_expressions,
    extended_ranges,
    fill_modifiers,
  }
}

///|
priv struct Token {
  text : String
  quoted : Bool
  kind : String
  raw_bytes : Bytes?
  start : Int
  end : Int
}

///|
priv struct Cursor {
  tokens : Array[Token]
  mut pos : Int
  source : Array[Char]
  options : ParserOptions
}

///|
fn source_span(cs : Array[Char], start : Int, end : Int) -> SourceSpan {
  let mut line = 1
  let mut column = 1
  for i in 0..<start {
    if cs[i] == '\n' {
      line += 1
      column = 1
    } else {
      column += 1
    }
  }
  { start, end, line, column, }
}

///|
fn Cursor::span(self : Cursor) -> SourceSpan {
  if self.pos < self.tokens.length() {
    let t = self.tokens[self.pos]
    source_span(self.source, t.start, t.end)
  } else {
    source_span(self.source, self.source.length(), self.source.length())
  }
}

///|
fn keyword(s : String) -> Bool {
  [
    "and", "or", "unless", "atan2", "bool", "on", "ignoring", "group_left", "group_right",
    "sum", "avg", "min", "max", "count", "group", "stddev", "stdvar", "topk", "bottomk",
    "quantile", "count_values", "by", "without", "offset", "start", "end", "limitk",
    "limit_ratio", "step", "range", "max_of", "min_of", "anchored", "smoothed", "fill",
    "fill_left", "fill_right",
  ].contains(s)
}

///|
fn Cursor::peek(self : Cursor) -> String {
  if self.pos < self.tokens.length() {
    let t = self.tokens[self.pos]
    if t.quoted {
      "<string>"
    } else if t.kind == "word" && keyword(t.text.to_lower()) {
      t.text.to_lower()
    } else {
      t.text
    }
  } else {
    "<eof>"
  }
}

///|
fn Cursor::take(self : Cursor) -> Token raise ParseError {
  if self.pos >= self.tokens.length() {
    raise Located("unexpected end", self.span())
  }
  let t = self.tokens[self.pos]
  self.pos += 1
  t
}

///|
fn Cursor::eat(self : Cursor, text : String) -> Bool {
  if self.peek() == text {
    self.pos += 1
    true
  } else {
    false
  }
}

///|
fn Cursor::need(self : Cursor, text : String) -> Unit raise ParseError {
  if !self.eat(text) {
    raise Located("expected " + text + ", got " + self.peek(), self.span())
  }
}

///|
fn ascii_alpha(c : Char) -> Bool {
  (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c == '_'
}

///|
fn digit(c : Char) -> Bool {
  c >= '0' && c <= '9'
}

///|
fn word(c : Char) -> Bool {
  ascii_alpha(c) || digit(c)
}

///|
fn slice_chars(cs : Array[Char], start : Int, end : Int) -> String {
  let out = StringBuilder()
  for i in start..<end {
    out.write_char(cs[i])
  }
  out.to_string()
}

///|
fn hex_digit(c : Char) -> Int {
  if digit(c) {
    c.to_int() - 48
  } else if c >= 'a' && c <= 'f' {
    c.to_int() - 87
  } else if c >= 'A' && c <= 'F' {
    c.to_int() - 55
  } else {
    -1
  }
}

///|
fn Token::bytes(self : Token) -> Bytes {
  self.raw_bytes.unwrap_or_else(() => @utf8.encode(self.text))
}

///|
fn lex(source : String, options : ParserOptions) -> Cursor raise ParseError {
  if source.length() > 100000 {
    raise Invalid("source limit")
  }
  let cs = source.to_array()
  let ts : Array[Token] = []
  let mut i = 0
  let mut brackets = 0
  let mut token_start = 0
  try {
    while i < cs.length() {
      let c = cs[i]
      if c == ' ' || c == '\t' || c == '\r' || c == '\n' {
        i += 1
        continue
      }
      if c == '#' {
        while i < cs.length() && cs[i] != '\n' && cs[i] != '\r' {
          i += 1
        }
        continue
      }
      let start = i
      token_start = start
      if c == '"' || c == '\'' || c == '\u0060' {
        let quote = c
        let out = @buffer.Buffer()
        i += 1
        let mut closed = false
        while i < cs.length() {
          let ch = cs[i]
          i += 1
          if ch == quote {
            closed = true
            break
          }
          if ch == '\n' && quote != '\u0060' {
            raise Invalid("newline in quoted string")
          }
          if ch != '\\' || quote == '\u0060' {
            out.write_char_utf8(ch)
            continue
          }
          if i >= cs.length() {
            raise Invalid("truncated escape")
          }
          let e = cs[i]
          i += 1
          let simple : Int? = match e {
            'a' => Some(7)
            'b' => Some(8)
            'f' => Some(12)
            'n' => Some(10)
            'r' => Some(13)
            't' => Some(9)
            'v' => Some(11)
            '\\' => Some(92)
            _ => if e == quote { Some(e.to_int()) } else { None }
          }
          if simple is Some(n) {
            out.write_byte(n.to_byte())
            continue
          }
          let octal = e >= '0' && e <= '7'
          let count = if octal {
            2
          } else {
            match e {
              'x' => 2
              'u' => 4
              'U' => 8
              _ => raise Invalid("unknown string escape")
            }
          }
          let mut number = if octal { e.to_int() - 48 } else { 0 }
          for _ in 0..<count {
            if i >= cs.length() {
              raise Invalid("truncated numeric escape")
            }
            let d = if octal {
              if cs[i] >= '0' && cs[i] <= '7' {
                cs[i].to_int() - 48
              } else {
                -1
              }
            } else {
              hex_digit(cs[i])
            }
            let base = if octal { 8 } else { 16 }
            if d < 0 || number > (1114111 - d) / base {
              raise Invalid("invalid numeric escape")
            }
            number = number * base + d
            i += 1
          }
          if octal || e == 'x' {
            if number > 255 {
              raise Invalid("byte escape exceeds 255")
            }
            out.write_byte(number.to_byte())
          } else {
            if number > 1114111 || (number >= 55296 && number <= 57343) {
              raise Invalid("invalid Unicode scalar escape")
            }
            out.write_char_utf8(number.unsafe_to_char())
          }
        }
        if !closed {
          raise Invalid("unterminated string")
        }
        let data = out.to_bytes()
        let decoded = Some(@utf8.decode(data)) catch { _ => None }
        ts.push({
          text: decoded.unwrap_or(""),
          quoted: true,
          kind: "string",
          raw_bytes: if decoded == None {
            Some(data)
          } else {
            None
          },
          start,
          end: i,
        })
        continue
      }
      if digit(c) || (c == '.' && i + 1 < cs.length() && digit(cs[i + 1])) {
        let hexadecimal = c == '0' &&
          i + 1 < cs.length() &&
          (cs[i + 1] == 'x' || cs[i + 1] == 'X')
        i += 1
        while i < cs.length() {
          let ch = cs[i]
          if word(ch) || ch == '.' {
            i += 1
          } else if !hexadecimal &&
            (ch == '+' || ch == '-') &&
            (cs[i - 1] == 'e' || cs[i - 1] == 'E') {
            i += 1
          } else {
            break
          }
        }
        let text = slice_chars(cs, start, i)
        let duration = !hexadecimal &&
          text
          .iter()
          .any(x => {
            x == 'm' || x == 's' || x == 'h' || x == 'd' || x == 'w' || x == 'y'
          })
        ignore(number_value(text))
        ts.push({
          text,
          quoted: false,
          kind: if duration {
            "duration"
          } else {
            "number"
          },
          raw_bytes: None,
          start,
          end: i,
        })
        continue
      }
      if ascii_alpha(c) || (c == ':' && brackets == 0) {
        i += 1
        while i < cs.length() &&
              (word(cs[i]) || (cs[i] == ':' && brackets == 0)) {
          i += 1
        }
        let text = slice_chars(cs, start, i)
        let kind = if text.to_lower() == "inf" || text.to_lower() == "nan" {
          "number"
        } else {
          "word"
        }
        ts.push({ text, quoted: false, kind, raw_bytes: None, start, end: i, })
        continue
      }
      if ![
          '+', '-', '*', '/', '%', '^', '>', '<', '=', '!', '~', '(', ')', '{', '}',
          '[', ']', ',', ':', '@',
        ].contains(c) {
        raise Invalid("unexpected character: " + c.to_string())
      }
      if c == '[' {
        brackets += 1
      } else if c == ']' {
        brackets -= 1
      }
      i += 1
      let mut text = c.to_string()
      if i < cs.length() &&
        ["==", "!=", ">=", "<=", "=~", "!~"].contains(text + cs[i].to_string()) {
        text += cs[i].to_string()
        i += 1
      }
      ts.push({
        text,
        quoted: false,
        kind: "symbol",
        raw_bytes: None,
        start,
        end: i,
      })
    }
  } catch {
    Located(message, span) => raise Located(message, span)
    Invalid(message) =>
      raise Located(
        message,
        source_span(
          cs,
          token_start,
          if i > token_start {
            i
          } else {
            (i + 1).min(cs.length())
          },
        ),
      )
  }
  { tokens: ts, pos: 0, source: cs, options, }
}
