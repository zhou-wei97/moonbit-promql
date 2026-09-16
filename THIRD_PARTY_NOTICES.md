# Third-party reference material

The production parser implementation is original MoonBit code under the repository MIT license.

`function_table.mbt` contains generated public API signature facts (function names, argument types, arity and experimental status) from Prometheus v3.14.0, module `github.com/prometheus/prometheus v0.314.0`. Prometheus is Copyright The Prometheus Authors, licensed under Apache License 2.0; the complete license is in `LICENSES/Apache-2.0.txt`. Source: https://github.com/prometheus/prometheus/blob/v3.14.0/promql/parser/functions.go.

`regex_properties.mbt` contains Unicode property names accepted by that module's unmodified regex matcher when built with the Go version recorded in `evidence/reference-metadata.json`. It contains names, not Unicode range tables or copied regex implementation. `tools/generate-tables.py` regenerates these facts by calling the reference executable.

The Go adapter in `tools/prometheus-reference` is original test code. Its dependencies are fetched and checksum-verified by Go; they are not linked into the MoonBit/browser parser. Upstream source and binaries downloaded for development remain outside this repository. `go.mod`/`go.sum` pin the independent reference dependencies for reproduction.
