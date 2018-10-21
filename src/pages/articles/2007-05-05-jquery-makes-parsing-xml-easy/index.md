---
path: "jquery-makes-parsing-xml-easy"
title: "jQuery Makes Parsing XML Easy"
description: "jQuery is making my life so much easier for parsing XML."
tags: 
  - "JavaScript"
  - "JavaScript & jQuery"
  - "jQuery"
  - "XML"
date: "2007-05-05T17:00:00.000Z"
draft: false
category: "test"
layout: "post"
---

I am building a Google Maps project and jQuery is making my life so much easier when parsing XML. h3. Regular JavaScript XML Parsing \[code lang="js"\] var xmlDoc = request.responseXML; try // Build Markers, if available { var markers = xmlDoc.getElementsByTagName("marker") ; for ( var i = 0; i < markers.length ; i++ ) { var point = { markers\[i\].getAttribute("lat")), markers\[i\].getAttribute("lng") }; } } catch(e) {} \[/code\] h3. jQuery XML Parsing \[code lang="js"\] $(request.responseXML).find("marker").each(function() { var marker = $(this); var point = { marker.attr("lat"), marker.attr("lng") }; }); \[/code\] The jQuery code is so much easier to read and understand. This is a basic example, but imagine when things get complex. After writing a few complex statements, you will realize the jQuery code will still be understandable, where as the JavaScript code will become hard to maintain. Thank you jQuery for making my job easier and more fun.