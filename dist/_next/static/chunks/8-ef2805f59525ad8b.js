(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8],{3145:function(e,t,n){"use strict";n.d(t,{default:function(){return o.a}});var r=n(8461),o=n.n(r)},7648:function(e,t,n){"use strict";n.d(t,{default:function(){return o.a}});var r=n(2972),o=n.n(r)},9376:function(e,t,n){"use strict";var r=n(5475);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}})},8461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return f},getImageProps:function(){return s}});let r=n(7043),o=n(5346),i=n(5878),a=r._(n(5084));function s(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let f=i.Image},8727:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,i){try{return function e(i,a){if(i===a)return!0;if(i&&a&&"object"==typeof i&&"object"==typeof a){var s,f,c,u;if(i.constructor!==a.constructor)return!1;if(Array.isArray(i)){if((s=i.length)!=a.length)return!1;for(f=s;0!=f--;)if(!e(i[f],a[f]))return!1;return!0}if(n&&i instanceof Map&&a instanceof Map){if(i.size!==a.size)return!1;for(u=i.entries();!(f=u.next()).done;)if(!a.has(f.value[0]))return!1;for(u=i.entries();!(f=u.next()).done;)if(!e(f.value[1],a.get(f.value[0])))return!1;return!0}if(r&&i instanceof Set&&a instanceof Set){if(i.size!==a.size)return!1;for(u=i.entries();!(f=u.next()).done;)if(!a.has(f.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(i)&&ArrayBuffer.isView(a)){if((s=i.length)!=a.length)return!1;for(f=s;0!=f--;)if(i[f]!==a[f])return!1;return!0}if(i.constructor===RegExp)return i.source===a.source&&i.flags===a.flags;if(i.valueOf!==Object.prototype.valueOf&&"function"==typeof i.valueOf&&"function"==typeof a.valueOf)return i.valueOf()===a.valueOf();if(i.toString!==Object.prototype.toString&&"function"==typeof i.toString&&"function"==typeof a.toString)return i.toString()===a.toString();if((s=(c=Object.keys(i)).length)!==Object.keys(a).length)return!1;for(f=s;0!=f--;)if(!Object.prototype.hasOwnProperty.call(a,c[f]))return!1;if(t&&i instanceof Element)return!1;for(f=s;0!=f--;)if(("_owner"!==c[f]&&"__v"!==c[f]&&"__o"!==c[f]||!i.$$typeof)&&!e(i[c[f]],a[c[f]]))return!1;return!0}return i!=i&&a!=a}(e,i)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},1103:function(e,t,n){"use strict";n.d(t,{D:function(){return ev}});var r,o,i,a,s,f=n(2265),c=n(4887);function u(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function p(e){var t=u(e).Element;return e instanceof t||e instanceof Element}function l(e){var t=u(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function d(e){if("undefined"==typeof ShadowRoot)return!1;var t=u(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var m=Math.max,h=Math.min,y=Math.round;function v(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function g(){return!/^((?!chrome|android).)*safari/i.test(v())}function b(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&l(e)&&(o=e.offsetWidth>0&&y(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&y(r.height)/e.offsetHeight||1);var a=(p(e)?u(e):window).visualViewport,s=!g()&&n,f=(r.left+(s&&a?a.offsetLeft:0))/o,c=(r.top+(s&&a?a.offsetTop:0))/i,d=r.width/o,m=r.height/i;return{width:d,height:m,top:c,right:f+d,bottom:c+m,left:f,x:f,y:c}}function w(e){var t=u(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function x(e){return e?(e.nodeName||"").toLowerCase():null}function O(e){return((p(e)?e.ownerDocument:e.document)||window.document).documentElement}function j(e){return b(O(e)).left+w(e).scrollLeft}function E(e){return u(e).getComputedStyle(e)}function A(e){var t=E(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function D(e){var t=b(e),n=e.offsetWidth,r=e.offsetHeight;return 1>=Math.abs(t.width-n)&&(n=t.width),1>=Math.abs(t.height-r)&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function P(e){return"html"===x(e)?e:e.assignedSlot||e.parentNode||(d(e)?e.host:null)||O(e)}function S(e,t){void 0===t&&(t=[]);var n,r=function e(t){return["html","body","#document"].indexOf(x(t))>=0?t.ownerDocument.body:l(t)&&A(t)?t:e(P(t))}(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=u(r),a=o?[i].concat(i.visualViewport||[],A(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(S(P(a)))}function k(e){return l(e)&&"fixed"!==E(e).position?e.offsetParent:null}function M(e){for(var t=u(e),n=k(e);n&&["table","td","th"].indexOf(x(n))>=0&&"static"===E(n).position;)n=k(n);return n&&("html"===x(n)||"body"===x(n)&&"static"===E(n).position)?t:n||function(e){var t=/firefox/i.test(v());if(/Trident/i.test(v())&&l(e)&&"fixed"===E(e).position)return null;var n=P(e);for(d(n)&&(n=n.host);l(n)&&0>["html","body"].indexOf(x(n));){var r=E(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var L="bottom",B="right",W="left",R="auto",H=["top",L,B,W],_="start",T="viewport",V="popper",C=H.reduce(function(e,t){return e.concat([t+"-"+_,t+"-end"])},[]),q=[].concat(H,[R]).reduce(function(e,t){return e.concat([t,t+"-"+_,t+"-end"])},[]),U=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],z={placement:"bottom",modifiers:[],strategy:"absolute"};function F(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var N={passive:!0};function I(e){return e.split("-")[0]}function X(e){return e.split("-")[1]}function Y(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function $(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?I(o):null,a=o?X(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case"top":t={x:s,y:n.y-r.height};break;case L:t={x:s,y:n.y+n.height};break;case B:t={x:n.x+n.width,y:f};break;case W:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?Y(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case _:t[c]=t[c]-(n[u]/2-r[u]/2);break;case"end":t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}var G={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Z(e){var t,n,r,o,i,a,s,f=e.popper,c=e.popperRect,p=e.placement,l=e.variation,d=e.offsets,m=e.position,h=e.gpuAcceleration,v=e.adaptive,g=e.roundOffsets,b=e.isFixed,w=d.x,x=void 0===w?0:w,j=d.y,A=void 0===j?0:j,D="function"==typeof g?g({x:x,y:A}):{x:x,y:A};x=D.x,A=D.y;var P=d.hasOwnProperty("x"),S=d.hasOwnProperty("y"),k=W,R="top",H=window;if(v){var _=M(f),T="clientHeight",V="clientWidth";_===u(f)&&"static"!==E(_=O(f)).position&&"absolute"===m&&(T="scrollHeight",V="scrollWidth"),("top"===p||(p===W||p===B)&&"end"===l)&&(R=L,A-=(b&&_===H&&H.visualViewport?H.visualViewport.height:_[T])-c.height,A*=h?1:-1),(p===W||("top"===p||p===L)&&"end"===l)&&(k=B,x-=(b&&_===H&&H.visualViewport?H.visualViewport.width:_[V])-c.width,x*=h?1:-1)}var C=Object.assign({position:m},v&&G),q=!0===g?(t={x:x,y:A},n=u(f),r=t.x,o=t.y,{x:y(r*(i=n.devicePixelRatio||1))/i||0,y:y(o*i)/i||0}):{x:x,y:A};return(x=q.x,A=q.y,h)?Object.assign({},C,((s={})[R]=S?"0":"",s[k]=P?"0":"",s.transform=1>=(H.devicePixelRatio||1)?"translate("+x+"px, "+A+"px)":"translate3d("+x+"px, "+A+"px, 0)",s)):Object.assign({},C,((a={})[R]=S?A+"px":"",a[k]=P?x+"px":"",a.transform="",a))}var J={left:"right",right:"left",bottom:"top",top:"bottom"};function K(e){return e.replace(/left|right|bottom|top/g,function(e){return J[e]})}var Q={start:"end",end:"start"};function ee(e){return e.replace(/start|end/g,function(e){return Q[e]})}function et(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&d(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function en(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function er(e,t,n){var r,o,i,a,s,f,c,l,d,h;return t===T?en(function(e,t){var n=u(e),r=O(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var c=g();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+j(e),y:f}}(e,n)):p(t)?((r=b(t,!1,"fixed"===n)).top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r):en((o=O(e),a=O(o),s=w(o),f=null==(i=o.ownerDocument)?void 0:i.body,c=m(a.scrollWidth,a.clientWidth,f?f.scrollWidth:0,f?f.clientWidth:0),l=m(a.scrollHeight,a.clientHeight,f?f.scrollHeight:0,f?f.clientHeight:0),d=-s.scrollLeft+j(o),h=-s.scrollTop,"rtl"===E(f||a).direction&&(d+=m(a.clientWidth,f?f.clientWidth:0)-c),{width:c,height:l,x:d,y:h}))}function eo(){return{top:0,right:0,bottom:0,left:0}}function ei(e){return Object.assign({},eo(),e)}function ea(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}function es(e,t){void 0===t&&(t={});var n,r,o,i,a,s,f,c,u=t,d=u.placement,y=void 0===d?e.placement:d,v=u.strategy,g=void 0===v?e.strategy:v,w=u.boundary,j=u.rootBoundary,A=u.elementContext,D=void 0===A?V:A,k=u.altBoundary,W=u.padding,R=void 0===W?0:W,_=ei("number"!=typeof R?R:ea(R,H)),C=e.rects.popper,q=e.elements[void 0!==k&&k?D===V?"reference":V:D],U=(n=p(q)?q:q.contextElement||O(e.elements.popper),r=void 0===w?"clippingParents":w,o=void 0===j?T:j,f=(s=[].concat("clippingParents"===r?(i=S(P(n)),p(a=["absolute","fixed"].indexOf(E(n).position)>=0&&l(n)?M(n):n)?i.filter(function(e){return p(e)&&et(e,a)&&"body"!==x(e)}):[]):[].concat(r),[o]))[0],(c=s.reduce(function(e,t){var r=er(n,t,g);return e.top=m(r.top,e.top),e.right=h(r.right,e.right),e.bottom=h(r.bottom,e.bottom),e.left=m(r.left,e.left),e},er(n,f,g))).width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c),z=b(e.elements.reference),F=$({reference:z,element:C,strategy:"absolute",placement:y}),N=en(Object.assign({},C,F)),I=D===V?N:z,X={top:U.top-I.top+_.top,bottom:I.bottom-U.bottom+_.bottom,left:U.left-I.left+_.left,right:I.right-U.right+_.right},Y=e.modifiersData.offset;if(D===V&&Y){var G=Y[y];Object.keys(X).forEach(function(e){var t=[B,L].indexOf(e)>=0?1:-1,n=["top",L].indexOf(e)>=0?"y":"x";X[e]+=G[n]*t})}return X}function ef(e,t,n){return m(e,h(t,n))}function ec(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function eu(e){return["top",B,L,W].some(function(t){return e[t]>=0})}var ep=(i=void 0===(o=(r={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=u(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(e){e.addEventListener("scroll",n.update,N)}),s&&f.addEventListener("resize",n.update,N),function(){i&&c.forEach(function(e){e.removeEventListener("scroll",n.update,N)}),s&&f.removeEventListener("resize",n.update,N)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=$({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=n.adaptive,i=n.roundOffsets,a=void 0===i||i,s={placement:I(t.placement),variation:X(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===r||r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Z(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Z(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];l(o)&&x(o)&&(Object.assign(o.style,n),Object.keys(r).forEach(function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e},{});l(r)&&x(r)&&(Object.assign(r.style,i),Object.keys(o).forEach(function(e){r.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=q.reduce(function(e,n){var r,o,a,s,f,c;return e[n]=(r=t.rects,a=[W,"top"].indexOf(o=I(n))>=0?-1:1,f=(s="function"==typeof i?i(Object.assign({},r,{placement:n})):i)[0],c=s[1],f=f||0,c=(c||0)*a,[W,B].indexOf(o)>=0?{x:c,y:f}:{x:f,y:c}),e},{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,y=t.options.placement,v=I(y)===y,g=f||(v||!m?[K(y)]:function(e){if(I(e)===R)return[];var t=K(e);return[ee(e),t,ee(t)]}(y)),b=[y].concat(g).reduce(function(e,n){var r,o,i,a,s,f,l,d,y,v,g,b;return e.concat(I(n)===R?(o=(r={placement:n,boundary:u,rootBoundary:p,padding:c,flipVariations:m,allowedAutoPlacements:h}).placement,i=r.boundary,a=r.rootBoundary,s=r.padding,f=r.flipVariations,d=void 0===(l=r.allowedAutoPlacements)?q:l,0===(g=(v=(y=X(o))?f?C:C.filter(function(e){return X(e)===y}):H).filter(function(e){return d.indexOf(e)>=0})).length&&(g=v),Object.keys(b=g.reduce(function(e,n){return e[n]=es(t,{placement:n,boundary:i,rootBoundary:a,padding:s})[I(n)],e},{})).sort(function(e,t){return b[e]-b[t]})):n)},[]),w=t.rects.reference,x=t.rects.popper,O=new Map,j=!0,E=b[0],A=0;A<b.length;A++){var D=b[A],P=I(D),S=X(D)===_,k=["top",L].indexOf(P)>=0,M=k?"width":"height",T=es(t,{placement:D,boundary:u,rootBoundary:p,altBoundary:l,padding:c}),V=k?S?B:W:S?L:"top";w[M]>x[M]&&(V=K(V));var U=K(V),z=[];if(i&&z.push(T[P]<=0),s&&z.push(T[V]<=0,T[U]<=0),z.every(function(e){return e})){E=D,j=!1;break}O.set(D,z)}if(j)for(var F=m?3:1,N=function(e){var t=b.find(function(t){var n=O.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return E=t,"break"},Y=F;Y>0&&"break"!==N(Y);Y--);t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=n.altAxis,a=n.boundary,s=n.rootBoundary,f=n.altBoundary,c=n.padding,u=n.tether,p=void 0===u||u,l=n.tetherOffset,d=void 0===l?0:l,y=es(t,{boundary:a,rootBoundary:s,padding:c,altBoundary:f}),v=I(t.placement),g=X(t.placement),b=!g,w=Y(v),x="x"===w?"y":"x",O=t.modifiersData.popperOffsets,j=t.rects.reference,E=t.rects.popper,A="function"==typeof d?d(Object.assign({},t.rects,{placement:t.placement})):d,P="number"==typeof A?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,k={x:0,y:0};if(O){if(void 0===o||o){var R,H="y"===w?"top":W,T="y"===w?L:B,V="y"===w?"height":"width",C=O[w],q=C+y[H],U=C-y[T],z=p?-E[V]/2:0,F=g===_?j[V]:E[V],N=g===_?-E[V]:-j[V],$=t.elements.arrow,G=p&&$?D($):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:eo(),J=Z[H],K=Z[T],Q=ef(0,j[V],G[V]),ee=b?j[V]/2-z-Q-J-P.mainAxis:F-Q-J-P.mainAxis,et=b?-j[V]/2+z+Q+K+P.mainAxis:N+Q+K+P.mainAxis,en=t.elements.arrow&&M(t.elements.arrow),er=en?"y"===w?en.clientTop||0:en.clientLeft||0:0,ei=null!=(R=null==S?void 0:S[w])?R:0,ea=ef(p?h(q,C+ee-ei-er):q,C,p?m(U,C+et-ei):U);O[w]=ea,k[w]=ea-C}if(void 0!==i&&i){var ec,eu,ep="x"===w?"top":W,el="x"===w?L:B,ed=O[x],em="y"===x?"height":"width",eh=ed+y[ep],ey=ed-y[el],ev=-1!==["top",W].indexOf(v),eg=null!=(eu=null==S?void 0:S[x])?eu:0,eb=ev?eh:ed-j[em]-E[em]-eg+P.altAxis,ew=ev?ed+j[em]+E[em]-eg-P.altAxis:ey,ex=p&&ev?(ec=ef(eb,ed,ew))>ew?ew:ec:ef(p?eb:eh,ed,p?ew:ey);O[x]=ex,k[x]=ex-ed}t.modifiersData[r]=k}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n,r=e.state,o=e.name,i=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,f=I(r.placement),c=Y(f),u=[W,B].indexOf(f)>=0?"height":"width";if(a&&s){var p=ei("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:ea(t,H)),l=D(a),d="y"===c?"top":W,m="y"===c?L:B,h=r.rects.reference[u]+r.rects.reference[c]-s[c]-r.rects.popper[u],y=s[c]-r.rects.reference[c],v=M(a),g=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,b=p[d],w=g-l[u]-p[m],x=g/2-l[u]/2+(h/2-y/2),O=ef(b,x,w);r.modifiersData[o]=((n={})[c]=O,n.centerOffset=O-x,n)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&et(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=es(t,{elementContext:"reference"}),s=es(t,{altBoundary:!0}),f=ec(a,r),c=ec(s,o,i),u=eu(f),p=eu(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]}).defaultModifiers)?[]:o,s=void 0===(a=r.defaultOptions)?z:a,function(e,t,n){void 0===n&&(n=s);var r,o,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},z,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],c=!1,d={state:a,setOptions:function(n){var r,o,c,u,l,h="function"==typeof n?n(a.options):n;m(),a.options=Object.assign({},s,a.options,h),a.scrollParents={reference:p(e)?S(e):e.contextElement?S(e.contextElement):[],popper:S(t)};var y=(o=Object.keys(r=[].concat(i,a.options.modifiers).reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{})).map(function(e){return r[e]}),c=new Map,u=new Set,l=[],o.forEach(function(e){c.set(e.name,e)}),o.forEach(function(e){u.has(e.name)||function e(t){u.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!u.has(t)){var n=c.get(t);n&&e(n)}}),l.push(t)}(e)}),U.reduce(function(e,t){return e.concat(l.filter(function(e){return e.phase===t}))},[]));return a.orderedModifiers=y.filter(function(e){return e.enabled}),a.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=e.effect;if("function"==typeof r){var o=r({state:a,name:t,instance:d,options:void 0===n?{}:n});f.push(o||function(){})}}),d.update()},forceUpdate:function(){if(!c){var e,t,n,r,o,i,s,f,p,m,h,v,g=a.elements,E=g.reference,P=g.popper;if(F(E,P)){;a.rects={reference:(t=M(P),n="fixed"===a.options.strategy,r=l(t),f=l(t)&&(i=y((o=t.getBoundingClientRect()).width)/t.offsetWidth||1,s=y(o.height)/t.offsetHeight||1,1!==i||1!==s),p=O(t),m=b(E,f,n),h={scrollLeft:0,scrollTop:0},v={x:0,y:0},(r||!r&&!n)&&(("body"!==x(t)||A(p))&&(h=(e=t)!==u(e)&&l(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:w(e)),l(t)?(v=b(t,!0),v.x+=t.clientLeft,v.y+=t.clientTop):p&&(v.x=j(p))),{x:m.left+h.scrollLeft-v.x,y:m.top+h.scrollTop-v.y,width:m.width,height:m.height}),popper:D(P)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(e){return a.modifiersData[e.name]=Object.assign({},e.data)});for(var S=0;S<a.orderedModifiers.length;S++){if(!0===a.reset){a.reset=!1,S=-1;continue}var k=a.orderedModifiers[S],L=k.fn,B=k.options,W=void 0===B?{}:B,R=k.name;"function"==typeof L&&(a=L({state:a,options:W,name:R,instance:d})||a)}}}},update:(r=function(){return new Promise(function(e){d.forceUpdate(),e(a)})},function(){return o||(o=new Promise(function(e){Promise.resolve().then(function(){o=void 0,e(r())})})),o}),destroy:function(){m(),c=!0}};if(!F(e,t))return d;function m(){f.forEach(function(e){return e()}),f=[]}return d.setOptions(n).then(function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)}),d}),el=n(8727),ed=n.n(el),em=function(e){return e.reduce(function(e,t){var n=t[0],r=t[1];return e[n]=r,e},{})},eh="undefined"!=typeof window&&window.document&&window.document.createElement?f.useLayoutEffect:f.useEffect,ey=[],ev=function(e,t,n){void 0===n&&(n={});var r=f.useRef(null),o={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||ey},i=f.useState({styles:{popper:{position:o.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=i[0],s=i[1],u=f.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);c.flushSync(function(){s({styles:em(n.map(function(e){return[e,t.styles[e]||{}]})),attributes:em(n.map(function(e){return[e,t.attributes[e]]}))})})},requires:["computeStyles"]}},[]),p=f.useMemo(function(){var e={onFirstUpdate:o.onFirstUpdate,placement:o.placement,strategy:o.strategy,modifiers:[].concat(o.modifiers,[u,{name:"applyStyles",enabled:!1}])};return ed()(r.current,e)?r.current||e:(r.current=e,e)},[o.onFirstUpdate,o.placement,o.strategy,o.modifiers,u]),l=f.useRef();return eh(function(){l.current&&l.current.setOptions(p)},[p]),eh(function(){if(null!=e&&null!=t){var r=(n.createPopper||ep)(e,t,p);return l.current=r,function(){r.destroy(),l.current=null}}},[e,t,n.createPopper]),{state:l.current?l.current.state:null,styles:a.styles,attributes:a.attributes,update:l.current?l.current.update:null,forceUpdate:l.current?l.current.forceUpdate:null}}},7425:function(){},1994:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var i=t.length;for(n=0;n<i;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(r&&(r+=" "),r+=t);return r}}}]);