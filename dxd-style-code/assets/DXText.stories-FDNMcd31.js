import{_ as r}from"./DXText-DW7ThwBY.js";import"./vue.esm-bundler-CzLKT_w4.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";const E={title:"Atoms/DXText",component:r,tags:["autodocs","category:typography"],argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},weight:{control:{type:"select"},options:["normal","medium","semibold","bold"]},color:{control:{type:"select"},options:["default","muted","primary","success","warning","danger"]},align:{control:{type:"select"},options:["left","center","right","justify"]}}},e={args:{},render:s=>({components:{DXText:r},setup(){return{args:s}},template:'<DXText v-bind="args">Это обычный текстовый параграф с настройками по умолчанию.</DXText>'})},t={render:()=>({components:{DXText:r},template:`
      <div class="space-y-2">
        <DXText size="xs">Extra Small Text</DXText>
        <DXText size="sm">Small Text</DXText>
        <DXText size="md">Medium Text (default)</DXText>
        <DXText size="lg">Large Text</DXText>
        <DXText size="xl">Extra Large Text</DXText>
      </div>
    `})},u={args:{truncate:!0},render:s=>({components:{DXText:r},setup(){return{args:s}},template:'<div class="w-48"><DXText v-bind="args">Это очень длинный текст который будет обрезан с многоточием</DXText></div>'})};var n,a,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      DXText
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXText v-bind="args">Это обычный текстовый параграф с настройками по умолчанию.</DXText>'
  })
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var x,c,i;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXText
    },
    template: \`
      <div class="space-y-2">
        <DXText size="xs">Extra Small Text</DXText>
        <DXText size="sm">Small Text</DXText>
        <DXText size="md">Medium Text (default)</DXText>
        <DXText size="lg">Large Text</DXText>
        <DXText size="xl">Extra Large Text</DXText>
      </div>
    \`
  })
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,p,T;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    truncate: true
  },
  render: args => ({
    components: {
      DXText
    },
    setup() {
      return {
        args
      };
    },
    template: '<div class="w-48"><DXText v-bind="args">Это очень длинный текст который будет обрезан с многоточием</DXText></div>'
  })
}`,...(T=(p=u.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};const z=["Default","Sizes","Truncated"];export{e as Default,t as Sizes,u as Truncated,z as __namedExportsOrder,E as default};
