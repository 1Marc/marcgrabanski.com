---
path: '5-tips-for-better-jquery-code'
title: '5 Tips for Better jQuery Code'
description: 'Write better jQuery code using tips for storing data, custom selectors, ajax file forms and livequery plugin.'
tags:
  - 'JavaScript & jQuery'
  - 'jQuery'
  - 'Tutorial'
date: '2008-11-14T11:45:49.000Z'
draft: false
layout: 'post'
---

![](./logo-jquery.jpg)

I've been coding using jQuery since shortly after it came out, and well -- I've been using it almost every work day. Here is a few tips that have saved me time.

## #1: Use data method instead of storing data inside the DOM.

The mistake I see people making all the time is this:

```js
$('selector').attr('attribute', 'this is the data that I am storing') // then later getting that data with $('selector').attr('attribute');
```

Why is this a bad thing? Because "attribute" has absolutely no meaning whatsoever. Instead use the [data method in jQuery](http://api.jquery.com/jQuery.data/). It allows you to associated data with an element on the page.

```js
$('selector').data('meaningfullname', 'this is the data I am storing') // then later getting the data with $('selector').data('meaningfullname');
```

This allows you to store data with meaningful names and as much data as you want on any element on the page. It is a really amazing utility and something I've come to rely on.

## #2: Take advantage of jQuery's built-in custom selectors.

jQuery has a [plentiful amount of selectors](http://api.jquery.com/category/selectors/) that are beyond basic CSS selectors, so use them. Some that I use are:

- `:input` example: get all the inputs on the page regardless if they are checkbox, textarea or select list - use `:input`
- `[attribute=value]` example: find an input with the name,"container"- use `input[name='container']`
- `:eq(index)` example: get the fourth table on the page - use `table:eq(3)`

## #3: If you are Manipulating the DOM a lot, use the new on syntax.

When you add elements to the page a lot, attaching events with delegation. This way you can do things like:

```js
 $(document).on('click', 'div.edit', function(){ ... });
```

Then whenever you add a div to the page with class "edit" it will attach that click event.

## #4: Use jQuery form plugin to submit files via Ajax.

If you use Mike Alsup's [jQuery form plugin](http://malsup.com/jquery/form/) you can use it to submit files via Ajax. It uses a trick with an iframe to submit the data. Just put in an input type file, then use `$(form).ajaxSubmit();` and you are good to go.

## #5: Use classes as flags.

If you aren't storing data, but need to set a flag on an element use a class. What do I mean by a flag? Well, for instance if you are in"edit mode" of a form you might use the class,"editing". With jQuery you can add a class with the [addClass method](http://api.jquery.com/addClass/) and then check later if an element has the class with the [hasClass method](http://api.jquery.com/hasClass/).

> Update: Todd Motto has written a great article on [using data attributes for state changes](http://toddmotto.com/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states/) instead of classes. Back when I wrote this article data attributes weren't standard in HTML5...now they are!
