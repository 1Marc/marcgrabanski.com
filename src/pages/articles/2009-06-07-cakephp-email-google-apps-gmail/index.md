---
path: 'cakephp-email-google-apps-gmail'
title: 'Emailing through Google Apps / Gmail on CakePHP'
description: "Sending email through Google's servers with CakePHP SwiftMailer component or built-in email component."
tags:
  - 'CakePHP'
  - 'Email'
  - 'PHP'
  - 'PHP & CakePHP'
date: '2009-06-07T18:20:21.000Z'
draft: false
category: 'test'
layout: 'post'
---

!http://marcgrabanski.com/img/logo-cakephp.gif!
When launching new websites and web applications, it is difficult to get on trusted email lists of Hotmail, Yahoo and Etc. Aside from having "proper SPF records":http://marcgrabanski.com/article/hotmail-email-filtering-and-spf, a great way to avoid this sysadmin problem is to use Gmail / Google Apps to offload your domain's email to their servers. By doing this, your domain gets an instant trust factor with receiving mail servers that a new server simply cannot do in a short period of time. To email with Google Apps / Gmail with CakePHP, I've had recent success using the "SwiftMailer CakePHP component":http://bakery.cakephp.org/articles/view/updated-swiftmailer-4-xx-component-with-attachments-and-plugins. It is easy to use and leverages the "PHP SwiftMailer library":http://swiftmailer.org/.

### Configuring SwiftMailer CakePHP Component with Gmail This is pulled off the component article's example, but I posted it here as well for your reference.

```
$this->SwiftMailer->smtpType = 'tls'; $this->SwiftMailer->smtpHost = 'smtp.gmail.com'; $this->SwiftMailer->smtpPort = 465; $this->SwiftMailer->smtpUsername = 'name@domain.com'; $this->SwiftMailer->smtpPassword = 'your_password'; $this->SwiftMailer->sendAs = 'both'; $this->SwiftMailer->from = 'name@domain.com'; $this->SwiftMailer->fromName = 'Full Name'; $this->SwiftMailer->to = 'to_name@domain.com'; $this->SwiftMailer->template = 'your_action'; $this->SwiftMailer->subject = 'your_subject';
```

I added two custom attributes here, template and subject because I find I like to set that as a variable instead of putting it in the send function (in the next step).

### Emailing with SwiftMailer CakePHP Component The send function has 3 parameters, but we are only concerned with the first two since we've already configured our settings in the step above. The first is the template found in /views/elements/email, the second is the subject.

```
try { if(!$this->SwiftMailer->send($this->SwiftMailer->template, $this->SwiftMailer->subject)){ $this->log("Error sending email"); } } catch(Exception $e) { $this->log("Failed to send email:".$e->getMessage()); }
```

You will also notice here that we are wrapping the send function in a try/catch block. This allows us to output whatever caused the function to fail through an exception (and fail silently), rather having the component either kill the client to output the message, or simply return false with no explanation like a lot of things in CakePHP-land. Try/catch blocks work great in non-mission critical things like sending an email, contrary to the core library which should simply fail and exit the application. I had one error on my local computer with TLS not being installed into PHP. So I added the following line to my PHP compile to add TLS support: @--with-openssl@ My entire PHP compile looks like this...

```bash
 sudo make clean && sudo ./configure --prefix=/usr/local/php5 --with-pear --enable-sockets --with-iodbc=/usr --with-curl=/usr --with-mysql=/usr/local/mysql --without-iconv --with-apxs2=/opt/local/apache2/bin/apxs --with-zlib-dir=../zlib-1.2.3/ --with-jpeg-dir=../jpeg-6b --with-openssl --with-gd --with-freetype2=/Developer/SDKs/MacOSX10.5.sdk/usr/X11/include/freetype2/freetype && sudo make && sudo make install
```

As an alternative to SwiftMailer, I was pointed to joshua's solution on the mailing list to use the built-in "CakePHP email component with Gmail":http://groups.google.com/group/cake-php/browse_thread/thread/8573140b2e72d1aa/839b6f576077ed18?lnk=raot. Apparently he got it to work, but I couldn't for whatever reason. Enjoy having mail go through to your users without fail!
