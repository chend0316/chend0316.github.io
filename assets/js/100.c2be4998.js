(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{488:function(t,a,s){"use strict";s.r(a);var e=s(45),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"配置-vue-工程环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-vue-工程环境"}},[t._v("#")]),t._v(" 配置 Vue 工程环境")]),t._v(" "),s("p",[t._v("虽然我们有开箱即用的 vue-cli 脚手架，但不代表我们不需要理解 Vue 是如何跑起来的，因此有必要学习在不用 vue-cli 的情况下如何配置 Vue 工程。")]),t._v(" "),s("h2",{attrs:{id:"开篇介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开篇介绍"}},[t._v("#")]),t._v(" 开篇介绍")]),t._v(" "),s("h3",{attrs:{id:"阅读前的环境准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阅读前的环境准备工作"}},[t._v("#")]),t._v(" 阅读前的环境准备工作")]),t._v(" "),s("p",[t._v("本文从零开始，项目初始时只有一个"),s("code",[t._v("package.json")]),t._v("文件，文件里面也只是一个空对象，如下：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"阅读本文前需要具备的知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阅读本文前需要具备的知识"}},[t._v("#")]),t._v(" 阅读本文前需要具备的知识")]),t._v(" "),s("ul",[s("li",[t._v("包管理工具可选 npm、yarn，这里采用 npm")]),t._v(" "),s("li",[t._v("打包工具这里选用 Webpack")]),t._v(" "),s("li",[t._v("Vue 应用开发一般会编写 .vue 后缀的单文件组件 (SFC)，这是需要配置的")]),t._v(" "),s("li",[t._v("如果要用 TypeScript，也要进行配置")])]),t._v(" "),s("h3",{attrs:{id:"本文知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本文知识点"}},[t._v("#")]),t._v(" 本文知识点")]),t._v(" "),s("p",[t._v("基础：")]),t._v(" "),s("ul",[s("li",[t._v("不使用 SFC 的情况下搭建 Vue 工程")]),t._v(" "),s("li",[t._v("使用 SFC")]),t._v(" "),s("li",[t._v("使用 JSX")])]),t._v(" "),s("p",[t._v("为什么说 Vue 对 TypeScript 的支持不友好？")]),t._v(" "),s("ul",[s("li",[t._v("SFC + TypeScript 的组合，需要先编译 SFC 提取出"),s("code",[t._v("<script>")]),t._v("代码块，然后编译 TS，这让 tsconfig 文件变得怪异")]),t._v(" "),s("li",[t._v("Vue 的 Options API 风格对人类友好，但对 TS 类型推断 (Type Inference) 不友好")]),t._v(" "),s("li",[t._v("Vue HTML 模板中的插值表达式 (Interpolations) 难以启用 TS 类型检查")])]),t._v(" "),s("h2",{attrs:{id:"webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[t._v("#")]),t._v(" Webpack")]),t._v(" "),s("p",[t._v("Webpack 的工作流程：")]),t._v(" "),s("ul",[s("li",[t._v("用 npm 安装："),s("code",[t._v("npm install -D webpack webpack-cli")])]),t._v(" "),s("li",[t._v("编写 webpack.config.js 配置文件")]),t._v(" "),s("li",[t._v("运行 Webpack")])]),t._v(" "),s("p",[t._v("Webpack 最小配置：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./index.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bundle.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"sfc-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sfc-配置"}},[t._v("#")]),t._v(" SFC 配置")]),t._v(" "),s("p",[t._v("虽然理论上不用，但一般 Vue 项目都会编写 "),s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/single-file-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SFC"),s("OutboundLink")],1),t._v("，这就需要引入 "),s("a",{attrs:{href:"https://vue-loader.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Loader"),s("OutboundLink")],1),t._v(" 来编译 SFC。Loader 和 Plugin 都是 Webpack 的概念。")]),t._v(" "),s("p",[t._v("安装："),s("code",[t._v("npm install -D vue-loader vue-template-compiler")]),t._v("。")]),t._v(" "),s("p",[t._v("编译时，需要将 SFC 拆分为 HTML、JS、CSS 这三个不同部分，然后对于不同部分采用各自的 Webpack Loader 处理。对文件一分三的操作只能用 Webpack Plugin 实现。所以 Webpack 配置文件中，我们即要引入 "),s("code",[t._v("vue-loader")]),t._v(" 也要引入 "),s("code",[t._v("VueLoaderPlugin")]),t._v("，代码如下。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack.config.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" VueLoaderPlugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-loader/lib/plugin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.vue$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        loader"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-loader'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueLoaderPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("通过上面的配置，我们就能 "),s("code",[t._v("import")]),t._v(" SFC 了，如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"jsx-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsx-配置"}},[t._v("#")]),t._v(" JSX 配置")]),t._v(" "),s("h2",{attrs:{id:"typescript-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-配置"}},[t._v("#")]),t._v(" TypeScript 配置")])])}),[],!1,null,null,null);a.default=n.exports}}]);