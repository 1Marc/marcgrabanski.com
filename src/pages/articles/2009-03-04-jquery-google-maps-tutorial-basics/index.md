---
path: "jquery-google-maps-tutorial-basics"
title: "jQuery and Google Maps Tutorial: #1 Basics"
description: "Getting started using jQuery with the Google Maps API."
tags: 
  - "Google Maps"
  - "JavaScript & jQuery"
  - "jQuery"
date: "2009-03-04T21:45:51.000Z"
draft: false
category: "test"
layout: "post"
---

There are many times I want to leverage jQuery's strengths to create a custom Google Maps mashup. In this tutorial, I will walk you through how to get started using jQuery inside the Google Maps environment. I will assume nothing, and explain each piece in detail. [View Final Demo](http://marcgrabanski.com/resources/jquery-google-maps/tutorial-part1.html) *If you are already familiar with Google Maps API, skip to step #5, or so.*

## Step #1: Get API key First, grab yourself an [API key for Google Maps](http://code.google.com/apis/maps/signup.html) , you will need this in the next step.

## Step #2: Load Google Maps and jQuery We want to load up jQuery and Google Maps with the [Google AJAX Libraries API](http://code.google.com/apis/ajaxlibs/).
```html
 <script type="text/javascript"charset="utf-8">google.load("maps","2.x"); google.load("jquery","1.3.1");
```

Make sure to replace YOUR_API_KEY_HERE with your API key. By using the Google AJAX Libraries API, it allows you to load the JavaScript libraries you need right from Google's servers. This increases the chance that your users will be able to load the scripts faster from their browser cache, as well as shuffle the jQuery script loading off your server.

