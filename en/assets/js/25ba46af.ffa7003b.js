(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5673],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||i;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8016:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],p={id:"logging_instrumenting",title:"\u041c\u0435\u0442\u0440\u0438\u043a\u0438 \u0438 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",sidebar_label:"\u041c\u0435\u0442\u0440\u0438\u043a\u0438 \u0438 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},l=void 0,s={unversionedId:"logging_instrumenting",id:"version-3.0.0/logging_instrumenting",isDocsHomePage:!1,title:"\u041c\u0435\u0442\u0440\u0438\u043a\u0438 \u0438 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",description:"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",source:"@site/versioned_docs/version-3.0.0/logging_instrumenting.md",sourceDirName:".",slug:"/logging_instrumenting",permalink:"/en/docs/logging_instrumenting",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-3.0.0/logging_instrumenting.md",version:"3.0.0",frontMatter:{id:"logging_instrumenting",title:"\u041c\u0435\u0442\u0440\u0438\u043a\u0438 \u0438 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",sidebar_label:"\u041c\u0435\u0442\u0440\u0438\u043a\u0438 \u0438 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},sidebar:"version-3.0.0/someSidebar",previous:{title:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430 REST \u0438 JSON RPC",permalink:"/en/docs/client"},next:{title:"Openapi (Swagger) \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438",permalink:"/en/docs/openapi"}},c=[{value:"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",children:[{value:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0430",id:"\u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u0434\u043b\u044f-\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0433\u043e-\u043c\u0435\u0442\u043e\u0434\u0430",children:[]},{value:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043c\u0435\u0442\u043e\u0434\u0430",id:"\u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u0434\u043b\u044f-\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432-\u043c\u0435\u0442\u043e\u0434\u0430",children:[]},{value:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u0438\u0437 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430",id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0432-\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430-\u0438\u0437-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430",children:[]},{value:"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438",id:"\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u043e\u0448\u0438\u0431\u043a\u0438",children:[]}]},{value:"\u041c\u0435\u0442\u0440\u0438\u043a\u0438",id:"\u043c\u0435\u0442\u0440\u0438\u043a\u0438",children:[]}],g={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"middleware")," \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f,\n\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"Logging"),"."),(0,i.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0449\u0438\u0439 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package example\n\nimport (\n  "github.com/example/app/pkg/controller"\n  "github.com/example/app/pkg/swipe/swipegokit"\n)\n\nfunc swipe() {\n    swipegokit.Gokit(\n        swipegokit.Interface((*controller.ExampleController)(nil), "example"),\n        \n        swipegokit.HTTPServer(),\n        \n        swipegokit.MethodDefaultOptions(            \n            swipegokit.Logging(true),\n        ),\n    )\n}\n')),(0,i.kt)("h3",{id:"\u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u0434\u043b\u044f-\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0433\u043e-\u043c\u0435\u0442\u043e\u0434\u0430"},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0430"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package example\n\nimport (\n  "github.com/example/app/pkg/controller"\n  "github.com/example/app/pkg/swipe/swipegokit"\n)\n\nfunc swipe() {\n    swipegokit.Gokit(\n        swipegokit.Interface((*controller.ExampleController)(nil), "example"),\n        \n        swipegokit.HTTPServer(),\n        \n        swipegokit.MethodOptions(controller.ExampleController.Get,          \n            swipegokit.Logging(false),\n        ),                      \n    )\n}\n')),(0,i.kt)("h3",{id:"\u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u0434\u043b\u044f-\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432-\u043c\u0435\u0442\u043e\u0434\u0430"},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043c\u0435\u0442\u043e\u0434\u0430"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LoggingParams")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f\n\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u043c\u0435\u0442\u043e\u0434\u0430 \u0432 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435."),(0,i.kt)("p",null,"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"includes")," \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u0432 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"excludes")," \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u0438\u0437 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package example\n\nimport (\n  "github.com/example/app/pkg/controller"\n  "github.com/example/app/pkg/swipe/swipegokit"\n)\n\nfunc swipe() {\n    swipegokit.Gokit(\n        swipegokit.Interface((*controller.ExampleController)(nil), "example"),\n        \n        swipegokit.HTTPServer(),\n        \n        swipegokit.MethodOptions(controller.ExampleController.Get,          \n            swipegokit.LoggingParams([]string{}, []string{"password"}), // \u0432\u044b\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 password\n        ),\n    )\n}\n')),(0,i.kt)("h3",{id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0432-\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430-\u0438\u0437-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u0438\u0437 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package log\n\nimport (\n    "context"\n    "net/http"\n)\n\ntype ContextKey string\n\nconst (\n    RequestIDLogContextKey ContextKey = "request_id"\n)\n\nfunc PopulateContext(ctx context.Context, r *http.Request) context.Context {\n    for k, v := range map[ContextKey]string{\n        RequestIDLogContextKey: r.Header.Get("X-Request-Id"),\n    } {\n        ctx = context.WithValue(ctx, k, v)\n    }\n    return ctx\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package example\n\nimport (\n  "github.com/example/app/pkg/controller"\n  "github.com/example/app/pkg/swipe/swipegokit"\n)\n\nfunc swipe() {\n    swipegokit.Gokit(\n        swipegokit.Interface((*controller.ExampleController)(nil), "example"),\n        \n        swipegokit.HTTPServer(),\n        \n        swipegokit.MethodOptions(controller.ExampleController.Get,          \n            swipegokit.LoggingContext(log.RequestIDLogContextKey, "requestID"),\n        ),\n    )\n}\n')),(0,i.kt)("h3",{id:"\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u043e\u0448\u0438\u0431\u043a\u0438"},"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438"),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443, \u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0443 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435.\n\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"interface{ LogError() error }")," \u0434\u043b\u044f \u0442\u0438\u043f\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"error"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"package example\n\ntype SomeError struct {\n    Err error\n    Message string\n}\n\nfunc (e *SomeError) LogError() error {\n  return e.Err\n}\n\nfunc (e *SomeError) Error() string {\n    return e.Message\n}\n\nfunc (e *SomeError) StatusCode() int {\n    return 400\n}\n")),(0,i.kt)("p",null,"\u0411\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043f\u0440\u043e ",(0,i.kt)("a",{parentName:"p",href:"/docs/error_in_docs"},"\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438")," "),(0,i.kt)("h2",{id:"\u043c\u0435\u0442\u0440\u0438\u043a\u0438"},"\u041c\u0435\u0442\u0440\u0438\u043a\u0438"),(0,i.kt)("p",null,"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0431\u043e\u0440\u0430 \u043c\u0435\u0442\u0440\u0438\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ",(0,i.kt)("a",{parentName:"p",href:"http://prometheus.io/"},"Prometheus")," "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0441\u0431\u043e\u0440 \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0445/\u043d\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043c\u0435\u0442\u043e\u0434\u0430.  "))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package example\n\nimport (\n  "github.com/example/app/pkg/controller"\n  "github.com/example/app/pkg/swipe/swipegokit"\n)\n\nfunc swipe() {\n    swipegokit.Gokit(\n        Interface((*controller.ExampleController)(nil), "example"),\n        \n        HTTPServer(),\n        \n        MethodDefaultOptions(           \n            Instrumenting(true),\n        ),\n    )\n}\n')))}u.isMDXComponent=!0}}]);