import{_ as Z,o as w,c as $,a as l,t as _,F as D,r as W,u as we,b as ke,d as b,e as K,m as de,f as re,g as N,h as G,i as $e,j as Se,k as Te,l as Ae,n as C,w as ee,p as I,q as T,s as k,v as X,x as se,y as Ee,z,A as oe,B as Ie,C as pe,D as te,E as B,G as ae,H as Pe}from"./entry.Dbbj9Qmp.js";import Oe from"./Icon.BOcaYYl7.js";import"./index.CzCfPO9Z.js";function Fe(e,t){const n={...e};for(const r of t)delete n[r];return n}function je(e,t,n){typeof t=="string"&&(t=t.split(".").map(s=>{const o=Number(s);return isNaN(o)?s:o}));let r=e;for(const s of t){if(r==null)return n;r=r[s]}return r!==void 0?r:n}const Ne=""+globalThis.__publicAssetsURL("img/hero/1.png"),De=""+globalThis.__publicAssetsURL("img/hero/2.png"),Ce={},Me={id:"hero",class:"relative md:h-3/6 grid content-center bg-white bg-[url('/img/BGStars.png')] bg-cover bg-center py-36 mx-5 lg:mx-10 mt-40 rounded-3xl"},Le={class:"py-8 px-4 mx-auto max-w-screen-xl text-center relative z-10 lg:py-16 lg:px-12 self-center"},Re={class:"flex justify-center items-center mb-4 text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-white dark:text-white relative"},Ue={class:"mb-8 m-6 text-lg font-medium text-white lg:text-xl sm:px-16 xl:px-48"},Be=l("div",{class:"mx-auto text-center relative z-10 self-center top-36 lg:top-36"},[l("div",{class:"backdrop-blur-xl w-auto lg:w-[650px] p-10 py-8 px-4 rounded-2xl gap-4 flex justify-center"},[l("img",{src:Ne,class:"block w-1/2 lg:w-auto",alt:""}),l("img",{src:De,class:"block mt-auto lg:mt-5 lg:w-auto",alt:""})])],-1);function He(e,t){return w(),$("section",Me,[l("div",Le,[l("h1",Re,_(e.$t("Hero.SectionTitle")),1),l("p",Ue,_(e.$t("Hero.SectionSubtitle")),1)]),Be])}const ze=Z(Ce,[["render",He]]),Ve={class:"Partners py-16 md:py-20 relative"},Ge={class:"container mx-auto relative px-2 sm:px-0"},We={class:"section-title grid grid-cols-1 pb-10 text-center"},qe={class:"flex justify-center items-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-white"},Ke={class:"grid md:grid-cols-5 grid-cols-3 justify-center gap-[30px]"},Xe=["src"],Ye={__name:"Partners",setup(e){const t=[{image:"1"},{image:"2"},{image:"3"},{image:"4"},{image:"5"}];return(n,r)=>(w(),$("section",Ve,[l("div",Ge,[l("div",We,[l("h3",qe,_(n.$t("partners.SectionTitle")),1)]),l("div",Ke,[(w(),$(D,null,W(t,(s,o)=>l("div",{class:"mx-auto py-4",key:o},[l("img",{class:"h-auto",src:`/img/partners/${s.image}.png`},null,8,Xe)])),64))])])]))}},Je=(e,t,n,r,s=!1)=>{const o=we(),i=ke(),d=b(()=>{var v;const c=K(t),m=K(n),p=K(r);return de((c==null?void 0:c.strategy)||((v=i.ui)==null?void 0:v.strategy),p?{wrapper:p}:{},c||{},s?je(i.ui,e,{}):{},m||{})}),g=b(()=>Fe(o,["class"]));return{ui:d,attrs:g}},fe={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},le={container:"z-20 group",trigger:"inline-flex w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{...fe,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...le,option:{...le.option},arrow:{...fe}});const Qe={base:"animate-pulse",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-md"},Ze=de(re.ui.strategy,re.ui.skeleton,Qe),et=N({inheritAttrs:!1,props:{class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:n}=Je("skeleton",G(e,"ui"),Ze),r=b(()=>$e(Se(t.value.base,t.value.background,t.value.rounded),e.class));return{ui:t,attrs:n,skeletonClass:r}}});function tt(e,t,n,r,s,o){return w(),$("div",Te({class:e.skeletonClass},e.attrs),null,16)}const nt=Z(et,[["render",tt]]);/*!
  * vue-timer-hook v1.0.84
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */class j{static getTimeFromSeconds(t){const n=b(()=>Math.ceil(t.value)),r=b(()=>Math.floor(n.value/(60*60*24))),s=b(()=>Math.floor(n.value%(60*60*24)/(60*60))),o=b(()=>Math.floor(n.value%(60*60)/60));return{seconds:b(()=>Math.floor(n.value%60)),minutes:o,hours:s,days:r}}static getSecondsFromExpiry(t,n){const r=new Date().getTime(),s=t-r;if(s>0){const o=s/1e3;return n?Math.round(o):o}return 0}static getSecondsFromPrevTime(t,n){const s=new Date().getTime()-t;if(s>0){const o=s/1e3;return n?Math.round(o):o}return 0}static getSecondsFromTimeNow(){const t=new Date,n=t.getTime(),r=t.getTimezoneOffset()*60;return n/1e3-r}static getFormattedTimeFromSeconds(t,n){const{seconds:r,minutes:s,hours:o}=j.getTimeFromSeconds(t),i=b(()=>n==="12-hour"?o.value>=12?"pm":"am":""),d=b(()=>n==="12-hour"?o.value%12:o.value);return{seconds:r,minutes:s,hours:d,ampm:i}}}class rt{static expiryTimestamp(t){const n=new Date(t).getTime()>0;return n||console.warn("vue-timer-hook: { useTimer } Invalid expiryTimestamp settings",t),n}}const st=e=>typeof e=="number";function ot(e,t){let n;const r=()=>{n&&(clearInterval(n),n=void 0)},s=o=>(r(),!o&&!t?void 0:n=setInterval(e,o||t));return st(t)&&s(),{remove:r,start:s}}const J=1e3;function ie(e){if(!rt.expiryTimestamp(e))return null;const t=j.getSecondsFromExpiry(e),n=Math.floor((t-Math.floor(t))*1e3);return n>0?n:J}const at=(e=60,t=!0)=>{let n;const r=Ae({expiryTimestamp:e,seconds:j.getSecondsFromExpiry(e),isRunning:t,isExpired:!1,didStart:t,delay:ie(e)});function s(){r.isExpired=!0,r.isRunning=!1,r.delay=null,n&&n.remove()}function o(){r.isRunning=!1,n&&n.remove()}function i(c=e,m=!0){o(),r.delay=ie(c),r.didStart=m,r.isExpired=!1,r.expiryTimestamp=c,r.seconds=j.getSecondsFromExpiry(c),r.didStart&&g()}function d(){const c=new Date,m=c.setMilliseconds(c.getMilliseconds()+r.seconds*1e3);i(m)}function g(){r.didStart?(r.seconds=j.getSecondsFromExpiry(r.expiryTimestamp),r.isRunning=!0,n=ot(()=>{r.delay!==J&&(r.delay=J);const c=j.getSecondsFromExpiry(r.expiryTimestamp);r.seconds=c,c<=0&&s()},r.isRunning?r.delay:null)):d()}return i(e,t),{...j.getTimeFromSeconds(G(r,"seconds")),start:g,pause:o,resume:d,restart:i,isRunning:G(r,"isRunning"),isExpired:G(r,"isExpired")}},lt={class:"flex justify-center gap-2 p-3 text-center rounded-md my-2 border dark:border-dark-border border-gray-200"},it={class:"days"},ut={class:"text-base font-extrabold text-custom-color dark:text-white"},ct={class:"block text-sm text-custom-color dark:text-white"},dt=l("span",null," :",-1),pt={class:"hours"},ft={class:"text-base font-extrabold text-custom-color dark:text-white"},mt={class:"block text-sm text-custom-color dark:text-white"},gt=l("span",null," :",-1),bt={class:"minutes"},vt={class:"text-base font-extrabold text-custom-color dark:text-white"},ht={class:"block text-sm text-custom-color dark:text-white"},xt=l("span",null," :",-1),yt={class:"seconds"},_t={class:"text-base font-extrabold text-custom-color dark:text-white"},wt={class:"block text-sm text-custom-color dark:text-white"},kt={__name:"Timer",setup(e){const t=new Date;t.setSeconds(t.getSeconds()+999999);const n=at(t);return C(()=>{ee(async()=>{n.isExpired.value&&console.warn("IsExpired")})}),(r,s)=>(w(),$("div",null,[l("div",lt,[l("div",it,[l("span",ut,_(I(n).days),1),l("span",ct,_(r.$t("Auctions.day")),1)]),dt,l("div",pt,[l("span",ft,_(I(n).hours),1),l("span",mt,_(r.$t("Auctions.hour")),1)]),gt,l("div",bt,[l("span",vt,_(I(n).minutes),1),l("span",ht,_(r.$t("Auctions.minute")),1)]),xt,l("div",yt,[l("span",_t,_(I(n).seconds),1),l("span",wt,_(r.$t("Auctions.second")),1)])])]))}},$t={class:"grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 lg:mt-10 gap-2"},St={key:0,class:"items-center gap-5 mb-10"},Tt={class:"space-y-2"},At={key:1,class:"bg-white border border-gray-200 rounded-2xl p-2 dark:bg-dark-card dark:border-dark-border w-auto shadow-[0px_30px_70px_rgba(10,22,37,0.0555514)]"},Et={class:"relative"},It=["src"],Pt={class:"absolute w-full backdrop-blur-xl text-sm bottom-0 text-white rounded-b-lg px-3 py-2"},Ot={class:"p-3"},Ft={class:"flex items-center justify-between"},jt={class:"text-base font-extrabold text-custom-color dark:text-primary-color"},Nt=["src"],Dt={class:"flex"},Ct=["src"],Mt=l("p",{class:"mt-2 px-2 text-base font-normal text-custom-color dark:text-gray-400"},"325.22م²",-1),Lt={class:"timer"},Rt={class:"flex items-center justify-between"},Ut={class:"text-base font-extrabold text-custom-color dark:text-white"},Bt=l("span",{class:"text-primary-color block"},"71",-1),Ht={class:"text-white font-medium rounded-md text-sm px-6 py-3 text-center bg-primary-color dark:hover:bg-primary-color"},zt={class:"flex justify-center gap-5 p-3 text-center rounded-md my-2 mt-10 sm:mt-14 lg:mt-20"},Vt={class:"inline-block rounded-3xl border border-primary-color px-12 py-3 text-sm font-medium text-primary-color hover:bg-primary-color hover:text-white active:bg-primary-color transition duration-500"},Gt={__name:"AuctionsCard",setup(e){const t=T(!0);return C(()=>{setTimeout(()=>{t.value=!1},2e3)}),(n,r)=>{const s=nt,o=Oe,i=kt;return w(),$(D,null,[l("div",$t,[(w(),$(D,null,W(8,d=>l("div",{key:d,class:"rounded-lg relative px-2 md:px-1"},[I(t)?(w(),$("div",St,[l("div",Tt,[k(s,{class:"h-[170px] w-[100]"}),k(s,{class:"h-4 w-[100]"}),k(s,{class:"h-4 w-[100]"}),k(s,{class:"h-4 w-[250px]"}),X(),k(s,{class:"h-4 w-[250px]"})])])):se("",!0),I(t)?se("",!0):(w(),$("div",At,[l("div",Et,[l("img",{class:"w-full bg-cover bg-center",src:"/img/Auctions/Component.png",alt:"Office"},null,8,It),l("span",Pt,[k(o,{name:"zondicons:location",class:"text-white w-5"}),X(" "+_(n.$t("Auctions.Street-Dammam")),1)])]),l("div",Ot,[l("div",Ft,[l("a",null,[l("h3",jt,_(n.$t("Auctions.CardTitle")),1)]),l("img",{class:"w-24 bg-cover bg-center",src:"/img/Auctions/Auctionslogo.png",alt:"Auctionslogo"},null,8,Nt)]),l("div",Dt,[l("img",{class:"w-4 bg-cover bg-center",src:"/img/Auctions/Icon awesome-ruler-combined.svg",alt:"Auctionslogo"},null,8,Ct),Mt]),l("div",Lt,[k(i)]),l("div",Rt,[l("span",Ut,[X(_(n.$t("Auctions.Number"))+" ",1),Bt]),l("button",Ht,_(n.$t("Auctions.button")),1)])])]))])),64))]),l("div",zt,[l("button",Vt,_(n.$t("Auctions.Allauctions")),1)])],64)}}};function R(e,t,...n){if(e in t){let s=t[e];return typeof s=="function"?s(...n):s}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,R),r}var Q=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Q||{}),Wt=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Wt||{});function U({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...s}){var o;let i=ge(r,n),d=Object.assign(s,{props:i});if(e||t&2&&i.static)return Y(d);if(t&1){let g=(o=i.unmount)==null||o?0:1;return R(g,{0(){return null},1(){return Y({...s,props:{...i,hidden:!0,style:{display:"none"}}})}})}return Y(d)}function Y({props:e,attrs:t,slots:n,slot:r,name:s}){var o,i;let{as:d,...g}=be(e,["unmount","static"]),c=(o=n.default)==null?void 0:o.call(n,r),m={};if(r){let p=!1,v=[];for(let[y,h]of Object.entries(r))typeof h=="boolean"&&(p=!0),h===!0&&v.push(y);p&&(m["data-headlessui-state"]=v.join(" "))}if(d==="template"){if(c=me(c??[]),Object.keys(g).length>0||Object.keys(t).length>0){let[p,...v]=c??[];if(!qt(p)||v.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${s} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(g).concat(Object.keys(t)).map(u=>u.trim()).filter((u,a,f)=>f.indexOf(u)===a).sort((u,a)=>u.localeCompare(a)).map(u=>`  - ${u}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(u=>`  - ${u}`).join(`
`)].join(`
`));let y=ge((i=p.props)!=null?i:{},g),h=Ee(p,y);for(let u in y)u.startsWith("on")&&(h.props||(h.props={}),h.props[u]=y[u]);return h}return Array.isArray(c)&&c.length===1?c[0]:c}return z(d,Object.assign({},g,m),{default:()=>c})}function me(e){return e.flatMap(t=>t.type===D?me(t.children):[t])}function ge(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let s in r)s.startsWith("on")&&typeof r[s]=="function"?(n[s]!=null||(n[s]=[]),n[s].push(r[s])):t[s]=r[s];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](s,...o){let i=n[r];for(let d of i){if(s instanceof Event&&s.defaultPrevented)return;d(s,...o)}}});return t}function be(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function qt(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Kt=0;function Xt(){return++Kt}function ve(){return Xt()}var A=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(A||{});function x(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}function ue(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Yt(e,t){let n=T(ue(e.value.type,e.value.as));return C(()=>{n.value=ue(e.value.type,e.value.as)}),ee(()=>{var r;n.value||x(t)&&x(t)instanceof HTMLButtonElement&&!((r=x(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}var Jt=Object.defineProperty,Qt=(e,t,n)=>t in e?Jt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ce=(e,t,n)=>(Qt(e,typeof t!="symbol"?t+"":t,n),n);class Zt{constructor(){ce(this,"current",this.detect()),ce(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let en=new Zt;function tn(e){if(en.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=x(e);if(t)return t.ownerDocument}return document}let nn=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var E=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(E||{}),H=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(H||{}),rn=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(rn||{});function sn(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(nn)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var on=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(on||{}),an=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(an||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let ln=["textarea","input"].join(",");function un(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,ln))!=null?n:!1}function L(e,t=n=>n){return e.slice().sort((n,r)=>{let s=t(n),o=t(r);if(s===null||o===null)return 0;let i=s.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function M(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:s=[]}={}){var o;let i=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,d=Array.isArray(e)?n?L(e):e:sn(e);s.length>0&&d.length>1&&(d=d.filter(h=>!s.includes(h))),r=r??i.activeElement;let g=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,d.indexOf(r))-1;if(t&4)return Math.max(0,d.indexOf(r))+1;if(t&8)return d.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=t&32?{preventScroll:!0}:{},p=0,v=d.length,y;do{if(p>=v||p+v<=0)return 0;let h=c+p;if(t&16)h=(h+v)%v;else{if(h<0)return 3;if(h>=v)return 1}y=d[h],y==null||y.focus(m),p+=g}while(y!==i.activeElement);return t&6&&un(y)&&y.select(),2}var he=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(he||{});let xe=N({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:r,...s}=e,o={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return U({ourProps:o,theirProps:s,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function cn(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}let dn=N({props:{onFocus:{type:Function,required:!0}},setup(e){let t=T(!0);return()=>t.value?z(xe,{as:"button",type:"button",features:he.Focusable,onFocus(n){n.preventDefault();let r,s=50;function o(){var i;if(s--<=0){r&&cancelAnimationFrame(r);return}if((i=e.onFocus)!=null&&i.call(e)){t.value=!1,cancelAnimationFrame(r);return}r=requestAnimationFrame(o)}r=requestAnimationFrame(o)}}):null}});var pn=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(pn||{}),fn=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(fn||{});let ye=Symbol("TabsContext");function V(e){let t=te(ye,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,V),n}return t}let ne=Symbol("TabsSSRContext"),mn=N({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:t,attrs:n,emit:r}){var s;let o=T((s=e.selectedIndex)!=null?s:e.defaultIndex),i=T([]),d=T([]),g=b(()=>e.selectedIndex!==null),c=b(()=>g.value?e.selectedIndex:o.value);function m(u){var a;let f=L(p.tabs.value,x),S=L(p.panels.value,x),F=f.filter(P=>{var O;return!((O=x(P))!=null&&O.hasAttribute("disabled"))});if(u<0||u>f.length-1){let P=R(o.value===null?0:Math.sign(u-o.value),{[-1]:()=>1,0:()=>R(Math.sign(u),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),O=R(P,{0:()=>f.indexOf(F[0]),1:()=>f.indexOf(F[F.length-1])});O!==-1&&(o.value=O),p.tabs.value=f,p.panels.value=S}else{let P=f.slice(0,u),O=[...f.slice(u),...P].find(_e=>F.includes(_e));if(!O)return;let q=(a=f.indexOf(O))!=null?a:p.selectedIndex.value;q===-1&&(q=p.selectedIndex.value),o.value=q,p.tabs.value=f,p.panels.value=S}}let p={selectedIndex:b(()=>{var u,a;return(a=(u=o.value)!=null?u:e.defaultIndex)!=null?a:null}),orientation:b(()=>e.vertical?"vertical":"horizontal"),activation:b(()=>e.manual?"manual":"auto"),tabs:i,panels:d,setSelectedIndex(u){c.value!==u&&r("change",u),g.value||m(u)},registerTab(u){var a;if(i.value.includes(u))return;let f=i.value[o.value];i.value.push(u),i.value=L(i.value,x);let S=(a=i.value.indexOf(f))!=null?a:o.value;S!==-1&&(o.value=S)},unregisterTab(u){let a=i.value.indexOf(u);a!==-1&&i.value.splice(a,1)},registerPanel(u){d.value.includes(u)||(d.value.push(u),d.value=L(d.value,x))},unregisterPanel(u){let a=d.value.indexOf(u);a!==-1&&d.value.splice(a,1)}};oe(ye,p);let v=T({tabs:[],panels:[]}),y=T(!1);C(()=>{y.value=!0}),oe(ne,b(()=>y.value?null:v.value));let h=b(()=>e.selectedIndex);return C(()=>{Ie([h],()=>{var u;return m((u=e.selectedIndex)!=null?u:e.defaultIndex)},{immediate:!0})}),ee(()=>{if(!g.value||c.value==null||p.tabs.value.length<=0)return;let u=L(p.tabs.value,x);u.some((a,f)=>x(p.tabs.value[f])!==x(a))&&p.setSelectedIndex(u.findIndex(a=>x(a)===x(p.tabs.value[c.value])))}),()=>{let u={selectedIndex:o.value};return z(D,[i.value.length<=0&&z(dn,{onFocus:()=>{for(let a of i.value){let f=x(a);if((f==null?void 0:f.tabIndex)===0)return f.focus(),!0}return!1}}),U({theirProps:{...n,...be(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:u,slots:t,attrs:n,name:"TabGroup"})])}}}),gn=N({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:n}){let r=V("TabList");return()=>{let s={selectedIndex:r.selectedIndex.value},o={role:"tablist","aria-orientation":r.orientation.value};return U({ourProps:o,theirProps:e,slot:s,attrs:t,slots:n,name:"TabList"})}}}),bn=N({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${ve()}`}},setup(e,{attrs:t,slots:n,expose:r}){let s=V("Tab"),o=T(null);r({el:o,$el:o}),C(()=>s.registerTab(o)),pe(()=>s.unregisterTab(o));let i=te(ne),d=b(()=>{if(i.value){let a=i.value.tabs.indexOf(e.id);return a===-1?i.value.tabs.push(e.id)-1:a}return-1}),g=b(()=>{let a=s.tabs.value.indexOf(o);return a===-1?d.value:a}),c=b(()=>g.value===s.selectedIndex.value);function m(a){var f;let S=a();if(S===H.Success&&s.activation.value==="auto"){let F=(f=tn(o))==null?void 0:f.activeElement,P=s.tabs.value.findIndex(O=>x(O)===F);P!==-1&&s.setSelectedIndex(P)}return S}function p(a){let f=s.tabs.value.map(S=>x(S)).filter(Boolean);if(a.key===A.Space||a.key===A.Enter){a.preventDefault(),a.stopPropagation(),s.setSelectedIndex(g.value);return}switch(a.key){case A.Home:case A.PageUp:return a.preventDefault(),a.stopPropagation(),m(()=>M(f,E.First));case A.End:case A.PageDown:return a.preventDefault(),a.stopPropagation(),m(()=>M(f,E.Last))}if(m(()=>R(s.orientation.value,{vertical(){return a.key===A.ArrowUp?M(f,E.Previous|E.WrapAround):a.key===A.ArrowDown?M(f,E.Next|E.WrapAround):H.Error},horizontal(){return a.key===A.ArrowLeft?M(f,E.Previous|E.WrapAround):a.key===A.ArrowRight?M(f,E.Next|E.WrapAround):H.Error}}))===H.Success)return a.preventDefault()}let v=T(!1);function y(){var a;v.value||(v.value=!0,!e.disabled&&((a=x(o))==null||a.focus({preventScroll:!0}),s.setSelectedIndex(g.value),cn(()=>{v.value=!1})))}function h(a){a.preventDefault()}let u=Yt(b(()=>({as:e.as,type:t.type})),o);return()=>{var a;let f={selected:c.value},{id:S,...F}=e,P={ref:o,onKeydown:p,onMousedown:h,onClick:y,id:S,role:"tab",type:u.value,"aria-controls":(a=x(s.panels.value[g.value]))==null?void 0:a.id,"aria-selected":c.value,tabIndex:c.value?0:-1,disabled:e.disabled?!0:void 0};return U({ourProps:P,theirProps:F,slot:f,attrs:t,slots:n,name:"Tab"})}}}),vn=N({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let r=V("TabPanels");return()=>{let s={selectedIndex:r.selectedIndex.value};return U({theirProps:e,ourProps:{},slot:s,attrs:n,slots:t,name:"TabPanels"})}}}),hn=N({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${ve()}`},tabIndex:{type:Number,default:0}},setup(e,{attrs:t,slots:n,expose:r}){let s=V("TabPanel"),o=T(null);r({el:o,$el:o}),C(()=>s.registerPanel(o)),pe(()=>s.unregisterPanel(o));let i=te(ne),d=b(()=>{if(i.value){let m=i.value.panels.indexOf(e.id);return m===-1?i.value.panels.push(e.id)-1:m}return-1}),g=b(()=>{let m=s.panels.value.indexOf(o);return m===-1?d.value:m}),c=b(()=>g.value===s.selectedIndex.value);return()=>{var m;let p={selected:c.value},{id:v,tabIndex:y,...h}=e,u={ref:o,id:v,role:"tabpanel","aria-labelledby":(m=x(s.tabs.value[g.value]))==null?void 0:m.id,tabIndex:c.value?y:-1};return!c.value&&e.unmount&&!e.static?z(xe,{as:"span",...u}):U({ourProps:u,theirProps:h,slot:p,attrs:t,slots:n,features:Q.Static|Q.RenderStrategy,visible:c.value,name:"TabPanel"})}}});const xn={class:"Auctions md:py-20 relative"},yn={class:"container mx-auto relative px-2 sm:px-0"},_n={class:"flex justify-center items-center"},wn={__name:"Auctions",setup(e){const t=T({القائمة:[],القادمة:[],المنتهي:[]});return(n,r)=>{const s=Gt;return w(),$("section",xn,[l("div",yn,[k(I(mn),null,{default:B(()=>[l("div",_n,[k(I(gn),{class:"flex w-full lg:w-2/4 bg-white border border-gray-200 rounded-3xl p-2 dark:bg-dark-card dark:border-dark-border shadow-[0px_30px_70px_rgba(10,22,37,0.0555514)]"},{default:B(()=>[(w(!0),$(D,null,W(Object.keys(t.value),o=>(w(),ae(I(bn),{as:"template",key:o},{default:B(({selected:i})=>[l("button",{class:Pe(["w-full rounded-3xl py-4  text-base leading-5 font-extrabold text-gray-800",i?"bg-[#DC5224] text-white shadow text-base font-extrabold focus:outline-none":"text-base font-extrabold text-custom-color dark:text-white  hover:bg-white/[0.12] focus:outline-none"])},_(o),3)]),_:2},1024))),128))]),_:1})]),k(I(vn),{class:"mt-2"},{default:B(()=>[(w(!0),$(D,null,W(Object.values(t.value),o=>(w(),ae(I(hn),{key:o},{default:B(()=>[k(s)]),_:2},1024))),128))]),_:1})]),_:1})])])}}},kn={},$n={class:""};function Sn(e,t){const n=ze,r=Ye,s=wn;return w(),$("div",null,[l("div",$n,[k(n),k(r),k(s)])])}const In=Z(kn,[["render",Sn]]);export{In as default};
