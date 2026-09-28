# PromQL 规则依赖与修改影响 · 0.8.0

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

输出保留文件SHA256、规则组内位置和原名、本地候选边、外部指标、同名产出和不确定选择器。规则ID由组名、类型/规则名稳定匹配；重复名包含规则内容摘要，完全相同的重复项另带出现序号。组按名称规范排序，组内声明顺序保留；仅插入/删除引起的位置平移不再把旧规则全标成变化，组内共同规则的相对顺序逆转仍保守标记。changed是输入变化，affected沿名字边传播，uncertain另外列出无法闭合的选择器及下游，三者可以重叠。详见 [契约与限制](RULE-IMPACT.md)。

实际依赖Santa968/moonpromql@0.1.0执行器，承认语言层重叠；root静态类型API和/moonpromql适配保留。静态通过不保证上游可执行，@时间戳仍因秒/毫秒语义差异拒绝。没有新写TSDB或完整规则引擎，见 [上游关系](UPSTREAM-RELATION.md)。

Prometheus的promtool已有离线规则合法性检查，应继续使用它。成熟工具pint的`rule/dependency`检查已覆盖多文件删除后消费者和跨组record依赖延迟，`pint ci`结合Git识别修改规则并利用完整规则集；Mimirtool已有规则文件、Dashboard及Ruler指标清单。这里提供的是单快照本地名字候选图与前后图传递影响，不替代上述工作流，也不宣称新算法或同类工具不存在。

固定公开kube-prometheus配置含135条规则、53条本地名字边和221项外部引用。Prometheus3.14官方解析器输出232条查询AST；39组旧新图用另一种闭包算法核对边、环、删除/改名及不确定传播。它是公开软件配置，不是本项目的采用方。

当前回执和双后端/宿主边界见 [TESTING](TESTING.md) 与 [LOCAL-CHECKS](evidence/rule-impact-20260927/LOCAL-CHECKS.json)。旧版成绩按版本保存，未重复计作本轮重跑。没有远程CI、生产采用或审核通过证据。

每快照最多512规则、32768名字候选边、1048576个UTF-16代码单元的表达式/上下文，文件最多2MiB。只覆盖提供的单份清单，不查询TSDB或求标签交集。宽正则、无精确名字以及告警隐式ALERTS/ALERTS_FOR_STATE序列列为不确定项；哈希ID用于跨快照匹配，不是无冲突证明；当某名称从唯一变成重复、或反之，报告可能将其保守表示为旧项删除和新项添加。核心`compare`将Rule数组的相对顺序视为有意义，适配器应规范化不具语义的跨组排列。环只报告成员，不判断合法性或建议执行顺序。

许可证MIT AND Apache-2.0；YAML宿主依赖ISC，公开配置保留Apache-2.0来源。固定工具链见TOOLCHAIN.md，申报稿见 [PROPOSAL](PROPOSAL.md)。

## 本地验收与公开交付（2026-09-28）

核心实现使用 MoonBit；[固定编译器](.moonbit-version)为 `moonc 0.10.14+7d59c7ec9`。先按本文安装宿主依赖、运行 `moon update`，再从仓库根目录执行以下与 [CI](.github/workflows/ci.yml) 对齐的检查；可运行任务和适用边界见本文前面的示例与说明。

```sh
moon check --deny-warn
moon test --target wasm-gc --deny-warn
moon test --target js --deny-warn
moon build --target js --release --deny-warn
moon package
```

跨平台复核（2026-09-28，本地 Ubuntu-D 26.04 WSL2）：从当时的源码归档全新解包，固定 `moonc 0.10.14+7d59c7ec9` 下通过 `moon update`、`moon fmt --check`、`moon info`、严格检查、JS/Wasm-GC 测试及 JS release 构建；Node 24.21.0 跑通本仓一条宿主入口。本次补记仅修改文档，代码与 CI 未变；复核日志在本地交接包中，公开提交后的 GitHub Actions 仍须单独核对。

本地核验：JS/Wasm-GC 测试、规则影响示例和 3213 项参考用例通过。 `moon package` 已完成离线打包预检，它不等于已发布到 Mooncakes。

公开交付（2026-09-28 核对）：当日 [https://github.com/zhou-wei97/moonbit-promql](https://github.com/zhou-wei97/moonbit-promql) 可匿名读取 Git HEAD，Mooncakes 在线版本为 `0.4.0`；此处源码版本 `0.8.0` 仍需由团队同步到公开仓库，检查新提交的 GitHub Actions，再由对应账号发布 Mooncakes 新版。相关远端 CI 与赛事结果仍需以实际记录核对。项目许可见 [LICENSE](LICENSE)；如使用第三方材料，其来源和许可见仓内相应说明。
