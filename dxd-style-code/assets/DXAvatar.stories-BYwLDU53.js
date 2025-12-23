import{_ as t,r as U}from"./DXAvatar-BxFMm3zv.js";import{a as q,o as E,b as l}from"./vue.esm-bundler-Nfu98kES.js";import{r as W}from"./SparklesIcon-Cpl9X2e6.js";import{r as _}from"./StarIcon-CxW8hUJU.js";import{r as o}from"./HeartIcon-BZcpV8kH.js";import"./useSize-D8MrabOp.js";import"./DXIcon-DQdlGsO1.js";import"./useAnimation-CL8rPOHu.js";function M(R,y){return E(),q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[l("path",{"fill-rule":"evenodd",d:"M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z","clip-rule":"evenodd"}),l("path",{d:"M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z"})])}const O={title:"Atoms/DXAvatar",component:t,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},shape:{control:{type:"select"},options:["circle","square"]},iconAnimation:{control:{type:"select"},options:["none","wiggle","scale","rotate"]}}},e={args:{initials:"JD"}},a={args:{src:"https://i.pravatar.cc/100",alt:"User"}},n={render:()=>({components:{DXAvatar:t},template:`
      <div class="flex items-end gap-4">
        <DXAvatar size="xs" initials="XS" />
        <DXAvatar size="sm" initials="SM" />
        <DXAvatar size="md" initials="MD" />
        <DXAvatar size="lg" initials="LG" />
        <DXAvatar size="xl" initials="XL" />
      </div>
    `})},s={render:()=>({components:{DXAvatar:t},template:`
      <div class="flex gap-4">
        <DXAvatar initials="CI" shape="circle" />
        <DXAvatar initials="SQ" shape="square" />
      </div>
    `})},r={render:()=>({components:{DXAvatar:t},setup(){return{UserIcon:U,HeartIcon:o,StarIcon:_,SparklesIcon:W,RocketLaunchIcon:M}},template:`
      <div class="flex gap-4">
        <DXAvatar :icon="HeartIcon"/>
        <DXAvatar :icon="StarIcon"/>
        <DXAvatar :icon="SparklesIcon" shape="square"/>
        <DXAvatar :icon="RocketLaunchIcon" shape="square"/>
      </div>
    `})},c={render:()=>({components:{DXAvatar:t},setup(){return{HeartIcon:o}},template:`
      <div class="flex gap-4 items-center">
        <div class="text-center">
          <DXAvatar src="https://i.pravatar.cc/100" />
          <p class="text-xs mt-2 text-slate-600">С изображением</p>
        </div>
        <div class="text-center">
          <DXAvatar initials="AB" />
          <p class="text-xs mt-2 text-slate-600">С инициалами</p>
        </div>
        <div class="text-center">
          <DXAvatar />
          <p class="text-xs mt-2 text-slate-600">Дефолтная иконка</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="HeartIcon" />
          <p class="text-xs mt-2 text-slate-600">Кастомная иконка</p>
        </div>
      </div>
    `})},i={render:()=>({components:{DXAvatar:t},setup(){return{UserIcon:U,HeartIcon:o,StarIcon:_,SparklesIcon:W}},template:`
      <div class="flex gap-8 items-center">
        <div class="text-center">
          <DXAvatar :icon="UserIcon" icon-animation="none" size="lg" />
          <p class="text-xs mt-2 text-slate-600">None</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="HeartIcon" icon-animation="wiggle" size="lg" />
          <p class="text-xs mt-2 text-slate-600">Wiggle</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="StarIcon" icon-animation="scale" size="lg" />
          <p class="text-xs mt-2 text-slate-600">Scale</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="SparklesIcon" icon-animation="rotate" size="lg" />
          <p class="text-xs mt-2 text-slate-600">Rotate</p>
        </div>
      </div>
    `})};var p,v,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    initials: 'JD'
  }
}`,...(m=(v=e.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var u,d,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/100',
    alt: 'User'
  }
}`,...(x=(d=a.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var A,D,X;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXAvatar
    },
    template: \`
      <div class="flex items-end gap-4">
        <DXAvatar size="xs" initials="XS" />
        <DXAvatar size="sm" initials="SM" />
        <DXAvatar size="md" initials="MD" />
        <DXAvatar size="lg" initials="LG" />
        <DXAvatar size="xl" initials="XL" />
      </div>
    \`
  })
}`,...(X=(D=n.parameters)==null?void 0:D.docs)==null?void 0:X.source}}};var g,I,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXAvatar
    },
    template: \`
      <div class="flex gap-4">
        <DXAvatar initials="CI" shape="circle" />
        <DXAvatar initials="SQ" shape="square" />
      </div>
    \`
  })
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var h,f,z;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXAvatar
    },
    setup() {
      return {
        UserIcon,
        HeartIcon,
        StarIcon,
        SparklesIcon,
        RocketLaunchIcon
      };
    },
    template: \`
      <div class="flex gap-4">
        <DXAvatar :icon="HeartIcon"/>
        <DXAvatar :icon="StarIcon"/>
        <DXAvatar :icon="SparklesIcon" shape="square"/>
        <DXAvatar :icon="RocketLaunchIcon" shape="square"/>
      </div>
    \`
  })
}`,...(z=(f=r.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var k,H,C;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXAvatar
    },
    setup() {
      return {
        HeartIcon
      };
    },
    template: \`
      <div class="flex gap-4 items-center">
        <div class="text-center">
          <DXAvatar src="https://i.pravatar.cc/100" />
          <p class="text-xs mt-2 text-slate-600">С изображением</p>
        </div>
        <div class="text-center">
          <DXAvatar initials="AB" />
          <p class="text-xs mt-2 text-slate-600">С инициалами</p>
        </div>
        <div class="text-center">
          <DXAvatar />
          <p class="text-xs mt-2 text-slate-600">Дефолтная иконка</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="HeartIcon" />
          <p class="text-xs mt-2 text-slate-600">Кастомная иконка</p>
        </div>
      </div>
    \`
  })
}`,...(C=(H=c.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var w,B,L;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXAvatar
    },
    setup() {
      return {
        UserIcon,
        HeartIcon,
        StarIcon,
        SparklesIcon
      };
    },
    template: \`
      <div class="flex gap-8 items-center">
        <div class="text-center">
          <DXAvatar :icon="UserIcon" icon-animation="none" size="lg" />
          <p class="text-xs mt-2 text-slate-600">None</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="HeartIcon" icon-animation="wiggle" size="lg" />
          <p class="text-xs mt-2 text-slate-600">Wiggle</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="StarIcon" icon-animation="scale" size="lg" />
          <p class="text-xs mt-2 text-slate-600">Scale</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="SparklesIcon" icon-animation="rotate" size="lg" />
          <p class="text-xs mt-2 text-slate-600">Rotate</p>
        </div>
      </div>
    \`
  })
}`,...(L=(B=i.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const T=["Default","WithImage","Sizes","Shapes","WithCustomIcons","FallbackScenarios","WithAnimations"];export{e as Default,c as FallbackScenarios,s as Shapes,n as Sizes,i as WithAnimations,r as WithCustomIcons,a as WithImage,T as __namedExportsOrder,O as default};
