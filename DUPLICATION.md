# promql 查重与定位 · 2026-09-22

[Santa968/moonpromql](https://github.com/Santa968/MoonPromQL)。Santa968/MoonPromQL 已有 parser 和内存执行器。其固定提交说明缺 subquery/compound duration，时间戳和位置接口也有边界；本项目提供这些语法以及固定 Prometheus3.14.0 的类型/AST 契约，不把 parser 或执行器说成首个。本项目没有查询执行器。

- [Santa968/MoonPromQL 固定提交](https://github.com/Santa968/MoonPromQL/tree/b1b7f90dd943bda68614b670e2420fc802db684f)：依据该版本的公开说明对照，不冒充本轮运行了对方全部实现。

本轮材料采用定位：**PromQL 告警查询提交前静态检查**。

MoonBit 与宿主分工：MoonBit 实现词法、AST、函数类型签名、受限 RE2 语法检查和位置；Node 只接入输入文件与退出码。

本轮证据：本轮重放 3213 个已保存独立官方向量，接受结果、类型、AST 等一致；这次是 golden 重放，不是重新构建 Go 上游。 具体输入、脚本、已执行与历史对照分开记录在 [PROPOSAL.md](PROPOSAL.md) 和 evidence/innovation-review-20260922/。

边界：静态类型错误目前定位整个查询；没有节点级源码重写器、完整多错误诊断或任意 RE2 执行；固定版本行为不等于所有 Prometheus 版本。

检索覆盖 Mooncakes 官方关键词/别名、GitHub 仓库查询、GitLink 公开索引、直接来源文档；没有完整赛事报名表、私有仓库、未公开分支或 GitHub 全代码索引。GitLink 索引也不完整。未找到同范围项目不等于生态空白；已有相关项目不自动等于无独立贡献。完整查询和固定提交快照在总交付目录 innovation-review-20260922/。

初次复核风险为“高”。本次补足差异和可复现工作流，没有自行将重叠归零，也不替评委作创新性认定。最终公开代码与表单附件须使用一致版本。
