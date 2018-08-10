---
title: "Css and Scalability"
layout: post
created: 2016-03-24
---

Several years ago I got curious about how css worked at scale. When I first started out, there weren’t nearly as many learning resources as there are now. There were a few books that my friends lent me and a couple of decent blog posts. But css was still pretty new and most people hadn't started to think deeply or learn hard lessons about concepts of maintainability when working with teams on large web apps.

Css zen garden was a highly influential demo 'back in the day.' Most of my colleagues and I thought this did a perfect job at illustrating the power of the cascade. You could drastically alter a site's visual design without touching even a bit of html.

In the beginning, that’s what people sold me as a feature. By writing css, you could make a change in one place and have it propagate everywhere. In principle this sounds highly desirable. But eleven years later, my experience on both large and small teams is that this is the most terrifying thing about css and can cripple an organizations ability to iterate on their product.

> Two css properties walk into a bar.  
> A barstool in a completely different bar falls over.
> 
> <cite class="mt0 fs-normal">[- @thomasfuchs](https://twitter.com/thomasfuchs/status/493790680397803521 "Thomas Fuchs on Twitter")</cite>

After countless implementations of css systems that broke down and became difficult to maintain as apps and teams grew larger...I've found I want little to no part of the cascade's 'features.'

I used to joke that the worst part about front-end development was that the other people solving your problems were front-end developers. But in the past few years a lot of very smart people have been thinking more about css and this has lead to some fascinating discussions around how to build ‘scalable’ ui and how that relates to css. When I first started to think about scalability I naturally started to read every blog post and watch every tech talk I could get my hands on. There are a number of suggested 'best practices' around how sass/less/stylus etc. will help you build maintainable css. How mixins can make your code more DRY. How extends will keep your markup clean and pretty to look at. How BEM will make your code so perfect you want to cry.

But what is reality? What actually gets shipped to production? What do all of these tips and tricks do to our production css? How does it affect the whole team? More important, how are your end users affected?

When it comes to designing and shipping products I like to think about reality. Which can be challenging sometimes. I’ve sat in too many meetings where people don't want to hear or talk about reality. They talk in empty phrases about hypothetical possibilities. I like to do drugs and talk like that too sometimes. But, if you don't accurately assess where you currently are and what your reality is, it can be pretty tough to figure out what your problems are. And the chance of finding solutions to unidentified problems is, well, not good.

So there I was, in the fall of 2014, a new employee at an [award winning tech company](http://salesforce.com "sfdc dot com") that had a website. And that website had a lot of css. Wanting to familiarize myself with the codebase - I opened up dev tools and started to read the site's css.

Line by line.  
From start to finish.  

Some of the code made me laugh:

    /* Start of reusable styles here */

Some of the code made me cry.
```
.homepage-promos .grid-50 {
width: 100%
}
.homepage-promos .grid-33 {
width: 100%
}
.homepage-promos .grid-34 {
width: 100%
}
```

Some of it made me laugh and cry at the same time.

    #seo-container {
        display: none;
    }

Some of it made me wonder where numbers come from

    .product-tab {
      height: 530px;
      width: 99.7%;
    }

Some of it made me thankful that I have read the spec

    .container-inner.promo-status {
         float: center;
      }

Eventually, I stumbled across this class of code.

    .left {
      float: left!important;
    }

I saw this class and thought - well at least you know what it does. Unlike some of the other css it seemed like it was very reusable. By anyone who needed to float something left.

I kept reading and stumbled across this:

    .left-max-scr1,
    .left-max-scr2,
    .left-max-scr3,
    .left-only-scr1 {
        float: left;
    }

…followed by this very similar block of code…

    .left-min-scr2,
    .left-min-scr3,
    .left-max-scr3,
    .left-only-scr3 {
        float: left;
    }

I found myself wondering what the story was behind this next code block. Is it for elements with the class .header-nav-list that aren’t nested inside an element with the class .header-nav-container?

    .header-nav-container .header-nav-list {
        float: left;
    }

    .CA .header-nav-list.second {
        float: left;
    }

    #nav.challenger-a .submenu-3col li,
    #nav.challenger-a .submenu-3col li {
        float: left;
    }

Here we start to see a mixture of content-semantic (.submenu) with visually semantic class names (-3col).

    .ie6 #footer-content .flex-control-nav li a,
    .ie7 #footer-content .flex-control-nav li a,
    .ie8 #footer-content .flex-control-nav li a {
        float: left;
    }

    #nav.challenger-a li.menu-products {
        float: left;
    }

Css is interesting because unlike other types of code, you are most likely to find the most recent code towards the bottom of the file. Reading a css file from start to finish will often times reveal in chronological order how a defined system breaks down.

In the above examples we see things breaking down to increasingly longer selectors that have more and more weight that were only setting one property to one value: float: left.

Mind you, there are only three options for float. Contrary to one of the code examples above, there is no float center. Just left, right, and none.

Reading the css made me think about a lot of things. One thing I couldn’t get out of my head was - why all this work to change one thing? Why write all that code to just float something left?

