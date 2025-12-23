import{c as d,a as b,o as x,m as _,L as $,l as L}from"./vue.esm-bundler-Nfu98kES.js";const s={__name:"DXGrid",props:{cols:{type:[Number,String],default:12},colsSm:{type:[Number,String],default:""},colsMd:{type:[Number,String],default:""},colsLg:{type:[Number,String],default:""},gap:{type:String,default:"md"},gapX:{type:String,default:""},gapY:{type:String,default:""}},setup(r){const e=r,l={none:"gap-0",xs:"gap-1",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8"},D={1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6",7:"grid-cols-7",8:"grid-cols-8",9:"grid-cols-9",10:"grid-cols-10",11:"grid-cols-11",12:"grid-cols-12",auto:"grid-cols-[repeat(auto-fit,minmax(250px,1fr))]"},G=d(()=>["grid",D[e.cols]||`grid-cols-${e.cols}`,e.colsSm&&`sm:grid-cols-${e.colsSm}`,e.colsMd&&`md:grid-cols-${e.colsMd}`,e.colsLg&&`lg:grid-cols-${e.colsLg}`,!e.gapX&&!e.gapY&&(l[e.gap]||l.md),e.gapX&&`gap-x-${e.gapX}`,e.gapY&&`gap-y-${e.gapY}`]),v=d(()=>e.cols==="auto"?{}:{});return(S,V)=>(x(),b("div",{class:L(G.value),style:$(v.value),"data-component":"DXGrid"},[_(S.$slots,"default")],6))}};s.__docgenInfo={exportName:"default",displayName:"DXGrid",description:"",tags:{},props:[{name:"cols",description:"Количество колонок: 1-12 или auto",type:{name:"number|string"},defaultValue:{func:!1,value:"12"}},{name:"colsSm",description:"Количество колонок на sm",type:{name:"number|string"},defaultValue:{func:!1,value:'""'}},{name:"colsMd",description:"Количество колонок на md",type:{name:"number|string"},defaultValue:{func:!1,value:'""'}},{name:"colsLg",description:"Количество колонок на lg",type:{name:"number|string"},defaultValue:{func:!1,value:'""'}},{name:"gap",description:"Отступ между элементами: none | xs | sm | md | lg | xl",type:{name:"string"},defaultValue:{func:!1,value:'"md"'}},{name:"gapX",description:"Горизонтальный отступ",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"gapY",description:"Вертикальный отступ",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/layout/DXGrid/DXGrid.vue"]};const j={title:"Layout/DXGrid",component:s,tags:["autodocs"],argTypes:{cols:{control:{type:"select"},options:[1,2,3,4,6,12,"auto"]},gap:{control:{type:"select"},options:["none","xs","sm","md","lg","xl"]}}},o='<div class="bg-slate-100 rounded-lg p-4 text-center">Item</div>',n={args:{cols:3,gap:"md"},render:r=>({components:{DXGrid:s},setup(){return{args:r}},template:`
      <DXGrid v-bind="args">
        ${Array(6).fill(o).join("")}
      </DXGrid>
    `})},a={args:{cols:1,colsSm:2,colsMd:3,colsLg:4},render:r=>({components:{DXGrid:s},setup(){return{args:r}},template:`
      <DXGrid v-bind="args">
        ${Array(8).fill(o).join("")}
      </DXGrid>
    `})},t={args:{cols:"auto",gap:"md"},render:r=>({components:{DXGrid:s},setup(){return{args:r}},template:`
      <DXGrid v-bind="args">
        ${Array(5).fill(o).join("")}
      </DXGrid>
    `})};var c,i,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    cols: 3,
    gap: 'md'
  },
  render: args => ({
    components: {
      DXGrid
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXGrid v-bind="args">
        \${Array(6).fill(gridItem).join('')}
      </DXGrid>
    \`
  })
}`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var g,u,m;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    cols: 1,
    colsSm: 2,
    colsMd: 3,
    colsLg: 4
  },
  render: args => ({
    components: {
      DXGrid
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXGrid v-bind="args">
        \${Array(8).fill(gridItem).join('')}
      </DXGrid>
    \`
  })
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,y,X;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    cols: 'auto',
    gap: 'md'
  },
  render: args => ({
    components: {
      DXGrid
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXGrid v-bind="args">
        \${Array(5).fill(gridItem).join('')}
      </DXGrid>
    \`
  })
}`,...(X=(y=t.parameters)==null?void 0:y.docs)==null?void 0:X.source}}};const I=["Default","Responsive","AutoFit"];export{t as AutoFit,n as Default,a as Responsive,I as __namedExportsOrder,j as default};
