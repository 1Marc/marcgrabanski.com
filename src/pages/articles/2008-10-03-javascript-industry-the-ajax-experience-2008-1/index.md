---
archived: true
path: 'javascript-industry-the-ajax-experience-2008-1'
title: 'JavaScript Industry Notes - The Ajax Experience 2008 (Part 1)'
description: 'Google Chrome and JavaScript library panel notes from The Ajax Experience 2008 in Boston.'
tags:
  - 'Conference'
  - 'Conferences'
  - 'JavaScript'
date: '2008-10-03T09:11:00.000Z'
draft: false
layout: 'post'
---

![](./logo-tae.jpg)

Over the last 4 days I attended The Ajax Experience 2008 (Boston) and jQuery Camp 2008. Each day I had many intense discussions about JavaScript with industry experts. I've been forming a picture of the industry with each discussion and presentation and would like to share what I've found out.If you would like a play-by-play, Nathan Hammond wrote a great job on covering [jQueryCamp](http://nathanhammond.com/jquery-conference-2008) and [TAE day 1](http://nathanhammond.com/the-ajax-experience-day-1) and [TAE day 2](http://nathanhammond.com/the-ajax-experience-day-2). Otherwise stay and read-up on my overview.

## Google Chrome

![](./logo-googlechrome.jpg)

Ojan Vafai spoke on "Google Chrome" Google's new web browser, which is built from the Chromium open source project.

> "The browser crashing will be as drastic as the computer blue screen."

He stated that as we do more in the browser, it becomes much more important that the browser doesn't completely crash when things go wrong. He says that it will become increasingly more drastic to people when their web browser crashes. I agree, because it isn't as easy to bounce back from a crash when I am using web applications - I might have lost data in the last session that going back to that same URL won't get the data back. Google Chrome tries to solve this issue with multi-processing. Running each tab as a task, to which there is a task manager that you can kill each process.Also separate processes can take advantage of people running multiple processors.

> "Browsers are what is holding up performance and that needs to change."

Ojan also stated that the bottleneck of writing JavaScript applications for the web is on the web browsers, and not the developers. That is why Google wrote Chrome, to increase the speed of their applications and allow them to write more robust applications in the browser.

> "We want to fix bugs, instead of you having to hack around them."

Ojan also pleaded with the audience about getting involved in documenting bugs, instead of hacking around them. The Chrome team would rather a bug be fixed than to have someone hack around the bug. Google Chrome chose WebKit as the rendering engine of the browser. He explained:

> "We didn't want to create a new rendering engine for web developers to have to test against."

Overall Google Chrome is a great addition to the web browser landscape. As competition increases, so does quality.

## The JavaScript Library Panel

PPK, who runs [Quirksmode.org](http://quirksmode.org/) interviewed the JavaScript library authors from Prototype, YUI, Dojo and jQuery.

[![](./ajax-panel.jpg)](http://farm4.static.flickr.com/3275/2902388592_fb31532766.jpg?v=0)

The panel asked how their library worked within Google Chrome, and it seemed that there were no huge problems with the libraries, just a few minor issues that were not hard to deal with. The panel got a little fired up though, when John Resig (jQuery) made the following declaration:

> "Browser sniffing is used almost as bad as eval()."

He maintained that in order to support new and different browsers, the library needs to not contain browser sniffing. The other library authors thought this goal of not having browser sniffing in the library was a pipe dream. I didn't understand their arguements for why this was the case.But John's argument seemed clear to me, "you test browser capabilities rather than browser types and versions". It seems like a relatively simple concept, although tough to execute. John reassured me in person that he would not have made that statement if he didn't have code to back it up. The panel was asked in the end,"If you had to use a library and couldn't use your own, which one would you chose."The audience laughed. Prototype representative:

> "It depends on the case.If I am a designer, than I'd use jQuery. But if I was a Java developer, than Dojo."

Dojo representative:

> "I would use the new Goog library because it looks a lot like Dojo."

jQuery representative:

> "Prototype."

YUI representative:

> "jQuery."
