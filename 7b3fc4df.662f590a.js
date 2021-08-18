(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{78:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return u}));var t=r(2),o=r(6),c=(r(0),r(98)),a={id:"json_rpc",title:"JSON RPC",sidebar_label:"JSON RPC"},i={unversionedId:"json_rpc",id:"json_rpc",isDocsHomePage:!1,title:"JSON RPC",description:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435",source:"@site/docs/json_rpc.md",permalink:"/docs/json_rpc",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/json_rpc.md",sidebar_label:"JSON RPC",sidebar:"someSidebar",previous:{title:"REST API",permalink:"/docs/rest"},next:{title:"\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u043e\u0432 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438",permalink:"/docs/multi_services"}},p=[{value:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435",id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435",children:[{value:"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430 JSON RPC",id:"\u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f-\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438-\u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430-json-rpc",children:[]}]},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",children:[{value:"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 markdown \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438",id:"\u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438-markdown-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438",children:[]},{value:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u0443\u0442\u0438 HTTP",id:"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u043f\u0443\u0442\u0438-http",children:[]}]}],l={rightToc:p};function u(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435"},"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435"),Object(c.b)("h3",{id:"\u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f-\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438-\u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430-json-rpc"},"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430 JSON RPC"),Object(c.b)("p",null,"\u0414\u043b\u044f \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 JSON RPC \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",Object(c.b)("inlineCode",{parentName:"p"},"JSONRPCEnable"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-go"}),'package example\n\nimport (\n  "github.com/example/app/pkg/controller"\n  \n  . "github.com/swipe-io/swipe/v2"\n)\n\nfunc Swipe() {\n    Build(\n        Service(\n            Interface((*controller.UserController)(nil), ""),\n            \n            HTTPServer(),\n            \n            JSONRPCEnable(),            \n        ),\n    )\n}\n')),Object(c.b)("p",null,"Swipe \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043c\u0435\u0442\u043e\u0434\u044b \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432."),Object(c.b)("p",null,"Swipe \u043c\u043e\u0436\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e Openapi (Swagger) \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\n\u043f\u0440\u043e \u044d\u0442\u043e \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u043d\u043e \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"docs/openapi"}),"Openapi (Swagger) \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438")),Object(c.b)("h2",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),Object(c.b)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0435\u0439 \u043c\u0435\u0442\u043e\u0434\u043e\u0432, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043c\u0435\u0442\u043e\u0434 \u0438\u0437 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0432 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0435."),Object(c.b)("h3",{id:"\u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438-markdown-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438"},"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 markdown \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-go"}),'package example\n\nimport (\n  "github.com/example/app/pkg/controller"\n  \n  . "github.com/swipe-io/swipe/v2"\n)\n\nfunc Swipe() {\n    Build(\n        Service(\n            Interface((*controller.UserController)(nil), ""),\n            \n            HTTPServer(),\n            \n            JSONRPCEnable(),\n            JSONRPCDocEnable(),\n            JSONRPCDocOutput("./docs"),         \n        ),\n    )\n}\n')),Object(c.b)("p",null,"\u041f\u0443\u0442\u044c \u0432 ",Object(c.b)("inlineCode",{parentName:"p"},"JSONRPCDocOutput")," \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a\u043e\u0440\u043d\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),Object(c.b)("h3",{id:"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u043f\u0443\u0442\u0438-http"},"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u0443\u0442\u0438 HTTP"),Object(c.b)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0443\u0442\u044c HTTP \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-go"}),'package example\n\nimport (\n  "github.com/example/app/pkg/controller"\n  \n  . "github.com/swipe-io/swipe/v2"\n)\n\nfunc Swipe() {\n    Build(\n        Service(\n            Interface((*controller.UserController)(nil), ""),\n            \n            HTTPServer(),\n            \n            JSONRPCEnable(),\n            JSONRPCPath("/rpc"),                    \n        ),\n    )\n}\n')))}u.isMDXComponent=!0},98:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return O}));var t=r(0),o=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},b=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(r),d=t,O=b["".concat(a,".").concat(d)]||b[d]||s[d]||c;return r?o.a.createElement(O,i(i({ref:n},l),{},{components:r})):o.a.createElement(O,i({ref:n},l))}));function O(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);