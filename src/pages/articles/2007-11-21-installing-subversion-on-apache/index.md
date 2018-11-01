---
path: "installing-subversion-on-apache"
title: "Installing Subversion on Apache"
description: "How to install subversion on a Media Temple dedicated virtual (dv) 3.0 linux server."
tags: 
  - "Linux"
  - "Linux & Server Admin"
  - "Media Temple"
date: "2007-11-21T01:00:36.000Z"
draft: false
category: "test"
layout: "post"
---

![](http://marcgrabanski.com/img/dedicated-virtual.jpg)
In the first part of setting up a dedicated server with Media Temple, I found out how to install PHP5 and learned some basic linux commands.
> Note on June 24, 2008: Media Temple released their (dv) 3.5 which has a new set of [developer tools,](http://kb.mediatemple.net/questions/807/)(dv)+3.5+Tech+Specs+-+Developer%27s+Tools+package+listing. subversion and yum are installed - so you should be able to skip past the first few steps. You still may need to install mod_dav apache module with,"yum install mod_dav".

### How to install subversion on a [Media Temple](http://www.mediatemple.net/go/order/?refdom=marcgrabanski.com) dedicated virtual (dv) 3.0 linux server. I quickly realized how difficult linux can be if you don't know what you are doing. Luckily, YUM made my life a lot easier. YUM is helps you easily install packages with simple commands on linux. First, lets [install YUM and use it to install subversion](http://blog.hellm.com/post/5). Run these commands one-by-one:
```bash
rpm -ivh --nodeps http://centos.mirror.vpslink.com/centos-4/4.5/os/i386/CentOS/RPMS/libxml2-python-2.6.16-10.i386.rpm rpm -ivh --nodeps http://centos.mirror.vpslink.com/centos-4/4.5/os/i386/CentOS/RPMS/python-elementtree-1.2.6-5.el4.centos.i386.rpm rpm -ivh --nodeps http://centos.mirror.vpslink.com/centos-4/4.5/os/i386/CentOS/RPMS/python-sqlite-1.1.7-1.2.1.i386.rpm http://centos.mirror.vpslink.com/centos-4/4.5/os/i386/CentOS/RPMS/rpm-python-4.3.3-22_nonptl.i386.rpm rpm -ivh --nodeps http://centos.mirror.vpslink.com/centos-4/4.5/os/i386/CentOS/RPMS/python-urlgrabber-2.9.8-2.noarch.rpm wget http://centos.mirror.vpslink.com/centos-4/4.5/os/i386/CentOS/RPMS/yum-2.4.3-3.el4.centos.noarch.rpm rpm -Uvh yum-2.4.3-3.el4.centos.noarch.rpmTo check if it is installed run this command: rpm -q yum
```

Now we need to install subversion and to run it through apache we need mod_dav_svn (apache 2 modules).
```bash
yum install subversion yum install mod_dav_svn
```

I found a few articles on [setting up subversion](http://www.onlamp.com/pub/a/onlamp/2002/10/31/subversion.html), but I'll walk you through how I got it to work. First I needed a home location, I chose to call this"svnroot".
```bash
svnadmin create /svnroot svn mkdir file:///svnroot
```

Now, I want to import the httpdocs of my subdomain into the /trunk. You can name your project whatever you would like. Don't forget to replace the domain, subdomain and project name in this next command:
```bash
svn import /var/www/vhosts//subdomains//httpdocs file:///svnroot//trunk/dev -m 'Initial import of dev httpdocs'
```

To test that my files were imported correctly and the svn repository was created successfully, I ran this command.
```bash
svn checkout file:///svnroot//trunk/dev #/svnwork
```

Vuala! - it downloaded my httpdocs to the #/svnwork directory. Now lets setup our SVN through apache. First, lets give Apache access to the folder:
```bash
chown -R apache.apache /svnrootNext, lets jump in the apache config and load the proper modules and set the svn location.
```

```bash
vi /etc/httpd/conf/httpd.confPress 'i' to insert into the document and in the LoadModule section add these two lines:

LoadModule dav_svn_module modules/mod_dav_svn.so
LoadModule dav_svn_module modules/mod_authz_svn.so
```

And lets add the SVN location for apache to access. *Careful, this does not add any authentication so you are giving free reign to your SVN server until then.* Add this to your apache config:
```xml
DAV svn SVNPath /svnroot
```

Hit esc and than :x to quit and save the file. Restart your apache server, you should get an ok message [ok].
```bash
/etc/init.d/httpd restart
```

Now [download the windows subversion client](http://subversion.tigris.org/project_packages.html) and install. Let's test to see if our Apache subversion module worked. Use 'http:///svn to see verify it worked.