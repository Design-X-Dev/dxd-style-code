import{c as o,a as b,o as z,L as D,l as w}from"./vue.esm-bundler-Nfu98kES.js";const s={__name:"DXSpacer",props:{size:{type:[String,Number],default:"md"},direction:{type:String,default:"vertical"},grow:{type:Boolean,default:!1}},setup(f){const r=f,h={xs:{v:"h-1",h:"w-1"},sm:{v:"h-2",h:"w-2"},md:{v:"h-4",h:"w-4"},lg:{v:"h-8",h:"w-8"},xl:{v:"h-12",h:"w-12"},"2xl":{v:"h-16",h:"w-16"}},S=o(()=>{if(r.grow)return["flex-grow"];const e=h[r.size];return e?r.direction==="horizontal"?[e.h]:r.direction==="both"?[e.v,e.h]:[e.v]:[]}),x=o(()=>{if(r.grow)return{};if(typeof r.size=="number"){const e=`${r.size}px`;return r.direction==="horizontal"?{width:e}:r.direction==="both"?{height:e,width:e}:{height:e}}return{}});return(e,X)=>(z(),b("div",{class:w(S.value),style:D(x.value),"data-component":"DXSpacer","aria-hidden":"true"},null,6))}};s.__docgenInfo={exportName:"default",displayName:"DXSpacer",description:"",tags:{},props:[{name:"size",description:"Размер: xs | sm | md | lg | xl | 2xl или число в пикселях",type:{name:"string|number"},defaultValue:{func:!1,value:'"md"'}},{name:"direction",description:"Направление: vertical | horizontal | both",type:{name:"string"},defaultValue:{func:!1,value:'"vertical"'}},{name:"grow",description:"Занять всё доступное пространство (flex-grow)",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/layout/DXSpacer/DXSpacer.vue"]};const _={title:"Layout/DXSpacer",component:s,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl"]},direction:{control:{type:"select"},options:["vertical","horizontal","both"]}}},t={render:()=>({components:{DXSpacer:s},template:`
      <div>
        <div class="bg-slate-100 p-4 rounded">Above</div>
        <DXSpacer size="lg" />
        <div class="bg-slate-100 p-4 rounded">Below</div>
      </div>
    `})},a={render:()=>({components:{DXSpacer:s},template:`
      <div class="flex">
        <div class="bg-slate-100 p-4 rounded">Left</div>
        <DXSpacer size="lg" direction="horizontal" />
        <div class="bg-slate-100 p-4 rounded">Right</div>
      </div>
    `})},n={render:()=>({components:{DXSpacer:s},template:`
      <div class="flex">
        <div class="bg-slate-100 p-4 rounded">Start</div>
        <DXSpacer grow />
        <div class="bg-slate-100 p-4 rounded">End</div>
      </div>
    `})};var i,l,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSpacer
    },
    template: \`
      <div>
        <div class="bg-slate-100 p-4 rounded">Above</div>
        <DXSpacer size="lg" />
        <div class="bg-slate-100 p-4 rounded">Below</div>
      </div>
    \`
  })
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSpacer
    },
    template: \`
      <div class="flex">
        <div class="bg-slate-100 p-4 rounded">Left</div>
        <DXSpacer size="lg" direction="horizontal" />
        <div class="bg-slate-100 p-4 rounded">Right</div>
      </div>
    \`
  })
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,m,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSpacer
    },
    template: \`
      <div class="flex">
        <div class="bg-slate-100 p-4 rounded">Start</div>
        <DXSpacer grow />
        <div class="bg-slate-100 p-4 rounded">End</div>
      </div>
    \`
  })
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const E=["Vertical","Horizontal","FlexGrow"];export{n as FlexGrow,a as Horizontal,t as Vertical,E as __namedExportsOrder,_ as default};
