# FOSDEM 2019 Live Blog Notes by davelab6 

Usual disclaimer for live blogging: These are informal notes taken by me, Dave Crossland, at the event, and may or may not be similar to what was said by the people who spoke on these topics. This is probably FULL of errors. What do you want for free? :) If something here is incorrect it is probably because I mistyped it or misunderstood, and if anyone wants corrections, just should tweet me [@davelab6](https://twitter.com/davelab6) or file an issue or email me <dave@lab6.com>

## Community Data is Not Community Metrics

### One Team's Journey Down the Wrong Path

Brian Proffitt

I work on what other companies call the "Open Source Program Office"; we maintain and help foster and help flourish the upstream projects that directly or indirectly relate to our commercial offerings. 

We support some directly, consult with a few more, and have a network of people who help. My role is to help with content and figure out the metrics issues around our communities. This is how my team tried to do this and how to make things work.

I am a data viz nerd. I love graphs, spreadsheets, I usually present to managers in a sheet not a deck or doc. Data can be beautiful at times, and a picture can be worth 1,000 words, and we can convey words in patterns. As infants we learn a visual cue, parents faces, and languages comes much later. Our brains can process visual information very fast. We respond well to visually presented data. And its a good day outside, we like the blue sky today, not grey and dark and raining.

> Beautiful, but Harmful

See the "blue dragon", a 3cm sea slug, also called a 'sea angel'; and it looks adorable, but it eats man of war jellyfish, very poisonous, and they store the venom.

The Mantis Shrimp is a 15-30am crustarean, and unlike many mammals, it can see more colors than any other on the planet; we have 3 types of rods and cones, they have 16. It is demonstrated in its shell. And it can strike its prey with 1,500 newtons of force. Aquarims can't keep them becuase they kill everything else and they break the glass. See <https://www.theoatmeal.com/comics/mantis_shrimp> to lean more :)

So, Data is Beautiful. We assume if data is presented in a visual and interesting way, it can be useful. But data is not always conveying useful information. You need a concrete approach. 

This graph shows informationisbeautiful.com post on 'what islamic golden age thinkers disocvered long before the west'; eg helocentricity is 901ad vs 1500ad. Often when we make a discovery, someone else has already figured that out.

There is another, 'the worlds biggest data breaches and hacks' from 18 months ago, showing how many million people had data hacked and thrown out to the winds. Its numerical, factual information; yahoo and marriott had a big problem, 500M people. If i was a security minded person, I would say gee, there are a lot of problems out there and this is a problem to be solved  - by me. If I care about my privacy, I mght say, I need to stop using these services.

So, the same data means different things to different people. 

And data is not always helpful

Here is openShift on Bitergia Dashboard (<http://openshift.biterg.io/app/kibana#/dashboard/Overview>) and they reach into Github and other places and make a nice graphical dashboard with which community managers can drill down to find out what is going on in their communities.

This project is in use today by OpenShift, but other teams like oSass have stopped using it. Why?

5 years ago, I joined Red Hat and came to FOSDEM for the first time. I was overwhelmed by the campus, the people, the thought going on. Red Hat was doing a lot of work here, as this is where the community lives; its a good meeting place to meet with folks like the Bitergia folks, who are in Spain.

We were looking at dashboards, and they made one for me for the oVirt project that I was closely working on, and RVO and Project Atomic and others. We had project dashboards. I know what things were about, and I tried to figure out things about the community based on that information.

But I could not do it! 

I don't think of myself as a dummy, but there was not something meaningful here. The Mailing list traffic is going up and to the right - great. The community is growing? Users coming in, more dialog. Is that good?

Maybe... It might be happy users, or it might be a developer list with a release coming up and lots of chatter that subsides after the release. Or is there tension and trolling in the list?

While I liked the idea of a dashbaord and wanted to improve it, my peers were not as into it. They thought it was not giving them useful information and they wanted to move on - stop using it.

OpenShift's community manager, Diane Mueller, knew what she wanted out of it, but everyone else backed off to regroup. What we learned from this is straight forward. We learned right away that you can not approach this situation, as we did not know what we were looking for.

We started getting involed in The Linux Foundation's "Project CHAOSS" which is to make a standard set of community metrics for any community to see growth/maturity/deline, risk... I invite you to look it up online.

We figured out first what metrics are valued, and then figure out how to gather data to build those metrics.

> Questions are critial

We read Douglass Adams. The answer, 42? The question? [ Silence ] Exactly! [ 6 times 9 ] There's always one of you out there ;)

The scientific method starts with a hypothesis. You start with a question. Then you look at data and see if it supports or negates your hypothesis. Don't pose giant questions, like "is my community the most healthy in the world?", instead have narrow scope questions, take little pieces in discrete ways, and look at what works and does not work.

> The answers must tell stories

You don't want to mislead with data. You want an honest look, and be ready for a story that looks bad. 

Humans react to visuals and stories really well. Tell a story about what is happening in your community, even if it makes you or your community looks bad. A story is not an end. I am telling you a story now, but some of you will want to keep talking with me already, even if I say, aha, then end. I started a conversation with you.

I might draw a wrong conclusion. But a story will involve more people who will say "no that data really means this" and that is collaboration and working towards a higher goal: the truth.

If you know what the questions are, maybe you will use a dashboard to answer them. Don Foster, talking next, will talk about tips to set this up and work on community metrics.

Thank you!

* <http://twitter.com/TheTechScribe>
* <http://twitter.com/redhatopen>
* <http://facebook.com/redhatopen>
* <http://youtube.com/user/RedHatVideos>

Q: 

A: You need to know your audience. A little trite, but it is key to telling any story. I am talking to this audience, mostly europeans who don't care about the superbowl tomorrow. I will not use USA sports metaphors, or EU sports. So, know your audience and what your managers are looking for. I will be honest, not couch things; but if managers want business data, that is what you can focus on. 

* * *

## Building a Community Metrics Strategy

Dawn M. Foster

OSS Strategy Lead at Pivotal

@geekygirldawn

dawn@dawnfoster.com

<https://fastwonderblog.com/speaking> slides

This deck has cats with measuring devices :)

I have worked in tech for 20+ years, and Intel, Puppet Labs, I worked on a PhD on the Linux kernel, and I joined the CHAOSS project that Brian mentoined. I joined Pivotal recently last September and we are working to contribute to k8s.

Community is people. Users, developers, marketing, evangelism, documentation, vendors... I include all the people who work on a product, from release managers, localization, core developers, downstream developers using your APIs to make modules or extensions and even contribute upstream, users who provide feedback. 

Some of that is done in dayjob time and others in their free time, but both are important parts of the community.

Metrics allow you to measure progress, and check if you are really achieving your goals. You can also spot trends, and recognize contributors. They can be key to setting new goals and strategies. You might find a lot of interest in soething you did not expect.

Recogning people is key. You may find someone who is doing something that people enjoy that you didn't know what happening. 

You can look at what the organization hopes to accomplish too. Ask, what is important for your project? Its worht the time to figure out what you want to do and how that supports the rest of the project community. Then your metrics benefits the whole project. 

Clear goals are key. This avoids a mess; you measure the right things, and you encourage good behavior. 

Then you have to set clear metrics that are right for those goals. There is no 'best metrics', you need to consider your strategies and plans and then use that context. If you want to measure performance, or the rate at which people move into positions of influence. Once you decide on success criteria, then you need to measure those things, and there are loads of tools to measure that stuff.

The LF CHAOSS project has some examples. Many big projects already have some sorts of dashboard. 

You can measure too much, but that might help in the future when goals change and if you have past data you can maybe benchmark future goals against historical data.

In libre software projects, you never what what direction other people will take with the software, and things can change.

So, historically, monthly is a good cadence. Or quarterly. But showing frequent updates with your community and recognizing contributions is great to do. 

At Puppet I did an exec team report, showing community participation. I didn't track lurkers, I contributed code or docs contribuitons. We also did a Puppet Lans blog post, less on the numebrs and more the human elements, like someone who did something very nice and impactful but small. Or people who were using up a lot of time but not a lot of output.

For example, at Pivotal, we are looking at a strategy to contribute to k8s. 

Here's an example CNCF use "DevStats"; <https://k8s.devstats.cncf.io>

Vanity Metrics! 

Say your org is moving up. but what if you have a rogue employee with a few lines patches that are each submitted as a different PR. That would push your org up the chart, but would annoy the rest of the community. I know none of you would do that, but that really happened in k8s. So, I encorage you to beware of the vanity metrics and gaming the numbers.

k8s has Special Interest Groups, and with such a large project. Bitergia and Grimoirelab uses Kibana, which can look at any field in a database. You can see timezone splits between CA, NY and UK.

So, for your own dashboards there are 3 routes:

1. Use an existing one
2. Create your own, DIY
3. Pay someone

(2) is not crazy; the Github API offers a lot. DevStats is libre and there are lots of things out there. Measure, Jeremy Garcia's project. 

For (3), Biturgia is a company that specializes in building them and uses libre software and contributes back. 

I suggest doing all 3, in that order. See what is out there. See how it meets your needs. Then build your own using the libre ones, and figure out exactly what you need. And then hire a professional expert to take it to the next level. 

There are non code metrics that are important too:

Diversity and Inclusion. We tracked this at our events, to see systemic outcomes. 

Leadership. We might have goals in an organization for people moving into leadership positions. Beocming board members, committers, reviewers. Those positions are often not on dashboards, and leadership positions often have fewer direct commts, so a simple dashboard would show them doing less in the project when actually they have more impact.

Specific things. there are many ways to measure things, related to your goals.

So, <https://chaoss.community> is a libre project, under Linux Foundation, that is open to anyone regardless of your skills. We have a lot of people writing code, but also people doing docs and other tasks. 

We have 3 Working Groups: Growing Projects, D&I, and Misc. We have a regular weekly call, and a mailing list. To learn more, see <https://chaoss.community/contribute>

Q: How to measure diversity in a project, on any axis of diversity?

A: I wish I had a magic bullet. The reality, it is hard. There are focus areas, like events, do you have attendees that are diverse in various ways. One way is by surveying people, how do they feel, if it seems diverse to them. You can measure event attendees. But the CHAOSS website explains something.

Q: A talk this morning in the python dev room that tried to answer that question, check out the video.

Q: 

A: Yes, if someone doesn't want the visibility, I check in with them. But with open data, some companies can track all their developers making commits, and so developers make each line a commit to play the numbers. But you never know how people may use it.

* * *

## Sustaining FOSS Projects By Democratizing The Sponsorship Process

### How we run and manage our FOSS Sustainability Fund	Duane 

Duane O'Brien	12:35	13:05

<https://twitter.com/duaneobrien>

`duaneo@indeed_com`

<https://duaneobriend.github.io/Talks/FOSSFund/> is the slides

I made these slides with ReMark, and I am now head of Open Source at Indeed.com; I was a DevOps-ish Perl guy, then a JS ruiner ;) then a Agile Facilitaror, then an OPen Source Enabler at a company that led to my current role.