To me, this is a reflection of the mental model most people are in when they are writing front-end code. They are generally trying to change one or two things in an interface and that’s it. And when you are in this mode of development you want to limit the amount of things you break - while also making the change that is being asked for in some jira ticket that got assigned to you.

I also started to think about communication and how it moves in multiple directions. If I’m reading html, I want to know what the css is going to do. If I’m reading css I want to know what will happen if I apply it to a block of html. In a great system there is a two way street of information. If you look at the css, you can tell what will happen. If you look at the html, you know what the code will do.

But most front-end systems are not great. You have what I refer to as one-way streets of information. If I am looking at a block of html and I can’t find ALL of the css that will visually affect how it renders in under 5 seconds, I feel that system is failing. So if I ran into the above example:

`.container-inner.promo-status`

That means I would have to find elements that had both of those classes (but not limited to) on an element. But by looking at this block of css I also have no idea if it has been redefined elsewhere. So I must grep through the system to find definitions for container-inner and promo-status. By the time I found those definitions - I would probably have forgotten what I was trying to do in which case I’d leave my desk and go get coffee.

On the flip side think about this example:

    .red {
      color: #FF4136;
    }

I’d presume that this would make an element have red text. I was traditionally told this is a horrible name for a class. But I quite like it. The only way I’d think it was bad is if it set the color property to: purple, blue, or any other color that wasn’t red. Or if it was mutated a few times to a few different shades of red. But more on that later.

And if I saw this block of html:

    <div class=“red”>Some text</div>

I’d know without looking at the css what was going to happen. This is what I call a two-way street of information. It’s easy to learn a group of small classes that do one thing well and can be reused in any context. There should be a one to one mapping between a class and it’s definition. Having a class that has multiple definitions be being redefined depending on context doesn’t solve problems, it creates them. The concept of immutability is not new - but we’ve ignored it in the css community for far too long. Imagine if you had a function called ‘filesize’ where you passed it a filename and it returned the filesize. That sounds pretty great. But imagine if sometimes it returned the amount of lines in the file. That doesn’t sound great at all does it. Well that’s what you’re doing anytime you redefine a css class. It’s the worst for people who are good at debugging css. It’s even more horrible for people new to the cascade.

When we look at convoluted css, we must remember that behind every css ruleset is a story. Maybe the author was on a time crunch and didn’t have time to look up if there was some previously written code they could reuse. Maybe they don’t care about css at all and the second something works they save, commit, and go back to writing monads. When I write bad code, it isn’t because I’m not trying to write good code. There are always other forces at work. What are the forces that work against writing clean reusable code? How do we get rid of them? I’ve spent the last few years doing a lot of user testing centered around how people write their own front-end code, consume other peoples front-end code, and think about developing UI in general. It has been a pretty valuable experience (as user-testing generally is). I’ve learned a lot about the different mental models people use - and how to try to construct systems that allow people of all abilities to spend more time designing / building and less time debugging/fighting/crying.

**Sidenote:** _(I don’t know where to fit this in)_  
Before I started doing both performance and user testing I did not like the idea of oocss/atomic css. I really liked writing monolithic classes and traversing the dom with my selectors. It made a ton of sense to me and I was able to build out a lot of websites that way. Running tests and testing my assumptions helped inform a lot of how I think about code now. I’m not very interested in what I can do with css. I’m interested at this point in what I can help groups of people do with css.

If you’re going to build a new component, or change a piece of UI in your app - what do you do? I don’t know anyone that reads all the available css in the app to see if there is something they can reuse. Who has time to read thousands of lines of code before they start working!? Even if people do have the time, I have not found that this is their first instinct on how to get going. I don’t blame them.

Even if you did read all of the available css and stumbled upon some code that you think might be reusable - what if someone edits it later? If you are starting from the assumption that your css isn't reusable, your first instinct is to write new css. But most likely you aren't creating a new classification of visual styles. In my experience it is likely that you are replicating visual styles that already exist.

Salesforce may pay people a lot of money. And they may win Forbes awards for being the most innovative. But they are not known for hiring people who are great at css. Their css is anything but innovative. After reading all of the css and going through bits of crying, head-scratching, and laughing out loud - I determined that this problem must only exist at Salesforce. Surely awesome companies like Medium, GitHub, Adobe, and Pinterest didn’t have this problem. They’ve hired some of the most amazing css developers I’ve ever met. They must have figured out how to scale css.

Naturally I opened up their sites and started to read their css too. Line by line. From start to finish. I wanted to see what everyone’s reality really was.

I found the exact same things.

Let’s take a look at just the rulesets that set things to display none:

