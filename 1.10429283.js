(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{100:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(13),a=n(104),u=n(10);const c=Object(r.createContext)({collectLink:()=>{}});var s=n(102),f=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};e.a=function(t){var e,{isNavLink:n,to:l,href:d,activeClassName:p,"data-noBrokenLinkCheck":h}=t,y=f(t,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]);const{withBaseUrl:b}=Object(s.b)(),g=Object(r.useContext)(c),v=l||d,m=void 0!==v?b(v):void 0,w=Object(a.a)(m),T=Object(r.useRef)(!1),O=n?i.e:i.c,A=u.a.canUseIntersectionObserver;let C;Object(r.useEffect)(()=>(!A&&w&&window.docusaurus.prefetch(m),()=>{A&&C&&C.disconnect()}),[m,A,w]);const S=null!==(e=null==m?void 0:m.startsWith("#"))&&void 0!==e&&e,E=!m||!w||S;return m&&w&&!S&&!h&&g.collectLink(m),E?o.a.createElement("a",Object.assign({href:m},!w&&{target:"_blank",rel:"noopener noreferrer"},y)):o.a.createElement(O,Object.assign({},y,{onMouseEnter:()=>{T.current||(window.docusaurus.preload(m),T.current=!0)},innerRef:t=>{var e,n;A&&t&&w&&(e=t,n=()=>{window.docusaurus.prefetch(m)},C=new window.IntersectionObserver(t=>{t.forEach(t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(C.unobserve(e),C.disconnect(),n())})}),C.observe(e))},to:m},n&&{activeClassName:p}))}},101:function(t,e,n){"use strict";function r(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}e.a=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(o&&(o+=" "),o+=e);return o}},102:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));var r=n(99),o=n(104);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(t,e,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return e+n;const a=!n.startsWith(e)?e+n.replace(/^\//,""):n;return i?t+a:a}(e,t,n,r)}}function a(t,e={}){const{withBaseUrl:n}=i();return n(t,e)}},104:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!r(t)}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}))},106:function(t,e,n){"use strict";n.r(e);var r=n(13);n.d(e,"MemoryRouter",(function(){return r.d})),n.d(e,"Prompt",(function(){return r.f})),n.d(e,"Redirect",(function(){return r.g})),n.d(e,"Route",(function(){return r.h})),n.d(e,"Router",(function(){return r.i})),n.d(e,"StaticRouter",(function(){return r.j})),n.d(e,"Switch",(function(){return r.k})),n.d(e,"generatePath",(function(){return r.l})),n.d(e,"matchPath",(function(){return r.m})),n.d(e,"useHistory",(function(){return r.n})),n.d(e,"useLocation",(function(){return r.o})),n.d(e,"useParams",(function(){return r.p})),n.d(e,"useRouteMatch",(function(){return r.q})),n.d(e,"withRouter",(function(){return r.r})),n.d(e,"BrowserRouter",(function(){return r.a})),n.d(e,"HashRouter",(function(){return r.b})),n.d(e,"Link",(function(){return r.c})),n.d(e,"NavLink",(function(){return r.e}))},107:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(121);e.a=function(t){return o.a.createElement(i.a,Object.assign({},t))}},108:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useDocVersionSuggestions=e.useActiveDocContext=e.useActiveVersion=e.useLatestVersion=e.useVersions=e.useActivePlugin=void 0;const r=n(106),o=n(129),i=n(130),a=t=>o.usePluginData("docusaurus-plugin-content-docusaurus-plugin-content-docs",t);e.useActivePlugin=()=>{const t=o.useAllPluginInstancesData("docusaurus-plugin-content-docusaurus-plugin-content-docs"),{pathname:e}=r.useLocation();return i.getActivePlugin(t,e)},e.useVersions=t=>a(t).versions,e.useLatestVersion=t=>{const e=a(t);return i.getLatestVersion(e)},e.useActiveVersion=t=>{const e=a(t),{pathname:n}=r.useLocation();return i.getActiveVersion(e,n)},e.useActiveDocContext=t=>{const e=a(t),{pathname:n}=r.useLocation();return i.getActiveDocContext(e,n)},e.useDocVersionSuggestions=t=>{const e=a(t),{pathname:n}=r.useLocation();return i.getDocVersionSuggestions(e,n)}},121:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return yt}));var r,o,i,a,u=n(7),c=n.n(u),s=n(122),f=n.n(s),l=n(123),d=n.n(l),p=n(0),h=n.n(p),y=n(20),b=n.n(y),g="bodyAttributes",v="htmlAttributes",m="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(t){return w[t]})),"charset"),O="cssText",A="href",C="http-equiv",S="innerHTML",E="itemprop",j="name",P="property",L="rel",k="src",x="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},D="defaultTitle",R="defer",N="encodeSpecialCharacters",M="onChangeClientState",V="titleTemplate",_=Object.keys(I).reduce((function(t,e){return t[I[e]]=e,t}),{}),B=[w.NOSCRIPT,w.SCRIPT,w.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},q=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},F=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},z=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},K=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(t){var e=X(t,w.TITLE),n=X(t,V);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=X(t,D);return e||r||void 0},$=function(t){return X(t,M)||function(){}},J=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return Y({},t,e)}),{})},G=function(t,e){return e.filter((function(t){return void 0!==t[w.BASE]})).map((function(t){return t[w.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},Q=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+H(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===e.indexOf(c)||n===L&&"canonical"===t[n].toLowerCase()||c===L&&"stylesheet"===t[c].toLowerCase()||(n=c),-1===e.indexOf(u)||u!==S&&u!==O&&u!==E||(n=u)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=b()({},r[u],o[u]);r[u]=c}return t}),[]).reverse()},X=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},Z=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){Z(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:t.requestAnimationFrame||Z,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,it=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.onChangeClientState,s=t.scriptTags,f=t.styleTags,l=t.title,d=t.titleAttributes;ct(w.BODY,r),ct(w.HTML,o),ut(l,d);var p={baseTag:st(w.BASE,n),linkTags:st(w.LINK,i),metaTags:st(w.META,a),noscriptTags:st(w.NOSCRIPT,u),scriptTags:st(w.SCRIPT,s),styleTags:st(w.STYLE,f)},h={},y={};Object.keys(p).forEach((function(t){var e=p[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(y[t]=p[t].oldTags)})),e&&e(),c(t,h,y)},at=function(t){return Array.isArray(t)?t.join(""):t},ut=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ct(w.TITLE,e)},ct=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),u=0;u<a.length;u++){var c=a[u],s=e[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var f=i.indexOf(c);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},st=function(t,e){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(t+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===S)n.innerHTML=e.innerHTML;else if(r===O)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u=void 0===e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute("data-react-helmet","true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},ft=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},lt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[I[n]||n]=t[n],e}),e)},dt=function(t,e,n){switch(t){case w.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})["data-react-helmet"]=!0,o=lt(n,r),[h.a.createElement(w.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=ft(n),i=at(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+K(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case g:case v:return{toComponent:function(){return lt(e)},toString:function(){return ft(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(e).forEach((function(t){var n=I[t]||t;if(n===S||n===O){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),h.a.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===S||t===O)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+K(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===B.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},pt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.scriptTags,s=t.styleTags,f=t.title,l=void 0===f?"":f,d=t.titleAttributes;return{base:dt(w.BASE,e,r),bodyAttributes:dt(g,n,r),htmlAttributes:dt(v,o,r),link:dt(w.LINK,i,r),meta:dt(w.META,a,r),noscript:dt(w.NOSCRIPT,u,r),script:dt(w.SCRIPT,c,r),style:dt(w.STYLE,s,r),title:dt(w.TITLE,{title:l,titleAttributes:d},r)}},ht=f()((function(t){return{baseTag:G([A,x],t),bodyAttributes:J(g,t),defer:X(t,R),encode:X(t,N),htmlAttributes:J(v,t),linkTags:Q(w.LINK,[L,A],t),metaTags:Q(w.META,[j,T,C,P,E],t),noscriptTags:Q(w.NOSCRIPT,[S],t),onChangeClientState:$(t),scriptTags:Q(w.SCRIPT,[k,S],t),styleTags:Q(w.STYLE,[O],t),title:W(t),titleAttributes:J(m,t)}}),(function(t){ot&&nt(ot),t.defer?ot=et((function(){it(t,(function(){ot=null}))})):(it(t),ot=null)}),pt)((function(){return null})),yt=(o=ht,a=i=function(t){function e(){return U(this,e),z(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!d()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:e};case w.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return Y({},r,((e={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case w.TITLE:return Y({},o,((e={})[r.type]=a,e.titleAttributes=Y({},i),e));case w.BODY:return Y({},o,{bodyAttributes:Y({},i)});case w.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((n={})[r.type]=Y({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=Y({},e);return Object.keys(t).forEach((function(e){var r;n=Y({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return h.a.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[_[n]||n]=t[n],e}),e)}(F(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=F(t,["children"]),r=Y({},n);return e&&(r=this.mapChildrenToProps(e,r)),h.a.createElement(o,r)},q(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(h.a.Component),i.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=pt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);yt.renderStatic=yt.rewind}).call(this,n(29))},122:function(t,e,n){"use strict";var r,o=n(0),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function f(){c=t(s.map((function(t){return t.props}))),l.canUseDOM?e(c):n&&(c=n(c))}var l=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=c;return c=void 0,s=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),f()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(l,"canUseDOM",u),l}}},123:function(t,e){var n="undefined"!=typeof Element,r="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;t.exports=function(t,e){try{return function t(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var u,c,s,f;if(Array.isArray(e)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(!t(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(f=e.entries();!(c=f.next()).done;)if(!a.has(c.value[0]))return!1;for(f=e.entries();!(c=f.next()).done;)if(!t(c.value[1],a.get(c.value[0])))return!1;return!0}if(o&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(f=e.entries();!(c=f.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((u=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(n&&e instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!t(e[s[c]],a[s[c]]))return!1;return!0}return e!=e&&a!=a}(t,e)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}}},129:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o})),n.d(e,"useAllPluginInstancesData",(function(){return i})),n.d(e,"usePluginData",(function(){return a}));var r=n(99);function o(){const{globalData:t}=Object(r.a)();if(!t)throw new Error("Docusaurus global data not found");return t}function i(t){const e=o()[t];if(!e)throw new Error("Docusaurus plugin global data not found for pluginName="+t);return e}function a(t,e="default"){const n=i(t)[e];if(!n)throw new Error(`Docusaurus plugin global data not found for pluginName=${t} and pluginId=${e}`);return n}},130:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDocVersionSuggestions=e.getActiveDocContext=e.getActiveVersion=e.getLatestVersion=e.getActivePlugin=void 0;const r=n(106);e.getActivePlugin=(t,e)=>{const n=Object.entries(t).find(([t,n])=>!!r.matchPath(e,{path:n.path,exact:!1,strict:!1}));return n?{pluginId:n[0],pluginData:n[1]}:void 0},e.getLatestVersion=t=>t.versions.find(e=>e.name===t.latestVersionName),e.getActiveVersion=(t,n)=>{const o=e.getLatestVersion(t);return[...t.versions.filter(t=>t!==o),o].find(t=>!!r.matchPath(n,{path:t.path,exact:!1,strict:!1}))},e.getActiveDocContext=(t,n)=>{const o=e.getActiveVersion(t,n),i=null==o?void 0:o.docs.find(t=>!!r.matchPath(n,{path:t.path,exact:!0,strict:!1}));return{activeVersion:o,activeDoc:i,alternateDocVersions:i?function(e){const n={};return t.versions.forEach(t=>{t.docs.forEach(r=>{r.id===e&&(n[t.name]=r)})}),n}(i.id):{}}},e.getDocVersionSuggestions=(t,n)=>{const r=e.getLatestVersion(t),o=e.getActiveDocContext(t,n),i=o.activeVersion!==r;return{latestDocSuggestion:i?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},99:function(t,e,n){"use strict";var r=n(0),o=n(23);e.a=function(){const t=Object(r.useContext)(o.a);if(null===t)throw new Error("Docusaurus context not provided");return t}}}]);