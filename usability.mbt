///|
pub(all) enum QueryType {
  Scalar
  InstantVector
  RangeVector
  StringValue
} derive(Debug, Eq, ToJson)

///|
/// Statically check the AST against the pinned Prometheus function signatures.
pub fn infer_type(
  expr : Expr,
  options? : ParserOptions = ParserOptions::new(),
) -> QueryType raise ParseError {
  infer_type_at(expr, 0, options)
}

///|
fn validate_selector(
  name : String,
  labels : Array[(Bytes, String, Bytes)],
  bypass : Bool,
) -> Unit raise ParseError {
  if !name.is_empty() && !metric_identifier(name) {
    raise Invalid("invalid metric name")
  }
  let mut restrictive = !name.is_empty()
  for (key, op, value) in labels {
    if !name.is_empty() && key == b"__name__" {
      raise Invalid("metric name must not be set twice")
    }
    let empty = match op {
      "=" => value.is_empty()
      "!=" => !value.is_empty()
      "=~" | "!~" => {
        let matches = regex_bytes_empty(value)
        if op == "=~" {
          matches
        } else {
          !matches
        }
      }
      _ => raise Invalid("invalid matcher operator")
    }
    if !empty {
      restrictive = true
    }
  }
  if !restrictive && !bypass {
    raise Invalid("vector selector needs at least one non-empty matcher")
  }
}

///|
fn info_labels(expr : Expr) -> Unit raise ParseError {
  match expr {
    Selector(name, labels) => {
      if !name.is_empty() {
        raise Invalid("info requires label selectors only")
      }
      validate_selector(
        name,
        labels.map(t => (@utf8.encode(t.0), t.1, @utf8.encode(t.2))),
        true,
      )
    }
    SelectorBytes(name, labels) => {
      if !name.is_empty() {
        raise Invalid("info requires label selectors only")
      }
      validate_selector(name, labels, true)
    }
    Offset(v, _) | OffsetExpression(v, _) | At(v, _) | ExtendedRange(v, _) =>
      info_labels(v)
    _ => raise Invalid("info requires an unparenthesized label selector")
  }
}

///|
fn validate_aggregate(
  name : String,
  parameterized : Bool,
  options : ParserOptions,
) -> Unit raise ParseError {
  if !aggregator(name) ||
    ["topk", "bottomk", "quantile", "count_values", "limitk", "limit_ratio"].contains(
      name,
    ) !=
    parameterized {
    raise Invalid("invalid aggregation")
  }
  if ["limitk", "limit_ratio"].contains(name) && !options.experimental_functions {
    raise Invalid("experimental aggregation is not enabled")
  }
}

///|
fn infer_type_at(
  expr : Expr,
  depth : Int,
  options : ParserOptions,
) -> QueryType raise ParseError {
  if depth > 64 {
    raise Invalid("type expression depth exceeds 64")
  }
  match expr {
    Number(s) => {
      ignore(number_value(s))
      Scalar
    }
    StringLiteral(_) | StringBytes(_) => StringValue
    Parenthesized(v) => infer_type_at(v, depth + 1, options)
    Offset(v, _) | At(v, _) | OffsetExpression(v, _) => {
      if !temporal_target(v) {
        raise Invalid("invalid time modifier target")
      }
      infer_type_at(v, depth + 1, options)
    }
    ExtendedRange(v, kind) => {
      if !options.extended_ranges ||
        !["anchored", "smoothed"].contains(kind) ||
        !extended_target(v) {
        raise Invalid("invalid extended range modifier")
      }
      infer_type_at(v, depth + 1, options)
    }
    Subquery(v, _, _) | SubqueryExpression(v, _, _) => {
      if infer_type_at(v, depth + 1, options) != InstantVector {
        raise Invalid("subquery requires instant vector")
      }
      RangeVector
    }
    AggregateParam(name, _, _, parameter, v) => {
      validate_aggregate(name, true, options)
      let expected = if name == "count_values" { StringValue } else { Scalar }
      if infer_type_at(parameter, depth + 1, options) != expected ||
        infer_type_at(v, depth + 1, options) != InstantVector {
        raise Invalid("aggregation parameter or vector type")
      }
      InstantVector
    }
    BinaryMatch(op, matching, a, b) =>
      infer_binary(op, a, b, matching, depth, options)
    BinaryFill(op, matching, left, right, a, b) => {
      if !options.fill_modifiers ||
        ["and", "or", "unless"].contains(op) ||
        infer_type_at(a, depth + 1, options) != InstantVector ||
        infer_type_at(b, depth + 1, options) != InstantVector {
        raise Invalid(
          "fill modifiers require two instant vectors and a non-set operator",
        )
      }
      if left is Some(s) {
        ignore(number_value(s))
      }
      if right is Some(s) {
        ignore(number_value(s))
      }
      infer_binary(op, a, b, matching, depth, options)
    }
    Selector(name, labels) => {
      validate_selector(
        name,
        labels.map(t => (@utf8.encode(t.0), t.1, @utf8.encode(t.2))),
        false,
      )
      InstantVector
    }
    SelectorBytes(name, labels) => {
      validate_selector(name, labels, false)
      InstantVector
    }
    Range(v, _) | RangeExpression(v, _) => {
      if !direct_selector(v) ||
        infer_type_at(v, depth + 1, options) != InstantVector {
        raise Invalid("range requires vector selector")
      }
      RangeVector
    }
    Unary(op, v) => {
      let t = infer_type_at(v, depth + 1, options)
      if !["+", "-"].contains(op) || t == RangeVector || t == StringValue {
        raise Invalid("invalid unary expression")
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
        options,
      )
    Aggregate(name, _, _, v) => {
      validate_aggregate(name, false, options)
      if infer_type_at(v, depth + 1, options) != InstantVector {
        raise Invalid("aggregation requires instant vector")
      }
      InstantVector
    }
    Call(name, args) => infer_call(name, args, depth, options)
  }
}
