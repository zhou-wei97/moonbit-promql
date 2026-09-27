# 规则修改影响契约

任务是代码审阅：修改recording/alert rule的表达式、名字、labels或部署选择条件，定位所提供清单内需要连带检查的规则。它不执行PromQL，不批准部署。

导入`zhou-wei97/promql/rules`，构造`Rule { id, record: String?, expr, context }`，调用analyze或compare。context由调用方传入需追踪的完整语义上下文；只传表达式就只能追踪表达式。参数和结果数组作为只读值使用。

- edges给出producer、consumer、metric及ambiguous。同名record连接全部候选，不求标签交集，所以边不保证运行时存在匹配数据。
- external表示该名字在提供清单中没有显式record产出，不推断它不存在于其它规则或TSDB。
- unresolved记录无精确名字、非UTF8匹配器字节或隐式读取边界。ALERTS/ALERTS_FOR_STATE可由告警隐式产生，不能仅因未找到record就称其完全外部，故同时列入unresolved。
- cyclic_rules是候选图中处于环上的规则，不判断规则非法；宽选择器可能隐藏额外环。
- changed是完整Rule值不同、添加或删除；affected从changed沿旧新边并集可达，包含变化自身及已删除ID。
- uncertain在存在任何变化时包含旧新unresolved消费者及其下游，相同快照为空。它与affected可以重叠，必须同时阅读。

精确`__name__="metric"`可以确定名字；仅有正则名字时不求其与指标集合的交集。精确名字的附加过滤条件仍保留候选边，允许多报。label_replace/label_join修改输出名字不会产生新的输入序列，仍从参数选择器取引用，record字段决定本地保存名。默认解析选项不启用实验能力，解析/类型/容量错误整份失败。

宿主复用yaml@2.9.1，接收单文档groups或PrometheusRule.spec.groups；拒绝重复键、别名、不精确整数和超过32层的元数据。组名必须非空唯一，每条恰含record/alert之一。只检查接入必需结构，完整规则合法性继续交promtool。成功JSON退出0，错误写stderr退出1。

位置ID为组序号/规则序号，插入或重排可能多报。文档根部除groups/spec.groups外的字段、group除rules外的字段及完整rule都进入context，Operator选择标签、namespace或API版本变化不会消失。跨文件组合应由调用方分配稳定ID并提供完整上下文。

限制为每快照512规则、32768边、1048576 UTF-16代码单元表达式/上下文、宿主文件2MiB，JSON桥接入口另限制每个参数8388608个UTF-16代码单元，沿用原解析器深度/长度限制。它们是输入上限，不是进程内存保证。

## 已有工作与来源

[MoonPromQL固定源码](https://github.com/Santa968/MoonPromQL/tree/b1b7f90dd943bda68614b670e2420fc802db684f)已有parse/evaluate/query，仍为实际执行依赖。[官方promtool](https://prometheus.io/docs/prometheus/3.14/command-line/promtool/)已有离线规则检查。[Mimir固定ruler分析](https://github.com/grafana/mimir/blob/112a024c70d51163830673b3b276abd8dd0ebb99/pkg/mimirtool/analyze/ruler.go)把record和selector汇成group指标清单；这是有限源码比较，不证明所有工具都没有依赖图，没有复制Mimir代码。

公开kube-prometheus配置的固定提交、SHA及Apache-2.0许可在examples/rule-impact/SOURCE.json。没有确认采用方；语法树和依赖图不是新算法。增量是MoonBit可直接消费且明确保留不确定项的规则改动审阅接口，赛事是否认可仍由审核判断。

## 复验

先按README构建，再运行`node tools/test-rule-impact.mjs --golden work/replay.json`。此模式重放实际官方AST，不宣称新运行官方程序。实时对照按tools/prometheus-reference/README.md构建固定v0.314.0适配器，设置PROMQL_REFERENCE后省略--golden。检查先核实公开文件SHA，用官方AST提取引用，再用Floyd-Warshall闭包独立核对产品的队列遍历。没有验证TSDB数值或Prometheus实际调度。
