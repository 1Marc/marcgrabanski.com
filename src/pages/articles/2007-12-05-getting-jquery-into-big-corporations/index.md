---
path: "getting-jquery-into-big-corporations"
title: "Getting jQuery into Big Corporations"
description: "How use jQuery for big corporations' projects."
tags: 
  - "Business"
  - "JavaScript"
  - "JavaScript & jQuery"
  - "jQuery"
date: "2007-12-05T21:44:15.000Z"
draft: false
category: "test"
layout: "post"
---

![](http://marcgrabanski.com/img/nyc-corporations.jpg)
Big corporations are typically resistant to adopting change - and for good reason. They have to work at keeping stable a large amount of applications in one environment. Internal IT teams will usually only adopt something if it doesn't interfere with their jobs or make them more difficult. You must have a really good reason to bring something new in. I understanding that, so how do you get them to approve you using a relatively new library like jQuery?

### The Easy Way The simplest way I've found to get jQuery into projects is use it for doing something very specialized. Creating tabbed panes, [graphing data](http://ole-laursen.blogspot.com/2007/12/flot-01-released.html), or maybe some simple animation effects that are normally created in Flash. Either way, from that point on you can use it in the application. But what if you want to build a project from the get-go, from scratch in jQuery?

### Big Corporation Project, Built on jQuery Currently I am building a Google Maps application for one of the biggest banks in the world, HSBC. It is almost done, and I used jQuery to build the application with my manager's approval. As expected, when we handed the code off to HSBC's internal IT team in India they asked why we used jQuery:
> "Is there any advantage of using jquery as google is already providing Ajax api for the same purpose. Also please clarify whether there is any licensing issues with jquery. If it is free, then can we use in commercial projects?"

My response:
> jQuery is used is for parsing XML and adding behavior to the page elements in a faster and more compatible way. jQuery eliminates the problems that JavaScript has with inconsistent rendering between browsers and jQuery also improves the rendering speed / performance of the application. The code is arguably easier to maintain because it reduces the overall code size of the application because you do not have to code in different ways depending on the browser.

jQuery is dual licensed under the MIT and GPL licenses (http://docs.jquery.com/License), which means that it is 100% free for commercial use. Note that jQuery is used by: Google, NBC, MSNBC, Bank of America, Amazon, Intel, BBC, Newsweek, AOL and Intuit - just to name a few. Full list: http://docs.jquery.com/Sites_Using_jQuery A very vibrant and active community surrounds jQuery and it will continue to be well documented and maintained. My response was very well received - feel free to use that explanation in your own corporation. I have to say though it has been much easier to get accepted since [Google uses jQuery](http://ajaxian.com/archives/google-code-revamps-with-jquery). My feeling is that internally to use jQuery you really only need your manager's approval. Once you sell him and your immediate team around you on the idea, you shouldn't have a problem using jQuery for projects. After all, it makes all of our lives easier. **jQuery has saved me countless hours and the client's work is going to be better because of it.** Thanks, [John](http://ejohn.org) and the [jQuery team](http://docs.jquery.com/About/Contributors).