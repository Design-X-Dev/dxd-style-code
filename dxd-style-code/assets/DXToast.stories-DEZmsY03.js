import{c as e,a as N,o as u,e as k,k as P,b as B,l as g,m as $}from"./vue.esm-bundler-Nfu98kES.js";import{h as O}from"./useVariant-DBYBwuJ6.js";import{_ as W}from"./DXIcon-DQdlGsO1.js";import"./InformationCircleIcon-DsJgS0pw.js";import"./CheckCircleIcon-BeodL6Lf.js";import"./useSize-D8MrabOp.js";import"./useAnimation-CL8rPOHu.js";const A=["data-variant"],z={class:"flex-1"},c={__name:"DXToast",props:{variant:{type:String,default:"info"},showIcon:{type:Boolean,default:!0}},setup(i){const m=i,a=e(()=>O(m.variant)),b=e(()=>`${a.value.bg} ${a.value.border} ${a.value.text}`),l=e(()=>m.showIcon?a.value.icon:null),V=e(()=>a.value.iconColor);return(C,j)=>(u(),N("div",{class:g(["flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm",b.value]),"data-component":"DXToast","data-variant":i.variant},[l.value?(u(),k(W,{key:0,icon:l.value,size:"md",animation:"none",class:g([V.value,"shrink-0 mt-0.5"])},null,8,["icon","class"])):P("",!0),B("div",z,[$(C.$slots,"default")])],10,A))}};c.__docgenInfo={exportName:"default",displayName:"DXToast",description:"",tags:{},props:[{name:"variant",description:"Вариант: info | success | warning | danger",type:{name:"string"},defaultValue:{func:!1,value:'"info"'}},{name:"showIcon",description:"Показывать иконку",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/atoms/DXToast/DXToast.vue"]};const K={title:"Atoms/DXToast",component:c,tags:["autodocs"]},s={args:{variant:"success",message:"Operation completed successfully!"}},r={args:{variant:"error",message:"Something went wrong. Please try again."}},o={args:{variant:"warning",message:"Please review before continuing."}},n={args:{variant:"info",message:"New features are available."}},t={render:()=>({components:{DXToast:c},template:`
      <div class="space-y-4">
        <DXToast variant="success" message="Success toast message" />
        <DXToast variant="error" message="Error toast message" />
        <DXToast variant="warning" message="Warning toast message" />
        <DXToast variant="info" message="Info toast message" />
      </div>
    `})};var p,d,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "success",
    message: "Operation completed successfully!"
  }
}`,...(v=(d=s.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var f,D,_;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "error",
    message: "Something went wrong. Please try again."
  }
}`,...(_=(D=r.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var X,T,w;o.parameters={...o.parameters,docs:{...(X=o.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    message: "Please review before continuing."
  }
}`,...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var y,S,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "info",
    message: "New features are available."
  }
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var h,E,I;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXToast
    },
    template: \`
      <div class="space-y-4">
        <DXToast variant="success" message="Success toast message" />
        <DXToast variant="error" message="Error toast message" />
        <DXToast variant="warning" message="Warning toast message" />
        <DXToast variant="info" message="Info toast message" />
      </div>
    \`
  })
}`,...(I=(E=t.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const M=["Success","Error","Warning","Info","AllVariants"];export{t as AllVariants,r as Error,n as Info,s as Success,o as Warning,M as __namedExportsOrder,K as default};
