///|
test "modifiers matching AST and scalar bool" {
  assert_eq(
    @promql.parse("a / ignoring(code) group_left(job) b"),
    @promql.BinaryMatch(
      "/",
      {
        return_bool: false,
        mode: Some("ignoring"),
        labels: ["code"],
        group: Some("group_left"),
        include_labels: ["job"],
      },
      @promql.Selector("a", []),
      @promql.Selector("b", []),
    ),
  )
  assert_eq(@promql.infer_type(@promql.parse("1 < bool 2")), @promql.Scalar)
  for
    s in [
      "a == bool on(job) group_right(zone) b", "a unless on() b", "a atan2 b", "a / ignoring(code,) group_left b",
    ] {
    assert_eq(@promql.infer_type(@promql.parse(s)), @promql.InstantVector)
  }
}

///|
test "modifiers aggregation signatures and postfix grouping" {
  assert_eq(
    @promql.parse("sum(up) by(job,)"),
    @promql.Aggregate("sum", ["job"], false, @promql.Selector("up", [])),
  )
  for
    s in [
      "topk(5, up) by(job)", "bottomk without(instance)(2, up)", "count_values(\"version\", up)",
      "quantile(0.9, up)", "group(up)", "stddev(up)", "label_replace(up,\"dst\",\"$1\",\"src\",\"(.*)\")",
      "label_join(up,\"dst\",\"-\",\"job\",\"instance\")", "histogram_quantile(0.9, rate(bucket[5m]))",
      "clamp(up,0,1)",
    ] {
    assert_eq(@promql.infer_type(@promql.parse(s)), @promql.InstantVector)
  }
}

///|
test "modifiers offsets timestamps compound durations and subqueries" {
  assert_eq(
    @promql.parse("up[1h30m] offset -5m @ start()"),
    @promql.At(
      @promql.Offset(@promql.Range(@promql.Selector("up", []), "1h30m"), "-5m"),
      "start()",
    ),
  )
  assert_eq(
    @promql.parse("rate(up[5m])[1h:30s]"),
    @promql.Subquery(
      @promql.Call("rate", [@promql.Range(@promql.Selector("up", []), "5m")]),
      "1h",
      Some("30s"),
    ),
  )
  for
    s in [
      "up @ 1609746000.5 offset 1w", "up offset 0s @ end()", "rate(up[1h2m3s4ms] offset -1d)",
      "sum_over_time((up + 1)[1h:])", "quantile_over_time(0.5, up[5m])",
    ] {
    assert_eq(@promql.infer_type(@promql.parse(s)), @promql.InstantVector)
  }
  assert_eq(
    @promql.infer_type(@promql.parse("(up + 1)[1h:1m] @ end()")),
    @promql.RangeVector,
  )
}

///|
test "modifiers reject invalid typing placement and duration" {
  for
    s in [
      "1 < 2", "up + bool up", "up + on(job) 1", "up or on(job) group_left up", "up + on(job) group_left(job) up",
      "up + group_left up", "topk(up, up)", "count_values(1, up)", "sum(1)", "sum by(job)(up) without(code)",
      "up offset 1h offset 2h", "sum(up) offset 1h", "up @ start() @ end()", "up[1m1h]",
      "up[1h1h]", "up[0h0m]", "up[999999999999999999999d]", "up[1h:0m]", "up[1h][1d:]",
      "1[1h:]", "up offset 5m[1h]", "clamp(up,up,1)", "label_replace(up,1,2,3,4)",
      "up // ignored", "(up offset 1h) offset 2h", "(up @ 1) @ 2", "up + on(job) on",
    ] {
    assert_true(
      try {
        ignore(@promql.infer_type(@promql.parse(s)))
        false
      } catch {
        _ => true
      },
      msg=s,
    )
  }
}
