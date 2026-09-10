# 可执行 API 示例

增加标量/瞬时向量/区间向量类型检查和常见函数签名校验，修复非法 UTF-16 崩溃。这些例子调用公开 API，并随 `moon test` 执行。

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

限制：仅文档列出的函数与语法子集；不执行查询，不支持完整匹配修饰符。
