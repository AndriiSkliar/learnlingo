import{u as h,g as l,r as c,s as m,j as e,L as g,a as u}from"./index-bbad7de0.js";import{n as x}from"./index.browser-342e672c.js";const o="/learnlingo/assets/hero-c48fccf6.png",p="/learnlingo/assets/hero-3c2e4a83.webp",d="/learnlingo/assets/hero@2x-53e93180.png",_="/learnlingo/assets/hero@2x-7fe7ad6d.webp",j="_heroWrp_nmniq_13",f="_heroDesc_nmniq_31",T="_heroTitle_nmniq_43",q="_heroSmall_nmniq_63",L="_heroText_nmniq_75",N="_heroLink_nmniq_89",k="_heroImg_nmniq_125",v="_heroList_nmniq_133",w="_heroItem_nmniq_155",S="_heroTotal_nmniq_169",E="_heroBenefits_nmniq_183",s={heroWrp:j,heroDesc:f,heroTitle:T,heroSmall:q,heroText:L,heroLink:N,heroImg:k,heroList:v,heroItem:w,heroTotal:S,heroBenefits:E},D=()=>{const r=h(),n=l(u),a=[{value:"32,000 +",details:"Experienced tutors"},{value:"300,000 +",details:"5-star tutor reviews"},{value:"120 +",details:"Subjects taught"},{value:"200 +",details:"Tutor nationalities"}];return c.useEffect(()=>{n.onAuthStateChanged(t=>{t!==null&&r(m({name:t.displayName,email:t.email,id:t.uid,token:t.accessToken}))})},[n]),e.jsxs("main",{children:[e.jsxs("div",{className:s.heroWrp,children:[e.jsxs("div",{className:s.heroDesc,children:[e.jsxs("h1",{className:s.heroTitle,children:["Unlock your potential with the best ",e.jsx("span",{className:s.heroSmall,children:"language"})," tutors"]}),e.jsx("p",{className:s.heroText,children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),e.jsx(g,{className:s.heroLink,to:"/teachers",children:"Get started"})]}),e.jsx("div",{children:e.jsxs("picture",{children:[e.jsx("source",{type:"image/webp",srcSet:`${p} 1x, ${_} 2x`}),e.jsx("source",{type:"image/png",srcSet:`${o} 1x, ${d} 2x`}),e.jsx("img",{className:s.heroImg,srcSet:o,alt:"Girl with notebook"})]})})]}),e.jsx("ul",{className:s.heroList,children:a.map(({value:t,details:i})=>e.jsxs("li",{className:s.heroItem,children:[e.jsx("p",{className:s.heroTotal,children:t}),e.jsx("p",{className:s.heroBenefits,children:i})]},x()))})]})};export{D as default};
