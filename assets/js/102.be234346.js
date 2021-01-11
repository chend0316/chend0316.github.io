(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{475:function(e,t,r){"use strict";r.r(t);var a=r(42),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"系统总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统总结"}},[e._v("#")]),e._v(" 系统总结")]),e._v(" "),r("h2",{attrs:{id:"leetcode-刷题方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-刷题方法"}},[e._v("#")]),e._v(" leetcode 刷题方法")]),e._v(" "),r("p",[e._v("学习方法建议和误区：")]),e._v(" "),r("ul",[r("li",[e._v("不要在同一道题上一直研究，就像同一个汉字看多了就会不认识，同一道题一直研究“神经会疲劳”，这时候要换换题目换换脑子，过几个小时再来研究")]),e._v(" "),r("li",[e._v("不要追求完美主义，做笔记不要把所有解法都记下来，只记自己目前领悟最深的就行")]),e._v(" "),r("li",[e._v("好记性不如烂笔头，烂笔头不如谷歌；与其辛苦做所谓的大而全的笔记，不如多逛逛力扣国际站、多用谷歌搜别人的笔记总结")]),e._v(" "),r("li",[e._v("刷完力扣一定要看下面的「相似题目」")])]),e._v(" "),r("h2",{attrs:{id:"知识点快速介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#知识点快速介绍"}},[e._v("#")]),e._v(" 知识点快速介绍")]),e._v(" "),r("p",[e._v("搜索分为 DFS、BFS。DFS 最自然的是用递归实现，DFS 改为迭代实现的意义并不大，BFS 天生就是迭代实现的。在实现上，DFS 会借助递归实现，BFS 会借助队列实现。")]),e._v(" "),r("p",[e._v("DFS 需要开辟一个集合"),r("code",[e._v("visited = set()")]),e._v("记录访问过的节点，也可以将节点修改为特殊值表示访问过，BFS 天生就没有重复访问的问题。")]),e._v(" "),r("p",[e._v("DFS 每轮遍历都可以知道节点的层次信息，只需要将"),r("code",[e._v("level")]),e._v("作为递归参数传入。BFS 算法经过改造也可以知道层次信息，见"),r("a",{attrs:{href:"https://leetcode-cn.com/problems/binary-tree-level-order-traversal/",target:"_blank",rel:"noopener noreferrer"}},[e._v("力扣102"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("p",[e._v("对于搜索问题，使用 DFS 是一种暴力算法，而剪枝是一种暴力优化。剪枝概念和代码模板都很简单，但剪枝的方法需要具体问题具体设计，深蓝下国际象棋就是将剪枝发挥到了极致。例如「N皇后问题」中，不同的剪枝策略在效率、代码优雅方面差别极大，好的剪枝策略很难被想出来。再比如「单词搜索」就需要借助 Trie 数据结构进行剪枝。剪枝算法的时间复杂度通常难以分析。")]),e._v(" "),r("p",[e._v("DP 算法的代码模板固定，模板一定要背下来。解题分两步：定义状态空间、定义状态转移方程。只要状态空间定义的好，题目基本上就解决了一半。但状态空间往往不是那么容易想到。")]),e._v(" "),r("p",[e._v("二分查找法看似简单，但正确写出二分查找法是很不容易的。往往结合在各种问题中，如果基础不扎实，很容易写出死循环并阻碍解题思路。二分法虽然有模板，但不是很好用，因为二分法的模板不止一个，需要具体问题具体套用。有的题目要找具体的值，有的要"),r("a",{attrs:{href:"https://leetcode-cn.com/problems/sqrtx/",target:"_blank",rel:"noopener noreferrer"}},[e._v("找模糊值"),r("OutboundLink")],1),e._v("，有的要找2个值（求中位数），有的要找"),r("a",{attrs:{href:"https://leetcode-cn.com/problems/first-bad-version/",target:"_blank",rel:"noopener noreferrer"}},[e._v("命中的最左边的元素"),r("OutboundLink")],1),e._v("，也有"),r("a",{attrs:{href:"https://leetcode-cn.com/problems/median-of-two-sorted-arrays/",target:"_blank",rel:"noopener noreferrer"}},[e._v("很难的综合题"),r("OutboundLink")],1),e._v("。")])])}),[],!1,null,null,null);t.default=o.exports}}]);