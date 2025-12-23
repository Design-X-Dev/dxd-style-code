import{_ as n}from"./DXButton-D4QV5g9V.js";import{_ as T}from"./DXIcon-DQdlGsO1.js";import{r as _}from"./PencilIcon-BNDZDOj4.js";import{r as A}from"./TrashIcon-C_ge7fVs.js";import{r as w}from"./PlusIcon-B7YZdFDa.js";import{r as C}from"./HeartIcon-D3SZQJQS.js";import"./vue.esm-bundler-Nfu98kES.js";import"./useSize-D8MrabOp.js";import"./useVariant-DBYBwuJ6.js";import"./InformationCircleIcon-DsJgS0pw.js";import"./CheckCircleIcon-BeodL6Lf.js";import"./useClassComposition-Dym2pzZ_.js";import"./useAnimation-CL8rPOHu.js";const N={title:"Atoms/DXButton",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost","outline","success","warning","danger","info","link","soft"],description:"Вариант оформления кнопки"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Размер кнопки"},disabled:{control:"boolean",description:"Отключенное состояние"},block:{control:"boolean",description:"Растянуть на всю ширину"},iconOnly:{control:"boolean",description:"Только иконка (квадратная кнопка)"}}},o={args:{variant:"primary"},render:t=>({components:{DXButton:n},setup(){return{args:t}},template:'<DXButton v-bind="args">Кнопка</DXButton>'})},e={render:()=>({components:{DXButton:n},template:`
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Основные варианты</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <DXButton variant="primary">Primary</DXButton>
            <DXButton variant="secondary">Secondary</DXButton>
            <DXButton variant="ghost">Ghost</DXButton>
            <DXButton variant="outline">Outline</DXButton>
            <DXButton variant="soft">Soft</DXButton>
            <DXButton variant="link">Link</DXButton>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Семантические варианты</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <DXButton variant="success">Success</DXButton>
            <DXButton variant="warning">Warning</DXButton>
            <DXButton variant="danger">Danger</DXButton>
            <DXButton variant="info">Info</DXButton>
          </div>
        </div>
        <div class="text-sm text-slate-600">
          Все варианты: primary | secondary | ghost | outline | soft | link | success | warning | danger | info
        </div>
      </div>
    `})},s={render:()=>({components:{DXButton:n},template:`
      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-4">
          <DXButton size="xs">Extra Small</DXButton>
          <DXButton size="sm">Small</DXButton>
          <DXButton size="md">Medium</DXButton>
          <DXButton size="lg">Large</DXButton>
          <DXButton size="xl">Extra Large</DXButton>
        </div>
        <div class="text-sm text-slate-600">
          Все размеры: xs (28px) | sm (32px) | md (40px) | lg (48px) | xl (56px)
        </div>
      </div>
    `})},u={args:{disabled:!0},render:t=>({components:{DXButton:n},setup(){return{args:t}},template:'<DXButton v-bind="args">Disabled</DXButton>'})},r={args:{block:!0},render:t=>({components:{DXButton:n},setup(){return{args:t}},template:'<DXButton v-bind="args">Full Width</DXButton>'})},a={render:()=>({components:{DXButton:n,DXIcon:T},setup(){return{PlusIcon:w,TrashIcon:A,PencilIcon:_}},template:`
      <div class="flex items-center gap-4">
        <DXButton>
          <DXIcon :icon="PlusIcon" size="sm" />
          Добавить
        </DXButton>
        <DXButton variant="danger">
          <DXIcon :icon="TrashIcon" size="sm" />
          Удалить
        </DXButton>
        <DXButton variant="ghost">
          <DXIcon :icon="PencilIcon" size="sm" />
          Редактировать
        </DXButton>
      </div>
    `})},i={render:()=>({components:{DXButton:n,DXIcon:T},setup(){return{PlusIcon:w,TrashIcon:A,HeartIcon:C}},template:`
      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-4">
          <DXButton icon-only size="xs">
            <DXIcon :icon="PlusIcon" size="xs" />
          </DXButton>
          <DXButton icon-only size="sm">
            <DXIcon :icon="PlusIcon" size="sm" />
          </DXButton>
          <DXButton icon-only>
            <DXIcon :icon="HeartIcon" size="sm" />
          </DXButton>
          <DXButton icon-only size="lg">
            <DXIcon :icon="TrashIcon" size="md" />
          </DXButton>
          <DXButton icon-only size="xl">
            <DXIcon :icon="TrashIcon" size="lg" />
          </DXButton>
        </div>
        <div class="text-sm text-slate-600">
          Квадратные кнопки с иконками: xs (28×28px) | sm (32×32px) | md (40×40px) | lg (48×48px) | xl (56×56px)
        </div>
      </div>
    `})};var c,l,D;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: args => ({
    components: {
      DXButton
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXButton v-bind="args">Кнопка</DXButton>'
  })
}`,...(D=(l=o.parameters)==null?void 0:l.docs)==null?void 0:D.source}}};var m,d,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXButton
    },
    template: \`
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Основные варианты</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <DXButton variant="primary">Primary</DXButton>
            <DXButton variant="secondary">Secondary</DXButton>
            <DXButton variant="ghost">Ghost</DXButton>
            <DXButton variant="outline">Outline</DXButton>
            <DXButton variant="soft">Soft</DXButton>
            <DXButton variant="link">Link</DXButton>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Семантические варианты</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <DXButton variant="success">Success</DXButton>
            <DXButton variant="warning">Warning</DXButton>
            <DXButton variant="danger">Danger</DXButton>
            <DXButton variant="info">Info</DXButton>
          </div>
        </div>
        <div class="text-sm text-slate-600">
          Все варианты: primary | secondary | ghost | outline | soft | link | success | warning | danger | info
        </div>
      </div>
    \`
  })
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var X,B,x;s.parameters={...s.parameters,docs:{...(X=s.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXButton
    },
    template: \`
      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-4">
          <DXButton size="xs">Extra Small</DXButton>
          <DXButton size="sm">Small</DXButton>
          <DXButton size="md">Medium</DXButton>
          <DXButton size="lg">Large</DXButton>
          <DXButton size="xl">Extra Large</DXButton>
        </div>
        <div class="text-sm text-slate-600">
          Все размеры: xs (28px) | sm (32px) | md (40px) | lg (48px) | xl (56px)
        </div>
      </div>
    \`
  })
}`,...(x=(B=s.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var g,v,f;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => ({
    components: {
      DXButton
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXButton v-bind="args">Disabled</DXButton>'
  })
}`,...(f=(v=u.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var I,z,h;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    block: true
  },
  render: args => ({
    components: {
      DXButton
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXButton v-bind="args">Full Width</DXButton>'
  })
}`,...(h=(z=r.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var y,b,S;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXButton,
      DXIcon
    },
    setup() {
      return {
        PlusIcon,
        TrashIcon,
        PencilIcon
      };
    },
    template: \`
      <div class="flex items-center gap-4">
        <DXButton>
          <DXIcon :icon="PlusIcon" size="sm" />
          Добавить
        </DXButton>
        <DXButton variant="danger">
          <DXIcon :icon="TrashIcon" size="sm" />
          Удалить
        </DXButton>
        <DXButton variant="ghost">
          <DXIcon :icon="PencilIcon" size="sm" />
          Редактировать
        </DXButton>
      </div>
    \`
  })
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var P,k,E;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXButton,
      DXIcon
    },
    setup() {
      return {
        PlusIcon,
        TrashIcon,
        HeartIcon
      };
    },
    template: \`
      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-4">
          <DXButton icon-only size="xs">
            <DXIcon :icon="PlusIcon" size="xs" />
          </DXButton>
          <DXButton icon-only size="sm">
            <DXIcon :icon="PlusIcon" size="sm" />
          </DXButton>
          <DXButton icon-only>
            <DXIcon :icon="HeartIcon" size="sm" />
          </DXButton>
          <DXButton icon-only size="lg">
            <DXIcon :icon="TrashIcon" size="md" />
          </DXButton>
          <DXButton icon-only size="xl">
            <DXIcon :icon="TrashIcon" size="lg" />
          </DXButton>
        </div>
        <div class="text-sm text-slate-600">
          Квадратные кнопки с иконками: xs (28×28px) | sm (32×32px) | md (40×40px) | lg (48×48px) | xl (56×56px)
        </div>
      </div>
    \`
  })
}`,...(E=(k=i.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const Q=["Default","Variants","Sizes","Disabled","Block","WithIcon","IconOnly"];export{r as Block,o as Default,u as Disabled,i as IconOnly,s as Sizes,e as Variants,a as WithIcon,Q as __namedExportsOrder,N as default};
