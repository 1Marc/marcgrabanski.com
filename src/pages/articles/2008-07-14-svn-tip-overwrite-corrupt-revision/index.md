---
path: "svn-tip-overwrite-corrupt-revision"
title: "SVN Tip: Overwrite Corrupted Revision"
description: "Overwrite a corrupted SVN revision with a stable svn revision."
tags: 
  - "Linux"
  - "Linux & Server Admin"
date: "2008-07-14T23:59:32.000Z"
draft: false
category: "test"
layout: "post"
---

!http://marcgrabanski.com/img/logo-svn.png! Yet again I was saved from a \_catastrophic failure\_ by using SVN. If you are not using SVN or some sort of version control I \*highly recommend\* using SVN as it will save you from losing your work time and time again. h2. SVN Reverse Merge The common way to roll back a change is the \_reverse merge\_. You are taking the old revision and merging it into your working directory.For instance, here we could merge revision 117 into our working directory with this command: \[code lang="bash"\] svn merge -c 117 ./ \[/code\] In the case of a corrupt check in, this may not be possible.SVN was essentially "stuck" for me at a revision because of some errors that occurred (don't ask me how I got to this point, lol). So I had to come up with another solution... h2. "Side Steping" Latest Revisions SVN was corrupted at revision 118+ and so I \_could not\_ __ get anything working if I svn updated to the latest. So, I came up with this, "side steping" method where you can roll back to an old revision without having to @svn update@ to the latest revision. To pull it off, we first need to delete the latest working copy, then we resurrect the old revision. 1. Delete the current folder in SVN that contains the corrupted file folder. \[code lang="bash"\] svn delete file:///svnroot/domain.com --message 'deleting corrupt revision' \[/code\] 2. Resurrect the stable revision (in this case #117) with @SVN copy@ . The @-r@ flag allows us to enter the revision number that we want to resurrect. \[code lang="bash"\] svn copy -r 117 file:///svnroot/domain.com file:///svnroot/domain.com --message 'resurrecting the old revision' \[/code\] 3. Check out the latest from SVN and you are back on the road! \[code lang="bash"\] svn co file:///svnroot/domain.com \[/code\] If you are not sure what revision to roll back to, you can always use @svn log@ to review your previous commits to find the stable revision number. This method sure has saved me from what could have been a \_world of coding pain.\_