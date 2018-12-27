---
path: 'javascript-if-statements-syntax'
title: 'JavaScript if Statements Syntax'
description: 'Displaying different ways to write JavaScript if statements.'
tags:
  - 'JavaScript'
  - 'JavaScript & jQuery'
date: '2010-07-09T19:08:34.000Z'
draft: false
layout: 'post'
---

A very fundamental part of JavaScript is the @if@ statement. One thing that gets people all up-tight is using ternary operators and not using curly brackets in your JavaScript. Some argue that it isn't readable. In this article I'll show you what practices I use and hopefully you can give me your thoughts.

## Normal if statements

Nothing special here, just a normal if statement.

```js
var foo = 'bar'
if (foo == 'bar') {
  foo = 'something'
} else {
  foo = 'somethingElse'
}
```

## If statements can be written without curly brackets

```js
var foo = 'bar'
if (foo == 'bar') foo = 'something'
else foo = 'somethingElse'
```

What people don't like about this is if you need to do another action inside the if statement, then you have to manually go back and wrap it in curly brackets.

```js
var foo = 'bar'
if (foo == 'bar') {
  foo = 'something'
  doSomethingElse()
} else foo = 'somethingElse'
```

The moral here is to not eliminate curly brackets if you are performing actions based on a conditions. Actions are likely to change and you will frustrate team mates and yourself with this.

## Ternary operators

```js
var foo = 'bar'
foo = foo == 'bar' ? 'something' : 'somethingElse'
```

I pretty much only use ternary operators in the case that you are setting a value to a variable based on a condition. Sometimes I'll indent it like this to make it more clear.

```js
var foo = isSomething ? 'something' : 'somethingElse'
```

I think this shortened syntax is great if your variable setting is conditional. I usually don't use ternary operators if there is actions being performed, because those actions may be likely to change in the future and are a little pain to rewrite the logic around.

## When eliminating curly brackets is probably ok

The only case that I don't put in curly brackets is if there is one, single action that is unlikely to change.

```js
if (!json.message) return
```

The reason I find this particular case ok is that we aren't going to do anything else with the message. The application code is most likely to just run a function on the message and do nothing else with it. What about you? How do you manage the shorthanded niceties that JavaScript is built with?
