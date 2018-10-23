---
path: "simulating-mouse-click-events-in-javascript"
title: "Simulating Mouse Events in JavaScript"
description: ""
tags: 
  - "JavaScript & jQuery"
date: "2011-07-07T17:36:13.000Z"
draft: false
category: "test"
layout: "post"
---

For unit testing I needed a way to simulate mouse events like "mousedown". The tricky thing about unit testing mousedown is based on the position of your mouse your web application might behave in different ways. Here I show you how to simulate a mouse event in both pure JavaScript and jQuery with passing in mouse coordinates.

## Pure JavaScript Click Simulate
```js
 function mouseEvent(type, sx, sy, cx, cy) { var evt; var e = { bubbles: true, cancelable: (type != “mousemove”), view: window, detail: 0, screenX: sx, screenY: sy, clientX: cx, clientY: cy, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, button: 0, relatedTarget: undefined }; if (typeof( document.createEvent ) == “function”) { evt = document.createEvent(“MouseEvents”); evt.initMouseEvent(type, e.bubbles, e.cancelable, e.view, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, document.body.parentNode); } else if (document.createEventObject) { evt = document.createEventObject(); for (prop in e) { evt[prop] = e[prop]; } evt.button = { 0:1, 1:4, 2:2 }[evt.button] || evt.button; } return evt; } function dispatchEvent (el, evt) { if (el.dispatchEvent) { el.dispatchEvent(evt); } else if (el.fireEvent) { el.fireEvent(‘on’ + type, evt); } return evt; }
```

There is some good stuff in here, namely @document.createEvent@ and the fallback to @document.createEventObject()@. As well as @el.dispatchEvent@ and the fallback to @el.fireEvent@. Also check out this "pure DOM API mouse click event":http://www.domenlightenment.com/#11.13 in DOM Enlightenment by Cody Lindley. Here is an example of using my extracted methods to perform a simulated click.
```js
 window.onclick = function(){ console.log(‘window clicked’); } var test = document.getElementById(‘test’); test.onclick = function(){ console.log(‘test clicked’); } var evt = mouseEvent(“click”, 1, 50, 1, 50); dispatchEvent(test, evt);
```

We are just console logging here, but there is no reason you can’t hitch jQuery simulate or something like this into your current testing framework. If you do have jQuery, you can use jQuery Simulate as mentioned above, or in the past I’ve achieved virtually the same thing with this method:

## jQuery Click Simulate (without a plugin) With [jQuery events](http://api.jquery.com/category/events/event-object/), this is even easier.
```js
 var $el = $(selector); var offset = $el.offset(); var event = jQuery.Event( "mousedown", { which: 1, pageX: offset.left, pageY: offset.top }); $el.trigger(event);
```
