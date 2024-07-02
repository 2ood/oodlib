"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[7372],{56161:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var o=r(74848),s=r(28453);const t={id:new Date("2023-11-01T00:00:00.000Z")},l="Introduction",c={id:"lecture-notes/algorithms/Wed Nov 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)",title:"Introduction",description:"Summary",source:"@site/docs/lecture-notes/algorithms/2023-11-01.md",sourceDirName:"lecture-notes/algorithms",slug:"/lecture-notes/algorithms/Wed Nov 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)",permalink:"/oodlib/docs/lecture-notes/algorithms/Wed Nov 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)",draft:!1,unlisted:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/lecture-notes/algorithms/2023-11-01.md",tags:[],version:"current",frontMatter:{id:"Wed Nov 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/oodlib/docs/lecture-notes/algorithms/2023-10-30"},next:{title:"Introduction",permalink:"/oodlib/docs/lecture-notes/algorithms/Mon Nov 06 2023 00:00:00 GMT+0000 (Coordinated Universal Time)"}},d={},a=[{value:"Recursion",id:"recursion",level:2},{value:"problems based on MCM",id:"problems-based-on-mcm",level:2}];function h(e){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Summary"})}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"keywords"})}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"TODO"})}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"HW"})}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Exercise"}),"*"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Next time"}),"\ntabulation of MCM"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h1,{id:"matrix-chain-multiplication",children:"Matrix Chain Multiplication"}),"\n",(0,o.jsx)(n.h2,{id:"recursion",children:"Recursion"}),"\n",(0,o.jsxs)(n.p,{children:["algorithm idea development.\nWe build a ",(0,o.jsx)(n.code,{children:"MCM(arr[], i, j)"})," recursion function."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"i"})," should start from 1, and each ",(0,o.jsx)(n.code,{children:"i"}),"-th matrix $A_",i,"$ is ",(0,o.jsx)(n.code,{children:"arr[i-1]"})," by ",(0,o.jsx)(n.code,{children:"arr[i]"})," size."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"base case"})," is when i and j are the same. cost is 0."]}),"\n",(0,o.jsxs)(n.li,{children:["iteration of ",(0,o.jsx)(n.code,{children:"k"}),",","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"k"})," goes from ",(0,o.jsx)(n.code,{children:"i"})," to ",(0,o.jsx)(n.code,{children:"j-1"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"k=j"})," is not possible because the splitting happens like this : $MCM(arr,i,k) + MCM(arr,k+1,j)$"]}),"\n",(0,o.jsxs)(n.li,{children:["cost of breaking at k is $MCM(arr,i,k) + MCM(arr,k+1,j)+ (i-1)",(0,o.jsx)(n.em,{children:"k"}),"j$"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"iterate k, and keep track of the minimum cost."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"problems-based-on-mcm",children:"problems based on MCM"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"MCM"}),"\n",(0,o.jsx)(n.li,{children:"printing MCM"}),"\n",(0,o.jsx)(n.li,{children:"Evaluate Expression to True/Boolean Paranthesization"}),"\n",(0,o.jsxs)(n.li,{children:["Min/Max value of an Expression ex. ",(0,o.jsx)(n.code,{children:"2*3+5"})," ->",(0,o.jsx)(n.code,{children:"2*(3+5)"})]}),"\n",(0,o.jsxs)(n.li,{children:["Palindrome Partitioning ex. ",(0,o.jsx)(n.code,{children:"aab"}),"-> ",(0,o.jsx)(n.code,{children:'[["a","a","b"],["aa","b"]]'})]}),"\n",(0,o.jsx)(n.li,{children:"Scramble String"}),"\n",(0,o.jsx)(n.li,{children:"Egg Dropping Problem."}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"base case on Recursion becomes the initial value of tabulation."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var r=i(96540);const o={},s=r.createContext(o);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);