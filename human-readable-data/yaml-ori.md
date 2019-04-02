# YAML

----

### 序列表和映射表

```yaml
- item
- item
- item
```

----

### 序列表和映射表

```yaml
a: 1
b: 2
c: 3
```

----

### 每行一条且支持缩进

```yaml
a:
  - item
  - item
b:
  - item
  - item
```

----

### 每行一条且支持缩进

```yaml
-
  a: 1
  b: 2
  c: 3
-
  a: 1
  b: 2
  c: 3
```

----

`#` 代表注释

----

### `---` 代表段落分隔

```yaml
# 上午的议题
---
- Angularjs的优缺点分析，及潜在的性能问题讲解
- OOCSS + Sass
- Web应用组件化的权衡

# 下午的议题
---
- human readable data
- 动画
- 探索React生态圈
```

----

### 数据格式

```
int: 1024
float: 3.14
null:
boolean: true
string: 'Shanghai'
date: 2015-10-18
```

----

### 多种字符串的表达方式

```
plain: 一段普通文本
double quote: "可以转义的文本\n" # 折行
single quote: '不可转义的文本\n' # 一个反斜杠和一个字母 n
a:
  这是一段多行的普通文本
  并缩进结束的地方代表文本结束
  每行文本之间会有一个空格
b: |
  这段文本会保留所有的折行
  而不是空格
c: >
  这段文本会为二次缩进的内容保留折行
  一般的折行还是会被处理成空格
    现在这行文本就是二次缩进的
  二次缩进结束
  这里的折行也是空格
```

----

### 重复的内容 `&` 和 `$`

```yaml
# 参加 CFF 的名单
---
- &zz 子之
- &dm 大漠
- &hq 寒泉
- &gg 勾股
# 参加 QCon 的名单
---
- $zz
- $dm
- $hq
```

----

### 更多

http://www.yaml.org/spec/1.2/spec.html

----

这个时候再回来看 ci 里的配置文件

一目了然！分分钟搞定！

YAML 就是一种 human readable data

让计算机数据尽量可以被人直观的阅读理解

什么样的数据可以同时被人类和计算机阅读理解呢？

前提，能够被计算机解析
首先，数据一定是文本的
其次，这段文本是能够描述出结构化信息的

YAML 以文本作为数据载体，能够表述一定的数据结构，拥有基于多种语言的解析器和工具，是一种典型并且应用广泛的“human readable data”

JSON 也是这样的

比如 Node.js 中的 `package.json`、Bower 中的 `bower.json`

```json
{
  "name": "foo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {}
  "author": "",
  "license": "ISC"
}
```

还有一些类似的数据格式，比如 `ini` 文件

https://en.wikipedia.org/wiki/INI_file

```ini
; last modified 1 April 2001 by John Doe
[owner]
name=John Doe
organization=Acme Widgets Inc.

[database]
; use IP address in case network name resolution is not working
server=192.0.2.62     
port=143
file="payroll.dat"
```

当然，还有 `xml` 文件，这里不多做介绍

我们前端已经有 JSON 和 XML 了！

1. 人类可读性：总体上出现的特殊字符越少，结构越直观，可读性越强，也越适合人类书写，JSON/XML 并不占优势
2. 程序可读性：JSON 在 JavaScript 中不需要另行解析，但在其它语言中也并没有优势
3. 结构性：XML 的结构设计相对复杂一些，语法更加严谨，适用于较为复杂的场景

随着前端的发展，我们会越来越多的和 YAML 数据打交道，同时也希望大家能够从“human readable data”的角度理解它的意义

One more thing

Machine Readable Data

让一些看似无形的东西尽量被计算机理解

比如 条形码和二维码

在 Web 中被大量使用的 Machine Readable Data

- Microdata
- RDFa
- Microformat
- AIRA role
