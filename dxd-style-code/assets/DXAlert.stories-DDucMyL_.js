import{_ as r}from"./DXAlert-Bqx8I-c3.js";import"./vue.esm-bundler-CzLKT_w4.js";import"./DXIcon-BbhqsR95.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./DXText-DW7ThwBY.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./DXCloseButton-Cjo_FBNn.js";import"./DXButton-ChBdj9Dq.js";import"./useClassComposition-Dym2pzZ_.js";import"./XMarkIcon-B2lmC1bd.js";const q={title:"Molecules/DXAlert",component:r,tags:["autodocs","category:feedback"],argTypes:{variant:{control:{type:"select"},options:["info","success","warning","danger"]}}},n={args:{variant:"info",title:"Information"},render:e=>({components:{DXAlert:r},setup(){return{args:e}},template:'<DXAlert v-bind="args">This is an informational message.</DXAlert>'})},t={args:{variant:"success",title:"Success"},render:e=>({components:{DXAlert:r},setup(){return{args:e}},template:'<DXAlert v-bind="args">Your changes have been saved successfully.</DXAlert>'})},s={args:{variant:"warning",title:"Warning"},render:e=>({components:{DXAlert:r},setup(){return{args:e}},template:'<DXAlert v-bind="args">Please review before continuing.</DXAlert>'})},a={args:{variant:"danger",title:"Error"},render:e=>({components:{DXAlert:r},setup(){return{args:e}},template:'<DXAlert v-bind="args">Something went wrong. Please try again.</DXAlert>'})},i={args:{variant:"info",title:"Dismissible",dismissible:!0},render:e=>({components:{DXAlert:r},setup(){return{args:e}},template:'<DXAlert v-bind="args">Click the X to dismiss this alert.</DXAlert>'})},o={render:()=>({components:{DXAlert:r},template:`
      <div class="space-y-4">
        <DXAlert variant="info" title="Info">Informational message</DXAlert>
        <DXAlert variant="success" title="Success">Success message</DXAlert>
        <DXAlert variant="warning" title="Warning">Warning message</DXAlert>
        <DXAlert variant="danger" title="Error">Error message</DXAlert>
      </div>
    `})};var l,c,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information'
  },
  render: args => ({
    components: {
      DXAlert
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXAlert v-bind="args">This is an informational message.</DXAlert>'
  })
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,p,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success'
  },
  render: args => ({
    components: {
      DXAlert
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXAlert v-bind="args">Your changes have been saved successfully.</DXAlert>'
  })
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,D,A;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning'
  },
  render: args => ({
    components: {
      DXAlert
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXAlert v-bind="args">Please review before continuing.</DXAlert>'
  })
}`,...(A=(D=s.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var X,v,f;a.parameters={...a.parameters,docs:{...(X=a.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    title: 'Error'
  },
  render: args => ({
    components: {
      DXAlert
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXAlert v-bind="args">Something went wrong. Please try again.</DXAlert>'
  })
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,S,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Dismissible',
    dismissible: true
  },
  render: args => ({
    components: {
      DXAlert
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXAlert v-bind="args">Click the X to dismiss this alert.</DXAlert>'
  })
}`,...(h=(S=i.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var w,y,I;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXAlert
    },
    template: \`
      <div class="space-y-4">
        <DXAlert variant="info" title="Info">Informational message</DXAlert>
        <DXAlert variant="success" title="Success">Success message</DXAlert>
        <DXAlert variant="warning" title="Warning">Warning message</DXAlert>
        <DXAlert variant="danger" title="Error">Error message</DXAlert>
      </div>
    \`
  })
}`,...(I=(y=o.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const z=["Info","Success","Warning","Danger","Dismissible","AllVariants"];export{o as AllVariants,a as Danger,i as Dismissible,n as Info,t as Success,s as Warning,z as __namedExportsOrder,q as default};
