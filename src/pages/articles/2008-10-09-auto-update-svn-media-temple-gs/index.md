---
path: "auto-update-svn-media-temple-gs"
title: "Auto-Update SVN on Media Temple (gs)"
description: "Steps to get SVN to auto-update on your Media Temple grid service (gs) account."
tags: 
  - "Linux"
  - "Linux & Server Admin"
  - "Media Temple"
date: "2008-10-09T21:22:03.000Z"
draft: false
category: "test"
layout: "post"
---

![](http://marcgrabanski.com/img/mt-grid-service.jpg)
I wanted to update SVN every 5 minutes on my Media Temple grid service (gs) account. Here is the steps I took to make that happen. First, I created a shell script with the SVN Update (I'll show how in a minute). I got this error:
> Error validating server certificate

For some reason SVN wasn't reading my trusted server list, so I asked (mt) about it.
![](http://marcgrabanski.com/img/mt-josh-kline.jpg)
Josh Kline at Media Temple pointed out the issue. I'm not sure why this isn't documented somewhere, so I'm blogging it.
> SVN looks for the config, including the trusted server list, in `$HOME/.subversion` Your cron jobs run with `HOME=/home/#####` , but when you ssh in `HOME=/home/#####/users/.home` running svn with `--config-dir /home/#####/users/.home/.subversion` will fix the problem.

That said, here are the steps to get SVN to auto update every 5 minutes. SSH in, you will have to go through the [steps to enable SSH](http://kb.mediatemple.net/questions/16/Connecting+via+SSH+to+your+)(gs)+Grid-Service.

```bash
cd data
mkdir scripts
vi cron.sh
```

In your cron.sh, use the config command that Josh suggested (replacing ##### with your id)
```bash
svn update SVN_PATH --config-dir /home/#####/users/.home/.subversion
```

Go into the (mt) control panel under Cron Jobs and configure one to run your shell script.
![](http://marcgrabanski.com/img/mt-cron-task.gif)

There you have it, you now have svn auto updating on shared hosting.