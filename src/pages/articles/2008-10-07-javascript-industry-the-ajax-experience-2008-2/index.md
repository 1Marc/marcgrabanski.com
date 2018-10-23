---
path: "javascript-industry-the-ajax-experience-2008-2"
title: "JavaScript Industry Notes - The Ajax Experience 2008 (Part 2)"
description: "Announcements in the JavaScript industry from The Ajax Experience 2008 in Boston."
tags: 
  - "Conference"
  - "Conferences"
  - "JavaScript"
date: "2008-10-07T22:40:04.000Z"
draft: false
category: "test"
layout: "post"
---

This is part 2 of my series on "JavaScript Industry Notes":http://marcgrabanski.com/article/javascript-industry-the-ajax-experience-2008-1 based on attending The Ajax Experience 2008, in Boston.

## Smush It Image Optimizer
!http://marcgrabanski.com/img/smushit.jpg!

The Yahoo performance team unveiled a tool called ""Smush.It":http://smushit.com/" that grabs all of the images used on a website and compresses them. I tried it on my website and it cut 26.53% off the size of my images. Pretty Impressive.

## Dreamweaver CS4
!http://marcgrabanski.com/img/dreamweaver-cs4.jpg!

Kevin Hoyt of Adobe showed off the new features of Dreamweaver CS4. I was actually quite impressed with how far they've come from being simply a WYSWYG drag'n'drop HTML editor. The new version features four things worth noting:

1. Dreamweaver's JavaScript code completion auto-detects what functions you can perform on an object. It also reads external scripts that you include and then update the code completion accordingly.
2. Includes the Webkit rendering engine so you can view how your pages are looking in split view while you are coding.It also has something called,"live view"where you can see the HTML being modified as the script runs, much like Firebug does.
3. You can pause JavaScript on the rendered page, right click an element and inspect its CSS properties, allowing you to even jump to the actual line item of the CSS file's class definition.
4. No more opening up dependent files as Dreamweaver CS4 already knows what files you have included and opens them for you.

## Comet Basics
Greg Wilkins came up with an interactive way of describing to the audience what Comet is. It involved the audience acting as the web browser and Greg as the server.
> **Normal Scenario**
> 
> Audience:"Hello, I'm Firefox/IE/Opera/etc. and I want to view my stock."
> Greg:"Hello, I'm the server and here are your stock prices."
> Audience:"Are there any updates to my stock price?"
> Greg:"There are no updates to your stock price."
> Audience:"Are there any updates to my stock price?"
> Greg:"Your stock price went up 1 point."
> 
> **Same Scenario with Comet**
> Audience:"Hello, I'm Firefox/IE/Opera/etc. and I want to view my stock."
> Greg:"Hello, I'm the server and here are your stock prices."
> **delay**
> Greg:"Your stock price went up 1 point."

!http://marcgrabanski.com/img/comet-chart.jpg!

I pulled the above chart from his presentation later that day. Basically Comet is a way for the server to talk to the client when it has new information, rather than the client polling the server a bunch of times asking for new information, where latency can occur between each poll.

## Firebug's Future
!http://marcgrabanski.com/img/firebug.jpg!

John Resig explained his involvement with Firebug. The two main points I pulled out:
- Resig is working on documenting and clean up the 35,000 lines of JavaScript that Firebug currently has. Firebug was previously maintained largely by one person and his job is to come in and make things readable and easier to maintain going forward.
- FireUnit - Resig demoed a test suite built into firebug that allows for a full test runner built directly into the browser.

Netflix explained that people were creating mashups via scraping Netflix's website, which led to broken links and bad applications. Now with their new API he was excited on what was being created.

## Internet Explorer 8 and Visual Studio
!http://marcgrabanski.com/img/logo-ie8-beta.jpg!

The Microsoft product manager explained a new focus of IE8 was on us, the developers. He showcased the, "development toolbar" that will be packaged with IE8 in order to provide better debugging. Even though it is widely known as a clone of Firebug for IE, he managed to never mention Firebug in his presentation. Regardless, it will provide us developers a far better experience when developing for Internet Explorer in the future.

!http://marcgrabanski.com/img/logo-visual-studio.jpg!

The next version of Visual Studio will be packaged with jQuery and will feature full IntelliSense for the library. Microsoft setup a standard for documenting JavaScript libraries and is hoping for community members to contribute in order for other libraries to be able to use Visual Studio IntelliSense.

I'll be covering more of the JavaScript industry in Part 3, until then please "subscribe":http://feeds.feedburner.com/allTrades if you haven't already. Also check out "Part 1":http://marcgrabanski.com/article/javascript-industry-the-ajax-experience-2008-1 if you missed it.