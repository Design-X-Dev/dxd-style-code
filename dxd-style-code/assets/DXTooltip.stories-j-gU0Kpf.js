import{u as lt,r as T,c as l,x as it,a as f,o as y,m as v,f as at,g as pt,n as rt,h as ct,T as ut,k as dt,L as mt,l as h,b as bt,q as gt,t as Tt}from"./vue.esm-bundler-Nfu98kES.js";import{u as Dt}from"./useSize-D8MrabOp.js";import{k as xt,l as Xt,m as ft}from"./useVariant-DBYBwuJ6.js";import{a as yt,b as vt}from"./useAnimation-CL8rPOHu.js";import"./InformationCircleIcon-DsJgS0pw.js";import"./CheckCircleIcon-BeodL6Lf.js";const o={__name:"DXTooltip",props:{content:{type:String,default:""},position:{type:String,default:"top"},color:{type:String,default:"dark"},size:{type:String,default:"md"},animation:{type:String,default:"tooltip-custom"},maxWidth:{type:String,default:"200px"},delay:{type:Number,default:100}},setup(n){const t=n,Q=lt(),g=T(!1),e=T(null),s=T(null),Y=l(()=>!!(t.content||Q.content)),D=()=>{s.value&&(clearTimeout(s.value),s.value=null),e.value=setTimeout(()=>{g.value=!0},t.delay)},x=()=>{e.value&&(clearTimeout(e.value),e.value=null),g.value=!1},Z=()=>{D()},tt=()=>{x()},ot=l(()=>t.animation==="tooltip-custom"?yt(t.position):vt(t.animation)),nt=l(()=>["absolute z-50 rounded-lg whitespace-normal",Dt(t.size,"tooltip"),xt(t.position),Xt(t.color)]),et=l(()=>({maxWidth:t.maxWidth})),st=l(()=>ft(t.position,t.color));return it(()=>{e.value&&clearTimeout(e.value),s.value&&clearTimeout(s.value)}),(X,ht)=>(y(),f("div",{class:"relative inline-block",onMouseenter:D,onMouseleave:x,onFocus:Z,onBlur:tt,"data-component":"DXTooltip"},[v(X.$slots,"default"),at(ut,rt(ct(ot.value)),{default:pt(()=>[g.value&&Y.value?(y(),f("div",{key:0,class:h(nt.value),style:mt(et.value),role:"tooltip"},[v(X.$slots,"content",{},()=>[gt(Tt(n.content),1)]),bt("div",{class:h(st.value)},null,2)],6)):dt("",!0)]),_:3},16)],32))}};o.__docgenInfo={exportName:"default",displayName:"DXTooltip",description:"",tags:{},props:[{name:"content",description:"Текст подсказки",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"position",description:"Позиция: top | bottom | left | right",type:{name:"string"},defaultValue:{func:!1,value:'"top"'}},{name:"color",description:"Цвет: dark | light | primary | success | danger | warning | info",type:{name:"string"},defaultValue:{func:!1,value:'"dark"'}},{name:"size",description:"Размер: xs | sm | md | lg | xl",type:{name:"string"},defaultValue:{func:!1,value:'"md"'}},{name:"animation",description:"Анимация: fade | fade-scale | slide-up | slide-down | slide-left | slide-right | tooltip-custom",type:{name:"string"},defaultValue:{func:!1,value:'"tooltip-custom"'}},{name:"maxWidth",description:"Максимальная ширина",type:{name:"string"},defaultValue:{func:!1,value:'"200px"'}},{name:"delay",description:"Задержка перед показом (мс)",type:{name:"number"},defaultValue:{func:!1,value:"100"}}],slots:[{name:"default"},{name:"content"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/atoms/DXTooltip/DXTooltip.vue"]};const jt={title:"Atoms/DXTooltip",component:o,tags:["autodocs"],argTypes:{position:{control:{type:"select"},options:["top","bottom","left","right"]},color:{control:{type:"select"},options:["dark","light","primary","success","danger","warning","info"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},animation:{control:{type:"select"},options:["fade","fade-scale","slide-up","slide-down","slide-left","slide-right","tooltip-custom"]}}},i={args:{content:"This is a tooltip"},render:n=>({components:{DXTooltip:o},setup(){return{args:n}},template:'<DXTooltip v-bind="args"><button class="px-4 py-2 bg-slate-100 rounded">Hover me</button></DXTooltip>'})},a={render:()=>({components:{DXTooltip:o},template:`
      <div class="flex gap-8 justify-center py-12">
        <DXTooltip content="Top tooltip" position="top">
          <button class="px-4 py-2 bg-slate-100 rounded">Top</button>
        </DXTooltip>
        <DXTooltip content="Bottom tooltip" position="bottom">
          <button class="px-4 py-2 bg-slate-100 rounded">Bottom</button>
        </DXTooltip>
        <DXTooltip content="Left tooltip" position="left">
          <button class="px-4 py-2 bg-slate-100 rounded">Left</button>
        </DXTooltip>
        <DXTooltip content="Right tooltip" position="right">
          <button class="px-4 py-2 bg-slate-100 rounded">Right</button>
        </DXTooltip>
      </div>
    `})},p={render:()=>({components:{DXTooltip:o},template:`
      <div class="flex gap-4 justify-center py-12 flex-wrap">
        <DXTooltip content="Dark tooltip" color="dark">
          <button class="px-4 py-2 bg-slate-100 rounded">Dark</button>
        </DXTooltip>
        <DXTooltip content="Light tooltip" color="light">
          <button class="px-4 py-2 bg-slate-800 text-white rounded">Light</button>
        </DXTooltip>
        <DXTooltip content="Primary tooltip" color="primary">
          <button class="px-4 py-2 bg-slate-100 rounded">Primary</button>
        </DXTooltip>
        <DXTooltip content="Info tooltip" color="info">
          <button class="px-4 py-2 bg-slate-100 rounded">Info</button>
        </DXTooltip>
        <DXTooltip content="Success tooltip" color="success">
          <button class="px-4 py-2 bg-slate-100 rounded">Success</button>
        </DXTooltip>
        <DXTooltip content="Warning tooltip" color="warning">
          <button class="px-4 py-2 bg-slate-100 rounded">Warning</button>
        </DXTooltip>
        <DXTooltip content="Danger tooltip" color="danger">
          <button class="px-4 py-2 bg-slate-100 rounded">Danger</button>
        </DXTooltip>
      </div>
    `})},r={render:()=>({components:{DXTooltip:o},template:`
      <div class="flex gap-4 justify-center py-12 items-center">
        <DXTooltip content="Extra small tooltip" size="xs">
          <button class="px-4 py-2 bg-slate-100 rounded">XS</button>
        </DXTooltip>
        <DXTooltip content="Small tooltip" size="sm">
          <button class="px-4 py-2 bg-slate-100 rounded">SM</button>
        </DXTooltip>
        <DXTooltip content="Medium tooltip" size="md">
          <button class="px-4 py-2 bg-slate-100 rounded">MD</button>
        </DXTooltip>
        <DXTooltip content="Large tooltip" size="lg">
          <button class="px-4 py-2 bg-slate-100 rounded">LG</button>
        </DXTooltip>
        <DXTooltip content="Extra large tooltip" size="xl">
          <button class="px-4 py-2 bg-slate-100 rounded">XL</button>
        </DXTooltip>
      </div>
    `})},c={render:()=>({components:{DXTooltip:o},template:`
      <div class="flex gap-4 justify-center py-12 flex-wrap">
        <DXTooltip content="Fade animation" animation="fade">
          <button class="px-4 py-2 bg-slate-100 rounded">Fade</button>
        </DXTooltip>
        <DXTooltip content="Fade scale animation" animation="fade-scale">
          <button class="px-4 py-2 bg-slate-100 rounded">Fade Scale</button>
        </DXTooltip>
        <DXTooltip content="Slide up animation" animation="slide-up">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Up</button>
        </DXTooltip>
        <DXTooltip content="Slide down animation" animation="slide-down">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Down</button>
        </DXTooltip>
        <DXTooltip content="Slide left animation" animation="slide-left">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Left</button>
        </DXTooltip>
        <DXTooltip content="Slide right animation" animation="slide-right">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Right</button>
        </DXTooltip>
        <DXTooltip content="Custom tooltip animation" animation="tooltip-custom">
          <button class="px-4 py-2 bg-slate-100 rounded">Custom</button>
        </DXTooltip>
      </div>
    `})},u={render:()=>({components:{DXTooltip:o},template:`
      <div class="flex gap-4 justify-center py-12 flex-wrap">
        <DXTooltip>
          <template #content>
            <div class="flex items-center gap-2">
              <span>Custom content with</span>
              <span class="font-semibold">bold text</span>
            </div>
          </template>
          <button class="px-4 py-2 bg-slate-100 rounded">Slot Content</button>
        </DXTooltip>
        <DXTooltip color="info">
          <template #content>
            <div>
              <div class="font-semibold mb-1">Rich Content</div>
              <div class="text-xs opacity-90">With multiple lines and formatting</div>
            </div>
          </template>
          <button class="px-4 py-2 bg-slate-100 rounded">Rich Slot</button>
        </DXTooltip>
      </div>
    `})},d={render:()=>({components:{DXTooltip:o},template:`
      <div class="flex gap-4 justify-center py-12 flex-wrap items-center">
        <DXTooltip content="Narrow tooltip with limited width" maxWidth="120px">
          <button class="px-4 py-2 bg-slate-100 rounded">120px</button>
        </DXTooltip>
        <DXTooltip content="Medium width tooltip with more space for content" maxWidth="200px">
          <button class="px-4 py-2 bg-slate-100 rounded">200px</button>
        </DXTooltip>
        <DXTooltip content="Wide tooltip with even more space for longer text content that might wrap to multiple lines" maxWidth="300px">
          <button class="px-4 py-2 bg-slate-100 rounded">300px</button>
        </DXTooltip>
      </div>
    `})},m={render:()=>({components:{DXTooltip:o},template:`
      <div class="space-y-8 py-12">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Color + Size Combinations</h3>
          <div class="flex gap-4 justify-center flex-wrap">
            <DXTooltip content="Success large" color="success" size="lg">
              <button class="px-4 py-2 bg-slate-100 rounded">Success LG</button>
            </DXTooltip>
            <DXTooltip content="Warning small" color="warning" size="sm">
              <button class="px-4 py-2 bg-slate-100 rounded">Warning SM</button>
            </DXTooltip>
            <DXTooltip content="Danger extra small" color="danger" size="xs">
              <button class="px-4 py-2 bg-slate-100 rounded">Danger XS</button>
            </DXTooltip>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Position + Color Combinations</h3>
          <div class="flex gap-4 justify-center flex-wrap">
            <DXTooltip content="Info top" position="top" color="info">
              <button class="px-4 py-2 bg-slate-100 rounded">Top Info</button>
            </DXTooltip>
            <DXTooltip content="Success bottom" position="bottom" color="success">
              <button class="px-4 py-2 bg-slate-100 rounded">Bottom Success</button>
            </DXTooltip>
            <DXTooltip content="Warning left" position="left" color="warning">
              <button class="px-4 py-2 bg-slate-100 rounded">Left Warning</button>
            </DXTooltip>
            <DXTooltip content="Danger right" position="right" color="danger">
              <button class="px-4 py-2 bg-slate-100 rounded">Right Danger</button>
            </DXTooltip>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Full Featured Example</h3>
          <div class="flex justify-center">
            <DXTooltip 
              content="This is a fully customized tooltip with all features combined: large size, success color, and custom animation" 
              size="lg" 
              color="success" 
              animation="fade-scale"
              maxWidth="250px"
            >
              <button class="px-4 py-2 bg-slate-100 rounded">Full Featured</button>
            </DXTooltip>
          </div>
        </div>
      </div>
    `})},b={args:{content:"Light theme tooltip",color:"light"},render:n=>({components:{DXTooltip:o},setup(){return{args:n}},template:'<DXTooltip v-bind="args"><button class="px-4 py-2 bg-slate-800 text-white rounded">Hover me</button></DXTooltip>'})};var S,w,z;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip'
  },
  render: args => ({
    components: {
      DXTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXTooltip v-bind="args"><button class="px-4 py-2 bg-slate-100 rounded">Hover me</button></DXTooltip>'
  })
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var W,C,L;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTooltip
    },
    template: \`
      <div class="flex gap-8 justify-center py-12">
        <DXTooltip content="Top tooltip" position="top">
          <button class="px-4 py-2 bg-slate-100 rounded">Top</button>
        </DXTooltip>
        <DXTooltip content="Bottom tooltip" position="bottom">
          <button class="px-4 py-2 bg-slate-100 rounded">Bottom</button>
        </DXTooltip>
        <DXTooltip content="Left tooltip" position="left">
          <button class="px-4 py-2 bg-slate-100 rounded">Left</button>
        </DXTooltip>
        <DXTooltip content="Right tooltip" position="right">
          <button class="px-4 py-2 bg-slate-100 rounded">Right</button>
        </DXTooltip>
      </div>
    \`
  })
}`,...(L=(C=a.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var j,F,k;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTooltip
    },
    template: \`
      <div class="flex gap-4 justify-center py-12 flex-wrap">
        <DXTooltip content="Dark tooltip" color="dark">
          <button class="px-4 py-2 bg-slate-100 rounded">Dark</button>
        </DXTooltip>
        <DXTooltip content="Light tooltip" color="light">
          <button class="px-4 py-2 bg-slate-800 text-white rounded">Light</button>
        </DXTooltip>
        <DXTooltip content="Primary tooltip" color="primary">
          <button class="px-4 py-2 bg-slate-100 rounded">Primary</button>
        </DXTooltip>
        <DXTooltip content="Info tooltip" color="info">
          <button class="px-4 py-2 bg-slate-100 rounded">Info</button>
        </DXTooltip>
        <DXTooltip content="Success tooltip" color="success">
          <button class="px-4 py-2 bg-slate-100 rounded">Success</button>
        </DXTooltip>
        <DXTooltip content="Warning tooltip" color="warning">
          <button class="px-4 py-2 bg-slate-100 rounded">Warning</button>
        </DXTooltip>
        <DXTooltip content="Danger tooltip" color="danger">
          <button class="px-4 py-2 bg-slate-100 rounded">Danger</button>
        </DXTooltip>
      </div>
    \`
  })
}`,...(k=(F=p.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var M,V,P;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTooltip
    },
    template: \`
      <div class="flex gap-4 justify-center py-12 items-center">
        <DXTooltip content="Extra small tooltip" size="xs">
          <button class="px-4 py-2 bg-slate-100 rounded">XS</button>
        </DXTooltip>
        <DXTooltip content="Small tooltip" size="sm">
          <button class="px-4 py-2 bg-slate-100 rounded">SM</button>
        </DXTooltip>
        <DXTooltip content="Medium tooltip" size="md">
          <button class="px-4 py-2 bg-slate-100 rounded">MD</button>
        </DXTooltip>
        <DXTooltip content="Large tooltip" size="lg">
          <button class="px-4 py-2 bg-slate-100 rounded">LG</button>
        </DXTooltip>
        <DXTooltip content="Extra large tooltip" size="xl">
          <button class="px-4 py-2 bg-slate-100 rounded">XL</button>
        </DXTooltip>
      </div>
    \`
  })
}`,...(P=(V=r.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var E,R,_;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTooltip
    },
    template: \`
      <div class="flex gap-4 justify-center py-12 flex-wrap">
        <DXTooltip content="Fade animation" animation="fade">
          <button class="px-4 py-2 bg-slate-100 rounded">Fade</button>
        </DXTooltip>
        <DXTooltip content="Fade scale animation" animation="fade-scale">
          <button class="px-4 py-2 bg-slate-100 rounded">Fade Scale</button>
        </DXTooltip>
        <DXTooltip content="Slide up animation" animation="slide-up">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Up</button>
        </DXTooltip>
        <DXTooltip content="Slide down animation" animation="slide-down">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Down</button>
        </DXTooltip>
        <DXTooltip content="Slide left animation" animation="slide-left">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Left</button>
        </DXTooltip>
        <DXTooltip content="Slide right animation" animation="slide-right">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Right</button>
        </DXTooltip>
        <DXTooltip content="Custom tooltip animation" animation="tooltip-custom">
          <button class="px-4 py-2 bg-slate-100 rounded">Custom</button>
        </DXTooltip>
      </div>
    \`
  })
}`,...(_=(R=c.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var B,I,N;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTooltip
    },
    template: \`
      <div class="flex gap-4 justify-center py-12 flex-wrap">
        <DXTooltip>
          <template #content>
            <div class="flex items-center gap-2">
              <span>Custom content with</span>
              <span class="font-semibold">bold text</span>
            </div>
          </template>
          <button class="px-4 py-2 bg-slate-100 rounded">Slot Content</button>
        </DXTooltip>
        <DXTooltip color="info">
          <template #content>
            <div>
              <div class="font-semibold mb-1">Rich Content</div>
              <div class="text-xs opacity-90">With multiple lines and formatting</div>
            </div>
          </template>
          <button class="px-4 py-2 bg-slate-100 rounded">Rich Slot</button>
        </DXTooltip>
      </div>
    \`
  })
}`,...(N=(I=u.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var A,G,H;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTooltip
    },
    template: \`
      <div class="flex gap-4 justify-center py-12 flex-wrap items-center">
        <DXTooltip content="Narrow tooltip with limited width" maxWidth="120px">
          <button class="px-4 py-2 bg-slate-100 rounded">120px</button>
        </DXTooltip>
        <DXTooltip content="Medium width tooltip with more space for content" maxWidth="200px">
          <button class="px-4 py-2 bg-slate-100 rounded">200px</button>
        </DXTooltip>
        <DXTooltip content="Wide tooltip with even more space for longer text content that might wrap to multiple lines" maxWidth="300px">
          <button class="px-4 py-2 bg-slate-100 rounded">300px</button>
        </DXTooltip>
      </div>
    \`
  })
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var U,O,$;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTooltip
    },
    template: \`
      <div class="space-y-8 py-12">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Color + Size Combinations</h3>
          <div class="flex gap-4 justify-center flex-wrap">
            <DXTooltip content="Success large" color="success" size="lg">
              <button class="px-4 py-2 bg-slate-100 rounded">Success LG</button>
            </DXTooltip>
            <DXTooltip content="Warning small" color="warning" size="sm">
              <button class="px-4 py-2 bg-slate-100 rounded">Warning SM</button>
            </DXTooltip>
            <DXTooltip content="Danger extra small" color="danger" size="xs">
              <button class="px-4 py-2 bg-slate-100 rounded">Danger XS</button>
            </DXTooltip>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Position + Color Combinations</h3>
          <div class="flex gap-4 justify-center flex-wrap">
            <DXTooltip content="Info top" position="top" color="info">
              <button class="px-4 py-2 bg-slate-100 rounded">Top Info</button>
            </DXTooltip>
            <DXTooltip content="Success bottom" position="bottom" color="success">
              <button class="px-4 py-2 bg-slate-100 rounded">Bottom Success</button>
            </DXTooltip>
            <DXTooltip content="Warning left" position="left" color="warning">
              <button class="px-4 py-2 bg-slate-100 rounded">Left Warning</button>
            </DXTooltip>
            <DXTooltip content="Danger right" position="right" color="danger">
              <button class="px-4 py-2 bg-slate-100 rounded">Right Danger</button>
            </DXTooltip>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Full Featured Example</h3>
          <div class="flex justify-center">
            <DXTooltip 
              content="This is a fully customized tooltip with all features combined: large size, success color, and custom animation" 
              size="lg" 
              color="success" 
              animation="fade-scale"
              maxWidth="250px"
            >
              <button class="px-4 py-2 bg-slate-100 rounded">Full Featured</button>
            </DXTooltip>
          </div>
        </div>
      </div>
    \`
  })
}`,...($=(O=m.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var q,J,K;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    content: 'Light theme tooltip',
    color: 'light'
  },
  render: args => ({
    components: {
      DXTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXTooltip v-bind="args"><button class="px-4 py-2 bg-slate-800 text-white rounded">Hover me</button></DXTooltip>'
  })
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Ft=["Default","Positions","Colors","Sizes","Animations","WithSlotContent","MaxWidth","Combinations","LightTheme"];export{c as Animations,p as Colors,m as Combinations,i as Default,b as LightTheme,d as MaxWidth,a as Positions,r as Sizes,u as WithSlotContent,Ft as __namedExportsOrder,jt as default};
