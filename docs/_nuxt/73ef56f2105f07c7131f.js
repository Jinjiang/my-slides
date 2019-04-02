(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(n,o,e){"use strict";var t={components:{MarkDisplay:e(141).a},props:{content:String},methods:{setTitle:function(n){var title=n.title;setTimeout(function(){document.title=title||"My Slides"})}}},c=e(17),component=Object(c.a)(t,function(){var n=this.$createElement;return(this._self._c||n)("MarkDisplay",{attrs:{markdown:this.content,autoBaseUrl:"",autoBlankTarget:"",autoFontSize:"",keyboardCtrl:"",urlHashCtrl:"",supportPreview:""},on:{title:this.setTitle}})},[],!1,null,null,null);o.a=component.exports},144:function(n,o,e){var content=e(163);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(60).default)("0c745229",content,!1,{sourceMap:!1})},162:function(n,o,e){"use strict";var t=e(144);e.n(t).a},163:function(n,o,e){(n.exports=e(59)(!1)).push([n.i,"body{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;color:#2c3e50}",""])},197:function(n,o,e){"use strict";e.r(o);var t=e(140),c={components:{Slides:t.a},data:function(){return{content:'# {CSS}\n\n----\n\n## About\n\n![](./images/future.jpg)\n\n----\n\n## 个人简介\n\n* 赵锦江\n* [W3C HTML 中文兴趣组](http://www.w3.org/html/ig/zh/)\n* 无线事业部 阿里巴巴 杭州\n* [@勾三股四](http://weibo.com/mx006)\n* [jiongks.name](http://jiongks.name)\n\n----\n\n# agenda\n\n* webcomponents\n* css scoping\n* our practice\n\n----\n\n# webcomponents\n\n----\n\n这是什么？\n\n![](./images/logo.svg)\n\n----\n\n## webcomponents\n\n* 组件化开发\n* 自定义标签\n* 隐藏内部结构\n\n----\n\n## 组件化开发\n\n![](./images/components.jpg)\n\n----\n\n## 自定义标签\n\n> `<google-map></google-map>`\n\n----\n\n## 隐藏内部结构\n\n![](./images/shadows.jpg)\n\n----\n\n## Shadow DOM\n\n> `<custom-element>`  \n> `　\x3c!-- shadow-root --\x3e`  \n> `　　<style>...</style>`  \n> `　　\x3c!-- 内部结构 --\x3e`  \n> `　\x3c!-- /shadow-root --\x3e`  \n> `</custom-element>`\n\n----\n\n## Shadow DOM\n\n* 为元素建立 `shadow root`，内部样式与外部样式表相隔离\n* 没有外界干扰，没有额外的代码，像原生标签一样\n\n----\n\n## 典型的组件定义\n\n> `<new-tag>`  \n> `　生命周期、交互行为、自定义事件`  \n> `　\x3c!-- shadow --\x3e`  \n> `　　内部结构、内部样式`  \n> `　\x3c!-- /shadow --\x3e`  \n> `　子元素`  \n> `</new-tag>`\n\n----\n\n## 回头想想HTML5\n\n* `<header>`, `<footer>`, ...  \n* `<audio>`, `<video>`  \n* `<summary>`, `<details>`\n* 都可以这样创建\n\n----\n\n我们不再需要规范新的标签了\n\n----\n\n## 想象一下……\n\n> `<calendar date="2015-01-10"></calendar>`  \n> `<pagination value="3/10"></pagination>`  \n> `<login-box></login-box>`\n\n----\n\n## 想象一下……\n\n> `<iphone>...</iphone>`  \n> `<weibo>...</weibo>`  \n> `<slider>...</slider>`\n\n----\n\n## 实例\n\n![](./images/decorator-components.jpg)\n\n----\n\n庖丁解牛\n\n美好前端的未来!\n\n----\n\n## 更多资料\n\n* [W3C Spec](http://w3c-html-ig-zh.github.io/webcomponents/)\n* [webcomponents.org](http://webcomponents.org/)\n* [Polymer](http://docs.polymerchina.org/)\n* [Screencast](http://www.tudou.com/plcover/r0pA0z77CgM/)\n\n----\n\n# 新的 CSS 用法\n\n----\n\n## 样式表结构\n\n* 元素可能包含 shadow\n* 元素可能在另一个 shadow 内\n* 元素可能包含子元素\n* 子元素可能受 shadow 影响\n\n----\n\n![](./images/shadows.png)\n\n----\n\n![](./images/inception.jpg)\n\n----\n\n## 建立联系\n\n* 外部结构\n* 内部结构\n* 子元素\n\n----\n\n## 举个例子\n\n`<cssconf-speaker>`  \n[homepage](http://css.w3ctech.com/)\n\n----\n\n## `<cssconf-speaker>`\n\n![](./images/cssconf-speaker.png)\n\n----\n\n判断外部环境\n\n----\n\n## :host\n\n> `:host {display: block}`\n\n[code](view-source:http://jinjiang.github.io/webcomponents-demo/css-scoping/speaker.html) [demo](http://jinjiang.github.io/webcomponents-demo/css-scoping/speaker.html)\n\n----\n\n## :host(<selector>)\n\n> `:host(:hover) {...}`\n\n[code](view-source:http://jinjiang.github.io/webcomponents-demo/css-scoping/speaker-1.html) [demo](http://jinjiang.github.io/webcomponents-demo/css-scoping/speaker-1.html)\n\n----\n\n## :host(<selector>)\n\n> `:host([gender="female"]) {...}`\n\n[code](view-source:http://jinjiang.github.io/webcomponents-demo/css-scoping/speaker-2.html) [demo](http://jinjiang.github.io/webcomponents-demo/css-scoping/speaker-2.html)\n\n----\n\n## :host-context(<selector>)\n\n> `:host-context(fieldset[disabled]) btn {...}`\n\n----\n\n## :host-context(<selector>)\n\n> `:host-context(body[env="phone"]) {...}`\n\n[code](view-source:http://jinjiang.github.io/webcomponents-demo/css-scoping/speaker-3.html) [demo](http://jinjiang.github.io/webcomponents-demo/css-scoping/speaker-3.html)\n\n----\n\n## 判断外部环境\n\n* `:host`\n* `:host(<selector>)`\n* `:host-context(<selector>)`\n\n----\n\n判断内部结构\n\n----\n\n## ::shadow\n\n> `cssconf-speaker::shadow .inner {...}`\n\n[code](view-source:http://jinjiang.github.io/webcomponents-demo/css-scoping/speaker-4.html) [demo](http://jinjiang.github.io/webcomponents-demo/css-scoping/speaker-4.html)\n\n----\n\n## ::shadow\n\n> `photo::shadow .inner {...}`\n\n[code](view-source:http://jinjiang.github.io/webcomponents-demo/css-scoping/speaker-5.html) [demo](http://jinjiang.github.io/webcomponents-demo/css-scoping/speaker-5.html)\n\n----\n\n## /deep/\n\n> `html /deep/ [layout][vertical] {...}`\n\n[code](view-source:http://jinjiang.github.io/webcomponents-demo/css-scoping/speaker-6.html) [demo](http://jinjiang.github.io/webcomponents-demo/css-scoping/speaker-6.html)\n\n----\n\n## 判断内部结构\n\n* `::shadow`\n* `/deep/`\n\n----\n\n内部判断子元素\n\n----\n\n## ::content\n\n> `::content .avatar {...}`\n\n[code](view-source:http://jinjiang.github.io/webcomponents-demo/css-scoping/speaker-7.html) [demo](http://jinjiang.github.io/webcomponents-demo/css-scoping/speaker-7.html)\n\n----\n\n## 总结\n\n* `:host`, `:host(<selector>)`\n* `:host-context(<selector>)`\n* `::shadow`, `/deep/`\n* `::content`\n\n----\n\n## 更多资料\n\n* [W3C CSS Scoping Spec](http://www.w3.org/TR/css-scoping-1/#shadow-dom)\n\n----\n\n# 淘宝的实践\n\n----\n\n* 后台管理界面\n  * 交互复杂\n  * 逻辑性较强\n  * 兼容性要求较低\n* 基于 [Polymer](http://docs.polymerchina.org/)\n\n----\n\n替代之前大量使用的 Bootstrap\n\n----\n\n## 组件化的优势\n\n* 代码量更小\n* 对交互和数据友好\n* 易于分工和维护\n\n----\n\n## 卖家装修后台\n\n![](./images/decorator.png)\n\n----\n\n## Zorro.html\n\n![](./images/zorro.png)\n\n----\n\n## Zorro.html\n\n内部管理界面的组件库  \n*未来有开源计划*\n\n----\n\n## Thanks & QA\n\n赵锦江 @勾三股四  \nzhaojinjiang@me.com\n'}}},h=(e(162),e(17)),component=Object(h.a)(c,function(){var n=this.$createElement;return(this._self._c||n)("Slides",{attrs:{content:this.content}})},[],!1,null,null,null);o.default=component.exports}}]);