"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[7796],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,N=c["".concat(s,".").concat(k)]||c[k]||u[k]||i;return a?n.createElement(N,l(l({ref:t},m),{},{components:a})):n.createElement(N,l({ref:t},m))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},67356:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},l=void 0,o={unversionedId:"lecture-notes/networks/2023-11-07",id:"lecture-notes/networks/2023-11-07",title:"2023-11-07",description:"Summary",source:"@site/docs/lecture-notes/networks/2023-11-07.md",sourceDirName:"lecture-notes/networks",slug:"/lecture-notes/networks/2023-11-07",permalink:"/oodlib/docs/lecture-notes/networks/2023-11-07",draft:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/lecture-notes/networks/2023-11-07.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2023-11-02",permalink:"/oodlib/docs/lecture-notes/networks/2023-11-02"}},s={},p=[{value:"Input port function",id:"input-port-function",level:2},{value:"Longest Prefix Matching",id:"longest-prefix-matching",level:2},{value:"Switching fabric",id:"switching-fabric",level:2},{value:"Switching fabric #1. Memory",id:"switching-fabric-1-memory",level:2},{value:"Switching fabric #2. Bus",id:"switching-fabric-2-bus",level:2},{value:"Switching fabric #3. Interconnection network",id:"switching-fabric-3-interconnection-network",level:2},{value:"Output port contention",id:"output-port-contention",level:2},{value:"Buffer management is required.",id:"buffer-management-is-required",level:2},{value:"How much buffering?",id:"how-much-buffering",level:2},{value:"Buffer management",id:"buffer-management",level:2},{value:"Drop policy",id:"drop-policy",level:4},{value:"priority",id:"priority",level:4},{value:"round robin",id:"round-robin",level:4},{value:"Network priority",id:"network-priority",level:2},{value:"Network Neutrality",id:"network-neutrality",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Summary"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"keywords"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"TODO"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"HW"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Exercise*")," ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Next time"))),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"router-architecture"},"Router Architecture"),(0,r.kt)("h2",{id:"input-port-function"},"Input port function"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"line termination(Physical layer)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"bit level reception"))),(0,r.kt)("li",{parentName:"ul"},"link layer protocol recieving",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ethernet"))),(0,r.kt)("li",{parentName:"ul"},"lookup, forwarding table, queueing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"queueing happens at every port."),(0,r.kt)("li",{parentName:"ul"},"decentralized switching",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Destination-based forwarding"),(0,r.kt)("li",{parentName:"ul"},"SDN (more fields to compare)"))),(0,r.kt)("li",{parentName:"ul"},"goal is to process at line speed. so, the calculations are excecuted at hardware level.")))),(0,r.kt)("h2",{id:"longest-prefix-matching"},"Longest Prefix Matching"),(0,r.kt)("h2",{id:"switching-fabric"},"Switching fabric"),(0,r.kt)("p",null,"Switching rate should be ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mi",{parentName:"mrow"},"R")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"NR")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"NR"))))),", where ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"R")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"R")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R")))))," is the speed of each line.\nfabric designs are 3 types."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"memory, bus, interconnection network.")),(0,r.kt)("h2",{id:"switching-fabric-1-memory"},"Switching fabric #1. Memory"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"past generation. "),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"memory is the middle point."),(0,r.kt)("li",{parentName:"ul"},"speed is limited by memory bandwidth."),(0,r.kt)("li",{parentName:"ul"},"need two buses(input bus, output bus)"),(0,r.kt)("li",{parentName:"ul"},"read&write is needed."))),(0,r.kt)("h2",{id:"switching-fabric-2-bus"},"Switching fabric #2. Bus"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Bus (64bits of data can flow at a singular clock cycle)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Popular, but very expensive."),(0,r.kt)("li",{parentName:"ul"},"speed is limited by bus bandwidth (bus contentation)"),(0,r.kt)("li",{parentName:"ul"},"cutting-edge buses are 32 Gbps"),(0,r.kt)("li",{parentName:"ul"},"bus contentation depends on how many/busy input ports are.")),(0,r.kt)("h2",{id:"switching-fabric-3-interconnection-network"},"Switching fabric #3. Interconnection network"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"grid, and each pathways can be open or closed.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Crossbar methods.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Initially developed for processor connection methods.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If bus speed is R, and there are NR capacity (at most, by some sort of parallelism)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"thus can meet the efficiency of bus method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Even if we have less bandwidth, NR switching rate can be made because parallel switching is possible. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"up to 60 Gbps.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"limitation : when one pathway blocks other needed pathways. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Buffer management, scheduling algorithm should be implemented."))),(0,r.kt)("h2",{id:"output-port-contention"},"Output port contention"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HOL Blocking")," occurs.  - when two packet destined to the same output port.\nThe other packet data should wait until one collection of data is passed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Output buffer")," comes in.\nWhen arrival rate exceeds output line speed.\nbut queueing delay and loss due to output port buffer overflow can happen. "),(0,r.kt)("h2",{id:"buffer-management-is-required"},"Buffer management is required."),(0,r.kt)("p",null,"3 tasks on buffer management\n1) what should be the buffering size\n2) drop policy (which to drop?)\n3) scheduling discipline giving priority on each packets"),(0,r.kt)("h2",{id:"how-much-buffering"},"How much buffering?"),(0,r.kt)("p",null,(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mrow",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"mrow"},"R"),(0,r.kt)("mi",{parentName:"mrow"},"T"),(0,r.kt)("mi",{parentName:"mrow"},"T"),(0,r.kt)("mo",{parentName:"mrow"},"\u2217"),(0,r.kt)("mi",{parentName:"mrow"},"c")),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,r.kt)("msqrt",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msqrt"},"N"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{RTT*c}/{\\sqrt{N}}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1767em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"RTT"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c")),(0,r.kt)("span",{parentName:"span",className:"mord"},"/"),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord sqrt"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9267em"}},(0,r.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-3em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord",style:{paddingLeft:"0.833em"}},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"))),(0,r.kt)("span",{parentName:"span",style:{top:"-2.8867em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"}},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},(0,r.kt)("path",{parentName:"svg",d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"}))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1133em"}},(0,r.kt)("span",{parentName:"span"})))))))))),"\nRound Trip time is used.\n#todo : write about TCP flow and buffer."),(0,r.kt)("p",null,"If you have too much buffer?"),(0,r.kt)("h2",{id:"buffer-management"},"Buffer management"),(0,r.kt)("h4",{id:"drop-policy"},"Drop policy"),(0,r.kt)("h4",{id:"priority"},"priority"),(0,r.kt)("h4",{id:"round-robin"},"round robin"),(0,r.kt)("p",null,"#todo : fill out."),(0,r.kt)("h2",{id:"network-priority"},"Network priority"),(0,r.kt)("p",null,"#todo : fill out"),(0,r.kt)("h2",{id:"network-neutrality"},"Network Neutrality"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"technical, social, economic, legal")),(0,r.kt)("p",null,"Three rules made in US, 2015"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No blocking"),(0,r.kt)("li",{parentName:"ul"},"No throttling"),(0,r.kt)("li",{parentName:"ul"},"no paid prioritization")),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"network-layer-protocol"},"Network Layer Protocol"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IP protocol"),(0,r.kt)("li",{parentName:"ul"},"ICMP protocol (used in ping service)")),(0,r.kt)("h1",{id:"ip-datagram-format"},"IP datagram format"),(0,r.kt)("p",null,"#todo : paste format image."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"source IP address"),(0,r.kt)("li",{parentName:"ul"},"destination IP address"),(0,r.kt)("li",{parentName:"ul"},"TTL : max hops, thus looping packets are prevented."),(0,r.kt)("li",{parentName:"ul"},"upper layer protocol  (TCP, UDP..)"),(0,r.kt)("li",{parentName:"ul"},"header checksum (calculation to validate the data is intact). for some reliability",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"header checksum is only for header parts."))),(0,r.kt)("li",{parentName:"ul"},"16bit identifier, flags, fragment offset",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"router also does fragmentation. (actually a link layer process, but since they do not have processing power, network layer does it.)"),(0,r.kt)("li",{parentName:"ul"}))),(0,r.kt)("li",{parentName:"ul"})))}u.isMDXComponent=!0}}]);