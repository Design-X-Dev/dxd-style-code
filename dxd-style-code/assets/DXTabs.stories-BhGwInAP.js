import{r as n,c as Gt,w as Ut,a as m,F as Qt,B as Jt,l as _,G as Kt,o as c,b as $,e as Yt,k as N,D as Zt,N as te,t as M}from"./vue.esm-bundler-Nfu98kES.js";import{_ as ee}from"./DXIcon-DQdlGsO1.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as kt,r as E}from"./HomeIcon-V68wWz7H.js";import{r as Ft}from"./UserIcon-Bv9PVN8R.js";import{r as k}from"./DocumentTextIcon-BU4oBP5S.js";import{r as Ot}from"./PhotoIcon-FMgbz_J9.js";import{r as $t}from"./VideoCameraIcon-C58SUxYk.js";import{r as ne}from"./ChartBarIcon-B8uGKbeP.js";import{r as se}from"./BellIcon-jfu7dOpO.js";import{r as oe}from"./EnvelopeIcon-DXz60-I1.js";import{r as re}from"./FolderIcon-yZ1Yyygo.js";import"./useSize-D8MrabOp.js";import"./useAnimation-CL8rPOHu.js";const ie=["data-variant","data-align"],ce=["onClick","onMouseenter","aria-selected"],le={class:"flex items-center gap-2"},Nt={__name:"DXTabs",props:{modelValue:{type:[String,Number]},tabs:{type:Array,default:()=>[]},variant:{type:String,default:"buttons",validator:e=>["buttons","tabs-top","tabs-bottom"].includes(e)},align:{type:String,default:"left",validator:e=>["left","center","right"].includes(e)},scrollable:{type:Boolean,default:!0},compact:{type:Boolean,default:!1},compactDisplay:{type:String,default:"icon-badge",validator:e=>["icon","icon-badge"].includes(e)},iconAnimation:{type:String,default:"wiggle"},animateActiveOnly:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(e,{emit:i}){const t=e,Mt=i,W=n(null),b=n(null),Pt=Gt(()=>["dx-tabs","flex","items-center",t.variant==="buttons"&&"flex-wrap gap-2",t.variant==="tabs-top"&&"border-b border-slate-200",t.variant==="tabs-bottom"&&"border-t border-slate-200",t.align==="left"&&"justify-start",t.align==="center"&&"justify-center",t.align==="right"&&"justify-end",t.scrollable&&"overflow-x-auto",t.scrollable&&"scroll-smooth"]),Ht=a=>{const r=t.modelValue===a.value,o=b.value===a.value,u=t.compact&&!r&&!o;return["tab-btn","text-sm","font-semibold","transition-all","duration-200","flex-shrink-0",t.variant==="buttons"&&"px-3 py-2.5 rounded-xl border",t.variant==="tabs-top"&&["px-4 py-2.5 rounded-t-xl border-x border-t",r?"-mb-px":"border-b-0"],t.variant==="tabs-bottom"&&["px-4 py-2.5 rounded-b-xl border-x border-b",r?"-mt-px":"border-t-0"],t.variant==="buttons"&&r&&"bg-slate-800 text-white border-slate-800",t.variant==="buttons"&&!r&&"border-slate-200 text-slate-700 hover:border-slate-300",(t.variant==="tabs-top"||t.variant==="tabs-bottom")&&r&&["bg-white text-slate-900 border-slate-200",t.variant==="tabs-top"&&"border-b-white",t.variant==="tabs-bottom"&&"border-t-white"],(t.variant==="tabs-top"||t.variant==="tabs-bottom")&&!r&&["bg-slate-50 text-slate-600 border-slate-200","hover:bg-slate-100 hover:text-slate-900"],u&&"px-2"]},Rt=a=>{const r=t.modelValue===a.value;return t.variant==="buttons"?r?"bg-white/20 text-white":"bg-slate-100 text-slate-700":r?"bg-slate-200 text-slate-900":"bg-slate-200 text-slate-600"},F=a=>t.modelValue===a.value,O=a=>b.value===a.value,jt=a=>!(!t.compact||F(a)||O(a)),Lt=a=>t.compact?t.compactDisplay==="icon"?!1:(t.compactDisplay==="icon-badge",!0):!0,qt=a=>a.iconAnimation?a.iconAnimation:O(a)?t.iconAnimation:t.animateActiveOnly?F(a)?t.iconAnimation:"none":t.iconAnimation,zt=a=>{Mt("update:modelValue",a)};return Ut(()=>t.modelValue,async()=>{if(t.scrollable&&W.value){await Kt();const a=W.value.querySelector('.tab-btn[aria-selected="true"]');a&&a.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}},{immediate:!0}),(a,r)=>(c(),m("div",{ref_key:"tabsContainer",ref:W,class:_(Pt.value),"data-component":"DXTabs","data-variant":e.variant,"data-align":e.align},[(c(!0),m(Qt,null,Jt(e.tabs,o=>(c(),m("button",{key:o.value,class:_([Ht(o),"group"]),onClick:u=>zt(o.value),onMouseenter:u=>b.value=o.value,onMouseleave:r[0]||(r[0]=u=>b.value=null),type:"button","aria-selected":e.modelValue===o.value,role:"tab"},[$("span",le,[o.icon?(c(),Yt(ee,{key:0,icon:o.icon,size:"sm",animation:qt(o),groupHover:!0,class:"flex-shrink-0"},null,8,["icon","animation"])):N("",!0),Zt($("span",{class:"tab-label whitespace-nowrap"},M(o.label),513),[[te,!jt(o)]]),o.count!==void 0&&Lt()?(c(),m("span",{key:1,class:_(["tab-badge inline-flex items-center justify-center min-w-[24px] px-2 py-1 text-[11px] rounded-full flex-shrink-0",Rt(o)])},M(o.count),3)):N("",!0)])],42,ce))),128))],10,ie))}},s=ae(Nt,[["__scopeId","data-v-89f7ffb3"]]);Nt.__docgenInfo={exportName:"default",displayName:"DXTabs",description:"",tags:{},props:[{name:"modelValue",description:"Текущее значение (v-model)",type:{name:"string|number"}},{name:"tabs",description:"Табы: [{ value, label, icon?, count?, iconAnimation? }]",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"variant",description:"Вариант отображения",type:{name:"string"},defaultValue:{func:!1,value:"'buttons'"},values:["buttons","tabs-top","tabs-bottom"]},{name:"align",description:"Выравнивание табов",type:{name:"string"},defaultValue:{func:!1,value:"'left'"},values:["left","center","right"]},{name:"scrollable",description:"Включить прокрутку при overflow",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"compact",description:"Компактный режим",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"compactDisplay",description:"Что показывать в компактном режиме",type:{name:"string"},defaultValue:{func:!1,value:"'icon-badge'"},values:["icon","icon-badge"]},{name:"iconAnimation",description:"Анимация иконок: none | wiggle | scale | rotate",type:{name:"string"},defaultValue:{func:!1,value:"'wiggle'"}},{name:"animateActiveOnly",description:"Анимировать только активную иконку",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXTabs/DXTabs.vue"]};const Ce={title:"Organisms/DXTabs",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["buttons","tabs-top","tabs-bottom"]},align:{control:"select",options:["left","center","right"]},iconAnimation:{control:"select",options:["none","wiggle","scale","rotate"]}}},l=[{value:"overview",label:"Overview"},{value:"features",label:"Features"},{value:"pricing",label:"Pricing"},{value:"faq",label:"FAQ"}],be=[{value:"all",label:"All",count:42},{value:"active",label:"Active",count:28},{value:"archived",label:"Archived",count:14}],ue=[{value:"home",label:"Home",icon:kt},{value:"profile",label:"Profile",icon:Ft},{value:"settings",label:"Settings",icon:E}],V=[{value:"all",label:"All",icon:k,count:156},{value:"photos",label:"Photos",icon:Ot,count:89},{value:"videos",label:"Videos",icon:$t,count:45}],I=[{value:"dashboard",label:"Dashboard",icon:ne},{value:"notifications",label:"Notifications",icon:se,count:12},{value:"messages",label:"Messages",icon:oe,count:5},{value:"documents",label:"Documents",icon:k,count:156},{value:"photos",label:"Photos",icon:Ot,count:89},{value:"videos",label:"Videos",icon:$t,count:45},{value:"files",label:"Files",icon:re,count:234},{value:"settings",label:"Settings",icon:E}],d={render:()=>({components:{DXTabs:s},setup(){return{activeTab:n("overview"),tabs:l}},template:'<DXTabs v-model="activeTab" :tabs="tabs" />'})},v={render:()=>({components:{DXTabs:s},setup(){return{activeTab:n("overview"),tabs:l}},template:'<DXTabs v-model="activeTab" :tabs="tabs" variant="tabs-top" />'})},p={render:()=>({components:{DXTabs:s},setup(){return{activeTab:n("overview"),tabs:l}},template:'<DXTabs v-model="activeTab" :tabs="tabs" variant="tabs-bottom" />'})},T={render:()=>({components:{DXTabs:s},setup(){const e=n("overview"),i=n("overview"),t=n("overview");return{tab1:e,tab2:i,tab3:t,tabs:l}},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Buttons (default)</h3>
          <DXTabs v-model="tab1" :tabs="tabs" variant="buttons" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Tabs Top</h3>
          <DXTabs v-model="tab2" :tabs="tabs" variant="tabs-top" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Tabs Bottom</h3>
          <DXTabs v-model="tab3" :tabs="tabs" variant="tabs-bottom" />
        </div>
      </div>
    `})},f={render:()=>({components:{DXTabs:s},setup(){const e=n("overview"),i=n("overview"),t=n("overview");return{tab1:e,tab2:i,tab3:t,tabs:l}},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Left (default)</h3>
          <DXTabs v-model="tab1" :tabs="tabs" variant="tabs-top" align="left" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Center</h3>
          <DXTabs v-model="tab2" :tabs="tabs" variant="tabs-top" align="center" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Right</h3>
          <DXTabs v-model="tab3" :tabs="tabs" variant="tabs-top" align="right" />
        </div>
      </div>
    `})},g={render:()=>({components:{DXTabs:s},setup(){return{activeTab:n("all"),tabs:be}},template:'<DXTabs v-model="activeTab" :tabs="tabs" />'})},h={render:()=>({components:{DXTabs:s},setup(){return{activeTab:n("home"),tabs:ue}},template:'<DXTabs v-model="activeTab" :tabs="tabs" />'})},x={render:()=>({components:{DXTabs:s},setup(){return{activeTab:n("all"),tabs:V}},template:'<DXTabs v-model="activeTab" :tabs="tabs" icon-animation="scale" />'})},D={render:()=>({components:{DXTabs:s},setup(){return{activeTab:n("dashboard"),tabs:I}},template:`
      <div class="max-w-2xl">
        <DXTabs 
          v-model="activeTab" 
          :tabs="tabs" 
          variant="tabs-top"
          :scrollable="true"
        />
      </div>
    `})},y={render:()=>({components:{DXTabs:s},setup(){return{activeTab:n("all"),tabs:V}},template:`
      <div>
        <p class="text-sm text-slate-600 mb-4">Наведите на таб или выберите его, чтобы увидеть полный текст</p>
        <DXTabs 
          v-model="activeTab" 
          :tabs="tabs" 
          :compact="true"
          compactDisplay="icon"
        />
      </div>
    `})},X={render:()=>({components:{DXTabs:s},setup(){return{activeTab:n("all"),tabs:V}},template:`
      <div>
        <p class="text-sm text-slate-600 mb-4">Наведите на таб или выберите его, чтобы увидеть полный текст</p>
        <DXTabs 
          v-model="activeTab" 
          :tabs="tabs" 
          :compact="true"
          compactDisplay="icon-badge"
        />
      </div>
    `})},A={render:()=>({components:{DXTabs:s},setup(){return{activeTab:n("dashboard"),tabs:I}},template:`
      <div>
        <p class="text-sm text-slate-600 mb-4">Компактный режим с классическими табами</p>
        <DXTabs 
          v-model="activeTab" 
          :tabs="tabs" 
          variant="tabs-top"
          :compact="true"
          compactDisplay="icon-badge"
        />
      </div>
    `})},w={render:()=>({components:{DXTabs:s},setup(){return{activeTab:n("dashboard"),tabs:I}},template:`
      <div class="max-w-xl">
        <p class="text-sm text-slate-600 mb-4">Компактный режим с прокруткой</p>
        <DXTabs 
          v-model="activeTab" 
          :tabs="tabs" 
          variant="tabs-top"
          :compact="true"
          compactDisplay="icon-badge"
          :scrollable="true"
        />
      </div>
    `})},C={render:()=>({components:{DXTabs:s},setup(){return{activeTab:n("home"),tabs:[{value:"home",label:"Wiggle",icon:kt,iconAnimation:"wiggle"},{value:"profile",label:"Scale",icon:Ft,iconAnimation:"scale"},{value:"settings",label:"Rotate",icon:E,iconAnimation:"rotate"},{value:"none",label:"None",icon:k,iconAnimation:"none"}]}},template:'<DXTabs v-model="activeTab" :tabs="tabs" :animateActiveOnly="false" />'})},S={render:()=>({components:{DXTabs:s},setup(){return{activeTab:n("dashboard"),tabs:I}},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Buttons + Compact + Center</h3>
          <DXTabs 
            v-model="activeTab" 
            :tabs="tabs" 
            variant="buttons"
            align="center"
            :compact="true"
            compactDisplay="icon-badge"
          />
        </div>
        
        <div class="max-w-2xl">
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Tabs Top + Scroll + Compact</h3>
          <DXTabs 
            v-model="activeTab" 
            :tabs="tabs" 
            variant="tabs-top"
            :compact="true"
            compactDisplay="icon-badge"
            :scrollable="true"
          />
        </div>
        
        <div class="max-w-2xl">
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Tabs Bottom + Scroll + Right Align</h3>
          <DXTabs 
            v-model="activeTab" 
            :tabs="tabs" 
            variant="tabs-bottom"
            align="right"
            :scrollable="true"
          />
        </div>
      </div>
    `})},B={args:{variant:"buttons",align:"left",scrollable:!0,showScrollButtons:!1,compact:!1,compactDisplay:"icon-badge",iconAnimation:"wiggle",animateActiveOnly:!0},render:e=>({components:{DXTabs:s},setup(){return{activeTab:n("all"),tabs:V,args:e}},template:'<DXTabs v-model="activeTab" :tabs="tabs" v-bind="args" />'})};var P,H,R;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTabs
    },
    setup() {
      const activeTab = ref('overview');
      return {
        activeTab,
        tabs: simpleTabs
      };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" />'
  })
}`,...(R=(H=d.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var j,L,q;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTabs
    },
    setup() {
      const activeTab = ref('overview');
      return {
        activeTab,
        tabs: simpleTabs
      };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" variant="tabs-top" />'
  })
}`,...(q=(L=v.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var z,G,U;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTabs
    },
    setup() {
      const activeTab = ref('overview');
      return {
        activeTab,
        tabs: simpleTabs
      };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" variant="tabs-bottom" />'
  })
}`,...(U=(G=p.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var Q,J,K;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTabs
    },
    setup() {
      const tab1 = ref('overview');
      const tab2 = ref('overview');
      const tab3 = ref('overview');
      return {
        tab1,
        tab2,
        tab3,
        tabs: simpleTabs
      };
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Buttons (default)</h3>
          <DXTabs v-model="tab1" :tabs="tabs" variant="buttons" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Tabs Top</h3>
          <DXTabs v-model="tab2" :tabs="tabs" variant="tabs-top" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Tabs Bottom</h3>
          <DXTabs v-model="tab3" :tabs="tabs" variant="tabs-bottom" />
        </div>
      </div>
    \`
  })
}`,...(K=(J=T.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Y,Z,tt;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTabs
    },
    setup() {
      const tab1 = ref('overview');
      const tab2 = ref('overview');
      const tab3 = ref('overview');
      return {
        tab1,
        tab2,
        tab3,
        tabs: simpleTabs
      };
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Left (default)</h3>
          <DXTabs v-model="tab1" :tabs="tabs" variant="tabs-top" align="left" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Center</h3>
          <DXTabs v-model="tab2" :tabs="tabs" variant="tabs-top" align="center" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Right</h3>
          <DXTabs v-model="tab3" :tabs="tabs" variant="tabs-top" align="right" />
        </div>
      </div>
    \`
  })
}`,...(tt=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:tt.source}}};var et,at,nt;g.parameters={...g.parameters,docs:{...(et=g.parameters)==null?void 0:et.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTabs
    },
    setup() {
      const activeTab = ref('all');
      return {
        activeTab,
        tabs: tabsWithCounts
      };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" />'
  })
}`,...(nt=(at=g.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var st,ot,rt;h.parameters={...h.parameters,docs:{...(st=h.parameters)==null?void 0:st.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTabs
    },
    setup() {
      const activeTab = ref('home');
      return {
        activeTab,
        tabs: tabsWithIcons
      };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" />'
  })
}`,...(rt=(ot=h.parameters)==null?void 0:ot.docs)==null?void 0:rt.source}}};var it,ct,lt;x.parameters={...x.parameters,docs:{...(it=x.parameters)==null?void 0:it.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTabs
    },
    setup() {
      const activeTab = ref('all');
      return {
        activeTab,
        tabs: tabsWithIconsAndCounts
      };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" icon-animation="scale" />'
  })
}`,...(lt=(ct=x.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var bt,ut,mt;D.parameters={...D.parameters,docs:{...(bt=D.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTabs
    },
    setup() {
      const activeTab = ref('dashboard');
      return {
        activeTab,
        tabs: manyTabs
      };
    },
    template: \`
      <div class="max-w-2xl">
        <DXTabs 
          v-model="activeTab" 
          :tabs="tabs" 
          variant="tabs-top"
          :scrollable="true"
        />
      </div>
    \`
  })
}`,...(mt=(ut=D.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var dt,vt,pt;y.parameters={...y.parameters,docs:{...(dt=y.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTabs
    },
    setup() {
      const activeTab = ref('all');
      return {
        activeTab,
        tabs: tabsWithIconsAndCounts
      };
    },
    template: \`
      <div>
        <p class="text-sm text-slate-600 mb-4">Наведите на таб или выберите его, чтобы увидеть полный текст</p>
        <DXTabs 
          v-model="activeTab" 
          :tabs="tabs" 
          :compact="true"
          compactDisplay="icon"
        />
      </div>
    \`
  })
}`,...(pt=(vt=y.parameters)==null?void 0:vt.docs)==null?void 0:pt.source}}};var Tt,ft,gt;X.parameters={...X.parameters,docs:{...(Tt=X.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTabs
    },
    setup() {
      const activeTab = ref('all');
      return {
        activeTab,
        tabs: tabsWithIconsAndCounts
      };
    },
    template: \`
      <div>
        <p class="text-sm text-slate-600 mb-4">Наведите на таб или выберите его, чтобы увидеть полный текст</p>
        <DXTabs 
          v-model="activeTab" 
          :tabs="tabs" 
          :compact="true"
          compactDisplay="icon-badge"
        />
      </div>
    \`
  })
}`,...(gt=(ft=X.parameters)==null?void 0:ft.docs)==null?void 0:gt.source}}};var ht,xt,Dt;A.parameters={...A.parameters,docs:{...(ht=A.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTabs
    },
    setup() {
      const activeTab = ref('dashboard');
      return {
        activeTab,
        tabs: manyTabs
      };
    },
    template: \`
      <div>
        <p class="text-sm text-slate-600 mb-4">Компактный режим с классическими табами</p>
        <DXTabs 
          v-model="activeTab" 
          :tabs="tabs" 
          variant="tabs-top"
          :compact="true"
          compactDisplay="icon-badge"
        />
      </div>
    \`
  })
}`,...(Dt=(xt=A.parameters)==null?void 0:xt.docs)==null?void 0:Dt.source}}};var yt,Xt,At;w.parameters={...w.parameters,docs:{...(yt=w.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTabs
    },
    setup() {
      const activeTab = ref('dashboard');
      return {
        activeTab,
        tabs: manyTabs
      };
    },
    template: \`
      <div class="max-w-xl">
        <p class="text-sm text-slate-600 mb-4">Компактный режим с прокруткой</p>
        <DXTabs 
          v-model="activeTab" 
          :tabs="tabs" 
          variant="tabs-top"
          :compact="true"
          compactDisplay="icon-badge"
          :scrollable="true"
        />
      </div>
    \`
  })
}`,...(At=(Xt=w.parameters)==null?void 0:Xt.docs)==null?void 0:At.source}}};var wt,Ct,St;C.parameters={...C.parameters,docs:{...(wt=C.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTabs
    },
    setup() {
      const activeTab = ref('home');
      const tabs = [{
        value: 'home',
        label: 'Wiggle',
        icon: HomeIcon,
        iconAnimation: 'wiggle'
      }, {
        value: 'profile',
        label: 'Scale',
        icon: UserIcon,
        iconAnimation: 'scale'
      }, {
        value: 'settings',
        label: 'Rotate',
        icon: Cog6ToothIcon,
        iconAnimation: 'rotate'
      }, {
        value: 'none',
        label: 'None',
        icon: DocumentTextIcon,
        iconAnimation: 'none'
      }];
      return {
        activeTab,
        tabs
      };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" :animateActiveOnly="false" />'
  })
}`,...(St=(Ct=C.parameters)==null?void 0:Ct.docs)==null?void 0:St.source}}};var Bt,Vt,It;S.parameters={...S.parameters,docs:{...(Bt=S.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTabs
    },
    setup() {
      const activeTab = ref('dashboard');
      return {
        activeTab,
        tabs: manyTabs
      };
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Buttons + Compact + Center</h3>
          <DXTabs 
            v-model="activeTab" 
            :tabs="tabs" 
            variant="buttons"
            align="center"
            :compact="true"
            compactDisplay="icon-badge"
          />
        </div>
        
        <div class="max-w-2xl">
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Tabs Top + Scroll + Compact</h3>
          <DXTabs 
            v-model="activeTab" 
            :tabs="tabs" 
            variant="tabs-top"
            :compact="true"
            compactDisplay="icon-badge"
            :scrollable="true"
          />
        </div>
        
        <div class="max-w-2xl">
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Tabs Bottom + Scroll + Right Align</h3>
          <DXTabs 
            v-model="activeTab" 
            :tabs="tabs" 
            variant="tabs-bottom"
            align="right"
            :scrollable="true"
          />
        </div>
      </div>
    \`
  })
}`,...(It=(Vt=S.parameters)==null?void 0:Vt.docs)==null?void 0:It.source}}};var Wt,_t,Et;B.parameters={...B.parameters,docs:{...(Wt=B.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  args: {
    variant: 'buttons',
    align: 'left',
    scrollable: true,
    showScrollButtons: false,
    compact: false,
    compactDisplay: 'icon-badge',
    iconAnimation: 'wiggle',
    animateActiveOnly: true
  },
  render: args => ({
    components: {
      DXTabs
    },
    setup() {
      const activeTab = ref('all');
      return {
        activeTab,
        tabs: tabsWithIconsAndCounts,
        args
      };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" v-bind="args" />'
  })
}`,...(Et=(_t=B.parameters)==null?void 0:_t.docs)==null?void 0:Et.source}}};const Se=["Default","TabsTopVariant","TabsBottomVariant","AllVariants","WithAlignment","WithCounts","WithIcons","WithIconsAndCounts","WithScrolling","CompactModeIconOnly","CompactModeIconBadge","CompactTabsTop","CompactWithScrolling","CustomIconAnimations","AllFeatures","Playground"];export{S as AllFeatures,T as AllVariants,X as CompactModeIconBadge,y as CompactModeIconOnly,A as CompactTabsTop,w as CompactWithScrolling,C as CustomIconAnimations,d as Default,B as Playground,p as TabsBottomVariant,v as TabsTopVariant,f as WithAlignment,g as WithCounts,h as WithIcons,x as WithIconsAndCounts,D as WithScrolling,Se as __namedExportsOrder,Ce as default};
