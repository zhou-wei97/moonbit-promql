///|
test "selector matchers" {
  assert_eq(
    @promql.parse("up{job=\"api\",status!=\"500\"}"),
    @promql.Selector("up", [("job", "=", "api"), ("status", "!=", "500")]),
  )
}

///|
test "operator precedence" {
  assert_eq(
    @promql.parse("1+2*3"),
    @promql.Binary(
      "+",
      @promql.Number("1"),
      @promql.Binary("*", @promql.Number("2"), @promql.Number("3")),
    ),
  )
}

///|
test "exponent right associative" {
  assert_eq(
    @promql.parse("2^3^4"),
    @promql.Binary(
      "^",
      @promql.Number("2"),
      @promql.Binary("^", @promql.Number("3"), @promql.Number("4")),
    ),
  )
}

///|
test "range and aggregate" {
  assert_eq(
    @promql.parse("sum by (job) (rate(up[5m]))"),
    @promql.Aggregate(
      "sum",
      ["job"],
      false,
      @promql.Call("rate", [@promql.Range(@promql.Selector("up", []), "5m")]),
    ),
  )
}

///|
test "colon metric and decimal" {
  assert_eq(
    @promql.parse("job:up / 2.5"),
    @promql.Binary("/", @promql.Selector("job:up", []), @promql.Number("2.5")),
  )
}

///|
test "syntax invalid unsupported modifiers rejected" {
  for
    s in [
      "up{a=1}", "up[0m]", "up[5q]", "up +", "rate(up)[5m]", "sum by () (up", "up offset",
      "{}",
    ] {
    assert_true(
      try {
        ignore(@promql.parse(s))
        false
      } catch {
        _ => true
      },
    )
  }
}

///|
test "nesting limit" {
  let s = Array::make(80, "(").join("") + "up" + Array::make(80, ")").join("")
  assert_true(
    try {
      ignore(@promql.parse(s))
      false
    } catch {
      _ => true
    },
  )
}
