///|
pub(all) enum QueryType {
  Scalar
  InstantVector
  RangeVector
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
    Selector(_, _) => InstantVector
    Range(v, _) => {
      if infer_type_at(v, depth + 1) != InstantVector {
        raise Invalid("range requires instant vector")
      }
      RangeVector
    }
    Unary(_, v) => {
      let t = infer_type_at(v, depth + 1)
      if t == RangeVector {
        raise Invalid("unary range expression")
      }
      t
    }
    Binary(op, a, b) => {
      let x = infer_type_at(a, depth + 1)
      let y = infer_type_at(b, depth + 1)
      if ["and", "or", "unless"].contains(op) && (x == Scalar || y == Scalar) {
        raise Invalid("set operators require instant vectors")
      }
      if x == RangeVector || y == RangeVector {
        raise Invalid("binary range expression")
      }
      if x == Scalar && y == Scalar {
        Scalar
      } else {
        InstantVector
      }
    }
    Aggregate(_, _, _, v) => {
      if infer_type_at(v, depth + 1) != InstantVector {
        raise Invalid("aggregation requires instant vector")
      }
      InstantVector
    }
    Call(name, args) => {
      if name == "time" {
        if !args.is_empty() {
          raise Invalid("time takes no arguments")
        }
        return Scalar
      }
      if args.length() != 1 {
        raise Invalid("supported function requires one argument")
      }
      let t = infer_type_at(args[0], depth + 1)
      if [
          "rate", "irate", "increase", "delta", "idelta", "avg_over_time", "sum_over_time",
          "min_over_time", "max_over_time", "count_over_time",
        ].contains(name) {
        if t != RangeVector {
          raise Invalid("function requires range vector")
        }
        InstantVector
      } else if name == "vector" {
        if t != Scalar {
          raise Invalid("vector requires scalar")
        }
        InstantVector
      } else if name == "scalar" {
        if t != InstantVector {
          raise Invalid("scalar requires vector")
        }
        Scalar
      } else if [
          "abs", "ceil", "floor", "sqrt", "exp", "ln", "sum", "avg", "min", "max",
          "count",
        ].contains(name) {
        if t != InstantVector {
          raise Invalid("function requires instant vector")
        }
        InstantVector
      } else {
        raise Invalid("function signature not implemented: " + name)
      }
    }
  }
}
