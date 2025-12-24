import{_ as o}from"./DXHeading-DwWVK5ab.js";import"./vue.esm-bundler-CzLKT_w4.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";const y={title:"Atoms/DXHeading",component:o,tags:["autodocs","category:typography"],argTypes:{level:{control:{type:"select"},options:[1,2,3,4,5,6]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl","3xl","4xl"]},weight:{control:{type:"select"},options:["normal","medium","semibold","bold"]},color:{control:{type:"select"},options:["default","muted","primary","success","warning","danger"]}}},e={args:{level:1},render:D=>({components:{DXHeading:o},setup(){return{args:D}},template:'<DXHeading v-bind="args">Заголовок страницы</DXHeading>'})},n={render:()=>({components:{DXHeading:o},template:`
      <div class="space-y-4">
        <DXHeading :level="1">Heading 1</DXHeading>
        <DXHeading :level="2">Heading 2</DXHeading>
        <DXHeading :level="3">Heading 3</DXHeading>
        <DXHeading :level="4">Heading 4</DXHeading>
        <DXHeading :level="5">Heading 5</DXHeading>
        <DXHeading :level="6">Heading 6</DXHeading>
      </div>
    `})},a={render:()=>({components:{DXHeading:o},template:`
      <div class="space-y-2">
        <DXHeading :level="3" color="default">Default Color</DXHeading>
        <DXHeading :level="3" color="muted">Muted Color</DXHeading>
        <DXHeading :level="3" color="success">Success Color</DXHeading>
        <DXHeading :level="3" color="warning">Warning Color</DXHeading>
        <DXHeading :level="3" color="danger">Danger Color</DXHeading>
      </div>
    `})};var l,d,r;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    level: 1
  },
  render: args => ({
    components: {
      DXHeading
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXHeading v-bind="args">Заголовок страницы</DXHeading>'
  })
}`,...(r=(d=e.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};var i,s,g;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXHeading
    },
    template: \`
      <div class="space-y-4">
        <DXHeading :level="1">Heading 1</DXHeading>
        <DXHeading :level="2">Heading 2</DXHeading>
        <DXHeading :level="3">Heading 3</DXHeading>
        <DXHeading :level="4">Heading 4</DXHeading>
        <DXHeading :level="5">Heading 5</DXHeading>
        <DXHeading :level="6">Heading 6</DXHeading>
      </div>
    \`
  })
}`,...(g=(s=n.parameters)==null?void 0:s.docs)==null?void 0:g.source}}};var t,c,H;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXHeading
    },
    template: \`
      <div class="space-y-2">
        <DXHeading :level="3" color="default">Default Color</DXHeading>
        <DXHeading :level="3" color="muted">Muted Color</DXHeading>
        <DXHeading :level="3" color="success">Success Color</DXHeading>
        <DXHeading :level="3" color="warning">Warning Color</DXHeading>
        <DXHeading :level="3" color="danger">Danger Color</DXHeading>
      </div>
    \`
  })
}`,...(H=(c=a.parameters)==null?void 0:c.docs)==null?void 0:H.source}}};const C=["Default","AllLevels","Colors"];export{n as AllLevels,a as Colors,e as Default,C as __namedExportsOrder,y as default};
