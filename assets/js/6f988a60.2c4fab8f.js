/*! For license information please see 6f988a60.2c4fab8f.js.LICENSE.txt */
(self.webpackChunkfizichim_v_3=self.webpackChunkfizichim_v_3||[]).push([[51339],{98468:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var i=n(74848),r=n(28453),a=n(14252),o=n(31727);n(93559);const c={sidebar_position:1,custom_edit_url:null},s="I.0. Recapitulare m\u0103rimi fizice cls. a VII-a.",l={id:"fizica/clasa8/capitolul1-fenomene-termice/I-0-recapitulare-marimi-fizice-clasa7",title:"I.0. Recapitulare m\u0103rimi fizice cls. a VII-a.",description:"",source:"@site/docs/fizica/clasa8/capitolul1-fenomene-termice/I-0-recapitulare-marimi-fizice-clasa7.md",sourceDirName:"fizica/clasa8/capitolul1-fenomene-termice",slug:"/fizica/clasa8/capitolul1-fenomene-termice/I-0-recapitulare-marimi-fizice-clasa7",permalink:"/fizichim_v3/docs/fizica/clasa8/capitolul1-fenomene-termice/I-0-recapitulare-marimi-fizice-clasa7",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Cap.VI. Unde mecanice - sunetul.",permalink:"/fizichim_v3/docs/fizica/clasa7/culegere-de-probleme/capitolul6-unde-mecanice-sunetul"},next:{title:"I.1. Agita\u021bia termic\u0103. Difuzia.",permalink:"/fizichim_v3/docs/fizica/clasa8/capitolul1-fenomene-termice/I-1-agitatia-termica-difuzia"}},u={},d=[];function m(e){const t={h1:"h1",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"i0-recapitulare-m\u0103rimi-fizice-cls-a-vii-a",children:"I.0. Recapitulare m\u0103rimi fizice cls. a VII-a."}),"\n","\n",(0,i.jsx)(a.A,{toc:d}),"\n","\n","\n",(0,i.jsx)(o.A,{className:"img-responsive4",src:"fizica/clasa8/capitolul1/0_Poza1_TabelRecapitulareClasa7_vers3.jpg",lazy:!1,width:"1000",height:"753"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},14252:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});n(96540);var i=n(65195);const r={tableOfContentsInline:"tableOfContentsInline_prmo"};var a=n(74848);function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,a.jsx)("div",{className:r.tableOfContentsInline,children:(0,a.jsx)(i.A,{toc:t,minHeadingLevel:n,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null})})}},65195:(e,t,n)=>{"use strict";n.d(t,{A:()=>v});var i=n(96540),r=n(6342);function a(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):i.push(r)})),i}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>c(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function l(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.p)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,i.useRef)(void 0),n=l();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:r,minHeadingLevel:a,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let r=t;r<=n;r+=1)i.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:a,maxHeadingLevel:o}),l=s(c,{anchorTopOffset:n.current}),u=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}var d=n(28774),m=n(74848);function f(e){let{toc:t,className:n,linkClassName:i,isChild:r}=e;return t.length?(0,m.jsx)("ul",{className:r?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(d.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(f,{isChild:!0,toc:e.children,className:n,linkClassName:i})]},e.id)))}):null}const g=i.memo(f);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:l,maxHeadingLevel:d,...f}=e;const v=(0,r.p)(),p=l??v.tableOfContents.minHeadingLevel,b=d??v.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,i.useMemo)((()=>o({toc:a(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:p,maxHeadingLevel:b});return u((0,i.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:p,maxHeadingLevel:b}}),[c,s,p,b])),(0,m.jsx)(g,{toc:h,className:n,linkClassName:c,...f})}},31727:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var i=n(96540),r=n(86025),a=n(46942),o=n.n(a),c=n(74848);const s=e=>{let{className:t,src:n,alt:a="",lazy:s=!0,...l}=e;const[u,d]=(0,i.useState)(!1),m=(0,r.A)(n);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("picture",{onClick:()=>d(!0),children:[(0,c.jsx)("source",{srcSet:`${m}.webp`,type:"image/webp"}),(0,c.jsx)("img",{className:o()(t,"img-responsive","gallery"),src:m,alt:a,...l,loading:s?"lazy":void 0})]}),u&&(0,c.jsx)(Lightbox,{mainSrc:m,onCloseRequest:()=>d(!1)})]})}},93559:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var i=n(96540),r=n(66510),a=n.n(r),o=n(74848);const c=e=>{let{src:t}=e;const n=(0,i.useRef)();return(0,i.useEffect)((()=>{a()(n.current).observe()}),[]),(0,o.jsx)("div",{className:"video-responsive",children:(0,o.jsx)("div",{className:"video-frame",children:(0,o.jsx)("iframe",{ref:n,title:t,width:"560",height:"315","data-src":t,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})}},66510:function(e){e.exports=function(){"use strict";var e="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var n=t.querySelector("img"),i=!1;null===n&&(n=document.createElement("img"),i=!0),e&&t.getAttribute("data-iesrc")&&(n.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(n.alt=t.getAttribute("data-alt")),i&&t.append(n)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var r=t.children,a=void 0,o=0;o<=r.length-1;o++)(a=r[o].getAttribute("data-src"))&&(r[o].src=a);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var c=",";if(t.getAttribute("data-background-delimiter")&&(c=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(c).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var s=t.getAttribute("data-background-image-set").split(c),l=s[0].substr(0,s[0].indexOf(" "))||s[0];l=-1===l.indexOf("url(")?"url("+l+")":l,1===s.length?t.style.backgroundImage=l:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+l+"; background-image: -webkit-image-set("+s+"); background-image: image-set("+s+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function n(e){e.setAttribute("data-loaded",!0)}var i=function(e){return"true"===e.getAttribute("data-loaded")},r=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return e instanceof Element?[e]:e instanceof NodeList?e:t.querySelectorAll(e)};return function(){var e,a,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},s=Object.assign({},t,c),l=s.root,u=s.rootMargin,d=s.threshold,m=s.load,f=s.loaded,g=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(g=new IntersectionObserver((e=m,a=f,function(t,r){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(r.unobserve(t.target),i(t.target)||(e(t.target),n(t.target),a(t.target)))}))}),{root:l,rootMargin:u,threshold:d}));for(var v,p=r(o,l),b=0;b<p.length;b++)(v=p[b]).getAttribute("data-placeholder-background")&&(v.style.background=v.getAttribute("data-placeholder-background"));return{observe:function(){for(var e=r(o,l),t=0;t<e.length;t++)i(e[t])||(g?g.observe(e[t]):(m(e[t]),n(e[t]),f(e[t])))},triggerLoad:function(e){i(e)||(m(e),n(e),f(e))},observer:g}}}()},46942:(e,t)=>{var n;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,a(n)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)i.call(e,n)&&e[n]&&(t=o(t,n));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},28453:(e,t,n)=>{"use strict";n.d(t,{R:()=>o,x:()=>c});var i=n(96540);const r={},a=i.createContext(r);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);