Story time! We have a group of projects we sponsored; webpack was one. A senior eng manager said, we should give them money because we use tem. The CEO said that would be nice. So it happened.

Normally, a Program Head defines a Budget, the team executes... 

Actually, you req a budget, its trimmed, you have a deadline like Dec 31 to spend it, and then on Jan 2 you think of new things you hadn't thought of before. Snior folks make recommenations. A few high level discussoins and debates that result in compromises and a mixed bag of results. 

but the high level discussions is not OUR COMPANY. There are execs, team leads, the team members... But it is not a transparent discussion. 

Someone further down knows w egive money to PSF, but do not know how we got to that decision. and their ideas have to be escalated. If you are higher up, that is easy. 

Now! 

We have a contributor fund, a dedicated budget unrelated to events, projects can be openly nominated, there is $10,000 per month for the year going to FOSS projects. Criteria/

- OSI approved license?

- Used at Indeed, not just in our stack, but something ops uses to image employee machines, say. 

- a way to get funds, that the procurement dept can use. Its easy to give $100 and $10,000 but oddly $1,000 is harder. A paypal button?

- and a project must not be employee owned. 

Why do we do this?

* We want to drive open source particiation within indeed. Money does not sustain a project. Money is a level to flip in a company than time, sometimes, but it isnt the only thing. we want people to get involved; thats why contributors get involved in where funds can go. When they are involved, then they have reasons for why funds should go where.

