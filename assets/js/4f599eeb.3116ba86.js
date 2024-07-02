"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[1200],{38333:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(74848),s=t(28453);const o={id:new Date("2023-11-27T00:00:00.000Z")},r="Introduction",l={id:"lecture-notes/algorithms/Mon Nov 27 2023 00:00:00 GMT+0000 (Coordinated Universal Time)",title:"Introduction",description:"Summary",source:"@site/docs/lecture-notes/algorithms/2023-11-27.md",sourceDirName:"lecture-notes/algorithms",slug:"/lecture-notes/algorithms/Mon Nov 27 2023 00:00:00 GMT+0000 (Coordinated Universal Time)",permalink:"/oodlib/docs/lecture-notes/algorithms/Mon Nov 27 2023 00:00:00 GMT+0000 (Coordinated Universal Time)",draft:!1,unlisted:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/lecture-notes/algorithms/2023-11-27.md",tags:[],version:"current",frontMatter:{id:"Mon Nov 27 2023 00:00:00 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/oodlib/docs/lecture-notes/algorithms/2023-11-22"},next:{title:"Introduction",permalink:"/oodlib/docs/lecture-notes/algorithms/2023-11-29"}},c={},d=[{value:"Spanning Tree",id:"spanning-tree",level:2},{value:"representation of a Graph",id:"representation-of-a-graph",level:2},{value:"Prim&#39;s Minimum Cost Spanning Tree",id:"prims-minimum-cost-spanning-tree",level:2},{value:"Kruskal&#39;s Minimum Cost Spanning Tree",id:"kruskals-minimum-cost-spanning-tree",level:2},{value:"Use case on Non-Connected Graphs",id:"use-case-on-non-connected-graphs",level:2}];function h(e){const n={blockquote:"blockquote",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Summary"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"keywords"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"TODO"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"HW"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Exercise"}),"*"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Next time"})}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h1,{id:"huffman-coding",children:"Huffman Coding"}),"\n",(0,i.jsx)(n.p,{children:"Characters that are more frequent needs less code."}),"\n",(0,i.jsx)(n.h1,{id:"minimum-cost-spanning-tree",children:"Minimum Cost Spanning Tree"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"finding the spanning tree that has minimum cost."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"spanning-tree",children:"Spanning Tree"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The tree that touches all the nodes with minimum number of edges"}),"\n",(0,i.jsx)(n.li,{children:"Do not have any loops."}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"The # of edges = (# of nodes) -1"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"representation-of-a-graph",children:"representation of a Graph"}),"\n",(0,i.jsxs)(n.p,{children:["G = (V,E), where V = ",6," , E = ",1]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"There is only one minimum cost spanning tree."}),"\n",(0,i.jsx)(n.li,{children:"There is only one minimum cost"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prims-minimum-cost-spanning-tree",children:"Prim's Minimum Cost Spanning Tree"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"select the minimum cost edge"}),"\n",(0,i.jsxs)(n.li,{children:["Select the ",(0,i.jsx)(n.strong,{children:"next"})," minimum cost edge among already connected nodes."]}),"\n",(0,i.jsx)(n.li,{children:"repeat stage 2 until the number of edges become (# nodes -1)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"kruskals-minimum-cost-spanning-tree",children:"Kruskal's Minimum Cost Spanning Tree"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Select the next minimum, but not if you make up a cycle. In that case, take the next minimum instead."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"time complexity $O(E*E)$"}),"\n",(0,i.jsxs)(n.p,{children:["If you take the heap, it can be reduced to $O(E \\log",E,")$"]}),"\n",(0,i.jsx)(n.h2,{id:"use-case-on-non-connected-graphs",children:"Use case on Non-Connected Graphs"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Kruskals. The Prims will not able to discover the other isolated nodes."}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"dijkstras-algorithm",children:"Dijkstra's Algorithm"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Single Source shortest path problem"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The shortest path weight from a selected source node to the each other nodes."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"initialize the not-directly-connected paths with infinity."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Relaxation"})," : exchanging/taking the less costed path."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);