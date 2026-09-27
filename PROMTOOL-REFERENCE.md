# promtool 3.14.0 独立核验

上次下载失败现已补齐；历史记录留在 `evidence/public-expressions-20260927/PROMTOOL-NOT-RUN.md`，不将当时失败改写为通过。此次没有修改MoonBit核心或引擎。

## 工具来源

官方[发布页](https://github.com/prometheus/prometheus/releases/tag/v3.14.0)的Windows amd64 ZIP为110095743字节；完整包SHA-256为 `e57fbb99e4d0bc734d2f2b3aeb68c02fba38862259dc99a95c27ea46d9ccba0a`，与官方发布API及sha256sums一致后才提取运行。promtool自身SHA-256为 `78b0d964ce421256ae3fab858194f890541553d59feba0e5ae24550a1704197a`。实际版本输出为3.14.0、revision d7598b7141418fa35be2b5ec5d0fefb634199610、windows/amd64、Go1.26.6。二进制不随本项目分发。

## 实跑14项的边界

| 范围 | 本次观察 |
|---|---|
| 官方两条重复告警 | 默认lint报告重复且显示FAILED文字，但退出0；lint-fatal退出3；关闭lint退出0 |
| 7项表达式 | 公开表达式、rate聚合、absent、子查询被两边静态接受；sum(1)、rate(up)、损坏selector均拒绝 |
| 2项规则结构错误 | 缺group名称、未知rule字段被promtool拒绝；单独提取的up仍能通过本库表达式检查 |
| 2项本地资源上限 | 100个up相加、100001个注释字符在promtool规则检查中可接受，本库分别按AST深度64/源码长度100000限制拒绝，返回错误而非未捕获异常 |

`absent`与子查询的静态通过不表示上游MoonPromQL执行成功；此前记录的上游限制仍有效。这里未连接服务端，也没有评价表达式数值执行结果。新增检查没有替代3213条旧golden的范围，更不支持完整规则引擎的主张。

## 复现

取得并校验对应平台的官方3.14.0工具后，在仓库根目录运行：

```sh
node tools/verify-promtool.mjs /path/to/promtool report.json
```

工具通过stdin传入固定官方夹具或本地构造的规则，不访问Prometheus服务器。检查输出、退出码、输入散列、运行引擎和版本见 [report.json](evidence/promtool-20260927/report.json)；与上一交付的运行源码一致性见 [LOCAL-CHECKS](evidence/promtool-20260927/LOCAL-CHECKS.json)。该额外开发参考需要显式提供工具路径，不是库的运行依赖。不同平台二进制hash不同，应校验该平台的官方发布包，不能套用Windows hash。
