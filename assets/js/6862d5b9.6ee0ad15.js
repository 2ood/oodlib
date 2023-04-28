"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[2113],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=l,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},811:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(7462),l=(a(7294),a(3905));const n={},i="php",o={unversionedId:"programming/php",id:"programming/php",title:"php",description:"2021-01-06",source:"@site/docs/programming/php.md",sourceDirName:"programming",slug:"/programming/php",permalink:"/oodlib/docs/programming/php",draft:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/programming/php.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pause Giant AI experiments",permalink:"/oodlib/docs/programming/pause-giant-ai-experiments"},next:{title:"python",permalink:"/oodlib/docs/programming/python/"}},s={},p=[{value:"Today, I learned : PHP tutorials",id:"today-i-learned--php-tutorials",level:2},{value:"0. PHP",id:"0-php",level:3},{value:"1) echo statement",id:"1-echo-statement",level:4},{value:"2) PHP properties",id:"2-php-properties",level:4},{value:"1. variable rules",id:"1-variable-rules",level:3},{value:"2. special variable properties",id:"2-special-variable-properties",level:3},{value:"1)double-dollar ($$)",id:"1double-dollar-",level:4},{value:"1.special Variables",id:"1special-variables",level:2},{value:"2. Array Definintion",id:"2-array-definintion",level:2},{value:"3. execution passage",id:"3-execution-passage",level:2},{value:"4. call by reference",id:"4-call-by-reference",level:2},{value:"5. parameter default value",id:"5-parameter-default-value",level:2},{value:"6. Associative Array &amp; traversing",id:"6-associative-array--traversing",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"php"},"php"),(0,l.kt)("p",null,"2021-01-06 "),(0,l.kt)("h2",{id:"today-i-learned--php-tutorials"},"Today, I learned : PHP tutorials"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Bookmark : ",(0,l.kt)("a",{parentName:"p",href:"https://www.javatpoint.com/php-magic-constants"},"javaTpoint (magic-constants)")," / ",(0,l.kt)("a",{parentName:"p",href:"https://www.tutorialspoint.com/php/index.html"},"tutorialsPoint (intro)"))),(0,l.kt)("html",null,(0,l.kt)("hr",null)),(0,l.kt)("h3",{id:"0-php"},"0. PHP"),(0,l.kt)("h4",{id:"1-echo-statement"},"1) echo statement"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"can have multiple input variables, separated by comma(,)s.")),(0,l.kt)("h4",{id:"2-php-properties"},"2) PHP properties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"interpreted language")," (don't need compilers and such)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"faster")," than other scripting languages"),(0,l.kt)("li",{parentName:"ul"},"can be ",(0,l.kt)("strong",{parentName:"li"},"embedded")," into HTML."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"object-oriented"),"."),(0,l.kt)("li",{parentName:"ul"},"can create ",(0,l.kt)("strong",{parentName:"li"},"sessions"),"."),(0,l.kt)("li",{parentName:"ul"},"can ",(0,l.kt)("strong",{parentName:"li"},"access / set cookies"),"."),(0,l.kt)("li",{parentName:"ul"},"PHP is a ",(0,l.kt)("strong",{parentName:"li"},"secure language")," to develop the website. It consists of multiple layers of security to prevent threads and malicious attacks.")),(0,l.kt)("html",null,(0,l.kt)("hr",null)),(0,l.kt)("h3",{id:"1-variable-rules"},"1. variable rules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"variable name starts with alphabet or underscore(_)."),(0,l.kt)("li",{parentName:"ul"},"variable name is case-sensitive.\n",(0,l.kt)("img",{src:a(4601).Z,width:"1700",height:"768"})),(0,l.kt)("li",{parentName:"ul"},"variable name starts with $ sign. constants doesn't.\n",(0,l.kt)("img",{src:a(9082).Z,width:"1092",height:"552"})),(0,l.kt)("li",{parentName:"ul"},"static variable is stored dynamically and used globally.\n",(0,l.kt)("img",{src:a(5782).Z,width:"1530",height:"1032"}))),(0,l.kt)("html",null,(0,l.kt)("hr",null)),(0,l.kt)("h3",{id:"2-special-variable-properties"},"2. special variable properties"),(0,l.kt)("h4",{id:"1double-dollar-"},"1)double-dollar ($$)"),(0,l.kt)("p",null,"PHP supports variable name as a variable.\n",(0,l.kt)("img",{src:a(3171).Z,width:"1092",height:"804"})),(0,l.kt)("hr",null),"2021.01.07",(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"bookmark : ",(0,l.kt)("a",{href:"https://www.javatpoint.com/php-form",target:"_blank"},"javatpoint-phpForm"))),(0,l.kt)("h2",{id:"1special-variables"},"1.special Variables"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"special variable starts and ends with double underscore(__)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"case insensitive.")),(0,l.kt)("li",{parentName:"ul"},"resolved at compile-time.")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(2030).Z,width:"1160",height:"804"})),(0,l.kt)("h2",{id:"2-array-definintion"},"2. Array Definintion"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(7955).Z,width:"1548",height:"588"})),(0,l.kt)("h2",{id:"3-execution-passage"},"3. execution passage"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"wrap the shell code with ","`"," ",(0,l.kt)("strong",{parentName:"li"},'(shft+"~").'))),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(1401).Z,width:"924",height:"408"})),(0,l.kt)("p",null,"result : root"),(0,l.kt)("h2",{id:"4-call-by-reference"},"4. call by reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"put ",(0,l.kt)("strong",{parentName:"li"},"ampersand(&)")," before the variable name.")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(9944).Z,width:"1716",height:"660"})),(0,l.kt)("p",null,"result : Hello Call By Reference"),(0,l.kt)("h2",{id:"5-parameter-default-value"},"5. parameter default value"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(2758).Z,width:"1464",height:"588"})),(0,l.kt)("p",null,"result : Hello Rajesh Hello Sonoo Hello John"),(0,l.kt)("h2",{id:"6-associative-array--traversing"},"6. Associative Array & traversing"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(7933).Z,width:"1632",height:"624"}),"\nresult :\nKey: Sonoo Value: 550000\nKey: Vimal Value: 250000\nKey: Ratan Value: 200000"))}u.isMDXComponent=!0},9082:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/images_2ood_post_20bc6008-c3c1-434d-9672-7cec86465198_image-9c6f829a435df7d4b98f52a1b3df10dd.png"},9944:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/images_2ood_post_71682c72-81ac-4bbe-bfe3-02669723ae5a_image-e8a1aa7236427ea87cf2488106ec2470.png"},5782:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/images_2ood_post_76bf8ae0-f570-431e-b988-284a29899ff4_image-0cf09f2070a3bf1737e72fa5f309ec99.png"},3171:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/images_2ood_post_9164cc17-7525-4c4a-95e7-50e1a5b8130d_image-958e9f7e8c7f1e68fbeb790a6791b3bf.png"},1401:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/images_2ood_post_ab774c7f-9b87-4ff9-97e9-7a149d005225_image-dc6c10b63a48d5069562af0abb93d041.png"},7955:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/images_2ood_post_c2da604e-c94d-4fb3-b2ed-a9a5ad80a1c0_image-e20ffb139cd041148de14818145bf51d.png"},2758:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/images_2ood_post_c9d8be12-a1ae-4df3-ae04-9d10a12e36ca_image-5059165068d6de8721ae7232dd2aec95.png"},7933:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/images_2ood_post_cdbe520d-3897-4691-b167-5bf27142195a_image-1c0410acfa619d1dce0f1903893c664b.png"},4601:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/images_2ood_post_d75ce67a-80da-412a-b807-867e06271150_image-42f438ad5b001fd623a472f948913559.png"},2030:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/images_2ood_post_e77bc0b3-75de-445b-80fe-4d5a2dd6efde_image-57c0222c6f4d475e29fc90fdbf6e254b.png"}}]);