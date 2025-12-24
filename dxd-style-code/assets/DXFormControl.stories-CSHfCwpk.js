import{_ as e}from"./DXFormControl-AlN7sECA.js";import{r as l}from"./vue.esm-bundler-CzLKT_w4.js";import"./DXIcon-BbhqsR95.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./DXText-DW7ThwBY.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./DXValidationIcon-CNh0i5IT.js";import"./ExclamationCircleIcon-CzLk2qiN.js";const B={title:"Molecules/DXFormControl",component:e,tags:["autodocs"]},r={render:()=>({components:{DXFormControl:e},setup(){return{value:l("")}},template:`
      <DXFormControl label="Email">
        <input v-model="value" type="email" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Enter email" />
      </DXFormControl>
    `})},o={render:()=>({components:{DXFormControl:e},setup(){return{value:l("Hello")}},template:`
      <DXFormControl label="Bio" :max-length="100" :current-length="5" show-count>
        <textarea v-model="value" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" rows="3"></textarea>
      </DXFormControl>
    `})},t={render:()=>({components:{DXFormControl:e},setup(){return{value:l("valid@email.com")}},template:`
      <DXFormControl label="Email" validation-state="success">
        <input v-model="value" type="email" class="w-full rounded-xl border border-emerald-300 px-4 py-3 text-sm" />
      </DXFormControl>
    `})},n={render:()=>({components:{DXFormControl:e},setup(){return{value:l("invalid")}},template:`
      <DXFormControl label="Email" validation-state="error" error="Invalid email format">
        <input v-model="value" type="email" class="w-full rounded-xl border border-rose-300 px-4 py-3 text-sm" />
      </DXFormControl>
    `})};var s,m,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFormControl
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <DXFormControl label="Email">
        <input v-model="value" type="email" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Enter email" />
      </DXFormControl>
    \`
  })
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,d,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFormControl
    },
    setup() {
      const value = ref('Hello');
      return {
        value
      };
    },
    template: \`
      <DXFormControl label="Bio" :max-length="100" :current-length="5" show-count>
        <textarea v-model="value" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" rows="3"></textarea>
      </DXFormControl>
    \`
  })
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,v,x;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFormControl
    },
    setup() {
      const value = ref('valid@email.com');
      return {
        value
      };
    },
    template: \`
      <DXFormControl label="Email" validation-state="success">
        <input v-model="value" type="email" class="w-full rounded-xl border border-emerald-300 px-4 py-3 text-sm" />
      </DXFormControl>
    \`
  })
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var C,D,F;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFormControl
    },
    setup() {
      const value = ref('invalid');
      return {
        value
      };
    },
    template: \`
      <DXFormControl label="Email" validation-state="error" error="Invalid email format">
        <input v-model="value" type="email" class="w-full rounded-xl border border-rose-300 px-4 py-3 text-sm" />
      </DXFormControl>
    \`
  })
}`,...(F=(D=n.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const H=["Default","WithCounter","ValidationSuccess","ValidationError"];export{r as Default,n as ValidationError,t as ValidationSuccess,o as WithCounter,H as __namedExportsOrder,B as default};
