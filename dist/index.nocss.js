!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-js-modal"]=e():t["vue-js-modal"]=e()}(window,function(){return n={},o.m=i=[function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,M,e){"use strict";(function(t){var n=function(){if("undefined"!=typeof Map)return Map;function n(t,i){var n=-1;return t.some(function(t,e){return t[0]===i&&(n=e,!0)}),n}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var e=n(this.__entries__,t),i=this.__entries__[e];return i&&i[1]},t.prototype.set=function(t,e){var i=n(this.__entries__,t);~i?this.__entries__[i][1]=e:this.__entries__.push([t,e])},t.prototype.delete=function(t){var e=this.__entries__,i=n(e,t);~i&&e.splice(i,1)},t.prototype.has=function(t){return!!~n(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,n=this.__entries__;i<n.length;i++){var o=n[i];t.call(e,o[1],o[0])}},t;function t(){this.__entries__=[]}}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,e=void 0!==t&&t.Math===Math?t:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),l="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(e):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},u=2;var o=["top","right","bottom","left","width","height","size","weight"],r="undefined"!=typeof MutationObserver,s=(a.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},a.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},a.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},a.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),0<t.length},a.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),r?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},a.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},a.prototype.onTransitionEnd_=function(t){var e=t.propertyName,i=void 0===e?"":e;o.some(function(t){return!!~i.indexOf(t)})&&this.refresh()},a.getInstance=function(){return this.instance_||(this.instance_=new a),this.instance_},a.instance_=null,a);function a(){function t(){r&&(r=!1,n()),s&&i()}function e(){l(t)}function i(){var t=Date.now();if(r){if(t-a<u)return;s=!0}else s=!(r=!0),setTimeout(e,o);a=t}var n,o,r,s,a;this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=(n=this.refresh.bind(this),s=r=!(o=20),a=0,i)}var c=function(t,e){for(var i=0,n=Object.keys(e);i<n.length;i++){var o=n[i];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},h=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||e},f=y(0,0,0,0);function v(t){return parseFloat(t)||0}function m(i){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];return t.reduce(function(t,e){return t+v(i["border-"+e+"-width"])},0)}function d(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return f;var n,o=h(t).getComputedStyle(t),r=function(t){for(var e={},i=0,n=["top","right","bottom","left"];i<n.length;i++){var o=n[i],r=t["padding-"+o];e[o]=v(r)}return e}(o),s=r.left+r.right,a=r.top+r.bottom,l=v(o.width),u=v(o.height);if("border-box"===o.boxSizing&&(Math.round(l+s)!==e&&(l-=m(o,"left","right")+s),Math.round(u+a)!==i&&(u-=m(o,"top","bottom")+a)),(n=t)!==h(n).document.documentElement){var c=Math.round(l+s)-e,d=Math.round(u+a)-i;1!==Math.abs(c)&&(l-=c),1!==Math.abs(d)&&(u-=d)}return y(r.left,r.top,l,u)}var p="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof h(t).SVGGraphicsElement}:function(t){return t instanceof h(t).SVGElement&&"function"==typeof t.getBBox};function b(t){return i?p(t)?y(0,0,(e=t.getBBox()).width,e.height):d(t):f;var e}function y(t,e,i,n){return{x:t,y:e,width:i,height:n}}var g=(w.prototype.isActive=function(){var t=b(this.target);return(this.contentRect_=t).width!==this.broadcastWidth||t.height!==this.broadcastHeight},w.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},w);function w(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=t}var _=function(t,e){var i,n,o,r,s,a,l,u=(n=(i=e).x,o=i.y,r=i.width,s=i.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(a.prototype),c(l,{x:n,y:o,width:r,height:s,top:o,right:n+r,bottom:s+o,left:n}),l);c(this,{target:t,contentRect:u})},E=(T.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof h(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new g(t)),this.controller_.addObserver(this),this.controller_.refresh())}},T.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof h(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},T.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},T.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},T.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new _(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},T.prototype.clearActive=function(){this.activeObservations_.splice(0)},T.prototype.hasActive=function(){return 0<this.activeObservations_.length},T);function T(t,e,i){if(this.activeObservations_=[],this.observations_=new n,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}var O=new("undefined"!=typeof WeakMap?WeakMap:n),S=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=s.getInstance(),n=new E(e,i,this);O.set(this,n)};["observe","unobserve","disconnect"].forEach(function(e){S.prototype[e]=function(){var t;return(t=O.get(this))[e].apply(t,arguments)}});var x=void 0!==e.ResizeObserver?e.ResizeObserver:S;M.a=x}).call(this,e(5))},function(t,e,i){"use strict";var n=i(0);i.n(n).a},function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){"use strict";var n=i(1);i.n(n).a},function(t,e,i){"use strict";var n=i(2);i.n(n).a},function(t,e,i){"use strict";i.r(e),i.d(e,"Modal",function(){return N}),i.d(e,"Dialog",function(){return B}),i.d(e,"version",function(){return J});function n(){var e=this,t=e.$createElement,i=e._self._c||t;return e.visible?i("div",{class:e.containerClass},[i("transition",{attrs:{name:e.guaranteedOverlayTransition},on:{"before-enter":e.beforeOverlayTransitionEnter,"after-enter":e.afterOverlayTransitionEnter,"before-leave":e.beforeOverlayTransitionLeave,"after-leave":e.afterOverlayTransitionLeave}},[e.visibility.overlay?i("div",{staticClass:"vm--overlay",attrs:{"data-modal":e.name,"aria-expanded":e.visibility.overlay.toString()},on:{click:function(t){return t.target!==t.currentTarget?null:(t.stopPropagation(),e.onOverlayClick(t))}}},[i("div",{staticClass:"vm--top-right-slot"},[e._t("top-right")],2)]):e._e()]),e._v(" "),i("transition",{attrs:{name:e.guaranteedModalTransition},on:{"before-enter":e.beforeModalTransitionEnter,"after-enter":e.afterModalTransitionEnter,"before-leave":e.beforeModalTransitionLeave,"after-leave":e.afterModalTransitionLeave}},[e.visibility.modal?i("div",{ref:"modal",class:e.modalClass,style:e.modalStyle,attrs:{"aria-expanded":e.visibility.modal.toString(),role:"dialog","aria-modal":"true"}},[e._t("default"),e._v(" "),e.resizable&&!e.isAutoHeight?i("resizer",{attrs:{"min-width":e.minWidth,"min-height":e.minHeight,"max-width":e.maxWidth,"max-height":e.maxHeight,"viewport-height":e.viewportHeight,"viewport-width":e.viewportWidth,"resize-indicator":e.resizeIndicator,"resize-edges":e.resizeEdges},on:{resize:e.onModalResize}}):e._e()],2):e._e()])],1):e._e()}function o(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[this.resizeEdges.includes("t")?i("div",{staticClass:"vue-modal-top"}):t._e(),t._v(" "),this.resizeEdges.includes("b")?i("div",{staticClass:"vue-modal-bottom"}):t._e(),t._v(" "),this.resizeEdges.includes("l")?i("div",{staticClass:"vue-modal-left"}):t._e(),t._v(" "),this.resizeEdges.includes("r")?i("div",{staticClass:"vue-modal-right"}):t._e(),t._v(" "),this.resizeEdges.includes("tr")?i("div",{staticClass:"vue-modal-topRight"}):t._e(),t._v(" "),this.resizeEdges.includes("tl")?i("div",{staticClass:"vue-modal-topLeft"}):t._e(),t._v(" "),this.resizeEdges.includes("br")?i("div",{class:t.className,attrs:{id:t.getID}}):t._e(),t._v(" "),this.resizeEdges.includes("bl")?i("div",{staticClass:"vue-modal-bottomLeft"}):t._e()])}o._withStripped=n._withStripped=!0;function h(t,e,i){return i<t?t:e<i?e:i}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],n=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){o=!0,r=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw r}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(){var t=window.innerWidth,e=document.documentElement.clientWidth;return t&&e?Math.min(t,e):e||t}function a(t){return t.split(";").map(function(t){return t.trim()}).filter(Boolean).map(function(t){return t.split(":")}).reduce(function(t,e){var i=s(e,2);return function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(t){r(e,t,i[t])})}return e}({},t,r({},i[0],i[1]))},{})}function f(t){return t.touches&&0<t.touches.length?t.touches[0]:t}var v=["INPUT","TEXTAREA","SELECT"],c=function(t){var e=0<arguments.length&&void 0!==t?t:0;return function(){return(e++).toString()}}(),l={name:"VueJsModalResizer",props:{minHeight:{type:Number,default:0},minWidth:{type:Number,default:0},maxWidth:{type:Number,default:Number.MAX_SAFE_INTEGER},maxHeight:{type:Number,default:Number.MAX_SAFE_INTEGER},viewportWidth:{type:Number,required:!0},viewportHeight:{type:Number,required:!0},resizeIndicator:{type:Boolean,default:!0},resizeEdges:{type:Array,required:!0}},data:function(){return{clicked:!1,targetClass:"",size:{},initialX:0,initialY:0}},mounted:function(){this.$el.addEventListener("mousedown",this.start,!1)},computed:{className:function(){return["vue-modal-bottomRight",{clicked:this.clicked}]},getID:function(){return this.resizeIndicator?"vue-modal-triangle":""}},methods:{start:function(t){this.targetClass=t.target.className,this.clicked=!0,this.initialX=t.clientX,this.initialY=t.clientY,window.addEventListener("mousemove",this.mousemove,!1),window.addEventListener("mouseup",this.stop,!1),t.stopPropagation(),t.preventDefault()},stop:function(){this.clicked=!1,this.clicked=!1,this.targetClass="",this.initialX=0,this.initialY=0,window.removeEventListener("mousemove",this.mousemove,!1),window.removeEventListener("mouseup",this.stop,!1),this.$emit("resize-stop",{element:this.$el.parentElement,size:this.size})},mousemove:function(t){this.resize(t)},resize:function(t){var e=this.$el.parentElement,i=t.clientX,n=t.clientY,o=parseInt(e.style.width.replace("px","")),r=parseInt(e.style.height.replace("px",""));if(!(t.clientX>this.viewportWidth||t.clientX<0)&&!(t.clientY>this.viewportHeight||t.clientY<0)&&e){switch(this.targetClass){case"vue-modal-right":i-=e.offsetLeft,n=r;break;case"vue-modal-left":n=r,i=o+(this.initialX-t.clientX);break;case"vue-modal-top":i=o,n=r+(this.initialY-t.clientY);break;case"vue-modal-bottom":i=o,n-=e.offsetTop;break;case"vue-modal-bottomRight":i-=e.offsetLeft,n-=e.offsetTop;break;case"vue-modal-topRight":i-=e.offsetLeft,n=r+(this.initialY-t.clientY);break;case"vue-modal-bottomLeft":i=o+(this.initialX-t.clientX),n-=e.offsetTop;break;case"vue-modal-topLeft":i=o+(this.initialX-t.clientX),n=r+(this.initialY-t.clientY);break;default:console.error("Incorrrect/no resize direction.")}var s=Math.min(u(),this.maxWidth),a=Math.min(window.innerHeight,this.maxHeight);i=h(this.minWidth,s,i),n=h(this.minHeight,a,n),this.initialX=t.clientX,this.initialY=t.clientY,this.size={width:i,height:n};var l={width:i-o,height:n-r};e.style.width=i+"px",e.style.height=n+"px",this.$emit("resize",{element:e,size:this.size,direction:this.targetClass,dimGrowth:l})}}}};i(4);function d(t,e,i,n,o,r,s,a){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=i,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=l):o&&(l=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}var m=d(l,o,[],!1,null,null,null);m.options.__file="src/components/Resizer.vue";var p=m.exports;function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t){switch(b(t)){case"number":return{type:"px",value:t};case"string":return function(e){if("auto"===e)return{type:e,value:0};var t=_.find(function(t){return t.regexp.test(e)});return t?{type:t.name,value:parseFloat(e)}:{type:"",value:e}}(t);default:return{type:"",value:t}}}function g(t){if("string"!=typeof t)return 0<=t;var e=y(t);return("%"===e.type||"px"===e.type)&&0<e.value}var w="[-+]?[0-9]*.?[0-9]+",_=[{name:"px",regexp:new RegExp("^".concat(w,"px$"))},{name:"%",regexp:new RegExp("^".concat(w,"%$"))},{name:"px",regexp:new RegExp("^".concat(w,"$"))}],E=i(3),T="undefined"!=typeof window&&window.ResizeObserver?ResizeObserver:E.a;function O(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function S(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function x(t){return e='button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])',S(t.querySelectorAll(e)||[]);var e}function M(t){return t==document.activeElement}var L=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var e,i,n;return e=t,(i=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(t){var e;if("Tab"===(e=t).key||9===e.keyCode)return t.shiftKey&&M(this.firstElement())?(this.lastElement().focus(),void t.preventDefault()):!document.activeElement||M(this.lastElement())?(this.firstElement().focus(),void t.preventDefault()):void 0}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(t){if(t){this.root=t,this.elements=x(this.root);var e=this.firstElement();e&&e.focus(),this.root.addEventListener("keydown",this.onKeyDown)}}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&O(e.prototype,i),n&&O(e,n),t}();function z(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function k(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],n=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){o=!0,r=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw r}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var $="vm-transition--default",C="enter",R="entering",A="leave",H="leavng",j={name:"VueJsModal",props:{name:{required:!0,type:String},resizable:{type:Boolean,default:!1},resizeEdges:{default:function(){return["r","br","b","bl","l","tl","t","tr"]},validator:function(e){return["r","br","b","bl","l","tl","t","tr"].filter(function(t){return-1!==e.indexOf(t)}).length===e.length},type:Array},centerResize:{type:Boolean,default:!0},resizeIndicator:{type:Boolean,default:!0},adaptive:{type:Boolean,default:!1},draggable:{type:[Boolean,String],default:!1},scrollable:{type:Boolean,default:!1},focusTrap:{type:Boolean,default:!1},reset:{type:Boolean,default:!1},overlayTransition:{type:String,default:"vm-transition--overlay"},transition:{type:String,default:"vm-transition--modal"},clickToClose:{type:Boolean,default:!0},classes:{type:[String,Array],default:function(){return[]}},styles:{type:[String,Array,Object]},minWidth:{type:Number,default:0,validator:function(t){return 0<=t}},minHeight:{type:Number,default:0,validator:function(t){return 0<=t}},maxWidth:{type:Number,default:Number.MAX_SAFE_INTEGER},maxHeight:{type:Number,default:Number.MAX_SAFE_INTEGER},width:{type:[Number,String],default:600,validator:function(t){return"auto"===t||g(t)}},height:{type:[Number,String],default:300,validator:function(t){return"auto"===t||g(t)}},shiftX:{type:Number,default:.5,validator:function(t){return 0<=t&&t<=1}},shiftY:{type:Number,default:.5,validator:function(t){return 0<=t&&t<=1}}},components:{Resizer:p},data:function(){return{visible:!1,visibility:{modal:!1,overlay:!1},overlayTransitionState:null,modalTransitionState:null,shiftLeft:0,shiftTop:0,modal:{width:0,widthType:"px",height:0,heightType:"px",renderedHeight:0},viewportHeight:0,viewportWidth:0}},created:function(){this.setInitialSize()},beforeMount:function(){this.$modal.subscription.$on("toggle",this.onToggle),window.addEventListener("resize",this.onWindowResize),window.addEventListener("orientationchange",this.onWindowResize),this.onWindowResize(),this.scrollable&&!this.isAutoHeight&&console.warn('Modal "'.concat(this.name,'" has scrollable flag set to true ')+'but height is not "auto" ('.concat(this.height,")")),this.clickToClose&&window.addEventListener("keyup",this.onEscapeKeyUp)},mounted:function(){var i=this;this.resizeObserver=new T(function(t){if(0<t.length){var e=k(t,1)[0];i.modal.renderedHeight=e.contentRect.height}}),this.$focusTrap=new L},beforeDestroy:function(){this.$modal.subscription.$off("toggle",this.onToggle),window.removeEventListener("resize",this.onWindowResize),window.removeEventListener("orientationchange",this.onWindowResize),this.clickToClose&&window.removeEventListener("keyup",this.onEscapeKeyUp),document.body.classList.remove("vm--block-scroll")},computed:{guaranteedOverlayTransition:function(){return this.overlayTransition||$},guaranteedModalTransition:function(){return this.transition||$},isAutoHeight:function(){return"auto"===this.modal.heightType},position:function(){var t=this.viewportHeight,e=this.viewportWidth,i=this.shiftLeft,n=this.shiftTop,o=this.shiftX,r=this.shiftY,s=this.trueModalWidth,a=this.trueModalHeight,l=e-s,u=Math.max(t-a,0),c=n+r*u;return{left:parseInt(h(0,l,i+o*l)),top:!a&&this.isAutoHeight?void 0:parseInt(h(0,u,c))}},trueModalWidth:function(){var t=this.viewportWidth,e=this.modal,i=this.adaptive,n=this.minWidth,o=this.maxWidth,r="%"===e.widthType?t/100*e.width:e.width;if(i){var s=Math.max(n,Math.min(t,o));return h(n,s,r)}return r},trueModalHeight:function(){var t=this.viewportHeight,e=this.modal,i=this.isAutoHeight,n=this.adaptive,o=this.minHeight,r=this.maxHeight,s="%"===e.heightType?t/100*e.height:e.height;if(i)return this.modal.renderedHeight;if(n){var a=Math.max(o,Math.min(t,r));return h(o,a,s)}return s},autoHeight:function(){return this.adaptive&&this.modal.renderedHeight>=this.viewportHeight?Math.max(this.minHeight,this.viewportHeight)+"px":"auto"},containerClass:function(){return["vm--container",this.scrollable&&this.isAutoHeight&&"scrollable"]},modalClass:function(){return["vm--modal",this.classes]},stylesProp:function(){return"string"==typeof this.styles?a(this.styles):this.styles},modalStyle:function(){return[this.stylesProp,{top:this.position.top+"px",left:this.position.left+"px",width:this.trueModalWidth+"px",height:this.isAutoHeight?this.autoHeight:this.trueModalHeight+"px"}]},isComponentReadyToBeDestroyed:function(){return this.overlayTransitionState===A&&this.modalTransitionState===A}},watch:{isComponentReadyToBeDestroyed:function(t){t&&(this.visible=!1)}},methods:{startTransitionEnter:function(){this.visibility.overlay=!0,this.visibility.modal=!0},startTransitionLeave:function(){this.visibility.overlay=!1,this.visibility.modal=!1},beforeOverlayTransitionEnter:function(){this.overlayTransitionState=R},afterOverlayTransitionEnter:function(){this.overlayTransitionState=C},beforeOverlayTransitionLeave:function(){this.overlayTransitionState=H},afterOverlayTransitionLeave:function(){this.overlayTransitionState=A},beforeModalTransitionEnter:function(){var t=this;this.modalTransitionState=R,this.$nextTick(function(){t.resizeObserver.observe(t.$refs.modal)})},afterModalTransitionEnter:function(){this.modalTransitionState=C,this.draggable&&this.addDraggableListeners(),this.focusTrap&&this.$focusTrap.enable(this.$refs.modal);var t=this.createModalEvent({state:"opened"});this.$emit("opened",t)},beforeModalTransitionLeave:function(){this.modalTransitionState=H,this.resizeObserver.unobserve(this.$refs.modal),this.$focusTrap.enabled()&&this.$focusTrap.disable()},afterModalTransitionLeave:function(){this.modalTransitionState=A;var t=this.createModalEvent({state:"closed"});this.$emit("closed",t)},onToggle:function(t,e,i){if(this.name===t){var n=void 0===e?!this.visible:e;this.toggle(n,i)}},setInitialSize:function(){var t=y(this.width),e=y(this.height);this.modal.width=t.value,this.modal.widthType=t.type,this.modal.height=e.value,this.modal.heightType=e.type},onEscapeKeyUp:function(t){27===t.which&&this.visible&&this.$modal.hide(this.name)},onWindowResize:function(){this.viewportWidth=u(),this.viewportHeight=window.innerHeight,this.ensureShiftInWindowBounds()},createModalEvent:function(t){var e=0<arguments.length&&void 0!==t?t:{};return function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(t){z(e,t,i[t])})}return e}({name:this.name,ref:this.$refs.modal||null},e)},onModalResize:function(t){this.modal.widthType="px",this.modal.width=t.size.width,this.modal.heightType="px",this.modal.height=t.size.height,this.centerResize||(this.shiftLeft=this.getResizedShiftLeft(t),this.shiftTop=this.getResizedShiftTop(t));var e=this.modal.size;this.$emit("resize",this.createModalEvent({size:e}))},getResizedShiftLeft:function(t){this.viewportHeight,this.viewportWidth,this.trueModalWidth,this.trueModalHeight;var e=this.shiftLeft;switch(t.direction){case"vue-modal-topRight":case"vue-modal-bottomRight":case"vue-modal-right":e+=.5*t.dimGrowth.width;break;case"vue-modal-bottomLeft":case"vue-modal-topLeft":case"vue-modal-left":e-=.5*t.dimGrowth.width;break;case"vue-modal-top":case"vue-modal-bottom":break;default:console.error("Could not Find Resize Direction In ShiftLeft")}return e},getResizedShiftTop:function(t){this.viewportHeight,this.viewportWidth,this.trueModalWidth,this.trueModalHeight;var e=this.shiftTop;switch(t.direction){case"vue-modal-bottom":case"vue-modal-bottomRight":case"vue-modal-bottomLeft":e+=.5*t.dimGrowth.height;break;case"vue-modal-top":case"vue-modal-topRight":case"vue-modal-topLeft":e-=.5*t.dimGrowth.height;break;case"vue-modal-left":case"vue-modal-right":break;default:console.error("Could not Find Resize Direction In ShiftTop")}return e},open:function(t){var e=this;this.reset&&(this.setInitialSize(),this.shiftLeft=0,this.shiftTop=0),this.scrollable&&document.body.classList.add("vm--block-scroll");var i=!1,n=this.createModalEvent({cancel:function(){i=!0},state:"before-open",params:t});this.$emit("before-open",n),i?this.scrollable&&document.body.classList.remove("vm--block-scroll"):("undefined"!=typeof document&&document.activeElement&&"BODY"!==document.activeElement.tagName&&document.activeElement.blur&&document.activeElement.blur(),this.visible=!0,this.$nextTick(function(){e.startTransitionEnter()}))},close:function(t){this.scrollable&&document.body.classList.remove("vm--block-scroll");var e=!1,i=this.createModalEvent({cancel:function(){e=!0},state:"before-close",params:t});this.$emit("before-close",i),e||this.startTransitionLeave()},toggle:function(t,e){this.visible!==t&&(t?this.open(e):this.close(e))},getDraggableElement:function(){return!0===this.draggable?this.$refs.modal:"string"==typeof this.draggable?this.$refs.modal.querySelector(this.draggable):null},onOverlayClick:function(){this.clickToClose&&this.toggle(!1)},addDraggableListeners:function(){var s=this,t=this.getDraggableElement();if(t){var a=0,l=0,u=0,c=0,e=function(t){var e=t.target;if(!(i=e)||-1===v.indexOf(i.nodeName)){var i,n=f(t),o=n.clientX,r=n.clientY;document.addEventListener("mousemove",d),document.addEventListener("touchmove",d),document.addEventListener("mouseup",h),document.addEventListener("touchend",h),a=o,l=r,u=s.shiftLeft,c=s.shiftTop}},d=function(t){var e=f(t),i=e.clientX,n=e.clientY;s.shiftLeft=u+i-a,s.shiftTop=c+n-l,t.preventDefault()},h=function t(e){s.ensureShiftInWindowBounds(),document.removeEventListener("mousemove",d),document.removeEventListener("touchmove",d),document.removeEventListener("mouseup",t),document.removeEventListener("touchend",t),e.preventDefault()};t.addEventListener("mousedown",e),t.addEventListener("touchstart",e)}},ensureShiftInWindowBounds:function(){var t=this.viewportHeight,e=this.viewportWidth,i=this.shiftLeft,n=this.shiftTop,o=this.shiftX,r=this.shiftY,s=this.trueModalWidth,a=this.trueModalHeight,l=e-s,u=Math.max(t-a,0),c=i+o*l,d=n+r*u;this.shiftLeft-=c-h(0,l,c),this.shiftTop-=d-h(0,u,d)}}},W=(i(6),d(j,n,[],!1,null,null,null));W.options.__file="src/components/Modal.vue";function D(){var i=this,t=i.$createElement,n=i._self._c||t;return n(i.$modal.context.componentName,{tag:"component",attrs:{name:"dialog",height:"auto",classes:["vue-dialog",this.params.class],width:i.width,"shift-y":.3,adaptive:!0,"focus-trap":!0,clickToClose:i.clickToClose,transition:i.transition},on:{"before-open":i.beforeOpened,"before-close":i.beforeClosed,opened:function(t){return i.$emit("opened",t)},closed:function(t){return i.$emit("closed",t)}}},[n("div",{staticClass:"vue-dialog-content"},[i.params.title?n("div",{staticClass:"vue-dialog-content-title",domProps:{innerHTML:i._s(i.params.title||"")}}):i._e(),i._v(" "),i.params.component?n(i.params.component,i._b({tag:"component"},"component",i.params.props,!1)):n("div",{domProps:{innerHTML:i._s(i.params.text||"")}})],1),i._v(" "),i.buttons?n("div",{staticClass:"vue-dialog-buttons"},i._l(i.buttons,function(t,e){return n("button",{key:e,class:t.class||"vue-dialog-button",style:i.buttonStyle,attrs:{type:"button",tabindex:"0"},domProps:{innerHTML:i._s(t.title)},on:{click:function(t){return t.stopPropagation(),i.click(e,t)}}},[i._v(i._s(t.title))])}),0):n("div",{staticClass:"vue-dialog-buttons-none"})])}var N=W.exports;D._withStripped=!0;var P={name:"VueJsDialog",props:{width:{type:[Number,String],default:400},clickToClose:{type:Boolean,default:!0},transition:{type:String}},data:function(){return{params:{}}},computed:{buttons:function(){return this.params.buttons||[]},buttonStyle:function(){return{flex:"1 1 ".concat(100/this.buttons.length,"%")}}},methods:{beforeOpened:function(t){this.params=t.params||{},this.$emit("before-opened",t)},beforeClosed:function(t){this.params={},this.$emit("before-closed",t)},click:function(t,e,i){var n=2<arguments.length&&void 0!==i?i:"click",o=this.buttons[t],r=null==o?void 0:o.handler;"function"==typeof r&&r(t,e,{source:n})}}},I=(i(7),d(P,D,[],!1,null,null,null));I.options.__file="src/components/Dialog.vue";function X(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{attrs:{id:"modals-container"}},i._l(i.modals,function(e){return n("modal",i._g(i._b({key:e.id,on:{closed:function(t){return i.remove(e.id)}}},"modal",e.modalAttrs,!1),e.modalListeners),[n(e.component,i._g(i._b({tag:"component",on:{close:function(t){return i.$modal.hide(e.modalAttrs.name,t)}}},"component",e.componentAttrs,!1),i.$listeners))],1)}),1)}var B=I.exports;function Y(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}X._withStripped=!0;var G=d({data:function(){return{modals:[]}},created:function(){this.$root.__modalContainer=this},mounted:function(){var t=this;this.$modal.subscription.$on("hide-all",function(){t.modals=[]})},methods:{add:function(t,e,i,n){var o=this,r=1<arguments.length&&void 0!==e?e:{},s=2<arguments.length&&void 0!==i?i:{},a=3<arguments.length&&void 0!==n?n:{},l=c(),u=s.name||"dynamic_modal_"+l;this.modals.push({id:l,modalAttrs:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(t){Y(e,t,i[t])})}return e}({},s,{name:u}),modalListeners:a,component:t,componentAttrs:r}),this.$nextTick(function(){o.$modal.show(u)})},remove:function(e){var t=this.modals.findIndex(function(t){return t.id===e});-1!==t&&this.modals.splice(t,1)}}},X,[],!1,null,null,null);G.options.__file="src/components/ModalsContainer.vue";var F=G.exports;function q(t){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function V(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var K=function(n,t){function o(t,e,i,n){var o,r=2<arguments.length&&void 0!==i?i:{},s=3<arguments.length?n:void 0,a=null===(o=c.root)||void 0===o?void 0:o.__modalContainer,l=u.dynamicDefaults||{};null!=a&&a.add(t,e,function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(t){V(e,t,i[t])})}return e}({},l,r),s)}var u=1<arguments.length&&void 0!==t?t:{},r=new n,c={root:null,componentName:u.componentName||"Modal"};return{context:c,subscription:r,show:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var n=e[0];switch(q(n)){case"string":(function(t,e){r.$emit("toggle",t,!0,e)}).apply(void 0,e);break;case"object":case"function":o.apply(void 0,e);break;default:console.warn("[vue-js-modal] $modal() received an unsupported argument as a first argument.",n)}},hide:function(t,e){r.$emit("toggle",t,!1,e)},hideAll:function(){r.$emit("hide-all")},toggle:function(t,e){r.$emit("toggle",t,void 0,e)},setDynamicModalContainer:function(t){c.root=t;var e,i=(e=document.createElement("div"),document.body.appendChild(e),e);new n({parent:t,render:function(t){return t(F)}}).$mount(i)}}},U={install:function(e,t){var i=1<arguments.length&&void 0!==t?t:{};if(!e.prototype.$modal){var n=new K(e,i);if(Object.defineProperty(e.prototype,"$modal",{get:function(){if(this instanceof e){var t=this.$root;n.context.root||n.setDynamicModalContainer(t)}return n}}),e.component(n.context.componentName,N),i.dialog){var o=i.dialogComponentName||"VDialog";e.component(o,B)}}}},J="__VERSION__";e.default=U}],o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/",o(o.s=8);function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var i,n});
//# sourceMappingURL=index.nocss.js.map