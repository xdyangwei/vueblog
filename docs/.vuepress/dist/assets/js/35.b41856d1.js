(window.webpackJsonp=window.webpackJsonp||[]).push([[35],Array(78).concat([function(t,e,n){var i=n(25);t.exports=function(t){return Object(i(t))}},function(t,e,n){"use strict";var i=n(13);t.exports=function(t,e){return!!t&&i(function(){e?t.call(null,function(){},1):t.call(null)})}},function(t,e,n){var i=n(9),r=n(43),s=n(78),o=n(27),a=n(85);t.exports=function(t,e){var n=1==t,u=2==t,c=3==t,l=4==t,f=6==t,p=5==t||f,h=e||a;return function(e,a,d){for(var v,g,m=s(e),b=r(m),_=i(a,d,3),k=o(b.length),y=0,x=n?h(e,k):u?h(e,0):void 0;k>y;y++)if((p||y in b)&&(g=_(v=b[y],y,m),t))if(n)x[y]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return y;case 2:x.push(v)}else if(l)return!1;return f?-1:c||l?l:x}}},function(t,e,n){"use strict";var i=n(24),r=n(80)(3);i(i.P+i.F*!n(79)([].some,!0),"Array",{some:function(t){return r(this,t,arguments[1])}})},,function(t,e,n){for(var i=n(84),r=n(44),s=n(17),o=n(1),a=n(26),u=n(28),c=n(2),l=c("iterator"),f=c("toStringTag"),p=u.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=r(h),v=0;v<d.length;v++){var g,m=d[v],b=h[m],_=o[m],k=_&&_.prototype;if(k&&(k[l]||a(k,l,p),k[f]||a(k,f,m),u[m]=p,b))for(g in i)k[g]||s(k,g,i[g],!0)}},function(t,e,n){"use strict";var i=n(113),r=n(114),s=n(28),o=n(18);t.exports=n(115)(Array,"Array",function(t,e){this._t=o(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),s.Arguments=s.Array,i("keys"),i("values"),i("entries")},function(t,e,n){var i=n(86);t.exports=function(t,e){return new(i(t))(e)}},function(t,e,n){var i=n(4),r=n(87),s=n(2)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),i(e)&&null===(e=e[s])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var i=n(8);t.exports=Array.isArray||function(t){return"Array"==i(t)}},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){var i=n(4),r=n(8),s=n(2)("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==r(t))}},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,function(t,e,n){var i=n(78),r=n(44);n(118)("keys",function(){return function(t){return r(i(t))}})},function(t,e,n){var i=n(24);i(i.S+i.F,"Object",{assign:n(123)})},function(t,e,n){"use strict";var i=n(26),r=n(17),s=n(13),o=n(25),a=n(2);t.exports=function(t,e,n){var u=a(t),c=n(o,u,""[t]),l=c[0],f=c[1];s(function(){var e={};return e[u]=function(){return 7},7!=""[t](e)})&&(r(String.prototype,t,l),i(RegExp.prototype,u,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}))}},function(t,e,n){n(107)("replace",2,function(t,e,n){return[function(i,r){"use strict";var s=t(this),o=void 0==i?void 0:i[e];return void 0!==o?o.call(i,s,r):n.call(String(s),i,r)},n]})},function(t,e,n){"use strict";var i=n(24),r=n(80)(1);i(i.P+i.F*!n(79)([].map,!0),"Array",{map:function(t){return r(this,t,arguments[1])}})},,function(t,e,n){var i=n(10).f,r=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in r||n(5)&&i(r,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},function(t,e,n){var i,r;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(r="function"==typeof(i=function(){var t={version:"0.2.0"},e=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function n(t,e,n){return t<e?e:t>n?n:t}function i(t){return 100*(-1+t)}t.configure=function(t){var n,i;for(n in t)void 0!==(i=t[n])&&t.hasOwnProperty(n)&&(e[n]=i);return this},t.status=null,t.set=function(o){var a=t.isStarted();o=n(o,e.minimum,1),t.status=1===o?null:o;var u=t.render(!a),c=u.querySelector(e.barSelector),l=e.speed,f=e.easing;return u.offsetWidth,r(function(n){""===e.positionUsing&&(e.positionUsing=t.getPositioningCSS()),s(c,function(t,n,r){var s;return(s="translate3d"===e.positionUsing?{transform:"translate3d("+i(t)+"%,0,0)"}:"translate"===e.positionUsing?{transform:"translate("+i(t)+"%,0)"}:{"margin-left":i(t)+"%"}).transition="all "+n+"ms "+r,s}(o,l,f)),1===o?(s(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout(function(){s(u,{transition:"all "+l+"ms linear",opacity:0}),setTimeout(function(){t.remove(),n()},l)},l)):setTimeout(n,l)}),this},t.isStarted=function(){return"number"==typeof t.status},t.start=function(){t.status||t.set(0);var n=function(){setTimeout(function(){t.status&&(t.trickle(),n())},e.trickleSpeed)};return e.trickle&&n(),this},t.done=function(e){return e||t.status?t.inc(.3+.5*Math.random()).set(1):this},t.inc=function(e){var i=t.status;return i?("number"!=typeof e&&(e=(1-i)*n(Math.random()*i,.1,.95)),i=n(i+e,0,.994),t.set(i)):t.start()},t.trickle=function(){return t.inc(Math.random()*e.trickleRate)},function(){var e=0,n=0;t.promise=function(i){return i&&"resolved"!==i.state()?(0===n&&t.start(),e++,n++,i.always(function(){0==--n?(e=0,t.done()):t.set((e-n)/e)}),this):this}}(),t.render=function(n){if(t.isRendered())return document.getElementById("nprogress");a(document.documentElement,"nprogress-busy");var r=document.createElement("div");r.id="nprogress",r.innerHTML=e.template;var o,u=r.querySelector(e.barSelector),c=n?"-100":i(t.status||0),f=document.querySelector(e.parent);return s(u,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),e.showSpinner||(o=r.querySelector(e.spinnerSelector))&&l(o),f!=document.body&&a(f,"nprogress-custom-parent"),f.appendChild(r),r},t.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(e.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&l(t)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var r=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),s=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=function(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})}(n),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var i,r=t.length,s=e.charAt(0).toUpperCase()+e.slice(1);r--;)if((i=t[r]+s)in n)return i;return e}(n))}function i(t,e,i){e=n(e),t.style[e]=i}return function(t,e){var n,r,s=arguments;if(2==s.length)for(n in e)void 0!==(r=e[n])&&e.hasOwnProperty(n)&&i(t,n,r);else i(t,s[1],s[2])}}();function o(t,e){var n="string"==typeof t?t:c(t);return n.indexOf(" "+e+" ")>=0}function a(t,e){var n=c(t),i=n+e;o(n,e)||(t.className=i.substring(1))}function u(t,e){var n,i=c(t);o(t,e)&&(n=i.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function c(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function l(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return t})?i.call(e,n,e,t):i)||(t.exports=r)},function(t,e,n){var i=n(2)("unscopables"),r=Array.prototype;void 0==r[i]&&n(26)(r,i,{}),t.exports=function(t){r[i][t]=!0}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var i=n(31),r=n(24),s=n(17),o=n(26),a=n(28),u=n(116),c=n(45),l=n(117),f=n(2)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,d,v,g,m){u(n,e,d);var b,_,k,y=function(t){if(!p&&t in $)return $[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",C="values"==v,S=!1,$=t.prototype,L=$[f]||$["@@iterator"]||v&&$[v],w=L||y(v),O=v?C?y("entries"):w:void 0,T="Array"==e&&$.entries||L;if(T&&(k=l(T.call(new t)))!==Object.prototype&&k.next&&(c(k,x,!0),i||"function"==typeof k[f]||o(k,f,h)),C&&L&&"values"!==L.name&&(S=!0,w=function(){return L.call(this)}),i&&!m||!p&&!S&&$[f]||o($,f,w),a[e]=w,a[x]=h,v)if(b={values:C?w:y("values"),keys:g?w:y("keys"),entries:O},m)for(_ in b)_ in $||s($,_,b[_]);else r(r.P+r.F*(p||S),e,b);return b}},function(t,e,n){"use strict";var i=n(51),r=n(29),s=n(45),o={};n(26)(o,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(o,{next:r(1,n)}),s(t,e+" Iterator")}},function(t,e,n){var i=n(11),r=n(78),s=n(30)("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},function(t,e,n){var i=n(24),r=n(12),s=n(13);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],o={};o[t]=e(n),i(i.S+i.F*s(function(){n(1)}),"Object",o)}},function(t,e,n){"use strict";n(120)("link",function(t){return function(e){return t(this,"a","href",e)}})},function(t,e,n){var i=n(24),r=n(13),s=n(25),o=/"/g,a=function(t,e,n,i){var r=String(s(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(i).replace(o,"&quot;")+'"'),a+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(a),i(i.P+i.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},function(t,e,n){"use strict";var i=n(88);n.n(i).a},function(t,e,n){"use strict";var i=n(89);n.n(i).a},function(t,e,n){"use strict";var i=n(44),r=n(124),s=n(47),o=n(78),a=n(43),u=Object.assign;t.exports=!u||n(13)(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=i})?function(t,e){for(var n=o(t),u=arguments.length,c=1,l=r.f,f=s.f;u>c;)for(var p,h=a(arguments[c++]),d=l?i(h).concat(l(h)):i(h),v=d.length,g=0;v>g;)f.call(h,p=d[g++])&&(n[p]=h[p]);return n}:u},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){"use strict";var i=n(24),r=n(49)(!1),s=[].indexOf,o=!!s&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(o||!n(79)(s)),"Array",{indexOf:function(t){return o?s.apply(this,arguments)||0:r(this,t,arguments[1])}})},function(t,e,n){"use strict";n(50)("trim",function(t){return function(){return t(this,3)}})},function(t,e,n){"use strict";var i=n(90);n.n(i).a},function(t,e,n){var i=n(1),r=n(46),s=n(10).f,o=n(48).f,a=n(91),u=n(129),c=i.RegExp,l=c,f=c.prototype,p=/a/g,h=/a/g,d=new c(p)!==p;if(n(5)&&(!d||n(13)(function(){return h[n(2)("match")]=!1,c(p)!=p||c(h)==h||"/a/i"!=c(p,"i")}))){c=function(t,e){var n=this instanceof c,i=a(t),s=void 0===e;return!n&&i&&t.constructor===c&&s?t:r(d?new l(i&&!s?t.source:t,e):l((i=t instanceof c)?t.source:t,i&&s?u.call(t):e),n?this:f,c)};for(var v=function(t){t in c||s(c,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},g=o(l),m=0;g.length>m;)v(g[m++]);f.constructor=c,c.prototype=f,n(17)(i,"RegExp",c)}n(52)("RegExp")},function(t,e,n){"use strict";var i=n(3);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){n(107)("match",1,function(t,e,n){return[function(n){"use strict";var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},n]})},function(t,e,n){"use strict";var i=n(92);n.n(i).a},function(t,e,n){"use strict";var i=n(93);n.n(i).a},function(t,e,n){"use strict";var i=n(94);n.n(i).a},function(t,e,n){"use strict";var i=n(95);n.n(i).a},function(t,e,n){"use strict";var i=n(24),r=n(80)(0),s=n(79)([].forEach,!0);i(i.P+i.F*!s,"Array",{forEach:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var i=n(96);n.n(i).a},function(t,e,n){"use strict";var i=n(97);n.n(i).a},function(t,e,n){"use strict";var i=n(98);n.n(i).a},function(t,e,n){"use strict";var i=n(99);n.n(i).a},function(t,e,n){"use strict";var i=n(100);n.n(i).a},function(t,e,n){"use strict";var i=n(101);n.n(i).a},,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(111);var i=n(0),r=n(112),s=n.n(r);n(83),n(84),n(105),n(81),n(119);const o=/#.*$/,a=/\.(md|html)$/,u=/\/$/,c=/^(https?:|mailto:|tel:)/;function l(t){return decodeURI(t).replace(o,"").replace(a,"")}function f(t){return c.test(t)}function p(t){if(f(t))return t;const e=t.match(o),n=e?e[0]:"",i=l(t);return u.test(i)?t:i+".html"+n}function h(t,e){const n=t.hash,i=function(t){const e=t.match(o);if(e)return e[0]}(e);return(!i||n===i)&&l(t.path)===l(e)}function d(t,e,n){n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const r=e.split("/");n&&r[r.length-1]||r.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?r.pop():"."!==e&&r.push(e)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));const i=l(e);for(let e=0;e<t.length;e++)if(l(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:p(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function v(t,e,n,i){const{pages:r,themeConfig:s}=n,o=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||o.sidebar||s.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const a=o.sidebar||s.sidebar;if(a){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const n in e)if(0===b(t).indexOf(n))return{base:n,config:e[n]};return{}}(e,a);return n?n.map(e=>(function t(e,n,i,r){if("string"==typeof e)return d(n,e,i);if(Array.isArray(e))return Object.assign(d(n,e[0],i),{title:e[1]});{r&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");const s=e.children||[];return{type:"group",title:e.title,children:s.map(e=>t(e,n,i,!0)),collapsable:!1!==e.collapsable}}})(e,r,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}function b(t){return/(\.html|\/)$/.test(t)?t:t+"/"}var _={props:{item:{required:!0}},computed:{link:function(){return p(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:f,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}},k=n(6),y=Object(k.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);y.options.__file="NavLink.vue";var x=y.exports,C={components:{NavLink:x},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},S=(n(121),Object(k.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),n("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})):t._e(),t._v(" "),n("Content",{attrs:{custom:""}}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null));S.options.__file="Home.vue";var $=S.exports,L=(n(122),Object(k.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null));L.options.__file="SidebarButton.vue";var w=L.exports,O=(n(106),n(125),n(126),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,i=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},r=[],s=0;s<e.length&&!(r.length>=5);s++){var o=e[s];if(this.getPageLocalePath(o)===n)if(i(o))r.push(o);else if(o.headers)for(var a=0;a<o.headers.length&&!(r.length>=5);a++){var u=o.headers[a];i(u)&&r.push(Object.assign({},o,{path:o.path+"#"+u.slug,header:u}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),T=(n(127),Object(k.a)(O,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.go(t.focusIndex)},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.onUp(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.onDown(e):null}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){t.go(i)},mouseenter:function(e){t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})):t._e()])},[],!1,null,null,null));T.options.__file="SearchBox.vue";var E=T.exports;n(128),n(130);function A(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n(108),n(109);var j={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},I=(n(131),Object(k.a)(j,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null));I.options.__file="DropdownTransition.vue";var N=I.exports,P={components:{NavLink:x,DropdownTransition:N},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},M=(n(132),Object(k.a)(P,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})):n("NavLink",{attrs:{item:e}})],1)}))])],1)},[],!1,null,null,null));M.options.__file="DropdownLink.vue";var D={components:{NavLink:x,DropdownLink:M.exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,r=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(function(s){var o,a=e[s],u=r[s]&&r[s].label||a.lang;return a.lang===t.$lang?o=n:(o=n.replace(t.$localeConfig.path,s),i.some(function(t){return t.path===o})||(o=s)),{text:u,link:o}})};return A(this.userNav).concat([s])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return Object.assign(m(t),{items:(t.items||[]).map(m)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},U=(n(133),Object(k.a)(D,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null));U.options.__file="NavLinks.vue";var R=U.exports;function H(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var G={components:{SidebarButton:w,NavLinks:R,SearchBox:E,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(H(this.$el,"paddingLeft"))+parseInt(H(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},B=(n(134),Object(k.a)(G,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:{"max-width":t.linksWrapMaxWidth+"px"}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null));B.options.__file="Navbar.vue";var W=B.exports;n(135);function q(t,e,n){var i=[];e.forEach(function(t){"group"===t.type?i.push.apply(i,A(t.children||[])):i.push(t)});for(var r=0;r<i.length;r++){var s=i[r];if("page"===s.type&&s.path===t.path)return i[r+n]}}var F={props:["sidebarItems"],computed:{lastUpdated:function(){if(this.$page.lastUpdated)return new Date(this.$page.lastUpdated).toLocaleString(this.$lang)},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t=this.$page.frontmatter.prev;return!1===t?void 0:t?d(this.$site.pages,t,this.$route.path):function(t,e){return q(t,e,-1)}(this.$page,this.sidebarItems)},next:function(){var t=this.$page.frontmatter.next;return!1===t?void 0:t?d(this.$site.pages,t,this.$route.path):function(t,e){return q(t,e,1)}(this.$page,this.sidebarItems)},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,r=void 0===i?"":i,s=t.docsBranch,o=void 0===s?"master":s,a=t.docsRepo,c=void 0===a?e:a,f=l(this.$page.path);return u.test(f)?f+="README.md":f+=".md",c&&n?this.createEditLink(e,c,r,o,f):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,r){return/bitbucket.org/.test(t)?(c.test(e)?e:t).replace(u,"")+"/".concat(i)+(n?"/"+n.replace(u,""):"")+r+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(c.test(e)?e:"https://github.com/".concat(e)).replace(u,"")+"/edit/".concat(i)+(n?"/"+n.replace(u,""):"")+r}}},V=(n(136),Object(k.a)(F,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{attrs:{custom:!1}}),t._v(" "),n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));V.options.__file="Page.vue";var z=V.exports;function J(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function X(t,e,n,i,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>r?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var o=h(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[J(t,n+"#"+e.slug,e.title,o),X(t,e.children,n,i,r,s+1)])}))}var Y={functional:!0,props:["item"],render:function(t,e){var n=e.parent,i=n.$page,r=n.$site,s=n.$route,a=e.props.item,u=h(s,a.path),c="auto"===a.type?u||a.children.some(function(t){return h(s,a.basePath+"#"+t.slug)}):u,l=J(t,a.path,a.title||a.path,c),f=null!=i.frontmatter.sidebarDepth?i.frontmatter.sidebarDepth:r.themeConfig.sidebarDepth,p=null==f?1:f,d=!!r.themeConfig.displayAllHeaders;return"auto"===a.type?[l,X(t,a.children,a.basePath,s,p)]:(c||d)&&a.headers&&!o.test(a.path)?[l,X(t,g(a.headers),a.path,s,p)]:l}},K=(n(137),Object(k.a)(Y,void 0,void 0,!1,null,null,null));K.options.__file="SidebarLink.vue";var Q=K.exports,Z={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:Q,DropdownTransition:N}},tt=(n(138),Object(k.a)(Z,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)})):t._e()])],1)},[],!1,null,null,null));tt.options.__file="SidebarGroup.vue";var et={components:{SidebarGroup:tt.exports,SidebarLink:Q,NavLinks:R},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some(function(e){return h(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return h(this.$route,t.regularPath)}}},nt=(n(139),Object(k.a)(et,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)})):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));nt.options.__file="Sidebar.vue";var it={components:{Home:$,Page:z,Sidebar:nt.exports,Navbar:W},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return v(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;window.addEventListener("scroll",this.onScroll),s.a.configure({showSpinner:!1}),this.$router.beforeEach(function(t,e,n){t.path===e.path||i.a.component(t.name)||s.a.start(),n()}),this.$router.afterEach(function(){s.a.done(),t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},rt=(n(140),n(141),Object(k.a)(it,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.layout?n("div",{staticClass:"custom-layout"},[n(t.$page.frontmatter.layout,{tag:"component"})],1):t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));rt.options.__file="Layout.vue";e.default=rt.exports}])]);