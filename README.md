# PromQL 查询解析器

MoonBit 0.4.0 本地候选库。解析 PromQL、保留 AST 并检查静态类型，对照基准为 Prometheus **3.14.0**（Go 模块 `v0.314.0`）。查询执行器不在这个解析库的范围内。

## 试用

`./start-review.ps1` 启动浏览器演示；网页和 CLI 使用本仓库实际编译的 MoonBit 引擎。

```powershell
node tools/cli.mjs --input 'sum(rate(up[5m] offset 1h)) by(job)'
node tools/cli.mjs --input 'a / ignoring(code) group_left(job) b' --ast
node tools/cli.mjs --input 'up[min_of(5m,step()*2)]' --features durations --ast
node tools/cli.mjs --input 'info(up,{})' --experimental --json
```

`--ast` 输出结构化 JSON，包括接受结果、类型和规范化 AST；错误含可用的位置字段。字符串及标签名/值使用 Base64，避免非法 UTF-8 字节丢失。`--json` 保留原有 `{ok,output}` 格式。无输入参数时读取 stdin，也支持 `--file PATH`。退出码为 0 成功、2 查询错误、1 参数或宿主错误。

## MoonBit API

- `parse(source, options?) -> Expr raise ParseError`：现在**同时解析并检查类型**，例如 `1 < 2` 直接报错，必须写 `1 < bool 2`。
- `infer_type(expr, options?) -> QueryType`：检查表达式类型和函数签名；已启用实验功能的 AST 应传入相同选项。
- `ParserOptions::new(experimental_functions?, duration_expressions?, extended_ranges?, fill_modifiers?)`：四个开关独立，默认关闭。CLI `--features functions,durations,ranges,fills` 分别开启；`--experimental` 全开。
- `function_signatures()`：返回 90 个函数的参数类型、最少/最多参数数目、返回类型和实验标记。每次返回独立数据。
- `number_value()`、`duration_value()`、`timestamp_value()`：字面量数值、经过纳秒整数转换的秒数、毫秒时间戳。
- `regex_matches_empty()`：验证受限资源范围内的 RE2 语法并判断是否匹配空串；不是正则执行器。

公共类型见 [pkg.generated.mbti](pkg.generated.mbti)。0.4 新增 `StringBytes`、`SelectorBytes`、`Parenthesized`、时长表达式、扩展范围和填充值分支；穷举匹配 Expr 的下游需要更新。

## 支持范围

- 十进制、指数、十六进制、八进制回退、合法下划线、Inf/NaN 和时长字面量；单引号、双引号、反引号、字节/八进制/Unicode 转义。
- ASCII 指标名、UTF-8 引用指标名和标签名、原始字符串字节、四种标签匹配、RE2 语法和无指标名选择器的非空约束；`info` 第二个参数的例外单独处理。
- 算术、比较、集合、atan2、运算优先级；bool、on、ignoring、group_left/right；所有 14 个聚合及前后置 by/without。
- 全部 90 个基准版本函数的静态签名，包含可选/变长参数和实验函数。
- range/subquery、复合时长、正负/零 offset、时间戳与 start()/end()；可选的时长表达式、anchored/smoothed 和 fill/fill_left/fill_right。
- `ParseError::Located` 包含起止偏移、行列。偏移按 Unicode 标量计数，从 0 开始；行列从 1 开始。词法/语法错误定位相关 token；静态类型错误目前定位整个查询。

边界行为固定到该参考版本：零纳秒 offset 可以被后续 offset 覆盖，相同扩展范围修饰符可重复。时间戳按远离零的半舍入转换为毫秒。参考版本接受某些浮点边界时长、`offset NaN` 和超出毫秒整数范围的时间戳，并转换为 Go/amd64 的最小 int64 哨兵；转换 API 明确复现这些行为，不将其解释为正常正时长。时长表达式的求值和运行期合法性不在静态解析阶段判定。

## 验证与范围

本轮 24 组 MoonBit 测试分别在 JS 和 Wasm-GC 执行；13 组结构化入口/CLI 检查；**3,213 个独立官方解析器对照用例**检查接受结果、类型、规范化 AST，以及正则接受结果和空串匹配。覆盖每个函数的合法调用、参数数量/类型错误、实验开关、词法边界和生成表达式。证据见 `evidence/parser-reference-validation.json`；保存的独立向量可在无 Go 环境回放。

```powershell
./verify.ps1 -MoonPath C:/path/to/moon.exe
node tools/test-reference.mjs --golden
```

实时复现需先按 [参考适配器说明](tools/prometheus-reference/README.md)构建未经修改的官方解析器，再设置 `PROMQL_REFERENCE` 并运行 `node tools/test-reference.mjs`。该适配器只用于测试，生产解析路径完全使用 MoonBit。

本轮对照不是全量语言正确性证明。仍需补节点级源码区间、上游风格的多错误诊断、格式化/重写和遍历接口、更多版本/平台及性能对照。资源限制与上游不同：输入 100,000 个 UTF-16 单元，表达式/类型递归 64 层；正则输入 100,000 单元、递归 64 层、语法节点 10,000 个。超过限制直接拒绝，未宣称全面追平。

原创实现 MIT。函数签名和 Unicode 属性数据依据官方 API 生成，来源及 Apache-2.0 许可见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。官方实现未复制进生产源码。仓库独立且仅在本地，没有远程配置或上传；CI 配置不代表远端已执行，旧覆盖率、证据和 ZIP/bundle 为历史快照。
