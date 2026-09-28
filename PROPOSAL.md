# MoonBit PromQL 规则依赖与修改影响

仓库：https://github.com/zhou-wei97/moonbit-promql
模块zhou-wei97/promql；本地0.8.0；MIT AND Apache-2.0；未推送或复申。

任务：修改、改名或删除记录规则时，定位清单内可能受影响的recording/alert rules。
新增纯MoonBit /rules库，从既有表达式AST生成本地名字引用，沿旧新图并集传播，保留删除/改名之前的下游。
同名产出列全部候选；宽选择器及告警隐式序列保留不确定性，不冒称无影响。
宿主复用yaml@2.9.1，读取groups或PrometheusRule，纳入外层metadata、group设置及规则labels/annotations。
Node负责文件/YAML交接；名字图、环成员和影响闭包在MoonBit运行，JS/Wasm-GC可直接消费核心。

实际复用Santa968/moonpromql@0.1.0执行器，承认语言层能力重叠，撤回生态空白叙述。
旧root静态类型API与/moonpromql适配保留，没有重写执行算法或TSDB。
promtool已有离线规则合法性检查；Mimir固定ruler源码输出group聚合指标。
本增量限定为规则级引用及前后修改影响，不声称全生态首创，也不替代完整规则校验。

复现：npm ci --ignore-scripts；moon build --target js --release。
node tools/rule-impact.mjs examples/rule-impact/control-plane.yaml；两文件调用可比较修改。
moon run examples/rule-review --target js或wasm-gc直接消费纯核心。
历史0.7回执含135条kube-prometheus规则、53本地边、Prometheus3.14官方解析器232条AST与39组图比较，见旧版证据。
本地0.8稳定ID收据含39组保存AST重放、13个宿主检查及新增规则噪音、改名/删除/移动、重复名和组内重排验证，见evidence/stable-ids-20260927/LOCAL-CHECKS.json。

上限512规则、32768边、1Mi代码单元表达式/上下文；不查询TSDB或求标签交集。
CLI以组名+规则类型/名称的哈希身份匹配，减少插入造成的噪音；完全重复项及唯一/重复切换可能以删除和添加保守呈现。未知选择器和清单外部消费者使报告不能证明安全部署。
环只报告成员，不判断合法性或建议执行顺序；静态通过仍不保证MoonPromQL可执行。
没有确认使用方、生产验证或远程CI结论；公开配置不等于项目被采用或赛事通过。

**验收复现与交付状态（2026-09-28 本地）**：以 moonc 0.10.14+7d59c7ec9 通过 `--deny-warn` 检查、JS/Wasm-GC 测试和构建、最小样例和离线 `moon package`；同一代码在 Ubuntu-D 26.04 WSL2 全新解包后通过格式、接口生成、严格双后端检查及 Node 24.21.0 最小宿主入口；公开 Git HEAD 当日可匿名读取，Mooncakes 在线版 `0.4.0` 落后于本地 `0.8.0`；新版推送、远端 CI 和发布待核对。命令与能力边界见 [README](README.md)，自动检查见 [CI](.github/workflows/ci.yml)；本地通过不代表赛事审核通过。
