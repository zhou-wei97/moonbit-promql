///|
fn main raise {
  let before : Array[@rules.Rule] = [
    {
      id: "record",
      record: Some("service:requests"),
      expr: "sum(rate(requests_total[5m]))",
      context: "",
    },
    {
      id: "alert",
      record: None,
      expr: "service:requests > 100",
      context: "severity=warning",
    },
  ]
  let after : Array[@rules.Rule] = [
    { ..before[0], record: Some("service:requests_v2"), },
    before[1],
  ]
  let impact = @rules.compare(before, after)
  assert_eq(impact.changed, ["record"])
  assert_eq(impact.affected, ["record", "alert"])
  assert_eq(impact.uncertain, [])
  println(impact.affected.to_json().stringify())
}
