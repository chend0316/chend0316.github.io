(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{358:function(e,t,r){e.exports=r.p+"assets/img/chromium-arch.620ed7d1.png"},359:function(e,t,r){e.exports=r.p+"assets/img/electron-arch.02b605eb.png"},360:function(e,t,r){e.exports=r.p+"assets/img/chromium-electron.915b6441.png"},400:function(e,t,r){"use strict";r.r(t);var v=r(42),a=Object(v.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"electron"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#electron"}},[e._v("#")]),e._v(" Electron")]),e._v(" "),v("h2",{attrs:{id:"electron的技术架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#electron的技术架构"}},[e._v("#")]),e._v(" Electron的技术架构")]),e._v(" "),v("p",[e._v("下图是Chromium的架构图。主进程负责管理窗口、标签页、右键菜单等等，这一部分跟操作系统强相关。渲染进程负责网页的渲染，这一部分跟操作系统无关。")]),e._v(" "),v("p",[v("img",{attrs:{src:r(358),alt:""}})]),e._v(" "),v("p",[e._v("下图是Electron的架构图，可以看到他的核心工作就是把Node.js塞进去。")]),e._v(" "),v("p",[v("img",{attrs:{src:r(359),alt:""}})]),e._v(" "),v("p",[e._v("技术难点：Node.js事件循环基于libuv，但Chromium基于message bump，而一个线程在同一时间只能运行一个事件循环。")]),e._v(" "),v("p",[e._v("一开始，Electron是用libuv来实现message bump，在渲染进程中libuv实现message bump比较简单。但是在主进程内，由于各个操作系统的GUI都不一样，Mac是NSRunLoop、Linux是glib，所以工程量很大而且各种边界情况都处理不好。")]),e._v(" "),v("p",[e._v("后来libuv引入了backend_fd的概念，相当于是libuv轮询事件的文件描述符。通过轮询backend_fd可以知道libuv的一个新事件。这样就可以实现将Node.js集成到Chromium。")]),e._v(" "),v("p",[v("img",{attrs:{src:r(360),alt:""}})]),e._v(" "),v("p",[e._v("其它方案：")]),e._v(" "),v("ul",[v("li",[e._v("用一个小间隔定时器轮询GUI事件，但是这样界面响应特别慢、CPU特别高")]),e._v(" "),v("li",[e._v("让Node运行在单独的进程，通过IPC和Chromium通信，这就需要将函数参数、返回值序列化成字符串才能通过IPC传输，问题是指针/引用的地址难以序列化")])]),e._v(" "),v("h2",{attrs:{id:"electron最小工程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#electron最小工程"}},[e._v("#")]),e._v(" Electron最小工程")]),e._v(" "),v("p",[e._v("实验代码见"),v("code",[e._v("labs/min-project")]),e._v("，目的是：")]),e._v(" "),v("ul",[v("li",[e._v("了解Electron应用基本结构")]),e._v(" "),v("li",[e._v("搞清哪些代码运行在主进程、哪些运行在渲染进程")]),e._v(" "),v("li",[e._v("对进程间icp通信有个基本认识")])]),e._v(" "),v("h2",{attrs:{id:"electron进程间通信"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#electron进程间通信"}},[e._v("#")]),e._v(" Electron进程间通信")]),e._v(" "),v("p",[e._v("在Chromium架构中，我们使用"),v("code",[e._v("RenderProcess")]),e._v("和"),v("code",[e._v("RenderProcessHost")]),e._v("进行通信。而在Electron中，我们也有对应的"),v("code",[e._v("ipcRenderer")]),e._v("和"),v("code",[e._v("ipcMain")]),e._v("。它们本质都是"),v("code",[e._v("EventEmitter")]),e._v("实例。")]),e._v(" "),v("p",[e._v("实验代码见"),v("code",[e._v("labs/ipc")]),e._v("，实验内容包括：")]),e._v(" "),v("ul",[v("li",[e._v("创建2个BrowserWindow，这会对应2个渲染进程，可以打开任务管理器检查")]),e._v(" "),v("li",[e._v("主进程中通过global变量存储"),v("code",[e._v("webContents.id")])]),e._v(" "),v("li",[e._v("渲染进程中通过"),v("code",[e._v("remote.getGlobal()")]),e._v("接口获取global变量中的属性")]),e._v(" "),v("li",[e._v("渲染进程之间通过"),v("code",[e._v("ipcRenderer.sendTo()")]),e._v("接口进行通信")])]),e._v(" "),v("h3",{attrs:{id:"渲染进程向主进程通信"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#渲染进程向主进程通信"}},[e._v("#")]),e._v(" 渲染进程向主进程通信")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("ipcRenderer.send()")]),e._v("和"),v("code",[e._v("ipcMain.on()")]),e._v("配合使用")]),e._v(" "),v("li",[v("code",[e._v("ipcRenderer.invoke()")]),e._v("和"),v("code",[e._v("ipcMain.handle()")]),e._v("配合使用")])]),e._v(" "),v("h3",{attrs:{id:"主进程向渲染进程通信"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主进程向渲染进程通信"}},[e._v("#")]),e._v(" 主进程向渲染进程通信")]),e._v(" "),v("ul",[v("li",[e._v("在"),v("code",[e._v("ipcMain.on(event, ...)")]),e._v("中，可以通过"),v("code",[e._v("event.reply()")])]),e._v(" "),v("li",[e._v("在"),v("code",[e._v("ipcMain.handle()")]),e._v("中，通过返回一个"),v("code",[e._v("Promise")]),e._v("对象")])]),e._v(" "),v("p",[e._v("注意主进程向渲染进程发送消息的时候，Electron需要通过"),v("code",[e._v("webContents")]),e._v("对象区分发给哪一个渲染进程，在"),v("code",[e._v("ipcMain.on(event, ...)")]),e._v("中可以通过"),v("code",[e._v("event.sender")]),e._v("拿到对应的"),v("code",[e._v("webContents")]),e._v("。通过"),v("code",[e._v("webContents.send()")]),e._v("向渲染进程发消息，为了简化Electron还提供了"),v("code",[e._v("event.reply()")]),e._v("实现同样的功能（敲更少的代码）。")]),e._v(" "),v("h3",{attrs:{id:"页面间通信（渲染进程之间通信）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#页面间通信（渲染进程之间通信）"}},[e._v("#")]),e._v(" 页面间通信（渲染进程之间通信）")]),e._v(" "),v("ul",[v("li",[e._v("Electron 5之前，通过主进程转发")]),e._v(" "),v("li",[e._v("Electron 5之后，可以通过"),v("code",[e._v("ipcRenderer.sendTo()")])]),e._v(" "),v("li",[e._v("localStorage、sessionStorage")]),e._v(" "),v("li",[e._v("remote")])]),e._v(" "),v("h2",{attrs:{id:"electron-vue-环境搭建"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#electron-vue-环境搭建"}},[e._v("#")]),e._v(" Electron + Vue 环境搭建")]),e._v(" "),v("p",[e._v("虽然这里介绍的是Vue，但React、Angular等其他前端框架原理是一样的。")]),e._v(" "),v("h3",{attrs:{id:"目录结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[e._v("#")]),e._v(" 目录结构")]),e._v(" "),v("p",[e._v("Electron分为主进程和渲染进程，Vue运行在渲染进程。二者的代码是分开存放的，一般我们约定的工程目录结构如下：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("src/ \n  |-- main/  # 这是主进程代码，这部分代码可以参考Electron文档，比较死板\n    |-- main.js\n  |-- renderer/  # 这部分代码结构非常灵活，根据框架和习惯的不同差异很大，没有统一标准\n    |-- dist/  # 本文约定build出来的资源文件放在这个目录\n    |-- App.vue\n    |-- app.js\n    |-- package.json\n  |-- package.json\n")])])]),v("p",[e._v("注意外层的package.json是Electron工程的，而内层的package.json是Vue工程的，使用的时候注意不要搞混。")]),e._v(" "),v("h3",{attrs:{id:"原理和背景知识"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#原理和背景知识"}},[e._v("#")]),e._v(" 原理和背景知识")]),e._v(" "),v("p",[e._v("Electron在主进程中通过"),v("code",[e._v("BrowserWindow.loadFile")]),e._v("或"),v("code",[e._v("BrowserWindow.loadURL")]),e._v("加载页面。")]),e._v(" "),v("p",[e._v("我们可以通过"),v("code",[e._v("vue-cli")]),e._v("快速创建Vue工程，也可以手动配置Webpack配置。在开发环境一般会通过"),v("code",[e._v("webpack-dev-server")]),e._v("启动一个HTTP服务器，比如监听在"),v("code",[e._v("http://localhost:8080")]),e._v("。而在生产环境会通过"),v("code",[e._v("webpack")]),e._v("进行打包，生成HTML、JS等文件。")]),e._v(" "),v("h3",{attrs:{id:"生产环境（todo以后再补充）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生产环境（todo以后再补充）"}},[e._v("#")]),e._v(" 生产环境（todo以后再补充）")]),e._v(" "),v("p",[e._v("首先需要约定Vue工程build出来的HTML文件放在哪里，然后在主进程中通过"),v("code",[e._v("BrowserWindow.loadFile")]),e._v("加载。")]),e._v(" "),v("h3",{attrs:{id:"开发环境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[e._v("#")]),e._v(" 开发环境")]),e._v(" "),v("p",[e._v("在主进程中通过"),v("code",[e._v("BrowserWindow.loadURL('http://localhost:8080')")]),e._v("加载Vue页面，但在此之前需要先启动Vue项目，这就有个时序问题了。")]),e._v(" "),v("p",[e._v("首先通过执行内层package.json的命令启动Vue项目。等待Vue启动成功后，新开一个控制台，执行外层package.json的命令启动Electron。")]),e._v(" "),v("p",[e._v("这样就需要打开2个控制台，敲2个命令，而且还有顺序要求。如果你嫌每次这样做很麻烦，那么可以借助"),v("a",{attrs:{href:"https://www.npmjs.com/package/wait-on",target:"_blank",rel:"noopener noreferrer"}},[e._v("wait-on"),v("OutboundLink")],1),e._v("和"),v("a",{attrs:{href:"https://www.npmjs.com/package/concurrently",target:"_blank",rel:"noopener noreferrer"}},[e._v("concurrently"),v("OutboundLink")],1),e._v("，让命令自动化程度更高一些。")]),e._v(" "),v("h2",{attrs:{id:"额外阅读材料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#额外阅读材料"}},[e._v("#")]),e._v(" 额外阅读材料")]),e._v(" "),v("p",[e._v("架构实现：")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/34276309",target:"_blank",rel:"noopener noreferrer"}},[e._v("【译】探索NW.js和Electron的内部(一)"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/34336363",target:"_blank",rel:"noopener noreferrer"}},[e._v("【译】探索NW.js和Electron的内部(二)"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/34404999",target:"_blank",rel:"noopener noreferrer"}},[e._v("【译】探索NW.js和Electron的内部(三)"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/34544004",target:"_blank",rel:"noopener noreferrer"}},[e._v("【译+源码分析】Electron内部：整合 Message Loop"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);