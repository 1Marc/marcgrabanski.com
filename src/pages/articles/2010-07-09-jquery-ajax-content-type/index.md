---
path: "jquery-ajax-content-type"
title: "Ajax Content Type Handling in jQuery"
description: "Handle different ajax content type responses sent from the server with jQuery."
tags: 
  - "JavaScript & jQuery"
  - "jQuery"
date: "2010-07-09T01:54:43.000Z"
draft: false
category: "test"
layout: "post"
---

Before jQuery 1.4, you had to specify the dataType in all of the types of ajax requests. \[code lang="js"\] $.get(url, data, function, "html/json/xml.."); $.post(url, data, function, "html/json/xml.."); $.ajax({ ... dataType: "html/json/xml.." }); \[/code\] Now, you can have the server respond with the mime type like @application/json@ and jQuery will automatically switch the dataType for you! This makes more sense because the server is the one sending the response, jQuery is only handling it. There is only one problem with this. The server may respond with different mime types based on what it is trying to do. For instance, in many server side frameworks (ruby on rails, grails, cakephp, symphony, code igniter, etc) they all have form helper plugins that render form errors for based on server side logic. So if you request a form with ajax and attempt to submit it with errors, it will respond back with the HTML form including all errors. This is a pretty easy scenario to handle. \[code lang="js"\] $.post("/widgets", widgetForm.serialize(), function(response){ widgetForm.replaceWith(response); }); \[/code\] But what if you want the server to respond with JSON on success? It is difficult in the above example to branch. So, what I did was look into jQuery's core to see how to read the response header. Then we can branch our response logic accordingly. In order to do this, we'll have to use the ajax method, because the success function sends back the XMLHttpRequest object that we'll use to read the content type. \[code lang="js"\] $.ajax({ type: "POST", url: "/widgets", data: widgetForm.serialize(), success: function(response, status, xhr){ var ct = xhr.getResponseHeader("content-type") || ""; if (ct.indexOf('html') > -1) { widgetForm.replaceWith(response); } if (ct.indexOf('json') > -1) { // handle json here } } }); \[/code\] This is perfect for handling different mime types sent from the server! =)