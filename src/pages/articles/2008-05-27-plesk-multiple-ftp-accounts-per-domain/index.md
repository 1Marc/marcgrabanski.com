---
path: "plesk-multiple-ftp-accounts-per-domain"
title: "Plesk Multiple FTP Accounts Per Domain"
description: "Creating multiple FTP accounts per domain with Plesk (media temple dv)"
tags: 
  - "Linux"
  - "Linux & Server Admin"
date: "2008-05-27T14:44:58.000Z"
draft: false
category: "test"
layout: "post"
---

!http://marcgrabanski.com/img/logo-plesk.png! Plesk on Media Temple's (dv) server doesn't allow you to create multiple FTP accounts per domain. For instance, I want to create domain.com/my/folder as a FTP account. They are building this functionality into Plesk 9, but until then you have to do a little command line work. Plesk allows you to create "multiple FTP accounts per domain":http://kb.parallels.com/en/415 with the command line. Basically you do the following: \[code lang="bash"\] /usr/sbin/useradd -d /your\_domain/some/location -s /bin/false USER\_NAME /usr/sbin/usermod -G psacln USER\_NAME chmod 755 $HTTPD\_VHOSTS\_D/your\_domain/some/location chown USER\_NAME:psacln $HTTPD\_VHOSTS\_D/your\_domain/some/location chmod 751 $HTTPD\_VHOSTS\_D/your\_domain/httpdocs passwd USER\_NAME \[/code\] The article I linked to above goes into more detail on each command. However they left out one key command at the end. "passwd" allows you to set the user's password. Voila, multiple accounts per domain!