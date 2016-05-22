# Libre Planet 2016

## introduction

we are using only libre software here, and we are documenting how we do it so that other people can too. 

We had a huge year since last year's conference, with the 30th anniversary of the FSF. how many here are members? most of you. gret to see so many here who are members

thanks to our FSF campaign managers who put this on. Its great to be hosted at MIT where so much of the movement started, and see MIT values conitnue to be part of our community. 

we have a safe space policy, we want to make this a welcoming event. there is a party at Elephant Castle at downtown crossing. 

'netflix and chill' has been canclled, replaced by 'free software eudcation needs'

? has been cnacelled replaced by a talk on reesoftware and trademark law

soon is the w3c vote on drm in html (?)

dkg [bio online]

ed snowden is ;) world famous since 2013 as a whisleblower on the unconstituional nsa mass surveilance, and we at fsf have snce then higlighted the importance of free software to privacy.

we started a little late so we are cancelling the break afterwards and go straight into the 2nd session

## Edward Snowden

[standing ovation]

When we introduced me, people thank ME personally. But his is special event for me because I can thank you. so many people who didnt see the citizen 4 documetnary, 
the tools i ued in 2013, tor, etc. i did not use windows machines,not because i knew there was a backdoor but because i could not be sure. this RISK that creates an atmosphere that surronuds us, is a central problem in the security and connections space in the net. politics, law or tech, this thing is hard to dispel. 

you dont know whats true and whats not. some critics say, well, everyone knows that. sure, technologists, specialists knew it was possible but not that it was acually happening. we can integrate these threats in our threat models. how we think about the issues. how we develop, direct and steer systems we rely on. even people who still dont use computer touch computer systems that we can not trust because of that proprietary software problem. 

windows points forwards some things, to harden it. thats great. at the same time, win10 is so contrary to user interests. you work for the OS, it doesnt work for you. this is NOT something that benefits to user, the society; only the MS corporation. thats not to say we are against corporations. we need to trade. but while some corps are on our side, and stand up for the pulic interest - like apple vs the fbi, where they ask for all products to be insecure by default. 

so my talk today is about where we are today in the world. 

dkg: so what protection are actually offered to users. people say apple phones are more secure becuse they are locked down. what is your take on that?

es: a lot of people have difficulty distinguishing related processes; there is security and then control. politicians say its a line between liberty and surveillance. but that misses the issue; half of us produce exploit protetions; but with auto updates, we trust them not to abuse that. but is a device ruly secure with proprietary software ecosystems? in for example the android ecosystem, the security updates are a *disaster*. there are alternatives in teh free software momvvement. 

	you might notice that for the first time for me i am talkng via a completely free software stack, there is no google logo on this screen. we develop th eplatforms, strategies, that benefit the entire class of people who are less technicaly adept and perhaps can not AFFORD it. i know many great people who use free software because they can not afford a license and didnt know how to pirate them ;)

this community HAS to run, we can not compete directly with apple and google with capital. we have headcount and heart count. we can compete with ideology because ours is better. [applause]

but we also have to focus on recruitment. everybody got started somewhere. i was an MCSE through and through nutil eventually i saw the light. i didnt start with debian. 

its a radical position to say you ought not to use proprieary software at all. the world needs radicals. in a world where visibility into fridges or phones or computers is limited you have no control and thats fundementally dangerous. thats why i call it the last lighthouse. if you are more radical or less, you are bloazing a trail. 

there are more problems to overcome and i think we should think about hardware trust. qubes, and others that focus on this issue. tihnk about the worldwhere the FBI didnt get a backdoor in the iphone today, but if tthey get to the chip fabs, then next time they will get in. 

companies need licenses from gov, so we can make software that overlays untrustable ardware. tor is something like this i use every day. so let us look to where the opportuniies are and the risks too. 

dkg: how to bring people to the movement is important, yes. i came for technical excellence and stayed for freedom. i joined when debian was installed and autoupdated and it just worked. windows at that time i had to reinstall clearn every 2 months. as i learned about the control that ended up happening, ms realised they could do this to and now they do. so how to grow and sustain our community is a key question today. maybe not everyone wants to know the code on a fridge, but in 10 years everyone will have a fridge that runs code. how to bring people in?

