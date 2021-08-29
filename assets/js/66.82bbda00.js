(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{448:function(a,t,e){"use strict";e.r(t);var s=e(45),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"环境搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[a._v("#")]),a._v(" 环境搭建")]),a._v(" "),e("h2",{attrs:{id:"python"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[a._v("#")]),a._v(" Python")]),a._v(" "),e("h3",{attrs:{id:"pip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pip"}},[a._v("#")]),a._v(" pip")]),a._v(" "),e("p",[a._v("pip 是用来安装 Python 包的。如果用的是 Python3，那么命令是 "),e("code",[a._v("pip3")]),a._v("。")]),a._v(" "),e("h4",{attrs:{id:"使用-pip-安装-numpy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-pip-安装-numpy"}},[a._v("#")]),a._v(" 使用 pip 安装 Numpy")]),a._v(" "),e("ol",[e("li",[e("p",[e("code",[a._v("pip3 install numpy")]),a._v(" 命令安装 Numpy 之后")])]),a._v(" "),e("li",[e("p",[a._v("在代码中导入 Numpy")])])]),a._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" numpy "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" np\n")])])]),e("h4",{attrs:{id:"更多资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更多资料"}},[a._v("#")]),a._v(" 更多资料")]),a._v(" "),e("p",[a._v("其它常用命令:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("pip3 list")]),a._v(" 查看电脑上安装了哪些包")]),a._v(" "),e("li",[e("code",[a._v("pip3 uninstall <pkg-name>")]),a._v(" 卸载包")])]),a._v(" "),e("p",[a._v("更多资料:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("pip3 --help")]),a._v(" 查看 pip 的全部用法")])]),a._v(" "),e("h3",{attrs:{id:"virtualenv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtualenv"}},[a._v("#")]),a._v(" virtualenv")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://virtualenv.pypa.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[a._v("virtualenv"),e("OutboundLink")],1),a._v(" is a tool to create isolated Python environments. 用来隔离 Python 环境的，因为不同项目需要依赖不同的包，为了避免冲突混乱，所以我们想隔离开来。")]),a._v(" "),e("h4",{attrs:{id:"快速入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速入门"}},[a._v("#")]),a._v(" 快速入门")]),a._v(" "),e("p",[a._v("安装："),e("code",[a._v("pip3 install virtualenv")]),a._v("。基本使用步骤如下。")]),a._v(" "),e("ol",[e("li",[a._v("创建一个“虚拟环境”")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ virtualenv data-science-venv\ncreated virtual environment CPython3.8.2.final.0-64 in 636ms\n  creator CPython3macOsFramework(dest=/Users/chendong/data-science-venv, clear=False, no_vcs_ignore=False, global=False)\n  seeder FromAppData(download=False, pip=bundle, setuptools=bundle, wheel=bundle, via=copy, app_data_dir=/Users/chendong/Library/Application Support/virtualenv)\n    added seed packages: pip==21.2.3, setuptools==57.4.0, wheel==0.37.0\n  activators BashActivator,CShellActivator,FishActivator,PowerShellActivator,PythonActivator\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("打开虚拟环境")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ source data-science-venv/bin/activate\n(data-science-venv) $\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("在虚拟环境安装软件")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("(data-science-venv) $ \n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[a._v("关闭虚拟环境")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ deactivate\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[a._v("销毁虚拟环境")])]),a._v(" "),e("p",[a._v("直接删除整个文件夹即可")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ rm -rf data-science-venv\n")])])]),e("h4",{attrs:{id:"更多参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更多参考资料"}},[a._v("#")]),a._v(" 更多参考资料")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.youtube.com/watch?v=N5vscPTWKOk",target:"_blank",rel:"noopener noreferrer"}},[a._v("YouTube 上一个 10 分钟的教程 (英文)"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"jupyterlab-环境搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jupyterlab-环境搭建"}},[a._v("#")]),a._v(" JupyterLab 环境搭建")]),a._v(" "),e("p",[a._v("环境搭建步骤可以参考"),e("a",{attrs:{href:"https://jupyter.org/install.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网"),e("OutboundLink")],1),a._v("，官网中还提到了 mamba 和 conda，它们两都是 pip 的替代品，如果不会用话，用 pip 即可。关键步骤如下:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("pip install jupyterlab")])]),a._v(" "),e("li",[e("code",[a._v("jupyter-lab")])])]),a._v(" "),e("h2",{attrs:{id:"c-语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-语言"}},[a._v("#")]),a._v(" C 语言")]),a._v(" "),e("h3",{attrs:{id:"gnu-make"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gnu-make"}},[a._v("#")]),a._v(" GNU Make")]),a._v(" "),e("h3",{attrs:{id:"cmake"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmake"}},[a._v("#")]),a._v(" CMake")]),a._v(" "),e("h2",{attrs:{id:"java"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[a._v("#")]),a._v(" Java")]),a._v(" "),e("h2",{attrs:{id:"javascript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[a._v("#")]),a._v(" JavaScript")]),a._v(" "),e("h3",{attrs:{id:"npm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[a._v("#")]),a._v(" NPM")]),a._v(" "),e("h3",{attrs:{id:"babel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel"}},[a._v("#")]),a._v(" Babel")])])}),[],!1,null,null,null);t.default=r.exports}}]);