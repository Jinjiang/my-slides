# ES6开发Node模块

----

## ES6

----

### 大家常用的 ES6 特性有哪些？

----

`import`/`export`、`class`、解构、arrow、`const`/`let`、template strings、快捷字面量、参数默认值

----

`Promise`、`Object.assign`？

----

`for...of`？

----

Any else？

----

### 你可能会遇到……

----

性能问题

不知道背后的实现原理

----

全局/重复 polyfill 问题

----

babel -> [bublé](https://buble.surge.sh/guide/)

----

“保守治疗”

有限的特性支持，无插件和配置，快速精准

----

额外的

为什么 bublé 不支持 ES6 Modules？

----

因为 Node 基于 CommonJS

----

## Node

----

Node vs Browser

----

* window/document
* process.env

----

* 打包
* CommonJS

----

延伸问题

* unit test
* 独立使用每个文件
* tree-shaking ([rollup](http://rollupjs.org))

----

浏览器需要打包，打包需要 tree-shaking，tree-shaking 需要 ES6 Modules

----

Node 需要独立使用，独立使用需要 CommonJS

----

测试，要么独立单元测试，基于 CommonJS，要么打包整体测试

----

### 结论&选择

----

* Node 包果断 CommonJS
* Browser 包优先考虑 ES6 Modules

----

### 如果两用怎么办？

----

### 必须找到解决方案

----

想办法让 CommonJS 和 ES Modules 互转

----

(然后就可以随便写了)

----

但还是先选择了 CommonJS 更直接有效

----

## 步骤

----

* `src/*.es` ES6 源代码
* `lib/*.js` ES5 生成码

----

### npm script

`buble -i src -o lib`

----

* `npm run prepare`
* `npm run pretest`
* `npm run prepublish`

----

### 设置发布文件

* `.npmignore`
* `files` in `package.json`

----

### 这才是开始

* lint
* test
* ci

善用 watch

----

参考 [weex-vdom-tester](https://github.com/weexteam/weex-vdom-tester)

----

## One More Thing

----

### Browser

webpack + babel

----

### 用 rollup 打包工程

----

### 特点

* 快速直接
* 配置简单
* tree-shaking

----

### 要求

* 基于 ES6 Modules

----

### CommonJS 代码和现成 npm 包怎么办？

----

* `rollup-plugin-node-resolve`
* `rollup-plugin-commonjs`

----

### 再加上 bublé

rollup + bublé + CommonJS

----

参考 [weex-js-framework](https://github.com/alibaba/weex/tree/jsfm-feature-0.17)

----

### ES6 Modules 怎么转成 CommonJS？

----

[reify](https://github.com/benjamn/reify)

----

# End

Thanks
