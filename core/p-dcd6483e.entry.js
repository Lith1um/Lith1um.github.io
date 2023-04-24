import{r as t,c as e,h as o}from"./p-b9cc81c0.js";const i=class{constructor(o){t(this,o),this.closed=e(this,"closed",7),this.opened=e(this,"opened",7),this.position="top-end",this.type=void 0,this.toastTitle=void 0,this.zIndex="999",this.duration=4e3,this.dismissible=!1,this.icon=void 0,this.visible=void 0}async close(){this.visible=!1,this.closed.emit(),this.closeTimer&&clearTimeout(this.closeTimer)}async open(){this.visible=!0,this.opened.emit(),this.closeTimer&&clearTimeout(this.closeTimer),this.duration&&(this.closeTimer=setTimeout((()=>this.close()),this.duration))}render(){return o("div",{class:{toast:!0,"toast--show":this.visible,[`toast--${this.position}`]:!!this.position},style:{zIndex:this.zIndex}},o("div",{class:"toast--container"},o("cpy-alert",{type:this.type,icon:this.icon,dismissible:this.dismissible,onClosed:()=>this.close()},this.toastTitle,o("div",{slot:"content"},o("slot",null)))))}};i.style='@font-face{font-family:"Material Icons";font-style:normal;font-weight:400;src:url(./webfonts/MaterialIconsRound-Regular.woff) format("woff")}body{line-height:inherit}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block}img,video{height:auto;max-width:100%}[hidden],.hidden{display:none}*,*::before,*::after{text-rendering:optimizeLegibility;-o-text-rendering:optimizeLegibility;-ms-text-rendering:optimizeLegibility;-moz-text-rendering:optimizeLegibility;-webkit-text-rendering:optimizeLegibility;-webkit-tap-highlight-color:transparent;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;border:0 solid transparent}*:focus{outline:none !important}.toast{position:fixed;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms;max-width:min(30rem, 100%);--translate-x:100%;--translate-y:0px;transform:translate(var(--translate-x), var(--translate-y))}.toast--container{margin:1rem;border-radius:0.375rem;box-shadow:0 0.25rem 0.375rem -1px var(--cpy-bg-shadow), 0 0.125rem 0.25rem -0.125rem var(--cpy-bg-shadow)}.toast--top-start{--translate-x:-100%;top:0px;left:0px}.toast--top-middle{--translate-x:-50%;--translate-y:-100%;top:0px;left:50%}.toast--top-middle.toast--show{--translate-y:0px}.toast--top-end{--translate-x:100%;top:0px;right:0px}.toast--bottom-start{--translate-x:-100%;bottom:0px;left:0px}.toast--bottom-middle{--translate-x:-50%;--translate-y:100%;bottom:0;left:50%}.toast--bottom-middle.toast--show{--translate-y:0px}.toast--bottom-end{--translate-x:100%;bottom:0px;right:0px}.toast--show:not(.toast--top-middle):not(.toast--bottom-middle){--translate-x:0px}';export{i as cpy_toast}