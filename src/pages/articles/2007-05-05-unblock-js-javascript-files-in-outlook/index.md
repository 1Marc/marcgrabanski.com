---
path: "unblock-js-javascript-files-in-outlook"
title: "Unblock JS (JavaScript) Files in Outlook"
description: "How to unblock receiving JS (JavaScript) file attachments in Outlook."
tags: 
  - "Tips & Misc"
  - "Windows"
date: "2007-05-05T17:00:00.000Z"
draft: false
category: "test"
layout: "post"
---

!http://marcgrabanski.com/img/js-outlook.jpg!
Using Outlook 2003, I was annoyed that it wasn't allowing me to receive JS (JavaScript) files. So naturally I googled it and after a while found the answer: # Close Outlook. # Open the "Registry Editor":http://www.annoyances.org/exec/show/registry . # If you using Office XP/2002, expand the branches to **HKEY_CURRENT_USER Software Microsoft Office 10.0 Outlook Security** If you using Office 2003, expand the branches to **HKEY_CURRENT_USER Software Microsoft Office 11.0 Outlook Security** # Create a new string value by selecting **New** and then **String Value** from the **Edit** menu. # Name the new value **Level1Remove** . # Double-click the new **Level1Remove** to edit it, and enter the filename extensions you'd like to stop Outlook from blocking. Extensions should be typed in lower case, without the dots (.), and separated by semicolons (;). For example, type **js;mdb;vbs** to allow .js, .mdb, and .vbs attachments, respectfully. # Click Ok and then close the Registry Editor when you're done. # The next time you restart Outlook, you'll now be able to open previously-blocked attachments. (If an attachment is still blocked, you likely got the filename extension wrong.) Reference: "Force Outlook to allow EXE and MDB file attachments":http://www.annoyances.org/exec/show/article08-104 . Thank you Annoyances.org!