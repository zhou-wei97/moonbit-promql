///|
pub suberror RuleError {
  Invalid(String)
} derive(Debug)

///|
/// Host-normalized rule. context must include labels, group options and all
/// other semantics the host wants change tracking to cover. id is host-stable.
pub(all) struct Rule {
  id : String
  record : String?
  expr : String
  context : String
} derive(Eq, ToJson, FromJson, Debug)

///|
/// Name-reference candidates, not proof that label sets intersect at runtime.
pub(all) struct Edge {
  producer : String
  consumer : String
  metric : String
  ambiguous : Bool
} derive(Eq, ToJson, Debug)

///|
pub(all) struct Reference {
  consumer : String
  metric : String
} derive(Eq, ToJson, Debug)

///|
pub(all) struct Opaque {
  consumer : String
  reason : String
} derive(Eq, ToJson, Debug)

///|
pub(all) struct Graph {
  edges : Array[Edge]
  external : Array[Reference]
  unresolved : Array[Opaque]
  cyclic_rules : Array[String]
} derive(ToJson, Debug)

///|
pub(all) struct Impact {
  before : Graph
  after : Graph
  changed : Array[String]
  affected : Array[String]
  uncertain : Array[String]
} derive(ToJson, Debug)

///|
fn unique_push(values : Array[String], value : String) -> Unit {
  if !values.contains(value) {
    values.push(value)
  }
}

///|
fn selector(
  name : String,
  matchers : Array[(String, String, String)],
  names : Array[String],
  reasons : Array[String],
) -> Unit {
  let mut exact = name
  for (key, op, value) in matchers {
    if key == "__name__" && op == "=" && !value.is_empty() {
      if exact.is_empty() {
        exact = value
      } else if exact != value {
        // Contradictory selectors cannot consume any samples. Retain both as
        // conservative candidates instead of treating them as no dependency.
        unique_push(names, value)
      }
    }
  }
  if exact.is_empty() {
    unique_push(reasons, "selector has no exact nonempty metric name")
  } else {
    unique_push(names, exact)
    if exact == "ALERTS" || exact == "ALERTS_FOR_STATE" {
      unique_push(reasons, "alert rules may implicitly produce this metric")
    }
  }
}

///|
fn collect(
  expr : @parser.Expr,
  names : Array[String],
  reasons : Array[String],
) -> Unit {
  match expr {
    Selector(name, matchers) => selector(name, matchers, names, reasons)
    SelectorBytes(name, matchers) => {
      let decoded = Some(
        matchers.map(m => (@utf8.decode(m.0), m.1, @utf8.decode(m.2))),
      ) catch {
        _ => None
      }
      match decoded {
        Some(ms) => selector(name, ms, names, reasons)
        None => {
          if !name.is_empty() {
            unique_push(names, name)
          }
          unique_push(reasons, "selector contains non-UTF8 matcher bytes")
        }
      }
    }
    Parenthesized(e)
    | Range(e, _)
    | Unary(_, e)
    | Aggregate(_, _, _, e)
    | Subquery(e, _, _)
    | Offset(e, _)
    | At(e, _)
    | RangeExpression(e, _)
    | SubqueryExpression(e, _, _)
    | OffsetExpression(e, _)
    | ExtendedRange(e, _) => collect(e, names, reasons)
    Binary(_, a, b)
    | BinaryMatch(_, _, a, b)
    | BinaryFill(_, _, _, _, a, b)
    | AggregateParam(_, _, _, a, b) => {
      collect(a, names, reasons)
      collect(b, names, reasons)
    }
    Call(name, arguments) => {
      // info() may read default target_info series not present in its argument
      // selectors; do not claim a closed dependency set for this function.
      if name == "info" {
        unique_push(reasons, "info may consult implicit information series")
      }
      for arg in arguments {
        collect(arg, names, reasons)
      }
    }
    Number(_) | StringLiteral(_) | StringBytes(_) => ()
  }
}

///|
fn adjacency(edges : Array[Edge]) -> Map[String, Array[String]] {
  let out : Map[String, Array[String]] = Map([])
  for e in edges {
    match out.get(e.producer) {
      Some(consumers) => unique_push(consumers, e.consumer)
      None => out[e.producer] = [e.consumer]
    }
  }
  out
}

