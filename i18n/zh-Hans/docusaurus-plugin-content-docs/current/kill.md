---
sidebar_position: 4
---

# 退出

要退出 joi-ai ，根据当前情况的不同有不同的方式：

## 如果 joi-ai 正在前台工作

可以直接按组合键 `Ctrl+4` 或 `Ctrl+\` 即可。

## 如果 joi-ai 正在后台工作

可以执行如下命令：

``` bash
ps auwx | grep joi  # 查看joi的PID号
kill -9 PID号
```