## Step #3: Create the Google Map
![](http://marcgrabanski.com/img/google-maps-map.jpg)
To create our Google Map, we need to create a container @div@ and use CSS to give it a width and a height.
```html
#map { width:500px; height:500px; }
```

Use the @GMap2@ function to make a map instance. Then, set the center of the map. I wrapped this code block in jQuery's document ready function so that the code is run after the page has loaded.
```js
 $(document).ready(function(){ var map = new GMap2(document.getElementById('map')); var burnsvilleMN = new GLatLng(44.797916,-93.278046); map.setCenter(burnsvilleMN, 8); });
```

Here, I used Burnsville, MN's latitude and longitude because it is where I live right now. There are many ways to get the latitude and longitude of an address, like this simple service by [iTouchMap](http://itouchmap.com/latlong.html). The second parameter for setCenter is the zoom level, which is a number. I set the zoom level to"8"here because it is about in the middle. At this point we should have a simple map.

## Step #4: Load the Google Maps Example
![](http://marcgrabanski.com/img/google-maps-markers.jpg)
To have some points to work with, let's paste in the [google maps example](http://code.google.com/apis/maps/documentation/introduction.html#GLatLng) .
```js
// setup 10 random points 
var bounds = map.getBounds(); 
var southWest = bounds.getSouthWest(); 
var northEast = bounds.getNorthEast(); 
var lngSpan = northEast.lng() - southWest.lng(); 
var latSpan = northEast.lat() - southWest.lat(); 
var markers = []; 
for (var i = 0; i<10; i++) { 
  var point = new GLatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random()); 
  marker = new GMarker(point); 
  map.addOverlay(marker); 
  markers[i] = marker; 
}
[/code]</p>
 
<p>Note that I added a markers array to the example code. This will be used in the next step.</p>
 
<h2>Step #5: Loop Through Markers and Add Basic Click Event to Markers</h2>
 
<p>In this step, we start to use jQuery and Google Maps together. We want to be careful to use Google Map’s built-in <span class="caps">API</span> as much as possible, leaving jQuery only for what it is best at.</p>
 
<p><object width="462" height="264">
<param value="http://marcgrabanski.com/jing/google-maps-tutorial-pan.swf" name="movie" />
<param value="true" name="allowFullScreen" />
<param value="always" name="allowscriptaccess" /><embed width="462" height="264" allowfullscreen="true" allowscriptaccess="always" type="application/x-shockwave-flash" src="http://marcgrabanski.com/jing/google-maps-tutorial-pan.swf"></embed></object></p>
 
<p>Let’s take that array of markers and loop through them with <a href="http://docs.jquery.com/Utilities/jQuery.each">jQuery’s each method</a>.</p>
 
<p>[code lang="js"]
$(markers).each(function(i,marker){ 
  GEvent.addListener(marker,"click", function(){ 
    map.panTo(marker.getLatLng()); 
  }); 
});
```

Note that I added a markers array to the example code. This will be used in the next step.

## Step #5: Loop Through Markers and Add Basic Click Event to Markers In this step, we start to use jQuery and Google Maps together. We want to be careful to use Google Map's built-in API as much as possible, leaving jQuery only for what it is best at.    Let's take that array of markers and loop through them with [jQuery's each method](http://docs.jquery.com/Utilities/jQuery.each).
```js
 $(markers).each(function(i,marker){ GEvent.addListener(marker,"click", function(){ map.panTo(marker.getLatLng()); }); });
```

Inside the loop, let's use Google Maps's GEvent namespace to attach a click event to each marker. Then, we will add a panTo behavior to center the map on the marker. @marker.getLatLng();@ returns the latitude and longitude of the marker, while @map.panTo(GLatLng)@ allows us to center the map on that latitude and longitude.

## Step #6 - Make a Clickable List of Markers     Let's add a clickable list next to the map. Insert a @ul@.
```html
p{margin-top: 10px;}
```

Then let's style it up a bit by floating the map left and float our list element next to it. We also want to add a hover effect to the list items to give visual feedback to the user that they can click on each item in the list.

```c
ss #map { float:left; width:500px; height:500px; } #list { float:left; width:200px; background:#eee; list-style:none; padding:0; } #list li { padding:10px; } #list li:hover { background:#555; color:#fff; cursor:pointer; cursor:hand; }
```

In our jQuery each loop from last step, let's append the clickable list items to the list.
```js
 $("**   ") .html("Point"+i) .click(function(){ map.panTo(marker.getLatLng()); }) .appendTo("#list");
```

Here I am just setting the content to"Point (the count)", adding that same panTo action from before, then appending the list item to our list.

## Step #7 - Add a Custom Message
![](http://marcgrabanski.com/img/google-maps-message.jpg)
When I create a Google Maps mashup, I usually want to replace the built-in info window with something custom. With jQuery, we can add any arbitrary HTML in place of the info window. This is great when you want complete control over what the info window looks like. Add a message div with some test text.
```html

    
    Test text.
    
   
```

Then add some basic styling to the message.
```c
ss #message { position:absolute; padding:10px; background:#555; color:#fff; width:75px; }
```

We have to place the message div inside the map. To do this, we can use jQuery to append it to an object. The map view is seperated into panes. Each pane is a div layered on top of the other. To get the div object that we want to attach our message div to, we can use @map.getPane(PANE)@. The G_MAP_FLOAT_SHADOW_PANE is the layer that I find works best for attaching custom messages.
```js
 $("#message").appendTo(map.getPane(G_MAP_FLOAT_SHADOW_PANE));
```

To show the message div in place of the info window, we need to separate the click action into a separate function. Replace the @map.panTo(marker.getLatLng();@ with @displayPoint(marker, i);@, a call to the new displayPoint function shown below.
```js
 function displayPoint(marker, i){ map.panTo(marker.getPoint()); var markerOffset = map.fromLatLngToDivPixel(marker.getPoint()); $("#message").show().css({ top:markerOffset.y, left:markerOffset.x }); }
```

We put the panTo action in our new function. Then the magic function here is the @map.fromLatLngToDivPixel(GLatLng);@ which converts the latitude/longitude of the marker into a pixel on the map div.This returns aobject containing x (amount of pixels from the left of the map) and y (amount of pixels from the top of the map).

## Final Step #8 - Add Some Spice To finish up, we will add an event when the map stops panning. We can do this by attaching the"movend"event map object. This way, after panning to the marker you've clicked on we can use jQuery's fadeIn method to add some spice.
```js
 function displayPoint(marker, index){ $("#message").hide(); var moveEnd = GEvent.addListener(map,"moveend", function(){ var markerOffset = map.fromLatLngToDivPixel(marker.getLatLng()); $("#message") .fadeIn() .css({ top:markerOffset.y, left:markerOffset.x }); GEvent.removeListener(moveEnd); }); map.panTo(marker.getLatLng()); }
```

There you have it. We've come a long ways by adding our own custom click event, a clickable list and a custom info window. In the next tutorial, I'll show you how to store and retrieve points with a server-side language. [View Final Demo](http://marcgrabanski.com/resources/jquery-google-maps/tutorial-part1.html)