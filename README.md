# MoonBit PromQL 表达式类型检查库与 MoonPromQL 接入 · 0.6.0
仓库：https://github.com/zhou-wei97/moonbit-promql

告警或面板查询提交前需要类型检查；仅通过静态检查还不足以证明既有执行器支持该查询。 独立静态解析器、批量清单检查及可选执行适配器。执行算法来自 MoonPromQL，未新写查询执行器、TSDB 或完整告警系统。

本版本明确依赖 [Santa968/moonpromql@0.1.0](https://github.com/Santa968/MoonPromQL)，实际实现的关系是：本项目 parse/infer_type → 上游真实 parser → 保留上游 AST → 调用上游 evaluate；静态错误、上游语法错误、已知不支持范围和数据相关运行错误分别保留。

## 一次运行

安装 MoonBit 和 Node.js 20+ 后，在仓库根目录执行：

```sh
moon update
moon check
moon test --target js
moon test --target wasm-gc
moon build --target js
node tools/refresh-engines.mjs
node examples/run-upstream-integration.mjs output/upstream
```

该入口通过真实编译的 MoonBit 适配器调用依赖，生成 report.json；不需要独立服务或账户。源码见 [适配包](moonpromql)、[示例](examples/run-upstream-integration.mjs)。`node examples/run-use-case.mjs` 同时执行本例和原有主例。

## 公开接口和证据

导入 `zhou-wei97/promql/moonpromql` 后调用 `prepare(source)`，再使用返回值的 `query_type()` 和 `evaluate(context)`；context 是 `Santa968/moonpromql/eval.EvalContext`。用户直接使用上游 Series/LabelSet/Sample 建立输入，不需要转造模型。

16个选定查询实际调用上游；四个数值结果有手工期望，成功准备后的执行结果与直接调用上游一致。子查询/复合时长可通过本项目静态检查，但被上游解析器拒绝；sum(1)在准备阶段报告类型错误。 输入均为原创确定性样例，没有真实用户或生产部署证据。详细结果见 [本轮报告](evidence/integration-20260923/example-output/report.json) 和 [验证说明](TESTING.md)。

## 边界

适配层明确拒绝 @ 时间戳，因为 Prometheus 秒和该版 MoonPromQL 毫秒语义不同。上下文时间仍使用上游毫秒。prepare 成功不保证执行成功：absent(up)就是记录的反例。正则、计数器外推及向量匹配沿用上游局限，未证明 Prometheus 执行等价。

保留 root parser 的较宽语法范围和 Prometheus 3.14.0 静态契约；3213个保存的独立参考答案仅用于静态重放，不能当作运行语义证据。 没有真实使用方；新增部分是静态检查与既有执行器的保守适配，不主张新执行算法。

[上游关系与许可](UPSTREAM-RELATION.md)、[申报正文](PROPOSAL.md)、[复核说明](REVIEW-RESPONSE.md)、[用例](USE-CASE.md)。本轮仅本地交付，远端CI/发布/表单状态不由本地检查推导。[历史说明](docs/before-integration/README.md)只记录旧版本，不能作为本版本成熟度承诺。

本项目原创源码继续MIT；链接的上游Apache-2.0代码及编译产物按其许可分发，见 [第三方说明](THIRD-PARTY-NOTICES.md)。不主张生态首个或算法创新。

CI固定的编译器与标准库版本见 [TOOLCHAIN.md](TOOLCHAIN.md)；升级时需同时核对生成产物。

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

本轮尝试取得promtool3.14.0独立二进制，下载未完成，因此**没有运行其规则检查或观察退出码**；官方能力依据文档，未将预期冒充实跑。记录在evidence/public-expressions-20260927/PROMTOOL-NOT-RUN.md。既有3213条Go静态golden及28项/后端仍是原0.6.0证据，本次核心、引擎与适配指纹匹配；没有重复声称执行等价。是否认可纯MoonBit基础库的独立性，仍由赛事判断。