es: we need to thikn about the competitive strategy, the free software fridge needs to be practically useful. but as a community strategy, this is a lifelong practie. everyone should task themselves to bring 5 people into the free software community. at any level, sign up for a membeship and donate, a basic commit via git to improve something cosmetically, or even just a private patch, or a bug report... its important. we want to bring people into the language of empoewrment. its not about privacy vs security. they help each other. this is really about power. wheny ou look at NSA, its not about terrorists only. the USA spied on unicef, the childrens fund. they abuse their powers 2,700 times a year. no one was charged, because ... but there is a question about if your things work for you or do they betray you and work for someone else? thats not freedom in liberty or free kitens, but its about being no longer passive in our relation to devices. 

dkg: ... we can think about the network stack, if those protocols are leaky, that is not achieving our goals for privacy. we need to look at regulatory standards - i am happy there are lawyers in the room - so can we have regulatory guidelines that you must have free software by regulation? thats a radical idea today.  maybe there are other ideas for outreach?

es: we can not control telecoms providers. we are vulnerable to them. you can leave aside the democratic  issue that sworn testimony was given that it didnt happen when it did, there is a technical truth that network paths are hostile. open hwardware is an open challenge. if we cant control a chip fab, what can we do? encrypt eveything. a good 1st step. 2nd, tunnel everything. 3rd, mix everything so we munge the metadata. there are global actors who can do timing analysis. bt perhaps there is someone in this room with new ideas. or someone we bring into the omvement who has the idea. we may get more FGPA chips, that are hyper capable and can be  used in an arbitrary way. there is another question, i dont know about. when we look at the toolchain, how do we develop devices? im not a full time developer. we see a tax, the xcode ghost; someone targets a network and instead of stealing a key, they attack the compiler, or on the network, they can look at the toolchain, is there some pattern in their work that is unique. how to solve this?

dkg: this is the 'i hunt developers' case. as a f s dev, i dont want to release bad code, but someties we make mistakes. what if your tool chain is corrupted. how d oyou ensure that a targetted attack on you doesnt become an attack on your userbase. there is a talk about reproducible builds at LP this year. the goal is to prove that a set of sources equal your binaries. so you know that the sources havent been corrupted. we are making progress on this. proprietary software can not do this,inherently they can not show their sources, so they can not build up such trust. i like the idea of giving people sources rather than binaries so what is changing is transparent. so, now we move to questions. 

es: the challenge is that there is real impact for this kind of thing. it is unethical to keep people anchored to a support chain. stable is important. bt the pace of adversary research is so fast, that update cycles that are slow do endanger people. so people who are upset that more secure designs break a floppy disk drive, its like yo, stop using a floppy disk. 

q: is there any killer apps that could gain widespread adoption and transform more mainstream public opinion? 

es: sure, we see in global device space where we talk about more than apps, a complete stack. people care about the capability. we se signal (?) that adddresses this, but it leaks metadata. are there ways to change collaboration? living in exile brings ideas about how people interact. if i was to speak at MIT, there would be police, but with video, here i am. so a disruptive technology coming, the VR stuff, can we take that hardware and make applications for remote work? a virtual meeting space, work or social, so people can engage as if you are in the same space, see your terminal, even. im sure facebook and others are trying to d this. but if we can do this first and do it securly, we can beat them because they can not do it securely because their business model can not. that will change the world, because then you would have a safe space, everywhere, anywhere, always. 

q: your suggested we might abandon the hardware space and build on top of it. i wanted to suggest OpenBTS, a rural mexico proejct to build hwardware, there is a free wifi hwradwar project in brooklyn. they might be long shots, but could you talk more about htem. 

es: i hae less familiarity with that. when i think about that, openwrt, where we make small scale cell networks, then that is awesome. i think we can see success by leapfrogging, and avoiding sunk infrastructure costs. ... But what do you see as the way oforwads for the next big communication fabric?

q: what about projects to take peoples data out of the cloud?

es: i worked at nsa, i had xkeyscore at my desk, and schduled ssks to do things, and if i wanted to see a pattern of pings i could do it. they hacked routers, so for activists or others who want to maintain privacy, the lower your network, the better. if you are outside a big telecoms space, you are safer. you live in the gaps between the sensor networks. 

