///|
fn r(id : String, record : String?, expr : String) -> @rules.Rule {
  { id, record, expr, context: "", }
}

///|
test "alert generated series remain uncertain despite lacking explicit record" {
  for metric in ["ALERTS", "ALERTS_FOR_STATE"] {
    let before = [
      r("alert", None, "up == 0"),
      r(
        "count",
        Some("foo:active:count"),
        "count(" + metric + "{alertname=\"Foo\"})",
      ),
      r("notify", None, "foo:active:count > 0"),
    ]
    let after = [r("alert", None, "up < 1"), before[1], before[2]]
    let report = @rules.compare(before, after)
    assert_eq(report.affected, ["alert"])
    assert_eq(report.uncertain, ["count", "notify"])
    assert_eq(report.after.unresolved.length(), 1)
  }
}

///|
test "old new union retains removed and renamed producer dependencies" {
  let before = [
    r("a", Some("base"), "sum(raw)"),
    r("b", Some("middle"), "base + 1"),
    r("c", None, "middle > 2"),
  ]
  let after = [
    r("a", Some("renamed"), "sum(raw)"),
    r("b", Some("middle"), "base + 1"),
    r("c", None, "middle > 2"),
  ]
  let report = @rules.compare(before, after)
  assert_eq(report.changed, ["a"])
  assert_eq(report.affected, ["a", "b", "c"])
  assert_eq(report.uncertain, [])
  assert_eq(@rules.compare(before, [before[1], before[2]]).affected, [
    "a", "b", "c",
  ])
  assert_eq(@rules.compare(before, before).changed, [])
}

///|
test "unknown metric selectors propagate uncertainty without false empty graph" {
  let before = [
    r("a", Some("base"), "raw"),
    r("b", Some("wide"), "sum({__name__=~\"base|other\"})"),
    r("c", None, "wide > 0"),
  ]
  let after = [r("a", Some("base"), "raw + 1"), before[1], before[2]]
  let report = @rules.compare(before, after)
  assert_eq(report.affected, ["a"])
  assert_eq(report.uncertain, ["b", "c"])
  assert_eq(report.after.unresolved.length(), 1)
  assert_eq(@rules.compare(before, before).uncertain, [])
}

///|
test "duplicate producers and cycles are candidates not validity claims" {
  let rules = [
    r("one", Some("a"), "b"),
    r("two", Some("a"), "raw"),
    r("back", Some("b"), "a"),
  ]
  let graph = @rules.analyze(rules)
  assert_eq(graph.edges.length(), 3)
  assert_eq(graph.edges.filter(e => e.ambiguous).length(), 2)
  assert_eq(graph.cyclic_rules, ["one", "back"])
  assert_eq(graph.external.length(), 1)
}

///|
test "selectors in ranges functions matching and label name rewrites are visited" {
  let graph = @rules.analyze([
    r("a", Some("a"), "raw"),
    r("b", Some("b"), "raw"),
    r(
      "out",
      None,
      "sum(rate(a[5m])) + on() group_left label_replace(b, \"__name__\", \"renamed\", \"job\", \".*\")",
    ),
    r("exact", None, "{__name__=\"a\"}"),
  ])
  assert_eq(graph.edges.length(), 3)
  assert_eq(graph.unresolved.length(), 0)
}

///|
test "invalid type duplicate identity resource limits fail atomically" {
  for
    rules in [
      [r("x", None, "sum(1)")],
      [r("x", None, "raw[5m]")],
      [r("x", None, "raw"), r("x", None, "other")],
      Array::makei(513, i => r(i.to_string(), None, "raw")),
    ] {
    assert_true(
      try {
        ignore(@rules.analyze(rules))
        false
      } catch {
        _ => true
      },
    )
  }
  let before = [r("x", Some("a"), "raw")]
  let after = [{ ..before[0], context: "labels changed", }]
  assert_eq(@rules.compare(before, after).changed, ["x"])
}