* we want to highlight projects important to everyone. There are many people who work in OSPO offices here, and yet most do not know all the projects used at their company. I can name a few dozen packages but the team members have 1,000s between them.

* we want to sustain the projects we depend on

* we want to try something NEW in the sustainability space; many people trying different things to solve that problem. 

What could go wrong? :)

* Some projects DO NOT WANT money! they decided that the amout of money they need to make a difference that it is not worth the overhead to gain it. If you drive by with a lot of money it can cause problems. Conservancy has issues with projects that do not know what to do with it. Work is the issue.

* Voting might select a project that is in some crisis.

* Our process might break down, we get to a point we are not meeting our goals.

* We might need to curate the selection, even 10-12 choices can be hard to stack rank well. 

How did I get executive buy in for this?

Basically I said, I need $120k for a sustainability fund. The CEO said (again) that sounds great. I had a 1 pager for him [ reads it out ] and then I broke down how it would work, the goals, and I fired and forgot. 

Handed it in, seemed like a long short early in the year. Within an hour he replied, great stuff, so I was caught a little flat footed, I had wondered if I should ask for $5k or $60k... So always ask! I learned this doing charity fund raising; if you don't ask, they don't have a chance to say yes.

It is Feb something now. In January what happened? Contributions went up about 2x compared to 3 months ago. 20 projects were nominated and 5 were unknown to me before!

