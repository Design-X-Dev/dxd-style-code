import{r as s,c as $,a as i,o as m,k as D,b as a,t as y,D as x,E as h}from"./vue.esm-bundler-Nfu98kES.js";const O={class:"w-full","data-component":"DXDatePicker"},z={key:0,class:"block text-sm text-slate-600 mb-1 font-medium"},I={class:"relative"},L=["type","value","placeholder","disabled","readonly"],R={key:1,class:"absolute z-20 mt-2 p-4 bg-white border border-slate-200 rounded-xl shadow-lg"},F={class:"space-y-3"},G={class:"flex gap-2"},H={key:2,class:"mt-1 text-xs text-slate-500"},c={__name:"DXDatePicker",props:{modelValue:[String,Object],label:{type:String,default:""},placeholder:{type:String,default:""},helper:{type:String,default:""},disabled:{type:Boolean,default:!1},range:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:j}){const l=t,g=j,r=s(!1),d=s(""),u=s(""),N=$(()=>{if(l.range&&typeof l.modelValue=="object"&&l.modelValue){const{start:n,end:e}=l.modelValue;return n&&e?`${v(n)} - ${v(e)}`:""}return l.modelValue||""}),v=n=>n?new Date(n).toLocaleDateString("ru-RU"):"",M=n=>g("update:modelValue",n),U=()=>{l.disabled||(r.value=!r.value,r.value&&typeof l.modelValue=="object"&&l.modelValue&&(d.value=l.modelValue.start||"",u.value=l.modelValue.end||""))},W=()=>{d.value&&u.value&&g("update:modelValue",{start:d.value,end:u.value}),r.value=!1};return(n,e)=>(m(),i("div",O,[t.label?(m(),i("label",z,y(t.label),1)):D("",!0),a("div",I,[a("input",{type:t.range?"text":"date",value:N.value,placeholder:t.placeholder,disabled:t.disabled,class:"w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-slate-50",readonly:t.range,onChange:e[0]||(e[0]=o=>!t.range&&M(o.target.value)),onClick:e[1]||(e[1]=o=>t.range&&U())},null,40,L),e[5]||(e[5]=a("svg",{class:"absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1))]),t.range&&r.value?(m(),i("div",R,[a("div",F,[a("div",null,[e[6]||(e[6]=a("label",{class:"text-xs text-slate-600"},"От",-1)),x(a("input",{type:"date","onUpdate:modelValue":e[2]||(e[2]=o=>d.value=o),class:"w-full mt-1 px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/10"},null,512),[[h,d.value]])]),a("div",null,[e[7]||(e[7]=a("label",{class:"text-xs text-slate-600"},"До",-1)),x(a("input",{type:"date","onUpdate:modelValue":e[3]||(e[3]=o=>u.value=o),class:"w-full mt-1 px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/10"},null,512),[[h,u.value]])]),a("div",G,[a("button",{type:"button",class:"flex-1 px-3 py-2 text-sm bg-slate-900 text-white rounded-lg hover:bg-slate-800",onClick:W}," Применить "),a("button",{type:"button",class:"px-3 py-2 text-sm border border-slate-200 rounded-lg hover:bg-slate-50",onClick:e[4]||(e[4]=o=>r.value=!1)}," Отмена ")])])])):D("",!0),t.helper?(m(),i("p",H,y(t.helper),1)):D("",!0)]))}};c.__docgenInfo={exportName:"default",displayName:"DXDatePicker",description:"",tags:{},props:[{name:"modelValue",description:"Значение (v-model) - строка или { start, end } для range",type:{name:"string|object"}},{name:"label",description:"Лейбл",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"placeholder",description:"Placeholder",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"helper",description:"Вспомогательный текст",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"disabled",description:"Отключенное состояние",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"range",description:"Режим диапазона",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXDatePicker/DXDatePicker.vue"]};const q={title:"Molecules/DXDatePicker",component:c,tags:["autodocs"]},p={render:()=>({components:{DXDatePicker:c},setup(){return{date:s("")}},template:'<DXDatePicker v-model="date" label="Date" />'})},f={render:()=>({components:{DXDatePicker:c},setup(){return{date:s("2024-01-15")}},template:'<DXDatePicker v-model="date" label="Selected Date" />'})},b={render:()=>({components:{DXDatePicker:c},setup(){return{date:s("")}},template:'<DXDatePicker v-model="date" label="Birth Date" placeholder="Select your birth date" />'})};var k,V,P;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXDatePicker
    },
    setup() {
      const date = ref('');
      return {
        date
      };
    },
    template: '<DXDatePicker v-model="date" label="Date" />'
  })
}`,...(P=(V=p.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var X,w,S;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXDatePicker
    },
    setup() {
      const date = ref('2024-01-15');
      return {
        date
      };
    },
    template: '<DXDatePicker v-model="date" label="Selected Date" />'
  })
}`,...(S=(w=f.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var C,B,E;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXDatePicker
    },
    setup() {
      const date = ref('');
      return {
        date
      };
    },
    template: '<DXDatePicker v-model="date" label="Birth Date" placeholder="Select your birth date" />'
  })
}`,...(E=(B=b.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const A=["Default","WithValue","WithPlaceholder"];export{p as Default,b as WithPlaceholder,f as WithValue,A as __namedExportsOrder,q as default};
