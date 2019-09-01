(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(n,t,e){var content=e(360);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(67).default)("628fe42d",content,!1,{sourceMap:!1})},359:function(n,t,e){"use strict";var r=e(150);e.n(r).a},360:function(n,t,e){(n.exports=e(66)(!1)).push([n.i,"body{margin:0;overflow:hidden}",""])},407:function(n,t,e){"use strict";e.r(t);var r=e(146),o=e.n(r),l=(e(147),e(145)),c=e(148);Object(l.b)(function(code){return o.a.highlightAuto(code).value||code});var m={components:{Slides:c.a},data:function(){return{content:'# CSS Grid Layout\n\n----\n\n# 历史 需求 因果\n\n----\n\n### 看几个例子\n\n* [horizon](http://horizon.io)\n* [wsj](https://www.wsj.com/articles/live-streaming-music-to-fans-on-smartphones-is-a-pretty-good-gig-1490443203)\n* [awwwards](https://www.awwwards.com)\n\n----\n\n### Web 布局\n\n* table\n* float\n* position\n* flexbox\n* ……\n\n----\n\n# grid\n\n----\n\n# <ruby>网<rt>wăng</rt></ruby><ruby>格<rt>gé</rt></ruby><ruby>布<rt>bù</rt></ruby><ruby>局<rt>jú</rt></ruby>\n\n----\n\n网格布局的需求和概念一直存在\n\n* [960 grid system](https://960.gs)\n* [bootstrap](http://getbootstrap.com)\n* [css grid layout](https://www.w3.org/TR/css3-grid-layout/)\n\n----\n\n# 网格布局的要素\n\n----\n\n### 描述步骤\n\n1. 画网\n2. 把格子填到网里\n3. 把内容填到格子里\n\n----\n\n### 1. 画网\n\n* 几行几列？\n* 每行多宽？每列多高？\n* 延展性：“漏网之鱼”\n\n----\n\n### 特殊情况：响应式布局\n\n* 每列 (最小) 宽度固定\n* 响应式计算总列数\n* 自增必要的行\n\n----\n\n## 2. 把格子填进网里\n\n----\n\n### A 每个格子独立\n\n* 放第几行？第几列？\n* 占多少行？多少列？\n\n----\n\n### B 按顺序填进网里\n\n* 这个格子排在第几？\n\n<small>额外的：网的排法  \n(横向优先/纵向优先)</small>\n\n----\n\n### 3. 对齐\n\n* 行列真空 -> 行列对齐\n* 内容真空 -> 内容对齐\n\n<small>额外的：网的行间列间空隙</small>\n\n----\n\n# CSS Grid Layout\n\nstart from [W3C Working Draft 7 April 2011](http://www.w3.org/TR/2011/WD-css3-grid-layout-20110407)\n\n----\n\n## What Happened in 2011?\n\n----\n\n![Bootstrap](./bootstrap.png)\n\n----\n\n![Mocha.js](./mocha.png)\n\n----\n\n![QQ vs 360](./3q.png)\n\n----\n\n![新浪微博 vs 腾讯微博](./weibo.png)\n\n----\n\n![阿里巴巴腐败丑闻](./alibaba.png)\n\n----\n\n# 规范介绍\n\n----\n\n## 术语\n\n----\n\n### 网格\n\n* template\n* row / column\n* cell\n\n----\n\n### 辅助\n\n* line / track\n\n----\n\n### 内容\n\n* area\n\n----\n\n## 图解 Grid 语法\n\n[Cheetsheet](./grid-cheatsheet.pdf)\n\n----\n\n### 最低消费\n\n* 画网 + 填格子\n* 自动排序\n* 响应式\n* 对齐和间隙\n\n----\n\n### Demos\n\n* [`grid-auto-columns` & `grid-auto-rows`](https://codepen.io/anon/pen/RVWoyB)\n* [`repeat(auto-fit, minmax(size, 1fr))`](https://codepen.io/anon/pen/XRmNPp)\n* [`grid-auto-flow: row dense`](http://codepen.io/simonswiss/pen/PNeJmy)\n\n----\n\n### 效率和体验问题\n\n* 语义化描述：[线](https://codepen.io/anon/pen/RVWgbE)/[区域](https://codepen.io/anon/pen/BRoZoB)\n* [span 语法](https://www.w3.org/TR/css3-grid-layout/#example-198bb78c)\n* [语法简写](https://codepen.io/anon/pen/gWaxzx)\n\n----\n\n### 浏览器支持情况\n\n![caniuse](./caniuse.png)\n\n----\n\n### 周边及其他\n\n* 结合 media query\n* [postcss-grid-kiss](https://github.com/sylvainpolletvillard/postcss-grid-kiss)\n* 对 CSS 语法词法的思考\n\n----\n\n### 相关材料\n\n* [GridByExample.com](http://gridbyexample.com/examples/)\n* [CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)\n* [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)\n\n----\n\n# Thanks\n\n\x3c!--\n\n### misc\n\n----\n\n## props\n\n* `display`: `grid` | `inline-grid` | `subgrid`\n\n----\n\n* `grid`: `none` | `<grid-template-rows>` / `<grid-template-columns>` | `<grid-auto-flow>` [`<grid-auto-rows>` [/ `<grid-auto-columns>`]]\n\n* `grid-template`: `none` | `subgrid` | `<grid-template-rows>` / `<grid-template-columns>`\n* `grid-template-rows`: `<track-size>` ... | [`<line-name>`] `<track-size>` ...\n* `grid-template-columns`\n* `grid-template-areas`: "`<grid-area-name>` | `.` | `none` | ..." "..." "..." ...\n\n* `grid-auto-rows`: `<track-size>` ...\n* `grid-auto-columns`\n* `grid-auto-flow`: `row` | `column` | `row dense` | `column dense`\n\n----\n\n* `grid-gap`: `<grid-row-gap>` `<grid-column-gap>`\n* `grid-row-gap`: `<line-size>`\n* `grid-column-gap`\n\n----\n\n* `grid-area`: `<name>` | `<row-start>` / `<column-start>` / `<row-end>` / `<column-end>`\n\n* `grid-row`: `<start-line>` / `<end-line>` | `<start-line>` / `span <value>`\n* `grid-row-start`: `<number>` | `<name>` | `span <number>` | `span <name>` | `auto`\n* `grid-row-end`\n\n* `grid-column`\n* `grid-column-start`\n* `grid-column-end`\n\n* `order`\n\n----\n\n* `justify-content`: `start` | `end` | `center` | `stretch` | `space-around` | `space-between` | `space-evenly`\n* `align-content`\n* `justify-items`\n* `align-items`\n* `justify-self` (row): `stretch` | `start` | `end` | `center`\n* `align-self` (column): `stretch` | `start` | `end` | `center`\n\n----\n\n## terms\n\n### elements\n\n* container\n* item\n\n### layout\n\n* line\n* track\n* axis\n* cell\n* area\n* column\n* row\n* gutter\n\n----\n\n## values\n\n* `track-size`: `<length`> | `<precentage>` | `fr`\n* `line-size`: `<length>`\n* `fr`\n* `repeat(3, 20px [col-start])`\n* `minmax()`\n* `auto-fill`\n* `auto-fit`\n* `fit-content()`\n\n----\n\n## span\n\n```\nspan\n  number / auto\n  auto / number\n    1 / auto\n    auto / -3\n  number / number\n  name / number\n  number / name\n  name / name\n    1 / 2\n    A / -2\n    2 / C\n    B / D\n  A / span B\n  span B / A\n    A\n      number: 第 i 个 (或倒数第 -i 个)\n      name: 第 1 个名字为 n 的\n      name number：第 i 个 (或倒数第 -i 个) 名字为 n 的\n    B\n      number: 第 i 个 (或倒数第 -i 个)\n      name: 第 1 个名字为 n 的\n    A / span number\n      2 / span -2\n      A / span -2\n      A 2 / span -2\n    A / span name\n      2 / span C\n      A / span C\n      A 2 / span C\n    span number / A\n      span 2 / -2\n      span 2 / C\n      span 2 / C -2\n    span name / A\n      span A / 2\n      span A / C\n      span A / C -2\n```\n\n--\x3e\n'}}},d=(e(359),e(17)),component=Object(d.a)(m,function(){var n=this.$createElement;return(this._self._c||n)("Slides",{attrs:{content:this.content}})},[],!1,null,null,null);t.default=component.exports}}]);