(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{448:function(t,a,s){"use strict";s.r(a);var e=s(45),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"编译-compile-入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译-compile-入门"}},[t._v("#")]),t._v(" 编译 (Compile) 入门")]),t._v(" "),s("h2",{attrs:{id:"词法分析器-tokenizer、lexial-parser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#词法分析器-tokenizer、lexial-parser"}},[t._v("#")]),t._v(" 词法分析器 (Tokenizer、Lexial Parser)")]),t._v(" "),s("p",[t._v("对于分词有歧义的情况，现在的编译器都采用“贪心”的策略。")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请问 b 的值是多少？")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会解析成这种")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不会解析成这种")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("工作中别写 "),s("code",[t._v("a+++a")]),t._v(" 这样的代码，会被同事打噢！")])]),t._v(" "),s("h2",{attrs:{id:"语法分析器-syntax-parser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法分析器-syntax-parser"}},[t._v("#")]),t._v(" 语法分析器 (Syntax Parser)")]),t._v(" "),s("h2",{attrs:{id:"常量-const-、左值-left-value-、右值-right-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常量-const-、左值-left-value-、右值-right-value"}},[t._v("#")]),t._v(" 常量 (const)、左值 (left value)、右值 (right value)")]),t._v(" "),s("p",[t._v("左值相当于写操作，会改变变量的值，右值不会改变变量的值。不确切的讲：变量如果放在赋值运算符左边就是 left value，放在右边就是 right value。")]),t._v(" "),s("p",[t._v("编译器如果发现程序员把 const 放在 left value 的位置，就会直接编译报错，这样可以减少程序员犯错的概率。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("一些运算 (如自增运算) 让左右值的判断变得比较复杂。Python 语言没有自增运算，其实给程序员减负了。")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a++ 即是读又是写，所以说不清到底算左值还是右值")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"getter-setter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getter-setter"}},[t._v("#")]),t._v(" getter/setter")]),t._v(" "),s("p",[t._v("如果有定义 getter/setter 函数的话，编译器会把 left value 替换为 setter()，把 right value 替换为 getter 函数。所以：")]),t._v(" "),s("ul",[s("li",[t._v("理解 left/right value 是理解 getter/setter 的基础")]),t._v(" "),s("li",[t._v("前面说了由于 "),s("code",[t._v("++")]),t._v(" 运算符的存在，left/right value 的概念不好理解")]),t._v(" "),s("li",[t._v("所以 getter/setter 也不太好掌握")])]),t._v(" "),s("p",[t._v("getter/setter 挺好用的，C++、JavaScript 都有这个特性。Java 为了降低使用门槛，把这个特性删了实在可惜。")]),t._v(" "),s("p",[t._v("Python 也号称使用门槛低，为啥它就支持 getter/setter 呢？因为 Python 直接把 "),s("code",[t._v("++")]),t._v(" 运算符给删了啊。妙啊，Java 应该学着点。")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("给大家演示一些代码")]),t._v(" "),s("p",[t._v("todo: 演示 C++、JavaScript、Python")])]),t._v(" "),s("h2",{attrs:{id:"声明-declare-、定义-define-、声明提升-declare-hoisting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#声明-declare-、定义-define-、声明提升-declare-hoisting"}},[t._v("#")]),t._v(" 声明 (declare)、定义 (define)、声明提升 (declare hoisting)")]),t._v(" "),s("p",[t._v("C/C++ 的声明和定义可以分开。后来 Java、Python、JavaScript 的语法把声明和定义合二为一了，这样可以降低编程门槛。")]),t._v(" "),s("p",[t._v("JavaScript 的 "),s("code",[t._v("var")]),t._v(" 有 declare hoisting 的特性，许多初学者都被它坑惨了，业界毒瘤。")]),t._v(" "),s("h2",{attrs:{id:"作用域-scope-、生命周期-lifetime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域-scope-、生命周期-lifetime"}},[t._v("#")]),t._v(" 作用域 (Scope)、生命周期 (lifetime)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Scope_(computer_science)#Levels_of_scope",target:"_blank",rel:"noopener noreferrer"}},[t._v("英文阅读材料"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("JavaScript 的 "),s("code",[t._v("var")]),t._v(" 采用的是 Function Scope，许多初学者都被它坑惨了，业界毒瘤。后来引入了 "),s("code",[t._v("let")]),t._v("、"),s("code",[t._v("const")]),t._v(" 是 Block Scope。")]),t._v(" "),s("h2",{attrs:{id:"装箱-autoboxing-、拆箱-unboxing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#装箱-autoboxing-、拆箱-unboxing"}},[t._v("#")]),t._v(" 装箱 (autoboxing)、拆箱 (unboxing)")]),t._v(" "),s("ul",[s("li",[t._v("自动装箱 (autoboxing): 编译器在某些情况下会偷偷把 primary type 转为 object")]),t._v(" "),s("li",[t._v("自动拆箱 (unboxing): 与之相反")]),t._v(" "),s("li",[t._v("这是 Compiler 做的工作，所以 Interpreted Language 没有这个特性")])]),t._v(" "),s("h3",{attrs:{id:"比较大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#比较大小"}},[t._v("#")]),t._v(" 比较大小")]),t._v(" "),s("p",[t._v("C/C++ 语言指针可以进行大小比较，这是没有意义的。后来一众编程语言语法上直接禁止 Pointer/Reference 进行大小比较。")]),t._v(" "),s("p",[t._v("那么请问两个 Integer Object 如何进行大小比较呢？")]),t._v(" "),s("ul",[s("li",[t._v("C++、Python 可以使用运算符重载")]),t._v(" "),s("li",[t._v("Java、JavaScript 可以使用 unboxing")])]),t._v(" "),s("p",[t._v("那么 C++、Python 语言是否存在装箱机制呢？")]),t._v(" "),s("h3",{attrs:{id:"访问-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问-method"}},[t._v("#")]),t._v(" 访问 method")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("JavaScript 中的自动装箱")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://stackoverflow.com/questions/17216847/does-javascript-autobox",target:"_blank",rel:"noopener noreferrer"}},[t._v("英文阅读材料"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123 是 Primary Type，肯定没有成员函数的，但为啥我们能调用它的 toString 方法呢？")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"函数签名、函数重载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数签名、函数重载"}},[t._v("#")]),t._v(" 函数签名、函数重载")]),t._v(" "),s("p",[t._v("使用英文教材的同学可以区分一下这几个区别: overload、overwrite、override。")]),t._v(" "),s("p",[t._v("由于很难翻译成中文，在中文语境一般不区分三者。")]),t._v(" "),s("h2",{attrs:{id:"运算符重载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运算符重载"}},[t._v("#")]),t._v(" 运算符重载")]),t._v(" "),s("p",[t._v("C++ 支持，用多了会让代码难以理解，使用门槛比较高。Java 为了降低门槛，不支持运算符重载。但是 Python 支持运算符重载。")]),t._v(" "),s("h2",{attrs:{id:"sizeof-是函数吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sizeof-是函数吗"}},[t._v("#")]),t._v(" sizeof 是函数吗？")]),t._v(" "),s("h2",{attrs:{id:"typedef"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typedef"}},[t._v("#")]),t._v(" typedef")]),t._v(" "),s("h2",{attrs:{id:"语法糖-syntax-sugar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法糖-syntax-sugar"}},[t._v("#")]),t._v(" 语法糖 (Syntax Sugar)")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("JavaScript Object Shorthand")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Myth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("p",[t._v("async/await 是语法糖吗？")])])}),[],!1,null,null,null);a.default=r.exports}}]);