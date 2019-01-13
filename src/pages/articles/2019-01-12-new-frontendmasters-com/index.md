---
path: 'new-frontend-masters-website'
title: '🏎💨 The New Frontend Masters Site'
description: ''
tags:
  - 'Performance'
  - "Marc Grabanski's Work"
date: '2019-01-12T18:51:47.835Z'
draft: false
layout: 'post'
---

We built it about a year ago now, but the new web stack we built is an absolute pleasure to work with. I'd like to share a few tidbits what makes it so great.

The new [Frontend Masters](https://frontendmasters.com) website was built system with two goals in mind:

1. Performance
2. Developer Experience

## #1: Performance – It's ⚡️ fast!

Fast websites deliver the HTML content immediately and don't block this with script parsing, style loading, or 3rd party content. Our new website achieves this by serving compiled static HTML files built with Go’s static site generator, [Hugo](https://gohugo.io).

By using a static site generator, the visitors of your site will get served prebuilt HTML files. They don't need to be rendered on the server dynamically like WordPress does out of the box. With static generators, your sites are fast by default.

From there, we modified Hugo to render templates on the fly. This process enables us to use the same template we did for the static site but now hydrated with user data if the user is logged in.

**What we ended up with was a system that gives us the best of both worlds.** The site serves the user the static files if you’re visiting the site anonymously (which makes the ⚡️ site super fast), but if you’re logged in, you get the same templates rendered with your user data on the fly.

### Webpage Test Results

Overall our webpage test results are pretty good. 😀

[![Frontend Masters Webpage Test Results](./webpagetest.png)](https://www.webpagetest.org/result/190113_FJ_e857116f0f290c296371c24dbbc3b9f2/)

There's more we have planned to improve performance, such as building the JS & CSS assets into Cloudfront and updating the caching rules on them.

## #2: Developer Experience – It's a Pleasure to Work In

Why is the new system fun to work in?

1. Changes you make show up instantly with Webpack & BrowserSync.
1. Developing for logged in vs logged out users can be done with one template.

### Webpack and BrowserSync

We're using Webpack to build local file changes and BrowserSync to push those changes into the browser. This is such an amazing developer experience because it means I can have several different browsers open at different sizes and have them all update as I develop! 🤩

![Modern Development Experience](dev-experience.gif)

### One Template to Handle Different State

Developing the logged in vs. logged out Hugo templates is super smooth as well since all of our data is in local YAML data files. These YAML files are what get replaced on the server when rendering the dynamic pages. Developing the logged in pages is as simple as editing the local YAML `auth.yml` file and switching the logged in property to `true`.

This means we can switch out data in local YAML files to update any number of states inside the templates – **one template to rule them all**!

It's a lot of fun to work in and I couldn’t be more pumped about the new system…go, team!
