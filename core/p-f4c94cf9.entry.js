import{r as e,c as r,h as t}from"./p-b9cc81c0.js";const a=class{constructor(t){e(this,t),this.closed=r(this,"closed",7),this.icons={success:"check_circle",warn:"warning",error:"cancel"},this.type=void 0,this.appearance="soft",this.container=!0,this.icon=void 0,this.dismissible=void 0}render(){const e=this.icon||this.icons[this.type];return t("div",{class:{alert:!0,"alert--no-container":!this.container,[`alert-level-${this.type}`]:!!this.type,[`alert-appearance-${this.appearance}`]:!(!this.container||!this.appearance)}},"border"===this.appearance&&t("div",{class:"alert-border"}),t("div",{class:"alert-icon"},e&&t("cpy-icon",null,e)),t("div",{class:"alert-content"},t("div",{class:"alert-title"},this.dismissible&&this.container&&t("cpy-button",{class:"alert__close",icon:!0,type:"basic",onClick:()=>this.closed.emit()},t("cpy-icon",{class:"alert__close--icon"},"close")),t("div",{class:"alert-title--slot"},t("slot",null))),t("div",{class:"alert-message"},t("slot",{name:"content"}))))}};a.style='@font-face{font-family:"Material Icons";font-style:normal;font-weight:400;src:url(./webfonts/MaterialIconsRound-Regular.woff) format("woff")}body{line-height:inherit}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block}img,video{height:auto;max-width:100%}[hidden],.hidden{display:none}*,*::before,*::after{text-rendering:optimizeLegibility;-o-text-rendering:optimizeLegibility;-ms-text-rendering:optimizeLegibility;-moz-text-rendering:optimizeLegibility;-webkit-text-rendering:optimizeLegibility;-webkit-tap-highlight-color:transparent;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;border:0 solid transparent}*:focus{outline:none !important}:host{display:block}.alert{--alert-bg:var(--cpy-alert-bg, transparent);position:relative;display:flex;padding:1rem;border-radius:0.375rem;margin-bottom:1.25rem;background-color:var(--alert-bg);}.alert--no-container{background-color:transparent !important;padding:0px;margin-bottom:0.5rem}.alert__close{position:absolute;top:0px;right:0px;z-index:10}.alert .alert-icon:not(:empty){margin-right:0.5rem}.alert .alert-icon cpy-icon{display:block;width:1.5rem !important;height:1.5rem !important;min-width:1.5rem !important;min-height:1.5rem !important;font-size:1.5rem !important;line-height:1.5rem !important}.alert .alert-icon cpy-icon svg{width:1.5rem !important;height:1.5rem !important}.alert .alert-content{display:flex;flex-direction:column;}.alert .alert-content .alert-title{font-size:1rem;line-height:1.5rem;font-weight:600}.alert .alert-content .alert-title .alert__close+.alert-title--slot{margin-right:3rem}.alert .alert-content .alert-message{color:var(--cpy-text-base);word-break:break-word}.alert .alert-content .alert-message:last-child{margin-bottom:0px}.alert.alert-appearance-border{position:relative;overflow:hidden;border-radius:0.375rem;box-shadow:0 0.25rem 0.375rem -1px var(--cpy-bg-shadow), 0 0.125rem 0.25rem -0.125rem var(--cpy-bg-shadow);background-color:var(--cpy-bg-white) !important}.alert.alert-appearance-border .alert-border{position:absolute;left:0px;top:0px;bottom:0px;width:0.25rem;background-color:var(--alert-bg)}.alert.alert-appearance-soft .alert-icon,.alert.alert-appearance-soft .alert-title{color:var(--cpy-dm-text-override)}.alert.alert-appearance-soft .alert-icon .alert__close--icon,.alert.alert-appearance-soft .alert-title .alert__close--icon{color:var(--cpy-dm-text-override)}.alert.alert-level-primary{background-color:var(--cpy-bg-primary-light);color:var(--cpy-text-primary)}.alert.alert-level-primary.alert-appearance-border .alert-border{background-color:var(--cpy-bg-primary)}.alert.alert-level-basic{background-color:var(--cpy-bg-basic-light);color:var(--cpy-text-base)}.alert.alert-level-basic.alert-appearance-border .alert-border{background-color:var(--cpy-bg-basic)}.alert.alert-level-secondary{background-color:var(--cpy-bg-secondary-light);color:var(--cpy-text-secondary)}.alert.alert-level-secondary.alert-appearance-border .alert-border{background-color:var(--cpy-bg-secondary)}.alert.alert-level-success{background-color:var(--cpy-bg-success-light);color:var(--cpy-text-success)}.alert.alert-level-success.alert-appearance-border .alert-border{background-color:var(--cpy-bg-success)}.alert.alert-level-warn{background-color:var(--cpy-bg-warn-light);color:var(--cpy-text-warn)}.alert.alert-level-warn.alert-appearance-border .alert-border{background-color:var(--cpy-bg-warn)}.alert.alert-level-error{background-color:var(--cpy-bg-error-light);color:var(--cpy-text-error)}.alert.alert-level-error.alert-appearance-border .alert-border{background-color:var(--cpy-bg-error)}';export{a as cpy_alert}