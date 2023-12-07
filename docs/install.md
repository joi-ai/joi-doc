---
sidebar_position: 1
---

# Installation

### 1. Clone the Repository

```bash
git clone https://github.com/joi-ai/joi
```

### 2. Install sox, ffmpeg, and PyAudio

#### Linux System

```bash
sudo apt-get update -y
sudo apt-get install portaudio19-dev python-pyaudio python3-pyaudio sox pulseaudio libsox-fmt-all ffmpeg
pip3 install pyaudio
```

If you encounter slow installation using pip3, you can consider using a PyPI mirror. For example, [Tsinghua University PyPI Mirror](https://mirror.tuna.tsinghua.edu.cn/help/pypi/).

#### Mac System

```bash
brew install portaudio --HEAD  # Install the latest version of Git to ensure compatibility with Big Sur
brew install sox ffmpeg
pip3 install pyaudio
```

If you don't have Homebrew, refer to [this article](http://brew.sh/) to install it.

### 3. Install Required Libraries

```bash
cd joi-ai
pip3 install -r requirements.txt
```

### 4. Compile _snowboydetect.so

Regardless of whether you plan to use Snowboy or Porcupine as the offline wake word engine, **compiling `_snowboydetect.so` is still necessary**. This is because after the wake word is detected, joi-ai will use Snowboy's VAD (Voice Activity Detection) capability to determine whether to end the listening phase.

#### Install swig

First, make sure you have swig installed on your system.

For Linux systems:

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

If you encounter a "python3-config: command not found" error, you also need to install `python3-dev`:

```bash
sudo apt-get install python3-dev  # Note: On Ubuntu 18.04, it may be named python3-all-dev
```

For Mac systems:

```bash
brew install swig wget
```

#### Build Snowboy

```bash
cd $HOME
wget https://wzpan-1253537070.cos.ap-guangzhou.myqcloud.com/wukong/snowboy.tar.bz2 # Use the forked version to ensure interface compatibility and Ubuntu 22 support
tar -xvjf snowboy.tar.bz2
cd snowboy/swig/Python3
make
cp _snowboydetect.so /path/to/wukon-robot/snowboy/
```

If you encounter issues during the `make` phase, try to find a solution in the [snowboy project issues](https://github.com/Kitt-AI/snowboy/issues).

#### Solve No Sound Issue on CentOS

Some users have encountered issues with no sound during playback on CentOS. The solution is:

```sh
mknod /dev/dsp c 14 3
chmod 666 /dev/dsp
```
