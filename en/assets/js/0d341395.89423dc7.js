(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5537],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=s(n),g=i,k=m["".concat(p,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2589:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),l=["components"],a={id:"installation",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",sidebar_label:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},p=void 0,s={unversionedId:"installation",id:"version-3.0.0/installation",isDocsHomePage:!1,title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",description:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u0443\u044e \u0443\u0442\u0438\u043b\u0438\u0442\u0443 Swipe:",source:"@site/versioned_docs/version-3.0.0/installation.md",sourceDirName:".",slug:"/installation",permalink:"/en/docs/installation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-3.0.0/installation.md",version:"3.0.0",frontMatter:{id:"installation",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",sidebar_label:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},sidebar:"version-3.0.0/someSidebar",next:{title:"REST API",permalink:"/en/docs/rest"}},c=[],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u0443\u044e \u0443\u0442\u0438\u043b\u0438\u0442\u0443 Swipe:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone -b v3 git@github.com:swipe-io/swipe.git\ncd swipe/v3 && make\n")),(0,o.kt)("p",null,"Swipe \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0432\u0435\u0440\u0441\u0438\u044f Go \u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/Modules"},"Golang Modules"),".\n\u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c Go:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"go mod init github.com/my/repo\n")),(0,o.kt)("p",null,"\u0423\u0442\u0438\u043b\u0438\u0442\u0430 swipe \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043a\u043e\u0434 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043f\u043b\u0430\u0433\u0438\u043d\u043e\u0432 \u0443 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0435\u0441\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043f\u0430\u0442\u0435\u0440\u043d\u0430",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"options as func"),"."),(0,o.kt)("p",null,"\u0423 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u043b\u0430\u0433\u0438\u043d\u0430 \u0441\u0432\u043e\u0439 \u043d\u0430\u0431\u043e\u0440 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a."),(0,o.kt)("p",null,"\u041f\u0435\u0440\u0435\u0434 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043d\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0430\u0439\u0434\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a, \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0430\u0434\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"swipe3 init\n")),(0,o.kt)("p",null,"Swipe \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0444\u0430\u0439\u043b\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0432 \u043f\u0430\u043a\u0435\u0442 ",(0,o.kt)("inlineCode",{parentName:"p"},"<package>/pkg/swipe"),"."),(0,o.kt)("p",null,"\u0414\u043b\u044f \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043b .go."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0442\u0435\u0433 \u0441\u0431\u043e\u0440\u043a\u0438 ",(0,o.kt)("inlineCode",{parentName:"li"},"// +build swipe"),", \u0447\u0442\u043e\u0431\u044b Golang \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u043b \u0444\u0430\u0439\u043b \u043a\u043e\u0433\u0434\u0430 \u0432\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c \u0432\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435."),(0,o.kt)("li",{parentName:"ul"},"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0441 \u043b\u044e\u0431\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0435 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u043e\u0435 \u0438\u043c\u044f"),(0,o.kt)("li",{parentName:"ul"},"\u0412 \u0442\u0435\u043b\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0432\u044b\u0437\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043b\u0430\u0433\u0438\u043d\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,o.kt)("inlineCode",{parentName:"li"},"swipegokit.Gokit(opts ...GokitOption)"),". ")),(0,o.kt)("p",null,"\u041d\u0438\u0436\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 JSON RPC \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430:"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'//+build swipe\n\npackage transport\n\nimport (\n    "github.com/examples/example/pkg/interface/controller"\n    "github.com/examples/example/pkg/swipe/swipegokit"\n)\n\nfunc swipe() {\n    swipegokit.Gokit(\n        swipegokit.HTTPServer(),\n        swipegokit.JSONRPCEnable(),\n        swipegokit.ClientsEnable([]string{"js"}),\n\n        swipegokit.Interface((*controller.UserControllerIface)(nil), "user", swipegokit.ClientName("user")),\n        swipegokit.Interface((*controller.TaskControllerIface)(nil), "task", swipegokit.ClientName("task")),\n\n        swipegokit.MethodDefaultOptions(\n            swipegokit.Logging(true),\n            swipegokit.Instrumenting(true),\n        ),\n    )\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0434, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"swipe3 gen ./pkg/...\n")))}m.isMDXComponent=!0}}]);