q: i wanted to ask, someone in middle school or high shcool, what can they do to help out? 

es: first thing is care. a lot of people dont care. not because they looked at it and reject it. there are only so minutes in the day. there is a contest for mindshare. if this is alreayd interesting, you are on the right track. you ca ndevelop capabilty and actually apply it. ... you can make change happen. 

* * * 

## Education needs free/libre software needs education

Walter Bender and Devin Ulibarri

Inroduction:

The bad news is that educational technology has largely failed to deliver on its promise. Its focus on efficiency rather than on learning has resulted in a further reinforcement of education as a system of instruction to curricula rather than one of student-driven construction of knowledge.

The good news is that Free/Libre Software is the starting point towards a solution--not just because it tends to focus on putting powerful tools into the hands of its end-users, but also because Free/Libre Software espouses a culture of doing and sharing in a context of critique, reflection, and personal responsibility.

In this session, we will review some tangible ways in which Free/Libre Software is having and can have a positive impact on education and some things we can and should be doing better. We will then discuss strategies for advocating for Free/Libre Software in education systems both in the US and globally. The next generation of computer users are in school today. We need to ensure that the next generation is empowered to take advantage of the opportunities afforded by Free/Libre Software.

DU: 4 pints, an argument for consructionist learning, 2, an arugment for libre software for CL, 3, concrete steps to do that integration of LS and CL, and then we want to do 4, a disucssion abot who can we advocate for LS i neducaiton?

WB: snowden just said this is wha we need to do: "how do you teach the language of empowerment?"

DU: i am a classical guitar teacher. why am i here at a conference on free software? walter insisted i come to talk about this. i did not kow what fee software was nutil 2 years ago. not so obvoiusly, i used copmuters as a kid to play games. i remember as a kid playing DOOM! and not jus playing it but when i realised i could design levls. that excited me. i lost interest in the premade levels. i wanted to see levels other people made. someone made the hoover dam. incredible. i made levels and foud that you could put 2 users in the same room and shoot yourself. i could not at that point answer the quesoin, how does that softwar ework. now that the doom engine is pubished uner GPL, so i can justify the time on that game and i could study it, but at the same i could not answer that question. then i lost interst in compuer games and learned music. i asked my instructor how they did what they did, and teh could teach me. their hands were visible, i could access sheet music, and it was an empowering experience. i stopped using computers for a while, other than writing papers for school. then i was told to use apple stuff because i was a musician. and one day i beame veyr frustrated. i was trying to take audio into the computer, and my computer told me i could not do it any more becuse first i had to upgrade my computer. but i was broke, and this was not possible for me. and i did not think the computer should tell me what to do. and in reseraching that i fond the sotware freedom movement that started 30 years befor.e i was fasinated that computers had social justice implicatins. i was actively thinking about my role in society, and this rsonated iwth me. so then i took a few months to read through RMS philosphy writings, and i found that yeah, this is huge, and for me and fo educaiton, it will be only bigger. so i began changing my teaching practice so that i could ALWAYS answer 'how does this work?'. i dont use much software in my classes, bt the little i do use is now all free sofware. my answer can be 'i dont know, but lets find out together.'

WB: i want to talk about edication. here is a paulo freire quote form 'pedagogy of the opporessed': "education either functions as an instruction ... practice of freedom ...". So I have a simple goal: to give every child an opportunity to .... The world is not ahcieveing tha goal bcause they think about learning as efficiency, putting knowledge over here to over there. how to measure that, like a high powered business. it is so wrong. learning is not a service that is done to you. it must be active. it is not watching a video. it is not reaidng a book or a web page. it is not a tablet or a curriculum. the kids in LA rejected the tablet before the scandal broke out. learning is not crriculu. finally, LEARNING IS NOT EFFICIENT. that is why we have tech and why it is so usefless. 

Gerald Bracey: "We are developin the capacity to do in nanoseconds things that we shouldn't be doing at all." That is the model we have. we must instead solve real problems of learning. 

propreitary software in education is, at best, a missed opoortunity to learn new ksills; exercise social etiquetet; build upon existing ideas; and embracning PERSONA RESPONSIBILITY. that is for me the key lesson in free software. Frming things that way, the conversation is veyr different. the framing of free software around RESPONSIBILITY is key to making this change. we can also go into the reasons why it is unjust. but this shift in resposibility is key. 

