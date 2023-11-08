"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[753],{3905:(a,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>h});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var o=n.createContext({}),l=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},i=function(a){var e=l(a.components);return n.createElement(o.Provider,{value:e},a.children)},c="mdxType",k={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,o=a.parentName,i=p(a,["components","mdxType","originalType","parentName"]),c=l(t),N=s,h=c["".concat(o,".").concat(N)]||c[N]||k[N]||m;return t?n.createElement(h,r(r({ref:e},i),{},{components:t})):n.createElement(h,r({ref:e},i))}));function h(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=N;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p[c]="string"==typeof a?a:s,r[1]=p;for(var l=2;l<m;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},61671:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>k,frontMatter:()=>m,metadata:()=>p,toc:()=>l});var n=t(87462),s=(t(67294),t(3905));const m={},r="Introduction",p={unversionedId:"lecture-notes/algorithms/2023-09-04",id:"lecture-notes/algorithms/2023-09-04",title:"Introduction",description:"Summary",source:"@site/docs/lecture-notes/algorithms/2023-09-04.md",sourceDirName:"lecture-notes/algorithms",slug:"/lecture-notes/algorithms/2023-09-04",permalink:"/oodlib/docs/lecture-notes/algorithms/2023-09-04",draft:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/lecture-notes/algorithms/2023-09-04.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2023-08-30",permalink:"/oodlib/docs/lecture-notes/algorithms/2023-08-30"},next:{title:"Introduction",permalink:"/oodlib/docs/lecture-notes/algorithms/2023-09-06"}},o={},l=[{value:"steps.",id:"steps",level:2},{value:"Big-O analysis of merge sort",id:"big-o-analysis-of-merge-sort",level:3},{value:"steps.",id:"steps-1",level:2},{value:"Time complexity of selection sort.",id:"time-complexity-of-selection-sort",level:3},{value:"steps.",id:"steps-2",level:2},{value:"Time complexity of Quick sort.",id:"time-complexity-of-quick-sort",level:3}],i={toc:l},c="wrapper";function k(a){let{components:e,...t}=a;return(0,s.kt)(c,(0,n.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"introduction"},"Introduction"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Summary"),"\nintroductions of several sorting algorithms and how they work")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"keywords"),"\ndivide and conquer, merge sort, quick sort.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"TODO"),"\n#todo : dividing logic pseudocode\n#todo : combining logic pseudocode\n#todo: look for the space complexity of merge sort")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"HW"))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Exercise"),"\ndraw the steps of sorting.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Next time"))),(0,s.kt)("h1",{id:"divide-and-conquer--recap"},"Divide and Conquer : recap"),(0,s.kt)("p",null,"Divide, Conquer, combine"),(0,s.kt)("h1",{id:"merge-sort"},"Merge sort"),(0,s.kt)("h2",{id:"steps"},"steps."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Divide input array into two parts (usually in half)"),(0,s.kt)("li",{parentName:"ul"},"merge sort right one."),(0,s.kt)("li",{parentName:"ul"},"merge sort left one."),(0,s.kt)("li",{parentName:"ul"},"combine right and left ones.")),(0,s.kt)("p",null,"Input : Array and indices p,q,r\n#todo 1: dividing logic pseudocode\n#todo 2: combining logic pseudocode\n#todo 3: look for the space complexity of merge sort"),(0,s.kt)("h3",{id:"big-o-analysis-of-merge-sort"},"Big-O analysis of merge sort"),(0,s.kt)("p",null,"On each depth, it needs ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," times to combine.\nThe number of depth is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"log(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\nso, the time complexity is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"nlog(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("p",null,"#todo 4: worst case data of merge sort."),(0,s.kt)("h1",{id:"selection-sort"},"Selection Sort"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Set the first element as minimum.")),(0,s.kt)("h2",{id:"steps-1"},"steps."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"traverse through all array and find the minimum element."),(0,s.kt)("li",{parentName:"ul"},"When found, swap with the first position."),(0,s.kt)("li",{parentName:"ul"},"Next is minimum for second position.")),(0,s.kt)("p",null,"#todo 5: pseudocode for selection sort."),(0,s.kt)("h3",{id:"time-complexity-of-selection-sort"},"Time complexity of selection sort."),(0,s.kt)("p",null,"On each round, it needs ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," times to find a minimum.\nthere are ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," rounds.\nso, the time complexity is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,s.kt)("p",null,"#todo 6: worst case data of selection sort."),(0,s.kt)("h1",{id:"quick-sort"},"Quick Sort"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"find the right sorted pivot to divide.\nswap each side's anomaly until two iteration overlap.")),(0,s.kt)("p",null,"divide and conquer"),(0,s.kt)("h2",{id:"steps-2"},"steps."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"partition",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"find a pivot position."),(0,s.kt)("li",{parentName:"ul"},"put smaller element on the left, put bigger element on the right."),(0,s.kt)("li",{parentName:"ul"},"sort each part."),(0,s.kt)("li",{parentName:"ul"},"put the pivot target in between."))),(0,s.kt)("li",{parentName:"ul"},"quick sort each partition.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"caution."),"\nThere are a lot of variations of implementing quick sort."),(0,s.kt)("p",null,"pseudocode"),(0,s.kt)("p",null,"5 2 4 7 1 3 2 6  \uc774 \uc788\ub2e4.\n5\ub97c pivot \uc73c\ub85c \uc124\uc815\ud55c\ub2e4.\n\uc88c\uce21\ubd80\ud130 5\ubcf4\ub2e4 \uc791\uc740\uc9c0 \ubcf8\ub2e4.\n7\uc740 5\ubcf4\ub2e4 \ud06c\ub2e4. \uba48\ucd98\ub2e4.\n\uc6b0\uce21\ubd80\ud130 5\ubcf4\ub2e4 \ud070\uc9c0 \ubcf8\ub2e4.\n2\ub294 5\ubcf4\ub2e4 \uc791\ub2e4. \uba48\ucd98\ub2e4.\n7\uacfc 2\ub97c \ubc14\uafbc\ub2e4."),(0,s.kt)("p",null,"\uc88c\uce21 \uc774\ub3d9\uc744 \ub2e4\uc2dc \uc2dc\uc791\ud55c\ub2e4.\n...\n\uc88c\uce21 iteration \uacfc \uc6b0\uce21 iteration\uc774 \uacb9\uce60\ub54c\uae4c\uc9c0 \ud55c\ub2e4.\n\ub450 iteration\uc774 \uc9c0\ub098\uac00\uba74 \uc6b0\ub9ac pivot \uacfc \ubc14\uafbc\ub2e4?"),(0,s.kt)("p",null,"#todo 7 : pseudocode of quick sort."),(0,s.kt)("h3",{id:"time-complexity-of-quick-sort"},"Time complexity of Quick sort."),(0,s.kt)("p",null,"Best case : ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(nlog(n))")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"))")))))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"best case happens when partition happens at the right middle."),(0,s.kt)("li",{parentName:"ul"},"(pivot element is a median of the list)")),(0,s.kt)("p",null,"Worst case : ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"worst case happens when data is already sorted."),(0,s.kt)("li",{parentName:"ul"},"it should check n times for all n data.\n#todo 8: worst case data of quick sort.")),(0,s.kt)("p",null,"#todo 9: protocol to find what is the best suitable sorting algorithms.\n#todo 10: checklist of checking the sorting algorithm is seamless."),(0,s.kt)("p",null," ways to avoid the worst case of quick sort"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Dont' talways select the pivot as first element."),(0,s.kt)("li",{parentName:"ul"},"..."),(0,s.kt)("li",{parentName:"ul"},"#todo 11: write more.")))}k.isMDXComponent=!0}}]);