///|
test "prepared query executes actual upstream data with its range semantics" {
  let series = @model.Series::new("temperature", @model.LabelSet::empty(), [
    { timestamp: 0.0, value: 1.0, },
    { timestamp: 60000.0, value: 2.0, },
    { timestamp: 120000.0, value: 3.0, },
  ])
  let context = @eval.EvalContext::new([series], 120000.0)
  let p = prepare("avg_over_time(temperature[2m])")
  assert_eq(p.query_type(), @syntax.InstantVector)
  assert_eq(
    p.evaluate(context),
    @upstream.query("avg_over_time(temperature[2m])", context),
  )
  match p.evaluate(context) {
    Instant(points) => assert_eq(points[0].value, 2.5)
    _ => fail("expected upstream instant vector")
  }
}

///|
test "local type and upstream grammar failures remain distinct" {
  assert_true(
    try {
      ignore(prepare("sum(1)"))
      false
    } catch {
      StaticError(_) => true
      _ => false
    },
  )
  ignore(@syntax.parse("rate(counter[5m])[30m:1m]"))
  assert_true(
    try {
      ignore(prepare("rate(counter[5m])[30m:1m]"))
      false
    } catch {
      RuntimeSyntax(_) => true
      _ => false
    },
  )
}

///|
test "nested at rejected but at character in label text is not a timestamp" {
  for source in ["up @ 1", "sum(rate(counter[2m] @ 60000))"] {
    assert_true(
      try {
        ignore(prepare(source))
        false
      } catch {
        Unsupported(_) => true
        _ => false
      },
    )
  }
  ignore(prepare("up{job=\"@mail\"}"))
}

///|
test "runtime failure is not hidden by successful static preparation" {
  let prepared = prepare("absent(up)")
  assert_true(
    try {
      ignore(prepared.evaluate(@eval.EvalContext::new([], 0.0)))
      false
    } catch {
      _ => true
    },
  )
}
