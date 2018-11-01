---
path: "jquery-tools-vs-jquery-ui"
title: "jQuery Tools vs jQuery UI"
description: "Comparing and contrasting the jQuery Tools library to jQuery UI."
tags: 
  - "JavaScript & jQuery"
  - "jQuery"
  - "jQuery UI"
date: "2009-06-05T00:09:13.000Z"
draft: false
category: "test"
layout: "post"
---

![](http://marcgrabanski.com/img/jquery-tools.jpg)
VS
![](http://marcgrabanski.com/img/logo-jqueryui.jpg)

A new library has come out called,["jQuery Tools](http://flowplayer.org/tools/)" that is packed with some visually appealing plugins built on top of jQuery.

Here is their opening line to grab your interest:
> Let's face it: do you really need drag-and-drop, resizables, selectables or sortable tables in your web applications? Websites are not desktop applications. They are different.

This is obviously a jab at [jQuery UI](http://jqueryui.com/)
> What you really need are tabs, tooltips, accordions, overlays, smooth navigation, great visual effects and all those "web 2.0" goodies that you have seen on your favorite websites.
> jQuery UI contains six of the most useful JavaScript tools available for today's website. The beauty of this library is that all of these tools can be used together, extended, configured and styled. In the end, you can have hundreds of different widgets and new personal ways of using the library.
> While there is some truth to the fact that you don't need each component that jQuery UI provides in most websites. You still have to keep in mind that jQuery UI's focus is to bring a set of components to the table that you can pick and chose from.
> I agree with what the jQuery Tools author in saying that everybody needs overlays and visual effects that this library provides. I just don't understand attacking jQuery UI right off the bat, instead of augmenting the library and working together with them.

> Note: the author says he isn't attacking the jQuery UI library (in comments). But I think he should still be looking for ways to add the good parts of his plugins into jQuery UI.

From an outside perspective, this library shines and has great potential. However as I dig deeper into the [API](http://flowplayer.org/tools/using.html#api) it looked bad.
> Note: Tero from jQuery Tools has updated the API to fix this issue I'm pointing out here. You can see the result of the update in the [jQuery Tools release notes](http://flowplayer.org/tools/release-notes.html). This type of thing should be sorted out behind the scenes from now on, but it was a good learning experience for me personally about where the public / private line should be.

### Tooltip
```html
 [Move the mouse over this box to see the tooltip in action.](#)

### The Tooltip


-
-A great tool for designing better layouts and more intuitive user-interfaces.
-
-

Tooltips can contain any HTML such as links, images, forms and tables. This tooltip is vertically centered on the top edge of the trigger element

```

```js
 $('#tooltip').tooltip();
```

It doesn't make sense within the context of jQuery. So apparently, you have to grab the tooltip div, then turn it into a tooltip? Um... what? How do I get multiple tooltips on the page? Quick, here is the philosophy behind jQuery: # Find element(s) on the page # Do something to them Typically you would grab elements on the page and then attach the tooltips to them. This is just common jQuery sense.
> Note: After reading this article, the author of jQuery Tools updated his tooltip API.

As I dive into more examples of the tooltip, it continues to make no sense. The form example have no way to target inputs that you desire with custom classes or ids. You have to modify the markup before page load to change tooltips. After you load up the tooltips, you are stuck and cannot ditch tooltips, or make new ones from within the JavaScript. Please, just use the [jQuery Tooltip](http://bassistance.de/jquery-plugins/jquery-plugin-tooltip/) plugin or [ClueTip](http://plugins.learningjquery.com/cluetip/).

### Non-jQuery API
So now look at the [API](http://flowplayer.org/tools/using.html#api) where it talks about returning the API instead of a jQuery object by passing @api: true@ ... What? We are now forced to exit out of jQuery into a separate jQuery Tools API by passing a variable?
```js
 var api = $("#myDiv").scrollable({size: 3, api: true}); api.onClick = function(){ ...
```

Contrast this to using jQuery UI, you can stay within' jQuery and modify all settings.
```js
 var $myDiv = $("#myDiv").accordion({ 'header': 'h3' });
```

Then if later we want to change an option we can use that same div jQuery object.
```js
 $myDiv.accordion('option', 'changestart', function(){ ... });
```

With jQuery UI, all the plugins work with jQuery and it's philosophy. Working with John Resig's supervision and incite. Working together. Returning a separate API has some potential, but not the way it is implemented here.

### jQuery Tools flying solo
All this means (from what I've seen) is that the author did not take the time to learn the *why* behind jQuery and decided to go his own route, then flame jQuery UI and give you some shiny effects. The effects have potential, but the author needs to open up the code and start collaborating instead of going it solo.
> Note: discussion has been opened up between jQuery UI and jQuery Tools teams.

Keep it real, y'all