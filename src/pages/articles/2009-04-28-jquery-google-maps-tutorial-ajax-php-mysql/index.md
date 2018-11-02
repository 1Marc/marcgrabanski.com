---
path: 'jquery-google-maps-tutorial-ajax-php-mysql'
title: 'jQuery and Google Maps #2: AJAX Storing and Retrieving Points'
description: 'Storing and retrieving points with the Google Maps API using PHP.'
tags:
  - 'Google Maps'
  - 'JavaScript & jQuery'
  - 'jQuery'
date: '2009-04-28T11:51:21.000Z'
draft: false
category: 'test'
layout: 'post'
---

Continuing the [series on jQuery and Google Maps](http://marcgrabanski.com/article/jquery-google-maps-tutorial-basics), I will teach you how to store and retrieve points with using AJAX and a server-side language. This tutorial will use PHP/MySQL on the server, but it is basic enough that re-writing in another language should not be difficult.
[View Final Demo](http://marcgrabanski.com/resources/jquery-google-maps/tutorial-part2.html)

![](http://marcgrabanski.com/img/google-maps-form-jquery.jpg):http://marcgrabanski.com/resources/jquery-google-maps/tutorial-part2.html

First, let me share with you the design-pattern behind the tutorial. My design pattern has two steps. The first is to use a simple HTML form to create new locations by posting the data to the server via AJAX. The second step is to fetch those locations from the server also via AJAX. Sound simple? Well, then lets get started...

> Note: This tutorial builds on the first tutorial's code, so all code I am showing you here will be added onto it.

## Step #1: Create the, "Add Location" Form

To allow users to add locations to the map, let's create a basic form. This will include the parts of an address, as well as the name of the location.

```html
<form id="add-point"action="map-service.php"method="POST">
  <input type="hidden"name="action"value="savepoint"id="action">
  <fieldset>
    <legend>Add a Point to the Map</legend>
    <div class="error" style="display:none;"></div>
    <div class="input">
      <label for="name">Location Name</label>
      <input type="text"name="name"id="name"value="">
    </div>
    <div class="input">
      <label for="address">Address</label>
      <input type="text"name="address"id="address"value="">
    </div>
    <button type="submit">Add Point</button>
  </fieldset>
</form>
```

A couple things to note about the form: ** The form's action is pointed to map-service.php, which is where we will process the form data. ** A hidden input @@ will be used on the server to flag that we want to save a point to the database. This is just a personal preference on how to do things, there are many other ways to flag the intended action. \*\* An empty div with class error @

@ is placed in the form to be used in a later step to display errors.

## Step #2: Add Styles to the Form

By adding a few CSS rules to our page, we will set our form next to the map and spruce up the form a bit.

```c
ss #add-point { float:left; } div.input { padding:3px 0; } label { display:block; font-size:80%; } input, select { width:150px; } button { float:right; } div.error { color:red; font-weight:bold; }
```

## Step #3: Geoencode Address Before Submiting Data

### 3a) Override default form submit

At this point we'll override the form's default submit action by selecting the form `$([#add-point")` , then using jQuery's "submit event method](http://docs.jquery.com/Events/submit) . This method accepts a function that will run on submit of the form.

```js
$('#add-point').submit(function() {
  geoEncode()
  return false
})
```

### 3b) Add GeoCoder

Then, inside the submit we will post the form data with AJAX using jQuery's [ajax post method](http://docs.jquery.com/Ajax/jQuery.post) .

```js
var geo = new GClientGeocoder()
var reasons = []
reasons[G_GEO_SUCCESS] = 'Success'
reasons[G_GEO_MISSING_ADDRESS] = 'Missing Address'
reasons[G_GEO_UNKNOWN_ADDRESS] = 'Unknown Address.'
reasons[G_GEO_UNAVAILABLE_ADDRESS] = 'Unavailable Address'
reasons[G_GEO_BAD_KEY] = 'Bad API Key'
reasons[G_GEO_TOO_MANY_QUERIES] = 'Too Many Queries'
reasons[G_GEO_SERVER_ERROR] = 'Server error'
```

### 3c) Get geocode from address

```js
function geoEncode() {
  var address = $('#add-point input[name=address]').val()
  geo.getLocations(address, function(result) {
    if (result.Status.code == G_GEO_SUCCESS) {
      geocode = result.Placemark[0].Point.coordinates
      savePoint(geocode)
    } else {
      var reason = 'Code' + result.Status.code
      if (reasons[result.Status.code]) {
        reason = reasons[result.Status.code]
      }
      $('#add-point .error')
        .html(reason)
        .fadeIn()
      geocode = false
    }
  })
}
```

## Step #4: Submit Data to Server

```js
function savePoint(geocode) {
  var data = $('#add-point :input').serializeArray()
  data[data.length] = { name: 'lng', value: geocode[0] }
  data[data.length] = { name: 'lat', value: geocode[1] }
  $.post(
    $('#add-point').attr('action'),
    data,
    function(json) {
      $('#add-point .error').fadeOut()
      if (json.status == 'fail') {
        $('#add-point .error')
          .html(json.message)
          .fadeIn()
      }
      if (json.status == 'success') {
        $('#add-point :input[name!=action]').val('')
        var location = json.data
        addLocation(location)
        zoomToBounds()
      }
    },
    'json'
  )
}
```

The @$.post@ method accepts parameters. # **URL** to post data to: @$(this).attr('action')@ will get the action attribute from the form that was submitted in the previous step. # **Data** in name, value pairs i.e. @{ name:[inputname", value:"inputvalue"}@ we will get all the inputs using the :input selector in jQuery, then use the "serialize array](http://docs.jquery.com/Ajax/serializeArray) function to turn those inputs into name, value pairs. Then add the two geocode name/value pairs to the data object. # **Function** to run after AJAX response is received. This function has one parameter which contains the response of the AJAX request. # **Type of data** to be returned (optional). In this case we will use JSON.

## Step #5: Use PHP on the Server to Process the Form

Once the data is posted with jQuery, we can handle it on the server with PHP.

### 5a) Check the action and validate the name

Let's simply check if the action variable is posted as,"savepoint". Then validate that the name has the proper characters with a regular expression and also that it is not empty. If any data is invalid, let's call a fail method (defined in next sub-step) with the message we want to show to the user.

```
<?php if ($_POST['action'] == 'savepoint') {
  $name = $_POST['name'];
  if(preg_match('/[^ws]/i', $name)) {
    fail('Invalid name provided.');
  }
  if(empty($name)) {
    fail('Please enter a name.');
  }
} ?>
```

Save the file as map-service.php or whatever you named your form's action attribute.

### 5b) Output the error message as a JSON object

Our fail function will use PHP's [die method](http://us.php.net/manual/en/function.die.php) to stop the script from executing and output an error message to the client. Since the front-end (jQuery) is expecting a JSON object, we want to make sure to always send back a JSON response. To output JSON with PHP, you simply pass an array into the [json encode method](http://us.php.net/manual/en/function.json-encode.php) (json_encode is PHP 5.2+ only, if you are using less than 5.2 then use the [JSON PHP library](http://mike.teczno.com/JSON/JSON.phps) ).

```js
 function fail($message) { die(json_encode(array('status' => 'fail', 'message' => $message))); }
```

For the JSON array we want to use the [JSEND specification](http://labs.omniti.com/trac/jsend) for sending back a response. Basically, you have a key/value pair of status equals success or fail. That way the response can easily be checked on the front-end. I'm deviating from the JSEND spec a little bit by only sending a string back instead of a key/value pair of messages. Using [Firebug](http://getfirebug.com/) and [Firefox](http://www.mozilla.com/en-US/firefox/personal.html) , we can inspect the Ajax requests easily within the browser.
![](http://marcgrabanski.com/img/google-maps-firebug-json-error.jpg)
You can see here I submitted the form without entering a name and it sent me back an error message in the form of JSON.

## Step #6: Display the Error Messages with jQuery

Hopping back to the jQuery code, we will write the error handling.
Inside the post code, we will first use the [hide method](http://docs.jquery.com/Effects/hide) to hide the error div in case it is already displaying. Then check if @json.status@ is showing,[fail". If it is, we'll place the @json.message@ inside the error div with jQuery's "html attribute method](http://docs.jquery.com/Attributes/html) and then fade it in with the [fade in method](http://docs.jquery.com/Effects/fadeIn) .

```js
$('#add-point .error').hide()
if (json.status == 'fail') {
  $('#add-point .error')
    .html(json.message)
    .fadeIn()
}
```

## Step #7: Create a Database and Store the Locations

Using SQL, create a database table named locations which has a[name","latitude","longitude"and an"id"in it. If you need help with this, you will have to consult "w3schools php and mysql](http://www.w3schools.com/PHP/php_mysql_intro.asp) for more help.

### 7a) Create the table with SQL

```sql
CREATE TABLE \`locations\` ( \`id\` int(11) unsigned NOT NULL auto_increment, \`name\` varchar(100) default NULL, \`lat\` float(15,11) default NULL, \`lng\` float(15,11) default NULL, PRIMARY KEY (\`id\`) )
```

### 7b) Insert name and location into the database with PHP and MySQL

We will use PHP and MySQL to insert the new location into the database. Directly after, we will either flag a success or fail message to the user.

```
$query ="INSERT INTO locations SET name='$_POST[name]', lat='$lat', lng='$lng'"; $result = map_query($query); if ($result) { success(array('lat' =>$_POST['lat'], 'lng' =>$_POST['lng'], 'name' =>$name)); } else { fail('Failed to add point.'); }
```

If you noticed, I created a custom function called @map_query@ to abstract out the database stuff. Here is the function definition. Make sure to update the,"MYSQL"stuff with your credentials.

```
function map_query($query) { mysql_connect('MYSQL_HOST', 'MYSQL_USER', 'MYSQL_PASSWORD') OR die(fail('Could not connect to database.')); mysql_select_db ('MYSQL_DATABASE'); return mysql_query($query); }
```

I also created a similar method to"fail"called"success"which looks like:

```js
 function success($data) { die(json_encode(array('status' =>'success', 'data' =>$data))); }
```

An example of a succesful response in firebug:
![](http://marcgrabanski.com/img/google-maps-firebug-json-success.jpg)

## Step #8: Map the New Point

Going back to the jQuery code, we can now add the success response handling. The response is a JSON object with"lat","lng"and"name"properties. I'll give you the code inside the success handling, then later show you what each custom function is doing.

```js
if (json.status == 'success') {
  $('#add-point :input[name!=action]').val('')
  var location = json.data
  addLocation(location)
  zoomToBounds()
}
```

After a location is successfully added to the database, we want to clear the form to prevent duplicate entry. Do this by selecting the inputs with the @:input@ selector. Then we need to filter out theaction input, do this by using the [attribute not equal selector](http://docs.jquery.com/Selectors/attributeNotEqual#attributevalue) @[name!=action]@.
My @addLocation(location)@ function is simply our code from the [last tutorial](http://marcgrabanski.com/article/jquery-google-maps-tutorial-basics) placed into a function to be reusable later.

```js
function addLocation(location) {
  var point = new GLatLng(location.lat, location.lng)
  var marker = new GMarker(point)
  map.addOverlay(marker)
  bounds.extend(marker.getPoint())
  $('**   ')
    .html(location.name)
    .click(function() {
      showMessage(marker, location.name)
    })
    .appendTo('#list')
  GEvent.addListener(marker, 'click', function() {
    showMessage(this)
  })
}
```

It has a few things you might want to note: ** using location.name, location.lat and location.lng means that we will be passing in a location object with those properties to the function. ** Ignore @bounds.extend(marker.getPoint());@ and @zoomToBounds@ for now or skip to #13 quickly to find out what they do.

## Step #9: Load and Display the Locations from in the Database

When the page initially loads, we want to load all of our stored points. The simplest way to do this (in my opinion) is to do a GET request to fetch a JSON object from the server after the page loads.
To make a,[GET"request to the server, we can use jQuery's "getJson method](http://docs.jquery.com/Ajax/jQuery.getJSON) . We will send the server a,"get"variable called action with value,"listpoints".

```js
 $.getJSON("php/map-service.php?action=listpoints", function(json) { // do stuff in step #11 });
```

## Step #10: Get the Locations from the Database

Simply check the,"GET"action in the PHP and run this code to fetch the locations records. Pretty straight-forward code here. We are creating an array of points and then sending them back to the client as JSON.

```
if ($_GET['action'] == 'listpoints') { $query ="SELECT ** FROM locations"; $result = map_query($query); $points = array(); while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) { array_push($points, array('name' =>$row['name'], 'lat' =>$row['lat'], 'lng' =>$row['lng'])); } echo json_encode(array("Locations"=>$points)); exit; }
```

## Step #11: Display the Locations

Iterate through the JSON object that contains the locations inside the getJson response function.

```js
if (json.Locations.length>0) {
  for (i=0; i<json.Locations.length; i++) {
    var location = json.Locations[i];
    addLocation(location);
  }
  zoomToBounds();
}
[/code]</p>

<p>Here we are simply looping through the Locations inside the json object and calling out <code>addLocation</code> method.</p>

<h2>Step #12: Zoom Map to Show all Points</h2>

<p>Let's define that mysterious <code>zoomToBounds</code> method that I keep calling and not telling you what it does.</p>

<p>First, define a variable called,"bounds"above the getJson method.</p>

<p>[code lang="js"]
var bounds = new GLatLngBounds();
```

Note that in step #8's `addLocation` method we are extending the bounds with `bounds.extend(marker.getPoint());` This takes the bounds and adds each point to it. Then we can set the map to show all the points later by using the bounds that contains each point on the map.

```js
function zoomToBounds() {
  map.setCenter(bounds.getCenter())
  map.setZoom(map.getBoundsZoomLevel(bounds) - 1)
}
```

This function sets the center of the map, and the zoom minus 1 to set the map's viewport based on that bounds variable we declared and extended earlier.
Congrats! You just create a Google Maps mashup that you can add and remove points to dynamically with Ajax, PHP and MySQL.

[View Final Demo](http://marcgrabanski.com/resources/jquery-google-maps/tutorial-part2.html)

[Download Code from Github](https://github.com/1Marc/tutorials-jquery-google-maps)