DU: one of th relevanaions i had 2 years aog was that i had thought about the implciations of XYZ and education policy. when i found out about free software, that is a quesiton i had. often pepole say "well not every child will become a [something, computer programmer], so why should we give them [x, y, z]?" And I had faced that intrinsically as introducing music into the public  shcool. that quesitons misses the point; not everyone iwll be a best selling author so we should not teach them writing? it is not about if they get a job in the valley, it is if they are empoewred on their computer. i thought this 'language of empoewrment' is a great idea from edwrad snowden this morning. for me the FS movement is about human potential. if you present technology tools, as you are a user, and the plce these are develops are far away, they are experts, like mythical beings, and your place is just a user? it tells children they are excluded, they can not do things even if they try, their potnetial is assumed to be little to nothing. But libre software assumes unlimited potential. so if you d oexercises, that ar emeaningless, you dont put in as much as if you think it matters. if you put in time to software tools that you can not learn about then you may be less motivated. if you learn free software, the possibility to be a contributor, changes the mindset. my hypothesis is that people will then learn the tools inside and out. so how is freedom and pential relation? its freedom to unlock your fullest potential, whatever that is for you. so what is the result if we have libre software in schools? there is the schol policy, the national policies, and even the implicit rules you have at home. i dont have a classroom policy against proprietary software, but i make a point not to recommend it myself. children cn use software in schools, they can study the source code which can be its own way of exploring and learning abot the world. free software creates a conversation abou the social and moral issues. how do you interact with other people? if we can share software, that has social and moral implicatins. students feel part of a dynamic community. not merely 'users' who are passive. 

WB: i didnt talk about constructionism. i talked about current school models. a DECADE before the free software movment, the constructivonist movement began, the work of S Papert. They invented Logo. Interpreted so source always available. they say it wasnt the tech, it was hte culutre. the culture of free sofware is critical to chanigng learning in schools.  'learning is a verb.' freedom in software puts emphasis on POWERful tools. you do not use apps, you use tools. tools can do lots of things. not contained to some little thing. it is a culture of DOING  and sharing i na context of critique, relfection and personal rsponsibilty. we make commit messages, we take responsibilty. why would we ever dra a hard line between tool makers and tool users? this is a relatively new thing, and from the learing perspective it is totally wrong. 

The maker movement is ALMOST aligned with free software. they use a lot of libre software because its gratis. they dont tihnk about it yet in terms of knowledge, the maker movement is not mature enough for that; and the maker movement is JUST ABOUT to be co-opted by capitalism. they were circling like sharks at a maker conference i went to recently. 

At Libre Planet at 2010, eben moglen said 'only libre software had acheived the elusiv goal of being 'write once, run everywhere.' that is a powerful thing the community has achieived. and i presented the sugar learning platform with the oppoite goal; i want the platform to be written over and over again, by the kids. 

Cynthia Solomon, a co invntor of logo, said "Debuggging is one of the most powerful educational ideas of the 21st century." She liked progrmaming to get kids into debugging. in the world of education, we need different metrics. the sofware world values robustness, efficiency, maintainabilty. But kids need to be written fro END USER contributions. At LP2010 I outlined my ideas for scaffoling software in which it is the NORM to exercise the freedom of the software. EASY access o source, using SCIRPTING langauges so tha tchanges can be diret and immediate. A lot of times it is HARD to find source. in sugar we make it 1 click away. always. 

scaffolding means enabling people to take small steps. you must design this in. make the penalty for mistaks as small as possible. if you hurt, you leanr to stop doing something. so make things robust i nthat sense. make learning visible. make the tools be REAL, so you can use them in LIFE not just the classroom. be tolerant to newbies. be unyeilding on personal privacy. people in shcool ar epeople, not just kids. 

in 2010, DKG asked how many patches were from kids? sugar users? then, 0. today, the lead developer is 15 years old. most ptaches are fro mkids. we have turned a corner! [applause]

