---
path: "cakephp-media-temple-dv-3"
title: "CakePHP on Media Temple (dv) 3.5"
description: "Configure your Media Temple dv to see a central set of CakePHP files. (Plesk on Linux)"
tags: 
  - "CakePHP"
  - "Linux"
  - "Linux & Server Admin"
  - "Media Temple"
  - "PHP"
date: "2008-06-18T12:59:16.000Z"
draft: false
category: "test"
layout: "post"
---

!http://marcgrabanski.com/img/logo-cakephp.gif! !http://marcgrabanski.com/img/dedicated-virtual.jpg! A good thing to do when deploying CakePHP websites is to load one copy of the CakePHP core files onto your server, and point all of your domains to that core directory. Media Temple's Plesk default configuration does not let PHP access files outside the website httpdocs. So we need to configure the domain's settings to have access to the root /cake folder, or wherever you happened to put the CakePHP root files. First, let's make a new config file in our domain. \_Make sure you replace domain.com with your domain.\_ \[code lang="bash"\] cd /var/www/vhosts/domain.com/conf/ vi vhost.conf \[/code\] Then basically we are over riding the default settings of Plesk with our own. Setting @open_basedir@ to allow the /cake path. \[code lang="xml"\] php\_admin\_flag engine on php\_admin\_flag safe\_mode off php\_admin\_value open\_basedir "/cake:/var/www/vhosts/domain.com/subdomains/tools/httpdocs:/tmp" php\_admin\_flag engine on php\_admin\_flag safe\_mode off php\_admin\_value open\_basedir "/cake:/var/www/vhosts/domain.com/subdomains/tools/httpdocs:/tmp" \[/code\] Now we need to reload the vhost to include that loads our new config file. \[code lang="bash"\] /usr/local/psa/admin/sbin/websrvmng --reconfigure-vhost --vhost-name=domain.com service httpd graceful \[/code\] Great! Now we can have a central set of cake files and use it for each domain.