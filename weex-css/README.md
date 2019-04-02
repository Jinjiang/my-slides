# CSS in Native

<small>CSSConf Guangzhou 2016</small>

----

<!-- backgroundImage: ./jinjiang.jpg -->
<!-- style: background-color: #f90; background-size: contain; background-position: center right; -->

### Self Introduction

* @勾三股四
* `mailto:zhaojinjiang@me.com`
* `twitter.com/zhaojinjiang`
* <weex></weex> <vue></vue>
* ⚽⚽⚽ 🎵🎵🎵

----

# 🕛

----

# What is <weex></weex> ?

----

<!-- backgroundImage: ./mobile.jpg -->

## 1

Build Dynamic Mobile App

----

<!-- backgroundImage: ./vue-component.png -->
<!-- style: background-size: contain; background-position: center left; -->

## 2

Using HTML / CSS / JavaScript  
<small>Actually <vue></vue> Vue 2.0 by default</small>

----

<!-- backgroundImage: ./power.jpg -->

## 3

Native View & Device Power

----

<!-- backgroundImage: ./construction-work-carpenter-tools-large.jpg -->

## 4

Free to Extend

----

<!-- backgroundImage: ./weex-github.png -->

## 5

Open Source: [alibaba/weex](https://github.com/alibaba/weex)

----

# 🕑

----

## How We use CSS?

----

<!-- backgroundImage: ./native-style.png -->

Every native view has its style

----

<!-- HTML -> JSON -->

### In Compiler

Transform HTML/CSS code  
into JSON first.

----

<!-- JSON -> style -->

### In JS Runtime

Send JSON to native render  
through JavaScript

----

<!-- backgroundImage: ./weex-arch.png -->
<!-- style: background-size: contain -->

&nbsp;

----

# 🕒

----

### We Have Two Ways

----

### Mode A: inline style

```html
<template>
  <div style="width: 200">
</template>
```

----

### Final native call

```js
nativeDom.createBody({
  type: 'div',
  style: {
    width: 200
  }
})
```

----

### Mode B: `<style>`

```html
<template>
  <div class="foo">
</template>
<style>
  .foo { width: 200; }
</style>
```

----

```js
const $style = {
  foo: { width: 200 }
}
nativeDom.createBody({
  type: 'div',
  style: $style.foo
})
```

----

### Final native call

```js
nativeDom.createBody({
  type: 'div',
  style: {
    width: 200
  }
})
```

----

### Mode A &amp; Mode B

CSS -> JSON -> Native View

----

### Mode A &amp; Mode B

* familiar 😀
* fast 😀
* scoped 😀

----

# 🕓

----

# Something Else

----

## Support More Length Units?

----

```html
<template>
  <div style="width: 100vw;"></div>
</template>
```

----

### define `CSS_UNIT`

in runtime

`VW`: `<px of viewport> / 100`

----

### Compile CSS Values

before runtime

`100vw` -> `100 * CSS_UNIT.VW`

----

### Final native call

```js
nativeDom.createBody({
  type: 'div',
  style: {
    width: 100 * CSS_UNIT.VW
  }
})
```

----

## How much CSS does Weex support?

----

<!-- backgroundImage: ./css-stat.png -->
<!-- style: background-size: contain; -->

[Weex CSS Status](https://gist.github.com/Jinjiang/2112c034624a2a03267fc7d8d7ec964b#file-stat-css-md)

----

### Some Details

* `flexbox`
* `border-box` only
* `position: sticky | fixed`
* no `float`

----

### Feature Requested Most

* `display: none`
* `background-image`
* `flex-wrap`
* `text-shadow` | `box-shadow`

----

## CSS Inheritance?

----

<!-- backgroundImage: ./reset.jpg -->

Ref: [Fix Global CSS with PostCSS](https://ai.github.io/postcss-isolation/)

----

Weex do not inherit anything.

`all: initial` by default

----

## Support PostCSS

by `vue-loader`

----

# 🕕

----

<!-- weex init -->
<!-- inline style -->
<!-- <style> -->
<!-- more units -->
<!-- PostCSS: cssnext -->

# Demo

----

# 🕗

----

# In Developing...

----

## 1) Viewport

----

```html
<head>
  <meta
    name="viewport"
    content="width=device-width">
</head>
```

----

### Final native call

```js
nativeMeta.setViewport({
  width: 'device-width'
})
```

----

```html
<head>
  <meta
    name="viewport"
    content="width=750">
</head>
```

----

### Final native call

```js
nativeMeta.setViewport({
  width: 750
})
```

----

# 🕘

----

## 2) Pseudo Class

----

Problem

----

```html
<template>
  <div>
    <text
      style="color: red;"
      ontouchstart="start"
      ontouchend="end">Touch!</text>
  </div>
</template>
```

----

And bind events:

```js
function start (e) {
  e.target.style.color = 'blue'
}
function end (e) {
  e.target.style.color = 'red'
}
```

----

How About Using Pseudo Class to remove JS Events?

----

### Step 1

Support **`color:active`** style in native view.

Respond natively.

(without JS events)

----

### Step 2

And **transform** pseudo class into them ...

----

```html
<template>
  <div>
    <text class="foo"></text>
  </div>
</template>
<style>
  .foo { color: red; }
  .foo:active { color: blue; }
</style>
```

----

After **transform** ...

----

```html
<template>
  <div>
    <text class="foo"></text>
  </div>
</template>
<style>
  .foo { color: red; }
  .foo { color:active: blue; }
</style>
```

----

### Final native call

```js
nativeDom.createBody({
  type: 'div',
  style: {
    color: 'red',
    'color:active': 'blue'
  }
})
```

----

# 🕙

----

## 3) Pseudo Element?

to draw a triangle

----

### in Web Platform

```css
tooltip::after {
  content: "";
  position: absolute;
  border: 5px solid transparent;
  border-left-color: black;
}
```

----

### We Recommend SVG!

----

```html
<svg height="10" width="10">
  <polygon
    points="0,0 0,10 5,5"
    style="fill:black;">
  </polygon>
</svg>
```

----

<!-- backgroundImage: ./iconfont.jpg -->
<!-- style: background-size: contain; -->

## 4) Icon Font

----

## 5) Transition

----

# Demo 2

----

### Conclusion

* familiar / fast / scoped
* more units
* status of CSS support
* no inheritance
* PostCSS
* Viewport🔧/ Pseudo Class🔧
* SVG🔧/ IconFont🔧/ Transition🔧

----

# 🕛

----

### One More Thing...

![](./asf_logo.png)

----

<!-- backgroundImage: ./apache.png -->
<!-- style: background-size: contain; -->

&nbsp;

----

# Thanks

github: alibaba/<weex></weex>

<style>
  weex {
    display: inline-block;
    width: 3em;
    height: 1em;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-image: url(./weex-logo.png);
    background-size: contain;
  }
  vue {
    display: inline-block;
    width: 1em;
    height: 1em;
    transform: scale(1.5) translateY(0.1em);
    background-position: center bottom;
    background-repeat: no-repeat;
    background-image: url(./vue-logo.png);
    background-size: contain;
  }
</style>
