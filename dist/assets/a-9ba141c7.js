import{L as c,d,j as m,k as r,m as h,a0 as u,q as f,aQ as v}from"./app-050459a9.js";const p=c("a",`
 cursor: pointer;
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 text-decoration-color: var(--n-text-color);
 color: var(--n-text-color);
`),C=Object.assign({},r.props),g=d({name:"A",props:C,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=m(e),a=r("Typography","-a",p,v,e,o),n=h(()=>{const{common:{cubicBezierEaseInOut:i},self:{aTextColor:l}}=a.value;return{"--n-text-color":l,"--n-bezier":i}}),s=t?u("a",void 0,n,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:n,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),f("a",{class:[`${this.mergedClsPrefix}-a`,this.themeClass],style:this.cssVars},this.$slots)}});export{g as N};