What can you do? If you email me and my small team at <opensource@indeed.com> then we can keep in touchh about how it is going. 

* * *

## Hackers gotta eat

### Building a Company Around an Open Source Project

Kohsuke Kawaguchi	13:10	13:40

From CloudBees

I want to talk about a journey from an open source hacker to a company CTO. 

I created Hudson while I was a Sun Microsystems. Then it became Jenkins. I created InfraDNA after leaving Oracle, it did not take me long to find that was not my company. And now I am CTO of CloudBees.

It has 200k master instances, 820k machines, and has helped 1M people do Continuous Integration and Continuous Delivery.

CloudBees is now a deep expertize of Jenkins and DevOps and offers a enterprise grade platform, expert level support, and we support Jenkins project.

Open Source Business Models: I saw after Sun went down that you need a good model, and if you can bring money to the table, it is good.

professional services? you do consulting on best pracceis, and do custo, per copany, developing on top of thhe project. I started this way; people knew i was the project founder, and i saw how people used the software in the real work; i was a user myself so I knew something about how this was used. That made me think about what was needed to be done.

Traiing? You can each people how to use and run the software; its good in early days, its good to get started, as know a lot about the software and its more crappy  than you think it is, but, it does not scale. You write training materials and see how users deal with it, and fix the software to make the training material better. ANd this iterates. You watch people struggle behind their shoulders and see how they get stuck. You see different usecases. Much better than professional services for that. A 1 day training is $2k each so ""$20k in 1 day."" But you can't do that every day and there is a lot of prep work. But I did enough so that it was automatic for me. the repetition meant eventually I was less motivated.

Enterprise products? Those 2 do not scale. You have to do work to learn money. But if yo build a product once and sell it multiple times, its scalable. But it does not sell itself! Libre licensing is not enough, you need a critical mass, a story and a sales org. You need to create a defensible segregatio between the product and your competitor, the libre project, that is totally free. And revenue can be recurring or one time. So, I am a hacker, I am not used to all the sales thing. But we built a sales team, it grew in size and in approah to selling that is really interesting; it is an art of its own and you need to bring the right people to that.

The critical mass of people and stories came for me because they wanted to ship soething I made, but I could keep the code and the IP. I am graetful that someone let me solve their problem but keep the ownership of the solution. In a project, you have course correting signals, but if you sell something, they expect certain things, and so there is less early feedback. Setting the project apart from the product is hard. If you pick the proprietary space that is too close to the libre one, then the community will recreate what you did unfree. It can come across as you suck the oxygen out because you are trying to keep things in the enterprise proprietary part, and it can ruin trust, or make your libre core less good than another libre alternative and your product becomes undesirable. Sales and how to make customers happy, how to price things, nowdays it is more and more common that people are used to it, like Adobe, doing subscription, but it used to be higher friction. 

SaSS? We run a version of the libre project for a monthly fee; it is easy to understand, and there are obvious economies of scale. But people say "I can run it on my workstation" and it can easily spiral into custom requirements that are per-customer, and Amazon can come along to offer the sams service. Jenkis is fundementally about customization so it was even harder to make this work for myself. 


Support? Thihs is helpful for larger orgs that in early  days I did not understand. This is a natural complement to the typical shortcomings of libre software. This can drive adoption of softare in bigger organizations. If you have IBM, 50,000 people, then the libre project is there because 1 person ran it on their own account or workstation. What the large org likes to do is make this project widely applicable for all, so you can do training and certification. 

