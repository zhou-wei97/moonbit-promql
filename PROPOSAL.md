# MoonBit PromQL 规则依赖与修改影响

仓库：https://github.com/zhou-wei97/moonbit-promql
模块zhou-wei97/promql；本地0.7.0；MIT AND Apache-2.0；未推送或复申。

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
公开kube-prometheus配置135规则、53本地名字边，原文SHA与Apache-2.0来源固定保存。
Prometheus3.14官方解析器232条AST与39组图/变化场景由另一种闭包算法核对。
双后端核心及宿主错误/Operator元数据边界见evidence/rule-impact-20260927/LOCAL-CHECKS.json。

上限512规则、32768边、1Mi代码单元表达式/上下文；不查询TSDB或求标签交集。
位置ID可能保守多报；未知选择器和清单外部消费者使报告不能证明安全部署。
环只报告成员，不判断合法性或建议执行顺序；静态通过仍不保证MoonPromQL可执行。
没有确认使用方、生产验证或远程CI结论；公开配置不等于项目被采用或赛事通过。
