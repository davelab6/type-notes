# FontStand 2019

Usual disclaimer for live blogging: 
These are informal notes taken by me, Dave Crossland, at the event, and may or may not be similar to what was said by the people who spoke on these topics. 
This is probably FULL of errors. 
What do you want for free? :) 
If something here is incorrect it is probably because I mistyped it or misunderstood, and if anyone wants corrections, just should tweet me – [@davelab6](https://twitter.com/davelab6) - or [file an issue](https://github.com/davelab6/type-notes/issues) - or email me <dave@lab6.com>

People sometimes ask me why I take these notes.
The real reason is simply personal:
I would like to pay attention to 10 hours of lectures about type, that is indeed something the executive function of my mind wants to do.
But I acutually find it quite difficult to actually carry this task out, to just sit there and pay attention.
But if I focus my mind on listening to the lecture and writing down what is being said, I enter a kind of hypnosis where I can pay attention much longer.
You'll see that this doesn't work forever, and the notes become more disjointed later in the day.

But, having taken them, I am happy to publish them in in their raw form, full of errors and omissions.
If you weren't there, maybe this warped glimpse is still useful.
The web was made for sharing, afterall. 
And while these notes are not an accurate record of the lecture contents, useless for scholars, still they may be useful for dilettantes like myself :)

Photos to go with these notes are available here:

<https://photos.app.goo.gl/XJuCSfy8PogZihmP9>

## David Jonathan Ross / DJR / Two, Four, Six, Eight… Everyone Interpolate

Our letters are math. Its our raw material. Craft and modernism is about truth in materials. 

And currently we are looking at interpolation; we can do math on the math that is the letters, to morph it wider, bolder, etc. 

This is the formula to linearly interpolate 2 numbers. Especially 9am on Saturday :)  

But 50% between 10 and 20 is easy, 15, to arrive at with the formula. 

So when we interpolate letterforms, it is just doing that for all points on the outline. 

3 requirements; same start point, same direction, and same point structure. 

WHen you have more than 2 outlines, its all more complex. Bilinear interpolation leads to areas of influence.

lettersvsmath.tumblr.com from urtd has images of how little math cares about our letters. 

Interpolation used to be a behind the scenes production technique. Used to be true. 

I used to Superpolator, since 2004, and new Skateboard, to see how things changes across interpolation axes, and spit out instances. 

But recently interpolation has stepped forward on to the stage. 

My instagram is full of stuff like this!

Graphic designers now have to deal with the problems of interpolation ;) This will change how we thikn about families in general. 

Thus my talk title: 2, 4, 6, 8, everyone interpolate :) 

Or, in Portuguese, ... :) 

So, OTVar brings all the variants of the past fonts into 1 file: 'single file, many styles' 

If you haven't tried a VF before, do it. They are on FontStand - oe of the first distributors to offer them - and there's a search term for that. 

THey reintroduced the concept of interpolation to font users. 

Here's my Condor from 2010. But inside the seamless field of letterforms, there's a strucutre. Its like a big top tent at the circus - the poles and the tent canvas, held up with math. 

The idea that you can interpolate inside my fonts is a little scary for me, having YOU coming into MY tent. Its MY tent! 

I've used interpolation for years, but I've looked at the results and been able to tweak them. This feels like you seeing me in my underwear (not pictured ;) which is kind of uncomfortable. 

Here's Trilby, one of my first typefaces. Reverse Contrast Slab Serif. As the S gets bolder, I run out of space, so I decided to break the alignment of the up slab serif, like you see in "LS", in the Bold.

But interpolation is another word for compromise. The little gap in the Bold is actually key to the design, and the raw interpolation has a middling gap.

Gimlet between Light and ExtraBold has a nicely interpolated medium. 

Output has a hairline and is monolinear but the ExtraBold adds contrast as you run out of room. So the middle is a meh with a little contrast that looks not-good. So then I redrawn my own middle master. That is more monolinear. 

Turnip, the regular and italic are not sharing a central structure. They can't interpolate. 

So, type designers vary, and designspaces should too. The work that goes into a VF can't be counted in the number of glyphs, or styles, or axes. 

If I use interpolation to save filesize, then VF provides incentives; the grain of the material suggests clean, big, fluid design spaces; so the Micro Bold Italic has small caps, all matchy matchy. Here's a very orderly library. 

But here's a less orderly book store. What if I want to walk around Porto instead of Midtown Manhattan?

Matthew Carter (?) has this phrase, a typeface is a beautiful collection of letters, not a collection of beautiful fonts. Is a VF a collection of fonts?

Room poll! Is the system is a beautiful collection of fonts? Or a collection of beautiful fonts? Well, 90% didn't participate. 

I don't know! This is a big questions as VFs become more widespread and mainstream; how much should every font.

The way roman and italic came togethr, or the way sams and serif with van Krimpen, and then Frutiger's Univers, and then Font Bureau's FB Titling Gothic - a very large family system, that users can do what they want with. FB was my first 

Indra Kupferschmid presented at RoboThon 2018 about "Boring Fonts" and Georg Trump's Schadow was designed from 1937 to 1952. It evolved over time, and the family didn't stay too consistent over that long time. The 'g' tail and the 'Q' tail changed. The family has a refreshing difference; the numerals differ a lot in many details, but they are all part of a family. It is almost like a real family (photo of me with mine as a kid). So when I made Gimlet, a revival of Schadow, then I took away that variety in favour of the system. Here's my specimen page on TypeNetwork. Is this really a family? Or is it more a clone army?

I tried to keep this quirkieness, but make it systematic. I want it to be responsive, to use the width axis in the typography, responding to screen size. This is powerful. You can take headlines and better fit them. You can smooth out justification. 

Can a type family be BOTH a beautiful collection of fonts and a collection of beautiful fonts?

How to make these systems and add some interesting details?

