import{a as o,b as a,o as n,r as le,k as se,u as I,l as re,e as f,z as pe}from"./vue.esm-bundler-CzLKT_w4.js";import{_ as k}from"./DXIcon-BbhqsR95.js";import{r as de}from"./CheckIcon-CXhdKTUC.js";import{r as me}from"./CodeBracketIcon-CAb7Ao5E.js";import{r as ue}from"./DocumentDuplicateIcon-DrbxdWZ3.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";function ye(e,t){return n(),o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"})])}function ae(e,t){return n(),o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"})])}function oe(e,t){return n(),o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"})])}function te(e,t){return n(),o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"})])}const ve={class:"space-y-1","data-component":"DXCopyField"},be={key:0,class:"text-[11px] uppercase tracking-wide text-slate-500 font-semibold"},ge={class:"flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-3 py-3"},he={class:"text-base font-semibold text-slate-900 break-all flex-1 text-center"},xe=["aria-label"],i={__name:"DXCopyField",props:{label:{type:String,default:""},value:{type:String,default:""},copyIcon:{type:[Object,Function],default:()=>ae},successIcon:{type:[Object,Function],default:()=>ye},copyIconAnimation:{type:String,default:"scale"},copiedIconAnimation:{type:String,default:"scale"},successDuration:{type:Number,default:2e3}},emits:["copied"],setup(e,{emit:t}){const c=e,ie=t,l=le(!1),ce=async()=>{if(c.value)try{await navigator.clipboard.writeText(c.value),l.value=!0,ie("copied",c.value),setTimeout(()=>{l.value=!1},c.successDuration)}catch(x){console.error("Не удалось скопировать",x)}};return(x,Ie)=>(n(),o("div",ve,[e.label?(n(),o("p",be,I(e.label),1)):se("",!0),a("div",ge,[a("p",he,I(e.value||"—"),1),a("button",{type:"button",class:re(["h-9 w-9 inline-flex items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:border-slate-300 bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2",{"border-emerald-300 bg-emerald-50":l.value}]),"aria-label":`Скопировать ${e.label||"значение"}`,onClick:ce},[l.value?(n(),f(k,{key:0,icon:pe(de),size:"sm",animation:e.copiedIconAnimation,class:"text-emerald-600"},null,8,["icon","animation"])):(n(),f(k,{key:1,icon:e.copyIcon,size:"sm",animation:e.copyIconAnimation},null,8,["icon","animation"]))],10,xe)])]))}};i.__docgenInfo={exportName:"default",displayName:"DXCopyField",description:"",tags:{},props:[{name:"label",description:"Лейбл",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"value",description:"Значение для копирования",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"copyIcon",description:"Иконка для копирования",type:{name:"object|func"},defaultValue:{func:!0,value:"() => ClipboardDocumentIcon"}},{name:"successIcon",description:"Иконка успешного копирования",type:{name:"object|func"},defaultValue:{func:!0,value:"() => ClipboardDocumentCheckIcon"}},{name:"copyIconAnimation",description:"Анимация иконки копирования: none | wiggle | scale | rotate",type:{name:"string"},defaultValue:{func:!1,value:'"scale"'}},{name:"copiedIconAnimation",description:"Анимация иконки успеха: none | wiggle | scale | rotate",type:{name:"string"},defaultValue:{func:!1,value:'"scale"'}},{name:"successDuration",description:"Время отображения успешного состояния (мс)",type:{name:"number"},defaultValue:{func:!1,value:"2000"}}],events:[{name:"copied"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXCopyField/DXCopyField.vue"]};const Xe={title:"Molecules/DXCopyField",component:i,tags:["autodocs"],argTypes:{copyIconAnimation:{control:"select",options:["none","wiggle","scale","rotate"]},copiedIconAnimation:{control:"select",options:["none","wiggle","scale","rotate"]}}},s={args:{value:"https://example.com/share/abc123",label:"Share Link"}},r={args:{value:"npm install dxd-style-code",label:"Installation"}},p={args:{value:"sk_live_abc123xyz789",label:"API Key"}},d={args:{value:"https://example.com/share/abc123",label:"Share Link",copyIconAnimation:"wiggle",copiedIconAnimation:"wiggle"}},m={args:{value:"npm install dxd-style-code",label:"Installation",copyIconAnimation:"scale",copiedIconAnimation:"scale"}},u={args:{value:"sk_live_abc123xyz789",label:"API Key",copyIconAnimation:"rotate",copiedIconAnimation:"rotate"}},y={args:{value:"https://example.com/share",label:"Link",copyIconAnimation:"none",copiedIconAnimation:"none"}},v={render:()=>({components:{DXCopyField:i},setup(){return{KeyIcon:oe,LinkIcon:te,CodeBracketIcon:me}},template:`
      <div class="space-y-6">
        <DXCopyField
          value="sk_live_abc123xyz789"
          label="API Key"
          :copy-icon="KeyIcon"
          copy-icon-animation="wiggle"
        />
        
        <DXCopyField
          value="https://example.com/invite/abc123"
          label="Invite Link"
          :copy-icon="LinkIcon"
          copy-icon-animation="scale"
        />
        
        <DXCopyField
          value="import { DXButton } from 'dxd-style-code'"
          label="Import Code"
          :copy-icon="CodeBracketIcon"
          copy-icon-animation="rotate"
        />
      </div>
    `})},b={args:{value:"https://example.com/share/abc123",label:"Share Link",copyIconAnimation:"wiggle",copiedIconAnimation:"scale"}},g={render:()=>({components:{DXCopyField:i},setup(){return{ClipboardDocumentIcon:ae,KeyIcon:oe,LinkIcon:te,DocumentDuplicateIcon:ue}},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Default (Scale animation)</h3>
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Wiggle Animation</h3>
          <DXCopyField
            value="npm install dxd-style-code"
            label="Installation"
            copy-icon-animation="wiggle"
            copied-icon-animation="wiggle"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Rotate Animation</h3>
          <DXCopyField
            value="sk_live_abc123xyz789"
            label="API Key"
            copy-icon-animation="rotate"
            copied-icon-animation="rotate"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Custom Icon</h3>
          <DXCopyField
            value="https://example.com/invite/abc123"
            label="Invite Link"
            :copy-icon="LinkIcon"
            copy-icon-animation="scale"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Mixed Animations</h3>
          <DXCopyField
            value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
            label="JWT Token"
            copy-icon-animation="wiggle"
            copied-icon-animation="scale"
          />
        </div>
      </div>
    `})},h={render:()=>({components:{DXCopyField:i},template:`
      <div class="p-6 bg-slate-50 rounded-xl space-y-4">
        <h3 class="text-lg font-semibold text-slate-900">Try copying these values!</h3>
        <div class="space-y-4">
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
            copy-icon-animation="scale"
            @copied="(val) => console.log('Copied:', val)"
          />
          <DXCopyField
            value="npm install dxd-style-code"
            label="Installation Command"
            copy-icon-animation="wiggle"
          />
          <DXCopyField
            value="sk_live_abc123xyz789"
            label="API Key"
            copy-icon-animation="rotate"
          />
        </div>
        <p class="text-xs text-slate-500">Click the copy button to copy to clipboard</p>
      </div>
    `})};var C,A,D;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: 'https://example.com/share/abc123',
    label: 'Share Link'
  }
}`,...(D=(A=s.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var w,_,X;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: 'npm install dxd-style-code',
    label: 'Installation'
  }
}`,...(X=(_=r.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var F,S,L;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    value: 'sk_live_abc123xyz789',
    label: 'API Key'
  }
}`,...(L=(S=p.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var V,K,z;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    value: 'https://example.com/share/abc123',
    label: 'Share Link',
    copyIconAnimation: 'wiggle',
    copiedIconAnimation: 'wiggle'
  }
}`,...(z=(K=d.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var B,M,P;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    value: 'npm install dxd-style-code',
    label: 'Installation',
    copyIconAnimation: 'scale',
    copiedIconAnimation: 'scale'
  }
}`,...(P=(M=m.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var j,N,T;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: 'sk_live_abc123xyz789',
    label: 'API Key',
    copyIconAnimation: 'rotate',
    copiedIconAnimation: 'rotate'
  }
}`,...(T=(N=u.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var H,J,$;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    value: 'https://example.com/share',
    label: 'Link',
    copyIconAnimation: 'none',
    copiedIconAnimation: 'none'
  }
}`,...($=(J=y.parameters)==null?void 0:J.docs)==null?void 0:$.source}}};var E,O,R;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCopyField
    },
    setup() {
      return {
        KeyIcon,
        LinkIcon,
        CodeBracketIcon
      };
    },
    template: \`
      <div class="space-y-6">
        <DXCopyField
          value="sk_live_abc123xyz789"
          label="API Key"
          :copy-icon="KeyIcon"
          copy-icon-animation="wiggle"
        />
        
        <DXCopyField
          value="https://example.com/invite/abc123"
          label="Invite Link"
          :copy-icon="LinkIcon"
          copy-icon-animation="scale"
        />
        
        <DXCopyField
          value="import { DXButton } from 'dxd-style-code'"
          label="Import Code"
          :copy-icon="CodeBracketIcon"
          copy-icon-animation="rotate"
        />
      </div>
    \`
  })
}`,...(R=(O=v.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var W,G,U;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    value: 'https://example.com/share/abc123',
    label: 'Share Link',
    copyIconAnimation: 'wiggle',
    copiedIconAnimation: 'scale'
  }
}`,...(U=(G=b.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var Z,q,Q;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCopyField
    },
    setup() {
      return {
        ClipboardDocumentIcon,
        KeyIcon,
        LinkIcon,
        DocumentDuplicateIcon
      };
    },
    template: \`
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Default (Scale animation)</h3>
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Wiggle Animation</h3>
          <DXCopyField
            value="npm install dxd-style-code"
            label="Installation"
            copy-icon-animation="wiggle"
            copied-icon-animation="wiggle"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Rotate Animation</h3>
          <DXCopyField
            value="sk_live_abc123xyz789"
            label="API Key"
            copy-icon-animation="rotate"
            copied-icon-animation="rotate"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Custom Icon</h3>
          <DXCopyField
            value="https://example.com/invite/abc123"
            label="Invite Link"
            :copy-icon="LinkIcon"
            copy-icon-animation="scale"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Mixed Animations</h3>
          <DXCopyField
            value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
            label="JWT Token"
            copy-icon-animation="wiggle"
            copied-icon-animation="scale"
          />
        </div>
      </div>
    \`
  })
}`,...(Q=(q=g.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var Y,ee,ne;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCopyField
    },
    template: \`
      <div class="p-6 bg-slate-50 rounded-xl space-y-4">
        <h3 class="text-lg font-semibold text-slate-900">Try copying these values!</h3>
        <div class="space-y-4">
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
            copy-icon-animation="scale"
            @copied="(val) => console.log('Copied:', val)"
          />
          <DXCopyField
            value="npm install dxd-style-code"
            label="Installation Command"
            copy-icon-animation="wiggle"
          />
          <DXCopyField
            value="sk_live_abc123xyz789"
            label="API Key"
            copy-icon-animation="rotate"
          />
        </div>
        <p class="text-xs text-slate-500">Click the copy button to copy to clipboard</p>
      </div>
    \`
  })
}`,...(ne=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const Fe=["Default","Code","ApiKey","WiggleAnimation","ScaleAnimation","RotateAnimation","NoAnimation","CustomIcons","MixedAnimations","AllVariants","Interactive"];export{g as AllVariants,p as ApiKey,r as Code,v as CustomIcons,s as Default,h as Interactive,b as MixedAnimations,y as NoAnimation,u as RotateAnimation,m as ScaleAnimation,d as WiggleAnimation,Fe as __namedExportsOrder,Xe as default};
