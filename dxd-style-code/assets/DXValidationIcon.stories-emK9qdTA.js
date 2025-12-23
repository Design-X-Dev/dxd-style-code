import{_ as a}from"./DXValidationIcon-BmLS25-6.js";import"./vue.esm-bundler-Nfu98kES.js";import"./DXIcon-DQdlGsO1.js";import"./useSize-D8MrabOp.js";import"./useAnimation-CL8rPOHu.js";import"./InformationCircleIcon-DsJgS0pw.js";import"./ExclamationCircleIcon-DOJNx4bv.js";import"./CheckCircleIcon-BeodL6Lf.js";const z={title:"Molecules/DXValidationIcon",component:a,tags:["autodocs"],argTypes:{state:{control:"select",options:["success","error","warning","info"]},size:{control:"select",options:["sm","md","lg"]}}},t={args:{state:"success",size:"md"}},s=()=>({components:{DXValidationIcon:a},template:`
    <div class="flex items-center gap-8">
      <div class="text-center">
        <DXValidationIcon state="success" size="lg" />
        <p class="text-xs mt-2 text-slate-600">Success</p>
      </div>
      <div class="text-center">
        <DXValidationIcon state="error" size="lg" />
        <p class="text-xs mt-2 text-slate-600">Error</p>
      </div>
      <div class="text-center">
        <DXValidationIcon state="warning" size="lg" />
        <p class="text-xs mt-2 text-slate-600">Warning</p>
      </div>
      <div class="text-center">
        <DXValidationIcon state="info" size="lg" />
        <p class="text-xs mt-2 text-slate-600">Info</p>
      </div>
    </div>
  `}),e=()=>({components:{DXValidationIcon:a},template:`
    <div class="flex items-center gap-4">
      <DXValidationIcon state="success" size="sm" />
      <DXValidationIcon state="success" size="md" />
      <DXValidationIcon state="success" size="lg" />
    </div>
  `});var n,i,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    state: 'success',
    size: 'md'
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var o,r,l;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`() => ({
  components: {
    DXValidationIcon
  },
  template: \`
    <div class="flex items-center gap-8">
      <div class="text-center">
        <DXValidationIcon state="success" size="lg" />
        <p class="text-xs mt-2 text-slate-600">Success</p>
      </div>
      <div class="text-center">
        <DXValidationIcon state="error" size="lg" />
        <p class="text-xs mt-2 text-slate-600">Error</p>
      </div>
      <div class="text-center">
        <DXValidationIcon state="warning" size="lg" />
        <p class="text-xs mt-2 text-slate-600">Warning</p>
      </div>
      <div class="text-center">
        <DXValidationIcon state="info" size="lg" />
        <p class="text-xs mt-2 text-slate-600">Info</p>
      </div>
    </div>
  \`
})`,...(l=(r=s.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var d,p,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => ({
  components: {
    DXValidationIcon
  },
  template: \`
    <div class="flex items-center gap-4">
      <DXValidationIcon state="success" size="sm" />
      <DXValidationIcon state="success" size="md" />
      <DXValidationIcon state="success" size="lg" />
    </div>
  \`
})`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const f=["Default","States","Sizes"];export{t as Default,e as Sizes,s as States,f as __namedExportsOrder,z as default};
