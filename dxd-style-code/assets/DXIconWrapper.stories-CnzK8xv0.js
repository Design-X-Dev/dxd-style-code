import{_ as e}from"./DXIconWrapper-DA1ppaUf.js";import{r as a}from"./MagnifyingGlassIcon-ssG6g_B7.js";import{r as l}from"./UserIcon-DiLxIH0K.js";import{r as p}from"./EnvelopeIcon-DnmNmHRs.js";import{r as X}from"./LockClosedIcon-Dk5UallB.js";import"./vue.esm-bundler-CzLKT_w4.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXIcon-BbhqsR95.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";const C={title:"Atoms/DXIconWrapper",component:e,tags:["autodocs"],argTypes:{position:{control:"select",options:["left","right"],description:"Icon position"},icon:{control:!1,description:"Heroicon component"},size:{control:"select",options:["xs","sm","md","lg"],description:"Icon size"},animation:{control:"select",options:["none","wiggle","scale","rotate"],description:"Icon animation on hover"},iconClass:{control:"text",description:"Additional icon classes"},verticalAlign:{control:"select",options:["center","top"],description:"Vertical positioning"}}},t={args:{position:"left",icon:a,size:"sm",animation:"none"},render:n=>({components:{DXIconWrapper:e},setup(){return{args:n}},template:`
      <div class="relative w-64">
        <DXIconWrapper v-bind="args" />
        <input 
          type="text" 
          placeholder="Search..."
          class="w-full h-10 pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        />
      </div>
    `})},o={args:{position:"right",icon:l,size:"sm",animation:"scale"},render:n=>({components:{DXIconWrapper:e},setup(){return{args:n}},template:`
      <div class="relative w-64">
        <DXIconWrapper v-bind="args" />
        <input 
          type="text" 
          placeholder="Username"
          class="w-full h-10 px-4 pr-10 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        />
      </div>
    `})},s={args:{position:"left",icon:p,size:"sm",animation:"none",verticalAlign:"top"},render:n=>({components:{DXIconWrapper:e},setup(){return{args:n}},template:`
      <div class="relative w-64">
        <DXIconWrapper v-bind="args" />
        <textarea 
          placeholder="Message..."
          rows="4"
          class="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        ></textarea>
      </div>
    `})},r={render:()=>({components:{DXIconWrapper:e},setup(){return{MagnifyingGlassIcon:a,UserIcon:l,EnvelopeIcon:p,LockClosedIcon:X}},template:`
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Extra Small (xs)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="MagnifyingGlassIcon" size="xs" />
            <input 
              type="text" 
              placeholder="XS icon"
              class="w-full h-10 pl-9 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Small (sm)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="UserIcon" size="sm" />
            <input 
              type="text" 
              placeholder="SM icon"
              class="w-full h-10 pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Medium (md)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="EnvelopeIcon" size="md" />
            <input 
              type="text" 
              placeholder="MD icon"
              class="w-full h-10 pl-11 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Large (lg)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="LockClosedIcon" size="lg" />
            <input 
              type="text" 
              placeholder="LG icon"
              class="w-full h-12 pl-12 pr-4 py-3 text-base rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
      </div>
    `})},i={render:()=>({components:{DXIconWrapper:e},setup(){return{MagnifyingGlassIcon:a,UserIcon:l,EnvelopeIcon:p}},template:`
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Scale animation (hover to see)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="MagnifyingGlassIcon" size="sm" animation="scale" />
            <input 
              type="text" 
              placeholder="Hover over icon"
              class="w-full h-10 pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Wiggle animation (hover to see)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="UserIcon" size="sm" animation="wiggle" />
            <input 
              type="text" 
              placeholder="Hover over icon"
              class="w-full h-10 pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Rotate animation (hover to see)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="EnvelopeIcon" size="sm" animation="rotate" />
            <input 
              type="text" 
              placeholder="Hover over icon"
              class="w-full h-10 pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
      </div>
    `})};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    position: 'left',
    icon: MagnifyingGlassIcon,
    size: 'sm',
    animation: 'none'
  },
  render: args => ({
    components: {
      DXIconWrapper
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="relative w-64">
        <DXIconWrapper v-bind="args" />
        <input 
          type="text" 
          placeholder="Search..."
          class="w-full h-10 pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        />
      </div>
    \`
  })
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,v,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    position: 'right',
    icon: UserIcon,
    size: 'sm',
    animation: 'scale'
  },
  render: args => ({
    components: {
      DXIconWrapper
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="relative w-64">
        <DXIconWrapper v-bind="args" />
        <input 
          type="text" 
          placeholder="Username"
          class="w-full h-10 px-4 pr-10 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        />
      </div>
    \`
  })
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    position: 'left',
    icon: EnvelopeIcon,
    size: 'sm',
    animation: 'none',
    verticalAlign: 'top'
  },
  render: args => ({
    components: {
      DXIconWrapper
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="relative w-64">
        <DXIconWrapper v-bind="args" />
        <textarea 
          placeholder="Message..."
          rows="4"
          class="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        ></textarea>
      </div>
    \`
  })
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,I,w;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXIconWrapper
    },
    setup() {
      return {
        MagnifyingGlassIcon,
        UserIcon,
        EnvelopeIcon,
        LockClosedIcon
      };
    },
    template: \`
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Extra Small (xs)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="MagnifyingGlassIcon" size="xs" />
            <input 
              type="text" 
              placeholder="XS icon"
              class="w-full h-10 pl-9 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Small (sm)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="UserIcon" size="sm" />
            <input 
              type="text" 
              placeholder="SM icon"
              class="w-full h-10 pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Medium (md)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="EnvelopeIcon" size="md" />
            <input 
              type="text" 
              placeholder="MD icon"
              class="w-full h-10 pl-11 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Large (lg)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="LockClosedIcon" size="lg" />
            <input 
              type="text" 
              placeholder="LG icon"
              class="w-full h-12 pl-12 pr-4 py-3 text-base rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
      </div>
    \`
  })
}`,...(w=(I=r.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var y,W,D;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXIconWrapper
    },
    setup() {
      return {
        MagnifyingGlassIcon,
        UserIcon,
        EnvelopeIcon
      };
    },
    template: \`
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Scale animation (hover to see)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="MagnifyingGlassIcon" size="sm" animation="scale" />
            <input 
              type="text" 
              placeholder="Hover over icon"
              class="w-full h-10 pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Wiggle animation (hover to see)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="UserIcon" size="sm" animation="wiggle" />
            <input 
              type="text" 
              placeholder="Hover over icon"
              class="w-full h-10 pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Rotate animation (hover to see)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="EnvelopeIcon" size="sm" animation="rotate" />
            <input 
              type="text" 
              placeholder="Hover over icon"
              class="w-full h-10 pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
      </div>
    \`
  })
}`,...(D=(W=i.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};const k=["LeftPosition","RightPosition","TopAlign","IconSizes","WithAnimations"];export{r as IconSizes,t as LeftPosition,o as RightPosition,s as TopAlign,i as WithAnimations,k as __namedExportsOrder,C as default};
