NYC Type Directors Club Lecture by Tim Brown
================================================

_Usual disclaimer for live blogging: These are informal notes taken by me, Dave Crossland, at the event, and may or may not be similar to what was said by the people who spoke on these topics. This is probably FULL of errors. What do you want for free? :) If something here is incorrect it is probably because I mistyped it or misunderstood, and if anyone wants corrections, just should tweet me – @davelab6 - or file an issue - or email me dave@lab6.com_

_Nothing here is the opinion of my employer._

2018-10-18

Intro from dcrossland
------------------------

Tim Brown is Adobe's "head of typography" and perhaps second only to David Berlow in his understanding of what Variable Fonts 'means' for typography. 

He's coined the term "flexible typesetting' for this, and written a medium length book about it published with A List Apart. 

Last week he came to NYC as part of his book tour, and I took extensive notes. 

Enjoy :) 

Links
-------

* <https://www.tdc.org>
* <https://abookapart.com/products/flexible-typesetting>
* <https://www.flexibletypesetting.com>

Tim’s Lecture
--------------

Thanks for having me at TDC :)

I wrote a book! Flexible Typesetting

I worked on this for 3 years, and been working on the ideas and thinking about the for 10 years. 

This is NOT transient stuff :)  This is the core nature of the craft and the way it is changing. 

I am a web designer. Nina is right, I'm coming into this as a web designer, I did study graphic design in school and got a job in college in a print shop - did a book binding class - and I learned web stuff on my own at the same time. I have been immersed in design a long time. 

I joined typekit, a startup to help people to use web fonts; I'm not head of typography at adobe. I work with adobe product teams, adobe's tools are powerful and complicated, and typography features are not yet consistent. I work to harmonize them, make them better, and even make new tools that I hardly understand and I am seeking to. 

I am excited about tonight as I want to explain the core ideas and then discuss with you all. We have print people, sensitive to fine printing, and web people. we all have experiences of reading online. NYC Subway photo of people reading Phones, tablets, kindles... We have laptops, laptop-tablet combos. Interactive screens on walls. Projectison. Brett Victor's Dynamic Land is projecting and you code by laying things out. Stuff watches what you do and reacts. It's a short hop to mixed reality gear, gimmicky now but will be ubiquitous. 

And people are reading differently. My dad comes to visit and takes my family out to Barnes & Noble. telling us about a book he read, I asked him, was is paper? He said he likes books, but he did read it in iBooks so he can bump up the font size. THat's his real preference. His dad used a magnifying glass. But he **can make the reading experience _fit him_**. 

People need their devices to be customizable. Images of kids, old people, teenagers, people with vision or motion impairment. There is a diversity of kinds of people who NEED that. They are all important and have things they need to do. Mess with settings and get things the way they like it. 

What is really cool is all the devices we have; opensignal.com has a 2015 android screen size graph; Things vary in resolution, aspect ratios, brightness varies. text engines. it's exponentially increasing set of things. this is going to get bigger and bigger, and the text you typeset today will live on. Not one person who uses all these, but everyone has a different way to read. Their reading experience, set up in a **very personal way** that matters to them. 

The same device can be held a different way; font size change; brightness differences. My light level is low to improve battery. iOS can be split screen, you can't assume full screen width is available. 

How to design one experience to fit everyone? 

For typography, my area of interest, we want to typeset a text like this (TNR) then we pick a family, set pt size, set line length, line height. Those are the essence of a text block. There are other details, but you massage those properties to get what you want. 

now comes a reader! messaging their friends. See the news, and may not read it. Or they turn on Reader Mode and see none of the styling you chose. Family, measure, line height, that Apple chose. People can opt out. Or just leave. 

What is really upsetting? THey do not blame us, the device; they blame themselves for being unable to read text at the given size. People will beat herself up about too small text, especially when they really care to read it. 

My book has a set of anti-patterns. I don't like to point out live bad examples, but you can see 3 words per line with huge margins in many sites on mobile today. 

How to design an experience that works everywhere for everyone? I see 3 principle: Relative, Multidimensional, Optional. 

The book dives into these, and this is just a SKETCH of me trying to understand what we are facing. 

I can explain how this is looking but broadly, I think this is the biggest change in graphic design history; what decisions are graphic designers making, and the impact these decisions have on readers, has never had such impact. We are figuring this out together as an industry, us here tonight even, are exploring this. 

