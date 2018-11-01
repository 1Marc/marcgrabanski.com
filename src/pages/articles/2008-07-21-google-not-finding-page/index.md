---
path: "google-not-finding-page"
title: "Apache Redirect Craziness"
description: "Google is directing traffic to the home page instead of the page that it should direct to."
tags: 
  - "Apache"
  - "Google"
  - "Linux & Server Admin"
  - "SEO"
date: "2008-07-21T10:14:00.000Z"
draft: false
category: "test"
layout: "post"
---

I was shocked after searching Google today, Google is currently redirecting to my homepage and 
-not the actual page searched for.
-
![](http://marcgrabanski.com/img/google-search-homepage.jpg)
[Why is this?"I thought to myself. I tried the url that you *should* get... "http://marcgrabanski.com/pages/code/jquery-ui-datepicker](http://marcgrabanski.com/pages/code/jquery-ui-datepicker) ... ok that works fine. Now try the old url that has most of the link juice attached to it which has a 301 redirect to the new page... [http://marcgrabanski.com/code/ui-datepicker/](http://marcgrabanski.com/code/ui-datepicker/) ... ok that works fine too. So what is going on?
> Update July 30, 2008: The Google crawl appears to be fixed, the search results look good now, so this issue is resolved! Hoorah.

> Update July 23, 2008: There is great discussion going on on [Sphinn](http://sphinn.com/story/60419) about this issue.

First, I go to Google Webmaster and see this, an SEO's nightmare:
![](http://marcgrabanski.com/img/google-webmaster-404-errors.jpg)
Time to [check my 301 redirects](http://www.best-seo-tools.net/301check/) :
![](http://marcgrabanski.com/img/301-redirect-ui-datepicker.jpg)
And on [another 301 redirect tool](http://www.webconfs.com/redirect-check.php) :
![](http://marcgrabanski.com/img/301-redirect-ui-datepicker2.jpg)
Well that worked great.Still, *what is the issue?* To make absolutely sure my 301 redirects work, I dumped the text redirects into a htaccess file.My htaccess code now looks like this:
```xml
 AddDefaultCharset UTF-8 DefaultLanguage en-US

RewriteEngine On RewriteBase / RewriteRule ^index.php http://marcgrabanski.com/articles [R=301,L] RewriteRule ^code.html http://marcgrabanski.com/pages/code [R=301,L] RewriteRule ^code/beyond-flash(/?) http://marcgrabanski.com/pages/code/beyond-flash [R=301,L] # MANY RedirectRules ... ALL WORK FINE RewriteCond %{HTTP_HOST} ^www.marcgrabanski.com$ [NC] RewriteCond %{REQUEST_URI} !.
-tags.php.
- [NC] RewriteRule ^(.
-)$ http://marcgrabanski.com/$1 [R=301,L] RewriteCond %{REQUEST_FILENAME}.php -f RewriteCond %{REQUEST_URI} !/$ RewriteRule (.
-) $1.php [L] RewriteCond %{REQUEST_FILENAME} !-d RewriteRule ^(.+)/$ /$1 [R=301,L] RewriteRule ^$ webroot/ [L] RewriteRule (.
-) webroot/$1 [L] AddHandler php5-script .phpbq.
```

> Update July 23, 2008 @1:24AM: I changed all of the Rules to @RewriteRule@ 's which has cleaned up most of my 301 redirects.One issue remains, I need to figure out how to make a RewriteRule to convert: http://marcgrabanski.com/tags.php?tag=FreeTools to... http://marcgrabanski.com/tag/free-tools