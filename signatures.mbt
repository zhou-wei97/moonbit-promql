///|
fn infer_binary(
  op : String,
  a : Expr,
  b : Expr,
  matching : VectorMatching,
  depth : Int,
) -> QueryType raise ParseError {
  let x = infer_type_at(a, depth + 1)
  let y = infer_type_at(b, depth + 1)
  let comparison = ["==", "!=", ">", "<", ">=", "<="].contains(op)
  let set = ["and", "or", "unless"].contains(op)
  if x == RangeVector ||
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
  if (set || matching.mode != None) &&
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
) -> QueryType raise ParseError {
  let types = args.map(arg => infer_type_at(arg, depth + 1))
  let require = fn(expected : Array[QueryType]) -> Unit raise ParseError {
    if types != expected {
      raise Invalid("function argument types: " + name)
    }
  }
  match name {
    "time" | "pi" => {
      require([])
      Scalar
    }
    "vector" => {
      require([Scalar])
      InstantVector
    }
    "scalar" => {
      require([InstantVector])
      Scalar
    }
    "clamp" => {
      require([InstantVector, Scalar, Scalar])
      InstantVector
    }
    "clamp_min" | "clamp_max" => {
      require([InstantVector, Scalar])
      InstantVector
    }
    "histogram_quantile" => {
      require([Scalar, InstantVector])
      InstantVector
    }
    "quantile_over_time" => {
      require([Scalar, RangeVector])
      InstantVector
    }
    "predict_linear" => {
      require([RangeVector, Scalar])
      InstantVector
    }
    "round" => {
      if types != [InstantVector] && types != [InstantVector, Scalar] {
        raise Invalid("round argument types")
      }
      InstantVector
    }
    "label_replace" => {
      require([
        InstantVector,
        StringValue,
        StringValue,
        StringValue,
        StringValue,
      ])
      InstantVector
    }
    "label_join" => {
      if types.length() < 3 ||
        types[0] != InstantVector ||
        !types[1:].iter().all(t => t == StringValue) {
        raise Invalid("label_join argument types")
      }
      InstantVector
    }
    _ => {
      if [
          "rate", "irate", "increase", "delta", "idelta", "deriv", "changes", "resets",
          "avg_over_time", "sum_over_time", "min_over_time", "max_over_time", "count_over_time",
          "stddev_over_time", "stdvar_over_time", "last_over_time", "present_over_time",
          "absent_over_time",
        ].contains(name) {
        require([RangeVector])
      } else if [
          "abs", "absent", "ceil", "floor", "sqrt", "exp", "ln", "log2", "log10",
          "sgn", "sin", "cos", "tan", "asin", "acos", "atan", "sinh", "cosh", "tanh",
          "asinh", "acosh", "atanh", "deg", "rad", "timestamp", "histogram_avg",
          "histogram_count", "histogram_sum", "sort", "sort_desc",
        ].contains(name) {
        require([InstantVector])
      } else {
        raise Invalid("function signature not implemented: " + name)
      }
      InstantVector
    }
  }
}
