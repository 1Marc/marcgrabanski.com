---
path: "securing-your-web-hosting-server-tips"
title: "Tips to Secure Your Web Hosting Server"
description: "Tips to lock down your linux web hosting server."
tags: 
  - "Linux"
  - "Linux & Server Admin"
  - "Security"
date: "2009-07-22T21:41:44.000Z"
draft: false
category: "test"
layout: "post"
---

A friend of mine, "Elliot Swan":http://www.elliotswan.com/ got hacked - one of his JavaScript files had been modified to contain some sort of advertisement. Here are a few tips you can do to lock your server down, starting with simple things and getting more advanced at the bottom. !http://marcgrabanski.com/img/internet-security.gif! \* Change your web hosting password. * Change your SSH / root login username (if possible) and password. * Change your FTP username (if possible) and password. * If you changed your FTP username, chown the files to the new user through SSH by typing @chown -R username:usergroup YOUR\_WEB\_PATH@. If you don't know the usergroup, check out the current files by typing, @ls -la YOUR\_WEB\_PATH@ * Change your permissions to the lowest number to allow your website to still work, this might be 444, 644, 655, 744, or 755. @chmod -R 755 YOUR\_WEB\_PATH@ * make sure there are no authorized keys found in your @~/.ssh/@ folder. Type @ls ~/.ss@, and then @rm authorized_keys@ if it is there unless of course you use that for authentication. Authorized keys allows you to ssh without a username and a password, because you put your id on your computer and on the server. * (tip via friend, "Grant Wood":http://www.linkedin.com/in/grantwood There is a linux service called, "aide" that can email you when files are changed, but that is fairly intense to setup. * (tip from friend) Check your log files in /var/log to make sure there is no unauthorized connections that you haven't made. * Update your php.ini file with "better PHP settings":http://blog.grik.net/2007/03/some-security-settings.html. * Upgrade any installed CMS or web-based software.