Gary STager, a lead pundit in construcitonist world, says "teachers should not have to learn git." But git is a powerful tool and people especially teachers should learn powerful tools. you can use another VCS, but the idea of VCS is poewrful. teachers can learn too! On ed.gov the Dept of Education gets this; see their mission statement. But the reality is about checking off boxes.... so Free software can be equitable, change the power dynamic. Equitable. Propreitary software is 'not fair.' 

So, how can we reach out to deicion makers to make this hppane? I spent a decade on this now. I have not gotten far. I have millions of sugar users but policy makers do not get it. I am putting 3 names up: Gary Stager. Valerie Strauss. Russell Shilling. Gary because he is influential in constructionist movement. Valerie has a col in the Washing Post, eveyrone in schooling in US reads it. And Russell is in Dept of Education, a smart guy, and he just doesn't get it. He's thinking about efficiency themes though. How to convince these 3 people? 

Our seed corn of the omvemnt is kids. 

Q: hat about pearson installing survellance in classrooms?

WB: I have a problem with that copmany, disney is the worst though ;)

DC: I read John Taylor Gato's books and I became radicalised against schools; shcools do not teach the way children learn and that is by design. you have millions of sugar users outside teh school system, and that is offering them real education that they do not ge tin school. so i tihnk it a strategic mistake to put effort into shcooling. 

WB: I can not give up on schooling. 

Q: i am a librarian and there was a great talk at LP 2015 on library free software and w use only ibre software at our library. people want CAPABILITYIES not articular proproietary sftware that supplies features with those capabilities. people want word processing, not MS word. 

WB: Yes. how can you effect library policy beyond your library? thats kind of my concludin gpoint. 

Q: RMS said last year that many schools are 'going google' and i see in cambridge thast students do EVEYRHING via chromebook. how can the fs movement influence the accounts that are made? Google it taking over the ed tech space, and learners bring ed tech into their personal lives. 

WB: the whole idea of cloud for classroom is so misguided technically. all the thing you say too, it is not morally or socially correct either. in sugar, it is ad hoc. sharing is peer to peer. we just use our radios. we do not need to go up there to share. so we should surface more of that in the tools we use. we do that in sugar, but thats the general idea. 

Q: I'm ink penny at ? middle shcool. we use google docs for our english project, but we had trouble with 3 cols. i use latex at home, put y PDF to google dirve, so i can use latex at school. 

WB: We ran out of time but we can move to the hallway

* * *

Free/Libre alternatives to GAFAM's Internet: a review of French initiatives
Marianne Corvellec, April and Jonathan Le Lous, April
Room 32-123 ￼Collapse details

Project "De-google-ify Internet" aims at offering as many alternative services as possible to those threatening our digital freedoms. Google is not the only player there, even though it gave the project its name. Google Drive, Google Calendar, Skype, Dropbox, Facebook, Twitter, Youtube, Doodle, Yahoo Groups, and many others, are extremely convenient services. But they are centralized and make users dependent.

Framasoft are resisting this trend. They have come up with a several year roadmap to set up alternative services. These services are thought of as digital commons. They are free, gratis, and open to all. Framasoft is a French not-for-profit whose goal is to decentralize the Internet by promoting self-hosting. They work to empower everyone to install and run their own services. The project already offers more than 15 alternative services and welcomes about 1,000,000 visits per month.

MC: Its not about installing and running software locally. so APRIL started a campaign to degooglify the net. its not only google but they are a dominant company so we named the effort on their name. FramaSoft started in 2004, they started with popular education, public education, and thus promote libre software culture and services. they have 3 FTE and a large community. 

Dominance of GAFAM is a threat to innovation, copmetitoin, independenc, the open and decenralised web, and privacy. 

The aim is not to compete directly but to raise awareness that we are dependent on a few dominant players who set the rules beyond any nation or other entity. they have 17 servers, it is not about using their services, but taking a stand, caring, so people do it themselves. its a long short, arrogant perhaps, and france is known for that atttiude. 

their program to de-googlify the web had a 3 years roadmap and we are now in the middle. here is a map of the top proprietary internet services; here is the map of them being captured by framasoft replacements. these are often existing libre softrwaer packages that are forked and branded. 

JL: so you could use all these technologies at home, it is important to guarantee access to these technologies. 

MC: eg our replacement for google docs is etherpad. What's next?

