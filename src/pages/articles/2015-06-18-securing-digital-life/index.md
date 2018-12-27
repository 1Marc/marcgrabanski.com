---
path: 'securing-digital-life'
title: 'Securing Your Digital Life'
description: 'In this post I discuss the tools you can use to be more secure living your digital life.'
tags:
  - 'Security'
date: '2015-06-18T06:09:00.000Z'
draft: false
layout: 'post'
---

_This post contains tools and tactics you can use to be more secure living your digital life._

## You aren't secure, but can work towards being less at risk.

I was listening to an episode of the Timothy Ferris [podcast with Marc Goodman discussing high-tech crime](http://fourhourworkweek.com/2014/12/09/future-crimes/) and it jogged my mind about "threat profiles". **Everyone has threats and should take stock of where you're likely volnerable, what would be lost and how to recover.** You should just start by knowing that living in a digital world **you can't be 100% secure 100% of the time**. Even our beloved [Chris Coyier of CSS-Tricks was hacked and he interviews the hacker here](http://shoptalkshow.com/episodes/special-one-one-hacker/). Incredibly compelling interview -- you should listen to it.

### Building secure software is tough

For the last 10+ years I've been the knowingly or unknowingly **building software with security holes**...sometimes even conciously in order to meet deadlines or maybe just because the perceived threat is so limited at the time. Or maybe even I didn't know I produced a bug. ;-) All this is to say that **you are at risk of losing your information and probably have already lost it many times over without knowing about it**. And it's not just been sniped by the NSA but by the bugs in the software you use and by the websites you use that don't update their systems and get hacked every day.

## How can you secure yourself?

