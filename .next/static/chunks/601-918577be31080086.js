(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[601],{7239:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{html:t,height:n=null,width:i=null,children:a,dataNtpc:s=""}=e;return(0,o.useEffect)(()=>{s&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(s)}})},[s]),(0,r.jsxs)(r.Fragment,{children:[a,t?(0,r.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=i?"".concat(i,"px"):"auto"},"data-ntpc":s,dangerouslySetInnerHTML:{__html:t}}):null]})};let r=n(7437),o=n(2265)},4888:function(e,t,n){"use strict";var r;let o;Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=function(e){let{gaId:t,debugMode:n,dataLayerName:r="dataLayer",nonce:f}=e;return void 0===o&&(o=r),(0,a.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(r,"'] = window['").concat(r,"'] || [];\n          function gtag(){window['").concat(r,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"' ").concat(n?",{ 'debug_mode': true }":"",");")},nonce:f}),(0,i.jsx)(s.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t),nonce:f})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===o){console.warn("@next/third-parties: GA has not been initialized");return}window[o]?window[o].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(o," does not exist"))};let i=n(7437),a=n(2265),s=(r=n(8667))&&r.__esModule?r:{default:r}},8087:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=void 0,t.GoogleTagManager=function(e){let{gtmId:t,gtmScriptUrl:n="https://www.googletagmanager.com/gtm.js",dataLayerName:r="dataLayer",auth:f,preview:c,dataLayer:u,nonce:l}=e;s=r;let d="dataLayer"!==r?"&l=".concat(r):"";return(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(u?"w[l].push(".concat(JSON.stringify(u),")"):"","\n      })(window,'").concat(r,"');")},nonce:l}),(0,o.jsx)(a.default,{id:"_next-gtm","data-ntpc":"GTM",src:"".concat(n,"?id=").concat(t).concat(d).concat(f?"&gtm_auth=".concat(f):"").concat(c?"&gtm_preview=".concat(c,"&gtm_cookies_win=x"):"")})]})};let o=n(7437),i=n(2265),a=(r=n(8667))&&r.__esModule?r:{default:r},s="dataLayer";t.sendGTMEvent=(e,t)=>{let n=t||s;window[n]=window[n]||[],window[n].push(e)}},9376:function(e,t,n){"use strict";var r=n(5475);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}})},8667:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o.a}});var r=n(8003),o=n.n(r),i={};for(var a in r)"default"!==a&&(i[a]=(function(e){return r[e]}).bind(0,a));n.d(t,i)},8221:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return a},isEqualNode:function(){return i}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let i=r[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?o[i]=!!n[e]:o.setAttribute(i,n[e])}let{children:i,dangerouslySetInnerHTML:a}=n;return a?o.innerHTML=a.__html||"":i&&(o.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),o}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),s=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var f;(null==n?void 0:null==(f=n.tagName)?void 0:f.toLowerCase())===e&&s.push(n)}let c=t.map(o).filter(e=>{for(let t=0,n=s.length;t<n;t++)if(i(s[t],e))return s.splice(t,1),!1;return!0});s.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(a-s.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8003:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return b},handleClientScriptLoad:function(){return g},initScriptLoader:function(){return y}});let r=n(7043),o=n(3099),i=n(7437),a=r._(n(4887)),s=o._(n(2265)),f=n(8701),c=n(8221),u=n(3515),l=new Map,d=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],m=e=>{if(a.default.preinit){e.forEach(e=>{a.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:a="",strategy:s="afterInteractive",onError:f,stylesheets:u}=e,h=n||t;if(h&&d.has(h))return;if(l.has(t)){d.add(h),l.get(t).then(r,f);return}let g=()=>{o&&o(),d.add(h)},y=document.createElement("script"),v=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),r&&r.call(this,t),g()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){f&&f(e)});for(let[n,r]of(i?(y.innerHTML=i.__html||"",g()):a?(y.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",g()):t&&(y.src=t,l.set(t,v)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=c.DOMAttributeNames[n]||n.toLowerCase();y.setAttribute(e,r)}"worker"===s&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",s),u&&m(u),document.body.appendChild(y)};function g(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))}):h(e)}function y(e){e.forEach(g),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}function v(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:c="afterInteractive",onError:l,stylesheets:p,...m}=e,{updateScripts:g,scripts:y,getIsSsr:v,appDir:b,nonce:w}=(0,s.useContext)(f.HeadManagerContext),x=(0,s.useRef)(!1);(0,s.useEffect)(()=>{let e=t||n;x.current||(o&&e&&d.has(e)&&o(),x.current=!0)},[o,t,n]);let O=(0,s.useRef)(!1);if((0,s.useEffect)(()=>{!O.current&&("afterInteractive"===c?h(e):"lazyOnload"===c&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))})),O.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(g?(y[c]=(y[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:l,...m}]),g(y)):v&&v()?d.add(t||n):v&&!v()&&h(e)),b){if(p&&p.forEach(e=>{a.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(a.default.preload(n,m.integrity?{as:"script",integrity:m.integrity,nonce:w,crossOrigin:m.crossOrigin}:{as:"script",nonce:w,crossOrigin:m.crossOrigin}),(0,i.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...m,id:t}])+")"}})):(m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),(0,i.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...m,id:t}])+")"}}));"afterInteractive"===c&&n&&a.default.preload(n,m.integrity?{as:"script",integrity:m.integrity,nonce:w,crossOrigin:m.crossOrigin}:{as:"script",nonce:w,crossOrigin:m.crossOrigin})}return null}Object.defineProperty(v,"__nextScript",{value:!0});let b=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8727:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,i){try{return function e(i,a){if(i===a)return!0;if(i&&a&&"object"==typeof i&&"object"==typeof a){var s,f,c,u;if(i.constructor!==a.constructor)return!1;if(Array.isArray(i)){if((s=i.length)!=a.length)return!1;for(f=s;0!=f--;)if(!e(i[f],a[f]))return!1;return!0}if(n&&i instanceof Map&&a instanceof Map){if(i.size!==a.size)return!1;for(u=i.entries();!(f=u.next()).done;)if(!a.has(f.value[0]))return!1;for(u=i.entries();!(f=u.next()).done;)if(!e(f.value[1],a.get(f.value[0])))return!1;return!0}if(r&&i instanceof Set&&a instanceof Set){if(i.size!==a.size)return!1;for(u=i.entries();!(f=u.next()).done;)if(!a.has(f.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(i)&&ArrayBuffer.isView(a)){if((s=i.length)!=a.length)return!1;for(f=s;0!=f--;)if(i[f]!==a[f])return!1;return!0}if(i.constructor===RegExp)return i.source===a.source&&i.flags===a.flags;if(i.valueOf!==Object.prototype.valueOf&&"function"==typeof i.valueOf&&"function"==typeof a.valueOf)return i.valueOf()===a.valueOf();if(i.toString!==Object.prototype.toString&&"function"==typeof i.toString&&"function"==typeof a.toString)return i.toString()===a.toString();if((s=(c=Object.keys(i)).length)!==Object.keys(a).length)return!1;for(f=s;0!=f--;)if(!Object.prototype.hasOwnProperty.call(a,c[f]))return!1;if(t&&i instanceof Element)return!1;for(f=s;0!=f--;)if(("_owner"!==c[f]&&"__v"!==c[f]&&"__o"!==c[f]||!i.$$typeof)&&!e(i[c[f]],a[c[f]]))return!1;return!0}return i!=i&&a!=a}(e,i)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},1103:function(e,t,n){"use strict";n.d(t,{D:function(){return ey}});var r,o,i,a,s,f=n(2265),c=n(4887);function u(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function l(e){var t=u(e).Element;return e instanceof t||e instanceof Element}function d(e){var t=u(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function p(e){if("undefined"==typeof ShadowRoot)return!1;var t=u(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var m=Math.max,h=Math.min,g=Math.round;function y(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function v(){return!/^((?!chrome|android).)*safari/i.test(y())}function b(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&d(e)&&(o=e.offsetWidth>0&&g(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&g(r.height)/e.offsetHeight||1);var a=(l(e)?u(e):window).visualViewport,s=!v()&&n,f=(r.left+(s&&a?a.offsetLeft:0))/o,c=(r.top+(s&&a?a.offsetTop:0))/i,p=r.width/o,m=r.height/i;return{width:p,height:m,top:c,right:f+p,bottom:c+m,left:f,x:f,y:c}}function w(e){var t=u(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function x(e){return e?(e.nodeName||"").toLowerCase():null}function O(e){return((l(e)?e.ownerDocument:e.document)||window.document).documentElement}function _(e){return b(O(e)).left+w(e).scrollLeft}function j(e){return u(e).getComputedStyle(e)}function E(e){var t=j(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function M(e){var t=b(e),n=e.offsetWidth,r=e.offsetHeight;return 1>=Math.abs(t.width-n)&&(n=t.width),1>=Math.abs(t.height-r)&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function A(e){return"html"===x(e)?e:e.assignedSlot||e.parentNode||(p(e)?e.host:null)||O(e)}function S(e,t){void 0===t&&(t=[]);var n,r=function e(t){return["html","body","#document"].indexOf(x(t))>=0?t.ownerDocument.body:d(t)&&E(t)?t:e(A(t))}(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=u(r),a=o?[i].concat(i.visualViewport||[],E(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(S(A(a)))}function L(e){return d(e)&&"fixed"!==j(e).position?e.offsetParent:null}function k(e){for(var t=u(e),n=L(e);n&&["table","td","th"].indexOf(x(n))>=0&&"static"===j(n).position;)n=L(n);return n&&("html"===x(n)||"body"===x(n)&&"static"===j(n).position)?t:n||function(e){var t=/firefox/i.test(y());if(/Trident/i.test(y())&&d(e)&&"fixed"===j(e).position)return null;var n=A(e);for(p(n)&&(n=n.host);d(n)&&0>["html","body"].indexOf(x(n));){var r=j(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var P="bottom",D="right",T="left",H="auto",C=["top",P,D,T],I="start",q="viewport",B="popper",N=C.reduce(function(e,t){return e.concat([t+"-"+I,t+"-end"])},[]),R=[].concat(C,[H]).reduce(function(e,t){return e.concat([t,t+"-"+I,t+"-end"])},[]),W=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],V={placement:"bottom",modifiers:[],strategy:"absolute"};function F(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var z={passive:!0};function U(e){return e.split("-")[0]}function G(e){return e.split("-")[1]}function J(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?U(o):null,a=o?G(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case"top":t={x:s,y:n.y-r.height};break;case P:t={x:s,y:n.y+n.height};break;case D:t={x:n.x+n.width,y:f};break;case T:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?J(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case I:t[c]=t[c]-(n[u]/2-r[u]/2);break;case"end":t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}var Y={top:"auto",right:"auto",bottom:"auto",left:"auto"};function $(e){var t,n,r,o,i,a,s,f=e.popper,c=e.popperRect,l=e.placement,d=e.variation,p=e.offsets,m=e.position,h=e.gpuAcceleration,y=e.adaptive,v=e.roundOffsets,b=e.isFixed,w=p.x,x=void 0===w?0:w,_=p.y,E=void 0===_?0:_,M="function"==typeof v?v({x:x,y:E}):{x:x,y:E};x=M.x,E=M.y;var A=p.hasOwnProperty("x"),S=p.hasOwnProperty("y"),L=T,H="top",C=window;if(y){var I=k(f),q="clientHeight",B="clientWidth";I===u(f)&&"static"!==j(I=O(f)).position&&"absolute"===m&&(q="scrollHeight",B="scrollWidth"),("top"===l||(l===T||l===D)&&"end"===d)&&(H=P,E-=(b&&I===C&&C.visualViewport?C.visualViewport.height:I[q])-c.height,E*=h?1:-1),(l===T||("top"===l||l===P)&&"end"===d)&&(L=D,x-=(b&&I===C&&C.visualViewport?C.visualViewport.width:I[B])-c.width,x*=h?1:-1)}var N=Object.assign({position:m},y&&Y),R=!0===v?(t={x:x,y:E},n=u(f),r=t.x,o=t.y,{x:g(r*(i=n.devicePixelRatio||1))/i||0,y:g(o*i)/i||0}):{x:x,y:E};return(x=R.x,E=R.y,h)?Object.assign({},N,((s={})[H]=S?"0":"",s[L]=A?"0":"",s.transform=1>=(C.devicePixelRatio||1)?"translate("+x+"px, "+E+"px)":"translate3d("+x+"px, "+E+"px, 0)",s)):Object.assign({},N,((a={})[H]=S?E+"px":"",a[L]=A?x+"px":"",a.transform="",a))}var K={left:"right",right:"left",bottom:"top",top:"bottom"};function Q(e){return e.replace(/left|right|bottom|top/g,function(e){return K[e]})}var Z={start:"end",end:"start"};function ee(e){return e.replace(/start|end/g,function(e){return Z[e]})}function et(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&p(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function en(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function er(e,t,n){var r,o,i,a,s,f,c,d,p,h;return t===q?en(function(e,t){var n=u(e),r=O(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var c=v();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+_(e),y:f}}(e,n)):l(t)?((r=b(t,!1,"fixed"===n)).top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r):en((o=O(e),a=O(o),s=w(o),f=null==(i=o.ownerDocument)?void 0:i.body,c=m(a.scrollWidth,a.clientWidth,f?f.scrollWidth:0,f?f.clientWidth:0),d=m(a.scrollHeight,a.clientHeight,f?f.scrollHeight:0,f?f.clientHeight:0),p=-s.scrollLeft+_(o),h=-s.scrollTop,"rtl"===j(f||a).direction&&(p+=m(a.clientWidth,f?f.clientWidth:0)-c),{width:c,height:d,x:p,y:h}))}function eo(){return{top:0,right:0,bottom:0,left:0}}function ei(e){return Object.assign({},eo(),e)}function ea(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}function es(e,t){void 0===t&&(t={});var n,r,o,i,a,s,f,c,u=t,p=u.placement,g=void 0===p?e.placement:p,y=u.strategy,v=void 0===y?e.strategy:y,w=u.boundary,_=u.rootBoundary,E=u.elementContext,M=void 0===E?B:E,L=u.altBoundary,T=u.padding,H=void 0===T?0:T,I=ei("number"!=typeof H?H:ea(H,C)),N=e.rects.popper,R=e.elements[void 0!==L&&L?M===B?"reference":B:M],W=(n=l(R)?R:R.contextElement||O(e.elements.popper),r=void 0===w?"clippingParents":w,o=void 0===_?q:_,f=(s=[].concat("clippingParents"===r?(i=S(A(n)),l(a=["absolute","fixed"].indexOf(j(n).position)>=0&&d(n)?k(n):n)?i.filter(function(e){return l(e)&&et(e,a)&&"body"!==x(e)}):[]):[].concat(r),[o]))[0],(c=s.reduce(function(e,t){var r=er(n,t,v);return e.top=m(r.top,e.top),e.right=h(r.right,e.right),e.bottom=h(r.bottom,e.bottom),e.left=m(r.left,e.left),e},er(n,f,v))).width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c),V=b(e.elements.reference),F=X({reference:V,element:N,strategy:"absolute",placement:g}),z=en(Object.assign({},N,F)),U=M===B?z:V,G={top:W.top-U.top+I.top,bottom:U.bottom-W.bottom+I.bottom,left:W.left-U.left+I.left,right:U.right-W.right+I.right},J=e.modifiersData.offset;if(M===B&&J){var Y=J[g];Object.keys(G).forEach(function(e){var t=[D,P].indexOf(e)>=0?1:-1,n=["top",P].indexOf(e)>=0?"y":"x";G[e]+=Y[n]*t})}return G}function ef(e,t,n){return m(e,h(t,n))}function ec(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function eu(e){return["top",D,P,T].some(function(t){return e[t]>=0})}var el=(i=void 0===(o=(r={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=u(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(e){e.addEventListener("scroll",n.update,z)}),s&&f.addEventListener("resize",n.update,z),function(){i&&c.forEach(function(e){e.removeEventListener("scroll",n.update,z)}),s&&f.removeEventListener("resize",n.update,z)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=X({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=n.adaptive,i=n.roundOffsets,a=void 0===i||i,s={placement:U(t.placement),variation:G(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===r||r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,$(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,$(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];d(o)&&x(o)&&(Object.assign(o.style,n),Object.keys(r).forEach(function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e},{});d(r)&&x(r)&&(Object.assign(r.style,i),Object.keys(o).forEach(function(e){r.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=R.reduce(function(e,n){var r,o,a,s,f,c;return e[n]=(r=t.rects,a=[T,"top"].indexOf(o=U(n))>=0?-1:1,f=(s="function"==typeof i?i(Object.assign({},r,{placement:n})):i)[0],c=s[1],f=f||0,c=(c||0)*a,[T,D].indexOf(o)>=0?{x:c,y:f}:{x:f,y:c}),e},{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,l=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,m=void 0===p||p,h=n.allowedAutoPlacements,g=t.options.placement,y=U(g)===g,v=f||(y||!m?[Q(g)]:function(e){if(U(e)===H)return[];var t=Q(e);return[ee(e),t,ee(t)]}(g)),b=[g].concat(v).reduce(function(e,n){var r,o,i,a,s,f,d,p,g,y,v,b;return e.concat(U(n)===H?(o=(r={placement:n,boundary:u,rootBoundary:l,padding:c,flipVariations:m,allowedAutoPlacements:h}).placement,i=r.boundary,a=r.rootBoundary,s=r.padding,f=r.flipVariations,p=void 0===(d=r.allowedAutoPlacements)?R:d,0===(v=(y=(g=G(o))?f?N:N.filter(function(e){return G(e)===g}):C).filter(function(e){return p.indexOf(e)>=0})).length&&(v=y),Object.keys(b=v.reduce(function(e,n){return e[n]=es(t,{placement:n,boundary:i,rootBoundary:a,padding:s})[U(n)],e},{})).sort(function(e,t){return b[e]-b[t]})):n)},[]),w=t.rects.reference,x=t.rects.popper,O=new Map,_=!0,j=b[0],E=0;E<b.length;E++){var M=b[E],A=U(M),S=G(M)===I,L=["top",P].indexOf(A)>=0,k=L?"width":"height",q=es(t,{placement:M,boundary:u,rootBoundary:l,altBoundary:d,padding:c}),B=L?S?D:T:S?P:"top";w[k]>x[k]&&(B=Q(B));var W=Q(B),V=[];if(i&&V.push(q[A]<=0),s&&V.push(q[B]<=0,q[W]<=0),V.every(function(e){return e})){j=M,_=!1;break}O.set(M,V)}if(_)for(var F=m?3:1,z=function(e){var t=b.find(function(t){var n=O.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return j=t,"break"},J=F;J>0&&"break"!==z(J);J--);t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=n.altAxis,a=n.boundary,s=n.rootBoundary,f=n.altBoundary,c=n.padding,u=n.tether,l=void 0===u||u,d=n.tetherOffset,p=void 0===d?0:d,g=es(t,{boundary:a,rootBoundary:s,padding:c,altBoundary:f}),y=U(t.placement),v=G(t.placement),b=!v,w=J(y),x="x"===w?"y":"x",O=t.modifiersData.popperOffsets,_=t.rects.reference,j=t.rects.popper,E="function"==typeof p?p(Object.assign({},t.rects,{placement:t.placement})):p,A="number"==typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(O){if(void 0===o||o){var H,C="y"===w?"top":T,q="y"===w?P:D,B="y"===w?"height":"width",N=O[w],R=N+g[C],W=N-g[q],V=l?-j[B]/2:0,F=v===I?_[B]:j[B],z=v===I?-j[B]:-_[B],X=t.elements.arrow,Y=l&&X?M(X):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:eo(),K=$[C],Q=$[q],Z=ef(0,_[B],Y[B]),ee=b?_[B]/2-V-Z-K-A.mainAxis:F-Z-K-A.mainAxis,et=b?-_[B]/2+V+Z+Q+A.mainAxis:z+Z+Q+A.mainAxis,en=t.elements.arrow&&k(t.elements.arrow),er=en?"y"===w?en.clientTop||0:en.clientLeft||0:0,ei=null!=(H=null==S?void 0:S[w])?H:0,ea=ef(l?h(R,N+ee-ei-er):R,N,l?m(W,N+et-ei):W);O[w]=ea,L[w]=ea-N}if(void 0!==i&&i){var ec,eu,el="x"===w?"top":T,ed="x"===w?P:D,ep=O[x],em="y"===x?"height":"width",eh=ep+g[el],eg=ep-g[ed],ey=-1!==["top",T].indexOf(y),ev=null!=(eu=null==S?void 0:S[x])?eu:0,eb=ey?eh:ep-_[em]-j[em]-ev+A.altAxis,ew=ey?ep+_[em]+j[em]-ev-A.altAxis:eg,ex=l&&ey?(ec=ef(eb,ep,ew))>ew?ew:ec:ef(l?eb:eh,ep,l?ew:eg);O[x]=ex,L[x]=ex-ep}t.modifiersData[r]=L}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n,r=e.state,o=e.name,i=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,f=U(r.placement),c=J(f),u=[T,D].indexOf(f)>=0?"height":"width";if(a&&s){var l=ei("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:ea(t,C)),d=M(a),p="y"===c?"top":T,m="y"===c?P:D,h=r.rects.reference[u]+r.rects.reference[c]-s[c]-r.rects.popper[u],g=s[c]-r.rects.reference[c],y=k(a),v=y?"y"===c?y.clientHeight||0:y.clientWidth||0:0,b=l[p],w=v-d[u]-l[m],x=v/2-d[u]/2+(h/2-g/2),O=ef(b,x,w);r.modifiersData[o]=((n={})[c]=O,n.centerOffset=O-x,n)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&et(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=es(t,{elementContext:"reference"}),s=es(t,{altBoundary:!0}),f=ec(a,r),c=ec(s,o,i),u=eu(f),l=eu(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}}]}).defaultModifiers)?[]:o,s=void 0===(a=r.defaultOptions)?V:a,function(e,t,n){void 0===n&&(n=s);var r,o,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},V,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],c=!1,p={state:a,setOptions:function(n){var r,o,c,u,d,h="function"==typeof n?n(a.options):n;m(),a.options=Object.assign({},s,a.options,h),a.scrollParents={reference:l(e)?S(e):e.contextElement?S(e.contextElement):[],popper:S(t)};var g=(o=Object.keys(r=[].concat(i,a.options.modifiers).reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{})).map(function(e){return r[e]}),c=new Map,u=new Set,d=[],o.forEach(function(e){c.set(e.name,e)}),o.forEach(function(e){u.has(e.name)||function e(t){u.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!u.has(t)){var n=c.get(t);n&&e(n)}}),d.push(t)}(e)}),W.reduce(function(e,t){return e.concat(d.filter(function(e){return e.phase===t}))},[]));return a.orderedModifiers=g.filter(function(e){return e.enabled}),a.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=e.effect;if("function"==typeof r){var o=r({state:a,name:t,instance:p,options:void 0===n?{}:n});f.push(o||function(){})}}),p.update()},forceUpdate:function(){if(!c){var e,t,n,r,o,i,s,f,l,m,h,y,v=a.elements,j=v.reference,A=v.popper;if(F(j,A)){a.rects={reference:(t=k(A),n="fixed"===a.options.strategy,r=d(t),f=d(t)&&(i=g((o=t.getBoundingClientRect()).width)/t.offsetWidth||1,s=g(o.height)/t.offsetHeight||1,1!==i||1!==s),l=O(t),m=b(j,f,n),h={scrollLeft:0,scrollTop:0},y={x:0,y:0},(r||!r&&!n)&&(("body"!==x(t)||E(l))&&(h=(e=t)!==u(e)&&d(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:w(e)),d(t)?(y=b(t,!0),y.x+=t.clientLeft,y.y+=t.clientTop):l&&(y.x=_(l))),{x:m.left+h.scrollLeft-y.x,y:m.top+h.scrollTop-y.y,width:m.width,height:m.height}),popper:M(A)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(e){return a.modifiersData[e.name]=Object.assign({},e.data)});for(var S=0;S<a.orderedModifiers.length;S++){if(!0===a.reset){a.reset=!1,S=-1;continue}var L=a.orderedModifiers[S],P=L.fn,D=L.options,T=void 0===D?{}:D,H=L.name;"function"==typeof P&&(a=P({state:a,options:T,name:H,instance:p})||a)}}}},update:(r=function(){return new Promise(function(e){p.forceUpdate(),e(a)})},function(){return o||(o=new Promise(function(e){Promise.resolve().then(function(){o=void 0,e(r())})})),o}),destroy:function(){m(),c=!0}};if(!F(e,t))return p;function m(){f.forEach(function(e){return e()}),f=[]}return p.setOptions(n).then(function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)}),p}),ed=n(8727),ep=n.n(ed),em=function(e){return e.reduce(function(e,t){var n=t[0],r=t[1];return e[n]=r,e},{})},eh="undefined"!=typeof window&&window.document&&window.document.createElement?f.useLayoutEffect:f.useEffect,eg=[],ey=function(e,t,n){void 0===n&&(n={});var r=f.useRef(null),o={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||eg},i=f.useState({styles:{popper:{position:o.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=i[0],s=i[1],u=f.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);c.flushSync(function(){s({styles:em(n.map(function(e){return[e,t.styles[e]||{}]})),attributes:em(n.map(function(e){return[e,t.attributes[e]]}))})})},requires:["computeStyles"]}},[]),l=f.useMemo(function(){var e={onFirstUpdate:o.onFirstUpdate,placement:o.placement,strategy:o.strategy,modifiers:[].concat(o.modifiers,[u,{name:"applyStyles",enabled:!1}])};return ep()(r.current,e)?r.current||e:(r.current=e,e)},[o.onFirstUpdate,o.placement,o.strategy,o.modifiers,u]),d=f.useRef();return eh(function(){d.current&&d.current.setOptions(l)},[l]),eh(function(){if(null!=e&&null!=t){var r=(n.createPopper||el)(e,t,l);return d.current=r,function(){r.destroy(),d.current=null}}},[e,t,n.createPopper]),{state:d.current?d.current.state:null,styles:a.styles,attributes:a.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}}},7425:function(){}}]);