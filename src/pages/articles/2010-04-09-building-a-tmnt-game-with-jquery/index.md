---
path: "building-a-tmnt-game-with-jquery"
title: "Building a Ninja Turtles Game with jQuery"
description: "Using jQuery and jQuery UI to build a teenage mutant ninja turtles game."
tags: 
  - "JavaScript & jQuery"
  - "jQuery"
  - "jQuery UI"
date: "2010-04-09T12:48:56.000Z"
draft: false
category: "test"
layout: "post"
---

In this tutorial we'll build a Teenage Mutant Ninja Turtles game as a fun and simple project to learn jQuery @grep, queue/dequeue, delay and animation@ as well as jQuery UI @draggable, droppable, effects and button@. [View the jQuery Game](http://marcgrabanski.com/resources/jquery-game-tmnt/) [![](http://marcgrabanski.com/img/jquery-tmnt-battler.png)](http://marcgrabanski.com/resources/jquery-game-tmnt/) I grabbed the [ninja turtle sprites](http://scrollboss.illmosis.net/sprites.php?game=tmnt) and renamed them and organized them into folders. The [animated sprite](http://www.jsofts.com/tmntsprites/sprites.php) of april is off another site. [Download Just the Images](http://marcgrabanski.com/resources/jquery-game-tmnt/tmnt-images.zip) First, lets setup a couple global variables and put our "good guys" and "bad guys" information in an array of objects.
```js
 var game = {}; var battlenum = 0; var goodguys = [ { "name" : "Leonardo", "bio": "images/bio/leo.gif", "stand": "images/stand/leo.png" }, { "name" : "Michaelangelo", "bio": "images/bio/mike.gif", "stand": "images/stand/mike.png" }, { "name" : "Donatello", "bio": "images/bio/don.gif", "stand": "images/stand/don.png" }, { "name" : "Raphael", "bio": "images/bio/raph.gif", "stand": "images/stand/raph.png" } ]; var badguys = [ { "name" : "Foot Soldier", "stand": "images/stand/footsoldier.png" }, { "name" : "Rock Steady", "stand": "images/stand/rocksteady.png" }, { "name" : "Bebop", "stand": "images/stand/bebop.png" }, { "name" : "Lt Granitor", "stand": "images/stand/ltgranitor.png" }, { "name" : "General Traag", "stand": "images/stand/traag.png" }, { "name" : "Krang (in exosuit)", "stand": "images/stand/exo.png" }, { "name" : "The Shredder", "stand": "images/stand/shredder.png" } ];
```

Now that we have our game information setup, lets create the HTML markup for our game. We'll have a player chooser, an arena to fight in, and then add an attack button which could have other actions in the future.
```html
# Teenage Mutant Ninja Turtles Battler

## Drag and drop a turtle into battle.

![Leonardo](images/bio/leo.gif) ![Michaelangelo](images/bio/mike.gif) ![Donatello](images/bio/don.gif) ![Raphael](images/bio/raph.gif)

Attack
```

