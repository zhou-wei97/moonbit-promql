# PromQL promtool reference check: status

Research date: 2026-09-27 (Australia/Perth)

## Result

The requested Prometheus 3.14.0 `promtool check rules` run was **not completed**. No `promtool.exe` was found in `work/reassessment-20260927` or on `PATH`. The official Windows archive download remained incomplete, so no `promtool --version`, rule-check output, or exit status exists. Do not treat this as a pass or a failure of the MoonBit parser.

An earlier direct release-asset download reached 53,915,648 of 110,095,743 bytes after about 14 minutes and was stopped. A later parallel HTTP Range continuation from the official GitHub Release API was stopped after roughly 65 seconds with no bytes written to its eight part files. Its interrupted shell command exited 1 after Ctrl+C and emitted no stdout/stderr. The partial archive must not be executed or extracted.

## Pinned inputs and source digests

| Item | Source / version | SHA-256 or digest | State |
|---|---|---|---|
| Prometheus release | [v3.14.0 release](https://github.com/prometheus/prometheus/releases/tag/v3.14.0) | — | Official stable version selected by the prior research; release asset metadata reported 110,095,743 bytes |
| Windows amd64 archive | [prometheus-3.14.0.windows-amd64.zip](https://github.com/prometheus/prometheus/releases/download/v3.14.0/prometheus-3.14.0.windows-amd64.zip) | Official release API digest and `sha256sums.txt` entry: `e57fbb99e4d0bc734d2f2b3aeb68c02fba38862259dc99a95c27ea46d9ccba0a` | Not fully downloaded; unsafe to use |
| Official checksum list | [sha256sums.txt](https://github.com/prometheus/prometheus/releases/download/v3.14.0/sha256sums.txt) | Local SHA-256: `1f56a4ef0378db78e13928f7d54ebf018c815ebcb240df2f84fac919cc9f2ed5` | Downloaded; its local hash matched the GitHub Release API digest recorded for this asset |
| Rule fixture | [Prometheus `cmd/promtool/testdata/prometheus-rules.lint.yml` at commit `ea954809ceafceb53ecfa295ab0947753929de9e`](https://github.com/prometheus/prometheus/blob/ea954809ceafceb53ecfa295ab0947753929de9e/cmd/promtool/testdata/prometheus-rules.lint.yml) | `17c5cfa28dce50a6a9b2aadea2e9cd0a55fd4a4148ee031182e017cb703be457` | Local file present |
| Partial archive | Local partial download | `ee9fc336c7354191dea60e677ed9864866a87830f56d9c8923378be37e2d5609` | 53,915,648 bytes only; this is not the official archive digest |

Fixture SHA-256: `17c5cfa28dce50a6a9b2aadea2e9cd0a55fd4a4148ee031182e017cb703be457`.

## Commands and raw execution status

The following were the intended local commands, but were **not executed** because no complete binary was available:

```powershell
& "<prometheus-3.14.0.windows-amd64>\promtool.exe" --version
& "<prometheus-3.14.0.windows-amd64>\promtool.exe" check rules "<promtool-reference>\prometheus-rules.lint.yml"
& "<prometheus-3.14.0.windows-amd64>\promtool.exe" check rules --lint=duplicate-rules --lint-fatal "<promtool-reference>\prometheus-rules.lint.yml"
```

Raw stdout/stderr and exit code for each command: **not available; command not run**. The attempted download command used the GitHub Releases API asset URL with `Accept: application/octet-stream`, eight `Range` requests in parallel, and a 120-second per-transfer timeout. Raw stdout/stderr before interruption: empty; interrupted shell exit: 1.

The pinned fixture itself can be read and hashed. It contains two identical `HighRequestLatency` alert rules, each with raw expression `job:request_latency_seconds:mean5m{job="myjob"} > 0.5`. Since promtool did not run, this audit did not observe whether v3.14.0 accepts the YAML/expression, how it reports the duplicate, or what output/exit code it returns. No invalid-expression/type-boundary experiment was run either.

## Documentation check

Searching the local PromQL `README.md` and `PROPOSAL.md` for `promtool`, `offline`, `internet`, `online`, `网络`, `联网`, or `离线` returned no matches. These files do not currently claim that promtool requires network access, so no wording correction is required. If this is documented later, keep acquisition separate from execution: fetching the binary requires a download, while `promtool check rules <local-file>` is documented as checking a local rule file without starting a Prometheus server.

Official v3.14.0 documentation consulted:

- [Pinned v3.14.0 `promtool` command documentation](https://github.com/prometheus/prometheus/blob/v3.14.0/docs/command-line/promtool.md) documents local `rule-files`, default `duplicate-rules` lint, and that `--lint-fatal` exits 3 for lint errors. This is the documented contract, not an observed run result here.
- [Pinned v3.14.0 recording-rule documentation](https://github.com/prometheus/prometheus/blob/v3.14.0/docs/configuration/recording_rules.md) says `promtool check rules /path/to/file` checks rule syntax without starting a Prometheus server; it documents syntax/invalid-input errors as exit 1. This supports the local/offline usage distinction, not a claim that the binary is already installed.