I think you must measure your work RELATIVE to any given reader; you have to balance many dimensions; and you must recognise all suggestions we provide ARE optional, because of the nature of digital text, typography is less important than the data, the content, the text itself. How it looks, well, form LITERALLY follows function now. It may be good but we may lose something in that. 

As designers, we should talk more about the meaning that design decisions make. We have to work hard to make sure people opt in to that. 

So, here's a raw text block. We can size this relative to any given default pt size. So instead of sizing to px or pt, which is fine for some person, but if someone set their own default, it will be too big or too small. So, we size relatively to the default. It is specifying 16px or 16pt, or, typing 1em or 1rem or 100%. Those are RELATIVE units of measurement that relate your point size to what the reader has. That has implications for the rest of your work, but that is the first thing. 

Next, **measure limits.** How wide and how narrow can your text block get that is still acceptable to you? And you can make a 'responsive line height' so that if your line is longer then line-height is looser, short lines are tighter, and see it flex from those 2 things. 

So we talked about a typeface choice, a RELATIVE font size, measuring limits, and then TKTKTK

What if your typeface is not available? They maybe have a browser extension that rejects all font-family CSS. Or they are in a tunnel when they open the page. or they have a slow connection. You can set a fallback stack. Say Gotham, Open Sans, and Sans Serif. Laying the first choice and the second choice, you see how x height, cap heights, change. You can adjust the font-size to keep copyfitting closer, keep the x height the same, across the different families. So your layout remains similar across all font choices in the fallback. 

**Variable fonts as fallback are very interesting, as they offer a way to adjust to match the first family in the stack more closely.**

So, if we follow this approach, then we have the same user scenario, they open a news link from an IM, and their settings will mesh nicely with the typography and they will have a better reading experience. 

It is key to focus on the people who are reading. When you think about the implications of this, using the principles in your work, when you do that more broadly, it can get overwhelming. 

The compositional complexity can be a lot. You can know a lot about a reader's device. So I want to talk about that, and then the state of the craft today. What people are doing with that information. And how we typographers can participate. 

Take the 4 key things - Typeface, font size, measure and line height - and see them as this dot, all set as they like. With the things I talked about, it becomes a line. A range of acceptable values, and a stack of fallbacks .

Say we have these decisions about a text block, and its limits; users can still push that beyond its limits. What if we set a min width, but then a user has a viewport that is even more narrow? 

It is what I call **pressure**: something that makes for an uncomfortable reading experience, and we have to make affordances for that as designers. What can we do? Just let it happen, can be ok, if we are aware of that. We could reduce font-size, but relative font-size is important, so if you shrink text, you are getting away from the user's default size. 

You might do a little font-size and a little measure. You might switch to a condensed style within the typeface family. That can have mixed results. A List Apart study showed that Georgia Condensed was too condensed; but **Variable Fonts can provide a fix here. A VF is a big font file that has all styles with in; you can make the type a little more bold or a little more wider. If it has an optical size axis, that could make a small font-size more acceptable for users who are used to bigger sizes.** 

So, we can show the dot, the line, and a red triangle at the end of the range. But then we have a way to turn that red green, and make a new line for that pressured area, and the opposite pressured area on the other end of the line. 

And that is just one text box! Compositions are full of text boxes! :)

So you may need your dot to move within the range. Your heading may scale down in size but not too much, so its range is less wide; you stop scaling and allow it to wrap instead, at a different breakpoint to the paragraph text blocks. 

And you can relate these ranges. The heading can scale until it is too close to the other headers. As a typographer, you look at the sets of ranges and how they are composed and flex together. You set alignments between ranges. You think about overall white space; if you tighten up line-heights then you must address margins. 

If you have a large screen, you need graphic contrast to guide a reader around the page; but a small frame needs less graphic constant as the experience is more focused inherently. 

Viewport width is just one aspect; there is height, resolution, reader's distance from screen.... The "on fire" meme by KC Green, "this is fine," is familiar :) 

Chapter 5 is about whitespace management and Chapter 6 is about relieving the pressure that can be created. 

The whole book is reflexive, between small elements and big ones. 

So, Homework! You can buy it here tonight for $20, you can buy an eBook, I can arrange to get it to a library near you. 

With this information, this exponential complexity, presents 3 ways to respond: You can ignore it, get a team, or become a prodigy. 

You are choosing a route, and the default route is to ignore it. They don't accommodate all the users and all the devices that exist and are being used. 

if you have a team, is is not easy: It is very hard to articulate all the design decisions for all these situations. Designers making static mockups, and developers make them flex. Develerops may just decide the flex rules. 

