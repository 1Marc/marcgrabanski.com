---
path: 'success'
title: 'Why These Idiots Are More Successful Than You'
description: "I'll try to do my best to explain to you why smart people don't become succesful."
tags:
  - 'Business'
date: '2014-01-01T07:15:23.000Z'
draft: false
category: 'test'
layout: 'post'
---

This article is for all of my _insanely smart_ friends. You're so damn smart -- I've told you how awesome I think you and the solutions you've built...they're amazing. You have so many awesome things on your hard drive you built that it would blow the world away if only they knew. You created Facebook before there was Facebook and PayPal before there was PayPal. But recently I've heard you ask, "how can this junk software out there be so popular?"..._why are all these idiots more successful than me?_ I'll try to do my best to explain to you why...

## You Pre-Maturely Optimize Your Software to Cast a Wide Net, When There's No Fish

As developers, we optimize our solutions to cast the widest net as possible. We want everyone to be able to see our work so we make things work back to old browsers and cast a wide net. But the reality is that even if your amazing software is accessible, people won't use it by default! They don't care about your software. They lived yesterday just fine without your amazing solution and they'll live fine tomorrow. You have to make them care by showing them why it's important.

This is the default state of the world:

```js
var World = {
  people: 7203469811,
  peopleWhoCareAboutYourSolution: 0,
}
```


-You have to do something to make `World.peopleWhoCareAboutYourSolution` greater than zero.
-

## You Don't Start with Delivering Value to a Small Amount of Users First

In business things actually work almost the exact opposite as casting a wide net. Business starts with resonating greatly with a very small segment of the population. The internet has created more niches than it has mega corporations. And on top of that, almost every software mega corporations started so niche they have almost laughable stories.

- Groupon? Group-buying coffee and pizza at a local pizzeria. 
- Facebook? A network for connecting with fellow Harvard students. 
- Twitter? Let people know what you ate for dinner. 
- Kahn Academy? Started with a guy in his closet teaching his extended family Math on YouTube.

So many companies seemed laughable because they made a solution for such a small segment of the population. Almost none of it was ever made for a big audience.


-It's simple solutions with big hooks that win. Crawl before you walk! It's ok...it really is.
-

```js
 var mockup, mvp, feedback, idea;
 product = Object.create(Product);
 product.createMockup("Totally inane thing few would care about.",
  function(mockup) {
    mockup.announce(World.friends);
    console.log(World.peopleWhoCareAboutYourSolution.length); // 10
    product.build(mockup, function(mvp) {
      mvp.announce(World.peopleWhoCareAboutYourSolution);
      console.log(World.peopleUsingYourSolution.length); // 5
      // Now we're getting somewhere!
      feedback = mvp.getFeedback(World.peopleUsingYourSolution);
      mvp.iterate(feedback, fn...);
    });
  });
```

## You Aren't Honest With Yourself About What You Want and Go Ask for It

I remember in my teen years wondering why guys who were complete idiots or not even good looking got girlfriends. Well, the solution wasn't that they were pumping iron -- it was that _they just asked_. That's really it. You'll have 100% of a chance of failure if no one hears you are looking, and whatever % chance of them saying "yes" means you could end up with a girlfriend...or maybe even a wife / life-companion for life! BTW -- I'm happily married. It works.

You need to get comfortable asking for everything... feedback, money, help. Not comfortable asking? You need a partner who is.


-The more people you ask, the greater your chances are to get people to get feedback, people to use your solution or...perhaps...even find customers who love your solution!
-

```js
var prospects = [],
  sales = [],
  feedback = []
function ask(type) {
  product.ask(type, person, function(response) {
    if (response.sale) {
      sales.push({ amount: amount, customer: person })
    }
    if (response.feedback) {
      feedback.push(response.feedback)
    }
  })
}
// Marketing
for (var i = 0; i < people.length; i++) {
  // some people might give you their email or +1 you
  if (people[i].likes(myProduct)) {
    prospects.push(people[i])
  }
  // ask for sale right away to get feedback!
  ask('sale', people[i])
}
product.iterate(feedback, function() {
  for (var i = 0; i < prospects.length; i++) {
    ask('sale', prospects[i])
  }
})
```

## You Aren't Being the Change You Want to See

Here's the final kicker. Let's say you don't want money, or fame, or fortune, or anything like that! That's fine. But let's get real deep right now...

Are you being the change you want to see in the world or are you hoarding your treasure?


- If you go to a conference and find yourself complaining there aren't any good talks...
-create a new talk and submit to call for papers!\*\* 
- If you look online for a solution and can't find one so create one for yourself...
-open source or productize it!\*\* 
- If there are no companies you'd like to work at...
-create the ideal company you'd love to work for!\*\* 
- Can't find a blog you'd like to read...
-create a blog and start writing what you want to hear!\*\*

_Find people who will enjoy what you've made._ It will change you to see people enjoying your creations.


-The hardest thing in life is to be the change you want to see.
- It is what separates truly successful people from people with hollow and shallow form of success.
