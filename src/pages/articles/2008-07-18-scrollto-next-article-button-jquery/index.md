---
path: "scrollto-next-article-button-jquery"
title: "Make a \"Scroll To Next Article\" Button with jQuery"
description: "Allow readers to scroll to the next article with a button made with jQuery."
tags: 
  - "JavaScript & jQuery"
  - "jQuery"
date: "2008-07-18T07:11:36.000Z"
draft: false
category: "test"
layout: "post"
---

!http://marcgrabanski.com/img/jQuery-logo.gif!

If you saw my old articles page, you would have seen a, "next" button on the bottom left of the browser window that looks like this:
!http://marcgrabanski.com/img/structure/backgrounds/next_arrow.gif!

Click the arrow, and it will take you to the next article on the page.

To create this, first lets setup the CSS. The key in here is the `position: fixed; bottom: 2%; left: 2%;` statement. This pins the arrow to the bottom left of the browser window.Since position fixed doesn't work in IE6, I just hide the div with the `* html` hack - I know I'm bad ;) Since Apple dropped support for IE6, I might as well for the advanced features.
```c
#next_arrow { 
  width: 50px; padding-top: 50px; 
  background: url(../img/structure/backgrounds/next_arrow.gif) no-repeat top left;
  text-align: center; position: fixed; bottom: 2%; left: 2%; z-index: 999; 
} 
* html #next_arrow { display: none; } 
#next_arrow:hover { cursor: pointer; }
```

Using the [scrollTo plugin](http://plugins.jquery.com/project/ScrollTo), this is a fairly straight forward task to make the window scroll to the next article. Here is the code I am using:
```js
Query(function($){
$(‘

Next
‘)
.prependTo(“body”) //append the Next arrow div to the bottom of the document
.click(function(){
scrollTop = $(window).scrollTop();
$(‘#content h2’).each(function(i, h2){ // loop through article headings
h2top = $(h2).offset().top; // get article heading top
if (scrollTop
```

If you read my comments in the code, you should be able to know what’s going on here. The only thing you have to worry about is changing the selector `#content h2` to your article heading selector.

That’s it, now you have a skip to next article button!