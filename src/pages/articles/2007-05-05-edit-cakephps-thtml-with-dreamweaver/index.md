---
path: "edit-cakephps-thtml-with-dreamweaver"
title: "Edit CakePHP's THML / CTP files with Dreamweaver"
description: "Get Dreamweaver to recognize CakePHP's code extension THTML and highlight it correctly."
tags: 
  - "CakePHP"
  - "PHP & CakePHP"
date: "2007-05-05T17:00:00.000Z"
draft: false
category: "test"
layout: "post"
---

bq. Note on July 15th, 2008: I haven't used dreamweaver for a long time, this article was written back in cake 1.1 days.I suggest "Text Mate":http://macromates.com/ for Mac OS X, and "E Text Editor":http://www.e-texteditor.com/ for Windows. !http://marcgrabanski.com/img/dreamweaver-thtml.gif! I needed Dreamweaver to recognize a new file extension called, "thtml" for "CakePHP":http://cakephp.org. Here is how I got Dreamweaver to recognize new code extensions and highlight them correctly: # Edit your \*Extensions.txt\* file: C:Documents and SettingsUserApplication DataMacromediaDreamweaver 8Configuration # Add in the new file extension into its type: HTM,HTML,HTA,HTC,XHTML, \*THTML:HTML Documents\* # Now Dreamweaver recognizes the new file types but to get code highlighting you need to edit your \*MMDocumentTypes.xml\* file: C:Program FilesMacromediaDreamweaver 8ConfigurationDocumentTypes # Add in the new file extension to \*HTML winfileextension\*. Here is the full article by Adobe: "Adobe: Changing and adding file extensions recognized by Dreamweaver":http://kb.adobe.com/selfservice/viewContent.do?externalId=tn_16410&sliceId=2