///|
// Two expression occurrences from Prometheus's Apache-2.0 lint fixture. Rule
// labels/group names are deliberately outside the expression library boundary.
fn main raise {
  let public_query = "job:request_latency_seconds:mean5m{job=\"myjob\"} > 0.5"
  for id in ["HighRequestLatency#1", "HighRequestLatency#2"] {
    let ast = @promql.parse(public_query)
    let inferred = @promql.infer_type(ast)
    if inferred != @promql.InstantVector {
      abort("unexpected public query type")
    }
    println("\{id}: instant-vector; expression accepted, rule validity unknown")
  }
  // Original negative example: a vector aggregation cannot take a scalar.
  let bad = try {
    ignore(@promql.infer_type(@promql.parse("sum(1)")))
    false
  } catch {
    _ => true
  }
  if !bad {
    abort("type mismatch was accepted")
  }
  println("synthetic-type-error: rejected")
  println(
    "scope: no YAML/rule metadata, duplicate-rule detection or evaluation",
  )
}
