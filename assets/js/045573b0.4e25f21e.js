"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[93],{35104:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>t});var r=s(74848),o=s(28453);const i={},c="2023-06-14",d={id:"projects/coding/db-server/2023-06-14",title:"2023-06-14",description:"\ud504\ub7f0\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc744 \uc704\ud574\uc11c \ub0b4 \uac1c\uc778 \uc11c\ubc84\uac00 \uc788\uc73c\uba74 \uc88b\uaca0\ub2e4\uace0 \uc0dd\uac01\ud588\ub2e4. \ud504\ub7f0\ud2b8\uc5d0\uc11c \ud14c\uc2a4\ud305\ud560 \ub54c \ud544\uc694\ud55c \uc815\ubcf4\ub4e4\uc744 \ub354\ubbf8\ub370\uc774\ud130\ub77c\ub3c4 \ubfcc\ub824\uc8fc\ub294 \uc11c\ubc84\uac00 \uc788\uc73c\uba74 \uc88b\uc744 \uac83 \uac19\ub2e4.",source:"@site/docs/projects/coding/db-server/2023-06-14.md",sourceDirName:"projects/coding/db-server",slug:"/projects/coding/db-server/2023-06-14",permalink:"/oodlib/docs/projects/coding/db-server/2023-06-14",draft:!1,unlisted:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/projects/coding/db-server/2023-06-14.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"db-server - project log",permalink:"/oodlib/docs/projects/coding/db-server/project-log"},next:{title:"music-playlist-service - roadmap",permalink:"/oodlib/docs/projects/coding/music-playlist-service/roadmap"}},l={},t=[{value:"1) \uc11c\ubc84 \uad6c\uc0c1",id:"1-\uc11c\ubc84-\uad6c\uc0c1",level:2},{value:"2) \uc11c\ubc84 \uad6c\ucd95 \uacfc\uc815",id:"2-\uc11c\ubc84-\uad6c\ucd95-\uacfc\uc815",level:2},{value:"TODO",id:"todo",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"2023-06-14",children:"2023-06-14"}),"\n",(0,r.jsx)(n.h1,{id:"json-placeholder-\uc11c\ubc84-\uc124\uc815",children:"JSON Placeholder \uc11c\ubc84 \uc124\uc815."}),"\n",(0,r.jsx)(n.p,{children:"\ud504\ub7f0\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc744 \uc704\ud574\uc11c \ub0b4 \uac1c\uc778 \uc11c\ubc84\uac00 \uc788\uc73c\uba74 \uc88b\uaca0\ub2e4\uace0 \uc0dd\uac01\ud588\ub2e4. \ud504\ub7f0\ud2b8\uc5d0\uc11c \ud14c\uc2a4\ud305\ud560 \ub54c \ud544\uc694\ud55c \uc815\ubcf4\ub4e4\uc744 \ub354\ubbf8\ub370\uc774\ud130\ub77c\ub3c4 \ubfcc\ub824\uc8fc\ub294 \uc11c\ubc84\uac00 \uc788\uc73c\uba74 \uc88b\uc744 \uac83 \uac19\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\uc11c\ubc84\ub294 Express.js \ub85c \ub9cc\ub4e4\uc5b4\ubcf4\uc790."}),"\n",(0,r.jsx)(n.h2,{id:"1-\uc11c\ubc84-\uad6c\uc0c1",children:"1) \uc11c\ubc84 \uad6c\uc0c1"}),"\n",(0,r.jsx)(n.p,{children:"\uc774 \uc11c\ubc84\ub294 \uac01 \ud504\ub85c\uc81d\ud2b8\ub9c8\ub2e4 \uc6d0\ud558\ub294 \uc784\uc758\uc758 JSON \uc744 \uc1a1\uc2e0\ud574\uc8fc\ub294 \uc11c\ubc84\uac00 \ub420 \uac83\uc774\ub2e4. \uac01 \uc11c\ubc84\ub9c8\ub2e4 \uc8fc\ub294 \ub370\uc774\ud130\uac00 \ub2e4\ub974\ubbc0\ub85c, path\ub85c \uad6c\ubd84\ud558\uc5ec \ubc1b\ub294\ub2e4."}),"\n",(0,r.jsxs)(n.p,{children:["\uc11c\ubc84\uc758 \uad6c\uc870\ub294 \ub2e4\uc74c\uacfc \uac19\ub2e4. ",(0,r.jsx)(n.a,{href:"https://github.com/2ood/json-placeholder",children:"github"}),"\uc5d0\uc11c\ub3c4 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/\n|\n+ /api\n|   |\n|   +/what-should-i-buy\n|       |\n|       + /controllers\n|       |   |\n|       |   + index.js\n|       |   + sample-data.js\n|       |   + schema.yml\n|       |\n|       + /swagger\n|       |   |\n|       |   +swagger-options.js\n|       |\n|       + index.js\n|  \n+ app.js\n+ readme.md\n+ package.json\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\uac01 \ud504\ub85c\uc81d\ud2b8\ub9c8\ub2e4 ",(0,r.jsx)(n.code,{children:"/api"})," \ud3f4\ub354 \uc544\ub798\uc5d0 \ud3f4\ub354\uba85\uc73c\ub85c \ub9cc\ub4e4\uace0 \uac19\uc740 \uad6c\uc870\ub85c \ub9cc\ub4e0\ub2e4."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"app.js"}),"\uc5d0\uc11c \ubaa8\ub4e0 router \ub97c \uc5f0\uacb0\ud55c\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"api/*/index.js"})," \uc5d0\uc11c \ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud544\uc694\ud55c \ubaa8\ub4e0 router \ub97c \uc5f0\uacb0\ud55c\ub2e4. \ubcf8 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ud544\uc694\ud55c API\ub3c4 swagger\ub85c \uc5f0\uacb0\ud574 \ubcf4\uc5ec\uc900\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"api/*/controllers/index.js"})," \uc5d0\uc11c \ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ud544\uc694\ud55c \uac01 \uc694\uccad \ucc98\ub9ac\ubb38\uc744 \uad6c\ud604\ud55c\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"api/*/controllers/sample-data.js"})," \uc5d0\uc11c \uc784\uc758\ub85c \ud544\uc694\ud55c \ub354\ubbf8 JSON\uc744 JS Object\ub85c \uc815\uc758\ud574\uc11c \ub04c\uc5b4\uc640\uc11c \uc0ac\uc6a9\ud55c\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"api/*/controllers/schema.yml"})," \uc5d0\uc11c \ubcf8 \uc11c\ubc84\uc5d0\uc11c \ud544\uc694\ud55c \uc784\uc758\uc758 \ub370\uc774\ud130 \ubaa8\ub378\uc744 \uc801\ub294\ub2e4. Swagger\uc5d0\uc11c \ubcfc \uc218 \uc788\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"2-\uc11c\ubc84-\uad6c\ucd95-\uacfc\uc815",children:"2) \uc11c\ubc84 \uad6c\ucd95 \uacfc\uc815"}),"\n",(0,r.jsxs)(n.p,{children:["\uc11c\ubc84\ub97c \ub9cc\ub4e4\uc5b4\ubcf8 \uc801\uc774 \uc5c6\uc73c\ub2c8, \uc77c\ub2e8\uc740 Netlify\ub098 Vercel \ub85c \ud638\uc2a4\ud305\uc744 \ud574\ubcf4\ub824\uace0 \ud588\ub2e4. \ud558\uc9c0\ub9cc, Serverless Function \ud615\ud0dc\ub85c Express \ub97c \uc9c0\uc6d0\ud574\uc11c, \ub2e4\ub8e8\uae30\uac00 \ub108\ubb34 \uae4c\ub2e4\ub85c\uc6e0\ub2e4. \uc5ec\ub7ec \uc2dc\ub3c4\ub97c \ud574\ubd24\uc9c0\ub9cc, CSS \ud30c\uc77c\uc774 ",(0,r.jsx)(n.code,{children:"Content-Type : text/html"}),"\ub85c \ub0a0\ub77c\uc624\ub294 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uc9c0 \ubabb\ud574\uc11c \uacb0\uad6d \uac1c\uc778 cloud PaaS\ub97c \uc0ac\uc6a9\ud558\uae30\ub85c \ud588\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:"GCP\ub97c \uc0ac\uc6a9\ud558\uae30\ub85c \ud588\ub2e4. AWS\ub294 \ubb54\uac00 \uac81\uc774\ub09c\ub2e4! \uc694\uae08\ub3c4 \ub354 \ub098\uc624\uac8c \uc0dd\uae34 \uac83 \uac19\uace0..\ud574\uc11c GCP\uac00 \ubb34\ub8cc\ub85c \uc81c\uacf5\ud558\ub294 \ud55c\ub3c4\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc9c0 \uc54a\uc744\uae4c \uc2f6\uc5b4 GCP\ub97c \uc0ac\uc6a9\ud558\uae30\ub85c \ud588\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"GCP\uc5d0\uc11c VM \uc778\uc2a4\ud134\uc2a4\ub97c \ud558\ub098 \uc0dd\uc131\ud558\uace0, git clone \uc73c\ub85c \ucf54\ub4dc\ub97c \uc5c5\ub85c\ub4dc\ud588\ub2e4. Ubuntu 20.XX \ubc84\uc804 \uc774\ud558\uc5d0\uc120 Node\uac00 v.18 \uc774\uc0c1\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ubb38\uc81c \ub54c\ubb38\uc5d0 \uace0\uc0dd \uc880 \ud588\ub2e4. \uacb0\uad6d \uc77c\ub2e8\uc740 Node v.17.XX \ub97c \uc0ac\uc6a9\ud558\uae30\ub85c \ud558\uace0, \ub098\uc911\uc5d0 \uc778\uc2a4\ud134\uc2a4\ub97c \ub354 \ub192\uc740 \ubc84\uc804\uc73c\ub85c \uc815\uc758\ud574\uc11c Version Bump\ub97c \ud558\uae30\ub85c \ud588\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\uc9c0\uae08 \ub9cc\ub4e0 VM \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc678\ubd80 IP\ub97c \uace0\uc815\uc73c\ub85c \ud560\ub2f9 \ubc1b\uace0, \ubc29\ud654\ubcbd\ub3c4 \uc6d0\ud558\ub294 \ud3ec\ud2b8\ub9cc \uc5f4\uc5b4\ub450\uc5c8\ub2e4. \uc11c\ubc84 \uc791\ub3d9\ub3c4 \uc798 \ub428\uc744 \ud655\uc778\ud588\ub2e4!"}),"\n",(0,r.jsx)(n.h2,{id:"todo",children:"TODO"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"root path \uc5d0\uc11c \uac01 \ud504\ub85c\uc81d\ud2b8 api\ub85c \uac00\ub294 hyperlink page \ubcf4\uc5ec\uc8fc\uae30."}),"\n",(0,r.jsx)(n.li,{children:"\uc11c\ubc84 \uc5c5\ub85c\ub4dc\uc6a9 git branch \ud30c\uae30."}),"\n",(0,r.jsx)(n.li,{children:"\ub0b4\ubd80 mysql \uac00\ub3d9\ud574\ubcf4\uae30."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var r=s(96540);const o={},i=r.createContext(o);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);