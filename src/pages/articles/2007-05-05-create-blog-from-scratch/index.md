---
path: "create-blog-from-scratch"
title: "Create a Blog from Scratch"
description: "Learn how to create a custom blog in PHP"
tags: 
  - "MySQL"
  - "PHP"
  - "PHP & CakePHP"
date: "2007-05-05T17:00:00.000Z"
draft: false
category: "test"
layout: "post"
---

> Note on June 23, 2008: The post you are reading is years old, but shows the trail of the beginnings of MarcGrabanski.com. Thank you for reading!

Without much prior PHP knowledge, I managed to program this blog in less than a week. Here is how I did it. *Note: This is an overview and not actual code examples.*

1. **First, I went through "Code Grrl's Build a Blog Tutorials":http://codegrrl.com/category/tutorials/build-a-blog**
Sure, I could have stopped there but I really didn't like how the blog was programmed. I like this tutorial though because I dug through the code and learned basic PHP, but I wanted **much more functionality**.
2. **I wanted clean URLs so I found "Making clean URLs with Apache":http://www.evolt.org/article/Making_clean_URLs_with_Apache_and_PHP/18/22880/**
I customized the url so I can add keywords inside it if I want. I love these clean URLs. Apache also has documentation on "mod_rewrite":http://httpd.apache.org/docs/1.3/mod/mod_rewrite.html.
3. **Then I added "user authentication":http://www.tutorialized.com/view/tutorial/PHP-Simple-login-script/9963** 
This was the most basic, yet effective login script I found. Of course I modded it to make it a little more secure.
4. **I rewrote the code to use "Object Oriented PHP":http://www.codewalkers.com/c/a/Programming-Basics/Beginning-Object-Oriented-Programming-in-PHP/**
My blog was basically built but I didn't like how the code looked. I thought PHP looked horrible until I ran into some object oriented code. Makes things look much nicer.
5. **Created Tag Cloud Navigation**
I started with "ByteMyCode's Tag Cloud":http://www.bytemycode.com/snippets/snippet/415/ code and then moved to selecting from the database with the"LIKE"MySQL commmand.
```php
$sql = "SELECT ** FROM php_blog WHERE tags LIKE '%$tag%' ORDER BY timestamp DESC";
```

I also had to count the tags so I used the array_count_values PHP function.
```php
$tags = array_count_values($DBtags); // a very useful function to count the tags!
```

Wow gotta love those tags!
6. **Adding More Features**
I added an image uploader to my admin page, "RSS 2.0":http://www.rssboard.org/rss-specification and many minor tweaks until I had my **very own customized blog built from scratch! Some functions I found very useful on php.net:
`@list() split() htmlspecialchars() str_replace() explode() include(dirname(__FILE__)@`

I now have my own custom blog! You can too! I heavily modified each example and made them my own. **It feels so nice to have a custom blog!**