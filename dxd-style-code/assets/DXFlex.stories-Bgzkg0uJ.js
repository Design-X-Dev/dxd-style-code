import{c as b,a as j,o as _,m as S,l as C}from"./vue.esm-bundler-Nfu98kES.js";const n={__name:"DXFlex",props:{direction:{type:String,default:"row"},justify:{type:String,default:"start"},align:{type:String,default:"center"},wrap:{type:String,default:"nowrap"},gap:{type:String,default:"md"},inline:{type:Boolean,default:!1}},setup(e){const t=e,o={row:"flex-row","row-reverse":"flex-row-reverse",col:"flex-col","col-reverse":"flex-col-reverse"},p={start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},c={start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch",baseline:"items-baseline"},i={nowrap:"flex-nowrap",wrap:"flex-wrap","wrap-reverse":"flex-wrap-reverse"},u={none:"gap-0",xs:"gap-1",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8"},F=b(()=>[t.inline?"inline-flex":"flex",o[t.direction]||o.row,p[t.justify]||p.start,c[t.align]||c.center,i[t.wrap]||i.nowrap,u[t.gap]||u.md]);return(X,V)=>(_(),j("div",{class:C(F.value),"data-component":"DXFlex"},[S(X.$slots,"default")],2))}};n.__docgenInfo={exportName:"default",displayName:"DXFlex",description:"",tags:{},props:[{name:"direction",description:"Направление: row | row-reverse | col | col-reverse",type:{name:"string"},defaultValue:{func:!1,value:'"row"'}},{name:"justify",description:"Выравнивание по главной оси: start | center | end | between | around | evenly",type:{name:"string"},defaultValue:{func:!1,value:'"start"'}},{name:"align",description:"Выравнивание по поперечной оси: start | center | end | stretch | baseline",type:{name:"string"},defaultValue:{func:!1,value:'"center"'}},{name:"wrap",description:"Перенос: nowrap | wrap | wrap-reverse",type:{name:"string"},defaultValue:{func:!1,value:'"nowrap"'}},{name:"gap",description:"Отступ между элементами: none | xs | sm | md | lg | xl",type:{name:"string"},defaultValue:{func:!1,value:'"md"'}},{name:"inline",description:"Inline flex",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/layout/DXFlex/DXFlex.vue"]};const h={title:"Layout/DXFlex",component:n,tags:["autodocs"],argTypes:{direction:{control:{type:"select"},options:["row","row-reverse","col","col-reverse"]},justify:{control:{type:"select"},options:["start","center","end","between","around","evenly"]},align:{control:{type:"select"},options:["start","center","end","stretch","baseline"]},gap:{control:{type:"select"},options:["none","xs","sm","md","lg","xl"]}}},l='<div class="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center">Box</div>',r={args:{justify:"start",gap:"md"},render:e=>({components:{DXFlex:n},setup(){return{args:e}},template:`<DXFlex v-bind="args">${l.repeat(4)}</DXFlex>`})},s={args:{justify:"between",gap:"md"},render:e=>({components:{DXFlex:n},setup(){return{args:e}},template:`<DXFlex v-bind="args">${l.repeat(3)}</DXFlex>`})},a={args:{direction:"col",gap:"sm"},render:e=>({components:{DXFlex:n},setup(){return{args:e}},template:`<DXFlex v-bind="args">${l.repeat(3)}</DXFlex>`})};var d,m,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    justify: 'start',
    gap: 'md'
  },
  render: args => ({
    components: {
      DXFlex
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DXFlex v-bind="args">\${box.repeat(4)}</DXFlex>\`
  })
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,x,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    justify: 'between',
    gap: 'md'
  },
  render: args => ({
    components: {
      DXFlex
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DXFlex v-bind="args">\${box.repeat(3)}</DXFlex>\`
  })
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var w,v,D;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    direction: 'col',
    gap: 'sm'
  },
  render: args => ({
    components: {
      DXFlex
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DXFlex v-bind="args">\${box.repeat(3)}</DXFlex>\`
  })
}`,...(D=(v=a.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const B=["Default","JustifyBetween","Column"];export{a as Column,r as Default,s as JustifyBetween,B as __namedExportsOrder,h as default};
