(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{473:function(v,_,a){"use strict";a.r(_);var t=a(42),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"语言差异-坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语言差异-坑"}},[v._v("#")]),v._v(" 语言差异 (坑)")]),v._v(" "),a("h2",{attrs:{id:"运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算"}},[v._v("#")]),v._v(" 运算")]),v._v(" "),a("h3",{attrs:{id:"浮点除和整除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮点除和整除"}},[v._v("#")]),v._v(" 浮点除和整除")]),v._v(" "),a("p",[v._v("Python3中"),a("code",[v._v("1/2")]),v._v("答案是"),a("code",[v._v("0.5")]),v._v("，"),a("code",[v._v("1//2")]),v._v("答案是"),a("code",[v._v("0")]),v._v("。")]),v._v(" "),a("p",[v._v("Python2中"),a("code",[v._v("1/2")]),v._v("答案是"),a("code",[v._v("0")]),v._v("。")]),v._v(" "),a("h3",{attrs:{id:"比较运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较运算"}},[v._v("#")]),v._v(" 比较运算")]),v._v(" "),a("p",[v._v("在Python中"),a("code",[v._v("4 > 3 > 1")]),v._v("返回的是"),a("code",[v._v("True")]),v._v("，所以Python可以写出"),a("code",[v._v("0 <= i < N")]),v._v("的代码。")]),v._v(" "),a("h3",{attrs:{id:"负数求模"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#负数求模"}},[v._v("#")]),v._v(" 负数求模")]),v._v(" "),a("p",[v._v("考虑"),a("code",[v._v("-1 % 5")]),v._v("，不同语言的行为不一致，Python中结果是4，C++中结果是一个负数。")]),v._v(" "),a("h3",{attrs:{id:"算数右移和逻辑右移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算数右移和逻辑右移"}},[v._v("#")]),v._v(" 算数右移和逻辑右移")]),v._v(" "),a("p",[v._v("算数右移高位补0或1，逻辑右移最高位补0。")]),v._v(" "),a("p",[v._v("C++对无符号数采用逻辑右移、对有符号数采用算数右移。")]),v._v(" "),a("p",[v._v("Java没有无符号数用于区分，所以用"),a("code",[v._v("a >> 1")]),v._v("表示算术右移、"),a("code",[v._v("a >>> 1")]),v._v("表示逻辑右移。")]),v._v(" "),a("p",[v._v("Python是无限范围的大数，所以没有逻辑右移。")]),v._v(" "),a("h2",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[v._v("#")]),v._v(" 数据类型")]),v._v(" "),a("h3",{attrs:{id:"真值和假值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#真值和假值"}},[v._v("#")]),v._v(" 真值和假值")]),v._v(" "),a("p",[v._v("Python3将空数组当做假值，所以"),a("code",[v._v("not []")]),v._v("返回"),a("code",[v._v("True")]),v._v("。利用这点，可以很方便地判断入参。")]),v._v(" "),a("h2",{attrs:{id:"数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[v._v("#")]),v._v(" 数据结构")]),v._v(" "),a("h3",{attrs:{id:"字典"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字典"}},[v._v("#")]),v._v(" 字典")]),v._v(" "),a("p",[v._v("字典有两种实现：Hash Map、Tree Map。")]),v._v(" "),a("p",[v._v("前者是用Hash表实现的，优点是O(1)时间复杂度。后者是用二叉搜索树实现的，优点是有序。")]),v._v(" "),a("p",[v._v("Python中只有hashmap："),a("code",[v._v("m = {key: value}")])]),v._v(" "),a("p",[v._v("Java有"),a("code",[v._v("HashMap")]),v._v("和"),a("code",[v._v("TreeMap")]),v._v("两个类。")]),v._v(" "),a("p",[v._v("C++中有"),a("code",[v._v("std::unordered_map")]),v._v("和"),a("code",[v._v("std::map")]),v._v("两个类。")]),v._v(" "),a("p",[v._v("C#中有"),a("code",[v._v("Dictionary<TKey, TValue>")]),v._v("、"),a("code",[v._v("HashTable")]),v._v("、"),a("code",[v._v("StringDictionary")]),v._v("、"),a("code",[v._v("SortedDictionary")])]),v._v(" "),a("h3",{attrs:{id:"集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集合"}},[v._v("#")]),v._v(" 集合")]),v._v(" "),a("p",[v._v("集合有两种实现：Hash Set、Tree Set。同字典。")]),v._v(" "),a("p",[v._v("Python中只有hashset："),a("code",[v._v("m = {1, 2, 3}")])]),v._v(" "),a("p",[v._v("Java有"),a("code",[v._v("HashSet")]),v._v("和"),a("code",[v._v("TreeSet")]),v._v("两个类。")]),v._v(" "),a("p",[v._v("C++中有"),a("code",[v._v("std::unordered_set")]),v._v("和"),a("code",[v._v("std::set")]),v._v("两个类。")]),v._v(" "),a("p",[v._v("C#中有"),a("code",[v._v("HashSet")]),v._v("和"),a("code",[v._v("SortedSet")]),v._v("两个类。")])])}),[],!1,null,null,null);_.default=e.exports}}]);