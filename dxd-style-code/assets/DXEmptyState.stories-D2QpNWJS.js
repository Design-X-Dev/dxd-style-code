import{a as _,e as s,f as h,k as N,m as X,l as j,p as w,g as n,o as r,x as i,u as c}from"./vue.esm-bundler-CzLKT_w4.js";import{_ as m}from"./DXText-DW7ThwBY.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";const k={class:"bg-white border border-slate-100 rounded-3xl shadow-sm p-8 text-center space-y-3","data-component":"DXEmptyState"},D={__name:"DXEmptyState",props:{icon:{type:[Object,Function],required:!0},title:{type:String,required:!0},description:{type:String,default:""},animated:{type:Boolean,default:!1}},setup(t){return(E,V)=>(r(),_("div",k,[(r(),s(w(t.icon),{class:j(["w-10 h-10 text-slate-500 mx-auto",t.animated&&"animate-bounce-slow"])},null,8,["class"])),h(m,{tag:"p",size:"md",weight:"semibold",color:"default"},{default:n(()=>[i(c(t.title),1)]),_:1}),t.description?(r(),s(m,{key:0,tag:"p",size:"sm",color:"muted"},{default:n(()=>[i(c(t.description),1)]),_:1})):N("",!0),X(E.$slots,"action",{},void 0,!0)]))}},b=C(D,[["__scopeId","data-v-54499b0f"]]);D.__docgenInfo={exportName:"default",displayName:"DXEmptyState",description:"",tags:{},props:[{name:"icon",description:"Иконка (компонент)",type:{name:"object|func"},required:!0},{name:"title",description:"Заголовок",type:{name:"string"},required:!0},{name:"description",description:"Описание",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"animated",description:"Анимация иконки",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"action"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXEmptyState/DXEmptyState.vue"]};const G={title:"Organisms/DXEmptyState",component:b,tags:["autodocs"]},e={args:{title:"No items found",description:"Get started by creating your first item."}},o={args:{title:"No results",description:"Try adjusting your search or filter to find what you're looking for."}},a={render:()=>({components:{DXEmptyState:b},template:`
      <DXEmptyState title="No projects yet" description="Create your first project to get started.">
        <template #action>
          <button class="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-semibold">
            Create Project
          </button>
        </template>
      </DXEmptyState>
    `})};var d,l,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'No items found',
    description: 'Get started by creating your first item.'
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,y,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'No results',
    description: 'Try adjusting your search or filter to find what you\\'re looking for.'
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,x,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(x=a.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const I=["Default","NoResults","WithAction"];export{e as Default,o as NoResults,a as WithAction,I as __namedExportsOrder,G as default};
