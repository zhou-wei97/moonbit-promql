///|
fn num(s : String) -> Json raise @lib.ParseError {
  @lib.number_value(s).to_string().to_json()
}

///|
fn duration(e : @lib.DurationExpr) -> Json raise @lib.ParseError {
  match e {
    DurationValue(s) => ["number", num(s)]
    DurationUnary(op, v) => ["duration", op, Json::null(), duration(v)]
    DurationBinary(op, a, b) => ["duration", op, duration(a), duration(b)]
    DurationCall(name, args) =>
      [
        "duration",
        name,
        if args.is_empty() {
          Json::null()
        } else {
          duration(args[0])
        },
        if args.is_empty() {
          Json::null()
        } else {
          duration(args[1])
        },
      ]
  }
}

///|
fn literal_duration(s : String) -> Json raise @lib.ParseError {
  ["number", @lib.duration_value(s).to_string()]
}

///|
fn matching_json(
  m : @lib.VectorMatching,
  left : String?,
  right : String?,
) -> Json raise @lib.ParseError {
  {
    "mode": m.mode.unwrap_or(""),
    "labels": m.labels.to_json(),
    "group": m.group.unwrap_or(""),
    "include": m.include_labels.to_json(),
    "left": match left {
      Some(s) => num(s)
      None => Json::null()
    },
    "right": match right {
      Some(s) => num(s)
      None => Json::null()
    },
  }
}

///|
fn ast_json(e : @lib.Expr) -> Json raise @lib.ParseError {
  match e {
    Number(s) => ["number", num(s)]
    StringLiteral(s) => ["string", @base64.encode(@utf8.encode(s))]
    StringBytes(b) => ["string", @base64.encode(b)]
    Parenthesized(v) => ast_json(v)
    Unary(op, v) => ["unary", op, ast_json(v)]
    Binary(op, a, b) =>
      [
        "binary",
        op,
        ast_json(a),
        ast_json(b),
        false,
        matching_json(
          {
            return_bool: false,
            mode: None,
            labels: [],
            group: None,
            include_labels: [],
          },
          None,
          None,
        ),
      ]
    BinaryMatch(op, m, a, b) =>
      [
        "binary",
        op,
        ast_json(a),
        ast_json(b),
        m.return_bool,
        matching_json(m, None, None),
      ]
    BinaryFill(op, m, l, r, a, b) =>
      [
        "binary",
        op,
        ast_json(a),
        ast_json(b),
        m.return_bool,
        matching_json(m, l, r),
      ]
    Call(name, args) => ["call", name, args.map(ast_json).to_json()]
    Aggregate(name, labels, without, v) =>
      ["aggregate", name, labels.to_json(), without, Json::null(), ast_json(v)]
    AggregateParam(name, labels, without, p, v) =>
      ["aggregate", name, labels.to_json(), without, ast_json(p), ast_json(v)]
    Selector(name, labels) =>
      selector_json(
        name,
        labels.map(t => (@utf8.encode(t.0), t.1, @utf8.encode(t.2))),
      )
    SelectorBytes(name, labels) => selector_json(name, labels)
    Range(v, s) => ["range", ast_json(v), literal_duration(s)]
    RangeExpression(v, d) => ["range", ast_json(v), duration(d)]
    Subquery(v, r, s) =>
      [
        "subquery",
        ast_json(v),
        literal_duration(r),
        literal_duration(s.unwrap_or("0")),
        literal_duration("0"),
        Json::null(),
        "",
        false,
        false,
      ]
    SubqueryExpression(v, r, s) =>
      [
        "subquery",
        ast_json(v),
        duration(r),
        match s {
          Some(d) => duration(d)
          None => literal_duration("0")
        },
        literal_duration("0"),
        Json::null(),
        "",
        false,
        false,
      ]
    Offset(v, s) => temporal_json(ast_json(v), "offset", literal_duration(s))
    OffsetExpression(v, d) => temporal_json(ast_json(v), "offset", duration(d))
    At(v, s) =>
      temporal_json(
        ast_json(v),
        "at",
        if s == "start()" || s == "end()" {
          s.to_json()
        } else {
          @lib.timestamp_value(s).to_string().to_json()
        },
      )
    ExtendedRange(v, s) => temporal_json(ast_json(v), s, true)
  }
}

///|
fn selector_json(
  name : String,
  labels : Array[(Bytes, String, Bytes)],
) -> Json raise @lib.ParseError {
  let ms : Array[Json] = labels.map(t => {
    [@base64.encode(t.0), t.1, @base64.encode(t.2)]
  })
  if !name.is_empty() {
    ms.push([
      @base64.encode(b"__name__"),
      "=",
      @base64.encode(@utf8.encode(name)),
    ])
  }
  [
    "selector",
    name,
    ms.to_json(),
    literal_duration("0"),
    Json::null(),
    "",
    false,
    false,
  ]
}

///|
fn temporal_json(ast : Json, field : String, value : Json) -> Json {
  if ast is Array(items) {
    if items[0] == Json::string("range") {
      items[1] = temporal_json(items[1], field, value)
    } else {
      let base = if items[0] == Json::string("selector") { 3 } else { 4 }
      match field {
        "offset" => items[base] = value
        "at" =>
          if value == Json::string("start()") || value == Json::string("end()") {
            items[base + 2] = value
          } else {
            items[base + 1] = value
          }
        "anchored" => items[base + 3] = value
        "smoothed" => items[base + 4] = value
        _ => ()
      }
    }
  }
  ast
}

///|
/// Structured inspector; the argument is a JSON object with query and optional feature flags.
pub fn inspect_json(input : String) -> String {
  try {
    let request = @json.parse(input)
    if request is { "metadata": true, .. } {
      return @lib.function_signatures().to_json().stringify()
    }
    if request is { "regex": String(pattern), .. } {
      let empty = @lib.regex_matches_empty(pattern)
      return Json::object({ "accepted": true, "matchesEmpty": empty }).stringify()
    }
    let query = match request {
      { "query": String(s), .. } => s
      _ =>
        return Json::object({
          "accepted": false,
          "error": "query string required",
        }).stringify()
    }
    let all = request is { "experimental": true, .. }
    let options = @lib.ParserOptions::new(
      experimental_functions=all ||
        request is { "experimental_functions": true, .. },
      duration_expressions=all ||
        request is { "duration_expressions": true, .. },
      extended_ranges=all || request is { "extended_ranges": true, .. },
      fill_modifiers=all || request is { "fill_modifiers": true, .. },
    )
    let ast = @lib.parse(query, options~)
    let ty = match @lib.infer_type(ast, options~) {
      Scalar => "scalar"
      InstantVector => "vector"
      RangeVector => "matrix"
      StringValue => "string"
    }
    Json::object({ "accepted": true, "type": ty, "ast": ast_json(ast) }).stringify()
  } catch {
    @lib.Located(message, span) =>
      Json::object({
        "accepted": false,
        "error": message,
        "span": span.to_json(),
      }).stringify()
    e =>
      Json::object({ "accepted": false, "error": Repr(e).to_string() }).stringify()
  }
}
