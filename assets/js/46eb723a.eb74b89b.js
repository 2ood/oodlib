"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[7312],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),v=a,d=m["".concat(p,".").concat(v)]||m[v]||s[v]||o;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=v;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},4173:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={},i="0. virtualenv",l={unversionedId:"programming/python-fundamentals/virtualenv",id:"programming/python-fundamentals/virtualenv",title:"0. virtualenv",description:"\ud611\uc5c5\ud560 \ub54c, \uac01\uc790 \ub2e4 \ub2e4\ub978 \uac1c\ubc1c\ud658\uacbd\uc774 \uc788\uc744 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0,",source:"@site/docs/programming/python-fundamentals/0-virtualenv.md",sourceDirName:"programming/python-fundamentals",slug:"/programming/python-fundamentals/virtualenv",permalink:"/oodlib/docs/programming/python-fundamentals/virtualenv",draft:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/programming/python-fundamentals/0-virtualenv.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"python fundamentals",permalink:"/oodlib/docs/programming/python-fundamentals/"},next:{title:"1. Class and Inheritance",permalink:"/oodlib/docs/programming/python-fundamentals/class-and-inheritance"}},p={},c=[],u={toc:c},m="wrapper";function s(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0-virtualenv"},"0. virtualenv"),(0,a.kt)("h1",{id:"virtualenv-\ub294-\uc65c-\ud544\uc694\ud55c\uac00"},"virtualenv \ub294 \uc65c \ud544\uc694\ud55c\uac00?"),(0,a.kt)("p",null,"\ud611\uc5c5\ud560 \ub54c, \uac01\uc790 \ub2e4 \ub2e4\ub978 \uac1c\ubc1c\ud658\uacbd\uc774 \uc788\uc744 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0,\npython \ubc84\uc804\uc744 \ube44\ub86f\ud55c parameter, module \ub4f1\uc744 \ud300 \uc548\uc5d0\uc11c \ud1b5\uc77c\ud560 \ud544\uc694\uac00 \uc788\ub2e4.\n\uc774\ub7f0 \ub3d9\uc758\ub41c \ud658\uacbd\uc744 virtualenv \ub85c \uc800\uc7a5\ud574\uc11c \uadf8 \uc548\uc5d0\uc11c \uac1c\ubc1c\ud558\ub294 \uac83\uc774\ub2e4. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"python -m venv .venv \n# project \ub514\ub809\ud130\ub9ac\uc5d0 .venv \uc228\uae40 \ud3f4\ub354\uac00 \uc0dd\uae40. \n# \uc774 \uc548\uc5d0 .venv/bin/activate \uba85\ub839\uc5b4\ub85c virtualenv\ub97c \ucf24 \uc218 \uc788\ub2e4. \n\n.venv/bin/activate\n#.venv \ucf1c\uae30\n\n(.venv) $ \n#\uc774\ub7f0 \uc2dd\uc73c\ub85c \ub72c\ub2e4. \uc5ec\uae30\uc11c \ub098\uac00\ub824\uba74\n(.venv) $ deactivate\n\n\n")))}s.isMDXComponent=!0}}]);