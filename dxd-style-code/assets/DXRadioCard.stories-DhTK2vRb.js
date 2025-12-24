import{a as r,o as n,b as t,e as y,k as i,l,p as C,m as h,u,r as D}from"./vue.esm-bundler-CzLKT_w4.js";const x=["value","checked","disabled"],X={class:"flex items-start gap-3"},R={class:"flex-1 min-w-0"},V={class:"flex items-center justify-between"},k={key:0,class:"w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0"},w={key:0,class:"text-sm text-slate-600 mt-1"},d={__name:"DXRadioCard",props:{modelValue:[String,Number,Boolean],value:{type:[String,Number,Boolean],required:!0},title:{type:String,required:!0},description:{type:String,default:""},icon:{type:[Object,Function],default:null},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e){return(c,a)=>(n(),r("label",{class:l(["block relative cursor-pointer group",{"cursor-not-allowed opacity-60":e.disabled}]),"data-component":"DXRadioCard"},[t("input",{type:"radio",value:e.value,checked:e.modelValue===e.value,disabled:e.disabled,class:"sr-only peer",onChange:a[0]||(a[0]=B=>c.$emit("update:modelValue",e.value))},null,40,x),t("div",{class:l(["border-2 rounded-xl p-4 transition-all",[e.modelValue===e.value?"border-slate-900 bg-slate-50":"border-slate-200 bg-white",!e.disabled&&"hover:border-slate-300 hover:shadow-sm",e.disabled&&"bg-slate-50"]])},[t("div",X,[e.icon?(n(),y(C(e.icon),{key:0,class:l(["w-6 h-6 flex-shrink-0",e.modelValue===e.value?"text-slate-900":"text-slate-400"])},null,8,["class"])):i("",!0),t("div",R,[t("div",V,[t("p",{class:l(["font-semibold",e.modelValue===e.value?"text-slate-900":"text-slate-700"])},u(e.title),3),e.modelValue===e.value?(n(),r("div",k,[...a[1]||(a[1]=[t("svg",{class:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M5 13l4 4L19 7"})],-1)])])):i("",!0)]),e.description?(n(),r("p",w,u(e.description),1)):i("",!0),h(c.$slots,"default")])])],2)],2))}};d.__docgenInfo={exportName:"default",displayName:"DXRadioCard",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number|boolean"}},{name:"value",type:{name:"string|number|boolean"},required:!0},{name:"title",type:{name:"string"},required:!0},{name:"description",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"icon",type:{name:"object|func"},defaultValue:{func:!1,value:"null"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXRadioCard/DXRadioCard.vue"]};const S={title:"Molecules/DXRadioCard",component:d,tags:["autodocs"]},s={render:()=>({components:{DXRadioCard:d},setup(){return{selected:D("plan1")}},template:`
      <div class="space-y-3 max-w-md">
        <DXRadioCard 
          v-model="selected" 
          value="plan1"
          title="Basic Plan" 
          description="Perfect for getting started"
        />
        <DXRadioCard 
          v-model="selected" 
          value="plan2"
          title="Pro Plan" 
          description="For growing businesses"
        />
        <DXRadioCard 
          v-model="selected" 
          value="plan3"
          title="Enterprise" 
          description="For large organizations"
        />
      </div>
    `})},o={render:()=>({components:{DXRadioCard:d},setup(){return{selected:D("option1")}},template:`
      <DXRadioCard 
        v-model="selected" 
        value="option1"
        title="Disabled Option" 
        description="This option cannot be changed"
        disabled
      />
    `})};var m,p,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadioCard
    },
    setup() {
      const selected = ref('plan1');
      return {
        selected
      };
    },
    template: \`
      <div class="space-y-3 max-w-md">
        <DXRadioCard 
          v-model="selected" 
          value="plan1"
          title="Basic Plan" 
          description="Perfect for getting started"
        />
        <DXRadioCard 
          v-model="selected" 
          value="plan2"
          title="Pro Plan" 
          description="For growing businesses"
        />
        <DXRadioCard 
          v-model="selected" 
          value="plan3"
          title="Enterprise" 
          description="For large organizations"
        />
      </div>
    \`
  })
}`,...(v=(p=s.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var f,b,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadioCard
    },
    setup() {
      const selected = ref('option1');
      return {
        selected
      };
    },
    template: \`
      <DXRadioCard 
        v-model="selected" 
        value="option1"
        title="Disabled Option" 
        description="This option cannot be changed"
        disabled
      />
    \`
  })
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const E=["Default","Disabled"];export{s as Default,o as Disabled,E as __namedExportsOrder,S as default};