I stopped drawing strategic corners, and making VFs that feel more planned or sterile. Instead, I draw things I like and use FEATURE VARIATIONS to do that. Break points in a fluid design space to interrupt it. 

Condor's dollar sign has this, you see the bar goes all the way through for the thin and wide styles. I am looking forward to seeing where that happens. 

Bild Widths, I have the "Ty" tucked in with kerning the y under the bar of the T in narrower styles, and an 'untucked' version for wider styles. So I made both versions and use feature variation to swap them out.
The word "Millions" in the narrow and the wide have different i/l alignments. And I did NOT want the compromised position. So I used feature variation. This is subtle.

Roslindale Variable Italic has both an Italic axis and a Slant axis. So there's 4 corners to that: The first thing to go from Roman to Italic is descending outstrokes, then X, then full cursive forms. And both R nd I can be slanted. 

Pappardelle Party uses GSUB and CPAL rules to make the colors change as you type. 

What can help? Even more math. Underware are using "HOI" to make self writing fonts. Here's the famous Biang Biang hanzi glyph, the most complex one, for a kind of noodles, that my old boss David Berlow proposed to Underware to prove their technology could work. 

How can design be both responses and ...?

James Edmonson tweeted in 2018-02-18 "EVERYONE FALL IN LINE" showing corporate logos become more homogenously sans low contrast.

For me, how to count a typeface is boiling down to how much time I spend looking at it and putting love into it to develop it. 

Interpolation helps me spread things out, and make my work more boring and also more interesting.

I look to make things as specific as possible, and as flexibile as possible. 

Thanks! 

Peter: Good to see this. How much do you think the technology determines things? 

DJR: Well, a font is a product. ...

## Ilya Ruderman - Short Talk - Type.Today Latest Release

Hi guys, I'm founder of CSTM and a font store called type.today. I have 5 mins to talk about the latest release by a great man, Alexander Tarbeev, who introduced me and his students to type design and to Type media, the best way to learn type design I believe.

He released Gauge with 5 subfamilies - caption, text, head, display and letterpress - and it was named originally 'Arficia Serif' by a big publishing house in 2005.

So, I wanted to highlight this release today :)

Type.Today has an instagram account. This was an interesting project, we invite young designers to run the account for 1 month, and we don't know what they will do each day. 

We will also open another store. Type.Today started as a joke, so the new store is about Type Tomorrow, for experimental fonts.

We will also publish the CSTM custom fonts. It will come online later this year.

Thanks again for organizing another great conference!

## Veronika Burian / TypeTogether / It’s not all rosy…

I wanted to share the economic, technical and design challenges that we face today. I have no claims to answers, but I want to raise some questions. 

I founded TypeTogether with Jose Scaglione, and we are now quite a mixed global core team. We come together once a year, this year it was in Italy. We have a lot of fun together. 

But we do serious work too. We started with Editorial Fonts. We made type systems and not so much individual fonts. 

We are more and more into multi script projects. 

I want to talk about a structured talk, in 3 categories: Economy, design, and tech. 

Running a foundry means thinking about business principles. what is the cost of commercialization that is beyond the hours spent drawing?

Licensing has become more complex lately. There are many licenses now, many pricing structures. Users rarely understand the intricacies. They are way too many differences in terms between foundries, no clear standards, so it is hard for users to compare. What does a license cost here, or there? And really compare?

Some clients get very upset with this stuff. A priest was told to handle font licensing, and after months of asking, "I can not quite grasp what is going on with our administration. I dream of the Saint Michael with the fire sword." And there are more and more kinds of uses, new technologies. There are new distribution models; FontStand and DJR FOTMC. 

For us as an indie foundry, we can look to users needs directly. I want to price appropriately.

There are new models: Short term rent, subscription, and free testing before buying. How to prevent piracy? More and more I believe in trust and not preventing. 

With the rest of society, there's not one way to do things. That is true in the type business. 

There is increased competition. 

That brings more visibility to type in the public eye, but also price wars. There are many cheap font bundles, and the low price expectation is created in user minds that fonts are cheap, nothing, you can get one for 5 Euros. That underpins the value of type and its making.

Schools and Universities do not help; many type classes were cut. 

And of course there are new free fonts (Google Fonts and DaFonts) so users do not have to pay, and the users have to understand what is a good, excellent, font.

Then I looked at MyFonts, and many of the new fonts are very quirky, idiosyncratic, and attention grabbing. 

At TT we believe in high quality, and educating users, and a very high quality and fast customer support - which is me :)

And Human value is key. Much of the work that happens today is about collaboration. The time for big egos is over! :)

We presented the way we work collaboratively in our team at ATypI. This requires mutual respect and many discussions.

Society and its habits change. Consumer behavour has a large effect. Ther is a shift from paper to digital, but there is a hybrid environment. Studies show people show medium to lond texts to be read on paper. Informative, heavy, complex texts. But other content, the quick information, vernacular stuff, is more and more consumed digitally. 

Portada was made as a custom type for an Argentine newspaper that evolved into a serif face for reading. This was my reaction for sans serifs. We made a sizzle reel for this family.

Protypo was made for information design, down to earth applicatoins. It was made using Multiple Master technology from the start, and we made it into a variable font. But VF is sensitive and finicky in terms of design. We made a protipo.type-together.com digital specimen website for it, that uses real twitter trending data. 

How do we get burned? Is there enough demand for all of us?

A lot of our team is buidling content and adding extra value, telling stories that build emotional connections. Going beyond the base business of type design. 

We want to educate, inform, and bring something to our users that is extra. Another level of experience. And convey who is behind the works. Create another perception of quality. 

One of our goals is to have global reach, so we began doing 3 multi script projects. We stay with our Editorial Design with a View to Digital Applications. For eastern markets, it is more important than anywhere. 

Adelle Sans Arabic, by Azza. Devangari by Erin M, Vaibhav, Pooja. 

