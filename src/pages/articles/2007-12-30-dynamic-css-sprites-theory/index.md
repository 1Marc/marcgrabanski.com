---
path: "dynamic-css-sprites-theory"
title: "Dynamic CSS Sprites Theory"
description: "Dynamically stacking images together into a CSS Sprite would reduce page load times."
tags: 
  - "Optimization"
  - "Theory"
  - "Tips & Misc"
date: "2007-12-30T07:50:20.000Z"
draft: false
category: "test"
layout: "post"
---

> Update on September 23, 2009: My [theory" has been turned into a reality with "Sprite Me](http://spriteme.org/)

I thought of a way to optimize images and reduce http requests: dynamically stacking images together into a, 'sprite'.

![](http://marcgrabanski.com/img/dynamic-css-sprites-theory.gif)

Because it would be painful to stitch the images together and write the CSS rules, this would have to be done dynamically with a server side language. CSS sprites are [not a new theory](http://www.alistapart.com/articles/sprites) , but dynamic sprites are. I would love for the day that PHP generates nicely written CSS classes for me to use. If no one else creates this, I will - in time.

Each http request ( [test here](http://marcgrabanski.com/_sandbox/http-test/test.php) ) takes on average 80-100ms per http request. **If you have 40 images and compress them into 3 images, you would save 37 http requests, or at least 2 seconds of load time!**

The limitations:
- Different image types need to be grouped together (gif, png, jpg, etc).
- Images that need to be copied (right click, save as...) should not be part of a sprite.
- Images that repeat in both directions can't be turned into a sprite.

I've been sharing this theory with others in hopes that someone will care enough to build it (I don't have time right at the moment). Recently I shared my theory with Pamela Fox (Google Maps) and she said she would try it out on Google docs. I am excited to see if anything becomes of that. Otherwise, it will remain a theory until someone builds it - and if no one else, I'll build it when I get time.