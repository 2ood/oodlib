"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[4272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(n),k=l,d=m["".concat(i,".").concat(k)]||m[k]||s[k]||o;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=k;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[m]="string"==typeof e?e:l,r[1]=u;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const o={},r="7. Hooks",u={unversionedId:"programming/react-fundamentals/hooks",id:"programming/react-fundamentals/hooks",title:"7. Hooks",description:"recap : component \uc758 \uc885\ub958",source:"@site/docs/programming/react-fundamentals/7-hooks.md",sourceDirName:"programming/react-fundamentals",slug:"/programming/react-fundamentals/hooks",permalink:"/oodlib/docs/programming/react-fundamentals/hooks",draft:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/programming/react-fundamentals/7-hooks.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"6. State",permalink:"/oodlib/docs/programming/react-fundamentals/state"},next:{title:"8. Event Handling",permalink:"/oodlib/docs/programming/react-fundamentals/event-handling"}},i={},p=[{value:"recap : component \uc758 \uc885\ub958",id:"recap--component-\uc758-\uc885\ub958",level:2},{value:"Hook\uc774\ub780?",id:"hook\uc774\ub780",level:2},{value:"Hook\uc758 \uaddc\uce59",id:"hook\uc758-\uaddc\uce59",level:2},{value:"Hook \uc758 \uc885\ub958 \ubc0f \uc0ac\uc6a9\ub840",id:"hook-\uc758-\uc885\ub958-\ubc0f-\uc0ac\uc6a9\ub840",level:2},{value:"useState()",id:"usestate",level:3},{value:"useEffect()",id:"useeffect",level:3},{value:"side effect = \ud6a8\uacfc",id:"side-effect--\ud6a8\uacfc",level:4},{value:"<code>useMemo()</code>",id:"usememo",level:3},{value:"memoization",id:"memoization",level:4},{value:"memo \uc0dd\uc131\ud568\uc218",id:"memo-\uc0dd\uc131\ud568\uc218",level:4},{value:"<code>useCallback()</code>",id:"usecallback",level:3},{value:"<code>useRef()</code>",id:"useref",level:3},{value:"reference",id:"reference",level:4},{value:"Hook\uc758 \uaddc\uce59",id:"hook\uc758-\uaddc\uce59-1",level:2}],c={toc:p},m="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"7-hooks"},"7. Hooks"),(0,l.kt)("h1",{id:"react-vii-hooks"},"[React]"," VII. Hooks"),(0,l.kt)("h2",{id:"recap--component-\uc758-\uc885\ub958"},"recap : component \uc758 \uc885\ub958"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Function component"),(0,l.kt)("th",{parentName:"tr",align:null},"Class component"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"state \uc0ac\uc6a9 \ubd88\uac00"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc0dd\uc131\uc790\uc5d0\uc11c state \uc815\uc758")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"setState()\ud568\uc218\ub97c \ud1b5\ud574 state \uc5c5\ub370\uc774\ud2b8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lifecycle"),(0,l.kt)("td",{parentName:"tr",align:null},"Lifecycle\uc5d0 \ub530\ub978 \uae30\ub2a5\uad6c\ud604 \ubd88\uac00"),(0,l.kt)("td",{parentName:"tr",align:null},"lifecycle \uba54\uc11c\ub4dc \uc81c\uacf5")))),(0,l.kt)("h2",{id:"hook\uc774\ub780"},"Hook\uc774\ub780?"),(0,l.kt)("p",null,"function component\uac00 \uac00\uc9c0\ub294 \uad6c\ud604 \ubd88\uac00\ud55c \ubd80\ubd84\ub4e4\uc744 \uac00\ub2a5\ud558\uac8c \ud558\ub294 \ud568\uc218.\nstate\uc640 \uc0dd\uba85\uc8fc\uae30\uc5d0 \ub530\ub77c \ucf54\ub4dc\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uac8c \ud558\ub294 \ud568\uc218. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"state \uad00\ub828 \ud568\uc218"),(0,l.kt)("li",{parentName:"ul"},"lifecycle \uad00\ub828 \ud568\uc218"),(0,l.kt)("li",{parentName:"ul"},"\ucd5c\uc801\ud654 \uad00\ub828 \ud568\uc218")),(0,l.kt)("p",null,"\ud568\uc218 \uc774\ub984 \uc55e\uc5d0 use \ub97c \ubd99\uc5ec hook \ud568\uc218\uc784\uc744 \uba85\uc2dc\ud574\uc57c \ud568. "),(0,l.kt)("h2",{id:"hook\uc758-\uaddc\uce59"},"Hook\uc758 \uaddc\uce59"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\ucd5c\uc0c1\uc704 \ub808\ubca8\uc5d0\uc11c\ub9cc \ud638\ucd9c\ud574\uc57c \ud55c\ub2e4.\nif\ubb38\uc774\ub098 for\ubb38 \uc548\uc5d0 \ub123\uc9c0 \uc54a\ub294\ub2e4. ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\ub9ac\uc561\ud2b8 \ud568\uc218 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub9cc \ud638\ucd9c\ud574\uc57c \ud55c\ub2e4."))),(0,l.kt)("p",null,"\ucf54\ub4dc \ubd84\uc11d \ub3c4\uad6c. hook\uc774 \uc798\ubabb \uc0ac\uc6a9\ub418\uc5c8\uc744 \ub54c \uc54c\ub824\uc8fc\ub294 \ud50c\ub7ec\uadf8\uc778.\neslint-plugin-react-hooks"),(0,l.kt)("h2",{id:"hook-\uc758-\uc885\ub958-\ubc0f-\uc0ac\uc6a9\ub840"},"Hook \uc758 \uc885\ub958 \ubc0f \uc0ac\uc6a9\ub840"),(0,l.kt)("h3",{id:"usestate"},"useState()"),(0,l.kt)("p",null,"state\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c Hook.\n\ubc30\uc5f4\uc744 \ubc18\ud658\ud568.\n\ubcc0\uc218 \uac01\uac01\uc5d0 \ub300\ud574 set\ud568\uc218\uac00 \ub530\ub85c \uc874\uc7ac\ud55c\ub2e4. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const [\ubcc0\uc218\uba85, set\ud568\uc218\uba85] = useState(\ucd08\uae30\uac12);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, {useState} from "react";\n\nfunction Counter(props) {\n    const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>\ucd1d {count}\ubc88 \ud074\ub9ad\ud588\uc2b5\ub2c8\ub2e4. </p>\n      <button onClick={()=>setCount(count+1)}>click</button>\n    </div>\n    );\n}\n')),(0,l.kt)("h3",{id:"useeffect"},"useEffect()"),(0,l.kt)("p",null,"side effect\ub97c \uc218\ud589\ud558\uae30 \uc704\ud55c Hook. "),(0,l.kt)("h4",{id:"side-effect--\ud6a8\uacfc"},"side effect = \ud6a8\uacfc"),(0,l.kt)("p",null,"\ub2e4\ub978 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce60 \uc218 \uc788\ub294 \uac83\ub4e4.\n\ub80c\ub354\ub9c1\uc774 \ub05d\ub09c \uc774\ud6c4\uc5d0 \uc77c\uc5b4\ub098\uc57c \ud558\ub294 \uac83\ub4e4.\n\uc774\ub7f0 \uac83\ub4e4\uc774 side\uc5d0\uc11c \uc77c\uc5b4\ub098\uc57c \ud55c\ub2e4\ub294 \uc810\uc5d0\uc11c \uc774\ub984\uc5d0 side \uac00 \ubd99\uc74c. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uc0dd\uba85\uc8fc\uae30 \ud568\uc218\uc640 \ub3d9\uc77c\ud55c \uc77c\uc744 \uc2e4\ud589. ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"useEffect(\uc774\ud399\ud2b8 \ud568\uc218, \uc758\uc874\uc131 \ubc30\uc5f4);\n")),(0,l.kt)("p",null,"\uc758\uc874\uc131 \ubc30\uc5f4\uc5d0 \uc801\ud600\uc788\ub294 \ud30c\ub77c\ubbf8\ud130\ub4e4\uc774 \ud558\ub098\ub77c\ub3c4 \ubc14\ub00c\uba74 \uc774\ud399\ud2b8 \ud568\uc218\uac00 \uc2e4\ud589\ub428.\nmount, unmount\uc2dc\uc5d0\ub9cc \uc2e4\ud589\ub418\uac8c \ud558\ub824\uba74 \uc758\uc874\uc131 \ubc30\uc5f4\uc5d0 [] \ub123\uae30.\n\uc758\uc874\uc131 \ubc30\uc5f4 \uc0dd\ub7b5\ud558\uba74 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc5c5\ub370\uc774\ud2b8 \ub420 \ub54c\ub9c8\ub2e4 \uc2e4\ud589\ub428. "),(0,l.kt)("p",null,"useEffect\uc758 \uc774\ud399\ud2b8 \ud568\uc218\uac00 \ub9ac\ud134\ud558\ub294 \ud568\uc218\ub294 unmount\ub420 \ub54c \ud638\ucd9c\ub428. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, {useState, useEffect} from "react";\n\nfunction Counter(props) {\n    const [count, setCount] = useState(0);\n  \n    useEffect(\n      ()=>{ //\uc774\ud399\ud2b8 \ud568\uc218\n        document.title = `\ucd1d ${count}\ubc88 \ud074\ub9ad\ub428.`;\n        return ()=>{}; //unmount\uc2dc \uc2e4\ud589\ub418\ub294 \ud568\uc218\n      },\n      [count] //\uc758\uc874\uc131 \ubc30\uc5f4\n    );\n}\n')),(0,l.kt)("h3",{id:"usememo"},(0,l.kt)("inlineCode",{parentName:"h3"},"useMemo()")),(0,l.kt)("p",null,"Memoization \ud558\uae30 \uc704\ud55c Hook. "),(0,l.kt)("h4",{id:"memoization"},"memoization"),(0,l.kt)("p",null,"Memoization \uc774\ub780, \uacc4\uc0b0\ub7c9\uc774 \ub9ce\uc774 \ud544\uc694\ud55c \uac12\uc5d0 \ub300\ud574 '\uba54\ubaa8'\ud574\ub450\uace0 \uc800\uc7a5\ud574 \uc0ac\uc6a9\ud558\ub294 \uac83. => \ub80c\ub354\ub9c1 \uc18d\ub3c4 \ud5a5\uc0c1. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const memoizedValue = useMemo(memo \uc0dd\uc131 \ud568\uc218, \uc758\uc874\uc131 \ubc30\uc5f4);\n")),(0,l.kt)("h4",{id:"memo-\uc0dd\uc131\ud568\uc218"},"memo \uc0dd\uc131\ud568\uc218"),(0,l.kt)("p",null,"\uc5f0\uc0b0\ub7c9\uc774 \ub192\uc740 \uc791\uc5c5\uc744 \uc218\ud589\ud558\uc5ec \uacb0\uacfc\ub97c \ubc18\ud658.\n\uc758\uc874\uc131 \ubcc0\uc218\uac00 \ubcc0\ud588\uc744 \ub54c\uc5d0\ub9cc memo\uc0dd\uc131\ud568\uc218\uac00 \uc2e4\ud589\ub418\uba70, \uadf8\ub807\uc9c0 \uc54a\uc744 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"memoizedValue"),"\ub294 \uadf8\ub300\ub85c. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"memo \uc0dd\uc131\ud568\uc218\ub294 \ub80c\ub354\ub9c1\ud558\ub294 \ub3d9\uc548 \uac19\uc774 \uc2e4\ud589\ub428. "),"\n\ub80c\ub354\ub9c1\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uba74 \uc548\ub418\ub294 \uac83\ub4e4\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"useMemo()")," \ub300\uc2e0 ",(0,l.kt)("inlineCode",{parentName:"p"},"useEffect()"),"\uc5d0 \ub2f4\uc544\uc57c \ud568. ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc758\uc874\uc131 \ubc30\uc5f4 \uc0dd\ub7b5\ud560 \uacbd\uc6b0 \ub9e4 \ub80c\ub354\ub9c1\ub9c8\ub2e4 \uc2e4\ud589\ub428. ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc758\uc874\uc131 \ubc30\uc5f4\uc5d0 \ube48 \ubc30\uc5f4\uc744 \uc904 \uacbd\uc6b0 mount\uc2dc\uc5d0\ub9cc \uc2e4\ud589\ub428. "))),(0,l.kt)("h3",{id:"usecallback"},(0,l.kt)("inlineCode",{parentName:"h3"},"useCallback()")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useMemo()"),"\uc640 \ube44\uc2b7\ud558\uc9c0\ub9cc, \uac12 \ub300\uc2e0 \ud568\uc218\ub97c \ubc18\ud658\ud55c\ub2e4.\n\uc758\uc874\uc131 \ubcc0\uc218\uac00 \ubcc0\ud588\uc744 \ub54c \uc0c8\ub85c\uc6b4 \ud568\uc218\ub97c \uc815\uc758\ud574 \ubc18\ud658. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud568\uc218\uac00 \ub80c\ub354\ub9c1 \uac04\uc5d0 \uc7ac \ub79c\ub354\ub9c1 \ub420 \ud544\uc694 \uc5c6\uc744 \ub54c \uc720\uc6a9. => \ub80c\ub354\ub9c1 \uc18d\ub3c4 \ud5a5\uc0c1.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const memoizedCallback = useCallback(\n    ()=>{\n        doSomething(\uc758\uc874\uc131 \ubcc0\uc2181,...);\n    },\n  [\uc758\uc874\uc131 \ubcc0\uc2181, ...]\n);\n")),(0,l.kt)("p",null,"\uc544\ub798\ub294 \ub3d9\uc77c\ud55c \uc77c\uc744 \ud558\ub294 \ucf54\ub4dc."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"useCallback (\ud568\uc218, \uc758\uc874\uc131 \ubc30\uc5f4);\nuseMemo(()=>\ud568\uc218, \uc758\uc874\uc131 \ubc30\uc5f4);\n")),(0,l.kt)("h3",{id:"useref"},(0,l.kt)("inlineCode",{parentName:"h3"},"useRef()")),(0,l.kt)("p",null,"Reference \ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud558\ub294 hook"),(0,l.kt)("h4",{id:"reference"},"reference"),(0,l.kt)("p",null,"reference\ub780, \ud2b9\uc815 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uac8c \ud558\ub294 \uac1d\uccb4. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"reference object\uc5d0\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"current")," \ub77c\ub294 \uc18d\uc131\uc774 \uc788\ub2e4. \uc774\ub294 \ud604\uc7ac \ucc38\uc870\ud558\uace0 \uc788\ub294 element\ub97c \ub73b\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubcc0\uacbd\uac00\ub2a5\ud55c current \ub97c \uac00\uc9c4 \ud558\ub098\uc758 \uc0c1\uc790. "),(0,l.kt)("li",{parentName:"ul"},"reference object \uadf8 \uc790\uccb4\ub294 component lifetime \uc804\uccb4\uc5d0 \uac78\uccd0 \ubcc0\ud558\uc9c0 \uc54a\uc74c.\n\ub80c\ub354\ub9c1 \uac04\uc5d0 \uadf8 ref object  \uc790\uccb4\ub294 \uc7ac\uc0ac\uc6a9\ub428.\n\uadf8 \uc548\uc758 ",(0,l.kt)("inlineCode",{parentName:"li"},"current")," \uac12\uc774 \uacc4\uc18d \ubcc0\ud560 \uc218 \uc788\uc74c. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"current"),"\uc5d0 \ucc38\uc870\ub41c element\uac00 \ubcc0\uacbd\ub418\uc5b4\ub3c4 \ub80c\ub354\ub9c1\uc774 \ub2e4\uc2dc \uc77c\uc5b4\ub098\uac70\ub098 \ud558\uc9c0 \uc54a\ub294\ub2e4.  ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const refContainer = useRef(\ucd08\uae43\uac12);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'functioon TextInputWithFocusButton(props) {\n    const inputElem = useRef(null);\n  \n    const onButtonClick = () => {\n        inputElem.current.focus();  \n    };\n  \n  return (\n    <>\n      <input ref={inputElem} type="text"/>\n      <button onClick={onButtonClick}>\n        focus button\n      </button>\n    </>\n  );\n}\n')),(0,l.kt)("h2",{id:"hook\uc758-\uaddc\uce59-1"},"Hook\uc758 \uaddc\uce59"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\ucd5c\uc0c1\uc704 \ub808\ubca8\uc5d0\uc11c\ub9cc \ud638\ucd9c\ud574\uc57c \ud55c\ub2e4.\nif\ubb38\uc774\ub098 for\ubb38 \uc548\uc5d0 \ub123\uc9c0 \uc54a\ub294\ub2e4. ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\ub9ac\uc561\ud2b8 \ud568\uc218 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub9cc \ud638\ucd9c\ud574\uc57c \ud55c\ub2e4."))),(0,l.kt)("p",null,"\ucf54\ub4dc \ubd84\uc11d \ub3c4\uad6c. hook\uc774 \uc798\ubabb \uc0ac\uc6a9\ub418\uc5c8\uc744 \ub54c \uc54c\ub824\uc8fc\ub294 \ud50c\ub7ec\uadf8\uc778.\neslint-plugin-react-hooks"))}s.isMDXComponent=!0}}]);