"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[883],{65987:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(74848),r=t(28453);const o={},s="Introduction",c={id:"lecture-notes/digital_design/2024-03-20",title:"Introduction",description:"Summary",source:"@site/docs/lecture-notes/digital_design/2024-03-20.md",sourceDirName:"lecture-notes/digital_design",slug:"/lecture-notes/digital_design/2024-03-20",permalink:"/oodlib/docs/lecture-notes/digital_design/2024-03-20",draft:!1,unlisted:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/lecture-notes/digital_design/2024-03-20.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/oodlib/docs/lecture-notes/digital_design/2024-03-18"},next:{title:"Introduction",permalink:"/oodlib/docs/lecture-notes/digital_design/2024-04-08"}},d={},l=[{value:"Axiom Simplification",id:"axiom-simplification",level:2},{value:"Which circuit is better?",id:"which-circuit-is-better",level:2},{value:"module creation",id:"module-creation",level:2},{value:"main module",id:"main-module",level:2},{value:"To run with Icarus Verilog",id:"to-run-with-icarus-verilog",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Summary"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"keywords"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"TODO"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"HW"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Exercise"}),"*"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Next time"})}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"axiom-simplification",children:"Axiom Simplification"}),"\n",(0,i.jsx)(n.h2,{id:"which-circuit-is-better",children:"Which circuit is better?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Informality"}),"\n",(0,i.jsx)(n.li,{children:"data propagation - concerns because of heat."}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"verilog",children:"Verilog"}),"\n",(0,i.jsx)(n.h2,{id:"module-creation",children:"module creation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-verilog",children:"module circuit1(y,x);\n\tinput [7:0] x; output [7:0] y;\n\twire w1, w2;\n\n\tnot G1(w1, x[0:0]); //first argument is output, others are inputs.\n\tor G2(w2, x[2:2],w1);\n\tand G3(y[0:0],w2,x[1:1]);\nendmodule\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(61094).A+"",width:"621",height:"147"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"(recommended) gate declaring convention : write the wiring in the order of direction input to output."}),"\n",(0,i.jsx)(n.li,{children:"(recommended) define input and then output."}),"\n",(0,i.jsxs)(n.li,{children:["there are pre-defined operation keywords, such as ",(0,i.jsx)(n.code,{children:"not"}),",",(0,i.jsx)(n.code,{children:"or"}),", ",(0,i.jsx)(n.code,{children:"and"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["module is a function. keyword ",(0,i.jsx)(n.code,{children:"module"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"[7:0] x"})," means that the array of input needs 0 to 7, with ",(0,i.jsx)(n.code,{children:"xxxxxabc"})," for each index.(x is don't-care notation)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"[startbit:endbit]"}),", with ",(0,i.jsx)(n.code,{children:"endbit-startbit+1"})," bit size.\nThe following exactly expresses the same thing as the gate definition on the previous code."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-verilog",children:"always @(*) begin\n\tcase(x)\n\t\t2,6,7: y[0:0] =1'b1;\n\t\tdefault y[0:0]=1'b0;\n\tendcase\nend\n"})}),"\n",(0,i.jsx)(n.h2,{id:"main-module",children:"main module"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-verilog",children:'module circuit1(y,x);\n\tinput [7:0] x; output [7:0] y;\n\twire w1, w2;\n\n\tnot G1(w1, x[0:0]); //first argument is output, others are inputs.\n\tor G2(w2, x[2:2],w1);\n\tand G3(y[0:0],w2,x[1:1]);\nendmodule\n\nmodule main();\n\tinteger i;\n\treg [7:0] x; //register. variable that can be changed. mutatable.\n\twire [7:0] y; \n\tcircuit1 c1(y,x); //instantiating a circuit but not calling the circuit.\n\n\tinitial begin\n\t\t$display("%4s  ","time x2 x1 x0 y0");\n\t\t// generate output whenever a mutable data is changed.\n\n\t\t$monitor("%4t  %2b %2b %2b %2b", $time, x[2:2],x[1:1],x[0:0],y[0:0]);\n\t\t//this is generating a truth table for this circuit1.\n\t\t\n\t\tfor(i=0;i<(2**3);i=i+1)\n\t\t\tbegin\n\t\t\t\tx=i; //take i as an integer, and convert it to binary array.\n\t\t\t\t#1;\n\t\t\tend\n\t\t$finish;\n\tend\nendmodule\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"signal : 0,1 value. cannot take two states at the same time."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$"})," sign stands for a macro function. ",(0,i.jsx)(n.code,{children:"$display"})," stands for ",(0,i.jsx)(n.code,{children:"printf"})," in c."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"#"})," sign stands for operator of delaying time. ",(0,i.jsx)(n.code,{children:"#1"})," means to delay time by 1 time step."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"to-run-with-icarus-verilog",children:"To run with Icarus Verilog"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"iverilog -o file.vcd file.vl\nvvp file.vcd\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},61094:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/20240320132247-f0d2e045104049cbdbd27af0b2e743b8.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(96540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);