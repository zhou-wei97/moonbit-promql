# MoonBit PromQL 解析与静态校验器 · 项目申报书

## 一、项目名称

MoonBit PromQL 解析与静态校验器

## 二、项目说明

MoonBit 解析 PromQL、保留 AST 并执行静态类型检查，固定对照 Prometheus 3.14.0；不包含查询执行器、TSDB 或 Prometheus 服务端。

## 三、方向与通用性

开发者工具与可观测性。生态已有 Santa968/moonpromql（https://github.com/Santa968/MoonPromQL），含解析与内存执行。本项目应按版本化语法、静态诊断和 oracle 对照范围展示价值，不宣称首个实现。

## 四、应用场景

CLI 在告警规则提交前检查查询；结构化 AST 供编辑器消费；function_signatures 提供函数目录；实验开关显式选择语法，不将实验能力默认开启。

## 五、功能与验证边界

固定范围含 90 个函数签名、选择器、聚合、向量匹配、时长与实验语法。记录的 3213 项比较检查接受/拒绝、类型与规范化 AST；错误区间、资源上限及 RE2 静态校验均有边界，不作完整上游兼容保证。

## 六、原创性与参考材料

原创解析器 MIT。Prometheus（Apache-2.0，https://github.com/prometheus/prometheus/tree/v3.14.0）提供行为基准及生成的函数签名事实；regex_properties 保存属性名称而非复制正则实现。派生材料来源和 Apache 许可见 THIRD_PARTY_NOTICES.md / LICENSES，不能统称全部手写原创。

## 七、仓库链接

https://github.com/zhou-wei97/moonbit-promql
