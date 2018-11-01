---
path: "svn-authentication-and-auto-update"
title: "SVN Authentication and Auto Update"
description: "Adding basic Apache authentication to Subversion (SVN) and auto updating files on the server (continuous integration)."
tags: 
  - "Linux"
  - "Linux & Server Admin"
  - "Media Temple"
date: "2007-11-24T17:00:00.000Z"
draft: false
category: "test"
layout: "post"
---

![](http://marcgrabanski.com/img/dedicated-virtual.jpg)
During the first two parts of my series on setting up a [Media Temple](http://www.mediatemple.net/go/order/?refdom=marcgrabanski.com) dedicated server, I setup subversion (SVN) on apache. Now I want to show you how I setup basic authentication and a SVN hook to automatically deploy files to the server (called continuous integration). This is great because you can check in your files to SVN and see them on the server immediately.

### Adding Basic Apache Authentication to your Subversion (SVN) Repository First lets give apache access to the SVN database (the $ symbol just means it is a shell command).
```bash
chmod g+s /svnroot/db
```

Now create a password file with htpasswd, name the file whatever you would like. I chose to make my file hidden by adding the period before the name.
```bash
htpasswd -cm /etc/.htaccess yourusername
```

It will prompt you for your password. Now go back to your httpd.conf and than add the last four lines below to your Location code block- we are adding to what we did in [part 2 of the media temple setup series](http://marcgrabanski.com/article/86/Installing-Subversion-on-Apache).
```xml
DAV svn SVNParentPath /usr/local/svn AuthType Basic AuthName "Subversion repository" AuthUserFile /etc/.htaccess require valid-user
```

For security reasons, we also need to make sure and hide the .svn folders from having apache publicly display them: # Disallow browsing of Subversion working copy administrative dirs.
```xml
Order deny,allow Deny from all
```

Restart apache and when you try to access SVN you should be prompted for authentication. Great, SVN is now secure! You can also add more security by [adding SSL to your dedicated server](http://kb.mediatemple.net/article.php?id=430) .

### Creating a Subversion (SVN) Hook to Auto Update Your Server I want to automatically deploy my files to my httpdocs without having to manually go in and update the files. So to accomplish this you need to [create a SVN hook that runs after every commit](http://subversion.tigris.org/faq.html#website-auto-update) . First, copy the post-commit template from your svnroot/hooks folder. And lets also use chmod to give the file rights to execute.
```bash
cd /svnroot/hooks/ cp post-commit.tmpl post-commit chmod +x post-commit
```

Now we need to create a little C program. You should have [GCC](http://gcc.gnu.org/) installed. This will compile our little C program. Create a new svnupdate.c file and put this code in. Don't forget to change the directory path: @"public_html_directory"@
```c
#include #include #include int main(void) { execl("/usr/bin/svn","svn","update","/public_html_direcotry/", (const char 
-) NULL); return(EXIT_FAILURE); }
```

Complile the file with this command. It will take the whatever.c and compile it into a binary file.
```bash
gcc -o svnupdate svnupdate.c
```

Try executing the binary to see if it works with the env command.
```bash
env - ./svnupdateAlright
```

now copy the whatever binary into your hooks folder. And we'll also run a couple commands to give it proper priveledges:
```bash
cp whatever /svnroot/hooks cd /svnroot/hooks chown root:root svnupdate chmod +s svnupdate
```

Then lets tell the post commit hook to run our binary file name,"svnupdate".
```bash
vi /svnroot/hooks/post-commit
```

Inside it the post-commit hook tell it to run the binary using the absolute path:
```bash
/svnroot/hooks/svnupdate
```

Test it out by checking in a file to subversion. It should automatically update at the directory we set in the C program.