import{r as t,c as o,h as r,g as e}from"./p-b9cc81c0.js";import{e as a,l as i}from"./p-f7c46fde.js";const n=class{constructor(r){t(this,r),this.closed=o(this,"closed",7),this.checkClickOutside=t=>{t.composedPath().includes(this.dialogContainerElem)||(this.close(),this.removeClickOutsideListener())},this.dialogTitle=void 0,this.zIndex="50",this.size="default"}async open(){a(this.dialogElem,"dialog"),a(this.dialogContainerElem,"dialog-container"),this.addClickOutsideListener()}async close(){i(this.dialogElem,"dialog"),i(this.dialogContainerElem,"dialog-container"),this.closed.emit(),this.removeClickOutsideListener()}addClickOutsideListener(){document.addEventListener("mousedown",this.checkClickOutside)}removeClickOutsideListener(){document.removeEventListener("mousedown",this.checkClickOutside)}render(){return r("div",{class:"dialog hidden",style:{zIndex:this.zIndex},ref:t=>this.dialogElem=t},r("div",{class:{dialog__container:!0,[`dialog__container--${this.size}`]:!!this.size},ref:t=>this.dialogContainerElem=t},r("div",{class:"dialog__container-title"},r("span",null,this.dialogTitle),r("cpy-button",{icon:!0,type:"basic",onClick:()=>this.close()},r("cpy-icon",{class:"dialog__container-close"},"close"))),r("div",{class:"dialog__container-content"},r("slot",null)),this.host.querySelector('[slot="buttons"]')&&r("div",{class:"dialog__container-buttons"},r("slot",{name:"buttons"}))))}get host(){return e(this)}};n.style='/*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;border:0 solid #e5e7eb;box-sizing:border-box}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-font-smoothing:auto;font-feature-settings:"salt";font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*{-webkit-tap-highlight-color:transparent;-ms-box-sizing:border-box;box-sizing:border-box;text-rendering:optimizeLegibility;-o-text-rendering:optimizeLegibility;-ms-text-rendering:optimizeLegibility;-moz-text-rendering:optimizeLegibility;-webkit-text-rendering:optimizeLegibility}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{bottom:0;left:0;right:0;top:0}.flex{display:flex}.table{display:table}.hidden{display:none}.w-full{width:100%}.w-2{width:.5rem}.flex-1{flex:1 1 0%}.-translate-y-full{--tw-translate-y:-100%}.-translate-y-full,.translate-y-0{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-0{--tw-translate-y:0px}.translate-y-full{--tw-translate-y:100%}.transform,.translate-y-full{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.flex-col{flex-direction:column}.items-center{align-items:center}.gap-2{gap:.5rem}.rounded-md{border-radius:.375rem}.rounded{border-radius:.25rem}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.p-2{padding:.5rem}.py-4{padding-bottom:1rem;padding-top:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.pl-6{padding-left:1.5rem}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}\r\n /*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:""}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}:focus{outline:none!important}.max-h-\\[95vh\\]{max-height:95vh}.w-\\[550px\\]{width:550px}.w-\\[350px\\]{width:350px}.w-\\[750px\\]{width:750px}.w-\\[95vw\\]{width:95vw}.max-w-\\[95vw\\]{max-width:95vw}.-translate-y-full,.transform,.translate-y-0,.translate-y-full{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.ease-in-out,.transition{transition-timing-function:cubic-bezier(.4,0,.2,1)}.dialog:not(.hidden){align-items:center;background-color:var(--cpy-bg-overlay);bottom:0;justify-content:center;left:0;position:fixed;right:0;top:0}.dialog:not(.hidden),.dialog__container{display:flex}.dialog__container{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:var(--cpy-dialog-bg,var(--cpy-bg-white));border-radius:.375rem;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);flex-direction:column;max-height:95vh;max-width:95vw;overflow:hidden;width:550px}.dialog__container--small{width:350px}.dialog__container--large{width:750px}.dialog__container--full-screen{width:95vw}.dialog__container-title{align-items:center;border-bottom-width:1px;border-color:var(--cpy-bg-basic-border);display:flex;font-size:1.125rem;gap:.5rem;line-height:1.75rem;padding:.5rem .5rem .5rem 1.5rem;width:100%}.dialog__container-title span{flex:1 1 0%}.dialog__container-content{flex:1 1 0%;overflow-x:auto;padding:1rem 1.5rem}.dialog__container-buttons{border-color:var(--cpy-bg-basic-border);border-top-width:1px;display:flex;gap:.5rem;justify-content:flex-end;padding:.75rem 1.5rem;width:100%}.dialog-enter{transition-duration:.3s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.dialog-enter-start{opacity:0}.dialog-enter-end{opacity:1}.dialog-leave{transition-duration:.3s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.dialog-leave-start{opacity:1}.dialog-leave-end{opacity:0}.dialog-container-enter{transition-duration:.3s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.dialog-container-enter-start{--tw-translate-y:-100%;--tw-scale-x:1.1;--tw-scale-y:1.1}.dialog-container-enter-end,.dialog-container-enter-start{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.dialog-container-enter-end{--tw-translate-y:0px;--tw-scale-x:1;--tw-scale-y:1}.dialog-container-leave{transition-duration:.3s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.dialog-container-leave-start{--tw-translate-y:0px;--tw-scale-x:1;--tw-scale-y:1}.dialog-container-leave-end,.dialog-container-leave-start{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.dialog-container-leave-end{--tw-translate-y:100%;--tw-scale-x:.9;--tw-scale-y:.9}@media (min-width:640px){.dialog__container-content::-webkit-scrollbar{height:.5rem;width:.5rem}.dialog__container-content::-webkit-scrollbar-track{background-color:transparent}.dialog__container-content::-webkit-scrollbar-thumb{background-color:var(--cpy-bg-basic);border-radius:.25rem}.dialog__container-content::-webkit-scrollbar-thumb:hover{background-color:var(--cpy-bg-basic)}}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}';export{n as cpy_dialog}