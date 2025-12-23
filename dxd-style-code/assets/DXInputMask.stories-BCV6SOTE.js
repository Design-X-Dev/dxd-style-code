import{r as l,w as K,a as k,o as h,k as b,b as q,t as g}from"./vue.esm-bundler-Nfu98kES.js";const A={class:"w-full","data-component":"DXInputMask"},L={key:0,class:"block text-sm text-slate-600 mb-1 font-medium"},O=["type","placeholder","value","disabled"],T={key:1,class:"mt-1 text-xs text-slate-500"},r={__name:"DXInputMask",props:{modelValue:{type:String,default:""},mask:{type:String,required:!0},label:{type:String,default:""},placeholder:{type:String,default:""},helper:{type:String,default:""},disabled:{type:Boolean,default:!1},type:{type:String,default:"text"}},emits:["update:modelValue"],setup(t,{emit:Y}){const o=t,C=Y,f=l(null),d=l(""),D=e=>{const a=e.replace(/\D/g,"");let n="",s=0;for(let u=0;u<o.mask.length&&s<a.length;u++)o.mask[u]==="#"?(n+=a[s],s++):n+=o.mask[u];return n},y=e=>e.replace(/\D/g,""),B=e=>{const a=y(e.target.value),n=D(a);d.value=n,C("update:modelValue",a),setTimeout(()=>{if(f.value){const s=n.length;f.value.setSelectionRange(s,s)}},0)},R=e=>{["Backspace","Delete","Tab","Escape","Enter","ArrowLeft","ArrowRight"].includes(e.key)||/^\d$/.test(e.key)||e.preventDefault()};return K(()=>o.modelValue,e=>{e!==y(d.value)&&(d.value=D(e))},{immediate:!0}),(e,a)=>(h(),k("div",A,[t.label?(h(),k("label",L,g(t.label),1)):b("",!0),q("input",{ref_key:"inputRef",ref:f,type:t.type,placeholder:t.placeholder,value:d.value,disabled:t.disabled,class:"w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 transition-colors hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-slate-50",onInput:B,onKeydown:R},null,40,O),t.helper?(h(),k("p",T,g(t.helper),1)):b("",!0)]))}};r.__docgenInfo={exportName:"default",displayName:"DXInputMask",description:"",tags:{},props:[{name:"modelValue",description:"Значение (v-model) - сырое значение без маски",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"mask",description:'Маска: # = цифра, например "+7 (###) ###-##-##"',type:{name:"string"},required:!0},{name:"label",description:"Лейбл",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"placeholder",description:"Placeholder",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"helper",description:"Вспомогательный текст",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"disabled",description:"Отключенное состояние",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",description:"Тип input",type:{name:"string"},defaultValue:{func:!1,value:'"text"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXInputMask/DXInputMask.vue"]};const F={title:"Molecules/DXInputMask",component:r,tags:["autodocs"]},c={render:()=>({components:{DXInputMask:r},setup(){return{phone:l("")}},template:'<DXInputMask v-model="phone" mask="+7 (###) ###-##-##" label="Phone" placeholder="+7 (999) 123-45-67" />'})},p={render:()=>({components:{DXInputMask:r},setup(){return{card:l("")}},template:'<DXInputMask v-model="card" mask="#### #### #### ####" label="Card Number" placeholder="0000 0000 0000 0000" />'})},m={render:()=>({components:{DXInputMask:r},setup(){return{date:l("")}},template:'<DXInputMask v-model="date" mask="##/##/####" label="Date" placeholder="DD/MM/YYYY" />'})},i={render:()=>({components:{DXInputMask:r},setup(){return{ssn:l("")}},template:'<DXInputMask v-model="ssn" mask="###-##-####" label="SSN" placeholder="123-45-6789" />'})};var M,I,v;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputMask
    },
    setup() {
      const phone = ref('');
      return {
        phone
      };
    },
    template: '<DXInputMask v-model="phone" mask="+7 (###) ###-##-##" label="Phone" placeholder="+7 (999) 123-45-67" />'
  })
}`,...(v=(I=c.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var X,S,x;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputMask
    },
    setup() {
      const card = ref('');
      return {
        card
      };
    },
    template: '<DXInputMask v-model="card" mask="#### #### #### ####" label="Card Number" placeholder="0000 0000 0000 0000" />'
  })
}`,...(x=(S=p.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var V,w,N;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputMask
    },
    setup() {
      const date = ref('');
      return {
        date
      };
    },
    template: '<DXInputMask v-model="date" mask="##/##/####" label="Date" placeholder="DD/MM/YYYY" />'
  })
}`,...(N=(w=m.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var _,E,P;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputMask
    },
    setup() {
      const ssn = ref('');
      return {
        ssn
      };
    },
    template: '<DXInputMask v-model="ssn" mask="###-##-####" label="SSN" placeholder="123-45-6789" />'
  })
}`,...(P=(E=i.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};const G=["Phone","CreditCard","Date","SSN"];export{p as CreditCard,m as Date,c as Phone,i as SSN,G as __namedExportsOrder,F as default};
