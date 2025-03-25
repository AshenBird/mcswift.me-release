import{e as be,i as W,y as Q,z as le,A as ve,B as O,C as ao,D as so,E as Tt,F as Pe,G as co,H as Ae,h as uo,I as fo,J as Ee,K as ho,L as I,M as L,d as K,j as me,O as vo,m as P,q as u,P as fe,Q as mo,R as ae,S as z,T,U as pe,V as q,W as se,X,Y as po,Z as Je,$ as $t,k as oe,a0 as Re,a1 as we,a2 as go,a3 as bo,a4 as wo,a5 as he,a6 as ye,a7 as Et,a8 as Lt,a9 as Ie,aa as Be,ab as yo,ac as Z,ad as Le,ae as Ot,af as Qe,ag as xo,ah as Co,ai as ko,N as Se,aj as xe,ak as Bt,al as Ht,am as So,an as zo,ao as Ro,ap as V,r as ce,aq as Io,ar as Mt,as as Ft,l as No,at as _o,au as qe,av as ht,aw as Po,ax as He,ay as Ao,az as To,aA as $o,aB as Eo,x as Lo,aC as Oo,aD as Bo,aE as Ho,o as G,s as te,b as B,t as et,c as ue,aF as Kt,w as J,v as ze,u as Y,_ as tt,aG as jt,a as vt,aH as Mo,aI as Dt,aJ as Fo,aK as Ko,aL as jo,aM as Do,aN as mt,aO as Uo,aP as Wo}from"./app-050459a9.js";import{f as Ut}from"./fade-in-scale-up.cssr-89391515.js";import{N as Go}from"./headers-3bec25ac.js";import{a as Vo,N as qo}from"./li-2a2552ca.js";import{N as Wt}from"./text-25bcf82c.js";import{N as Gt}from"./a-9ba141c7.js";import{f as Xo}from"./fade-in-height-expand.cssr-1d3c7dfe.js";function Yo(e){return e.nodeType===9?null:e.parentNode}function Vt(e){if(e===null)return null;const t=Yo(e);if(t===null)return null;if(t.nodeType===9)return document.documentElement;if(t.nodeType===1){const{overflow:o,overflowX:n,overflowY:r}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(o+r+n))return t}return Vt(t)}function ot(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function pt(e,t){let{target:o}=e;for(;o;){if(o.dataset&&o.dataset[t]!==void 0)return!0;o=o.parentElement}return!1}function Ne(e){return Object.keys(e)}const ne=(e,...t)=>typeof e=="function"?e(...t):typeof e=="string"?be(e):typeof e=="number"?be(String(e)):null;function Zo(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Jo(e){return t=>{t?e.value=t.$el:e.value=null}}const Qo=new WeakSet;function en(e){return!Qo.has(e)}function tn(e,t,o){const n=W(e,null);n!==null&&(t in n||(n[t]=[]),n[t].push(o.value),Q(o,(r,i)=>{const l=n[t],s=l.findIndex(a=>a===i);~s&&l.splice(s,1),l.push(r)}),le(()=>{const r=n[t],i=r.findIndex(l=>l===o.value);~i&&r.splice(i,1)}))}function on(e,t,o){const n=W(e,null);n!==null&&(t in n||(n[t]=[]),ve(()=>{const r=o();r&&n[t].push(r)}),le(()=>{const r=n[t],i=o(),l=r.findIndex(s=>s===i);~l&&r.splice(l,1)}))}function nn(e,t,o){if(!t)return e;const n=O(e.value);let r=null;return Q(e,i=>{r!==null&&window.clearTimeout(r),i===!0?o&&!o.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},t):n.value=!1}),n}function rn(e={},t){const o=ao({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:r}=e,i=a=>{switch(a.key){case"Control":o.ctrl=!0;break;case"Meta":o.command=!0,o.win=!0;break;case"Shift":o.shift=!0;break;case"Tab":o.tab=!0;break}n!==void 0&&Object.keys(n).forEach(f=>{if(f!==a.key)return;const b=n[f];if(typeof b=="function")b(a);else{const{stop:h=!1,prevent:m=!1}=b;h&&a.stopPropagation(),m&&a.preventDefault(),b.handler(a)}})},l=a=>{switch(a.key){case"Control":o.ctrl=!1;break;case"Meta":o.command=!1,o.win=!1;break;case"Shift":o.shift=!1;break;case"Tab":o.tab=!1;break}r!==void 0&&Object.keys(r).forEach(f=>{if(f!==a.key)return;const b=r[f];if(typeof b=="function")b(a);else{const{stop:h=!1,prevent:m=!1}=b;h&&a.stopPropagation(),m&&a.preventDefault(),b.handler(a)}})},s=()=>{(t===void 0||t.value)&&(Ae("keydown",document,i),Ae("keyup",document,l)),t!==void 0&&Q(t,a=>{a?(Ae("keydown",document,i),Ae("keyup",document,l)):(Pe("keydown",document,i),Pe("keyup",document,l))})};return so()?(Tt(s),le(()=>{(t===void 0||t.value)&&(Pe("keydown",document,i),Pe("keyup",document,l))})):s(),co(o)}let ge=0,gt="",bt="",wt="",yt="";const Xe=O("0px");function ln(e){if(typeof document>"u")return;const t=document.documentElement;let o,n=!1;const r=()=>{t.style.marginRight=gt,t.style.overflow=bt,t.style.overflowX=wt,t.style.overflowY=yt,Xe.value="0px"};ve(()=>{o=Q(e,i=>{if(i){if(!ge){const l=window.innerWidth-t.offsetWidth;l>0&&(gt=t.style.marginRight,t.style.marginRight=`${l}px`,Xe.value=`${l}px`),bt=t.style.overflow,wt=t.style.overflowX,yt=t.style.overflowY,t.style.overflow="hidden",t.style.overflowX="hidden",t.style.overflowY="hidden"}n=!0,ge++}else ge--,ge||r(),n=!1},{immediate:!0})}),le(()=>{o==null||o(),n&&(ge--,ge||r(),n=!1)})}const nt=O(!1),xt=()=>{nt.value=!0},Ct=()=>{nt.value=!1};let ke=0;const an=()=>(uo&&(Tt(()=>{ke||(window.addEventListener("compositionstart",xt),window.addEventListener("compositionend",Ct)),ke++}),le(()=>{ke<=1?(window.removeEventListener("compositionstart",xt),window.removeEventListener("compositionend",Ct),ke=0):ke--})),nt);function kt(e){return e.nodeName==="#document"}var sn=/\s/;function cn(e){for(var t=e.length;t--&&sn.test(e.charAt(t)););return t}var dn=/^\s+/;function un(e){return e&&e.slice(0,cn(e)+1).replace(dn,"")}var St=0/0,fn=/^[-+]0x[0-9a-f]+$/i,hn=/^0b[01]+$/i,vn=/^0o[0-7]+$/i,mn=parseInt;function zt(e){if(typeof e=="number")return e;if(fo(e))return St;if(Ee(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Ee(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=un(e);var o=hn.test(e);return o||vn.test(e)?mn(e.slice(2),o?2:8):fn.test(e)?St:+e}var pn=function(){return ho.Date.now()};const Ue=pn;var gn="Expected a function",bn=Math.max,wn=Math.min;function yn(e,t,o){var n,r,i,l,s,a,f=0,b=!1,h=!1,m=!0;if(typeof e!="function")throw new TypeError(gn);t=zt(t)||0,Ee(o)&&(b=!!o.leading,h="maxWait"in o,i=h?bn(zt(o.maxWait)||0,t):i,m="trailing"in o?!!o.trailing:m);function R(p){var x=n,S=r;return n=r=void 0,f=p,l=e.apply(S,x),l}function k(p){return f=p,s=setTimeout(w,t),b?R(p):l}function C(p){var x=p-a,S=p-f,N=t-x;return h?wn(N,i-S):N}function v(p){var x=p-a,S=p-f;return a===void 0||x>=t||x<0||h&&S>=i}function w(){var p=Ue();if(v(p))return E(p);s=setTimeout(w,C(p))}function E(p){return s=void 0,m&&n?R(p):(n=r=void 0,l)}function $(){s!==void 0&&clearTimeout(s),f=0,n=a=r=s=void 0}function y(){return s===void 0?l:E(Ue())}function d(){var p=Ue(),x=v(p);if(n=arguments,r=this,a=p,x){if(s===void 0)return k(a);if(h)return clearTimeout(s),s=setTimeout(w,t),R(a)}return s===void 0&&(s=setTimeout(w,t)),l}return d.cancel=$,d.flush=y,d}var xn="Expected a function";function Cn(e,t,o){var n=!0,r=!0;if(typeof e!="function")throw new TypeError(xn);return Ee(o)&&(n="leading"in o?!!o.leading:n,r="trailing"in o?!!o.trailing:r),yn(e,t,{leading:n,maxWait:t,trailing:r})}function kn(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function Sn(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const zn=I("affix",[L("affixed",{position:"fixed"},[L("absolute-positioned",{position:"absolute"})])]),rt={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fix"},offsetTop:{type:Number,validator:()=>(fe("affix","`offset-top` is deprecated, please use `trigger-top` instead."),!0),default:void 0},offsetBottom:{type:Number,validator:()=>(fe("affix","`offset-bottom` is deprecated, please use `trigger-bottom` instead."),!0),default:void 0},target:{type:Function,validator:()=>(fe("affix","`target` is deprecated, please use `listen-to` instead."),!0),default:void 0}},Rn=Ne(rt),In=K({name:"Affix",props:rt,setup(e){const{mergedClsPrefixRef:t}=me(e);vo("-affix",zn,t);let o=null;const n=O(!1),r=O(!1),i=O(null),l=O(null),s=P(()=>r.value||n.value),a=P(()=>{var v,w;return(w=(v=e.triggerTop)!==null&&v!==void 0?v:e.offsetTop)!==null&&w!==void 0?w:e.top}),f=P(()=>{var v,w;return(w=(v=e.top)!==null&&v!==void 0?v:e.triggerTop)!==null&&w!==void 0?w:e.offsetTop}),b=P(()=>{var v,w;return(w=(v=e.bottom)!==null&&v!==void 0?v:e.triggerBottom)!==null&&w!==void 0?w:e.offsetBottom}),h=P(()=>{var v,w;return(w=(v=e.triggerBottom)!==null&&v!==void 0?v:e.offsetBottom)!==null&&w!==void 0?w:e.bottom}),m=O(null),R=()=>{const{target:v,listenTo:w}=e;v?o=v():w?o=ot(w):o=document,o?(o.addEventListener("scroll",k),k()):fe("affix","Target to be listened to is not valid.")};function k(){mo(C)}function C(){const{value:v}=m;if(!o||!v)return;const w=kn(o);if(s.value){w<l.value&&(n.value=!1,l.value=null),w>i.value&&(r.value=!1,i.value=null);return}const E=Sn(o),$=v.getBoundingClientRect(),y=$.top-E.top,d=E.bottom-$.bottom,p=a.value,x=h.value;p!==void 0&&y<=p?(n.value=!0,l.value=w-(p-y)):(n.value=!1,l.value=null),x!==void 0&&d<=x?(r.value=!0,i.value=w+x-d):(r.value=!1,i.value=null)}return ve(()=>{R()}),le(()=>{o&&o.removeEventListener("scroll",k)}),{selfRef:m,affixed:s,mergedClsPrefix:t,mergedstyle:P(()=>{const v={};return n.value&&a.value!==void 0&&f.value!==void 0&&(v.top=`${f.value}px`),r.value&&h.value!==void 0&&b.value!==void 0&&(v.bottom=`${b.value}px`),v})}},render(){const{mergedClsPrefix:e}=this;return u("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),Nn=K({name:"ChevronRight",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),_n=K({name:"ChevronDownFilled",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function Rt(e){return Array.isArray(e)?e:[e]}const Ye={STOP:"STOP"};function qt(e,t){const o=t(e);e.children!==void 0&&o!==Ye.STOP&&e.children.forEach(n=>qt(n,t))}function Pn(e,t={}){const{preserveGroup:o=!1}=t,n=[],r=o?l=>{l.isLeaf||(n.push(l.key),i(l.children))}:l=>{l.isLeaf||(l.isGroup||n.push(l.key),i(l.children))};function i(l){l.forEach(r)}return i(e),n}function An(e,t){const{isLeaf:o}=e;return o!==void 0?o:!t(e)}function Tn(e){return e.children}function $n(e){return e.key}function En(){return!1}function Ln(e,t){const{isLeaf:o}=e;return!(o===!1&&!Array.isArray(t(e)))}function On(e){return e.disabled===!0}function Bn(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function Hn(e,t){if(e.isLeaf===!0){const o=t(e);if(Array.isArray(o)&&o.length>0)return!0}return!1}function We(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function Ge(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function Mn(e,t){const o=new Set(e);return t.forEach(n=>{o.has(n)||o.add(n)}),Array.from(o)}function Fn(e,t){const o=new Set(e);return t.forEach(n=>{o.has(n)&&o.delete(n)}),Array.from(o)}function Kn(e){return(e==null?void 0:e.type)==="group"}class jn extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Dn(e,t,o,n){return Oe(t.concat(e),o,n,!1)}function Un(e,t){const o=new Set;return e.forEach(n=>{const r=t.treeNodeMap.get(n);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||o.has(i.key));)o.add(i.key),i=i.parent}}),o}function Wn(e,t,o,n){const r=Oe(t,o,n,!1),i=Oe(e,o,n,!0),l=Un(e,o),s=[];return r.forEach(a=>{(i.has(a)||l.has(a))&&s.push(a)}),s.forEach(a=>r.delete(a)),r}function Ve(e,t){const{checkedKeys:o,keysToCheck:n,keysToUncheck:r,indeterminateKeys:i,cascade:l,leafOnly:s,checkStrategy:a,allowNotLoaded:f}=e;if(!l)return n!==void 0?{checkedKeys:Mn(o,n),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:Fn(o,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(o),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:b}=t;let h;r!==void 0?h=Wn(r,o,t,f):n!==void 0?h=Dn(n,o,t,f):h=Oe(o,t,f,!1);const m=a==="parent",R=a==="child"||s,k=h,C=new Set,v=Math.max.apply(null,Array.from(b.keys()));for(let w=v;w>=0;w-=1){const E=w===0,$=b.get(w);for(const y of $){if(y.isLeaf)continue;const{key:d,shallowLoaded:p}=y;if(R&&p&&y.children.forEach(c=>{!c.disabled&&!c.isLeaf&&c.shallowLoaded&&k.has(c.key)&&k.delete(c.key)}),y.disabled||!p)continue;let x=!0,S=!1,N=!0;for(const c of y.children){const A=c.key;if(!c.disabled){if(N&&(N=!1),k.has(A))S=!0;else if(C.has(A)){S=!0,x=!1;break}else if(x=!1,S)break}}x&&!N?(m&&y.children.forEach(c=>{!c.disabled&&k.has(c.key)&&k.delete(c.key)}),k.add(d)):S&&C.add(d),E&&R&&k.has(d)&&k.delete(d)}}return{checkedKeys:Array.from(k),indeterminateKeys:Array.from(C)}}function Oe(e,t,o,n){const{treeNodeMap:r,getChildren:i}=t,l=new Set,s=new Set(e);return e.forEach(a=>{const f=r.get(a);f!==void 0&&qt(f,b=>{if(b.disabled)return Ye.STOP;const{key:h}=b;if(!l.has(h)&&(l.add(h),s.add(h),Bn(b.rawNode,i))){if(n)return Ye.STOP;if(!o)throw new jn}})}),s}function Gn(e,{includeGroup:t=!1,includeSelf:o=!0},n){var r;const i=n.treeNodeMap;let l=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:l};if(l!=null&&l.ignored)return s.treeNode=null,s;for(;l;)!l.ignored&&(t||!l.isGroup)&&s.treeNodePath.push(l),l=l.parent;return s.treeNodePath.reverse(),o||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(a=>a.key),s}function Vn(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function qn(e,t){const o=e.siblings,n=o.length,{index:r}=e;return t?o[(r+1)%n]:r===o.length-1?null:o[r+1]}function It(e,t,{loop:o=!1,includeDisabled:n=!1}={}){const r=t==="prev"?Xn:qn,i={reverse:t==="prev"};let l=!1,s=null;function a(f){if(f!==null){if(f===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!f.disabled||n)&&!f.ignored&&!f.isGroup){s=f;return}if(f.isGroup){const b=it(f,i);b!==null?s=b:a(r(f,o))}else{const b=r(f,!1);if(b!==null)a(b);else{const h=Yn(f);h!=null&&h.isGroup?a(r(h,o)):o&&a(r(f,!0))}}}}return a(e),s}function Xn(e,t){const o=e.siblings,n=o.length,{index:r}=e;return t?o[(r-1+n)%n]:r===0?null:o[r-1]}function Yn(e){return e.parent}function it(e,t={}){const{reverse:o=!1}=t,{children:n}=e;if(n){const{length:r}=n,i=o?r-1:0,l=o?-1:r,s=o?-1:1;for(let a=i;a!==l;a+=s){const f=n[a];if(!f.disabled&&!f.ignored)if(f.isGroup){const b=it(f,t);if(b!==null)return b}else return f}}return null}const Zn={getChild(){return this.ignored?null:it(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return It(this,"next",e)},getPrev(e={}){return It(this,"prev",e)}};function Jn(e,t){const o=t?new Set(t):void 0,n=[];function r(i){i.forEach(l=>{n.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||o===void 0||o.has(l.key))&&r(l.children)})}return r(e),n}function Qn(e,t){const o=e.key;for(;t;){if(t.key===o)return!0;t=t.parent}return!1}function Xt(e,t,o,n,r,i=null,l=0){const s=[];return e.forEach((a,f)=>{var b;Hn(a,r)&&console.error("[treemate]: node",a,"is invalid");const h=Object.create(n);if(h.rawNode=a,h.siblings=s,h.level=l,h.index=f,h.isFirstChild=f===0,h.isLastChild=f+1===e.length,h.parent=i,!h.ignored){const m=r(a);Array.isArray(m)&&(h.children=Xt(m,t,o,n,r,h,l+1))}s.push(h),t.set(h.key,h),o.has(l)||o.set(l,[]),(b=o.get(l))===null||b===void 0||b.push(h)}),s}function Yt(e,t={}){var o;const n=new Map,r=new Map,{getDisabled:i=On,getIgnored:l=En,getIsGroup:s=Kn,getKey:a=$n}=t,f=(o=t.getChildren)!==null&&o!==void 0?o:Tn,b=t.ignoreEmptyChildren?y=>{const d=f(y);return Array.isArray(d)?d.length?d:null:d}:f,h=Object.assign({get key(){return a(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return An(this.rawNode,b)},get shallowLoaded(){return Ln(this.rawNode,b)},get ignored(){return l(this.rawNode)},contains(y){return Qn(this,y)}},Zn),m=Xt(e,n,r,h,b);function R(y){if(y==null)return null;const d=n.get(y);return d&&!d.isGroup&&!d.ignored?d:null}function k(y){if(y==null)return null;const d=n.get(y);return d&&!d.ignored?d:null}function C(y,d){const p=k(y);return p?p.getPrev(d):null}function v(y,d){const p=k(y);return p?p.getNext(d):null}function w(y){const d=k(y);return d?d.getParent():null}function E(y){const d=k(y);return d?d.getChild():null}const $={treeNodes:m,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:b,getFlattenedNodes(y){return Jn(m,y)},getNode:R,getPrev:C,getNext:v,getParent:w,getChild:E,getFirstAvailableNode(){return Vn(m)},getPath(y,d={}){return Gn(y,d,$)},getCheckedKeys(y,d={}){const{cascade:p=!0,leafOnly:x=!1,checkStrategy:S="all",allowNotLoaded:N=!1}=d;return Ve({checkedKeys:We(y),indeterminateKeys:Ge(y),cascade:p,leafOnly:x,checkStrategy:S,allowNotLoaded:N},$)},check(y,d,p={}){const{cascade:x=!0,leafOnly:S=!1,checkStrategy:N="all",allowNotLoaded:c=!1}=p;return Ve({checkedKeys:We(d),indeterminateKeys:Ge(d),keysToCheck:y==null?[]:Rt(y),cascade:x,leafOnly:S,checkStrategy:N,allowNotLoaded:c},$)},uncheck(y,d,p={}){const{cascade:x=!0,leafOnly:S=!1,checkStrategy:N="all",allowNotLoaded:c=!1}=p;return Ve({checkedKeys:We(d),indeterminateKeys:Ge(d),keysToUncheck:y==null?[]:Rt(y),cascade:x,leafOnly:S,checkStrategy:N,allowNotLoaded:c},$)},getNonLeafKeys(y={}){return Pn(m,y)}};return $}const er=I("anchor",`
 position: relative;
`,[ae("block",`
 padding-left: var(--n-rail-width);
 `,[I("anchor-link",[z("+, >",[I("anchor-link",`
 margin-top: .5em;
 `)])]),I("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),ae("show-rail",[z(">",[I("anchor-link","padding-left: 0;")])])]),L("block",[I("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[L("active",`
 background-color: var(--n-link-color);
 `)])]),I("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),I("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[T("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[L("active",{backgroundColor:"var(--n-rail-color-active)"})])]),I("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[L("active",[z(">",[T("title",`
 color: var(--n-link-text-color-active);
 `)])]),T("title",`
 outline: none;
 max-width: 100%;
 text-decoration: none;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 cursor: pointer;
 display: inline-block;
 padding-right: 16px;
 transition: color .3s var(--n-bezier);
 color: var(--n-link-text-color);
 `,[z("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),z("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),$e=pe("n-anchor"),tr={title:String,href:String},or=K({name:"AnchorLink",props:tr,setup(e,{slots:t}){const o=O(null),n=W($e),r=q(e,"href"),i=se(()=>r.value&&r.value===n.activeHref.value);tn($e,"collectedLinkHrefs",r),on($e,"titleEls",()=>o.value),Q(i,s=>{s&&o.value&&n.updateBarPosition(o.value)});function l(){e.href!==void 0&&n.setActiveHref(e.href)}return()=>{var s;const{value:a}=n.mergedClsPrefix;return u("div",{class:[`${a}-anchor-link`,i.value&&`${a}-anchor-link--active`]},u("a",{ref:o,class:[`${a}-anchor-link__title`],href:e.href,title:Zo(e.title),onClick:l},e.title),(s=t.default)===null||s===void 0?void 0:s.call(t))}}});function nr(e,t){const{top:o,height:n}=e.getBoundingClientRect(),r=t instanceof HTMLElement?t.getBoundingClientRect().top:0;return{top:o-r,height:n}}const lt={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},rr=Ne(lt),ir=K({name:"BaseAnchor",props:Object.assign(Object.assign({},lt),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const t=[],o=[],n=O(null),r=O(null),i=O(null),l=O(null),s=P(()=>e.type==="block"),a=P(()=>!s.value&&e.showRail);function f(){const{value:k}=i,{value:C}=r;k&&(k.style.transition="none"),C&&(C.style.transition="none"),o&&o.forEach(v=>{v.style.transition="none"}),$t(()=>{const{value:v}=i,{value:w}=r;v&&(v.offsetWidth,v.style.transition=""),w&&(w.offsetWidth,w.style.transition=""),o&&o.forEach(E=>{E.offsetWidth,E.style.transition=""})})}function b(k,C=!0){const{value:v}=i,{value:w}=r,{value:E}=l;if(!E||!v)return;C||(v.style.transition="none",w&&(w.style.transition="none"));const{offsetHeight:$,offsetWidth:y}=k,{top:d,left:p}=k.getBoundingClientRect(),{top:x,left:S}=E.getBoundingClientRect(),N=d-x,c=p-S;v.style.top=`${N}px`,v.style.height=`${$}px`,w&&(w.style.top=`${N}px`,w.style.height=`${$}px`,w.style.maxWidth=`${y+c}px`),v.offsetHeight,w&&w.offsetHeight,C||(v.style.transition="",w&&(w.style.transition=""))}function h(k,C=!0){const v=/^#([^#]+)$/.exec(k);if(!v)return;const w=document.getElementById(v[1]);w&&(n.value=k,w.scrollIntoView(),C||f(),m())}const m=Cn(()=>R(!0),128);function R(k=!0){var C;const v=[],w=ot((C=e.offsetTarget)!==null&&C!==void 0?C:document);t.forEach(p=>{const x=/#([^#]+)$/.exec(p);if(!x)return;const S=document.getElementById(x[1]);if(S&&w){const{top:N,height:c}=nr(S,w);v.push({top:N,height:c,href:p})}}),v.sort((p,x)=>p.top>x.top?1:(p.top===x.top&&p.height<x.height,-1));const E=n.value,{bound:$,ignoreGap:y}=e,d=v.reduce((p,x)=>x.top+x.height<0?y?x:p:x.top<=$?p===null?x:x.top===p.top?x.href===E?x:p:x.top>p.top?x:p:p,null);k||f(),d?n.value=d.href:n.value=null}return X($e,{activeHref:n,mergedClsPrefix:q(e,"mergedClsPrefix"),updateBarPosition:b,setActiveHref:h,collectedLinkHrefs:t,titleEls:o}),ve(()=>{document.addEventListener("scroll",m,!0),h(window.location.hash),R(!1)}),po(()=>{h(window.location.hash),R(!1)}),le(()=>{document.removeEventListener("scroll",m,!0)}),Q(n,k=>{if(k===null){const{value:C}=r;C&&!s.value&&(C.style.maxWidth="0")}}),{selfRef:l,barRef:i,slotRef:r,setActiveHref:h,activeHref:n,isBlockType:s,mergedShowRail:a}},render(){var e;const{mergedClsPrefix:t,mergedShowRail:o,isBlockType:n,$slots:r}=this,i=u("div",{class:[`${t}-anchor`,n&&`${t}-anchor--block`,o&&`${t}-anchor--show-rail`],ref:"selfRef"},o&&this.showBackground?u("div",{ref:"slotRef",class:`${t}-anchor-link-background`}):null,o?u("div",{class:`${t}-anchor-rail`},u("div",{ref:"barRef",class:[`${t}-anchor-rail__bar`,this.activeHref!==null&&`${t}-anchor-rail__bar--active`]})):null,(e=r.default)===null||e===void 0?void 0:e.call(r));return this.internalScrollable?u(Je,null,{default:()=>i}):i}}),lr=Object.assign(Object.assign(Object.assign(Object.assign({},oe.props),{affix:Boolean}),rt),lt),ar=K({name:"Anchor",props:lr,setup(e,{slots:t}){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=me(e),r=oe("Anchor","-anchor",er,go,e,o),i=O(null),l=P(()=>{const{self:{railColor:a,linkColor:f,railColorActive:b,linkTextColor:h,linkTextColorHover:m,linkTextColorPressed:R,linkTextColorActive:k,linkFontSize:C,railWidth:v,linkPadding:w,borderRadius:E},common:{cubicBezierEaseInOut:$}}=r.value;return{"--n-link-border-radius":E,"--n-link-color":f,"--n-link-font-size":C,"--n-link-text-color":h,"--n-link-text-color-hover":m,"--n-link-text-color-active":k,"--n-link-text-color-pressed":R,"--n-link-padding":w,"--n-bezier":$,"--n-rail-color":a,"--n-rail-color-active":b,"--n-rail-width":v}}),s=n?Re("anchor",void 0,l,e):void 0;return{scrollTo(a){var f;(f=i.value)===null||f===void 0||f.setActiveHref(a)},renderAnchor:()=>(s==null||s.onRender(),u(ir,Object.assign({ref:i,style:n?void 0:l.value,class:s==null?void 0:s.themeClass.value},we(e,rr),{mergedClsPrefix:o.value}),t))}},render(){return this.affix?u(In,Object.assign({},we(this,Rn)),{default:this.renderAnchor}):this.renderAnchor()}}),sr=e=>{const{popoverColor:t,textColor2:o,primaryColorHover:n,primaryColorPressed:r}=e;return Object.assign(Object.assign({},wo),{color:t,textColor:o,iconColor:o,iconColorHover:n,iconColorPressed:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})},cr={name:"BackTop",common:bo,self:sr},dr=cr,ur=u("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink"},u("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},u("g",{transform:"translate(-139.000000, -4423.000000)","fill-rule":"nonzero"},u("g",{transform:"translate(120.000000, 4285.000000)"},u("g",{transform:"translate(7.000000, 126.000000)"},u("g",{transform:"translate(24.000000, 24.000000) scale(1, -1) translate(-24.000000, -24.000000) translate(12.000000, 12.000000)"},u("g",{transform:"translate(4.000000, 2.000000)"},u("path",{d:"M8,0 C8.51283584,0 8.93550716,0.38604019 8.99327227,0.883378875 L9,1 L9,10.584 L12.2928932,7.29289322 C12.6834175,6.90236893 13.3165825,6.90236893 13.7071068,7.29289322 C14.0675907,7.65337718 14.0953203,8.22060824 13.7902954,8.61289944 L13.7071068,8.70710678 L8.70710678,13.7071068 L8.62544899,13.7803112 L8.618,13.784 L8.59530661,13.8036654 L8.4840621,13.8753288 L8.37133602,13.9287745 L8.22929083,13.9735893 L8.14346259,13.9897165 L8.03324678,13.9994506 L7.9137692,13.9962979 L7.77070917,13.9735893 L7.6583843,13.9401293 L7.57677845,13.9063266 L7.47929125,13.8540045 L7.4048407,13.8036865 L7.38131006,13.7856883 C7.35030318,13.7612383 7.32077858,13.7349921 7.29289322,13.7071068 L2.29289322,8.70710678 L2.20970461,8.61289944 C1.90467972,8.22060824 1.93240926,7.65337718 2.29289322,7.29289322 C2.65337718,6.93240926 3.22060824,6.90467972 3.61289944,7.20970461 L3.70710678,7.29289322 L7,10.585 L7,1 L7.00672773,0.883378875 C7.06449284,0.38604019 7.48716416,0 8,0 Z"}),u("path",{d:"M14.9333333,15.9994506 C15.5224371,15.9994506 16,16.4471659 16,16.9994506 C16,17.5122865 15.5882238,17.9349578 15.0577292,17.9927229 L14.9333333,17.9994506 L1.06666667,17.9994506 C0.477562934,17.9994506 0,17.5517354 0,16.9994506 C0,16.4866148 0.411776203,16.0639435 0.9422708,16.0061783 L1.06666667,15.9994506 L14.9333333,15.9994506 Z"})))))))),fr=I("back-top",`
 position: fixed;
 right: 40px;
 bottom: 40px;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 height: var(--n-height);
 min-width: var(--n-width);
 box-shadow: var(--n-box-shadow);
 background-color: var(--n-color);
`,[Ut(),L("transition-disabled",{transition:"none !important"}),I("base-icon",`
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),z("svg",{pointerEvents:"none"}),z("&:hover",{boxShadow:"var(--n-box-shadow-hover)"},[I("base-icon",{color:"var(--n-icon-color-hover)"})]),z("&:active",{boxShadow:"var(--n-box-shadow-pressed)"},[I("base-icon",{color:"var(--n-icon-color-pressed)"})])]),hr=Object.assign(Object.assign({},oe.props),{show:{type:Boolean,default:void 0},right:{type:[Number,String],default:40},bottom:{type:[Number,String],default:40},to:{type:[String,Object],default:"body"},visibilityHeight:{type:Number,default:180},listenTo:[String,Object,Function],"onUpdate:show":{type:Function,default:()=>{}},target:Function,onShow:Function,onHide:Function}),vr=K({name:"BackTop",inheritAttrs:!1,props:hr,setup(e){he(()=>{e.target!==void 0&&Z("back-top","`target` is deprecated, please use `listen-to` instead."),e.onShow!==void 0&&Z("back-top","`on-show` is deprecated, please use `on-update:show` instead."),e.onHide!==void 0&&Z("back-top","`on-hide` is deprecated, please use `on-update:show` instead.")});const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=me(e),n=O(null),r=O(!1);he(()=>{const{value:y}=n;if(y===null){r.value=!1;return}r.value=y>=e.visibilityHeight});const i=O(!1);Q(r,y=>{var d;i.value&&((d=e["onUpdate:show"])===null||d===void 0||d.call(e,y))});const l=q(e,"show"),s=ye(l,r),a=O(!0),f=O(null),b=P(()=>({right:`calc(${Le(e.right)} + ${Xe.value})`,bottom:Le(e.bottom)}));let h,m;Q(s,y=>{var d,p;i.value&&(y&&((d=e.onShow)===null||d===void 0||d.call(e)),(p=e.onHide)===null||p===void 0||p.call(e))});const R=oe("BackTop","-back-top",fr,dr,e,t);function k(){var y;if(m)return;m=!0;const d=((y=e.target)===null||y===void 0?void 0:y.call(e))||ot(e.listenTo)||Vt(f.value);if(!d){fe("back-top","Container of back-top element is not found. This could be a bug of naive-ui.");return}h=d===document.documentElement?document:d;const{to:p}=e;(typeof p=="string"?document.querySelector(p):p)||fe("back-top","Target is not found."),h.addEventListener("scroll",v),v()}function C(){(kt(h)?document.documentElement:h).scrollTo({top:0,behavior:"smooth"})}function v(){n.value=(kt(h)?document.documentElement:h).scrollTop,i.value||$t(()=>{i.value=!0})}function w(){a.value=!1}ve(()=>{k(),a.value=s.value}),le(()=>{h&&h.removeEventListener("scroll",v)});const E=P(()=>{const{self:{color:y,boxShadow:d,boxShadowHover:p,boxShadowPressed:x,iconColor:S,iconColorHover:N,iconColorPressed:c,width:A,height:_,iconSize:j,borderRadius:F,textColor:M},common:{cubicBezierEaseInOut:g}}=R.value;return{"--n-bezier":g,"--n-border-radius":F,"--n-height":_,"--n-width":A,"--n-box-shadow":d,"--n-box-shadow-hover":p,"--n-box-shadow-pressed":x,"--n-color":y,"--n-icon-size":j,"--n-icon-color":S,"--n-icon-color-hover":N,"--n-icon-color-pressed":c,"--n-text-color":M}}),$=o?Re("back-top",void 0,E,e):void 0;return{placeholderRef:f,style:b,mergedShow:s,isMounted:Et(),scrollElement:O(null),scrollTop:n,DomInfoReady:i,transitionDisabled:a,mergedClsPrefix:t,handleAfterEnter:w,handleScroll:v,handleClick:C,cssVars:o?void 0:E,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender}},render(){const{mergedClsPrefix:e}=this;return u("div",{ref:"placeholderRef",class:`${e}-back-top-placeholder`,style:"display: none","aria-hidden":!0},u(Lt,{to:this.to,show:this.mergedShow},{default:()=>u(Ie,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterEnter:this.handleAfterEnter},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),this.mergedShow?u("div",Be(this.$attrs,{class:[`${e}-back-top`,this.themeClass,this.transitionDisabled&&`${e}-back-top--transition-disabled`],style:[this.style,this.cssVars],onClick:this.handleClick}),yo(this.$slots.default,()=>[u(Ot,{clsPrefix:e},{default:()=>ur})])):null}})}))}}),Zt=K({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return u("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),at=pe("n-dropdown-menu"),Me=pe("n-dropdown"),Nt=pe("n-dropdown-option");function Ze(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function mr(e){return e.type==="group"}function Jt(e){return e.type==="divider"}function pr(e){return e.type==="render"}const Qt=K({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const t=W(Me),{hoverKeyRef:o,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:l,animatedRef:s,mergedShowRef:a,renderLabelRef:f,renderIconRef:b,labelFieldRef:h,childrenFieldRef:m,renderOptionRef:R,nodePropsRef:k,menuPropsRef:C}=t,v=W(Nt,null),w=W(at),E=W(Qe),$=P(()=>e.tmNode.rawNode),y=P(()=>{const{value:H}=m;return Ze(e.tmNode.rawNode,H)}),d=P(()=>{const{disabled:H}=e.tmNode;return H}),p=P(()=>{if(!y.value)return!1;const{key:H,disabled:U}=e.tmNode;if(U)return!1;const{value:ee}=o,{value:re}=n,{value:Ce}=r,{value:ie}=i;return ee!==null?ie.includes(H):re!==null?ie.includes(H)&&ie[ie.length-1]!==H:Ce!==null?ie.includes(H):!1}),x=P(()=>n.value===null&&!s.value),S=nn(p,300,x),N=P(()=>!!(v!=null&&v.enteringSubmenuRef.value)),c=O(!1);X(Nt,{enteringSubmenuRef:c});function A(){c.value=!0}function _(){c.value=!1}function j(){const{parentKey:H,tmNode:U}=e;U.disabled||a.value&&(r.value=H,n.value=null,o.value=U.key)}function F(){const{tmNode:H}=e;H.disabled||a.value&&o.value!==H.key&&j()}function M(H){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:U}=H;U&&!pt({target:U},"dropdownOption")&&!pt({target:U},"scrollbarRail")&&(o.value=null)}function g(){const{value:H}=y,{tmNode:U}=e;a.value&&!H&&!U.disabled&&(t.doSelect(U.key,U.rawNode),t.doUpdateShow(!1))}return{labelField:h,renderLabel:f,renderIcon:b,siblingHasIcon:w.showIconRef,siblingHasSubmenu:w.hasSubmenuRef,menuProps:C,popoverBody:E,animated:s,mergedShowSubmenu:P(()=>S.value&&!N.value),rawNode:$,hasSubmenu:y,pending:se(()=>{const{value:H}=i,{key:U}=e.tmNode;return H.includes(U)}),childActive:se(()=>{const{value:H}=l,{key:U}=e.tmNode,ee=H.findIndex(re=>U===re);return ee===-1?!1:ee<H.length-1}),active:se(()=>{const{value:H}=l,{key:U}=e.tmNode,ee=H.findIndex(re=>U===re);return ee===-1?!1:ee===H.length-1}),mergedDisabled:d,renderOption:R,nodeProps:k,handleClick:g,handleMouseMove:F,handleMouseEnter:j,handleMouseLeave:M,handleSubmenuBeforeEnter:A,handleSubmenuAfterEnter:_}},render(){var e,t;const{animated:o,rawNode:n,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:l,siblingHasSubmenu:s,renderLabel:a,renderIcon:f,renderOption:b,nodeProps:h,props:m,scrollable:R}=this;let k=null;if(r){const E=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);k=u(eo,Object.assign({},E,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const C={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},v=h==null?void 0:h(n),w=u("div",Object.assign({class:[`${i}-dropdown-option`,v==null?void 0:v.class],"data-dropdown-option":!0},v),u("div",Be(C,m),[u("div",{class:[`${i}-dropdown-option-body__prefix`,l&&`${i}-dropdown-option-body__prefix--show-icon`]},[f?f(n):ne(n.icon)]),u("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},a?a(n):ne((t=n[this.labelField])!==null&&t!==void 0?t:n.title)),u("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?u(Se,null,{default:()=>u(Nn,null)}):null)]),this.hasSubmenu?u(xo,null,{default:()=>[u(Co,null,{default:()=>u("div",{class:`${i}-dropdown-offset-container`},u(ko,{show:this.mergedShowSubmenu,placement:this.placement,to:R&&this.popoverBody||void 0,teleportDisabled:!R},{default:()=>u("div",{class:`${i}-dropdown-menu-wrapper`},o?u(Ie,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>k}):k)}))})]}):null);return b?b({node:w,option:n}):w}}),gr=K({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=W(at),{renderLabelRef:o,labelFieldRef:n,nodePropsRef:r,renderOptionRef:i}=W(Me);return{labelField:n,showIcon:e,hasSubmenu:t,renderLabel:o,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:t,hasSubmenu:o,showIcon:n,nodeProps:r,renderLabel:i,renderOption:l}=this,{rawNode:s}=this.tmNode,a=u("div",Object.assign({class:`${t}-dropdown-option`},r==null?void 0:r(s)),u("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},u("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,n&&`${t}-dropdown-option-body__prefix--show-icon`]},ne(s.icon)),u("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):ne((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),u("div",{class:[`${t}-dropdown-option-body__suffix`,o&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:a,option:s}):a}}),br=K({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:o}=this,{children:n}=e;return u(xe,null,u(gr,{clsPrefix:o,tmNode:e,key:e.key}),n==null?void 0:n.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Jt(i)?u(Zt,{clsPrefix:o,key:r.key}):r.isGroup?(fe("dropdown","`group` node is not allowed to be put in `group` node."),null):u(Qt,{clsPrefix:o,tmNode:r,parentKey:t,key:r.key})}))}}),wr=K({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return u("div",t,[e==null?void 0:e()])}}),eo=K({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:o}=W(Me);X(at,{showIconRef:P(()=>{const r=t.value;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>r?r(a):a.icon);const{rawNode:s}=i;return r?r(s):s.icon})}),hasSubmenuRef:P(()=>{const{value:r}=o;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>Ze(a,r));const{rawNode:s}=i;return Ze(s,r)})})});const n=O(null);return X(Bt,null),X(Ht,null),X(Qe,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:t,scrollable:o}=this,n=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:pr(i)?u(wr,{tmNode:r,key:r.key}):Jt(i)?u(Zt,{clsPrefix:t,key:r.key}):mr(i)?u(br,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):u(Qt,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:o})});return u("div",{class:[`${t}-dropdown-menu`,o&&`${t}-dropdown-menu--scrollable`],ref:"bodyRef"},o?u(zo,{contentClass:`${t}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?So({clsPrefix:t,arrowStyle:this.arrowStyle}):null)}}),yr=I("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ut(),I("dropdown-option",`
 position: relative;
 `,[z("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[z("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),I("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[z("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ae("disabled",[L("pending",`
 color: var(--n-option-text-color-hover);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),z("&::before","background-color: var(--n-option-color-hover);")]),L("active",`
 color: var(--n-option-text-color-active);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),z("&::before","background-color: var(--n-option-color-active);")]),L("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),L("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),L("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[T("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[L("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),T("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[L("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),I("icon",`
 font-size: var(--n-option-icon-size);
 `)]),T("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),T("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[L("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),I("icon",`
 font-size: var(--n-option-icon-size);
 `)]),I("dropdown-menu","pointer-events: all;")]),I("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),I("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),I("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),z(">",[I("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ae("scrollable",`
 padding: var(--n-padding);
 `),L("scrollable",[T("content",`
 padding: var(--n-padding);
 `)])]),xr={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Cr=Object.keys(Mt),kr=Object.assign(Object.assign(Object.assign({},Mt),xr),oe.props),Sr=K({name:"Dropdown",inheritAttrs:!1,props:kr,setup(e){const t=O(!1),o=ye(q(e,"show"),t),n=P(()=>{const{keyField:_,childrenField:j}=e;return Yt(e.options,{getKey(F){return F[_]},getDisabled(F){return F.disabled===!0},getIgnored(F){return F.type==="divider"||F.type==="render"},getChildren(F){return F[j]}})}),r=P(()=>n.value.treeNodes),i=O(null),l=O(null),s=O(null),a=P(()=>{var _,j,F;return(F=(j=(_=i.value)!==null&&_!==void 0?_:l.value)!==null&&j!==void 0?j:s.value)!==null&&F!==void 0?F:null}),f=P(()=>n.value.getPath(a.value).keyPath),b=P(()=>n.value.getPath(e.value).keyPath),h=se(()=>e.keyboard&&o.value);rn({keydown:{ArrowUp:{prevent:!0,handler:d},ArrowRight:{prevent:!0,handler:y},ArrowDown:{prevent:!0,handler:p},ArrowLeft:{prevent:!0,handler:$},Enter:{prevent:!0,handler:x},Escape:E}},h);const{mergedClsPrefixRef:m,inlineThemeDisabled:R}=me(e),k=oe("Dropdown","-dropdown",yr,Ro,e,m);X(Me,{labelFieldRef:q(e,"labelField"),childrenFieldRef:q(e,"childrenField"),renderLabelRef:q(e,"renderLabel"),renderIconRef:q(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:l,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:f,activeKeyPathRef:b,animatedRef:q(e,"animated"),mergedShowRef:o,nodePropsRef:q(e,"nodeProps"),renderOptionRef:q(e,"renderOption"),menuPropsRef:q(e,"menuProps"),doSelect:C,doUpdateShow:v}),Q(o,_=>{!e.animated&&!_&&w()});function C(_,j){const{onSelect:F}=e;F&&V(F,_,j)}function v(_){const{"onUpdate:show":j,onUpdateShow:F}=e;j&&V(j,_),F&&V(F,_),t.value=_}function w(){i.value=null,l.value=null,s.value=null}function E(){v(!1)}function $(){N("left")}function y(){N("right")}function d(){N("up")}function p(){N("down")}function x(){const _=S();_!=null&&_.isLeaf&&o.value&&(C(_.key,_.rawNode),v(!1))}function S(){var _;const{value:j}=n,{value:F}=a;return!j||F===null?null:(_=j.getNode(F))!==null&&_!==void 0?_:null}function N(_){const{value:j}=a,{value:{getFirstAvailableNode:F}}=n;let M=null;if(j===null){const g=F();g!==null&&(M=g.key)}else{const g=S();if(g){let H;switch(_){case"down":H=g.getNext();break;case"up":H=g.getPrev();break;case"right":H=g.getChild();break;case"left":H=g.getParent();break}H&&(M=H.key)}}M!==null&&(i.value=null,l.value=M)}const c=P(()=>{const{size:_,inverted:j}=e,{common:{cubicBezierEaseInOut:F},self:M}=k.value,{padding:g,dividerColor:H,borderRadius:U,optionOpacityDisabled:ee,[ce("optionIconSuffixWidth",_)]:re,[ce("optionSuffixWidth",_)]:Ce,[ce("optionIconPrefixWidth",_)]:ie,[ce("optionPrefixWidth",_)]:Fe,[ce("fontSize",_)]:Ke,[ce("optionHeight",_)]:je,[ce("optionIconSize",_)]:De}=M,D={"--n-bezier":F,"--n-font-size":Ke,"--n-padding":g,"--n-border-radius":U,"--n-option-height":je,"--n-option-prefix-width":Fe,"--n-option-icon-prefix-width":ie,"--n-option-suffix-width":Ce,"--n-option-icon-suffix-width":re,"--n-option-icon-size":De,"--n-divider-color":H,"--n-option-opacity-disabled":ee};return j?(D["--n-color"]=M.colorInverted,D["--n-option-color-hover"]=M.optionColorHoverInverted,D["--n-option-color-active"]=M.optionColorActiveInverted,D["--n-option-text-color"]=M.optionTextColorInverted,D["--n-option-text-color-hover"]=M.optionTextColorHoverInverted,D["--n-option-text-color-active"]=M.optionTextColorActiveInverted,D["--n-option-text-color-child-active"]=M.optionTextColorChildActiveInverted,D["--n-prefix-color"]=M.prefixColorInverted,D["--n-suffix-color"]=M.suffixColorInverted,D["--n-group-header-text-color"]=M.groupHeaderTextColorInverted):(D["--n-color"]=M.color,D["--n-option-color-hover"]=M.optionColorHover,D["--n-option-color-active"]=M.optionColorActive,D["--n-option-text-color"]=M.optionTextColor,D["--n-option-text-color-hover"]=M.optionTextColorHover,D["--n-option-text-color-active"]=M.optionTextColorActive,D["--n-option-text-color-child-active"]=M.optionTextColorChildActive,D["--n-prefix-color"]=M.prefixColor,D["--n-suffix-color"]=M.suffixColor,D["--n-group-header-text-color"]=M.groupHeaderTextColor),D}),A=R?Re("dropdown",P(()=>`${e.size[0]}${e.inverted?"i":""}`),c,e):void 0;return{mergedClsPrefix:m,mergedTheme:k,tmNodes:r,mergedShow:o,handleAfterLeave:()=>{e.animated&&w()},doUpdateShow:v,cssVars:R?void 0:c,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender}},render(){const e=(n,r,i,l,s)=>{var a;const{mergedClsPrefix:f,menuProps:b}=this;(a=this.onRender)===null||a===void 0||a.call(this);const h=(b==null?void 0:b(void 0,this.tmNodes.map(R=>R.rawNode)))||{},m={ref:Jo(r),class:[n,`${f}-dropdown`,this.themeClass],clsPrefix:f,tmNodes:this.tmNodes,style:[i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:s};return u(eo,Be(this.$attrs,m,h))},{mergedTheme:t}=this,o={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return u(Io,Object.assign({},we(this.$props,Cr),o),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}}),zr=K({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=O(!!e.show),o=O(null),n=W(Ft);let r=0,i="",l=null;const s=O(!1),a=O(!1),f=P(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:b,mergedRtlRef:h}=me(e),m=No("Drawer",h,b),R=x=>{a.value=!0,r=f.value?x.clientY:x.clientX,i=document.body.style.cursor,document.body.style.cursor=f.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",E),document.body.addEventListener("mouseleave",y),document.body.addEventListener("mouseup",$)},k=()=>{l!==null&&(window.clearTimeout(l),l=null),a.value?s.value=!0:l=window.setTimeout(()=>{s.value=!0},300)},C=()=>{l!==null&&(window.clearTimeout(l),l=null),s.value=!1},{doUpdateHeight:v,doUpdateWidth:w}=n,E=x=>{var S,N;if(a.value)if(f.value){let c=((S=o.value)===null||S===void 0?void 0:S.offsetHeight)||0;const A=r-x.clientY;c+=e.placement==="bottom"?A:-A,v(c),r=x.clientY}else{let c=((N=o.value)===null||N===void 0?void 0:N.offsetWidth)||0;const A=r-x.clientX;c+=e.placement==="right"?A:-A,w(c),r=x.clientX}},$=()=>{a.value&&(r=0,a.value=!1,document.body.style.cursor=i,document.body.removeEventListener("mousemove",E),document.body.removeEventListener("mouseup",$),document.body.removeEventListener("mouseleave",y))},y=$;he(()=>{e.show&&(t.value=!0)}),Q(()=>e.show,x=>{x||$()}),le(()=>{$()});const d=P(()=>{const{show:x}=e,S=[[ht,x]];return e.showMask||S.push([_o,e.onClickoutside,void 0,{capture:!0}]),S});function p(){var x;t.value=!1,(x=e.onAfterLeave)===null||x===void 0||x.call(e)}return ln(P(()=>e.blockScroll&&t.value)),X(Ht,o),X(Qe,null),X(Bt,null),{bodyRef:o,rtlEnabled:m,mergedClsPrefix:n.mergedClsPrefixRef,isMounted:n.isMountedRef,mergedTheme:n.mergedThemeRef,displayed:t,transitionName:P(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:p,bodyDirectives:d,handleMousedownResizeTrigger:R,handleMouseenterResizeTrigger:k,handleMouseleaveResizeTrigger:C,isDragging:a,isHoverOnResizeTrigger:s}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?qe(u("div",{role:"none"},u(Po,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>u(Ie,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>qe(u("div",Be(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?u("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?u("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):u(Je,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[ht,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Rr,cubicBezierEaseOut:Ir}=He;function Nr({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-right"}={}){return[z(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Rr}`}),z(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Ir}`}),z(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),z(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),z(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),z(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:_r,cubicBezierEaseOut:Pr}=He;function Ar({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-left"}={}){return[z(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${_r}`}),z(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Pr}`}),z(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),z(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),z(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),z(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:Tr,cubicBezierEaseOut:$r}=He;function Er({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-top"}={}){return[z(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Tr}`}),z(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${$r}`}),z(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),z(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),z(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),z(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:Lr,cubicBezierEaseOut:Or}=He;function Br({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-bottom"}={}){return[z(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Lr}`}),z(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Or}`}),z(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),z(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),z(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),z(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}const Hr=z([I("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Nr(),Ar(),Er(),Br(),L("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),L("native-scrollbar",[I("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),T("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[L("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),I("drawer-content-wrapper",`
 box-sizing: border-box;
 `),I("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[L("native-scrollbar",[I("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),I("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),I("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),I("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[T("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),I("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),L("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[T("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),L("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[T("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),L("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[T("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),L("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[T("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),z("body",[z(">",[I("drawer-container",{position:"fixed"})])]),I("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[z("> *",{pointerEvents:"all"})]),I("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[L("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Ao({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),Mr=Object.assign(Object.assign({},oe.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),Fr=K({name:"Drawer",inheritAttrs:!1,props:Mr,setup(e){he(()=>{e.drawerStyle!==void 0&&Z("drawer","`drawer-style` is deprecated, please use `style` instead."),e.drawerClass!==void 0&&Z("drawer","`drawer-class` is deprecated, please use `class` instead."),e.target!==void 0&&Z("drawer","`target` is deprecated, please use `to` instead."),e.onShow!==void 0&&Z("drawer","`on-show` is deprecated, please use `on-update:show` instead."),e.onHide!==void 0&&Z("drawer","`on-hide` is deprecated, please use `on-update:show` instead.")});const{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:n}=me(e),r=Et(),i=oe("Drawer","-drawer",Hr,To,e,t),l=O(e.defaultWidth),s=O(e.defaultHeight),a=ye(q(e,"width"),l),f=ye(q(e,"height"),s),b=P(()=>{const{placement:d}=e;return d==="top"||d==="bottom"?"":Le(a.value)}),h=P(()=>{const{placement:d}=e;return d==="left"||d==="right"?"":Le(f.value)}),m=d=>{const{onUpdateWidth:p,"onUpdate:width":x}=e;p&&V(p,d),x&&V(x,d),l.value=d},R=d=>{const{onUpdateHeight:p,"onUpdate:width":x}=e;p&&V(p,d),x&&V(x,d),s.value=d},k=P(()=>[{width:b.value,height:h.value},e.drawerStyle||""]);function C(d){const{onMaskClick:p,maskClosable:x}=e;x&&E(!1),p&&p(d)}const v=an();function w(d){var p;(p=e.onEsc)===null||p===void 0||p.call(e),e.show&&e.closeOnEsc&&en(d)&&!v.value&&E(!1)}function E(d){const{onHide:p,onUpdateShow:x,"onUpdate:show":S}=e;x&&V(x,d),S&&V(S,d),p&&!d&&V(p,d)}X(Ft,{isMountedRef:r,mergedThemeRef:i,mergedClsPrefixRef:t,doUpdateShow:E,doUpdateHeight:R,doUpdateWidth:m});const $=P(()=>{const{common:{cubicBezierEaseInOut:d,cubicBezierEaseIn:p,cubicBezierEaseOut:x},self:{color:S,textColor:N,boxShadow:c,lineHeight:A,headerPadding:_,footerPadding:j,bodyPadding:F,titleFontSize:M,titleTextColor:g,titleFontWeight:H,headerBorderBottom:U,footerBorderTop:ee,closeIconColor:re,closeIconColorHover:Ce,closeIconColorPressed:ie,closeColorHover:Fe,closeColorPressed:Ke,closeIconSize:je,closeSize:De,closeBorderRadius:D,resizableTriggerColorHover:lo}}=i.value;return{"--n-line-height":A,"--n-color":S,"--n-text-color":N,"--n-box-shadow":c,"--n-bezier":d,"--n-bezier-out":x,"--n-bezier-in":p,"--n-header-padding":_,"--n-body-padding":F,"--n-footer-padding":j,"--n-title-text-color":g,"--n-title-font-size":M,"--n-title-font-weight":H,"--n-header-border-bottom":U,"--n-footer-border-top":ee,"--n-close-icon-color":re,"--n-close-icon-color-hover":Ce,"--n-close-icon-color-pressed":ie,"--n-close-size":De,"--n-close-color-hover":Fe,"--n-close-color-pressed":Ke,"--n-close-icon-size":je,"--n-close-border-radius":D,"--n-resize-trigger-color-hover":lo}}),y=n?Re("drawer",void 0,$,e):void 0;return{mergedClsPrefix:t,namespace:o,mergedBodyStyle:k,handleMaskClick:C,handleEsc:w,mergedTheme:i,cssVars:n?void 0:$,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender,isMounted:r}},render(){const{mergedClsPrefix:e}=this;return u(Lt,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),qe(u("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?u(Ie,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?u("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,u(zr,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[$o,{zIndex:this.zIndex,enabled:this.show}]])}})}}),_e=pe("n-menu"),st=pe("n-submenu"),ct=pe("n-menu-item-group"),Te=8;function dt(e){const t=W(_e),{props:o,mergedCollapsedRef:n}=t,r=W(st,null),i=W(ct,null),l=P(()=>o.mode==="horizontal"),s=P(()=>l.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=P(()=>{var m;return Math.max((m=o.collapsedIconSize)!==null&&m!==void 0?m:o.iconSize,o.iconSize)}),f=P(()=>{var m;return!l.value&&e.root&&n.value&&(m=o.collapsedIconSize)!==null&&m!==void 0?m:o.iconSize}),b=P(()=>{if(l.value)return;const{collapsedWidth:m,indent:R,rootIndent:k}=o,{root:C,isGroup:v}=e,w=k===void 0?R:k;if(C)return n.value?m/2-a.value/2:w;if(i)return R/2+i.paddingLeftRef.value;if(r)return(v?R/2:R)+r.paddingLeftRef.value}),h=P(()=>{const{collapsedWidth:m,indent:R,rootIndent:k}=o,{value:C}=a,{root:v}=e;return l.value||!v||!n.value?Te:(k===void 0?R:k)+C+Te-(m+C)/2});return{dropdownPlacement:s,activeIconSize:f,maxIconSize:a,paddingLeft:b,iconMarginRight:h,NMenu:t,NSubmenu:r}}const ut={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},to=Object.assign(Object.assign({},ut),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Kr=K({name:"MenuOptionGroup",props:to,setup(e){X(st,null);const t=dt(e);X(ct,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:n}=W(_e);return function(){const{value:r}=o,i=t.paddingLeft.value,{nodeProps:l}=n,s=l==null?void 0:l(e.tmNode.rawNode);return u("div",{class:`${r}-menu-item-group`,role:"group"},u("div",Object.assign({},s,{class:[`${r}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),ne(e.title),e.extra?u(xe,null," ",ne(e.extra)):null),u("div",null,e.tmNodes.map(a=>ft(a,n))))}}}),oo=K({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=W(_e);return{menuProps:t,style:P(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:P(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:r}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:n,renderExtra:r,expandIcon:i}}=this,l=o?o(t.rawNode):ne(this.icon);return u("div",{onClick:s=>{var a;(a=this.onClick)===null||a===void 0||a.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},l&&u("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[l]),u("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(t.rawNode):ne(this.title),this.extra||r?u("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(t.rawNode):ne(this.extra)):null),this.showArrow?u(Ot,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(t.rawNode):u(_n,null)}):null)}}),no=Object.assign(Object.assign({},ut),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),jr=K({name:"Submenu",props:no,setup(e){const t=dt(e),{NMenu:o,NSubmenu:n}=t,{props:r,mergedCollapsedRef:i,mergedThemeRef:l}=o,s=P(()=>{const{disabled:m}=e;return n!=null&&n.mergedDisabledRef.value||r.disabled?!0:m}),a=O(!1);X(st,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:s}),X(ct,null);function f(){const{onClick:m}=e;m&&m()}function b(){s.value||(i.value||o.toggleExpand(e.internalKey),f())}function h(m){a.value=m}return{menuProps:r,mergedTheme:l,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:a,paddingLeft:t.paddingLeft,mergedDisabled:s,mergedValue:o.mergedValueRef,childActive:se(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:P(()=>r.mode==="horizontal"?!1:i.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:P(()=>!s.value&&(r.mode==="horizontal"||i.value)),handlePopoverShowChange:h,handleClick:b}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:n}}=this,r=()=>{const{isHorizontal:l,paddingLeft:s,collapsed:a,mergedDisabled:f,maxIconSize:b,activeIconSize:h,title:m,childActive:R,icon:k,handleClick:C,menuProps:{nodeProps:v},dropdownShow:w,iconMarginRight:E,tmNode:$,mergedClsPrefix:y}=this,d=v==null?void 0:v($.rawNode);return u("div",Object.assign({},d,{class:[`${y}-menu-item`,d==null?void 0:d.class],role:"menuitem"}),u(oo,{tmNode:$,paddingLeft:s,collapsed:a,disabled:f,iconMarginRight:E,maxIconSize:b,activeIconSize:h,title:m,extra:this.extra,showArrow:!l,childActive:R,clsPrefix:y,icon:k,hover:w,onClick:C}))},i=()=>u(Eo,null,{default:()=>{const{tmNodes:l,collapsed:s}=this;return s?null:u("div",{class:`${t}-submenu-children`,role:"menu"},l.map(a=>ft(a,this.menuProps)))}});return this.root?u(Sr,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>u("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),this.isHorizontal?null:i())}):u("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),i())}}),ro=Object.assign(Object.assign({},ut),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Dr=K({name:"MenuOption",props:ro,setup(e){const t=dt(e),{NSubmenu:o,NMenu:n}=t,{props:r,mergedClsPrefixRef:i,mergedCollapsedRef:l}=n,s=o?o.mergedDisabledRef:{value:!1},a=P(()=>s.value||e.disabled);function f(h){const{onClick:m}=e;m&&m(h)}function b(h){a.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),f(h))}return{mergedClsPrefix:i,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:r,dropdownEnabled:se(()=>e.root&&l.value&&r.mode!=="horizontal"&&!a.value),selected:se(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:b}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:n,nodeProps:r}}=this,i=r==null?void 0:r(o.rawNode);return u("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),u(Lo,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):ne(this.title),trigger:()=>u(oo,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Ur=K({name:"MenuDivider",setup(){const e=W(_e),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:u("div",{class:`${t.value}-menu-divider`})}}),Wr=Ne(to),Gr=Ne(ro),Vr=Ne(no);function io(e){return e.type==="divider"||e.type==="render"}function qr(e){return e.type==="divider"}function ft(e,t){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(io(o))return qr(o)?u(Ur,Object.assign({key:e.key},o.props)):null;const{labelField:r}=t,{key:i,level:l,isGroup:s}=e,a=Object.assign(Object.assign({},o),{title:o.title||o[r],extra:o.titleExtra||o.extra,key:i,internalKey:i,level:l,root:l===0,isGroup:s});return e.children?e.isGroup?u(Kr,we(a,Wr,{tmNode:e,tmNodes:e.children,key:i})):u(jr,we(a,Vr,{key:i,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):u(Dr,we(a,Gr,{key:i,tmNode:e}))}function Xr(e){he(()=>{e.items&&Z("menu","`items` is deprecated, please use `options` instead."),e.onOpenNamesChange&&Z("menu","`on-open-names-change` is deprecated, please use `on-update:expanded-keys` instead."),e.onSelect&&Z("menu","`on-select` is deprecated, please use `on-update:value` instead."),e.onExpandedNamesChange&&Z("menu","`on-expanded-names-change` is deprecated, please use `on-update:expanded-keys` instead."),e.expandedNames&&Z("menu","`expanded-names` is deprecated, please use `expanded-keys` instead."),e.defaultExpandedNames&&Z("menu","`default-expanded-names` is deprecated, please use `default-expanded-keys` instead.")})}const _t=[z("&::before","background-color: var(--n-item-color-hover);"),T("arrow",`
 color: var(--n-arrow-color-hover);
 `),T("icon",`
 color: var(--n-item-icon-color-hover);
 `),I("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[z("a",`
 color: var(--n-item-text-color-hover);
 `),T("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Pt=[T("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),I("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[z("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),T("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Yr=z([I("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[L("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[I("submenu","margin: 0;"),I("menu-item","margin: 0;"),I("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[z("&::before","display: none;"),L("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),I("menu-item-content",[L("selected",[T("icon","color: var(--n-item-icon-color-active-horizontal);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[z("a","color: var(--n-item-text-color-active-horizontal);"),T("extra","color: var(--n-item-text-color-active-horizontal);")])]),L("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[z("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),T("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),T("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ae("disabled",[ae("selected, child-active",[z("&:focus-within",Pt)]),L("selected",[de(null,[T("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[z("a","color: var(--n-item-text-color-active-hover-horizontal);"),T("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),L("child-active",[de(null,[T("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[z("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),T("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),de("border-bottom: 2px solid var(--n-border-color-horizontal);",Pt)]),I("menu-item-content-header",[z("a","color: var(--n-item-text-color-horizontal);")])])]),L("collapsed",[I("menu-item-content",[L("selected",[z("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),I("menu-item-content-header","opacity: 0;"),T("arrow","opacity: 0;"),T("icon","color: var(--n-item-icon-color-collapsed);")])]),I("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),I("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[z("> *","z-index: 1;"),z("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),L("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),L("collapsed",[T("arrow","transform: rotate(0);")]),L("selected",[z("&::before","background-color: var(--n-item-color-active);"),T("arrow","color: var(--n-arrow-color-active);"),T("icon","color: var(--n-item-icon-color-active);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[z("a","color: var(--n-item-text-color-active);"),T("extra","color: var(--n-item-text-color-active);")])]),L("child-active",[I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[z("a",`
 color: var(--n-item-text-color-child-active);
 `),T("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),T("arrow",`
 color: var(--n-arrow-color-child-active);
 `),T("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ae("disabled",[ae("selected, child-active",[z("&:focus-within",_t)]),L("selected",[de(null,[T("arrow","color: var(--n-arrow-color-active-hover);"),T("icon","color: var(--n-item-icon-color-active-hover);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[z("a","color: var(--n-item-text-color-active-hover);"),T("extra","color: var(--n-item-text-color-active-hover);")])])]),L("child-active",[de(null,[T("arrow","color: var(--n-arrow-color-child-active-hover);"),T("icon","color: var(--n-item-icon-color-child-active-hover);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[z("a","color: var(--n-item-text-color-child-active-hover);"),T("extra","color: var(--n-item-text-color-child-active-hover);")])])]),L("selected",[de(null,[z("&::before","background-color: var(--n-item-color-active-hover);")])]),de(null,_t)]),T("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),T("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),I("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[z("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[z("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),T("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),I("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[I("menu-item-content",`
 height: var(--n-item-height);
 `),I("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Xo({duration:".2s"})])]),I("menu-item-group",[I("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),I("menu-tooltip",[z("a",`
 color: inherit;
 text-decoration: none;
 `)]),I("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function de(e,t){return[L("hover",e,t),z("&:hover",e,t)]}const Zr=Object.assign(Object.assign({},oe.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),At=K({name:"Menu",props:Zr,setup(e){Xr(e);const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=me(e),n=oe("Menu","-menu",Yr,Oo,e,t),r=W(Bo,null),i=P(()=>{var S;const{collapsed:N}=e;if(N!==void 0)return N;if(r){const{collapseModeRef:c,collapsedRef:A}=r;if(c.value==="width")return(S=A.value)!==null&&S!==void 0?S:!1}return!1}),l=P(()=>{const{keyField:S,childrenField:N,disabledField:c}=e;return Yt(e.items||e.options,{getIgnored(A){return io(A)},getChildren(A){return A[N]},getDisabled(A){return A[c]},getKey(A){var _;return(_=A[S])!==null&&_!==void 0?_:A.name}})}),s=P(()=>new Set(l.value.treeNodes.map(S=>S.key))),{watchProps:a}=e,f=O(null);a!=null&&a.includes("defaultValue")?he(()=>{f.value=e.defaultValue}):f.value=e.defaultValue;const b=q(e,"value"),h=ye(b,f),m=O([]),R=()=>{m.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(h.value,{includeSelf:!1}).keyPath};a!=null&&a.includes("defaultExpandedKeys")?he(R):R();const k=Ho(e,["expandedNames","expandedKeys"]),C=ye(k,m),v=P(()=>l.value.treeNodes),w=P(()=>l.value.getPath(h.value).keyPath);X(_e,{props:e,mergedCollapsedRef:i,mergedThemeRef:n,mergedValueRef:h,mergedExpandedKeysRef:C,activePathRef:w,mergedClsPrefixRef:t,isHorizontalRef:P(()=>e.mode==="horizontal"),invertedRef:q(e,"inverted"),doSelect:E,toggleExpand:y});function E(S,N){const{"onUpdate:value":c,onUpdateValue:A,onSelect:_}=e;A&&V(A,S,N),c&&V(c,S,N),_&&V(_,S,N),f.value=S}function $(S){const{"onUpdate:expandedKeys":N,onUpdateExpandedKeys:c,onExpandedNamesChange:A,onOpenNamesChange:_}=e;N&&V(N,S),c&&V(c,S),A&&V(A,S),_&&V(_,S),m.value=S}function y(S){const N=Array.from(C.value),c=N.findIndex(A=>A===S);if(~c)N.splice(c,1);else{if(e.accordion&&s.value.has(S)){const A=N.findIndex(_=>s.value.has(_));A>-1&&N.splice(A,1)}N.push(S)}$(N)}const d=S=>{const N=l.value.getPath(S??h.value,{includeSelf:!1}).keyPath;if(!N.length)return;const c=Array.from(C.value),A=new Set([...c,...N]);e.accordion&&s.value.forEach(_=>{A.has(_)&&!N.includes(_)&&A.delete(_)}),$(Array.from(A))},p=P(()=>{const{inverted:S}=e,{common:{cubicBezierEaseInOut:N},self:c}=n.value,{borderRadius:A,borderColorHorizontal:_,fontSize:j,itemHeight:F,dividerColor:M}=c,g={"--n-divider-color":M,"--n-bezier":N,"--n-font-size":j,"--n-border-color-horizontal":_,"--n-border-radius":A,"--n-item-height":F};return S?(g["--n-group-text-color"]=c.groupTextColorInverted,g["--n-color"]=c.colorInverted,g["--n-item-text-color"]=c.itemTextColorInverted,g["--n-item-text-color-hover"]=c.itemTextColorHoverInverted,g["--n-item-text-color-active"]=c.itemTextColorActiveInverted,g["--n-item-text-color-child-active"]=c.itemTextColorChildActiveInverted,g["--n-item-text-color-child-active-hover"]=c.itemTextColorChildActiveInverted,g["--n-item-text-color-active-hover"]=c.itemTextColorActiveHoverInverted,g["--n-item-icon-color"]=c.itemIconColorInverted,g["--n-item-icon-color-hover"]=c.itemIconColorHoverInverted,g["--n-item-icon-color-active"]=c.itemIconColorActiveInverted,g["--n-item-icon-color-active-hover"]=c.itemIconColorActiveHoverInverted,g["--n-item-icon-color-child-active"]=c.itemIconColorChildActiveInverted,g["--n-item-icon-color-child-active-hover"]=c.itemIconColorChildActiveHoverInverted,g["--n-item-icon-color-collapsed"]=c.itemIconColorCollapsedInverted,g["--n-item-text-color-horizontal"]=c.itemTextColorHorizontalInverted,g["--n-item-text-color-hover-horizontal"]=c.itemTextColorHoverHorizontalInverted,g["--n-item-text-color-active-horizontal"]=c.itemTextColorActiveHorizontalInverted,g["--n-item-text-color-child-active-horizontal"]=c.itemTextColorChildActiveHorizontalInverted,g["--n-item-text-color-child-active-hover-horizontal"]=c.itemTextColorChildActiveHoverHorizontalInverted,g["--n-item-text-color-active-hover-horizontal"]=c.itemTextColorActiveHoverHorizontalInverted,g["--n-item-icon-color-horizontal"]=c.itemIconColorHorizontalInverted,g["--n-item-icon-color-hover-horizontal"]=c.itemIconColorHoverHorizontalInverted,g["--n-item-icon-color-active-horizontal"]=c.itemIconColorActiveHorizontalInverted,g["--n-item-icon-color-active-hover-horizontal"]=c.itemIconColorActiveHoverHorizontalInverted,g["--n-item-icon-color-child-active-horizontal"]=c.itemIconColorChildActiveHorizontalInverted,g["--n-item-icon-color-child-active-hover-horizontal"]=c.itemIconColorChildActiveHoverHorizontalInverted,g["--n-arrow-color"]=c.arrowColorInverted,g["--n-arrow-color-hover"]=c.arrowColorHoverInverted,g["--n-arrow-color-active"]=c.arrowColorActiveInverted,g["--n-arrow-color-active-hover"]=c.arrowColorActiveHoverInverted,g["--n-arrow-color-child-active"]=c.arrowColorChildActiveInverted,g["--n-arrow-color-child-active-hover"]=c.arrowColorChildActiveHoverInverted,g["--n-item-color-hover"]=c.itemColorHoverInverted,g["--n-item-color-active"]=c.itemColorActiveInverted,g["--n-item-color-active-hover"]=c.itemColorActiveHoverInverted,g["--n-item-color-active-collapsed"]=c.itemColorActiveCollapsedInverted):(g["--n-group-text-color"]=c.groupTextColor,g["--n-color"]=c.color,g["--n-item-text-color"]=c.itemTextColor,g["--n-item-text-color-hover"]=c.itemTextColorHover,g["--n-item-text-color-active"]=c.itemTextColorActive,g["--n-item-text-color-child-active"]=c.itemTextColorChildActive,g["--n-item-text-color-child-active-hover"]=c.itemTextColorChildActiveHover,g["--n-item-text-color-active-hover"]=c.itemTextColorActiveHover,g["--n-item-icon-color"]=c.itemIconColor,g["--n-item-icon-color-hover"]=c.itemIconColorHover,g["--n-item-icon-color-active"]=c.itemIconColorActive,g["--n-item-icon-color-active-hover"]=c.itemIconColorActiveHover,g["--n-item-icon-color-child-active"]=c.itemIconColorChildActive,g["--n-item-icon-color-child-active-hover"]=c.itemIconColorChildActiveHover,g["--n-item-icon-color-collapsed"]=c.itemIconColorCollapsed,g["--n-item-text-color-horizontal"]=c.itemTextColorHorizontal,g["--n-item-text-color-hover-horizontal"]=c.itemTextColorHoverHorizontal,g["--n-item-text-color-active-horizontal"]=c.itemTextColorActiveHorizontal,g["--n-item-text-color-child-active-horizontal"]=c.itemTextColorChildActiveHorizontal,g["--n-item-text-color-child-active-hover-horizontal"]=c.itemTextColorChildActiveHoverHorizontal,g["--n-item-text-color-active-hover-horizontal"]=c.itemTextColorActiveHoverHorizontal,g["--n-item-icon-color-horizontal"]=c.itemIconColorHorizontal,g["--n-item-icon-color-hover-horizontal"]=c.itemIconColorHoverHorizontal,g["--n-item-icon-color-active-horizontal"]=c.itemIconColorActiveHorizontal,g["--n-item-icon-color-active-hover-horizontal"]=c.itemIconColorActiveHoverHorizontal,g["--n-item-icon-color-child-active-horizontal"]=c.itemIconColorChildActiveHorizontal,g["--n-item-icon-color-child-active-hover-horizontal"]=c.itemIconColorChildActiveHoverHorizontal,g["--n-arrow-color"]=c.arrowColor,g["--n-arrow-color-hover"]=c.arrowColorHover,g["--n-arrow-color-active"]=c.arrowColorActive,g["--n-arrow-color-active-hover"]=c.arrowColorActiveHover,g["--n-arrow-color-child-active"]=c.arrowColorChildActive,g["--n-arrow-color-child-active-hover"]=c.arrowColorChildActiveHover,g["--n-item-color-hover"]=c.itemColorHover,g["--n-item-color-active"]=c.itemColorActive,g["--n-item-color-active-hover"]=c.itemColorActiveHover,g["--n-item-color-active-collapsed"]=c.itemColorActiveCollapsed),g}),x=o?Re("menu",P(()=>e.inverted?"a":"b"),p,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:k,uncontrolledExpanededKeys:m,mergedExpandedKeys:C,uncontrolledValue:f,mergedValue:h,activePath:w,tmNodes:v,mergedTheme:n,mergedCollapsed:i,cssVars:o?void 0:p,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender,showOption:d}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:n}=this;return n==null||n(),u("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(r=>ft(r,this.$props)))}}),Jr=Object.assign(Object.assign({},oe.props),{trigger:String,xScrollable:Boolean,onScroll:Function}),Qr=K({name:"Scrollbar",props:Jr,setup(){const e=O(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var n;(n=e.value)===null||n===void 0||n.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var n;(n=e.value)===null||n===void 0||n.scrollBy(o[0],o[1])}}),{scrollbarInstRef:e})},render(){return u(Je,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),ei=Qr,ti={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},oi=B("path",{d:"M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.89 15.89 0 0 0-5.46-12A143 143 0 0 0 202.24 74z",fill:"currentColor"},null,-1),ni=B("path",{d:"M481.92 53.3A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.31 143.31 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61z",fill:"currentColor"},null,-1),ri=K({name:"Book",render:function(t,o){return G(),te("svg",ti,[oi,ni])}}),ii={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},li=B("path",{d:"M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ai=B("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 160v288"},null,-1),si=K({name:"BookOutline",render:function(t,o){return G(),te("svg",ii,[li,ai])}}),ci={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},di=B("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 152h336"},null,-1),ui=B("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 256h336"},null,-1),fi=B("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 360h336"},null,-1),hi=K({name:"Menu",render:function(t,o){return G(),te("svg",ci,[di,ui,fi])}}),vi={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},mi=B("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",fill:"currentColor"},null,-1),pi=K({name:"ArticleFilled",render:function(t,o){return G(),te("svg",vi,[mi])}}),gi=K({__name:"ArticleAnchors",props:{options:{type:Array,required:!0},prefix:{type:String,default:""}},setup(e){const t=e;return(o,n)=>{const r=et("article-anchors",!0);return G(!0),ue(xe,null,Kt(t.options,(i,l)=>(G(),te(Y(or),{key:i.href,title:`${t.prefix}${l+1}${t.prefix?"":"."} ${i.title}`,href:i.href},{default:J(()=>[i.children.length>0?(G(),te(r,{key:0,options:i.children,prefix:t.prefix+`${l+1}.`},null,8,["options","prefix"])):ze("v-if",!0)]),_:2},1032,["title","href"]))),128)}}}),bi=tt(gi,[["__file","C:/Users/marti/projects/mcswift.me/packages/website/src/client/components/ArticleAnchors.vue"]]),wi={class:"article-wrap"},yi={class:"article-container"},xi={key:1},Ci={style:{"margin-bottom":"20px"}},ki={key:1,class:"article-anchor-placeholder"},Si=K({__name:"Article",props:{component:{type:Object}},setup(e){const t=O(Ko),o=O(window.innerWidth);window.addEventListener("resize",()=>{o.value=window.innerWidth});const n=P(()=>o.value>800?{}:{Typography:{headerFontSize1:"24px",headerFontSize2:"20px"}}),r={color:"rgba(255, 255, 255, 0.5)",colorHover:"rgba(255, 255, 255, 0.8)"},i=jt([]),l=()=>{const s=[],a=new Map,f={};for(let b=2;b<=6;b++)s.push(...document.querySelectorAll(`.markdown-body h${b}`));return s.sort((b,h)=>{switch(b.compareDocumentPosition(h)){case 2:return 1;case 4:return-1}return 0}),s.forEach((b,h)=>{const m=b.nodeName[1],R=`AT${h+1}`;b.id=R,f[m]=R;const k=f[(Number(m)-1).toString()];a.set(R,{level:m,title:b.textContent,href:`#${R}`,children:[]}),m!=="2"&&a.get(k).children.push(a.get(R))}),[...a.values()].filter(b=>b.level==="2")};return ve(()=>{i.value=l()}),(s,a)=>{const f=et("router-link");return G(),ue("div",wi,[vt("div",yi,[B(Y(ei),{"theme-overrides":r},{default:J(()=>[B(Y(Mo),{"theme-overrides":Y(n),class:"markdown-style-provider"},{default:J(()=>[e.component?(G(),te(Dt(e.component),{key:0})):(G(),ue("div",xi,[B(Y(Go),null,{default:J(()=>[be("目录")]),_:1}),B(Y(Vo),null,{default:J(()=>[(G(!0),ue(xe,null,Kt(t.value,(b,h)=>(G(),te(Y(qo),{key:h},{default:J(()=>[B(f,{to:b.path||"/blog",custom:""},{default:J(({navigate:m,href:R})=>[B(Y(Gt),{class:"mcswift-link",href:R,onClick:m},{default:J(()=>{var k;return[be(jo((k=b.meta)==null?void 0:k.title),1)]}),_:2},1032,["href","onClick"])]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})]))]),_:1},8,["theme-overrides"]),B(Y(vr),{right:30,bottom:20})]),_:1})]),o.value>1e3?(G(),ue(xe,{key:0},[Y(i).length>0?(G(),te(Y(ar),{key:0,class:"article-anchor","show-rail":"","ignore-gap":"","show-background":"","offset-target":".article-container"},{default:J(()=>[ze(" <template > "),vt("div",Ci,[B(Y(Wt),{style:Fo(`font-size: ${o.value>800?20:16}px;margin-left: 14px`),type:"success",strong:""},{default:J(()=>[be("目录")]),_:1},8,["style"])]),B(bi,{options:Y(i)},null,8,["options"]),ze(" </template> ")]),_:1})):(G(),ue("div",ki))],64)):ze("v-if",!0)])}}});const zi=tt(Si,[["__scopeId","data-v-f8795f94"],["__file","C:/Users/marti/projects/mcswift.me/packages/website/src/client/components/Article.vue"]]),Ri={class:"blog",id:"BlogPage"},Ii=K({__name:"index",setup(e){const t=Do(),o=(m,R="/blog")=>{const k=[];for(const C of m){const v=C.path?R+"/"+C.path:R;k.push({label:()=>({folder:B("span",null,[C.name]),passage:B("div",{onClick:()=>i.value=!1,style:"white-space: normal"},[B(mt,{to:v},{default:()=>[C.name]})]),link:B(Gt,{href:C.value,target:"_blank"},null)})[C.type],icon:()=>C.children?C.children.length>0?B(Se,null,{default:()=>[B(ri,null,null)]}):B(Se,null,{default:()=>[B(si,null,null)]}):B(Se,null,{default:()=>[B(pi,null,null)]}),key:v,children:C.children?o(C.children,v):void 0})}return k},r=[{label:()=>B("div",{onClick:()=>i.value=!1},[B(mt,{to:"/blog"},{default:()=>[B(Wt,{style:`font-size: ${s.value>800?20:16}px;`,type:"info",strong:!0},{default:()=>[be("全部文章")]})]})]),key:"/blog"},...o(Uo)],i=O(!1),l=O("/blog/");Q(()=>t.path,m=>{l.value=m},{immediate:!0});const s=O(window.innerWidth);window.addEventListener("resize",()=>{s.value=window.innerWidth});const a=()=>s.value>800?B(At,{class:"blog-side-nav content-menu",indent:16,"collapsed-width":64,"collapsed-icon-size":22,options:r,value:l.value},null):B(xe,null,[B(Wo,{text:!0,style:"font-size: 24px;",class:"blog-side-nav",onClick:()=>i.value=!i.value},{default:()=>[B(Se,null,{default:()=>[B(hi,null,null)]})]}),B(Fr,{show:i.value,"on-update:show":m=>i.value=m,width:"85vw",placement:"left"},{default:()=>[B(At,{class:"content-menu",indent:16,"collapsed-width":64,"collapsed-icon-size":22,options:r,value:l.value},null)]})]),f=W("updateMeta");f({title:"BLOG"}),Q(()=>t,m=>{var R;f({title:`BLOG | ${((R=m==null?void 0:m.meta)==null?void 0:R.title)||"全部文章"}`})},{deep:!0,immediate:!0});const b=jt([]),h=()=>{const m=[],R=new Map,k={};for(let C=2;C<=6;C++)m.push(...document.querySelectorAll(`.markdown-body h${C}`));return m.sort((C,v)=>{switch(C.compareDocumentPosition(v)){case 2:return 1;case 4:return-1}return 0}),m.forEach((C,v)=>{const w=C.nodeName[1],E=`AT${v+1}`;C.id=E,k[w]=E;const $=k[(Number(w)-1).toString()];R.set(E,{level:w,title:C.textContent,href:`#${E}`,children:[]}),w!=="2"&&R.get($).children.push(R.get(E))}),[...R.values()].filter(C=>C.level==="2")};return ve(()=>{b.value=h()}),(m,R)=>{const k=et("router-view");return G(),ue("div",Ri,[(G(),te(Dt(a))),B(k,null,{default:J(({Component:C})=>[B(Ie,{mode:"out-in","enter-active-class":"animate__animated animate__fadeIn animate__faster","leave-active-class":"animate__animated animate__fadeOut animate__faster"},{default:J(()=>[C?(G(),te(zi,{component:C,key:Y(t).path},null,8,["component"])):ze("v-if",!0)]),_:2},1024)]),_:1})])}}});const Li=tt(Ii,[["__scopeId","data-v-c31980f2"],["__file","C:/Users/marti/projects/mcswift.me/packages/website/src/client/pages/blog/index.vue"]]);export{Li as default};
