let e,t,n=!1;const l="http://www.w3.org/1999/xlink",s={},o=e=>"object"==(e=typeof e)||"function"===e,i=(e,t,...n)=>{let l=null,s=null,i=!1,r=!1;const u=[],a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!o(l))&&(l+=""),i&&r?u[u.length-1].t+=l:u.push(i?c(null,l):l),r=i)};if(a(n),t){t.key&&(s=t.key);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}const f=c(e,null);return f.l=t,u.length>0&&(f.o=u),f.i=s,f},c=(e,t)=>({u:0,p:e,t,h:null,o:null,l:null,i:null}),r={},u=e=>H(e).m,a=(e,t,n)=>{const l=u(e);return{emit:e=>f(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},f=(e,t,n)=>{const l=Q.ce(t,n);return e.dispatchEvent(l),l},d=new WeakMap,p=e=>"sc-"+e.$,h=(e,t,n,s,i,c)=>{if(n!==s){let r=_(e,t),u=t.toLowerCase();if("class"===t){const t=e.classList,l=m(n),o=m(s);t.remove(...l.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!l.includes(e))))}else if("style"===t){for(const t in n)s&&null!=s[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)n&&s[t]===n[t]||(t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if("key"===t);else if("ref"===t)s&&s(e);else if(r||"o"!==t[0]||"n"!==t[1]){const a=o(s);if((r||a&&null!==s)&&!i)try{if(e.tagName.includes("-"))e[t]=s;else{const l=null==s?"":s;"list"===t?r=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(e){}let f=!1;u!==(u=u.replace(/^xlink\:?/,""))&&(t=u,f=!0),null==s||!1===s?!1===s&&""!==e.getAttribute(t)||(f?e.removeAttributeNS(l,t):e.removeAttribute(t)):(!r||4&c||i)&&!a&&(s=!0===s?"":s,f?e.setAttributeNS(l,t,s):e.setAttribute(t,s))}else t="-"===t[2]?t.slice(3):_(J,u)?u.slice(2):u[2]+t.slice(3),n&&Q.rel(e,t,n,!1),s&&Q.ael(e,t,s,!1)}},y=/\s/,m=e=>e?e.split(y):[],$=(e,t,n,l)=>{const o=11===t.h.nodeType&&t.h.host?t.h.host:t.h,i=e&&e.l||s,c=t.l||s;for(l in i)l in c||h(o,l,i[l],void 0,n,t.u);for(l in c)h(o,l,i[l],c[l],n,t.u)},b=(t,n,l)=>{const s=n.o[l];let o,i,c=0;if(null!==s.t)o=s.h=K.createTextNode(s.t);else if(o=s.h=K.createElement(s.p),$(null,s,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),s.o)for(c=0;c<s.o.length;++c)i=b(t,s,c),i&&o.appendChild(i);return o},w=(e,n,l,s,o,i)=>{let c,r=e;for(r.shadowRoot&&r.tagName===t&&(r=r.shadowRoot);o<=i;++o)s[o]&&(c=b(null,l,o),c&&(s[o].h=c,r.insertBefore(c,n)))},g=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.h,j(l),s.remove())},S=(e,t)=>e.p===t.p&&e.i===t.i,k=(e,t)=>{const n=t.h=e.h,l=e.o,s=t.o,o=t.t;null===o?("slot"===t.p||$(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o,i=0,c=0,r=0,u=0,a=t.length-1,f=t[0],d=t[a],p=l.length-1,h=l[0],y=l[p];for(;i<=a&&c<=p;)if(null==f)f=t[++i];else if(null==d)d=t[--a];else if(null==h)h=l[++c];else if(null==y)y=l[--p];else if(S(f,h))k(f,h),f=t[++i],h=l[++c];else if(S(d,y))k(d,y),d=t[--a],y=l[--p];else if(S(f,y))k(f,y),e.insertBefore(f.h,d.h.nextSibling),f=t[++i],y=l[--p];else if(S(d,h))k(d,h),e.insertBefore(d.h,f.h),d=t[--a],h=l[++c];else{for(r=-1,u=i;u<=a;++u)if(t[u]&&null!==t[u].i&&t[u].i===h.i){r=u;break}r>=0?(o=t[r],o.p!==h.p?s=b(t&&t[c],n,r):(k(o,h),t[r]=void 0,s=o.h),h=l[++c]):(s=b(t&&t[c],n,c),h=l[++c]),s&&f.h.parentNode.insertBefore(s,f.h)}i>a?w(e,null==l[p+1]?null:l[p+1].h,n,l,c,p):c>p&&g(t,i,a)})(n,l,t,s):null!==s?(null!==e.t&&(n.textContent=""),w(n,null,t,s,0,s.length-1)):null!==l&&g(l,0,l.length-1)):e.t!==o&&(n.data=o)},j=e=>{e.l&&e.l.ref&&e.l.ref(null),e.o&&e.o.map(j)},v=(e,t)=>{t&&!e.g&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.g=t)))},M=(e,t)=>{if(e.u|=16,!(4&e.u))return v(e,e.S),oe((()=>C(e,t)));e.u|=512},C=(e,t)=>{const n=e.k;let l;return t?(e.u|=256,e.j&&(e.j.map((([e,t])=>L(n,e,t))),e.j=null),l=L(n,"componentWillLoad")):l=L(n,"componentWillUpdate"),l=R(l,(()=>L(n,"componentWillRender"))),R(l,(()=>O(e,n,t)))},O=async(e,t,n)=>{const l=e.m,s=l["s-rc"];n&&(e=>{const t=e.v,n=e.m,l=t.u,s=((e,t)=>{let n=p(t);const l=I.get(n);if(e=11===e.nodeType?e:K,l)if("string"==typeof l){let t,s=d.get(e=e.head||e);s||d.set(e,s=new Set),s.has(n)||(t=K.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);x(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>P(e);0===t.length?n():(Promise.all(t).then(n),e.u|=4,t.length=0)}},x=(n,l)=>{try{l=l.render(),n.u&=-17,n.u|=2,((n,l)=>{const s=n.m,o=n.M||c(null,null),u=(e=>e&&e.p===r)(l)?l:i(null,null,l);t=s.tagName,u.p=null,u.u|=4,n.M=u,u.h=o.h=s.shadowRoot||s,e=s["s-sc"],k(o,u)})(n,l)}catch(e){z(e,n.m)}return null},P=e=>{const t=e.m,n=e.k,l=e.S;L(n,"componentDidRender"),64&e.u||(e.u|=64,E(t),L(n,"componentDidLoad"),e.C(t),l||W()),e.O(t),e.g&&(e.g(),e.g=void 0),512&e.u&&se((()=>M(e,!1))),e.u&=-517},W=()=>{E(K.documentElement),se((()=>f(J,"appload",{detail:{namespace:"core"}})))},L=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){z(e)}},R=(e,t)=>e&&e.then?e.then(t):t(),E=e=>e.classList.add("hydrated"),N=(e,t,n)=>{if(t.P){e.watchers&&(t.W=e.watchers);const l=Object.entries(t.P),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>H(this).L.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=H(e),i=s.m,c=s.L.get(t),r=s.u,u=s.k;if(n=((e,t)=>null==e||o(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.P[t][0]),(!(8&r)||void 0===c)&&n!==c&&(!Number.isNaN(c)||!Number.isNaN(n))&&(s.L.set(t,n),u)){if(l.W&&128&r){const e=l.W[t];e&&e.map((e=>{try{u[e](n,c,t)}catch(e){z(e,i)}}))}2==(18&r)&&M(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=H(this);return n.R.then((()=>n.k[e](...t)))}})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){Q.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},T=(e,t={})=>{const n=[],l=t.exclude||[],s=J.customElements,o=K.head,i=o.querySelector("meta[charset]"),c=K.createElement("style"),r=[];let u,a=!0;Object.assign(Q,t),Q.N=new URL(t.resourcesUrl||"./",K.baseURI).href,e.map((e=>{e[1].map((t=>{const o={u:t[0],$:t[1],P:t[2],T:t[3]};o.P=t[2],o.T=t[3],o.W={};const i=o.$,c=class extends HTMLElement{constructor(e){super(e),V(e=this,o),1&o.u&&e.attachShadow({mode:"open"})}connectedCallback(){u&&(clearTimeout(u),u=null),a?r.push(this):Q.jmp((()=>(e=>{if(0==(1&Q.u)){const t=H(e),n=t.v,l=()=>{};if(1&t.u)U(e,t,n.T);else{t.u|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){v(t,t.S=n);break}}n.P&&Object.entries(n.P).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.u)){{if(t.u|=32,(s=G(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.W=s.watchers,N(s,n,2),s.isProxied=!0);const e=()=>{};t.u|=8;try{new s(t)}catch(e){z(e)}t.u&=-9,t.u|=128,e()}if(s.style){let e=s.style;const t=p(n);if(!I.has(t)){const l=()=>{};((e,t,n)=>{let l=I.get(e);Y&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,I.set(e,l)})(t,e,!!(1&n.u)),l()}}}const o=t.S,i=()=>M(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,n)}l()}})(this)))}disconnectedCallback(){Q.jmp((()=>(()=>{if(0==(1&Q.u)){const e=H(this),t=e.k;e.U&&(e.U.map((e=>e())),e.U=void 0),L(t,"disconnectedCallback")}})()))}componentOnReady(){return H(this).A}};o.D=e[0],l.includes(i)||s.get(i)||(n.push(i),s.define(i,N(c,o,1)))}))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),o.insertBefore(c,i?i.nextSibling:o.firstChild),a=!1,r.length?r.map((e=>e.connectedCallback())):Q.jmp((()=>u=setTimeout(W,30)))},U=(e,t,n)=>{n&&n.map((([n,l,s])=>{const o=e,i=A(t,s),c=D(n);Q.ael(o,l,i,c),(t.U=t.U||[]).push((()=>Q.rel(o,l,i,c)))}))},A=(e,t)=>n=>{try{256&e.u?e.k[t](n):(e.j=e.j||[]).push([t,n])}catch(e){z(e)}},D=e=>0!=(2&e),F=new WeakMap,H=e=>F.get(e),q=(e,t)=>F.set(t.k=e,t),V=(e,t)=>{const n={u:0,m:e,v:t,L:new Map};return n.R=new Promise((e=>n.O=e)),n.A=new Promise((e=>n.C=e)),e["s-p"]=[],e["s-rc"]=[],U(e,n,t.T),F.set(e,n)},_=(e,t)=>t in e,z=(e,t)=>(0,console.error)(e,t),B=new Map,G=e=>{const t=e.$.replace(/-/g,"_"),n=e.D,l=B.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(B.set(n,e),e[t])),z)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},I=new Map,J="undefined"!=typeof window?window:{},K=J.document||{head:{}},Q={u:0,N:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},X=e=>Promise.resolve(e),Y=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),Z=[],ee=[],te=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&Q.u?se(le):Q.raf(le))},ne=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){z(e)}e.length=0},le=()=>{ne(Z),ne(ee),(n=Z.length>0)&&Q.raf(le)},se=e=>X().then(e),oe=te(ee,!0);export{r as H,T as b,a as c,u as g,i as h,X as p,q as r}