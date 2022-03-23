"use strict";(self.webpackChunkbirt_website=self.webpackChunkbirt_website||[]).push([[6968],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(r),d=o,w=h["".concat(l,".").concat(d)]||h[d]||c[d]||a;return r?n.createElement(w,i(i({ref:t},u),{},{components:r})):n.createElement(w,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},826:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"t_testing-reports",title:"Testing Reports",sidebar_label:"Testing Reports"},l=void 0,p={unversionedId:"t_testing-reports",id:"t_testing-reports",title:"Testing Reports",description:"We're now ready to test the report layout. We verified the data set earlier, so now we want to verify that the report is presenting the data as we expect.",source:"@site/docs/t_testing-reports.md",sourceDirName:".",slug:"/t_testing-reports",permalink:"/birt-website/docs/t_testing-reports",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/t_testing-reports.md",tags:[],version:"current",frontMatter:{id:"t_testing-reports",title:"Testing Reports",sidebar_label:"Testing Reports"},sidebar:"someSidebar",previous:{title:"Tables",permalink:"/birt-website/docs/t_tables"},next:{title:"Text Item",permalink:"/birt-website/docs/t_text-item"}},u=[{value:"Preview as HTML",id:"preview-as-html",children:[],level:2},{value:"Preview as PDF",id:"preview-as-pdf",children:[],level:2}],c={toc:u};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We're now ready to test the report layout. We verified the data set earlier, so now we want to verify that the report is presenting the data as we expect."),(0,a.kt)("p",null,"We preview the report by clicking on the Preview tab in the lower left corner of the report editor. This report has no parameters, but if it did, they could be modified by selecting the Show Report Parameters button."),(0,a.kt)("p",null,"The window that appears is an embedded web browser, which displays the report in HTML format. The report appears as a single page. This works best for smaller data sets. Since the sample database has quite a bit of data, we used a WHERE clause to limit the results. We could also use a report parameter or a data set filter to limit the amount of data displayed at any one time."),(0,a.kt)("p",null,"There are a number of ways we can improve the report's appearance:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add a title to the top of the report.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add some color to enhance the column headings.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Shrink the size of the city and state columns.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add some color to make the state and city group headers stand out.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Format the phone numbers.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Sort customers by name."))),(0,a.kt)("p",null,"Before we apply these aesthetic enhancements, let's look at other ways to preview the report."),(0,a.kt)("h2",{id:"preview-as-html"},"Preview as HTML"),(0,a.kt)("p",null,"The Preview tab is handy for a quick review of your report. BIRT runs the report each time you switch to Preview. However, you can have either the Layout or the Preview tab open, but not both."),(0,a.kt)("p",null,"Instead, we can preview the report in a separate window. Find the Preview button in the toolbar. Use the little arrow next to it to open the pull-down. You can then Preview as HTML in a separate window. This allows you to switch back and forth between your layout editor and your preview without rerunning the report.\nPreview in Web Viewer"),(0,a.kt)("p",null,"This option is similar to the one above. It allows the report to be previewed as HTML in a separate browser window using the BIRT Web Viewer. The viewer provides powerful navigation capabilities such as TOC, Previous Page, Next Page, Goto Page as well as search and export capabilities."),(0,a.kt)("p",null,"To preview the report in the Web Viewer use the toolbar Preview button and select the Web Viewer option or alternatively invoke File->Preview in Web Viewer."),(0,a.kt)("h2",{id:"preview-as-pdf"},"Preview as PDF"),(0,a.kt)("p",null,"You can also choose Preview as PDF. This converts the layout to a multi-page PDF format."))}h.isMDXComponent=!0}}]);