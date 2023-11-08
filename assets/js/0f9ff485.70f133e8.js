"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[2411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={},l=void 0,i={unversionedId:"lecture-notes/networks/2023-10-12",id:"lecture-notes/networks/2023-10-12",title:"2023-10-12",description:"Summary",source:"@site/docs/lecture-notes/networks/2023-10-12.md",sourceDirName:"lecture-notes/networks",slug:"/lecture-notes/networks/2023-10-12",permalink:"/oodlib/docs/lecture-notes/networks/2023-10-12",draft:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/lecture-notes/networks/2023-10-12.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2023-10-10",permalink:"/oodlib/docs/lecture-notes/networks/2023-10-10"},next:{title:"2023-10-17",permalink:"/oodlib/docs/lecture-notes/networks/2023-10-17"}},s={},u=[{value:"Network Management",id:"network-management",level:2},{value:"Components of Network Management",id:"components-of-network-management",level:2},{value:"Approaches to management",id:"approaches-to-management",level:2},{value:"CLI",id:"cli",level:3},{value:"SNMP/MIB",id:"snmpmib",level:3},{value:"Two Ways to Convey MIB info",id:"two-ways-to-convey-mib-info",level:2},{value:"SNMP Message types",id:"snmp-message-types",level:2},{value:"NETCONF/YANG",id:"netconfyang",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Summary"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"keywords"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"TODO"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"HW"),"\nFind out Network device makers (Routers, switches, servers)")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Exercise*")," ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Next time"),"\nChapter 6. (Not in midterm)")),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"recap"},"Recap"),(0,o.kt)("p",null,"Assignment 3.\nYou can use any socket libraries."),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"snmp--netconf"},"SNMP & NetConf"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We will learn how to build an application that manages devices in the network."),(0,o.kt)("li",{parentName:"ul"},"Under the hood of monitoring & configuration applications."),(0,o.kt)("li",{parentName:"ul"},"Application layer protocol.")),(0,o.kt)("h2",{id:"network-management"},"Network Management"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"realtime, fullfill quality of service, ....\n#todo : fill out")),(0,o.kt)("h2",{id:"components-of-network-management"},"Components of Network Management"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Managing Server : managing application is run here"),(0,o.kt)("li",{parentName:"ul"},"Managed devices : manageable, configurable hardware"),(0,o.kt)("li",{parentName:"ul"},"Data : data exchange of device state. device statistics"),(0,o.kt)("li",{parentName:"ul"},"Management Protocol")),(0,o.kt)("h2",{id:"approaches-to-management"},"Approaches to management"),(0,o.kt)("p",null,"CLI, SNMP/MIB, YANG"),(0,o.kt)("h3",{id:"cli"},"CLI"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ex. NMAP. mainly used for port scanning.")),(0,o.kt)("h3",{id:"snmpmib"},"SNMP/MIB"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"used for manage devices."),(0,o.kt)("li",{parentName:"ul"},"Simple network management protocol"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Standardized")," data exchange query and result."),(0,o.kt)("li",{parentName:"ul"},"The exchanged data is called ",(0,o.kt)("strong",{parentName:"li"},"MIB(Management Information Base)")," : written in the standards.")),(0,o.kt)("h2",{id:"two-ways-to-convey-mib-info"},"Two Ways to Convey MIB info"),(0,o.kt)("p",null,"request/response mode, trap mode\nmost of the times trap mode is prohibited( due to risk of malicious trap messages)"),(0,o.kt)("h2",{id:"snmp-message-types"},"SNMP Message types"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GetRequest"),(0,o.kt)("li",{parentName:"ul"},"GetNextRequest"),(0,o.kt)("li",{parentName:"ul"},"GetBulkRequest"),(0,o.kt)("li",{parentName:"ul"}),(0,o.kt)("li",{parentName:"ul"},"SetRequest"),(0,o.kt)("li",{parentName:"ul"},"Response"),(0,o.kt)("li",{parentName:"ul"},"Trap")),(0,o.kt)("p",null,"#todo : write about every functions."),(0,o.kt)("p",null,"Protocols means that there are some fields in the headers that describes some useful info.\nWhy do we need protocols?\nThere are so many companies that make different devices. It is impossible learn one by one how to communicate with each type of devices. Instead, we impose that"),(0,o.kt)("p",null,"vender-specific MIBS\nevery MIB object has ID, Name,  ...\nMIB is transferred over UDP"),(0,o.kt)("p",null,"#todo : write about MIB"),(0,o.kt)("h3",{id:"netconfyang"},"NETCONF/YANG"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"more focused on configuring devices."),(0,o.kt)("li",{parentName:"ul"},"The data modeling language of NetConf is YANG")),(0,o.kt)("p",null,"What are goals ? "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"actively manage / configure devices network wide. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"atomic-commit")," actions"),(0,o.kt)("li",{parentName:"ul"},"written in ",(0,o.kt)("strong",{parentName:"li"},"RPC"),"."),(0,o.kt)("li",{parentName:"ul"},"data is exchanged in XML encoded."),(0,o.kt)("li",{parentName:"ul"},"reliable transport protocol (TLS) is used")),(0,o.kt)("p",null,"NetConf can\nStandardization devekoio ed by IETF. It ensured consistent and interoperable configuarable\nAutomation : Netconf is suitable for automation and orchestration.\nYANG Data models: YANG data models describle the structure and semantics of configuration data"),(0,o.kt)("p",null,"Session initialtion call.\nRemote procedure call. & its reply\nSession clodes."),(0,o.kt)("p",null,"NETconf Operation\nGet-config\nget\nedit config;\n...\n#todo : fill out operations/"),(0,o.kt)("p",null,"MTU is packet size.."))}m.isMDXComponent=!0}}]);