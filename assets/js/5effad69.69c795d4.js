"use strict";(self.webpackChunkbirt_website=self.webpackChunkbirt_website||[]).push([[6051],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return m}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(i),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return i?r.createElement(f,a(a({ref:t},p),{},{components:i})):r.createElement(f,a({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=i[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},1927:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=i(7462),n=i(3366),o=(i(7294),i(3905)),a=["components"],s={id:"overview-extensibility",title:"Extensibility",sidebar_label:"Extensibility"},c=void 0,l={unversionedId:"overview-extensibility",id:"overview-extensibility",title:"Extensibility",description:"Extensibility",source:"@site/docs/overview-extensibility.md",sourceDirName:".",slug:"/overview-extensibility",permalink:"/birt-website/docs/overview-extensibility",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/overview-extensibility.md",tags:[],version:"current",frontMatter:{id:"overview-extensibility",title:"Extensibility",sidebar_label:"Extensibility"},sidebar:"someSidebar",previous:{title:"Customization",permalink:"/birt-website/docs/overview-customization"},next:{title:"Contributors",permalink:"/birt-website/docs/contributors"}},p=[{value:"Extensibility",id:"extensibility",children:[],level:2},{value:"Data Access",id:"data-access",children:[],level:2},{value:"Report Items",id:"report-items",children:[],level:2},{value:"Chart Types",id:"chart-types",children:[],level:2},{value:"Output Formats",id:"output-formats",children:[],level:2}],u={toc:p};function d(e){var t=e.components,s=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"extensibility"},"Extensibility"),(0,o.kt)("p",null,"The spectrum of reporting applications is enormous, and the BIRT team can never provide every feature needed by every application. BIRT's scripting support is one way to extend BIRT. Another is to create BIRT extensions that plug into BIRT. The project provides many extension points that can be used to extend BIRT. Some of the more common ones are listed below."),(0,o.kt)("h2",{id:"data-access"},"Data Access"),(0,o.kt)("p",null,"BIRT uses the Data Tools Open Data Access (ODA) framework for adding custom data access methods. Data access extensions include a runtime component for getting the data. They can also include custom design-time UI for building a custom query. For example, a packaged application vendor can use ODA to build data access UI that works with the vendor's own data model."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:i(9718).Z,width:"623",height:"470"})),(0,o.kt)("h2",{id:"report-items"},"Report Items"),(0,o.kt)("p",null,"BIRT provides a solid set of report items for presenting data. Applications that have specific needs can create additional report items that work within the designer and engine just like BIRT's own report items. For example, a performance management application might add report items that display stop lights, gauges and other visual indications of performance metrics."),(0,o.kt)("h2",{id:"chart-types"},"Chart Types"),(0,o.kt)("p",null,"The BIRT chart package provides a wide variety of chart types. However, some industries have developed very specific chart formats. Developers can create chart plug-ins that add these chart types into the BIRT charting engine."),(0,o.kt)("h2",{id:"output-formats"},"Output Formats"),(0,o.kt)("p",null,"BIRT provides output in HTML, Paginated HTML, PDF, XLS, DOC, PPT, ODS, ODP, ODT, and Postscript. Many other types of output are possible: ERich Text Format (RTF), Scalable Vector Graphic (SVG), images, and more. While BIRT will add some of these over time, others may have a more limited audience. Developers can use BIRT engine interfaces to add additional converters, including those specific to a given application."))}d.isMDXComponent=!0},9718:function(e,t,i){t.Z=i.p+"assets/images/BIRT-Image-04-3cce86d7c42f5580b53e2d3aaf734562.png"}}]);