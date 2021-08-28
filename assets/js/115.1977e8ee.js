(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{504:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"webpack-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-介绍"}},[t._v("#")]),t._v(" Webpack 介绍")]),t._v(" "),s("h2",{attrs:{id:"各工具对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#各工具对比"}},[t._v("#")]),t._v(" 各工具对比")]),t._v(" "),s("p",[t._v("历史发展顺序：")]),t._v(" "),s("ul",[s("li",[t._v("手工进行代码混淆、代码压缩")]),t._v(" "),s("li",[t._v("Grunt")]),t._v(" "),s("li",[t._v("Gulp")]),t._v(" "),s("li",[t._v("Rollup、Webpack、Parcel")])]),t._v(" "),s("h3",{attrs:{id:"grunt-vs-gulp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grunt-vs-gulp"}},[t._v("#")]),t._v(" Grunt vs. Gulp")]),t._v(" "),s("p",[t._v("这两个都是 Task Runner。Grunt 会把中间结果放到 .tmp 文件夹下面，涉及到磁盘 I/O 操作，所以速度很慢。Gulp 把中间结果存放到内存里面，加快打包速度。")]),t._v(" "),s("h3",{attrs:{id:"webpack-vs-rollup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-vs-rollup"}},[t._v("#")]),t._v(" Webpack vs. Rollup")]),t._v(" "),s("p",[t._v("这两个是目前最流行的构建工具，一般开发应用系统会使用 Webpack，开发组件库会使用 Rullup。")]),t._v(" "),s("h3",{attrs:{id:"webpack-vs-grunt-vs-gulp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-vs-grunt-vs-gulp"}},[t._v("#")]),t._v(" Webpack vs. Grunt vs. Gulp")]),t._v(" "),s("p",[t._v("Webpack 是 Model Bundler，而 Grunt 和 Gulp 是 Task Runner。目前 Webpack 社区比其它两个更活跃，官方维护更加积极，插件更丰富，使用的人更多。")]),t._v(" "),s("h2",{attrs:{id:"快速上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[t._v("这里以最新的 Webpack 5 为例："),s("code",[t._v("npm install webpack webpack-cli --save-dev")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),s("p",[t._v("下面是一个典型配置，可以当做 Cheat Sheet 查阅，或者背下来。文件名一般为 webpack.config.js。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/main.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \tpath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bundle.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.txt$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" use"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'raw-loader'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对于 .txt 后缀的文件，采用 raw-loader 处理")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HtmlwebpackPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.html'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),s("p",[t._v("一些小众知识点无需记忆，善用搜索引擎即可，例如多入口的配置，直接谷歌搜「multiple target site:webpack.js.org」即可。")]),t._v(" "),s("p",[t._v("如果突然忘了某个配置怎么写，也不要慌，应该首先去查阅"),s("a",{attrs:{href:"https://webpack.js.org/configuration/#options",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网的交互式 Cheat Sheet"),s("OutboundLink")],1),t._v("，用起来非常方便。")]),t._v(" "),s("p",[t._v("Webpack 本身只能处理 .js、.json 格式的文件，其它格式需要借助 loader。Webpack 官方提供了很多 "),s("a",{attrs:{href:"https://webpack.js.org/loaders/",target:"_blank",rel:"noopener noreferrer"}},[t._v("loader"),s("OutboundLink")],1),t._v(" 和 "),s("a",{attrs:{href:"https://webpack.js.org/plugins/",target:"_blank",rel:"noopener noreferrer"}},[t._v("plugin"),s("OutboundLink")],1),t._v("，对于常见的最好背下来。也有很多第三方社区的 loader、plugin，日常开发中可以慢慢积累。")])])}),[],!1,null,null,null);a.default=e.exports}}]);