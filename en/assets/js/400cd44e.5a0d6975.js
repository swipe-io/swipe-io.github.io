(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6716],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return r?t.createElement(f,a(a({ref:n},u),{},{components:r})):t.createElement(f,a({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3310:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var t=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],c={id:"json_rpc",title:"JSON RPC",sidebar_label:"JSON RPC"},l=void 0,p={unversionedId:"json_rpc",id:"version-2.0.0/json_rpc",isDocsHomePage:!1,title:"JSON RPC",description:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435",source:"@site/versioned_docs/version-2.0.0/json_rpc.md",sourceDirName:".",slug:"/json_rpc",permalink:"/en/docs/2.0.0/json_rpc",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-2.0.0/json_rpc.md",version:"2.0.0",frontMatter:{id:"json_rpc",title:"JSON RPC",sidebar_label:"JSON RPC"},sidebar:"version-2.0.0/someSidebar",previous:{title:"REST API",permalink:"/en/docs/2.0.0/rest"},next:{title:"\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u043e\u0432 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438",permalink:"/en/docs/2.0.0/multi_services"}},u=[{value:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435",id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435",children:[{value:"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430 JSON RPC",id:"\u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f-\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438-\u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430-json-rpc",children:[]}]},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",children:[{value:"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 markdown \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438",id:"\u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438-markdown-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438",children:[]},{value:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u0443\u0442\u0438 HTTP",id:"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u043f\u0443\u0442\u0438-http",children:[]}]}],s={toc:u};function d(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435"},"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435"),(0,i.kt)("h3",{id:"\u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f-\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438-\u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430-json-rpc"},"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430 JSON RPC"),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 JSON RPC \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"JSONRPCEnable"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package example\n\nimport (\n  "github.com/example/app/pkg/controller"\n  \n  . "github.com/swipe-io/swipe/v2"\n)\n\nfunc Swipe() {\n    Build(\n        Service(\n            Interface((*controller.UserController)(nil), ""),\n            \n            HTTPServer(),\n            \n            JSONRPCEnable(),            \n        ),\n    )\n}\n')),(0,i.kt)("p",null,"Swipe \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043c\u0435\u0442\u043e\u0434\u044b \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432."),(0,i.kt)("p",null,"Swipe \u043c\u043e\u0436\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e Openapi (Swagger) \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\n\u043f\u0440\u043e \u044d\u0442\u043e \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u043d\u043e \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,i.kt)("a",{parentName:"p",href:"docs/openapi"},"Openapi (Swagger) \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438")),(0,i.kt)("h2",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0435\u0439 \u043c\u0435\u0442\u043e\u0434\u043e\u0432, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043c\u0435\u0442\u043e\u0434 \u0438\u0437 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0432 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0435."),(0,i.kt)("h3",{id:"\u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438-markdown-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438"},"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 markdown \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package example\n\nimport (\n  "github.com/example/app/pkg/controller"\n  \n  . "github.com/swipe-io/swipe/v2"\n)\n\nfunc Swipe() {\n    Build(\n        Service(\n            Interface((*controller.UserController)(nil), ""),\n            \n            HTTPServer(),\n            \n            JSONRPCEnable(),\n            JSONRPCDocEnable(),\n            JSONRPCDocOutput("./docs"),         \n        ),\n    )\n}\n')),(0,i.kt)("p",null,"\u041f\u0443\u0442\u044c \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"JSONRPCDocOutput")," \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a\u043e\u0440\u043d\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),(0,i.kt)("h3",{id:"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u043f\u0443\u0442\u0438-http"},"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u0443\u0442\u0438 HTTP"),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0443\u0442\u044c HTTP \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package example\n\nimport (\n  "github.com/example/app/pkg/controller"\n  \n  . "github.com/swipe-io/swipe/v2"\n)\n\nfunc Swipe() {\n    Build(\n        Service(\n            Interface((*controller.UserController)(nil), ""),\n            \n            HTTPServer(),\n            \n            JSONRPCEnable(),\n            JSONRPCPath("/rpc"),                    \n        ),\n    )\n}\n')))}d.isMDXComponent=!0}}]);