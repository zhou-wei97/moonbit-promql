///|
fn read_rules(text : String) -> Array[@ruleslib.Rule] raise {
  if text.length() > 8388608 {
    raise Failure("Rule JSON exceeds 8 Mi UTF-16 code units")
  }
  let items = match @json.parse(text) {
    Array(items) => items
    _ => raise Failure("Rules must be a JSON array")
  }
  if items.length() > 512 {
    raise Failure("At most 512 rules per snapshot")
  }
  items.map(item => {
    let (id, record, expr, context) = match item {
      {
        "id": String(id),
        "record": record,
        "expr": String(expr),
        "context": String(context),
        ..
      } => (id, record, expr, context)
      _ => raise Failure("Each rule requires id, record, expr and context")
    }
    let record = match record {
      Null => None
      String(name) => Some(name)
      _ => raise Failure("record must be a string or null")
    }
    @ruleslib.Rule::{ id, record, expr, context, }
  })
}

///|
pub fn analyze_json(text : String) -> String {
  try {
    let result = @ruleslib.analyze(read_rules(text))
    Json::object({ "ok": true, "result": result.to_json() }).stringify()
  } catch {
    error =>
      Json::object({ "ok": false, "error": Repr(error).to_string() }).stringify()
  }
}

///|
pub fn compare_json(before : String, after : String) -> String {
  try {
    let result = @ruleslib.compare(read_rules(before), read_rules(after))
    Json::object({ "ok": true, "result": result.to_json() }).stringify()
  } catch {
    error =>
      Json::object({ "ok": false, "error": Repr(error).to_string() }).stringify()
  }
}

///|
fn main {
  ()
}
