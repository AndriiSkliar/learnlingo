import{r as t,q as l,e as h,o as u,b as f,c as y,d as M,f as S,j as s,h as L}from"./index-bbad7de0.js";import{T as E}from"./TeachersCard-86e9d3d9.js";import{n as F}from"./index.browser-342e672c.js";const N="_cardsList_1eam9_1",b="_cardsItem_1eam9_23",I="_cardsLoadMoreBtn_1eam9_49",m={cardsList:N,cardsItem:b,cardsLoadMoreBtn:I},T=()=>{const[e,_]=t.useState([]),[r,x]=t.useState(4),[p,g]=t.useState(!0),a=e.length,o=4;t.useEffect(()=>{i()},[]);const i=async()=>{const c=l(f(L),u(),h(String(r))),j=l(f(L),u(),y(String(r)),h(String(r+o))),B=a>0?j:c;try{M(B,n=>{const d=[];n.forEach(D=>{d.push(D.val())}),_([...e,...d]),x(a+o),d.length<o&&a>0&&g(!1)})}catch(n){S(n.message)}};return s.jsxs(s.Fragment,{children:[a>0&&s.jsx("ul",{className:m.cardsList,children:e.map(c=>s.jsx("li",{className:m.cardsItem,children:s.jsx(E,{card:c})},F()))}),p&&a>0&&s.jsx("button",{className:m.cardsLoadMoreBtn,onClick:i,children:"Load more"})]})},q="_main_eshpo_1",C={main:q},k=()=>s.jsx("main",{className:C.main,children:s.jsx(T,{})});export{k as default};
