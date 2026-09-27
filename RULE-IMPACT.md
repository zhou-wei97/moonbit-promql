# 规则修改影响契约

任务是代码审阅：修改recording/alert rule的表达式、名字、labels或部署选择条件，定位所提供清单内需要连带检查的规则。它不执行PromQL，不批准部署。

导入`zhou-wei97/promql/rules`，构造`Rule { id, record: String?, expr, context }`，调用analyze或compare。context由调用方传入需追踪的完整语义上下文；只传表达式就只能追踪表达式。参数和结果数组作为只读值使用。

- edges给出producer、consumer、metric及ambiguous。同名record连接全部候选，不求标签交集，所以边不保证运行时存在匹配数据。
- external表示该名字在提供清单中没有显式record产出，不推断它不存在于其它规则或TSDB。
- unresolved记录无精确名字、非UTF8匹配器字节或隐式读取边界。ALERTS/ALERTS_FOR_STATE可由告警隐式产生，不能仅因未找到record就称其完全外部，故同时列入unresolved。
- cyclic_rules是候选图中处于环上的规则，不判断规则非法；宽选择器可能隐藏额外环。
- changed是完整Rule值不同、添加或删除，并包含共同规则中相对顺序发生逆转的两端；affected从changed沿旧新边并集可达，包含变化自身及已删除ID。
- uncertain在存在任何变化时包含旧新unresolved消费者及其下游，相同快照为空。它与affected可以重叠，必须同时阅读。

精确`__name__="metric"`可以确定名字；仅有正则名字时不求其与指标集合的交集。精确名字的附加过滤条件仍保留候选边，允许多报。label_replace/label_join修改输出名字不会产生新的输入序列，仍从参数选择器取引用，record字段决定本地保存名。默认解析选项不启用实验能力，解析/类型/容量错误整份失败。

宿主复用yaml@2.9.1，接收单文档groups或PrometheusRule.spec.groups；拒绝重复键、别名、不精确整数和超过32层的元数据。组名必须非空唯一，每条恰含record/alert之一。只检查接入必需结构，完整规则合法性继续交promtool。成功JSON退出0，错误写stderr退出1。

CLI的ID使用SHA-256摘要匹配`(group name, rule kind, rule name)`。唯一名称不含内容摘要，因此表达式、标签和其他规则元数据改变时仍识别为同一规则，再由完整context将其标记变化。重复键额外包含规范化完整规则摘要；内容完全相同的重复项增加出现序号以确保ID唯一。哈希仅用于匹配，不构成数学上的无冲突保证。键从唯一变为重复、从重复变为唯一、规则改名或跨组移动时，旧ID可能变为删除且新ID成为添加；旧新边并集保留这类变更的上下游。输出的position仅是组内定位字段，不参与身份。

CLI按组名排序组块，因为Prometheus不承诺组间执行顺序；同一组内保留声明顺序。核心`compare`没有group字段，因此将Rule数组顺序视作有意义：纯插入或删除造成索引平移不会改变共同规则，但共同ID相对次序逆转时，将逆转两端保守标记为changed。外部核心调用方若输入多个来源，应先规范化无语义的组排列；对非顺序语义输入，该逻辑可能多报。

文档根部除groups/spec.groups外的字段、group除rules外的字段及完整rule都进入context，Operator选择标签、namespace或API版本变化不会消失。跨文件组合应由调用方分配稳定ID并提供完整上下文。

限制为每快照512规则、32768边、1048576 UTF-16代码单元表达式/上下文、宿主文件2MiB，JSON桥接入口另限制每个参数8388608个UTF-16代码单元，沿用原解析器深度/长度限制。它们是输入上限，不是进程内存保证。

## 已有工作与来源

[MoonPromQL固定源码](https://github.com/Santa968/MoonPromQL/tree/b1b7f90dd943bda68614b670e2420fc802db684f)已有parse/evaluate/query，仍为实际执行依赖。[官方promtool](https://prometheus.io/docs/prometheus/3.14/command-line/promtool/)可检查多个rule文件合法性和运行rule测试，但不是before/after影响闭包。[Cloudflare pint文档](https://cloudflare.github.io/pint/checks/rule/dependency.html)明确覆盖跨文件record删除后的直接消费者和跨组record依赖延迟；[pint CI文档](https://cloudflare.github.io/pint/)说明用Git选变更规则，同时保留全规则集作依赖检查。另核对的pint实现固定在[commit 39ba145](https://github.com/cloudflare/pint/blob/39ba145ee6b7c33050133dc572437e17931e0fde/internal/checks/rule_dependency.go)：依赖检查按向量选择器的确切metric name匹配，没有计算MoonPromQL这里的通用传递闭包或标签交集；这是源码范围结论，不代表pint整体缺少其他检查。[Mimirtool文档](https://grafana.com/docs/mimir/latest/manage/tools/mimirtool/)已有Dashboard、离线rule-file及在线Ruler指标提取，故本项目不应把指标清单当新增价值。此处有限差异是纯MoonBit快照API输出传递候选影响及未知选择器不确定集；不声称算法新颖或工具市场空白，也没有确认的采用方。

公开kube-prometheus配置的固定提交、SHA及Apache-2.0许可在examples/rule-impact/SOURCE.json。没有确认采用方；语法树和依赖图不是新算法。增量是MoonBit可直接消费且明确保留不确定项的规则改动审阅接口，赛事是否认可仍由审核判断。

## 复验

先按README构建，再运行`node tools/test-rule-impact.mjs --golden work/replay.json`。此模式重放实际官方AST，不宣称新运行官方程序。实时对照按tools/prometheus-reference/README.md构建固定v0.314.0适配器，设置PROMQL_REFERENCE后省略--golden。检查先核实公开文件SHA，用官方AST提取引用，再用Floyd-Warshall闭包独立核对产品的队列遍历。没有验证TSDB数值或Prometheus实际调度。
