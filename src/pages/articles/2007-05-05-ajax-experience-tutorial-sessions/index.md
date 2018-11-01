---
path: "ajax-experience-tutorial-sessions"
title: "Ajax Experience Tutorial Sessions"
description: "Day 1 of 5 in Boston, I logged the tutorial sessions at The Ajax Experience."
tags: 
  - "Conference"
  - "Conferences"
  - "Open Source"
date: "2007-05-05T17:00:00.000Z"
draft: false
category: "test"
layout: "post"
---

- 
-Part 1: Ajax Experience Tutorial Sessions
-
- [Part 2: Ajax Experience Roundup](http://marcgrabanski.com/article/81/Ajax-Experience-Roundup)

![](http://marcgrabanski.com/img/logo-ajax-experience.gif)

I'll be here in Boston for the next week at the Ajax Experience until Friday. Then on Saturday I will be heading over to [jQuery Camp](http://docs.jquery.com/JQueryCamp07) at Harvard where I am giving two sessions.

## Day 1 - Geek Week @ The Ajax Experience 2007
I flew into Boston this morning from Minneapolis and ate lunch with my cousin. Had an interesting time and finally got here to the Ajax Experience. After spilling a pitcher of water - almost frying some guy's laptop and breaking a glass on the other side of the room, I finally sat down to view the first tutorial titled, "Ajax Tutorial".

## Ajax Tutorial
### Ben Galbraith - Co-founder of Ajaxian.com
[Ajax Tutorial Presentation Slides](http://feature50.com/AjaxTutorial.pdf)

Ben gave an overview of Ajax and started getting his hands right into some demo code. He showed a very basic implementation of the XMLHttpRequest object to send data to the server.

### Ajax Innovations 
- [Google Maps](http://maps.google.com) was the early innovator with Ajax. Proved to many developers that you actually can do more in a web browser. 
- [Housing Maps](http://housingmaps.com) went out to craigs list and merged addresses with housing listing without the permission of Google. Housing Maps showed that Ajax is exposed to the world and there is really nothing the publishers can do to hide it. 
- Google Suggest shows that the network response time isn't that slow and you can rely on quick response times from the server. 
- [Blinklist](http://www.blinklist.com/) opened the door to cleaner and quicker UI. The biggest lesson from Ajax that we learned is, [JavaScript doesn't suck after all". Tools to develop ajax are "Aptana](http://www.aptana.com/) and [Firebug](http://www.getfirebug.com/) - check and check. I absolutely love these tools and use them every day. Ajax is somewhat slow and processor intensive, but [Tamarin](http://www.mozilla.org/projects/tamarin/) is a project that will speed up processing of JavaScript. Adobe's ActionScript interpreter is faster (up to 10 times) and they donated it to Mozilla. Now Mozilla is working on implementing Adobe's ActionScript engine to interpret JavaScript faster in the browser.

## JavaScript Libraries
### John Resig - Mozilla
Three basic ways to implement JavaScript with libraries.

- Level 1 - Easily drag and drop in widgets into your web application. 
- Level 2 - Some assembly required. Set of functions that allow you to not worry about the browser bugs. JavaScript Frameworks - Aids writing JavaScript code. 
- Level 3 - Directly interact with the DOM API. Dealing directly with DOM and dealing directly with browser quirks and bugs. 

You 
-should
- use a JavaScript library so you don't have to deal with problems people have already solved. Hence wasting a lot of time.

Prototype, jQuery, Yahoo UI, Dojo - These four libraries completely dominated the open source, general purpose JavaScript libraries. These libraries are significantly more popular than any commercial solutions. GWT, DWR and etc are minuscule in their overall use than the open source JavaScript libraries.

### Overview of Frameworks
- [Prototype](http://prototypejs.org/) is the oldest JavaScript framework (3 years old) and is the default for Ruby on Rails. Prototype's function naming scheme looks like Ruby functions. Prototype doesn't include any animations. That is done by it's sister library, Scriptaculous. 
- [jQuery](http://jquery.com) is focused on short code and is specifically focused on adding behavior to the DOM (HTML). Features can be added via plugins. jQuery pioneered using CSS selectors to interact with the DOM, which is now being included into the other libraries. 
- [YUI](http://developer.yahoo.com/yui/) is an attempt to standardize internal Yahoo JavaScript. They didn't want to rewrite their code internally, so they decided to put their code into a framework. 
- [Dojo](http://dojotoolkit.org/) is largely backed by corporatations and manpower. Very standardized and completely focused on building web applications.

*My laptop died after this so I'll summarize in my own words after the fact.*

The philosophies behind the libraries are different. jQuery and prototype are built from the bottom up. They solve the core browser problems first and than build other features on top of the core. YUI and Dojo are built from the top down. They are built from the perspective of the end widgets and than built down to the core. The similarities between the widgets.

He than showed a variety of widgets that some people need and compared the libraries on what each one has. You can view this comparison on the [presentation slides](http://ejohn.org/blog/javascript-library-overview/).

The overall mantra of the presentation was choose the best library for what you need by looking at their strengths and weaknesses. John did a good job of giving an overview of these strengths and weaknesses in his presentation.

## Designing for Ajax
### David Verba of Adaptive Path
He spoke on the elements of user experience. What I found most interesting about this presentation is that he said with the new user experience (that includes Ajax) Information Architecture artifacts no longer work. It is difficult to map the user experience. He talked about different tools that he has tried to use to to no avail. He said prototypes built with HTML/CSS/JavaScript seem to be the only way to go. It is the only way to really map the interactive experience without building the actual backend of the application.

I am sure the IA folks from back home would have absolutely loved this presentation. According to this, I - as an HTML/CSS/JavaScript developer - would actually have to be involved with the IA process.

## Wrapping up Day 1
It was great tutorial day - a precursor to the actual Ajax Experience conference. I have to say I was absolutely locked to Resig's presentation, being that I am really involved with JavaScript development. David Verba's presentation was very important for developing client work, and Ben's was a great overview on Ajax. Tomorrow is when the actual conference starts. Here is my schedule:

|_.Time |_.Title |_.Category | |Tue (1:00PM-2:30PM)|Intro to Ajax - Ben Galbraith and Dion Almaer|Tutorials| |Tue (2:30PM-4:00PM)|JavaScript Library Overview - John Resig|Tutorials| |Tue (4:00PM-5:30PM)|Designing for Ajax|Tutorials| |Wed (10:25AM-11:25AM)|The Future and Viability of the JavaScript Language - John Resig|JavaScript| |Wed (12:00PM-1:00PM)|Reaching the Entire World: Accessibility&Internationalization with Dojo - Adam Peller&Becky Gibson|Frameworks: Client-Side| |Wed (2:00PM-3:00PM)|Industry Leader Technical Session|Industry Leader Technical Session| |Wed (3:10PM-4:10PM)|Industry Leader Technical Session|Industry Leader Technical Session| |Wed (4:35PM-5:35PM)|Ajax Performance Analysis: Employing the Latest Tools to Get the Job Done|Building Quality Software| |Thu (9:10AM-10:10AM)|Intro to jQuery - John Resig|Frameworks: Server-Side| |Thu (1:00PM-2:00PM)|Advanced jQuery - John Resig|Frameworks: Server-Side| |Thu (2:10PM-3:10PM)|CASE STUDY: Dodging the Pitfalls of Enterprise Ajax Applications - Joshua Gertzen|Case Study| |Thu (3:45PM-4:45PM)|Using Firebug for More than Development - Patrick Lightbody|Building Quality Software| |Thu (4:45PM-5:45PM)|Ruining the User Experience - Aaron Gustafson|Design&Effects| |Thu (6:00PM-7:00PM)|Ajax on Struts - Ted Husted|Frameworks: Client-Side| |Fri (10:10AM-11:10AM)|Design Patterns and Animation with jQuery - Paul Bakaus|Design&Effects| |Fri (11:30AM-12:30PM)|Silverlight|Design&Effects| |Fri (2:10PM-3:10PM)|Advanced JSON: Persistence Mapping, Mashups, RPCs and beyond - Kriz Zyp|Architecture| |Fri (3:20PM-4:20PM)|Looking for a Fix? Ajax Debugging&Quality Assurance|Building Quality Software|

I will attempt to document good sessions, but there aren't any plugins around here so it is going to be hard to save the laptop juice. 5 days total - 1 day down.