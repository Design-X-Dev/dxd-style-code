import{a as h,o as f,y as g,l as w}from"./vue.esm-bundler-CzLKT_w4.js";const e={__name:"DXSkeleton",props:{width:{type:String,default:"100%"},height:{type:String,default:"1rem"},rounded:{type:String,default:"rounded-md"}},setup(o){return(v,y)=>(f(),h("div",{class:w(["animate-pulse bg-slate-200",o.rounded]),style:g({width:o.width,height:o.height}),"data-component":"DXSkeleton"},null,6))}};e.__docgenInfo={exportName:"default",displayName:"DXSkeleton",description:"",tags:{},props:[{name:"width",description:"Ширина",type:{name:"string"},defaultValue:{func:!1,value:'"100%"'}},{name:"height",description:"Высота",type:{name:"string"},defaultValue:{func:!1,value:'"1rem"'}},{name:"rounded",description:"Скругление",type:{name:"string"},defaultValue:{func:!1,value:'"rounded-md"'}}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/atoms/DXSkeleton/DXSkeleton.vue"]};const x={title:"Atoms/DXSkeleton",component:e,tags:["autodocs","category:feedback"]},n={render:()=>({components:{DXSkeleton:e},template:'<DXSkeleton class="h-4 w-48" />'})},t={render:()=>({components:{DXSkeleton:e},template:'<DXSkeleton class="h-12 w-12 rounded-full" />'})},s={render:()=>({components:{DXSkeleton:e},template:`
      <div class="space-y-3 p-4 border rounded-xl">
        <DXSkeleton class="h-4 w-3/4" />
        <DXSkeleton class="h-4 w-full" />
        <DXSkeleton class="h-4 w-1/2" />
      </div>
    `})},a={render:()=>({components:{DXSkeleton:e},template:`
      <div class="flex items-center gap-3">
        <DXSkeleton class="h-10 w-10 rounded-full" />
        <div class="space-y-2">
          <DXSkeleton class="h-4 w-24" />
          <DXSkeleton class="h-3 w-32" />
        </div>
      </div>
    `})};var l,r,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSkeleton
    },
    template: '<DXSkeleton class="h-4 w-48" />'
  })
}`,...(c=(r=n.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSkeleton
    },
    template: '<DXSkeleton class="h-12 w-12 rounded-full" />'
  })
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var i,u,S;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSkeleton
    },
    template: \`
      <div class="space-y-3 p-4 border rounded-xl">
        <DXSkeleton class="h-4 w-3/4" />
        <DXSkeleton class="h-4 w-full" />
        <DXSkeleton class="h-4 w-1/2" />
      </div>
    \`
  })
}`,...(S=(u=s.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var D,k,X;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSkeleton
    },
    template: \`
      <div class="flex items-center gap-3">
        <DXSkeleton class="h-10 w-10 rounded-full" />
        <div class="space-y-2">
          <DXSkeleton class="h-4 w-24" />
          <DXSkeleton class="h-3 w-32" />
        </div>
      </div>
    \`
  })
}`,...(X=(k=a.parameters)==null?void 0:k.docs)==null?void 0:X.source}}};const E=["Default","Circle","Card","Avatar"];export{a as Avatar,s as Card,t as Circle,n as Default,E as __namedExportsOrder,x as default};
