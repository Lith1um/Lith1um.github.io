"use strict";(self.webpackChunkangular_template=self.webpackChunkangular_template||[]).push([[511],{3511:(A,u,r)=>{r.r(u),r.d(u,{ExampleModule:()=>Z});var d=r(5843),s=r(3060),i=r(4006),o=r(7551),e=r(4650),g=r(6895),p=r(811),c=r(7151),m=r(3109);const f=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home-page"]],decls:44,vars:0,consts:[[1,"max-w-full","prose","lg:prose-xl","prose-a:text-sky-600"],["href","https://material.angular.io/"],["href","https://tailwindcss.com/"],["href","https://momentjs.com/"],["href","https://formly.dev/"],["href","https://lodash.com/"],["href","https://www.npmjs.com/package/ngx-colours"],["routerLink","/form-example"]],template:function(a,n){1&a&&(e.TgZ(0,"app-page-container")(1,"article",0)(2,"h2"),e._uU(3,"Angular Template Project"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Welcome to the angular template project! This started as an idea to create a project designed to make building new apps in angular as easy as possible. It contains the various configuration, boilerplate and functionality that a large number of modern angular websites require to be built in a scalable way. The main plan is to be able to use this repo as a blueprint for future projects, cutting down on the time required to get new Front-End projects off the ground."),e.qZA(),e.TgZ(6,"h3"),e._uU(7,"Dependencies"),e.qZA(),e.TgZ(8,"p"),e._uU(9,"A number of open-source libraries are utilised in this app, you can find more on them below:"),e.qZA(),e.TgZ(10,"ul")(11,"li")(12,"a",1),e._uU(13,"Angular Material/CDK"),e.qZA(),e._uU(14," - Material Design components and behavior primitives for Angular."),e.qZA(),e.TgZ(15,"li")(16,"a",2),e._uU(17,"TailwindCSS"),e.qZA(),e._uU(18," - A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."),e.qZA(),e.TgZ(19,"li")(20,"a",3),e._uU(21,"MomentJS"),e.qZA(),e._uU(22," - Parse, validate, manipulate and display dates and times in JavaScript."),e.qZA(),e.TgZ(23,"li")(24,"a",4),e._uU(25,"Ngx-Formly"),e.qZA(),e._uU(26," - Dynamic (JSON powered) form library for Angular that bring unmatched maintainability to your application's forms."),e.qZA(),e.TgZ(27,"li")(28,"a",5),e._uU(29,"Lodash"),e.qZA(),e._uU(30," - A modern JavaScript utility library delivering modularity, performance & extras."),e.qZA(),e.TgZ(31,"li")(32,"a",6),e._uU(33,"Ngx-Colours"),e.qZA(),e._uU(34," - A beautiful color picker for angular that let you choose from a color palette."),e.qZA()(),e.TgZ(35,"h3"),e._uU(36,"Features"),e.qZA(),e.TgZ(37,"p"),e._uU(38,"Various features and components are provided out of the box to make developing a new app as painless as possible. Below are some examples of what's available"),e.qZA(),e.TgZ(39,"ul")(40,"li")(41,"a",7),e._uU(42,"Easy form building"),e.qZA(),e._uU(43," - configure forms with nothing but config."),e.qZA()()()())},dependencies:[s.yS,m.GD],encapsulation:2}),t})()},{path:"form-example",component:(()=>{class t{constructor(){this.fields=[],this.model=this.createModel(),this.form=new i.cw({}),this.options={},this.formClass="mat-default",this.textInputCode="\nfcTextInput(\n  'text', // form control name\n  'Text', // label to display\n  {\n    // config options\n    maxLength: 10,\n    required: true\n  }\n)"}get saveDisabled(){return!(this.form&&this.form.dirty&&this.form.touched&&this.form.valid)}ngOnInit(){this.configureFields()}createModel(){return{text:"some text",textarea:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper vulputate sagittis. Sed sem lorem, efficitur sit amet elementum at, suscipit nec dui.",colour:"#0084C7",checkbox:!1,dateDisabled:"2022-06-12",toggle:!0,number:45}}configureFields(){this.fields=[(0,o.c6)("text","Text",{maxLength:10,required:!0}),(0,o.kp)("textarea","Textarea",{}),(0,o.$s)((0,o.Cc)("colour","Colour",{required:!0}),(0,o.T0)("select","Select",{options:[{id:1,name:"Option 1"},{id:2,name:"Option 2"},{id:3,name:"Option 3"},{id:4,name:"Option 4"},{id:5,name:"Option 5"}]}),(0,o.P0)("checkbox","Checkbox",{})),(0,o.$s)((0,o.Kb)("dateDisabled","Date disabled",{disabled:!0}),(0,o.Kb)("date","Date",{})),(0,o.$s)((0,o.o2)("time","Time",{}),(0,o.sf)("toggle","Toggle",{})),(0,o.$s)((0,o.Bo)("number","Number",{required:!0})),(0,o.sO)("button-toggle","Button Toggle",{options:[{id:1,name:"Mon"},{id:2,name:"Tue"},{id:3,name:"Wed"},{id:4,name:"Thu"},{id:5,name:"Fri"},{id:6,name:"Sat"},{id:7,name:"Sun"}]})]}save(){console.log("model",this.form.getRawValue())}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-form-page"]],decls:30,vars:9,consts:[[1,"max-w-full","prose","lg:prose-xl","mb-6"],[1,"mb-3"],[1,"h-[42px]","items-center","mb-8",3,"ngModel","ngModelChange"],["value","mat-default"],["value","mat-dense"],["value","mat-inline"],[1,"mb-4",3,"ngClass"],[3,"formGroup"],[3,"model","fields","options","form"],[3,"json"]],template:function(a,n){1&a&&(e.TgZ(0,"app-page-container")(1,"article",0)(2,"h2"),e._uU(3,"Form examples"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"This section contains example form fields that can be configured out the box. A custom wrapper and styling system on top of ngx-formly provides an easy to use set of helper functions that configure your forms through config alone."),e.qZA(),e.TgZ(6,"p"),e._uU(7,"See an example below for a text field:"),e.qZA(),e.TgZ(8,"pre"),e._uU(9,"      "),e.TgZ(10,"code"),e._uU(11),e.qZA(),e._uU(12,"\n    "),e.qZA(),e.TgZ(13,"h4"),e._uU(14,"Example Form"),e.qZA()(),e.TgZ(15,"p",1),e._uU(16,"Available form styles:"),e.qZA(),e.TgZ(17,"mat-button-toggle-group",2),e.NdJ("ngModelChange",function(b){return n.formClass=b}),e.TgZ(18,"mat-button-toggle",3),e._uU(19,"Default"),e.qZA(),e.TgZ(20,"mat-button-toggle",4),e._uU(21,"Dense"),e.qZA(),e.TgZ(22,"mat-button-toggle",5),e._uU(23,"Inline"),e.qZA()(),e.TgZ(24,"div",6)(25,"form",7),e._UZ(26,"formly-form",8),e.qZA()(),e.TgZ(27,"p",1),e._uU(28,"Resulting form value (updates as you edit the form):"),e.qZA(),e._UZ(29,"app-json",9),e.qZA()),2&a&&(e.xp6(11),e.Oqu(n.textInputCode),e.xp6(6),e.Q6J("ngModel",n.formClass),e.xp6(7),e.Q6J("ngClass",n.formClass),e.xp6(1),e.Q6J("formGroup",n.form),e.xp6(1),e.Q6J("model",n.model)("fields",n.fields)("options",n.options)("form",n.form),e.xp6(3),e.Q6J("json",n.form.getRawValue()))},dependencies:[g.mk,i._Y,i.JJ,i.JL,i.On,i.sg,p.A9,p.Yi,c.T7,m._,m.GD],encapsulation:2}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(f),s.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[h,d.m]}),t})()}}]);