"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[990],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=i(a),d=r,k=c["".concat(l,".").concat(d)]||c[d]||u[d]||s;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m[c]="string"==typeof e?e:r,o[1]=m;for(var i=2;i<s;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4331:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>m,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const s={},o=void 0,m={unversionedId:"lecture-notes/algorithms/2023-08-30",id:"lecture-notes/algorithms/2023-08-30",title:"2023-08-30",description:"in Assignments use python sorting packages.",source:"@site/docs/lecture-notes/algorithms/2023-08-30.md",sourceDirName:"lecture-notes/algorithms",slug:"/lecture-notes/algorithms/2023-08-30",permalink:"/oodlib/docs/lecture-notes/algorithms/2023-08-30",draft:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/lecture-notes/algorithms/2023-08-30.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"algorithms",permalink:"/oodlib/docs/lecture-notes/algorithms/"}},l={},i=[{value:"remark",id:"remark",level:3},{value:"properties",id:"properties",level:3},{value:"What problems does Algorithms solve?",id:"what-problems-does-algorithms-solve",level:3},{value:"What is different from Data structure class?",id:"what-is-different-from-data-structure-class",level:3},{value:"Caution",id:"caution",level:3},{value:"Comparison between Big-O notations",id:"comparison-between-big-o-notations",level:3},{value:"time complexity : O(n^2)",id:"time-complexity--on2",level:3},{value:"What is Divide and Conquer?",id:"what-is-divide-and-conquer",level:2},{value:"steps.",id:"steps",level:4},{value:"time complexity : O(n*log(n))",id:"time-complexity--onlogn",level:3}],p={toc:i},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"in Assignments use python sorting packages.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"7 todos left.")),(0,r.kt)("h1",{id:"what-is-algorithm"},"What is algorithm?"),(0,r.kt)("p",null,"Set of computational steps, that transforms input to output. "),(0,r.kt)("h3",{id:"remark"},"remark"),(0,r.kt)("p",null,"There needs input (or not), and output is a ",(0,r.kt)("strong",{parentName:"p"},"must"),"."),(0,r.kt)("h3",{id:"properties"},"properties"),(0,r.kt)("p",null,"Algorithm needs to be"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"definite: each steps should be meaningful"),(0,r.kt)("li",{parentName:"ul"},"finite: should be finished at some point."),(0,r.kt)("li",{parentName:"ul"},"effective : it has to do the task effectively.")),(0,r.kt)("h3",{id:"what-problems-does-algorithms-solve"},"What problems does Algorithms solve?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"routing algorithms"),(0,r.kt)("li",{parentName:"ul"},"search engines"),(0,r.kt)("li",{parentName:"ul"},"public key cryptography"),(0,r.kt)("li",{parentName:"ul"},"maximizing profit"),(0,r.kt)("li",{parentName:"ul"},"et cetra")),(0,r.kt)("h3",{id:"what-is-different-from-data-structure-class"},"What is different from Data structure class?"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"-"),(0,r.kt)("th",{parentName:"tr",align:null},"data structure"),(0,r.kt)("th",{parentName:"tr",align:null},"algorithms"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Definition"),(0,r.kt)("td",{parentName:"tr",align:null},"way to organize data"),(0,r.kt)("td",{parentName:"tr",align:null},"procedure for performing task")))),(0,r.kt)("p",null,"#todo : difference between data structure and algorithms"),(0,r.kt)("p",null,"needs good data structure knowledge in order to build a good algorithms. It will ",(0,r.kt)("strong",{parentName:"p"},"help"),". "),(0,r.kt)("h3",{id:"caution"},"Caution"),(0,r.kt)("p",null,"Needs data structure knowledge after finals."),(0,r.kt)("h1",{id:"algorithms---sorting"},"Algorithms - Sorting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"insertion, selection, bubble, shell, merge, heap, quick, quick3")),(0,r.kt)("p",null,"![","[../images/20230830144603.png]","]"),(0,r.kt)("p",null,"How do you say one algorithm is better than the other?\n",(0,r.kt)("strong",{parentName:"p"},"The number of primitive operations")," needed.\nWe express with ",(0,r.kt)("strong",{parentName:"p"},"big-O notation"),"."),(0,r.kt)("h1",{id:"big-o-notation"},"Big-O notation"),(0,r.kt)("p",null,"mathematical notation used to classify algorithms according to ",(0,r.kt)("strong",{parentName:"p"},"how their run time grow as the input size grows"),". "),(0,r.kt)("p",null,"ex1. get_first_number function needs 1 operation : constant : ",(0,r.kt)("strong",{parentName:"p"},"O(1)"),"\nex2. summation function needs n operation : ",(0,r.kt)("strong",{parentName:"p"},"O(n)"),"\nex3. Sequential search : n operation :  ",(0,r.kt)("strong",{parentName:"p"},"O(n)"),", linear time complexity\nex4. Binary search(just like we search on dictionary) : log n operation :  ",(0,r.kt)("strong",{parentName:"p"},"O(log n)"),"\nex5. brute force : ",(0,r.kt)("strong",{parentName:"p"},"O(n!)"),", worst."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"caution."),"\nwe can only use binary search only when the input is sorted. In other words, input is sorted beforehand."),(0,r.kt)("p",null,"memo. runtime complexity, space complexity"),(0,r.kt)("h3",{id:"comparison-between-big-o-notations"},"Comparison between Big-O notations"),(0,r.kt)("p",null,"![","[../images/20230830145809.png]","]"),(0,r.kt)("h1",{id:"insertion-sort"},"Insertion Sort"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Find a spot and shift."),"\nfor each unsorted data array, we choose where to ",(0,r.kt)("strong",{parentName:"p"},"insert")," in the sorted data array.")),(0,r.kt)("p",null,"this alg. divides data into two parts: sorted and unsorted."),(0,r.kt)("p",null,"compare with each sorted data ",(0,r.kt)("strong",{parentName:"p"},"backwards")," (biggest first).\nif the sorted datum is bigger, shift to right.\nelse if the sorted datum is smaller, put the target to the place. "),(0,r.kt)("p",null,"![","[../images/20230830150848.png]","]"),(0,r.kt)("p",null,"#todo : implement pseudocode.\n#todo : implement code."),(0,r.kt)("h3",{id:"time-complexity--on2"},"time complexity : ",(0,r.kt)("span",{parentName:"h3",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"n"),(0,r.kt)("mn",{parentName:"msup"},"2")),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("p",null,"#todo : how to prove?"),(0,r.kt)("h1",{id:"merge-sort"},"Merge Sort"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"divide and conquer"))),(0,r.kt)("h2",{id:"what-is-divide-and-conquer"},"What is Divide and Conquer?"),(0,r.kt)("p",null,"you divide problem into multiple subproblems. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"remark"),"\nsubproblems should be the similar problem of the bigger one.\ndivide and conquer is ",(0,r.kt)("em",{parentName:"p"},"recursive")," in nature. "),(0,r.kt)("h4",{id:"steps"},"steps."),(0,r.kt)("p",null,"Divide : divide problem into smaller subproblems.\nConquer : when the subproblem is small enough, solve in ",(0,r.kt)("em",{parentName:"p"},"straight-forward manner"),".\nCombine : obtain bigger solution with smaller solutions."),(0,r.kt)("p",null,"#todo : implement merge sort pseudocode.\n#todo : implement python code."),(0,r.kt)("h3",{id:"time-complexity--onlogn"},"time complexity : ",(0,r.kt)("span",{parentName:"h3",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow"},"\u2217"),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n*log(n))")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"))")))))),(0,r.kt)("p",null,"#todo : how to prove?"))}u.isMDXComponent=!0}}]);