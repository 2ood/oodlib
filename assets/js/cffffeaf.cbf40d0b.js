"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[4194],{57273:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=i(74848),t=i(28453);const r={},l="Introduction",c={id:"lecture-notes/networks/2023-09-05",title:"Introduction",description:"Summary",source:"@site/docs/lecture-notes/networks/2023-09-05.md",sourceDirName:"lecture-notes/networks",slug:"/lecture-notes/networks/2023-09-05",permalink:"/oodlib/docs/lecture-notes/networks/2023-09-05",draft:!1,unlisted:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/lecture-notes/networks/2023-09-05.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/oodlib/docs/lecture-notes/networks/2023-08-31"},next:{title:"Introduction",permalink:"/oodlib/docs/lecture-notes/networks/2023-09-07"}},d={},o=[{value:"Access Networks : Digital Subscriber line(DSL)",id:"access-networks--digital-subscriber-linedsl",level:2},{value:"Packet switches",id:"packet-switches",level:2},{value:"Store-and Forward",id:"store-and-forward",level:2},{value:"Alternative to Packet Switching: circuit switching",id:"alternative-to-packet-switching-circuit-switching",level:2},{value:"Multiplexing techniques",id:"multiplexing-techniques",level:2},{value:"FDM",id:"fdm",level:3},{value:"TDM",id:"tdm",level:3},{value:"Delay, Packet loss, throughput",id:"delay-packet-loss-throughput",level:2},{value:"Delay",id:"delay",level:3},{value:"Packet queueing delay",id:"packet-queueing-delay",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Summary"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"keywords"}),"\npacket switching, delay, structure of internet, CDN,"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"TODO"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"HW"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Find the cable TV service providers(CATV) left in Korea"}),"\n",(0,s.jsx)(n.li,{children:"Find the internet service providers in GIST : KISTI"}),"\n",(0,s.jsx)(n.li,{}),"\n",(0,s.jsxs)(n.li,{children:["Content Service Providers owned by their own.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.spiceworks.com/tech/networking/articles/content-delivery-network-providers/",children:"https://www.spiceworks.com/tech/networking/articles/content-delivery-network-providers/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.techradar.com/news/best-cdn-providers",children:"https://www.techradar.com/news/best-cdn-providers"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"which city has the highest IXPs?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Exercise"}),"\nlink of problem examples on slide 1-37. packet switching vs. circuit switching\nCaravan analogy on slide 1-54."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Next time"})}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"recap",children:"Recap"}),"\n",(0,s.jsx)(n.h2,{id:"access-networks--digital-subscriber-linedsl",children:"Access Networks : Digital Subscriber line(DSL)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"replaced by fiber optics connections"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"packet-switches",children:"Packet switches"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"files are divided into chunks"}),"\n",(0,s.jsx)(n.li,{children:"chunks are padded with headers,  where it has info on destination & source"}),"\n",(0,s.jsx)(n.li,{children:"the core route & forward the packets."}),"\n",(0,s.jsx)(n.li,{children:"Routing algorithm tells us which packet from which subnet should be routed to which another core."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"store-and-forward",children:"Store-and Forward"}),"\n",(0,s.jsx)(n.p,{children:"not forwarded until the whole ENTIRE packet is ALL received.\nreceive AND THEN start forwarding."}),"\n",(0,s.jsx)(n.h2,{id:"alternative-to-packet-switching-circuit-switching",children:"Alternative to Packet Switching: circuit switching"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"call setup time."}),"\n",(0,s.jsx)(n.li,{children:"guarantees performance."}),"\n",(0,s.jsx)(n.li,{children:"circuit still reserved event if not used by call. idle state. not shared circuit."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"multiplexing-techniques",children:"Multiplexing techniques"}),"\n",(0,s.jsx)(n.h3,{id:"fdm",children:"FDM"}),"\n",(0,s.jsx)(n.p,{children:"allocated own band"}),"\n",(0,s.jsx)(n.h3,{id:"tdm",children:"TDM"}),"\n",(0,s.jsx)(n.p,{children:"allocated own time slot"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"packet-switching-vs-circuit-switching",children:"Packet Switching vs. Circuit Switching"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Packet switch"}),(0,s.jsx)(n.th,{children:"Circuit Switch"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"users max"}),(0,s.jsx)(n.td,{children:"can do more than 10"}),(0,s.jsx)(n.td,{children:"max. 10"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"probability of being 10 active"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"< 0.004"})}),(0,s.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"#todo 1: write about packet switching advantages"}),"\n",(0,s.jsx)(n.h1,{id:"structure-of-internet",children:"Structure of internet"}),"\n",(0,s.jsx)(n.p,{children:"![[../images/20230905134236.png]]"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"not contected one-by-one. It does not scale efficiently."}),"\n",(0,s.jsx)(n.li,{children:"ISPs connected to end access net."}),"\n",(0,s.jsx)(n.li,{}),"\n",(0,s.jsx)(n.li,{children:"ISP - IXP - ISP (exchanging through IXP)"}),"\n",(0,s.jsx)(n.li,{children:"ISP - ISP (peering link)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"IXP"}),"\nInternet exchange points, ususally under governement control"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"regional ISP"}),"\nuseful in efficiency in remote areas,"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tier-1 ISP"}),"\nnational & international coverage"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Content service providers"}),"\nprivate network that connects its data centers to Internet, often ",(0,s.jsx)(n.strong,{children:"bypassing"})," tier-1, regional ISPs"]}),"\n",(0,s.jsx)(n.p,{children:"![[../images/20230905134252.png]]"}),"\n",(0,s.jsx)(n.h2,{id:"delay-packet-loss-throughput",children:"Delay, Packet loss, throughput"}),"\n",(0,s.jsx)(n.h3,{id:"delay",children:"Delay"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"transmission delay"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["caused by ",(0,s.jsx)("u",{children:"bandwidth"})]}),"\n",(0,s.jsx)(n.li,{children:"about bandwidth, per one hop"}),"\n",(0,s.jsx)(n.li,{children:"*$L/R$ seconds to transmit $L$ bit packet into link at $R$ bps."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"propagation delay"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["caused by ",(0,s.jsx)("u",{children:"length of link"})]}),"\n",(0,s.jsx)(n.li,{children:"$d/s$ , where $d$ is length of physical link, $s$ is propagation speed(ex. light speed)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"queueing delay"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["caused by ",(0,s.jsx)("u",{children:"conjestions"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"packet loss"})," happens.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"when arrival rate exceeds transmission rate"}),"\n",(0,s.jsx)(n.li,{children:"because of memory"}),"\n",(0,s.jsx)(n.li,{children:"because of traffic."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"processing delay"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"time required to modify each packet"}),"\n",(0,s.jsx)(n.li,{children:"check errors, and do some other neccessary computations"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"packet-queueing-delay",children:"Packet queueing delay"}),"\n",(0,s.jsx)(n.p,{children:"it is not easy to compute queueing delay."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"$R$: link bandwidth (bps)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"$L$: packet length (bits)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"$a$: average packet arrival rate"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"*$La/R$ ~ 0: avg. queueing delay small"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"$La/R$ -> 1: avg. queueing delay large"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"$La/R$> 1: more \u201cwork\u201d arriving is more than can be serviced - average delay infinite!"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"![[../images/20230905135524.png]]"}),"\n",(0,s.jsx)(n.p,{children:"#todo: needs more analogies on traffics"}),"\n",(0,s.jsx)(n.h1,{id:"traceroute--command-to-trace-route",children:"Traceroute : command to trace route"}),"\n",(0,s.jsx)(n.p,{children:"![[../images/20230905140558.png]]"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"separate pings are sent for each hop device"}),"\n",(0,s.jsx)(n.li,{children:"3 delay measures"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"packet-loss",children:"Packet loss"}),"\n",(0,s.jsx)(n.p,{children:"#todo : fill out packet loss"}),"\n",(0,s.jsx)(n.h1,{id:"throughput",children:"Throughput"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["rate at which bits are being sent ",(0,s.jsx)(n.em,{children:"from sender to reciever (end-to-end)"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"determined by minimum bandwidth."}),"\n",(0,s.jsxs)(n.li,{children:["usually happens near the end user.\n",(0,s.jsx)(n.strong,{children:"bottleneck link"})," : link with minimum bandwidth."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"skip security."})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var s=i(96540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);