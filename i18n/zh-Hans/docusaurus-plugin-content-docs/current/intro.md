---
sidebar_position: 0
---

# 介绍

## JOI AI
JOI AI 是一个开源智能语音机器人项目，借助大语言模型与众多云厂商的服务，致力于打造更好的全息 AI 语音助手。
JOI AI 具有高定制化功能，可以设定你想要的任意角色作为你的语伴，同时具有良好的设备兼容性。

## 特性

- 模块化。功能插件、语音识别、语音合成、对话机器人都做到了高度模块化，丰富的插件系统。
- 中文支持。集成百度、科大讯飞、阿里、腾讯、Apple、微软Edge、VITS声音克隆TTS 等多家中文语音识别和语音合成技术。
- 对话机器人支持。支持 OpenAI ChatGPT ，图灵机器人等在线对话机器人。
- 全局监听，离线唤醒。支持 [Porcupine](https://github.com/Picovoice/porcupine) 和 [snowboy](https://github.com/Kitt-AI/snowboy) 两套离线语音指令唤醒引擎。
- 灵活可配置。支持定制机器人名字，定制对话机器人角色形象，定制对话机器人语音。
- 智能家居。
- 后台配套支持。提供配套后台，可实现远程操控、修改配置和日志查看等功能。
- 开放API。可利用后端开放的API，实现更丰富的功能。
- 安装简单，支持更多平台。能在 Mac 以及更多 Linux 系统中运行。

## 环境要求

### Python 版本

joi-ai 只支持 Python 3.7+，不支持 Python 2.x 。

### 设备要求

joi-ai 支持运行在以下的设备和系统中：

- Intel Chip Mac (不支持 M1 芯片)
- 64bit Ubuntu（12.04 and 14.04）
- 全系列的树莓派（Raspbian 系统）
- Pine 64 with Debian Jessie 8.5（3.10.102）
- Intel Edison with Ubilinux （Debian Wheezy 7.8）
- 装有 WSL（Windows Subsystem for Linux） 的 Windows