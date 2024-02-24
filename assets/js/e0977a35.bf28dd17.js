/*! For license information please see e0977a35.bf28dd17.js.LICENSE.txt */
(self.webpackChunkfizichim_v_3=self.webpackChunkfizichim_v_3||[]).push([[62148],{21512:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var a=n(74848),r=n(28453),i=n(14252),o=n(31727);n(93559);const c={sidebar_position:20,custom_edit_url:null},s="I.19. Tabel cu constante fizice (de material).",l={id:"fizica/clasa8/capitolul1-fenomene-termice/I-19-tabel-cu-constante-fizice-de-material",title:"I.19. Tabel cu constante fizice (de material).",description:"",source:"@site/docs/fizica/clasa8/capitolul1-fenomene-termice/I-19-tabel-cu-constante-fizice-de-material.md",sourceDirName:"fizica/clasa8/capitolul1-fenomene-termice",slug:"/fizica/clasa8/capitolul1-fenomene-termice/I-19-tabel-cu-constante-fizice-de-material",permalink:"/fizichim_v3/docs/fizica/clasa8/capitolul1-fenomene-termice/I-19-tabel-cu-constante-fizice-de-material",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"I.18. Test de autoevaluare - Fenomene termice Partea a II-a.",permalink:"/fizichim_v3/docs/fizica/clasa8/capitolul1-fenomene-termice/I-18-test-de-autoevaluare-fenomene-termice-partea-II"},next:{title:"II.1. Electrizarea \u0219i sarcina electric\u0103.",permalink:"/fizichim_v3/docs/fizica/clasa8/capitolul2-fenomene-electrice-si-magnetice/II-1-electrostatica-electrizarea-si-sarcina-electrica"}},u={},d=[];function m(e){const t={h1:"h1",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"i19-tabel-cu-constante-fizice-de-material",children:"I.19. Tabel cu constante fizice (de material)."}),"\n","\n",(0,a.jsx)(i.A,{toc:d}),"\n","\n","\n",(0,a.jsx)(o.A,{className:"img-responsive4",src:"fizica/clasa8/capitolul1/1_15_Poza1_TabelCuConstanteDeMaterial.jpg",width:"1000",height:"817"})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},14252:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});n(96540);var a=n(65195);const r={tableOfContentsInline:"tableOfContentsInline_prmo"};var i=n(74848);function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,i.jsx)("div",{className:r.tableOfContentsInline,children:(0,i.jsx)(a.A,{toc:t,minHeadingLevel:n,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null})})}},65195:(e,t,n)=>{"use strict";n.d(t,{A:()=>v});var a=n(96540),r=n(6342);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function l(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,a.useRef)(void 0),n=l();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:i,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),l=s(c,{anchorTopOffset:n.current}),u=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}var d=n(28774),m=n(74848);function f(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?(0,m.jsx)("ul",{className:r?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(d.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(f,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const g=a.memo(f);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:l,maxHeadingLevel:d,...f}=e;const v=(0,r.p)(),b=l??v.tableOfContents.minHeadingLevel,p=d??v.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>o({toc:i(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:b,maxHeadingLevel:p});return u((0,a.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:b,maxHeadingLevel:p}}),[c,s,b,p])),(0,m.jsx)(g,{toc:h,className:n,linkClassName:c,...f})}},31727:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var a=n(96540),r=n(86025),i=n(46942),o=n.n(i),c=n(74848);const s=e=>{let{className:t,src:n,alt:i="",lazy:s=!0,...l}=e;const[u,d]=(0,a.useState)(!1),m=(0,r.A)(n);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("picture",{onClick:()=>d(!0),children:[(0,c.jsx)("source",{srcSet:`${m}.webp`,type:"image/webp"}),(0,c.jsx)("img",{className:o()(t,"img-responsive","gallery"),src:m,alt:i,...l,loading:s?"lazy":void 0})]}),u&&(0,c.jsx)(Lightbox,{mainSrc:m,onCloseRequest:()=>d(!1)})]})}},93559:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var a=n(96540),r=n(66510),i=n.n(r),o=n(74848);const c=e=>{let{src:t}=e;const n=(0,a.useRef)();return(0,a.useEffect)((()=>{i()(n.current).observe()}),[]),(0,o.jsx)("div",{className:"video-responsive",children:(0,o.jsx)("div",{className:"video-frame",children:(0,o.jsx)("iframe",{ref:n,title:t,width:"560",height:"315","data-src":t,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})}},66510:function(e){e.exports=function(){"use strict";var e="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var n=t.querySelector("img"),a=!1;null===n&&(n=document.createElement("img"),a=!0),e&&t.getAttribute("data-iesrc")&&(n.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(n.alt=t.getAttribute("data-alt")),a&&t.append(n)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var r=t.children,i=void 0,o=0;o<=r.length-1;o++)(i=r[o].getAttribute("data-src"))&&(r[o].src=i);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var c=",";if(t.getAttribute("data-background-delimiter")&&(c=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(c).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var s=t.getAttribute("data-background-image-set").split(c),l=s[0].substr(0,s[0].indexOf(" "))||s[0];l=-1===l.indexOf("url(")?"url("+l+")":l,1===s.length?t.style.backgroundImage=l:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+l+"; background-image: -webkit-image-set("+s+"); background-image: image-set("+s+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function n(e){e.setAttribute("data-loaded",!0)}var a=function(e){return"true"===e.getAttribute("data-loaded")},r=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return e instanceof Element?[e]:e instanceof NodeList?e:t.querySelectorAll(e)};return function(){var e,i,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},s=Object.assign({},t,c),l=s.root,u=s.rootMargin,d=s.threshold,m=s.load,f=s.loaded,g=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(g=new IntersectionObserver((e=m,i=f,function(t,r){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(r.unobserve(t.target),a(t.target)||(e(t.target),n(t.target),i(t.target)))}))}),{root:l,rootMargin:u,threshold:d}));for(var v,b=r(o,l),p=0;p<b.length;p++)(v=b[p]).getAttribute("data-placeholder-background")&&(v.style.background=v.getAttribute("data-placeholder-background"));return{observe:function(){for(var e=r(o,l),t=0;t<e.length;t++)a(e[t])||(g?g.observe(e[t]):(m(e[t]),n(e[t]),f(e[t])))},triggerLoad:function(e){a(e)||(m(e),n(e),f(e))},observer:g}}}()},46942:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,i(n)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)a.call(e,n)&&e[n]&&(t=o(t,n));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},28453:(e,t,n)=>{"use strict";n.d(t,{R:()=>o,x:()=>c});var a=n(96540);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);