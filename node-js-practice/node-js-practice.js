require('vm').resetData({
    "design": "default",
    "transition": "horizontal",
    "title": "",
    "slides": [{
        "sid": "A",
        "layout": "title",
        "items": {
            "title": {
                "type": "text",
                "value": "Node.JS项目实践"
            },
            "content": {
                "type": "text",
                "value": "赵锦江"
            }
        }
    }, {
        "sid": "B",
        "layout": "double",
        "items": {
            "title": {
                "type": "text",
                "value": "自我介绍"
            },
            "content": {
                "type": "text",
                "value": "赵锦江\n-\n@勾三股四\nWeb Engineer\nMaxthon"
            },
            "content2": {
                "type": "img",
                "value": "https://en.gravatar.com/userimage/13176194/dccd83428efa4bf5fdc8115a68a5b309.png?size=200",
                "config": {}
            }
        }
    }, {
        "sid": 1369150323009,
        "layout": "subtitle",
        "items": {
            "title": {
                "type": "text",
                "value": "今天的分享内容"
            },
            "content": {
                "type": "text",
                "value": "从我在公司的工作开始……"
            }
        }
    }, {
        "sid": 1369227427998,
        "layout": "imax",
        "items": {
            "title": {
                "type": "text",
                "value": "傲游今日 (原傲游起始页)"
            },
            "content": {
                "type": "img",
                "value": "http://ww3.sinaimg.cn/large/660d0cdfjw1e4gazf8ioyj20ht0sg42g.jpg",
                "config": {}
            }
        }
    }, {
        "sid": 1369227568360,
        "layout": "imax",
        "items": {
            "title": {
                "type": "text",
                "value": "最早的傲游起始页 (2007)"
            },
            "content": {
                "type": "img",
                "value": "http://jiongks-typecho.stor.sinaapp.com/usr/uploads/2013/05/2978944287.png",
                "config": {}
            }
        }
    }, {
        "sid": 1369228752242,
        "layout": "imax",
        "items": {
            "title": {
                "type": "text",
                "value": "逐步加入了新闻 (2008)"
            },
            "content": {
                "type": "img",
                "value": "http://jiongks-typecho.stor.sinaapp.com/usr/uploads/2013/05/638131027.png"
            }
        }
    }, {
        "sid": 1369229590307,
        "layout": "imax",
        "items": {
            "title": {
                "type": "text",
                "value": "引入了更丰富的内容和复杂的布局 (2009)"
            },
            "content": {
                "type": "img",
                "value": "http://jiongks-typecho.stor.sinaapp.com/usr/uploads/2013/05/1592463238.png"
            }
        }
    }, {
        "sid": 1369229677209,
        "layout": "imax",
        "items": {
            "title": {
                "type": "text",
                "value": "启用了全新的域名 i.maxthon.cn (2010)"
            },
            "content": {
                "type": "img",
                "value": "http://jiongks-typecho.stor.sinaapp.com/usr/uploads/2013/05/1338199381.png"
            }
        }
    }, {
        "sid": 1369229791922,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "网站一路以来的变化"
            },
            "content": {
                "type": "text",
                "value": "静态页之路\n- 从简单的浏览器本地数据展示到多元化的资讯\n模块化之路\n- 从3个函数到10+个大模块、30+个小模块\n自动化之路 (ing...)\n- 打包压缩合并部署归档\n“大前端”之路 (ing...)\n- 结合服务器端的技术，如PHP、Node.JS等"
            }
        }
    }, {
        "sid": 1369230206466,
        "layout": "title",
        "items": {
            "title": {
                "type": "text",
                "value": "回到Node.JS主题"
            },
            "content": {
                "type": "text",
                "value": "Node.JS在傲游今日项目当中的几个实践"
            }
        }
    }, {
        "sid": 1369230336806,
        "layout": "subtitle",
        "items": {
            "title": {
                "type": "text",
                "value": "1. 项目自动化打包"
            },
            "content": {
                "type": "text",
                "value": ""
            }
        }
    }, {
        "sid": 1369230376383,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "真正的自动化是从v3开始"
            },
            "content": {
                "type": "text",
                "value": "基于PHP的打包工具\n由后端的同事配合开发完成\n* 压缩前端代码\n* 合并文件\n* 为每个引用增加时间戳或版本号"
            }
        }
    }, {
        "sid": 1369276591328,
        "layout": "imax",
        "items": {
            "title": {
                "type": "text",
                "value": "通过XML配置文件打包"
            },
            "content": {
                "type": "code",
                "value": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<mini xmlns:xi=\"http://www.w3.org/2001/XInclude\">\n\n    <version>2013050302</version>\n\n    <ouputdir>../release</ouputdir>\n\n    <!-- 待构建的网站目录 -->\n    <sitedir>\n        <item>/css</item>\n        <item>/images</item>\n        <item>/html</item>\n        <item>/js</item>\n    </sitedir>\n\n    <!-- 直接拷贝的目录或者文件 -->\n    <xcopy>\n        <item type=\"file\">/css/iepngfix.htc</item>\n        <item type=\"file\" dest=\"/js/check_version.js\">/js/check_version.build.js</item>\n        <item type=\"folder\">/mini</item>\n    </xcopy>\n\n    <!-- 待生成的页面 -->\n    <static>\n        <item dest=\"/index.htm\">/index.v3.php</item>\n        <item dest=\"/html/declare.htm\">/html/declare.htm</item>\n    </static>\n\n    <module>\n        <!-- 基础文件 -->\n        <item v=\"md5\" id=\"header-css\" type=\"css\" dest=\"css/header.css\">\n            <file src=\"/css/base.css\" />\n            <file src=\"/css/module_header_topbar.css\" />\n            <file src=\"/css/module_header_logo.css\" />\n            <file src=\"/css/module_header_search.css\" />\n            <file src=\"/css/module_header_calendar.css\" />\n            <file src=\"/css/module_header_weather.css\" />\n            <file src=\"/css/module_header_news.css\" />\n            <file src=\"/css/module_footer.css\" />\n            <file src=\"/css/module_widget_center.css\" />\n            <file src=\"/css/module_widget_content.css\" />\n            <file src=\"/css/widget_base.css\" />\n            <file src=\"/css/widget_main_favorites.css\" />\n            <file src=\"/css/widget_main_sync.css\" />\n            <file src=\"/css/widget_main_games.css\" />\n            <file src=\"/css/widget_main_last.css\" />\n            <file src=\"/css/widget_main_main.css\" />\n            <file src=\"/css/widget_main_news.css\" />\n            <file src=\"/css/widget_main_weibo.css\" />\n            <file src=\"/css/widget_main_books.css\" />\n            <file src=\"/css/widget_main_videos.css\" />\n            <file src=\"/css/widget_main_taobao.css\" />\n            <file src=\"/css/widget_main_tools.css\" />\n            <file src=\"/css/mxdialog.css\" />\n            <file src=\"/css/login.css\" />\n        </item>\n\n        <item v=\"md5\" id=\"header-js\" type=\"js\" dest=\"js/header.js\">\n            <file src=\"/js/jq.cookies.js\" />\n            <file src=\"/js/jq.hashchange.js\" />\n            <file src=\"/js/jq.tabs.js\" />\n            <file src=\"/js/jq.ordertab.js\" />\n            <file src=\"/js/jq.pagination.js\" />\n            <file src=\"/js/jq.jmodal.js\" />\n            <file src=\"/js/jq.dialog.js\" />\n            <file src=\"/js/jq.placeholder.js\" />\n            <file src=\"/js/mxapi.js\" />\n            <file src=\"/js/version_3.js\" />\n            <file src=\"/js/check_version.js\" />\n            <file src=\"/js/core.js\" />\n            <file src=\"/js/core_configuration.js\" />\n            <file src=\"/js/module_hooker.js\" />\n            <file src=\"/js/skin_manager.js\" />\n            <file src=\"/js/base.general.20110215.js\" />\n\n        </item>\n\n        <item v=\"md5\" id=\"news-js\" type=\"js\" dest=\"js/widget_news.js\">\n            <file src=\"/js/widget_news.js\" />\n        </item>\n\n        <item v=\"date\" id=\"skin-blue\" type=\"css\" dest=\"css/skins/blue.css\">\n            <file src=\"/css/skins/blue.css\" />\n        </item>\n\n        ...\n\n    </module>\n\n</mini>",
                "config": {
                    "type": "code"
                }
            },
            "content2": {
                "type": "text",
                "value": ""
            }
        }
    }, {
        "sid": 1369277513977,
        "layout": "imax",
        "items": {
            "title": {
                "type": "text",
                "value": "相应的HTML注释: block"
            },
            "content": {
                "type": "code",
                "value": "// HTML代码\n// index.php\n...\n\n<!--{block header-css}-->\n<?php include_once('css/index.css.php'); ?>\n<!--{/block}-->\n\n...\n\n\n// 开发环境下\n// css/index.css.php\n<link rel=\"stylesheet\" href=\"css/base.css\">\n<link rel=\"stylesheet\" href=\"css/module_header_topbar.css\">\n<link rel=\"stylesheet\" href=\"css/module_header_logo.css\">\n<link rel=\"stylesheet\" href=\"css/module_header_calendar.css\">\n<link rel=\"stylesheet\" href=\"css/module_footer.css\">\n...\n\n\n// 打包配置信息\n// build.xml\n...\n\n<module>\n\n    <!-- 基础文件 -->\n    <item v=\"md5\" id=\"header-css\" type=\"css\" dest=\"css/header.css\">\n        <file src=\"/css/base.css\" />\n        <file src=\"/css/module_header_topbar.css\" />\n        <file src=\"/css/module_header_logo.css\" />\n        <file src=\"/css/module_header_calendar.css\" />\n        <file src=\"/css/module_footer.css\" />\n        ...\n    </item>\n\n    ...\n\n</module>\n\n...\n\n\n// 打包之后的HTML代码\n... <link rel=\"stylesheet\" href=\"css/header.{md5}.css\"> ...",
                "config": {
                    "type": "code"
                }
            }
        }
    }, {
        "sid": 1369277249701,
        "layout": "imax",
        "items": {
            "title": {
                "type": "text",
                "value": "相应的HTML注释: include"
            },
            "content": {
                "type": "code",
                "value": "// 主文件\n// index.php\n...\n\n<!--{include index-html}-->\n<?php include_once('html/main.php'); ?>\n<!--{/include}-->\n\n...\n\n\n// 被引用的文件\n// html/main.php\n<div id=\"wrapper\" class=\"wrapper\">\n    <div id=\"header-topbar\" data-item=\"a\">\n<!--{block module_header_topbar.php}-->\n<?php include_once('module_header_topbar.php'); ?>\n<!--{/block}-->\n    </div>\n\n    <div id=\"header\" class=\"module layout-row\">\n\n<!--{block module_header.php}-->\n<?php include_once('module_header.php'); ?>\n<!--{/block}-->\n\n    </div>\n\n    <div id=\"widget-center\">\n\n<!--{block module_widget_center.php}-->\n<?php include_once('module_widget_center.php'); ?>\n<!--{/block}-->\n\n    </div>\n\n<!--{block module_widget_content.php}-->\n<?php include_once('module_widget_content.php'); ?>\n<!--{/block}-->\n\n    <div id=\"footer\" class=\"module layout-row\">\n\n<!--{block module_footer.php}-->\n<?php include_once('module_footer.php'); ?>\n<!--{/block}-->\n\n    </div>\n\n</div>",
                "config": {
                    "type": "code"
                }
            }
        }
    }, {
        "sid": 1369278400795,
        "layout": "double-subtitle",
        "items": {
            "title": {
                "type": "text",
                "value": "对打包工具的思考"
            },
            "content": {
                "type": "text",
                "value": "* 大量的配置信息，修改配置的过程较繁琐\n* 增/删模块的成本较高\n* 虽然是纯静态站点，但开发时需要PHP环境的支持"
            },
            "subtitle": {
                "type": "text",
                "value": "存在的缺陷",
                "config": {}
            },
            "subtitle2": {
                "type": "text",
                "value": "改进的方向",
                "config": {}
            },
            "content2": {
                "type": "text",
                "value": "* 去PHP化\n* 降低配置成本，智能判断文件依赖和打包方式",
                "config": {}
            }
        }
    }, {
        "sid": 1369278827271,
        "layout": "title",
        "items": {
            "title": {
                "type": "text",
                "value": "关键原则：DRY！"
            },
            "content": {
                "type": "text",
                "value": "Don't Repeat Yourself"
            }
        }
    }, {
        "sid": 1369278884441,
        "layout": "imax",
        "items": {
            "title": {
                "type": "text",
                "value": "相同的信息只出现一次"
            },
            "content": {
                "type": "code",
                "value": "// 开发环境下\n// css/index.css.php\n<link rel=\"stylesheet\" href=\"css/base.css\">\n<link rel=\"stylesheet\" href=\"css/module_header_topbar.css\">\n<link rel=\"stylesheet\" href=\"css/module_header_logo.css\">\n<link rel=\"stylesheet\" href=\"css/module_header_calendar.css\">\n<link rel=\"stylesheet\" href=\"css/module_footer.css\">\n...\n\n\n// 打包配置信息\n// build.xml\n<item v=\"md5\" id=\"header-css\" type=\"css\" dest=\"css/header.css\">\n    <file src=\"/css/base.css\" />\n    <file src=\"/css/module_header_topbar.css\" />\n    <file src=\"/css/module_header_logo.css\" />\n    <file src=\"/css/module_header_calendar.css\" />\n    <file src=\"/css/module_footer.css\" />\n    ...\n</item>",
                "config": {
                    "type": "code"
                }
            }
        }
    }, {
        "sid": 1369278983168,
        "layout": "title",
        "items": {
            "title": {
                "type": "text",
                "value": "RequireJS Optimizer"
            },
            "content": {
                "type": "text",
                "value": ""
            }
        }
    }, {
        "sid": 1369279027583,
        "layout": "double",
        "items": {
            "title": {
                "type": "text",
                "value": "模块化JS开发的工具"
            },
            "content": {
                "type": "text",
                "value": "* 通过RequireJS定义的规则进行JS打包\n* 通过CSS中的@import规则进行CSS打包\n* 其它文件完全复制到目标路径"
            },
            "content2": {
                "type": "code",
                "value": "// mod-c.js\ndefine(['mod-a', 'mod-b'],\n        function (modA, modB) {\n    modA.x()\n    modB.y()\n\n    return {\n        z: ...\n    }\n})",
                "config": {
                    "type": "code"
                }
            }
        }
    }, {
        "sid": 1369279282769,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "完善的细节配置"
            },
            "content": {
                "type": "text",
                "value": "* CSS/JS压缩方式可选\n* 白名单、黑名单\n* 覆写JS依赖关系\n* 覆写JS模块内容"
            }
        }
    }, {
        "sid": 1369279817779,
        "layout": "title",
        "items": {
            "title": {
                "type": "text",
                "value": "？NO RequireJS"
            },
            "content": {
                "type": "text",
                "value": "但是项目中的JS并没有使用 RequireJS"
            }
        }
    }, {
        "sid": 1369279948112,
        "layout": "imax",
        "items": {
            "title": {
                "type": "text",
                "value": "“骗过”JS模块依赖的判断"
            },
            "content": {
                "type": "code",
                "value": "http://jiongks.sinaapp.com/blog/build-any-web-project-with-requirejs-optimizer/",
                "config": {
                    "type": "demo"
                }
            }
        }
    }, {
        "sid": 1369286424626,
        "layout": "imax",
        "items": {
            "title": {
                "type": "text",
                "value": "后续补充1：压缩打包时自动判断依赖关系"
            },
            "content": {
                "type": "code",
                "value": "function parseModule(name) {\n    var file = '../' + name + '.js';\n    var content = fs.readFileSync(file, 'utf8');\n    var include = content.match(/src=\"\\/(.+?)\\.js\"/gm);\n\n    return {\n        name: name,\n        include: include.map(function (substr) {\n            return substr.replace(/src=\"\\/(.+?)\\.js\"/, '$1');\n        })\n    };\n}\n\nfunction buildCode(moduleNameList, exclusion, callback) {\n    var config = {\n        appDir: \"../\",\n        baseUrl: \"./\",\n        dir: \"../../release\",\n        keepBuildDir: false,\n        optimize: \"uglify2\", // uglify|uglify2|none\n        optimizeCss: \"standard\",\n        skipModuleInsertion: true,\n        removeCombined: true,\n        modules: [],\n        fileExclusionRegExp: exclusion\n    };\n    \n    moduleNameList.forEach(function (moduleName) {\n        config.modules.push(parseModule(moduleName));\n    });\n\n    config.onBuildRead = function (moduleName, path, contents) {\n        if (moduleNameList.indexOf(moduleName) >= 0) {\n            return '';\n        }\n\n        return contents;\n    };\n\n    r.optimize(config, callback);\n}",
                "config": {
                    "type": "code"
                }
            }
        }
    }, {
        "sid": 1369286563639,
        "layout": "imax",
        "items": {
            "title": {
                "type": "text",
                "value": "后续补充2：为CSS/JS文件引用加时间戳"
            },
            "content": {
                "type": "code",
                "value": "var TIME_PATTERN = /\\?v=\\d+/;\n\nvar timestamp = (new Date).valueOf();\n\nfunction replace(content, pattern, replacement) {\n    pattern = new RegExp(pattern.source + '(' + TIME_PATTERN.source + ')?', 'g');\n    return content.replace(pattern, replacement);\n}\n\nfunction timestampHandler(substr) {\n\n    substr = substr.replace(TIME_PATTERN, '');\n    substr += '?v=' + timestamp;\n\n    return substr;\n}\n\nfunction process(file, patternList) {\n    var content = read(file);\n\n    patternList.forEach(function (pattern) {\n        content = replace(content, pattern, timestampHandler);\n    });\n\n    write(file, content);\n}",
                "config": {
                    "type": "code"
                }
            }
        }
    }, {
        "sid": 1369286886751,
        "layout": "subtitle",
        "items": {
            "title": {
                "type": "text",
                "value": "2. 模块化内容框架"
            },
            "content": {
                "type": "text",
                "value": ""
            }
        }
    }, {
        "sid": 1369286972386,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "同时解决几个问题"
            },
            "content": {
                "type": "text",
                "value": "* 模块化界面展示 - HTML/CSS\n* 模块化交互控制 - JavaScript\n* 跨前后端的内容展示 - 模板引擎\n* 通过简单的配置将模块组合填入结构化的页面\n* 通过简单的配置确定每个模块的基本信息"
            }
        }
    }, {
        "sid": 1369287402386,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "对内容的拆分"
            },
            "content": {
                "type": "text",
                "value": "页面 (page)\n | 1:1\n结构 (layout)\n | 1:n\n模块 (module)\n | n:n\n数据 (data)"
            }
        }
    }, {
        "sid": 1369287857435,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "在任意时机生成内容"
            },
            "content": {
                "type": "text",
                "value": "1. 请求时动态拼接组合\n2. 按需输出为静态化页面\n对这类页面我们可以提供“预览”的访问方式\n随时访问基于最新数据的生成效果\n3. 页面加载完毕后通过Ajax请求加载数据\n"
            }
        }
    }, {
        "sid": 1369288105877,
        "layout": "title",
        "items": {
            "title": {
                "type": "text",
                "value": "用到的几个Node库"
            },
            "content": {
                "type": "text",
                "value": ""
            }
        }
    }, {
        "sid": 1369288133048,
        "layout": "imax",
        "items": {
            "title": {
                "type": "text",
                "value": "Mustache - 跨语言的模板引擎"
            },
            "content": {
                "type": "code",
                "value": "http://mustache.github.io",
                "config": {
                    "type": "demo"
                }
            }
        }
    }, {
        "sid": 1369288265835,
        "layout": "imax",
        "items": {
            "title": {
                "type": "text",
                "value": "Mustache基本的调用方式"
            },
            "content": {
                "type": "code",
                "value": "// View\n\n{\n  \"beatles\": [\n    { \"firstName\": \"John\", \"lastName\": \"Lennon\" },\n    { \"firstName\": \"Paul\", \"lastName\": \"McCartney\" },\n    { \"firstName\": \"George\", \"lastName\": \"Harrison\" },\n    { \"firstName\": \"Ringo\", \"lastName\": \"Starr\" }\n  ],\n  \"name\": function () {\n    return this.firstName + \" \" + this.lastName;\n  }\n}\n\n\n// Template\n\n{{#beatles}}\n* {{name}}\n{{/beatles}}\n\n\n// Usage\n\nvar output = Mustache.render(template, view);\n\n\n// Output\n\n* John Lennon\n* Paul McCartney\n* George Harrison\n* Ringo Starr",
                "config": {
                    "type": "code"
                }
            }
        }
    }, {
        "sid": 1369288636937,
        "layout": "double-subtitle",
        "items": {
            "title": {
                "type": "text",
                "value": "Mustache的用途"
            },
            "content": {
                "type": "text",
                "value": "* 将数据绑定到模块\n* 统一前后端绑定数据的方式"
            },
            "subtitle": {
                "type": "text",
                "value": "优势",
                "config": {}
            },
            "subtitle2": {
                "type": "text",
                "value": "不足",
                "config": {}
            },
            "content2": {
                "type": "text",
                "value": "* 模板的逻辑相对简单：\n可以在数据端处理逻辑\n* 性能？",
                "config": {}
            }
        }
    }, {
        "sid": 1369288818754,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "我们还有很多选择"
            },
            "content": {
                "type": "code",
                "value": "https://github.com/visionmedia/consolidate.js\n\n* atpl\n* dust\n* eco\n* ect\n* ejs\n* haml\n* haml-coffee\n* handlebars\n* hogan\n* jade\n* jazz\n* jqtpl\n* JUST\n* liquor\n* mustache\n* QEJS\n* swig\n* templayed\n* toffee\n* underscore\n* walrus\n* whiskers",
                "config": {
                    "type": "code"
                }
            }
        }
    }, {
        "sid": 1369289120221,
        "layout": "imax",
        "items": {
            "title": {
                "type": "text",
                "value": "Node-fs-extra - 文件系统增强"
            },
            "content": {
                "type": "code",
                "value": "http://jprichardson.github.io/node-fs-extra/",
                "config": {
                    "type": "demo"
                }
            }
        }
    }, {
        "sid": 1369289217887,
        "layout": "imax",
        "items": {
            "title": {
                "type": "text",
                "value": "UglifyJS2 - JavaScript代码压缩工具"
            },
            "content": {
                "type": "code",
                "value": "http://lisperator.net/uglifyjs/",
                "config": {
                    "type": "demo"
                }
            }
        }
    }, {
        "sid": 1369289353930,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "UglifyJS2用法"
            },
            "content": {
                "type": "code",
                "value": "var UglifyJS = require('uglify-js'),\n    jsCode = '...'\n\nconsole.log(\n    UglifyJS.minify(jsCode, {\n        fromString: true\n    })\n)\n",
                "config": {
                    "type": "code"
                }
            }
        }
    }, {
        "sid": 1369289559467,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "其它选择"
            },
            "content": {
                "type": "text",
                "value": "YUI Compressor\nGoogle Closure Compiler"
            }
        }
    }, {
        "sid": 1369289689630,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "RequireJS Optimizer"
            },
            "content": {
                "type": "text",
                "value": "参考了其中的CSS合并和压缩\n》\nhttps://github.com/jrburke/r.js/\nbuild/jslib/optimize.js"
            }
        }
    }, {
        "sid": 1369289852034,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "没有选择现有的CSS库"
            },
            "content": {
                "type": "text",
                "value": "* 现有的CSS压缩库多半都是针对单个文件\n* 很少针对@import语法进行文件合并\n* 很少针对url(...)的相对路径进行修正\n》\nRequireJS Optimizer 做到了上述几点"
            }
        }
    }, {
        "sid": 1369289999381,
        "layout": "title",
        "items": {
            "title": {
                "type": "text",
                "value": "Express"
            },
            "content": {
                "type": "text",
                "value": "最流行的Web服务器框架\nhttp://expressjs.com/",
                "config": {}
            }
        }
    }, {
        "sid": 1369291205969,
        "layout": "title",
        "items": {
            "title": {
                "type": "text",
                "value": "把它们都组合起来"
            },
            "content": {
                "type": "text",
                "value": ""
            }
        }
    }, {
        "sid": 1369290473143,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "确定package.json"
            },
            "content": {
                "type": "code",
                "value": "// for \"npm install\"\n\n{\n    \"name\": \"mod-content\",\n    \"description\": \"modular content framework\",\n    \"version\": \"0.0.1\",\n    \"private\": true,\n    \"dependencies\": {\n        \"express\": \"3.x\",\n        \"consolidate\": \"*\",\n        \"mustache\": \"*\",\n        \"fs-extra\": \"*\",\n        \"jquery\": \"*\",\n        \"uglify-js\": \"*\"\n    }\n}",
                "config": {
                    "type": "code"
                }
            }
        }
    }, {
        "sid": 1369290250248,
        "layout": "double",
        "items": {
            "title": {
                "type": "text",
                "value": "确定目录结构"
            },
            "content": {
                "type": "text",
                "value": "+ pages\n+ layouts\n+ modules\n+ data"
            },
            "content2": {
                "type": "text",
                "value": "+ public\n公用静态资源\n+ tmpl\n系统级模板 (出错提示等)\n+ static\n后台生成的静态资源"
            }
        }
    }, {
        "sid": 1369290918488,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "页面、布局、模块的配置"
            },
            "content": {
                "type": "code",
                "value": "// page/about.json\n\n{\n    \"layout\": \"article\",\n    \"modules\": {\n        \"header\": [\"title\"],\n        \"main\": [\"blogs\"],\n        \"sidebar\": [\"avatars\", \"links\"],\n        \"footer\": []\n    },\n    \"static\": true\n}\n\n\n// layouts/homepage.html\n\n<html>\n...\n<link rel=\"stylesheet\" href=\"{{PUBLIC_URL}}/css/base.css\">\n<link rel=\"stylesheet\" href=\"{{LAYOUT_URL}}/css/theme.css\">\n...\n<div class=\"content\">{{content}}</div>\n...\n</html>\n\n\n// modules/links.json\n\n{\n    \"html\": \"links.html\",\n    \"css\": [\"style.css\"],\n    \"js\": [\"script.js\"],\n    \"lib\": [\"jq.cookie.js\"],\n    \"bind\": \"bind.js\"\n}",
                "config": {
                    "type": "code"
                }
            }
        }
    }, {
        "sid": 1369291249613,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "JS Sandbox的设计"
            },
            "content": {
                "type": "code",
                "value": "# public api\n\n$\n$.render(template, data)\n$.getData(filepath, callback)\n$.cookie(id, key[, value])\n$.require(id).<member>\n\n# modular api\n\nself.id\nself.html([value])\nself.cookie(key[, value])\nself.data(key[, value])\nself.stat(action, value, info)\nself.listen(name, handler)\nself.notify(name, data)\nself.exports.<member>\n\n# html5 api\n\nself.popup(title, text[, icon])\nself.fullscreen(flag)\nself.on('resize', handler)\nself.on('fullscreen', handler)\n\n# modal api\n\nself.alert(msg, title)\nself.confirm(msg, title)\nself.dialog(title, dom, actions[{name, text}])\n.on(name, handler)\n.off(name)\n.close()\n.show()\n.hide()\n\n# user api\n\nself.user.info(callback)\nself.user.checkLogin(callback)\nself.user.log(callback[, cancelCallback])\nself.user.logout(callback)\nself.user.data(key[, value[, callback]])",
                "config": {
                    "type": "code"
                }
            }
        }
    }, {
        "sid": 1369291436329,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "服务器程序 combo.js"
            },
            "content": {
                "type": "code",
                "value": "var combo = require('./combo')\n\ncombo.css(filepath, outFilepath)\ncombo.css(fileList, outFilepath)\ncombo.css(code, outFilepath, dir)\ncombo.js(fileList, outFilepath)\ncombo.js(code, outFilepath, dir)",
                "config": {
                    "type": "code"
                }
            }
        }
    }, {
        "sid": 1369291560506,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "服务器程序 build.js"
            },
            "content": {
                "type": "code",
                "value": "var build = require('./build')\n\nbuild.setDir(newDir)\nbuild.load(page, preview, res)\nbuild.save(page, options)\nbuild.saveHeader()",
                "config": {
                    "type": "code"
                }
            }
        }
    }, {
        "sid": 1369290150747,
        "layout": "imax",
        "items": {
            "title": {
                "type": "text",
                "value": "把上面的库都串起来 server.js"
            },
            "content": {
                "type": "code",
                "value": "var express = require('express'),\n    cons = require('consolidate'),\n    build = require('./build'),\n    app\n\n// 启动服务\napp = express()\n\n// 绑定模板引擎\napp.set('views', 'tmpl')\napp.set('view engine', 'html')\napp.engine('html', cons.mustache)\napp.engine('mustache', cons.mustache)\n\n// 支持站点图标\napp.use(express.favicon())\n\n// 对部分文件夹提供静态访问方式\napp.use('/public', express.static(__dirname + '/public'))\napp.use('/static', express.static(__dirname + '/static'))\napp.use('/layouts', express.static(__dirname + '/layouts'))\napp.use('/modules', express.static(__dirname + '/modules'))\napp.use('/data', express.static(__dirname + '/data'))\n\n// 初始化打包工具\nbuild.setDir(__dirname)\nbuild.saveHeader()\n\n// 用户访问页面时的处理\napp.get('/', function (req, res) {\n    var preview = req.query.hasOwnProperty('preview')\n    build.load('index', preview, res)\n})\napp.get('/:page', function (req, res) {\n    var preview = req.query.hasOwnProperty('preview')\n    var page = req.params.page\n    build.load(page, preview, res)\n})\n\n// 后台生成页面时的处理\napp.get('/api/buildheader', function (req, res) {\n    build.saveHeader()\n    res.render('header', {})\n})\napp.get('/api/build/:page', function (req, res) {\n    var page = req.params.page\n    var url = '/' + page\n\n    if (page) {\n        if (page === 'index') {\n            url = '/'\n        }\n        if (build.save(page)) {\n            res.render('build', {page: page, url: url})\n            return;\n        }\n    }\n\n    res.render('error', {'file_not_found': true})\n})\n\n// 404错误处理\napp.get('*', function (req, res) {\n    res.render('error', {'not_found': true})\n})\n\n// 其它错误处理\napp.use(function (err, req, res, next) {\n    console.log('error', err)\n    res.render('error', {'unknown': true})\n});\n\n// 监听3000端口\napp.listen(3000)",
                "config": {
                    "type": "code"
                }
            }
        }
    }, {
        "sid": 1369292652732,
        "layout": "title",
        "items": {
            "title": {
                "type": "text",
                "value": "目前尚未开发完毕"
            },
            "content": {
                "type": "text",
                "value": "(希望可以赶得上8月份的HTML5峰会)"
            }
        }
    }, {
        "sid": 1369291884391,
        "layout": "title",
        "items": {
            "title": {
                "type": "text",
                "value": "一些心得体会……"
            },
            "content": {
                "type": "text",
                "value": "在效果演示之前"
            }
        }
    }, {
        "sid": 1369291913275,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "Node vs PHP"
            },
            "content": {
                "type": "text",
                "value": "* Node相当于Apache\nJS模块一旦运行起来，对JS模块的改动将不再生效\n除非重启服务\n* JS模块相当于PHP模块\n* JS模块不能相当于PHP代码\n如果希望代码可以动态改变，则可以利用vm模块实现"
            }
        }
    }, {
        "sid": 1369292091049,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "实时加载JS程序"
            },
            "content": {
                "type": "code",
                "value": "http://nodejs.org/api/vm.html\n\nvar vm = require('vm'),\n    script,\n    code = '...',\n    sandbox = {...}\n\nscript = vm.createScript(code)\nscript.runInNewContext(sandbox)",
                "config": {
                    "type": "code"
                }
            }
        }
    }, {
        "sid": 1369292281802,
        "layout": "title",
        "items": {
            "title": {
                "type": "text",
                "value": "命令行才是最好的开发者工具"
            },
            "content": {
                "type": "text",
                "value": ""
            }
        }
    }, {
        "sid": 1369292305378,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "善用命令行"
            },
            "content": {
                "type": "text",
                "value": "自从开始学习Node.JS，我陆续把不少工作由图形化界面的工具转向命令行和快捷键，开始写Shell和bat。\n它们可以组合出一连串的“精彩镜头”，同时这也是自动化之路的前提。"
            }
        }
    }, {
        "sid": 1369292384791,
        "layout": "normal",
        "items": {
            "title": {
                "type": "text",
                "value": "其它小提示"
            },
            "content": {
                "type": "text",
                "value": "* 善用npm：npm install, npm ls, npm search\n* 合理的错误处理和异常处理非常重要\n* 对HTTP原理要熟悉，有很多技巧可以深挖\n* 对api要熟悉，这是Node的基础\n* 如何退出Node：process.exit()\n* PC下部分模块无法直接安装，需要VS2010+和Python"
            }
        }
    }, {
        "sid": 1369292614473,
        "layout": "title",
        "items": {
            "title": {
                "type": "text",
                "value": "综合演示"
            },
            "content": {
                "type": "text",
                "value": "正在努力为您加载..."
            }
        }
    }]})