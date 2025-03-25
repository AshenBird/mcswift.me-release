import{L as w,S as h,M as c,d as z,j as $,k as l,aQ as T,m as f,r as o,a0 as H,q as R}from"./app-050459a9.js";const B=w("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[h("&:first-child",{marginTop:0}),c("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[c("align-text",{paddingLeft:0},[h("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),h("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),h("&::before",{backgroundColor:"var(--n-bar-color)"})])]),N=Object.assign(Object.assign({},l.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),n=r=>z({name:`H${r}`,props:N,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:s}=$(e),a=l("Typography","-h",B,T,e,i),d=f(()=>{const{type:g}=e,{common:{cubicBezierEaseInOut:b},self:{headerFontWeight:m,headerTextColor:p,[o("headerPrefixWidth",r)]:u,[o("headerFontSize",r)]:x,[o("headerMargin",r)]:C,[o("headerBarWidth",r)]:v,[o("headerBarColor",g)]:y}}=a.value;return{"--n-bezier":b,"--n-font-size":x,"--n-margin":C,"--n-bar-color":y,"--n-bar-width":v,"--n-font-weight":m,"--n-text-color":p,"--n-prefix-width":u}}),t=s?H(`h${r}`,f(()=>e.type[0]),d,e):void 0;return{mergedClsPrefix:i,cssVars:s?void 0:d,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{prefix:i,alignText:s,mergedClsPrefix:a,cssVars:d,$slots:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),R(`h${r}`,{class:[`${a}-h`,`${a}-h${r}`,this.themeClass,{[`${a}-h--prefix-bar`]:i,[`${a}-h--align-text`]:s}],style:d},t)}}),S=n("1"),W=n("2"),L=n("3"),j=n("4");n("5");n("6");export{W as N,L as a,j as b,S as c};
