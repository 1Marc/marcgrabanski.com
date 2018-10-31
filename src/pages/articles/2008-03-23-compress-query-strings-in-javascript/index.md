---
path: "compress-query-strings-in-javascript"
title: "Compress Query Strings in JavaScript"
description: "JavaScript function compresses redundant query string data into comma-separated values."
tags: 
  - "JavaScript"
  - "JavaScript & jQuery"
date: "2008-03-23T22:56:26.000Z"
draft: false
category: "test"
layout: "post"
---

Since query strings are limited depending on the browser, I wrote this function to grab redundant data variables and consolidate them into comma-separated values. For instance: @foo=1&foo=2&foo=3&blah=a&blah=b@ would turn into... @foo=1,2,3&blah=a,b@ This saves some room in the query string. Of course you need to write a trivial line to parse it on the server side, but this saves you some room for more variables in a query string. Here is my attempt at a JavaScript function that does this: (don't use this, use John's revised function below)
```js
 function compress(query) { s = {type:[],value:[]} $.each(data.split('&'), function(n){ parts = this.split('='); s.type[n] = parts[0]; s.value[n] = parts[1]; }); var csv = ''; while(s.type.length > 0) { value = s.value.shift(); type = s.type.shift(); while((pos = $.inArray(type, s.type)) > -1) { value += ',' + s.value.shift(); s.type.shift(); } csv += type + '=' + value + '&'; } return csv.substring(0, csv.length-1); }
```

I messaged "John Resig":http://ejohn.org , and he wrote the function that was much smaller, and faster.
```js
 function compress(data){ var q = {}, ret = ""; data.replace(/([^=&]+)=([^&]**)/g, function(m, key, value){ q[key] = (q[key] ? q[key] + "," : "") + value; }); for ( var key in q ) ret = (ret ? ret + "&" : "") + key + "=" + q[key]; return ret; }
```

**UPDATE:** *John Resig followed up with a post of his own, titled "search and don't replace":http://ejohn.org/blog/search-and-dont-replace/.*

## How John's Script Works You may be asking, but how does this work? - let me explain. First, the replace function accepts a regular expression as the first parameter, and the second parameter can be a string or a function. @replace(/([^=&]+)=([^&]**)/g, function(m, key, value){@ As far as I'm concerned, that lines is the magic of the script so I will go furthur. @/([^=&]+)=([^&]**)/g@ This is the regular expression that matches data that starts with ampersand and goes until the end or until the next ampersand. This extracts the data. The /g part loops through each match instead of just one, and does a replace on it. The function he is passing in has the three parameters set by the regexp."m"is the match,"key"is the unique identifier, and"value"is the entire string that the regexp is running against. Next he sets the object based on the key, if it exists already than add a comma between after the current value followed by the next value. @q[key] = (q[key] ? q[key] +",":"") + value;@ The last part of the code is simply looping through the, "q" object and outputting our new compressed query string. Brilliant.