---
path: 'exiciting-features-in-couchdb'
title: 'Exciting Features in CouchDB'
description: 'Overview of exciting features in CouchDB.'
tags:
  - 'CouchDB'
  - 'Tips & Misc'
date: '2011-05-16T15:13:01.000Z'
draft: false
category: 'test'
layout: 'post'
---

The deeper I get into CouchDB, the more I love it. I empathize with the thread on Quora about [why isn't couchDB more popular?](http://www.quora.com/CouchDB/Why-isnt-CouchDB-more-popular) started by someone who was blown away like I was when I started using CouchDB.

![CouchDB Logo](http://marcgrabanski.com/img/couchdb-logo.jpg)

Quick FYI: this article is a high-level overview of CouchDB features, not a tutorial.

Ok, so what makes me so excited about CouchDB?! CouchDB is a NoSQL, schema-free JSON document storage where JavaScript can access the database directly via HTTP with no middleware required! Let me say that again...


-JavaScript can access the database directly.
-

If you are a web application developer, you know your apps just end up being a REST interface to SQL queries that check a session for permission. I can't tell you how many times I see application that are just mapping SQL queries to a router of some sort. Welp, no need for that if you use CouchDB (albeit it takes a lot of learning to get there).

CouchDB is HTTP / REST-based in its core.

Here is an overview of more features that make me happy using CouchDB.

## Browser-based GUI

Play with your data, permissions and configuration right from the browser with CouchDB's interface Futon.

## Replication

![CouchDB Replication](http://marcgrabanski.com/img/couchdb-replication.jpg)

I've never seen a database so simple to replicate. Just make a POST request.

`{"source":"example-database","target":"http://example.org/example-database"}`

And your database is replicated for you. You can even add `"continuous": true` and your database will sync automatically. You can also add filters to your replication to only sync certain types of data.

## JSONP for Free

Update your config to allow_jsonp = true and BAM! Automatically your database is accessible cross domain for GET requests. There an even a code commit recently to add support for full cross-domain XHR in CouchDB.

## Changes API

Want to know if your database has been changed and update the UI accordingly? You can open a HTTP socket to /db/\_changes?continuous=true and be notified as changes occur in the database. You can even apply filters to only listen for certain types of changes.

## Authentication and Session Support

The Authentication features in CouchDB has certainly blown me away multiple times. Not only can you login via basic HTTP Authentication http://username:password`yourdatabase, but you can also keep authentication open via a session cookie. Ok, so we have been doing this in web applications for ever, but this is a database. POST username and password to \_session and you get a cookie. =)

## Security

It also has database-level security. The permissions per database are separated into readers and admins. Readers can both read and write to the database so I think they are changing the name of that, but admins can also update the \_design documents in a database...you don't want normal users to be able to do that.

Combine auth / session handling with security and you now can allow your normal users to _access your database directly from the browser_!

## validation

The ability to validate inserts is built right into the database. You can combine with authentication to check to make sure the creator of the document is the one who is logged in.

## OAuth

CouchDB supports OAuth out of the box too, so if you want to persist your authentication you get that for free too.

## Map/Reduce, List and Show

Of course the most difficult hurdle to leap into CouchDB and why so many people just jump into MongoDB is the map/reduce system. You have to learn how to take a bunch of documents, emit what you need and then reduce it down based on grouping relevant data. At that point you use \_list and \_show methods to get whatever you need from the aggregated data.

But be forewarned...being able to map/reduce and then filter on a dataset with views takes a while to wrap your head around.

## Attachments

You can attach blobs to a document and serve them directly out of CouchDB. With attachments you can serve out entire web applications with CouchDB.

## Cool Projects in CouchDB Ecosystem

[iOS Couchbase](https://github.com/couchbaselabs/iOS-Couchbase) lets you package a local CouchDB in an iOS app. This really takes advantage of Couch's replication and the philosophy of the project.

Geospacial indexing here we go, with [GeoCouch](https://github.com/couchbase/geocouch)

Need to split up your CouchDB across multiple servers? [Use Lounge Nginx module](http://tilgovi.github.com/couchdb-lounge/)

## Not 100% Roses

As this guy is [annoyed by 10 things in CouchDB](http://www.paperplanes.de/2010/7/26/10_annoying_things_about_couchdb.html) and recently [GimmeBar moved to MongoDB](http://seancoates.com/blogs/gimme-bar-on-mongodb).

## Meets My Needs

But for my needs, I love that JavaScript can interact with the database directly. I love that I get JSONP for free and soon cross-domain XHR. I'll admit it is taking me a long time to wrap my head around map/reduce and the view / query system, but I've been able to do everything I need.

## Where to Start?

I got started walking through the [CouchDB Guide](http://guide.couchdb.org/draft/) and also used the [CouchDB Reference on the Wiki](http://wiki.apache.org/couchdb/Reference) to dig into the specific parts of the API.
