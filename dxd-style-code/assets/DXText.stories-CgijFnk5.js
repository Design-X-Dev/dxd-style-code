import{c as y,e as E,l as v,p as z,o as b,g as h,m as S}from"./vue.esm-bundler-Nfu98kES.js";import{n as w}from"./useVariant-DBYBwuJ6.js";import"./InformationCircleIcon-DsJgS0pw.js";import"./CheckCircleIcon-BeodL6Lf.js";const a={__name:"DXText",props:{tag:{type:String,default:"p"},size:{type:String,default:"md"},weight:{type:String,default:"normal"},color:{type:String,default:"default"},align:{type:String,default:"left"},truncate:{type:Boolean,default:!1},lines:{type:Number,default:0}},setup(e){const t=e,r={xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl"},l={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},o={left:"text-left",center:"text-center",right:"text-right",justify:"text-justify"},T=y(()=>[r[t.size]||r.md,l[t.weight]||l.normal,w(t.color),o[t.align]||o.left,"leading-relaxed",t.truncate&&"truncate",t.lines>0&&`line-clamp-${t.lines}`]);return(X,C)=>(b(),E(z(e.tag),{class:v(T.value),"data-component":"DXText","data-size":e.size,"data-weight":e.weight,"data-color":e.color},{default:h(()=>[S(X.$slots,"default")]),_:3},8,["class","data-size","data-weight","data-color"]))}};a.__docgenInfo={exportName:"default",displayName:"DXText",description:"",tags:{},props:[{name:"tag",description:"Тег: p | span | div",type:{name:"string"},defaultValue:{func:!1,value:'"p"'}},{name:"size",description:"Размер: xs | sm | md | lg | xl",type:{name:"string"},defaultValue:{func:!1,value:'"md"'}},{name:"weight",description:"Вес шрифта: normal | medium | semibold | bold",type:{name:"string"},defaultValue:{func:!1,value:'"normal"'}},{name:"color",description:"Цвет: default | muted | primary | success | warning | danger",type:{name:"string"},defaultValue:{func:!1,value:'"default"'}},{name:"align",description:"Выравнивание: left | center | right | justify",type:{name:"string"},defaultValue:{func:!1,value:'"left"'}},{name:"truncate",description:"Обрезать текст с ...",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"lines",description:"Максимум строк (line-clamp)",type:{name:"number"},defaultValue:{func:!1,value:"0"}}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/typography/DXText/DXText.vue"]};const L={title:"Typography/DXText",component:a,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},weight:{control:{type:"select"},options:["normal","medium","semibold","bold"]},color:{control:{type:"select"},options:["default","muted","primary","success","warning","danger"]},align:{control:{type:"select"},options:["left","center","right","justify"]}}},s={args:{},render:e=>({components:{DXText:a},setup(){return{args:e}},template:'<DXText v-bind="args">Это обычный текстовый параграф с настройками по умолчанию.</DXText>'})},u={render:()=>({components:{DXText:a},template:`
      <div class="space-y-2">
        <DXText size="xs">Extra Small Text</DXText>
        <DXText size="sm">Small Text</DXText>
        <DXText size="md">Medium Text (default)</DXText>
        <DXText size="lg">Large Text</DXText>
        <DXText size="xl">Extra Large Text</DXText>
      </div>
    `})},n={args:{truncate:!0},render:e=>({components:{DXText:a},setup(){return{args:e}},template:'<div class="w-48"><DXText v-bind="args">Это очень длинный текст который будет обрезан с многоточием</DXText></div>'})};var i,c,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      DXText
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXText v-bind="args">Это обычный текстовый параграф с настройками по умолчанию.</DXText>'
  })
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,x;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXText
    },
    template: \`
      <div class="space-y-2">
        <DXText size="xs">Extra Small Text</DXText>
        <DXText size="sm">Small Text</DXText>
        <DXText size="md">Medium Text (default)</DXText>
        <DXText size="lg">Large Text</DXText>
        <DXText size="xl">Extra Large Text</DXText>
      </div>
    \`
  })
}`,...(x=(p=u.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var g,f,D;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    truncate: true
  },
  render: args => ({
    components: {
      DXText
    },
    setup() {
      return {
        args
      };
    },
    template: '<div class="w-48"><DXText v-bind="args">Это очень длинный текст который будет обрезан с многоточием</DXText></div>'
  })
}`,...(D=(f=n.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};const A=["Default","Sizes","Truncated"];export{s as Default,u as Sizes,n as Truncated,A as __namedExportsOrder,L as default};
