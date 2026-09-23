# 与已有项目的真实关系

本项目：https://github.com/zhou-wei97/moonbit-promql
上游：[Santa968/moonpromql@0.1.0](https://github.com/Santa968/MoonPromQL)。本轮读取固定提交 b1b7f90dd943bda68614b670e2420fc802db684f，实际构建使用 Mooncakes 精确版本；仓库提交和发布包不推定字节相同。已下载包的源文件指纹见 [DEPENDENCY.json](evidence/integration-20260923/DEPENDENCY.json)。

独立静态解析器、批量清单检查及可选执行适配器。执行算法来自 MoonPromQL，未新写查询执行器、TSDB 或完整告警系统。

## 实际复用

本项目 parse/infer_type → 上游真实 parser → 保留上游 AST → 调用上游 evaluate；静态错误、上游语法错误、已知不支持范围和数据相关运行错误分别保留。

导入 `zhou-wei97/promql/moonpromql` 后调用 `prepare(source)`，再使用返回值的 `query_type()` 和 `evaluate(context)`；context 是 `Santa968/moonpromql/eval.EvalContext`。用户直接使用上游 Series/LabelSet/Sample 建立输入，不需要转造模型。

## 用实跑区分支持与拒绝

16个选定查询实际调用上游；四个数值结果有手工期望，成功准备后的执行结果与直接调用上游一致。子查询/复合时长可通过本项目静态检查，但被上游解析器拒绝；sum(1)在准备阶段报告类型错误。

`sum(1)`、非法语法及未知函数可在静态阶段失败；合法子查询可能在上游语法阶段失败；含 @ 的选择器明确拒绝；不支持的函数或数据相关错误在 evaluate 保留。

适配层明确拒绝 @ 时间戳，因为 Prometheus 秒和该版 MoonPromQL 毫秒语义不同。上下文时间仍使用上游毫秒。prepare 成功不保证执行成功：absent(up)就是记录的反例。正则、计数器外推及向量匹配沿用上游局限，未证明 Prometheus 执行等价。

保留 root parser 的较宽语法范围和 Prometheus 3.14.0 静态契约；3213个保存的独立参考答案仅用于静态重放，不能当作运行语义证据。

本例不是性能对决。没有证明优于上游，没有声称上游认可，也没有用未命中搜索结果来推断生态空白。没有真实使用方；新增部分是静态检查与既有执行器的保守适配，不主张新执行算法。

## 许可

本项目源码保留MIT；上游Apache-2.0原文见 [许可](licenses/moonpromql-Apache-2.0.txt)。运行中保留实际依赖，未复制改写上游源代码。`examples/integration-engine.mjs`含链接的上游代码，因此模块分发元数据采用MIT AND Apache-2.0。MoonBit标准库及历史参考数据许可仍按各自来源说明。
