---
path: 'cakephp-email-encoding'
title: 'CakePHP Email Encoding'
description: 'An alternate way to encode CakePHP emails.'
tags:
  - 'CakePHP'
  - 'PHP & CakePHP'
date: '2008-02-12T23:17:19.000Z'
draft: false
category: 'test'
layout: 'post'
---

My email was not getting sent using the email component in CakePHP. I debugged inside the core and found out that my subject was getting changed to something like,"=?UTF-8?B?V2VsY29tZ...". In talking to Larry (core CakePHP team), he educated me that this allows for characters other than the English language to be sent via email (UTF-8 encoding). Even though it apparently was correct, it was still not being received at my personal email or a Yahoo account. Gmail got it, the others didn't.

## The Alternate Email Encoding (English only) Larry showed me the alternative way to encode that works just fine for English characters. If you are having trouble with receiving these UTF-8 encoded emails, try sending with iso-8859-15 (only English characters). You can try the English encoding using this line of code:

```
$this->Email->charset = 'iso-8859-15';
```

This works for English-only applications, but if anyone can offer up a solution as to why Yahoo and Media Temple email accounts are not getting the UTF-8 emails please let me know. It is strange to me that gmail gets it just fine. Until then, I am only planning on sending English emails anyway so there is no issue until I build a multi-lingual application.
