"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[2462],{82949:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=s(74848),r=s(28453);const l={},t="Introduction",o={id:"lecture-notes/networks/2023-12-05",title:"Introduction",description:"Summary",source:"@site/docs/lecture-notes/networks/2023-12-05.md",sourceDirName:"lecture-notes/networks",slug:"/lecture-notes/networks/2023-12-05",permalink:"/oodlib/docs/lecture-notes/networks/2023-12-05",draft:!1,unlisted:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/lecture-notes/networks/2023-12-05.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/oodlib/docs/lecture-notes/networks/2023-11-30"},next:{title:"Socket Chat Communication",permalink:"/oodlib/docs/lecture-notes/networks/Socket Chat Communication"}},c={},d=[{value:"sidenote.",id:"sidenote",level:6},{value:"LAN",id:"lan",level:2},{value:"Link layer : services",id:"link-layer--services",level:2},{value:"ARP table.",id:"arp-table",level:2},{value:"Routing to another subnet",id:"routing-to-another-subnet",level:2},{value:"Ethernet frame structure",id:"ethernet-frame-structure",level:2},{value:"Switch",id:"switch",level:2}];function h(e){const n={blockquote:"blockquote",h1:"h1",h2:"h2",h6:"h6",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Summary"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"keywords"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"TODO"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"HW"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Exercise"}),"*"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Next time"})}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h1,{id:"link-layer",children:"Link layer"}),"\n",(0,i.jsx)(n.p,{children:"link layer is responsible for one and other physically adjacent nodes."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"multiple link layer protocols can be used in a network. ex. ethernet, wifi,.."}),"\n",(0,i.jsx)(n.li,{children:"No routing. only forwarding. only switching fabric."}),"\n",(0,i.jsx)(n.li,{children:"may or may not provide reliable data."}),"\n"]}),"\n",(0,i.jsx)(n.h6,{id:"sidenote",children:"sidenote."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"wireless links typically provides reliability. ex. error connection.."}),"\n",(0,i.jsx)(n.li,{children:"routers can have multiple ip, multiple MAC."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"lan",children:"LAN"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The network without involving a router."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"link-layer--services",children:"Link layer : services"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Framing, link access","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"encapsulate with header, trailer, making a frame."}),"\n",(0,i.jsx)(n.li,{children:"channel access if shared medium"}),"\n",(0,i.jsxs)(n.li,{children:["MAC address is always used to identify the source and destination ",(0,i.jsx)(n.strong,{children:"device"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["flow control","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"pacing between adjacent nodes."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["error detection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"receiver detects, signals retransmission, or drops frame."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"error correction"}),"\n",(0,i.jsxs)(n.li,{children:["half-duplex, full-duplex","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"half-duplex is like walkie talkie"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["multiple access protocols","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"avoiding collision between ...?"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"mac",children:"MAC"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["used ",(0,i.jsx)(n.strong,{children:"locally"})," to get frame from"]}),"\n",(0,i.jsx)(n.li,{children:"pretty much random. EXACT MATCHING."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"arp-table",children:"ARP table."}),"\n",(0,i.jsx)(n.p,{children:"mac-ip matching for the local area.\nusage of broadcast mac address. FF-FF-FF-FF-FF-FF"}),"\n",(0,i.jsx)(n.h2,{id:"routing-to-another-subnet",children:"Routing to another subnet"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A knows B's IP address (from DNS request)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A knows IP address of first hop router, R (from DHCP responses)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A knows R's MAC address (from ARP)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Sender sends with Router MAC destination."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Router will lookup the dest IP in the routing table, and find the MAC address of ethernet to go out."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Router will amend the MAC src to subnet2's router MAC"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"router will amend the MAC dest to destination device."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"When going out of the local network, you will type in the MAC dest as the first hop router."}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"ethernet",children:"Ethernet"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Buses separated with Layer-2 Switches to prevent collision."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Connection less."}),"\n",(0,i.jsx)(n.li,{children:"Unreliable"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ethernet-frame-structure",children:"Ethernet frame structure"}),"\n",(0,i.jsx)(n.p,{children:"preamble  : used for clock synchronizing\naddresses  :\ntype : L3 protocol\nCRC : cyclic redundancy check"}),"\n",(0,i.jsx)(n.h2,{id:"switch",children:"Switch"}),"\n",(0,i.jsx)(n.p,{children:"Link layer device."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"examine incoming frames AMC address, sometimes buffer, and forward frame."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"transparent : host unaware of the presence of switches"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"plug-and-play, self-learning tech."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Switch \uac00 \ub208\uce58 \uc798 \ubcf4\uace0 \ub2e8\uc11c \ucc3e\uc544\uc11c switch table \uc54c\uc544\uc11c \ub9cc\ub4ec. (flooding)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"switch table"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"switches-vs-routers",children:"Switches vs. Routers"})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var i=s(96540);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);