We were lucky to work with Sandoll. We worked with a different culture, and we were very happy with that. 

Now, many millinia ago, there were various kinds of humans, and telling stories, concepts, things that are not really there; a kind of gossip. That is what massively advanced homo sapiens, and the cognitive revolution conitnues today. 

Tech is a huge driving force for society and type design. We should embrace the new, definitely. But with an eye to Science Fiction movies, like LCARS in Star Trek TNG movie from 1987, the imagery of SF effects our imagination. They had no budget for the buttons of the 1960s, so they took a film and put a glass pane over it. This shiny touch screen remains today; here's WestWorld from 2016. 

Future technology will produce a hybrid information environment, with text and other information inputs. Morphing, distorting...

Umprum student experiments

Amsterdan Station will have a motion design exhibition with VF used centrally

Quentin is an upcoming VF-only face. Needed a lot of masters.

We should look at our environment, and see if we can think outside the box.

Type won't change the world but it will make for a better future!

Thanks

## Hyewon Han / Sandoll Communications / Hangul, Designing Companionship with Neighbor Scripts

Which Latin fonts are used in Korea? Helv, din, futura, noto, Gotham. Arial, Garamond, tnr, myriad, gill, bodoni. Powerlaw distribution.

Accessibility if fonts is important to korean users. Sandoll NeoGothic1 was released in 1995. Gill Sans and hekvetica were most popular matches. We made a new Latin, with high x height, not too wide as NeoGothic1 is a little narrow, with a humanist touch, and chose Guardian Sans to start as a base.

Scaled 103%, lowered baseline by 25 units, changed side bearings, and changed some terminals to be more perpendicular to the strokes especially in Latin numerals.

Users liked it as a "real" Neo Latin, but others wanted a more neutral font. This changed over time. We polled users on how to match scripts.

Hyundai Card Youandi, was too direct in translation. Sandoll changed the design to be more authentic.

Q: how many people will be working on a hangul?

A: 3-4 for h+Latin

## Johannes Breyer & Fabian Harb / Dinamo / Dinamo Dark Room

Gustavo Ferreira showed us scripting RF extensions istead of having 63 fontlab files. We had treatments and OT feature alts. And now VF experiments.

18 months ago we asekd what is VF. Tried to understand it. Weight, proportion to mono. And the glitch suorises were nice. "Body of us" blobby type. A bubble font using overlapping contours. We look for these glitch moments as inspiration. A growing underline udner each letter. TDers must teach graphic designers to use VF. We released the  prop to mono. We have a playful one which let's letters on top of each other.

We found a sample of an early grotesque with big ink traps and High contrast. But now we allow users to choose the inktrap size. "Whyte". (Great photo of Pope and DISHELVELLED actor)

So, tooling, (new guy :) we wanted to make new in-house tools. DinamoDarkroom is where we publish our tools. The gauntlet is a old hardocre game. Reveals weaknesses. We wanted to animate out VF quickly, drop a font and animate it on the fly. Now it's a large thing.

Drag in Whyte VarFont. Size tracking leading is there. Para alignment. Sample texts. Random Wikipedia text. Glyph table like a font editor. look at vertical metrics.

Then a list of Sliders for axes. Reset. Animate all at once. Speed, easing.

We use that to proof everything, as it's so much. We want all areas of our Design space to look good.

There's an instancer. Snapshot current state

And we added dark mode :)

And there's a Mac desktop version.

We see web is first, before operating systems, so we could also make this quickly on the web.

(back to main guy) So finally some questions we want to discuss with you :)

Q Peter bilak: how far are we into VF? Early or late? For font makers and users? I find that exciting

A: files are there. Mostly graphic designer nerd to be taught how to use them in corp identity and then they will buy them.

## Short Talk - Jeremie Hornus - Black Foundry

Jeremie: We did the Renault Read project. Sometimes up to 15 people working at once, on 10 writing systems, pictograms too. Sketched them all together. Used for text sizes by the renault brands.

## Rui Abreu / R-Typography / Type Garments

PB: Fontstand has 4 foundries, the most of any country. R-Typography is well established for text and display type.

R: since 2008 in Lisbon. Last year became a company. I recently made Grifo and Gliko Modern. Grifo first released by Magazines, as intended. High contrast, sharp serifs. A 1950s car was called that, for it's power and speed. Also reminded me of Francesco Griffo, famous punch cutter. It's cut not drawn but that's the only connection.

Catacumba was a font I made in 2008 and remade it and it became oversimplified and cleaned so much to be a new thing. Grifito is event higher contrast. I was radical about what to keep and throw away.

I killed the exit serif on a. Then d and u. That made the line fitting tighter.

Didot Roman, very vertical. I made it flatter.

The super high contrast is nice in text. But not body sizes. So I made the optical size. The middle was interpoled. L, s, m. The idea of clothier is a simile others have used. Frutiger, Emil Ruder.

So I like the idea of off peg clothing sizes. Make that understandable.

It came out in 2016 when VF was announced. But I named the families to allow them to live on their own.

And then when it was all over, I remade it again, as a modern. The k is special, so I literally put it in the name.

Hairline bottom serifs and top heavy serifs is unusual.  I softened the counters so they feel carved from ice cream, not punched from metal.

Caps proportions also became more similar. Lowercase is more oldstyle. The sharp a and e tails are nice, an n idea seen in the Trinite & Lexicon book, where de Doos describes their production. He says to treat the aperture as the counter. a and e are so frequently used.

The italic is a bit 70s, 5 weights with italics in 3 sizes is 30 styles. For me it was a new thing to delegate the design.

Finally, the family name is the garment on the garment. I was told to make names of your Typefaces different, but these ar similar. But they are different for different occasions. Like outfits. Thanks!

## Paul Barnes - Short talk: Commercial Classics

PB: out soon ;) this is hipster Design 183 years ago.  Punches from 1836, the world's first rounded typeface. It has timeless value. CC will launch soon with such faces.

