import{c as r,a as T,o as X,b as y,k as H,l as m,t as J,r as n}from"./vue.esm-bundler-Nfu98kES.js";import{u as h}from"./useSize-D8MrabOp.js";import{i as K}from"./useVariant-DBYBwuJ6.js";import{u as Q}from"./useAnimation-CL8rPOHu.js";import{u as x}from"./useClassComposition-Dym2pzZ_.js";import"./InformationCircleIcon-DsJgS0pw.js";import"./CheckCircleIcon-BeodL6Lf.js";const R=["data-disabled","data-checked","data-size","data-color"],Y=["aria-checked","disabled"],a={__name:"DXToggle",props:{modelValue:{type:Boolean,default:!1},label:{type:String,default:""},size:{type:String,default:"md"},color:{type:String,default:"slate"},animation:{type:String,default:"smooth"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:s}){const l=e,c=s,i=()=>{l.disabled||c("update:modelValue",!l.modelValue)},d=r(()=>h(l.size,"toggle")),D=r(()=>K(l.color,l.modelValue)),j=r(()=>x("inline-flex items-center gap-2 cursor-pointer mr-4",{"opacity-60 cursor-not-allowed":l.disabled})),F=r(()=>{const t=`relative inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${d.value.track}`;return x(t,{[D.value.current]:!0,[D.value.ring]:!0})}),G=r(()=>{const t=`inline-block rounded-full bg-white ${d.value.thumb} ${Q(l.animation,"toggle")}`,o=U(l.size);return x(t,{[o.checked]:l.modelValue,[o.unchecked]:!l.modelValue})});function U(t){const o={xs:{checked:"translate-x-4",unchecked:"translate-x-0.5"},sm:{checked:"translate-x-5",unchecked:"translate-x-0.5"},md:{checked:"translate-x-6",unchecked:"translate-x-1"},lg:{checked:"translate-x-8",unchecked:"translate-x-1"},xl:{checked:"translate-x-9",unchecked:"translate-x-1"}};return o[t]||o.md}const q=r(()=>`${h(l.size,"text")} text-slate-700 select-none`);return(t,o)=>(X(),T("label",{class:m(j.value),"data-component":"DXToggle","data-disabled":e.disabled,"data-checked":e.modelValue,"data-size":e.size,"data-color":e.color},[y("button",{type:"button",role:"switch","aria-checked":e.modelValue,disabled:e.disabled,class:m(F.value),onClick:i},[y("span",{class:m(G.value)},null,2)],10,Y),e.label?(X(),T("span",{key:0,class:m(q.value)},J(e.label),3)):H("",!0)],10,R))}};a.__docgenInfo={exportName:"default",displayName:"DXToggle",description:"",tags:{},props:[{name:"modelValue",description:"Значение (v-model)",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",description:"Текст лейбла",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"size",description:"Размер: xs | sm | md | lg | xl",type:{name:"string"},defaultValue:{func:!1,value:'"md"'}},{name:"color",description:"Цвет: slate | primary | success | danger | warning | info",type:{name:"string"},defaultValue:{func:!1,value:'"slate"'}},{name:"animation",description:"Анимация: none | smooth",type:{name:"string"},defaultValue:{func:!1,value:'"smooth"'}},{name:"disabled",description:"Отключенное состояние",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/atoms/DXToggle/DXToggle.vue"]};const oe={title:"Atoms/DXToggle",component:a,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},color:{control:{type:"select"},options:["slate","primary","success","danger","warning","info"]},animation:{control:{type:"select"},options:["none","smooth"]}}},g={render:()=>({components:{DXToggle:a},setup(){return{enabled:n(!1)}},template:'<DXToggle v-model="enabled" />'})},u={render:()=>({components:{DXToggle:a},setup(){return{enabled:n(!0)}},template:'<DXToggle v-model="enabled" label="Enable notifications" />'})},p={render:()=>({components:{DXToggle:a},setup(){const e=n(!1),s=n(!1),l=n(!1),c=n(!1),i=n(!1);return{xs:e,sm:s,md:l,lg:c,xl:i}},template:`
      <div class="flex flex-col gap-4 py-8">
        <div class="flex items-center gap-4">
          <DXToggle v-model="xs" size="xs" label="Extra small" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="sm" size="sm" label="Small" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="md" size="md" label="Medium (default)" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="lg" size="lg" label="Large" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="xl" size="xl" label="Extra large" />
        </div>
      </div>
    `})},f={render:()=>({components:{DXToggle:a},setup(){const e=n(!0),s=n(!0),l=n(!0),c=n(!0),i=n(!0),d=n(!0);return{slate:e,primary:s,success:l,danger:c,warning:i,info:d}},template:`
      <div class="flex flex-col gap-4 py-8">
        <div class="flex items-center gap-4">
          <DXToggle v-model="slate" color="slate" label="Slate" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="primary" color="primary" label="Primary" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="success" color="success" label="Success" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="danger" color="danger" label="Danger" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="warning" color="warning" label="Warning" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="info" color="info" label="Info" />
        </div>
      </div>
    `})},v={render:()=>({components:{DXToggle:a},setup(){const e=n(!1),s=n(!1);return{smooth:e,none:s}},template:`
      <div class="flex flex-col gap-4 py-8">
        <div class="flex items-center gap-4">
          <DXToggle v-model="smooth" animation="smooth" label="Smooth animation (default)" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="none" animation="none" label="No animation" />
        </div>
      </div>
    `})},b={render:()=>({components:{DXToggle:a},setup(){return{enabled:n(!1)}},template:'<DXToggle v-model="enabled" label="Disabled toggle" disabled />'})};var z,S,k;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXToggle
    },
    setup() {
      const enabled = ref(false);
      return {
        enabled
      };
    },
    template: '<DXToggle v-model="enabled" />'
  })
}`,...(k=(S=g.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var V,C,w;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXToggle
    },
    setup() {
      const enabled = ref(true);
      return {
        enabled
      };
    },
    template: '<DXToggle v-model="enabled" label="Enable notifications" />'
  })
}`,...(w=(C=u.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var E,N,B;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXToggle
    },
    setup() {
      const xs = ref(false);
      const sm = ref(false);
      const md = ref(false);
      const lg = ref(false);
      const xl = ref(false);
      return {
        xs,
        sm,
        md,
        lg,
        xl
      };
    },
    template: \`
      <div class="flex flex-col gap-4 py-8">
        <div class="flex items-center gap-4">
          <DXToggle v-model="xs" size="xs" label="Extra small" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="sm" size="sm" label="Small" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="md" size="md" label="Medium (default)" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="lg" size="lg" label="Large" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="xl" size="xl" label="Extra large" />
        </div>
      </div>
    \`
  })
}`,...(B=(N=p.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var I,L,A;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXToggle
    },
    setup() {
      const slate = ref(true);
      const primary = ref(true);
      const success = ref(true);
      const danger = ref(true);
      const warning = ref(true);
      const info = ref(true);
      return {
        slate,
        primary,
        success,
        danger,
        warning,
        info
      };
    },
    template: \`
      <div class="flex flex-col gap-4 py-8">
        <div class="flex items-center gap-4">
          <DXToggle v-model="slate" color="slate" label="Slate" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="primary" color="primary" label="Primary" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="success" color="success" label="Success" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="danger" color="danger" label="Danger" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="warning" color="warning" label="Warning" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="info" color="info" label="Info" />
        </div>
      </div>
    \`
  })
}`,...(A=(L=f.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var P,W,_;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXToggle
    },
    setup() {
      const smooth = ref(false);
      const none = ref(false);
      return {
        smooth,
        none
      };
    },
    template: \`
      <div class="flex flex-col gap-4 py-8">
        <div class="flex items-center gap-4">
          <DXToggle v-model="smooth" animation="smooth" label="Smooth animation (default)" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="none" animation="none" label="No animation" />
        </div>
      </div>
    \`
  })
}`,...(_=(W=v.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var $,M,O;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXToggle
    },
    setup() {
      const enabled = ref(false);
      return {
        enabled
      };
    },
    template: '<DXToggle v-model="enabled" label="Disabled toggle" disabled />'
  })
}`,...(O=(M=b.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const re=["Default","WithLabel","Sizes","Colors","Animations","Disabled"];export{v as Animations,f as Colors,g as Default,b as Disabled,p as Sizes,u as WithLabel,re as __namedExportsOrder,oe as default};
