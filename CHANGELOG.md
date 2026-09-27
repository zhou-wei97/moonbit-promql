# Changelog

## 0.8.0 — 2026-09-27

- Match CLI rule snapshots by stable group/kind/name identity instead of source positions; repeated names include canonical content digests.
- Normalize group block order and conservatively report common-rule relative-order inversions, while keeping insertion/deletion shifts from marking unrelated rules.
- Document overlap with pint, Mimirtool, and promtool; no algorithm-novelty claim.

## 0.4.0 — 2026-09-17

- Parse and statically validate by default, with all 90 pinned Prometheus 3.14.0 function signatures and independent experimental switches.
- Preserve byte escapes and BOMs, quoted metric/label names, parentheses, duration expressions, extended ranges and binary fills.
- Validate RE2 syntax and empty-string matcher constraints, with info's second-argument exception.
- Expose positioned errors, numeric/time conversion helpers, function metadata and a structured compiled inspector/CLI.
- Compare 3,213 cases to the unmodified official parser; add 12 API test groups and 13 inspector/CLI fixture groups.
- Document resource limits, normalized AST semantics, upstream time-conversion edge cases and remaining diagnostic/formatting/visitor gaps.
