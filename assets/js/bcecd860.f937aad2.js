"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[4300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,d=m["".concat(p,".").concat(u)]||m[u]||g[u]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Semanic Versioning",l={unversionedId:"programming/versioning/semantic-versioning",id:"programming/versioning/semantic-versioning",title:"Semanic Versioning",description:"Semantic Versioning - \uacf5\uc2dd \ubb38\uc11c",source:"@site/docs/programming/versioning/semantic-versioning.md",sourceDirName:"programming/versioning",slug:"/programming/versioning/semantic-versioning",permalink:"/oodlib/docs/programming/versioning/semantic-versioning",draft:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/programming/versioning/semantic-versioning.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Typescript",permalink:"/oodlib/docs/programming/typescript"},next:{title:"vite",permalink:"/oodlib/docs/programming/vite"}},p={},c=[{value:"\uc911\uc694\ud55c \ubd80\ubd84 \ubc1c\ucdcc",id:"\uc911\uc694\ud55c-\ubd80\ubd84-\ubc1c\ucdcc",level:2},{value:"changelog boilerplate (template)",id:"changelog-boilerplate-template",level:2},{value:"changelog \uc640 release \uc790\ub3d9\uc73c\ub85c \ud574\uc8fc\ub294 \ud328\ud0a4\uc9c0",id:"changelog-\uc640-release-\uc790\ub3d9\uc73c\ub85c-\ud574\uc8fc\ub294-\ud328\ud0a4\uc9c0",level:2}],s={toc:c},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"semanic-versioning"},"Semanic Versioning"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://semver.org/lang/ko/"},"Semantic Versioning - \uacf5\uc2dd \ubb38\uc11c")),(0,a.kt)("p",null,"\uc8fc,\ubd80,\uc218 \uc21c\uc11c.\nMajor \uac00 \uc62c\ub77c\uac00\uba74 Minor, patch \uac12\uc740 0\uc73c\ub85c \ub9ac\uc14b.\nMinor \uac00 \uc62c\ub77c\uac00\uba74 Patch \uac12\uc740 0\uc73c\ub85c \ub9ac\uc14b.  "),(0,a.kt)("p",null,"\uc8fc Major : \uc774\uc804 \ubc84\uc804\uacfc API \ud638\ud658 \uc548\ub418\ub294 \uacbd\uc6b0.\n\ubd80 Minor : \uc774\uc804 \ubc84\uc804\uacfc \ud638\ud658\uc774 \ub418\ub294\ub370, \uae30\ub2a5\uc774 \ucd94\uac00\ub41c \uacbd\uc6b0. API \ub4e4\uc774 deprecate \ub418\ub294 \uacbd\uc6b0\ub3c4 \ud3ec\ud568. \ud328\uce58\ub4e4\ub3c4 \ud55c\ubc88\uc5d0 \ud3ec\ud568\ud574\ub3c4 \ub41c\ub2e4.\n\uc218 Patch : \uc774\uc804 \ubc84\uc804\uacfc \ud638\ud658\ub418\uace0 \uae30\ub2a5 \uac19\uace0, \ubc84\uadf8\ub9cc \uc218\uc815\ub41c \uacbd\uc6b0."),(0,a.kt)("h2",{id:"\uc911\uc694\ud55c-\ubd80\ubd84-\ubc1c\ucdcc"},"\uc911\uc694\ud55c \ubd80\ubd84 \ubc1c\ucdcc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud558\ub098\uc758 \ubc84\uc804 \ubc88\ud638\ub97c \ubc1b\uc740 \uc774\uc0c1 \ucf54\ub4dc\ub97c \ubcc0\uacbd\ud560 \uc218 \uc5c6\ub2e4. \ubcc0\uacbd\ud558\ub824\uba74 \uc0c8\ub85c\uc6b4 \ubc84\uc804 \ubc88\ud638\ub85c.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Major \ubc88\ud638\uac00 0\uc778 \ubc84\uc804\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\uac1c\ubc1c\ubc84\uc804"),"\uc774\ub2e4. \uc774 \ub54c\uc758 API\ub294 \ubb34\uc870\uac74 \ubd88\uc548\uc815\uc774\ub77c \ud310\ub2e8\ud55c\ub2e4. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Major \ubc88\ud638\uac00 1\uc774\uc0c1\uc778 \ubc84\uc804\uc740 public API \ub77c\uace0 \uc815\uc758\ud55c\ub2e4. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"pre-release \uad00\ub828\ud574\uc11c \uc54c\ud30c\ubcb3 \ub300\ubb38\uc790 \ubd99\uc774\ub294 \uc6a9\ub840\ub3c4 \uc788\ub294\ub370, \uc544\uc9c1 \uc2e0\uacbd\uc4f8 \ubc14\ub294 \uc544\ub2cc\ub4ef. "))),(0,a.kt)("h2",{id:"changelog-boilerplate-template"},"changelog boilerplate (template)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://keepachangelog.com/en/1.1.0/"},"keepchangelog.com")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/juampynr/4c18214a8eb554084e21d6e288a18a2c"},"changelog template -on Github Gist")),(0,a.kt)("h2",{id:"changelog-\uc640-release-\uc790\ub3d9\uc73c\ub85c-\ud574\uc8fc\ub294-\ud328\ud0a4\uc9c0"},"changelog \uc640 release \uc790\ub3d9\uc73c\ub85c \ud574\uc8fc\ub294 \ud328\ud0a4\uc9c0"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/googleapis/release-please"},"release-please - on github")))}g.isMDXComponent=!0}}]);