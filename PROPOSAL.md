# PromQL 静态检查与 MoonPromQL 执行接入
仓库：https://github.com/zhou-wei97/moonbit-promql
模块：zhou-wei97/promql；本地版本：0.6.0。

问题：告警或面板查询提交前需要类型检查；仅通过静态检查还不足以证明既有执行器支持该查询。
范围：独立静态解析器、批量清单检查及可选执行适配器。执行算法来自 MoonPromQL，未新写查询执行器、TSDB 或完整告警系统。
已有工作：Santa968/moonpromql@0.1.0；明确承认同类能力，撤回生态空白式表述。
扩展关系：本项目 parse/infer_type → 上游真实 parser → 保留上游 AST → 调用上游 evaluate；静态错误、上游语法错误、已知不支持范围和数据相关运行错误分别保留。
调用入口：公开 /moonpromql 包；不是仅文档列出上游。

验证：16个选定查询实际调用上游；四个数值结果有手工期望，成功准备后的执行结果与直接调用上游一致。子查询/复合时长可通过本项目静态检查，但被上游解析器拒绝；sum(1)在准备阶段报告类型错误。
当前检查：JS/Wasm-GC各28项（含4个新适配器用例）；16个实际上游对照；既有浏览器、CLI、结构化检查、批处理和3213条静态golden重放。
构建：moon update && moon build --target js。
刷新产物：node tools/refresh-engines.mjs。
复现：node examples/run-upstream-integration.mjs output/upstream。
报告：evidence/integration-20260923/example-output/report.json。

边界：适配层明确拒绝 @ 时间戳，因为 Prometheus 秒和该版 MoonPromQL 毫秒语义不同。上下文时间仍使用上游毫秒。prepare 成功不保证执行成功：absent(up)就是记录的反例。正则、计数器外推及向量匹配沿用上游局限，未证明 Prometheus 执行等价。
补充：保留 root parser 的较宽语法范围和 Prometheus 3.14.0 静态契约；3213个保存的独立参考答案仅用于静态重放，不能当作运行语义证据。
成熟度：没有真实使用方；新增部分是静态检查与既有执行器的保守适配，不主张新执行算法。
没有确认使用方、上游认可、生产规模或性能优越性证明。
原创源码MIT，上游Apache-2.0；随包附许可和来源。
JS/Wasm-GC与Windows/WSL接入例子本地验证；不据此称远端CI已绿。
当前仅本地修订，待对接团队同步同版本代码和表单。
申请按上述限定范围和可复现结果重新评估，不保证审核结论。
