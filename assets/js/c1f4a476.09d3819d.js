"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[868],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u[p]="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7456:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:3},a="Running",u={unversionedId:"run",id:"run",title:"Running",description:"Sound Card Check and Configuration Before Running",source:"@site/docs/run.md",sourceDirName:".",slug:"/run",permalink:"/joi-doc/docs/run",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/run.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/joi-doc/docs/config"},next:{title:"Exit",permalink:"/joi-doc/docs/kill"}},c={},l=[{value:"Sound Card Check and Configuration Before Running",id:"sound-card-check-and-configuration-before-running",level:2},{value:"Running joi-ai",id:"running-joi-ai",level:2},{value:"Management Interface",id:"management-interface",level:2},{value:"Running in the Background",id:"running-in-the-background",level:2}],s={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"running"},"Running"),(0,i.kt)("h2",{id:"sound-card-check-and-configuration-before-running"},"Sound Card Check and Configuration Before Running"),(0,i.kt)("p",null,"Please make sure the microphone and speaker are correctly configured before starting joi-ai."),(0,i.kt)("h2",{id:"running-joi-ai"},"Running joi-ai"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd to the directory where joi-ai is located\npython3 joi.py\n")),(0,i.kt)("p",null,"The first time you start it, you will be prompted whether to create a configuration file in your user directory. Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," to proceed."),(0,i.kt)("p",null,'Then, wake up joi for interaction by using the wake-up word "snowboy" (this wake-up word can be customized to improve wake-up success rate and accuracy).'),(0,i.kt)("h2",{id:"management-interface"},"Management Interface"),(0,i.kt)("p",null,"By default, joi-ai will also start a backend management interface during runtime, which provides capabilities such as remote conversation, viewing and modifying configurations, and viewing logs."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default URL: http://localhost:5001"),(0,i.kt)("li",{parentName:"ul"},"Default username: joi"),(0,i.kt)("li",{parentName:"ul"},"Default password: joi@2049")),(0,i.kt)("p",null,"It is recommended to change the username and password when using it in production to avoid privacy leaks."),(0,i.kt)("h2",{id:"running-in-the-background"},"Running in the Background"),(0,i.kt)("p",null,"If you directly start joi-ai in the terminal and close the terminal, the joi-ai process may terminate."),(0,i.kt)("p",null,"To keep joi-ai running in the background, you can use ",(0,i.kt)("a",{parentName:"p",href:"http://blog.jobbole.com/87278/"},"tmux")," or supervisor to run it."))}d.isMDXComponent=!0}}]);