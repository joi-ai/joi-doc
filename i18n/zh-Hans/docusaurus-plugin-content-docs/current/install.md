---
sidebar_position: 1
---

# 安装

### 克隆仓库

```bash
git clone https://github.com/zexiplus/joi-ai
```

### 2. 安装 sox, ffmpeg 和 PyAudio

#### Linux 系统

```bash
sudo apt-get update -y
sudo apt-get install portaudio19-dev python-pyaudio python3-pyaudio sox pulseaudio libsox-fmt-all ffmpeg
pip3 install pyaudio
```

如果遇到 pip3 安装慢的问题，可以考虑使用 Pypi 镜像。例如 [清华大学 Pypi 镜像](https://mirror.tuna.tsinghua.edu.cn/help/pypi/) 。

#### Mac 系统

```bash
brew install portaudio --HEAD  # 安装 Git 最新版本，确保 Big Sur 系统可用
brew install sox ffmpeg
pip3 install pyaudio
```

如果你没有 Homebrew ，参考[本文](http://brew.sh/)安装

### 3. 安装依赖的库

```bash
cd joi-ai
pip3 install -r requirements.txt
```

### 4. 编译 _snowboydetect.so

不管你打算使用 snowboy 还是 Porcupine 作为离线唤醒引擎，**编译 `_snowboydetect.so` 依然是必要的**，因为当离线唤醒后，joi-ai 会使用 snowboy 的 VAD 能力来在主动聆听时候判断是否应该结束聆听。

#### 安装 swig

首先确保你的系统已经装有 swig 。

对于 Linux 系统：

```bash
cd $HOME
wget https://wzpan-1253537070.cos.ap-guangzhou.myqcloud.com/misc/swig-3.0.10.tar.gz
tar xvf swig-3.0.10.tar.gz
cd swig-3.0.10
sudo apt-get -y update
sudo apt-get install -y libpcre3 libpcre3-dev
./configure --prefix=/usr --without-clisp --without-maximum-compile-warnings
make
sudo make install
sudo install -v -m755 -d /usr/share/doc/swig-3.0.10
sudo cp -v -R Doc/* /usr/share/doc/swig-3.0.10
sudo apt-get install -y libatlas-base-dev
```

如果提示找不到 `python3-config` 命令，你还需要安装 `python3-dev`：

```bash
sudo apt-get install python3-dev  # 注意 Ubuntu 18.04 可能叫 python3-all-dev
```

对于 Mac 系统：

```bash
brew install swig wget
```

#### 构建 snowboy

```bash
cd $HOME
wget https://wzpan-1253537070.cos.ap-guangzhou.myqcloud.com/wukong/snowboy.tar.bz2 # 使用我fork出来的版本以确保接口及Ubuntu 22兼容
tar -xvjf snowboy.tar.bz2
cd snowboy/swig/Python3
make
cp _snowboydetect.so wukon-robot的根目录/snowboy/
```

如果 make 阶段遇到问题，尝试在 [snowboy 项目 issue 中找到解决方案](https://github.com/Kitt-AI/snowboy/issues) 。


#### CentOS 没声音问题解决

有用户在 CentOS 系统中遇到播放没声音的问题。解决方法是：

```sh
mknod /dev/dsp c 14 3
chmod 666 /dev/dsp
```

