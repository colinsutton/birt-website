"use strict";(self.webpackChunkbirt_website=self.webpackChunkbirt_website||[]).push([[2947],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5503:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"create-a-report",title:"Create a Report",sidebar_label:"Create a Report"},p=void 0,s={unversionedId:"create-a-report",id:"create-a-report",isDocsHomePage:!1,title:"Create a Report",description:"Create a Project",source:"@site/docs/create-a-report.md",sourceDirName:".",slug:"/create-a-report",permalink:"/birt-website/docs/create-a-report",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/create-a-report.md",tags:[],version:"current",frontMatter:{id:"create-a-report",title:"Create a Report",sidebar_label:"Create a Report"},sidebar:"someSidebar",previous:{title:"Installation",permalink:"/birt-website/docs/installation"},next:{title:"My first Report",permalink:"/birt-website/docs/my-first-report"}},c=[{value:"Create a Project",id:"create-a-project",children:[],level:2},{value:"Create a Report",id:"create-a-report",children:[],level:2},{value:"Choose a Template",id:"choose-a-template",children:[],level:2}],u={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-a-project"},"Create a Project"),(0,o.kt)("p",null,'Eclipse uses projects to organize your files. So, the first step is to create a new project. For this demo, let\'s create a project called "My Reports":'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Choose File->New->Project. The new project dialog appears.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Open the "Business Intelligence and Reporting Tools" group and choose "Report Project".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click Next.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Type "My Reports" (without the quotes) as the project name.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click Finish.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click OK if asked to switch to the Report Design perspective. (This occurs if you create a BIRT project while in a perspective other than Report Design.)"))),(0,o.kt)("h2",{id:"create-a-report"},"Create a Report"),(0,o.kt)("p",null,"We're now ready to create our first report:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Choose File->New->Report. The new report dialog appears.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the tree view, choose the project we just created: My Reports.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter the following in the file name field: Customers.rptdesign.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click Next."))),(0,o.kt)("p",null,"You can create a report in three ways: as a blank report, by using a BIRT-defined template, or by copying one of your report designs. In this tutorial we will use a Template descibed in the next section."),(0,o.kt)("h2",{id:"choose-a-template"},"Choose a Template"),(0,o.kt)("p",null,"The next page of the New Report dialog presents a selection of report templates. Before we choose the one we want, let's walk though what's available."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"My First Report - Starts a report template that takes you through a tutorial using on-line help. (That tutorial will eventually replace this one.)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Blank Report - Creates a blank report with no predefined content.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Simple Listing - A tabular listing with no grouping.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Grouped Listing - A tabular listing with grouping. Grouping shows repeated values just once. Grouping also allows you to create subtotals.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Dual Column Listing - Produces a listing with two columns side-by-side.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Chart & Listing - A tabular listing that adds a chart to the top of the report.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Dual Column Chart & Listing - Combines charts and tables so you can display two sets of related data in a single report.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Side by Side Chart & Listing - Creates a grouped report where each group contains a chart and a listing side by side."))),(0,o.kt)("p",null,"We're now ready to choose our template:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the Grouped Listing.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click Finish."))),(0,o.kt)("p",null,"BIRT opens your new report in the Eclipse workspace."))}m.isMDXComponent=!0}}]);