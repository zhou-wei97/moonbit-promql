# 0.8.0 当前验证范围

0.7.0历史回执的命令、退出码、源码和JS桥接散列见evidence/rule-impact-20260927/LOCAL-CHECKS.json。该轮全目标检查和JS/Wasm-GC核心测试包含规则图用例；纯MoonBit消费例子在两后端执行同一改名影响任务。

0.7.0实际Prometheus3.14解析器提取232条查询AST，公开135规则含53本地边/221外部名字引用。39组旧新图采用独立Floyd-Warshall闭包，包含公开配置变化与32组确定种子合成图；实时参考与静态重放分别为reference.json和replay.json，后者不计为新运行官方进程。

0.7.0宿主实际进程检查拒绝重复键、别名、多文档、不精确整数和错误表达式，验证改名及Operator标签/namespace变化。独立复核发现外层metadata遗漏，现纳入context；空集合别名不受maxAliasCount=0约束，故显式拒绝Alias节点。告警隐式序列另标不确定性，不静默归为无本地影响。

0.6.0原有16个上游执行用例、4个手工数值及3213静态golden保留在旧集成证据，未混算为本轮重跑。14项实际promtool检查仍在evidence/promtool-20260927。本轮root表达式核心和/moonpromql未修改。没有实际TSDB、生产部署、性能胜出或远程CI证明。

0.8.0规则快照复核：JS/Wasm-GC rules核心各7项通过；固定135规则kube-prometheus输入插入无关alert后只报告新增项，反转group块不报告变化；夹具验证record改名/删除/跨组移动、同名歧义及组内逆序。更新后的宿主回归用保存的Prometheus 3.14 parser AST向量重放39个图比较和13个host checks；这不是本轮重新运行官方parser或promtool。所有结果见evidence/stable-ids-20260927/，未重跑完整module矩阵、远程CI或TSDB。
