"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[81],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,g=c["".concat(i,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1},s="\u5b89\u88c5",l={unversionedId:"install",id:"install",title:"\u5b89\u88c5",description:"\u514b\u9686\u4ed3\u5e93",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/install.md",sourceDirName:".",slug:"/install",permalink:"/joi-doc/zh-Hans/docs/install",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/joi-doc/zh-Hans/docs/intro"},next:{title:"\u914d\u7f6e",permalink:"/joi-doc/zh-Hans/docs/config"}},i={},p=[{value:"\u514b\u9686\u4ed3\u5e93",id:"\u514b\u9686\u4ed3\u5e93",level:3},{value:"2. \u5b89\u88c5 sox, ffmpeg \u548c PyAudio",id:"2-\u5b89\u88c5-sox-ffmpeg-\u548c-pyaudio",level:3},{value:"Linux \u7cfb\u7edf",id:"linux-\u7cfb\u7edf",level:4},{value:"Mac \u7cfb\u7edf",id:"mac-\u7cfb\u7edf",level:4},{value:"3. \u5b89\u88c5\u4f9d\u8d56\u7684\u5e93",id:"3-\u5b89\u88c5\u4f9d\u8d56\u7684\u5e93",level:3},{value:"4. \u7f16\u8bd1 _snowboydetect.so",id:"4-\u7f16\u8bd1-_snowboydetectso",level:3},{value:"\u5b89\u88c5 swig",id:"\u5b89\u88c5-swig",level:4},{value:"\u6784\u5efa snowboy",id:"\u6784\u5efa-snowboy",level:4},{value:"CentOS \u6ca1\u58f0\u97f3\u95ee\u9898\u89e3\u51b3",id:"centos-\u6ca1\u58f0\u97f3\u95ee\u9898\u89e3\u51b3",level:4}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("h3",{id:"\u514b\u9686\u4ed3\u5e93"},"\u514b\u9686\u4ed3\u5e93"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/zexiplus/joi-ai\n")),(0,o.kt)("h3",{id:"2-\u5b89\u88c5-sox-ffmpeg-\u548c-pyaudio"},"2. \u5b89\u88c5 sox, ffmpeg \u548c PyAudio"),(0,o.kt)("h4",{id:"linux-\u7cfb\u7edf"},"Linux \u7cfb\u7edf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update -y\nsudo apt-get install portaudio19-dev python-pyaudio python3-pyaudio sox pulseaudio libsox-fmt-all ffmpeg\npip3 install pyaudio\n")),(0,o.kt)("p",null,"\u5982\u679c\u9047\u5230 pip3 \u5b89\u88c5\u6162\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 Pypi \u955c\u50cf\u3002\u4f8b\u5982 ",(0,o.kt)("a",{parentName:"p",href:"https://mirror.tuna.tsinghua.edu.cn/help/pypi/"},"\u6e05\u534e\u5927\u5b66 Pypi \u955c\u50cf")," \u3002"),(0,o.kt)("h4",{id:"mac-\u7cfb\u7edf"},"Mac \u7cfb\u7edf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install portaudio --HEAD  # \u5b89\u88c5 Git \u6700\u65b0\u7248\u672c\uff0c\u786e\u4fdd Big Sur \u7cfb\u7edf\u53ef\u7528\nbrew install sox ffmpeg\npip3 install pyaudio\n")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u6ca1\u6709 Homebrew \uff0c\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"http://brew.sh/"},"\u672c\u6587"),"\u5b89\u88c5"),(0,o.kt)("h3",{id:"3-\u5b89\u88c5\u4f9d\u8d56\u7684\u5e93"},"3. \u5b89\u88c5\u4f9d\u8d56\u7684\u5e93"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd joi-ai\npip3 install -r requirements.txt\n")),(0,o.kt)("h3",{id:"4-\u7f16\u8bd1-_snowboydetectso"},"4. \u7f16\u8bd1 _snowboydetect.so"),(0,o.kt)("p",null,"\u4e0d\u7ba1\u4f60\u6253\u7b97\u4f7f\u7528 snowboy \u8fd8\u662f Porcupine \u4f5c\u4e3a\u79bb\u7ebf\u5524\u9192\u5f15\u64ce\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u7f16\u8bd1 ",(0,o.kt)("inlineCode",{parentName:"strong"},"_snowboydetect.so")," \u4f9d\u7136\u662f\u5fc5\u8981\u7684"),"\uff0c\u56e0\u4e3a\u5f53\u79bb\u7ebf\u5524\u9192\u540e\uff0cjoi-ai \u4f1a\u4f7f\u7528 snowboy \u7684 VAD \u80fd\u529b\u6765\u5728\u4e3b\u52a8\u8046\u542c\u65f6\u5019\u5224\u65ad\u662f\u5426\u5e94\u8be5\u7ed3\u675f\u8046\u542c\u3002"),(0,o.kt)("h4",{id:"\u5b89\u88c5-swig"},"\u5b89\u88c5 swig"),(0,o.kt)("p",null,"\u9996\u5148\u786e\u4fdd\u4f60\u7684\u7cfb\u7edf\u5df2\u7ecf\u88c5\u6709 swig \u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e Linux \u7cfb\u7edf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\nwget https://wzpan-1253537070.cos.ap-guangzhou.myqcloud.com/misc/swig-3.0.10.tar.gz\ntar xvf swig-3.0.10.tar.gz\ncd swig-3.0.10\nsudo apt-get -y update\nsudo apt-get install -y libpcre3 libpcre3-dev\n./configure --prefix=/usr --without-clisp --without-maximum-compile-warnings\nmake\nsudo make install\nsudo install -v -m755 -d /usr/share/doc/swig-3.0.10\nsudo cp -v -R Doc/* /usr/share/doc/swig-3.0.10\nsudo apt-get install -y libatlas-base-dev\n")),(0,o.kt)("p",null,"\u5982\u679c\u63d0\u793a\u627e\u4e0d\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"python3-config")," \u547d\u4ee4\uff0c\u4f60\u8fd8\u9700\u8981\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"python3-dev"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install python3-dev  # \u6ce8\u610f Ubuntu 18.04 \u53ef\u80fd\u53eb python3-all-dev\n")),(0,o.kt)("p",null,"\u5bf9\u4e8e Mac \u7cfb\u7edf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install swig wget\n")),(0,o.kt)("h4",{id:"\u6784\u5efa-snowboy"},"\u6784\u5efa snowboy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\nwget https://wzpan-1253537070.cos.ap-guangzhou.myqcloud.com/wukong/snowboy.tar.bz2 # \u4f7f\u7528\u6211fork\u51fa\u6765\u7684\u7248\u672c\u4ee5\u786e\u4fdd\u63a5\u53e3\u53caUbuntu 22\u517c\u5bb9\ntar -xvjf snowboy.tar.bz2\ncd snowboy/swig/Python3\nmake\ncp _snowboydetect.so wukon-robot\u7684\u6839\u76ee\u5f55/snowboy/\n")),(0,o.kt)("p",null,"\u5982\u679c make \u9636\u6bb5\u9047\u5230\u95ee\u9898\uff0c\u5c1d\u8bd5\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kitt-AI/snowboy/issues"},"snowboy \u9879\u76ee issue \u4e2d\u627e\u5230\u89e3\u51b3\u65b9\u6848")," \u3002"),(0,o.kt)("h4",{id:"centos-\u6ca1\u58f0\u97f3\u95ee\u9898\u89e3\u51b3"},"CentOS \u6ca1\u58f0\u97f3\u95ee\u9898\u89e3\u51b3"),(0,o.kt)("p",null,"\u6709\u7528\u6237\u5728 CentOS \u7cfb\u7edf\u4e2d\u9047\u5230\u64ad\u653e\u6ca1\u58f0\u97f3\u7684\u95ee\u9898\u3002\u89e3\u51b3\u65b9\u6cd5\u662f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mknod /dev/dsp c 14 3\nchmod 666 /dev/dsp\n")))}d.isMDXComponent=!0}}]);