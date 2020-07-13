(function(e){function t(t){for(var n,u,i=t[0],l=t[1],s=t[2],c=0,p=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var l=r[u];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={6:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{1:"f16dff3c",2:"76d130d3",3:"05f3bbaa",4:"9aa4b928",5:"042d183c",7:"bce6e9fe"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var s=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(c);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,r[1](s)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=s;a.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"2f39":function(e,t,r){"use strict";r.r(t);r("5319");var n=r("c973"),o=r.n(n),a=(r("81a9"),r("985d"),r("31cd"),r("2b0e")),u=r("f476"),i=r("2ec3"),l=r("b05d"),s=r("436b"),c=r("f508");a["a"].use(l["a"],{config:{dark:!0},lang:u["a"],iconSet:i["a"],plugins:{Dialog:s["a"],Loading:c["a"]}});var f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},p=[],d={name:"App"},h=d,v=r("2877"),m=Object(v["a"])(h,f,p,!1,null,null,null),b=m.exports,g=r("2f62"),y=(r("fb6a"),r("e6cf"),{namespaced:!0,state:{token:localStorage.getItem("token")||null,routes:localStorage.getItem("routes")||null},getters:{routes:e=>JSON.parse(e.routes).map(e=>({name:e.name,icon:e.icon,path:e.path,component:()=>r("a383")("./"+(e.path.charAt(0).toUpperCase()+e.path.slice(1)))})),token:e=>e.token},mutations:{setToken(e,t){localStorage.setItem("token",t)},setRoutes(e,t){localStorage.setItem("routes",JSON.stringify(t))}}});a["a"].use(g["a"]);var w=function(){const e=new g["a"].Store({modules:{local:y},strict:!1});return e},O=r("8c4f");a["a"].use(O["a"]);var P=function({store:e}){const t=[{path:"/login",alias:"/",component:()=>Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"013f"))},{path:"/dashboard",name:"Dashboard",component:()=>Promise.all([r.e(0),r.e(7)]).then(r.bind(null,"713b")),children:e.getters["local/routes"]},{path:"*",name:"Not Found",component:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"e51e"))}],n=new O["a"]({scrollBehavior:()=>({x:0,y:0}),routes:t,mode:"hash",base:""});return n.beforeEach((e,t,r)=>{r()}),n},k=function(){return j.apply(this,arguments)};function j(){return j=o()((function*(){const e="function"===typeof w?yield w({Vue:a["a"]}):w,t="function"===typeof P?yield P({Vue:a["a"],store:e}):P;e.$router=t;const r={router:t,store:e,render:e=>e(b),el:"#q-app"};return{app:r,store:e,router:t}})),j.apply(this,arguments)}var S=r("a925"),x={failed:"Action failed",success:"Action was successful"},_={"en-us":x};a["a"].use(S["a"]);const E=new S["a"]({locale:"en-us",fallbackLocale:"en-us",messages:_});var L=({app:e})=>{e.i18n=E},T=r("bc3a"),A=r.n(T);a["a"].prototype.$axios=A.a,a["a"].prototype.$alert=(e,t,r,n={ok:"OK"},o=(()=>{}))=>{let a={title:e,message:r,persistent:!0,class:"bg-dark text-"+t};for(let u in n)a[u]={label:n[u],color:"dark"};s["a"].create(a).onOk(o)};const C="";function M(){return N.apply(this,arguments)}function N(){return N=o()((function*(){const{app:e,store:t,router:r}=yield k();let n=!1;const o=e=>{n=!0;const t=Object(e)===e?r.resolve(e).route.fullPath:e;window.location.href=t},u=window.location.href.replace(window.location.origin,""),i=[L,void 0,void 0];for(let s=0;!1===n&&s<i.length;s++)if("function"===typeof i[s])try{yield i[s]({app:e,router:r,store:t,Vue:a["a"],ssrContext:null,redirect:o,urlPath:u,publicPath:C})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==n&&new a["a"](e)})),N.apply(this,arguments)}M()},"31cd":function(e,t,r){},a383:function(e,t,r){var n={"./Error404":["e51e",0,1],"./Error404.vue":["e51e",0,1],"./Login":["013f",0,2],"./Login.vue":["013f",0,2],"./Painel":["d9ff",0,3],"./Painel.vue":["d9ff",0,3],"./Produtos":["8303",4],"./Produtos.vue":["8303",4],"./Usuarios":["6e95",0,5],"./Usuarios.vue":["6e95",0,5]};function o(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then((function(){return r(o)}))}o.keys=function(){return Object.keys(n)},o.id="a383",e.exports=o}});