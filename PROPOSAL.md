# MoonBit PromQL 表达式类型检查库与 MoonPromQL 接入
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

## 2026-09-27：表达式与规则文件的边界

本库提供可嵌入MoonBit程序的纯表达式解析/类型推断；保留0.6.0运行时，没有为了命名重新实现执行器。`tools/check-queries.mjs`只读取JSON查询清单，**不读取Prometheus YAML规则文件，不检查重复规则、告警模板或group顺序**。MoonPromQL已有parser/evaluator，语言层重叠被明确承认；增量范围是较宽的静态契约与保守执行接入，不是完整规则系统。

官方[Prometheus3.14.0 promtool](https://github.com/prometheus/prometheus/blob/v3.14.0/docs/command-line/promtool.md)已经能够离线检查本地规则文件及duplicate-rules，无需启动Prometheus服务。已有规则文件任务应优先用它。本库的部署位置是不能依赖Go命令行进程、需要嵌入式MoonBit表达式API的程序；当前没有确认采用方或优于官方工具的性能证据。

固定官方Apache-2.0测试文件中两条同名告警的表达式都能通过类型检查，**不代表该规则文件无重复错误**：

```sh
node examples/public-rule-expressions.mjs
moon run examples/portable-check --target js
moon run examples/portable-check --target wasm-gc
```

前者按固定文件核对手工选取的两条表达式并调用现有清单CLI；后两条直接消费MoonBit库，支持成功输出与`sum(1)`类型拒绝，宿主不替代解析/推断。来源/hash/许可在examples/prometheus-rules。公开软件测试不是客户部署。

2026-09-27后续核验：已补齐官方promtool3.14.0并核对完整发布包SHA-256，实际运行14项对照。其中7项表达式解析/类型结果一致，3项检查官方重复规则夹具的lint模式，2项验证规则文件结构错误，另2项记录本地源码/AST深度资源限制带来的有意拒绝。默认重复规则会输出失败文字但退出0；`--lint-fatal`退出3；表达式/结构错误退出1。源码和引擎保持0.6.0，未重跑全部旧套件。复现、原始输出、来源散列见 [PROMTOOL-REFERENCE](PROMTOOL-REFERENCE.md) 和 [本次回执](evidence/promtool-20260927/LOCAL-CHECKS.json)。先前下载失败记录保留为历史，不再是当前未完成项。静态通过仍不证明MoonPromQL支持或能执行该查询，也不代表赛事认可独立性。
