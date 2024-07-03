"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[4427],{87339:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=r(74848),t=r(28453);const s={},o=void 0,l={id:"lecture-notes/networks/2023-11-02",title:"2023-11-02",description:"Summary",source:"@site/docs/lecture-notes/networks/2023-11-02.md",sourceDirName:"lecture-notes/networks",slug:"/lecture-notes/networks/2023-11-02",permalink:"/oodlib/docs/lecture-notes/networks/2023-11-02",draft:!1,unlisted:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/lecture-notes/networks/2023-11-02.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2023-10-17",permalink:"/oodlib/docs/lecture-notes/networks/2023-10-17"},next:{title:"2023-11-07",permalink:"/oodlib/docs/lecture-notes/networks/2023-11-07"}},d={},c=[{value:"Forwarding",id:"forwarding",level:3},{value:"Two key network payer functions",id:"two-key-network-payer-functions",level:2},{value:"1) forwarding",id:"1-forwarding",level:3},{value:"2) routing",id:"2-routing",level:3},{value:"Data plane",id:"data-plane",level:2},{value:"Control plane",id:"control-plane",level:2},{value:"Network Service model",id:"network-service-model",level:2},{value:"Internet",id:"internet",level:3},{value:"Other Network Service models",id:"other-network-service-models",level:3},{value:"Why is best-effort service model is popular?",id:"why-is-best-effort-service-model-is-popular",level:2},{value:"What is inside the router?",id:"what-is-inside-the-router",level:2},{value:"input port",id:"input-port",level:3},{value:"Destination-based forwarding",id:"destination-based-forwarding",level:3},{value:"Longest prefix matching",id:"longest-prefix-matching",level:3},{value:"Switching Fabrics",id:"switching-fabrics",level:3}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Summary"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"keywords"}),"\nforwarding"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"TODO"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"HW"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Exercise"}),"*"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Next time"})}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h1,{id:"network-layer-data-plane",children:"Network Layer: data plane"}),"\n",(0,i.jsx)(n.p,{children:"Chapter 4 (data plane): forwarding, network layer model, how switches & router works, addressing, generalized forwarding, NAT, middleboxes\nChapter 5 (control plane):"}),"\n",(0,i.jsx)(n.p,{children:"What is inside a router\ninput ports, switching, output ports,"}),"\n",(0,i.jsx)(n.p,{children:"IP addresses."}),"\n",(0,i.jsx)(n.p,{children:"SDN : Software Defined Network.\nOpenflow"}),"\n",(0,i.jsx)(n.p,{children:"At network layer your header is called datagram."}),"\n",(0,i.jsx)(n.h3,{id:"forwarding",children:"Forwarding"}),"\n",(0,i.jsx)(n.p,{children:"Access point router will examine on network layer header.\nand moves the datagram from input port to output port."}),"\n",(0,i.jsx)(n.p,{children:"Network switches"}),"\n",(0,i.jsx)(n.h2,{id:"two-key-network-payer-functions",children:"Two key network payer functions"}),"\n",(0,i.jsx)(n.h3,{id:"1-forwarding",children:"1) forwarding"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"process of getting through an Interchange"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-routing",children:"2) routing"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"process of finding the trip routes."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"data-plane",children:"Data plane"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"local, per-router function"}),"\n",(0,i.jsx)(n.li,{children:"determines how datagram arriving at input port is forwarded to output port"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"control-plane",children:"Control plane"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"network wide logic."}),"\n",(0,i.jsx)(n.li,{children:"determines the forwarding table."}),"\n",(0,i.jsxs)(n.li,{children:["two ways","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"traditional vs. SDN"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"in traditional way, the cost between routers are shared among routers."}),"\n",(0,i.jsx)(n.li,{children:"In SDN, the Control ageents inside routers share information only with distributed controllers. routers don't need to talk each other."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"What is the benefit of SDN?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"easier for embedding new features."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"network-service-model",children:"Network Service model"}),"\n",(0,i.jsx)(n.p,{children:"What do we require to the service model of a network?"}),"\n",(0,i.jsx)(n.p,{children:"#todo : difference between network architecture, service"}),"\n",(0,i.jsx)(n.h3,{id:"internet",children:"Internet"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['"Internet" model is ',(0,i.jsx)(n.strong,{children:"best effort"})," service model of this time."]}),"\n",(0,i.jsxs)(n.li,{children:["It ",(0,i.jsx)(n.strong,{children:"doesn't do any guarantee"})," of Quality of Service (throughput, loss, ordering, delay)."]}),"\n",(0,i.jsx)(n.li,{children:"Those properties are guaranteed on TCP, a transport layer."}),"\n",(0,i.jsx)(n.li,{children:"Core is simple, and all the complicated logic is done at the edge."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"other-network-service-models",children:"Other Network Service models"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ATM architecture,,,,,"}),"\n",(0,i.jsx)(n.li,{children:"They are not popular because of too much overhead."}),"\n",(0,i.jsx)(n.li,{children:"There are some other service models with Internet architechture. to implement, the routers  configuration is needed."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"why-is-best-effort-service-model-is-popular",children:"Why is best-effort service model is popular?"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"simplicity of mechanism"}),"\n",(0,i.jsx)(n.li,{children:"easy to extend the network."}),"\n",(0,i.jsx)(n.li,{children:"we have enough bandwidth for current traffic, and good enough performance."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"what-is-inside-the-router",children:"What is inside the router?"}),"\n",(0,i.jsx)(n.p,{children:"router has input ports, high-speed switching fabric, routing processor, output ports.\n#todo : add image of the router"}),"\n",(0,i.jsx)(n.p,{children:"in high-speed switching fabric, all logic is embedded in hardware level."}),"\n",(0,i.jsx)(n.h3,{id:"input-port",children:"input port"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"read the 0,1,0,1 coming from the line termination."}),"\n",(0,i.jsx)(n.li,{children:"comprehend the link layer protocol"}),"\n",(0,i.jsx)(n.li,{children:"lookup in input port memory"}),"\n",(0,i.jsxs)(n.li,{children:["and forward to the output port through the right switch fabric\nThis is called ",(0,i.jsx)(n.strong,{children:"decentralized switching"}),".\nThis forwarding should be completed at line speed. Otherwise, queueing happens inside."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Destination based forwarding"})," : forward only based on destination IP address (prefix matching). Simple and affordable."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"generalized forwarding(SDN)"})," : it compares many other header fields for priority, for firewall, ...complicated and expensive."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"destination-based-forwarding",children:"Destination-based forwarding"}),"\n",(0,i.jsx)(n.p,{children:"#todo : add example forwarding images."}),"\n",(0,i.jsxs)(n.p,{children:["It is range-based. It is based on the ",(0,i.jsx)(n.strong,{children:"longest prefix matching"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"longest-prefix-matching",children:"Longest prefix matching"}),"\n",(0,i.jsx)(n.p,{children:"to catch up the line speed, specialized hardware, named TCAMs, is used.\nTCAM is a memory space with come computational circuitry. can do in one clock cycle.\nTCAMs is content addressable."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"</prefix matching>"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"</switching>"})}),"\n",(0,i.jsx)(n.h3,{id:"switching-fabrics",children:"Switching Fabrics"}),"\n",(0,i.jsx)(n.p,{children:"switch rate : N input ports, S line speed = N*S switch rate\nThree major types of switching fabrics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"memory"}),"\n",(0,i.jsx)(n.li,{children:"bus"}),"\n",(0,i.jsx)(n.li,{children:"interconnected fabric"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Memory"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"speed limited by memory bandwidth."}),"\n",(0,i.jsx)(n.li,{children:"2 bus crossings per datagram."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var i=r(96540);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);