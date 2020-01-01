---
archived: true
path: 'setting-up-mac-osx-web-development'
title: 'Setting Up a New Mac on OSX for Web Development'
description: 'Recently I had a machine break down and had to setup a new one and this is documentation of my setup.'
tags:
  - 'Mac OS X'
date: '2013-12-17T07:55:10.000Z'
draft: false
layout: 'post'
---

Recently I had a machine break down and had to setup a new one and this is documentation of my setup.

In this article I give you all the apps I use, OS configurations and local hosting setup.

## Mac OS X Apps I Install

- [VS Code](https://code.visualstudio.com) - For the codes. I switched to it because it's super fast!
- [1Password](https://agilebits.com/onepassword) - To generate secure passwords is easy, only problem is it introduced a single point of fail. Either way, I can't live without the convenience of it. Has Safari and Chrome extensions as well as a menu bar icon in OSX for quick access.
- [iTerm2](www.iterm2.com) - Super terminal!
- [Bartender](http://www.macbartender.com/) - Nice to clean up OSX icons when you get too many, or it you just want to hide certain icons you don't use ever.
- Google Chrome of course.
- [Dropbox](www.dropbox.com) - Currently I have 500GB Dropbox and I only sync certain folders to my computer. This gives me an extra 300GB+ of storage. It's expensive, but I use it primarily to collaborate for work projects so it's a cost of doing business at this point.
- [Node.js](http://nodejs.org/)
- [Sequel Pro](http://www.sequelpro.com/) - Free tool to easily manage MySQL. MAMP starts by default at port 8889 with user:pass as root:root
- Skype
- [CloudApp](http://getcloudapp.com/) - Nice way to drag and drop share files and especially images. Automatically copies the link to the file once it's uploaded to your clipboard.
- Twitter - I find Twitter's default notifications to be annoying so I only setup menu highlighting when I'm mentioned.
- [Caffeine](http://lightheadsw.com/caffeine/) - For keeping your mac awake...especially during those long Dropbox syncs!
- [Pocket](http://getpocket.com/) - Twitter natively supports saving links to Pocket and there's a Chrome extension, so if I don't want to lose a link I drop it in Pocket.
- [Transmit](http://panic.com/transmit/) - For FTP and S3 pushing/pulling files. Be careful with the "sync" feature though, I deleted some files from the server once (was not good).
- GitHub for Mac - Find it's nice to keep a running track of all the projects I've cloned.
- [ScreenFlow](http://telestream.net/screenflow/) - Best screencasting app I've used -- I've tried most of the Mac ones I could find.
- Adobe Creative Cloud (Photoshop, Illustrator, Premiere)
- Microsoft Office (Word and Excel)

## OS-level Items Todo

- Of course lots of updates in the app store including OSX itself.
- Install XCode and the iOS Simulator (Preferences -> Downloads -> iOS Simulator) @/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Applications@ Then drag app to dock for iOS testing
- Setup Messages App for Google Talk and AIM
- Move the OSX doc to the right. On a 13" the problem is more vertical space than it is horizontal.

## Bash Config

[Install Homebrew](http://brew.sh/):

```bash
 ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```

Install Paul Irish dotfiles and dependencies

```bash
 git clone https://github.com/paulirish/dotfiles.git && cd dotfiles && ./sync.sh ./install-deps.sh sync.sh
```

Hopefully you've found these tools useful!
