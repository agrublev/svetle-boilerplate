!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(7)},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"body {\n  background: gray !important;\n  text-align: left !important;\n}\n.heightAdjust {\n  transition: all 0.5s linear;\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(t,e){return e?e.querySelector(t):document.querySelector(t)},c=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=a.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),u=null,l=0,f=[],d=n(5);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(g(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(g(r.parts[s],e));i[r.id]={id:r.id,refs:1,parts:a}}}}function h(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function m(t,e){var n=c(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertAt.before,n);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return y(e,t.attrs),m(t,e),e}function y(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function g(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var s=l++;n=u||(u=b(e)),r=x.bind(null,n,s,!1),o=x.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),m(t,e),e}(e),r=S.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=E.bind(null,n),o=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}t&&p(h(t,e),e);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var $,w=($=[],function(t,e){return $[t]=e,$.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function E(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function S(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=d(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(t,e,n){},function(t,e,n){"use strict";function r(){}n.r(e);function o(t){return t()}function i(){return Object.create(null)}function s(t){t.forEach(o)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}new Set;function u(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function v(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}let b;function y(t){b=t}function g(){if(!b)throw new Error("Function called outside component initialization");return b}function $(){const t=g();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=v(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}const w=[],x=[],E=[],S=[],j=Promise.resolve();let O=!1;function C(){O||(O=!0,j.then(A))}function L(t){E.push(t)}function A(){const t=new Set;do{for(;w.length;){const t=w.shift();y(t),M(t.$$)}for(;x.length;)x.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];t.has(n)||(n(),t.add(n))}E.length=0}while(w.length);for(;S.length;)S.pop()();O=!1}function M(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const U=new Set;let _;function T(t,e){t&&t.i&&(U.delete(t),t.i(e))}function I(t,e,n,r){if(t&&t.o){if(U.has(t))return;U.add(t),_.c.push(()=>{U.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}"undefined"!=typeof window?window:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let k;function R(t,e,n){const{fragment:r,on_mount:i,on_destroy:c,after_update:u}=t.$$;r&&r.m(e,n),L(()=>{const e=i.map(o).filter(a);c?c.push(...e):s(e),t.$$.on_mount=[]}),u.forEach(L)}function N(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e,n,o,a,c,u=[-1]){const l=b;y(t);const f=e.props||{},d=t.$$={fragment:null,ctx:null,props:c,update:r,not_equal:a,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:i(),dirty:u};let p=!1;var h;d.ctx=n?n(t,f,(e,n,r=n)=>(d.ctx&&a(d.ctx[e],d.ctx[e]=r)&&(d.bound[e]&&d.bound[e](r),p&&function(t,e){-1===t.$$.dirty[0]&&(w.push(t),C(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n)):[],d.update(),p=!0,s(d.before_update),d.fragment=!!o&&o(d.ctx),e.target&&(e.hydrate?d.fragment&&d.fragment.l((h=e.target,Array.from(h.childNodes))):d.fragment&&d.fragment.c(),e.intro&&T(t.$$.fragment),R(t,e.target,e.anchor),A()),y(l)}"function"==typeof HTMLElement&&(k=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){N(this,1),this.$destroy=r}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class D{$destroy(){N(this,1),this.$destroy=r}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const H=[];function P(t,e){return{subscribe:q(t,e).subscribe}}function q(t,e=r){let n;const o=[];function i(e){if(c(t,e)&&(t=e,n)){const e=!H.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),H.push(n,t)}if(e){for(let t=0;t<H.length;t+=2)H[t][0](H[t+1]);H.length=0}}}return{set:i,update:function(e){i(e(t))},subscribe:function(s,a=r){const c=[s,a];return o.push(c),1===o.length&&(n=e(i)||r),s(t),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(n(),n=null)}}}}const F=q("ANG");!function(t,e,n){const o=!Array.isArray(t),i=o?[t]:t,c=e.length<2;P(n,t=>{let n=!1;const u=[];let l=0,f=r;const d=()=>{if(l)return;f();const n=e(o?u[0]:u,t);c?t(n):f=a(n)?n:r},p=i.map((t,e)=>t.subscribe(t=>{u[e]=t,l&=~(1<<e),n&&d()},()=>{l|=1<<e}));return n=!0,d(),function(){s(p),f()}})}(P(new Date,(function(t){const e=setInterval(()=>{t("TIME IS:"+new Date)},1e3);return function(){clearInterval(e)}})),t=>t+Date.now());function G(t){let e,n,o;return{c(){e=d("div"),n=d("div"),m(n,"min-height","300px"),m(n,"padding","50px"),h(n,"contenteditable","true"),h(n,"autofocus",""),o=p(n,"keyup",t[7])},m(r,o){l(r,e,o),u(e,n),n.innerHTML=t[0],n.focus()},p:r,i:r,o:r,d(t){t&&f(e),o()}}}function J(t,e,n){const r=$(),o=()=>r("crazy");let i=0,{someval:s}=e,a=localStorage.getItem("EDIT");a=null!==a&&""!==a.trim()?a:"<p>AWESOME<b>SAdasd</b></p>";let c=a;return t.$set=t=>{"someval"in t&&n(1,s=t.someval)},[c,s,i,a,r,o,function(){o(),i+=1,F.update(t=>Date.now())},t=>{console.info("Console --- CC",t.target.innerHTML),localStorage.setItem("EDIT",t.target.innerHTML)}]}var z=class extends D{constructor(t){super(),B(this,t,J,G,c,{someval:1})}};n(1),n(6);function W(t){let e,n;const o=new z({});return{c(){var t;e=d("main"),(t=o.$$.fragment)&&t.c(),h(e,"class","svelte-1e0caga")},m(t,r){l(t,e,r),R(o,e,null),n=!0},p:r,i(t){n||(T(o.$$.fragment,t),n=!0)},o(t){I(o.$$.fragment,t),n=!1},d(t){t&&f(e),N(o)}}}function K(t){let e=55;var n;return n=()=>{e=Math.random()>.67?55:44},g().$$.before_update.push(n),[]}const Q=new class extends D{constructor(t){super(),B(this,t,K,W,c,{})}}({target:document.body});e.default=Q}]);