## Maria Doreuli / Contrast Foundry / It Is Good to Forget What You’ve Learned

Are there Typefaces that are easy to make? Handwiriring? Modular? Very simple forms? Do these have something in common? All display type.

There's a common idea to become a good type designer you should do a text type. I made a ball and stick Typeface first. It has weights.

Then I did William Caslon, a serious text face. Started from low res image from Microsoft. But it was less original.

Then chimera. The stems are all different and yes it's fine. It adds character and the serifs too are all a little bit different. They see like Dutch clogs ;) my main strategy was to start with as much inconsistency as possible and slowly calm down.

So why do we hear that display type is so easy to design? I hear it a lot in Russia. But it's a like a typographic racism!

And in history, slab serif vs Clarendon, there was such discussion. And ionic emerged. Perhaps display type slab Egyptian faces were the first time display type influenced serious text type?

Last week @typographica tweeted about how so many reverse contrast things are made.

I made a much lighter weight, that is more calm, and more useful for long text. But going from a tame text design is maybe harder.

I find it fascinating how text and display designs can influence each other.

So used William Italic v w q u z, and caps.

So I like to start with a crazy design. Then slowly calm it down. Sun Helen  and I made this and then we added more counters. Then looked at Cyrillic. O and I combined. How to do? I tried many things. The idea is not about details. Combining different forms together. It's about the dna of the Typeface. I want to try to advance new solutions for existing forms. Which is always a challenge. But it makes sense for the whole design. So I designed this form, then I saw other people using it. I see 2 examples. I like to see my inventions living outside of my design.

Do not underestimate display Typefaces!

They are more attention grabbing and this feels more exciting for users.

Sketch first! Sketching on paper gives freedom. No struggle with beziers or Applications.

Messy is good! Leave perfection for later.

Don't be a ruler maniac! Train your eyes. I think more and more designers use Copy and Paste and reuse the same shape.

Try doing things the other way around!

And don't believe me ;) draw, experiment, go nuts, and design different Typefaces! :)

Thanks!

## Matteo Bologna - Mucca Typo - Short Talk

MB: Worldwide there are about 200 type graduates per year now.

## Erik van Blokland / LettError Type / Designspaces

Gerrit Noordzji taught at the KABK, here's a photo of him as a young man teaching and here's him recently. He stopped teaching in 1990.

Does anyone here NOT know the Noordzji Cube? It was a big part of the course. I sketched them myself as a student. 

In 1971, he wrote a STRANGE essay about classifying typefaces. Instead of starting from year 0 and then saying this was made then this and then this... He said, look at the tools, and this was made with this pen and that was made with that pen. The University of Amsterdam now owns his archive.

There's his notebook; he outlines how to teach type design, starting with writing with tools, then contrast, propotions... This is the oldest place he sketches type with parameters. Expansion contrast parameter from the pointed pen, the Bodoni Didot types. Then his VERY characteristic sketching method, translated ziggy zaggies for thick stems. 

Then in 1973, an ATYPI book series comes along, inspirational! Its full of articles about type stuff, great stuff. Then GN makes this book, a guide to teaching type design. There's this pencil drawing. Up red is incrased contast and down blue is decreased. Then 2 cols, for expansion and translation. 

In 1982, the KABK has a party, it existed for 300  years, and they asked him to make a little booklet of his ideas. Robin Kinross said it was not written very well, but it has these pages. Drawn by his then students, including my older wiser brother Petr. 

He sent them to Hamburg, to Peter Karow at URW. He told them to get the kids working, and this was one of the first things that came out of it. Petr took Ikarus and its interpolation, on HUGE vax computers, paper tapes, and produced these two 5x5 grids. 

Gerrit said "these two can not mix, but its good to think about them." You see the first has Times to Gill Sans, and the second Bodoni to Helvetica. 

Here's stuff from Petr's archives, the Ikarus drawing blueprints that were scanned and digitized. 

Then in 1985, the cover has the cube of 5x5x5 'e' as an 80 page book. 

In 1986-05, GN was editor of a newsletter alledgedly published by ATYPI called "LetterLetter" which was really his editorial voice alone. He says, this is the mental method to think about contrast. 

In 1991, with Petr's archive, we found some letter from Gerrit to Petr, and how he realised how much work it was to digitize his theory, and how he wants to use this as an educational tool. 

In 1991 RIDT published a digital typography journal with a piece by GN. This is a new cube, he made in Adobe Illustrator. That's the image used on the many translations of "The Stroke".

Then in 2001, here's a blackboard of GN teaching, and here's Artur Schmal with a physical model of it. 

In 2003, I was teaching Type & Media, and we looked at mathematical respresentations of glyphs. ARound that time I started Superpolator, and Just van Rossum made the Noordzji Cube app. 

In 2005, the Hyphen Press edition of the book was made. It has the 1991 versoion on the cover. 

In 2015-07-13 `@jakob_runge` posted a tweet of the 'a' from DIN on the cube. 

Here's a 2013-12 japanese designer who made 7 masters. 

Here's an animation that Just made for Petr. 

in 2016-07-07 Toshi Omagari made a prank rubik's cube with the 5x5x5 face pieces. 

A student made this Marvel comic photoshopped with the cube :)

DJR made these 3D cubes with the middle left out, only the surface 'e's. 

A T]M student made this one with many scripts - it doesn't interpolate :)

In 2016, California, MS, Adobe, Google, Apple started talking about Variable Fonts. Many people lay claim to this, but I saw it coming from Behdad. He thought this was the right time to make it work.

He made convincing code and convincing examples, and got these companies to make VF happen. 

I didn't want to miss the early meetings, I managed to talk my way into a meeting held at Adobe, and how type is no longer a fixed point; we are talking about a place to start and then degrees of change. 

And then whiteboards from discussions at Google, and Microsoft. 

