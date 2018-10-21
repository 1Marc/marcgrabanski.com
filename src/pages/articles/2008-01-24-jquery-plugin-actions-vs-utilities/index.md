---
path: "jquery-plugin-actions-vs-utilities"
title: "jQuery Plugin Actions vs Utilities"
description: "Explaining the difference between developing an action plugin vs a utility plugin."
tags: 
  - "JavaScript & jQuery"
  - "jQuery"
date: "2008-01-24T09:50:23.000Z"
draft: false
category: "test"
layout: "post"
---

\_Jonathan Snook posted about "developing a jQuery plugin":http://snook.ca/archives/javascript/jquery\_plugin/. I started a comment and it turned into a post._ One question I've gotten from people moving to jQuery from other libraries is,"How do you extend a native object?"This is something you never do in jQuery, in fact it is against the philosophy of jQuery. One of the goals with jQuery is to be as unobtrusive to the native JavaScript language as possible - that way it plays nicely with other libraries and code. In this case you would want to create a \_utility\_ plugin instead of an \_action\_ plugin. Here is an example of using a utility plugin: \[code lang="js"\] $.formatDate(new Date(), 'm d Y') \[/code\] This would return a string, not an object for chaining. So now if we want to perform an action with it... such as insert the value into a div we would use: \[code lang="js"\] $('#myDiv').html($.formatDate(new Date(), 'm d Y')); \[/code\] I just wanted to point out a common pitfall when making a plugin. Some are utilities, and some are actions. A utility plugin returns a result, but an action plugin is something that returns an object for chaining. Take the method attachDatepicker, for instance: \[code lang="js"\] $('#myInput').datepicker().val('select a date'); \[/code\] It can be chained because it returns the input with the datepicker attached. You can see more examples of actions vs utilities in the "Datepicker Documentation":http://docs.jquery.com/UI/Datepicker or look at the "jQuery Utilities (example of utilities)":http://docs.jquery.com/Utilities vs "jQuery Manipulation (example of actions)":http://docs.jquery.com/Manipulation.