*   [GitHub](https://gist.github.com/mrmrs/786241f0a5fade0324e2 "GitHub")
*   [Pinterest](https://gist.github.com/mrmrs/57705f9a9fdce4d3d6f7 "Pinterest")
*   [Medium](https://gist.github.com/mrmrs/07e2ad668bac33e2da67 "Medium")
*   [Adobe](https://gist.github.com/mrmrs/2d5592826adb45748bac "Adobe")

That’s a lot of code setting things to display: none. If you look at the files above ask yourself some questions: Do they seem like they follow the principles behind DRY? Does this seem like a bunch of code you would know how to reuse?

If I’m going to write css, I want it to be reusable. If someone isn’t going to reuse it - it seems pretty useless.

So what does DRY even mean? Because you do have to repeat yourself somewhere! You either repeat yourself in html or in css. But no matter how good you are at css - you can’t build out a new component without editing html. But, it is possible to build a new component without writing a single line of css. And this applies to changing UI too. You should be able to change most things, just by editing html.

When you repeat yourself in html, there isn’t any real damage to file size (read: multi-class patterns will not bloat your html). A user doesn’t have to download every html file from your website to view one page. Yet most web sites are architected in a way that require you to download the css for the entire site when you try to view one page. This is a broken model.

The files I referenced above are the result of css authors generating really long selectors that add a lot of weight to your cascade to do one or two things. And as time goes on there are more and more things in your cascade to override. So your selectors get longer and longer, your file sizes get bigger and bigger, and the amount of time you spend debugging css is going to go up and up and up.

In this model, you will never stop writing css. Refactoring css is hard and time consuming. Deleting unused css is hard and time consuming. And more often than not - it’s not work people are excited to do. So what happens? People keep writing more and more css.

This affects scalability in two ways. One, it makes it harder to work on your app because you can't realistically memorize all of the css in your app. And if it isn't internalized it isn't likely to be reused. It also means that your users have an increasing amount of code to download. And if you think “oh but it will never get that bad, gzip will save the day” - well you’re wrong. Pinterest has more than 1mb of uncompressed css spread out over 5 files. Once gzipped it is still a whopping 159kb. **That is a lot of css**. 97% of it isn’t used on the homepage. I’d rather just try and send my users the 3% they do need.

Part of this code bloat is an attachment to authoring ‘content-semantic’ class names. Honestly I’m surprised you can find people that still think this isn’t the worst idea ever. [Nicolas Gallagher already wrote the mic drop piece on why this doesn’t work.](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/) But for some reason you still find people arguing for its merits as a silver bullet solution. Personally I think most of the internet is unnecessarily broken. So I assume everything we have been taught is most likely wrong.

This is where we come to the crux of the problem I have with any system that requires you to map visual styles to components in your css. Content semantics have **nothing to do with visual styles**. When I used to build things with legos I never thought ‘oh this is a piece for an engine block’ I thought ‘oh cool this is a 1x4 blue lego and I can do anything I want with it’. It didn't matter if I was building an underwater aquanauts base or an airplane - I knew exactly how to use that lego block.

It’s all about lego bits. Because I never needed to re-contextualize my understanding of lego blocks. I could use them across ‘projects’ and they were always the same. I dream of this world in front-end development. I want lego blocks that work everywhere because there is serious power in leveraging solutions that are project agnostic.

Outside of some brand specific background-images, gradients, and colors etc., the overwhelming majority of css you would need for your site has already been written. Yet we continue as a community to constantly reinvent the wheel. Which is starting to feel like building a camera from scratch every time you want to take a photo. I totally think building cameras from scratch is cool and a worthwhile endeavor. But I don’t want to do it every time I am going to take a photo. I just want to go take photos.

When I read about or listen to ideas on how to scale an app’s css - most of the talk is about how to write css. The real way to scale css, is to stop writing css. Abstract out the things you use most and move to a multi-class pattern where you compose visual patterns in your html. You might be amazed at how quickly your team starts to move.

There are a lot of problems that come along with people writing css. Inconsistent values, the introduction of magic numbers, duplicate code, non-responsive patterns. I’m sure there are others.

If you create a system that is flexible and powerful, and pull from that, you might find your designs to be more harmonious. You might spend less time debugging the cascade. Your pages will probably load faster. But who knows. Maybe that won’t work for you at all. All I know is the current model is definitely not going to work.

Writing new css should be the exception, not the rule.

### Parting Thoughts

If you have never read your outputted css from start to finish - I recommend it as an amazing way to learn a lot about css and how people use it. After I read salesforce’s css I started reading css in entirety for many sites. I still do this! I learn something new every time.

Don’t take this as dogma. The real point of this whole piece is to encourage you to go test your assumptions. Not many people sit with other people building UI and just *observe* how they build out new features or refactor old ones. User-testing is such a great exercise to learn about how people use things. You can learn a lot from people who are great at writing front-end code and also people who are brand new to it. I wouldn’t have learned much of this if I just sat around and tried to solve problems by myself or read all the latest hip blog posts. The reality is lots of people with varying levels of agency will touch your front-end code and you should design a system that works for everyone.

Thank you to everyone who has given me feedback on these thoughts over the last few years. And special thanks to the trailblazers that had the guts to challenge existing best practices and gave me the courage to do the same. I'm looking at you [@stubbornella](http://twitter.com/stubbornella), [@necolas](http://twitter.com/necolas), and [@dam](http://twitter.com/dam).
