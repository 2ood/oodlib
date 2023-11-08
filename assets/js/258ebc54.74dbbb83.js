"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[8235],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),g=a,b=p["".concat(u,".").concat(g)]||p[g]||m[g]||i;return r?n.createElement(b,o(o({ref:t},s),{},{components:r})):n.createElement(b,o({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},99035:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={},o="3. github features",c={unversionedId:"programming/git/github-features",id:"programming/git/github-features",title:"3. github features",description:"1. branch \ub780",source:"@site/docs/programming/git/3-github-features.md",sourceDirName:"programming/git",slug:"/programming/git/github-features",permalink:"/oodlib/docs/programming/git/github-features",draft:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/programming/git/3-github-features.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2. git commands",permalink:"/oodlib/docs/programming/git/git-commands"},next:{title:"4. Git strategy",permalink:"/oodlib/docs/programming/git/git-strategy"}},u={},l=[{value:"1. branch \ub780",id:"1-branch-\ub780",level:2},{value:"2. issue",id:"2-issue",level:2}],s={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"3-github-features"},"3. github features"),(0,a.kt)("h1",{id:"github-features"},"Github features"),(0,a.kt)("h2",{id:"1-branch-\ub780"},"1. branch \ub780"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ucf54\ub4dc\uac00 \ucda9\ub3cc\ud558\ub294 \uac83\uc744 \ub9c9\uae30 \uc704\ud574 branch \ub77c\ub294 \uac1c\ub150 \uc0ac\uc6a9.")),(0,a.kt)("p",null,"main branch \ub97c \uadf8\ub300\ub85c \ubcf5\uc0ac\ud574\uc11c new-branch \ub97c \ub9cc\ub4e0\ub2e4.\nnew-branch \uc5d0\uc11c \uc791\uc5c5\ud560 \ucf54\ub4dc \uc218\uc815\uc744 \ud558\uace0\n\uadf8\uac83\uc774 \uc798 \ub3cc\uc544\uac00\ub294 \uac8c \uac80\uc99d\uc774 \ub418\uba74\nmain branch \uc5d0 pull request->merge \uc21c\uc11c\ub85c \uc5c5\ub370\uc774\ud2b8 \uc2dc\ud0a8\ub2e4. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git branch <new-branch-name>\n# local \uc5d0 branch \uc0dd\uc131\n\ngit checkout <new-branch-name>\n# \ud604\uc7ac \uc791\uc5c5 branch\ub97c <new-branch-name> \uc73c\ub85c \uac08\uc544\ud0c0\uae30.\n\ngit push\n# remote \uc5d0\ub3c4 branch \ub611\uac19\uc774 \uc0dd\uc131.\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git branch -d <branch-name>\n# local \uc5d0\uc11c \uc9c0\uc6b0\uace0 \uc2f6\uc740 \ube0c\ub79c\uce58 \uc9c0\uc6b0\uae30\n\ngit push origin --delete <branch-name>\n# remote \uc5d0\uc11c \uc9c0\uc6b0\uace0 \uc2f6\uc740 \ube0c\ub79c\uce58 \uc9c0\uc6b0\uae30\n")),(0,a.kt)("h2",{id:"2-issue"},"2. issue"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"github repo \ud398\uc774\uc9c0\uc5d0\uc11c issue \ud0ed\uc5d0\uc11c issue \ub97c \ubc1c\ud589\ud560 \uc218 \uc788\ub2e4. "),(0,a.kt)("li",{parentName:"ul"},"issue \ub294 \uac1c\ubc1c\ud558\uace0 \uc2f6\uc740 \ub0b4\uc6a9\uc774 \ub420 \uc218\ub3c4 \uc788\uace0, \uc218\uc815\ud574\uc57c \ud560 \ubc84\uadf8\uc77c \uc218\ub3c4 \uc788\ub2e4. "),(0,a.kt)("li",{parentName:"ul"},"\uac1c\ubc1c\ud560 \ub0b4\uc6a9\uc744 \uba3c\uc800 \uc120\uc5b8\ud558\ub294 \uac83.")))}m.isMDXComponent=!0}}]);