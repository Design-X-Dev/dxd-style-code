import{r as t}from"./vue.esm-bundler-CzLKT_w4.js";import{D as e}from"./DXTabs-CRILrHso.js";import{r as ft}from"./HomeIcon-CdtK5ct4.js";import{r as xt}from"./UserIcon-DiLxIH0K.js";import{r as C}from"./Cog6ToothIcon-By8I8Qry.js";import{r as w}from"./DocumentTextIcon-CeukRkb2.js";import{r as Xt}from"./PhotoIcon-CRlcUBNP.js";import{r as At}from"./VideoCameraIcon-DZ-zZ0iE.js";import{r as Ct}from"./ChartBarIcon-Bcs_CYxM.js";import{r as wt}from"./BellIcon-Ch96uq91.js";import{r as yt}from"./EnvelopeIcon-DnmNmHRs.js";import{r as St}from"./FolderIcon-C0ha1Q7k.js";import"./DXIcon-BbhqsR95.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const jt={title:"Organisms/DXTabs",component:e,tags:["autodocs","category:navigation"],argTypes:{variant:{control:"select",options:["buttons","tabs-top","tabs-bottom"]},align:{control:"select",options:["left","center","right"]},iconAnimation:{control:"select",options:["none","wiggle","scale","rotate"]}}},s=[{value:"overview",label:"Overview"},{value:"features",label:"Features"},{value:"pricing",label:"Pricing"},{value:"faq",label:"FAQ"}],Bt=[{value:"all",label:"All",count:42},{value:"active",label:"Active",count:28},{value:"archived",label:"Archived",count:14}],Wt=[{value:"home",label:"Home",icon:ft},{value:"profile",label:"Profile",icon:xt},{value:"settings",label:"Settings",icon:C}],x=[{value:"all",label:"All",icon:w,count:156},{value:"photos",label:"Photos",icon:Xt,count:89},{value:"videos",label:"Videos",icon:At,count:45}],X=[{value:"dashboard",label:"Dashboard",icon:Ct},{value:"notifications",label:"Notifications",icon:wt,count:12},{value:"messages",label:"Messages",icon:yt,count:5},{value:"documents",label:"Documents",icon:w,count:156},{value:"photos",label:"Photos",icon:Xt,count:89},{value:"videos",label:"Videos",icon:At,count:45},{value:"files",label:"Files",icon:St,count:234},{value:"settings",label:"Settings",icon:C}],o={render:()=>({components:{DXTabs:e},setup(){return{activeTab:t("overview"),tabs:s}},template:'<DXTabs v-model="activeTab" :tabs="tabs" />'})},r={render:()=>({components:{DXTabs:e},setup(){return{activeTab:t("overview"),tabs:s}},template:'<DXTabs v-model="activeTab" :tabs="tabs" variant="tabs-top" />'})},c={render:()=>({components:{DXTabs:e},setup(){return{activeTab:t("overview"),tabs:s}},template:'<DXTabs v-model="activeTab" :tabs="tabs" variant="tabs-bottom" />'})},b={render:()=>({components:{DXTabs:e},setup(){const a=t("overview"),n=t("overview"),A=t("overview");return{tab1:a,tab2:n,tab3:A,tabs:s}},template:`
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
    `})},i={render:()=>({components:{DXTabs:e},setup(){const a=t("overview"),n=t("overview"),A=t("overview");return{tab1:a,tab2:n,tab3:A,tabs:s}},template:`
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
    `})},l={render:()=>({components:{DXTabs:e},setup(){return{activeTab:t("all"),tabs:Bt}},template:'<DXTabs v-model="activeTab" :tabs="tabs" />'})},m={render:()=>({components:{DXTabs:e},setup(){return{activeTab:t("home"),tabs:Wt}},template:'<DXTabs v-model="activeTab" :tabs="tabs" />'})},u={render:()=>({components:{DXTabs:e},setup(){return{activeTab:t("all"),tabs:x}},template:'<DXTabs v-model="activeTab" :tabs="tabs" icon-animation="scale" />'})},v={render:()=>({components:{DXTabs:e},setup(){return{activeTab:t("dashboard"),tabs:X}},template:`
      <div class="max-w-2xl">
        <DXTabs 
          v-model="activeTab" 
          :tabs="tabs" 
          variant="tabs-top"
          :scrollable="true"
        />
      </div>
    `})},p={render:()=>({components:{DXTabs:e},setup(){return{activeTab:t("all"),tabs:x}},template:`
      <div>
        <p class="text-sm text-slate-600 mb-4">Наведите на таб или выберите его, чтобы увидеть полный текст</p>
        <DXTabs 
          v-model="activeTab" 
          :tabs="tabs" 
          :compact="true"
          compactDisplay="icon"
        />
      </div>
    `})},d={render:()=>({components:{DXTabs:e},setup(){return{activeTab:t("all"),tabs:x}},template:`
      <div>
        <p class="text-sm text-slate-600 mb-4">Наведите на таб или выберите его, чтобы увидеть полный текст</p>
        <DXTabs 
          v-model="activeTab" 
          :tabs="tabs" 
          :compact="true"
          compactDisplay="icon-badge"
        />
      </div>
    `})},T={render:()=>({components:{DXTabs:e},setup(){return{activeTab:t("dashboard"),tabs:X}},template:`
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
    `})},g={render:()=>({components:{DXTabs:e},setup(){return{activeTab:t("dashboard"),tabs:X}},template:`
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
    `})},h={render:()=>({components:{DXTabs:e},setup(){return{activeTab:t("home"),tabs:[{value:"home",label:"Wiggle",icon:ft,iconAnimation:"wiggle"},{value:"profile",label:"Scale",icon:xt,iconAnimation:"scale"},{value:"settings",label:"Rotate",icon:C,iconAnimation:"rotate"},{value:"none",label:"None",icon:w,iconAnimation:"none"}]}},template:'<DXTabs v-model="activeTab" :tabs="tabs" :animateActiveOnly="false" />'})},D={render:()=>({components:{DXTabs:e},setup(){return{activeTab:t("dashboard"),tabs:X}},template:`
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
    `})},f={args:{variant:"buttons",align:"left",scrollable:!0,showScrollButtons:!1,compact:!1,compactDisplay:"icon-badge",iconAnimation:"wiggle",animateActiveOnly:!0},render:a=>({components:{DXTabs:e},setup(){return{activeTab:t("all"),tabs:x,args:a}},template:'<DXTabs v-model="activeTab" :tabs="tabs" v-bind="args" />'})};var y,S,B;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(B=(S=o.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var W,I,E;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(E=(I=r.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var F,O,$;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...($=(O=c.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var V,P,R;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(P=b.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var M,N,_;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(_=(N=i.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var H,L,q;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(q=(L=l.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var Q,U,j;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(j=(U=m.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var k,z,G;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(G=(z=u.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,Y;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var Z,tt,at;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(at=(tt=p.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var et,nt,st;d.parameters={...d.parameters,docs:{...(et=d.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(st=(nt=d.parameters)==null?void 0:nt.docs)==null?void 0:st.source}}};var ot,rt,ct;T.parameters={...T.parameters,docs:{...(ot=T.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(ct=(rt=T.parameters)==null?void 0:rt.docs)==null?void 0:ct.source}}};var bt,it,lt;g.parameters={...g.parameters,docs:{...(bt=g.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(lt=(it=g.parameters)==null?void 0:it.docs)==null?void 0:lt.source}}};var mt,ut,vt;h.parameters={...h.parameters,docs:{...(mt=h.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(vt=(ut=h.parameters)==null?void 0:ut.docs)==null?void 0:vt.source}}};var pt,dt,Tt;D.parameters={...D.parameters,docs:{...(pt=D.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(Tt=(dt=D.parameters)==null?void 0:dt.docs)==null?void 0:Tt.source}}};var gt,ht,Dt;f.parameters={...f.parameters,docs:{...(gt=f.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(Dt=(ht=f.parameters)==null?void 0:ht.docs)==null?void 0:Dt.source}}};const kt=["Default","TabsTopVariant","TabsBottomVariant","AllVariants","WithAlignment","WithCounts","WithIcons","WithIconsAndCounts","WithScrolling","CompactModeIconOnly","CompactModeIconBadge","CompactTabsTop","CompactWithScrolling","CustomIconAnimations","AllFeatures","Playground"];export{D as AllFeatures,b as AllVariants,d as CompactModeIconBadge,p as CompactModeIconOnly,T as CompactTabsTop,g as CompactWithScrolling,h as CustomIconAnimations,o as Default,f as Playground,c as TabsBottomVariant,r as TabsTopVariant,i as WithAlignment,l as WithCounts,m as WithIcons,u as WithIconsAndCounts,v as WithScrolling,kt as __namedExportsOrder,jt as default};