People are key. As a project/company gets bigger, things change. A key thing I learned is about people. So important. Hiring from the project is  good; you find good qualified people, you don't need to train them, their share the missin and know the codebase. They usually already know how to work with each other, and employing these people enables them to solve bigger problems that the time availale in the weekend and evenings can not match. And often when I hire someone out of a company, they no longer have their Jenkins guy, so they hire our company to replace their old role ;)

But thhere are cons; The company wants to wrk on X, but I want to work on Y; am i work on work time or play time? When all the vocal contributors are at 1 company, it can be seen as co opting. Before we got their contributions and did not pay them; but now we pay them and they stop contributing at the weekend. And that can alienate others whoh are left alone on the weekends.

Volunteer contributors dont have patience for inconsistencies from a company. If I saw we will do X and another company person says its a horrible idea, then we both lose trust.

When you get bigger, things chance. You hire people outside the project, other job functions, and it morphs the company; you hire people without the libre DNA, or people with DIFFERENT libre DNA, and yet this is good because it avoids group think and a local optimum. 

So, internal contributors need to become more like external ones. 

Now, I skip a few slides to stay on time. 

Why bother with libre?

I fundementally believe that Libre is "eating the world"; this is a better way to develop software. THIS IS HOW TO DEVELOP SOFTWARE. So, this relies on people's spare time to move things forwards, by doing things that are very different to what you might expect; Jenkins started with a lot of Java developers and less Designers. haha :) So, the company could hire a dseigner, which did not happen before. Same with a technical writer. To push teh project forward, to make it credible to the large organization. Designers, writers, and many more...

But we have to eat. Software is valuable,a nd time is valiable.

Thank you.

Q: Is enterprise product libre?

A: No. I see a base of libre, and products are on the top or on the side. I felt worried about that pushback than others. My mental shift, as a developer, I was able to use my own time, but I could not control the money. I thought most other people would be like me, but no, if managers can use money to solve a problem instead of time, they prefer that. 

Q: How do draw the line between the libre and non?

A: Good question. Ealry on, I just wrote what I could. But that was not sustainable or explainable. Then I had a story, the non is more a managing thing.

Q: Are some users better for X, and also on your comment about backlash; we are a CRM, a libre one, and this is more a support basis, and we tryto aim for that. We have an enterprise version is also libre; with a support package. warrantees. 

A: You do support?

Q: Yes, but we always get our enterprise code into the upstream project. 


## Consorting with Industry

### Sustainability, FLOSS and building a local small business consortium

Phil Weir	13:45	14:15

@flaxandteal

In norawy a oil rig spilt. we wanted to know what standards the life critial software used, and they said that it was commercially sesntivie so they would not tell us. I did not think about cost; transparency was a base requirement. if a libre alternative existed, we would have immediately moved the oil copmany to it. i thought that proprietary software can not be a long term model because of that kind of disaster which is not accepatble.

so i went to quit my job and set up a new company to make that future real. consorting, an open source business model? you have a guild, a syndicate, a consortium. when i was a kid, we sat down and played d&d, we made a team to take on a quest and find gold or rescue a king or defeat a dragon.

back to busienss: A case study, in The Data Times. My micro company set up a consortium bid, for a set of companies to build a data discovery tool for data journalists. we made a budget, a serious UXR strategy, and sit with community journalists and figure out where to make a difference. all beefore we got any funding. once we got funding, we got a lwyer to write a contract and build a prototype and test it and then take that to a v1.0.

we have a business syndicate, and that has a few companies from 1 to 6 people. they work together on various projects, some work more and some less in or out the syndicate. each project within the syndicate has a consortium, which is the companies, their clients, and perhaps the clients other suppliers. 90% of our structure is in the consortium. 

So, after setting up on my own, i realised that when you run a company, you need a focus; a community to serve. kowing your focal point is key to making decisions. 'open source' is 2 things, open, and source. 

but clients see that as not a thing, but a piece of other things. open is more than source; open access in academia, open data in government or private sector data. people who want to give open focused companies work care about open innovation, standards, and cybersecurity. 

In business there is a common term "USP" and ...

...

Client services. Do thehy want their work to be proorietary or commercialised in their own way? We say OK, but, here are thigns we imrpoved in libre prpjects and we contract to upstream them. "Non sector specific" things too; we can start or upstream things. Clients do not want their competitors using their code, but "agile script calednar" software is not a concern. In fact less technical clients are more into this than technical ones whoh have a fixed idea about how things work. 

