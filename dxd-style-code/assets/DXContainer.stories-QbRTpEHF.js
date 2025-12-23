import{c as g,a as C,o as D,m as X,l as v}from"./vue.esm-bundler-Nfu98kES.js";import{u as f}from"./useSpacing-BOHUzi8w.js";const y=["data-size","data-padding","data-center"],s={__name:"DXContainer",props:{size:{type:String,default:"lg"},center:{type:Boolean,default:!0},padding:{type:String,default:"md"}},setup(e){const t=e,r={sm:"max-w-screen-sm",md:"max-w-screen-md",lg:"max-w-screen-lg",xl:"max-w-screen-xl","2xl":"max-w-screen-2xl",full:"max-w-full"},m=g(()=>["w-full",r[t.size]||r.lg,f(t.padding,"paddingX"),t.center&&"mx-auto"]);return(u,x)=>(D(),C("div",{class:v(m.value),"data-component":"DXContainer","data-size":e.size,"data-padding":e.padding,"data-center":e.center},[X(u.$slots,"default")],10,y))}};s.__docgenInfo={exportName:"default",displayName:"DXContainer",description:"",tags:{},props:[{name:"size",description:"Максимальная ширина: sm | md | lg | xl | 2xl | full",type:{name:"string"},defaultValue:{func:!1,value:'"lg"'}},{name:"center",description:"Центрировать контейнер",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"padding",description:"Горизонтальные отступы: none | xs | sm | md | lg | xl",type:{name:"string"},defaultValue:{func:!1,value:'"md"'}}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/layout/DXContainer/DXContainer.vue"]};const w={title:"Layout/DXContainer",component:s,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xl","2xl","full"]},padding:{control:{type:"select"},options:["none","sm","md","lg"]}}},n={args:{size:"lg"},render:e=>({components:{DXContainer:s},setup(){return{args:e}},template:'<DXContainer v-bind="args" class="bg-slate-100 py-8"><div class="bg-white p-4 rounded">Content inside container</div></DXContainer>'})},a={render:()=>({components:{DXContainer:s},template:`
      <div class="space-y-4">
        <DXContainer size="sm" class="bg-blue-100 py-4"><div class="bg-white p-2 rounded">Small</div></DXContainer>
        <DXContainer size="md" class="bg-green-100 py-4"><div class="bg-white p-2 rounded">Medium</div></DXContainer>
        <DXContainer size="lg" class="bg-yellow-100 py-4"><div class="bg-white p-2 rounded">Large</div></DXContainer>
        <DXContainer size="xl" class="bg-red-100 py-4"><div class="bg-white p-2 rounded">Extra Large</div></DXContainer>
      </div>
    `})};var i,o,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  },
  render: args => ({
    components: {
      DXContainer
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXContainer v-bind="args" class="bg-slate-100 py-8"><div class="bg-white p-4 rounded">Content inside container</div></DXContainer>'
  })
}`,...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var l,c,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXContainer
    },
    template: \`
      <div class="space-y-4">
        <DXContainer size="sm" class="bg-blue-100 py-4"><div class="bg-white p-2 rounded">Small</div></DXContainer>
        <DXContainer size="md" class="bg-green-100 py-4"><div class="bg-white p-2 rounded">Medium</div></DXContainer>
        <DXContainer size="lg" class="bg-yellow-100 py-4"><div class="bg-white p-2 rounded">Large</div></DXContainer>
        <DXContainer size="xl" class="bg-red-100 py-4"><div class="bg-white p-2 rounded">Extra Large</div></DXContainer>
      </div>
    \`
  })
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const h=["Default","Sizes"];export{n as Default,a as Sizes,h as __namedExportsOrder,w as default};
