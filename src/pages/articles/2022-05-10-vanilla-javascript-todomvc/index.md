---
path: 'vanilla-javascript-todomvc'
title: '🍦 Modern Vanilla JavaScript TodoMVC in 2022'
description: "Seems it is pretty simple to build fairly complex things these days in modern JavaScript."
tags:
  - 'JavaScript'
date: '2022-05-10T14:16:17.830Z'
draft: false
layout: 'post'
---

To see just how far JavaScript has come since ES6 and beyond, I took a shot at coding [TodoMVC with Modern, Vanilla JavaScript](https://github.com/1Marc/todomvc-vanillajs-2022). **My pure JavaScript solution took ~170 lines of code in just over an hour!** Compare this to the official TodoMVC vanilla JS solution, which is well over 900 lines of [code](https://github.com/tastejs/todomvc/tree/gh-pages/examples/vanillajs). 

An 80%+ reduction in code! I ❤️ the new state of JavaScript.

Since posting my solution, I was surprised to see the repo has received over 450 stars on GitHub:

[![TodoMVC with Vanilla JavaScript in 2022 with 481 stars](./todomvc-vanillajs.png)](https://github.com/1Marc/todomvc-vanillajs-2022)

When I shared it on Twitter, I was surprised with how much positive response this got! People even asking me to create a course on the topic. But of course, as things get popular, eventually it sparks debate on sites like [Hacker News](https://news.ycombinator.com/item?id=31293750). 

## Addressing the Top 4 Common Criticisms of My Solution (Mostly of Vanilla JavaScript in General)

### Criticism of Vanilla JS #1: Input Sanitization 

The best way to sanitize user input is to use `node.textContent`. [I updated my code to use textContent](https://github.com/1Marc/todomvc-vanillajs-2022/blob/main/js/app.js#L68)

Beyond this, there is a new [Trusted Types API](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API) for sanitizing generated HTML. I would use this new API if I was generating nested markup with dynamic, user-input data. (Note that this new API isn't available yet in Safari, but hopefully, it will be soon)

> Trusted Types not being everywhere is fine. You can use them where they're supported and get early warning of issues that way. Security improves as browsers improve, and usage turns into incentive for langging engines ([source](https://twitter.com/slightlylate/status/1523425952218292224))

### Criticism of Vanilla JS #2: Frameworks Enable Declarative UI

> Modern frameworks like React and Vue don't exist to fill in the gap left by native JS, they exist so that you write your application in a declarative way where the view is rendered as a function of state.

This might be a hot take, but to me, this is simply a design pattern. Design patterns can be applied in any language. For instance, I was able to accomplish roughly the same thing (IMO) in my vanilla JavaScript code by calling `App.render()` when the model data changes. [See the code here](https://github.com/1Marc/todomvc-vanillajs-2022/blob/main/js/app.js#L19)

### Criticism of Vanilla JS #3: Frameworks Provide DOM Diffing

This was the most common criticism cited:

> A reactive UI/diff engine is non-negotiable for me.

> Diffing is exactly what you need to do (barring newer methods like svelte) to figure out what to tell the browser to change. The vdom tree is much faster to manipulate than DOM nodes.

However, I think this is a much more balanced take:

> Diffing seems necessary when your UI gets complicated to the level that a small change requires a full page re-render. However, I don't think this is necessary for at least 95% of the websites on the internet.

I agree with him that most websites and web apps don't suffer from this issue, even when re-rendering the needed components based on the application state in vanilla like a framework would. 

My issue with modern frameworks and the DOM diffing approach is that they typically necessitate that you render the entire App client-side. In my vanilla JS projects, I only re-render the most minimal parts of the page necessary. There's my argument for not needing DOM diffing everywhere ... it is inefficent in many cases because it forces you to render all of your app client-side increasing startup time and the amount the client has to do overall.

That said, if you do need DOM diffing in parts of a vanilla app, there are smaller libraries that do just that:

* [Lit-html](https://lit.dev/docs/v1/lit-html/introduction/) is an example of a tool that solves this problem in a tiny package (less than 1KB), and you can continue using string templates with that.

* [fastdom](https://github.com/wilsonpage/fastdom)

### Criticism of Vanilla JS #4: It Will Never Scale

This one is more complicated to address beyond a single blog post. I have indeed built many large vanilla JavaScript projects and have scaled them across developers, making the companies I worked for tons of money, and the apps still exist and are used today.

Here's my potentially hot take on this one: Conventions and idioms are always needed, no matter if you have a framework. **At the end of the day, your codebase will only be only as good as your team, not the framework.**

The way vanilla JS scales is the same way any framework scales. You have to have intelligent people talk about the needs of the codebase and project.

## The Top 5 JavaScript Idioms and Conventions found in my TodoMVC Code

Despite the criticisms, many people were super positive about this no-nonsense approach. As mentioned, I've built large apps and do know that they can scale, but you need to follow some language idioms and conventions to make it work.

Here are the thoughts I had extracted from this simple example of a codebase.

### 1. Prefix variables containing DOM nodes to $varname or $.* namespace.

```js
$: {
  input:      document.querySelector('.new-todo'),
  list:       document.querySelector('.todo-list'),
  count:      document.querySelector('.todo-count'),
  footer:     document.querySelector('.footer'),
  toggleAll:  document.querySelector('.toggle-all'),
  main:       document.querySelector('.main'),
  clear:      document.querySelector('.clear-completed'),
  filters:    document.querySelector('.filters'),
},
```

### 2. Subclass EventTarget to Send Events Out

Subclassing EventTarget on the TodoStore allows us to send out custom events to listen to anywhere in your App upon save.

[`export const TodoStore = class extends EventTarget`](https://github.com/1Marc/todomvc-vanillajs-2022/blob/main/js/store.js#L1)

Firing the save event on the store:

[`this.dispatchEvent(new CustomEvent('save'));`](https://github.com/1Marc/todomvc-vanillajs-2022/blob/main/js/store.js#L17)

In this case, in the App init method, we subscribe to this event and render when the store changes:

[`Todos.addEventListener('save', App.render);`](https://github.com/1Marc/todomvc-vanillajs-2022/blob/main/js/app.js#L19)

Hat tip to [Alex Russel for teaching me this one](https://twitter.com/slightlylate/status/1520820888035225600).

### 3. Setup All Global Event Listeners in One Place

In the App init method, we set up all the global event listeners, subscribe to the store as mentioned above, and then render the App.

```js
init() {
  Todos.addEventListener('save', App.render);
  window.addEventListener('hashchange', () => {
    App.filter = getURLHash();
    App.render();
  });
  App.$.input.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
      App.addTodo(e.target.value);
      App.$.input.value = '';
    }
  });
  App.$.toggleAll.addEventListener('click', e => {
    Todos.toggleAll();
  });
  App.$.clear.addEventListener('click', e => {
    Todos.clearCompleted();
  });
  App.render();
},
```

### 4. Keep Rendering Component and Component's Event Listeners in One Place

```js
createTodoItem(todo) {
  const li = document.createElement('li');
  if (todo.completed) { li.classList.add('completed'); }

  li.innerHTML = `
    <div class="view">
      <input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''}>
      <label></label>
      <button class="destroy"></button>
    </div>
    <input class="edit">
  `;

  li.querySelector('label').textContent = todo.title;
  li.querySelector('.edit').value = todo.title;

  addEvent(li, '.destroy', 'click', () => App.removeTodo(todo, li));
  addEvent(li, '.toggle', 'click', () => App.toggleTodo(todo, li));
  addEvent(li, 'label', 'dblclick', () => App.editingTodo(todo, li));
  addEvent(li, '.edit', 'keyup', e => {
    if (e.key === 'Enter') App.updateTodo({ ...todo, title: e.target.value }, li)
    if (e.key === 'Escape') {
      e.target.value = todo.title;
      App.render();
    }
  });
  addEvent(li, '.edit', 'blur', e => App.updateTodo({ ...todo, title: e.target.value }, li));

  return li;
},
```

Here we want to create the todo items using template strings:

```js
li.innerHTML = `
  <div class="view">
    <input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''}>
    <label></label>
    <button class="destroy"></button>
  </div>
  <input class="edit">
`;
```

Then sanitize the user input using `textContent`:

```js
li.querySelector('label').textContent = todo.title;
li.querySelector('.edit').value = todo.title;
```

Then set up our component's event listeners in one spot.

Note that I created my own little `addEvent` helper because I just thought it was a bit nicer API for binding events.

```js
export const addEvent = (el, selector, event, handler) =>{
    el.querySelector(selector).addEventListener(event, e => handler(e));
}
```

Overall, the key here is to put all the component code in one place, like in React and other modern frameworks. This keeps our UI declarative, addressing one of the main criticisms.

### 5. Render the State of the World Based on Data (Data Flowing Down)

Lastly, I've got all my logic for rendering grouped in the App.render method:

```js
const todosCount = Todos.all().length;
App.$.filters.querySelectorAll('a').forEach(el => el.classList.remove('selected'));
App.$.filters.querySelector(`[href="#/${App.filter}"]`).classList.add('selected');
App.$.list.innerHTML = '';
Todos.all(App.filter).forEach(todo => {
  App.$.list.appendChild( App.createTodoItem(todo) );
});
App.$.footer.style.display = todosCount ? 'block' : 'none';
App.$.main.style.display = todosCount ? 'block' : 'none';
App.$.clear.style.display = Todos.hasCompleted() ? 'block' : 'none';
App.$.toggleAll.checked = todosCount && Todos.isAllCompleted();
App.$.count.innerHTML = `
  <strong>${Todos.all('active').length}</strong>
  ${Todos.all('active').length === 1 ? 'item' : 'items'} left
`;
```

It may look a bit messy at first glance. But the alternative here is to put everything in our App in templated components like above. I'd rather rely more on the server to render and have complete control over the bits we hide and show. It accomplishes the optimizations that you would get with DOM diffing, albeit manually. Again we are letting the server do most of the work rather than waiting for the entire App to render client-side.

There you have it! I'll continue to update this post as I have more thoughts on it. Please send your feedback to me [@1marc on Twitter](https://twitter.com/1Marc)!