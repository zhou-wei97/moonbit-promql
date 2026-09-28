///|
pub extend Edge with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend Edge with Eq::{not_equal, equal}

///|
pub extend Edge with ToJson::{to_json}

///|
pub extend Graph with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend Graph with ToJson::{to_json}

///|
pub extend Impact with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend Impact with ToJson::{to_json}

///|
pub extend Opaque with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend Opaque with Eq::{not_equal, equal}

///|
pub extend Opaque with ToJson::{to_json}

///|
pub extend Reference with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend Reference with Eq::{not_equal, equal}

///|
pub extend Reference with ToJson::{to_json}

///|
pub extend Rule with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend Rule with @moonbitlang/core/json.FromJson::{from_json}

///|
pub extend Rule with Eq::{not_equal, equal}

///|
pub extend Rule with ToJson::{to_json}

///|
pub extend RuleError with @moonbitlang/core/debug.Debug::{to_repr}
