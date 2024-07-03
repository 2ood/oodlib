"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[1204],{60928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var s=r(74848),o=r(28453);const c={id:new Date("2023-09-18T00:00:00.000Z")},l="Introduction",d={id:"lecture-notes/algorithms/Mon Sep 18 2023 00:00:00 GMT+0000 (Coordinated Universal Time)",title:"Introduction",description:"Summary",source:"@site/docs/lecture-notes/algorithms/2023-09-18.md",sourceDirName:"lecture-notes/algorithms",slug:"/lecture-notes/algorithms/Mon Sep 18 2023 00:00:00 GMT+0000 (Coordinated Universal Time)",permalink:"/oodlib/docs/lecture-notes/algorithms/Mon Sep 18 2023 00:00:00 GMT+0000 (Coordinated Universal Time)",draft:!1,unlisted:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/lecture-notes/algorithms/2023-09-18.md",tags:[],version:"current",frontMatter:{id:"Mon Sep 18 2023 00:00:00 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"2023-09-13",permalink:"/oodlib/docs/lecture-notes/algorithms/2023-09-13"},next:{title:"Introduction",permalink:"/oodlib/docs/lecture-notes/algorithms/Wed Sep 20 2023 00:00:00 GMT+0000 (Coordinated Universal Time)"}},a={},u=[{value:"method of finding time complexity",id:"method-of-finding-time-complexity",level:2},{value:"1. Decreasing Recurrence $T(n)=T(n-1)+1$",id:"1-decreasing-recurrence-tntn-11",level:2},{value:"2. Decreasing Recurrence $T(n) = T(n-1)+n$",id:"2-decreasing-recurrence-tn--tn-1n",level:2},{value:"3. Decreasing Recurrence $T(n)=T(n-1)+\\logn$",id:"3-decreasing-recurrence-tntn-1logn",level:2},{value:"Shortcuts #1",id:"shortcuts-1",level:2}];function h(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Summary"})}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"keywords"})}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"TODO"})}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"HW"})}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Exercise"}),"*"]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Next time"}),"\nRecurrence $T(n) = 2T(n-1)+1$"]}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h1,{id:"recap",children:"Recap"}),"\n",(0,s.jsx)(t.p,{children:"practice thinking in a recursive manner"}),"\n",(0,s.jsx)(t.p,{children:"First approach\nbase condition"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"think about smallest valid input"}),"\n",(0,s.jsx)(t.li,{children:"think about the smallest piece of recursion"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"=> hypothesis"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"think about how to make the phase smaller/bigger"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"=> induction"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"think about how topull the next recursion and use it."}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"Chapter 4 in book"}),"\n",(0,s.jsx)(t.h1,{id:"recurrence-relation",children:"Recurrence Relation"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Find the time complexity of some recursion codes."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"method-of-finding-time-complexity",children:"method of finding time complexity"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Recursion Tree method"}),"\n",(0,s.jsx)(t.li,{children:"Substitution method"}),"\n",(0,s.jsx)(t.li,{children:"masters theorem"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"memo.\nRecursion is naturally function of a decreasing form.\nHow? subtraction & division."}),"\n",(0,s.jsx)(t.h2,{id:"1-decreasing-recurrence-tntn-11",children:"1. Decreasing Recurrence $T(n)=T(n-1)+1$"}),"\n",(0,s.jsx)(t.p,{children:"We denote the function as T."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'Void Test(int n) {\n\tif(n>0){\n\t\tprintf("%d",n)\n\t\tTest(n-1);\n\t}  \n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"This has time complexity $\\Theta(n)$.\nTwo primitive steps : comparison, printing.\nfor each recurrence, this takes $2+T(n-1)$ steps.\nTwo is a constant, so it is basically same as 1.\nn+1 function calls, n prints."}),"\n",(0,s.jsx)(t.p,{children:"#todo : try to draw of recursive tree."}),"\n",(0,s.jsx)(t.p,{children:"memo.\nlinear(and quadratic) function, you can represent with theta.\nn! function, you cannot represent with theta."}),"\n",(0,s.jsx)(t.p,{children:"Let's use substitution method this time.\nBase Condition:"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Do not forget to write base condition!"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"\\begin{equation*}\nT(n) = \\begin{cases}\n1 & \\quad n=1 \\\\\nT(n-1)+1 & \\quad n>1.\n\\end{cases}\n\\end{equation*}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Substitution:\n$T(n) = T(n-1)+1$\n$\\quad\\quad=T(n-2)+2$\n$\\quad\\quad=T(n-3)+3$\n$\\quad...$\n$\\quad\\quad=T(n-n)+n$\n$\\quad\\quad=1+n$"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"IN TEST, should substitute at least 3 times.\nIN TEST, If possible, write in Theta function."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"2-decreasing-recurrence-tn--tn-1n",children:"2. Decreasing Recurrence $T(n) = T(n-1)+n$"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'Void Test(int n){\n\tif(n>0){\n\t\tfor(int i=0;i<n;i++) {\n\t\t\tprintf("%d",n);\n\t\t}\n\t\tTest(n-1);\n\t}\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Let's use substitution.\nBase Condition:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"$$\n\\begin{equation*}\nT(n) = \\begin{cases}\n1 & \\quad n=1 \\\\\nT(n-1)+n & \\quad n>1.\n\\end{cases}\n\\end{equation*}\n$$\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Substitution:\n$T(n) = T(n-1)+n$\n$\\quad\\quad=T(n-2)+(n-1)+n$\n$\\quad\\quad=T(n-3)+(n-2)+(n-1)+n$\n$\\quad...$\n$\\quad\\quad=T(n-k)+\\sum_",i=1,"^k i$\n$\\quad\\quad=1+\\frac",n(n-1),2,"$"]}),"\n",(0,s.jsxs)(t.h2,{id:"3-decreasing-recurrence-tntn-1logn",children:["3. Decreasing Recurrence $T(n)=T(n-1)+\\log",n,"$"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'Void Test(int n){\n\tif(n>0) {\n\t\tfor(int i=0;i<n;i*=2){\n\t\t\tprintf("%d",n);\n\t\t}\n\t}\n\tTest(n-1);\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["For each ",(0,s.jsx)(t.code,{children:"for loop"}),", it takes $\\log",n,"$ times of calculation.\n$# ;of ;calculations = \\log",1,"+\\log",2,"+\\log",3,"+...+\\log",n," = \\log n! $\nSo, in ",(0,s.jsx)(t.strong,{children:"upper bond"}),", $\\log n!$<$=\\log n^n$\n$O(\\log",n^n,") = O(n\\log",n,")$"]}),"\n",(0,s.jsx)(t.p,{children:"#todo : derive it with substitution method."}),"\n",(0,s.jsx)(t.h2,{id:"shortcuts-1",children:"Shortcuts #1"}),"\n",(0,s.jsxs)(t.p,{children:["$T(n)=T(n-1)+1 => \\Theta(n)$\n$T(n)=T(n-1)+n => \\Theta(n^2)$\n$T(n)=T(n-1)+\\log",n," => O(n \\log",n,")$"]}),"\n",(0,s.jsx)(t.p,{children:"The next order of remainder factors.\nWhat if $T(n) = T(n-C) +1$?\nThe $C$ doesn't matter. (unless $c->\\infty$)"})]})}function x(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var i=t(96540);const r={},s=i.createContext(r);function o(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);