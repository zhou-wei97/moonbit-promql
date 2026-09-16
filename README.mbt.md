# 可执行 API 示例

对照 Prometheus 3.14.0，提供全部 90 个函数签名与静态类型检查。这些例子调用公开 API，并随 `moon test` 执行。

```mbt check
///|
test "typed PromQL core rejects mismatched arguments" {
  assert_eq(
    @promql.infer_type(@promql.parse("sum by(job)(rate(up[5m])) / 2")),
    @promql.InstantVector,
  )
  assert_eq(@promql.infer_type(@promql.parse("time()+2")), @promql.Scalar)
  for
    s in [
      "rate(up)", "rate(up[5m],up)", "sum(2)", "up[5m]+up", "unknown(up)", "1 or up",
      "up unless 2",
    ] {
    assert_true(
      try {
        ignore(@promql.infer_type(@promql.parse(s)))
        false
      } catch {
        _ => true
      },
    )
  }
}
```

实验特性默认关闭，需通过 ParserOptions 显式开启。资源边界和剩余诊断/格式化/遍历差距见 README。
