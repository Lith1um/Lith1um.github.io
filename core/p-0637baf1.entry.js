import{r as t,c as i,h as e}from"./p-49d87984.js";import{d as o,g as r}from"./p-516125a6.js";import{d as n}from"./p-48e85165.js";const s=class{constructor(e){t(this,e),this.valueChange=i(this,"valueChange",7),this._validator=o,this.inputSizeMap=new Map([["small","4rem"],["default","5rem"],["large","6rem"]]),this.value=void 0,this.multiple=!1,this.accept=void 0,this.label=void 0,this.placeholder=void 0,this.required=void 0,this.disabled=void 0,this.size="default",this.validators=void 0,this.interacted=!1}async isValid(){return!!this.disabled||this._validator.validate(this.value)}async markAsTouched(){this.disabled||(this.interacted=!0)}async markAsUntouched(){this.disabled||(this.interacted=!1)}handleChange(){const t=this.inputElem.value;this.value=t,this.valueChange.emit(t),this.interacted=!0}handleBlur(){this.interacted=!0}componentWillLoad(){this._validator=r(this.getValidators())}componentWillUpdate(){this._validator=r(this.getValidators())}getValidators(){var t;let i=null!==(t=this.validators)&&void 0!==t?t:[];return this.required&&i.unshift("required"),i}focusInput(){var t,i;null===(t=this.inputElem)||void 0===t||t.click(),null===(i=this.inputElem)||void 0===i||i.focus()}render(){var t;const i=this._validator.validate(this.value)?"":this._validator.errorMessage(this.value),o={[`input--${this.size}`]:!!this.size};return e("cpy-input-base",{style:{"--cpy-input-container-width":this.inputSizeMap.get(this.size)},label:this.label,size:this.size,required:this.required,interacted:this.interacted,error:i,disabled:this.disabled,onLabelClicked:()=>this.focusInput()},e("slot",{name:"prefix",slot:"prefix"}),e("input",{ref:t=>this.inputElem=t,class:o,type:"color",value:this.value,required:this.required,placeholder:this.placeholder,disabled:this.disabled,onInput:n((()=>this.handleChange()),100),onBlur:()=>this.handleBlur()}),e("span",{class:"color",style:{backgroundColor:null!==(t=this.value)&&void 0!==t?t:"transparent"}}),e("slot",{name:"suffix",slot:"suffix"}))}};s.style='@font-face{font-family:"Material Icons";font-style:normal;font-weight:400;src:url(./webfonts/MaterialIconsRound-Regular.woff) format("woff")}body{line-height:inherit}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block}img,video{height:auto;max-width:100%}[hidden],.hidden{display:none}*,*::before,*::after{text-rendering:optimizeLegibility;-o-text-rendering:optimizeLegibility;-ms-text-rendering:optimizeLegibility;-moz-text-rendering:optimizeLegibility;-webkit-text-rendering:optimizeLegibility;-webkit-tap-highlight-color:transparent;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;border:0 solid transparent}*:focus{outline:none !important}:host{display:block}input{--height:1.5rem;height:var(--height);width:0;opacity:0;background-color:transparent}input.input--small{--height:1.25rem}input.input--large{--height:1.75rem}input:disabled+.color{cursor:default}input+.color{cursor:pointer;border-radius:var(--cpy-input-border-radius);position:relative;height:var(--height);width:100%}';export{s as cpy_input_color}