I used jQuery UI CSS framework to build a [ninja turtles CSS theme](http://jqueryui.com/themeroller/?ffDefault=Arial,%20sans-serif&fwDefault=bold&fsDefault=1.3em&cornerRadius=4px&bgColorHeader=043D26&bgTextureHeader=08_diagonals_thick.png&bgImgOpacityHeader=15&borderColorHeader=043D26&fcHeader=f6f6f6&iconColorHeader=A5DE00&bgColorContent=111111&bgTextureContent=12_gloss_wave.png&bgImgOpacityContent=20&borderColorContent=000000&fcContent=d9d9d9&iconColorContent=A5DE00&bgColorDefault=333333&bgTextureDefault=09_dots_small.png&bgImgOpacityDefault=20&borderColorDefault=333333&fcDefault=ffffff&iconColorDefault=ffffff&bgColorHover=043D26&bgTextureHover=09_dots_small.png&bgImgOpacityHover=40&borderColorHover=222222&fcHover=ffffff&iconColorHover=A5DE00&bgColorActive=292929&bgTextureActive=01_flat.png&bgImgOpacityActive=40&borderColorActive=043D26&fcActive=A5DE00&iconColorActive=A5DE00&bgColorHighlight=F0CE00&bgTextureHighlight=10_dots_medium.png&bgImgOpacityHighlight=30&borderColorHighlight=F0CE00&fcHighlight=000000&iconColorHighlight=000000&bgColorError=a32d00&bgTextureError=09_dots_small.png&bgImgOpacityError=30&borderColorError=cd0a0a&fcError=ffffff&iconColorError=ffffff&bgColorOverlay=aaaaaa&bgTextureOverlay=01_flat.png&bgImgOpacityOverlay=0&opacityOverlay=30&bgColorShadow=aaaaaa&bgTextureShadow=01_flat.png&bgImgOpacityShadow=0&opacityShadow=30&thicknessShadow=8px&offsetTopShadow=-8px&offsetLeftShadow=-8px&cornerRadiusShadow=8px). Hit download on the left side and download jQuery UI as well. Now we'll setup the CSS for the game, it is pretty simple. We have hover style for the player chooser, the arena, and inside the arena we'll set some absolute positions for the goodguy, badguy and april.
```c
ss body { font-size: 12px; } #chooser { z-index: 1; } #chooser .bio { cursor: move; border: 1px solid white; } #chooser .bio:hover { border: 1px solid black; } #arena { background: white; height: 80px; width: 225px; padding: 20px; position: relative; z-index: -1; } #arena .goodguy { position: absolute; left: 20px; top: 20px; } #arena .enemy { position: absolute; top: 20px; right: 45px; } #arena .april { position: absolute; top: 20px; right: 0; }
```

Next we'll setup our characters by adding them to the arena. The goodguy doesn't have an src because the player has to choose it.
```js
 // characters april = $('<img />', { "src": "images/apriltiedup.gif", "class": "april" }); enemy = $('<img />', { "src": badguys[0].stand, "class": "enemy" }); goodguy = $('<img />', { "class": "goodguy" }); // setup arena arena = $("#arena") .append(april) .append(enemy) .append(goodguy);
```

Lets add the ability to choose your character. I think it is fun to choose your character by dragging and dropping them into the arena. First, we'll make the character bios draggable, using their alt attribute name it filter through our goodguys object.
```js
 // setup chooser bios = $("#chooser img") .draggable({ helper: function(e, ui){ guy = $.grep(goodguys, function(guy){ return guy.name == $(e.target).attr('alt'); })[0]; return $('<img />', { "src": guy.stand }); }, cursorAt: { "right": 5, "top": 0 } });
```

We want to change the drag @helper@ to the image of the character standing. We do this by returning the image path in the helper function in the [draggable options](http://docs.jquery.com/UI/Draggable#options). So now you may be thinking, what is @$.grep@? Grep allows us to dive into the goodguys array and then it decides what should be in the array. Returning true keeps the item in the array, returning false removes it. So here, if they drag the bio image that has an alt description @$(e.target).attr('alt')@ of "Donatello", this function will only match true @guy.name == "Donatello"@ for the guy with name Donatello. Grep returns an array of the objects @[{"name":"Donatello"...}]@, so we can use [0] to get the first one, which will be the only one that is matched. @cursorAt@ just allows us to position the helper image at a certain point relative to the mouse position. Now lets make the arena droppable to add your character to the battle. Add this to your @$("#arena")@ chain.
```js
 .droppable({ accept: ".bio", drop: function(e, ui){ guy = $.grep(goodguys, function(guy){ return guy.name == $(ui.draggable).attr('alt'); })[0]; goodguy.attr('src', guy.stand); $("#actions").show(); } });
```

Using the [droppable options"http://docs.jquery.com/UI/Droppable#options, we can set what draggable elements the arena should accept. We set a "bio" class to the bio images, so that will let us accept them. We'll do the same thing we did with draggable with @$.grep@. Keep in mind we could have done some setup and attached the object data to the bio images, but there are so many ways to do things, I'm showing you just one way. Then we'll show our actions, which is just an attack button. jQuery UI 1.8 added a "button widget](http://docs.jquery.com/UI/Button) that allows us to theme the button easily.
```js
 $("#actions button").button();
```

We'll do a few things with the attack button. First, we want to only allow them to hit the attack button if there is no game action happening. So we'll return the function (do nothing) if @game.action@ is true. Then we'll set @game.action@ to true to indicate we've started action on the game.
```js
 $("#actions .action-attack").click(function(){ if (game.action) return; game.action = true; goodguy .animate({ left: 100 }, 700) .effect('shake', { times: 3 }, 150, function(){ $(this).animate({ left: 20 }, 300); badguydie(); }); });
```

The attack action is kind of fun. With @animate@ we move the goodguy forward, and then with @effect@ we get to shake the guy a few times. jQuery UI gives us [effects](http://docs.jquery.com/UI/Effects), like shake. In the callback function we'll move the goodguy back into place and start our kill the bad guy function:
```js
 function badguydie(){ ++battlenum; enemy.hide('explode', {}, 500); enemy.queue(function(){ if (badguys[battlenum] == undefined) return gameend(); $(this) .css('right', 0) .attr('src', badguys[battlenum].stand) .delay(800) .fadeIn('fast').animate({ right: 45 }, 300) .queue(function(){ game.action = false; $(this).dequeue(); }); $(this).dequeue(); }); }
```

Here we use the explode effect which extends hide by @.hide(effect, options, speed)@. With @battlenum@ we just want to increment it so we can go through all the badguys, and if there are no badguys left we'll run the @gameend()@ function. We could have bound gameend to the arena with a custom event, but this is done just for simplicity. Once the explode animation is done it will run the next function in the @queue@. @queue@ allows us to add functions to the 'fx' queue which is what happens when you chain multiple animations together. @delay@ is nice because we can have a little time to soak in that you just killed a bad guy before the next one shows up. Then we move the next enemy into place and dequeue our functions. Once the enemies are gone.. hooray! Now the player won with this function which changes April's image to the waving image of here and pops up a jQuery UI Dialog that the player won.
```js
 function gameend(){ april.attr('src', 'images/aprilwave.gif'); setTimeout(function(){ $("<div />", { title: "You win!", html: "April is now safe, thanks to you." }).dialog({ modal: true }); }, 1000); }
```

[Download the Final Files](http://marcgrabanski.com/resources/jquery-game-tmnt/tmnt.zip) [View the jQuery Game](http://marcgrabanski.com/resources/jquery-game-tmnt/)