"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2},o="Configuration",l={unversionedId:"config",id:"config",title:"Configuration",description:"After the initial execution of Joi, the system will generate a config.yml configuration file for you in the ~/.joi directory.",source:"@site/docs/config.md",sourceDirName:".",slug:"/config",permalink:"/joi-doc/en/docs/config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/joi-doc/en/docs/install"},next:{title:"Running",permalink:"/joi-doc/en/docs/run"}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"After the initial execution of Joi, the system will generate a config.yml configuration file for you in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.joi")," directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python3 joi.py\n")),(0,i.kt)("p",null,"There are several items in this configuration file that are required to be properly configured for joi-ai to function correctly."),(0,i.kt)("p",null,"A few tips:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It is not recommended to directly modify the contents of default.yml, as it may cause issues when updating through ",(0,i.kt)("inlineCode",{parentName:"p"},"git pull"),". Instead, you should make a copy and place it in ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.joi/config.yml"),"."),(0,i.kt)("p",{parentName:"li"},"Configuration file priority: ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.joi/config.yml")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"static/default.yml"),". If the ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.joi/config.yml")," file exists, only the configurations from that file will be used, and default.yml will not be read. If it does not exist, default.yml will be used as the fallback configuration.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Regardless of which vendor's API you are using, it is recommended to register and fill in your own application information instead of using the default configuration. This is because these APIs have rate and concurrency limitations, and too many people using them simultaneously can affect service quality.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Any skill plugin can be disabled by adding an ",(0,i.kt)("inlineCode",{parentName:"p"},"enable: false")," setting for that plugin in the configuration file. For example, if you want to disable the headline news plugin and its ",(0,i.kt)("inlineCode",{parentName:"p"},"SLUG")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"headline_news"),", you can set it as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# Headline News\n# Aggregated Data Headline News API\n# https://www.juhe.cn/docs/api/id/235\nheadline_news:\n    enable: false\n    key: 'AppKey'  # Other configurations...\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For security reasons, the ",(0,i.kt)("inlineCode",{parentName:"p"},"validate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"cookie_secret")," in the backend management should be ",(0,i.kt)("strong",{parentName:"p"},"modified"),"!"),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"cookie_secret")," can be a locally generated string. You can generate it as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},">>> import os\n>>> os.urandom(24)\n")),(0,i.kt)("p",{parentName:"li"},"Simply copy the generated result into the ",(0,i.kt)("inlineCode",{parentName:"p"},"cookie_secret")," configuration. For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n    enable: true\n    host: '0.0.0.0'  # IP address\n    port: '5001'     # Port number\n    username: 'joi'  # Username\n    # Cookie secret used to encrypt and prevent tampering with the cookie content\n    # It is recommended to generate a random string using os.urandom(24)\n    cookie_secret: '__GENERATE_YOUR_OWN_RANDOM_VALUE_HERE__'\n    # MD5 hash of the password, you can use python3 joi.py md5 \"password\" to obtain it\n    # The initial password is joi@2049\n    # It is recommended to modify it\n    validate: '41724998a398a3f11ac18a1b7e2537e0'\n")))))}d.isMDXComponent=!0}}]);