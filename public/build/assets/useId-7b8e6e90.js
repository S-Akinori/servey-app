import{r as n,e as l}from"./app-b8dc23a7.js";function i(t,e){return n.isValidElement(t)&&e.indexOf(t.type.muiName)!==-1}let u=0;function f(t){const[e,a]=n.useState(t),o=t||e;return n.useEffect(()=>{e==null&&(u+=1,a(`mui-${u}`))},[e]),o}const s=l["useId".toString()];function r(t){if(s!==void 0){const e=s();return t??e}return f(t)}export{i,r as u};
