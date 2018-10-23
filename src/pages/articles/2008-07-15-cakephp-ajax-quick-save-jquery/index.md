---
path: 'cakephp-ajax-quick-save-jquery'
title: 'Tutorial - CakePHP Ajax "Quick Save" with jQuery'
description: "Create an ajax 'quick save' feature in CakePHP that saves your data without leaving the page using jQuery."
tags:
  - 'CakePHP'
  - 'jQuery'
  - 'PHP & CakePHP'
date: '2008-07-15T12:36:14.000Z'
draft: false
category: 'test'
layout: 'post'
---

!http://marcgrabanski.com/img/logo-cakephp.gif!
!http://marcgrabanski.com/img/jQuery-logo.gif!
When you are in an administration panel, sometimes you want a "quick save" feature that allows you to save without leaving the page.Here is how to accomplish this with CakePHP and jQuery. To start, download "jQuery":http://jquery.com and the "jQuery Form Plugin JavaScript":http://jqueryjs.googlecode.com/svn/trunk/plugins/form/jquery.form.js . Include them in your view with the JavaScript helper:
```php
$javascript->link(array('jquery', 'form'), false);
```

Include the @RequestHandler@ in your controller detect an Ajax save attempt.Also include the JavaScript helper if you haven't already.
```php
var $helpers = array('Javascript'); var $components = array('RequestHandler');
```

Next we want to override our save function with the ajax quick save.Put this right before your @$this->Model->save($this->data)@ in your save action.
```php
if ($this->RequestHandler->isAjax()) { if ($this->Article->save($this->data)) { echo 'success'; } Configure::write('debug', 0); $this->autoRender = false; exit(); }
```

This detects if the request is ajax, then saves the data. Then it sends back a simple, "success" message to let you know things went fine. It also writes debug to 0 and doesn't render anything, then exits. Lastly, lets create and include a JavaScript file that performs the quick save.
```js
 jQuery(function($){ $('') .click(function(){ $(this).parents("form:first").ajaxSubmit({ success: function(responseText, responseCode) { $('#ajax-save-message').hide().html(responseText).fadeIn(); setTimeout(function(){ $('#ajax-save-message').fadeOut(); }, 5000); } }); return false; }) .appendTo('form div.submit'); });
```

This adds a button called, "Quick Save" to each form on the page where a @div@ with @class="submit"@ exists (you may want to switch this to the id of the form you want to add quick save to). Then It also attaches a click event to the button that submits the form via the "jQuery Form Plugin":http://malsup.com/jquery/form/. In a few simple steps, we've created a quick save feature that saves your data whenever you want without leaving the page.
