---
path: 'use-web-standards-with-common-sense'
title: 'Use Web Standards with Common Sense'
description: 'css, divitis, divs'
tags:
  - 'CSS'
  - 'Development'
  - 'The Basics'
date: '2008-04-23T18:59:12.000Z'
draft: false
category: 'test'
layout: 'post'
---

As masters of [semantic markup](http://www.digital-web.com/articles/writing_semantic_markup/) , front-end (HTML/CSS) coders can get downright anal when it comes to writing clean, search engine friendly code. Yes, you should always strive for quality and meaningful markup! But, I'm afraid that more and more people are wasting their time (in my opinion) for a bit less markup in their code. Trust me, a [couple of extra divs](http://snook.ca/archives/html_and_css/its_not_divitis/) will not hurt anyone - I promise! I have wasted hundreds of hours re-coding and fixing bugs in IE6, Safari and Firefox when I could have saved that time with an extra div or two. Besides, I doubt you are going to see the fruit of your labor unless you are showing off to other developers.

### Rounded Corners, the Front-End Developer's Black Hole

Designers love adding rounded corners everywhere these days. Unfortunately, rounded corners can be the death of a front-end developer if designers cannot design consistent templates (sometimes this is out of their control). There are many projects I've seen and been on where the developer has to cut new sized rounded corner tops and bottoms of the same style, while making them work in all browsers - this takes a lot of time. Even worse, when the templates are handed off and implemented, many browser inconsistencies show up. This is a painful process to fix and make these types of boxes work cross-browser across all landscapes. The development team has to spend countless hours fixing boxes with rounded corners and drop shadows - a black hole of time and energy to keep the markup clean and consistent. So how do we fix this?

### Stop Wasting Time with a Few Extra Divs

At [work](/rmg-connect-minneapolis), we have saved countless hours with a solution based on [schillmania's rounded corners](http://www.schillmania.com/projects/dialog2/) template. With 5 (or a few more) divs, we have saved all that time and frustration! With this solution we only have only one image, as opposed to 10 different box tops and bottoms of the same style. Make sure you think about what is the best solution for your employer, their clients and _your sanity_. If you have an abundance of time than go ahead and strip those divs out of your code. But, if you want lightning fast results and want to become a very valuable front-end developer, pick your battles wisely and strive to make each keystroke more valuable. Clean markup is good, but fast and solid (semi-clean) markup that works in all browsers is almost always better.

### Don't be fooled by, "the standard"

One more note of advice, don't implement "the standard" just because someone tells you to. Make sure you understand why it is the standard. I've seen people use [css sprites](http://alistapart.com/articles/sprites) because it is the proper thing to do, while they totally messed up executing the technique because they didn't have an understanding why it exists. They could have done much better with what they know. Standard practices are difficult to master. You should only use them when you understand them. Get books like, [CSS Mastery](http://www.amazon.com/gp/product/1590596145?ie=UTF8&tag=httpmarcgrabc-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=1590596145)

Read a lot of books and articles online - research until your mind gets heavy. You will find out why standards exist and learn when it is appropriate and when it is simply a waste of time. Web standards and semantic markup are great, but please only implement them if you understand why you are doing it. You will save yourself and your employer a lot of trouble. Don't feel so pressured by web standards. Standards are great, but learn them at a pace where you don't break things. Eventually you will become a respected ninja warrior, I mean HTML/CSS master.
