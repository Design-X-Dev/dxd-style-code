import{c as h,I as V,a as i,o as c,k as v,b as D,u as B,m as G,l as w,r as X}from"./vue.esm-bundler-CzLKT_w4.js";const S=["data-size","data-multiple","data-disabled"],z={key:0,class:"text-sm font-medium text-slate-700 mb-2"},n={__name:"DXButtonGroup",props:{modelValue:[String,Number,Array],label:{type:String,default:""},multiple:{type:Boolean,default:!1},size:{type:String,default:"md"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l,{emit:f}){const e=l,o=f,r={sm:"h-8",md:"h-10",lg:"h-12"},x=h(()=>r[e.size]||r.md),g=t=>{if(!e.disabled)if(e.multiple){const s=Array.isArray(e.modelValue)?e.modelValue:[],d=s.indexOf(t);if(d>-1){const u=[...s];u.splice(d,1),o("update:modelValue",u)}else o("update:modelValue",[...s,t])}else o("update:modelValue",t)},y=t=>e.multiple?Array.isArray(e.modelValue)&&e.modelValue.includes(t):e.modelValue===t;return V("buttonGroup",{modelValue:e.modelValue,multiple:e.multiple,size:e.size,disabled:e.disabled,handleSelect:g,isSelected:y}),(t,s)=>(c(),i("div",{class:"inline-flex","data-component":"DXButtonGroup","data-size":l.size,"data-multiple":l.multiple,"data-disabled":l.disabled},[l.label?(c(),i("p",z,B(l.label),1)):v("",!0),D("div",{class:w(["inline-flex border border-slate-200 rounded-xl overflow-hidden divide-x divide-slate-200",x.value])},[G(t.$slots,"default")],2)],8,S))}};n.__docgenInfo={exportName:"default",displayName:"DXButtonGroup",description:"",tags:{},props:[{name:"modelValue",description:"Значение (v-model)",type:{name:"string|number|array"}},{name:"label",description:"Лейбл",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"multiple",description:"Множественный выбор",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"Размер: sm | md | lg",type:{name:"string"},defaultValue:{func:!1,value:'"md"'}},{name:"disabled",description:"Отключенное состояние",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXButtonGroup/DXButtonGroup.vue"]};const E={title:"Molecules/DXButtonGroup",component:n,tags:["autodocs"]},a={render:()=>({components:{DXButtonGroup:n},setup(){return{selected:X("left")}},template:`
      <DXButtonGroup v-model="selected">
        <button value="left" class="px-4 py-2 text-sm border border-slate-200 rounded-l-xl" :class="selected === 'left' ? 'bg-slate-900 text-white' : 'bg-white'">Left</button>
        <button value="center" class="px-4 py-2 text-sm border-y border-slate-200" :class="selected === 'center' ? 'bg-slate-900 text-white' : 'bg-white'">Center</button>
        <button value="right" class="px-4 py-2 text-sm border border-slate-200 rounded-r-xl" :class="selected === 'right' ? 'bg-slate-900 text-white' : 'bg-white'">Right</button>
      </DXButtonGroup>
    `})};var m,p,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXButtonGroup
    },
    setup() {
      const selected = ref('left');
      return {
        selected
      };
    },
    template: \`
      <DXButtonGroup v-model="selected">
        <button value="left" class="px-4 py-2 text-sm border border-slate-200 rounded-l-xl" :class="selected === 'left' ? 'bg-slate-900 text-white' : 'bg-white'">Left</button>
        <button value="center" class="px-4 py-2 text-sm border-y border-slate-200" :class="selected === 'center' ? 'bg-slate-900 text-white' : 'bg-white'">Center</button>
        <button value="right" class="px-4 py-2 text-sm border border-slate-200 rounded-r-xl" :class="selected === 'right' ? 'bg-slate-900 text-white' : 'bg-white'">Right</button>
      </DXButtonGroup>
    \`
  })
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const A=["Default"];export{a as Default,A as __namedExportsOrder,E as default};
