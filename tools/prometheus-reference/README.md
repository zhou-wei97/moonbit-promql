# Independent Prometheus parser adapter

The executable imports **unmodified** `github.com/prometheus/prometheus v0.314.0`, corresponding to Prometheus 3.14.0. `go.mod` and `go.sum` pin the module and dependency checksums. Go 1.25.8 or newer is required by the dependency; the recorded Windows/amd64 run used Go 1.26.0, cross-compiled from WSL Ubuntu-D.

With Go installed, from this directory:

```powershell
go mod download
go build -o C:/path/outside/repo/promql-reference.exe .
```

Then from the repository root:

```powershell
$env:PROMQL_REFERENCE='C:/path/outside/repo/promql-reference.exe'
python -Xutf8 tools/generate-tables.py $env:PROMQL_REFERENCE
moon fmt
node tools/test-reference.mjs
```

On Linux, `go build -o /path/outside/repo/promql-reference .`; set `GOOS=windows GOARCH=amd64` when cross-compiling a Windows reference executable. Network is needed only to download modules. Preserve checksum verification when selecting an alternate Go proxy. No binaries or downloaded module sources are distributed in this repository.

Protocol: one JSON object per stdin line, one JSON result per stdout line. `query` parses and checks a query; `experimental` enables all four flags; individual fields are `experimental_functions`, `duration_expressions`, `extended_ranges`, `fill_modifiers`. `regex` checks a matcher using the actual upstream labels package. `metadata: true` returns function facts, Unicode properties and Go build provenance. Adapter failures are explicit and invalidate the test run.

The adapter inspects official AST values and does not implement its own parser or decide expected acceptance. The MoonBit implementation and CLI do not depend on this helper. Live results are stored as replayable independent vectors; `--golden` runs offline. No Prometheus server, database, evaluator or `promtool` process is involved.
