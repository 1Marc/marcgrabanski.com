---
path: "building-html-in-jquery-and-javascript"
title: "Building HTML in jQuery and JavaScript"
description: "Ways to create HTML with jQuery and JavaScript."
tags: 
  - "JavaScript"
  - "JavaScript & jQuery"
  - "jQuery"
date: "2010-07-08T15:31:50.000Z"
draft: false
category: "test"
layout: "post"
---

It can be a pain to create HTML elements in JavaScript. In this article I will outline a few ways I deal with HTML. First, we'll look at whether to use an HTML string or a jQuery object, then look at my little HTML string builder utility and finally get some links to templating libraries for building more complex HTML.

## HTML String, or jQuery Object? The first question you have to ask yourself is whether or not it makes sense to build out HTML as jQuery objects, or if you require the speed of building strings. In jQuery 1.4 you can built HTML objects that have events attached. Consider the following code.
```js
 $("", { id: "permissionsInput", name: "permissions", type: "checkbox", click: function(){ update(); }, checked: "checked" }).appendTo("#myForm");
```

You can see here that not only can you build out HTML with attributes, but you can attach events (like click) too. This ability was added to jQuery in version 1.4. If you were doing this 100 times though, it might be very slow. The better way to do it would be to build out the HTML strings first, and then attach events later with jQuery's @live@ or @delegate@ methods.

## Building HTML Strings So now you want to build an HTML string because you have a lot of elements to build and you can attach events later. There are basically two ways to do this. You can build one long HTML string and append it:
```js
 var data = ["a", "bunch", "of", "things", "to", "insert"]; var html = ''; for (var i=0; i < data.length; i++) { html += "" + data + ""; } $("#tablerow").append(html);
```

Or you can use an array which is typically a little faster.
```js
 var data = ["a", "bunch", "of", "things", "to", "insert"]; var html = []; for (var i=0; i < data.length; i++) { html[html.length] = "" + data + ""; } $("#tablerow").append(html);
```

## Building Complex HTML Elements When you are building more complex HTML, things get a little hairy in the code. Take our previous example with jQuery and turn it into raw HTML building:
```js
 html = '';
```

Not bad, but what if those attributes were set programmatically? This is typical.
```js
 html = '';
```

Yuck! So to solve this I wrote a little ditty function called buildHTML. The code isn't perfect and it could be written better (please do) but it looks like this:
```js
 // my little html string builder buildHTML = function(tag, html, attrs) { // you can skip html param if (typeof(html) != 'string') { attrs = html; html = null; } var h = '<' + tag; for (attr in attrs) { if(attrs[attr] === false) continue; h += ' ' + attr + '="' + attrs[attr] + '"'; } return h += html ? ">" + html + "" : "/>"; }
```

So now our code for building that same input becomes:
```js
 html = buildHTML("input", { id: inputId, name: inputName type: inputType checked: isChecked });
```

Nicer, huh? Get the gist for [buildHTML and examples](https://gist.github.com/466432). And by all means fork it and make it better.

## Templating Another way to build out more complex HTML is using templating. John Resig has a great article and some code examples for [JavaScript Micro Templating](http://ejohn.org/blog/javascript-micro-templating/) There is a templating language called [mustache](http://mustache.github.com/) that I see a lot of people using. Also, there has been some proposals for templating being built into jQuery's core, however for now there is a jQuery plugin on github [jquery-tmpl](http://github.com/nje/jquery-tmpl). Rey Bango wrote an article explaining [using jQuery templating](http://blog.reybango.com/2010/07/09/not-using-jquery-javascript-templates-youre-really-missing-out/). If you have any other HTML building tips, please share!