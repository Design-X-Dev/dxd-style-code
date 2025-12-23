import{a as r,e as b,b as D,k as E,m as _,l as h,p as X,t as n,o}from"./vue.esm-bundler-Nfu98kES.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";const j={class:"bg-white border border-slate-100 rounded-3xl shadow-sm p-8 text-center space-y-3","data-component":"DXEmptyState"},w={class:"text-base font-semibold text-slate-900"},k={key:0,class:"text-sm text-slate-600"},g={__name:"DXEmptyState",props:{icon:{type:[Object,Function],required:!0},title:{type:String,required:!0},description:{type:String,default:""},animated:{type:Boolean,default:!1}},setup(t){return(S,C)=>(o(),r("div",j,[(o(),b(X(t.icon),{class:h(["w-10 h-10 text-slate-500 mx-auto",t.animated&&"animate-bounce-slow"])},null,8,["class"])),D("p",w,n(t.title),1),t.description?(o(),r("p",k,n(t.description),1)):E("",!0),_(S.$slots,"action",{},void 0,!0)]))}},x=N(g,[["__scopeId","data-v-c01f983d"]]);g.__docgenInfo={exportName:"default",displayName:"DXEmptyState",description:"",tags:{},props:[{name:"icon",description:"Иконка (компонент)",type:{name:"object|func"},required:!0},{name:"title",description:"Заголовок",type:{name:"string"},required:!0},{name:"description",description:"Описание",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"animated",description:"Анимация иконки",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"action"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXEmptyState/DXEmptyState.vue"]};const B={title:"Organisms/DXEmptyState",component:x,tags:["autodocs"]},e={args:{title:"No items found",description:"Get started by creating your first item."}},s={args:{title:"No results",description:"Try adjusting your search or filter to find what you're looking for."}},a={render:()=>({components:{DXEmptyState:x},template:`
      <DXEmptyState title="No projects yet" description="Create your first project to get started.">
        <template #action>
          <button class="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-semibold">
            Create Project
          </button>
        </template>
      </DXEmptyState>
    `})};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'No items found',
    description: 'Get started by creating your first item.'
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'No results',
    description: 'Try adjusting your search or filter to find what you\\'re looking for.'
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,y,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXEmptyState
    },
    template: \`
      <DXEmptyState title="No projects yet" description="Create your first project to get started.">
        <template #action>
          <button class="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-semibold">
            Create Project
          </button>
        </template>
      </DXEmptyState>
    \`
  })
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const q=["Default","NoResults","WithAction"];export{e as Default,s as NoResults,a as WithAction,q as __namedExportsOrder,B as default};
