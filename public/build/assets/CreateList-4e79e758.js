import{r as N,j as i,R as T,W as U,a as D,d as H}from"./app-b8dc23a7.js";import{A}from"./AuthenticatedLayout-06fbe2fb.js";import{r as F,i as q}from"./createSvgIcon-3980a17c.js";import{g as G,s as I,r as J,c as l,_ as t,a as y,I as K,u as Q,b as X,d as S,e as Y,C as Z}from"./Container-7c325ca1.js";import{T as w,a as oo,b as C,c,d as ao}from"./TableRow-20b06139.js";import{g as io}from"./TransitionGroupContext-6c132be5.js";import{B as ro}from"./ButtonBase-a930a20d.js";import{M as no}from"./Modal-9d89b654.js";import{B as so}from"./Box-cb148aaf.js";/* empty css            */import"./ApplicationLogo-0418eaaf.js";import"./ResponsiveNavLink-f8a88509.js";import"./transition-34b5cd19.js";import"./NavLink-13097471.js";import"./createSvgIcon-5695bac9.js";import"./debounce-517eeb3c.js";import"./createChainedFunction-0bab83cf.js";import"./useId-7b8e6e90.js";import"./extendSxProp-f56e59dc.js";function eo(o){return G("MuiButton",o)}const to=io("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),z=to,lo=N.createContext({}),co=lo,po=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],uo=o=>{const{color:a,disableElevation:r,fullWidth:s,size:e,variant:n,classes:u}=o,x={root:["root",n,`${n}${l(a)}`,`size${l(e)}`,`${n}Size${l(e)}`,a==="inherit"&&"colorInherit",r&&"disableElevation",s&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${l(e)}`],endIcon:["endIcon",`iconSize${l(e)}`]},d=Y(x,eo,u);return t({},u,d)},W=o=>t({},o.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},o.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},o.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),xo=I(ro,{shouldForwardProp:o=>J(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.root,a[r.variant],a[`${r.variant}${l(r.color)}`],a[`size${l(r.size)}`],a[`${r.variant}Size${l(r.size)}`],r.color==="inherit"&&a.colorInherit,r.disableElevation&&a.disableElevation,r.fullWidth&&a.fullWidth]}})(({theme:o,ownerState:a})=>{var r,s;const e=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],n=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return t({},o.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":t({textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:y(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="text"&&a.color!=="inherit"&&{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:y(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="outlined"&&a.color!=="inherit"&&{border:`1px solid ${(o.vars||o).palette[a.color].main}`,backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:y(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="contained"&&{backgroundColor:o.vars?o.vars.palette.Button.inheritContainedHoverBg:n,boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2],backgroundColor:(o.vars||o).palette.grey[300]}},a.variant==="contained"&&a.color!=="inherit"&&{backgroundColor:(o.vars||o).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[a.color].main}}),"&:active":t({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[8]}),[`&.${z.focusVisible}`]:t({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[6]}),[`&.${z.disabled}`]:t({color:(o.vars||o).palette.action.disabled},a.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},a.variant==="contained"&&{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground})},a.variant==="text"&&{padding:"6px 8px"},a.variant==="text"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main},a.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},a.variant==="outlined"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main,border:o.vars?`1px solid rgba(${o.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${y(o.palette[a.color].main,.5)}`},a.variant==="contained"&&{color:o.vars?o.vars.palette.text.primary:(r=(s=o.palette).getContrastText)==null?void 0:r.call(s,o.palette.grey[300]),backgroundColor:o.vars?o.vars.palette.Button.inheritContainedBg:e,boxShadow:(o.vars||o).shadows[2]},a.variant==="contained"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].contrastText,backgroundColor:(o.vars||o).palette[a.color].main},a.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},a.size==="small"&&a.variant==="text"&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="text"&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="outlined"&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="outlined"&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="contained"&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="contained"&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})},({ownerState:o})=>o.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${z.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${z.disabled}`]:{boxShadow:"none"}}),vo=I("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.startIcon,a[`iconSize${l(r.size)}`]]}})(({ownerState:o})=>t({display:"inherit",marginRight:8,marginLeft:-4},o.size==="small"&&{marginLeft:-2},W(o))),bo=I("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.endIcon,a[`iconSize${l(r.size)}`]]}})(({ownerState:o})=>t({display:"inherit",marginRight:-4,marginLeft:8},o.size==="small"&&{marginRight:-2},W(o))),go=N.forwardRef(function(a,r){const s=N.useContext(co),e=K(s,a),n=Q({props:e,name:"MuiButton"}),{children:u,color:x="primary",component:d="button",className:E,disabled:$=!1,disableElevation:B=!1,disableFocusRipple:p=!1,endIcon:g,focusVisibleClassName:f,fullWidth:R=!1,size:h="medium",startIcon:m,type:M,variant:_="text"}=n,L=X(n,po),j=t({},n,{color:x,component:d,disabled:$,disableElevation:B,disableFocusRipple:p,fullWidth:R,size:h,type:M,variant:_}),v=uo(j),O=m&&i.jsx(vo,{className:v.startIcon,ownerState:j,children:m}),V=g&&i.jsx(bo,{className:v.endIcon,ownerState:j,children:g});return i.jsxs(xo,t({ownerState:j,className:S(s.className,v.root,E),component:d,disabled:$,focusRipple:!p,focusVisibleClassName:S(v.focusVisible,f),ref:r,type:M},L,{classes:v,children:[O,u,V]}))}),b=go;var k={},fo=q;Object.defineProperty(k,"__esModule",{value:!0});var P=k.default=void 0,ho=fo(F()),mo=i,jo=(0,ho.default)((0,mo.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");P=k.default=jo;const yo=I("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;function Do({auth:o}){var f;const[a,r]=T.useState(!1),[s,e]=T.useState(null),{data:n,setData:u,post:x,processing:d,errors:E,reset:$}=U({file:null}),B=R=>{const h=R.currentTarget.files;if(h===null)return;const m=h[0];u("file",m),r(!0)},p=()=>{r(!1),e(null)};async function g(){if(!n.file){e("error");return}x(route("upload"))}return i.jsxs(A,{user:o.user,header:i.jsx("h2",{className:"font-semibold leading-tight",children:o.user.name}),children:[i.jsx(D,{title:"従業員リスト登録"}),i.jsxs(Z,{className:"py-12",children:[i.jsx("h2",{className:"mb-4",children:"従業員リスト(csv)をアップロードしてください。"}),i.jsxs("div",{className:"mb-8",children:[i.jsx("p",{className:"mb-4",children:"以下のような形式のcsvファイルをアップロードしてください。"}),i.jsxs(w,{"aria-label":"simple table",sx:{width:400},children:[i.jsx(oo,{children:i.jsxs(C,{children:[i.jsx(c,{className:"bg-gray-300"}),i.jsx(c,{className:"bg-gray-300",children:"A"})]})}),i.jsxs(ao,{children:[i.jsxs(C,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[i.jsx(c,{scope:"row",className:"bg-gray-300",children:"1"}),i.jsx(c,{children:"ID"})]}),i.jsxs(C,{children:[i.jsx(c,{scope:"row",className:"bg-gray-300",children:"2"}),i.jsx(c,{children:"R0151000"})]}),i.jsxs(C,{children:[i.jsx(c,{scope:"row",className:"bg-gray-300",children:"3"}),i.jsx(c,{children:"R0151001"})]})]})]})]}),i.jsxs(b,{component:"label",variant:"contained",startIcon:i.jsx(P,{}),href:"#file-upload",children:["アップロード",i.jsx(yo,{onChange:B,type:"file",accept:".csv,.txt"})]})]}),i.jsx(no,{open:a,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",className:"flex justify-center items-center",children:i.jsxs(so,{className:"p-4 bg-white",sx:{background:"#fcfcfc"},children:[s===null&&i.jsxs("div",{children:[i.jsxs("h2",{children:["「",(f=n.file)==null?void 0:f.name,"」をアップロードしますか？"]}),i.jsxs("div",{className:"mt-4 flex justify-end",children:[i.jsx("div",{className:"pr-4",children:i.jsx(b,{variant:"contained",onClick:g,disabled:d,children:"アップロード"})}),i.jsx("div",{children:i.jsx(b,{color:"error",className:"pr-4",variant:"contained",onClick:p,disabled:d,children:"キャンセル"})})]})]}),s==="success"&&i.jsxs("div",{children:[i.jsx("h2",{children:"アップロードしましたが完了しました"}),i.jsx("div",{className:"mt-4 flex justify-end",children:i.jsx("div",{children:i.jsx(b,{variant:"contained",onClick:p,children:i.jsx(H,{href:route("dashboard"),onClick:p,children:"ダッシュボードへ"})})})})]}),s==="error"&&i.jsxs("div",{children:[i.jsx("h2",{children:"アップロードに失敗しました"}),i.jsx("div",{className:"mt-4 flex justify-end",children:i.jsx("div",{children:i.jsx(b,{color:"error",className:"pr-4",variant:"contained",onClick:p,children:"閉じる"})})})]})]})})]})}export{Do as default};
