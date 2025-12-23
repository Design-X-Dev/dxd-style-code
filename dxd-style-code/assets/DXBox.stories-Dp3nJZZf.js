import{c as w,e as X,o as v,g as S,l as _,p as V,m as C}from"./vue.esm-bundler-Nfu98kES.js";const a={__name:"DXBox",props:{tag:{type:String,default:"div"},p:{type:String,default:""},px:{type:String,default:""},py:{type:String,default:""},m:{type:String,default:""},mx:{type:String,default:""},my:{type:String,default:""},rounded:{type:String,default:""},bg:{type:String,default:""},shadow:{type:String,default:""},border:{type:Boolean,default:!1}},setup(n){const e=n,r={none:"0",xs:"1",sm:"2",md:"4",lg:"6",xl:"8"},d={none:"0",xs:"1",sm:"2",md:"4",lg:"6",xl:"8",auto:"auto"},y={none:"rounded-none",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",xl:"rounded-xl","2xl":"rounded-2xl",full:"rounded-full"},h={white:"bg-white",slate:"bg-slate-50",transparent:"bg-transparent"},b={none:"shadow-none",sm:"shadow-sm",md:"shadow",lg:"shadow-lg",xl:"shadow-xl"},B=w(()=>[e.p&&`p-${r[e.p]||e.p}`,e.px&&`px-${r[e.px]||e.px}`,e.py&&`py-${r[e.py]||e.py}`,e.m&&`m-${d[e.m]||e.m}`,e.mx&&`mx-${d[e.mx]||e.mx}`,e.my&&`my-${d[e.my]||e.my}`,e.rounded&&(y[e.rounded]||`rounded-${e.rounded}`),e.bg&&(h[e.bg]||e.bg),e.shadow&&(b[e.shadow]||`shadow-${e.shadow}`),e.border&&"border border-slate-200"]);return(D,$)=>(v(),X(V(n.tag),{class:_(B.value),"data-component":"DXBox"},{default:S(()=>[C(D.$slots,"default")]),_:3},8,["class"]))}};a.__docgenInfo={exportName:"default",displayName:"DXBox",description:"",tags:{},props:[{name:"tag",description:"HTML тег",type:{name:"string"},defaultValue:{func:!1,value:'"div"'}},{name:"p",description:"Padding: none | xs | sm | md | lg | xl",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"px",description:"Padding X (horizontal)",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"py",description:"Padding Y (vertical)",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"m",description:"Margin: none | xs | sm | md | lg | xl | auto",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"mx",description:"Margin X (horizontal)",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"my",description:"Margin Y (vertical)",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"rounded",description:"Скругление: none | sm | md | lg | xl | 2xl | full",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"bg",description:"Фон: white | slate | transparent",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"shadow",description:"Тень: none | sm | md | lg | xl",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"border",description:"Рамка",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/layout/DXBox/DXBox.vue"]};const E={title:"Layout/DXBox",component:a,tags:["autodocs"]},t={args:{p:"md",bg:"slate",rounded:"lg"},render:n=>({components:{DXBox:a},setup(){return{args:n}},template:'<DXBox v-bind="args">Content inside box</DXBox>'})},o={args:{p:"lg",bg:"white",rounded:"xl",border:!0},render:n=>({components:{DXBox:a},setup(){return{args:n}},template:'<DXBox v-bind="args">Box with border</DXBox>'})},s={args:{p:"lg",bg:"white",rounded:"xl",shadow:"lg"},render:n=>({components:{DXBox:a},setup(){return{args:n}},template:'<DXBox v-bind="args">Box with shadow</DXBox>'})};var l,u,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    p: 'md',
    bg: 'slate',
    rounded: 'lg'
  },
  render: args => ({
    components: {
      DXBox
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXBox v-bind="args">Content inside box</DXBox>'
  })
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,i,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    p: 'lg',
    bg: 'white',
    rounded: 'xl',
    border: true
  },
  render: args => ({
    components: {
      DXBox
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXBox v-bind="args">Box with border</DXBox>'
  })
}`,...(g=(i=o.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var c,x,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    p: 'lg',
    bg: 'white',
    rounded: 'xl',
    shadow: 'lg'
  },
  render: args => ({
    components: {
      DXBox
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXBox v-bind="args">Box with shadow</DXBox>'
  })
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const P=["Default","WithBorder","WithShadow"];export{t as Default,o as WithBorder,s as WithShadow,P as __namedExportsOrder,E as default};
