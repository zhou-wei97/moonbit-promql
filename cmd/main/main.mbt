///|
fn run(input : String) -> String {
  Repr(@lib.parse(input)).to_string() catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
fn main {
  println(
    run(
      "sum by (job) (rate(http_requests_total{method=\"GET\",status!=\"500\"}[5m])) / 2",
    ),
  )
}
