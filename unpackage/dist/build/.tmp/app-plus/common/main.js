(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{2382:function(e,t,n){"use strict";var o=n("562f"),a=n.n(o);a.a},"34a1":function(e,t,n){"use strict";n.r(t);var o=n("96fc"),a=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=a.a},"562f":function(e,t,n){},"67ac":function(e,t,n){"use strict";n.r(t);var o=n("34a1");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("2382");var r,u,l,c,f=n("f0c5"),i=Object(f["a"])(o["default"],r,u,!1,null,null,null,!1,l,c);t["default"]=i.exports},"96fc":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("66fd"));function r(e){return e&&e.__esModule?e:{default:e}}var u={onLaunch:function(){e.getSystemInfo({success:function(e){a.default.prototype.StatusBar=e.statusBarHeight,"android"==e.platform?a.default.prototype.CustomBar=e.statusBarHeight+50:a.default.prototype.CustomBar=e.statusBarHeight+45}}),a.default.prototype.ColorList=[{title:"嫣红",name:"red",color:"#e54d42"},{title:"桔橙",name:"orange",color:"#f37b1d"},{title:"明黄",name:"yellow",color:"#fbbd08"},{title:"橄榄",name:"olive",color:"#8dc63f"},{title:"森绿",name:"green",color:"#39b54a"},{title:"天青",name:"cyan",color:"#1cbbb4"},{title:"海蓝",name:"blue",color:"#0081ff"},{title:"姹紫",name:"purple",color:"#6739b6"},{title:"木槿",name:"mauve",color:"#9c26b0"},{title:"桃粉",name:"pink",color:"#e03997"},{title:"棕褐",name:"brown",color:"#a5673f"},{title:"玄灰",name:"grey",color:"#8799a3"},{title:"草灰",name:"gray",color:"#aaaaaa"},{title:"墨黑",name:"black",color:"#333333"},{title:"雅白",name:"white",color:"#ffffff"}]},onShow:function(){console.log(o("App Show"," at App.vue:109"))},onHide:function(){console.log(o("App Hide"," at App.vue:112"))}};t.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},aee3:function(e,t,n){"use strict";(function(e){n("fd2f"),n("921b");var t=a(n("66fd")),o=a(n("67ac"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){return n.e("pages/basics/home").then(n.bind(null,"928b"))};t.default.component("basics",l);var c=function(){return n.e("pages/component/home").then(n.bind(null,"dbbd"))};t.default.component("components",c);var f=function(){return n.e("pages/plugin/home").then(n.bind(null,"a4c5"))};t.default.component("plugin",f);var i=function(){return n.e("colorui/components/cu-custom").then(n.bind(null,"8f55"))};t.default.component("cu-custom",i),t.default.config.productionTip=!1,o.default.mpType="app";var p=new t.default(r({},o.default));e(p).$mount()}).call(this,n("6e42")["createApp"])}},[["aee3","common/runtime","common/vendor"]]]);