import{c as N,a as r,o as t,b as d,k as o,q as v,t as n,e as B,m as x,l as L,f as y,r as c}from"./vue.esm-bundler-Nfu98kES.js";import{_}from"./DXIcon-DQdlGsO1.js";import{_ as b}from"./DXValidationIcon-BmLS25-6.js";import"./useSize-D8MrabOp.js";import"./useAnimation-CL8rPOHu.js";import"./InformationCircleIcon-DsJgS0pw.js";import"./ExclamationCircleIcon-DOJNx4bv.js";import"./CheckCircleIcon-BeodL6Lf.js";const $={class:"w-full","data-component":"DXFormControl"},j={class:"flex items-center justify-between mb-1"},q={key:0,class:"text-sm font-medium text-slate-700"},z={key:0,class:"text-rose-500"},O={key:1,class:"text-xs text-slate-500"},H={class:"relative"},P={key:0,class:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"},W={key:1,class:"absolute right-3 top-1/2 -translate-y-1/2"},G={key:0,class:"mt-1 text-xs text-rose-500 flex items-center gap-1"},M={key:1,class:"mt-1 text-xs text-slate-500"},a={__name:"DXFormControl",props:{label:{type:String,default:""},error:{type:String,default:""},helper:{type:String,default:""},required:{type:Boolean,default:!1},validationState:{type:String,default:""},prefixIcon:{type:[Object,Function],default:null},maxLength:{type:Number,default:0},currentLength:{type:Number,default:0},showCount:{type:Boolean,default:!1}},setup(e){const p=e,f=N(()=>p.validationState==="success"||p.validationState==="error");return(l,T)=>(t(),r("div",$,[d("div",j,[e.label?(t(),r("label",q,[v(n(e.label)+" ",1),e.required?(t(),r("span",z,"*")):o("",!0)])):o("",!0),e.maxLength&&e.showCount?(t(),r("span",O,n(e.currentLength)+" / "+n(e.maxLength),1)):o("",!0)]),d("div",H,[l.$slots.prefix||e.prefixIcon?(t(),r("div",P,[e.prefixIcon?(t(),B(_,{key:0,icon:e.prefixIcon,size:"sm",animation:"none"},null,8,["icon"])):o("",!0),x(l.$slots,"prefix")])):o("",!0),d("div",{class:L({"pl-11":l.$slots.prefix||e.prefixIcon,"pr-10":f.value})},[x(l.$slots,"default")],2),f.value?(t(),r("div",W,[y(b,{state:e.validationState,size:"md"},null,8,["state"])])):o("",!0)]),e.error?(t(),r("p",G,[y(b,{state:"error",size:"xs"}),v(" "+n(e.error),1)])):e.helper?(t(),r("p",M,n(e.helper),1)):o("",!0)]))}};a.__docgenInfo={exportName:"default",displayName:"DXFormControl",description:"",tags:{},props:[{name:"label",description:"Лейбл",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"error",description:"Текст ошибки",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"helper",description:"Вспомогательный текст",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"required",description:"Обязательное поле",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validationState",description:"Состояние валидации: success | error | ''",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"prefixIcon",description:"Иконка-префикс",type:{name:"object|func"},defaultValue:{func:!1,value:"null"}},{name:"maxLength",description:"Максимальная длина",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"currentLength",description:"Текущая длина",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"showCount",description:"Показывать счетчик",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"prefix"},{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXFormControl/DXFormControl.vue"]};const ee={title:"Molecules/DXFormControl",component:a,tags:["autodocs"]},s={render:()=>({components:{DXFormControl:a},setup(){return{value:c("")}},template:`
      <DXFormControl label="Email">
        <input v-model="value" type="email" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Enter email" />
      </DXFormControl>
    `})},u={render:()=>({components:{DXFormControl:a},setup(){return{value:c("Hello")}},template:`
      <DXFormControl label="Bio" :max-length="100" :current-length="5" show-count>
        <textarea v-model="value" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" rows="3"></textarea>
      </DXFormControl>
    `})},m={render:()=>({components:{DXFormControl:a},setup(){return{value:c("valid@email.com")}},template:`
      <DXFormControl label="Email" validation-state="success">
        <input v-model="value" type="email" class="w-full rounded-xl border border-emerald-300 px-4 py-3 text-sm" />
      </DXFormControl>
    `})},i={render:()=>({components:{DXFormControl:a},setup(){return{value:c("invalid")}},template:`
      <DXFormControl label="Email" validation-state="error" error="Invalid email format">
        <input v-model="value" type="email" class="w-full rounded-xl border border-rose-300 px-4 py-3 text-sm" />
      </DXFormControl>
    `})};var C,h,D;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFormControl
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <DXFormControl label="Email">
        <input v-model="value" type="email" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Enter email" />
      </DXFormControl>
    \`
  })
}`,...(D=(h=s.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var F,X,g;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFormControl
    },
    setup() {
      const value = ref('Hello');
      return {
        value
      };
    },
    template: \`
      <DXFormControl label="Bio" :max-length="100" :current-length="5" show-count>
        <textarea v-model="value" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" rows="3"></textarea>
      </DXFormControl>
    \`
  })
}`,...(g=(X=u.parameters)==null?void 0:X.docs)==null?void 0:g.source}}};var V,w,S;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFormControl
    },
    setup() {
      const value = ref('valid@email.com');
      return {
        value
      };
    },
    template: \`
      <DXFormControl label="Email" validation-state="success">
        <input v-model="value" type="email" class="w-full rounded-xl border border-emerald-300 px-4 py-3 text-sm" />
      </DXFormControl>
    \`
  })
}`,...(S=(w=m.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var E,k,I;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFormControl
    },
    setup() {
      const value = ref('invalid');
      return {
        value
      };
    },
    template: \`
      <DXFormControl label="Email" validation-state="error" error="Invalid email format">
        <input v-model="value" type="email" class="w-full rounded-xl border border-rose-300 px-4 py-3 text-sm" />
      </DXFormControl>
    \`
  })
}`,...(I=(k=i.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const te=["Default","WithCounter","ValidationSuccess","ValidationError"];export{s as Default,i as ValidationError,m as ValidationSuccess,u as WithCounter,te as __namedExportsOrder,ee as default};
