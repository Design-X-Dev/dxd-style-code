import{c as d,e as b,g as C,l as h,p as w,o as S,m as _}from"./vue.esm-bundler-Nfu98kES.js";import{n as z}from"./useVariant-DBYBwuJ6.js";import"./InformationCircleIcon-DsJgS0pw.js";import"./CheckCircleIcon-BeodL6Lf.js";const n={__name:"DXHeading",props:{level:{type:[Number,String],default:1},size:{type:String,default:""},weight:{type:String,default:"semibold"},color:{type:String,default:"default"},truncate:{type:Boolean,default:!1}},setup(a){const e=a,X=d(()=>`h${e.level}`),v={xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl","4xl":"text-4xl"},f={1:"text-4xl",2:"text-3xl",3:"text-2xl",4:"text-xl",5:"text-lg",6:"text-base"},s={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},x=d(()=>[e.size?v[e.size]:f[e.level],s[e.weight]||s.semibold,z(e.color),"tracking-tight",e.truncate&&"truncate"]);return(y,E)=>(S(),b(w(X.value),{class:h(x.value),"data-component":"DXHeading","data-level":a.level,"data-weight":a.weight,"data-color":a.color},{default:C(()=>[_(y.$slots,"default")]),_:3},8,["class","data-level","data-weight","data-color"]))}};n.__docgenInfo={exportName:"default",displayName:"DXHeading",description:"",tags:{},props:[{name:"level",description:"Уровень заголовка: 1-6",type:{name:"number|string"},defaultValue:{func:!1,value:"1"}},{name:"size",description:"Размер (переопределяет level): xs | sm | md | lg | xl | 2xl | 3xl | 4xl",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"weight",description:"Вес шрифта: normal | medium | semibold | bold",type:{name:"string"},defaultValue:{func:!1,value:'"semibold"'}},{name:"color",description:"Цвет: default | muted | primary | success | warning | danger",type:{name:"string"},defaultValue:{func:!1,value:'"default"'}},{name:"truncate",description:"Обрезать текст с ...",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/typography/DXHeading/DXHeading.vue"]};const A={title:"Typography/DXHeading",component:n,tags:["autodocs"],argTypes:{level:{control:{type:"select"},options:[1,2,3,4,5,6]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl","3xl","4xl"]},weight:{control:{type:"select"},options:["normal","medium","semibold","bold"]},color:{control:{type:"select"},options:["default","muted","primary","success","warning","danger"]}}},l={args:{level:1},render:a=>({components:{DXHeading:n},setup(){return{args:a}},template:'<DXHeading v-bind="args">Заголовок страницы</DXHeading>'})},t={render:()=>({components:{DXHeading:n},template:`
      <div class="space-y-4">
        <DXHeading :level="1">Heading 1</DXHeading>
        <DXHeading :level="2">Heading 2</DXHeading>
        <DXHeading :level="3">Heading 3</DXHeading>
        <DXHeading :level="4">Heading 4</DXHeading>
        <DXHeading :level="5">Heading 5</DXHeading>
        <DXHeading :level="6">Heading 6</DXHeading>
      </div>
    `})},o={render:()=>({components:{DXHeading:n},template:`
      <div class="space-y-2">
        <DXHeading :level="3" color="default">Default Color</DXHeading>
        <DXHeading :level="3" color="muted">Muted Color</DXHeading>
        <DXHeading :level="3" color="success">Success Color</DXHeading>
        <DXHeading :level="3" color="warning">Warning Color</DXHeading>
        <DXHeading :level="3" color="danger">Danger Color</DXHeading>
      </div>
    `})};var i,r,g;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    level: 1
  },
  render: args => ({
    components: {
      DXHeading
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXHeading v-bind="args">Заголовок страницы</DXHeading>'
  })
}`,...(g=(r=l.parameters)==null?void 0:r.docs)==null?void 0:g.source}}};var c,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXHeading
    },
    template: \`
      <div class="space-y-4">
        <DXHeading :level="1">Heading 1</DXHeading>
        <DXHeading :level="2">Heading 2</DXHeading>
        <DXHeading :level="3">Heading 3</DXHeading>
        <DXHeading :level="4">Heading 4</DXHeading>
        <DXHeading :level="5">Heading 5</DXHeading>
        <DXHeading :level="6">Heading 6</DXHeading>
      </div>
    \`
  })
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,H,D;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXHeading
    },
    template: \`
      <div class="space-y-2">
        <DXHeading :level="3" color="default">Default Color</DXHeading>
        <DXHeading :level="3" color="muted">Muted Color</DXHeading>
        <DXHeading :level="3" color="success">Success Color</DXHeading>
        <DXHeading :level="3" color="warning">Warning Color</DXHeading>
        <DXHeading :level="3" color="danger">Danger Color</DXHeading>
      </div>
    \`
  })
}`,...(D=(H=o.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};const L=["Default","AllLevels","Colors"];export{t as AllLevels,o as Colors,l as Default,L as __namedExportsOrder,A as default};
