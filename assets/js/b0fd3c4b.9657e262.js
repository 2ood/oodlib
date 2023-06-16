"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[8518],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={},s="CSS fundamentals",l={unversionedId:"programming/css/css-fundamentals",id:"programming/css/css-fundamentals",title:"CSS fundamentals",description:"css \ud30c\uc77c\uc740 html\ub85c \uc368\uc9c4 \uac01 \ud0dc\uadf8\ub4e4\uc758 \uc2a4\ud0c0\uc77c\uc744 \uc801\ub294\ub2e4.",source:"@site/docs/programming/css/css-fundamentals.md",sourceDirName:"programming/css",slug:"/programming/css/css-fundamentals",permalink:"/oodlib/docs/programming/css/css-fundamentals",draft:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/programming/css/css-fundamentals.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"web-safe-fonts",permalink:"/oodlib/docs/programming/css/web-safe-fonts"},next:{title:"Deployment strategy",permalink:"/oodlib/docs/programming/deploy-strategy"}},c={},i=[{value:"CSS \uc5d0\uc11c id &amp; class",id:"css-\uc5d0\uc11c-id--class",level:3}],p={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"css-fundamentals"},"CSS fundamentals"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"css \ud30c\uc77c\uc740 html\ub85c \uc368\uc9c4 \uac01 \ud0dc\uadf8\ub4e4\uc758 \uc2a4\ud0c0\uc77c\uc744 \uc801\ub294\ub2e4.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"css \uc0c1\uc758 \uaddc\uce59\uc744 \uc801\ub294 \ubc29\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"\uc6d0\ud558\ub294 \ud0dc\uadf8 {\n    \uc18d\uc131\uba85 : \uc6d0\ud558\ub294 \uc18d\uc131\uc815\ubcf4;\n}\n\nbody {\n    background-color : beige;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"css \ub294 \uc800 \uc704\uc5d0 \ucf54\ub4dc\uc5d0\uc11c \ubcf4\ub4ef\uc774 ",(0,a.kt)("inlineCode",{parentName:"li"},"<link>")," \ud0dc\uadf8\ub85c HTML\uc5d0 \uc5f0\uacb0\ud55c\ub2e4. ")),(0,a.kt)("h3",{id:"css-\uc5d0\uc11c-id--class"},"CSS \uc5d0\uc11c id & class"),(0,a.kt)("p",null,"css \uc5d0\uc11c selector\ubb38\uc744 \ud1b5\ud574 \uac01 id, class\ub97c \uac00\uc9c4 element\ub4e4\uc744 \ud55c\ubc88\uc5d0 \uafb8\ubc00 \uc218 \uc788\ub2e4. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"class \ub294 \uc55e\uc5d0 \uc628\uc810(.) , id\ub294 \uc55e\uc5d0 #")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".book {\n    background-color : skyblue;\n}\n\n#context {\n    background-color : beige;\n    padding : 20px;\n}\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.nextree.co.kr/p8468/"},"source) CSS: \uc120\ud0dd\uc790\uc758 \uc774\ud574"))))}m.isMDXComponent=!0}}]);