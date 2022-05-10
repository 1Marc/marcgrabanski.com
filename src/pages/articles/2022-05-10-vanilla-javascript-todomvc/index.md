---
path: 'vanilla-javascript-todomvc'
title: '🍦 Vanilla JavaScript TodoMVC in 2022'
description: "Seems it is pretty simple to build fairly complex things these days in modern JavaScript."
tags:
  - 'JavaScript'
date: '2022-05-10T14:16:17.830Z'
draft: false
layout: 'post'
---

I whipped up a TodoMVC implementation with modern JavaScript in ~170 lines of code in just over an hour. This is compared to the official TodoMVC vanilla JS solution which is over 900 lines of code. I believe this demonstrates just how far JavaScript has come with the advancedments in ES6 and beyond.

```js
document.querySelector('.test').addEventListener("click", e => {
    console.log(e.target.value);
});
```