(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{499:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stack","aria-hidden":"true"}},[t._v("#")]),t._v(" Stack")]),t._v(" "),a("h2",{attrs:{id:"valid-parentheses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#valid-parentheses","aria-hidden":"true"}},[t._v("#")]),t._v(" Valid Parentheses")]),t._v(" "),a("p",[t._v("堆栈在处理递归问题时非常有用，对于"),a("strong",[t._v("括号匹配")]),t._v("，是栈应用的经典案例：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Initialize a stack S: 初始化栈")])]),t._v(" "),a("li",[a("p",[t._v("Process each bracket(括号) of the expression one at a time.")])]),t._v(" "),a("li",[a("p",[t._v("If we encounter an opening bracket, then we check the element on the top of the stack. (遇到左括号则入栈)")])]),t._v(" "),a("li",[a("p",[t._v("If the element at the top of the stack is an openning bracket "),a("strong",[t._v("of the same type")]),t._v(", the we "),a("strong",[t._v("pop")]),t._v(" it off the stack and continue processing. (栈顶元素和外面相匹配，则出栈继续)")])]),t._v(" "),a("li",[a("p",[t._v("Else this implies an invaild expression.")])]),t._v(" "),a("li",[a("p",[t._v("In the end, if we are left with a stack still having elements, then this implies an invaild expression. (栈不空则表达式非法)")])])]),t._v(" "),a("p",[t._v("Implementation:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isValid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    stack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    mapping "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"["')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('")"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"("')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" char "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" char "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" mapping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            top_element "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" stack "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#'")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" mapping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" top_element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" stack\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# s = "()"')]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/chenweigao/_code/blob/master/cpp/stack_valid_parenttheses.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Solution of C++"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Explaination:")]),t._v(" "),a("ul",[a("li",[t._v("我们遍历字符串 s, 遇到左括号则入栈，遇到右括号 (keys) 则弹出栈顶元素进行比较（在栈非空的前提下）")]),t._v(" "),a("li",[t._v("最终返回值：栈空则合法，等价于 "),a("code",[t._v("return stack==[]")])])])])},[],!1,null,null,null);s.default=e.exports}}]);