import{r as U,c as n,a as f,k as a,o,b as v,e as b,l,t as q,m as S}from"./vue.esm-bundler-Nfu98kES.js";import{_ as H}from"./DXIcon-DQdlGsO1.js";import{_ as J}from"./DXCloseButton-D07dhHMp.js";import{r as K}from"./useVariant-DBYBwuJ6.js";import{a as Q,r as Z}from"./InformationCircleIcon-DsJgS0pw.js";import{r as ee}from"./CheckCircleIcon-BeodL6Lf.js";import"./useSize-D8MrabOp.js";import"./useAnimation-CL8rPOHu.js";import"./DXButton-D4QV5g9V.js";import"./useClassComposition-Dym2pzZ_.js";import"./XMarkIcon-BiPc0SME.js";const te=["data-variant"],ne={class:"flex items-start gap-3"},re={class:"flex-1 min-w-0"},se={key:0,class:"mt-3 flex gap-2"},ae="rounded-xl border p-4",t={__name:"DXAlert",props:{variant:{type:String,default:"info"},title:{type:String,default:""},icon:{type:[Object,Function],default:void 0},showIcon:{type:Boolean,default:!0},dismissible:{type:Boolean,default:!1}},emits:["dismiss"],setup(e,{emit:L}){const s=e,O=L,D=U(!1),Y=()=>{D.value=!0,O("dismiss")},A={info:{bg:"bg-blue-50 border-blue-200",icon:"text-blue-500",title:"text-blue-900",content:"text-blue-800",close:"text-blue-500",defaultIcon:Z},success:{bg:"bg-emerald-50 border-emerald-200",icon:"text-emerald-500",title:"text-emerald-900",content:"text-emerald-800",close:"text-emerald-500",defaultIcon:ee},warning:{bg:"bg-amber-50 border-amber-200",icon:"text-amber-500",title:"text-amber-900",content:"text-amber-800",close:"text-amber-500",defaultIcon:Q},danger:{bg:"bg-rose-50 border-rose-200",icon:"text-rose-500",title:"text-rose-900",content:"text-rose-800",close:"text-rose-500",defaultIcon:K}},r=n(()=>A[s.variant]||A.info),X=n(()=>s.showIcon?s.icon!==void 0?s.icon:r.value.defaultIcon:null),F=n(()=>[ae,r.value.bg]),G=n(()=>["w-5 h-5 flex-shrink-0 mt-0.5",r.value.icon]),M=n(()=>r.value.title),R=n(()=>["text-sm",r.value.content,s.title&&"mt-1"]);return n(()=>r.value.close),(g,oe)=>D.value?a("",!0):(o(),f("div",{key:0,class:l(F.value),role:"alert","data-component":"DXAlert","data-variant":e.variant},[v("div",ne,[X.value?(o(),b(H,{key:0,icon:X.value,size:"md",animation:"none",class:l(G.value)},null,8,["icon","class"])):a("",!0),v("div",re,[e.title?(o(),f("p",{key:0,class:l(["font-semibold",M.value])},q(e.title),3)):a("",!0),v("div",{class:l(R.value)},[S(g.$slots,"default")],2)]),e.dismissible?(o(),b(J,{key:1,size:"sm",variant:"default",onClick:Y})):a("",!0)]),g.$slots.actions?(o(),f("div",se,[S(g.$slots,"actions")])):a("",!0)],10,te))}};t.__docgenInfo={exportName:"default",displayName:"DXAlert",description:"",tags:{},props:[{name:"variant",description:"Вариант: info | success | warning | danger",type:{name:"string"},defaultValue:{func:!1,value:'"info"'}},{name:"title",description:"Заголовок",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"icon",description:"Иконка (компонент), если null - используется иконка по умолчанию для variant",type:{name:"object|func"},defaultValue:{func:!1,value:"undefined"}},{name:"showIcon",description:"Показывать иконку",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"dismissible",description:"Можно закрыть",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"dismiss"}],slots:[{name:"default"},{name:"actions"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXAlert/DXAlert.vue"]};const Ae={title:"Molecules/DXAlert",component:t,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["info","success","warning","danger"]}}},i={args:{variant:"info",title:"Information"},render:e=>({components:{DXAlert:t},setup(){return{args:e}},template:'<DXAlert v-bind="args">This is an informational message.</DXAlert>'})},c={args:{variant:"success",title:"Success"},render:e=>({components:{DXAlert:t},setup(){return{args:e}},template:'<DXAlert v-bind="args">Your changes have been saved successfully.</DXAlert>'})},m={args:{variant:"warning",title:"Warning"},render:e=>({components:{DXAlert:t},setup(){return{args:e}},template:'<DXAlert v-bind="args">Please review before continuing.</DXAlert>'})},u={args:{variant:"danger",title:"Error"},render:e=>({components:{DXAlert:t},setup(){return{args:e}},template:'<DXAlert v-bind="args">Something went wrong. Please try again.</DXAlert>'})},d={args:{variant:"info",title:"Dismissible",dismissible:!0},render:e=>({components:{DXAlert:t},setup(){return{args:e}},template:'<DXAlert v-bind="args">Click the X to dismiss this alert.</DXAlert>'})},p={render:()=>({components:{DXAlert:t},template:`
      <div class="space-y-4">
        <DXAlert variant="info" title="Info">Informational message</DXAlert>
        <DXAlert variant="success" title="Success">Success message</DXAlert>
        <DXAlert variant="warning" title="Warning">Warning message</DXAlert>
        <DXAlert variant="danger" title="Error">Error message</DXAlert>
      </div>
    `})};var y,x,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information'
  },
  render: args => ({
    components: {
      DXAlert
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXAlert v-bind="args">This is an informational message.</DXAlert>'
  })
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var _,w,I;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success'
  },
  render: args => ({
    components: {
      DXAlert
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXAlert v-bind="args">Your changes have been saved successfully.</DXAlert>'
  })
}`,...(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var E,k,V;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning'
  },
  render: args => ({
    components: {
      DXAlert
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXAlert v-bind="args">Please review before continuing.</DXAlert>'
  })
}`,...(V=(k=m.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var C,W,$;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    title: 'Error'
  },
  render: args => ({
    components: {
      DXAlert
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXAlert v-bind="args">Something went wrong. Please try again.</DXAlert>'
  })
}`,...($=(W=u.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var B,N,P;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Dismissible',
    dismissible: true
  },
  render: args => ({
    components: {
      DXAlert
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXAlert v-bind="args">Click the X to dismiss this alert.</DXAlert>'
  })
}`,...(P=(N=d.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var T,j,z;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXAlert
    },
    template: \`
      <div class="space-y-4">
        <DXAlert variant="info" title="Info">Informational message</DXAlert>
        <DXAlert variant="success" title="Success">Success message</DXAlert>
        <DXAlert variant="warning" title="Warning">Warning message</DXAlert>
        <DXAlert variant="danger" title="Error">Error message</DXAlert>
      </div>
    \`
  })
}`,...(z=(j=p.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const Xe=["Info","Success","Warning","Danger","Dismissible","AllVariants"];export{p as AllVariants,u as Danger,d as Dismissible,i as Info,c as Success,m as Warning,Xe as __namedExportsOrder,Ae as default};
