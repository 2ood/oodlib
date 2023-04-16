"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[4053],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,v=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={},o="1. What is React?",i={unversionedId:"programming/react-fundamentals/what-is-react",id:"programming/react-fundamentals/what-is-react",title:"1. What is React?",description:"1. \ub9ac\uc561\ud2b8\uc758 \uc815\uc758",source:"@site/docs/programming/react-fundamentals/1-what-is-react.md",sourceDirName:"programming/react-fundamentals",slug:"/programming/react-fundamentals/what-is-react",permalink:"/oodlib/docs/programming/react-fundamentals/what-is-react",draft:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/programming/react-fundamentals/1-what-is-react.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"react-fundamentals",permalink:"/oodlib/docs/programming/react-fundamentals/"},next:{title:"2. React Practice",permalink:"/oodlib/docs/programming/react-fundamentals/react-practice"}},c={},u=[{value:"1. \ub9ac\uc561\ud2b8\uc758 \uc815\uc758",id:"1-\ub9ac\uc561\ud2b8\uc758-\uc815\uc758",level:2},{value:"1.1 \ub9ac\uc561\ud2b8\ub780?",id:"11-\ub9ac\uc561\ud2b8\ub780",level:3},{value:"\ub77c\uc774\ube0c\ub7ec\ub9ac?",id:"\ub77c\uc774\ube0c\ub7ec\ub9ac",level:4},{value:"\uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4?(UI)",id:"\uc0ac\uc6a9\uc790-\uc778\ud130\ud398\uc774\uc2a4ui",level:4},{value:"\ud504\ub808\uc784\uc6cc\ud06c vs. \ub77c\uc774\ube0c\ub7ec\ub9ac",id:"\ud504\ub808\uc784\uc6cc\ud06c-vs-\ub77c\uc774\ube0c\ub7ec\ub9ac",level:4},{value:"2. \ub9ac\uc561\ud2b8\uc758 \uc7a5\uc810",id:"2-\ub9ac\uc561\ud2b8\uc758-\uc7a5\uc810",level:2},{value:"1) \ube60\ub978 \uc5c5\ub370\uc774\ud2b8\uc640 \ub80c\ub354\ub9c1 \uc18d\ub3c4",id:"1-\ube60\ub978-\uc5c5\ub370\uc774\ud2b8\uc640-\ub80c\ub354\ub9c1-\uc18d\ub3c4",level:3},{value:"2) Component based",id:"2-component-based",level:3},{value:"3) \uc7ac\uc0ac\uc6a9\uc131 \ub192\uc74c",id:"3-\uc7ac\uc0ac\uc6a9\uc131-\ub192\uc74c",level:3},{value:"4) Meta\uac00 \uc2a4\ud3f0\uc11c.",id:"4-meta\uac00-\uc2a4\ud3f0\uc11c",level:3},{value:"5) \ud65c\ubc1c\ud55c \uc9c0\uc2dd \uacf5\uc720 in community",id:"5-\ud65c\ubc1c\ud55c-\uc9c0\uc2dd-\uacf5\uc720-in-community",level:3},{value:"6) React Native \ub85c \ub098\uc544\uac08 \uc218 \uc788\uc74c.",id:"6-react-native-\ub85c-\ub098\uc544\uac08-\uc218-\uc788\uc74c",level:3},{value:"3. \ub9ac\uc561\ud2b8\uc758 \ub2e8\uc810",id:"3-\ub9ac\uc561\ud2b8\uc758-\ub2e8\uc810",level:2},{value:"1) \ubc29\ub300\ud55c \ud559\uc2b5\ub7c9",id:"1-\ubc29\ub300\ud55c-\ud559\uc2b5\ub7c9",level:3},{value:"2) \ub192\uc740 \uc0c1\ud0dc\uad00\ub9ac \ubcf5\uc7a1\ub3c4",id:"2-\ub192\uc740-\uc0c1\ud0dc\uad00\ub9ac-\ubcf5\uc7a1\ub3c4",level:3}],p={toc:u},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-what-is-react"},"1. What is React?"),(0,a.kt)("h1",{id:"react-i-\ub9ac\uc561\ud2b8-\uc18c\uac1c---\ub9ac\uc561\ud2b8\uc758-\uc815\uc758-\uc7a5\ub2e8\uc810"},"[React]"," I. \ub9ac\uc561\ud2b8 \uc18c\uac1c - \ub9ac\uc561\ud2b8\uc758 \uc815\uc758, \uc7a5\ub2e8\uc810"),(0,a.kt)("h2",{id:"1-\ub9ac\uc561\ud2b8\uc758-\uc815\uc758"},"1. \ub9ac\uc561\ud2b8\uc758 \uc815\uc758"),(0,a.kt)("h3",{id:"11-\ub9ac\uc561\ud2b8\ub780"},"1.1 \ub9ac\uc561\ud2b8\ub780?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A javascript ",(0,a.kt)("strong",{parentName:"p"},"library")," for building ",(0,a.kt)("strong",{parentName:"p"},"user interfaces"))),(0,a.kt)("p",null,"\ub9ac\uc561\ud2b8\ub294 \ub300\ud45c\uc801\uc778 JS UI library \uc774\ub2e4. "),(0,a.kt)("h4",{id:"\ub77c\uc774\ube0c\ub7ec\ub9ac"},"\ub77c\uc774\ube0c\ub7ec\ub9ac?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud2b9\uc815 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc5d0\uc11c \uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\uae30\ub2a5\uc744 \uc815\ub9ac\ud574 \ubaa8\uc544\ub193\uc740")," \uac83.")),(0,a.kt)("p",null,"sidenote. \ub2e4\ub978 JS UI library\nAngular.js (\uacf5\uc2dd\uc9c0\uc6d0 \uc911\ub2e8), Vue.js (\uc624\ud508\uc18c\uc2a4 \ud504\ub85c\uc81d\ud2b8\ub85c \uc2dc\uc791\ud568)"),(0,a.kt)("h4",{id:"\uc0ac\uc6a9\uc790-\uc778\ud130\ud398\uc774\uc2a4ui"},"\uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4?(UI)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4\uc640 \uc0ac\uc6a9\uc790")," \uc0c1\ud638\uc791\uc6a9 \uac04\uc758 \uc785\ub825\uacfc \ucd9c\ub825\uc744 \uc81c\uc5b4\ud574\uc8fc\ub294 \uac83")),(0,a.kt)("h4",{id:"\ud504\ub808\uc784\uc6cc\ud06c-vs-\ub77c\uc774\ube0c\ub7ec\ub9ac"},"\ud504\ub808\uc784\uc6cc\ud06c vs. \ub77c\uc774\ube0c\ub7ec\ub9ac"),(0,a.kt)("p",null,"\ud504\ub808\uc784\uc6cc\ud06c\ub294 \ud504\ub85c\uadf8\ub7a8\uc758 \ud750\ub984\uc744 ",(0,a.kt)("strong",{parentName:"p"},"\ud504\ub808\uc784\uc6cc\ud06c\uac00")," \uac00\uc9c0\uace0 \uc788\ub2e4.\n\ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\uc120 \ud504\ub85c\uadf8\ub7a8\uc758 \ud750\ub984\uc744 ",(0,a.kt)("strong",{parentName:"p"},"\uac1c\ubc1c\uc790\uac00")," \uac00\uc9c0\uace0 \uc788\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"2-\ub9ac\uc561\ud2b8\uc758-\uc7a5\uc810"},"2. \ub9ac\uc561\ud2b8\uc758 \uc7a5\uc810"),(0,a.kt)("h3",{id:"1-\ube60\ub978-\uc5c5\ub370\uc774\ud2b8\uc640-\ub80c\ub354\ub9c1-\uc18d\ub3c4"},"1) \ube60\ub978 \uc5c5\ub370\uc774\ud2b8\uc640 \ub80c\ub354\ub9c1 \uc18d\ub3c4"),(0,a.kt)("p",null,"\ub0b4\ubd80\uc801\uc73c\ub85c virtual DOM \uc744 \uc0ac\uc6a9\ud568.\nDOM \uc774\ub780 Document object model\n\uc5c5\ub370\uc774\ud2b8 \ud574\uc57c\ud560 \ucd5c\uc18c \ubd80\ubd84\uc744 \ucc3e\uc544 \uadf8\uac83\ub9cc \ubc14\uafbc\ub2e4.\n",(0,a.kt)("a",{parentName:"p",href:"https://velog.io/@rdt419/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%A0%8C%EB%8D%94%EB%A7%81"},"see also - \ub9ac\uc561\ud2b8 \ub80c\ub354\ub9c1")),(0,a.kt)("h3",{id:"2-component-based"},"2) Component based"),(0,a.kt)("p",null,"\ub808\uace0 \ube14\ub7ed\uc744 \uc870\ub9bd\ud558\ub4ef \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc744 \uc313\uc544 \ub9cc\ub4ec."),(0,a.kt)("h3",{id:"3-\uc7ac\uc0ac\uc6a9\uc131-\ub192\uc74c"},"3) \uc7ac\uc0ac\uc6a9\uc131 \ub192\uc74c"),(0,a.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\ub294 \uc758\uc874\uc131, \ud638\ud658\uc131 \uad00\ub828\ud574 \uc720\ub9ac\ud568. \u261e \uc720\uc9c0\ubcf4\uc218\uac00 \uc6a9\uc774, \uac1c\ubc1c\uc774 \ube60\ub984."),(0,a.kt)("h3",{id:"4-meta\uac00-\uc2a4\ud3f0\uc11c"},"4) Meta\uac00 \uc2a4\ud3f0\uc11c."),(0,a.kt)("p",null,"\ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uac11\uc790\uae30 \uc0ac\ub77c\uc9c8 \uac71\uc815 \uc801\uc74c."),(0,a.kt)("h3",{id:"5-\ud65c\ubc1c\ud55c-\uc9c0\uc2dd-\uacf5\uc720-in-community"},"5) \ud65c\ubc1c\ud55c \uc9c0\uc2dd \uacf5\uc720 in community"),(0,a.kt)("h3",{id:"6-react-native-\ub85c-\ub098\uc544\uac08-\uc218-\uc788\uc74c"},"6) React Native \ub85c \ub098\uc544\uac08 \uc218 \uc788\uc74c."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"3-\ub9ac\uc561\ud2b8\uc758-\ub2e8\uc810"},"3. \ub9ac\uc561\ud2b8\uc758 \ub2e8\uc810"),(0,a.kt)("h3",{id:"1-\ubc29\ub300\ud55c-\ud559\uc2b5\ub7c9"},"1) \ubc29\ub300\ud55c \ud559\uc2b5\ub7c9"),(0,a.kt)("p",null,"\uc0c8\ub85c\uc6b4 \uac1c\ub150\ub4e4\uc774 \ub9ce\ub2e4. "),(0,a.kt)("h3",{id:"2-\ub192\uc740-\uc0c1\ud0dc\uad00\ub9ac-\ubcf5\uc7a1\ub3c4"},"2) \ub192\uc740 \uc0c1\ud0dc\uad00\ub9ac \ubcf5\uc7a1\ub3c4"),(0,a.kt)("p",null,"\ubcf5\uc7a1\ub3c4 \uad00\ub9ac\ub97c \uc704\ud574 \ub2e4\ub978 \ud234\ub3c4 \ubc30\uc6cc\uc57c \ud560\uc9c0\ub3c4."))}d.isMDXComponent=!0}}]);