When Mike Reed started sketching this for Apple, what became TrueType GX Variations model, in 1991? 1992? Perhaps he had seen METAFONT and NOT the Noordzji cube. 

But now we are all talking about cubes. And type designers from KABK understand this :)

Here's the first prototype of VF, running on Behdad's laptop.

In 2018, I thought, how about a real cube? I made a drawbot script to drive a laser cutter to cut a wood board. I made a jig, and soldered and I used the counterform 'waste' to build it :) 

And the stuff in the middle didn't really make sense

I wondered if I could use the drwabot output to match the 1991 cover design. We had the TIFF file but not the original vectors. 

I tried to overlay them, and you see they do not match. I get the 1987 and the 1991 one, and the first was made with perspective. But the 1991 one is made in Adobe Illustrator - rotated, skewed, but not scaled to perspective :) I had always known they were a little different, but never known exactly what. So Just got on the case and on 2019-01-19 he tweeted the GIF of the result :) Left, my original drawbot, middle the original, and right, the perspective corrected one. 

But it not quite a match! I tried to ask him all the details, but in the end he just says he likes mine very much :) 

2019-03 Just tweeted the T&M thing

And in 2019, there is a new edition, available from the KABK library in cash or from www.typotheque.com/books

Thanks!

Q Catherine Dixon: What does GN make of all this?

EvB: He is happy for me to be working on it, but he is now well retired :)

## Soohyun Park - Sandoll - Short Talk 

Today I would like to show you our new font, Life Plus. Competition brings out new work, but collaboration is more powerful, and I'm happy to see the industry collaboration at this event. Happy clients make great collaborators. 

## Miguel Reyes / Commercial Type / The Similitudes of Designing Screen and Newspaper type

So, nothing new, but something we don't talk about. 

I use newspaper type in my talk title as its seens as the most difficult text type scenarios of small sizes. But its small sizes in print, not just newspapers. 

Type technologies always leave their impression on the type itself - from letterpress to screen native :) 

Remember how machine set metal could not accomodate overhanding 'f'? Here's Imperial, by Edwin Shaar, 1954. But that limitation has some traces. 

Phototypesetting technology made kerning easy, but was not good at sharp corners. We had doughy Shapes. Here's ITC Garamond, Tony Stan, 1975.

And now we get sharp corners with digital type, like my Ayer Poster. 

Newspaper text faces were initially shaped by tech limitations; awful paper that absorbs and bleeds ink. Presses are run super fast. This meant type had to be designed. Te first was an 8pt Brevier by Caslon, 1861. Here's a history in a slide, from Ionic Number 5 to Guardian Serif. 

What are the canonical features? 

Here's Brunel, by Paul Barnes, 2007, based on John Drury's type from 1796. This is a homage to the English Moderns. 

Ionic #5 has the same features, by Linotype in early 20th Century, also working after many British foundries' faces. 

But there are many details shared. 

Imperial, Intertype, 1954, was used by MANY newspapers. This was the style until the mid 1980s, when we saw Swift by Unger in 1985. 

This is what makes it work, the same principles but different forms. 

Tobias did Poynter Text Oldstyle in a simmilar way in 1998. Matthew Carter did News Miller also in that year. Here's a comparision of his Miller and another. 

And here's my bosses' exmaple, Guardian Egyptian Text, by Commercial Type, 2005. Over 10 years ago. The origin story is, Paul and Christian were invited to redesign it, and the newspaper wanted it for titles. But the face was used for body, and they liked it. They did some refinements to make it work better. But the client liked it feeling newer and with a fresh voice, and made the paper feel more contemporary. 

Web fonts were not yet supported, so the type was only done for print. But as they arrived, adapting the fonts to the web was straightforward, because the principles were there for working well at small sizes, even without hinting. I was chatting to Noe Blanco about hinting yesterday :) 

I think that type designers can be naive that a typeface made for paper will always work on screen thanks to hinting. There are design decisoins to make small size text work well on screen. Hinting is not a magic bullet. 

Drawing type for a screen is not so different to drawing type for print. 

Here's a classic example, Miller Text from Carter & Cone/Font Bureau in 1994, and then Georgia from Carter & Cone for Microsoft in 1996. It has similar features. Then Corona, Georgia and Guardian. Again, these have similar principeles, even though the forms differ more. 

Again Matthew did Bell Centennial in 1976, for print, and Verdana, in 1996. 

Now! Gigantic Sans. 

Where does Arial come from?

Well, Microsoft wanted a cheaper version of Helvetica. Its very similar. And it became the default sans font for many years. It was hinted, but it does not work as well on screen as Verdana. 

Open Shapes Are More Readable On Screen. 

Yandex is the most popular search engine in Russia. In 2015, we were asked to make a typeface for them. They used Textbook New by Chaeva. It is charming, a little old fashioned. 

They wanted to match Arial's metrics, and we did 2 concepts, Christian art directing and Ilya Ruderman on Cyrillic and me on Latin. They compared both designs. Yandex Sans Round was the winner. But the terminals were too sharp, so we softened them. The arial metrics match was approximate too. 

They adopted it in mock ups to many many situations; from small phones to billboards. We take decisions to make something work, but we can not always articulate those decisions. 

There were 3 goals; technical (replace arial with reflow) branding (be different to segoe, San Francisco and Roboto), and Aesthetic. 

But that was a challenge, as near they end, they decided it was a little too dry. So we made a Display cut and a Text cut, with different terminal angles; there is flaring and lengths of strokes are adjusted. 

Finally it did roll out, and is seen a lot in Russia. 

To conclude, we need large x height, lower contrast, simplified details, open shapes, and looser spacing, which anticipates the rasterization challenges. 

Tobias has also tlaked about this topic, and so I will end with this quote from him :)

Thanks!

Catherine Dixon: Ionic has short asc/desc because paper had limited space. But web can scrool forever. Does that change things?

