import{v as Fe,c as h,e as g,o as a,g as x,z as t,l as v,b as O,a as c,k as r,F as b,m as _,x as R,u as N,P as G,f as y,D as w,r as u}from"./vue.esm-bundler-CzLKT_w4.js";import{u as _e,D as Q}from"./DXSidebarMenuItem-B4BZQIvU.js";import{_ as Ne}from"./DXCard-BX01pIOu.js";import{_ as Z}from"./DXInput-BLwLEfW9.js";import{_ as z}from"./DXIcon-BbhqsR95.js";import{_ as Te}from"./DXDivider-Yv-XXyN6.js";import{_ as J}from"./DXHeading-DwWVK5ab.js";import{_ as Ue}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as K}from"./MagnifyingGlassIcon-ssG6g_B7.js";import{r as Y}from"./ChevronRightIcon-3JO9-dGk.js";import{r as ee}from"./ChevronLeftIcon-BRnQlYlk.js";import"./DXText-DW7ThwBY.js";import{r as Se}from"./HomeIcon-CdtK5ct4.js";import{r as We}from"./ChartBarIcon-Bcs_CYxM.js";import{r as we}from"./UsersIcon-DED7hWOG.js";import{r as T}from"./DocumentTextIcon-CeukRkb2.js";import{r as ze}from"./FolderIcon-C0ha1Q7k.js";import{r as Ve}from"./Cog6ToothIcon-By8I8Qry.js";import"./useAnimation-ByVAdqmf.js";import"./DXBadge-CxZg7KEC.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXDropdown-BME4Lvuj.js";import"./ChevronDownIcon-oXhPA-Up.js";import"./DXDropdownItem-CaNyf6TV.js";import"./useSpacing-BOHUzi8w.js";import"./DXFormLabel-CkXlkm95.js";import"./ExclamationCircleIcon-CzLk2qiN.js";import"./DXIconWrapper-DA1ppaUf.js";const je=["title"],Le=["title"],qe={key:1,class:"px-4 pb-4"},Oe={key:0,class:"px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider"},Me={__name:"DXMenu",props:{title:{type:String,default:""},sections:{type:Array,required:!0},activeItem:{type:String,default:""},compact:{type:Boolean,default:!1},collapsible:{type:Boolean,default:!1},searchable:{type:Boolean,default:!1},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},showHeader:{type:Boolean,default:void 0},headerSize:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},cardPadding:{type:String,default:"none",validator:e=>["none","sm","md","lg"].includes(e)},cardVariant:{type:String,default:"default",validator:e=>["default","bordered","elevated","flat"].includes(e)}},emits:["item-click","update:compact"],setup(e,{emit:s}){const l=Fe(),n=e,Xe=s,{searchQuery:I,compact:i,filteredSections:U,isItemActive:W,toggleCompact:D,handleItemClick:S}=_e(n,Xe),j={sm:{container:"px-3 py-2",title:"text-base"},md:{container:"px-4 py-5",title:"text-lg"},lg:{container:"px-6 py-8",title:"text-xl"}},$e=h(()=>n.showHeader!==void 0?n.showHeader:!!(l.header||n.title||n.collapsible)),Ee=h(()=>n.direction==="horizontal"?"flex flex-col w-full":"flex flex-col h-full"),Be=h(()=>["transition-all duration-300",i.value&&n.direction==="vertical"?"w-auto":""]),Pe=h(()=>{const d="flex items-center gap-2 border-b border-slate-200 flex-shrink-0";return n.direction==="horizontal"?[d,"px-4 py-3"]:[d,i.value?"justify-center px-2 py-3":j[n.headerSize].container]}),L=h(()=>[n.direction==="horizontal"?"text-base":j[n.headerSize].title]),q=h(()=>{if(n.direction==="horizontal")return"base";const d={sm:"base",md:"lg",lg:"xl"};return d[n.headerSize]||d.md}),He=h(()=>n.direction==="horizontal"?"flex flex-row items-center gap-1 px-4 py-2 overflow-visible":["flex-1 overflow-y-auto py-4 space-y-6",i.value?"px-1":"px-3"]),Ae=h(()=>["px-4 py-4 border-t border-slate-200 flex-shrink-0",i.value&&"px-2"]);return(d,p)=>(a(),g(Ne,{padding:e.cardPadding,variant:e.cardVariant,class:v(Be.value),"data-component":"DXMenu","data-compact":t(i),"data-direction":e.direction},{default:x(()=>[O("div",{class:v(Ee.value)},[$e.value?(a(),c("div",{key:0,class:v(Pe.value)},[e.direction==="horizontal"?(a(),c(b,{key:0},[t(i)?r("",!0):_(d.$slots,"header",{key:0},()=>[e.title?(a(),g(J,{key:0,level:"2",size:q.value,weight:"bold",color:"default",class:v(L.value)},{default:x(()=>[R(N(e.title),1)]),_:1},8,["size","class"])):r("",!0)],!0),e.searchable&&!t(i)?(a(),g(Z,{key:1,modelValue:t(I),"onUpdate:modelValue":p[0]||(p[0]=o=>G(I)?I.value=o:null),placeholder:"Поиск...",size:"sm",class:"max-w-xs"},{prefix:x(()=>[y(z,{icon:t(K),size:"sm",class:"text-slate-400"},null,8,["icon"])]),_:1},8,["modelValue"])):r("",!0),e.collapsible?(a(),c("button",{key:2,type:"button",class:"p-2 rounded-lg hover:bg-slate-100 transition-colors ml-auto",onClick:p[1]||(p[1]=(...o)=>t(D)&&t(D)(...o)),title:t(i)?"Развернуть":"Свернуть"},[y(z,{icon:t(i)?t(Y):t(ee),size:"md",animation:"scale",class:"text-slate-600"},null,8,["icon"])],8,je)):r("",!0)],64)):(a(),c(b,{key:1},[t(i)?r("",!0):_(d.$slots,"header",{key:0},()=>[e.title?(a(),g(J,{key:0,level:"2",size:q.value,weight:"bold",color:"default",class:v(L.value)},{default:x(()=>[R(N(e.title),1)]),_:1},8,["size","class"])):r("",!0)],!0),e.collapsible?(a(),c("button",{key:1,type:"button",class:v(["p-2 rounded-lg hover:bg-slate-100 transition-colors",{"ml-auto":!t(i)}]),onClick:p[2]||(p[2]=(...o)=>t(D)&&t(D)(...o)),title:t(i)?"Развернуть":"Свернуть"},[y(z,{icon:t(i)?t(Y):t(ee),size:"md",animation:"scale",class:"text-slate-600"},null,8,["icon"])],10,Le)):r("",!0)],64))],2)):r("",!0),e.searchable&&!t(i)&&e.direction==="vertical"?(a(),c("div",qe,[y(Z,{modelValue:t(I),"onUpdate:modelValue":p[3]||(p[3]=o=>G(I)?I.value=o:null),placeholder:"Поиск...",size:"sm"},{prefix:x(()=>[y(z,{icon:t(K),size:"sm",class:"text-slate-400"},null,8,["icon"])]),_:1},8,["modelValue"])])):r("",!0),O("nav",{class:v(He.value)},[e.direction==="horizontal"?(a(!0),c(b,{key:0},w(t(U),(o,A)=>(a(),c(b,{key:A},[(a(!0),c(b,null,w(o.items,(C,F)=>(a(),g(Q,{key:F,item:C,active:t(W)(C),compact:!1,horizontal:!0,onClick:t(S),onChildClick:t(S)},null,8,["item","active","onClick","onChildClick"]))),128))],64))),128)):(a(!0),c(b,{key:1},w(t(U),(o,A)=>(a(),c("div",{key:A,class:"space-y-1"},[o.title&&!t(i)?(a(),c("div",Oe,N(o.title),1)):r("",!0),o.title&&t(i)?(a(),g(Te,{key:1,spacing:"sm"})):r("",!0),(a(!0),c(b,null,w(o.items,(C,F)=>(a(),g(Q,{key:F,item:C,active:t(W)(C),compact:t(i),onClick:t(S),onChildClick:t(S)},null,8,["item","active","compact","onClick","onChildClick"]))),128))]))),128))],2),t(l).footer&&!t(i)&&e.direction==="vertical"?(a(),c("div",{key:2,class:v(Ae.value)},[_(d.$slots,"footer",{},void 0,!0)],2)):r("",!0)],2)]),_:3},8,["padding","variant","class","data-compact","data-direction"]))}},m=Ue(Me,[["__scopeId","data-v-8b0350c3"]]);Me.__docgenInfo={exportName:"default",displayName:"DXMenu",description:"",tags:{},props:[{name:"title",description:"Заголовок меню",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"sections",description:"Секции меню: [{ title?, items: [{ label, icon?, to?, href?, badge?, children? }] }]",type:{name:"array"},required:!0},{name:"activeItem",description:"Текущий активный элемент (path или id)",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"compact",description:"Компактный режим (только иконки)",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"collapsible",description:"Можно ли сворачивать",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"searchable",description:"Показывать поиск",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"direction",description:"Направление: vertical, horizontal",type:{name:"string"},defaultValue:{func:!1,value:"'vertical'"},values:["vertical","horizontal"]},{name:"showHeader",description:"Показывать header (если undefined - автоматически)",type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"headerSize",description:"Размер header: sm, md, lg",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg"]},{name:"cardPadding",description:"Padding карточки: none, sm, md, lg",type:{name:"string"},defaultValue:{func:!1,value:"'none'"},values:["none","sm","md","lg"]},{name:"cardVariant",description:"Вариант карточки: default, bordered, elevated, flat",type:{name:"string"},defaultValue:{func:!1,value:"'default'"},values:["default","bordered","elevated","flat"]}],events:[{name:"item-click"},{name:"update:compact"}],slots:[{name:"header"},{name:"footer"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXMenu/DXMenu.vue"]};const St={title:"Molecules/DXMenu",component:m,tags:["autodocs","category:navigation"],argTypes:{direction:{control:{type:"select"},options:["vertical","horizontal"],description:"Направление меню: vertical, horizontal"},showHeader:{control:{type:"boolean"},description:"Показывать header (undefined = автоматически)"},headerSize:{control:{type:"select"},options:["sm","md","lg"]},cardVariant:{control:{type:"select"},options:["default","bordered","elevated","flat"]},cardPadding:{control:{type:"select"},options:["none","sm","md","lg"]}}},k=[{items:[{id:"home",label:"Главная",icon:Se,to:"/home"},{id:"analytics",label:"Аналитика",icon:We,to:"/analytics"},{id:"users",label:"Пользователи",icon:we,to:"/users",badge:"12",badgeVariant:"info"}]},{title:"Контент",items:[{id:"documents",label:"Документы",icon:T,children:[{id:"all-docs",label:"Все документы",to:"/documents/all"},{id:"my-docs",label:"Мои документы",to:"/documents/my"},{id:"shared",label:"Общие",to:"/documents/shared",badge:"3",badgeVariant:"warning"}]},{id:"folders",label:"Папки",icon:ze,to:"/folders"},{id:"settings",label:"Настройки",icon:Ve,to:"/settings"}]}],f=`
  <div class="flex-1 bg-slate-50 rounded-xl border-2 border-dashed border-slate-300 p-8 flex items-center justify-center">
    <div class="text-center">
      <div class="text-4xl mb-2">📄</div>
      <DXHeading level="3" size="lg" weight="semibold" color="default">Content Area</DXHeading>
      <DXText tag="p" size="sm" color="muted">Main content goes here</DXText>
    </div>
  </div>
`,V={args:{title:"Навигация",sections:k,direction:"vertical",compact:!1,collapsible:!0,searchable:!0,showHeader:void 0,headerSize:"md",cardPadding:"none",cardVariant:"default"},render:e=>({components:{DXMenu:m},setup(){const s=u("/home");return{args:e,activeItem:s,handleItemClick:n=>{console.log("Clicked:",n),s.value=n.to||n.id}}},template:`
      <div :class="args.direction === 'horizontal' ? 'flex flex-col gap-4' : 'flex gap-4'" class="h-[600px] bg-white p-4">
        <DXMenu 
          v-bind="args"
          :activeItem="activeItem"
          :class="args.direction === 'horizontal' ? 'w-full' : 'w-80'"
          @item-click="handleItemClick"
          @update:compact="args.compact = $event"
        />
        ${f}
      </div>
    `})},M={render:()=>({components:{DXMenu:m},setup(){const e=u("/home");return{menuSections:k,activeItem:e,handleItemClick:l=>{e.value=l.to||l.id}}},template:`
      <div class="flex gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          title="Меню"
          :sections="menuSections"
          :activeItem="activeItem"
          class="w-80"
          @item-click="handleItemClick"
        />
        ${f}
      </div>
    `})},X={render:()=>({components:{DXMenu:m},setup(){const e=u("/home");return{menuSections:k,activeItem:e,handleItemClick:l=>{e.value=l.to||l.id}}},template:`
      <div class="flex gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          :sections="menuSections"
          :activeItem="activeItem"
          :compact="true"
          @item-click="handleItemClick"
        />
        ${f}
      </div>
    `})},$={render:()=>({components:{DXMenu:m},setup(){const e=u("/home"),s=u(!1);return{menuSections:k,activeItem:e,compact:s,handleItemClick:n=>{e.value=n.to||n.id}}},template:`
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
        ${f}
      </div>
    `})},E={render:()=>({components:{DXMenu:m},setup(){const e=u("/documents/my");return{sections:[{title:"Файлы",items:[{id:"documents",label:"Документы",icon:T,children:[{id:"all-docs",label:"Все документы",to:"/documents/all"},{id:"my-docs",label:"Мои документы",to:"/documents/my"},{id:"shared",label:"Общие",to:"/documents/shared",badge:"5",badgeVariant:"info"},{id:"archived",label:"Архив",to:"/documents/archived"}]},{id:"folders",label:"Папки",icon:ze,children:[{id:"work",label:"Рабочие",to:"/folders/work"},{id:"personal",label:"Личные",to:"/folders/personal"}]}]}],activeItem:e,handleItemClick:n=>{e.value=n.to||n.id}}},template:`
      <div class="flex gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          title="Submenu Demo"
          :sections="sections"
          :activeItem="activeItem"
          class="w-80"
          @item-click="handleItemClick"
        />
        ${f}
      </div>
    `})},B={render:()=>({components:{DXMenu:m},setup(){const e=u("/home");return{menuSections:k,activeItem:e,handleItemClick:l=>{e.value=l.to||l.id}}},template:`
      <div class="flex flex-col gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          title="Навигация"
          :sections="menuSections"
          :activeItem="activeItem"
          direction="horizontal"
          class="w-full"
          @item-click="handleItemClick"
        />
        ${f}
      </div>
    `})},P={render:()=>({components:{DXMenu:m},setup(){const e=u("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:Se,to:"/home"},{id:"documents",label:"Документы",icon:T,children:[{id:"all-docs",label:"Все документы",to:"/documents/all"},{id:"my-docs",label:"Мои документы",to:"/documents/my"},{id:"shared",label:"Общие",to:"/documents/shared",badge:"3",badgeVariant:"info"}]},{id:"users",label:"Пользователи",icon:we,to:"/users"},{id:"settings",label:"Настройки",icon:Ve,to:"/settings"}]}],activeItem:e,handleItemClick:n=>{e.value=n.to||n.id}}},template:`
      <div class="flex flex-col gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          title="Dropdown Demo"
          :sections="sections"
          :activeItem="activeItem"
          direction="horizontal"
          class="w-full"
          @item-click="handleItemClick"
        />
        ${f}
      </div>
    `})},H={render:()=>({components:{DXMenu:m},setup(){const e=u("/home");return{menuSections:k,activeItem:e,handleItemClick:l=>{e.value=l.to||l.id}}},template:`
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
        ${f}
      </div>
    `})};var te,ne,ae;V.parameters={...V.parameters,docs:{...(te=V.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=V.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var le,ie,oe;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(oe=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ce,se,re;X.parameters={...X.parameters,docs:{...(ce=X.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(re=(se=X.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var de,ue,me;$.parameters={...$.parameters,docs:{...(de=$.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=$.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,he,ve;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ve=(he=E.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var fe,ge,be;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(be=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var Ie,ke,Ce;P.parameters={...P.parameters,docs:{...(Ie=P.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ce=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var xe,ye,De;H.parameters={...H.parameters,docs:{...(xe=H.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(De=(ye=H.parameters)==null?void 0:ye.docs)==null?void 0:De.source}}};const wt=["Playground","Vertical","VerticalCompact","VerticalCollapsible","VerticalWithSubmenu","Horizontal","HorizontalWithSubmenu","NavbarStyle"];export{B as Horizontal,P as HorizontalWithSubmenu,H as NavbarStyle,V as Playground,M as Vertical,$ as VerticalCollapsible,X as VerticalCompact,E as VerticalWithSubmenu,wt as __namedExportsOrder,St as default};
