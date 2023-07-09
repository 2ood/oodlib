"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[6644],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},v="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),v=c(n),s=o,d=v["".concat(p,".").concat(s)]||v[s]||m[s]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[v]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="0. virtualenv",l={unversionedId:"programming/python/virtualenv",id:"programming/python/virtualenv",title:"0. virtualenv",description:"\ud611\uc5c5\ud560 \ub54c, \uac01\uc790 \ub2e4 \ub2e4\ub978 \uac1c\ubc1c\ud658\uacbd\uc774 \uc788\uc744 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0,",source:"@site/docs/programming/python/0-virtualenv.md",sourceDirName:"programming/python",slug:"/programming/python/virtualenv",permalink:"/oodlib/docs/programming/python/virtualenv",draft:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/programming/python/0-virtualenv.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"python",permalink:"/oodlib/docs/programming/python/"},next:{title:"1. Class and Inheritance",permalink:"/oodlib/docs/programming/python/class-and-inheritance"}},p={},c=[],u={toc:c},v="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(v,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0-virtualenv"},"0. virtualenv"),(0,o.kt)("h1",{id:"virtualenv-\ub294-\uc65c-\ud544\uc694\ud55c\uac00"},"virtualenv \ub294 \uc65c \ud544\uc694\ud55c\uac00?"),(0,o.kt)("p",null,"\ud611\uc5c5\ud560 \ub54c, \uac01\uc790 \ub2e4 \ub2e4\ub978 \uac1c\ubc1c\ud658\uacbd\uc774 \uc788\uc744 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0,\npython \ubc84\uc804\uc744 \ube44\ub86f\ud55c parameter, module \ub4f1\uc744 \ud300 \uc548\uc5d0\uc11c \ud1b5\uc77c\ud560 \ud544\uc694\uac00 \uc788\ub2e4.\n\uc774\ub7f0 \ub3d9\uc758\ub41c \ud658\uacbd\uc744 virtualenv \ub85c \uc800\uc7a5\ud574\uc11c \uadf8 \uc548\uc5d0\uc11c \uac1c\ubc1c\ud558\ub294 \uac83\uc774\ub2e4. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"python -m venv .venv \n# project \ub514\ub809\ud130\ub9ac\uc5d0 .venv \uc228\uae40 \ud3f4\ub354\uac00 \uc0dd\uae40. \n# \uc774 \uc548\uc5d0 .venv/bin/activate \uba85\ub839\uc5b4\ub85c virtualenv\ub97c \ucf24 \uc218 \uc788\ub2e4. \n\n.venv/bin/activate\n#.venv \ucf1c\uae30\n\n(.venv) $ \n#\uc774\ub7f0 \uc2dd\uc73c\ub85c \ub72c\ub2e4. \uc5ec\uae30\uc11c \ub098\uac00\ub824\uba74\n(.venv) $ deactivate\n\n\n")))}m.isMDXComponent=!0}}]);