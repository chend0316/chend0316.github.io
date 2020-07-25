(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{405:function(t,a,s){"use strict";s.r(a);var n=s(43),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"各语言内置的数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#各语言内置的数据结构"}},[t._v("#")]),t._v(" 各语言内置的数据结构")]),t._v(" "),s("h2",{attrs:{id:"dequeue（双端队列）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dequeue（双端队列）"}},[t._v("#")]),t._v(" Dequeue（双端队列）")]),t._v(" "),s("p",[t._v("双端队列可以理解为栈、队列的组合，所以在实际应用中可以直接使用双端队列取代栈和队列。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.python.org/3/library/collections.html#collections.deque",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python 3 双端队列"),s("OutboundLink")],1),t._v("的基本用法如下：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" collections "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" deque\ndeq "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" deque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndeq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [2, 3, 4]")]),t._v("\ndeq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appendleft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [0, 2, 3]")]),t._v("\ndeq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Deque.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 8"),s("OutboundLink")],1),t._v(" 双端队列基本用法，略。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Python双端队列")]),t._v(" "),s("th",[t._v("Head")]),t._v(" "),s("th",[t._v("Tail")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Insert")]),t._v(" "),s("td",[s("code",[t._v("appendleft(value)")])]),t._v(" "),s("td",[s("code",[t._v("append(value)")])]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("Remove")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[s("code",[t._v("remove(value)")])])]),t._v(" "),s("tr",[s("td",[t._v("Peek")]),t._v(" "),s("td",[s("code",[t._v("deq[0]")])]),t._v(" "),s("td",[s("code",[t._v("deq[-1]")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Remove & Peek")]),t._v(" "),s("td",[s("code",[t._v("popleft()")])]),t._v(" "),s("td",[s("code",[t._v("pop()")])]),t._v(" "),s("td")])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Java双端队列")]),t._v(" "),s("th",[t._v("Head")]),t._v(" "),s("th",[t._v("Tail")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Insert")]),t._v(" "),s("td",[s("code",[t._v("addFirst(value)")])]),t._v(" "),s("td",[s("code",[t._v("addLast(value)")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Remove")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[s("code",[t._v("remove(value)")])])]),t._v(" "),s("tr",[s("td",[t._v("Peek")]),t._v(" "),s("td",[s("code",[t._v("peekFirst()")])]),t._v(" "),s("td",[s("code",[t._v("peekLast()")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Remove & Peek")]),t._v(" "),s("td",[s("code",[t._v("removeFirst()")])]),t._v(" "),s("td",[s("code",[t._v("removeLast()")])]),t._v(" "),s("td",[t._v("-")])])])]),t._v(" "),s("p",[t._v("Notes：")]),t._v(" "),s("ul",[s("li",[t._v("Python可以插入一组 Value："),s("code",[t._v("deq.extendleft([1,2])")]),t._v("，Java 不行")]),t._v(" "),s("li",[t._v("Python可以指定 Capacity 队列最大容量，Java 不行")])]),t._v(" "),s("h2",{attrs:{id:"优先级队列（priority-queue）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优先级队列（priority-queue）"}},[t._v("#")]),t._v(" 优先级队列（Priority Queue）")]),t._v(" "),s("p",[t._v("优先级队列只是一个应用场景，不是具体的某个数据结构，可以用 Heap、BST、Treap 来实现，一般是用 Heap。")]),t._v(" "),s("p",[t._v("而堆（Heap）又有各种实现，在"),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Heap_(data_structure)",target:"_blank",rel:"noopener noreferrer"}},[t._v("维基百科"),s("OutboundLink")],1),t._v("中有一张表格列出了各种实现的性能对比。最常见/简单的实现是二叉堆，但二叉堆的性能也是最差的。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.python.org/3/library/heapq.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python3 的 heapq"),s("OutboundLink")],1),t._v(" 是用完全二叉堆来实现的，用的时候只需要一个数组。基本用法如下。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" heapq\nqueue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nheapq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("heapify"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [1, 2, 5, 3]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://docs.oracle.com/javase/10/docs/api/java/util/PriorityQueue.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 的 PriorityQueue"),s("OutboundLink")],1),t._v("，基本用法如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PriorityQueue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProorityQueueDemo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PriorityQueue")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" queue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PriorityQueue")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [1, 3, 2, 5]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("poll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th",[t._v("Python 3")]),t._v(" "),s("th",[t._v("Java 8")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("建堆")]),t._v(" "),s("td",[s("code",[t._v("heapq.heapify(queue)")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Add")]),t._v(" "),s("td",[s("code",[t._v("heapq.heappush(queue, value)")])]),t._v(" "),s("td",[s("code",[t._v("queue.add(value)")])])]),t._v(" "),s("tr",[s("td",[t._v("Remove & Peek")]),t._v(" "),s("td",[s("code",[t._v("heapq.heappop(queue)")])]),t._v(" "),s("td",[s("code",[t._v("queue.poll()")])])]),t._v(" "),s("tr",[s("td",[t._v("Peek")]),t._v(" "),s("td",[s("code",[t._v("queue[0]")])]),t._v(" "),s("td",[s("code",[t._v("queue.peek()")])])])])]),t._v(" "),s("p",[t._v("语言差异：")]),t._v(" "),s("ul",[s("li",[t._v("Java 建堆的时候可以通过传入比较器实现小顶堆、大顶堆等等，而 Python 建堆的时候只能建立小顶堆")]),t._v(" "),s("li",[t._v("虽然 Python 的 "),s("code",[t._v("nlargest()")]),t._v(" 和 "),s("code",[t._v("nsmallest()")]),t._v(" 可以传入比较器，但这两个函数比较鸡肋，只能用于离线算法不能用于在线算法")])])])}),[],!1,null,null,null);a.default=e.exports}}]);