---
path: "groovy-escape-quote-string"
title: "Groovy JSON String Escape Quote"
description: "Trying to escape quotes in Groovy to print a JSON or JavaScript string?"
tags: 
  - "Groovy"
  - "Tips & Misc"
date: "2010-07-28T20:00:39.000Z"
draft: false
category: "test"
layout: "post"
---

The project I'm working on at the moment is in Groovy. In order to set JSON on page load, you have to escape either single quotes or double quotes. This article details my struggle with escaping single quotes in Groovy. \[code lang="js"\] var myJSON = "this is the cat's first day in Marc's house"; // JavaScript string \[/code\] With groovy, you can cast something as JSON and set it to the view pretty easily. \[code lang="groovy"\] // setting JSON object to view in grails def myObject = \[ id: id, foo: foo \] \[myObject: myObject as JSON\] \[/code\] In the view, you can use jQuery's parseJSON method to set the myJSON object from your server-side method. \[code lang="js"\] // turning Groovy JSON object into JavaScript JSON in view var myJSON = $.parseJSON('${myObject}'); \[/code\] The problem comes when you have single quotes inside that JSON string. bq. "Strings are CON-FUSE-ING in groovy- I just want to print a dang backslash-quote "'" nope try again.. '\\'" ..nope "\\'" ..nope.. '\\\'' ..?" - "2AM Tweet frustration":http://twitter.com/1Marc/status/19722616677 I looked up countless articles, and found out that it is not actually strings that are a deal. With Groovy, you have to use four slashes @s.replaceAll("'", "\\\\\\'")@. See, "Slashy Strings in Groovy":http://blog.adaptivesoftware.biz/2009/06/slashy-strings-in-groovy.html. This is also outlined in a forum thread where people were complaining about Java itself, "String.replaceAll troubles with regEx":http://www.velocityreviews.com/forums/t152246-string-replaceall-troubles-with-regex.html. This is great if you want to print out a normal string: \[code lang="groovy"\] // string replace single quote with backslash-quote in groovy def myString = " the dog's tail is being chased more' quotes' 09' 10' " myString = myString.replaceAll("'", "\\\'") \[/code\] But won't work is if you try to cast that object @as JSON@. I tried to do this inside an object and cast it @as JSON@ then the once I set it to the view, ' doesn't print out. If you have a solution for this great, but I solved my problem by getting the JSON via a simple AJAX @$.get@ request. bq. Matt solved my issue with @s = s.replaceAll(“’”, “\\\\\\u0027”)@