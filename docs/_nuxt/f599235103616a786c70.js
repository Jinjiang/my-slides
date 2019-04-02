(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{140:function(n,e,t){"use strict";var o={components:{MarkDisplay:t(141).a},props:{content:String},methods:{setTitle:function(n){var title=n.title;setTimeout(function(){document.title=title||"My Slides"})}}},c=t(17),component=Object(c.a)(o,function(){var n=this.$createElement;return(this._self._c||n)("MarkDisplay",{attrs:{markdown:this.content,autoBaseUrl:"",autoBlankTarget:"",autoFontSize:"",keyboardCtrl:"",urlHashCtrl:"",supportPreview:""},on:{title:this.setTitle}})},[],!1,null,null,null);e.a=component.exports},152:function(n,e,t){var content=t(179);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(60).default)("61db4605",content,!1,{sourceMap:!1})},178:function(n,e,t){"use strict";var o=t(152);t.n(o).a},179:function(n,e,t){(n.exports=t(59)(!1)).push([n.i,"body{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;color:#2c3e50}",""])},201:function(n,e,t){"use strict";t.r(e);var o=t(140),c={components:{Slides:o.a},data:function(){return{content:'# 由 Weex 谈品牌经营心得\n\n勾股 2017-03\n\n----\n\n做开源项目的本质是经营技术，更是经营一个品牌。我们希望透过 Weex 的发展经历，阐述从品牌的视角思考一个项目如何谋求发展和探索。\n\n----\n\n# 为什么品牌很重要\n\n----\n\n占领“用户心智”\n\n----\n\n* 饮料 = 可乐？\n* HTML5 = Chrome？\n* JavaScript = Facebook？\n* 买东西 = 上天猫/淘宝？\n\n----\n\n我周围一个朋友这样说道：\n\n> 大众的汽车没有给人什么特殊的印象，但是它给人的感觉是“这就是汽车”\n\n----\n\n### 三次“生产力革命”\n\n1. 工业社会 -> 体力 -> 管理学\n2. 知识社会 -> 脑力 -> 领导学\n3. 差异化社会 -> 品牌\n\n----\n\n# 1. 拥有一个明确的定位\n\n----\n\n> (品牌) 定位也是第一个应对过度传播的社会中信息不被接受这一难题的思想体系\n> ----《定位——有史以来对美国营销影响最大的观念》\n\n----\n\n1. 是什么？\n1. 不是什么？\n\n----\n\n* 重量级 ❌\n* 全能型 ❌\n* “品牌延伸” ❌\n\n----\n\n* 找一个小的切入点 ✔\n* 把问(tong)题(dian)完美解决 ✔\n\n----\n\n### Weex 在初期的定位\n\n* 轻量级\n* 高性能\n* 可扩展\n\n----\n\n### Why？\n\n* React Native -> 量级过重\n* Hybrid -> 性能和体验不够好\n* Native -> 不灵活，不可扩展\n\n----\n\n除此之外，Weex 还进一步缩小了范围，如电商领域、侧重内容展示等\n\n----\n\n# 2. 名称、Logo、口号\n\n----\n\n### 准备好迎接开发者的心态\n\n* 产品要对用户友好\n* 开源项目要对开发者友好\n\n很多技术方案在发展初期  \n并不重视这个视角\n\n----\n\n## 起个好听的名字\n\n* 最简单：缩写型 (HTML)\n* 更好一点：象征 (人物、动物)\n* 再好一点：全新的名字\n\n----\n\n### 独一无二\n\n善用搜索\n\n----\n\n### 好念好记\n\n尽量简短，1\\~2 个音节，  \n有爆破音，好读\n\n----\n\n### 额外的，考虑各地文化\n\n----\n\n[http://www.wikihow.com/Name-a-Project](http://www.wikihow.com/Name-a-Project)\n\n----\n\n![](./how-to-name.png)\n\n----\n\n## Logo\n\n----\n\n看似简单的工作，实际也是有学问的。不是所有好看的 Logo 都适合。\n\n----\n\n头脑风暴，列出所有让你联想到的事物，然后基于这些发散的思路产生灵感，收敛范围，同时结合项目的气质。\n\n----\n\n在 Weex 的头脑风暴过后，设计师 @曳影 发现所有的词汇都能够直接或间接的和“老鹰”这个动物。\n\n----\n\n同时 @曳影 觉得 Weex 的团队非常有活力，不像一般的程序员那么死板，不苟言笑。\n\n----\n\n<img src="https://img.alicdn.com/tps/TB1zBLaPXXXXXXeXXXXXXXXXXXX-121-59.svg" style="width: 50vh;" />\n\n所以设计了一个活泼可爱的老鹰的形象。也就是今天的 Weex Logo。\n\n----\n\n## Slogan\n\n----\n\n### 电梯时间\n\n选择和取舍\n\n----\n\n### 选择和取舍\n\n“如果让你用一句话介绍你的产品，你会用哪句话？”\n\n----\n\n### 选择和取舍\n\n“如果为你的产品选一个最大的亮点，你会选什么？”\n\n----\n\n可以先列出 5\\~10 个方面，然后仔细排出他们的顺序\n\n----\n\n* 构建应用 (用途)\n* 基于 web 开发体验 (开发体验)\n* 可扩展性 (高阶开发)\n* 高性能 (开发成本)\n* 一次撰写多次运行 (开发成本)\n* 服务和生态 (周边)\n* 轻量 (开发体验)\n\n----\n\n1. 构建应用 (用途)\n1. 一次撰写多次运行 (开发成本)\n1. 高性能 (开发成本)\n1. 轻量 (开发体验)\n1. 基于 web 开发体验 (开发体验)\n1. 可扩展性 (高阶开发)\n1. 服务和生态 (周边)\n\n----\n\n### 把前面几个总结起来\n\n* 一句话：1\\~3 个\n* 简述：3\\~5 个\n* 详述：5\\~10 个\n\n变成标准答案，用在不同的场合\n\n----\n\n### Slogan\n\n构建跨平台移动应用\n\n----\n\n### 简述\n\nWeex 是一个构建移动应用的解决方案，一次撰写多端运行，开发者可以基于 web 语法快速构建高性能的移动应用。\n\n----\n\n### 详述\n\n![Weex 是一个构建移动应用的解决方案，支持一次撰写，多端运行，开发者可以基于 web 语法快速构建高性能的移动应用，并且可以想 web 一样动态发布你的移动应用。Weex 还提供强大的横向扩展能力，开发者完全可以根据自身的业务需求定制自己的组件和模块。如今 Weex 已经不只是一个单纯的端上的 SDK，它更是从本地研发到线上服务的一整套移动应用研发解决方案和生态。](./weex-description.png)\n\n\x3c!-- todo:  --\x3e\n\n----\n\n# 3. 传播的技巧\n\n----\n\n谁在讨论你的产品也是品牌塑造的一部分。\n\n----\n\n虽然开源社区是完全自由的，大家都是自愿参与，但是你自身的社区引导对社区成分起了决定性作用。\n\n----\n\n* 一线程序员\n* 你的 Boss\n* 同学朋友\n* 家里的亲戚长辈\n* ……\n\n----\n\n你希望谁在讨论你的项目？\n\n选择相应的传播方式和渠道\n\n----\n\n### 用户发展演进图\n\n![用户发展演进图](./market-growth.jpg)\n\n----\n\n以发展你的“种子用户”为首要目标，也是终极目标！\n\n----\n\n### 客户：移动互联网企业\n\n* 在 Alibaba 谈 Weex (企业)\n* 在 QCon 谈 Weex (企业)\n* 在 滴滴、饿了么、小米、美大 谈 Weex\n\n----\n\n### 技术：优秀的程序员\n\n* 在 JSConf/CSSConf 谈 Weex (意见领袖)\n* 在 Vue 社区谈 Weex (意见领袖)\n* 在 WeexConf 谈 Weex (意见领袖)\n\n----\n\n## 额外的：在传播过程中收集反馈\n\n----\n\n![](./hattricks-os.png)\n\n----\n\n# 4. 打造团队\n\n----\n\n## 团队是打造品牌的执行者\n\n社区文化 <- 项目文化 <- 团队文化\n\n----\n\n## 尽量保持团队小巧而专注\n\n----\n\n### “两个披萨”法则\n\n团队应该小到两个披萨就够所有人吃，通常大概 5\\~10 人。\n\n----\n\n### “两个披萨”的道理\n\n1. 容易保持清晰一致的理解\n1. 限制系统演进的速度，促进 1\n1. 权力去中心化\n1. 安全失败，培养领导力  \n从而留住“创业型人才”\n\n----\n\nWeex 目前有多个团队在并行工作，每个团队人都不多且有各自明确的分工并独立决策。\n\n----\n\n## 关注员工超过一切\n\n----\n\n### 工作满意度\n\n是被证实的非常重要的团队指标\n\n[盖洛普 Q12 评测法](http://baike.baidu.com/subview/2529752/2529752.htm)\n\n----\n\n一个拥有关怀员工文化的团队，才会有同理心懂得如何关怀开源社区的开发者们。\n\n----\n\n一旦做到这点，美好的事情会在团队中自然发生。\n\n----\n\n### 丰田生产体系\n\n对每个人能力的信任和价值的认可\n\n----\n\n### 著名的“安灯拉绳”\n\n“任何人都有权利停下生产线”，换来的是一个濒临破产的美国汽车工厂在短短 3 个月内就可以交付高质量的产品。\n\n----\n\n## 关注技术质量\n\n----\n\n开源社区的东西都是免费的，大家只会选择最好的那一个。\n\n----\n\n* 注重 Code Review\n* 注重测试\n\n----\n\n## 关注前瞻技术\n\n----\n\n* 让失败变得安全\n* 降低尝试新技术的成本\n* “实验型”工作方法\n\n----\n\n# 总结\n\n----\n\n1. 拥有一个明确的定位\n2. 名称、Logo、口号\n3. 传播的技巧\n4. 打造团队\n\n----\n\n## 参考书目\n\n----\n\n![《定位》](https://images-cn.ssl-images-amazon.com/images/I/41x7rOPwL%2BL.jpg)\n\n----\n\n![《精益企业》](https://images-cn.ssl-images-amazon.com/images/I/416VjriPOxL.jpg)\n\n----\n\n![《精益客户开发》](https://images-cn.ssl-images-amazon.com/images/I/51fYcOw3ygL.jpg)\n\n----\n\n![《UX Strategy》](https://images-cn.ssl-images-amazon.com/images/I/51mJ4rY%2BWTL.jpg)\n\n----\n\n![《公司进化论》](https://images-cn.ssl-images-amazon.com/images/I/61P%2BkGA1UOL.jpg)\n\n----\n\n# Thanks\n'}}},r=(t(178),t(17)),component=Object(r.a)(c,function(){var n=this.$createElement;return(this._self._c||n)("Slides",{attrs:{content:this.content}})},[],!1,null,null,null);e.default=component.exports}}]);