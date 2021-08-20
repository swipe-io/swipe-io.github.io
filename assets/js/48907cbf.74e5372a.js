(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4709],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),s=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=s(t),m=r,k=g["".concat(o,".").concat(m)]||g[m]||u[m]||a;return t?i.createElement(k,l(l({ref:n},c),{},{components:t})):i.createElement(k,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=g;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4500:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return g}});var i=t(2122),r=t(9756),a=(t(7294),t(3905)),l=["components"],p={id:"migrate",title:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f v2 -> v3",sidebar_label:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f v2 \u0432 v3"},o=void 0,s={unversionedId:"migrate",id:"version-3.0.0/migrate",isDocsHomePage:!1,title:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f v2 -> v3",description:"CLI",source:"@site/versioned_docs/version-3.0.0/migrate.md",sourceDirName:".",slug:"/migrate",permalink:"/docs/migrate",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-3.0.0/migrate.md",version:"3.0.0",frontMatter:{id:"migrate",title:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f v2 -> v3",sidebar_label:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f v2 \u0432 v3"},sidebar:"version-3.0.0/someSidebar",previous:{title:"\u041e\u0448\u0438\u0431\u043a\u0438 API",permalink:"/docs/errors"},next:{title:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a",permalink:"/docs/config"}},c=[{value:"CLI",id:"cli",children:[{value:"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043e\u043f\u0446\u0438\u0439 swipe",id:"\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u043e\u043f\u0446\u0438\u0439-swipe",children:[]}]},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438",children:[]},{value:"\u0424\u0430\u0439\u043b\u044b \u043e\u043f\u0446\u0438\u0439",id:"\u0444\u0430\u0439\u043b\u044b-\u043e\u043f\u0446\u0438\u0439",children:[]},{value:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f HTTP \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430",id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-http-\u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430",children:[]},{value:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a",id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-\u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a\u0430-\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a",children:[]},{value:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0438\u043c\u0435\u043d\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430",id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-\u0438\u043c\u0435\u043d\u0438-\u043a\u043b\u0438\u0435\u043d\u0442\u0430",children:[]},{value:"\u0418\u043c\u0435\u043d\u0430 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432",id:"\u0438\u043c\u0435\u043d\u0430-\u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445-\u0444\u0430\u0439\u043b\u043e\u0432",children:[]}],u={toc:c};function g(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cli"},"CLI"),(0,a.kt)("h3",{id:"\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u043e\u043f\u0446\u0438\u0439-swipe"},"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043e\u043f\u0446\u0438\u0439 swipe"),(0,a.kt)("p",null,"v2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"swipe gen --init\n")),(0,a.kt)("p",null,"v3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"swipe init\n")),(0,a.kt)("h2",{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438"},"\u0417\u0430\u043f\u0443\u0441\u043a \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438"),(0,a.kt)("p",null,"v2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"swipe gen ./pkg/...\n")),(0,a.kt)("p",null,"\u0438\u043b\u0438"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"swipe ./pkg/...\n")),(0,a.kt)("p",null,"v3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"swipe gen ./pkg/...\n")),(0,a.kt)("h2",{id:"\u0444\u0430\u0439\u043b\u044b-\u043e\u043f\u0446\u0438\u0439"},"\u0424\u0430\u0439\u043b\u044b \u043e\u043f\u0446\u0438\u0439"),(0,a.kt)("p",null,"\u0424\u0430\u0439\u043b\u044b \u043e\u043f\u0446\u0438\u0438 \u043f\u043e-\u043f\u0440\u0435\u0436\u043d\u0435\u043c\u0443 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 pkg/swipe, \u043d\u043e \u0432 v3\n\u043f\u043e\u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0435\u0449\u0435 \u043f\u043e\u0434\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438, \u0441\u0435\u0439\u0447\u0430\u0441 \u044d\u0442\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"swipegokit")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"swipeconfig"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"swipegokit")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"swipeconfig")," \u044d\u0442\u043e \u043f\u043b\u0430\u0433\u0438\u043d\u044b Swipe."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"swipegokit")," - \u043f\u043b\u0430\u0433\u0438\u043d \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c GoKit."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"swipeconfig")," - \u043f\u043b\u0430\u0433\u0438\u043d \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0438\u0437 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u044b.")),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u043c\u043f\u043e\u0440\u0442 \u0444\u0430\u0439\u043b\u0430 \u0441 \u043e\u043f\u0446\u0438\u044f\u043c\u0438 \u0431\u044b\u043b ",(0,a.kt)("inlineCode",{parentName:"p"},"yourepo/repo/name/pkg/swipe"),"\n\u0442\u043e \u0442\u0435\u043f\u0435\u0440\u044c \u043e\u043d \u0442\u0430\u043a\u043e\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"yourepo/repo/name/pkg/swipe/swipegokit")," \u0438\u043b\u0438\n",(0,a.kt)("inlineCode",{parentName:"p"},"yourepo/repo/name/pkg/swipe/swipegokit")),(0,a.kt)("h2",{id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-http-\u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430"},"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f HTTP \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430"),(0,a.kt)("p",null,"v2 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'//+build swipe\n\npackage transport\n\nimport (\n    "github.com/examples/example/pkg/interface/controller"\n    "github.com/examples/example/pkg/swipe"\n)\n\nfunc swipe() {\n    swipe.Build(\n        swipe.Service(\n            swipe.HTTPServer(),\n            swipe.JSONRPCEnable(),\n            swipe.ClientsEnable([]string{"js"}),\n    \n            swipe.Interface((*controller.UserControllerIface)(nil), "user", swipegokit.ClientName("user")),\n            swipe.Interface((*controller.TaskControllerIface)(nil), "task", swipegokit.ClientName("task")),\n    \n            swipe.MethodDefaultOptions(\n                swipe.Logging(true),\n                swipe.Instrumenting(true),\n            ),\n        ),          \n    )\n}\n')),(0,a.kt)("p",null,"v3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'//+build swipe\n\npackage transport\n\nimport (\n    "github.com/examples/example/pkg/interface/controller"\n    "github.com/examples/example/pkg/swipe/swipegokit"\n)\n\nfunc swipe() {\n    swipegokit.Gokit(\n        swipegokit.HTTPServer(),\n        swipegokit.JSONRPCEnable(),\n        swipegokit.ClientsEnable([]string{"js"}),\n\n        swipegokit.Interface((*controller.UserControllerIface)(nil), "user", swipegokit.ClientName("user")),\n        swipegokit.Interface((*controller.TaskControllerIface)(nil), "task", swipegokit.ClientName("task")),\n\n        swipegokit.MethodDefaultOptions(\n            swipegokit.Logging(true),\n            swipegokit.Instrumenting(true),\n        ),\n    )\n}\n')),(0,a.kt)("h2",{id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-\u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a\u0430-\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"},"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"),(0,a.kt)("p",null,"v2 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// +build swipe\n\npackage example\n\nimport (\n  . "github.com/swipe-io/swipe/v2"\n)\n\nfunc Swipe() {\n    swipe.Build(\n        ConfigEnv(&Config{}),\n    )\n}\n')),(0,a.kt)("p",null,"v3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// +build swipe\n\npackage config\n\nimport "gitlab.com/example/example/pkg/swipe/swipeconfig"\n\nfunc swipe() {\n    swipeconfig.Config(\n        swipeconfig.Environment(\n            &Config{},\n        ),\n    )\n}\n')),(0,a.kt)("h2",{id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-\u0438\u043c\u0435\u043d\u0438-\u043a\u043b\u0438\u0435\u043d\u0442\u0430"},"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0438\u043c\u0435\u043d\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430"),(0,a.kt)("p",null,"\u0412 v3 \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u043e\u0441\u044c \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0438\u043c\u0435\u043d \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432,\n\u0442\u0435\u043f\u0435\u0440\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ns \u0432 \u043e\u043f\u0446\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"Interface")," \u043d\u0435 \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0438\u043c\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430,\n\u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0430\u0434\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u043f\u0446\u0438\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientName"),"."),(0,a.kt)("h2",{id:"\u0438\u043c\u0435\u043d\u0430-\u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445-\u0444\u0430\u0439\u043b\u043e\u0432"},"\u0418\u043c\u0435\u043d\u0430 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432"),(0,a.kt)("p",null,"\u0418\u0437\u043c\u0435\u043d\u0438\u043b\u0438\u0441\u044c \u0438\u043c\u0435\u043d\u0430 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432, \u043f\u043e\u044d\u0442\u043e\u043c\u0443\n\u043b\u0443\u0447\u0448\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u0430\u0440\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0441 ",(0,a.kt)("inlineCode",{parentName:"p"},"_gen"),"."))}g.isMDXComponent=!0}}]);