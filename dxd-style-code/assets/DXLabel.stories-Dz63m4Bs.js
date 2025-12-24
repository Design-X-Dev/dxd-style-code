import{c as x,a as u,o as m,m as v,k as z,l as S}from"./vue.esm-bundler-CzLKT_w4.js";import{d as _}from"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";const E=["for"],h={key:0,class:"text-rose-500 ml-0.5"},a={__name:"DXLabel",props:{htmlFor:{type:String,default:""},size:{type:String,default:"sm"},weight:{type:String,default:"medium"},color:{type:String,default:"default"},required:{type:Boolean,default:!1}},setup(e){const r=e,n={xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg"},o={normal:"font-normal",medium:"font-medium",semibold:"font-semibold"},X=x(()=>["block",n[r.size]||n.sm,o[r.weight]||o.medium,_(r.color)]);return(y,V)=>(m(),u("label",{class:S(X.value),for:e.htmlFor,"data-component":"DXLabel"},[v(y.$slots,"default"),e.required?(m(),u("span",h,"*")):z("",!0)],10,E))}};a.__docgenInfo={exportName:"default",displayName:"DXLabel",description:"",tags:{},props:[{name:"htmlFor",description:"ID связанного input",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"size",description:"Размер: xs | sm | md | lg",type:{name:"string"},defaultValue:{func:!1,value:'"sm"'}},{name:"weight",description:"Вес шрифта: normal | medium | semibold",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'}},{name:"color",description:"Цвет: default | muted | primary",type:{name:"string"},defaultValue:{func:!1,value:'"default"'}},{name:"required",description:"Обязательное поле",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/atoms/DXLabel/DXLabel.vue"]};const B={title:"Atoms/DXLabel",component:a,tags:["autodocs","category:typography"]},s={args:{},render:e=>({components:{DXLabel:a},setup(){return{args:e}},template:'<DXLabel v-bind="args">Email адрес</DXLabel>'})},t={args:{required:!0},render:e=>({components:{DXLabel:a},setup(){return{args:e}},template:'<DXLabel v-bind="args">Обязательное поле</DXLabel>'})},l={render:()=>({components:{DXLabel:a},template:`
      <div class="space-y-2">
        <DXLabel size="xs">Extra Small Label</DXLabel>
        <DXLabel size="sm">Small Label (default)</DXLabel>
        <DXLabel size="md">Medium Label</DXLabel>
        <DXLabel size="lg">Large Label</DXLabel>
      </div>
    `})};var i,d,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      DXLabel
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXLabel v-bind="args">Email адрес</DXLabel>'
  })
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,b,L;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: args => ({
    components: {
      DXLabel
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXLabel v-bind="args">Обязательное поле</DXLabel>'
  })
}`,...(L=(b=t.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var D,f,g;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXLabel
    },
    template: \`
      <div class="space-y-2">
        <DXLabel size="xs">Extra Small Label</DXLabel>
        <DXLabel size="sm">Small Label (default)</DXLabel>
        <DXLabel size="md">Medium Label</DXLabel>
        <DXLabel size="lg">Large Label</DXLabel>
      </div>
    \`
  })
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const w=["Default","Required","Sizes"];export{s as Default,t as Required,l as Sizes,w as __namedExportsOrder,B as default};
