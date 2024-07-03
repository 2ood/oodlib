"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[1867],{99752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(74848),s=t(28453);const r={id:new Date("2023-11-06T00:00:00.000Z")},c="Introduction",l={id:"lecture-notes/algorithms/Mon Nov 06 2023 00:00:00 GMT+0000 (Coordinated Universal Time)",title:"Introduction",description:"Summary",source:"@site/docs/lecture-notes/algorithms/2023-11-06.md",sourceDirName:"lecture-notes/algorithms",slug:"/lecture-notes/algorithms/Mon Nov 06 2023 00:00:00 GMT+0000 (Coordinated Universal Time)",permalink:"/oodlib/docs/lecture-notes/algorithms/Mon Nov 06 2023 00:00:00 GMT+0000 (Coordinated Universal Time)",draft:!1,unlisted:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/lecture-notes/algorithms/2023-11-06.md",tags:[],version:"current",frontMatter:{id:"Mon Nov 06 2023 00:00:00 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/oodlib/docs/lecture-notes/algorithms/Wed Nov 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)"},next:{title:"Introduction",permalink:"/oodlib/docs/lecture-notes/algorithms/2023-11-08"}},a={},d=[{value:"Tabulation",id:"tabulation",level:2},{value:"Recursion",id:"recursion",level:2}];function h(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Summary"})}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"keywords"})}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"TODO"})}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"HW"})}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Exercise"}),"*"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Next time"})}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h1,{id:"matrix-chain-multiplication",children:"Matrix Chain Multiplication"}),"\n",(0,o.jsx)(n.h2,{id:"tabulation",children:"Tabulation"}),"\n",(0,o.jsx)(n.p,{children:"We make two matrices\nOne is for cost tracking, the other is for paranthesis cuttitng index backtracking."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Cells of ",(0,o.jsx)(n.code,{children:"i=j"}),", it means one single matrix, so diagonals are zero."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Each cell means that the minimum cost of $A_",i+1,"$ through $A_",j+1,"$"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"we will calculate first from semidiagonals that are closer to main diagonal, outwards."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Our final cost will be at ",(0,o.jsx)(n.code,{children:"[0][n-1]"})," th cell."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"for multiple calculations, you will check possible options and find the minimum."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"At the second matrix, you will write the index you put the paranthesis."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"longest-common-subsequence",children:"Longest Common Subsequence"}),"\n",(0,o.jsx)(n.p,{children:"What is the common subsequence?\ncharacter should appear in the same order."}),"\n",(0,o.jsx)(n.p,{children:"problem statement\ngiven two string.\nfind characters that are in the same sequence inside each string, and print the max length of it."}),"\n",(0,o.jsx)(n.h2,{id:"recursion",children:"Recursion"}),"\n",(0,o.jsxs)(n.p,{children:["we make a function ",(0,o.jsx)(n.code,{children:"LCS(String x, String y, int n, int m)"}),"\nbase case : when  $n=0 \\text",or,";m=0$\nDecreasing function : from last character, move to the next character and reduce the size."]}),"\n",(0,o.jsx)(n.p,{children:"If matched, increase the result +1.\nIf not matched, decrease n or decrease m. choose whichever that gives the longest result."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);