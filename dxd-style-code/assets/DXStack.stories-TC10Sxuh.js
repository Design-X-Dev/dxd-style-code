import{c as X,a as x,o as h,m as j,l as b}from"./vue.esm-bundler-Nfu98kES.js";const z=["data-direction","data-gap","data-align","data-justify"],a={__name:"DXStack",props:{direction:{type:String,default:"vertical"},gap:{type:String,default:"md"},align:{type:String,default:"stretch"},justify:{type:String,default:"start"},dividers:{type:Boolean,default:!1}},setup(e){const t=e,c={none:"gap-0",xs:"gap-1",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8","2xl":"gap-12"},o={start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch"},d={start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between",around:"justify-around"},D=X(()=>["flex",t.direction==="horizontal"?"flex-row":"flex-col",c[t.gap]||c.md,o[t.align]||o.stretch,d[t.justify]||d.start,t.dividers&&(t.direction==="horizontal"?"divide-x divide-slate-200":"divide-y divide-slate-200")]);return(k,V)=>(h(),x("div",{class:b(D.value),"data-component":"DXStack","data-direction":e.direction,"data-gap":e.gap,"data-align":e.align,"data-justify":e.justify},[j(k.$slots,"default")],10,z))}};a.__docgenInfo={exportName:"default",displayName:"DXStack",description:"",tags:{},props:[{name:"direction",description:"Направление: vertical | horizontal",type:{name:"string"},defaultValue:{func:!1,value:'"vertical"'}},{name:"gap",description:"Отступ между элементами: none | xs | sm | md | lg | xl | 2xl",type:{name:"string"},defaultValue:{func:!1,value:'"md"'}},{name:"align",description:"Выравнивание: start | center | end | stretch",type:{name:"string"},defaultValue:{func:!1,value:'"stretch"'}},{name:"justify",description:"Распределение: start | center | end | between | around",type:{name:"string"},defaultValue:{func:!1,value:'"start"'}},{name:"dividers",description:"Разделители между элементами",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/layout/DXStack/DXStack.vue"]};const $={title:"Layout/DXStack",component:a,tags:["autodocs"],argTypes:{direction:{control:{type:"select"},options:["vertical","horizontal"]},gap:{control:{type:"select"},options:["none","xs","sm","md","lg","xl","2xl"]},align:{control:{type:"select"},options:["start","center","end","stretch"]}}},i='<div class="bg-slate-100 p-4 rounded-lg">Stack Item</div>',n={args:{direction:"vertical",gap:"md"},render:e=>({components:{DXStack:a},setup(){return{args:e}},template:`<DXStack v-bind="args">${i.repeat(4)}</DXStack>`})},r={args:{direction:"horizontal",gap:"md"},render:e=>({components:{DXStack:a},setup(){return{args:e}},template:`<DXStack v-bind="args">${i.repeat(4)}</DXStack>`})},s={args:{direction:"vertical",gap:"md",dividers:!0},render:e=>({components:{DXStack:a},setup(){return{args:e}},template:`<DXStack v-bind="args">${i.repeat(3)}</DXStack>`})};var l,p,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    gap: 'md'
  },
  render: args => ({
    components: {
      DXStack
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DXStack v-bind="args">\${item.repeat(4)}</DXStack>\`
  })
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    gap: 'md'
  },
  render: args => ({
    components: {
      DXStack
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DXStack v-bind="args">\${item.repeat(4)}</DXStack>\`
  })
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,S,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    gap: 'md',
    dividers: true
  },
  render: args => ({
    components: {
      DXStack
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DXStack v-bind="args">\${item.repeat(3)}</DXStack>\`
  })
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const E=["Vertical","Horizontal","WithDividers"];export{r as Horizontal,n as Vertical,s as WithDividers,E as __namedExportsOrder,$ as default};
