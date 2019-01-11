---
path: 'coding-2018'
title: 'Coding in 2018'
description: ''
tags:
  - "Marc Grabanski's Work"
date: '2019-01-11T18:51:47.835Z'
draft: false
layout: 'post'
---

In 2018, I managed to write **a lot more code** – 2,129 commits total.

![Marc Grabanski's Github Profile](github-2018.jpeg)

Much of this code was on the [Frontend Masters](https://frontendmasters.com) website. The new web stack we built is an absolute pleasure to work with.

We built the system with two goals in mind:

1. Performance – it's ⚡️ lightning fast!
2. Solid developer experience - the tools need to show your updates automatically.

## #1: How FrontendMasters.com is So Fast

Fast websites focus on delivering the HTML content immediately, and aren't blocked by script parsing, loading of styles, or 3rd party content. Our new site is compiled static HTML files built with Go's static site generator, [Hugo](https://gohugo.io).

By using a static site generator, the visitors of your site will get served prebuilt HTML files. They don't need to be rendered on the server dynamically like WordPress does out of the box. With static generators, your sites are fast by default.

From there, we modified Hugo to render templates on the fly. This enables us to use the same template we did for the static site, but now hydrated with user data if the user is logged in.

**What we ended up with was a system that gives us the best of both worlds.** The site serves the user static files if you're just visiting the site (which makes the ⚡️ site super fast), but if you're logged in, you get the same templates rendered with your user data on the fly.

## #2: Developer Experience

This system is not only fast, but also a pleasure to work with. We don't need two separate systems for logged in vs logged out users... we have **one template to rule them all!**

### Webpack and BrowserSync

We're using Webpack to build local file changes and BrowserSync to push those changes into the browser. This is such an amazing developer experience because it means I can have several different browsers open at different sizes and have them all update as I develop! 🤩

![Modern Development Experience](dev-experience.gif)

### Updating the Templates Based on Different States

Developing the logged in vs logged out Hugo templates is super smooth as well since all of our data is stored in local YAML data files. These YAML files are what get replaced on the server when rendering the dynamic pages. To develop as if you’re logged in it's as simple swapping a local YAML auth.yml file property `loggedin: true`.

I couldn't be more pumped about the new system...go team!

## Features I Coded in 2018

- [**Learning Paths**](https://frontendmasters.com/learn/) — We put all our courses into a cohesive order according to peoples' learning goals. There was also a fun SVG progress widget I built from scratch which was a blast to code!

![Learning Paths](learning-paths.gif)

- **Course statuses** — An issue with updating courses is that people were taking the old versions. We added this status indicator at the top of old courses to make sure they're pointed to the updated course.

![Course Statuses](statuses.png)

- **Bootcamp Website** – The biggest project of the year was putting together a 2 week bootcamp to take beginners from nothing all the way up to having autonomy and taking control of their learning. By the end they were able to actually code their own projects. I built a sub-website around this project.
- **Promotional Websites** - Every spring and fall we have a new theme for promoting the things we're building. We launched an [updated iOS app](https://itunes.apple.com/us/app/frontend-masters/id1383780486?ls=1&mt=8) and a [new Android app](https://play.google.com/store/apps/details?id=in.mjg.frontendmasters.store&utm_source=frontendmasters_com&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1) (which I had nothing to do with), but what I did do was build both of the sub-sites for the promotions.
- **Annotations** - One issue our users were having was keeping the code in sync with our courses. So we addressed this by popping up git commands and code snippets within the player. They're super helpful. Was a blast to be able to take a stab at and get out to the public – it's been on the roadmap for years!
- **Static Pages SEO Revamp** – Our build process takes markdown content files and puts it in a data format for Hugo to generate the static pages. I revamped that build process to spit out more SEO-friendly pages, and increased our search traffic by a non-trivial amount.
- **MarcGrabanski.com** – Moved this site to Gatsby! The [code is up on Github](https://github.com/1Marc/marcgrabanski.com). The most difficult part of the migration was getting the old WordPress posts into a proper markdown format. I tried to hire some help on Upwork...but that didn't go so well. I did write an importer, then from there I clean up the remaining items with some pretty intense regex. Nice to have a blog again... I just couldn't get myself to write when it was on WordPress. 😂

## 😍 Loving Code 15 Years In

Super grateful to the team for affording me the time and space to write some good code for the company. I realize as a CEO, I may not be able to keep writing code over the long-haul, but damn is it fun when I can get a chance to!

We're only 2 weeks into 2019 and I already revamped our Gulp build process...starting the year out strong! 💪
