import{r as i,c as E,w as J,A as Q,d as Z,a as r,o as n,k as m,b as v,u as f,E as ee,G as te,q as b,l as B,s as k,F as oe,D as le,e as ae,x as ne,p as se}from"./vue.esm-bundler-CzLKT_w4.js";const ue={key:0,class:"block text-sm font-medium text-slate-700 mb-1"},re={class:"relative"},ce=["placeholder","disabled","onKeydown"],ie={key:1,class:"absolute z-20 mt-2 w-full bg-white border border-slate-200 rounded-xl shadow-lg py-2 max-h-48 overflow-y-auto"},de=["onClick","onMouseenter"],me={class:"flex items-center gap-2"},pe={key:0,class:"w-4 h-4 text-slate-900",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},ve={key:0,class:"px-4 py-2 text-sm text-slate-500"},fe={key:0},be={key:1},xe={key:2,class:"mt-1 text-xs text-slate-500"},p={__name:"DXComboBox",props:{modelValue:[String,Number],options:{type:Array,default:()=>[]},label:{type:String,default:""},placeholder:{type:String,default:""},helper:{type:String,default:""},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},allowCustom:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:R}){const l=t,w=R,D=i(null),$=i(null),a=i(""),s=i(!1),c=i(0),V=E(()=>l.options.find(e=>e.value===l.modelValue)),d=E(()=>{if(!l.filterable||!a.value)return l.options;const e=a.value.toLowerCase();return l.options.filter(o=>o.label.toLowerCase().includes(e))}),z=()=>{if(s.value=!0,c.value=0,!l.filterable)return;!l.options.find(o=>o.label===a.value)&&!l.allowCustom&&w("update:modelValue",null)},P=()=>{s.value=!0,c.value=0},X=e=>{a.value=e.label,w("update:modelValue",e.value),s.value=!1},W=()=>{if(!s.value){s.value=!0;return}c.value<d.value.length-1&&c.value++},Y=()=>{c.value>0&&c.value--},q=()=>{if(s.value&&d.value.length>0){const e=d.value[c.value];e&&X(e)}else l.allowCustom&&a.value&&(w("update:modelValue",a.value),s.value=!1)},S=e=>{D.value&&!D.value.contains(e.target)&&(s.value=!1,!l.allowCustom&&V.value&&(a.value=V.value.label))};return J(()=>l.modelValue,e=>{const o=l.options.find(u=>u.value===e);a.value=o?o.label:l.allowCustom?String(e||""):""},{immediate:!0}),Q(()=>document.addEventListener("click",S)),Z(()=>document.removeEventListener("click",S)),(e,o)=>(n(),r("div",{class:"relative",ref_key:"root",ref:D,"data-component":"DXComboBox"},[t.label?(n(),r("label",ue,f(t.label),1)):m("",!0),v("div",re,[ee(v("input",{ref_key:"inputRef",ref:$,"onUpdate:modelValue":o[0]||(o[0]=u=>a.value=u),type:"text",placeholder:t.placeholder,disabled:t.disabled,class:B(["w-full pr-10 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-300 focus:outline-none transition-colors",t.disabled&&"opacity-60 cursor-not-allowed bg-slate-50"]),onInput:z,onFocus:P,onKeydown:[b(k(W,["prevent"]),["down"]),b(k(Y,["prevent"]),["up"]),b(k(q,["prevent"]),["enter"]),o[1]||(o[1]=b(u=>s.value=!1,["escape"]))]},null,42,ce),[[te,a.value]]),(n(),r("svg",{class:B(["absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none transition-transform",{"rotate-180":s.value}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...o[2]||(o[2]=[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))]),s.value&&(d.value.length>0||t.allowCustom&&a.value)?(n(),r("div",ie,[(n(!0),r(oe,null,le(d.value,(u,_)=>(n(),r("button",{key:u.value,type:"button",class:B(["w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center justify-between",{"bg-slate-100":_===c.value}]),onClick:H=>X(u),onMouseenter:H=>c.value=_},[v("span",me,[u.icon?(n(),ae(se(u.icon),{key:0,class:"w-4 h-4 text-slate-500"})):m("",!0),ne(" "+f(u.label),1)]),t.modelValue===u.value?(n(),r("svg",pe,[...o[3]||(o[3]=[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])])):m("",!0)],42,de))),128)),d.value.length===0&&a.value?(n(),r("div",ve,[t.allowCustom?(n(),r("span",fe,'Нажмите Enter для "'+f(a.value)+'"',1)):(n(),r("span",be,"Не найдено"))])):m("",!0)])):m("",!0),t.helper?(n(),r("p",xe,f(t.helper),1)):m("",!0)],512))}};p.__docgenInfo={exportName:"default",displayName:"DXComboBox",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"}},{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"helper",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"filterable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"allowCustom",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXComboBox/DXComboBox.vue"]};const he={title:"Molecules/DXComboBox",component:p,tags:["autodocs"]},g=[{value:"ru",label:"Russia"},{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"jp",label:"Japan"}],x={render:()=>({components:{DXComboBox:p},setup(){return{value:i(""),countries:g}},template:'<DXComboBox v-model="value" :options="countries" label="Country" placeholder="Search country..." />'})},y={render:()=>({components:{DXComboBox:p},setup(){return{value:i("ru"),countries:g}},template:'<DXComboBox v-model="value" :options="countries" label="Country" />'})},h={render:()=>({components:{DXComboBox:p},setup(){return{value:i(""),countries:g}},template:'<DXComboBox v-model="value" :options="countries" label="Country" placeholder="Type or select..." allow-custom helper="You can type a custom value" />'})},C={render:()=>({components:{DXComboBox:p},setup(){return{value:i("us"),countries:g}},template:'<DXComboBox v-model="value" :options="countries" label="Country" disabled />'})};var M,L,N;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXComboBox
    },
    setup() {
      const value = ref('');
      return {
        value,
        countries
      };
    },
    template: '<DXComboBox v-model="value" :options="countries" label="Country" placeholder="Search country..." />'
  })
}`,...(N=(L=x.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var F,U,j;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXComboBox
    },
    setup() {
      const value = ref('ru');
      return {
        value,
        countries
      };
    },
    template: '<DXComboBox v-model="value" :options="countries" label="Country" />'
  })
}`,...(j=(U=y.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var I,O,A;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXComboBox
    },
    setup() {
      const value = ref('');
      return {
        value,
        countries
      };
    },
    template: '<DXComboBox v-model="value" :options="countries" label="Country" placeholder="Type or select..." allow-custom helper="You can type a custom value" />'
  })
}`,...(A=(O=h.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var K,T,G;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXComboBox
    },
    setup() {
      const value = ref('us');
      return {
        value,
        countries
      };
    },
    template: '<DXComboBox v-model="value" :options="countries" label="Country" disabled />'
  })
}`,...(G=(T=C.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};const Ce=["Default","WithValue","AllowCustom","Disabled"];export{h as AllowCustom,x as Default,C as Disabled,y as WithValue,Ce as __namedExportsOrder,he as default};
