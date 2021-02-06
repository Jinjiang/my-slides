require('vm').resetData({
  "design": "default",
  "transition": "fly",
  "title": "",
  "slides": [
    {
      "sid": "A",
      "layout": "title",
      "items": {
        "title": {
          "type": "text",
          "value": "Source Map"
        },
        "content": {
          "type": "text",
          "value": "HTML5峰会\n2013年8月"
        }
      }
    },
    {
      "sid": "B",
      "layout": "double",
      "items": {
        "title": {
          "type": "text",
          "value": "自我介绍"
        },
        "content": {
          "type": "text",
          "value": "赵锦江\n-\n傲游浏览器 (Maxthon)\n@勾三股四\nhttp://jiongks.name/"
        },
        "content2": {
          "type": "img",
          "value": "http://0.gravatar.com/avatar/41bf705577960c95752ab55f19650b18?s=320",
          "config": {}
        }
      }
    },
    {
      "sid": 1374511921532,
      "layout": "subtitle",
      "items": {
        "title": {
          "type": "text",
          "value": "故事从一次bug开始"
        },
        "content": {
          "type": "text",
          "value": "线上脚本报错！\n在Boss的浏览器里重现了"
        }
      }
    },
    {
      "sid": 1374512222693,
      "layout": "imax",
      "items": {
        "title": {
          "type": "text",
          "value": ""
        },
        "content": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2013/08/153757798.jpg"
        }
      }
    },
    {
      "sid": 1374512269376,
      "layout": "subtitle",
      "items": {
        "title": {
          "type": "text",
          "value": "赶紧找人去看看……"
        },
        "content": {
          "type": "text",
          "value": "在老板面前，小心翼翼的：\n打开开发者工具，找到报错的代码"
        }
      }
    },
    {
      "sid": 1374512413879,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "咦？！"
        },
        "content": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2013/08/3823004816.jpg",
          "config": {}
        }
      }
    },
    {
      "sid": 1374511681913,
      "layout": "subtitle",
      "items": {
        "title": {
          "type": "text",
          "value": "不认识自己的代码 - -"
        },
        "content": {
          "type": "text",
          "value": "“艾玛，这是神马？”\n“肿么了？肿了么？”"
        }
      }
    },
    {
      "sid": 1374511779209,
      "layout": "subtitle",
      "items": {
        "title": {
          "type": "text",
          "value": "不是因为年久失修"
        },
        "content": {
          "type": "text",
          "value": "而是因为……"
        }
      }
    },
    {
      "sid": 1374511798230,
      "layout": "imax",
      "items": {
        "title": {
          "type": "text",
          "value": "代码已经压缩/混淆过了，怎么调试？怎么定位？"
        },
        "content": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2013/08/1007624987.png",
          "config": {}
        }
      }
    },
    {
      "sid": 1374512799289,
      "layout": "title",
      "items": {
        "title": {
          "type": "text",
          "value": "你需要Source Map"
        },
        "content": {
          "type": "text",
          "value": "压缩/混淆过的代码也可以还原哦"
        }
      }
    },
    {
      "sid": 1374511325642,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "脱了马甲我照样认素你！"
        },
        "content": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2013/08/2161112187.jpg",
          "config": {}
        }
      }
    },
    {
      "sid": "C",
      "layout": "title",
      "items": {
        "title": {
          "type": "text",
          "value": "今天议题的两大部分"
        },
        "content": {
          "type": "text",
          "value": "1. Source Map的原理\n2. Source Map的实现",
          "config": {}
        }
      }
    },
    {
      "sid": 1374511209954,
      "layout": "title",
      "items": {
        "title": {
          "type": "text",
          "value": "Source Map的介绍"
        },
        "content": {
          "type": "text",
          "value": "由来、目的、原理"
        }
      }
    },
    {
      "sid": 1374511295081,
      "layout": "subtitle",
      "items": {
        "title": {
          "type": "text",
          "value": "Source Map的由来"
        },
        "content": {
          "type": "text",
          "value": " Google Closure Inspector"
        }
      }
    },
    {
      "sid": 1374513219342,
      "layout": "imax",
      "items": {
        "title": {
          "type": "text",
          "value": "https://code.google.com/p/closure-inspector/"
        },
        "content": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2013/08/1341914157.png",
          "config": {}
        }
      }
    },
    {
      "sid": 1375116513297,
      "layout": "imax",
      "items": {
        "title": {
          "type": "text",
          "value": ""
        },
        "content": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2013/08/4227042196.png"
        }
      }
    },
    {
      "sid": 1374594807867,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "Source Map v1~v3 演变"
        },
        "content": {
          "type": "text",
          "value": "v1：供Closure Inspector使用，方便JavaScript代码调试，但随着应用项目的不断增多，臃肿的格式逐渐成为了一个问题\nv2：对格式进行了大幅度的简化，但可用性也打了一定的折扣\nv3：今天现行的版本，进一步优化了格式\n-\n参考：https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k"
        }
      }
    },
    {
      "sid": 1374595593009,
      "layout": "title",
      "items": {
        "title": {
          "type": "text",
          "value": "Source Map的功能"
        },
        "content": {
          "type": "text",
          "value": "源码的双向映射"
        }
      }
    },
    {
      "sid": 1374595892250,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "JavaScript 压缩+合并"
        },
        "content": {
          "type": "code",
          "value": "// script.js\n\nfunction formatUrl(url) {\n    var regexp = /^(http|https)\\:\\/\\//\n    if (!url.match(regexp)) {\n        url = 'http://' + url\n    }\n    return url\n}\n\n\n// run.js\n\nformatUrl(window.location.href)",
          "config": {
            "type": "code"
          }
        }
      }
    },
    {
      "sid": 1374596092598,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "压缩+合并之后"
        },
        "content": {
          "type": "code",
          "value": "java -jar compiler.jar --js script.js run.js --js_output_file compiled.js\n\n// compiled.js\n\nfunction formatUrl(a){a.match(/^(http|https)\\:\\/\\//)||(a=\"http://\"+a);return a};formatUrl(window.location.href);",
          "config": {
            "type": "code"
          }
        }
      }
    },
    {
      "sid": 1374596853431,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "参数说明"
        },
        "content": {
          "type": "text",
          "value": "--js: 待处理的js文件(列表)\n--js_output_file: 处理后输出的js文件"
        }
      }
    },
    {
      "sid": 1374596159805,
      "layout": "double",
      "items": {
        "title": {
          "type": "text",
          "value": "引用到HTML中 结束"
        },
        "content": {
          "type": "code",
          "value": "<html>\n...\n<script src=\"compiled.js\"></script>\n...\n</html>",
          "config": {
            "type": "code"
          }
        },
        "content2": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2013/08/2398149574.png",
          "config": {}
        }
      }
    },
    {
      "sid": 1374596334174,
      "layout": "subtitle",
      "items": {
        "title": {
          "type": "text",
          "value": "来加入Source Map"
        },
        "content": {
          "type": "text",
          "value": ""
        }
      }
    },
    {
      "sid": 1374596822016,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "加入参数"
        },
        "content": {
          "type": "text",
          "value": "--create_source_map: 生成source map的文件"
        }
      }
    },
    {
      "sid": 1374596376679,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "重新压缩+合并"
        },
        "content": {
          "type": "code",
          "value": "java -jar compiler.jar --js script.js run.js --js_output_file compiled.js --create_source_map compiled.map\n\n\n// compiled.map\n\n{\n    \"version\":3,\n    \"file\":\"compiled.js\",\n    \"lineCount\":1,\n    \"mappings\":\"AAAAA,QAASA,UAAS,CAACC,CAAD,CAAM,CAEfA,CAAAC,MAAA,CADQC,qBACR,CAAL,GACIF,CADJ,CACU,SADV,CACsBA,CADtB,CAGA,OAAOA,EALa,C,CCAxBD,SAAA,CAAUI,MAAAC,SAAAC,KAAV;\",\n    \"sources\":[\"script.js\",\"run.js\"],\n    \"names\":[\"formatUrl\",\"url\",\"match\",\"regexp\",\"window\",\"location\",\"href\"]\n}",
          "config": {
            "type": "code"
          }
        }
      }
    },
    {
      "sid": 1374597016057,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "这是一坨神马？？？"
        },
        "content": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2012/06/1876065904.png",
          "config": {}
        }
      }
    },
    {
      "sid": 1374597042627,
      "layout": "subtitle",
      "items": {
        "title": {
          "type": "text",
          "value": "我们稍后再解释……"
        },
        "content": {
          "type": "text",
          "value": "马上你会看到效果，只需一步：\n* 在编译后的JS文件末尾加入一小段代码"
        }
      }
    },
    {
      "sid": 1374597074599,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "//@ sourceMappingURL"
        },
        "content": {
          "type": "code",
          "value": "// compiled.js\n\nfunction formatUrl(a){a.match(/^(http|https)\\:\\/\\//)||(a=\"http://\"+a);return a};formatUrl(window.location.href);\n//@ sourceMappingURL=compiled.map",
          "config": {
            "type": "code"
          }
        },
        "content2": {
          "type": "img",
          "value": null,
          "config": {}
        }
      }
    },
    {
      "sid": 1374597679221,
      "layout": "subtitle",
      "items": {
        "title": {
          "type": "text",
          "value": "刷新浏览器！"
        },
        "content": {
          "type": "text",
          "value": "见证奇迹的时刻……"
        }
      }
    },
    {
      "sid": 1374597704238,
      "layout": "imax",
      "items": {
        "title": {
          "type": "text",
          "value": "代码被分解、还原，并且可调试！"
        },
        "content": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2013/08/755456510.png"
        }
      }
    },
    {
      "sid": 1374597854357,
      "layout": "subtitle",
      "items": {
        "title": {
          "type": "text",
          "value": "现在再回头看看"
        },
        "content": {
          "type": "text",
          "value": "compiled.map"
        }
      }
    },
    {
      "sid": 1374597908124,
      "layout": "imax",
      "items": {
        "title": {
          "type": "text",
          "value": ""
        },
        "content": {
          "type": "code",
          "value": "// compiled.map\n\n{\n    \"version\":3,\n    \"file\":\"compiled.js\",\n    \"lineCount\":1,\n    \"mappings\":\"AAAAA,QAASA,UAAS,CAACC,CAAD,CAAM,CAEfA,CAAAC,MAAA,CADQC,qBACR,CAAL,GACIF,CADJ,CACU,SADV,CACsBA,CADtB,CAGA,OAAOA,EALa,C,CCAxBD,SAAA,CAAUI,MAAAC,SAAAC,KAAV;\",\n    \"sources\":[\"script.js\",\"run.js\"],\n    \"names\":[\"formatUrl\",\"url\",\"match\",\"regexp\",\"window\",\"location\",\"href\"]\n}",
          "config": {
            "type": "code"
          }
        }
      }
    },
    {
      "sid": 1374597961941,
      "layout": "subtitle",
      "items": {
        "title": {
          "type": "text",
          "value": "这是一段JSON！"
        },
        "content": {
          "type": "text",
          "value": "玄机都在这里了"
        }
      }
    },
    {
      "sid": 1374597991019,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "可以猜到的"
        },
        "content": {
          "type": "text",
          "value": "* version：source map的格式版本\n* file：处理后的文件\n* sources：处理前的文件(列表)\n* names：被混淆的变量/方法/属性名"
        }
      }
    },
    {
      "sid": 1374598137485,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "猜不透的……"
        },
        "content": {
          "type": "text",
          "value": "神秘的mappings\n-\n\"mappings\":\"AAAAA,QAASA,UAAS,CAACC,CAAD,CAAM,CAEfA,CAAAC,MAAA,CADQC,qBACR,CAAL,GACIF,CADJ,CACU,SADV,CACsBA,CADtB,CAGA,OAAOA,EALa,C,CCAxBD,SAAA,CAAUI,MAAAC,SAAAC,KAAV;\""
        }
      }
    },
    {
      "sid": 1375030313478,
      "layout": "title",
      "items": {
        "title": {
          "type": "text",
          "value": "Source Map的精髓"
        },
        "content": {
          "type": "text",
          "value": "终于进入正题了！！"
        }
      }
    },
    {
      "sid": 1375031697293,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "映射关键位置"
        },
        "content": {
          "type": "code",
          "value": "// 编译前\nfunction add(x, y) {\n^        ^   ^  ^  ^\n1        2   3  4  5\n    return x + y;\n    ^      ^   ^\n    6      7   8\n}\n^\n9\n\n// 编译后\nfunction add(A,B){return A+B}\n^        ^   ^ ^ ^^      ^ ^^\n1        2   3 4 56      7 89",
          "config": {
            "type": "code"
          }
        }
      }
    },
    {
      "sid": 1375031732581,
      "layout": "title",
      "items": {
        "title": {
          "type": "text",
          "value": "映射的最小颗粒"
        },
        "content": {
          "type": "text",
          "value": "“编译后第n行的第m个字符，对应着编译前a.js的第x行的第y个字符‘foo’”"
        }
      }
    },
    {
      "sid": 1375030364170,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "映射关系描述"
        },
        "content": {
          "type": "text",
          "value": "通过描述关键位置的前后对应关系来串起编译前后的代码\n* 每段字母描述一个位置\n* 位置与位置用逗号或分号隔开\n* 逗号用来分隔生成码中同一行的多个位置\n* 分号用来分隔不同的行\n(我们稍后解释每个字母的含义)"
        }
      }
    },
    {
      "sid": 1375030535844,
      "layout": "double",
      "items": {
        "title": {
          "type": "text",
          "value": "举个例子"
        },
        "content": {
          "type": "text",
          "value": "AAAAA,BBBBB;CCCCC\n表示：\n第一行有两个位置信息\n第二行有一个位置信息"
        },
        "content2": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2013/08/1051332593.jpg",
          "config": {}
        }
      }
    },
    {
      "sid": 1375032793276,
      "layout": "imax",
      "items": {
        "title": {
          "type": "text",
          "value": "写成JavaScript："
        },
        "content": {
          "type": "code",
          "value": "// mappings: \"AAAAA,BBBBB;CCCCC\"\nfunction parseMappings(mappings) {\n    var lineMappings = mappings.split(';'),\n        lines = []\n\n    lineMappings.forEach(function (line) {\n        var pointMappings\n\n        if (line.length === 0) {\n            status.generated.line++\n            return\n        }\n\n        pointMappings = line.split(',')\n        lines.push(pointMappings.map(parsePoint)) // parePoint(point) 解析每段位置描述\n        status.generated.line++\n        status.generated.column = 0\n    })\n\n    return lines\n}",
          "config": {
            "type": "code"
          }
        }
      }
    },
    {
      "sid": 1375031914865,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "“AAAAA”?"
        },
        "content": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2012/06/1876065904.png",
          "config": {}
        }
      }
    },
    {
      "sid": 1375032193545,
      "layout": "title",
      "items": {
        "title": {
          "type": "text",
          "value": "回想一下最小颗粒"
        },
        "content": {
          "type": "text",
          "value": "“编译后第n行的第m个字符，对应着编译前a.js的第x行的第y个字符‘foo’”"
        }
      }
    },
    {
      "sid": 1375032234556,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "一共6部分"
        },
        "content": {
          "type": "text",
          "value": "编译后的信息\n* 编译后第几行 ---------------- n\n* 编译后第几列 ---------------- m \n编译前的信息\n* 编译前所在的文件 ---------------- a.js\n* 编译前第几行 ---------------- x\n* 编译前第几列 ---------------- y\n* 编译前的名词 ---------------- 'foo'"
        }
      }
    },
    {
      "sid": 1375031997038,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "几个术语 (1)"
        },
        "content": {
          "type": "text",
          "value": "* 生成码(Generated Code)：编译之后的代码\n* 源代码(Original Source)：编译之前的代码"
        }
      }
    },
    {
      "sid": 1375032390238,
      "layout": "title",
      "items": {
        "title": {
          "type": "text",
          "value": "生成码的行号"
        },
        "content": {
          "type": "text",
          "value": "已经可以通过分号数出来了！\n不必重复描述"
        }
      }
    },
    {
      "sid": 1375031956095,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "通常一共由5部分组成"
        },
        "content": {
          "type": "text",
          "value": "1. 该位置对应的生成码的列号 (增量)\n2. 该位置对应于源代码的第几个文件 (增量)\n3. 该位置对应的源代码的行号 (增量)\n4. 该位置对应的源代码的列号 (增量)\n5. 该位置对应的names中的第几个名词 (增量)"
        }
      }
    },
    {
      "sid": 1375032553226,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "特殊的情况……"
        },
        "content": {
          "type": "text",
          "value": "源代码中没有相应的位置：只有第一部分\n源代码中没有相应的名词：只有前四部分"
        }
      }
    },
    {
      "sid": 1375033198896,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "“增量”？"
        },
        "content": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2012/06/1876065904.png",
          "config": {}
        }
      }
    },
    {
      "sid": 1375033363727,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "再举个例子"
        },
        "content": {
          "type": "text",
          "value": "* 比如上一个位置在生成码的第8列，当前的位置在生成码的第12列，那么第1部分的值不是11，而是11 - 7 = 4\n* 比如上一个位置在源代码的第2个文件“run.js”，当前的位置也在“run.js”，则第3部分的值不是1，而是1 - 1 = 0\n-\n计数从0开始"
        }
      }
    },
    {
      "sid": 1375117444535,
      "layout": "title",
      "items": {
        "title": {
          "type": "text",
          "value": "规范设计之精巧！"
        },
        "content": {
          "type": "text",
          "value": "让数据最小化同时信息不丢失"
        }
      }
    },
    {
      "sid": 1375032623444,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "所以“AAAAA”表示："
        },
        "content": {
          "type": "text",
          "value": "生成码中的第1行第1列，对应着第1个文件“script.js”中第1行第1列的名词“function”\n-\n* A代表0 (稍后详细解释)\n* 计数从0开始，其实上面的1都应该是0"
        }
      }
    },
    {
      "sid": 1375033037098,
      "layout": "imax",
      "items": {
        "title": {
          "type": "text",
          "value": "写成JavaScript："
        },
        "content": {
          "type": "code",
          "value": "// point: \"AAAAA\"\nfunction parsePoint(point) {\n    var values = []\n    var value\n    var i = 0\n    var valueInfo = {}\n    var pointInfo = {}\n\n    // 萃取每个部分的数值\n    while (point.length && i < 5) {\n\n        // extractValue 萃取函数\n        valueInfo = extractValue(point)\n\n        // valueInfo 共有两个属性：一个是消耗的字符数 length，一个是数值 value\n        point = point.substr(valueInfo.length)\n        value = valueInfo.value\n        values.push(value)\n\n        i++\n    }\n\n    status.generated.column += values[0]\n    pointInfo.generated = {}\n    pointInfo.generated.line = status.generated.line\n    pointInfo.generated.column = status.generated.column\n\n    // 第一部分结束\n    if (values.length <= 1) {\n        return pointInfo\n    }\n\n    status.sourceIndex += values[1]\n    status.original.line += values[2]\n    status.original.column += values[3]\n\n    pointInfo.source = files[status.sourceIndex]\n    pointInfo.original = {}\n    pointInfo.original.line = status.original.line\n    pointInfo.original.column = status.original.column\n\n    // 前四部分结束\n    if (values.length <= 4) {\n        return pointInfo\n    }\n\n    status.nameIndex += values[4]\n    pointInfo.name = keywords[status.nameIndex]\n\n    return pointInfo\n}",
          "config": {
            "type": "code"
          }
        }
      }
    },
    {
      "sid": 1375033870447,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "马上超级大结局！"
        },
        "content": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2013/08/292900675.jpg",
          "config": {}
        }
      }
    },
    {
      "sid": 1375034687018,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "A 为什么等于 0 ？"
        },
        "content": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2012/06/1876065904.png",
          "config": {}
        }
      }
    },
    {
      "sid": 1375034782738,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "几个术语 (2)"
        },
        "content": {
          "type": "code",
          "value": "* Base 64 值\n\n> [A-Z] ->  0-25\n> [a-z] -> 26-51\n> [0-9] -> 52-61\n>   +   ->    62\n>   /   ->    63\n\n每个 Base 64 值代表一个6位的二进制数 (0-63)",
          "config": {
            "type": "code"
          }
        }
      }
    },
    {
      "sid": 1375036029991,
      "layout": "imax",
      "items": {
        "title": {
          "type": "text",
          "value": "写成JavaScript："
        },
        "content": {
          "type": "code",
          "value": "// [A-Z] ->  0-25,\n// [a-z] -> 26-51,\n// [0-9] -> 52-61,\n//   +   ->    62,\n//   /   ->    63\nfunction convertCharToInt(c) {\n    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.search(c)\n}",
          "config": {
            "type": "code"
          }
        }
      }
    },
    {
      "sid": 1375035219910,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "几个术语 (3)"
        },
        "content": {
          "type": "text",
          "value": "Base 64 VLQ (Variable-Length Quantity) 可变长计量法\n-\n从左到右对每个 Base 64 值进行分解：\n* 最左边，也就是第6位，决定了计量是否结束。如果没有结束，则继续分析下一个 Base 64 值\n* 最右边，也就是第1位：\n-> 如果当前 Base 64 值是整个计量的第一个值，则表示正负号，中间的4位表示一个4位的二进制数字；\n-> 否则剩下的5位全部表示一个5位的二进制数字。",
          "config": {}
        }
      }
    },
    {
      "sid": 1375036587775,
      "layout": "imax",
      "items": {
        "title": {
          "type": "text",
          "value": "写成JavaScript："
        },
        "content": {
          "type": "code",
          "value": "// 100001, true  ->  continuation,  sign, 0\n// 000010, false -> !continuation,      , 2\n// 110010, true  ->  continuation, !sign, 9\nfunction convertNumberToInfo(n, first) {\n    var continuation = parseInt(100000, 2) & n\n    var value = parseInt(11111, 2) & n\n    var sign\n\n    if (first) {\n        sign = 1 & n\n        value = value >> 1\n    }\n\n    return {\n        first: !!first,\n        sign: !!sign,\n        continuation: continuation,\n        value: value\n    }\n}",
          "config": {
            "type": "code"
          }
        }
      }
    },
    {
      "sid": 1375036620015,
      "layout": "subtitle",
      "items": {
        "title": {
          "type": "text",
          "value": "最后得出结果："
        },
        "content": {
          "type": "text",
          "value": "把得到的每个二级制数字从低位到高位串起来，就是它代表的值！"
        }
      }
    },
    {
      "sid": 1375036083540,
      "layout": "double",
      "items": {
        "title": {
          "type": "text",
          "value": "再举个例子"
        },
        "content": {
          "type": "code",
          "value": "A(0)    ...\n000000  ...\n^    ^\nend  +\n\n-> +0000\n= 0\n\n----\n\np(41)   D(3)   ...\n101001  000011 ...\n^    ^  ^\nnext -  end\n\n-> - 00011 0100\n= -(32 + 16 + 4)\n= -52",
          "config": {
            "type": "code"
          }
        },
        "content2": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2013/08/1656036438.jpg",
          "config": {}
        }
      }
    },
    {
      "sid": 1375036683595,
      "layout": "imax",
      "items": {
        "title": {
          "type": "text",
          "value": "写成JavaScript："
        },
        "content": {
          "type": "code",
          "value": "// A  0 000000   0\n// B  1 000001  -0\n// C  2 000010   1\n// D  3 000011  -1\n// E             2\n// F            -2\n// G             3\n// H            -3\n// I             4\n// J            -4\n// K             5\n// L            -5\n// MOQSU         6~ 10\n// NPRTV        -6~-10\n// WYace        11~ 15\n// XZbdf       -11~-15\n// \n// g 32 100000   0 + ?\n// hijkl...\nfunction extractValue(point) {\n    var length = point.length\n    var first = true\n    var step = 0\n    var totalValue = 0\n    var sign = 0\n\n    // var firstChar = point[0]\n    // var firstNumber = convertCharToInt(firstChar)\n    // var firstMap = [0, 0, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10, 11, -11, 12, -12, 13, -13, 14, -14, 15, -15]\n\n    // if (firstNumber <= convertCharToInt('f')) {\n    //     console.log('first', firstChar, '->', firstMap[firstNumber], firstNumber.toString(2), Math.floor(Math.random() * 10))\n    //     return {\n    //         length: 1,\n    //         value: firstMap[firstNumber]\n    //     }\n    // }\n\n    for (var i = 0; i < length; i++) {\n        var c = point[i]\n        var n = convertCharToInt(c)\n        var info = convertNumberToInfo(n, first)\n\n        // console.log('info', c, n.toString(2), info)\n        totalValue += info.value * Math.pow(2, step)\n\n        if (info.first) {\n            sign = info.sign\n        }\n\n        step += 6\n        if (info.first) {\n            step--\n        }\n        if (info.continuation) {\n            step--\n        }\n        // console.log('step', step)\n\n        if (info.continuation) {\n            first = false\n        }\n        else {\n            first = true\n            break\n        }\n    }\n\n    // console.log('VLQ:', i + 1, totalValue, sign)\n\n    if (sign) {\n        totalValue = -totalValue\n    }\n\n    return {\n        length: i + 1,\n        value: totalValue\n    }\n}",
          "config": {
            "type": "code"
          }
        }
      }
    },
    {
      "sid": 1375117624945,
      "layout": "title",
      "items": {
        "title": {
          "type": "text",
          "value": "每个最小颗粒："
        },
        "content": {
          "type": "text",
          "value": "就是5个(或4个或1个) Base 64 VLQ"
        }
      }
    },
    {
      "sid": 1375117940813,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "例如：CCAxBD"
        },
        "content": {
          "type": "code",
          "value": "C     C     A     x     B     D\n2     2     0     49    1     3\n\n1     1     0     8     1     1\n<+>   <+>   <+>   <  -  >     <->\n\n1     1     0     -8-1*16=-24 -1\n\n-> [1, 1, 0, -24, -1]\n\n该位置表示：\n\n* 生成码向前移动一列\n* 源代码找到下一个文件，相比之前的位置行号不变，列号减24，关键字向前找一个",
          "config": {
            "type": "code"
          }
        }
      }
    },
    {
      "sid": 1375037079764,
      "layout": "title",
      "items": {
        "title": {
          "type": "text",
          "value": "That's IT！"
        },
        "content": {
          "type": "text",
          "value": "让我们回顾一下\n同时把代码串起来"
        }
      }
    },
    {
      "sid": 1375037118831,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "整个Source Map的原理"
        },
        "content": {
          "type": "code",
          "value": "// 解析source map中的mappings\nfunction parse(input, files, names) {\n    var status = {generated: {line: 0, column: 0},\n                  original:  {line: 0, column: 0},\n                  sourceIndex: 0, nameIndex: 0}\n\n    // 基础函数：将base64码转成数字\n    function convertCharToInt(c) {...}\n    // 基础函数：将数值转成VLQ信息\n    function convertNumberToInfo(n, first) {...}\n\n    // 每个分号分隔一行，每个逗号分隔一个位置描述\n    function parseMappings(mappings) {...}\n    // 每个位置描述有1、4或5个数值组成\n    // 分别表示生成码的列数、第几个源代码、第几行、第几列、第几个关键字(全部是增量)\n    function parsePoint(point) {...}\n    // 萃取一个Base 64 VLQ数值出来，并声明它消耗掉了几个字符\n    function extractValue(point) {...}\n\n    return parseMappings(input)\n}",
          "config": {
            "type": "code"
          }
        }
      }
    },
    {
      "sid": 1375037596257,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "我们还可以输出信息"
        },
        "content": {
          "type": "code",
          "value": "function log(result) {\n    for (var line = 0; line < result.length; line++) {\n        var lineResult = result[line]\n        for (var col = 0; col < lineResult.length; col++) {\n            var colResult = lineResult[col]\n\n            if (!colResult.source) {\n                continue\n            }\n\n            console.log('[{gline}, {gcol}] {source}: {oline}, {ocol} {name}'.\n                replace('{gline}', colResult.generated.line + 1).\n                replace('{gcol}', colResult.generated.column + 1).\n                replace('{source}', colResult.source).\n                replace('{oline}', colResult.original.line + 1).\n                replace('{ocol}', colResult.original.column + 1).\n                replace('{name}', colResult.name ? ('-> ' + colResult.name) : ''))\n        }\n    }\n}",
          "config": {
            "type": "code"
          }
        }
      }
    },
    {
      "sid": 1375037708419,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "结果如图所示"
        },
        "content": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2013/08/1922717210.png",
          "config": {}
        }
      }
    },
    {
      "sid": 1375037784993,
      "layout": "title",
      "items": {
        "title": {
          "type": "text",
          "value": "我们还可以更可视化"
        },
        "content": {
          "type": "text",
          "value": "加入源代码和生成码的展现\n通过鼠标点击进行双向定位"
        }
      }
    },
    {
      "sid": 1375037920879,
      "layout": "imax",
      "items": {
        "title": {
          "type": "text",
          "value": ""
        },
        "content": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2013/08/630442239.png"
        }
      }
    },
    {
      "sid": 1375037938589,
      "layout": "imax",
      "items": {
        "title": {
          "type": "text",
          "value": ""
        },
        "content": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2013/08/729218352.png"
        }
      }
    },
    {
      "sid": 1375038117906,
      "layout": "subtitle",
      "items": {
        "title": {
          "type": "text",
          "value": "现在再回头看看"
        },
        "content": {
          "type": "text",
          "value": "java -jar compiler.jar ... --create_source_map compiled.map"
        }
      }
    },
    {
      "sid": 1375038202682,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "其实是编译+Source Map"
        },
        "content": {
          "type": "text",
          "value": "1. 压缩JavaScript文件\n1.1 在压缩过程中，记录压缩前后的双向映射信息\n2. 如果有多个JavaScript文件，则进行合并\n2.1 把多个JavaScript文件的双向映射信息也收集到一起\n3. 把合并后的文件写入制定的文件\n3.1 生成相应的Source Map，然后写入制定的映射文件"
        }
      }
    },
    {
      "sid": 1375038420905,
      "layout": "subtitle",
      "items": {
        "title": {
          "type": "text",
          "value": "现在再回头看看"
        },
        "content": {
          "type": "text",
          "value": "//@ sourceMappingURL=compiled.map"
        }
      }
    },
    {
      "sid": 1375038462304,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "其实是浏览器识别映射"
        },
        "content": {
          "type": "text",
          "value": "1. 运行时，如果遇到断点\n2. 找到Source Mapping URL\n3. 找到断点对应的源代码文件和断点所在行和列\n4. 把断点显示在源代码中，而不是生成码中\n5. 断点还会继续随自身的移动而从新计算所显示的位置"
        }
      }
    },
    {
      "sid": 1375038649402,
      "layout": "title",
      "items": {
        "title": {
          "type": "text",
          "value": "告一段落"
        },
        "content": {
          "type": "text",
          "value": "演示时间"
        }
      }
    },
    {
      "sid": 1375038666598,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "我们能做什么？"
        },
        "content": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2013/08/1921075419.png",
          "config": {}
        }
      }
    },
    {
      "sid": 1375038677364,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "所有“双向映射”的代码"
        },
        "content": {
          "type": "text",
          "value": "JavaScript -> Compiled JavaScript\nCoffeeScript -> JavaScript\nTypeScript -> JavaScript\nSass -> CSS\nSass <-> Scss\nLess -> CSS\n……"
        }
      }
    },
    {
      "sid": 1375039433439,
      "layout": "title",
      "items": {
        "title": {
          "type": "text",
          "value": "串联多个“双向映射”"
        },
        "content": {
          "type": "text",
          "value": "CoffeeScript -> JavaScript\n-> Compiled JavaScript"
        }
      }
    },
    {
      "sid": 1375038868489,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "更多想象：加密/解密"
        },
        "content": {
          "type": "img",
          "value": "https://jiongks.name/uploads/2013/08/2368501890.jpg",
          "config": {}
        }
      }
    },
    {
      "sid": 1375039529730,
      "layout": "normal",
      "items": {
        "title": {
          "type": "text",
          "value": "相关资料"
        },
        "content": {
          "type": "code",
          "value": "官方文档\nhttps://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k\n\n阮一峰：JavaScript Source Map简介\nhttp://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html\n\nTutsplus：Source Maps 101\nhttp://net.tutsplus.com/tutorials/tools-and-tips/source-maps-101/\n\nMozilla的Source Map实现\nhttps://github.com/mozilla/source-map\n\nThe CSS Ninjs：Multi Level Source Maps\nhttp://www.thecssninja.com/JavaScript/multi-level-sourcemaps",
          "config": {
            "type": "code"
          }
        }
      }
    },
    {
      "sid": 1375040115950,
      "layout": "title",
      "items": {
        "title": {
          "type": "text",
          "value": "THE END"
        },
        "content": {
          "type": "text",
          "value": "Thanks & QA"
        }
      }
    }
  ]
})
