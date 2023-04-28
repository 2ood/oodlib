"use strict";(self.webpackChunk_2_oodlib=self.webpackChunk_2_oodlib||[]).push([[6661],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(r),b=a,u=m["".concat(p,".").concat(b)]||m[b]||s[b]||l;return r?n.createElement(u,o(o({ref:t},d),{},{components:r})):n.createElement(u,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},169:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={},o="Table tag",i={unversionedId:"programming/html/table",id:"programming/html/table",title:"Table tag",description:"table tag - html",source:"@site/docs/programming/html/table.md",sourceDirName:"programming/html",slug:"/programming/html/table",permalink:"/oodlib/docs/programming/html/table",draft:!1,editUrl:"https://github.com/2ood/oodlib/blob/master/docs/programming/html/table.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"id and class",permalink:"/oodlib/docs/programming/html/id-and-class"},next:{title:"Infima",permalink:"/oodlib/docs/programming/infima"}},p={},c=[{value:"table tag - html",id:"table-tag---html",level:2},{value:"merge table cells [1]",id:"merge-table-cells-1",level:2},{value:"1) <code>colspan</code> attribute",id:"1-colspan-attribute",level:3},{value:"2) <code>rowspan</code> attribute",id:"2-rowspan-attribute",level:3},{value:"<code>rowspan</code>=0",id:"rowspan0",level:3}],d={toc:c},m="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"table-tag"},"Table tag"),(0,a.kt)("h2",{id:"table-tag---html"},"table tag - html"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<table>")," \ud14c\uc774\ube14\uc744 \ub9cc\ub4dc\ub294 \ud0dc\uadf8",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"<th>")," \ud14c\uc774\ube14\uc758 \ud5e4\ub354\ubd80\ubd84\uc744 \ub9cc\ub4dc\ub294 \ud0dc\uadf8",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"<tr>")," \ud14c\uc774\ube14\uc758 \ud589\uc744 \ub9cc\ub4dc\ub294 \ud0dc\uadf8",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"<td>")," \ud14c\uc774\ube14\uc758 \uc5f4\uc744 \ub9cc\ub4dc\ub294 \ud0dc\uadf8"),(0,a.kt)("h2",{id:"merge-table-cells-1"},"merge table cells ",(0,a.kt)("a",{parentName:"h2",href:"#References"},"[","1","]")),(0,a.kt)("h3",{id:"1-colspan-attribute"},"1) ",(0,a.kt)("inlineCode",{parentName:"h3"},"colspan")," attribute"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    <table>\n <tr>\n  <td colspan="2">&nbsp;</td>\n  <td>&nbsp;</td>\n </tr>\n <tr>\n  <td>&nbsp;</td>\n  <td>&nbsp;</td>\n  <td>&nbsp;</td>\n </tr>\n</table>\n')),(0,a.kt)("h3",{id:"2-rowspan-attribute"},"2) ",(0,a.kt)("inlineCode",{parentName:"h3"},"rowspan")," attribute"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<table>\n <tr>\n  <td rowspan="2">&nbsp;</td>\n  <td>&nbsp;</td>\n  <td>&nbsp;</td>\n </tr>\n <tr>\n  <td>&nbsp;</td>\n  <td>&nbsp;</td>\n </tr>\n</table>\n')),(0,a.kt)("h3",{id:"rowspan0"},(0,a.kt)("inlineCode",{parentName:"h3"},"rowspan"),"\\=0"),(0,a.kt)("p",null,"0\uc744 \uc4f0\uba74 \uc804\uccb4 \uc5f4 \uac2f\uc218, \ud589 \uac2f\uc218\uac00 \uc5b4\ub5bb\ub4e0 \uadf8 \ubc29\ud5a5\uc73c\ub85c \ub2e4 merge\ud55c \ud558\ub098\uc758 \uc140\uc774 \ub098\uc628\ub2e4."),(0,a.kt)("h1",{id:"references"},"References"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.computerhope.com/issues/ch001655.htm"},"[","1","]"," merge cells")))}s.isMDXComponent=!0}}]);