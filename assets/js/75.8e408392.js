(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{448:function(a,t,e){"use strict";e.r(t);var r=e(42),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"核心概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[a._v("#")]),a._v(" 核心概念")]),a._v(" "),e("h2",{attrs:{id:"基础概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[a._v("#")]),a._v(" 基础概念")]),a._v(" "),e("h3",{attrs:{id:"entry、output"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entry、output"}},[a._v("#")]),a._v(" entry、output")]),a._v(" "),e("p",[a._v("略")]),a._v(" "),e("h3",{attrs:{id:"loader、plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loader、plugin"}},[a._v("#")]),a._v(" loader、plugin")]),a._v(" "),e("p",[a._v("略")]),a._v(" "),e("h3",{attrs:{id:"source-map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#source-map"}},[a._v("#")]),a._v(" Source Map")]),a._v(" "),e("p",[a._v("略")]),a._v(" "),e("h3",{attrs:{id:"文件指纹"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件指纹"}},[a._v("#")]),a._v(" 文件指纹")]),a._v(" "),e("p",[a._v("文件指纹会在文件名上加一段 Hash 值，防止因为缓存机制导致浏览器使用旧的资源。")]),a._v(" "),e("h3",{attrs:{id:"配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[a._v("#")]),a._v(" 配置文件")]),a._v(" "),e("p",[a._v("要理解 Webpack 的配置文件也是 JS 文件，它会被 Node.js 执行，所以可以使用 "),e("code",[a._v("require()")]),a._v(" 导入社区第三方的包。")]),a._v(" "),e("p",[a._v("对于中大型系统，构建的需求会很复杂，这时候可以充分利用“配置文件也是 JS 代码”这一点来实现各种灵活的需求。")]),a._v(" "),e("h2",{attrs:{id:"高级概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高级概念"}},[a._v("#")]),a._v(" 高级概念")]),a._v(" "),e("h3",{attrs:{id:"热更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#热更新"}},[a._v("#")]),a._v(" 热更新")]),a._v(" "),e("h3",{attrs:{id:"代码分割、动态-import"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码分割、动态-import"}},[a._v("#")]),a._v(" 代码分割、动态 import")]),a._v(" "),e("h3",{attrs:{id:"webpack-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-api"}},[a._v("#")]),a._v(" Webpack API")]),a._v(" "),e("p",[a._v("我们通常是编写配置文件，然后执行 webpack 命令进行打包。而 Webpack API 是反过来的，由另一个系统调用 Webpack 进行打包，可以用于集成到现有工具链中。")]),a._v(" "),e("h3",{attrs:{id:"tree-shaking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking"}},[a._v("#")]),a._v(" Tree Shaking")]),a._v(" "),e("p",[a._v("如果启用了 Tree Shaking，Webpack 会在编译阶段通过死码消除 (Dead code elimination) 技术，将没有用到的代码删掉，以便减小体积。")]),a._v(" "),e("p",[a._v("Tree Shaking 只支持 ES Modules，不支持 CommonJS。因为 ES Modules 支持静态导入 (static import)，这有助于提升系统的自省 (introspection) 能力，帮助工具更好的进行静态代码分析。"),e("a",{attrs:{href:"https://stackoverflow.com/questions/52965907/what-is-the-meaning-of-static-import-in-es6",target:"_blank",rel:"noopener noreferrer"}},[a._v("Stack Overflow"),e("OutboundLink")],1),a._v(" 上有一个回答讲的很好。")]),a._v(" "),e("p",[a._v("Webpack 在 "),e("code",[a._v("mode = 'production'")]),a._v("模式下，会默认开启 Tree Shaking。")])])}),[],!1,null,null,null);t.default=s.exports}}]);