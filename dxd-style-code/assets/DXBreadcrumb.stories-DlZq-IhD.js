import{a,b as H,o as n,c as k,F as He,B as we,l as _,k as W,e as A,m as Xe,C as ze,g as ke,q as _e,t as We,p as Ve}from"./vue.esm-bundler-Nfu98kES.js";import{_ as V}from"./DXIcon-DQdlGsO1.js";import{r as $e}from"./ChevronRightIcon-Bln9TrNK.js";import{a as t,r as ye}from"./HomeIcon-V68wWz7H.js";import{r as Se}from"./TagIcon-IZLHjXKJ.js";import{r as i}from"./DocumentTextIcon-BU4oBP5S.js";import{r as S}from"./FolderIcon-yZ1Yyygo.js";import{r as Be}from"./ChartBarIcon-B8uGKbeP.js";import{r as P}from"./UserIcon-Bv9PVN8R.js";import{r as $}from"./PhotoIcon-FMgbz_J9.js";import{r as Oe}from"./ShoppingCartIcon-JRM8QiXu.js";import{r as Te}from"./InboxIcon-DJLBFwwB.js";import"./useSize-D8MrabOp.js";import"./useAnimation-CL8rPOHu.js";function Ee(o,e){return n(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[H("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"})])}function c(o,e){return n(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[H("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"})])}const Me={"aria-label":"Breadcrumb","data-component":"DXBreadcrumb"},je={key:0,class:"mx-2 text-slate-400","aria-hidden":"true"},Fe={key:1},Ne="inline-flex items-center transition-colors",B={__name:"DXBreadcrumb",props:{items:{type:Array,required:!0},separator:{type:String,default:"chevron"},size:{type:String,default:"md"},iconAnimation:{type:String,default:"none"},animateCurrentOnly:{type:Boolean,default:!1}},setup(o){const e=o,C={sm:"text-xs",md:"text-sm",lg:"text-base"},Ce=k(()=>C[e.size]||C.md),X=k(()=>e.size==="sm"?"xs":e.size==="lg"?"sm":"xs"),Ae=r=>r.to?"router-link":r.href?"a":"span",Pe=(r,z)=>r.iconAnimation?r.iconAnimation:e.animateCurrentOnly?z===e.items.length-1?e.iconAnimation:"none":e.iconAnimation;return(r,z)=>(n(),a("nav",Me,[H("ol",{class:_(["flex items-center flex-wrap",Ce.value])},[(n(!0),a(He,null,we(o.items,(s,l)=>(n(),a("li",{key:l,class:"flex items-center"},[l>0?(n(),a("span",je,[Xe(r.$slots,"separator",{},()=>[o.separator==="chevron"?(n(),A(V,{key:0,icon:ze($e),size:X.value,animation:"none"},null,8,["icon","size"])):(n(),a("span",Fe,"/"))])])):W("",!0),(n(),A(Ve(Ae(s)),{href:s.href,to:s.to,class:_([Ne,l===o.items.length-1?"text-slate-900 font-medium":"text-slate-500 hover:text-slate-700"]),"aria-current":l===o.items.length-1?"page":void 0},{default:ke(()=>[s.icon?(n(),A(V,{key:0,icon:s.icon,size:X.value,animation:Pe(s,l),class:"mr-1.5"},null,8,["icon","size","animation"])):W("",!0),_e(" "+We(s.label),1)]),_:2},1032,["href","to","class","aria-current"]))]))),128))],2)]))}};B.__docgenInfo={exportName:"default",displayName:"DXBreadcrumb",description:"",tags:{},props:[{name:"items",description:"Элементы: [{ label, href?, to?, icon?, iconAnimation? }]",type:{name:"array"},required:!0},{name:"separator",description:"Разделитель: slash | chevron",type:{name:"string"},defaultValue:{func:!1,value:'"chevron"'}},{name:"size",description:"Размер: sm | md | lg",type:{name:"string"},defaultValue:{func:!1,value:'"md"'}},{name:"iconAnimation",description:"Анимация иконок: none | wiggle | scale | rotate",type:{name:"string"},defaultValue:{func:!1,value:'"none"'}},{name:"animateCurrentOnly",description:"Анимировать только иконку текущей страницы",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"separator"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXBreadcrumb/DXBreadcrumb.vue"]};const rn={title:"Molecules/DXBreadcrumb",component:B,tags:["autodocs"],argTypes:{separator:{control:{type:"select"},options:["slash","chevron"]},size:{control:{type:"select"},options:["sm","md","lg"]},iconAnimation:{control:{type:"select"},options:["none","wiggle","scale","rotate"]}}},w=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Category",href:"/products/category"},{label:"Current Page"}],m={args:{items:w}},d={args:{items:w,separator:"slash"}},u={args:{items:[{label:"Home",href:"/"},{label:"Page"}]}},p={args:{items:[{label:"Home",href:"/",icon:t},{label:"Products",href:"/products",icon:c},{label:"Category",href:"/products/category",icon:Se},{label:"Product Details",icon:i}]}},h={args:{items:[{label:"Home",href:"/",icon:t},{label:"Folder",href:"/folder",icon:S},{label:"Document",icon:i}]}},b={args:{items:[{label:"Dashboard",href:"/dashboard",icon:Be},{label:"Settings",href:"/settings",icon:ye},{label:"Profile",href:"/settings/profile",icon:P},{label:"Edit Profile",icon:P}]}},f={args:{items:[{label:"Store",href:"/",icon:Ee},{label:"Products",href:"/products",icon:c},{label:"Electronics",href:"/products/electronics",icon:Se},{label:"Laptops",href:"/products/electronics/laptops",icon:S},{label:"MacBook Pro",icon:i}]}},g={args:{items:[{label:"Home",href:"/",icon:t},{label:"Documents",href:"/documents",icon:S},{label:"Projects",href:"/documents/projects",icon:S},{label:"Images",href:"/documents/projects/images",icon:$},{label:"photo.jpg",icon:$}]}},I={args:{items:[{label:"Home",href:"/",icon:t},{label:"Products",href:"/products",icon:c},{label:"Cart",icon:Oe}],iconAnimation:"wiggle"}},x={args:{items:[{label:"Home",href:"/",icon:t},{label:"Inbox",href:"/inbox",icon:Te},{label:"Message",icon:i}],iconAnimation:"scale",animateCurrentOnly:!0}},v={args:{items:[{label:"Home",href:"/",icon:t,iconAnimation:"wiggle"},{label:"Products",href:"/products",icon:c,iconAnimation:"scale"},{label:"Details",icon:i,iconAnimation:"rotate"}]}},D={render:()=>({components:{DXBreadcrumb:B},setup(){return{items:w,itemsWithIcons:[{label:"Home",href:"/",icon:t},{label:"Products",href:"/products",icon:c},{label:"Details",icon:i}]}},template:`
      <div class="space-y-6">
        <div>
          <p class="text-xs text-slate-500 mb-2">Small</p>
          <DXBreadcrumb :items="itemsWithIcons" size="sm" />
        </div>
        <div>
          <p class="text-xs text-slate-500 mb-2">Medium (default)</p>
          <DXBreadcrumb :items="itemsWithIcons" size="md" />
        </div>
        <div>
          <p class="text-xs text-slate-500 mb-2">Large</p>
          <DXBreadcrumb :items="itemsWithIcons" size="lg" />
        </div>
      </div>
    `})},y={render:()=>({components:{DXBreadcrumb:B},setup(){return{simple:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Current"}],withIcons:[{label:"Home",href:"/",icon:t},{label:"Products",href:"/products",icon:c},{label:"Current",icon:i}],animated:[{label:"Dashboard",href:"/",icon:Be},{label:"Settings",href:"/settings",icon:ye},{label:"Profile",icon:P}]}},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Simple</h3>
          <DXBreadcrumb :items="simple" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">With Icons</h3>
          <DXBreadcrumb :items="withIcons" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">With Icons & Animation</h3>
          <DXBreadcrumb :items="animated" icon-animation="scale" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Slash Separator</h3>
          <DXBreadcrumb :items="withIcons" separator="slash" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Animate Current Only</h3>
          <DXBreadcrumb :items="animated" icon-animation="wiggle" animate-current-only />
        </div>
      </div>
    `})};var O,T,E;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items
  }
}`,...(E=(T=m.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var M,j,F;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items,
    separator: 'slash'
  }
}`,...(F=(j=d.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var N,L,U;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Page'
    }]
  }
}`,...(U=(L=u.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var Z,q,G;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/',
      icon: HomeIcon
    }, {
      label: 'Products',
      href: '/products',
      icon: ShoppingBagIcon
    }, {
      label: 'Category',
      href: '/products/category',
      icon: TagIcon
    }, {
      label: 'Product Details',
      icon: DocumentTextIcon
    }]
  }
}`,...(G=(q=p.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/',
      icon: HomeIcon
    }, {
      label: 'Folder',
      href: '/folder',
      icon: FolderIcon
    }, {
      label: 'Document',
      icon: DocumentTextIcon
    }]
  }
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var R,Y,ee;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      href: '/dashboard',
      icon: ChartBarIcon
    }, {
      label: 'Settings',
      href: '/settings',
      icon: Cog6ToothIcon
    }, {
      label: 'Profile',
      href: '/settings/profile',
      icon: UserIcon
    }, {
      label: 'Edit Profile',
      icon: UserIcon
    }]
  }
}`,...(ee=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ne,oe,te;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Store',
      href: '/',
      icon: BuildingStorefrontIcon
    }, {
      label: 'Products',
      href: '/products',
      icon: ShoppingBagIcon
    }, {
      label: 'Electronics',
      href: '/products/electronics',
      icon: TagIcon
    }, {
      label: 'Laptops',
      href: '/products/electronics/laptops',
      icon: FolderIcon
    }, {
      label: 'MacBook Pro',
      icon: DocumentTextIcon
    }]
  }
}`,...(te=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var re,se,ae;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/',
      icon: HomeIcon
    }, {
      label: 'Documents',
      href: '/documents',
      icon: FolderIcon
    }, {
      label: 'Projects',
      href: '/documents/projects',
      icon: FolderIcon
    }, {
      label: 'Images',
      href: '/documents/projects/images',
      icon: PhotoIcon
    }, {
      label: 'photo.jpg',
      icon: PhotoIcon
    }]
  }
}`,...(ae=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ie,ce,le;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/',
      icon: HomeIcon
    }, {
      label: 'Products',
      href: '/products',
      icon: ShoppingBagIcon
    }, {
      label: 'Cart',
      icon: ShoppingCartIcon
    }],
    iconAnimation: 'wiggle'
  }
}`,...(le=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var me,de,ue;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/',
      icon: HomeIcon
    }, {
      label: 'Inbox',
      href: '/inbox',
      icon: InboxIcon
    }, {
      label: 'Message',
      icon: DocumentTextIcon
    }],
    iconAnimation: 'scale',
    animateCurrentOnly: true
  }
}`,...(ue=(de=x.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,he,be;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/',
      icon: HomeIcon,
      iconAnimation: 'wiggle'
    }, {
      label: 'Products',
      href: '/products',
      icon: ShoppingBagIcon,
      iconAnimation: 'scale'
    }, {
      label: 'Details',
      icon: DocumentTextIcon,
      iconAnimation: 'rotate'
    }]
  }
}`,...(be=(he=v.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var fe,ge,Ie;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBreadcrumb
    },
    setup() {
      const itemsWithIcons = [{
        label: 'Home',
        href: '/',
        icon: HomeIcon
      }, {
        label: 'Products',
        href: '/products',
        icon: ShoppingBagIcon
      }, {
        label: 'Details',
        icon: DocumentTextIcon
      }];
      return {
        items,
        itemsWithIcons
      };
    },
    template: \`
      <div class="space-y-6">
        <div>
          <p class="text-xs text-slate-500 mb-2">Small</p>
          <DXBreadcrumb :items="itemsWithIcons" size="sm" />
        </div>
        <div>
          <p class="text-xs text-slate-500 mb-2">Medium (default)</p>
          <DXBreadcrumb :items="itemsWithIcons" size="md" />
        </div>
        <div>
          <p class="text-xs text-slate-500 mb-2">Large</p>
          <DXBreadcrumb :items="itemsWithIcons" size="lg" />
        </div>
      </div>
    \`
  })
}`,...(Ie=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:Ie.source}}};var xe,ve,De;y.parameters={...y.parameters,docs:{...(xe=y.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBreadcrumb
    },
    setup() {
      const simple = [{
        label: 'Home',
        href: '/'
      }, {
        label: 'Products',
        href: '/products'
      }, {
        label: 'Current'
      }];
      const withIcons = [{
        label: 'Home',
        href: '/',
        icon: HomeIcon
      }, {
        label: 'Products',
        href: '/products',
        icon: ShoppingBagIcon
      }, {
        label: 'Current',
        icon: DocumentTextIcon
      }];
      const animated = [{
        label: 'Dashboard',
        href: '/',
        icon: ChartBarIcon
      }, {
        label: 'Settings',
        href: '/settings',
        icon: Cog6ToothIcon
      }, {
        label: 'Profile',
        icon: UserIcon
      }];
      return {
        simple,
        withIcons,
        animated
      };
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Simple</h3>
          <DXBreadcrumb :items="simple" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">With Icons</h3>
          <DXBreadcrumb :items="withIcons" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">With Icons & Animation</h3>
          <DXBreadcrumb :items="animated" icon-animation="scale" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Slash Separator</h3>
          <DXBreadcrumb :items="withIcons" separator="slash" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Animate Current Only</h3>
          <DXBreadcrumb :items="animated" icon-animation="wiggle" animate-current-only />
        </div>
      </div>
    \`
  })
}`,...(De=(ve=y.parameters)==null?void 0:ve.docs)==null?void 0:De.source}}};const sn=["Default","WithSlash","Short","WithIcons","IconsOnly","Navigation","ECommerce","FileSystem","WithAnimation","AnimateCurrentOnly","CustomIconAnimations","Sizes","AllVariants"];export{y as AllVariants,x as AnimateCurrentOnly,v as CustomIconAnimations,m as Default,f as ECommerce,g as FileSystem,h as IconsOnly,b as Navigation,u as Short,D as Sizes,I as WithAnimation,p as WithIcons,d as WithSlash,sn as __namedExportsOrder,rn as default};
