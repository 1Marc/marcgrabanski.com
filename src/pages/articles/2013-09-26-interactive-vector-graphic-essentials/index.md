---
path: 'interactive-vector-graphic-essentials'
title: 'Interactive Vector Graphic Essentials'
description: ''
tags:
  - 'HTML5 and SVG'
date: '2013-09-26T00:32:23.000Z'
draft: false
layout: 'post'
---

Making interactive web applications work across all browsers is a challenge. Luckily, with SVG you can scale your graphics to the device and it works across all major browsers. In this article I give you a few slide decks from my presentations on intro to SVG and RaphaelJS and also I explain transforms which is a way to rotate, scale and manipulate graphics.

With these tools we can build interactive vector-based web applications that work on any device!

## My SVG and RaphaelJS Slides

[Slide Deck](http://www.slideshare.net/slideshow/embed_code/12708775)

## CodePen SVG Collection

I created a [collection of demos](https://codepen.io/collection/DHLiK) on CodePen to show how you can do things with SVG and CSS transforms.

## Introduction to SVG Elements

Learn these elements: `<text>`. `<ellipse>`, `<rect>`, `<circle>`, `<line>`, `<polygon>`, `<path>`, `<g>`

Check out Ian Johnson's [interactive SVG introduction](http://enjalot.github.io/intro-d3/frontendmasters/svg/) from his workshop on D3.js.

## Benefits of Using SVG

- One size fits all
- HTML-like tags for graphics
- DOM Structure
- CSS3
- JavaScript Events
- SEO friendly and Accessible
- Printer friendly
- Good browser support

## The Different Ways to Embed SVG

- Object Tag
- Inline
- As Image
- CSS Background

## Using SVG Links

You can wrap `<a xlink:href="#"></a>` around ANY SVG element to make it linkable. In this demo we make the paths of both Minnesota and Wisconsin clickable links.

[Try it on CodePen](https://codepen.io/1marc/pen/lofLH)

## SVG Filters

SVG filters are coming! Check out this [filter plugin demo for svg.js](http://svgjs.com/filter/) which shows of many of the filters.

## Using CSS Animations with SVG

Here's [I Twitty the Fool](http://www.anthonycalzadilla.com/i-twitty-the-fool/)... a demo of animating SVG shapes with CSS.

## Using CSS Transforms and Transform Matrices with SVG

Here's an introduction article to [understanding CSS matrices](http://dev.opera.com/articles/view/understanding-the-css-transforms-matrix/).

- Stacking Transforms with SVG
- In the first demo, I show you how you can add many transforms to SVG. This is a basic demo of how transforms "stack" on top of each other and modify the original origin of the transform. For instance, if you add a rotation transform and then try to add a translate transform on top of that, "x" may not take you left and right anymore, but in a different direction based on the axis of the rotation origin.

[Try it on CodePen](https://codepen.io/1marc/pen/DCvFm)

- Stacking Transforms with RaphaelJS
- With RaphaelJS, you can do the same transforms as before, but you can make "absolute" or "relative" transforms. So using absolute transforms makes it explicit what you are doing to modify your object instead of it stacking on top of the prior transform. Also, not shown in the demo, RaphaelJS  has convenience methods like "element.matrix.split()" to get the current resulting transform stack and "getBBox()" to know where your object is now.

[Try it on CodePen](https://codepen.io/1marc/pen/rsmbF)

- Animating the HTML5 Logo with RaphaelJS Transforms
- You can use the .animate() method built into RaphaelJS to tween between transforms. We're also using the built in "elastic" easing method when we clear the transform.

[Try it on CodePen](https://codepen.io/1marc/pen/zqJba)

- Animating SVG with CSS Matrix Transforms
- Once you have a matrix transform, you can use the transition property to animate the transform matrix with CSS.

[Try it on CodePen](https://codepen.io/1marc/pen/FJbtj)

- SVG Path Interpolation with RaphaelJS
- You can animate between two path elements using RaphaelJS to do the interpolation between them. One of the more interesting things done with path transitions is [animating the progression of the batman logo](http://www.wimp.com/batmanlogo/).

[Try it on CodePen](https://codepen.io/1marc/pen/bgHJk)

- Using the XCSSMatrix Library to Modify a Matrix Transform
- John Schulz has made the XCSSMatrix library which lets you take an existing matrix and modify it with various transform methods (sort of like RaphaelJS does). You can then use the native CSS transition property to animate the matrix like we did in a previous demo.

[Try it on CodePen](https://codepen.io/1marc/pen/BdAvt)

You can also [play with matrix3d](http://www.eleqtriq.com/wp-content/static/demos/2010/css3d/matrix3dexplorer.html).

## My matrix3d Slides

[Slide Deck](http://www.slideshare.net/slideshow/embed_code/27707793)

## Other Cool SVG Stuff

- The responsive images [clown car technique](https://github.com/estelle/clowncar).
- A nice [set of icons for RaphaelJS](http://raphaeljs.com/icons/).
- [Fabric.js](http://fabricjs.com/) - use SVG inside of the HTML5 `<canvas>` element.
- [Vectron](http://roomandboard.github.io/vectron/) - fetch an SVG with Ajax and then parse it with [rappar.js](https://github.com/DmitryBaranovskiy/rappar) into RaphaelJS objects.
- [d3.js interactive demo](http://bl.ocks.org/enjalot/6641917) from the workshop.
- Creative demos: [digital fireworks display](http://pixelpyros.org/) and [projection mapping on moving surfaces](http://www.youtube.com/watch?v=lX6JcybgDFo).
- [Deep dive into the animation math](http://acko.net/blog/animate-your-way-to-glory/).
- Finally, if you haven't seen Bret Victor's [inventing on principle](https://vimeo.com/36579366), you should.
