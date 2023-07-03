---
sidebar_position: 3
---

# Running #

## Sound Card Check and Configuration Before Running

Please make sure the microphone and speaker are correctly configured before starting joi-ai.



## Running joi-ai

``` bash
cd to the directory where joi-ai is located
python3 joi.py
```

The first time you start it, you will be prompted whether to create a configuration file in your user directory. Enter `y` to proceed.

Then, wake up joi for interaction by using the wake-up word "snowboy" (this wake-up word can be customized to improve wake-up success rate and accuracy).


## Management Interface ##

By default, joi-ai will also start a backend management interface during runtime, which provides capabilities such as remote conversation, viewing and modifying configurations, and viewing logs.

- Default URL: http://localhost:5001
- Default username: joi
- Default password: joi@2049

It is recommended to change the username and password when using it in production to avoid privacy leaks.

## Running in the Background ##

If you directly start joi-ai in the terminal and close the terminal, the joi-ai process may terminate.

To keep joi-ai running in the background, you can use [tmux](http://blog.jobbole.com/87278/) or supervisor to run it.