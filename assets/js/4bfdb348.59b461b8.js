"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[7428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),b=a,g=m["".concat(u,".").concat(b)]||m[b]||p[b]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="3. github features",l={unversionedId:"programming/git-fundamentals/github-features",id:"programming/git-fundamentals/github-features",title:"3. github features",description:"1. branch \ub780",source:"@site/docs/programming/git-fundamentals/3-github-features.md",sourceDirName:"programming/git-fundamentals",slug:"/programming/git-fundamentals/github-features",permalink:"/oodlib/docs/programming/git-fundamentals/github-features",draft:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/programming/git-fundamentals/3-github-features.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2. git commands",permalink:"/oodlib/docs/programming/git-fundamentals/git-commands"},next:{title:"HTML CSS JS",permalink:"/oodlib/docs/programming/html-css-js-fundamentals"}},u={},c=[{value:"1. branch \ub780",id:"1-branch-\ub780",level:2},{value:"2. issue",id:"2-issue",level:2}],s={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"3-github-features"},"3. github features"),(0,a.kt)("h1",{id:"github-features"},"Github features"),(0,a.kt)("h2",{id:"1-branch-\ub780"},"1. branch \ub780"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ucf54\ub4dc\uac00 \ucda9\ub3cc\ud558\ub294 \uac83\uc744 \ub9c9\uae30 \uc704\ud574 branch \ub77c\ub294 \uac1c\ub150 \uc0ac\uc6a9.")),(0,a.kt)("p",null,"main branch \ub97c \uadf8\ub300\ub85c \ubcf5\uc0ac\ud574\uc11c new-branch \ub97c \ub9cc\ub4e0\ub2e4.\nnew-branch \uc5d0\uc11c \uc791\uc5c5\ud560 \ucf54\ub4dc \uc218\uc815\uc744 \ud558\uace0\n\uadf8\uac83\uc774 \uc798 \ub3cc\uc544\uac00\ub294 \uac8c \uac80\uc99d\uc774 \ub418\uba74\nmain branch \uc5d0 pull request->merge \uc21c\uc11c\ub85c \uc5c5\ub370\uc774\ud2b8 \uc2dc\ud0a8\ub2e4. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git branch <new-branch-name>\n# local \uc5d0 branch \uc0dd\uc131\n\ngit checkout <new-branch-name>\n# \ud604\uc7ac \uc791\uc5c5 branch\ub97c <new-branch-name> \uc73c\ub85c \uac08\uc544\ud0c0\uae30.\n\ngit push\n# remote \uc5d0\ub3c4 branch \ub611\uac19\uc774 \uc0dd\uc131.\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git branch -d <branch-name>\n# local \uc5d0\uc11c \uc9c0\uc6b0\uace0 \uc2f6\uc740 \ube0c\ub79c\uce58 \uc9c0\uc6b0\uae30\n\ngit push origin --delete <branch-name>\n# remote \uc5d0\uc11c \uc9c0\uc6b0\uace0 \uc2f6\uc740 \ube0c\ub79c\uce58 \uc9c0\uc6b0\uae30\n")),(0,a.kt)("h2",{id:"2-issue"},"2. issue"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"github repo \ud398\uc774\uc9c0\uc5d0\uc11c issue \ud0ed\uc5d0\uc11c issue \ub97c \ubc1c\ud589\ud560 \uc218 \uc788\ub2e4. "),(0,a.kt)("li",{parentName:"ul"},"issue \ub294 \uac1c\ubc1c\ud558\uace0 \uc2f6\uc740 \ub0b4\uc6a9\uc774 \ub420 \uc218\ub3c4 \uc788\uace0, \uc218\uc815\ud574\uc57c \ud560 \ubc84\uadf8\uc77c \uc218\ub3c4 \uc788\ub2e4. "),(0,a.kt)("li",{parentName:"ul"},"\uac1c\ubc1c\ud560 \ub0b4\uc6a9\uc744 \uba3c\uc800 \uc120\uc5b8\ud558\ub294 \uac83.")))}p.isMDXComponent=!0}}]);