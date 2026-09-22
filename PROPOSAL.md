# PromQL 告警查询提交前静态检查

本地申报候选材料，2026-09-22；模块 `zhou-wei97/promql`，版本 `0.4.0`。团队的公开仓库可能还是先前提交，本次没有推送；最终表单必须指向团队实际上传版本。

## 要解决的任务

在告警/仪表盘查询提交之前拒绝语法和类型错误，并向编辑器提供结构化 AST 及位置，而不要求启动查询执行器和时序数据库。

以下是目标任务和可复现工程证据，不虚构客户、存量部署或采用人数。

## 现有工作与新增贡献

[Santa968/moonpromql](https://github.com/Santa968/MoonPromQL)。Santa968/MoonPromQL 已有 parser 和内存执行器。其固定提交说明缺 subquery/compound duration，时间戳和位置接口也有边界；本项目提供这些语法以及固定 Prometheus3.14.0 的类型/AST 契约，不把 parser 或执行器说成首个。本项目没有查询执行器。

MoonBit 实现词法、AST、函数类型签名、受限 RE2 语法检查和位置；Node 只接入输入文件与退出码。

- [Santa968/MoonPromQL 固定提交](https://github.com/Santa968/MoonPromQL/tree/b1b7f90dd943bda68614b670e2420fc802db684f)：依据该版本的公开说明对照，不冒充本轮运行了对方全部实现。

## 可复现路径

仓库附编译引擎；修改源码后先构建。参考工具的额外依赖与环境变量见 TESTING.md；测试创建的网络服务仅在本机。

```sh
node tools/cli.mjs --input "rate(up[5m])[1h:5m]" --ast
node tools/cli.mjs --input "up offset 1h30m" --ast
node tools/test-reference.mjs --golden
```

本轮重放 3213 个已保存独立官方向量，接受结果、类型、AST 等一致；这次是 golden 重放，不是重新构建 Go 上游。 本轮 JS/WasmGC 核心测试及 JS 构建通过，原始日志见 [本轮验证](evidence/innovation-review-20260922/results.json)。测试数量证明所列范围，不能代替创新性论证或推断正式审核通过。

## 边界与来源

静态类型错误目前定位整个查询；没有节点级源码重写器、完整多错误诊断或任意 RE2 执行；固定版本行为不等于所有 Prometheus 版本。

许可证与来源沿用仓库现有 LICENSE/第三方说明，不将标准、算法、词库或参考软件写成本项目发明。查重不是对全生态不存在的证明，日期、相邻项与未覆盖范围见 [DUPLICATION.md](DUPLICATION.md)。
