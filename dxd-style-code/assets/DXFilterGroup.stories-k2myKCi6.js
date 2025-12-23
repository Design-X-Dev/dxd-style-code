import{a as l,o as r,b as i,t as c,k as g,F as y,B as x,l as F,r as D}from"./vue.esm-bundler-Nfu98kES.js";const C={class:"space-y-2","data-component":"DXFilterGroup"},G={class:"text-xs font-semibold text-slate-500 uppercase tracking-wide"},X={class:"flex flex-wrap gap-2"},h=["onClick"],o={__name:"DXFilterGroup",props:{label:{type:String,required:!0},options:{type:Array,default:()=>[]},modelValue:[String,Boolean],clearable:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(e){return(s,u)=>(r(),l("div",C,[i("p",G,c(e.label),1),i("div",X,[(r(!0),l(y,null,x(e.options,t=>(r(),l("button",{key:t.value,type:"button",class:F(["px-3 py-2 rounded-full text-xs font-semibold border transition",e.modelValue===t.value?"bg-slate-800 text-white border-slate-800":"border-slate-200 text-slate-700 hover:border-slate-300 bg-white"]),onClick:_=>s.$emit("update:modelValue",t.value)},c(t.label),11,h))),128)),e.modelValue&&e.clearable?(r(),l("button",{key:0,type:"button",class:"px-3 py-2 rounded-full text-xs font-semibold border border-amber-300 text-amber-700 bg-amber-50 hover:bg-amber-100 transition",onClick:u[0]||(u[0]=t=>s.$emit("update:modelValue",null))}," Сбросить ")):g("",!0)])]))}};o.__docgenInfo={exportName:"default",displayName:"DXFilterGroup",description:"",tags:{},props:[{name:"label",description:"Лейбл группы",type:{name:"string"},required:!0},{name:"options",description:"Опции: [{ value, label }]",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",description:"Текущее значение (v-model)",type:{name:"string|boolean"}},{name:"clearable",description:"Показывать кнопку сброса",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXFilterGroup/DXFilterGroup.vue"]};const W={title:"Molecules/DXFilterGroup",component:o,tags:["autodocs"]},V=[{value:"all",label:"All"},{value:"active",label:"Active"},{value:"pending",label:"Pending"},{value:"completed",label:"Completed"}],a={render:()=>({components:{DXFilterGroup:o},setup(){return{selected:D("all"),filters:V}},template:'<DXFilterGroup v-model="selected" :filters="filters" />'})},n={render:()=>({components:{DXFilterGroup:o},setup(){return{selected:D("all"),filtersWithCount:[{value:"all",label:"All",count:50},{value:"active",label:"Active",count:32},{value:"completed",label:"Completed",count:18}]}},template:'<DXFilterGroup v-model="selected" :filters="filtersWithCount" />'})};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFilterGroup
    },
    setup() {
      const selected = ref('all');
      return {
        selected,
        filters
      };
    },
    template: '<DXFilterGroup v-model="selected" :filters="filters" />'
  })
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,f,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFilterGroup
    },
    setup() {
      const selected = ref('all');
      const filtersWithCount = [{
        value: 'all',
        label: 'All',
        count: 50
      }, {
        value: 'active',
        label: 'Active',
        count: 32
      }, {
        value: 'completed',
        label: 'Completed',
        count: 18
      }];
      return {
        selected,
        filtersWithCount
      };
    },
    template: '<DXFilterGroup v-model="selected" :filters="filtersWithCount" />'
  })
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const A=["Default","WithCounts"];export{a as Default,n as WithCounts,A as __namedExportsOrder,W as default};
