import{u as Pe,c as v,e as C,g as F,C as t,l as p,o as a,b as O,a as o,k as r,F as f,m as N,t as T,O as q,f as x,B as S,r as d}from"./vue.esm-bundler-Nfu98kES.js";import{u as He,D as R,r as xe}from"./DXSidebarMenuItem-CY99HS12.js";import{_ as Ae}from"./DXCard-3LRlU0Yj.js";import{_ as G}from"./DXInput-DUVmhVHV.js";import{_ as w}from"./DXIcon-DQdlGsO1.js";import{_ as Fe}from"./DXDivider-DIbZiQd2.js";import{_ as Ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as Q}from"./MagnifyingGlassIcon-DjnTFUrM.js";import{r as Z}from"./ChevronRightIcon-Bln9TrNK.js";import{r as J}from"./ChevronLeftIcon-CgJmgnPf.js";import{a as ye,r as De}from"./HomeIcon-V68wWz7H.js";import{r as Te}from"./ChartBarIcon-B8uGKbeP.js";import{r as _}from"./DocumentTextIcon-BU4oBP5S.js";import{r as Se}from"./FolderIcon-yZ1Yyygo.js";import"./useAnimation-CL8rPOHu.js";import"./DXBadge-BzIj_AZP.js";import"./useSize-D8MrabOp.js";import"./useVariant-DBYBwuJ6.js";import"./InformationCircleIcon-DsJgS0pw.js";import"./CheckCircleIcon-BeodL6Lf.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXDropdown-CoL0Joua.js";import"./ChevronDownIcon-DnL0EvPK.js";import"./DXDropdownItem-BNem-Fpn.js";import"./useSpacing-BOHUzi8w.js";import"./DXFormLabel-Drk-51Wk.js";import"./ExclamationCircleIcon-DOJNx4bv.js";import"./DXIconWrapper-DKYfCJ0D.js";const _e=["title"],Ue=["title"],We={key:1,class:"px-4 pb-4"},je={key:0,class:"px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider"},we={__name:"DXMenu",props:{title:{type:String,default:""},sections:{type:Array,required:!0},activeItem:{type:String,default:""},compact:{type:Boolean,default:!1},collapsible:{type:Boolean,default:!1},searchable:{type:Boolean,default:!1},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},showHeader:{type:Boolean,default:void 0},headerSize:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},cardPadding:{type:String,default:"none",validator:e=>["none","sm","md","lg"].includes(e)},cardVariant:{type:String,default:"default",validator:e=>["default","bordered","elevated","flat"].includes(e)}},emits:["item-click","update:compact"],setup(e,{emit:s}){const l=Pe(),n=e,Ve=s,{searchQuery:b,compact:i,filteredSections:U,isItemActive:W,toggleCompact:y,handleItemClick:D}=He(n,Ve),j={sm:{container:"px-3 py-2",title:"text-base"},md:{container:"px-4 py-5",title:"text-lg"},lg:{container:"px-6 py-8",title:"text-xl"}},ze=v(()=>n.showHeader!==void 0?n.showHeader:!!(l.header||n.title||n.collapsible)),Me=v(()=>n.direction==="horizontal"?"flex flex-col w-full":"flex flex-col h-full"),$e=v(()=>["transition-all duration-300",i.value&&n.direction==="vertical"?"w-auto":""]),Xe=v(()=>{const g="flex items-center gap-2 border-b border-slate-200 flex-shrink-0";return n.direction==="horizontal"?[g,"px-4 py-3"]:[g,i.value?"justify-center px-2 py-3":j[n.headerSize].container]}),L=v(()=>["font-bold text-slate-900",n.direction==="horizontal"?"text-base":j[n.headerSize].title]),Ee=v(()=>n.direction==="horizontal"?"flex flex-row items-center gap-1 px-4 py-2 overflow-visible":["flex-1 overflow-y-auto py-4 space-y-6",i.value?"px-1":"px-3"]),Be=v(()=>["px-4 py-4 border-t border-slate-200 flex-shrink-0",i.value&&"px-2"]);return(g,m)=>(a(),C(Ae,{padding:e.cardPadding,variant:e.cardVariant,class:p($e.value),"data-component":"DXMenu","data-compact":t(i),"data-direction":e.direction},{default:F(()=>[O("div",{class:p(Me.value)},[ze.value?(a(),o("div",{key:0,class:p(Xe.value)},[e.direction==="horizontal"?(a(),o(f,{key:0},[t(i)?r("",!0):N(g.$slots,"header",{key:0},()=>[e.title?(a(),o("h2",{key:0,class:p(L.value)},T(e.title),3)):r("",!0)],!0),e.searchable&&!t(i)?(a(),C(G,{key:1,modelValue:t(b),"onUpdate:modelValue":m[0]||(m[0]=c=>q(b)?b.value=c:null),placeholder:"Поиск...",size:"sm",class:"max-w-xs"},{prefix:F(()=>[x(w,{icon:t(Q),size:"sm",class:"text-slate-400"},null,8,["icon"])]),_:1},8,["modelValue"])):r("",!0),e.collapsible?(a(),o("button",{key:2,type:"button",class:"p-2 rounded-lg hover:bg-slate-100 transition-colors ml-auto",onClick:m[1]||(m[1]=(...c)=>t(y)&&t(y)(...c)),title:t(i)?"Развернуть":"Свернуть"},[x(w,{icon:t(i)?t(Z):t(J),size:"md",animation:"scale",class:"text-slate-600"},null,8,["icon"])],8,_e)):r("",!0)],64)):(a(),o(f,{key:1},[t(i)?r("",!0):N(g.$slots,"header",{key:0},()=>[e.title?(a(),o("h2",{key:0,class:p(L.value)},T(e.title),3)):r("",!0)],!0),e.collapsible?(a(),o("button",{key:1,type:"button",class:p(["p-2 rounded-lg hover:bg-slate-100 transition-colors",{"ml-auto":!t(i)}]),onClick:m[2]||(m[2]=(...c)=>t(y)&&t(y)(...c)),title:t(i)?"Развернуть":"Свернуть"},[x(w,{icon:t(i)?t(Z):t(J),size:"md",animation:"scale",class:"text-slate-600"},null,8,["icon"])],10,Ue)):r("",!0)],64))],2)):r("",!0),e.searchable&&!t(i)&&e.direction==="vertical"?(a(),o("div",We,[x(G,{modelValue:t(b),"onUpdate:modelValue":m[3]||(m[3]=c=>q(b)?b.value=c:null),placeholder:"Поиск...",size:"sm"},{prefix:F(()=>[x(w,{icon:t(Q),size:"sm",class:"text-slate-400"},null,8,["icon"])]),_:1},8,["modelValue"])])):r("",!0),O("nav",{class:p(Ee.value)},[e.direction==="horizontal"?(a(!0),o(f,{key:0},S(t(U),(c,H)=>(a(),o(f,{key:H},[(a(!0),o(f,null,S(c.items,(k,A)=>(a(),C(R,{key:A,item:k,active:t(W)(k),compact:!1,horizontal:!0,onClick:t(D),onChildClick:t(D)},null,8,["item","active","onClick","onChildClick"]))),128))],64))),128)):(a(!0),o(f,{key:1},S(t(U),(c,H)=>(a(),o("div",{key:H,class:"space-y-1"},[c.title&&!t(i)?(a(),o("div",je,T(c.title),1)):r("",!0),c.title&&t(i)?(a(),C(Fe,{key:1,spacing:"sm"})):r("",!0),(a(!0),o(f,null,S(c.items,(k,A)=>(a(),C(R,{key:A,item:k,active:t(W)(k),compact:t(i),onClick:t(D),onChildClick:t(D)},null,8,["item","active","compact","onClick","onChildClick"]))),128))]))),128))],2),t(l).footer&&!t(i)&&e.direction==="vertical"?(a(),o("div",{key:2,class:p(Be.value)},[N(g.$slots,"footer",{},void 0,!0)],2)):r("",!0)],2)]),_:3},8,["padding","variant","class","data-compact","data-direction"]))}},u=Ne(we,[["__scopeId","data-v-d8311538"]]);we.__docgenInfo={exportName:"default",displayName:"DXMenu",description:"",tags:{},props:[{name:"title",description:"Заголовок меню",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"sections",description:"Секции меню: [{ title?, items: [{ label, icon?, to?, href?, badge?, children? }] }]",type:{name:"array"},required:!0},{name:"activeItem",description:"Текущий активный элемент (path или id)",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"compact",description:"Компактный режим (только иконки)",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"collapsible",description:"Можно ли сворачивать",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"searchable",description:"Показывать поиск",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"direction",description:"Направление: vertical, horizontal",type:{name:"string"},defaultValue:{func:!1,value:"'vertical'"},values:["vertical","horizontal"]},{name:"showHeader",description:"Показывать header (если undefined - автоматически)",type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"headerSize",description:"Размер header: sm, md, lg",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg"]},{name:"cardPadding",description:"Padding карточки: none, sm, md, lg",type:{name:"string"},defaultValue:{func:!1,value:"'none'"},values:["none","sm","md","lg"]},{name:"cardVariant",description:"Вариант карточки: default, bordered, elevated, flat",type:{name:"string"},defaultValue:{func:!1,value:"'default'"},values:["default","bordered","elevated","flat"]}],events:[{name:"item-click"},{name:"update:compact"}],slots:[{name:"header"},{name:"footer"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXMenu/DXMenu.vue"]};const gt={title:"Molecules/DXMenu",component:u,tags:["autodocs"],argTypes:{direction:{control:{type:"select"},options:["vertical","horizontal"],description:"Направление меню: vertical, horizontal"},showHeader:{control:{type:"boolean"},description:"Показывать header (undefined = автоматически)"},headerSize:{control:{type:"select"},options:["sm","md","lg"]},cardVariant:{control:{type:"select"},options:["default","bordered","elevated","flat"]},cardPadding:{control:{type:"select"},options:["none","sm","md","lg"]}}},I=[{items:[{id:"home",label:"Главная",icon:ye,to:"/home"},{id:"analytics",label:"Аналитика",icon:Te,to:"/analytics"},{id:"users",label:"Пользователи",icon:xe,to:"/users",badge:"12",badgeVariant:"info"}]},{title:"Контент",items:[{id:"documents",label:"Документы",icon:_,children:[{id:"all-docs",label:"Все документы",to:"/documents/all"},{id:"my-docs",label:"Мои документы",to:"/documents/my"},{id:"shared",label:"Общие",to:"/documents/shared",badge:"3",badgeVariant:"warning"}]},{id:"folders",label:"Папки",icon:Se,to:"/folders"},{id:"settings",label:"Настройки",icon:De,to:"/settings"}]}],h=`
  <div class="flex-1 bg-slate-50 rounded-xl border-2 border-dashed border-slate-300 p-8 flex items-center justify-center">
    <div class="text-center">
      <div class="text-4xl mb-2">📄</div>
      <h3 class="text-lg font-semibold text-slate-700">Content Area</h3>
      <p class="text-sm text-slate-500">Main content goes here</p>
    </div>
  </div>
`,V={args:{title:"Навигация",sections:I,direction:"vertical",compact:!1,collapsible:!0,searchable:!0,showHeader:void 0,headerSize:"md",cardPadding:"none",cardVariant:"default"},render:e=>({components:{DXMenu:u},setup(){const s=d("/home");return{args:e,activeItem:s,handleItemClick:n=>{console.log("Clicked:",n),s.value=n.to||n.id}}},template:`
      <div :class="args.direction === 'horizontal' ? 'flex flex-col gap-4' : 'flex gap-4'" class="h-[600px] bg-white p-4">
        <DXMenu 
          v-bind="args"
          :activeItem="activeItem"
          :class="args.direction === 'horizontal' ? 'w-full' : 'w-80'"
          @item-click="handleItemClick"
          @update:compact="args.compact = $event"
        />
        ${h}
      </div>
    `})},z={render:()=>({components:{DXMenu:u},setup(){const e=d("/home");return{menuSections:I,activeItem:e,handleItemClick:l=>{e.value=l.to||l.id}}},template:`
      <div class="flex gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          title="Меню"
          :sections="menuSections"
          :activeItem="activeItem"
          class="w-80"
          @item-click="handleItemClick"
        />
        ${h}
      </div>
    `})},M={render:()=>({components:{DXMenu:u},setup(){const e=d("/home");return{menuSections:I,activeItem:e,handleItemClick:l=>{e.value=l.to||l.id}}},template:`
      <div class="flex gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          :sections="menuSections"
          :activeItem="activeItem"
          :compact="true"
          @item-click="handleItemClick"
        />
        ${h}
      </div>
    `})},$={render:()=>({components:{DXMenu:u},setup(){const e=d("/home"),s=d(!1);return{menuSections:I,activeItem:e,compact:s,handleItemClick:n=>{e.value=n.to||n.id}}},template:`
      <div class="flex gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          title="Панель"
          :sections="menuSections"
          :activeItem="activeItem"
          :compact="compact"
          collapsible
          searchable
          @update:compact="compact = $event"
          @item-click="handleItemClick"
        />
        ${h}
      </div>
    `})},X={render:()=>({components:{DXMenu:u},setup(){const e=d("/documents/my");return{sections:[{title:"Файлы",items:[{id:"documents",label:"Документы",icon:_,children:[{id:"all-docs",label:"Все документы",to:"/documents/all"},{id:"my-docs",label:"Мои документы",to:"/documents/my"},{id:"shared",label:"Общие",to:"/documents/shared",badge:"5",badgeVariant:"info"},{id:"archived",label:"Архив",to:"/documents/archived"}]},{id:"folders",label:"Папки",icon:Se,children:[{id:"work",label:"Рабочие",to:"/folders/work"},{id:"personal",label:"Личные",to:"/folders/personal"}]}]}],activeItem:e,handleItemClick:n=>{e.value=n.to||n.id}}},template:`
      <div class="flex gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          title="Submenu Demo"
          :sections="sections"
          :activeItem="activeItem"
          class="w-80"
          @item-click="handleItemClick"
        />
        ${h}
      </div>
    `})},E={render:()=>({components:{DXMenu:u},setup(){const e=d("/home");return{menuSections:I,activeItem:e,handleItemClick:l=>{e.value=l.to||l.id}}},template:`
      <div class="flex flex-col gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          title="Навигация"
          :sections="menuSections"
          :activeItem="activeItem"
          direction="horizontal"
          class="w-full"
          @item-click="handleItemClick"
        />
        ${h}
      </div>
    `})},B={render:()=>({components:{DXMenu:u},setup(){const e=d("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:ye,to:"/home"},{id:"documents",label:"Документы",icon:_,children:[{id:"all-docs",label:"Все документы",to:"/documents/all"},{id:"my-docs",label:"Мои документы",to:"/documents/my"},{id:"shared",label:"Общие",to:"/documents/shared",badge:"3",badgeVariant:"info"}]},{id:"users",label:"Пользователи",icon:xe,to:"/users"},{id:"settings",label:"Настройки",icon:De,to:"/settings"}]}],activeItem:e,handleItemClick:n=>{e.value=n.to||n.id}}},template:`
      <div class="flex flex-col gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          title="Dropdown Demo"
          :sections="sections"
          :activeItem="activeItem"
          direction="horizontal"
          class="w-full"
          @item-click="handleItemClick"
        />
        ${h}
      </div>
    `})},P={render:()=>({components:{DXMenu:u},setup(){const e=d("/home");return{menuSections:I,activeItem:e,handleItemClick:l=>{e.value=l.to||l.id}}},template:`
      <div class="flex flex-col gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          :sections="menuSections"
          :activeItem="activeItem"
          direction="horizontal"
          :showHeader="false"
          cardVariant="flat"
          class="w-full"
          @item-click="handleItemClick"
        />
        ${h}
      </div>
    `})};var K,Y,ee;V.parameters={...V.parameters,docs:{...(K=V.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: 'Навигация',
    sections: menuSections,
    direction: 'vertical',
    compact: false,
    collapsible: true,
    searchable: true,
    showHeader: undefined,
    headerSize: 'md',
    cardPadding: 'none',
    cardVariant: 'default'
  },
  render: args => ({
    components: {
      DXMenu
    },
    setup() {
      const activeItem = ref('/home');
      const handleItemClick = item => {
        console.log('Clicked:', item);
        activeItem.value = item.to || item.id;
      };
      return {
        args,
        activeItem,
        handleItemClick
      };
    },
    template: \`
      <div :class="args.direction === 'horizontal' ? 'flex flex-col gap-4' : 'flex gap-4'" class="h-[600px] bg-white p-4">
        <DXMenu 
          v-bind="args"
          :activeItem="activeItem"
          :class="args.direction === 'horizontal' ? 'w-full' : 'w-80'"
          @item-click="handleItemClick"
          @update:compact="args.compact = $event"
        />
        \${ContentPlaceholder}
      </div>
    \`
  })
}`,...(ee=(Y=V.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var te,ne,ae;z.parameters={...z.parameters,docs:{...(te=z.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXMenu
    },
    setup() {
      const activeItem = ref('/home');
      const handleItemClick = item => {
        activeItem.value = item.to || item.id;
      };
      return {
        menuSections,
        activeItem,
        handleItemClick
      };
    },
    template: \`
      <div class="flex gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          title="Меню"
          :sections="menuSections"
          :activeItem="activeItem"
          class="w-80"
          @item-click="handleItemClick"
        />
        \${ContentPlaceholder}
      </div>
    \`
  })
}`,...(ae=(ne=z.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var le,ie,oe;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXMenu
    },
    setup() {
      const activeItem = ref('/home');
      const handleItemClick = item => {
        activeItem.value = item.to || item.id;
      };
      return {
        menuSections,
        activeItem,
        handleItemClick
      };
    },
    template: \`
      <div class="flex gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          :sections="menuSections"
          :activeItem="activeItem"
          :compact="true"
          @item-click="handleItemClick"
        />
        \${ContentPlaceholder}
      </div>
    \`
  })
}`,...(oe=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ce,se,re;$.parameters={...$.parameters,docs:{...(ce=$.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXMenu
    },
    setup() {
      const activeItem = ref('/home');
      const compact = ref(false);
      const handleItemClick = item => {
        activeItem.value = item.to || item.id;
      };
      return {
        menuSections,
        activeItem,
        compact,
        handleItemClick
      };
    },
    template: \`
      <div class="flex gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          title="Панель"
          :sections="menuSections"
          :activeItem="activeItem"
          :compact="compact"
          collapsible
          searchable
          @update:compact="compact = $event"
          @item-click="handleItemClick"
        />
        \${ContentPlaceholder}
      </div>
    \`
  })
}`,...(re=(se=$.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var de,ue,me;X.parameters={...X.parameters,docs:{...(de=X.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXMenu
    },
    setup() {
      const activeItem = ref('/documents/my');
      const sections = [{
        title: 'Файлы',
        items: [{
          id: 'documents',
          label: 'Документы',
          icon: DocumentTextIcon,
          children: [{
            id: 'all-docs',
            label: 'Все документы',
            to: '/documents/all'
          }, {
            id: 'my-docs',
            label: 'Мои документы',
            to: '/documents/my'
          }, {
            id: 'shared',
            label: 'Общие',
            to: '/documents/shared',
            badge: '5',
            badgeVariant: 'info'
          }, {
            id: 'archived',
            label: 'Архив',
            to: '/documents/archived'
          }]
        }, {
          id: 'folders',
          label: 'Папки',
          icon: FolderIcon,
          children: [{
            id: 'work',
            label: 'Рабочие',
            to: '/folders/work'
          }, {
            id: 'personal',
            label: 'Личные',
            to: '/folders/personal'
          }]
        }]
      }];
      const handleItemClick = item => {
        activeItem.value = item.to || item.id;
      };
      return {
        sections,
        activeItem,
        handleItemClick
      };
    },
    template: \`
      <div class="flex gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          title="Submenu Demo"
          :sections="sections"
          :activeItem="activeItem"
          class="w-80"
          @item-click="handleItemClick"
        />
        \${ContentPlaceholder}
      </div>
    \`
  })
}`,...(me=(ue=X.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,he,ve;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXMenu
    },
    setup() {
      const activeItem = ref('/home');
      const handleItemClick = item => {
        activeItem.value = item.to || item.id;
      };
      return {
        menuSections,
        activeItem,
        handleItemClick
      };
    },
    template: \`
      <div class="flex flex-col gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          title="Навигация"
          :sections="menuSections"
          :activeItem="activeItem"
          direction="horizontal"
          class="w-full"
          @item-click="handleItemClick"
        />
        \${ContentPlaceholder}
      </div>
    \`
  })
}`,...(ve=(he=E.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var fe,be,ge;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXMenu
    },
    setup() {
      const activeItem = ref('/home');
      const sections = [{
        items: [{
          id: 'home',
          label: 'Главная',
          icon: HomeIcon,
          to: '/home'
        }, {
          id: 'documents',
          label: 'Документы',
          icon: DocumentTextIcon,
          children: [{
            id: 'all-docs',
            label: 'Все документы',
            to: '/documents/all'
          }, {
            id: 'my-docs',
            label: 'Мои документы',
            to: '/documents/my'
          }, {
            id: 'shared',
            label: 'Общие',
            to: '/documents/shared',
            badge: '3',
            badgeVariant: 'info'
          }]
        }, {
          id: 'users',
          label: 'Пользователи',
          icon: UsersIcon,
          to: '/users'
        }, {
          id: 'settings',
          label: 'Настройки',
          icon: Cog6ToothIcon,
          to: '/settings'
        }]
      }];
      const handleItemClick = item => {
        activeItem.value = item.to || item.id;
      };
      return {
        sections,
        activeItem,
        handleItemClick
      };
    },
    template: \`
      <div class="flex flex-col gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          title="Dropdown Demo"
          :sections="sections"
          :activeItem="activeItem"
          direction="horizontal"
          class="w-full"
          @item-click="handleItemClick"
        />
        \${ContentPlaceholder}
      </div>
    \`
  })
}`,...(ge=(be=B.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var Ie,ke,Ce;P.parameters={...P.parameters,docs:{...(Ie=P.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXMenu
    },
    setup() {
      const activeItem = ref('/home');
      const handleItemClick = item => {
        activeItem.value = item.to || item.id;
      };
      return {
        menuSections,
        activeItem,
        handleItemClick
      };
    },
    template: \`
      <div class="flex flex-col gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          :sections="menuSections"
          :activeItem="activeItem"
          direction="horizontal"
          :showHeader="false"
          cardVariant="flat"
          class="w-full"
          @item-click="handleItemClick"
        />
        \${ContentPlaceholder}
      </div>
    \`
  })
}`,...(Ce=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};const It=["Playground","Vertical","VerticalCompact","VerticalCollapsible","VerticalWithSubmenu","Horizontal","HorizontalWithSubmenu","NavbarStyle"];export{E as Horizontal,B as HorizontalWithSubmenu,P as NavbarStyle,V as Playground,z as Vertical,$ as VerticalCollapsible,M as VerticalCompact,X as VerticalWithSubmenu,It as __namedExportsOrder,gt as default};