Miguel: Well, we need to still fit a lot of text in a small screen :)

## Michael Hochleitner - TypeJockeys - Short Talk

I have run a foundry for 10 years, and not alawys making the best financial decisions, but all is well. An old friend asked me to make a logo for a thing he was doing. He didn't have a dime to spend, and I should haev said, "yeah well no :)" but I did not, sometimes I have a weak moment, to do it quick and fun and it will be good :)

And I was happy with this outcome. But I have to show my numbers. I use a tool called Moko, its for invoices, project tracking, and so on. It cost 59 person hours, for a logo. A lot of time! This leads to actual costs of 1,167 EUR that it cost me! I basically GAVE my friend that money. I could have bought a nice iPhone, or bought stuff for my kids! :) 

So that was a reminder that you should be conscious about giving away work for free. By agreeing to do it for free, I was giving my friend over 1,000 Euros out of my pocket. So that's my talk, to remind you to think of that. 

CDixon: Great! That's a great intro the next talk. I give many talks about the language we use in Type Design as being confusing and not helpful and then I go home and drink tea and don't fix that. But Joyce is working on the nuts and bolts of talking about licensing and the messy stuff that makes the commercial business of type design actually function. So give a big welcome to Joyce Ketterer. 

## Joyce Ketterer / Darden Studio / Understanding Font Licensing

hello! 13 years ago I met a guy called Joshua Darden and a year later he talked me into running his foundry. And it took me 3 years to realise how important fonts were - I'm sorry, licensing fonts! 

And then another 5 to learn how it really works. So this in 25 minutes is just a taste :)

I am not a laywer, and this is the foundry/sales perceptions, based on chats with customers and our attorney but is not legal advice. 

DJR said fonts are math. I say, fonts are the most sophisticated plugins. They take hours and hours to make, years of study to do it well, but fonts are WEIRD. 

A lot of it is formed from history. We still call ourselves FOUNDRIES. I have to really explain that, that we don't make metal while working in a foundry.

They are content tools, not software; they can't restrict making copies of themselves. there is no digital restrictions management. we can not push updates, unless cloud based. no serisl number entry to install a font. you can not click to agree to a font license before using it. 

I read EULAs for font, but I have never ever read a EULA for using software. Even our lawyer does not. The software industry trained us all not to. 

The license is a written agreement of what they software already does and doesn't allow. YOu know you have hacked the software to violate those licenses. But not wit fonts. 

So, fonts are licensed software, but there is no DRM. And legal status varies a lot around the world. 

"You don't buy a font, you license it" we say. But what ARE you buying? I once watched Antique Roadshow, and someone wanted their heirloom sofa appraised, after just reupholdering it. The appraiser said they had to wait until the next time it was reupholstered, because the value is in the frame. 

The EULA is like the frame; its the functionality of what you can use of the font. Even if you use FontStand ;)

That does SOLVE a LOT of the problems because licenses are the same for all fonts through FontStand, for the first 12 months at least, and you are working through a 'font server' so there is some DRM in play. Everytyhing you can do with the font is allowed, unlike if every foundry's license was used.

But if you want to do app embedding or somethng more coplex, over 12 months, you'll be transferred to the Foundry EULA. 

What is a EULA? We humans are terrible at keeping things simple. End, User, License, Agreement. 

But that usually means the desktop EULA. really its ANY contract exhcnaged for a free. Web, App, Ebooks, these are all EULAs. That is what i mean here - any license. 

But to look at Desktop licensing, that is an antiquated term, I am using a laptop, but a desktop license for that laptop permits installation. 

I did an hour long talk once on defining terms. Desktop licenses generally mean that users can install fonts, per CPU or computer or person, to make pixel based static graphics to distribute to unlicensed users. That's it. 

The cost of such a license tells you NOTHING about your financial risk if you violate it. Because the risk is in what you DIDNT license, and its often inversely proportionate. 

I see many instances were a company does 'TESTING' or 'internal scoping' with the 1-5 CPU desktop license, then they choose a font, and completely FORGET they do not have all the licenses they need, and then they hear from us in 5 years. Test, pitch, forget. 

FontStand seeks to address that. 

There are 5 ways to get into trouble. 

1. Client has no style guide. 

We see that as the most co-present factor in license violators. A style guide is often a proxy for a license; users do not read the license, but they read the style guide and if it says 'use these 3 fonts' they assume the license is good, and a well thought out style guide will say 'do not use that font on the web' and then they dont.

Case Study "A" is "Unfunded Mandate": A large decentralised corporation, and corp central selected a font, but their corporate structure expected their regional offices to get their own licenses, and didn't make that clear. It took years for us to disocver, they had a LOT of desktop users, a LOT of websites using it, and a few mobile apps (it was a while ago.) It took a lomg time to unwind that one.

2. No font Server. 

Not just FontStand, but also Suitcase and so on. Customers need to move to foundry licensing after 12 months, but FontStand adds a little control over use. 

Case Study "B" is "For want of a Font Server": They wanted to license 1 style, and they licensed it for all users, and gave piece meal instructions, but the marketing group had the full family, only for their seats. And we discovered unlicensed web use of the full family, and then many installed copies. 

3. Too much delegation to contractors. 

We as a industry made this worse. It is typcal that a web developer will buy a font license in their own name, and use it for the client. And developers can be fired. Or otherwise the web site changes and all previous knowledge is lost. I have seen many instances where customers didnt relaly understand what their web developer had done. 

Case Study "C" is "Outsourcing": A marketing brand agency did a good job. there's a style guide. but after we discovered their VAST violation, they didn't have resources to get a digital libraries, or a specialist lawyer, then they decided that as anyone could become an expert on font licenses, they have point people for each brand, and I know this because the point person for the brand that uses our font, contacts me a few times a year with "technical questions" that almost always touch on a license violation by one of their contractors. 

