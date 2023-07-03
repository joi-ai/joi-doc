---
sidebar_position: 4
---

# Exit

To exit joi-ai, there are different methods depending on the current situation:

## If joi-ai is running in the foreground

You can simply press the key combination `Ctrl+4` or `Ctrl+\`.

## If joi-ai is running in the background

You can execute the following command:

``` bash
ps auwx | grep joi  # View the PID of joi
kill -9 PID number
```
(Note: Please replace "PID number" with the actual PID number obtained from the previous command.)
