import{_ as e}from"./DXDivider-Yv-XXyN6.js";import"./vue.esm-bundler-CzLKT_w4.js";import"./useSpacing-BOHUzi8w.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";const w={title:"Atoms/DXDivider",component:e,tags:["autodocs","category:feedback"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Ориентация разделителя"},color:{control:{type:"select"},options:["light","default","dark"],description:"Цвет разделителя"},thickness:{control:{type:"select"},options:["thin","default","thick"],description:"Толщина разделителя"},spacing:{control:{type:"select"},options:["none","xs","sm","md","lg","xl"],description:"Отступы вокруг разделителя"}}},t={args:{orientation:"horizontal",color:"default",thickness:"default",spacing:"md"},render:a=>({components:{DXDivider:e},setup(){return{args:a}},template:`
      <div>
        <p>Content above</p>
        <DXDivider v-bind="args" />
        <p>Content below</p>
      </div>
    `})},n={render:()=>({components:{DXDivider:e},template:`
      <div class="space-y-6">
        <div>
          <p>Section 1</p>
          <DXDivider>OR</DXDivider>
          <p>Section 2</p>
        </div>
        <div>
          <p>Content above</p>
          <DXDivider color="dark" thickness="thick">Continue</DXDivider>
          <p>Content below</p>
        </div>
      </div>
    `})},i={args:{orientation:"vertical",color:"default",thickness:"default",spacing:"md"},render:a=>({components:{DXDivider:e},setup(){return{args:a}},template:`
      <div class="flex items-center h-12">
        <span>Left</span>
        <DXDivider v-bind="args" />
        <span>Right</span>
      </div>
    `})},s={render:()=>({components:{DXDivider:e},template:`
      <div class="space-y-6">
        <div>
          <p class="text-sm text-slate-600 mb-2">Light</p>
          <DXDivider color="light" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Default</p>
          <DXDivider color="default" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Dark</p>
          <DXDivider color="dark" />
        </div>
      </div>
    `})},r={render:()=>({components:{DXDivider:e},template:`
      <div class="space-y-6">
        <div>
          <p class="text-sm text-slate-600 mb-2">Thin</p>
          <DXDivider thickness="thin" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Default</p>
          <DXDivider thickness="default" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Thick</p>
          <DXDivider thickness="thick" />
        </div>
      </div>
    `})};var o,d,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    color: 'default',
    thickness: 'default',
    spacing: 'md'
  },
  render: args => ({
    components: {
      DXDivider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <p>Content above</p>
        <DXDivider v-bind="args" />
        <p>Content below</p>
      </div>
    \`
  })
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,l,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXDivider
    },
    template: \`
      <div class="space-y-6">
        <div>
          <p>Section 1</p>
          <DXDivider>OR</DXDivider>
          <p>Section 2</p>
        </div>
        <div>
          <p>Content above</p>
          <DXDivider color="dark" thickness="thick">Continue</DXDivider>
          <p>Content below</p>
        </div>
      </div>
    \`
  })
}`,...(v=(l=n.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};var m,D,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    color: 'default',
    thickness: 'default',
    spacing: 'md'
  },
  render: args => ({
    components: {
      DXDivider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="flex items-center h-12">
        <span>Left</span>
        <DXDivider v-bind="args" />
        <span>Right</span>
      </div>
    \`
  })
}`,...(u=(D=i.parameters)==null?void 0:D.docs)==null?void 0:u.source}}};var h,X,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXDivider
    },
    template: \`
      <div class="space-y-6">
        <div>
          <p class="text-sm text-slate-600 mb-2">Light</p>
          <DXDivider color="light" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Default</p>
          <DXDivider color="default" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Dark</p>
          <DXDivider color="dark" />
        </div>
      </div>
    \`
  })
}`,...(g=(X=s.parameters)==null?void 0:X.docs)==null?void 0:g.source}}};var x,k,f;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXDivider
    },
    template: \`
      <div class="space-y-6">
        <div>
          <p class="text-sm text-slate-600 mb-2">Thin</p>
          <DXDivider thickness="thin" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Default</p>
          <DXDivider thickness="default" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Thick</p>
          <DXDivider thickness="thick" />
        </div>
      </div>
    \`
  })
}`,...(f=(k=r.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const L=["Default","WithText","Vertical","Colors","Thickness"];export{s as Colors,t as Default,r as Thickness,i as Vertical,n as WithText,L as __namedExportsOrder,w as default};
