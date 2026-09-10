///|
pub(all) enum QueryType {
  Scalar
  InstantVector
  RangeVector
  StringValue
} derive(Debug, Eq)

///|
/// Validate the typed core and a documented allowlist of common functions.
pub fn infer_type(expr : Expr) -> QueryType raise ParseError {
  infer_type_at(expr, 0)
}

///|
fn infer_type_at(expr : Expr, depth : Int) -> QueryType raise ParseError {
  if depth > 64 {
    raise Invalid("type expression depth exceeds 64")
  }
  match expr {
    Number(_) => Scalar
    StringLiteral(_) => StringValue
    Offset(v, _) | At(v, _) => {
      if !temporal_target(v) {
        raise Invalid("invalid time modifier target")
      }
      infer_type_at(v, depth + 1)
    }
    Subquery(v, _, _) => {
      if infer_type_at(v, depth + 1) != InstantVector {
        raise Invalid("subquery requires instant vector")
      }
      RangeVector
    }
    AggregateParam(name, _, _, parameter, v) => {
      let parameter_type = if name == "count_values" {
        StringValue
      } else {
        Scalar
      }
      if infer_type_at(parameter, depth + 1) != parameter_type ||
        infer_type_at(v, depth + 1) != InstantVector {
        raise Invalid("aggregation parameter or vector type")
      }
      InstantVector
    }
    BinaryMatch(op, matching, a, b) => infer_binary(op, a, b, matching, depth)
    Selector(_, _) => InstantVector
    Range(v, _) => {
      if infer_type_at(v, depth + 1) != InstantVector {
        raise Invalid("range requires instant vector")
      }
      RangeVector
    }
    Unary(_, v) => {
      let t = infer_type_at(v, depth + 1)
      if t == RangeVector || t == StringValue {
        raise Invalid("unary range expression")
      }
      t
    }
    Binary(op, a, b) =>
      infer_binary(
        op,
        a,
        b,
        {
          return_bool: false,
          mode: None,
          labels: [],
          group: None,
          include_labels: [],
        },
        depth,
      )
    Aggregate(_, _, _, v) => {
      if infer_type_at(v, depth + 1) != InstantVector {
        raise Invalid("aggregation requires instant vector")
      }
      InstantVector
    }
    Call(name, args) => infer_call(name, args, depth)
  }
}
