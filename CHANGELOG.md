# Changelog

## 0.4.0 — 2026-09-17

- Parse and statically validate by default, with all 90 pinned Prometheus 3.14.0 function signatures and independent experimental switches.
- Preserve byte escapes and BOMs, quoted metric/label names, parentheses, duration expressions, extended ranges and binary fills.
- Validate RE2 syntax and empty-string matcher constraints, with info's second-argument exception.
- Expose positioned errors, numeric/time conversion helpers, function metadata and a structured compiled inspector/CLI.
- Compare 3,213 cases to the unmodified official parser; add 12 API test groups and 13 inspector/CLI fixture groups.
- Document resource limits, normalized AST semantics, upstream time-conversion edge cases and remaining diagnostic/formatting/visitor gaps.
