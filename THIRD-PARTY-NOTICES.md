# Third-party notices

Original code in this repository remains under [MIT](LICENSE).

The optional `moonpromql` integration directly imports `Santa968/moonpromql@0.1.0` from [https://github.com/Santa968/MoonPromQL](https://github.com/Santa968/MoonPromQL). Its compiled code is included in `examples/integration-engine.mjs`. The upstream copyright notices and Apache License 2.0 are preserved verbatim in [licenses/moonpromql-Apache-2.0.txt](licenses/moonpromql-Apache-2.0.txt). No upstream source modifications are distributed. The combined distribution metadata is `MIT AND Apache-2.0`; this does not relicense the original source or imply upstream endorsement.

MoonBit standard library code used by the compiler retains its existing upstream license. Historical test fixtures and independent reference tooling keep their existing source notices.

examples/prometheus-rules是Prometheus固定Apache-2.0规则测试的原始文件、许可和两条派生表达式；来源/hash见SOURCE.json。未复制promtool二进制，也没有改写上游测试文件。
