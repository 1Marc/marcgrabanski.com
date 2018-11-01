---
path: "installing-mysql-ruby-gem-mac-media-temple-dv"
title: "Installing MySQL Ruby Gem - Mac and Media Temple (dv)"
description: "Fixing \"checking for mysql_query() in -lmysqlclient... no\" error when installing mysql ruby gem."
tags: 
  - "Linux"
  - "Linux & Server Admin"
  - "Media Temple"
  - "Ruby"
date: "2009-07-09T11:54:49.000Z"
draft: false
category: "test"
layout: "post"
---

![](http://marcgrabanski.com/img/logo-mysql.jpg)
+
![](http://marcgrabanski.com/img/rails.png)
on
![](http://marcgrabanski.com/img/osx-leapord.jpg)
![](http://marcgrabanski.com/img/dedicated-virtual.jpg)

After getting rails installed on mac and rails on Media Temple (dv) and running through the [getting started with rails guide](http://guides.rubyonrails.org/getting_started.html) I was having issues installing MySQL ruby gem.

When I created a new rails app with @rails blog -d mysql@, it complained about not having mysql gem installed. Then that iis hwere I got an error installing the gem.
```bash
 gem install mysql
```

Here is the error I was getting:
> Building native extensions.  This could take a while...
>  ERROR:  Error installing mysql:
>   ERROR: Failed to build gem native extension.
> ```bash
> /usr/local/bin/ruby extconf.rb install mysql 
> checking for mysql_query() in -lmysqlclient... no
> checking for main() in -lm... yes
> checking for mysql_query() in -lmysqlclient... no
> checking for main() in -lz... yes
> checking for mysql_query() in -lmysqlclient... no
> checking for main() in -lsocket... no
> checking for mysql_query() in -lmysqlclient... no
> checking for main() in -lnsl... yes
> checking for mysql_query() in -lmysqlclient... no
> ```
> 
> Gem files will remain installed in !/usr/local/rubygems/gems/gems/mysql-2.7! for inspection.
> Results logged to !/usr/local/rubygems/gems/gems/mysql-2.7/gem_make.out!

On Mac I fixed it by adding mysql config paramater.
```bash
 sudo gem install mysql -- --with-mysql-config=/usr/local/mysql/bin/mysql_config
```

On the Media Temple (dv) I fixed the error by using a different path to the mysql_config.
```bash
 gem install mysql -- --with-mysql-config=/usr/lib/mysql/mysql_config
```
