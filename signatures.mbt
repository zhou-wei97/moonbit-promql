///|
fn infer_binary(
  op : String,
  a : Expr,
  b : Expr,
  matching : VectorMatching,
  depth : Int,
  options : ParserOptions,
) -> QueryType raise ParseError {
  let x = infer_type_at(a, depth + 1, options)
  let y = infer_type_at(b, depth + 1, options)
  let comparison = ["==", "!=", ">", "<", ">=", "<="].contains(op)
  let set = ["and", "or", "unless"].contains(op)
  if precedence(op) == 0 ||
    x == RangeVector ||
    y == RangeVector ||
    x == StringValue ||
    y == StringValue {
    raise Invalid("binary operands must be scalar or instant vector")
  }
  if matching.return_bool && !comparison {
    raise Invalid("bool only applies to comparison")
  }
  if comparison && x == Scalar && y == Scalar && !matching.return_bool {
    raise Invalid("scalar comparison requires bool")
  }
  if (set || !matching.labels.is_empty()) &&
    (x != InstantVector || y != InstantVector) {
    raise Invalid("set operators and matching require two instant vectors")
  }
  if set && matching.group != None {
    raise Invalid("set operators cannot use grouping modifiers")
  }
  if matching.mode == Some("on") &&
    matching.include_labels.iter().any(label => matching.labels.contains(label)) {
    raise Invalid("label cannot occur in both on and group include_labels")
  }
  if x == Scalar && y == Scalar {
    Scalar
  } else {
    InstantVector
  }
}

///|
fn infer_call(
  name : String,
  args : Array[Expr],
  depth : Int,
  options : ParserOptions,
) -> QueryType raise ParseError {
  let signature = match function_signature(name) {
    Some(s) => s
    None => raise Invalid("unknown function: " + name)
  }
  if signature.experimental && !options.experimental_functions {
    raise Invalid("experimental function is not enabled: " + name)
  }
  if args.length() < signature.min_args ||
    (signature.max_args is Some(n) && args.length() > n) {
    raise Invalid("function argument count: " + name)
  }
  for i, arg in args {
    let expected = signature.arguments[i.min(signature.arguments.length() - 1)]
    let actual = if name == "info" && i == 1 {
      info_labels(arg)
      InstantVector
    } else {
      infer_type_at(arg, depth + 1, options)
    }
    if actual != expected {
      raise Invalid("function argument type: " + name)
    }
  }
  signature.result
}
