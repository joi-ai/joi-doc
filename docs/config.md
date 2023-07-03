---
sidebar_position: 2
---

# Configuration

After the initial execution of Joi, the system will generate a config.yml configuration file for you in the `~/.joi` directory.

```bash
python3 joi.py
```

There are several items in this configuration file that are required to be properly configured for joi-ai to function correctly.

A few tips:

1. It is not recommended to directly modify the contents of default.yml, as it may cause issues when updating through `git pull`. Instead, you should make a copy and place it in `$HOME/.joi/config.yml`.

   Configuration file priority: `$HOME/.joi/config.yml` > `static/default.yml`. If the `$HOME/.joi/config.yml` file exists, only the configurations from that file will be used, and default.yml will not be read. If it does not exist, default.yml will be used as the fallback configuration.

2. Regardless of which vendor's API you are using, it is recommended to register and fill in your own application information instead of using the default configuration. This is because these APIs have rate and concurrency limitations, and too many people using them simultaneously can affect service quality.

3. Any skill plugin can be disabled by adding an `enable: false` setting for that plugin in the configuration file. For example, if you want to disable the headline news plugin and its `SLUG` is `headline_news`, you can set it as follows:

   ```yaml
   # Headline News
   # Aggregated Data Headline News API
   # https://www.juhe.cn/docs/api/id/235
   headline_news:
       enable: false
       key: 'AppKey'  # Other configurations...
   ```

4. For security reasons, the `validate` and `cookie_secret` in the backend management should be **modified**!

   The `cookie_secret` can be a locally generated string. You can generate it as follows:

   ```bash
   >>> import os
   >>> os.urandom(24)
   ```

   Simply copy the generated result into the `cookie_secret` configuration. For example:

   ```yaml
   server:
       enable: true
       host: '0.0.0.0'  # IP address
       port: '5001'     # Port number
       username: 'joi'  # Username
       # Cookie secret used to encrypt and prevent tampering with the cookie content
       # It is recommended to generate a random string using os.urandom(24)
       cookie_secret: '__GENERATE_YOUR_OWN_RANDOM_VALUE_HERE__'
       # MD5 hash of the password, you can use python3 joi.py md5 "password" to obtain it
       # The initial password is joi@2049
       # It is recommended to modify it
       validate: '41724998a398a3f11ac18a1b7e2537e0'
   ```