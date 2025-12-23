import{c as q,a as c,m as d,k as h,q as i,b as X,l as b,o as p,t as y}from"./vue.esm-bundler-Nfu98kES.js";const E=["data-variant"],x={key:0,class:"mt-2 text-sm text-slate-500"},u={__name:"DXBlockquote",props:{variant:{type:String,default:"bordered"},size:{type:String,default:"md"},cite:{type:String,default:""}},setup(e){const r=e,s={sm:"text-sm",md:"text-base",lg:"text-lg"},n={default:"text-slate-600 italic",bordered:"border-l-4 border-slate-300 pl-4 text-slate-600 italic",highlighted:"bg-slate-50 border-l-4 border-slate-400 pl-4 pr-4 py-3 rounded-r-lg text-slate-700"},v=q(()=>[s[r.size]||s.md,n[r.variant]||n.bordered,"leading-relaxed"]);return(o,l)=>(p(),c("blockquote",{class:b(v.value),"data-component":"DXBlockquote","data-variant":e.variant},[d(o.$slots,"default"),e.cite||o.$slots.cite?(p(),c("footer",x,[l[0]||(l[0]=i(" — ",-1)),X("cite",null,[d(o.$slots,"cite",{},()=>[i(y(e.cite),1)])])])):h("",!0)],10,E))}};u.__docgenInfo={exportName:"default",displayName:"DXBlockquote",description:"",tags:{},props:[{name:"variant",description:"Вариант: default | bordered | highlighted",type:{name:"string"},defaultValue:{func:!1,value:'"bordered"'}},{name:"size",description:"Размер: sm | md | lg",type:{name:"string"},defaultValue:{func:!1,value:'"md"'}},{name:"cite",description:"Источник цитаты",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"},{name:"cite"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/typography/DXBlockquote/DXBlockquote.vue"]};const _={title:"Typography/DXBlockquote",component:u,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","bordered","highlighted"]}}},t={args:{cite:"Стив Джобс"},render:e=>({components:{DXBlockquote:u},setup(){return{args:e}},template:'<DXBlockquote v-bind="args">Дизайн — это не только то, как что-то выглядит и ощущается. Дизайн — это то, как что-то работает.</DXBlockquote>'})},a={render:()=>({components:{DXBlockquote:u},template:`
      <div class="space-y-6">
        <DXBlockquote variant="default">Default variant without border</DXBlockquote>
        <DXBlockquote variant="bordered">Bordered variant with left border</DXBlockquote>
        <DXBlockquote variant="highlighted">Highlighted variant with background</DXBlockquote>
      </div>
    `})};var m,g,D;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    cite: 'Стив Джобс'
  },
  render: args => ({
    components: {
      DXBlockquote
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXBlockquote v-bind="args">Дизайн — это не только то, как что-то выглядит и ощущается. Дизайн — это то, как что-то работает.</DXBlockquote>'
  })
}`,...(D=(g=t.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var k,B,f;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBlockquote
    },
    template: \`
      <div class="space-y-6">
        <DXBlockquote variant="default">Default variant without border</DXBlockquote>
        <DXBlockquote variant="bordered">Bordered variant with left border</DXBlockquote>
        <DXBlockquote variant="highlighted">Highlighted variant with background</DXBlockquote>
      </div>
    \`
  })
}`,...(f=(B=a.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};const S=["Default","Variants"];export{t as Default,a as Variants,S as __namedExportsOrder,_ as default};
