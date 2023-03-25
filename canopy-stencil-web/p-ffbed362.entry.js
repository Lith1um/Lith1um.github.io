import{r as t,c as e,h as i}from"./p-8f64465f.js";import{d as r,g as n}from"./p-7ca0c403.js";const o=class{constructor(i){t(this,i),this.valueChange=e(this,"valueChange",7),this._validator=r,this.type="text",this.value=void 0,this.label=void 0,this.required=void 0,this.disabled=void 0,this.size="default",this.validators=void 0,this.interacted=!1}async isValid(){return!!this.disabled||this._validator.validate(this.value)}async markAsTouched(){this.disabled||(this.interacted=!0)}handleChange(t){const e=t.target,i="number"===this.type?e.value.length>0?parseFloat(e.value):void 0:e.value;this.value=i,this.valueChange.emit(i)}handleBlur(){this.interacted=!0}componentWillLoad(){this._validator=n(this.getValidators())}componentWillUpdate(){this._validator=n(this.getValidators())}getValidators(){var t;const e=[this.type,...null!==(t=this.validators)&&void 0!==t?t:[]];return this.required&&e.unshift("required"),e}render(){const t=this.interacted&&!this._validator.validate(this.value)?this._validator.errorMessage:"";return i("label",{class:{input:!0,"input--disabled":this.disabled,"input--invalid":!!t,[`input--${this.size}`]:!!this.size}},i("div",{class:{input__label:!0,"input__label--required":this.required}},this.label),i("div",{class:"input__container"},i("slot",{name:"prefix"}),i("input",{type:this.type,required:this.required,disabled:this.disabled,value:this.value,onInput:t=>this.handleChange(t),onBlur:()=>this.handleBlur()}),i("slot",{name:"suffix"})),!this.disabled&&t&&i("div",{class:"input__errors"},t))}};o.style='/*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;border:0 solid #e5e7eb;box-sizing:border-box}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-font-smoothing:auto;font-feature-settings:"salt";font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*{-webkit-tap-highlight-color:transparent;-ms-box-sizing:border-box;box-sizing:border-box;text-rendering:optimizeLegibility;-o-text-rendering:optimizeLegibility;-ms-text-rendering:optimizeLegibility;-moz-text-rendering:optimizeLegibility;-webkit-text-rendering:optimizeLegibility}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.static{position:static}.ml-0{margin-left:0}.mt-1{margin-top:.25rem}.flex{display:flex}.table{display:table}.hidden{display:none}.flex-1{flex:1 1 0%}.gap-1{gap:.25rem}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rounded-md{border-radius:.375rem}.border{border-width:1px}.bg-transparent{background-color:transparent}.p-1{padding:.25rem}.p-2{padding:.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.icon-size-4{font-size:1rem;line-height:1rem;min-height:1rem;min-width:1rem}.icon-size-4,.icon-size-4 svg{height:1rem;width:1rem}.icon-size-5{font-size:1.25rem;line-height:1.25rem;min-height:1.25rem;min-width:1.25rem}.icon-size-5,.icon-size-5 svg{height:1.25rem;width:1.25rem}.icon-size-6{font-size:1.5rem;line-height:1.5rem;min-height:1.5rem;min-width:1.5rem}.icon-size-6,.icon-size-6 svg{height:1.5rem;width:1.5rem}\r\n /*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:""}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}:focus{outline:none!important}.p-1\\.5{padding:.375rem}.p-2\\.5{padding:.625rem}.input:focus-within .input__label--required:after{color:var(--cpy-text-primary)}.input:focus-within .input__container{border-color:var(--cpy-bg-primary)}.input--disabled{cursor:default}.input--disabled .input__container,.input--disabled .input__label{color:var(--cpy-text-disabled)!important}.input--disabled .input__container{background-color:var(--cpy-bg-disabled)!important}.input--invalid .input__label--required:after{color:var(--cpy-text-error)}.input--invalid .input__container{border-color:var(--cpy-bg-error)}.input__label{font-size:.875rem;line-height:1.25rem;margin-bottom:.25rem}.input__label.input__label--required:after{content:"*";margin-left:.125rem}.input__container{background-color:var(--cpy-bg-white);border-color:var(--cpy-bg-basic-border);border-radius:.375rem;border-width:1px;display:flex;gap:.375rem;padding:.5rem}.input__container input{background-color:transparent;flex:1 1 0%;line-height:1.5rem}.input__container input::-webkit-inner-spin-button,.input__container input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.input__container input[type=number]{-moz-appearance:textfield}.input__container ::slotted(cpy-icon){font-size:1.25rem!important;height:1.25rem!important;line-height:1.25rem!important;min-height:1.25rem!important;min-width:1.25rem!important;width:1.25rem!important}.input__container ::slotted(cpy-icon) svg{height:1.25rem!important;width:1.25rem!important}.input__errors{color:var(--cpy-text-error);margin-top:.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.input--small .input__label,.input__errors{font-size:.75rem;line-height:1rem}.input--small .input__container{font-size:.875rem;gap:.25rem;line-height:1.25rem;padding:.375rem}.input--small .input__container input{line-height:1.25rem}.input--small .input__container ::slotted(cpy-icon){font-size:1rem!important;height:1rem!important;line-height:1rem!important;min-height:1rem!important;min-width:1rem!important;width:1rem!important}.input--small .input__container ::slotted(cpy-icon) svg{height:1rem!important;width:1rem!important}.input--large .input__label{font-size:1rem;line-height:1.5rem}.input--large .input__container{font-size:1.125rem;gap:.5rem;line-height:1.75rem;padding:.625rem}.input--large .input__container input{line-height:1.75rem}.input--large .input__container ::slotted(cpy-icon){font-size:1.5rem!important;height:1.5rem!important;line-height:1.5rem!important;min-height:1.5rem!important;min-width:1.5rem!important;width:1.5rem!important}.input--large .input__container ::slotted(cpy-icon) svg{height:1.5rem!important;width:1.5rem!important}.input--large .input__errors{font-size:.875rem;line-height:1.25rem}';export{o as cpy_input}