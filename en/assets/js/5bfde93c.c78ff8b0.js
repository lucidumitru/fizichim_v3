/*! For license information please see 5bfde93c.c78ff8b0.js.LICENSE.txt */
(self.webpackChunkfizichim_v_3=self.webpackChunkfizichim_v_3||[]).push([[67676],{52335:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(74848),a=n(28453),i=n(14252),o=(n(31727),n(93559));const l={sidebar_position:11,custom_edit_url:null},c="II.11. Compunerea for\u021belor cu regula paralelogramului.",u={id:"fizica/clasa7/capitolul2-interactiuni-mecanice/II-11-compunerea-fortelor-cu-regula-paralelogramului",title:"II.11. Compunerea for\u021belor cu regula paralelogramului.",description:"Pentru adunarea a doi vectori necoliniari concuren\u021bi (care au acela\u0219i punct de aplica\u021bie) se folose\u0219te _regula paralelogramului_, parcurg\xe2nd patru etape:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/fizica/clasa7/capitolul2-interactiuni-mecanice/II-11-compunerea-fortelor-cu-regula-paralelogramului.md",sourceDirName:"fizica/clasa7/capitolul2-interactiuni-mecanice",slug:"/fizica/clasa7/capitolul2-interactiuni-mecanice/II-11-compunerea-fortelor-cu-regula-paralelogramului",permalink:"/fizichim_v3/en/docs/fizica/clasa7/capitolul2-interactiuni-mecanice/II-11-compunerea-fortelor-cu-regula-paralelogramului",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"II.10. For\u021ba elastic\u0103.",permalink:"/fizichim_v3/en/docs/fizica/clasa7/capitolul2-interactiuni-mecanice/II-10-forta-elastica"},next:{title:"II.12. Compunerea for\u021belor cu regula poligonului.",permalink:"/fizichim_v3/en/docs/fizica/clasa7/capitolul2-interactiuni-mecanice/II-12-compunerea-fortelor-cu-regula-poligonului"}},s={},d=[];function m(e){const t={em:"em",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"ii11-compunerea-for\u021belor-cu-regula-paralelogramului",children:"II.11. Compunerea for\u021belor cu regula paralelogramului."}),"\n","\n",(0,r.jsx)(i.A,{toc:d}),"\n","\n","\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Pentru adunarea a doi vectori necoliniari concuren\u021bi (care au acela\u0219i punct de aplica\u021bie)"})," se folose\u0219te ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.em,{children:"regula paralelogramului"})}),", parcurg\xe2nd patru etape:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Se deseneaz\u0103 cei doi vectori astfel \xeenc\xe2t s\u0103 aib\u0103 acela\u0219i punct de aplica\u021bie."}),"\n",(0,r.jsx)(t.li,{children:"Cu segmentele celor 2 vectori se formeaz\u0103 un paralelogram (patrulater cu laturile opuse paralele \u0219i egale)."}),"\n",(0,r.jsx)(t.li,{children:"Se traseaz\u0103 diagonala paralelogramului care are punct comun cu cei doi vectori. Acest segment reprezint\u0103 vectorul rezultant , care se noteaz\u0103 \u0219i i se pune s\u0103geat\u0103 \xeen cap\u0103t."}),"\n",(0,r.jsx)(t.li,{children:"Cu rigla m\u0103sur\u0103m segmentul vectorului rezultant \u0219i cu regula de trei simpl\u0103 afl\u0103m valoarea lui numeric\u0103."}),"\n"]}),"\n",(0,r.jsx)(o.A,{src:"https://www.youtube.com/embed/5WvouafAtUk"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},14252:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});n(96540);var r=n(65195);const a={tableOfContentsInline:"tableOfContentsInline_prmo"};var i=n(74848);function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,i.jsx)("div",{className:a.tableOfContentsInline,children:(0,i.jsx)(r.A,{toc:t,minHeadingLevel:n,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null})})}},65195:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var r=n(96540),a=n(6342);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):r.push(a)})),r}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>l(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function u(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function s(e){const t=(0,r.useRef)(void 0),n=u();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let a=t;a<=n;a+=1)r.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),u=c(l,{anchorTopOffset:n.current}),s=e.find((e=>u&&u.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var d=n(28774),m=n(74848);function g(e){let{toc:t,className:n,linkClassName:r,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(d.A,{to:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:r})]},e.id)))}):null}const f=r.memo(g);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:u,maxHeadingLevel:d,...g}=e;const p=(0,a.p)(),v=u??p.tableOfContents.minHeadingLevel,b=d??p.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>o({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:v,maxHeadingLevel:b});return s((0,r.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:b}}),[l,c,v,b])),(0,m.jsx)(f,{toc:h,className:n,linkClassName:l,...g})}},31727:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(96540),a=n(86025),i=n(46942),o=n.n(i),l=n(74848);const c=e=>{let{className:t,src:n,alt:i="",lazy:c=!0,...u}=e;const[s,d]=(0,r.useState)(!1),m=(0,a.A)(n);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("picture",{onClick:()=>d(!0),children:[(0,l.jsx)("source",{srcSet:`${m}.webp`,type:"image/webp"}),(0,l.jsx)("img",{className:o()(t,"img-responsive","gallery"),src:m,alt:i,...u,loading:c?"lazy":void 0})]}),s&&(0,l.jsx)(Lightbox,{mainSrc:m,onCloseRequest:()=>d(!1)})]})}},93559:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var r=n(96540),a=n(66510),i=n.n(a),o=n(74848);const l=e=>{let{src:t}=e;const n=(0,r.useRef)();return(0,r.useEffect)((()=>{i()(n.current).observe()}),[]),(0,o.jsx)("div",{className:"video-responsive",children:(0,o.jsx)("div",{className:"video-frame",children:(0,o.jsx)("iframe",{ref:n,title:t,width:"560",height:"315","data-src":t,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})}},66510:function(e){e.exports=function(){"use strict";var e="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var n=t.querySelector("img"),r=!1;null===n&&(n=document.createElement("img"),r=!0),e&&t.getAttribute("data-iesrc")&&(n.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(n.alt=t.getAttribute("data-alt")),r&&t.append(n)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,i=void 0,o=0;o<=a.length-1;o++)(i=a[o].getAttribute("data-src"))&&(a[o].src=i);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var l=",";if(t.getAttribute("data-background-delimiter")&&(l=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(l).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var c=t.getAttribute("data-background-image-set").split(l),u=c[0].substr(0,c[0].indexOf(" "))||c[0];u=-1===u.indexOf("url(")?"url("+u+")":u,1===c.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+c+"); background-image: image-set("+c+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function n(e){e.setAttribute("data-loaded",!0)}var r=function(e){return"true"===e.getAttribute("data-loaded")},a=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return e instanceof Element?[e]:e instanceof NodeList?e:t.querySelectorAll(e)};return function(){var e,i,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",l=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=Object.assign({},t,l),u=c.root,s=c.rootMargin,d=c.threshold,m=c.load,g=c.loaded,f=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(f=new IntersectionObserver((e=m,i=g,function(t,a){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(a.unobserve(t.target),r(t.target)||(e(t.target),n(t.target),i(t.target)))}))}),{root:u,rootMargin:s,threshold:d}));for(var p,v=a(o,u),b=0;b<v.length;b++)(p=v[b]).getAttribute("data-placeholder-background")&&(p.style.background=p.getAttribute("data-placeholder-background"));return{observe:function(){for(var e=a(o,u),t=0;t<e.length;t++)r(e[t])||(f?f.observe(e[t]):(m(e[t]),n(e[t]),g(e[t])))},triggerLoad:function(e){r(e)||(m(e),n(e),g(e))},observer:f}}}()},46942:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,i(n)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=o(t,n));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},28453:(e,t,n)=>{"use strict";n.d(t,{R:()=>o,x:()=>l});var r=n(96540);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);