import{g as c,d,k as m,l as n,m as h,p as u,q as v,t as f}from"./index.951925e4.js";var p=c("a",`
 cursor: pointer;
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 text-decoration-color: var(--n-text-color);
 color: var(--n-text-color);
`);const C=Object.assign({},n.props);var g=d({name:"A",props:C,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=m(e),a=n("Typography","-a",p,f,e,o),t=h(()=>{const{common:{cubicBezierEaseInOut:i},self:{aTextColor:l}}=a.value;return{"--n-text-color":l,"--n-bezier":i}}),s=r?u("a",void 0,t,e):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:t,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),v("a",{class:[`${this.mergedClsPrefix}-a`,this.themeClass],style:this.cssVars},this.$slots)}});export{g as N};