And if you don't have a team, it can be hard to do it all. Some people can do it all; write HTML, CSS, JS, and they can code here and look there, and imagine how it all turns out, but code is where you are closest to the material of the flexible design space, but you can not SEE what you are doing. 

This reponsive line height demo (<http://viljamis.com/blog/2014/responsive-line-height>) is a big long piece of path, and there is no visualization of that as you write it. 

Design tools are TOTALLY inadequate for this work. I work for a company that makes mainstream design tools, and they are NOT GOOD ENOUGH. 

Design tools must let you make flexible decisions; some tools have flex tooling for containers, but the text suffers. 

Code is closest to the material, you say not 'when the paragraph is narrow,' you say, 'when the viewport'  - the only information you have - so even code is not close enough to the things you need. 

We need code and design tools to define that. 

It starts by talking about what we would like to see happen. 

We need to teach core concepts and new words; I am trying out NEW WORDS in my book. Teaching is key. Understanding core principles is more important than ever, because we can't count on the dimensions, the format of the work, a standard reading distance was established in paper medium. But everyone has a default font size. That is our rock. Everything else is a variable out from that. The principles I laid out, of good typesetting practices, is something that trickles up in a powerful way to the overall UX. That has to become core to how we teach and talk about graphic design. And this is not in classrooms; it is about teaching each other, putting out examples publicly and showing people. 

I participate in web standards, and think all designers can if they want to. This is how to improve the code. Jeff Veen says "web standards are built on rough consensus and running code." Jason Pamental is here, and has done work to talk with caniuse.com showing how to contribute there, showing features that are supported. That website shows what CSS works in what browsers. It is based on a community of people checking and contributing. Jason, you also tested and contributed to WebStandards.org via their Github. Dynamic line spacing is a way of setting line height rules to be be even more responsive. We can get browser makers to change these tools. 

People who make design software are listening, and so are type designers. 

All designers can talk to tool makers and make their own tools. 

We must figure out what we want to be different about the way we are working, and make examples, and show them to each other. 

Jason Pamental: we have a voice. we can talk to browser makers and web standards people about what is important in type and typography. If you speak up and say a point, those people are very receptive. In the last few years, what we can do on the web has grown so much, because of those conversations. designers may not be used to that, but developers are, and we must adopt that if we want to have a voice in the way this stuff works. 

Thank you! 

And design tool makers are listening. I work at ADobe but it is a big company, and its hard to know what they all do. I try to get their attention, and I sense this big shift to get their attention. I got it! I am talking to a lot of people who are EAGER to hear from me, and the community; their user forums for feature requests are filled with ideas on this. 

Finally, I want to talk more about what I am doing at adobe. I am working to bring more consistency to the tools we offer, and I hope to make all the tools contribute to decision making in a natural way. So you don't need code or a team to make stuff that fits everyone. 

I am working at finer typesetting tools, generally. There's a broad strokes approach too. A paragraph can be tighter or looser, and there's many variables in that. Cyrus Highsmith has a fantastic book about balance in text, where he talks about 'tempo' - you tighten up ALL the whitespace, to make a narrow paragraph have a faster tempo, anda wider one to be slower. What if we have a slider for 'tempo' which is broader, and we can drill down to the details if we want to, but make our work easier. More comfortable terms. 

You should be able to handle many details in a way that works for you, personalize it, so it's not the same default for everyone. You can set your preference. 

There is "Adobe Sensei" which is our brand for machine learning, and those folks have good ideas; to not make AI like Clippy, but to make it useful, tactful, and that stuff can personalize experiences more, and for designers to QUICKLY get a different look and feel, and remix our own work. To take things broadly in different directions. 

I also think about enabling designers to make their own tools. Patrick Hebron is thinking about what machine learning can do, for designers to enable them to make their own design tools. 

**Variable Fonts - sorry I am talking about that a lot without fully unpacking it - but you can have Width or Weight, its standard, but ANY axis is possible; a splatter axis? A slider for all features of a crazy font? It's a lot of sliders. How to manage the creativity baked into that font? Should the type designer be able to suggest what kind of control to use? And should the user be able to set their preferences for how to control axes?**

There are palettes today that you can arrange and personalize. I want to move in that direction. 

So, summing up, we have **power to share reading experiences.** This is a time in history where we can decide what it is to practice typography. What it is to design. This is a core piece of what digital design is, and it makes a huge different in people's lives. So I am happy to be here tonight to figure it out together in this moment with you :)

Thank you!

(Applause)

Questions
----------

So, I'm happy to go back to slides, and talk about any typographic tools;your frustrations with adobe software, that's fine, and accessibility. Handling so many conditions that people bring. What tools do you use? When you approach designing a digital experience, where do you begin?  My process starts with text, then applies a font, then the situation starts out very rough, very simple, and you grow outwards from there. That is how I start. But I know others do their own. I sketch on paper an abstract design, and develop towards that. 

Jason Pamental: I hope you can talk about your idea of 'contrast' and what elements on the page should react to? 

Sure. So, Chapters 5 and 6 slide. See a big display area, a hero heading, and text below that. Say this page gets more narrow. What can you do here? The word will start to get crunched. We can scale this down. But we don't want to scale the body text; we want to wrap and reflow the textbox there. Are the whitespaces below in the margins too big for those in the hero area? That's contrast as I think of it. 

Here's the book on Apple iBooks. Chapter 5, changing font size. "Recognize hierarchy." When you have a 'roomy' experience, say you have a laptop layout, with a page with headline, subhead, text, nav sidebar... You need variety in the heading sizes, you need some things BIG to help a reader navigate. But on your phone it's jarring to have big text so much bigger. As you scroll, the room, the margins, the line spacing, can be very unbalanced. you need to reduce it. and make it happen gradually. You must manage that contrast as the whole composition flexes. What design tools lack is, see from the perspective of all these contexts, what your questions are. When you set a hero, it isn't just the screen in front of you, but all the screens that can exist to render it. 

Say you have Apple Glasses in 5 years, 10 years, with an A.R. experience that projects into your eye. You work at a computer, and you are setting type, what if you can look up and see that same typesetting in many conditions, glance at how that ripples out to many things. maybe no need for such an immersive experience. Just a way to show you the way design layout contrast appears in different page sizes. 

If you sit down tomorrow to make something, can you take an experience and see how to make it flex, what should you do? 

In one exercise in the book, I say, take any page, write down issues, pick another responsive view in the web inspector tool, and write down the new issues. 

Nina S: I am reminded of making a typeface in a design space with a similar issue, what do you look at when evaluating your decisions; you weight common experiences, and look at design space corners, but when will you see the limitless thing you've built? When is it done?

Great question. 2 ways to handle that. One is to create statistics, readers you have, find out what viewport widths they have, and prioritize them. And the other thing is a philosophy; fallback fonts and fallback typesetting, well, VERY few people design their backups well. 

Jason: You are the only other one that I've met :)

haha sure, but Ray was telling me earlier, you said you have a stat for people who visit with JS turned off.... until it loads? Fonts are FILES that are LOADED; no one has the intended font that you have specified installed locally, they need to wait for it to download, and it might never arrive. So you can prioritise the defaults more. I can say, for type, the RIBBI styles are defaults. Maybe a more expressive face, is more obvious how to use. 

Mike: I teach typography at the introductory and intermediate level. I think this should be a primary source. Your book just came out. But you were thinking about this for a while. Do you know any curricula?

Thanks for suggesting that; I was writing this with the goal of making it a class textbook. I am speaking in the coming weeks at some campuses. Type Thursday, Thomas is here, they teach and he QUICKLY read the book and said this is great and what I teach. He is a smart guy and I was pleased to hear it. 

Jason: Laura Franz (?) have classes in web typography. 

Mike: As a follow up, I want people to not teach typography then interactive, I think it should be built in right from the beginning. 

Jason: I wouldn't argue with that. 

Tim: So, this is not an add on, right, its rethinking the core stuff, rewriting it, riffing on what we always have been doing. The angle I've presented it, the angle of accessibility and the human experience, is critical. Pro Designers do not think about the human factor enough, they do what is 'good' and that is good, having taste is important, and making things that are formally pleasing, but I want to have information available to people in the way people need it. Digital design in general needs to be reorientated to accessibility across the board. I had lunch with friends today and this came up, UX Design and Interaction Design, they are interested, but Web Design is confusing. They say "we don't want CSS, we want to be visual people and use a design tool." But web is an accessible medium that works for people by default, and that stops happening when designers break it. Adobe folks like to focus on app design, because they can control it. Adobe had an internal summit, and 1 of 3 days was dedicated to accessibility. The head of accessibility brought people on stage to show how important it is. We thought about that in terms of making our tools accessible. But users need access too, and the web model is key to that. 

Nina: There are a few books you can buy here tonight, and Tim will sign if you wish :) 
