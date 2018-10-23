---
path: "html5-geolocation-fallback-google-ajax-api"
title: "HTML5 Geolocation with Fallback to Google Ajax API"
description: "Get latitude and longitude using Google Ajax API ClientLocation for fallback to HTML5 getLocation Geolocation API."
tags: 
  - "HTML5"
  - "HTML5 and SVG"
  - "JavaScript & jQuery"
date: "2010-04-12T22:14:07.000Z"
draft: false
category: "test"
layout: "post"
---

"Google Ajax API":http://code.google.com/apis/ajax/documentation/ does location lookup, so it makes it a great fallback for the native "HTML5 Gelocation API":http://dev.w3.org/geo/api/spec-source.html. Of course, the fallback will never get near the same accuracy as GPS lookup, because it does a lookup on your ISP, but it is at least able to get you in the ballpark as a fallback. Include Google AJAX API with your api key and then go ahead and use this code.
```html

```

```js
var myLocation; // global variable to store lat/lng if (navigator && navigator.geolocation) { // HTML5 GeoLocation function getLocation(position) { myLocation = { "lat": position.coords.latitude, "lng": position.coords.longitude } } navigator.geolocation.getCurrentPosition(getLocation); } else { // Google AJAX API fallback GeoLocation if ((typeof google == 'object') && google.loader && google.loader.ClientLocation) { myLocation = { "lat": google.loader.ClientLocation.latitude, "lng": google.loader.ClientLocation.longitude } } }
```

You then have access to the user's location with the "myLocation" variable and can take it from there.