So what tools can you use to "stay secure" (I use air quotes because this is rediculous, I'm not secure and never will be).

### Two-factor auth all the things!

The number one thing you can do right now is go in and **enable two-factor authentication (2FA) on every important website you use**. This usually involves the application sending you a text message before logging in or you open Google Authenticator to get a code and enter that to login. It's another layer of security and a bit of a hassle if you lose your device, but it's worth it.

## Backups and file sharing

Primarily I use [Dropbox](https://www.dropbox.com) for sharing files with others, working on my work, and backing up my files. Now I know what you're going to say. "This guy is writing on security and uses Dropbox! HAHA". Yeah, it's ok to laugh it's fine -- you probably use it too. The main thing you need to do **at the very least** is check the [sharing tab](https://www.dropbox.com/share) and [links](https://www.dropbox.com/links) in Dropbox and **unlink anything that shouldn't be accessible to the public anymore**.

### "What's so bad about Dropbox?"

It's quite rediculous to think anything you have in Dropbox is secure. Snowden revealed that Dropbox basically just hands over your data to any entity that asks for it... so I'm considering the fact that it's basically public if it's in Dropbox. I still keep my files in there because one thing I've realized when it comes to security (myself included) is that **humans will always comprimise security for convinience**. It's all quite rediculous the length of our laziness. People [link stuff in Dropbox like their tax returns](https://grahamcluley.com/2015/04/dropbox-leak-tax-return/) and it shows up in search engines all the time. Also if you enabled any apps to have access to your Dropbox -- well, they have wholesale access to all of your files too. **It's easy to accidentally overshare even if you're concious of it!**

### Alternatives to Dropbox?

On the file sharing and backup route I've tried [CrashPlan](http://www.code42.com/crashplan/), but that is just backup and doesn't allow for easily sharing files with coworkers. I've tried various P2P tools like [AeroFS](https://www.aerofs.com/) but they require the files to be accessible on your own computers and I realized there's just a huge beauty to having a web interface you can access from anywhere to grab from a central server. Some of these P2P solutions would work if I had a ~4TB server sitting somewhere...but alas, I don't. :-/ I'm now experimenting with [MEGA Upload](https://mega.nz/), but it has miles to go before it acheives feature parity with Dropbox. **There just doesn't seem to be a good enough solution out there yet to replace the convinience of Dropbox.** Let me know in the comments if you know one. I would put Dropbox up as my #1 list of threat profile. It's basically all my files (and my life) accessible within one website.

## Daily internet usage

### Block 3rd party scripts

**Use a 3rd party blocking browser extension like [ghostery](https://www.ghostery.com/en/)** to block 3rd party scripts loading on websites. You can always enable them again on a per website basis. Advertising is basically the antithesis of security and is everywhere tracking everything -- ghostery gives you a bit of control what scripts actually load. **_Not only does blocking 3rd party scripts help security...but suddenly the internet gets a LOT faster! _**

### Private VPN

If you want a log of everything you've ever visited it's probably on some server somewhere. You probably have Comcast and they log everything. I've been aware of this literally for like 15 years and have done nothing really, but recently my wife wasn't able to login to her school's network because Comcast was blocking it -- or they were blocking Comcast on accident. So I decided to try out a VPN and found this lifehacker post: [Why should you use a private VPN?](http://lifehacker.com/5940565/why-you-should-start-using-a-vpn-and-how-to-choose-the-best-one-for-your-needs) **Using a VPN allows you another layer of anonymity.** I started using [VyprVPN](https://www.goldenfrog.com/vyprvpn) and for like $10/mo my wife can get access to her school's website and I can browse without giving all of my usage data to Comcast. Win! ;-)

### Use SSL always, by default

This is now an obvious one I think but when you're either building websites or using them **always opt to using https instead of http** in your web browser. It encrypts the traffic between you and the website you are visiting and keep others from snooping on your usage in the same network. I saw someone [demo Firesheep](https://en.wikipedia.org/wiki/Firesheep) years back and it slurped up all the sessions of tons of people using HTTP instead of HTTPS / SSL and allowed you to login to other peoples' accounts -- essentially easily hacking anyone on the same network. This happens regularly.

### Password management

Recently tools like [1Password](https://agilebits.com/onepassword) and [Lastpass](https://lastpass.com/) have been gaining a lot of steam because you can enter one password and access them all. I use this and store my passwords in Dropbox -- a big LOL to security but a huge win for convinience. **I enter one password and access all 500 passwords to all the sites I use, plus secure notes.** It's a major win for my life but introduces yet another single point of failure. This article now seems like I'm dogging on myself, but at least it's a concious choice. I don't pretend it's a secure approach, but the one benefit I will say is **I can generate passwords like "vLi=G+sv9&Eom7tvVG3b" with ease and use them to login to sites**.

### Remember some unique passwords and don't store in password managers

**I don't store everything in password managers** because it's a single point of failure likely to be comprimised at some point. [xkcd has an article on password strength](https://xkcd.com/936/) which is how you should generate great password which are more secure than the average Joe. **_Use a longer phrase (series of words) that's easy to remember and throw in some weird characters to boot._** I have various levels of passwords where I throw in my junk / simple password into sites I don't care about or are likely to get comprimised. Then my computer has a unique password, Dropbox, and essentially anything I really care about.

## Plan for theft of your computers, tablets and phones

I was out speaking at a conference in California and got my laptop stolen out of a rental car. I didn't have a password on it at the time -- DOH!! -- which means the theif not only had access to my computer, but all my files. I'm glad that theif wasn't malicious (or smart?) enough to dog on me but he had access to everything. Here's what I do now and what I should have done then...

### Encryption

Ideally when you get your computer you **encrypt the hard drive**. OSX has something called Filevault you can enable which encrypts the hard drive. Otherwise if someone gets access to your computer it's wide open and any files are accessible. Another layer of security you can add is to [set a password on the actual firmware](https://support.apple.com/en-us/HT204455).

### Setup different user accounts on your computer

Ideally you aren't ever using your computer as an administrator. You should be only using an administrator account if you are...wait for it...doing things that require changing settings on your computer. You should also install an [anti-theft tracker like Prey](https://preyproject.com/) and open up a guest account open with Prey running so that if anyone steals your computer you know where your computer is and you have a lot more tools available than just "find my mac/iphone" which comes with your device. Prey is way more powerful when finding a theif.

## Protect your credit

What if a theif applies for a consumer loan using your information and screws up your credit? **You should use credit monitoring services** like [Lifelock](http://www.lifelock.com/) and [TransUnion](https://membership.tui.transunion.com/) that allow you to check up on things and even get alerts when someone applies for a loan. _I always feel more secure when I got to apply for a car loan and I get a text message and email about it._

## Website backups

Plan for complete destruction of your websites and all data. Make sure your web host or you have a cron job in place that pushes your data off the server onto somewhere else at least nightly. Part of what I like about WordPress and so many WordPress hosts is that they do this for you. Also putting stuff in git/GitHub private repos really helps to never lose code.

### Email and IM

People email their personal files around like crazy using Google's servers which gets replicated to the cloud and is never going away. This includes me. **I like the convinience of having the ability to search across all my communications history.** Again, I'm sacrificing security for convinience but I see no alternative. I do the same thing with IM -- using Skype, Google chat and AIM which are all logged without my concent. I wish we had private default options for email and IM, but with private / open source solutions UX never seems to be the priority...

## TL;DR -- you're DOOMED!

So now that you know you **absolutely will get hacked at some level**...it's time to take action. **What steps are you taking to assess risks and take action?**