4. Lack of Legal Vetting. 

Because we see software licenses not as contracts but as what software allows anyway, most companies to NOT vet font licenses. If and when they do, they require to only look for very large purchases. I already explained why that is the wrong end of the stick :)

Case Study "D" is a large brand that licenses its brand to merchandisers: The vendors are carefully defined as entitited HIRED by them to do work on their behalf. But internally they refer to them as VENDORS. So they did not catch that people paying them royalties to use their brand assets, including out fonts, is NOT vendors by OUR definitions. Lawyers are good at defining words and would have caught that. They had been collecting royalties for YEARS based partly on our fonts, and had been distributing the fonts to over 1,000 separate legal entities, and also did unlicensed web usage. 

5. THinking all fonts are licensed the same. 

for every kind of use, some of our baseline EULAs will allow it and others will not.

SO, Understanidng how lage violations happen?

Our clients have smart people, but there's a social system that makes it hard. 

So I see 3 easy tips:

1. SOMEONE should read the license. 

2. Many people rush, they skil reasonable prototcols like having a font server and making clear 

3. Write and use a Style Guide!

CDixon: How do you get along with things? 

JK: Very well ;)

CD: Vik proposed trusting, but you see people not as baddies in the corner, but totally unaware. 

JK: Right, the enemy of my enemy is my friend, and my real enemy is operating systems. 

[ large applause ]

CDixon: Thanks!

* * * 

## Paul van der Laan - Bold Monday - Short Talk

Bold Monday also has been around 10 years now. We make type, but also publish. We make specimens for every release. Here's some of the latest.

## Joana Correia / Nova Type Foundry / Slow Type

I presented this at ATYPI last year and i want to go deeper on this topic :)

Type design is, like cooking, time consuming. You need to be thoughtful about your time and what you will focus on and think about. 

George R R Matin interviewed Stephen King, about how does SK write so much? GRRM takes 

The slow food movement has this idea of eating 'good' food, the ingredients should be quality, the process should be clean, and fair. Quality, Clean, Fair.

So, starting a project, especially self initiating, you should be clear. You can do sketches and see what happens. 

Create bad projects - a lot of them. I realised that I should start something, and push more, instead of waiting for a best idea. 

Of course you should think before you start, but why not start before you think? A big family, small family, glyph set, audience, and so on, it can be helpful to have answers, but it is not always needed. 

There are super families, and these may be 8+ styles, or 20+, or sans and serif, or other parameters. But 

Focus on personality, instead of size. 

What is a small family? More experimentation, etc. Paul van der Laan said they can be boring, and he'd rather see 10 new ones than 1 superfamily. 

Design Process. 

I did a MATD graduation project and then took 5 years to complete it, Artigo. I started in 2010, and published in 2017.

I loved to work on it, and I extended it to more scripts. Greek was awarded in Granshan, and by the end of 2012 I published the Devanagari part with ITF with Satya. Then it was one of the first Google Fonts for Devanagari. 

...

So here's the latin 'a' and how it evolved. I did a LOT by hand, and then went to FontLab 5. 

Back to slow type. 

Type design is about committment. I had many feedbacks from many teachers and colleagues, and when a magazine began to use it, it needed better accents so I improved it. 

Finally it was published with all the accents. And I continue to improve it after that. 

The greek is still there, but quite untouched. It is yet to be published. 

Cyrillic is coming along, I had consultation with a native designer friend, my friend Vika Grabowska, who helped a lot. 

Convenience. 

That idea is not always good; not for anything in our lives. Slow type is an inconvenient way to make type. But it is OK, to use MM with Artigo, I started with a regular size, and used technology to interpolate. 
Here's a Nick Sherman photo of a great pizza. You can not just go to Pizza Hut for that. You have to wait for good pizza, to get the dough and bake it with the ingredients while you wait.

Making type slowly is worth it; we use interpolation to speed things up, but then there is a lot of correction to instances - this is before variable fonts. 

Finishing. 

When is it good enough? It took me 5 years to be ready to publish and consider it finished.

Perfection.

But after the release, there always are more things to improve. Student work now is set against a very high bar, but still I think a lot of student work needs further development work before a public release.

...

Live slowly and be thoughtful. 

It is now walking slow, but being thoughtful. 

Enjoy every moment. 

It is important to enjoy the process, and take joy in every glyph, even the punctuation and accents matter a lot. 

Thanks!

CDixon: You slow down the process, does that open up more space for conversation? You got some feedback and went bak to the drawing board. What made that feedback so compelling?

JC: Well, I didn't have the experience to see it, and when several people said "pass your ego and redesign" then it feels like different shapes but the texture is still there :) 

## Hughes Gentile - Production Type - Small Talk

There is a forest fire that creates room for growth. We at Production Type have grown our library, so we will phase out our earlier work, starting with Panorama. we have a new family Media that pushes the ideas further. 

* * * 

## Andreu Balius / TypeRepublic / Graphic Art With High Doses of Cholesterol

I am here to talk about the Spanish culture of butcher wrapping paper. this is part of spanish vernacular visual culture. 

...

Many of these are quite random compositions; this is a typographic one that is orderly and the logo is typographic, (••) 

This has the animal, the knife, the meats. A clear face and a clarendon bold. And here's another with the same design and same type. But some tiny differences :)

...

So there are so many designs, I have around 600 in my collection

Thanks!

## Indra Kupferschmid / Choose Your Own Adventure

I could have become a Chemist, but I am a designer. You combine existing elements until something exciting happens :)

If you Google Image search for "how to choose typefaces" then there can be technical guides and flow charts. 

Last week a german magazine asked me and 19 others what their favourite part of starting a project, and only 1 said "choosing type" sadly. I encourage students to do that. careuflly.

I made a sketch for lectureing my students. 

textbooks say, use atmosphere and feel; the history; the location; the cultural associations - of the type related to the content. But its a lot of blah blah blah. 

