(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{156:function(n,e,t){var content=t(371);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(67).default)("41e3f72d",content,!1,{sourceMap:!1})},370:function(n,e,t){"use strict";var l=t(156);t.n(l).a},371:function(n,e,t){(n.exports=t(66)(!1)).push([n.i,"body{margin:0;overflow:hidden}",""])},407:function(n,e,t){"use strict";t.r(e);var l=t(146),m=t.n(l),o=(t(147),t(145)),c=t(148);Object(o.b)(function(code){return m.a.highlightAuto(code).value||code});var r={components:{Slides:c.a},data:function(){return{content:"# Human Readable Data\n\n----\n\n## 个人简介\n\n* 赵锦江\n* [W3C HTML 中文兴趣组](http://www.w3.org/html/ig/zh/)\n* 无线事业部 阿里巴巴 杭州\n* [@勾三股四](http://weibo.com/mx006)\n* [jiongks.name](http://jiongks.name)\n\n----\n\n# 故事\n\n----\n\n### 故事\n\n从一次持续集成 (ci) 的尝试开始\n\n----\n\n### 故事\n\n- 一个前端工程\n- 已经有了自动化语法和编码规范检查\n- 已经有了自动化测试\n\n----\n\n### 故事\n\n第一次试用公司某个新的持续集成平台\n\n----\n\n### 故事\n\n入门文档是这样写的：\n\n1. 在项目仓库里加入 ci 的钩子，保证每次推送代码都会触发 ci\n2. 为项目撰写 ci 配置文件\n\n----\n\n### 故事\n\n`*.yml` 配置文件\n\n----\n\n### yml 配置文件\n\n大致需要配置的信息包括：\n\n- stage: node-4、node-0.12……\n- step: 环境准备、静态检查、单元测试、打包、安装、启动、集成测试……\n- label: exec\n\n----\n\n### yml 配置文件\n\n对 YAML 文件格式一直比较陌生……\n\n----\n\n### yml 配置文件\n\n本来打算照猫画虎随便弄一下\n\n----\n\n### yml 配置文件\n\n结果反复试来试去不成功  \n(事后发现是样例找错了 - -)\n\n----\n\n### yml 配置文件\n\n于是我又联想到了之前的一些经历……\n\n----\n\n### yml 配置文件\n\n![travis-ci](./images/travis.png)\n\n----\n\n### yml 配置文件\n\n![travis-ci](./images/travis.yml.png)\n\n----\n\n### yml 配置文件\n\n![hexo](./images/hexo.png)\n\n----\n\n### yml 配置文件\n\n![hexo](./images/hexo.config.png)\n\n----\n\n### yml 配置文件\n\n还有很多地方见到过 `*.yml`\n\n----\n\n### yml 配置文件\n\n今后一定还会不断见到它，如果每次遇到还是仅仅模仿一下，一定还会遇到更多问题\n\n----\n\n### yml 配置文件\n\n所以决定认真学习一下 YAML\n\n[http://yaml.org](http://yaml.org)\n\n----\n\n# YAML\n\n----\n\n### 序列表和映射表\n\n![](./images/yml-sequences.png)\n\n----\n\n### 序列表和映射表\n\n![](./images/yml-mappings.png)\n\n----\n\n### 每行一条且支持缩进\n\n![](./images/yml-mappings-sequences.png)\n\n----\n\n### 每行一条且支持缩进\n\n![](./images/yml-sequences-mappings.png)\n\n----\n\n`#` 代表注释\n\n----\n\n### `---` 代表段落分隔\n\n![](./images/yml-blocks.png)\n\n----\n\n### 数据格式\n\n![](./images/yml-types.png)\n\n----\n\n### 多种字符串的表达方式\n\n![](./images/yml-types-string.png)\n\n----\n\n### 重复的内容 `&` 和 `&dollar;`\n\n![](./images/yml-repeat.png)\n\n----\n\n### 更多\n\n[http://yaml.org](http://www.yaml.org/spec/1.2/spec.html)  \n[在线试用](http://nodeca.github.io/js-yaml/)\n\n----\n\n# 回到故事\n\n----\n\n这个时候再回来看 ci 里的配置文件  \n对理解和撰写配置文件有很大帮助  \n一目了然！分分钟搞定！\n\n----\n\nYAML 就是一种 human readable data\n\n----\n\n# What?\n\n----\n\n让计算机世界中的数据尽量可以被人类直观的阅读理解\n\n----\n\n什么样的数据可以同时被人类和计算机阅读理解呢？\n\n----\n\n- 前提，能够被计算机解析\n- 首先，数据应该是文本的\n- 其次，这段文本是能够描述出结构化信息的\n\n----\n\nYAML 以文本作为数据载体，能够表述一定的数据结构，拥有基于多种语言的解析器和工具，是一种典型并且应用广泛的“human readable data”\n\n----\n\n![](./images/yml-libs.png)\n\n----\n\nhuman readable data 适用于人工阅读和维护的程序配置信息，简单、直观、可被程序识别\n\n----\n\nJSON 也是这样的\n\n- Node.js 中的 `package.json`\n- Bower 中的 `bower.json`\n- ...\n\n"}}},y=(t(370),t(17)),component=Object(y.a)(r,function(){var n=this.$createElement;return(this._self._c||n)("Slides",{attrs:{content:this.content}})},[],!1,null,null,null);e.default=component.exports}}]);