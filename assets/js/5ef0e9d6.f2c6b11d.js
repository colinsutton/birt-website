"use strict";(self.webpackChunkbirt_website=self.webpackChunkbirt_website||[]).push([[9880],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(r),f=i,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5330:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],u={id:"community",title:"Community",sidebar_label:"Community"},s=void 0,l={unversionedId:"community",id:"community",isDocsHomePage:!1,title:"Community",description:"Mail List",source:"@site/docs/community.md",sourceDirName:".",slug:"/community",permalink:"/birt-website/docs/community",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/community.md",tags:[],version:"current",frontMatter:{id:"community",title:"Community",sidebar_label:"Community"},sidebar:"someSidebar",previous:{title:"My first Report",permalink:"/birt-website/docs/my-first-report"},next:{title:"Brief Editor Tour",permalink:"/birt-website/docs/t_brief-editor-tour"}},c=[{value:"Mail List",id:"mail-list",children:[],level:2},{value:"GitHub Issues",id:"github-issues",children:[],level:2}],p={toc:c};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"mail-list"},"Mail List"),(0,o.kt)("p",null,"While the Working Group is for people who use BIRT, the mailing list is for those who help develop BIRT."),(0,o.kt)("h2",{id:"github-issues"},"GitHub Issues"),(0,o.kt)("p",null,"BIRT uses GitHub issues to track bugs and enhancement requests."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/join"},"Join GitHub"))," - Create a GitHub account.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://accounts.eclipse.org/user/register"},"Join Eclipse"))," - If you want to help coding: create an Eclipse account and associate your GitHub user.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/eclipse/birt/issues"},"Report a Bug or Enhancement"))," - When reporting a bug, please give the exact steps to reproduce the problem. Please explain what went wrong, and what you expected to happen. For an enhancement, please explain how you'd use the new feature."))),(0,o.kt)("div",{class:"alert alert--warning",role:"alert"},"BIRT bugs are often associated with a report design. Please attach your design to your Bugzilla entry."),(0,o.kt)("p",null,'If you encounter a problem such as "An error occurred", or failure to open views or editors, please attach your Eclipse log file. To see the exception, use Window -> Show View -> Other. Open the PDE Runtime group and choose Error Log. Within the error log window, find the BIRT exception (if any) that just occurred. Double click on the error in question and you\'ll see a stack trace. Paste that into your bug report, preferably as a file attachment.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://bugs.eclipse.org/bugs/query.cgi?product=BIRT"},"Search Old Bugs"))," - Find BIRT-related bugs using the Bugzilla search facility.")))}m.isMDXComponent=!0}}]);