import{h as t,at as r}from"./index.951925e4.js";const{cubicBezierEaseIn:n,cubicBezierEaseOut:i}=r;function p({transformOrigin:s="inherit",duration:e=".2s",enterScale:o=".9",originalTransform:c="",originalTransition:a=""}={}){return[t("&.fade-in-scale-up-transition-leave-active",{transformOrigin:s,transition:`opacity ${e} ${n}, transform ${e} ${n} ${a&&","+a}`}),t("&.fade-in-scale-up-transition-enter-active",{transformOrigin:s,transition:`opacity ${e} ${i}, transform ${e} ${i} ${a&&","+a}`}),t("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${c} scale(${o})`}),t("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${c} scale(1)`})]}export{p as f};
