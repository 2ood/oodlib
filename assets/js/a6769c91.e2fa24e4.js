"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[9944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,m=c["".concat(s,".").concat(d)]||c[d]||k[d]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},l="Introduction",i={unversionedId:"lecture-notes/networks/2023-09-12",id:"lecture-notes/networks/2023-09-12",title:"Introduction",description:"Summary",source:"@site/docs/lecture-notes/networks/2023-09-12.md",sourceDirName:"lecture-notes/networks",slug:"/lecture-notes/networks/2023-09-12",permalink:"/oodlib/docs/lecture-notes/networks/2023-09-12",draft:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/lecture-notes/networks/2023-09-12.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/oodlib/docs/lecture-notes/networks/2023-09-07"},next:{title:"Introduction",permalink:"/oodlib/docs/lecture-notes/networks/2023-09-14"}},s={},p=[{value:"Client-Server paradigm",id:"client-server-paradigm",level:2},{value:"Peer-to-Peer paradigm",id:"peer-to-peer-paradigm",level:2},{value:"What is a Process?",id:"what-is-a-process",level:2},{value:"Socket",id:"socket",level:2},{value:"How do you identify the socket?",id:"how-do-you-identify-the-socket",level:2},{value:"Protocol defines..",id:"protocol-defines",level:2},{value:"Open Protocols",id:"open-protocols",level:2},{value:"Transport service",id:"transport-service",level:2},{value:"Properties of TCP &amp; UDP",id:"properties-of-tcp--udp",level:2},{value:"Securing TCP",id:"securing-tcp",level:2},{value:"HTTP",id:"http",level:2}],u={toc:p},c="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Summary"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"keywords"),"\narchitecture, socket, protocols, criteria in choosing protocols, TCP, UDP")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"TODO"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"HW"),"\nWhat is the default port number of HTTPS?")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Exercise*")," ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Next time"),"\nHTTP request messages.")),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"recap"},"Recap"),(0,o.kt)("p",null,"Application layer"),(0,o.kt)("h1",{id:"paradigms-of-network-apps"},"Paradigms of network apps"),(0,o.kt)("h2",{id:"client-server-paradigm"},"Client-Server paradigm"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Server "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Always on host"),(0,o.kt)("li",{parentName:"ul"},"permanent IP address"),(0,o.kt)("li",{parentName:"ul"},"need to think about scaling, security."),(0,o.kt)("li",{parentName:"ul"},"Could be hosting on standalone, or on data center"),(0,o.kt)("li",{parentName:"ul"},"Data center hosting is superior in scaling and security."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Clients"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"maybe intermittently connected."),(0,o.kt)("li",{parentName:"ul"},"could be dynamic IP address. (DHCP)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DO NOT")," communicate direct with each other. ")))),(0,o.kt)("p",null,"Protocols in Client-Server paradigm\n: HTTP, IMAP, FTP"),(0,o.kt)("h2",{id:"peer-to-peer-paradigm"},"Peer-to-Peer paradigm"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Every device is server, and a client."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"no always-on server."),(0,o.kt)("li",{parentName:"ul"},"peers request service from other peers, provide service in return. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Self scalability")," : new peers bring new service capacity, along with the demands."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"complex. ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We'll only focus on Client-server paradigms & HTTP. ")),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"process-communicating"},"Process Communicating"),(0,o.kt)("h2",{id:"what-is-a-process"},"What is a Process?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"program running within a host")),(0,o.kt)("p",null,"Client process, server process\ninter-process communications : process (hosted in different devices) communicating by exchanging data."),(0,o.kt)("h2",{id:"socket"},"Socket"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Points where two things are connected.")),(0,o.kt)("h2",{id:"how-do-you-identify-the-socket"},"How do you identify the socket?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"IP + Port")),(0,o.kt)("p",null,"By IP address (device) + Port (process inside the device)\nex. http servers run on port 80, https servers run on port 443"),(0,o.kt)("p",null,"Analogy. Envelope.\nFamily members share a same home address (IP), and we have a name (port)"),(0,o.kt)("p",null,"UDP socket, TCP socket."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Google didn't like any of the transport layer.\nSo they made QUIC(Quick UDP Internet Connections)")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A browser (also) runs on a prot number")),(0,o.kt)("h2",{id:"protocol-defines"},"Protocol defines.."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Types of messages (Res, Req)"),(0,o.kt)("li",{parentName:"ul"},"message syntax (How fields are delineated)"),(0,o.kt)("li",{parentName:"ul"},"message semantics (meaning of info)"),(0,o.kt)("li",{parentName:"ul"},"rules (when and how processes send & respond to messages)")),(0,o.kt)("h2",{id:"open-protocols"},"Open Protocols"),(0,o.kt)("p",null,"defined in RFCs, everyone can read and use\nallows for interoperability\nex, HTTP, SMTP"),(0,o.kt)("p",null,"There also are (not-open) proprietary protocols."),(0,o.kt)("h2",{id:"transport-service"},"Transport service"),(0,o.kt)("p",null,"What criteria should we care when ",(0,o.kt)("strong",{parentName:"p"},"choosing")," transport service for an application??"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"* data integrity (making sure the files are completely transferred)\n    * Okay if you can tolerate the data loss (Ex. audio format file)\n* timing (low delay)\n    * Okay if the service is not live-streaming\n* throughput (bandwidth of edge..)\n    * Okay if service is elastic.\n")),(0,o.kt)("p",null,"![","[../images/20230912135617.png]","]"),(0,o.kt)("h2",{id:"properties-of-tcp--udp"},"Properties of TCP & UDP"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"TCP"),(0,o.kt)("th",{parentName:"tr",align:null},"UDP"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"transport reliability"),(0,o.kt)("td",{parentName:"tr",align:null},"Y"),(0,o.kt)("td",{parentName:"tr",align:null},"N")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"flow control"),(0,o.kt)("td",{parentName:"tr",align:null},"Y"),(0,o.kt)("td",{parentName:"tr",align:null},"N")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Conjestion control"),(0,o.kt)("td",{parentName:"tr",align:null},"Y"),(0,o.kt)("td",{parentName:"tr",align:null},"N")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"connection-oriented")),(0,o.kt)("td",{parentName:"tr",align:null},"Y"),(0,o.kt)("td",{parentName:"tr",align:null},"N")))),(0,o.kt)("p",null,"TCP Do not provide:\ndepends on the bandwidth. Cannot change throughput by itself.\ntiming, minimum throughput guarantee, security"),(0,o.kt)("p",null,"UDP Do not provide :\nreliability, flow control, congestion, control, timeing, throughput guarantee, security, connection setup.."),(0,o.kt)("p",null,"throughput is not guarantee by any Protocols in this Internet.\nSecurity is not supported by TCP & UDP\nTCP cares about lost packets. UDP doesn't.\nTCP is connection-oriented. We should open and close a connection."),(0,o.kt)("p",null,"Q. Why use UDP?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"UDP is much faster. Header is smaller.")," less overhead.")),(0,o.kt)("p",null,"![","[../images/20230912135815.png]","]"),(0,o.kt)("h2",{id:"securing-tcp"},"Securing TCP"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TCP, UDP has no encryption"),(0,o.kt)("li",{parentName:"ul"},"cleartext. human-readable.")),(0,o.kt)("p",null,"We use TLS (Transport Layer Security, Originally called SSL)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"* There are TLS libraries you can use in application layer. \n")),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"web-http"},"Web, HTTP"),(0,o.kt)("p",null,'The idea is "Sending meaningful objects through internet"'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"URL : includes information about the target device & what you want")),(0,o.kt)("h2",{id:"http"},"HTTP"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Hypertext transfer protocol")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"application layer protocol")),(0,o.kt)("li",{parentName:"ul"},"browser is the interpreter(of the HTTP packets) + displayer(of the object).")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"HTTP uses TCP"),".\n",(0,o.kt)("strong",{parentName:"p"},"HTTP is stateless.")," : state information is implemented by cookies.\n",(0,o.kt)("strong",{parentName:"p"},"HTTP nowadays (HTTP 1.1) are Persistent.")," : 1 connection can be used for multiple objects sending. before closed. You choose how long, how many.")),(0,o.kt)("p",null,"Non-persistent HTTP has high RTT (round trip time)\n#todo : problems of Non-persistent HTTP"))}k.isMDXComponent=!0}}]);