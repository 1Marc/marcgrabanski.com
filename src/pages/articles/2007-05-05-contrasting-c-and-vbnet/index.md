---
path: "contrasting-c-and-vbnet"
title: "Contrasting C# and VB.NET"
description: "You have to use either VB.NET or C# when programming with the Microsoft ASP.NET framework, hopefully I can help you make that choice."
tags: 
  - "ASP NET"
  - "The Basics"
date: "2007-05-05T17:00:00.000Z"
draft: false
category: "test"
layout: "post"
---

![](http://marcgrabanski.com/img/MicrosoftASPNET.gif)
If you ever program in the Microsoft ASP.NET framework, you have to choose whether to program in VB.NET or C#. Recently I've had to work on a project where the client wanted a website in VB.NET because that is what their programmers knew how to maintain. Needless to say 
-my experience with VB.NET has been painful, yet my experience with C# went just fine
-. What was the difference? 
-The community, answers and examples I found were all using C#
- . I couldn't find the proper VB.NET code or answer any time I looked. I ended up going line by line translating VB.NET to C# to figure out how to make it work. Jeff Atwood summed up my feelings with this excerpt from his article, [C# and the Compilation Tax](http://www.codinghorror.com/blog/archives/000860.html) :
> Most of the community has settled on C# as the de-facto standard, so you're in for a rough slog of code translation if you want to stick with VB and cleanly integrate commonly available source code libraries into your codebase. And if you want to understand the code you're absorbing into your application (note: this isn't really optional in my experience), you better learn how to read it without a bunch of mental translation gymnastics. And once you've learned how to read and write the language well enough to integrate it, you've come full circle. Like me, you'll be left wondering why you didn't just cut out the translation penalty entirely and stick with one language in the first place.
He points out *exactly* my frustration with VB.NET. The bulk of the community has settled on C# and 
-if you want to do anything complex in VB.NET be prepared to translate C# code over to VB
- . So the moral of the story is stick with what people use the most - C#.