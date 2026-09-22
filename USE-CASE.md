# 一次检查一组告警/面板查询

在告警/仪表盘查询提交之前拒绝语法和类型错误，并向编辑器提供结构化 AST 及位置，而不要求启动查询执行器和时序数据库。

## 输入、操作、输出

原创查询清单，批处理入口不读取 YAML、不执行查询，不代替 promtool 的完整规则检查。

最简运行：先按 README 构建，然后 `node examples/run-use-case.mjs`。它自动创建输出目录并执行下面命令。下列 `{out}` 是运行器替换的实际目录，不是直接输入 shell 的变量；stdin 文件由运行器传递，以避免 Windows 与 POSIX 重定向差异。

```text
node tools/check-queries.mjs examples/queries.json
```

观察：全部 3 条接受，输出各自 id、类型、AST 及输入 SHA256；任一查询无效返回 2，其他条目仍报告。

每一步输出见实际目录下 `step-N.stdout.txt` / `step-N.stderr.txt`；本轮已保存回执见 `evidence/value-rework-20260922/use-case.json`。

## 为什么保留这个实现

需要提交前批量语法/类型检查和结构化 AST，而无需运行时序数据库时使用；与 MoonPromQL parser 重叠，限定语法/契约差异必须公开。

Santa968/MoonPromQL 已有 parser 和内存执行器。其固定提交说明缺 subquery/compound duration，时间戳和位置接口也有边界；本项目提供这些语法以及固定 Prometheus3.14.0 的类型/AST 契约，不把 parser 或执行器说成首个。本项目没有查询执行器。

## 不能由样例推出的结论

静态类型错误目前定位整个查询；没有节点级源码重写器、完整多错误诊断或任意 RE2 执行；固定版本行为不等于所有 Prometheus 版本。

该样例是可修改的使用入口，不能证明存在真实用户、全部兼容或性能领先。继续投入的依据应是明确的输入或接入需求；若对接任务用既有成熟库即可完成，应优先复用而不是为保留参赛数量扩张本项目。
