# PromQL 查询解析器

本地 MoonBit 0.3.0 候选库，输出结构化语法树并进行静态类型检查。没有连接指标数据库或执行查询。

## 试用

`./start-review.ps1` 启动独立浏览器演示；页面地址见启动脚本。网页和 CLI 都使用本仓库真实编译的 MoonBit 引擎。

```powershell
node tools/cli.mjs --input 'sum(rate(up[5m] offset 1h)) by(job)'
node tools/cli.mjs --input 'a / ignoring(code) group_left(job) b' --json
node tools/cli.mjs --input 'sum_over_time((up + 1)[1h:1m] @ end())'
```

MoonBit 调用：`parse(source)` 得到 Expr；`infer_type(expr)` 检查类型并返回 Scalar、InstantVector、RangeVector 或 StringValue。
解析成功并不代表类型合法，例如 `1 < 2` 必须补 bool；演示入口会同时执行这两个步骤。

## 支持范围

- 指标选择器、四种标签匹配运算符、基本十进制数和字符串、括号、算术、比较、集合运算以及 atan2。
- 匹配修饰符 bool、on、ignoring、group_left、group_right。语法树保留匹配字段；检查标量/向量组合、集合运算禁用分组、on/include 标签冲突。
- 正负 offset，@ 十进制时间戳及 start()/end()；检查位置与重复，包括括号内已有修饰符。
- 复合时长如 1h30m、5m10s；单位必须降序、不重复，范围和步长必须正数，offset 可为零。范围检查避免溢出。
- 子查询 [range:step] 和省略 step 的 [range:]，结果为 RangeVector，要求内部表达式为 InstantVector。
- sum/avg/min/max/count/group/stddev/stdvar；topk/bottomk/quantile/count_values 参数聚合，by/without 可在聚合参数前后。
- 常用单参数范围/向量函数，加上 clamp、round、histogram_quantile、quantile_over_time、predict_linear、label_replace、label_join。完整签名见 signatures.mbt。

新增 Expr 分支包括 StringLiteral、BinaryMatch、AggregateParam、Subquery、Offset、At。
未带修饰符的二元表达式仍用 Binary；普通聚合现在统一用 Aggregate，带参数聚合使用 AggregateParam。
对 Expr 穷举匹配的下游代码需要处理新分支，API 清单见 pkg.generated.mbti。

## 验证

安装 MoonBit 后 `./verify.ps1` 执行完整本项目工作流。参考工具测试独立可选：

```powershell
$env:PROMTOOL='C:/path/to/promtool.exe'
node tools/test-promtool.mjs
```

本轮 12 项 JS 项目测试通过；后续局部修补的 4 组相关测试也通过，证据见 evidence/modifiers-focused-validation.json。
官方 promtool 下载过慢后停止，对照脚本已准备但尚未执行。该对照只验证接受/拒绝，与本项目 AST 固定值测试互补；
不会查询指标或证明执行结果、性能、所有 PromQL 语法兼容。官方二进制下载在仓库外，未随本项目分发。

## 剩余差距

仍缺完整数字字面量、原始字符串与全部转义、完整函数表、RE2 表达式语义/空标签约束、
UTF-8 引用标识符、源码位置诊断和新版本/实验性时长表达式及运算符。
不声称已全面追平。输入最多 100,000 UTF-16 单元，递归与类型树深度限 64。

依据 [Prometheus 运算符文档](https://prometheus.io/docs/prometheus/latest/querying/operators/)、
[基础语法](https://prometheus.io/docs/prometheus/latest/querying/basics/)与官方语法定义，自行实现，未复制上游源码或测试。
原创源码采用 MIT；查重证据见 DUPLICATION.md，历史检索不能保证没有同类项目。

独立本地 Git 仓库，没有配置远程或上传。localreview 是本地命名空间，旧 ZIP/bundle 是历史快照，本轮未重打包。
