import{W as x,j as t,a as h}from"./app-b8dc23a7.js";import{B as j}from"./Button-9cf01481.js";import{A as f}from"./AdminAuthenticatedLayout-f86abf8a.js";import{I as l}from"./InputError-61155e2e.js";import{C as g}from"./Container-7c325ca1.js";import{T as n}from"./TextField-161cc261.js";/* empty css            */import"./ApplicationLogo-0418eaaf.js";import"./ResponsiveNavLink-f8a88509.js";import"./transition-34b5cd19.js";import"./NavLink-13097471.js";import"./TransitionGroupContext-6c132be5.js";import"./FormControl-4d95e1c6.js";import"./useFormControl-e47e028d.js";import"./useId-7b8e6e90.js";import"./Modal-9d89b654.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./createSvgIcon-5695bac9.js";function z({auth:d,survey:i}){var a,m;console.log(i);const{data:r,setData:s,post:p,processing:c,errors:o,reset:b}=x({title:"",description:""}),u=e=>{e.preventDefault(),console.log(r),p(route("admin.form.store",{survey_id:i.id}))};return t.jsxs(f,{user:d.user,header:t.jsxs("h2",{className:"font-semibold leading-tight",children:[(a=i.user)==null?void 0:a.company," | ",(m=i.user)==null?void 0:m.name," 様"]}),children:[t.jsx(h,{title:"新規フォーム作成"}),t.jsxs(g,{className:"py-12",children:[t.jsx("h2",{className:"mb-4",children:"新規フォーム作成"}),t.jsxs("form",{onSubmit:u,children:[t.jsxs("div",{className:"mb-4",children:[t.jsx(n,{id:"title",type:"text",name:"title",value:r.title,variant:"outlined",label:"タイトル",required:!0,onChange:e=>s("title",e.target.value),fullWidth:!0}),t.jsx(l,{message:o.title,className:"mt-2"})]}),t.jsxs("div",{className:"mb-4",children:[t.jsx(n,{id:"description",type:"text",name:"description",value:r.description,variant:"outlined",label:"説明文",onChange:e=>s("description",e.target.value),multiline:!0,rows:3,fullWidth:!0}),t.jsx(l,{message:o.description,className:"mt-2"})]}),t.jsx("div",{className:"text-center mt-4",children:t.jsx(j,{className:"ml-4",disabled:c,children:"フォームを登録し質問作成へ"})})]})]})]})}export{z as default};
