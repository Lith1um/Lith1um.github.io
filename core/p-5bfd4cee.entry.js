import{r as t,c as e,h as i}from"./p-49d87984.js";import{d as o,g as n}from"./p-4bd2594a.js";const r=class{constructor(i){t(this,i),this.valueChange=e(this,"valueChange",7),this._validator=o,this.type="text",this.value=void 0,this.label=void 0,this.placeholder=void 0,this.required=void 0,this.disabled=void 0,this.size="default",this.validators=void 0,this.interacted=!1}async isValid(){return!!this.disabled||this._validator.validate(this.value)}async markAsTouched(){this.disabled||(this.interacted=!0)}async markAsUntouched(){this.disabled||(this.interacted=!1)}handleChange(t){const e=t.target,i="number"===this.type?e.value.length>0?parseFloat(e.value):void 0:e.value;this.value=i,this.valueChange.emit(i)}handleBlur(){this.interacted=!0}componentWillLoad(){this._validator=n(this.getValidators())}componentWillUpdate(){this._validator=n(this.getValidators())}getValidators(){var t,e;let i=null!==(t=this.validators)&&void 0!==t?t:[];return"password"!==this.type&&(i=[this.type,...null!==(e=this.validators)&&void 0!==e?e:[]]),this.required&&i.unshift("required"),i}focusInput(){var t;null===(t=this.inputElem)||void 0===t||t.focus()}render(){const t=this._validator.validate(this.value)?"":this._validator.errorMessage(this.value);return i("cpy-input-base",{label:this.label,size:this.size,required:this.required,interacted:this.interacted,error:t,disabled:this.disabled,onLabelClicked:()=>this.focusInput()},i("slot",{name:"prefix",slot:"prefix"}),i("input",{ref:t=>this.inputElem=t,type:this.type,required:this.required,placeholder:this.placeholder,disabled:this.disabled,value:this.value,onInput:t=>this.handleChange(t),onBlur:()=>this.handleBlur()}),i("slot",{name:"suffix",slot:"suffix"}))}};r.style='@font-face{font-family:"Material Icons";font-style:normal;font-weight:400;src:url(./webfonts/MaterialIconsRound-Regular.woff) format("woff")}body{line-height:inherit}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block}img,video{height:auto;max-width:100%}[hidden],.hidden{display:none}*,*::before,*::after{text-rendering:optimizeLegibility;-o-text-rendering:optimizeLegibility;-ms-text-rendering:optimizeLegibility;-moz-text-rendering:optimizeLegibility;-webkit-text-rendering:optimizeLegibility;-webkit-tap-highlight-color:transparent;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;border:0 solid transparent}*:focus{outline:none !important}:host{display:block}input{width:100%;background-color:transparent}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{appearance:textfield;-moz-appearance:textfield}';export{r as cpy_input}