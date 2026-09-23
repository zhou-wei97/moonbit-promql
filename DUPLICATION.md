# 同类项目与扩展关系

https://github.com/zhou-wei97/moonbit-promql

本项目与 [Santa968/moonpromql](https://github.com/Santa968/MoonPromQL) 有明确重叠，不宣称生态空白。独立静态解析器、批量清单检查及可选执行适配器。执行算法来自 MoonPromQL，未新写查询执行器、TSDB 或完整告警系统。

本版本实际依赖 Santa968/moonpromql@0.1.0，公开适配包位于 /moonpromql。本项目 parse/infer_type → 上游真实 parser → 保留上游 AST → 调用上游 evaluate；静态错误、上游语法错误、已知不支持范围和数据相关运行错误分别保留。

区别、实际调用链、固定版本、数据与错误边界详见 [UPSTREAM-RELATION.md](UPSTREAM-RELATION.md)。适配层明确拒绝 @ 时间戳，因为 Prometheus 秒和该版 MoonPromQL 毫秒语义不同。上下文时间仍使用上游毫秒。prepare 成功不保证执行成功：absent(up)就是记录的反例。正则、计数器外推及向量匹配沿用上游局限，未证明 Prometheus 执行等价。

没有真实使用方；新增部分是静态检查与既有执行器的保守适配，不主张新执行算法。 既有规则或协议能力不能再次计为独有；新适配工作也不等于算法创新。[历史检索](docs/before-integration/DUPLICATION.md)仅保留审计线索。
