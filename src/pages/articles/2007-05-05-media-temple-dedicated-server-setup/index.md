---
path: "media-temple-dedicated-server-setup"
title: "Media Temple Dedicated Server Setup"
description: "I want a web hosting server that I can modify and do what I want to. So I opted for a dedicated server with Media Temple."
tags: 
  - "Linux"
  - "Linux & Server Admin"
  - "Media Temple"
date: "2007-05-05T17:00:00.000Z"
draft: false
category: "test"
layout: "post"
---

!http://marcgrabanski.com/img/dedicated-virtual.jpg! I wanted a web hosting server that I can hyper-tweak to my needs. So I opted for a dedicated server with "Media Temple":http://www.mediatemple.net/go/order/?refdom=marcgrabanski.com . I have little knowledge in linux, but I am going to embark on this road to server greatness. I want to get these things on my server to start: subversion, PHP5 and MySQL5 (PHP5 comes pre-installed now). Here I'll walk through my experience setting up my dedicated virtual (dv) server. You have to request admin access and dev tools to be installed. So I sent a support ticket and it took a day. Here is a list of the "dev tools that are installed":http://kb.mediatemple.net/questions/239/(dv)+3.0+Tech+Specs+-+Complete+package+listing. Opened VI (text editor) as part of the tutorial and couldn't figure out how to get out of it once you start editing a file. So I found this article which told me to exit by hitting ESC than typing :x "http://www.cs.colostate.edu/helpdocs/vi.html":http://www.cs.colostate.edu/helpdocs/vi.html Than I had to learn Putty/Linux so I looked up my commands here: "http://www.ss64.com/bash/":http://www.ss64.com/bash/ Some good, general commands... \[code lang="bash"\] ls ... list directories mkdir name ... create a directory rm filename ... remove file wget url ... get a package cp file directory ... copy file to directory \[/code\] That's it for day one of my dedicated server setup.