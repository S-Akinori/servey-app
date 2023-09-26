import{r as h,j as e,W as E,a as P,d as N}from"./app-6ac3aeac.js";import{A as $}from"./AuthenticatedLayout-6aeeecb9.js";import{b as v,R as F,F as f,a as g}from"./Box-f8e43fd8.js";import{B as x}from"./Button-8c262d59.js";import{g as L,s as M,u as O,b as B,_ as w,d as W,e as V,C as X}from"./Container-9f6ea268.js";import{F as q,P as G}from"./FormControl-f31724f6.js";import{g as H}from"./TransitionGroupContext-f01aaec7.js";import{T as I,a as J,b as y,c,d as K}from"./TableRow-5c3cbb8c.js";/* empty css            */import"./ApplicationLogo-ca8b33c4.js";import"./ResponsiveNavLink-18c3beec.js";import"./transition-42cf5332.js";import"./NavLink-24f71edd.js";import"./Typography-d1542c76.js";import"./extendSxProp-a3aa8409.js";import"./ButtonBase-dabcf4a2.js";import"./createSvgIcon-10c5e254.js";function z(t){return L("MuiTableContainer",t)}H("MuiTableContainer",["root"]);const Q=["className","component"],Y=t=>{const{classes:s}=t;return V({root:["root"]},z,s)},Z=M("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(t,s)=>s.root})({width:"100%",overflowX:"auto"}),D=h.forwardRef(function(s,d){const l=O({props:s,name:"MuiTableContainer"}),{className:i,component:u="div"}=l,p=B(l,Q),a=w({},l,{component:u}),j=Y(a);return e.jsx(Z,w({ref:d,as:u,className:W(j.root,i),ownerState:a},p))}),ee=D,T=(t,s)=>t===0?0:Math.floor(s*100/t);function Ce({auth:t,clientData:s,target:d="all",total:l,answerTotal:i}){console.log(s);const p=new URLSearchParams(window.location.search).get("user_id"),{data:a,setData:j,get:R,post:se}=E({target:d,user_id:p??""}),[C,_]=h.useState([]),[re,S]=h.useState([]);console.log(a),h.useEffect(()=>{const o=s.data.filter(r=>r.responses.length>=2),n=s.data.filter(r=>r.responses.length<2);_(o),S(n)},[]);const k=o=>{o.preventDefault(),console.log(a),R(route("dashboard",{target:a.target}))},A=()=>{var n;const o=(n=document==null?void 0:document.querySelector('meta[name="csrf-token"]'))==null?void 0:n.getAttribute("content");fetch(route("download"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":o||""},body:JSON.stringify(a)}).then(r=>r.blob()).then(r=>{const U=window.URL.createObjectURL(r),m=document.createElement("a");m.href=U,m.download=`${t.user.name}.csv`,document.body.appendChild(m),m.click(),document.body.removeChild(m)}).catch(r=>console.error("Error:",r))},b=o=>{const n={target:o.target.value};j(n)};return e.jsxs($,{user:t.user,header:e.jsx("h2",{className:"font-semibold leading-tight",children:t.user.name}),children:[e.jsx(P,{title:"クライアント管理者ダッシュボード"}),e.jsx(X,{className:"py-12",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"pb-12",children:e.jsx("div",{className:"flex justify-center max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"md:flex items-center px-4 mb-4",children:[e.jsx("div",{className:"md:pr-2 font-bold text-center",children:"回答状況"}),e.jsxs(v,{className:"text-center",children:[T(l,i)!==0?T(l,i):"-","%"]})]}),e.jsxs("div",{className:"md:flex items-center px-4 mb-4",children:[e.jsx("div",{className:"md:pr-2 font-bold text-center",children:"回答数"}),e.jsxs(v,{className:"text-center",children:[i,"名 / ",l,"名"]})]})]})})}),e.jsx("div",{className:"flex justify-center",children:e.jsx("form",{onSubmit:k,children:e.jsxs(q,{children:[e.jsxs(F,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",row:!0,children:[e.jsx(f,{value:"all",control:e.jsx(g,{onChange:b}),checked:a.target==="all",label:"全員"}),e.jsx(f,{value:"no-answer",control:e.jsx(g,{onChange:b}),checked:a.target==="no-answer",label:"未回答"}),e.jsx(f,{value:"answer",control:e.jsx(g,{onChange:b}),checked:a.target==="answer",label:"回答済"})]}),e.jsx("div",{className:"text-center",children:e.jsx(x,{children:"抽出"})})]})})}),e.jsx("div",{className:"mt-4",children:e.jsxs("div",{style:{maxWidth:"650px"},className:"mx-auto",children:[e.jsx(ee,{component:G,children:e.jsxs(I,{"aria-label":"simple table",children:[e.jsx(J,{children:e.jsxs(y,{children:[e.jsx(c,{children:"NO."}),e.jsx(c,{children:"従業員ID"}),e.jsx(c,{children:"回答状況"})]})}),e.jsx(K,{children:s&&s.data.map((o,n)=>e.jsxs(y,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(c,{scope:"row",children:s.from+n}),e.jsx(c,{children:o.client_id}),e.jsx(c,{className:C.some(r=>r.id===o.id)?"":"bg-main text-main-cont",children:C.some(r=>r.id===o.id)?"回答済":"未回答"})]},o.id))})]})}),e.jsxs("div",{className:"mt-4 flex justify-between",children:[(s==null?void 0:s.prev_page_url)&&e.jsx(x,{className:"mr-auto",children:e.jsx(N,{href:`/dashboard?target=${d}&page=${s.current_page-1}`,children:"前へ"})}),(s==null?void 0:s.next_page_url)&&e.jsx(x,{className:"ml-auto",children:e.jsx(N,{href:`/dashboard?target=${d}&page=${s.current_page+1}`,children:"次へ"})})]})]})}),e.jsx("div",{className:"mt-4 text-center",children:e.jsx(x,{onClick:A,children:"CSVダウンロード"})})]})})]})}export{Ce as default};
