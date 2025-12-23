import{_ as o}from"./DXCloseButton-D07dhHMp.js";import"./vue.esm-bundler-Nfu98kES.js";import"./DXButton-D4QV5g9V.js";import"./useSize-D8MrabOp.js";import"./useVariant-DBYBwuJ6.js";import"./InformationCircleIcon-DsJgS0pw.js";import"./CheckCircleIcon-BeodL6Lf.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXIcon-DQdlGsO1.js";import"./useAnimation-CL8rPOHu.js";import"./XMarkIcon-BiPc0SME.js";const x={title:"Molecules/DXCloseButton",component:o,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["default","light","danger"]}}},e={args:{size:"md",variant:"default"}},t=()=>({components:{DXCloseButton:o},template:`
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
  `});var n,r,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default'
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var i,d,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => ({
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
