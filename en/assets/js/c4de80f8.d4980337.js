"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,y=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return n?o.createElement(y,r(r({ref:t},p),{},{components:n})):o.createElement(y,r({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,r[1]=i;for(var u=2;u<s;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const s={sidebar_position:1},r="Installation",i={unversionedId:"install",id:"install",title:"Installation",description:"1. Clone the Repository",source:"@site/docs/install.md",sourceDirName:".",slug:"/install",permalink:"/en/docs/install",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/en/docs/intro"},next:{title:"Configuration",permalink:"/en/docs/config"}},l={},u=[{value:"1. Clone the Repository",id:"1-clone-the-repository",level:3},{value:"2. Install sox, ffmpeg, and PyAudio",id:"2-install-sox-ffmpeg-and-pyaudio",level:3},{value:"Linux System",id:"linux-system",level:4},{value:"Mac System",id:"mac-system",level:4},{value:"3. Install Required Libraries",id:"3-install-required-libraries",level:3},{value:"4. Compile _snowboydetect.so",id:"4-compile-_snowboydetectso",level:3},{value:"Install swig",id:"install-swig",level:4},{value:"Build Snowboy",id:"build-snowboy",level:4},{value:"Solve No Sound Issue on CentOS",id:"solve-no-sound-issue-on-centos",level:4}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"1-clone-the-repository"},"1. Clone the Repository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/joi-ai/joi\n")),(0,a.kt)("h3",{id:"2-install-sox-ffmpeg-and-pyaudio"},"2. Install sox, ffmpeg, and PyAudio"),(0,a.kt)("h4",{id:"linux-system"},"Linux System"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update -y\nsudo apt-get install portaudio19-dev python-pyaudio python3-pyaudio sox pulseaudio libsox-fmt-all ffmpeg\npip3 install pyaudio\n")),(0,a.kt)("p",null,"If you encounter slow installation using pip3, you can consider using a PyPI mirror. For example, ",(0,a.kt)("a",{parentName:"p",href:"https://mirror.tuna.tsinghua.edu.cn/help/pypi/"},"Tsinghua University PyPI Mirror"),"."),(0,a.kt)("h4",{id:"mac-system"},"Mac System"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install portaudio --HEAD  # Install the latest version of Git to ensure compatibility with Big Sur\nbrew install sox ffmpeg\npip3 install pyaudio\n")),(0,a.kt)("p",null,"If you don't have Homebrew, refer to ",(0,a.kt)("a",{parentName:"p",href:"http://brew.sh/"},"this article")," to install it."),(0,a.kt)("h3",{id:"3-install-required-libraries"},"3. Install Required Libraries"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd joi-ai\npip3 install -r requirements.txt\n")),(0,a.kt)("h3",{id:"4-compile-_snowboydetectso"},"4. Compile _snowboydetect.so"),(0,a.kt)("p",null,"Regardless of whether you plan to use Snowboy or Porcupine as the offline wake word engine, ",(0,a.kt)("strong",{parentName:"p"},"compiling ",(0,a.kt)("inlineCode",{parentName:"strong"},"_snowboydetect.so")," is still necessary"),". This is because after the wake word is detected, joi-ai will use Snowboy's VAD (Voice Activity Detection) capability to determine whether to end the listening phase."),(0,a.kt)("h4",{id:"install-swig"},"Install swig"),(0,a.kt)("p",null,"First, make sure you have swig installed on your system."),(0,a.kt)("p",null,"For Linux systems:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\nwget https://wzpan-1253537070.cos.ap-guangzhou.myqcloud.com/misc/swig-3.0.10.tar.gz\ntar xvf swig-3.0.10.tar.gz\ncd swig-3.0.10\nsudo apt-get -y update\nsudo apt-get install -y libpcre3 libpcre3-dev\n./configure --prefix=/usr --without-clisp --without-maximum-compile-warnings\nmake\nsudo make install\nsudo install -v -m755 -d /usr/share/doc/swig-3.0.10\nsudo cp -v -R Doc/* /usr/share/doc/swig-3.0.10\nsudo apt-get install -y libatlas-base-dev\n")),(0,a.kt)("p",null,'If you encounter a "python3-config: command not found" error, you also need to install ',(0,a.kt)("inlineCode",{parentName:"p"},"python3-dev"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install python3-dev  # Note: On Ubuntu 18.04, it may be named python3-all-dev\n")),(0,a.kt)("p",null,"For Mac systems:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install swig wget\n")),(0,a.kt)("h4",{id:"build-snowboy"},"Build Snowboy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\nwget https://wzpan-1253537070.cos.ap-guangzhou.myqcloud.com/wukong/snowboy.tar.bz2 # Use the forked version to ensure interface compatibility and Ubuntu 22 support\ntar -xvjf snowboy.tar.bz2\ncd snowboy/swig/Python3\nmake\ncp _snowboydetect.so /path/to/wukon-robot/snowboy/\n")),(0,a.kt)("p",null,"If you encounter issues during the ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," phase, try to find a solution in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Kitt-AI/snowboy/issues"},"snowboy project issues"),"."),(0,a.kt)("h4",{id:"solve-no-sound-issue-on-centos"},"Solve No Sound Issue on CentOS"),(0,a.kt)("p",null,"Some users have encountered issues with no sound during playback on CentOS. The solution is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mknod /dev/dsp c 14 3\nchmod 666 /dev/dsp\n")))}d.isMDXComponent=!0}}]);