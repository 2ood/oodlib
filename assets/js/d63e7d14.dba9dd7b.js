"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[2079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={},a="position",p={unversionedId:"programming/css/position",id:"programming/css/position",title:"position",description:"Position property",source:"@site/docs/programming/css/1-position.md",sourceDirName:"programming/css",slug:"/programming/css/position",permalink:"/oodlib/docs/programming/css/position",draft:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/programming/css/1-position.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"css",permalink:"/oodlib/docs/programming/css/"},next:{title:"Media Query",permalink:"/oodlib/docs/programming/css/media-querry"}},l={},s=[{value:"<code>Position</code> property",id:"position-property",level:2},{value:"<code>static</code>",id:"static",level:3},{value:"<code>fixed</code>",id:"fixed",level:3},{value:"<code>sticky</code>",id:"sticky",level:3}],c={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"position"},"position"),(0,i.kt)("h2",{id:"position-property"},(0,i.kt)("inlineCode",{parentName:"h2"},"Position")," property"),(0,i.kt)("h3",{id:"static"},(0,i.kt)("inlineCode",{parentName:"h3"},"static")),(0,i.kt)("p",null,"\uc815\uc801\uc778 \uc704\uce58. \ub300\ubd80\ubd84\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"tag"),"\uc758 \uae30\ubcf8 \uc124\uc815."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".fixed {\n  position: fixed;\n  top: 99px;\n  left: 155px;\n  background: pink;\n}\n")),(0,i.kt)("h3",{id:"fixed"},(0,i.kt)("inlineCode",{parentName:"h3"},"fixed")),(0,i.kt)("p",null,"\ubdf0\ud3ec\ud2b8\uc758 \ud2b9\uc815 \uc88c\ud45c\uc5d0 \uace0\uc815\ub418\uc5b4 \ud45c\ud604\ub428. ",(0,i.kt)("inlineCode",{parentName:"p"},"absolute")," \ub294 \ubd80\ubaa8 \uae30\uc900 \uace0\uc815\uc88c\ud45c.",(0,i.kt)("br",{parentName:"p"}),"\n","Whereas the position and dimensions of an element with ",(0,i.kt)("inlineCode",{parentName:"p"},"position:absolute")," are ",(0,i.kt)("strong",{parentName:"p"},"relative to its containing block"),", the position and dimensions of an element with ",(0,i.kt)("inlineCode",{parentName:"p"},"position:fixed")," are ",(0,i.kt)("strong",{parentName:"p"},"always relative to the initial containing block"),". This is ",(0,i.kt)("strong",{parentName:"p"},"normally the ",(0,i.kt)("inlineCode",{parentName:"strong"},"viewport")),": the browser window or the paper\u2019s page box"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".fixed {\n  position: fixed;\n  top: 99px;\n  left: 155px;\n  background: pink;\n}\n")),(0,i.kt)("h3",{id:"sticky"},(0,i.kt)("inlineCode",{parentName:"h3"},"sticky")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sticky")," \uc18d\uc131\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"static"),"\uacfc ",(0,i.kt)("inlineCode",{parentName:"p"},"fixed")," \uc18d\uc131\uc758 \ud2b9\uc9d5\uc744 \ubaa8\ub450 \uac00\uc9c0\uace0 \uc788\ub294 \uc18d\uc131.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"sticky")," \uc601\uc5ed\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," \ub610\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," \uc704\uce58\uac12\uc774 \uc124\uc815\ud55c \uc704\uce58\uc5d0 \ub3c4\ub2ec\ud558\uae30 \uc804\uae4c\uc9c0\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"static"),", \ub3c4\ub2ec \uc774\ud6c4\uc5d0\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"fixed"),"\ucc98\ub7fc \ud589\ub3d9."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"caution"),(0,i.kt)("br",{parentName:"p"}),"\n","' \ubd80\ubaa8 \ub610\ub294 \uc870\uc0c1 \ub178\ub4dc\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"overflow")," \uc18d\uc131\uc774 \uc124\uc815\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778 (",(0,i.kt)("inlineCode",{parentName:"p"},"hidden"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"scroll"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"auto")," \uc774\uba74 \uc548\ub428)",(0,i.kt)("br",{parentName:"p"}),"\n","' \ubd80\ubaa8 \ub178\ub4dc\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"height"),"\uac00 \uc124\uc815\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".sticky {\n  position: sticky;\n  top: 0;\n  background: #8a4baf;\n}\n")))}m.isMDXComponent=!0}}]);