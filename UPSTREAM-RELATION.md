# 与已有项目的真实关系

本项目：https://github.com/zhou-wei97/moonbit-promql
上游：[Santa968/moonpromql@0.1.0](https://github.com/Santa968/MoonPromQL)。本轮读取固定提交 b1b7f90dd943bda68614b670e2420fc802db684f，实际构建使用 Mooncakes 精确版本；仓库提交和发布包不推定字节相同。已下载包的源文件指纹见 [DEPENDENCY.json](evidence/integration-20260923/DEPENDENCY.json)。

独立静态解析器、批量清单检查及可选执行适配器。执行算法来自 MoonPromQL，未新写查询执行器、TSDB 或完整告警系统。

## 实际复用

本项目 parse/infer_type → 上游真实 parser → 保留上游 AST → 调用上游 evaluate；静态错误、上游语法错误、已知不支持范围和数据相关运行错误分别保留。

导入 `zhou-wei97/promql/moonpromql` 后调用 `prepare(source)`，再使用返回值的 `query_type()` 和 `evaluate(context)`；context 是 `Santa968/moonpromql/eval.EvalContext`。用户直接使用上游 Series/LabelSet/Sample 建立输入，不需要转造模型。

## 用实跑区分支持与拒绝

16个选定查询实际调用上游；四个数值结果有手工期望，成功准备后的执行结果与直接调用上游一致。子查询/复合时长可通过本项目静态检查，但被上游解析器拒绝；sum(1)在准备阶段报告类型错误。

`sum(1)`、非法语法及未知函数可在静态阶段失败；合法子查询可能在上游语法阶段失败；含 @ 的选择器明确拒绝；不支持的函数或数据相关错误在 evaluate 保留。

适配层明确拒绝 @ 时间戳，因为 Prometheus 秒和该版 MoonPromQL 毫秒语义不同。上下文时间仍使用上游毫秒。prepare 成功不保证执行成功：absent(up)就是记录的反例。正则、计数器外推及向量匹配沿用上游局限，未证明 Prometheus 执行等价。

保留 root parser 的较宽语法范围和 Prometheus 3.14.0 静态契约；3213个保存的独立参考答案仅用于静态重放，不能当作运行语义证据。

本例不是性能对决。没有证明优于上游，没有声称上游认可，也没有用未命中搜索结果来推断生态空白。没有真实使用方；新增部分是静态检查与既有执行器的保守适配，不主张新执行算法。

## 许可

本项目源码保留MIT；上游Apache-2.0原文见 [许可](licenses/moonpromql-Apache-2.0.txt)。运行中保留实际依赖，未复制改写上游源代码。`examples/integration-engine.mjs`含链接的上游代码，因此模块分发元数据采用MIT AND Apache-2.0。MoonBit标准库及历史参考数据许可仍按各自来源说明。

## 2026-09-27：表达式与规则文件的边界

本库提供可嵌入MoonBit程序的纯表达式解析/类型推断；保留0.6.0的表达式核心与执行适配，没有为了命名重新实现执行器。`tools/check-queries.mjs`只读取JSON查询清单，**不读取Prometheus YAML规则文件，不检查重复规则、告警模板或group顺序**。MoonPromQL已有parser/evaluator，语言层重叠被明确承认；增量范围是较宽的静态契约与保守执行接入，不是完整规则系统。

官方[Prometheus3.14.0 promtool](https://github.com/prometheus/prometheus/blob/v3.14.0/docs/command-line/promtool.md)已经能够离线检查本地规则文件及duplicate-rules，无需启动Prometheus服务。已有规则文件任务应优先用它。本库的部署位置是不能依赖Go命令行进程、需要嵌入式MoonBit表达式API的程序；当前没有确认采用方或优于官方工具的性能证据。

固定官方Apache-2.0测试文件中两条同名告警的表达式都能通过类型检查，**不代表该规则文件无重复错误**：

```sh
node examples/public-rule-expressions.mjs
moon run examples/portable-check --target js
moon run examples/portable-check --target wasm-gc
```

前者按固定文件核对手工选取的两条表达式并调用现有清单CLI；后两条直接消费MoonBit库，支持成功输出与`sum(1)`类型拒绝，宿主不替代解析/推断。来源/hash/许可在examples/prometheus-rules。公开软件测试不是客户部署。

2026-09-27后续已取得并校验promtool3.14.0，实际运行14项对照；见 [PROMTOOL-REFERENCE](PROMTOOL-REFERENCE.md) 与 [回执](evidence/promtool-20260927/LOCAL-CHECKS.json)。早先下载失败的 PROMTOOL-NOT-RUN.md 保留为历史。静态通过仍不能证明执行等价或赛事认可。

## 0.8.0规则图扩展与相邻工具

新增/rules提供本地名字引用及前后修改影响，YAML宿主复用ISC许可yaml@2.9.1，完整规则合法性仍交promtool；没有改写MoonPromQL执行器。0.8.0把CLI规则位置ID替换为稳定身份匹配，并从相对顺序逆转中识别可能有序语义的变化。新API、来源、公开输入与不确定项见[RULE-IMPACT](RULE-IMPACT.md)。

与成熟工具对照：Cloudflare [pint的规则依赖检查](https://cloudflare.github.io/pint/checks/rule/dependency.html)已经识别多文件删除record的消费者及跨组record依赖延迟；其[pint ci工作流](https://cloudflare.github.io/pint/)用Git判断改动规则，并保留全规则集作依赖检查。固定源码核对在commit [`39ba145`](https://github.com/cloudflare/pint/blob/39ba145ee6b7c33050133dc572437e17931e0fde/internal/checks/rule_dependency.go)：该检查采用向量选择器精确metric name匹配，任务目标是已删除直接消费者及跨组延迟，不是任意变化的传递影响闭包。Cloudflare文档本身也把规则组间执行顺序标为不保证。

Grafana [Mimirtool](https://grafana.com/docs/mimir/latest/manage/tools/mimirtool/)可从离线dashboard、rule-file及在线Ruler抽取查询metrics清单；这已经覆盖资产指标盘点，因此没有把相同清单功能算作本扩展价值。Prometheus [3.14 recording-rules文档](https://prometheus.io/docs/prometheus/3.14/configuration/recording_rules/)说明组内顺序执行、组名仅需在单文件唯一、group/rule labels可能覆盖存储标签；官方 [promtool](https://prometheus.io/docs/prometheus/3.14/command-line/promtool/)负责规则文件合法性检查。这些工具及上游已有能力限制了本扩展的主张：它是可嵌入MoonBit的本地快照候选边和传递影响解释，不是新算法，不替代pint/Mimir/promtool，也未有确认采用方。