Most people I ask say, the price, the license, which is often OFL, the technical issues, the content, teh glyph set, languge support, reading circumstances, and overall quality. 

Do you start with what you alreayd have, or all fonts that exist? Schools say you must be able to do "A" but I prefer "B" :)

The worst place is your document editor, and the 2nd worst is your OS font book app. They show sample text in Latin! No one uses that. Hambergefontsiv is a popular test work. 

I like the "E" to start as it can tell you a lot about the NDA, rounding, serifs, etc. 

Ramburgefonstiv is good for German, where we have many long wordsl and soething with umlouts, as that will break a paragraph for German readers. Too high like cap height is awful. There is the Helvetica Now accents, that are not good for German! 

I like to pring LOTS of typefaces in line samples, and let students sort them any way they like. 

I am fascinated with their piles or buckets. 

First, they pick decorative. 

Then, sans/serif and high/low stroke contrast. They lack many criteria to separate them. 

Third, they look at the finer flavour or genre; proptions, apertures, joints and a 'contrast axis' or 'contrast angle' if it is not monolinear. 

We talked about this earlier, that now newspapers use fonts on websites, there is no space constraints like on paper, do we really need the urgency and compactness in newspaper type? It was driven by the medium constraints of newsprint, and book typography often is much different in the type, the leading, and so on. 

For me, the key letters to look at are: R G a g n b i o s

R has stem, bowl and diagonal.

G has a spur or not?

a and g tell you the story, complicated or simplified?

n and b are flat, flat, and flat round. 

i has a stem and a tittle, and o is roudn round, and s is complex curve. 

The overall proportions of caps and of lowercase may be similar, or very different in this set.

Next, there's the apertures and the terminals. The counters can be more open, or closed and curling up into itself, and the terminals interact with them and can be perpendicular, flat, or something inbetween. 

Here is Output by DJR, which has 4 versions.

And as we heard from Erik today, there is from Gerrit Noordzji, there is a 'form principle' of expansion and translation. I believe the 3rd great European writing instrument is the speedball pen, which is closer to drawing than calligraphy, and leads to geometric type forms. 

There's dynamic forms from the broadnib pen, the rational from the pointed pen, and the geometric from the speedball pen. 

And there's dozens of different terms for these 3 things from each region. 

You can map adjectives to these groups. I think open, approachable, inviting, timless, warm, for the dynamic; noble, classic, elegant, is rational; and other for geometric.

And you can combine within these groups, or get a large contrast by picking between them. 

So, my call to you is to be more daring in your type pairings. I vote for more beautiful fonts within a family, not a beautiful family.

Italic is more informal, warm. ALl Caps can be more stiff, official, shouting. In Germany we rarely do it, the USA loves it. 

Massimo's 6 typefaces is a nice idea, maybe not THOSE six though. But a modern, an old style, a grot, a geometric. These all come on your Operating System now.

I would pick these 6 today, starting from scratch. This is no problem, the problem is when everyone has the same 6 typefaces. 

Physical goods have more attributes, but when everything is on screen, the size is the same, the layouts are often the same. 

When I speak to digital designers, I asked about Open Sans, and they siad price, availability, ease of implemenation, and they did not know where to look for other good fonts. 

If you study computer science and now be a designer, that is a real issue. 

So, for selecting from all fonts, how to pick? QUALITY is KEY. There are ways to pick quality, like uneven spacing, color, bad rendering, bumpy curves, no optical corrections, missing glyphs, and bad diacritics. 

This image is from Peter Karow's book from the early 1990s, about how to find issues with Palatino; when many classic faces were digitized in a huge rush. 

A few years ago I made a website about Neue Haas Grotesque, which is very nice, and the bad italis in the System Helvetica are clear; the 8 is SUPER bad. 

And the big stores have overwhelming numbers of fonts. When you click Sans, its still 64k fonts, and its the boring stuff from 50 years ago - well except Gilroy, I don't even know what it is. Is this designer in the room? :D

fonts.com has only 22k fonts, and you can filter by price! and more things to filter. 

Adobe Fonts has 1,739 fonts, and it has an easier filtering system, but its still basic for thinking in flavors. There's nothing about the taste of the typefaces. 

FontSpring is big on how 'easy' licensing is, even before showing fonts. FontSpring has better filters. 

FontStand, I worked on the fitltering system here, and the link to the foundry sites is also prominent. There are basic groups. And then there's a 2nd level of menus with many choices. You can filter sans, grotesk... I was asked to pick a Helvetica alternative, and Trivia Sans by Storm Type can work well. 

I saw this guide from a teacher, that recommended to pick carefully and avoid dafont. I take my students to font conferences. If you need early testers for fonts, please talk to us over a beer :)

Catherine Dixon: Do you think we need a random button? So when someone wants a Helvetica look alike, we can give a good choice?

IK: Yes :) 

CD: Will you be talking about classification when you retire?

IK: I am working on a new German classification scheme. Maybe after that is complete I'll be done :)

## Nikola Djurek - Typotheque - Short Talk

CD: Just 2 years ago at the first FontStand event, Nikola was talking about this event, so over to him for the last talk :)

ND: I want to talk about my old non-variable fonts. Delvard Gradient can be thin in the beginning or end. Francis Gradient can be wide or thin. Plotter Wave can pseudo-randomly lean left or right. Gordian Knot can be N/S/E/W, and Tremolo can have a gradient with your choice of number of lines and colors. And Mississippi Gradient has a gradient in heights. 

I am now done with the series of gradient fonts :) Each family has a display and text design. And thanks to Gustavo and Karsten and Frederick who helped me achieve these projects :)

* * * 

Peter Bilak: Thanks to all the organizers, Dino, everyone who helped make this work, speakers. 

Andre: We are on time :) Unbelievable! 

Peter: Thanks to all of your for attending! 
