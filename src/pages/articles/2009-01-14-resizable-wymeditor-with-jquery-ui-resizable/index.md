---
path: "resizable-wymeditor-with-jquery-ui-resizable"
title: "Resizable WYMEditor with jQuery UI Resizable"
description: "Using jQuery UI resizable to extend a WYMEditor."
tags: 
  - "JavaScript & jQuery"
  - "jQuery UI"
date: "2009-01-14T05:12:45.000Z"
draft: false
category: "test"
layout: "post"
---

!http://marcgrabanski.com/img/logo-jqueryui.jpg!
I took pyjax's WYMEditor resizable plugin and turned it into something that works for me using jQuery UI. To use this, include jQuery, jQuery UI core and resizable, WYMEditor, then this. In that order.
```js
 WYMeditor.editor.prototype.resizable = function(options) { var wym = this; // Define some default options var default_options = { start: function(e, ui) { jQuery(wym._box).data("wym_height", jQuery(wym._box).find("iframe").height()); }, stop: function(e, ui) { jQuery(wym._box).data("wym_height", jQuery(wym._box).find("iframe").height()); }, // resize is called by the jQuery resizable plugin whenever the // client area was resized. resize: function(e, ui) { var diff = ui.size.height - ui.originalSize.height; jQuery(wym._box).find("iframe").height( jQuery(wym._box).data("wym_height") + diff); // If the plugin has horizontal resizing disabled we need to // adjust the"width"attribute of the area css, because the // resizing will set a fixed width (which breaks liquid layout // of the wymeditor area). if( !ui.options.handles['w']&&!ui.options.handles['e'] ) { ui.size.width ="inherit"; } }, handles:"s,e,se", minHeight: 250, maxHeight: 600 }; // Merge given options with default options. Given options override // default ones. var final_options = jQuery.extend(default_options, options); jQuery(wym._box).resizable(final_options); };
```

From this point, you can use a resizable WYMEditor by adding this to your postInit setting when you create a WYMEditor on the page.
```js
 wymeditor({ postInit: function(wym) { wym.hovertools(); // other pluginswym.resizable({ handles:s,e, maxHeight: 600 }); } })
```

Go ahead and "view the demo":http://marcgrabanski.com/resources/wymeditor-resizable.