JL: I think of Zuckerberg, a well intentioned centralization; first they have a free and open net, and later on facebook you can not talk about this or that or link to some sites, because facebook paternalistically knows what is bad for you. How can we localize things? Self hosting means intalling our own services for ourselves, our organizations and our companies. we want to share globally standards and policies. 

MC: Also we could not scale, we can avoid the surveillance by staying small and local. 

JL: We have software on the server, the servers are the infrastructre ... for example Ring is an interesting new project, that is a free cmmunication platform that is respecting privacy. 

* * * 

## Companies, free software, and you

Karen Sandler, Software Freedom Conservancy

I amm exec diretor of conservancy, who knows us? almost all. who does not? a few. conservancy introduction. also i have a pacemaker i do not have source to and that really radicalised me about software freedom. and i love this conference, the hallway conversations are really great and libre planet is an important thing. 

i am here to talk about companies, free software and you. we have charities like conservancy and fsf, companies who work in the space, hobbyists, gov and shcools and trade associations that represent companies with shared interests. those are some of the big groups. 

we all agree that company interest in free software is awesome. its what we want! raise you hand if you work for a company that publishes free software. and who works at a copmany that uses free software? now nearly all. 

this works out most of the time. 

i started out my career in securities law. a phrase in that world is 'our interests are aligned.' this slide is from the Linux Foundation, it shows all the great plcaes that the kernel is us; TVs, Android, ISS, Tesla and Cadillac, 80% of financial trades.... 

but yesterday edward snowden said "While sometimes corporations hold up the public interest, we should nt have to rely on them." and sometimes tey do not do what we wish they do. [vmware and VW logos]. now, who is new to free software? for whom is this your first free software conference? 20%! so, copyleft is a license technique pioneered by the GNU GPL that requires derivatives to ditribute Complete Corresponding Sourcecode to users. VMware is being sued to force them to do this. Copmanes have different aims, long term vs the quarterly results. VW is a good example of this; what they did for emissions systems was not in their long term interest. by doing an unethical thing that had a short term benefit, they lost a lot. you have to think about the engineers who did this and could not say anything to prevent it. this is often how companies are structured. 

here is a picture of my defibrilator. i dont like to talk about this too much, but when i was pregnant recently, i was shocked by my defibrilator twice. it is normal for pregnant women to have hearts run fast. but the number of people who are women who could be pregnant is small. doctors are very facinated by software freedom conversations, as doctors are very smart and very concerned about liability and they care about making people well and they dont expect you to do this as a vulnerable patient, but its really fun. i said, oh, if you have a patient with a defibrilator... and the aneeastheologist said, i was the second they had seen in their career. so there is no market for featurs that address my problem. my problem was not something i could fix because the device has proprietary software. how that represents copmany interests, it is very reasonable for the developer company to spend $100,000s to mke sure i dont get an incorrect shock. 

free vs open. This is the slide I used at my first libre planet presentation. i was giving a legal talk and i said, you know, if its free or open, its the same thing really. but today as time as gone by that i realise we are talkig about different things with different goals. at the time i thought i was sending a zing to say that at libre planet. but i now feel bad about that, because i was contributing to dimishing the messge that individual user software freedom matters. 

in silicon valley HBO show, there is this joke about hooli, that the CEO says it is maing the world a better place (through minimal message oriented transport layers.) And when i saw this i felt ill, because there is a cooption of the software freedom movement to say that is some huge thing to make the world better. that detracts from the software freedom ideology and that what we are doing is really important. i have had conversations with people about why i am a software freedom advocate. 

people ask me, suprised, why if you are a lawyer you dont work for a big company who cares about open source. but there is a difference, our interests are not always aligned. and working on GPL enforcement is EXTREMELY eye opening. when we started working on this, i thought copanies will WANT ot comply. i thought i will explain why it is in everyones interests to comply, and they will agree and comply. i thought it was something that everyone would want. i thought doing it in a friendly and nice way, and helped out, then it was all be unobjectionable and not a big deal. 

and i was dead wrong. 

