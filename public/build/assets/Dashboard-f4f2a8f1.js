import{r as h,j as e,W as E,a as P,d as N}from"./app-ec29b8c1.js";import{A as $}from"./AuthenticatedLayout-a0d51579.js";import{b as v,R as F,F as f,a as g}from"./Box-52b38d9e.js";import{B as x}from"./Button-79fe1daa.js";import{g as L,s as M,u as O,b as B,_ as w,d as W,e as V,C as X}from"./Container-4a5d1875.js";import{F as q,P as G}from"./FormControl-41b13926.js";import{g as H}from"./TransitionGroupContext-7f872c7f.js";import{T as I,a as J,b as y,c as i,d as K}from"./TableRow-24521601.js";/* empty css            */import"./ApplicationLogo-9bb73585.js";import"./ResponsiveNavLink-e3b6276d.js";import"./transition-78d7f40c.js";import"./NavLink-4029a195.js";import"./Typography-156103e4.js";import"./extendSxProp-e63fe4c0.js";import"./ButtonBase-58a6b7e3.js";import"./createSvgIcon-337d054d.js";function z(t){return L("MuiTableContainer",t)}H("MuiTableContainer",["root"]);const Q=["className","component"],Y=t=>{const{classes:s}=t;return V({root:["root"]},z,s)},Z=M("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(t,s)=>s.root})({width:"100%",overflowX:"auto"}),D=h.forwardRef(function(s,d){const l=O({props:s,name:"MuiTableContainer"}),{className:c,component:u="div"}=l,p=B(l,Q),o=w({},l,{component:u}),j=Y(o);return e.jsx(Z,w({ref:d,as:u,className:W(j.root,c),ownerState:o},p))}),ee=D,T=(t,s)=>t===0?0:Math.floor(s*100/t);function Ce({auth:t,clientData:s,target:d="all",total:l,answerTotal:c}){console.log(s);const p=new URLSearchParams(window.location.search).get("user_id"),{data:o,setData:j,get:_,post:se}=E({target:d,user_id:p??""}),[C,R]=h.useState([]),[re,S]=h.useState([]);console.log(o),h.useEffect(()=>{const a=s.data.filter(r=>r.responses.length>=2),n=s.data.filter(r=>r.responses.length<2);R(a),S(n)},[]);const k=a=>{a.preventDefault(),console.log(o),_(route("dashboard",{target:o.target,user_id:o.user_id}))},A=()=>{var n;const a=(n=document==null?void 0:document.querySelector('meta[name="csrf-token"]'))==null?void 0:n.getAttribute("content");fetch(route("download"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":a||""},body:JSON.stringify(o)}).then(r=>r.blob()).then(r=>{const U=window.URL.createObjectURL(r),m=document.createElement("a");m.href=U,m.download=`${t.user.name}.csv`,document.body.appendChild(m),m.click(),document.body.removeChild(m)}).catch(r=>console.error("Error:",r))},b=a=>{const n={...o,target:a.target.value};j(n)};return e.jsxs($,{user:t.user,header:e.jsx("h2",{className:"font-semibold leading-tight",children:t.user.name}),children:[e.jsx(P,{title:"クライアント管理者ダッシュボード"}),e.jsx(X,{className:"py-12",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"pb-12",children:e.jsx("div",{className:"flex justify-center max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"md:flex items-center px-4 mb-4",children:[e.jsx("div",{className:"md:pr-2 font-bold text-center",children:"回答状況"}),e.jsxs(v,{className:"text-center",children:[T(l,c)!==0?T(l,c):"-","%"]})]}),e.jsxs("div",{className:"md:flex items-center px-4 mb-4",children:[e.jsx("div",{className:"md:pr-2 font-bold text-center",children:"回答数"}),e.jsxs(v,{className:"text-center",children:[c,"名 / ",l,"名"]})]})]})})}),e.jsx("div",{className:"flex justify-center",children:e.jsx("form",{onSubmit:k,children:e.jsxs(q,{children:[e.jsxs(F,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",row:!0,children:[e.jsx(f,{value:"all",control:e.jsx(g,{onChange:b}),checked:o.target==="all",label:"全員"}),e.jsx(f,{value:"no-answer",control:e.jsx(g,{onChange:b}),checked:o.target==="no-answer",label:"未回答"}),e.jsx(f,{value:"answer",control:e.jsx(g,{onChange:b}),checked:o.target==="answer",label:"回答済"})]}),e.jsx("div",{className:"text-center",children:e.jsx(x,{children:"抽出"})})]})})}),e.jsx("div",{className:"mt-4",children:e.jsxs("div",{style:{maxWidth:"650px"},className:"mx-auto",children:[e.jsx(ee,{component:G,children:e.jsxs(I,{"aria-label":"simple table",children:[e.jsx(J,{children:e.jsxs(y,{children:[e.jsx(i,{children:"NO."}),e.jsx(i,{children:"従業員ID"}),e.jsx(i,{children:"回答状況"})]})}),e.jsx(K,{children:s&&s.data.map((a,n)=>e.jsxs(y,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(i,{scope:"row",children:s.from+n}),e.jsx(i,{children:a.client_id}),e.jsx(i,{className:C.some(r=>r.id===a.id)?"":"bg-main text-main-cont",children:C.some(r=>r.id===a.id)?"回答済":"未回答"})]},a.id))})]})}),e.jsxs("div",{className:"mt-4 flex justify-between",children:[(s==null?void 0:s.prev_page_url)&&e.jsx(x,{className:"mr-auto",children:e.jsx(N,{href:`/dashboard?target=${d}&page=${s.current_page-1}`,children:"前へ"})}),(s==null?void 0:s.next_page_url)&&e.jsx(x,{className:"ml-auto",children:e.jsx(N,{href:`/dashboard?target=${d}&page=${s.current_page+1}`,children:"次へ"})})]})]})}),e.jsx("div",{className:"mt-4 text-center",children:e.jsx(x,{onClick:A,children:"CSVダウンロード"})})]})})]})}export{Ce as default};
