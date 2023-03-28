import{r as t,c as e,h as i,g as o}from"./p-8f64465f.js";import{d as r}from"./p-94239354.js";const a=class{constructor(i){t(this,i),this.tabChanged=e(this,"tabChanged",7),this.activeIndex=0,this.leftButtonDisabled=!0,this.rightButtonDisabled=!1}handleIndexChange(t){this.activeTab=this.tabGroup[null!=t?t:0],this.selectGroup()}componentDidLoad(){this.createGroup(),this.handleIndexChange(this.activeIndex),this.headerGroupElem.addEventListener("scroll",r((()=>this.handleScroll()),100)),this.handleScrollableHeader(),new ResizeObserver(r((t=>{t.forEach((()=>{this.updateActiveBar(),this.handleScrollableHeader()}))}),250)).observe(this.headerGroupElem)}onSelectedTab(t){this.activeTab=this.tabGroup.find((e=>e.header.headerId===t.detail)),this.activeIndex=this.tabGroup.findIndex((e=>e.header.headerId===t.detail)),this.selectGroup(),this.tabChanged.emit(this.activeIndex)}createGroup(){this.tabsHeader=Array.from(this.host.querySelectorAll("cpy-tab-header")),this.tabsContent=Array.from(this.host.querySelectorAll("cpy-tab-content")),this.tabGroup=this.tabsHeader.map(((t,e)=>({header:t,content:this.tabsContent[e]})))}selectGroup(){this.tabGroup.forEach((t=>{t.content.unselect()})),this.activeTab.content.select(),this.updateActiveBar()}updateActiveBar(){const t=this.headerGroupElem.getBoundingClientRect(),e=this.activeTab.header.getBoundingClientRect();this.activeBarElem.style.left=`${e.left-t.left+this.headerGroupElem.scrollLeft}px`,this.activeBarElem.style.width=`${this.activeTab.header.offsetWidth}px`,this.activeTab.header.scrollIntoView({block:"nearest"})}handleScrollableHeader(){const t=this.headerGroupElem.scrollWidth>this.headerGroupElem.clientWidth;Array.from(this.host.shadowRoot.querySelectorAll("cpy-button")).forEach((e=>e.style.display=t?"block":"none"))}handleScroll(){this.leftButtonDisabled=0===this.headerGroupElem.scrollLeft,this.rightButtonDisabled=Math.abs(this.headerGroupElem.scrollWidth-this.headerGroupElem.clientWidth-this.headerGroupElem.scrollLeft)<1}handleScrollClick(t){this.headerGroupElem.scrollLeft+=t?-this.headerGroupElem.clientWidth/2:this.headerGroupElem.clientWidth/2}render(){return[i("div",{class:"tabs-header"},i("cpy-button",{icon:!0,size:"small",type:"basic",disabled:this.leftButtonDisabled,onClick:()=>this.handleScrollClick(!0)},i("cpy-icon",null,"chevron_left")),i("div",{class:"tabs-header__container",ref:t=>this.headerGroupElem=t},i("slot",{name:"header"}),i("div",{class:"tabs-header__active-bar",ref:t=>this.activeBarElem=t})),i("cpy-button",{icon:!0,size:"small",type:"basic",disabled:this.rightButtonDisabled,onClick:()=>this.handleScrollClick(!1)},i("cpy-icon",null,"chevron_right"))),i("div",{class:"tabs-content"},i("slot",{name:"content"}))]}get host(){return o(this)}static get watchers(){return{activeIndex:["handleIndexChange"]}}};a.style='/*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;border:0 solid #e5e7eb;box-sizing:border-box}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-font-smoothing:auto;font-feature-settings:"salt";font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*{-webkit-tap-highlight-color:transparent;-ms-box-sizing:border-box;box-sizing:border-box;text-rendering:optimizeLegibility;-o-text-rendering:optimizeLegibility;-ms-text-rendering:optimizeLegibility;-moz-text-rendering:optimizeLegibility;-webkit-text-rendering:optimizeLegibility}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.static{position:static}.absolute{position:absolute}.relative{position:relative}.bottom-0{bottom:0}.block{display:block}.flex{display:flex}.table{display:table}.hidden{display:none}.h-0{height:0}.w-4{width:1rem}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.resize{resize:both}.overflow-x-auto{overflow-x:auto}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}\r\n /*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:""}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}:focus{outline:none!important}.h-0\\.5{height:.125rem}:host{display:block}.tabs-header{border-bottom-width:1px;border-color:var(--cpy-bg-basic-border);display:flex;max-width:100%}.tabs-header__container{display:flex;flex:1 1 0%;overflow-x:auto;position:relative;scroll-behavior:smooth}.tabs-header__container::-webkit-scrollbar{display:none}.tabs-header__active-bar{background-color:var(--cpy-bg-primary);bottom:0;height:.125rem;position:absolute;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:1rem}';export{a as cpy_tabs}