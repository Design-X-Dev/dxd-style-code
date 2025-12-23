import{a as X,o as D,b as d,r as u,c as V,e as x,g as S,l as C,f as E,C as c}from"./vue.esm-bundler-Nfu98kES.js";import{u as k}from"./useClassComposition-Dym2pzZ_.js";import{_ as B}from"./DXFormLabel-Drk-51Wk.js";import{_}from"./DXIcon-DQdlGsO1.js";import{r as A}from"./EyeIcon-DCzVVwPa.js";import"./ExclamationCircleIcon-DOJNx4bv.js";import"./CheckCircleIcon-BeodL6Lf.js";import"./useSize-D8MrabOp.js";import"./useAnimation-CL8rPOHu.js";function q(e,r){return D(),X("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"})])}const N={class:"relative"},$=["type","placeholder","value","disabled"],L=["disabled","aria-label"],M="w-full pr-11 h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 transition-colors",s={__name:"DXPasswordInput",props:{modelValue:{type:String,default:""},label:{type:String,default:""},required:{type:Boolean,default:!1},placeholder:{type:String,default:""},error:{type:String,default:""},helper:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e){const r=e,a=u(!1),y=V(()=>k(M,{"hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300":!r.disabled,"opacity-60 cursor-not-allowed bg-slate-50":r.disabled,"border-rose-300 focus:ring-rose-500/10":r.error}));return(I,t)=>(D(),x(B,{label:e.label,error:e.error,helper:e.helper,required:e.required,"data-component":"DXPasswordInput","data-disabled":e.disabled,"data-error":!!e.error},{default:S(()=>[d("div",N,[d("input",{type:a.value?"text":"password",placeholder:e.placeholder,value:e.modelValue,disabled:e.disabled,class:C(y.value),onInput:t[0]||(t[0]=p=>I.$emit("update:modelValue",p.target.value))},null,42,$),d("button",{type:"button",class:"absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition",disabled:e.disabled,onClick:t[1]||(t[1]=p=>a.value=!a.value),"aria-label":a.value?"Скрыть пароль":"Показать пароль"},[E(_,{icon:a.value?c(q):c(A),size:"md",animation:"scale"},null,8,["icon"])],8,L)])]),_:1},8,["label","error","helper","required","data-disabled","data-error"]))}};s.__docgenInfo={exportName:"default",displayName:"DXPasswordInput",description:"",tags:{},props:[{name:"modelValue",description:"Значение (v-model)",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"label",description:"Лейбл",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"required",description:"Обязательное поле",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",description:"Placeholder",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"error",description:"Текст ошибки",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"helper",description:"Вспомогательный текст",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"disabled",description:"Отключенное состояние",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXPasswordInput/DXPasswordInput.vue"]};const K={title:"Molecules/DXPasswordInput",component:s,tags:["autodocs"]},o={render:()=>({components:{DXPasswordInput:s},setup(){return{password:u("")}},template:'<DXPasswordInput v-model="password" label="Password" placeholder="Enter password" />'})},n={render:()=>({components:{DXPasswordInput:s},setup(){return{password:u("secretpassword")}},template:'<DXPasswordInput v-model="password" label="Password" />'})},l={render:()=>({components:{DXPasswordInput:s},setup(){return{password:u("")}},template:'<DXPasswordInput v-model="password" label="Password" helper="At least 8 characters" />'})};var i,m,f;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXPasswordInput
    },
    setup() {
      const password = ref('');
      return {
        password
      };
    },
    template: '<DXPasswordInput v-model="password" label="Password" placeholder="Enter password" />'
  })
}`,...(f=(m=o.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var w,b,h;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXPasswordInput
    },
    setup() {
      const password = ref('secretpassword');
      return {
        password
      };
    },
    template: '<DXPasswordInput v-model="password" label="Password" />'
  })
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,P,g;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXPasswordInput
    },
    setup() {
      const password = ref('');
      return {
        password
      };
    },
    template: '<DXPasswordInput v-model="password" label="Password" helper="At least 8 characters" />'
  })
}`,...(g=(P=l.parameters)==null?void 0:P.docs)==null?void 0:g.source}}};const Q=["Default","WithValue","WithHelper"];export{o as Default,l as WithHelper,n as WithValue,Q as __namedExportsOrder,K as default};
