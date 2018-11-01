---
path: "gem-management-with-rvm-and-bundler"
title: "Ruby Gem Management with RVM and Bundler"
description: "How to manage your ruby gems with rvm and bundler."
tags: 
  - "Linux & Server Admin"
  - "Rails"
  - "Ruby"
date: "2010-06-27T18:32:44.000Z"
draft: false
category: "test"
layout: "post"
---

![](http://marcgrabanski.com/img/rubygems.png)
When I started learning Ruby, managing gems was a huge problem to the point I would make fun of it. Now I use [RVM](http://rvm.beginrescueend.com/) which helps you install multiple versions of ruby on one computer. Not only does it do that, but it makes gem management a breeze as well! Beyond RVM, Rails 3 provides us with bundler, which allows you to install gems based on a list of dependancies automatically. Very slick.

Here I will outline how to install and configure RVM as well as manage your gems with RVM and the Rails 3 bundler.

## Installing RVM
[Install RVM](http://rvm.beginrescueend.com/rvm/install/) by running this in terminal. 
@bash < <(curl -s https://rvm.beginrescueend.com/install/rvm)@

Then drop this into your @~/.profile@ file.
@[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm"@

Run it with @. ~/.profile@ in terminal. It sometimes helps to open a new terminal window to clear things out.

## Installing Ruby 1.9.2
Use RVM to install the version of ruby you want. I use 1.9.2, so run @rvm install 1.9.2@ and you are up and running on ruby 1.9.2.

You can make double-sure by typing @ruby -v@ and checking what version is currently loaded.

## Gem Management with RVM
Now that we are up and running on ruby 1.9.2 lets talk about managing your gems.

RVM has "gemsets" which allow you to organize different sets of gems. If you install gems into the global gemset, then it will be available to you no matter which gemset you are using.

Create the global gemset.
```bash
 rvm gemset create global
 rvm gemset use global
```

Install gems here that will be used in projects like bundler and passenger.
```bash
 gem install bundler
 gem install passenger
```

Notice that I never use sudo because rvm puts these gemsets in your user ~/.rvm directory.

Now create and use your project gemset.
```bash
 rvm gemset create YOUR_GEMSET
 rvm gemset use YOUR_GEMSET
```

Obviously YOUR_GEMSET can be anything you want. Then you are set to go!

## Installing Gem Dependancies with Rails 3 Bundler
Place a file named [Gemfile" inside your root application directory. Inside your Gemfile you can specify all the gems you need. Yehuda Katz explains more about "using bundler](http://yehudakatz.com/2009/11/03/using-the-new-gem-bundler-today/).

My gemfile looks like this:
```ruby
 source 'http://rubygems.org' gem 'rails', '3.0.0.beta4' gem "activemerchant", :git => 'git://github.com/merbjedi/active_merchant.git', :branch => 'rails3', :require => "active_merchant" gem "acts_as_markup" gem "RedCloth" gem 'memcache-client' gem "mysql" gem "will_paginate", '3.0.pre' gem "system_timer" gem 'acts-as-taggable-on' gem "coderay" gem "haml" group :test do gem "rspec-rails", ">= 2.0.0.beta.13" end
```

Yours will obviously look different based on what you need, but I just wanted to show you what a normal Gemfile will look like. Notice @group :test do ... end@ allows you to group gem dependancies based on your environment RAILS_ENV.

Now you have to actually install these gems into your gemset. Make sure you have the bundler gem installed. Use @gem list@ to make sure you have the bundler gem installed.

Install gems with Bundler.
@bundle install@

This will read your Gemfile and install all of the gems you need. Make sure to be inside your application root directory @cd YOUR_APPLICATION@ when running this so that it can read your Gemfile.

Now do @gem list@ and you should see all the gems you need installed!

## Cleanup in the Future
Since I don't specific version numbers for my gems (I always test and upgrade locally before deploying, not recommended if you don't use this practice), new versions of gems will install causing there to be many redundant gems in your gemset. To clear them out use:
@rvm gemset empty YOUR_GEMSET@

Then use bundler to reinstall all the dependancies and your gemset is now bright and shining clean.

## Auto Switching RVM when Changing Directories
One final tip is that if you have multiple applications using different of ruby and gemsets you can add a bit of automagic spice to make things easier. RVM reads a file called .rvmrc when you change into a directory.

Make a file called .rvmrc and put it in your application directory. The notation looks like this `rvm use RUBY_VERSION@YOUR_GEMSET` and mine looks like this `rvm use 1.9.2@marcgrabanski`. Now every time I change into that directory it will tell rvm to use ruby version 1.9.2 with gemset marcgrabanski. Pretty cool... eh?

That is it, most of the pain I've experienced in the past without RVM and Bundler has been washed away. I'm happy with managing gems in this way.
> Update 6/30/10: Ryan Bates created a good [screencast on bundler](http://railscasts.com/episodes/201-bundler) that you should check out as well.