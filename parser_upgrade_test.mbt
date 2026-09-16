///|
fn rejected(
  source : String,
  options? : @promql.ParserOptions = @promql.ParserOptions::new(),
) -> Bool {
  try {
    ignore(@promql.parse(source, options~))
    false
  } catch {
    _ => true
  }
}

///|
test "numeric literal families and float boundaries" {
  for
    (source, value) in [
      ("012", 10.0),
      ("08", 8.0),
      ("0x_FF", 255.0),
      ("1_2.5e1", 125.0),
      ("1h30m", 5400.0),
      ("1e-9999", 0.0),
    ] {
    assert_eq(@promql.number_value(source), value)
    ignore(@promql.parse(source))
  }
  for source in ["0x8000000000000000", "1e309", "0b10", "0x1p2", "1__2", "1_2m"] {
    assert_true(rejected(source))
  }
}

///|
test "quoted strings retain bytes BOM and Unicode scalars" {
  assert_eq(@promql.parse("\"\\xff\""), @promql.StringBytes(b"\xff"))
  assert_eq(@promql.parse("\"\\uFEFF\""), @promql.StringLiteral("\uFEFF"))
  assert_eq(@promql.parse("\"\\U0001f600\""), @promql.StringLiteral("😀"))
  assert_eq(@promql.parse("`a\nb`"), @promql.StringLiteral("a\nb"))
  assert_eq(@promql.parse("'\\141\\x62\\u0063'"), @promql.StringLiteral("abc"))
  for
    source in [
      "\"\\400\"", "\"\\uD800\"", "\"\\U00110000\"", "\"a\nb\"", "\"\\q\"",
    ] {
    assert_true(rejected(source))
  }
}

///|
test "selectors require restrictive matchers and retain quoted names" {
  for
    source in [
      "{}", "{a=\"\"}", "{a!=\"x\"}", "{a=~\".*\"}", "{a!~\".+\"}", "up{__name__=\"other\"}",
      "{a=~\"(?=x)\"}",
    ] {
    assert_true(rejected(source))
  }
  for
    source in [
      "{a!=\"\"}", "{a=~\".+\"}", "{a!~\".*\"}", "{a=~\"\\xff\"}", "{a=~\"|\\xff\",b=\"x\"}",
      "{\"指标.名字\",\"标签.名\"=\"值\"}",
    ] {
    ignore(@promql.parse(source))
  }
  assert_true(rejected("up{a=~\"\\xff*\"}"))
}

///|
test "RE2 empty matching considers assertions alternation and literal quoting" {
  for
    (pattern, empty) in [
      ("", true),
      (".*", true),
      (".+", false),
      ("\\b", false),
      ("\\B", true),
      ("\\b?", true),
      ("^$", true),
      ("(?:a|)", true),
      ("\\Qab\\E*", false),
      ("a(?i)*", true),
      ("[[:alpha:]]*", true),
      ("\\p{Greek}", false),
    ] {
    assert_eq(@promql.regex_matches_empty(pattern), empty)
  }
  for
    pattern in [
      "\\Q\\E*", "(?=a)", "(a)\\1", "[z-a]", "a{1001}", "(a{100}){11}", "a**", "\\p{NotReal}",
    ] {
    assert_true(
      try {
        ignore(@promql.regex_matches_empty(pattern))
        false
      } catch {
        _ => true
      },
    )
  }
}

///|
test "function catalog covers pinned ninety signatures" {
  let signatures = @promql.function_signatures()
  assert_eq(signatures.length(), 90)
  // Each call receives a fresh catalog; consumers cannot corrupt later checking.
  signatures[0].arguments.clear()
  ignore(@promql.parse("abs(up)"))
  for
    source in [
      "day_of_year()", "first_over_time(up[5m])", "histogram_fraction(0,1,up)", "label_join(up,\"dst\",\"-\")",
    ] {
    ignore(@promql.parse(source))
  }
  for
    source in [
      "abs()", "histogram_fraction(up,1,up)", "day_of_year(1)", "ABS(up)",
    ] {
    assert_true(rejected(source))
  }
}

