import{_ as n}from"./DXList-gfCNtwfp.js";import"./vue.esm-bundler-CzLKT_w4.js";const X={title:"Atoms/DXList",component:n,tags:["autodocs","category:typography"]},u={render:()=>({components:{DXList:n},template:`
      <DXList>
        <li>Первый элемент</li>
        <li>Второй элемент</li>
        <li>Третий элемент</li>
      </DXList>
    `})},r={args:{ordered:!0},render:s=>({components:{DXList:n},setup(){return{args:s}},template:`
      <DXList v-bind="args">
        <li>Шаг первый</li>
        <li>Шаг второй</li>
        <li>Шаг третий</li>
      </DXList>
    `})},e={args:{marker:"none"},render:s=>({components:{DXList:n},setup(){return{args:s}},template:`
      <DXList v-bind="args">
        <li>Элемент без маркера</li>
        <li>Ещё один элемент</li>
      </DXList>
    `})};var t,i,o;u.parameters={...u.parameters,docs:{...(t=u.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXList
    },
    template: \`
      <DXList>
        <li>Первый элемент</li>
        <li>Второй элемент</li>
        <li>Третий элемент</li>
      </DXList>
    \`
  })
}`,...(o=(i=u.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var a,l,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ordered: true
  },
  render: args => ({
    components: {
      DXList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXList v-bind="args">
        <li>Шаг первый</li>
        <li>Шаг второй</li>
        <li>Шаг третий</li>
      </DXList>
    \`
  })
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,c,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    marker: 'none'
  },
  render: args => ({
    components: {
      DXList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXList v-bind="args">
        <li>Элемент без маркера</li>
        <li>Ещё один элемент</li>
      </DXList>
    \`
  })
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const g=["Unordered","Ordered","NoMarker"];export{e as NoMarker,r as Ordered,u as Unordered,g as __namedExportsOrder,X as default};
