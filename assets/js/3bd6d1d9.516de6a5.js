"use strict";(self.webpackChunkfour=self.webpackChunkfour||[]).push([[977],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=i,m=f["".concat(a,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,u=new Array(o);u[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,u[1]=c;for(var l=2;l<o;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},33:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),u=["components"],c={title:"Unix File Structure"},a=void 0,l={unversionedId:"os/unix/File Structure",id:"os/unix/File Structure",title:"Unix File Structure",description:"The UNIX file structure is like an inverted tree and arranged in a hierarchical structure.",source:"@site/docs/os/unix/02-File Structure.mdx",sourceDirName:"os/unix",slug:"/os/unix/File Structure",permalink:"/os/unix/File Structure",editUrl:"https://github.com/The-Programming-Foundation/tutorials/docs/os/unix/02-File Structure.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Unix File Structure"},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/os/unix/Structure"},next:{title:"Unix Shell",permalink:"/os/unix/Shell"}},s=[],p={toc:s};function f(e){var t=e.components,c=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The UNIX file structure is like an inverted tree and arranged in a hierarchical structure."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The top-level of the directory is the root ",(0,o.kt)("strong",{parentName:"li"},"/"),". Root connects the path to other files and directories"),(0,o.kt)("li",{parentName:"ul"},"Each directory has a unique name. Each of them contains different kinds of files and directories")),(0,o.kt)("p",null,"This is what the Unix file structure looks like:\n",(0,o.kt)("img",{alt:"File structure",src:r(4441).Z,width:"1000",height:"420"})))}f.isMDXComponent=!0},4441:function(e,t,r){t.Z=r.p+"assets/images/structure-4f96bc5b7d9915a1c843931c9668cb3c.png"}}]);