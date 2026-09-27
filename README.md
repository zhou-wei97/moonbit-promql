# PromQL 规则依赖与修改影响 · 0.7.0

仓库：**https://github.com/zhou-wei97/moonbit-promql**。模块 `zhou-wei97/promql`。当前本地版本未推送，审核状态未确认。

修改或删除记录规则时，从两份清单解释哪些 recording/alert rules 可能受影响。MoonBit读取既有PromQL语法树，建立本地指标名引用图，再沿修改前后两图的并集追踪下游，保留删除和改名之前的引用。结果用于代码审阅，不能证明安全部署。

```sh
npm ci --ignore-scripts
moon build --target js --release
node tools/rule-impact.mjs examples/rule-impact/control-plane.yaml
node tools/rule-impact.mjs before.yaml after.yaml
moon run examples/rule-review --target js
moon run examples/rule-review --target wasm-gc
```

宿主接收单个标准groups YAML/JSON或Prometheus Operator的PrometheusRule文档，复用ISC许可yaml@2.9.1；Node负责文件、YAML及上下文交接，AST、名字图、环成员和影响传播由纯MoonBit `/rules`库完成。后两个例子直接消费核心，不需要Node实现算法。

输出保留文件SHA256、规则位置和原名、本地候选边、外部指标、同名产出和不确定选择器。changed是输入变化，affected沿名字边传播，uncertain另外列出无法闭合的选择器及下游，三者可以重叠。详见 [契约与限制](RULE-IMPACT.md)。

实际依赖Santa968/moonpromql@0.1.0执行器，承认语言层重叠；root静态类型API和/moonpromql适配保留。静态通过不保证上游可执行，@时间戳仍因秒/毫秒语义差异拒绝。没有新写TSDB或完整规则引擎，见 [上游关系](UPSTREAM-RELATION.md)。

Prometheus的promtool已有离线规则合法性检查，应继续使用它。Mimirtool已有规则/面板指标清单；固定ruler源码的结果按group聚合指标，本轮限定为逐规则引用和前后修改影响。这不是全生态不存在其它图工具的证明。

固定公开kube-prometheus配置含135条规则、53条本地名字边和221项外部引用。Prometheus3.14官方解析器输出232条查询AST；39组旧新图用另一种闭包算法核对边、环、删除/改名及不确定传播。它是公开软件配置，不是本项目的采用方。

当前回执和双后端/宿主边界见 [TESTING](TESTING.md) 与 [LOCAL-CHECKS](evidence/rule-impact-20260927/LOCAL-CHECKS.json)。旧版成绩按版本保存，未重复计作本轮重跑。没有远程CI、生产采用或审核通过证据。

每快照最多512规则、32768名字候选边、1048576个UTF-16代码单元的表达式/上下文，文件最多2MiB。只覆盖提供的单份清单，不查询TSDB或求标签交集。宽正则、无精确名字以及告警隐式ALERTS/ALERTS_FOR_STATE序列列为不确定项；位置ID在插入/重排时可能保守多报。环只报告成员，不判断合法性或建议执行顺序。

许可证MIT AND Apache-2.0；YAML宿主依赖ISC，公开配置保留Apache-2.0来源。固定工具链见TOOLCHAIN.md，申报稿见 [PROPOSAL](PROPOSAL.md)。
