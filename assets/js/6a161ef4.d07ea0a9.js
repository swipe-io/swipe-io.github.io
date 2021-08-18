(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3360],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,y=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},694:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],p={id:"gateway",title:"Gateway",sidebar_label:"Gateway"},l=void 0,c={unversionedId:"gateway",id:"version-3.0.0/gateway",isDocsHomePage:!1,title:"Gateway",description:"Swipe \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 Gateway.",source:"@site/versioned_docs/version-3.0.0/gateway.md",sourceDirName:".",slug:"/gateway",permalink:"/docs/gateway",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-3.0.0/gateway.md",version:"3.0.0",frontMatter:{id:"gateway",title:"Gateway",sidebar_label:"Gateway"}},u=[],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Swipe \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 Gateway."),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u0443\u043a\u0430\u0437\u0430\u0442\u044c swipe, \u0447\u0442\u043e \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\n\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c gateway \u043d\u0430\u0434\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u043f\u0446\u0438\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"Gateway")," \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"Interface")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package example\n\nimport (\n  "github.com/example/app/pkg/controller"\n  "github.com/example/app/pkg/swipe/swipegokit"\n)\n\nfunc swipe() {\n    swipegokit.Gokit(\n        swipegokit.Interface(\n            (*controller.ExampleController)(nil), \n            "example",\n            swipegokit.Gateway(),\n        ),\n        \n        swipegokit.HTTPServer(),\n        \n        swipegokit.JSONRPCEnable(),\n        swipegokit.JSONRPCPath("/rpc"),\n    )\n}\n')),(0,i.kt)("p",null,"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 swipe \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u0443\u044e \u0447\u0430\u0441\u0442\u044c\n\u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, \u043d\u043e \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438\n\u043d\u0443\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/go-kit/kit/sd"\n\ntype ExampleOption struct {\n    Instancer          sd.Instancer\n    Factory            func(string) (ExampleInterface, error)\n    Create             EndpointOption\n}\n\ntype EndpointOption struct {\n    Balancer     BalancerFactory\n    RetryMax     int\n    RetryTimeout time.Duration\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Instancer")," - \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0438\u0437 \u043f\u0430\u043a\u0435\u0442\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"github.com/go-kit/kit/sd"),",\n\u0435\u0441\u043b\u0438 \u043d\u0435 \u043d\u0443\u0436\u043d\u0430 \u043d\u0438 \u043a\u0430\u043a\u0430\u044f \u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u043a\u0430 \u0442\u043e \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\n",(0,i.kt)("inlineCode",{parentName:"p"},"sd.FixedInstancer"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Factory")," - \u0444\u0430\u0431\u0440\u0438\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430,\n\u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u044d\u0442\u043e ",(0,i.kt)("inlineCode",{parentName:"p"},"ExampleInterface")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Create")," - \u043e\u043f\u0446\u0438\u0438 \u0434\u043b\u044f \u043c\u0435\u0442\u043e\u0434\u0430"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Balancer")," - \u0442\u0438\u043f \u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u043a\u0438 \u0435\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f\n\u043d\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"sd.FixedInstancer"),", \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,i.kt)("inlineCode",{parentName:"li"},"github.com/go-kit/kit/sd/lb.NewRoundRobin"),"     "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RetryMax")," - \u043a\u043e\u043b-\u0432\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043f\u0440\u0438 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0438 \u043e\u0448\u0438\u0431\u043a\u0438"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RetryTimeout")," - \u0442\u0430\u0439\u043c\u0430\u0443\u0442 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430")))))}m.isMDXComponent=!0}}]);