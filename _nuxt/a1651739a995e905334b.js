/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{10:function(t,r){t.exports=function(t){var r=[];return r.toString=function(){return this.map(function(r){var n=function(t,r){var n=t[1]||"",i=t[3];if(!i)return n;if(r&&"function"==typeof btoa){var e=(u=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(u))))+" */"),a=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(a).concat([e]).join("\n")}var u;return[n].join("\n")}(r,t);return r[2]?"@media "+r[2]+"{"+n+"}":n}).join("")},r.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},e=0;e<this.length;e++){var a=this[e][0];"number"==typeof a&&(i[a]=!0)}for(e=0;e<t.length;e++){var u=t[e];"number"==typeof u[0]&&i[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),r.push(u))}},r}},11:function(t,r,n){"use strict";function i(t,r){for(var n=[],i={},e=0;e<r.length;e++){var a=r[e],u=a[0],f={id:t+":"+e,css:a[1],media:a[2],sourceMap:a[3]};i[u]?i[u].parts.push(f):n.push(i[u]={id:u,parts:[f]})}return n}n.r(r),n.d(r,"default",function(){return p});var e="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!e)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},u=e&&(document.head||document.getElementsByTagName("head")[0]),f=null,c=0,h=!1,o=function(){},s=null,l="data-vue-ssr-id",_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,r,n,e){h=n,s=e||{};var u=i(t,r);return v(u),function(r){for(var n=[],e=0;e<u.length;e++){var f=u[e];(c=a[f.id]).refs--,n.push(c)}r?v(u=i(t,r)):u=[];for(e=0;e<n.length;e++){var c;if(0===(c=n[e]).refs){for(var h=0;h<c.parts.length;h++)c.parts[h]();delete a[c.id]}}}}function v(t){for(var r=0;r<t.length;r++){var n=t[r],i=a[n.id];if(i){i.refs++;for(var e=0;e<i.parts.length;e++)i.parts[e](n.parts[e]);for(;e<n.parts.length;e++)i.parts.push(y(n.parts[e]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var u=[];for(e=0;e<n.parts.length;e++)u.push(y(n.parts[e]));a[n.id]={id:n.id,refs:1,parts:u}}}}function d(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function y(t){var r,n,i=document.querySelector("style["+l+'~="'+t.id+'"]');if(i){if(h)return o;i.parentNode.removeChild(i)}if(_){var e=c++;i=f||(f=d()),r=m.bind(null,i,e,!1),n=m.bind(null,i,e,!0)}else i=d(),r=function(t,r){var n=r.css,i=r.media,e=r.sourceMap;i&&t.setAttribute("media",i);s.ssrId&&t.setAttribute(l,r.id);e&&(n+="\n/*# sourceURL="+e.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,i),n=function(){i.parentNode.removeChild(i)};return r(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;r(t=i)}else n()}}var b,g=(b=[],function(t,r){return b[t]=r,b.filter(Boolean).join("\n")});function m(t,r,n,i){var e=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(r,e);else{var a=document.createTextNode(e),u=t.childNodes;u[r]&&t.removeChild(u[r]),u.length?t.insertBefore(a,u[r]):t.appendChild(a)}}},127:function(t,r,n){"use strict";var i={name:"NoSsr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,r){var n=r.parent,i=r.slots,e=r.props,a=i(),u=a.default;void 0===u&&(u=[]);var f=a.placeholder;return n._isMounted?u:(n.$once("hook:mounted",function(){n.$forceUpdate()}),e.placeholderTag&&(e.placeholder||f)?t(e.placeholderTag,{class:["no-ssr-placeholder"]},e.placeholder||f):u.length>0?u.map(function(){return t(!1)}):t(!1))}};t.exports=i},77:function(t,r,n){"use strict";function i(t,r){"undefined"!=typeof console&&(console.warn("[vue-i18n] "+t),r&&console.warn(r.stack))}function e(t){return null!==t&&"object"==typeof t}var a=Object.prototype.toString,u="[object Object]";function f(t){return a.call(t)===u}function c(t){return null==t}function h(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];var n=null,i=null;return 1===t.length?e(t[0])||Array.isArray(t[0])?i=t[0]:"string"==typeof t[0]&&(n=t[0]):2===t.length&&("string"==typeof t[0]&&(n=t[0]),(e(t[1])||Array.isArray(t[1]))&&(i=t[1])),{locale:n,params:i}}function o(t){return JSON.parse(JSON.stringify(t))}var s=Object.prototype.hasOwnProperty;function l(t,r){return s.call(t,r)}function _(t){for(var r=arguments,n=Object(t),i=1;i<arguments.length;i++){var a=r[i];if(null!=a){var u=void 0;for(u in a)l(a,u)&&(e(a[u])?n[u]=_(n[u],a[u]):n[u]=a[u])}}return n}function p(t,r){if(t===r)return!0;var n=e(t),i=e(r);if(!n||!i)return!n&&!i&&String(t)===String(r);try{var a=Array.isArray(t),u=Array.isArray(r);if(a&&u)return t.length===r.length&&t.every(function(t,n){return p(t,r[n])});if(a||u)return!1;var f=Object.keys(t),c=Object.keys(r);return f.length===c.length&&f.every(function(n){return p(t[n],r[n])})}catch(t){return!1}}var v,d={beforeCreate:function(){var t=this.$options;if(t.i18n=t.i18n||(t.__i18n?{}:null),t.i18n)if(t.i18n instanceof V){if(t.__i18n)try{var r={};t.__i18n.forEach(function(t){r=_(r,JSON.parse(t))}),Object.keys(r).forEach(function(n){t.i18n.mergeLocaleMessage(n,r[n])})}catch(t){0}this._i18n=t.i18n,this._i18nWatcher=this._i18n.watchI18nData(),this._i18n.subscribeDataChanging(this),this._subscribing=!0}else if(f(t.i18n)){if(this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof V&&(t.i18n.root=this.$root,t.i18n.formatter=this.$root.$i18n.formatter,t.i18n.fallbackLocale=this.$root.$i18n.fallbackLocale,t.i18n.silentTranslationWarn=this.$root.$i18n.silentTranslationWarn,t.i18n.pluralizationRules=this.$root.$i18n.pluralizationRules,t.i18n.preserveDirectiveContent=this.$root.$i18n.preserveDirectiveContent),t.__i18n)try{var n={};t.__i18n.forEach(function(t){n=_(n,JSON.parse(t))}),t.i18n.messages=n}catch(t){0}this._i18n=new V(t.i18n),this._i18nWatcher=this._i18n.watchI18nData(),this._i18n.subscribeDataChanging(this),this._subscribing=!0,(void 0===t.i18n.sync||t.i18n.sync)&&(this._localeWatcher=this.$i18n.watchLocale())}else 0;else this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof V?(this._i18n=this.$root.$i18n,this._i18n.subscribeDataChanging(this),this._subscribing=!0):t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof V&&(this._i18n=t.parent.$i18n,this._i18n.subscribeDataChanging(this),this._subscribing=!0)},beforeDestroy:function(){this._i18n&&(this._subscribing&&(this._i18n.unsubscribeDataChanging(this),delete this._subscribing),this._i18nWatcher&&(this._i18nWatcher(),delete this._i18nWatcher),this._localeWatcher&&(this._localeWatcher(),delete this._localeWatcher),this._i18n=null)}},y={name:"i18n",functional:!0,props:{tag:{type:String,default:"span"},path:{type:String,required:!0},locale:{type:String},places:{type:[Array,Object]}},render:function(t,r){var n=r.props,i=r.data,e=r.children,a=r.parent.$i18n;if(e=(e||[]).filter(function(t){return t.tag||(t.text=t.text.trim())}),!a)return e;var u=n.path,f=n.locale,c={},h=n.places||{},o=(Array.isArray(h)?h.length:Object.keys(h).length,e.every(function(t){if(t.data&&t.data.attrs){var r=t.data.attrs.place;return void 0!==r&&""!==r}}));return Array.isArray(h)?h.forEach(function(t,r){c[r]=t}):Object.keys(h).forEach(function(t){c[t]=h[t]}),e.forEach(function(t,r){var n=o?""+t.data.attrs.place:""+r;c[n]=t}),t(n.tag,i,a.i(u,f,c))}};function b(t,r,n){w(t,n)&&F(t,r,n)}function g(t,r,n,i){if(w(t,n)){var e=n.context.$i18n;(function(t,r){var n=r.context;return t._locale===n.$i18n.locale})(t,n)&&p(r.value,r.oldValue)&&p(t._localeMessage,e.getLocaleMessage(e.locale))||F(t,r,n)}}function m(t,r,n,e){if(n.context){var a=n.context.$i18n||{};r.modifiers.preserve||a.preserveDirectiveContent||(t.textContent=""),t._vt=void 0,delete t._vt,t._locale=void 0,delete t._locale,t._localeMessage=void 0,delete t._localeMessage}else i("Vue instance does not exists in VNode context")}function w(t,r){var n=r.context;return n?!!n.$i18n||(i("VueI18n instance does not exists in Vue instance"),!1):(i("Vue instance doest not exists in VNode context"),!1)}function F(t,r,n){var e,a,u=function(t){var r,n,i,e;"string"==typeof t?r=t:f(t)&&(r=t.path,n=t.locale,i=t.args,e=t.choice);return{path:r,locale:n,args:i,choice:e}}(r.value),c=u.path,h=u.locale,o=u.args,s=u.choice;if(c||h||o)if(c){var l=n.context;t._vt=t.textContent=s?(e=l.$i18n).tc.apply(e,[c,s].concat(D(h,o))):(a=l.$i18n).t.apply(a,[c].concat(D(h,o))),t._locale=l.$i18n.locale,t._localeMessage=l.$i18n.getLocaleMessage(l.$i18n.locale)}else i("`path` is required in v-t directive");else i("value type not supported")}function D(t,r){var n=[];return t&&n.push(t),r&&(Array.isArray(r)||f(r))&&n.push(r),n}function C(t){C.installed=!0;(v=t).version&&Number(v.version.split(".")[0]);(function(t){t.prototype.hasOwnProperty("$i18n")||Object.defineProperty(t.prototype,"$i18n",{get:function(){return this._i18n}}),t.prototype.$t=function(t){for(var r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];var i=this.$i18n;return i._t.apply(i,[t,i.locale,i._getMessages(),this].concat(r))},t.prototype.$tc=function(t,r){for(var n=[],i=arguments.length-2;i-- >0;)n[i]=arguments[i+2];var e=this.$i18n;return e._tc.apply(e,[t,e.locale,e._getMessages(),this,r].concat(n))},t.prototype.$te=function(t,r){var n=this.$i18n;return n._te(t,n.locale,n._getMessages(),r)},t.prototype.$d=function(t){for(var r,n=[],i=arguments.length-1;i-- >0;)n[i]=arguments[i+1];return(r=this.$i18n).d.apply(r,[t].concat(n))},t.prototype.$n=function(t){for(var r,n=[],i=arguments.length-1;i-- >0;)n[i]=arguments[i+1];return(r=this.$i18n).n.apply(r,[t].concat(n))}})(v),v.mixin(d),v.directive("t",{bind:b,update:g,unbind:m}),v.component(y.name,y),v.config.optionMergeStrategies.i18n=function(t,r){return void 0===r?t:r}}var L=function(){this._caches=Object.create(null)};L.prototype.interpolate=function(t,r){if(!r)return[t];var n=this._caches[t];return n||(n=function(t){var r=[],n=0,i="";for(;n<t.length;){var e=t[n++];if("{"===e){i&&r.push({type:"text",value:i}),i="";var a="";for(e=t[n++];void 0!==e&&"}"!==e;)a+=e,e=t[n++];var u="}"===e,f=k.test(a)?"list":u&&x.test(a)?"named":"unknown";r.push({value:a,type:f})}else"%"===e?"{"!==t[n]&&(i+=e):i+=e}return i&&r.push({type:"text",value:i}),r}(t),this._caches[t]=n),function(t,r){var n=[],i=0,a=Array.isArray(r)?"list":e(r)?"named":"unknown";if("unknown"===a)return n;for(;i<t.length;){var u=t[i];switch(u.type){case"text":n.push(u.value);break;case"list":n.push(r[parseInt(u.value,10)]);break;case"named":"named"===a&&n.push(r[u.value]);break;case"unknown":0}i++}return n}(n,r)};var k=/^(?:\d)+/,x=/^(?:\w)+/;var T=0,N=1,W=2,A=3,O=0,R=4,z=5,$=6,U=7,J=8,q=[];q[O]={ws:[O],ident:[3,T],"[":[R],eof:[U]},q[1]={ws:[1],".":[2],"[":[R],eof:[U]},q[2]={ws:[2],ident:[3,T],0:[3,T],number:[3,T]},q[3]={ident:[3,T],0:[3,T],number:[3,T],ws:[1,N],".":[2,N],"[":[R,N],eof:[U,N]},q[R]={"'":[z,T],'"':[$,T],"[":[R,W],"]":[1,A],eof:J,else:[R,T]},q[z]={"'":[R,T],eof:J,else:[z,T]},q[$]={'"':[R,T],eof:J,else:[$,T]};var B=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function G(t){if(null==t)return"eof";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return"ident"}function S(t){var r,n,i,e=t.trim();return("0"!==t.charAt(0)||!isNaN(t))&&(i=e,B.test(i)?(n=(r=e).charCodeAt(0))!==r.charCodeAt(r.length-1)||34!==n&&39!==n?r:r.slice(1,-1):"*"+e)}var Q=function(){this._cache=Object.create(null)};Q.prototype.parsePath=function(t){var r=this._cache[t];return r||(r=function(t){var r,n,i,e,a,u,f,c=[],h=-1,o=O,s=0,l=[];function _(){var r=t[h+1];if(o===z&&"'"===r||o===$&&'"'===r)return h++,i="\\"+r,l[T](),!0}for(l[N]=function(){void 0!==n&&(c.push(n),n=void 0)},l[T]=function(){void 0===n?n=i:n+=i},l[W]=function(){l[T](),s++},l[A]=function(){if(s>0)s--,o=R,l[T]();else{if(s=0,!1===(n=S(n)))return!1;l[N]()}};null!==o;)if("\\"!==(r=t[++h])||!_()){if(e=G(r),(a=(f=q[o])[e]||f.else||J)===J)return;if(o=a[0],(u=l[a[1]])&&(i=void 0===(i=a[2])?r:i,!1===u()))return;if(o===U)return c}}(t))&&(this._cache[t]=r),r||[]},Q.prototype.getPathValue=function(t,r){if(!e(t))return null;var n=this.parsePath(r);if(0===n.length)return null;for(var i=n.length,a=t,u=0;u<i;){var f=a[n[u]];if(void 0===f)return null;a=f,u++}return a};var X,Y=["style","currency","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","localeMatcher","formatMatcher"],Z=/(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g,H=/^@(?:\.([a-z]+))?:/,K=/[()]/g,j={upper:function(t){return t.toLocaleUpperCase()},lower:function(t){return t.toLocaleLowerCase()}},I=new L,V=function(t){var r=this;void 0===t&&(t={}),!v&&"undefined"!=typeof window&&window.Vue&&C(window.Vue);var n=t.locale||"en-US",i=t.fallbackLocale||"en-US",e=t.messages||{},a=t.dateTimeFormats||{},u=t.numberFormats||{};this._vm=null,this._formatter=t.formatter||I,this._missing=t.missing||null,this._root=t.root||null,this._sync=void 0===t.sync||!!t.sync,this._fallbackRoot=void 0===t.fallbackRoot||!!t.fallbackRoot,this._silentTranslationWarn=void 0!==t.silentTranslationWarn&&!!t.silentTranslationWarn,this._dateTimeFormatters={},this._numberFormatters={},this._path=new Q,this._dataListeners=[],this.pluralizationRules=t.pluralizationRules||{},this.preserveDirectiveContent=void 0!==t.preserveDirectiveContent&&!!t.preserveDirectiveContent,this._exist=function(t,n){return!(!t||!n)&&!c(r._path.getPathValue(t,n))},this._initVM({locale:n,fallbackLocale:i,messages:e,dateTimeFormats:a,numberFormats:u})},E={vm:{configurable:!0},messages:{configurable:!0},dateTimeFormats:{configurable:!0},numberFormats:{configurable:!0},locale:{configurable:!0},fallbackLocale:{configurable:!0},missing:{configurable:!0},formatter:{configurable:!0},silentTranslationWarn:{configurable:!0}};V.prototype._initVM=function(t){var r=v.config.silent;v.config.silent=!0,this._vm=new v({data:t}),v.config.silent=r},V.prototype.subscribeDataChanging=function(t){this._dataListeners.push(t)},V.prototype.unsubscribeDataChanging=function(t){!function(t,r){if(t.length){var n=t.indexOf(r);if(n>-1)t.splice(n,1)}}(this._dataListeners,t)},V.prototype.watchI18nData=function(){var t=this;return this._vm.$watch("$data",function(){for(var r=t._dataListeners.length;r--;)v.nextTick(function(){t._dataListeners[r]&&t._dataListeners[r].$forceUpdate()})},{deep:!0})},V.prototype.watchLocale=function(){if(!this._sync||!this._root)return null;var t=this._vm;return this._root.$i18n.vm.$watch("locale",function(r){t.$set(t,"locale",r),t.$forceUpdate()},{immediate:!0})},E.vm.get=function(){return this._vm},E.messages.get=function(){return o(this._getMessages())},E.dateTimeFormats.get=function(){return o(this._getDateTimeFormats())},E.numberFormats.get=function(){return o(this._getNumberFormats())},E.locale.get=function(){return this._vm.locale},E.locale.set=function(t){this._vm.$set(this._vm,"locale",t)},E.fallbackLocale.get=function(){return this._vm.fallbackLocale},E.fallbackLocale.set=function(t){this._vm.$set(this._vm,"fallbackLocale",t)},E.missing.get=function(){return this._missing},E.missing.set=function(t){this._missing=t},E.formatter.get=function(){return this._formatter},E.formatter.set=function(t){this._formatter=t},E.silentTranslationWarn.get=function(){return this._silentTranslationWarn},E.silentTranslationWarn.set=function(t){this._silentTranslationWarn=t},V.prototype._getMessages=function(){return this._vm.messages},V.prototype._getDateTimeFormats=function(){return this._vm.dateTimeFormats},V.prototype._getNumberFormats=function(){return this._vm.numberFormats},V.prototype._warnDefault=function(t,r,n,i,e){if(!c(n))return n;if(this._missing){var a=this._missing.apply(null,[t,r,i,e]);if("string"==typeof a)return a}else 0;return r},V.prototype._isFallbackRoot=function(t){return!t&&!c(this._root)&&this._fallbackRoot},V.prototype._interpolate=function(t,r,n,i,e,a,u){if(!r)return null;var h,o=this._path.getPathValue(r,n);if(Array.isArray(o)||f(o))return o;if(c(o)){if(!f(r))return null;if("string"!=typeof(h=r[n]))return null}else{if("string"!=typeof o)return null;h=o}return(h.indexOf("@:")>=0||h.indexOf("@.")>=0)&&(h=this._link(t,r,h,i,e,a,u)),this._render(h,e,a,n)},V.prototype._link=function(t,r,n,i,e,a,u){var f=n,c=f.match(Z);for(var h in c)if(c.hasOwnProperty(h)){var o=c[h],s=o.match(H),l=s[0],_=s[1],p=o.replace(l,"").replace(K,"");if(u.includes(p))return f;u.push(p);var v=this._interpolate(t,r,p,i,"raw"===e?"string":e,"raw"===e?void 0:a,u);if(this._isFallbackRoot(v)){if(!this._root)throw Error("unexpected error");var d=this._root.$i18n;v=d._translate(d._getMessages(),d.locale,d.fallbackLocale,p,i,e,a)}v=this._warnDefault(t,p,v,i,Array.isArray(a)?a:[a]),j.hasOwnProperty(_)&&(v=j[_](v)),u.pop(),f=v?f.replace(o,v):f}return f},V.prototype._render=function(t,r,n,i){var e=this._formatter.interpolate(t,n,i);return e||(e=I.interpolate(t,n,i)),"string"===r?e.join(""):e},V.prototype._translate=function(t,r,n,i,e,a,u){var f=this._interpolate(r,t[r],i,e,a,u,[i]);return c(f)&&c(f=this._interpolate(n,t[n],i,e,a,u,[i]))?null:f},V.prototype._t=function(t,r,n,i){for(var e,a=[],u=arguments.length-4;u-- >0;)a[u]=arguments[u+4];if(!t)return"";var f=h.apply(void 0,a),c=f.locale||r,o=this._translate(n,c,this.fallbackLocale,t,i,"string",f.params);if(this._isFallbackRoot(o)){if(!this._root)throw Error("unexpected error");return(e=this._root).$t.apply(e,[t].concat(a))}return this._warnDefault(c,t,o,i,a)},V.prototype.t=function(t){for(var r,n=[],i=arguments.length-1;i-- >0;)n[i]=arguments[i+1];return(r=this)._t.apply(r,[t,this.locale,this._getMessages(),null].concat(n))},V.prototype._i=function(t,r,n,i,e){var a=this._translate(n,r,this.fallbackLocale,t,i,"raw",e);if(this._isFallbackRoot(a)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.i(t,r,e)}return this._warnDefault(r,t,a,i,[e])},V.prototype.i=function(t,r,n){return t?("string"!=typeof r&&(r=this.locale),this._i(t,r,this._getMessages(),null,n)):""},V.prototype._tc=function(t,r,n,i,e){for(var a,u=[],f=arguments.length-5;f-- >0;)u[f]=arguments[f+5];if(!t)return"";void 0===e&&(e=1);var c={count:e,n:e},o=h.apply(void 0,u);return o.params=Object.assign(c,o.params),u=null===o.locale?[o.params]:[o.locale,o.params],this.fetchChoice((a=this)._t.apply(a,[t,r,n,i].concat(u)),e)},V.prototype.fetchChoice=function(t,r){if(!t&&"string"!=typeof t)return null;var n=t.split("|");return n[r=this.getChoiceIndex(r,n.length)]?n[r].trim():t},V.prototype.getChoiceIndex=function(t,r){var n,i;return this.locale in this.pluralizationRules?this.pluralizationRules[this.locale].apply(this,[t,r]):(n=t,i=r,n=Math.abs(n),2===i?n?n>1?1:0:1:n?Math.min(n,2):0)},V.prototype.tc=function(t,r){for(var n,i=[],e=arguments.length-2;e-- >0;)i[e]=arguments[e+2];return(n=this)._tc.apply(n,[t,this.locale,this._getMessages(),null,r].concat(i))},V.prototype._te=function(t,r,n){for(var i=[],e=arguments.length-3;e-- >0;)i[e]=arguments[e+3];var a=h.apply(void 0,i).locale||r;return this._exist(n[a],t)},V.prototype.te=function(t,r){return this._te(t,this.locale,this._getMessages(),r)},V.prototype.getLocaleMessage=function(t){return o(this._vm.messages[t]||{})},V.prototype.setLocaleMessage=function(t,r){this._vm.$set(this._vm.messages,t,r)},V.prototype.mergeLocaleMessage=function(t,r){this._vm.$set(this._vm.messages,t,_(this._vm.messages[t]||{},r))},V.prototype.getDateTimeFormat=function(t){return o(this._vm.dateTimeFormats[t]||{})},V.prototype.setDateTimeFormat=function(t,r){this._vm.$set(this._vm.dateTimeFormats,t,r)},V.prototype.mergeDateTimeFormat=function(t,r){this._vm.$set(this._vm.dateTimeFormats,t,_(this._vm.dateTimeFormats[t]||{},r))},V.prototype._localizeDateTime=function(t,r,n,i,e){var a=r,u=i[a];if((c(u)||c(u[e]))&&(u=i[a=n]),c(u)||c(u[e]))return null;var f=u[e],h=a+"__"+e,o=this._dateTimeFormatters[h];return o||(o=this._dateTimeFormatters[h]=new Intl.DateTimeFormat(a,f)),o.format(t)},V.prototype._d=function(t,r,n){if(!n)return new Intl.DateTimeFormat(r).format(t);var i=this._localizeDateTime(t,r,this.fallbackLocale,this._getDateTimeFormats(),n);if(this._isFallbackRoot(i)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.d(t,n,r)}return i||""},V.prototype.d=function(t){for(var r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];var i=this.locale,a=null;return 1===r.length?"string"==typeof r[0]?a=r[0]:e(r[0])&&(r[0].locale&&(i=r[0].locale),r[0].key&&(a=r[0].key)):2===r.length&&("string"==typeof r[0]&&(a=r[0]),"string"==typeof r[1]&&(i=r[1])),this._d(t,i,a)},V.prototype.getNumberFormat=function(t){return o(this._vm.numberFormats[t]||{})},V.prototype.setNumberFormat=function(t,r){this._vm.$set(this._vm.numberFormats,t,r)},V.prototype.mergeNumberFormat=function(t,r){this._vm.$set(this._vm.numberFormats,t,_(this._vm.numberFormats[t]||{},r))},V.prototype._localizeNumber=function(t,r,n,i,e,a){var u=r,f=i[u];if((c(f)||c(f[e]))&&(f=i[u=n]),c(f)||c(f[e]))return null;var h,o=f[e];if(a)h=new Intl.NumberFormat(u,Object.assign({},o,a));else{var s=u+"__"+e;(h=this._numberFormatters[s])||(h=this._numberFormatters[s]=new Intl.NumberFormat(u,o))}return h.format(t)},V.prototype._n=function(t,r,n,i){if(!V.availabilities.numberFormat)return"";if(!n)return(i?new Intl.NumberFormat(r,i):new Intl.NumberFormat(r)).format(t);var e=this._localizeNumber(t,r,this.fallbackLocale,this._getNumberFormats(),n,i);if(this._isFallbackRoot(e)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.n(t,Object.assign({},{key:n,locale:r},i))}return e||""},V.prototype.n=function(t){for(var r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];var i=this.locale,a=null,u=null;return 1===r.length?"string"==typeof r[0]?a=r[0]:e(r[0])&&(r[0].locale&&(i=r[0].locale),r[0].key&&(a=r[0].key),u=Object.keys(r[0]).reduce(function(t,n){var i;return Y.includes(n)?Object.assign({},t,((i={})[n]=r[0][n],i)):t},null)):2===r.length&&("string"==typeof r[0]&&(a=r[0]),"string"==typeof r[1]&&(i=r[1])),this._n(t,i,a,u)},Object.defineProperties(V.prototype,E),Object.defineProperty(V,"availabilities",{get:function(){if(!X){var t="undefined"!=typeof Intl;X={dateTimeFormat:t&&void 0!==Intl.DateTimeFormat,numberFormat:t&&void 0!==Intl.NumberFormat}}return X}}),V.install=C,V.version="8.7.0",r.a=V},97:function(t,r){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}}}]);