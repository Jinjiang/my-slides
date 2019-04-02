# {CSS}

----

## 个人简介

* 赵锦江
* [W3C HTML 中文兴趣组](http://www.w3.org/html/ig/zh/)
* 无线事业部 阿里巴巴 杭州
* [@勾三股四](http://weibo.com/mx006)
* [jiongks.name](http://jiongks.name)

----

# {My CSS Conf 1}

----

## 2015-01-10 Beijing

![](./images/my-css-conf-1-4.jpg)

----

## A Lightening Talk

It's really lighten but...

![](./images/my-css-conf-1-5.jpg)

----

## A Lightening Talk

![](./images/your-css-conf-1-2.png)

----

## A Lightening Talk

![](./images/your-css-conf-1-3.png)

----

## Resources

- [CSS Scoping in Web Components](http://jiongks.name/slides/css-scoping/)
- screencast: [lighting talk](http://www.tudou.com/programs/view/8bvwGHaL6T4/)
- screencast: [more details](http://www.tudou.com/programs/view/dz4aXjDFnLw/)

----

## http://zorro.io

![](./images/zorro.png)

----

## That's the Future

![](./images/future.jpg)

----

## But ... Reality

![](./images/unhappy1.jpg)

----

# {Our Team Memos}

----

## Why Talk About Memos?

That's practice stories we have learned in the past

![](https://gtms03.alicdn.com/tps/i3/T1OjaVFl4dXXa.JOZB-114-114.png)

----

## Why Talk About Memos?

And hope to inspire you success in reality

![](./images/happy.jpg)

----

## Story is Cheap?

## "Show Me the **Code!**"

----

## Story is Cheap?

People need really *general* lessons, not by-company/by-team/by-closed ones or which means nothing to themselves

----

## Story is Cheap?

So our stuff is just pure, no deps, and (will be soon) open-sourced

----

# Agenda

* screens
* images
* conventions

----

# Screens

----

## DailyFrontEnd

![](./images/screens.png)

----

## DailyFrontEnd

![](./images/screensizes.jpg)

----

## DailyFrontEnd

![](./images/galaxy-phones.jpg)

----

### DailyFrontEnd

![](./images/suprised.png)

----

## All Kinds of Devices

- different size
- different DPR
- "surprised" devices

----

## Flexible Web Design

![](./images/flexible.jpg)

----

## Flexible Web Design

![](./images/flexible-en.jpg)

----

## Flexible Web Design

[![](./images/flexible-author.png)](https://css-tricks.com/five-questions-with-zoe-mickley-gillenwater/)

----

## Flexible Web Design

> 现在,拿起你手中正在阅读的这本书,调整它的大小,以便更易于阅读。

----

## tips

## **Break by-self**

![](./images/broken.jpg)

----

## lib.flexible

![](./images/rem.png)

----

## lib.flexible

1: assume device width is fixed

- just one width-fixed PSD file
- length unit = `<width>` / `10rem`

----

## lib.flexible

![](./images/px.png)

----

## lib.flexible

2: if you want to show more in larger screen

- dpr related length
- e.g. font size \*= dpr

[github](https://github.com/amfe/lib-flexible)

----

# Responsive

----

## For Screen Height

set some breakpoints

- 4:3
- 16:9
- and ...

----

## Webview Bar

![](./images/webviewbar.png)

----

## Vertical Responsive

![](./images/responsive.png)

----

## How About iPad/Laptop?

![](./images/ipad.png)

----

## How About iPad/Laptop?

Sadly say, few successful case around ...

----

## Challenges

- different teams
- different business
- different *entrance*

----

## tips

## **Choose the right one, not the "best".**

----

## tips

## **Use the "power" of it, not everything.**

----

# Images

----

## Workflow

![](./images/ata.png)

----

## Workflow

![](./images/workflow-old.png)

----

## Workflow

- crop from `*.psd` file
- export to images folder
- write html/css/javascript code
  - adjust image size and quality
- deploy (upload)
  - separate images from code

----

## Three Matters

- file size
- display size
- (quality)

----

## Three Matters

![file size, display size, quality](./images/imgimgimg.png)

----

## Our Improvement

We make lots of efforts on it

----

## Our Improvement

searching for Photoshop plugins

----

## Our Improvement

Image CDN: custom size and quality by url suffix

----

## Our Improvement

`lib.img`: automatically get the url

----

## Our Improvement

![](./images/px2rem.png)

----

## Our Improvement

`px2rem`: parse `*px` to `*rem`

[npm](https://www.npmjs.com/package/px2rem)

----

## Our Improvement

![](./images/img4dpr.png)

----

## Our Improvement

`gulp-img4dpr`: separate bg image url for each dpr

(will be open-sourced soon)

----

## The Problem

## But It's not cool...

----

## The Problem

## as all above *fragmented*

----

## The Better Solution

We put them together finally

----

## The Better Solution

![](./images/workflow-now.jpg)

----

## The Better Solution

![](./images/things.png)

----

## The Better Solution

![](./images/result.png)

----

# Yes We Use PostCSS

----

## Easy to Collect

![](./images/postcss.png)

----

## Easy to Integrate

- gulp
- grunt
- webpack
- ...

----

## tips

## **Just focus on the Scenes, not a single feature.**

----

## tips

## **Find a good platform which can transfer you to everywhere.**

----

# Conventions

----

## Conventions

> We need same coding style! same tools! same editor ...

----

## Follow the Edge

> I want to try React.js, CSS Next ...

----

## So the Problem is

How to follow conventions and new technologies at the same time?

----

## But Actually

First, following the same conventions in a group is not necessary, but be in a repo.

----

## But Actually

Second, many projects dies very fast.

----

## Our Strategy

- *No* forced team conventions
- Build a *generator marketplace*

----

## "Adam"

![](./images/adam.png)

----

## "Adam"

![](./images/templates.png)

----

## "Adam": Intro

- a simple project generator cli
- and adam marketplace service
- easily find, use, create and fork generators with git repos

----

## "Adam": Rules

Every person could create its own generator and influence more people to use.

----

## "Adam": Benefits

- The edge parts could be imported easily.
- And the good parts will be applied much.

----

## "Adam": Reality

You must have ability to work fine with all kinds of popular tools, coding styles, frameworks, solutions ... now.

----

## tips

## **Find the keypoint clearly and always keep walking fast!**

----

# Tips Review

----

## tips

**Break by-self**

----

## tips

**Just focus on the Scenes, not a single feature.**

----

## tips

**Find a good platform which can transfer you to everywhere.**

----

## tips

**Choose the right one, not the "best".**

----

## tips

**Use the "power" of it, not everything.**

----

## tips

**Find the keypoint clearly and always keep walking fast!**

----

## tips

- break by-self
- focus on the scenes
- find a platform
- choose the "right"
- use the "power"
- keep walking fast

----

# Thanks