///|
fn reachable(
  seeds : Array[String],
  adj : Map[String, Array[String]],
) -> Map[String, Bool] {
  let seen : Map[String, Bool] = Map([])
  let queue : Array[String] = []
  for seed in seeds {
    if !seen.contains(seed) {
      seen[seed] = true
      queue.push(seed)
    }
  }
  let mut cursor = 0
  while cursor < queue.length() {
    let current = queue[cursor]
    cursor += 1
    if adj.get(current) is Some(next) {
      for target in next {
        if !seen.contains(target) {
          seen[target] = true
          queue.push(target)
        }
      }
    }
  }
  seen
}

///|
/// Bounded local name graph. Default parser options; no rule scheduling or
/// evaluation, and no claim that external/unresolved selectors have no consumers.
pub fn analyze(rules : Array[Rule]) -> Graph raise RuleError {
  if rules.length() > 512 {
    raise Invalid("at most 512 rules per snapshot")
  }
  let ids : Map[String, Bool] = Map([])
  let producers : Map[String, Array[String]] = Map([])
  let mut size = 0
  for r in rules {
    if r.id.is_empty() || r.id.length() > 256 || ids.contains(r.id) {
      raise Invalid(
        "rule id must be nonempty, unique and at most 256 code units",
      )
    }
    ids[r.id] = true
    size += r.expr.length() + r.context.length()
    if size > 1048576 {
      raise Invalid(
        "snapshot expressions and context exceed 1048576 code units",
      )
    }
    if r.record is Some(name) {
      if name.is_empty() || name.length() > 256 {
        raise Invalid("record name must contain 1..256 code units")
      }
      match producers.get(name) {
        Some(group) => group.push(r.id)
        None => producers[name] = [r.id]
      }
    }
  }
  let edges : Array[Edge] = []
  let external : Array[Reference] = []
  let unresolved : Array[Opaque] = []
  for rule in rules {
    let ast = try {
      let expr = @parser.parse(rule.expr)
      let typ = @parser.infer_type(expr)
      if typ != @parser.Scalar && typ != @parser.InstantVector {
        raise Invalid("rule expression must return scalar or instant vector")
      }
      expr
    } catch {
      e => raise Invalid(rule.id + ": " + @debug.to_string(e))
    }
    let names : Array[String] = []
    let reasons : Array[String] = []
    collect(ast, names, reasons)
    for name in names {
      match producers.get(name) {
        Some(group) =>
          for producer in group {
            if edges.length() >= 32768 {
              raise Invalid("snapshot exceeds 32768 name-reference edges")
            }
            edges.push({
              producer,
              consumer: rule.id,
              metric: name,
              ambiguous: group.length() > 1,
            })
          }
        None => external.push({ consumer: rule.id, metric: name, })
      }
    }
    for reason in reasons {
      unresolved.push({ consumer: rule.id, reason, })
    }
  }
  let adj = adjacency(edges)
  let cyclic_rules = rules
    .filter(r => {
      match adj.get(r.id) {
        Some(next) => reachable(next, adj).contains(r.id)
        None => false
      }
    })
    .map(r => r.id)
  { edges, external, unresolved, cyclic_rules, }
}

///|
/// Compare full supplied snapshots. Walk the union of old and new edges so a
/// removed producer or a renamed metric cannot hide its former consumers.
/// Opaque consumers and their descendants are separately reported uncertain.
pub fn compare(
  before : Array[Rule],
  after : Array[Rule],
) -> Impact raise RuleError {
  let old_graph = analyze(before)
  let new_graph = analyze(after)
  let old : Map[String, Rule] = Map([])
  let fresh : Map[String, Rule] = Map([])
  let ids : Array[String] = []
  let changed : Array[String] = []
  for r in before {
    old[r.id] = r
    ids.push(r.id)
  }
  for r in after {
    fresh[r.id] = r
    unique_push(ids, r.id)
  }
  for id in ids {
    if old.get(id) != fresh.get(id) {
      changed.push(id)
    }
  }
  let edges = old_graph.edges.copy()
  for edge in new_graph.edges {
    edges.push(edge)
  }
  let adj = adjacency(edges)
  let affected_set = reachable(changed, adj)
  let seeds = old_graph.unresolved.map(o => o.consumer)
  for o in new_graph.unresolved {
    unique_push(seeds, o.consumer)
  }
  let uncertain_set = if changed.is_empty() {
    Map([])
  } else {
    reachable(seeds, adj)
  }
  {
    before: old_graph,
    after: new_graph,
    changed,
    affected: ids.filter(id => affected_set.contains(id)),
    uncertain: ids.filter(id => uncertain_set.contains(id)),
  }
}
