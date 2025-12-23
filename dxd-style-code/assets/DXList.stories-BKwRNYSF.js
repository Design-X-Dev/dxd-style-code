import{c as _,e as C,g as k,l as v,p as x,o as B,m as E}from"./vue.esm-bundler-Nfu98kES.js";const n={__name:"DXList",props:{ordered:{type:Boolean,default:!1},marker:{type:String,default:""},size:{type:String,default:"md"},spacing:{type:String,default:"sm"}},setup(e){const s=e,a={sm:"text-sm",md:"text-base",lg:"text-lg"},i={none:"space-y-0",sm:"space-y-1",md:"space-y-2",lg:"space-y-3"},L={disc:"list-disc",circle:"list-circle",square:"list-square",decimal:"list-decimal",none:"list-none"},X=_(()=>[a[s.size]||a.md,i[s.spacing]||i.sm,s.marker?L[s.marker]:s.ordered?"list-decimal":"list-disc","pl-5 text-slate-700"]);return(y,S)=>(B(),C(x(e.ordered?"ol":"ul"),{class:v(X.value),"data-component":"DXList"},{default:k(()=>[E(y.$slots,"default")]),_:3},8,["class"]))}};n.__docgenInfo={exportName:"default",displayName:"DXList",description:"",tags:{},props:[{name:"ordered",description:"Нумерованный список",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"marker",description:"Стиль маркеров: disc | circle | square | decimal | none",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"size",description:"Размер: sm | md | lg",type:{name:"string"},defaultValue:{func:!1,value:'"md"'}},{name:"spacing",description:"Отступ между элементами: none | sm | md | lg",type:{name:"string"},defaultValue:{func:!1,value:'"sm"'}}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/typography/DXList/DXList.vue"]};const V={title:"Typography/DXList",component:n,tags:["autodocs"]},t={render:()=>({components:{DXList:n},template:`
      <DXList>
        <li>Первый элемент</li>
        <li>Второй элемент</li>
        <li>Третий элемент</li>
      </DXList>
    `})},u={args:{ordered:!0},render:e=>({components:{DXList:n},setup(){return{args:e}},template:`
      <DXList v-bind="args">
        <li>Шаг первый</li>
        <li>Шаг второй</li>
        <li>Шаг третий</li>
      </DXList>
    `})},r={args:{marker:"none"},render:e=>({components:{DXList:n},setup(){return{args:e}},template:`
      <DXList v-bind="args">
        <li>Элемент без маркера</li>
        <li>Ещё один элемент</li>
      </DXList>
    `})};var l,o,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXList
    },
    template: \`
      <DXList>
        <li>Первый элемент</li>
        <li>Второй элемент</li>
        <li>Третий элемент</li>
      </DXList>
    \`
  })
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var d,m,p;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ordered: true
  },
  render: args => ({
    components: {
      DXList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXList v-bind="args">
        <li>Шаг первый</li>
        <li>Шаг второй</li>
        <li>Шаг третий</li>
      </DXList>
    \`
  })
}`,...(p=(m=u.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var D,g,f;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    marker: 'none'
  },
  render: args => ({
    components: {
      DXList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXList v-bind="args">
        <li>Элемент без маркера</li>
        <li>Ещё один элемент</li>
      </DXList>
    \`
  })
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const z=["Unordered","Ordered","NoMarker"];export{r as NoMarker,u as Ordered,t as Unordered,z as __namedExportsOrder,V as default};
