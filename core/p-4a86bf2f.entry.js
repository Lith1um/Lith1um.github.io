import{r as t,c as e,h as o}from"./p-b9cc81c0.js";const i=class{constructor(o){t(this,o),this.accordionOpened=e(this,"accordionOpened",3),this.headerTitle=void 0,this.size="default",this.opened=void 0}async open(){this.opened=!0,this.accordionOpened.emit()}async close(){this.opened=!0}async toggle(){this.onToggle()}onToggle(){this.opened=!this.opened,this.opened&&this.accordionOpened.emit()}render(){return o("div",{class:"accordion__container"},o("div",{class:{accordion:!0,"accordion--open":this.opened,[`accordion--${this.size}`]:!!this.size},onClick:()=>this.onToggle()},o("span",null,this.headerTitle),o("cpy-icon",null,"expand_more"),o("cpy-splash",null)),o("cpy-expand-collapse",{expanded:this.opened},o("slot",null)))}};i.style='@font-face{font-family:"Material Icons";font-style:normal;font-weight:400;src:url(./webfonts/MaterialIconsRound-Regular.woff) format("woff")}body{line-height:inherit}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block}img,video{height:auto;max-width:100%}[hidden],.hidden{display:none}*,*::before,*::after{text-rendering:optimizeLegibility;-o-text-rendering:optimizeLegibility;-ms-text-rendering:optimizeLegibility;-moz-text-rendering:optimizeLegibility;-webkit-text-rendering:optimizeLegibility;-webkit-tap-highlight-color:transparent;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;border:0 solid transparent}*:focus{outline:none !important}.accordion{--accordion-bg:var(--cpy-accordion-header-bg, transparent);--accordion-hover-bg:var(--cpy-accordion-header-hover-bg, var(--cpy-bg-hover));--accordion-text-color:var(--cpy-accordion-header-text-color, inherit);display:flex;gap:1rem;width:100%;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem;justify-content:space-between;cursor:pointer;user-select:none;align-items:center;background-color:var(--accordion-bg);color:var(--accordion-text-color)}.accordion:hover{background-color:var(--accordion-hover-bg)}.accordion__container{border-bottom-width:1px;border-color:var(--cpy-bg-basic-border)}.accordion cpy-icon{transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms;width:1.75rem !important;height:1.75rem !important;min-width:1.75rem !important;min-height:1.75rem !important;font-size:1.75rem !important;line-height:1.75rem !important}.accordion cpy-icon svg{width:1.75rem !important;height:1.75rem !important}.accordion--small{font-size:0.875rem;line-height:1.25rem;padding-top:0.25rem;padding-bottom:0.25rem}.accordion--small cpy-icon{width:1.5rem !important;height:1.5rem !important;min-width:1.5rem !important;min-height:1.5rem !important;font-size:1.5rem !important;line-height:1.5rem !important}.accordion--small cpy-icon svg{width:1.5rem !important;height:1.5rem !important}.accordion--large{font-size:1.125rem;line-height:1.75rem;padding-top:1rem;padding-bottom:1rem}.accordion--large cpy-icon{width:2rem !important;height:2rem !important;min-width:2rem !important;min-height:2rem !important;font-size:2rem !important;line-height:2rem !important}.accordion--large cpy-icon svg{width:2rem !important;height:2rem !important}.accordion--open cpy-icon{transform:rotate(-180deg)}';export{i as cpy_accordion}