---
path: "google-maps-api-3"
title: "A Quick Look at Google Maps API v3"
description: "What is new in Google Maps API version 3."
tags: 
  - "Google Maps"
  - "JavaScript"
  - "JavaScript & jQuery"
date: "2009-05-28T01:06:58.000Z"
draft: false
category: "test"
layout: "post"
---

![](http://marcgrabanski.com/img/logo-googlemaps.png)
Google [announced version 3](http://googlegeodevelopers.blogspot.com/2009/05/announcing-google-maps-api-v3.html) of the google maps API. Some things I noticed right away: ** no API key required! before you had to sign up for an API key, but now you can shed your API key woes (I know I had them) and not have to sign up for one again. ** mobile browser support (iphone and android)
![](http://marcgrabanski.com/img/android-iphone-google-maps-v3.jpg)
** You now have to specifiy the sensor variable in your include of google maps @@ the sensor is for detecting user's location with mobile sensors like GPS ** No more polluting the global namespace with tons of variables. Google is moving over to their google namespace. so instead of @new GMap2@ you do @new google.maps.map@ ** New [mouse event](http://code.google.com/apis/maps/documentation/v3/reference.html#Mouse%20event) object. ** Default UI so that as Google maps updates their UI, you get to enjoy the new interface without updating code. ** it is like 3AM now so that is enough changes to see before I go to bed. =P The only thing I couldn't figure out is where is the directions object? A lot of my maps applications use driving directions, so I'll be holding off on migrating over until I figure that out with the new API.</x-turndown>