Many roles are needed to build products. Infra, data, sysadmin, devlops, sybersec, product, ux, ui, seo, comms, copy, socmed, tender bid writing, bizdev, fiance, marketing, fe, be, app, systems, hw, design, av, training, research, funding, admin. All things you need in a business. You also need an overlap of these skills, so if someone is out sick or leaves, you can keep going. You could pay over market rate in a pinch. 

Is it start up? Is it a coop? Most coops are incorporated; our syndicate is not. Some consortia are. Also our member companies are. Is it freelancing? A contractor group? The client is control of how thing interact on their project. It involves a power balance. we take on projects that are deliverable-ized. they have a requirements gathering within the group. 

If it works without mandating libre, it isn't what we do :)

How to start out? If you want to start a consorrtium; one area to start initilaly is R&D services. thisvalues specialist skills, and you usually hvae special skills esp if you are technical. This can be experimental, hi tech client services, that is more forgiving than offering a 5 nines network service.

budget pivoting is something I have done a lot of; mostly in libreoffice spreadsheets and python scripts. i have a github repo for that. Its about how to divide up money in advance. also, biz dev and tendering. going ot business events. there can be a lot of buzzwords, but at commercial events, you find peers and they will respect you as well.

community, in belfast linux group, we do varied events, and partner with a local hackerspace.

legal, mind that things are legally sound.

multiscale, big jobs and small ones, quick one time revenue and bigger annual payoffs. 

be very careflu about taking on too much work. 

key points: cost = risk + time + skills

no one is guaranteed work

anyone can "coordinate"

90% of a project is its structure

being fair and consistent is important when there is no structure

life is a negotiator, whih 

do not depend on people with priorities that conflict

COunterintuitively, the less you charge, the harder the client

Peeople must run rpoejcts to relate

NEVER underdevelop non devleoper disciplines! 

<https://github.com/flaxandteal/consorting-docs>
<https://github.com/flaxandteal/fodsem-2019-consorting-with-industry>


* * *

## Towards a sustainable solution to open source sustainability

Tobie Langel	15:30	16:00

OpenSSL had a budget of $2k a year and Heartbleed cost the US medical industry $500M in compromised records because of it. This was a key moment in Tech history because people woke up to how underfunded the libre ecosystem is, that the whole industry now depends on. 

Sustainability came into the headlines; burn out, people leaving projects, and the indsutry started looking for solutions. Could we use other solutions than for software, and use them to make libre projects more sustainable?

Patreon was popular at that moment. While made for artists to "create a meaningful revenue stream" became key to VueJS, a developer got his users to fund his work on it via Patreon, and he now earns $17k monthly to work on the project full time. Focus, Goal, Success Story. But is that reproducible? Not really. 

GitCoin. A github issue market, $500,000 was paid out on the platform in 2018, its blokcchain based, and it also has a ad network (CodeFund) and a Patreon like solution (Gitcoin Grants.) 

OSSC. VF fund. New.

Open Collective: webpack got $400k in 2018. trivago hiring got a lot of boost from it, and their code is better because of it. But that was over 25% of the oc fund. A long tail problem.

OC did "back your stack" which scans your project and builds a dependency tree so you pay once and they split it.

Tidelift is the red hat model applied to smaller projects. It's really new! Hard to say if it will become a big deal.

So there are new things.

I liked this video made by demonocracy.info about the us debt. A $100 bill stacked up to $10,000, that's the ad network codefund. 10 of them is tidelift and oc annual pay out each. 22 million developers in the world, 55% full time. 30% part time. 15% non professional. If mean average is $65k full time wage, it's $1tn+. A pallet of $100 bills is a billion. So a $1t, is a skyscraper of bills. So this is a tiny amount.

Dhh wrote about "the perils of mixing open source and money," there are downsides to paid time. Free time has natural efficiency. 93% of Linux kernel development is paid dayjob.

I owe my career to libre culture. I wonder about only a few people being paid for libre work.

There are many good side effects to contributing upstream. Nagle showed free riders get only half the value. 75% of Facebook engineers say the fb open source programme is why they accepted the offer.

**the key to libre sustainability is to show companies what's in it for them when they start contributing.**

Q: how to deal with people who are not familiar with libre?

A: digital transformation in general, they can leapfrog to libre better than competitors who went digital but not libre. And I do that
FinTexh Open Source Foundation, Leslie wrote a white paper for them. Cc by text, copy paste, change terms. https://twitter.com/lhawthorn
