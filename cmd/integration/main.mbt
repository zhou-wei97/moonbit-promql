///|
// Original deterministic example data, not production metrics. Upstream time
// units are milliseconds and range selection is left-open, right-closed.
fn fixture() -> @eval.EvalContext {
  @eval.EvalContext::new(
    [
      @model.Series::new(
        "temperature",
        @model.LabelSet::new([("job", "@mail")]),
        [
          { timestamp: 0.0, value: 1.0, },
          { timestamp: 60000.0, value: 2.0, },
          { timestamp: 120000.0, value: 3.0, },
        ],
      ),
    ],
    120000.0,
  )
}

///|
fn outcome(value : @model.Value) -> Json {
  let numbers : Array[Double] = match value {
    Scalar(n) => [n]
    Instant(points) => points.map(p => p.value)
    Range(_) | StringValue(_) => []
  }
  {
    "kind": value.kind(),
    "numbers": numbers.to_json(),
    "text": value.to_string(),
  }
}

///|
pub fn inspect_query(source : String) -> String {
  let static_result : Json = {
    "ok": true,
    "type": Repr(@syntax.infer_type(@syntax.parse(source))).to_string(),
  } catch {
    e => { "ok": false, "error": Repr(e).to_string() }
  }
  let upstream_parse : Json = try {
    ignore(@upstream.parse(source[:]))
    { "ok": true }
  } catch {
    e => { "ok": false, "error": e.to_string() }
  }
  let direct : Json = {
    "ok": true,
    "value": outcome(@upstream.query(source[:], fixture())),
  } catch {
    e => { "ok": false, "error": e.to_string() }
  }
  let prepared : Json = try {
    let query = @bridge.prepare(source)
    let execution : Json = {
      "ok": true,
      "value": outcome(query.evaluate(fixture())),
    } catch {
      e => { "ok": false, "error": e.to_string() }
    }
    { "ok": true, "execution": execution }
  } catch {
    @bridge.StaticError(s) => { "ok": false, "stage": "static", "error": s }
    @bridge.RuntimeSyntax(s) =>
      { "ok": false, "stage": "runtime-syntax", "error": s }
    @bridge.Unsupported(s) =>
      { "ok": false, "stage": "unsupported", "error": s }
  }
  let report : Json = {
    "source": source,
    "static": static_result,
    "upstreamParse": upstream_parse,
    "direct": direct,
    "prepared": prepared,
  }
  report.stringify()
}

///|
fn main {

}
