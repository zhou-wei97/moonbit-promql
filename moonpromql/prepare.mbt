///|
pub suberror PreparationError {
  StaticError(String)
  RuntimeSyntax(String)
  Unsupported(String)
} derive(Debug)

///|
/// Own static validation plus the actual upstream AST. Execution semantics,
/// timestamps in EvalContext, regex and counter behavior remain upstream's.
pub struct PreparedQuery {
  priv ast : @ast.Expr
  priv kind : @syntax.QueryType
} derive(Debug)

///|
fn has_timestamp(e : @ast.Expr) -> Bool {
  match e {
    Selector(s) => s.at_ms is Some(_)
    Call(_, args) | Aggregate(_, args, _, _) => args.any(has_timestamp)
    Unary(_, inner) => has_timestamp(inner)
    Binary(_, left, right, _, _) => has_timestamp(left) || has_timestamp(right)
    Number(_) | StringLiteral(_) => false
  }
}

///|
/// Static success alone does not imply upstream support. Reject @ rather than
/// silently interpreting Prometheus seconds as MoonPromQL milliseconds.
pub fn prepare(source : String) -> PreparedQuery raise PreparationError {
  let kind = @syntax.infer_type(@syntax.parse(source)) catch {
    e => raise StaticError(Repr(e).to_string())
  }
  let ast = @upstream.parse(source[:]) catch {
    e => raise RuntimeSyntax(e.to_string())
  }
  if has_timestamp(ast) {
    raise Unsupported(
      "@ timestamps differ: Prometheus seconds versus MoonPromQL milliseconds",
    )
  }
  { ast, kind, }
}

///|
pub fn PreparedQuery::query_type(self : PreparedQuery) -> @syntax.QueryType {
  self.kind
}

///|
/// Data-dependent errors and unsupported runtime functions still come from
/// the existing engine. This is not a Prometheus-compatible evaluator.
pub fn PreparedQuery::evaluate(
  self : PreparedQuery,
  context : @eval.EvalContext,
) -> @model.Value raise @model.PromqlError {
  @upstream.evaluate(self.ast, context)
}
