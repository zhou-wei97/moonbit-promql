# 0.7.0 当前验证范围

本轮命令、退出码、源码和JS桥接散列见evidence/rule-impact-20260927/LOCAL-CHECKS.json。全目标检查和JS/Wasm-GC核心测试包含新增规则图用例；纯MoonBit消费例子在两后端执行同一改名影响任务。

实际Prometheus3.14解析器提取232条查询AST，公开135规则含53本地边/221外部名字引用。39组旧新图采用独立Floyd-Warshall闭包，包含公开配置变化与32组确定种子合成图；实时参考与静态重放分别为reference.json和replay.json，后者不计为新运行官方进程。

宿主实际进程检查拒绝重复键、别名、多文档、不精确整数和错误表达式，验证改名及Operator标签/namespace变化。独立复核发现外层metadata遗漏，现纳入context；空集合别名不受maxAliasCount=0约束，故显式拒绝Alias节点。告警隐式序列另标不确定性，不静默归为无本地影响。

0.6.0原有16个上游执行用例、4个手工数值及3213静态golden保留在旧集成证据，未混算为本轮重跑。14项实际promtool检查仍在evidence/promtool-20260927。本轮root表达式核心和/moonpromql未修改。没有实际TSDB、生产部署、性能胜出或远程CI证明。
