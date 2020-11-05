(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{436:function(t,a,s){"use strict";s.r(a);var e=s(42),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"零散知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#零散知识"}},[t._v("#")]),t._v(" 零散知识")]),t._v(" "),s("h2",{attrs:{id:"二叉树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二叉树"}},[t._v("#")]),t._v(" 二叉树")]),t._v(" "),s("h3",{attrs:{id:"最近公共祖先"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最近公共祖先"}},[t._v("#")]),t._v(" 最近公共祖先")]),t._v(" "),s("p",[t._v("注意"),s("a",{attrs:{href:"https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/",target:"_blank",rel:"noopener noreferrer"}},[t._v("236. 二叉树的最近公共祖先"),s("OutboundLink")],1),t._v("节点只有left、right指针，没有parent指针。")]),t._v(" "),s("p",[t._v("题目特性：")]),t._v(" "),s("ul",[s("li",[t._v("根节点一定是解，但不是最优解")]),t._v(" "),s("li",[t._v("最优解存在且唯一")]),t._v(" "),s("li",[t._v("必须掌握左右孩子信息后才能对当前节点做出决策，因此要用后序遍历")])]),t._v(" "),s("p",[t._v("采用后序遍历会先遇到最优解，后遇到次优解，所以找到第一个解就可以停下来了。递归（不像迭代）是停不下来的，因此我们要避免次优解覆盖最优解的可能。")]),t._v(" "),s("p",[t._v("递归程序避免覆盖最优解的几个技巧：")]),t._v(" "),s("ul",[s("li",[t._v("代码逻辑本身保证不会覆盖，见官方题解")]),t._v(" "),s("li",[t._v("用全局变量保存解，判断是否已经被赋值了")]),t._v(" "),s("li",[t._v("递归中子函数通过返回值告知父函数是否已经找到解，若找到，父函数直接返回子函数的解即可，是一种将最优解层层上报的感觉")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lowestCommonAncestor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" root "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root\n\n        left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lowestCommonAncestor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lowestCommonAncestor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" right\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" left\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root\n")])])]),s("p",[t._v("类似题目：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",target:"_blank",rel:"noopener noreferrer"}},[t._v("235. 二叉搜索树的最近公共祖先"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("有没有多叉树中一组节点的公共祖先问题啊？")])]),t._v(" "),s("h2",{attrs:{id:"其它"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),s("h3",{attrs:{id:"丑数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#丑数"}},[t._v("#")]),t._v(" 丑数")]),t._v(" "),s("p",[t._v("这题练习的重点在于：用堆解法后如何分析出时空复杂度？")]),t._v(" "),s("h2",{attrs:{id:"最优连续子串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最优连续子串"}},[t._v("#")]),t._v(" 最优连续子串")]),t._v(" "),s("p",[t._v("这些题共同的解题思路：先用for(end)for(start)双循环枚举，然后可以启发出单循环算法（本质是一种动态规划）。注意一般我们会自然而然地写出for(start)for(end)的双循环形式，但这种形式很难启发出单循环算法。")]),t._v(" "),s("p",[t._v("单循环算法是在外层循环中提炼出足够多的“先验知识”，从而无需执行内层循环。“先验知识”可能是简单的number，也可能是复杂的数组、集合等等。")]),t._v(" "),s("p",[t._v("力扣题目（由易到难）：53、152、560、1371、32")]),t._v(" "),s("h3",{attrs:{id:"力扣53-最大子序和"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#力扣53-最大子序和"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://leetcode-cn.com/problems/maximum-subarray/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣53. 最大子序和"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"力扣152-乘积最大子数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#力扣152-乘积最大子数组"}},[t._v("#")]),t._v(" 力扣152. 乘积最大子数组")]),t._v(" "),s("h3",{attrs:{id:"力扣560-和为k的子数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#力扣560-和为k的子数组"}},[t._v("#")]),t._v(" 力扣560. 和为K的子数组")]),t._v(" "),s("p",[t._v("这题不是找最优子串，而是找出子串的数量，但思路是一样的，所以也归类在这边。\n这题的“先验知识”比较复杂是：累和+字典计数。")]),t._v(" "),s("h3",{attrs:{id:"力扣1371-每个元音包含偶数次的最长子字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#力扣1371-每个元音包含偶数次的最长子字符串"}},[t._v("#")]),t._v(" 力扣1371. 每个元音包含偶数次的最长子字符串")]),t._v(" "),s("p",[t._v("这题的“先验知识”用到了状态压缩的技巧，利用位运算将状态压缩到一个整数中。")]),t._v(" "),s("h3",{attrs:{id:"力扣32-最长有效括号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#力扣32-最长有效括号"}},[t._v("#")]),t._v(" 力扣32. 最长有效括号")]),t._v(" "),s("p",[t._v("这题的“先验知识”是数组，而且每次遍历都需要对“先验知识”进行“统筹优化”，因此比较难。")]),t._v(" "),s("h2",{attrs:{id:"滑动窗口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#滑动窗口"}},[t._v("#")]),t._v(" 滑动窗口")]),t._v(" "),s("p",[t._v("滑动窗口和双指针一样，都是对暴力算法的优化，少枚举了很多区间。它在迭代的过程中维护L、R两个指针，每次迭代只会移动L或者R。")]),t._v(" "),s("p",[t._v("什么样的问题可以用滑动窗口来解决？")]),t._v(" "),s("ul",[s("li",[t._v("新问题可在原问题的基础上“增量”计算得到")]),t._v(" "),s("li",[t._v("可以根据当前问题的状态判断下一问题是移动L指针还是R指针（决策单调性）")])]),t._v(" "),s("p",[t._v("为什么滑动窗口算法是正确的？对理论感兴趣的同学可以查阅「决策单调性」相关的资料。")]),t._v(" "),s("h3",{attrs:{id:"leetcode-3-无重复字符的最长子串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-3-无重复字符的最长子串"}},[t._v("#")]),t._v(" LeetCode 3. 无重复字符的最长子串")]),t._v(" "),s("h3",{attrs:{id:"leetcode-76-最小覆盖子串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-76-最小覆盖子串"}},[t._v("#")]),t._v(" LeetCode 76. 最小覆盖子串")]),t._v(" "),s("h3",{attrs:{id:"leetcode-209-长度最小的子数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-209-长度最小的子数组"}},[t._v("#")]),t._v(" LeetCode 209. 长度最小的子数组")]),t._v(" "),s("p",[t._v("注意循环终止条件的设定，过早终止循环会漏解。\n注意窗口区间语义约定，左闭右开or左闭右闭？虽然左闭右开有良好的语义（两数相减刚好为窗口长度），但左闭右开需要不断判断右边界是否越界常数时间更大。")]),t._v(" "),s("h3",{attrs:{id:"leetcode-424-替换后的最长重复字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-424-替换后的最长重复字符"}},[t._v("#")]),t._v(" LeetCode 424. 替换后的最长重复字符")]),t._v(" "),s("h3",{attrs:{id:"leetcode-438-找到字符串中所有字母异位词"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-438-找到字符串中所有字母异位词"}},[t._v("#")]),t._v(" LeetCode 438. 找到字符串中所有字母异位词")]),t._v(" "),s("h3",{attrs:{id:"leetcode-567-字符串的排列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-567-字符串的排列"}},[t._v("#")]),t._v(" LeetCode 567. 字符串的排列")]),t._v(" "),s("h2",{attrs:{id:"一些todo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些todo"}},[t._v("#")]),t._v(" 一些TODO")]),t._v(" "),s("p",[t._v("待总结的图算法：")]),t._v(" "),s("ul",[s("li",[t._v("计算连通分量")]),t._v(" "),s("li",[t._v("拓扑排序")]),t._v(" "),s("li",[t._v("最短路径")]),t._v(" "),s("li",[t._v("最小生成树")])])])}),[],!1,null,null,null);a.default=r.exports}}]);