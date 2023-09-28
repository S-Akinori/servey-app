import{t as oe,v as re,x as te,_ as c,y as W,z as U,A as se,j as ne,B as ae,b as G,d as T,e as I,g as q,D as H,s as $,c as _,u as E}from"./Container-b985508a.js";import{r as P,j as y}from"./app-6f6137c6.js";import{u as V,f as K}from"./FormControl-c15cd895.js";import{g as A}from"./TransitionGroupContext-71066f82.js";import{B as le}from"./ButtonBase-f105b612.js";import{u as ce}from"./createSvgIcon-7ea6d645.js";import{T as J}from"./Typography-c0ce3623.js";import{e as ie}from"./extendSxProp-deb3ddbb.js";const de=["component","direction","spacing","divider","children","className","useFlexGap"],ue=oe(),pe=re("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function me(e){return te({props:e,name:"MuiStack",defaultTheme:ue})}function fe(e,o){const r=P.Children.toArray(e).filter(Boolean);return r.reduce((t,n,s)=>(t.push(n),s<r.length-1&&t.push(P.cloneElement(o,{key:`separator-${s}`})),t),[])}const be=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],he=({ownerState:e,theme:o})=>{let r=c({display:"flex",flexDirection:"column"},W({theme:o},U({values:e.direction,breakpoints:o.breakpoints.values}),t=>({flexDirection:t})));if(e.spacing){const t=se(o),n=Object.keys(o.breakpoints.values).reduce((a,l)=>((typeof e.spacing=="object"&&e.spacing[l]!=null||typeof e.direction=="object"&&e.direction[l]!=null)&&(a[l]=!0),a),{}),s=U({values:e.direction,base:n}),i=U({values:e.spacing,base:n});typeof s=="object"&&Object.keys(s).forEach((a,l,u)=>{if(!s[a]){const k=l>0?s[u[l-1]]:"column";s[a]=k}}),r=ne(r,W({theme:o},i,(a,l)=>e.useFlexGap?{gap:H(t,a)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${be(l?s[l]:e.direction)}`]:H(t,a)}}))}return r=ae(o.breakpoints,r),r};function ge(e={}){const{createStyledComponent:o=pe,useThemeProps:r=me,componentName:t="MuiStack"}=e,n=()=>I({root:["root"]},a=>q(t,a),{}),s=o(he);return P.forwardRef(function(a,l){const u=r(a),C=ie(u),{component:k="div",direction:R="column",spacing:L=0,divider:S,children:p,className:F,useFlexGap:f=!1}=C,w=G(C,de),j={direction:R,spacing:L,useFlexGap:f},x=n();return y.jsx(s,c({as:k,ownerState:j,ref:l,className:T(x.root,F)},w,{children:S?fe(p,S):p}))})}function ye(e){return q("PrivateSwitchBase",e)}A("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Ce=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ke=e=>{const{classes:o,checked:r,disabled:t,edge:n}=e,s={root:["root",r&&"checked",t&&"disabled",n&&`edge${_(n)}`],input:["input"]};return I(s,ye,o)},Fe=$(le)(({ownerState:e})=>c({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),xe=$("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ve=P.forwardRef(function(o,r){const{autoFocus:t,checked:n,checkedIcon:s,className:i,defaultChecked:d,disabled:a,disableFocusRipple:l=!1,edge:u=!1,icon:C,id:k,inputProps:R,inputRef:L,name:S,onBlur:p,onChange:F,onFocus:f,readOnly:w,required:j=!1,tabIndex:x,type:b,value:B}=o,h=G(o,Ce),[v,Q]=ce({controlled:n,default:!!d,name:"SwitchBase",state:"checked"}),g=V(),X=m=>{f&&f(m),g&&g.onFocus&&g.onFocus(m)},Y=m=>{p&&p(m),g&&g.onBlur&&g.onBlur(m)},Z=m=>{if(m.nativeEvent.defaultPrevented)return;const z=m.target.checked;Q(z),F&&F(m,z)};let N=a;g&&typeof N>"u"&&(N=g.disabled);const ee=b==="checkbox"||b==="radio",D=c({},o,{checked:v,disabled:N,disableFocusRipple:l,edge:u}),O=ke(D);return y.jsxs(Fe,c({component:"span",className:T(O.root,i),centerRipple:!0,focusRipple:!l,disabled:N,tabIndex:null,role:void 0,onFocus:X,onBlur:Y,ownerState:D,ref:r},h,{children:[y.jsx(xe,c({autoFocus:t,checked:n,defaultChecked:d,className:O.input,disabled:N,id:ee?k:void 0,name:S,onChange:Z,readOnly:w,ref:L,required:j,ownerState:D,tabIndex:x,type:b},b==="checkbox"&&B===void 0?{}:{value:B},R)),v?s:C]}))}),We=ve,Pe=ge({createStyledComponent:$("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>E({props:e,name:"MuiStack"})}),Re=Pe;function Se(e){return q("MuiFormControlLabel",e)}const we=A("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),M=we,Be=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],$e=e=>{const{classes:o,disabled:r,labelPlacement:t,error:n,required:s}=e,i={root:["root",r&&"disabled",`labelPlacement${_(t)}`,n&&"error",s&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",n&&"error"]};return I(i,Se,o)},Le=$("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[{[`& .${M.label}`]:o.label},o.root,o[`labelPlacement${_(r.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>c({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${M.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${M.label}`]:{[`&.${M.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),je=$("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${M.error}`]:{color:(e.vars||e).palette.error.main}})),Ne=P.forwardRef(function(o,r){var t,n;const s=E({props:o,name:"MuiFormControlLabel"}),{className:i,componentsProps:d={},control:a,disabled:l,disableTypography:u,label:C,labelPlacement:k="end",required:R,slotProps:L={}}=s,S=G(s,Be),p=V(),F=(t=l??a.props.disabled)!=null?t:p==null?void 0:p.disabled,f=R??a.props.required,w={disabled:F,required:f};["checked","name","onChange","value","inputRef"].forEach(v=>{typeof a.props[v]>"u"&&typeof s[v]<"u"&&(w[v]=s[v])});const j=K({props:s,muiFormControl:p,states:["error"]}),x=c({},s,{disabled:F,labelPlacement:k,required:f,error:j.error}),b=$e(x),B=(n=L.typography)!=null?n:d.typography;let h=C;return h!=null&&h.type!==J&&!u&&(h=y.jsx(J,c({component:"span"},B,{className:T(b.label,B==null?void 0:B.className),children:h}))),y.jsxs(Le,c({className:T(b.root,i),ownerState:x,ref:r},S,{children:[P.cloneElement(a,w),f?y.jsxs(Re,{direction:"row",alignItems:"center",children:[h,y.jsxs(je,{ownerState:x,"aria-hidden":!0,className:b.asterisk,children:[" ","*"]})]}):h]}))}),He=Ne;function Me(e){return q("MuiFormGroup",e)}A("MuiFormGroup",["root","row","error"]);const Te=["className","row"],Ge=e=>{const{classes:o,row:r,error:t}=e;return I({root:["root",r&&"row",t&&"error"]},Me,o)},Ie=$("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.row&&o.row]}})(({ownerState:e})=>c({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),qe=P.forwardRef(function(o,r){const t=E({props:o,name:"MuiFormGroup"}),{className:n,row:s=!1}=t,i=G(t,Te),d=V(),a=K({props:t,muiFormControl:d,states:["error"]}),l=c({},t,{row:s,error:a.error}),u=Ge(l);return y.jsx(Ie,c({className:T(u.root,n),ownerState:l,ref:r},i))}),Je=qe;export{He as F,We as S,Je as a};
