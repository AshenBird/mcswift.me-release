import{g as v,h as o,d as C,k as b,l,m as a,p as x,q as z,t as y}from"./index.951925e4.js";var T=v("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[o("&:first-child","margin-top: 0;"),o("&:last-child","margin-bottom: 0;")]);const P=Object.assign(Object.assign({},l.props),{depth:[String,Number]});var $=C({name:"P",props:P,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=b(e),h=l("Typography","-p",T,y,e,n),i=a(()=>{const{depth:r}=e,d=r||"1",{common:{cubicBezierEaseInOut:c},self:{pFontSize:m,pLineHeight:p,pMargin:g,pTextColor:f,[`pTextColor${d}Depth`]:u}}=h.value;return{"--n-bezier":c,"--n-font-size":m,"--n-line-height":p,"--n-margin":g,"--n-text-color":r===void 0?f:u}}),s=t?x("p",a(()=>`${e.depth||""}`),i,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:i,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),z("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}});export{$ as N};
