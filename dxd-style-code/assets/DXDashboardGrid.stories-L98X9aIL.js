import{W as Pn,J as ct,r as z,c as Ie,A as Nn,R as Fn,X as Mn,H as ft,w as Mt,a as Gt,o as Bt,f as Ye,g as pt,z as Rt,y as Lt,l as kt,b as Vt,k as Gn,m as Bn,x as Yt,u as Rn}from"./vue.esm-bundler-CzLKT_w4.js";import{u as Ht}from"./useClassComposition-Dym2pzZ_.js";import{_ as Ln}from"./DXIcon-BbhqsR95.js";import{_ as kn}from"./DXHeading-DwWVK5ab.js";import{_ as Vn}from"./DXText-DW7ThwBY.js";import{_ as Yn}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as Hn}from"./Bars3Icon-CdXxK_6D.js";import{_ as gn}from"./DXStatCard-DaVeqiJM.js";import{_ as lt}from"./DXCard-BX01pIOu.js";import"./DXButton-ChBdj9Dq.js";import{r as St}from"./UserGroupIcon-2c8k62pI.js";import{r as mn}from"./ChartBarIcon-Bcs_CYxM.js";import{r as vn}from"./CurrencyDollarIcon-CZLhDret.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./useSpacing-BOHUzi8w.js";/*!
  * vue-draggable-next v2.3.0
  * (c) 2025 Anish George
  * @license MIT
  */function $n(){return typeof window<"u"?window.console:global.console}const Wn=$n();function jn(t){const e=Object.create(null);return function(o){return e[o]||(e[o]=t(o))}}const zn=/-(\w)/g,$t=jn(t=>t.replace(zn,(e,n)=>n?n.toUpperCase():""));function ht(t){t.parentElement!==null&&t.parentElement.removeChild(t)}function Wt(t,e,n){const o=n===0?t.children[0]:t.children[n-1].nextSibling;t.insertBefore(e,o)}/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function jt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,o)}return n}function ie(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?jt(Object(n),!0).forEach(function(o){Un(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):jt(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function Ze(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ze=function(e){return typeof e}:Ze=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ze(t)}function Un(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ae(){return ae=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ae.apply(this,arguments)}function qn(t,e){if(t==null)return{};var n={},o=Object.keys(t),i,r;for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Kn(t,e){if(t==null)return{};var n=qn(t,e),o,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)o=r[i],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var Zn="1.14.0";function re(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var le=re(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Be=re(/Edge/i),zt=re(/firefox/i),Pe=re(/safari/i)&&!re(/chrome/i)&&!re(/android/i),wn=re(/iP(ad|od|hone)/i),Jn=re(/chrome/i)&&re(/android/i),bn={capture:!1,passive:!1};function S(t,e,n){t.addEventListener(e,n,!le&&bn)}function _(t,e,n){t.removeEventListener(e,n,!le&&bn)}function nt(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function Qn(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function ne(t,e,n,o){if(t){n=n||document;do{if(e!=null&&(e[0]===">"?t.parentNode===n&&nt(t,e):nt(t,e))||o&&t===n)return t;if(t===n)break}while(t=Qn(t))}return null}var Ut=/\s+/g;function W(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(Ut," ").replace(" "+e+" "," ");t.className=(o+(n?" "+e:"")).replace(Ut," ")}}function v(t,e,n){var o=t&&t.style;if(o){if(n===void 0)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),e===void 0?n:n[e];!(e in o)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),o[e]=n+(typeof n=="string"?"":"px")}}function Se(t,e){var n="";if(typeof t=="string")n=t;else do{var o=v(t,"transform");o&&o!=="none"&&(n=o+" "+n)}while(!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function yn(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function oe(){var t=document.scrollingElement;return t||document.documentElement}function F(t,e,n,o,i){if(!(!t.getBoundingClientRect&&t!==window)){var r,a,l,s,u,p,c;if(t!==window&&t.parentNode&&t!==oe()?(r=t.getBoundingClientRect(),a=r.top,l=r.left,s=r.bottom,u=r.right,p=r.height,c=r.width):(a=0,l=0,s=window.innerHeight,u=window.innerWidth,p=window.innerHeight,c=window.innerWidth),(e||n)&&t!==window&&(i=i||t.parentNode,!le))do if(i&&i.getBoundingClientRect&&(v(i,"transform")!=="none"||n&&v(i,"position")!=="static")){var g=i.getBoundingClientRect();a-=g.top+parseInt(v(i,"border-top-width")),l-=g.left+parseInt(v(i,"border-left-width")),s=a+r.height,u=l+r.width;break}while(i=i.parentNode);if(o&&t!==window){var C=Se(i||t),D=C&&C.a,h=C&&C.d;C&&(a/=h,l/=D,c/=D,p/=h,s=a+p,u=l+c)}return{top:a,left:l,bottom:s,right:u,width:c,height:p}}}function qt(t,e,n){for(var o=me(t,!0),i=F(t)[e];o;){var r=F(o)[n],a=void 0;if(a=i>=r,!a)return o;if(o===oe())break;o=me(o,!1)}return!1}function xe(t,e,n,o){for(var i=0,r=0,a=t.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==w.ghost&&(o||a[r]!==w.dragged)&&ne(a[r],n.draggable,t,!1)){if(i===e)return a[r];i++}r++}return null}function Pt(t,e){for(var n=t.lastElementChild;n&&(n===w.ghost||v(n,"display")==="none"||e&&!nt(n,e));)n=n.previousElementSibling;return n||null}function q(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==w.clone&&(!e||nt(t,e))&&n++;return n}function Kt(t){var e=0,n=0,o=oe();if(t)do{var i=Se(t),r=i.a,a=i.d;e+=t.scrollLeft*r,n+=t.scrollTop*a}while(t!==o&&(t=t.parentNode));return[e,n]}function eo(t,e){for(var n in t)if(t.hasOwnProperty(n)){for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n)}return-1}function me(t,e){if(!t||!t.getBoundingClientRect)return oe();var n=t,o=!1;do if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=v(n);if(n.clientWidth<n.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||n.clientHeight<n.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!n.getBoundingClientRect||n===document.body)return oe();if(o||e)return n;o=!0}}while(n=n.parentNode);return oe()}function to(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function gt(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var Ne;function Dn(t,e){return function(){if(!Ne){var n=arguments,o=this;n.length===1?t.call(o,n[0]):t.apply(o,n),Ne=setTimeout(function(){Ne=void 0},e)}}}function no(){clearTimeout(Ne),Ne=void 0}function En(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function _n(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}var U="Sortable"+new Date().getTime();function oo(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var o=[].slice.call(this.el.children);o.forEach(function(i){if(!(v(i,"display")==="none"||i===w.ghost)){t.push({target:i,rect:F(i)});var r=ie({},t[t.length-1].rect);if(i.thisAnimationDuration){var a=Se(i,!0);a&&(r.top-=a.f,r.left-=a.e)}i.fromRect=r}})}},addAnimationState:function(o){t.push(o)},removeAnimationState:function(o){t.splice(eo(t,{target:o}),1)},animateAll:function(o){var i=this;if(!this.options.animation){clearTimeout(e),typeof o=="function"&&o();return}var r=!1,a=0;t.forEach(function(l){var s=0,u=l.target,p=u.fromRect,c=F(u),g=u.prevFromRect,C=u.prevToRect,D=l.rect,h=Se(u,!0);h&&(c.top-=h.f,c.left-=h.e),u.toRect=c,u.thisAnimationDuration&&gt(g,c)&&!gt(p,c)&&(D.top-c.top)/(D.left-c.left)===(p.top-c.top)/(p.left-c.left)&&(s=ro(D,g,C,i.options)),gt(c,p)||(u.prevFromRect=p,u.prevToRect=c,s||(s=i.options.animation),i.animate(u,D,c,s)),s&&(r=!0,a=Math.max(a,s),clearTimeout(u.animationResetTimer),u.animationResetTimer=setTimeout(function(){u.animationTime=0,u.prevFromRect=null,u.fromRect=null,u.prevToRect=null,u.thisAnimationDuration=null},s),u.thisAnimationDuration=s)}),clearTimeout(e),r?e=setTimeout(function(){typeof o=="function"&&o()},a):typeof o=="function"&&o(),t=[]},animate:function(o,i,r,a){if(a){v(o,"transition",""),v(o,"transform","");var l=Se(this.el),s=l&&l.a,u=l&&l.d,p=(i.left-r.left)/(s||1),c=(i.top-r.top)/(u||1);o.animatingX=!!p,o.animatingY=!!c,v(o,"transform","translate3d("+p+"px,"+c+"px,0)"),this.forRepaintDummy=io(o),v(o,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),v(o,"transform","translate3d(0,0,0)"),typeof o.animated=="number"&&clearTimeout(o.animated),o.animated=setTimeout(function(){v(o,"transition",""),v(o,"transform",""),o.animated=!1,o.animatingX=!1,o.animatingY=!1},a)}}}}function io(t){return t.offsetWidth}function ro(t,e,n,o){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*o.animation}var De=[],mt={initializeByDefault:!0},Re={mount:function(e){for(var n in mt)mt.hasOwnProperty(n)&&!(n in e)&&(e[n]=mt[n]);De.forEach(function(o){if(o.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),De.push(e)},pluginEvent:function(e,n,o){var i=this;this.eventCanceled=!1,o.cancel=function(){i.eventCanceled=!0};var r=e+"Global";De.forEach(function(a){n[a.pluginName]&&(n[a.pluginName][r]&&n[a.pluginName][r](ie({sortable:n},o)),n.options[a.pluginName]&&n[a.pluginName][e]&&n[a.pluginName][e](ie({sortable:n},o)))})},initializePlugins:function(e,n,o,i){De.forEach(function(l){var s=l.pluginName;if(!(!e.options[s]&&!l.initializeByDefault)){var u=new l(e,n,e.options);u.sortable=e,u.options=e.options,e[s]=u,ae(o,u.defaults)}});for(var r in e.options)if(e.options.hasOwnProperty(r)){var a=this.modifyOption(e,r,e.options[r]);typeof a<"u"&&(e.options[r]=a)}},getEventProperties:function(e,n){var o={};return De.forEach(function(i){typeof i.eventProperties=="function"&&ae(o,i.eventProperties.call(n[i.pluginName],e))}),o},modifyOption:function(e,n,o){var i;return De.forEach(function(r){e[r.pluginName]&&r.optionListeners&&typeof r.optionListeners[n]=="function"&&(i=r.optionListeners[n].call(e[r.pluginName],o))}),i}};function ao(t){var e=t.sortable,n=t.rootEl,o=t.name,i=t.targetEl,r=t.cloneEl,a=t.toEl,l=t.fromEl,s=t.oldIndex,u=t.newIndex,p=t.oldDraggableIndex,c=t.newDraggableIndex,g=t.originalEvent,C=t.putSortable,D=t.extraEventProperties;if(e=e||n&&n[U],!!e){var h,E=e.options,x="on"+o.charAt(0).toUpperCase()+o.substr(1);window.CustomEvent&&!le&&!Be?h=new CustomEvent(o,{bubbles:!0,cancelable:!0}):(h=document.createEvent("Event"),h.initEvent(o,!0,!0)),h.to=a||n,h.from=l||n,h.item=i||n,h.clone=r,h.oldIndex=s,h.newIndex=u,h.oldDraggableIndex=p,h.newDraggableIndex=c,h.originalEvent=g,h.pullMode=C?C.lastPutMode:void 0;var T=ie(ie({},D),Re.getEventProperties(o,e));for(var N in T)h[N]=T[N];n&&n.dispatchEvent(h),E[x]&&E[x].call(e,h)}}var lo=["evt"],H=function(e,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=o.evt,r=Kn(o,lo);Re.pluginEvent.bind(w)(e,n,ie({dragEl:d,parentEl:O,ghostEl:y,rootEl:I,nextEl:ye,lastDownEl:Je,cloneEl:X,cloneHidden:ge,dragStarted:Oe,putSortable:B,activeSortable:w.active,originalEvent:i,oldIndex:Ce,oldDraggableIndex:Fe,newIndex:j,newDraggableIndex:he,hideGhostForTarget:Tn,unhideGhostForTarget:In,cloneNowHidden:function(){ge=!0},cloneNowShown:function(){ge=!1},dispatchSortableEvent:function(l){V({sortable:n,name:l,originalEvent:i})}},r))};function V(t){ao(ie({putSortable:B,cloneEl:X,targetEl:d,rootEl:I,oldIndex:Ce,oldDraggableIndex:Fe,newIndex:j,newDraggableIndex:he},t))}var d,O,y,I,ye,Je,X,ge,Ce,j,Fe,he,He,B,_e=!1,ot=!1,it=[],we,Q,vt,wt,Zt,Jt,Oe,Ee,Me,Ge=!1,$e=!1,Qe,L,bt=[],xt=!1,rt=[],st=typeof document<"u",We=wn,Qt=Be||le?"cssFloat":"float",so=st&&!Jn&&!wn&&"draggable"in document.createElement("div"),Cn=function(){if(st){if(le)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),Sn=function(e,n){var o=v(e),i=parseInt(o.width)-parseInt(o.paddingLeft)-parseInt(o.paddingRight)-parseInt(o.borderLeftWidth)-parseInt(o.borderRightWidth),r=xe(e,0,n),a=xe(e,1,n),l=r&&v(r),s=a&&v(a),u=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+F(r).width,p=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+F(a).width;if(o.display==="flex")return o.flexDirection==="column"||o.flexDirection==="column-reverse"?"vertical":"horizontal";if(o.display==="grid")return o.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&l.float&&l.float!=="none"){var c=l.float==="left"?"left":"right";return a&&(s.clear==="both"||s.clear===c)?"vertical":"horizontal"}return r&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||u>=i&&o[Qt]==="none"||a&&o[Qt]==="none"&&u+p>i)?"vertical":"horizontal"},uo=function(e,n,o){var i=o?e.left:e.top,r=o?e.right:e.bottom,a=o?e.width:e.height,l=o?n.left:n.top,s=o?n.right:n.bottom,u=o?n.width:n.height;return i===l||r===s||i+a/2===l+u/2},co=function(e,n){var o;return it.some(function(i){var r=i[U].options.emptyInsertThreshold;if(!(!r||Pt(i))){var a=F(i),l=e>=a.left-r&&e<=a.right+r,s=n>=a.top-r&&n<=a.bottom+r;if(l&&s)return o=i}}),o},xn=function(e){function n(r,a){return function(l,s,u,p){var c=l.options.group.name&&s.options.group.name&&l.options.group.name===s.options.group.name;if(r==null&&(a||c))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return n(r(l,s,u,p),a)(l,s,u,p);var g=(a?l:s).options.group.name;return r===!0||typeof r=="string"&&r===g||r.join&&r.indexOf(g)>-1}}var o={},i=e.group;(!i||Ze(i)!="object")&&(i={name:i}),o.name=i.name,o.checkPull=n(i.pull,!0),o.checkPut=n(i.put),o.revertClone=i.revertClone,e.group=o},Tn=function(){!Cn&&y&&v(y,"display","none")},In=function(){!Cn&&y&&v(y,"display","")};st&&document.addEventListener("click",function(t){if(ot)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),ot=!1,!1},!0);var be=function(e){if(d){e=e.touches?e.touches[0]:e;var n=co(e.clientX,e.clientY);if(n){var o={};for(var i in e)e.hasOwnProperty(i)&&(o[i]=e[i]);o.target=o.rootEl=n,o.preventDefault=void 0,o.stopPropagation=void 0,n[U]._onDragOver(o)}}},fo=function(e){d&&d.parentNode[U]._isOutsideThisEl(e.target)};function w(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=ae({},e),t[U]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Sn(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,l){a.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:w.supportPointer!==!1&&"PointerEvent"in window&&!Pe,emptyInsertThreshold:5};Re.initializePlugins(this,t,n);for(var o in n)!(o in e)&&(e[o]=n[o]);xn(e);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=e.forceFallback?!1:so,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?S(t,"pointerdown",this._onTapStart):(S(t,"mousedown",this._onTapStart),S(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(S(t,"dragover",this),S(t,"dragenter",this)),it.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),ae(this,oo())}w.prototype={constructor:w,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(Ee=null)},_getDirection:function(e,n){return typeof this.options.direction=="function"?this.options.direction.call(this,e,n,d):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,o=this.el,i=this.options,r=i.preventOnFilter,a=e.type,l=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,s=(l||e).target,u=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,p=i.filter;if(yo(o),!d&&!(/mousedown|pointerdown/.test(a)&&e.button!==0||i.disabled)&&!u.isContentEditable&&!(!this.nativeDraggable&&Pe&&s&&s.tagName.toUpperCase()==="SELECT")&&(s=ne(s,i.draggable,o,!1),!(s&&s.animated)&&Je!==s)){if(Ce=q(s),Fe=q(s,i.draggable),typeof p=="function"){if(p.call(this,e,s,this)){V({sortable:n,rootEl:u,name:"filter",targetEl:s,toEl:o,fromEl:o}),H("filter",n,{evt:e}),r&&e.cancelable&&e.preventDefault();return}}else if(p&&(p=p.split(",").some(function(c){if(c=ne(u,c.trim(),o,!1),c)return V({sortable:n,rootEl:c,name:"filter",targetEl:s,fromEl:o,toEl:o}),H("filter",n,{evt:e}),!0}),p)){r&&e.cancelable&&e.preventDefault();return}i.handle&&!ne(u,i.handle,o,!1)||this._prepareDragStart(e,l,s)}}},_prepareDragStart:function(e,n,o){var i=this,r=i.el,a=i.options,l=r.ownerDocument,s;if(o&&!d&&o.parentNode===r){var u=F(o);if(I=r,d=o,O=d.parentNode,ye=d.nextSibling,Je=o,He=a.group,w.dragged=d,we={target:d,clientX:(n||e).clientX,clientY:(n||e).clientY},Zt=we.clientX-u.left,Jt=we.clientY-u.top,this._lastX=(n||e).clientX,this._lastY=(n||e).clientY,d.style["will-change"]="all",s=function(){if(H("delayEnded",i,{evt:e}),w.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!zt&&i.nativeDraggable&&(d.draggable=!0),i._triggerDragStart(e,n),V({sortable:i,name:"choose",originalEvent:e}),W(d,a.chosenClass,!0)},a.ignore.split(",").forEach(function(p){yn(d,p.trim(),yt)}),S(l,"dragover",be),S(l,"mousemove",be),S(l,"touchmove",be),S(l,"mouseup",i._onDrop),S(l,"touchend",i._onDrop),S(l,"touchcancel",i._onDrop),zt&&this.nativeDraggable&&(this.options.touchStartThreshold=4,d.draggable=!0),H("delayStart",this,{evt:e}),a.delay&&(!a.delayOnTouchOnly||n)&&(!this.nativeDraggable||!(Be||le))){if(w.eventCanceled){this._onDrop();return}S(l,"mouseup",i._disableDelayedDrag),S(l,"touchend",i._disableDelayedDrag),S(l,"touchcancel",i._disableDelayedDrag),S(l,"mousemove",i._delayedDragTouchMoveHandler),S(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&S(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(s,a.delay)}else s()}},_delayedDragTouchMoveHandler:function(e){var n=e.touches?e.touches[0]:e;Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){d&&yt(d),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;_(e,"mouseup",this._disableDelayedDrag),_(e,"touchend",this._disableDelayedDrag),_(e,"touchcancel",this._disableDelayedDrag),_(e,"mousemove",this._delayedDragTouchMoveHandler),_(e,"touchmove",this._delayedDragTouchMoveHandler),_(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,n){n=n||e.pointerType=="touch"&&e,!this.nativeDraggable||n?this.options.supportPointer?S(document,"pointermove",this._onTouchMove):n?S(document,"touchmove",this._onTouchMove):S(document,"mousemove",this._onTouchMove):(S(d,"dragend",this),S(I,"dragstart",this._onDragStart));try{document.selection?et(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,n){if(_e=!1,I&&d){H("dragStarted",this,{evt:n}),this.nativeDraggable&&S(document,"dragover",fo);var o=this.options;!e&&W(d,o.dragClass,!1),W(d,o.ghostClass,!0),w.active=this,e&&this._appendGhost(),V({sortable:this,name:"start",originalEvent:n})}else this._nulling()},_emulateDragOver:function(){if(Q){this._lastX=Q.clientX,this._lastY=Q.clientY,Tn();for(var e=document.elementFromPoint(Q.clientX,Q.clientY),n=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Q.clientX,Q.clientY),e!==n);)n=e;if(d.parentNode[U]._isOutsideThisEl(e),n)do{if(n[U]){var o=void 0;if(o=n[U]._onDragOver({clientX:Q.clientX,clientY:Q.clientY,target:e,rootEl:n}),o&&!this.options.dragoverBubble)break}e=n}while(n=n.parentNode);In()}},_onTouchMove:function(e){if(we){var n=this.options,o=n.fallbackTolerance,i=n.fallbackOffset,r=e.touches?e.touches[0]:e,a=y&&Se(y,!0),l=y&&a&&a.a,s=y&&a&&a.d,u=We&&L&&Kt(L),p=(r.clientX-we.clientX+i.x)/(l||1)+(u?u[0]-bt[0]:0)/(l||1),c=(r.clientY-we.clientY+i.y)/(s||1)+(u?u[1]-bt[1]:0)/(s||1);if(!w.active&&!_e){if(o&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<o)return;this._onDragStart(e,!0)}if(y){a?(a.e+=p-(vt||0),a.f+=c-(wt||0)):a={a:1,b:0,c:0,d:1,e:p,f:c};var g="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");v(y,"webkitTransform",g),v(y,"mozTransform",g),v(y,"msTransform",g),v(y,"transform",g),vt=p,wt=c,Q=r}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!y){var e=this.options.fallbackOnBody?document.body:I,n=F(d,!0,We,!0,e),o=this.options;if(We){for(L=e;v(L,"position")==="static"&&v(L,"transform")==="none"&&L!==document;)L=L.parentNode;L!==document.body&&L!==document.documentElement?(L===document&&(L=oe()),n.top+=L.scrollTop,n.left+=L.scrollLeft):L=oe(),bt=Kt(L)}y=d.cloneNode(!0),W(y,o.ghostClass,!1),W(y,o.fallbackClass,!0),W(y,o.dragClass,!0),v(y,"transition",""),v(y,"transform",""),v(y,"box-sizing","border-box"),v(y,"margin",0),v(y,"top",n.top),v(y,"left",n.left),v(y,"width",n.width),v(y,"height",n.height),v(y,"opacity","0.8"),v(y,"position",We?"absolute":"fixed"),v(y,"zIndex","100000"),v(y,"pointerEvents","none"),w.ghost=y,e.appendChild(y),v(y,"transform-origin",Zt/parseInt(y.style.width)*100+"% "+Jt/parseInt(y.style.height)*100+"%")}},_onDragStart:function(e,n){var o=this,i=e.dataTransfer,r=o.options;if(H("dragStart",this,{evt:e}),w.eventCanceled){this._onDrop();return}H("setupClone",this),w.eventCanceled||(X=_n(d),X.draggable=!1,X.style["will-change"]="",this._hideClone(),W(X,this.options.chosenClass,!1),w.clone=X),o.cloneId=et(function(){H("clone",o),!w.eventCanceled&&(o.options.removeCloneOnHide||I.insertBefore(X,d),o._hideClone(),V({sortable:o,name:"clone"}))}),!n&&W(d,r.dragClass,!0),n?(ot=!0,o._loopId=setInterval(o._emulateDragOver,50)):(_(document,"mouseup",o._onDrop),_(document,"touchend",o._onDrop),_(document,"touchcancel",o._onDrop),i&&(i.effectAllowed="move",r.setData&&r.setData.call(o,i,d)),S(document,"drop",o),v(d,"transform","translateZ(0)")),_e=!0,o._dragStartId=et(o._dragStarted.bind(o,n,e)),S(document,"selectstart",o),Oe=!0,Pe&&v(document.body,"user-select","none")},_onDragOver:function(e){var n=this.el,o=e.target,i,r,a,l=this.options,s=l.group,u=w.active,p=He===s,c=l.sort,g=B||u,C,D=this,h=!1;if(xt)return;function E(fe,ut){H(fe,D,ie({evt:e,isOwner:p,axis:C?"vertical":"horizontal",revert:a,dragRect:i,targetRect:r,canSort:c,fromSortable:g,target:o,completed:T,onMove:function(Te,dt){return je(I,n,d,i,Te,F(Te),e,dt)},changed:N},ut))}function x(){E("dragOverAnimationCapture"),D.captureAnimationState(),D!==g&&g.captureAnimationState()}function T(fe){return E("dragOverCompleted",{insertion:fe}),fe&&(p?u._hideClone():u._showClone(D),D!==g&&(W(d,B?B.options.ghostClass:u.options.ghostClass,!1),W(d,l.ghostClass,!0)),B!==D&&D!==w.active?B=D:D===w.active&&B&&(B=null),g===D&&(D._ignoreWhileAnimating=o),D.animateAll(function(){E("dragOverAnimationComplete"),D._ignoreWhileAnimating=null}),D!==g&&(g.animateAll(),g._ignoreWhileAnimating=null)),(o===d&&!d.animated||o===n&&!o.animated)&&(Ee=null),!l.dragoverBubble&&!e.rootEl&&o!==document&&(d.parentNode[U]._isOutsideThisEl(e.target),!fe&&be(e)),!l.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),h=!0}function N(){j=q(d),he=q(d,l.draggable),V({sortable:D,name:"change",toEl:n,newIndex:j,newDraggableIndex:he,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),o=ne(o,l.draggable,n,!0),E("dragOver"),w.eventCanceled)return h;if(d.contains(e.target)||o.animated&&o.animatingX&&o.animatingY||D._ignoreWhileAnimating===o)return T(!1);if(ot=!1,u&&!l.disabled&&(p?c||(a=O!==I):B===this||(this.lastPutMode=He.checkPull(this,u,d,e))&&s.checkPut(this,u,d,e))){if(C=this._getDirection(e,o)==="vertical",i=F(d),E("dragOverValid"),w.eventCanceled)return h;if(a)return O=I,x(),this._hideClone(),E("revert"),w.eventCanceled||(ye?I.insertBefore(d,ye):I.appendChild(d)),T(!0);var M=Pt(n,l.draggable);if(!M||mo(e,C,this)&&!M.animated){if(M===d)return T(!1);if(M&&n===e.target&&(o=M),o&&(r=F(o)),je(I,n,d,i,o,r,e,!!o)!==!1)return x(),n.appendChild(d),O=n,N(),T(!0)}else if(M&&go(e,C,this)){var $=xe(n,0,l,!0);if($===d)return T(!1);if(o=$,r=F(o),je(I,n,d,i,o,r,e,!1)!==!1)return x(),n.insertBefore(d,$),O=n,N(),T(!0)}else if(o.parentNode===n){r=F(o);var G=0,ee,se=d.parentNode!==n,R=!uo(d.animated&&d.toRect||i,o.animated&&o.toRect||r,C),ue=C?"top":"left",K=qt(o,"top","top")||qt(d,"top","top"),de=K?K.scrollTop:void 0;Ee!==o&&(ee=r[ue],Ge=!1,$e=!R&&l.invertSwap||se),G=vo(e,o,r,C,R?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,$e,Ee===o);var Z;if(G!==0){var te=q(d);do te-=G,Z=O.children[te];while(Z&&(v(Z,"display")==="none"||Z===y))}if(G===0||Z===o)return T(!1);Ee=o,Me=G;var ce=o.nextElementSibling,J=!1;J=G===1;var ve=je(I,n,d,i,o,r,e,J);if(ve!==!1)return(ve===1||ve===-1)&&(J=ve===1),xt=!0,setTimeout(ho,30),x(),J&&!ce?n.appendChild(d):o.parentNode.insertBefore(d,J?ce:o),K&&En(K,0,de-K.scrollTop),O=d.parentNode,ee!==void 0&&!$e&&(Qe=Math.abs(ee-F(o)[ue])),N(),T(!0)}if(n.contains(d))return T(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){_(document,"mousemove",this._onTouchMove),_(document,"touchmove",this._onTouchMove),_(document,"pointermove",this._onTouchMove),_(document,"dragover",be),_(document,"mousemove",be),_(document,"touchmove",be)},_offUpEvents:function(){var e=this.el.ownerDocument;_(e,"mouseup",this._onDrop),_(e,"touchend",this._onDrop),_(e,"pointerup",this._onDrop),_(e,"touchcancel",this._onDrop),_(document,"selectstart",this)},_onDrop:function(e){var n=this.el,o=this.options;if(j=q(d),he=q(d,o.draggable),H("drop",this,{evt:e}),O=d&&d.parentNode,j=q(d),he=q(d,o.draggable),w.eventCanceled){this._nulling();return}_e=!1,$e=!1,Ge=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Tt(this.cloneId),Tt(this._dragStartId),this.nativeDraggable&&(_(document,"drop",this),_(n,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Pe&&v(document.body,"user-select",""),v(d,"transform",""),e&&(Oe&&(e.cancelable&&e.preventDefault(),!o.dropBubble&&e.stopPropagation()),y&&y.parentNode&&y.parentNode.removeChild(y),(I===O||B&&B.lastPutMode!=="clone")&&X&&X.parentNode&&X.parentNode.removeChild(X),d&&(this.nativeDraggable&&_(d,"dragend",this),yt(d),d.style["will-change"]="",Oe&&!_e&&W(d,B?B.options.ghostClass:this.options.ghostClass,!1),W(d,this.options.chosenClass,!1),V({sortable:this,name:"unchoose",toEl:O,newIndex:null,newDraggableIndex:null,originalEvent:e}),I!==O?(j>=0&&(V({rootEl:O,name:"add",toEl:O,fromEl:I,originalEvent:e}),V({sortable:this,name:"remove",toEl:O,originalEvent:e}),V({rootEl:O,name:"sort",toEl:O,fromEl:I,originalEvent:e}),V({sortable:this,name:"sort",toEl:O,originalEvent:e})),B&&B.save()):j!==Ce&&j>=0&&(V({sortable:this,name:"update",toEl:O,originalEvent:e}),V({sortable:this,name:"sort",toEl:O,originalEvent:e})),w.active&&((j==null||j===-1)&&(j=Ce,he=Fe),V({sortable:this,name:"end",toEl:O,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){H("nulling",this),I=d=O=y=ye=X=Je=ge=we=Q=Oe=j=he=Ce=Fe=Ee=Me=B=He=w.dragged=w.ghost=w.clone=w.active=null,rt.forEach(function(e){e.checked=!0}),rt.length=vt=wt=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":d&&(this._onDragOver(e),po(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],n,o=this.el.children,i=0,r=o.length,a=this.options;i<r;i++)n=o[i],ne(n,a.draggable,this.el,!1)&&e.push(n.getAttribute(a.dataIdAttr)||bo(n));return e},sort:function(e,n){var o={},i=this.el;this.toArray().forEach(function(r,a){var l=i.children[a];ne(l,this.options.draggable,i,!1)&&(o[r]=l)},this),n&&this.captureAnimationState(),e.forEach(function(r){o[r]&&(i.removeChild(o[r]),i.appendChild(o[r]))}),n&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,n){return ne(e,n||this.options.draggable,this.el,!1)},option:function(e,n){var o=this.options;if(n===void 0)return o[e];var i=Re.modifyOption(this,e,n);typeof i<"u"?o[e]=i:o[e]=n,e==="group"&&xn(o)},destroy:function(){H("destroy",this);var e=this.el;e[U]=null,_(e,"mousedown",this._onTapStart),_(e,"touchstart",this._onTapStart),_(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(_(e,"dragover",this),_(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(n){n.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),it.splice(it.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!ge){if(H("hideClone",this),w.eventCanceled)return;v(X,"display","none"),this.options.removeCloneOnHide&&X.parentNode&&X.parentNode.removeChild(X),ge=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(ge){if(H("showClone",this),w.eventCanceled)return;d.parentNode==I&&!this.options.group.revertClone?I.insertBefore(X,d):ye?I.insertBefore(X,ye):I.appendChild(X),this.options.group.revertClone&&this.animate(d,X),v(X,"display",""),ge=!1}}};function po(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function je(t,e,n,o,i,r,a,l){var s,u=t[U],p=u.options.onMove,c;return window.CustomEvent&&!le&&!Be?s=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(s=document.createEvent("Event"),s.initEvent("move",!0,!0)),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=i||e,s.relatedRect=r||F(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),p&&(c=p.call(u,s,a)),c}function yt(t){t.draggable=!1}function ho(){xt=!1}function go(t,e,n){var o=F(xe(n.el,0,n.options,!0)),i=10;return e?t.clientX<o.left-i||t.clientY<o.top&&t.clientX<o.right:t.clientY<o.top-i||t.clientY<o.bottom&&t.clientX<o.left}function mo(t,e,n){var o=F(Pt(n.el,n.options.draggable)),i=10;return e?t.clientX>o.right+i||t.clientX<=o.right&&t.clientY>o.bottom&&t.clientX>=o.left:t.clientX>o.right&&t.clientY>o.top||t.clientX<=o.right&&t.clientY>o.bottom+i}function vo(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,u=o?n.height:n.width,p=o?n.top:n.left,c=o?n.bottom:n.right,g=!1;if(!a){if(l&&Qe<u*i){if(!Ge&&(Me===1?s>p+u*r/2:s<c-u*r/2)&&(Ge=!0),Ge)g=!0;else if(Me===1?s<p+Qe:s>c-Qe)return-Me}else if(s>p+u*(1-i)/2&&s<c-u*(1-i)/2)return wo(e)}return g=g||a,g&&(s<p+u*r/2||s>c-u*r/2)?s>p+u/2?1:-1:0}function wo(t){return q(d)<q(t)?1:-1}function bo(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n);return o.toString(36)}function yo(t){rt.length=0;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var o=e[n];o.checked&&rt.push(o)}}function et(t){return setTimeout(t,0)}function Tt(t){return clearTimeout(t)}st&&S(document,"touchmove",function(t){(w.active||_e)&&t.cancelable&&t.preventDefault()});w.utils={on:S,off:_,css:v,find:yn,is:function(e,n){return!!ne(e,n,e,!1)},extend:to,throttle:Dn,closest:ne,toggleClass:W,clone:_n,index:q,nextTick:et,cancelNextTick:Tt,detectDirection:Sn,getChild:xe};w.get=function(t){return t[U]};w.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach(function(o){if(!o.prototype||!o.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));o.utils&&(w.utils=ie(ie({},w.utils),o.utils)),Re.mount(o)})};w.create=function(t,e){return new w(t,e)};w.version=Zn;var P=[],Xe,It,Ot=!1,Dt,Et,at,Ae;function Do(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(n){var o=n.originalEvent;this.sortable.nativeDraggable?S(document,"dragover",this._handleAutoScroll):this.options.supportPointer?S(document,"pointermove",this._handleFallbackAutoScroll):o.touches?S(document,"touchmove",this._handleFallbackAutoScroll):S(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(n){var o=n.originalEvent;!this.options.dragOverBubble&&!o.rootEl&&this._handleAutoScroll(o)},drop:function(){this.sortable.nativeDraggable?_(document,"dragover",this._handleAutoScroll):(_(document,"pointermove",this._handleFallbackAutoScroll),_(document,"touchmove",this._handleFallbackAutoScroll),_(document,"mousemove",this._handleFallbackAutoScroll)),en(),tt(),no()},nulling:function(){at=It=Xe=Ot=Ae=Dt=Et=null,P.length=0},_handleFallbackAutoScroll:function(n){this._handleAutoScroll(n,!0)},_handleAutoScroll:function(n,o){var i=this,r=(n.touches?n.touches[0]:n).clientX,a=(n.touches?n.touches[0]:n).clientY,l=document.elementFromPoint(r,a);if(at=n,o||this.options.forceAutoScrollFallback||Be||le||Pe){_t(n,this.options,l,o);var s=me(l,!0);Ot&&(!Ae||r!==Dt||a!==Et)&&(Ae&&en(),Ae=setInterval(function(){var u=me(document.elementFromPoint(r,a),!0);u!==s&&(s=u,tt()),_t(n,i.options,u,o)},10),Dt=r,Et=a)}else{if(!this.options.bubbleScroll||me(l,!0)===oe()){tt();return}_t(n,this.options,me(l,!1),!1)}}},ae(t,{pluginName:"scroll",initializeByDefault:!0})}function tt(){P.forEach(function(t){clearInterval(t.pid)}),P=[]}function en(){clearInterval(Ae)}var _t=Dn(function(t,e,n,o){if(e.scroll){var i=(t.touches?t.touches[0]:t).clientX,r=(t.touches?t.touches[0]:t).clientY,a=e.scrollSensitivity,l=e.scrollSpeed,s=oe(),u=!1,p;It!==n&&(It=n,tt(),Xe=e.scroll,p=e.scrollFn,Xe===!0&&(Xe=me(n,!0)));var c=0,g=Xe;do{var C=g,D=F(C),h=D.top,E=D.bottom,x=D.left,T=D.right,N=D.width,M=D.height,$=void 0,G=void 0,ee=C.scrollWidth,se=C.scrollHeight,R=v(C),ue=C.scrollLeft,K=C.scrollTop;C===s?($=N<ee&&(R.overflowX==="auto"||R.overflowX==="scroll"||R.overflowX==="visible"),G=M<se&&(R.overflowY==="auto"||R.overflowY==="scroll"||R.overflowY==="visible")):($=N<ee&&(R.overflowX==="auto"||R.overflowX==="scroll"),G=M<se&&(R.overflowY==="auto"||R.overflowY==="scroll"));var de=$&&(Math.abs(T-i)<=a&&ue+N<ee)-(Math.abs(x-i)<=a&&!!ue),Z=G&&(Math.abs(E-r)<=a&&K+M<se)-(Math.abs(h-r)<=a&&!!K);if(!P[c])for(var te=0;te<=c;te++)P[te]||(P[te]={});(P[c].vx!=de||P[c].vy!=Z||P[c].el!==C)&&(P[c].el=C,P[c].vx=de,P[c].vy=Z,clearInterval(P[c].pid),(de!=0||Z!=0)&&(u=!0,P[c].pid=setInterval((function(){o&&this.layer===0&&w.active._onTouchMove(at);var ce=P[this.layer].vy?P[this.layer].vy*l:0,J=P[this.layer].vx?P[this.layer].vx*l:0;typeof p=="function"&&p.call(w.dragged.parentNode[U],J,ce,t,at,P[this.layer].el)!=="continue"||En(P[this.layer].el,J,ce)}).bind({layer:c}),24))),c++}while(e.bubbleScroll&&g!==s&&(g=me(g,!1)));Ot=u}},30),On=function(e){var n=e.originalEvent,o=e.putSortable,i=e.dragEl,r=e.activeSortable,a=e.dispatchSortableEvent,l=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(n){var u=o||r;l();var p=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n,c=document.elementFromPoint(p.clientX,p.clientY);s(),u&&!u.el.contains(c)&&(a("spill"),this.onSpill({dragEl:i,putSortable:o}))}};function Nt(){}Nt.prototype={startIndex:null,dragStart:function(e){var n=e.oldDraggableIndex;this.startIndex=n},onSpill:function(e){var n=e.dragEl,o=e.putSortable;this.sortable.captureAnimationState(),o&&o.captureAnimationState();var i=xe(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(n,i):this.sortable.el.appendChild(n),this.sortable.animateAll(),o&&o.animateAll()},drop:On};ae(Nt,{pluginName:"revertOnSpill"});function Ft(){}Ft.prototype={onSpill:function(e){var n=e.dragEl,o=e.putSortable,i=o||this.sortable;i.captureAnimationState(),n.parentNode&&n.parentNode.removeChild(n),i.animateAll()},drop:On};ae(Ft,{pluginName:"removeOnSpill"});w.mount(new Do);w.mount(Ft,Nt);function Eo(t,e){return Object.values(t).indexOf(e)}function _o(t,e,n,o){if(!t)return[];const i=Object.values(t),r=e.length-o;return[...e].map((l,s)=>s>=r?i.length:i.indexOf(l))}function Co(t){return["transition-group","TransitionGroup"].includes(t)}function tn(t){if(!t||t.length!==1)return!1;const[{type:e}]=t;return e?Co(e.name):!1}function So(t,e){return e?{...e.props,...e.attrs}:t}const Xt=["Start","Add","Remove","Update","End"],At=["Choose","Unchoose","Sort","Filter","Clone"],xo=["Move",...Xt,...At].map(t=>"on"+t);let Ct=null;const To=Pn({name:"VueDraggableNext",inheritAttrs:!1,props:{options:Object,list:{type:Array,required:!1,default:null},noTransitionOnDrag:{type:Boolean,default:!1},clone:{type:Function,default:t=>t},tag:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null},component:{type:String,default:null},modelValue:{type:Array,required:!1,default:null}},emits:["update:modelValue","move","change",...Xt.map(t=>t.toLowerCase()),...At.map(t=>t.toLowerCase())],setup(t,{emit:e,slots:n,attrs:o}){const i=z(!1),r=z(!1),a=z(0),l=z(0),s=z([]),u=z(null),p=z(null),c=Ie(()=>t.list?t.list:t.modelValue),g=Mn();function C(){return t.component?Fn(t.component):t.tag}function D(f){if(p.value)for(const m in f){const b=$t(m);xo.indexOf(b)===-1&&p.value.option(b,f[m])}}function h(){var f;return((f=g==null?void 0:g.proxy)==null?void 0:f.$el.children)||[]}async function E(){var f;await ft(),s.value=_o(h(),((f=g==null?void 0:g.proxy)==null?void 0:f.$el.children)||[],i.value,l.value)}function x(f){const m=Eo(h()||[],f);if(m===-1)return null;const b=c.value?c.value[m]:null;return{index:m,element:b}}function T(f){ft(()=>e("change",f))}function N(f){if(t.list){f(t.list);return}const m=[...t.modelValue||[]];f(m),e("update:modelValue",m)}function M(...f){N(b=>b.splice(...f))}function $(f,m){N(A=>A.splice(m,0,A.splice(f,1)[0]))}function G(f){const m=s.value,b=m.length;return f>b-1?b:m[f]}function ee(){var m,b;return n.default&&((b=(m=n.default()[0])==null?void 0:m.component)==null?void 0:b.proxy)||null}function se(f){if(!t.noTransitionOnDrag||!i.value)return;const m=h();m[f]&&(m[f].data=null);const b=ee();b&&(b.children=[],b.kept=void 0)}function R(f){E(),u.value=x(f.item),u.value&&(f.item._underlying_vm_=t.clone(u.value.element),Ct=f.item)}function ue(f){const m=f.item._underlying_vm_;if(m===void 0)return;ht(f.item);const b=G(f.newIndex);M(b,0,m),E(),T({added:{element:m,newIndex:b}})}function K(f){var b;if(Wt((b=g==null?void 0:g.proxy)==null?void 0:b.$el,f.item,f.oldIndex),f.pullMode==="clone"){ht(f.clone);return}if(!u.value)return;const m=u.value.index;M(m,1),se(m),T({removed:{element:u.value.element,oldIndex:m}})}function de(f){var A,k;ht(f.item),Wt(f.from,f.item,f.oldIndex);const m=(A=u.value)==null?void 0:A.index,b=G(f.newIndex);$(m,b),T({moved:{element:(k=u.value)==null?void 0:k.element,oldIndex:m,newIndex:b}})}function Z(f,m){Object.prototype.hasOwnProperty.call(f,m)&&(f[m]+=a.value)}function te(f){return f.__draggable_component__}function ce({to:f,related:m}){const b=te(f);if(!b)return{component:b};const A=b.realList,k={list:A,component:b};if(f!==m&&A&&b.getUnderlyingVm){const pe=b.getUnderlyingVm(m);if(pe)return Object.assign(pe,k)}return k}function J(f,m){const b=[...m.to.children].filter(Y=>Y.style.display!=="none");if(b.length===0)return 0;const A=b.indexOf(m.related),k=f.component.getVmIndex(A);return b.indexOf(Ct)!==-1||!m.willInsertAfter?k:k+1}const ve=()=>{var k,pe;const f={};Xt.forEach(Y=>{f["on"+Y]=ut(Y)}),At.forEach(Y=>{f["on"+Y]=fe.bind(null,Y)});const m=Object.keys(o).reduce((Y,Ve)=>(Y[$t(Ve)]=o[Ve],Y),{}),b=Object.assign({},m,f,{onMove:(Y,Ve)=>ke(Y,Ve)});"draggable"in b||(b.draggable=">*");const A=((k=g==null?void 0:g.proxy)==null?void 0:k.$el.nodeType)===1?g.proxy.$el:((pe=g==null?void 0:g.proxy)==null?void 0:pe.$el.parentElement)||null;A&&(p.value=new w(A,b),A.__draggable_component__=g==null?void 0:g.proxy,E())};function fe(f,m){ft(()=>e(f.toLowerCase(),m))}function ut(f){return m=>{if(c.value!==null){const b="onDrag"+f,A=dt[b];A&&A(m)}fe(f,m)}}function ke(f,m){const b=t.move;if(!b||!c.value)return!0;const A=ce(f),k=u.value,pe=J(A,f);k&&Object.assign(k,{futureIndex:pe});const Y=Object.assign({},f,{relatedContext:A,draggedContext:k});return b(Y,m)}function Te(){E(),Ct=null}const dt={onDragStart:R,onDragAdd:ue,onDragRemove:K,onDragUpdate:de,onDragMove:ke,onDragEnd:Te};return Nn(()=>{ve()}),t.list!==null&&t.modelValue!==null&&Wn.error("list props are mutually exclusive! Please set one."),{getTag:C,realList:c,visibleIndexes:s,noneFunctionalComponentMode:r,headerOffset:a,footerOffset:l,transitionMode:i,computeIndexes:E,updateOptions:D,getChildrenNodes:h,getUnderlyingVm:x,emitChanges:T,alterList:N,spliceList:M,updatePosition:$,getVmIndex:G,getComponent:ee,resetTransitionData:se,onDragStart:R,onDragAdd:ue,onDragRemove:K,onDragUpdate:de,updateProperty:Z,onDragMove:ke,onDragEnd:Te,mounted:ve,context:u,sortableInstance:p,getRelatedContextFromMoveEvent:ce,getTargetedComponent:te,computeFutureIndex:J}},render(){const t=this.getTag(),e=So(this.$attrs,this.componentData);if(typeof t=="string"){const o=this.$slots.default&&typeof this.$slots.default=="function"?this.$slots.default():null;return o?(this.transitionMode=tn(o),ct(t,e,o)):ct(t,e,[])}const n=this.$slots.default?{default:this.$slots.default}:{};if(this.$slots.default){const o=typeof this.$slots.default=="function"?this.$slots.default():null;this.transitionMode=tn(o||[])}return ct(t,e,n)}}),Io=["data-columns","data-editable"],Oo={key:0,class:"drag-handle absolute top-2 right-2 z-10 cursor-move"},Xo={class:"p-4 bg-white border border-slate-200 rounded-lg h-full"},Xn={__name:"DXDashboardGrid",props:{widgets:{type:Array,required:!0,default:()=>[]},columns:{type:Number,default:12},rowHeight:{type:Number,default:100},editable:{type:Boolean,default:!0},gap:{type:String,default:"md",validator:t=>["none","xs","sm","md","lg","xl"].includes(t)}},emits:["update:widgets","widget-move","widget-resize","widget-add","widget-remove"],setup(t,{emit:e}){const n=t,o=e,i=z([...n.widgets]),r=z(!1),a=Ie(()=>Ht("relative w-full")),l=Ie(()=>({display:"grid",gridTemplateColumns:`repeat(${n.columns}, 1fr)`,gridAutoRows:`${n.rowHeight}px`,gap:s.value})),s=Ie(()=>{const h={none:"0px",xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px"};return h[n.gap]||h.md}),u=Ie(()=>Ht("relative transition-all",{"cursor-move":n.editable&&r.value,"cursor-default":!n.editable}));function p(h){return{gridColumn:`span ${h.w||4}`,gridRow:`span ${h.h||2}`}}function c(h){r.value=!0}function g(h){r.value=!1;const E=i.value[h.newIndex];if(E){const x=D(h.newIndex);o("widget-move",E.id,x)}}function C(h){if(h.added){const E=h.added.element;o("widget-add",E)}else if(h.removed){const E=h.removed.element;o("widget-remove",E)}else if(h.moved){const E=h.moved.element,x=D(h.moved.newIndex);o("widget-move",E.id,x)}}function D(h){let E=0,x=0,T=0;for(let N=0;N<h;N++){const M=i.value[N],$=M.w||4,G=M.h||2;E+$>n.columns?(E=0,x+=T,T=G):(E+=$,T=Math.max(T,G))}return{x:E,y:x}}return Mt(()=>n.widgets,h=>{i.value=[...h]},{deep:!0}),Mt(i,h=>{o("update:widgets",h)},{deep:!0}),(h,E)=>(Bt(),Gt("div",{class:kt(a.value),style:Lt(l.value),"data-component":"DXDashboardGrid","data-columns":t.columns,"data-editable":t.editable},[Ye(Rt(To),{modelValue:i.value,"onUpdate:modelValue":E[0]||(E[0]=x=>i.value=x),animation:200,disabled:!t.editable,handle:".drag-handle",group:{name:"widgets",pull:!1,put:!1},"item-key":"id",onStart:c,onEnd:g,onChange:C},{item:pt(({element:x})=>[Vt("div",{class:kt(u.value),style:Lt(p(x))},[t.editable?(Bt(),Gt("div",Oo,[Ye(Ln,{icon:Rt(Hn),size:"sm",class:"text-slate-400 hover:text-slate-600"},null,8,["icon"])])):Gn("",!0),Bn(h.$slots,"widget",{widget:x},()=>[Vt("div",Xo,[Ye(kn,{level:"3",weight:"semibold",class:"mb-2"},{default:pt(()=>[Yt(Rn(x.title||`Виджет ${x.id}`),1)]),_:2},1024),Ye(Vn,{tag:"p",size:"sm",color:"muted"},{default:pt(()=>[...E[1]||(E[1]=[Yt("Используйте slot widget для кастомного контента",-1)])]),_:1})])],!0)],6)]),_:3},8,["modelValue","disabled"])],14,Io))}},Le=Yn(Xn,[["__scopeId","data-v-c9b37292"]]);Xn.__docgenInfo={exportName:"default",displayName:"DXDashboardGrid",description:"",tags:{},props:[{name:"widgets",description:`Массив виджетов (v-model)
Формат: [{ id, x, y, w, h, type, title?, config? }]`,type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"columns",description:"Количество колонок в сетке",tags:{default:[{description:"12",title:"default"}]},type:{name:"number"},defaultValue:{func:!1,value:"12"}},{name:"rowHeight",description:"Высота строки в пикселях",tags:{default:[{description:"100",title:"default"}]},type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"editable",description:"Редактируемый режим (drag-and-drop включен)",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"gap",description:"Отступ между виджетами: none | xs | sm | md | lg | xl",tags:{default:[{description:"'md'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"md"'},values:["none","xs","sm","md","lg","xl"]}],events:[{name:"update:widgets"},{name:"widget-move"},{name:"widget-resize"},{name:"widget-add"},{name:"widget-remove"}],slots:[{name:"widget",scoped:!0,bindings:[{name:"widget",title:"binding"}]}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXDashboardGrid/DXDashboardGrid.vue"]};const Ko={title:"Organisms/DXDashboardGrid",component:Le,tags:["autodocs","category:data-display"],parameters:{docs:{description:{component:`
# DXDashboardGrid

Сетка для дашборда с поддержкой drag-and-drop для перестановки виджетов.

## Назначение

DXDashboardGrid предоставляет настраиваемую сетку для создания дашбордов с виджетами.
Поддерживает перестановку виджетов через drag-and-drop и изменение их размеров.

## Архитектура

### Использует
- \`vue-draggable-next\` - для drag-and-drop функциональности
- \`DXStatCard\` - для карточек статистики (через slot)
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- Настраиваемые дашборды
- Панели мониторинга
- Аналитические панели

## Внутренняя логика

### Grid Layout
Использует CSS Grid для размещения виджетов. Каждый виджет занимает определенное
количество колонок (w) и строк (h).

### Drag-and-Drop
Виджеты можно перетаскивать за handle (иконка в правом верхнем углу).
При перетаскивании вычисляется новая позиция виджета.

### Размеры виджетов
Каждый виджет имеет свойства w (ширина в колонках) и h (высота в строках).

## Особенности

### Редактируемый режим
При \`editable={false}\` drag-and-drop отключается, виджеты становятся статичными.

### Кастомные виджеты
Используйте slot \`widget\` для кастомного отображения виджетов.

### События
Компонент эмитит события при перемещении, добавлении и удалении виджетов.
        `}}},argTypes:{columns:{control:"number",min:1,max:12,description:"Количество колонок в сетке.",table:{type:{summary:"number"},defaultValue:{summary:"12"},category:"Layout"}},rowHeight:{control:"number",min:50,max:200,step:10,description:"Высота строки в пикселях.",table:{type:{summary:"number"},defaultValue:{summary:"100"},category:"Layout"}},editable:{control:"boolean",description:"Редактируемый режим (drag-and-drop включен).",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Behavior"}}}},An=[{id:1,w:4,h:2,type:"stat",title:"Пользователи",config:{title:"Всего",value:1250,icon:St}},{id:2,w:4,h:2,type:"stat",title:"Продажи",config:{title:"Сегодня",value:45230,icon:mn}},{id:3,w:4,h:2,type:"stat",title:"Доход",config:{title:"За месяц",value:125e3,icon:vn}},{id:4,w:6,h:3,type:"chart",title:"График продаж"},{id:5,w:6,h:3,type:"table",title:"Последние заказы"}],ze={args:{columns:12,rowHeight:100,editable:!0},parameters:{docs:{description:{story:"Базовый дашборд с виджетами. Перетаскивайте виджеты за иконку в правом верхнем углу."}}},render:t=>({components:{DXDashboardGrid:Le,DXStatCard:gn,DXCard:lt},setup(){const e=z([...An]);return{args:t,widgets:e}},template:`
      <DXDashboardGrid v-bind="args" v-model:widgets="widgets">
        <template #widget="{ widget }">
          <DXCard v-if="widget.type === 'stat'" class="h-full">
            <DXStatCard
              :title="widget.config.title"
              :value="widget.config.value"
              :icon="widget.config.icon"
            />
          </DXCard>
          <DXCard v-else class="h-full p-4">
            <h3 class="font-semibold mb-2">{{ widget.title }}</h3>
            <p class="text-sm text-slate-600">Контент виджета {{ widget.type }}</p>
          </DXCard>
        </template>
      </DXDashboardGrid>
    `})},Ue={parameters:{docs:{description:{story:"Дашборд с карточками статистики. Использует DXStatCard для отображения метрик."}}},render:()=>({components:{DXDashboardGrid:Le,DXStatCard:gn,DXCard:lt},setup(){return{widgets:z([{id:1,w:3,h:2,type:"stat",config:{title:"Всего пользователей",value:1250,icon:St}},{id:2,w:3,h:2,type:"stat",config:{title:"Продажи",value:45230,valueFormat:"currency",currency:"USD",trend:{value:12.5,direction:"up"},icon:mn}},{id:3,w:3,h:2,type:"stat",config:{title:"Конверсия",value:24.5,valueFormat:"percentage",trend:{value:3.2,direction:"up"},icon:vn,color:"success"}},{id:4,w:3,h:2,type:"stat",config:{title:"Новые заказы",value:89,icon:St,color:"primary"}}])}},template:`
      <DXDashboardGrid :widgets="widgets" :columns="12" :row-height="120">
        <template #widget="{ widget }">
          <DXCard class="h-full">
            <DXStatCard
              :title="widget.config.title"
              :value="widget.config.value"
              :value-format="widget.config.valueFormat"
              :currency="widget.config.currency"
              :trend="widget.config.trend"
              :icon="widget.config.icon"
              :color="widget.config.color"
            />
          </DXCard>
        </template>
      </DXDashboardGrid>
    `})},qe={args:{columns:12,rowHeight:100,editable:!1},parameters:{docs:{description:{story:"Дашборд в режиме только для чтения. Drag-and-drop отключен."}}},render:t=>({components:{DXDashboardGrid:Le,DXCard:lt},setup(){const e=z([...An]);return{args:t,widgets:e}},template:`
      <DXDashboardGrid v-bind="args" v-model:widgets="widgets">
        <template #widget="{ widget }">
          <DXCard class="h-full p-4">
            <h3 class="font-semibold mb-2">{{ widget.title }}</h3>
            <p class="text-sm text-slate-600">Виджет {{ widget.type }}</p>
          </DXCard>
        </template>
      </DXDashboardGrid>
    `})},Ke={parameters:{docs:{description:{story:"Дашборд с различными размерами виджетов. Виджеты имеют разные значения w и h."}}},render:()=>({components:{DXDashboardGrid:Le,DXCard:lt},setup(){return{widgets:z([{id:1,w:6,h:2,title:"Большой виджет 1"},{id:2,w:3,h:2,title:"Маленький виджет 1"},{id:3,w:3,h:2,title:"Маленький виджет 2"},{id:4,w:4,h:4,title:"Высокий виджет"},{id:5,w:8,h:2,title:"Широкий виджет"}])}},template:`
      <DXDashboardGrid :widgets="widgets" :columns="12" :row-height="100">
        <template #widget="{ widget }">
          <DXCard class="h-full p-4">
            <h3 class="font-semibold mb-2">{{ widget.title }}</h3>
            <p class="text-sm text-slate-600">Размер: {{ widget.w }}x{{ widget.h }}</p>
          </DXCard>
        </template>
      </DXDashboardGrid>
    `})};var nn,on,rn;ze.parameters={...ze.parameters,docs:{...(nn=ze.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  args: {
    columns: 12,
    rowHeight: 100,
    editable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовый дашборд с виджетами. Перетаскивайте виджеты за иконку в правом верхнем углу.'
      }
    }
  },
  render: args => ({
    components: {
      DXDashboardGrid,
      DXStatCard,
      DXCard
    },
    setup() {
      const widgets = ref([...defaultWidgets]);
      return {
        args,
        widgets
      };
    },
    template: \`
      <DXDashboardGrid v-bind="args" v-model:widgets="widgets">
        <template #widget="{ widget }">
          <DXCard v-if="widget.type === 'stat'" class="h-full">
            <DXStatCard
              :title="widget.config.title"
              :value="widget.config.value"
              :icon="widget.config.icon"
            />
          </DXCard>
          <DXCard v-else class="h-full p-4">
            <h3 class="font-semibold mb-2">{{ widget.title }}</h3>
            <p class="text-sm text-slate-600">Контент виджета {{ widget.type }}</p>
          </DXCard>
        </template>
      </DXDashboardGrid>
    \`
  })
}`,...(rn=(on=ze.parameters)==null?void 0:on.docs)==null?void 0:rn.source}}};var an,ln,sn;Ue.parameters={...Ue.parameters,docs:{...(an=Ue.parameters)==null?void 0:an.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Дашборд с карточками статистики. Использует DXStatCard для отображения метрик.'
      }
    }
  },
  render: () => ({
    components: {
      DXDashboardGrid,
      DXStatCard,
      DXCard
    },
    setup() {
      const widgets = ref([{
        id: 1,
        w: 3,
        h: 2,
        type: 'stat',
        config: {
          title: 'Всего пользователей',
          value: 1250,
          icon: UserGroupIcon
        }
      }, {
        id: 2,
        w: 3,
        h: 2,
        type: 'stat',
        config: {
          title: 'Продажи',
          value: 45230,
          valueFormat: 'currency',
          currency: 'USD',
          trend: {
            value: 12.5,
            direction: 'up'
          },
          icon: ChartBarIcon
        }
      }, {
        id: 3,
        w: 3,
        h: 2,
        type: 'stat',
        config: {
          title: 'Конверсия',
          value: 24.5,
          valueFormat: 'percentage',
          trend: {
            value: 3.2,
            direction: 'up'
          },
          icon: CurrencyDollarIcon,
          color: 'success'
        }
      }, {
        id: 4,
        w: 3,
        h: 2,
        type: 'stat',
        config: {
          title: 'Новые заказы',
          value: 89,
          icon: UserGroupIcon,
          color: 'primary'
        }
      }]);
      return {
        widgets
      };
    },
    template: \`
      <DXDashboardGrid :widgets="widgets" :columns="12" :row-height="120">
        <template #widget="{ widget }">
          <DXCard class="h-full">
            <DXStatCard
              :title="widget.config.title"
              :value="widget.config.value"
              :value-format="widget.config.valueFormat"
              :currency="widget.config.currency"
              :trend="widget.config.trend"
              :icon="widget.config.icon"
              :color="widget.config.color"
            />
          </DXCard>
        </template>
      </DXDashboardGrid>
    \`
  })
}`,...(sn=(ln=Ue.parameters)==null?void 0:ln.docs)==null?void 0:sn.source}}};var un,dn,cn;qe.parameters={...qe.parameters,docs:{...(un=qe.parameters)==null?void 0:un.docs,source:{originalSource:`{
  args: {
    columns: 12,
    rowHeight: 100,
    editable: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Дашборд в режиме только для чтения. Drag-and-drop отключен.'
      }
    }
  },
  render: args => ({
    components: {
      DXDashboardGrid,
      DXCard
    },
    setup() {
      const widgets = ref([...defaultWidgets]);
      return {
        args,
        widgets
      };
    },
    template: \`
      <DXDashboardGrid v-bind="args" v-model:widgets="widgets">
        <template #widget="{ widget }">
          <DXCard class="h-full p-4">
            <h3 class="font-semibold mb-2">{{ widget.title }}</h3>
            <p class="text-sm text-slate-600">Виджет {{ widget.type }}</p>
          </DXCard>
        </template>
      </DXDashboardGrid>
    \`
  })
}`,...(cn=(dn=qe.parameters)==null?void 0:dn.docs)==null?void 0:cn.source}}};var fn,pn,hn;Ke.parameters={...Ke.parameters,docs:{...(fn=Ke.parameters)==null?void 0:fn.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Дашборд с различными размерами виджетов. Виджеты имеют разные значения w и h.'
      }
    }
  },
  render: () => ({
    components: {
      DXDashboardGrid,
      DXCard
    },
    setup() {
      const widgets = ref([{
        id: 1,
        w: 6,
        h: 2,
        title: 'Большой виджет 1'
      }, {
        id: 2,
        w: 3,
        h: 2,
        title: 'Маленький виджет 1'
      }, {
        id: 3,
        w: 3,
        h: 2,
        title: 'Маленький виджет 2'
      }, {
        id: 4,
        w: 4,
        h: 4,
        title: 'Высокий виджет'
      }, {
        id: 5,
        w: 8,
        h: 2,
        title: 'Широкий виджет'
      }]);
      return {
        widgets
      };
    },
    template: \`
      <DXDashboardGrid :widgets="widgets" :columns="12" :row-height="100">
        <template #widget="{ widget }">
          <DXCard class="h-full p-4">
            <h3 class="font-semibold mb-2">{{ widget.title }}</h3>
            <p class="text-sm text-slate-600">Размер: {{ widget.w }}x{{ widget.h }}</p>
          </DXCard>
        </template>
      </DXDashboardGrid>
    \`
  })
}`,...(hn=(pn=Ke.parameters)==null?void 0:pn.docs)==null?void 0:hn.source}}};const Zo=["Default","WithStatCards","ReadOnly","CustomSizes"];export{Ke as CustomSizes,ze as Default,qe as ReadOnly,Ue as WithStatCards,Zo as __namedExportsOrder,Ko as default};
