---
sidebar_position: 5
---

# Backend API

## Authentication

All APIs require the inclusion of the `validate` parameter, whose value should be the same as the `server/validate` parameter value in the configuration file. Example:

``` bash
$ curl localhost:5001/history?validate=f4bde2a342c7c75aa276f78b26cfbd8a
```

API response:

```
{"code": 0, "message": "ok", "history": "[{\"type\": 1, \"text\": \"Hello world!\", \"time\": \"2019-02-07 19:10:19\", \"uuid\": \"f464d430-2ac8-11e9-bd1e-8c8590caf9a5\"}, {\"type\": 0, \"text\": \"How's the weather today?\", \"time\": \"2019-02-07 19:10:33\", \"uuid\": \"fca4c218-2ac8-11e9-bd1e-8c8590caf9a5\"}, {\"type\": 1, \"text\": \"[Weather] Shenzhen weather: Today: cloudy, 28-30 degrees Celsius. The weather is not bad today, the air is fresh, suitable for outdoor activities.\", \"time\": \"2019-02-07 19:10:33\", \"uuid\": \"fceec836-2ac8-11e9-bd1e-8c8590caf9a5\"}, {\"type\": 0, \"text\": \"A few o'clock now\", \"time\": \"2019-02-07 19:33:34\", \"uuid\": \"chat58b0d6a2-8395-1453-6383-4e27c421ea89\"}, {\"type\": 1, \"text\": \"2019-02-07 Friday afternoon 7:33\", \"time\": \"2019-02-07 19:33:35\", \"uuid\": \"3445dcd6-2acc-11e9-bd1e-8c8590caf9a5\"}]"}
```

## Management

Used to manage joi-ai, including restarting, enabling "do not disturb" mode, and disabling "do not disturb" mode.

- URL: /operate
- Method: POST
- Parameters:

| Parameter | Required | Description |
| ---   | ------- | ----- |
| validate | Yes | See [Authentication](#authentication) |
| type  | Yes | Management type. See [Management Type Values](#management-type-values) |

### Management Type Values

| Value | Description |
| ---- |  ---- |
| 0    | Restart joi-ai |
| 1    | Enable "do not disturb" mode |
| 2    | Disable "do not disturb" mode |

- Example:

``` bash
$ curl -X POST localhost:5001/operate -d "type=restart&validate=f4bde2a342c7c75aa276f78b26cfbd8a"
```

- Response:

| Field | Description |
| ---   | ----- |
| code  | Return code. 0: success; 1: failure |
| message | Result description |


## Log

Used to view logs saved by joi-ai. For performance reasons, by default, only the last 200 lines of content are returned, which is equivalent to running `tail -n 200`.

- URL: /log
- Method: GET
- Parameters:

| Parameter Name | Required | Description |
| --- | --- | --- |
| validate | Yes | See [Authentication](#_1) |
| lines | Optional | Maximum number of log lines to read. Default value is 200 |

- Example:

```bash
$ curl localhost:5001/log?validate=f4bde2a342c7c75aa276f78b26cfbd8a&lines=10
```

- Response:

| Field Name | Description |
| --- | --- |
| code | Return code. 0: success; 1: failure |
| message | Result description |
| log | Log content |


## Chat

### Initiate Conversation

Used to initiate a conversation.

- URL: /chat
- Method: POST
- Parameters:

| Parameter Name | Required | Description |
| --- | --- | --- |
| validate | Yes | See [Authentication](#_1) |
| type | Yes | Query type. "text": text-based query; "voice": voice-based query |
| query | Required when type is "text" | URL-encoded value of the query content. For example, the URL-encoded result of "What time is it now?" |
| uuid | Required when type is "text" | A UUID assigned to this text query. For example, it can be a combination of random characters and a timestamp. |
| voice | Required when type is "voice" | Voice data in base64 encoded format of a single-channel, 16kHz sample rate WAV file. |

- Example:

```bash
$ curl -X POST localhost:5001/chat -d "type=text&query=%E7%8E%B0%E5%9C%A8%E5%87%A0%E7%82%B9&validate=f4bde2a342c7c75aa276f78b26cfbd8a&uuid=chated17be5d-0240-c9ba-2b2e-7eb98588cf34"
```

- Response:

| Field Name | Description |
| --- | --- |
| code | Return code. 0: success; 1: failure |
| message | Result description |
| resp | Returned conversation text |
| audio | URL address of TTS audio (Note: non-cached audio will be automatically cleared after one minute) |

### Conversation History

Used to view all conversation records from the start of joi-ai.

- URL: /history
- Method: GET
- Parameters:

| Parameter Name | Required | Description |
| --- | --- | --- |
| validate | Yes | See [Authentication](#_1) |

- Example:

```bash
$ curl localhost:5001/history?validate=f4bde2a342c7c75aa276f78b26cfbd8a
```

- Response:

| Field Name | Description |
| --- | --- |
| code | Return code. 0: success; 1: failure |
| message | Result description |
| history | Conversation history |

## Configuration

### View Configuration

Used to view the existing configuration of joi-ai.

- URL: /config
- Method: GET
- Parameters:

| Parameter Name | Required | Description |
| --- | --- | --- |
| validate | Yes | See [Authentication](#_1) |
| key | Optional | Key value of a specific configuration. For example: `robot_name_cn`. If you want the corresponding value of a multi-level key, use the format `/first-level key/second-level key/...`, for example, `/server/host` retrieves the `host` configuration under `server`. |

- Example:

```bash
$ curl localhost:5001/config?validate=f4bde2a342c7c75aa276f78b26cfbd8a&key=server
```

- Response:

| Field Name | Description |
| --- | --- |
| code | Return code. 0: success; 1: failure |
| message | Result description |
| config | All configurations, provided only when the `key` parameter is not passed |
| value | Configuration provided by the `key` parameter. Provided only when the `key` parameter is passed. If the `key` is not found, `null` is returned |


### Modify Configuration

Used to configure joi-ai.

- URL: /config
- Method: POST
- Parameters:

| Parameter Name | Required | Description |
| --- | --- | --- |
| validate | Yes | See [Authentication](#_1) |
| config | Yes | Configuration content. Must be the URL-encoded value of text that can be parsed as YAML. |

- Example:

```bash
$ curl -X localhost:5001/config -d "config=robot_name_cn%3A+'%E5%AD%99%E6%82%9F%E7%A9%BA'%0Afirst_name%3A+'%E4%BC%9F%E6%B4%B2'%0Alast_name%3A+'%E6%BD%98'%0Atimezone%3A+HKT%0Alocation%3A+'%E6%B7%B1%E5%9C%B3'%0A%0A%23+%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%AB%AF%0Aserver%3A%0A++++enable%3A+true%0A++++host%3A+'0.0.0.0'++%23+ip+%E5%9C%B0%E5%9D%80%0A++++port%3A+'5001'+++++%23+%E7%AB%AF%E5%8F%A3%E5%8F%B7++++%0A++++username%3A+'joi'..."
```

- Response:

| Field Name | Description |
| --- | --- |
| code | Return code. 0: success; 1: failure |
| message | Result description |