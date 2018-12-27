---
path: 'jquery-plugin-actions-vs-utilities'
title: 'jQuery Plugin Actions vs Utilities'
description: 'Explaining the difference between developing an action plugin vs a utility plugin.'
tags:
  - 'JavaScript & jQuery'
  - 'jQuery'
date: '2008-01-24T09:50:23.000Z'
draft: false
layout: 'post'
---

Jonathan Snook posted about [Developing a jQuery plugin](https://snook.ca/archives/javascript/jquery_plugin/). I started a comment and it turned into a post. One question I've gotten from people moving to jQuery from other libraries is, "How do you extend a native object?" This is something you never do in jQuery, in fact it is against the philosophy of jQuery. One of the goals with jQuery is to be as unobtrusive to the native JavaScript language as possible - that way it plays nicely with other libraries and code. In this case you would want to create a _utility_ plugin instead of an _action_ plugin. Here is an example of using a utility plugin:

```js
$.formatDate(new Date(), 'm d Y')
```

This would return a string, not an object for chaining. So now if we want to perform an action with it... such as insert the value into a div we would use:

```js
$('#myDiv').html($.formatDate(new Date(), 'm d Y'))
```

I just wanted to point out a common pitfall when making a plugin. Some are utilities, and some are actions. A utility plugin returns a result, but an action plugin is something that returns an object for chaining. Take the method attachDatepicker, for instance:

```js
$('#myInput')
  .datepicker()
  .val('select a date')
```

It can be chained because it returns the input with the datepicker attached. You can see more examples of actions vs utilities in the [Datepicker Documentation](http://docs.jquery.com/UI/Datepicker) or look at the [jQuery Utilities (example of utilities)](http://docs.jquery.com/Utilities) vs [jQuery Manipulation (example of actions)](http://docs.jquery.com/Manipulation).
