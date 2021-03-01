(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{394:function(v,_,a){"use strict";a.r(_);var e=a(42),t=Object(e.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"数据结构与算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构与算法"}},[v._v("#")]),v._v(" 数据结构与算法")]),v._v(" "),a("h2",{attrs:{id:"哈希、哈希表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈希、哈希表"}},[v._v("#")]),v._v(" 哈希、哈希表")]),v._v(" "),a("p",[v._v("应用场景：")]),v._v(" "),a("ul",[a("li",[v._v("加密")]),v._v(" "),a("li",[v._v("索引")]),v._v(" "),a("li",[v._v("缓存")])]),v._v(" "),a("p",[v._v("解决哈希冲突：")]),v._v(" "),a("ul",[a("li",[v._v("开放寻址法包括：线性探测法、再散列法")]),v._v(" "),a("li",[v._v("拉链法")])]),v._v(" "),a("p",[v._v("哈希函数的实现：")]),v._v(" "),a("ul",[a("li",[v._v("直接定址法")]),v._v(" "),a("li",[v._v("除留余数法，选一个较大的素数作为除数")]),v._v(" "),a("li",[v._v("一致性哈希")])]),v._v(" "),a("h3",{attrs:{id:"扩容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩容"}},[v._v("#")]),v._v(" 扩容")]),v._v(" "),a("p",[v._v("当元素数量大于哈希表的体积时，开放寻址法无法工作，此时必须对哈希表进行扩容。当元素数量远大于哈希表体积时，拉链法会退化成为链表，此时建议对哈希表进行扩容。")]),v._v(" "),a("p",[v._v("扩容意味着元素要重新分布，这就需要进行再哈希 (re-hash)，再哈希要耗费大量时间来移动几乎所有元素，移动过程中哈希表无法工作。在分布式系统中，当服务器扩容时，路由算法无法工作，导致系统无法提供服务。一致性哈希可以缓解这个问题。")]),v._v(" "),a("h3",{attrs:{id:"元素删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元素删除"}},[v._v("#")]),v._v(" 元素删除")]),v._v(" "),a("p",[v._v("当需要删除元素的时候，开放寻址法不能直接删除元素，而是要做特殊处理 (例如放置一个删除的标记)。")]),v._v(" "),a("h3",{attrs:{id:"语言内置的哈希表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语言内置的哈希表"}},[v._v("#")]),v._v(" 语言内置的哈希表")]),v._v(" "),a("p",[v._v("哈希表常用操作：")]),v._v(" "),a("ul",[a("li",[a("code",[v._v("set(k, v)")])]),v._v(" "),a("li",[a("code",[v._v("get(k)")])]),v._v(" "),a("li",[a("code",[v._v("delete(k)")])]),v._v(" "),a("li",[a("code",[v._v("size()")])]),v._v(" "),a("li",[v._v("检查 key 是否存在")]),v._v(" "),a("li",[a("code",[v._v("keys()")]),v._v(" 获取所有 key")]),v._v(" "),a("li",[a("code",[v._v("values()")]),v._v(" 获取所有 value")]),v._v(" "),a("li",[a("code",[v._v("entries()")]),v._v(" 获取所有键值对")])]),v._v(" "),a("p",[a("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("java.util.Map"),a("OutboundLink")],1),v._v(" 是 Java 内置的一个接口，最常见的实现是："),a("code",[v._v("HashMap")]),v._v("、"),a("code",[v._v("TreeMap")]),v._v("。在 Java 中，每个对象都有 hashCode() 方法，自定义的数据类型可以根据业务特点重写 "),a("code",[v._v("Object.hashCode()")]),v._v(" 方法。")]),v._v(" "),a("p",[v._v("JavaScript 的对象本身就可以当做哈希表使用："),a("code",[v._v("var hash = {};")]),v._v("，ES6 新增了一个专门做哈希表的类："),a("code",[v._v("var hash = new Map();")])]),v._v(" "),a("p",[v._v("Python 自带的 "),a("code",[v._v("dict")]),v._v(" 就是哈希表。")]),v._v(" "),a("ul",[a("li",[v._v("初始化: "),a("code",[v._v("hash = dict()")])]),v._v(" "),a("li",[v._v("使用字面量初始化: "),a("code",[v._v("hash = {}")])]),v._v(" "),a("li",[v._v("添加元素: "),a("code",[v._v("hash['a'] = 123")])]),v._v(" "),a("li",[v._v("删除元素: "),a("code",[v._v("del hash['a']")])]),v._v(" "),a("li",[v._v("判断 key 是否存在: "),a("code",[v._v("'a' in hash")])]),v._v(" "),a("li",[v._v("获取哈希表的大小: "),a("code",[v._v("len(hash)")])])]),v._v(" "),a("h3",{attrs:{id:"练习题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#练习题"}},[v._v("#")]),v._v(" 练习题")]),v._v(" "),a("p",[v._v("利用内置的哈希表实现缓存：")]),v._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/two-sum/",target:"_blank",rel:"noopener noreferrer"}},[v._v("力扣 1. 两数之和"),a("OutboundLink")],1)])]),v._v(" "),a("h2",{attrs:{id:"二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二叉树"}},[v._v("#")]),v._v(" 二叉树")]),v._v(" "),a("h3",{attrs:{id:"构造二叉搜索树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造二叉搜索树"}},[v._v("#")]),v._v(" 构造二叉搜索树")])])}),[],!1,null,null,null);_.default=t.exports}}]);