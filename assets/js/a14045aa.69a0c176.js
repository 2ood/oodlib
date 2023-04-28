"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[864],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=r.createContext({}),c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),d=l,f=s["".concat(m,".").concat(d)]||s[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={},o="HTML fundamentals",i={unversionedId:"programming/html/html-fundamentals",id:"programming/html/html-fundamentals",title:"HTML fundamentals",description:"HTML\uc740 \uc6f9\ubb38\uc11c\uc758 \uad6c\uc870\ub97c \ub098\ud0c0\ub0b4\ub294\ub370 \uc0ac\uc6a9\ud558\ub294 \uc5b8\uc5b4\uc774\ub2e4.",source:"@site/docs/programming/html/1-html-fundamentals.md",sourceDirName:"programming/html",slug:"/programming/html/html-fundamentals",permalink:"/oodlib/docs/programming/html/html-fundamentals",draft:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/programming/html/1-html-fundamentals.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"html",permalink:"/oodlib/docs/programming/html/"},next:{title:"id and class",permalink:"/oodlib/docs/programming/html/id-and-class"}},m={},c=[{value:"id\uc640 class",id:"id\uc640-class",level:3}],p={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"html-fundamentals"},"HTML fundamentals"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"HTML\uc740 ",(0,l.kt)("strong",{parentName:"p"},"\uc6f9\ubb38\uc11c\uc758 \uad6c\uc870"),"\ub97c \ub098\ud0c0\ub0b4\ub294\ub370 \uc0ac\uc6a9\ud558\ub294 \uc5b8\uc5b4\uc774\ub2e4.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud0dc\uadf8(Tag) \ub77c\ub294 \ub2e8\uc704\ub85c \ub9cc\ub4e4\uc5b4\uc9c4\ub2e4. ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud0dc\uadf8\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uaddc\uce59\uc73c\ub85c \uc4f4\ub2e4."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<\ud0dc\uadf8\uc774\ub984>\ub0b4\uc6a9</\ud0dc\uadf8\uc774\ub984>\n<h1>Hello world!</h1>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc885\uc885 \ub2eb\ub294 \ud0dc\uadf8\uac00 \uc5c6\ub294 \uac83\ub3c4 \uc788\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" href="style.css"> \x3c!--css \ud30c\uc77c\uc744 \uc5f0\uacb0--\x3e\n<hr/> \x3c!--\uc587\uc740 \uac00\ub85c\uc904 \ud558\ub098 \uae0b\uae30--\x3e\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub9ce\uc774 \uc0ac\uc6a9\ub3fc \uc774\ubbf8 \uc815\uc758\ub418\uc5b4 \uc788\ub294 \ud0dc\uadf8\uac00 \uba87\uba87 \uc788\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head> \x3c!--\ud5e4\ub4dc \ud0dc\uadf8 \uc548\uc5d0\ub294 \ubb38\uc11c\ub97c \uc815\uc758\ud558\ub294 \ub0b4\uc6a9\uc774 \ub4e4\uc5b4\uac04\ub2e4--\x3e\n    <title>\ubb38\uc11c\uc758 \ud0ed \ubd80\ubd84\uc5d0 \ub098\ud0c0\ub098\ub294 \uc774\ub984</title>\n    <link rel="stylesheet" href="style.css"> \n  </head>\n  <body>\n    <h1>\ud070 \uc81c\ubaa9</h1>\n    <h2>h\ud0dc\uadf8\ub294 h6 \uc815\ub3c4\uae4c\uc9c0 \uc788\ub2e4</h2>\n    <center>\ub0b4\uc6a9\uc744 \uc911\uc559\uc815\ub82c\ud560 \uc218 \uc788\ub2e4</center>\n    <p>p\ub294 \ubb38\ub2e8,<b>b \ub294 \ubcfc\ub4dc\uccb4</b></p>\n    <a href="https://www.naver.com">anchor \ud0dc\uadf8\ub294 \ud558\uc774\ud37c\ub9c1\ud06c</a>\n  </body>\n</html>\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"div \ud0dc\uadf8\uc640 span \ud0dc\uadf8\ub294 \uac00\uc7a5 \uae30\ubcf8\uc801\uc778 \ud0dc\uadf8\uc774\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div>div \ud0dc\uadf8\ub294 \uadf8 \uc904\uc5d0\uc11c \uac00\ub2a5\ud55c \uac00\uc7a5 \ud070 \ud3ed\uc73c\ub85c \ud06c\uae30\uc7a1\ud78c\ub2e4.</div>\n<span>span \ud0dc\uadf8\ub294 \ub0b4\uc6a9\uc5d0 \ub9de\ucdb0\uc11c\ub9cc \uc7a1\ud78c\ub2e4.</span>\n")),(0,l.kt)("h3",{id:"id\uc640-class"},"id\uc640 class"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"element\ub4e4\uc744 \uc9c0\ubaa9\ud558\uae30 \uc704\ud574 \ubd99\uc774\ub294 \uc18d\uc131")),(0,l.kt)("p",null,"\ud558\ub098\uc758 element\ub97c \uc9c0\ubaa9\ud558\uac70\ub098 (id)\n\uc5ec\ub7ec \uacf5\ud1b5\uc801\uc778 element\ub4e4\uc744 \ud55c\ubc88\uc5d0 \ubb36\uc5b4\uc11c \uc9c0\ubaa9 (class) \ud560 \ub54c \uc0ac\uc6a9\ud55c\ub2e4."))}u.isMDXComponent=!0}}]);