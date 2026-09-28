///|
pub extend DurationExpr with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend DurationExpr with Eq::{not_equal, equal}

///|
pub extend Expr with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend Expr with Eq::{not_equal, equal}

///|
pub extend FunctionSignature with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend FunctionSignature with Eq::{not_equal, equal}

///|
pub extend FunctionSignature with ToJson::{to_json}

///|
pub extend ParseError with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend ParserOptions with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend ParserOptions with Eq::{not_equal, equal}

///|
pub extend ParserOptions with ToJson::{to_json}

///|
pub extend QueryType with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend QueryType with Eq::{not_equal, equal}

///|
pub extend QueryType with ToJson::{to_json}

///|
pub extend SourceSpan with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend SourceSpan with Eq::{not_equal, equal}

///|
pub extend SourceSpan with ToJson::{to_json}

///|
pub extend VectorMatching with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend VectorMatching with Eq::{not_equal, equal}
