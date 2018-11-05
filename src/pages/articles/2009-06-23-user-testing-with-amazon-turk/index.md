---
path: 'user-testing-with-amazon-turk'
title: 'Cheap User Testing with Amazon Turk'
description: 'Process of using Amazon turk for cheap user testing.'
tags:
  - 'Testing'
  - 'Usability & Testing'
date: '2009-06-23T10:08:31.000Z'
draft: false
category: 'test'
layout: 'post'
---

After writing clean, cross-browser code and testing it in all browsers.. what if issues show up on others' computers and not yours? Recently this happened to me and I was baffled.

## Cross-Browser Testing

Upon testing my code in IE6+ through a virtual machine, Firefox, Safari and Chrome.. it all worked. Yet when I handed off the code to the client, they replied, "the submit button isn't working". So I went back to doing further testing.

## Friend Testing

Friends tested the website and _it worked for them_. Yet, the client still could not submit the form on their computer. I was now infuriated at this mystery.

After some changes, I revamping my code and making sure every [t" is crossed and "i" dotted. The markup was now perfect and "validated with w3c](http://validator.w3.org/). Still, after sending it through to the client it still didn't work for them! "Wow?!" I thought, "what do I do now?"

### The Problem Still Exists. "What Now?"

At this point I was mad, not at the client but at the fact that I had no idea what was causing the issue. I then said these words to the client:

> If I could have 100 PC computers from all around the world to test your website to find the issue, I would pay for it. I am riled up about this and want to fix the issue at all costs.

### The Amazon Turk, "Testbed"

To my complete amazement, I _actually found out a way to have 100 PC computers from all around the world testing my website_ ! **Welcome to the world of** [**Amazon Turk**](https://www.mturk.com/mturk/welcome) **.** For a total of $5, I had just about 80 users go through my tests and give me feedback.

![](world-map-orange.jpg)

### My Process of Testing Through Amazon Turk

I came up with a process that made it easy to report back to the client with findings and numbers

### Setup a test to gather feedback on using the website.

Be sure to isolate the code so that you only have the code on it that you think might be causing an issue. Save each file used in the test for future reference. # Register and pre-pay around $5 on Amazon Turk. # Created a HIT (Human Intelligence Tasks) on Amazon Turk that details the test. Use the default template and make sure you have a textarea on the HIT for them to report their findings. # After getting results back, summarize the findings into a paragraph that pinpoint reported issues. # Based on the summary, create an action item in order to develop a solution. # Based on the action item, create a new test with the solution. # Post the new HIT / test on Amazon Turk until your desired results are achieved.

### Failing at First

My first HIT test didn't go well, 75% of the users failed. But, I got great feedback and found a solution based on the feedback.

### Resolving Infrequent Problems

In test rounds 2 and 3, I found infrequent problems based on specific cases with users. I made my error messages very specific so that users could copy and paste the results into the Amazon Turk results so that I could easily resolve the issue. These issues normally wouldn't surface in the testing process unless the website was launched for a while and someone told us about it. Even then, it would have shown up so infrequently that I'm not sure we would have bothered.

_Make your error messages specific, so users can report exactly what happened._

### From 25% Completion, Up to 96% Completion!

After 4 rounds of tests, the completion results went up to 96% completion rate! During one of the tests, the user said the page didn't show up. So the website must have temporarily been down and I'm not worried about that one failed test out of so many successful test.
