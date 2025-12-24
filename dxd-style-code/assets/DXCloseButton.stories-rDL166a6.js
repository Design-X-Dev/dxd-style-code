import{_ as o}from"./DXCloseButton-Cjo_FBNn.js";import"./vue.esm-bundler-CzLKT_w4.js";import"./DXButton-ChBdj9Dq.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXIcon-BbhqsR95.js";import"./useAnimation-ByVAdqmf.js";import"./XMarkIcon-B2lmC1bd.js";const x={title:"Molecules/DXCloseButton",component:o,tags:["autodocs","category:navigation"],argTypes:{size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["default","light","danger"]}}},e={args:{size:"md",variant:"default"}},t=()=>({components:{DXCloseButton:o},template:`
    <div class="flex items-center gap-4">
      <DXCloseButton size="sm" />
      <DXCloseButton size="md" />
      <DXCloseButton size="lg" />
    </div>
  `}),s=()=>({components:{DXCloseButton:o},template:`
    <div class="flex items-center gap-4">
      <div class="p-4 bg-white border rounded">
        <DXCloseButton variant="default" />
      </div>
      <div class="p-4 bg-slate-800 rounded">
        <DXCloseButton variant="light" />
      </div>
      <div class="p-4 bg-white border rounded">
        <DXCloseButton variant="danger" />
      </div>
    </div>
  `});var n,a,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default'
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var i,d,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => ({
  components: {
    DXCloseButton
  },
  template: \`
    <div class="flex items-center gap-4">
      <DXCloseButton size="sm" />
      <DXCloseButton size="md" />
      <DXCloseButton size="lg" />
    </div>
  \`
})`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,m,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`() => ({
  components: {
    DXCloseButton
  },
  template: \`
    <div class="flex items-center gap-4">
      <div class="p-4 bg-white border rounded">
        <DXCloseButton variant="default" />
      </div>
      <div class="p-4 bg-slate-800 rounded">
        <DXCloseButton variant="light" />
      </div>
      <div class="p-4 bg-white border rounded">
        <DXCloseButton variant="danger" />
      </div>
    </div>
  \`
})`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const _=["Default","Sizes","Variants"];export{e as Default,t as Sizes,s as Variants,_ as __namedExportsOrder,x as default};