///|
test "four feature flags are independent" {
  let functions = @promql.ParserOptions::new(experimental_functions=true)
  let durations = @promql.ParserOptions::new(duration_expressions=true)
  let ranges = @promql.ParserOptions::new(extended_ranges=true)
  let fills = @promql.ParserOptions::new(fill_modifiers=true)
  ignore(@promql.parse("step()", options=functions))
  ignore(@promql.parse("up[step()]", options=durations))
  ignore(@promql.parse("up anchored", options=ranges))
  ignore(@promql.parse("up + fill(0) other", options=fills))
  assert_true(rejected("step()", options=durations))
  assert_true(rejected("up[step()]", options=functions))
  assert_true(rejected("up anchored", options=fills))
  assert_true(rejected("up + fill(0) other", options=ranges))
}

///|
test "info's label selector exception is local to the second argument" {
  let options = @promql.ParserOptions::new(experimental_functions=true)
  for source in ["info(up,{})", "info(up,{a=\"\"})", "info(up,{} offset 1s)"] {
    ignore(@promql.parse(source, options~))
  }
  for
    source in [
      "info({},up)", "info(up,up)", "info(up,({}))", "info(up,{a=~\"(\"})", "info(up,rate(up[5m]))",
    ] {
    assert_true(rejected(source, options~))
  }
}

///|
test "duration expressions retain operator structure" {
  let options = @promql.ParserOptions::new(duration_expressions=true)
  assert_eq(
    @promql.parse("up[step()*2]", options~),
    @promql.RangeExpression(
      @promql.Selector("up", []),
      @promql.DurationBinary(
        "*",
        @promql.DurationCall("step", []),
        @promql.DurationValue("2"),
      ),
    ),
  )
  for
    source in [
      "up[1-2]", "up[1/(1-1)]", "up[min_of(5m,step())]", "up offset -(step()+1)",
    ] {
    ignore(@promql.parse(source, options~))
  }
  for source in ["up[1/0]", "up[2%0]", "up[0]", "up[-1]", "up[NaN]", "up[Inf]"] {
    assert_true(rejected(source, options~))
  }
}

///|
test "time conversion preserves units and pinned integer boundaries" {
  assert_eq(@promql.duration_value("1s1ms"), 1.001)
  assert_eq(@promql.duration_value("1e-10"), 0.0)
  assert_eq(@promql.timestamp_value("1.001"), 1001L)
  assert_eq(@promql.timestamp_value("-1.001"), -1001L)
  assert_eq(@promql.timestamp_value("0.0005"), 1L)
  assert_eq(@promql.timestamp_value("-0.0005"), -1L)
  assert_eq(@promql.timestamp_value("1e16"), -9223372036854775808L)
  assert_eq(@promql.duration_value("NaN"), -9223372036.854776)
  ignore(@promql.parse("up offset 0s offset 1s"))
  assert_true(rejected("up offset 1s offset 0s"))
}

///|
test "parentheses preserve range modifier restrictions" {
  assert_eq(
    @promql.parse("(up)"),
    @promql.Parenthesized(@promql.Selector("up", [])),
  )
  for source in ["(up)[5m]", "(up) offset 1s", "(up @ 1) @ 2"] {
    assert_true(rejected(source))
  }
  ignore(@promql.parse("(up)[5m:]"))
  ignore(@promql.parse("up + on() 1"))
  assert_true(rejected("up + on(job) 1"))
}

///|
test "position errors use scalar offsets and one-based lines" {
  try {
    ignore(@promql.parse("\"😀\"\n?"))
    fail("expected error")
  } catch {
    @promql.Located(_, span) => {
      assert_eq(span.start, 4)
      assert_eq(span.line, 2)
      assert_eq(span.column, 1)
    }
    _ => fail("expected located error")
  }
  try {
    ignore(@promql.parse("up +"))
    fail("expected error")
  } catch {
    @promql.Located(_, span) => assert_eq(span.start, 4)
    _ => fail("expected located error")
  }
}

///|
test "extended modifiers and binary fills obey feature and type rules" {
  let options = @promql.ParserOptions::new(
    extended_ranges=true,
    fill_modifiers=true,
  )
  for
    source in [
      "up anchored anchored", "up smoothed[5m]", "up + fill_left(-Inf) fill_right(NaN) other",
    ] {
    ignore(@promql.parse(source, options~))
  }
  for
    source in [
      "up anchored smoothed", "up[5m:] anchored", "up or fill(0) other", "1 + fill(0) up",
      "up + fill(0) fill_left(1) other",
    ] {
    assert_true(rejected(source, options~))
  }
}
