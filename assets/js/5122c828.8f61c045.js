"use strict";(self.webpackChunkbirt_website=self.webpackChunkbirt_website||[]).push([[2746],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),h=i,f=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return r?o.createElement(f,n(n({ref:t},p),{},{components:r})):o.createElement(f,n({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var u=2;u<a;u++)n[u]=r[u];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7528:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var o=r(7462),i=r(3366),a=(r(7294),r(3905)),n=["components"],l={id:"t_brief-editor-tour",title:"Brief Editor Tour",sidebar_label:"Brief Editor Tour"},s=void 0,u={unversionedId:"t_brief-editor-tour",id:"t_brief-editor-tour",title:"Brief Editor Tour",description:"Before we start work on the report, let's take a quick tour of the UI. We'll be looking at most of the UI in detail as we build our report.",source:"@site/docs/t_brief-editor-tour.md",sourceDirName:".",slug:"/t_brief-editor-tour",permalink:"/birt-website/docs/t_brief-editor-tour",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/t_brief-editor-tour.md",tags:[],version:"current",frontMatter:{id:"t_brief-editor-tour",title:"Brief Editor Tour",sidebar_label:"Brief Editor Tour"},sidebar:"someSidebar",previous:{title:"Community",permalink:"/birt-website/docs/community"},next:{title:"Grids",permalink:"/birt-website/docs/t_grids"}},p=[{value:"Cheat Sheets",id:"cheat-sheets",children:[],level:2},{value:"Layout Editor",id:"layout-editor",children:[],level:2},{value:"Views",id:"views",children:[],level:2},{value:"Displaying Views",id:"displaying-views",children:[],level:2}],c={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,n);return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before we start work on the report, let's take a quick tour of the UI. We'll be looking at most of the UI in detail as we build our report."),(0,a.kt)("h2",{id:"cheat-sheets"},"Cheat Sheets"),(0,a.kt)("p",null,'Notice at the right of your Eclipse workspace (for the default configuration) is a view called "Cheat Sheets." This view walks you though the process of building a report based on the template you selected.'),(0,a.kt)("p",null,"For now, let's go ahead and close that view by clicking on the X (close) button in the upper left corner of the view, since we'll be following the steps in this tutorial."),(0,a.kt)("h2",{id:"layout-editor"},"Layout Editor"),(0,a.kt)("p",null,"The central area is the Layout Editor. This is the place where you create your report design. The editor has five tabs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Layout - Where you edit your report design.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Preview - Runs your report and shows the output.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Script - Where you add JavaScript to your report to customize its behavior.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"XML Source - You can view and modify the XML source of a report from here.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Master Page - Used to format page data such as page headers."))),(0,a.kt)("h2",{id:"views"},"Views"),(0,a.kt)("p",null,"Around the editor are a number of views: The views below can be arranged to the left, right or bottom of the Layout Editor"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Palette - BIRT View that shows the standard report items you can add to your report using drag & drop.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Outline - BIRT View that shows the structure of your report as a tree view.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Navigator - Standard Eclipse view that shows your projects, and the reports within your projects.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Data Explorer - BIRT View that shows your data sources (connections), data sets (queries) and report parameters. You also use this view to add data set columns to your report layout.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Property Editor - BIRT View that displays properties for many report items. It has tabs and groupings that organize properties into categories.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Properties View - Standard Eclipse view that shows all properties for a report item as a simple list. This view is optional, and we will not use it in this tutorial.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Library Explorer View - BIRT allows the reuse of report objects, such as tables, data sources and styles. Objects created for reuse are stored in a library file. The Library Explorer will display Libraries that exist in the resource folder. Developed libraries can be added to the resource folder by selecting File->Publish Library to Resource Folder or by right clicking in Library Explorer and selecting add. The resource folder location can be configured at Window->Preferences->Report Design->Resource."))),(0,a.kt)("h2",{id:"displaying-views"},"Displaying Views"),(0,a.kt)("p",null,'You can arrange your views any way you like. You can also hide them by clicking the "X" button next to the view tab. If you accidentally hide a view, you can display it again by using the Window->Show View menu item.'),(0,a.kt)("p",null,"Many people find that a convenient layout is to have the Palette, Navigator, Outline and Data Explorer docked at the left edge of your workspace, and the Property Editor and Properties view docked at the bottom of the workspace."))}d.isMDXComponent=!0}}]);