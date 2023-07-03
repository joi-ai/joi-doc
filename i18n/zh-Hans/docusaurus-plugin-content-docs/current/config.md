---
sidebar_position: 2
---

# 配置

首次执行 joi 后，系统就会帮你在 `~/.joi` 目录下生成 config.yml 配置文件。

```bash
python3 joi.py
```

这个配置文件有不少项目都是必配的项目，只有配置正确， joi-ai 才可以正常使用。


几个 tips：

1. 不建议直接修改 default.yml 里的内容，否则会给后续通过 `git pull` 更新带来麻烦。你应该拷贝一份放到 `$HOME/.joi/config.yml` 中。

配置文件的读取优先级：`$HOME/.joi/config.yml` > `static/default.yml` 。如果存在 `$HOME/.joi/config.yml` 文件，则只读取该文件的配置，而不读取 default.yml ；如果不存在，则读取 default.yml 作为兜底配置。

1. 不论使用哪个厂商的API，都建议注册并填上自己注册的应用信息，而不要用默认的配置。这是因为这些API都有使用频率和并发数限制，过多人同时使用会影响服务质量。

2. 任一技能插件都允许关闭，方法是在配置文件中为该插件添加一个 `enable: false` 的设置。例如，如果你想关闭新闻头条插件，而该插件的 `SLUG` 是 `headline_news` ，那么可以如下设置：

   ```yaml
   # 新闻头条
   # 聚合数据新闻头条API
   # https://www.juhe.cn/docs/api/id/235
   headline_news:
       enable: false
       key: 'AppKey'  # 其他配置Copy to clipboardErrorCopied
   ```

3. 出于安全考虑，后端管理端的 `validate` 和 `cookie_secret` 都 **应该** 修改！

其中 `cookie_secret` 可以使用本地生成的一串字符串。你可以使用如下方式生成：

```bash
>>> import os
>>> os.urandom(24)
```

将这个结果直接复制到 `cookie_secret` 配置中即可。例如：

```yaml
server:
    enable: true
    host: '0.0.0.0'  # ip 地址
    port: '5001'     # 端口号
    username: 'joi'  # 用户名
    # cookie 的 secret ，用于对 cookie 的内容进行加密及防止篡改
    # 建议使用 os.urandom(24) 生成一串随机字符串
    cookie_secret: '__GENERATE_YOUR_OWN_RANDOM_VALUE_HERE__'
    # 密码的 md5，可以用 python3 joi.py md5 "密码" 获得
    # 初始密码为 joi@2049
    # 建议修改
    validate: '41724998a398a3f11ac18a1b7e2537e0'
```

