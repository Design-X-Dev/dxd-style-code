import{_ as l}from"./DXToggle-C0jPsjWP.js";import{r as e}from"./vue.esm-bundler-CzLKT_w4.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./useAnimation-ByVAdqmf.js";import"./useClassComposition-Dym2pzZ_.js";const q={title:"Atoms/DXToggle",component:l,tags:["autodocs","category:form"],argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},color:{control:{type:"select"},options:["slate","primary","success","danger","warning","info"]},animation:{control:{type:"select"},options:["none","smooth"]}}},o={render:()=>({components:{DXToggle:l},setup(){return{enabled:e(!1)}},template:'<DXToggle v-model="enabled" />'})},a={render:()=>({components:{DXToggle:l},setup(){return{enabled:e(!0)}},template:'<DXToggle v-model="enabled" label="Enable notifications" />'})},t={render:()=>({components:{DXToggle:l},setup(){const n=e(!1),s=e(!1),d=e(!1),m=e(!1),g=e(!1);return{xs:n,sm:s,md:d,lg:m,xl:g}},template:`
      <div class="flex flex-col gap-4 py-8">
        <div class="flex items-center gap-4">
          <DXToggle v-model="xs" size="xs" label="Extra small" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="sm" size="sm" label="Small" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="md" size="md" label="Medium (default)" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="lg" size="lg" label="Large" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="xl" size="xl" label="Extra large" />
        </div>
      </div>
    `})},r={render:()=>({components:{DXToggle:l},setup(){const n=e(!0),s=e(!0),d=e(!0),m=e(!0),g=e(!0),A=e(!0);return{slate:n,primary:s,success:d,danger:m,warning:g,info:A}},template:`
      <div class="flex flex-col gap-4 py-8">
        <div class="flex items-center gap-4">
          <DXToggle v-model="slate" color="slate" label="Slate" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="primary" color="primary" label="Primary" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="success" color="success" label="Success" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="danger" color="danger" label="Danger" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="warning" color="warning" label="Warning" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="info" color="info" label="Info" />
        </div>
      </div>
    `})},c={render:()=>({components:{DXToggle:l},setup(){const n=e(!1),s=e(!1);return{smooth:n,none:s}},template:`
      <div class="flex flex-col gap-4 py-8">
        <div class="flex items-center gap-4">
          <DXToggle v-model="smooth" animation="smooth" label="Smooth animation (default)" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="none" animation="none" label="No animation" />
        </div>
      </div>
    `})},i={render:()=>({components:{DXToggle:l},setup(){return{enabled:e(!1)}},template:'<DXToggle v-model="enabled" label="Disabled toggle" disabled />'})};var p,f,v;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXToggle
    },
    setup() {
      const enabled = ref(false);
      return {
        enabled
      };
    },
    template: '<DXToggle v-model="enabled" />'
  })
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var u,x,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXToggle
    },
    setup() {
      const enabled = ref(true);
      return {
        enabled
      };
    },
    template: '<DXToggle v-model="enabled" label="Enable notifications" />'
  })
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var D,T,X;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXToggle
    },
    setup() {
      const xs = ref(false);
      const sm = ref(false);
      const md = ref(false);
      const lg = ref(false);
      const xl = ref(false);
      return {
        xs,
        sm,
        md,
        lg,
        xl
      };
    },
    template: \`
      <div class="flex flex-col gap-4 py-8">
        <div class="flex items-center gap-4">
          <DXToggle v-model="xs" size="xs" label="Extra small" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="sm" size="sm" label="Small" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="md" size="md" label="Medium (default)" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="lg" size="lg" label="Large" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="xl" size="xl" label="Extra large" />
        </div>
      </div>
    \`
  })
}`,...(X=(T=t.parameters)==null?void 0:T.docs)==null?void 0:X.source}}};var y,S,z;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXToggle
    },
    setup() {
      const slate = ref(true);
      const primary = ref(true);
      const success = ref(true);
      const danger = ref(true);
      const warning = ref(true);
      const info = ref(true);
      return {
        slate,
        primary,
        success,
        danger,
        warning,
        info
      };
    },
    template: \`
      <div class="flex flex-col gap-4 py-8">
        <div class="flex items-center gap-4">
          <DXToggle v-model="slate" color="slate" label="Slate" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="primary" color="primary" label="Primary" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="success" color="success" label="Success" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="danger" color="danger" label="Danger" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="warning" color="warning" label="Warning" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="info" color="info" label="Info" />
        </div>
      </div>
    \`
  })
}`,...(z=(S=r.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var h,w,E;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXToggle
    },
    setup() {
      const smooth = ref(false);
      const none = ref(false);
      return {
        smooth,
        none
      };
    },
    template: \`
      <div class="flex flex-col gap-4 py-8">
        <div class="flex items-center gap-4">
          <DXToggle v-model="smooth" animation="smooth" label="Smooth animation (default)" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="none" animation="none" label="No animation" />
        </div>
      </div>
    \`
  })
}`,...(E=(w=c.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var _,L,W;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXToggle
    },
    setup() {
      const enabled = ref(false);
      return {
        enabled
      };
    },
    template: '<DXToggle v-model="enabled" label="Disabled toggle" disabled />'
  })
}`,...(W=(L=i.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};const B=["Default","WithLabel","Sizes","Colors","Animations","Disabled"];export{c as Animations,r as Colors,o as Default,i as Disabled,t as Sizes,a as WithLabel,B as __namedExportsOrder,q as default};