i see some in the audience laughing, saying how could i have been so naieve. and now i see how strong the pressure is to not enforce the gpl. how much people at companies do not want the GPL to be enforced. last year i explained that the donations to conservancy from corpoartions that are for profit is going down because we bring lawsuits and they do not want to be involved in something controversial. this has been baffling to me that they do not want to be nice and comply. the public and the movements intersts are not the same thing. that is interesting for me to learn in the last years. 

so conservancy is shifting our revenue from companies to individuals so that we are not at their mercy. i am proud to be at a place that would rather shut down than compromise. [applause] thank you. this is how ALL charities should be, and that it is not is disappoiting. 

but we need and WANT to work with companies! its an amazing sitaution that charities are so supported and that they get no strings attacheed donations. but as a lawer i learn you have to plan for the worst case scenario and plan for this. you can not expect a company that is legally required to make profits to always do what is best for the free software community. 

it is about the balance of power. 

as companies become more active in free software, they encourage more permissive licensing. i am not saying corporate involvement is bad, it is essnetial, but we need to deal with them in a way that tips the balance of power back to our ideology. copyleft and the GPL is the best way to do that. I love this GPL graphic that cwebber did of a GPL in a heart shaped C :)

So in the lsat 10 years companies have got a message out that if you license softwar freely that you shuld not use copyleft and especially not GPLv3. 

Martin Fink gave a great speech recently about the benefits of copyleft and that lax permissive licensing is the only way companies are able to participate and we should change the default back. he had a grphic of a pendulum swing. i think this is important; an important person in a for profit company to say this. 

Shauna said today "resist monopilies and other centralised power structures." And a great way to do that is to insist on copyleft. Raise the conversation, meet with the company legal team and tell them how you think there are long term benefits to copyleft. you as employees have a lot of power to shape the conversation. lawyers tend to say 'no' by default but if you point out talks like martin fink's talk, you cn change their mind. pushing for copyleft is critical. 

employement agreements are also critical. how many people sign them? many! how many of you negotited it. about half! that is impressive. a lot of people do not know that the employment agreement cna be negotiated. when you are served with paperwork, they can take changes. you should sit down and read it - obviously - and then think about how that can shape your free software contributions. at that moment, you are never more valuable. they want to hire you, but they have not yet. so after you sign it, maybe you cna amend it, but it is an up hill battle. so who here keeps the cpoyrights on their code? about a third. wow. so you see it cna be done. 

many companies will not agree to this, but if more employees ask for this, it will become something that companies ar aware of. and it COULD become a recruiting tool, to play off various offers, you can say that 'i will take your job if you let me keep my copyrights, even though it is $10k/year less'. 

rms: another thing you can offer is that ill start tomorrow if you agree i can transfer my copyrights to the fsf or conservancy. they might not let you keep it and go into a business with it directly, but they might let you keep the copyright on the condition that you only every liense it nuder the GNU GPL. 

yes! and i am talking with a large company now who will assign their rights to conservancy. you can ask these questions in a very careful and friendly way. "id like to find out if you would let me keep or assign my copyrights" is something that companies can consider. and i want to repeat that you can amend them after you are hired. 

I heard in the hall today that "at will hiring fundementally misunderstands the dynamic between employers and employee." and libre planet is one of the few places that these conversations take place. 

finally i want to say that you can help change the balance of power by supporting the charities like fsf and conservancy. when talking to industry lawyers i see how the tone has changed since conservancy started the fund raising away from corporate patronage to individuals and we have near 1,000 now. that we cna show we have 1000 people in a few months prove that people relaly care about this issue. 

company lawyers have told me to my face that i am such an idealist, one even gave me a PIN that says 'i am an idealist' - they were being nice but HMMMM - but their idea is that n one cares about the esoterics of the license and people just care about their job that involves open source. so it is important to show the world that these principles matter and that these charities exist to show the wodl that they matter. 

and there is a financial reality that if a coproation pulls $10,000 a year, that really hurts non profit that are working hand to mouth. this means such organizations are doing thing that are more benign and inoffensive rather than doing what is truly needed. 

so companies being aligned is great but being ready for when they are not is important, and that is done by these charities. libre planet exists because of the fsf and we have a lot of conferences in the free and open source software commnities, but libre planet is the only one that is focused on social justice. almost all the others are run on corporate interest. i have heard that my talks at other events have low turn out because it is abou gpl compliane