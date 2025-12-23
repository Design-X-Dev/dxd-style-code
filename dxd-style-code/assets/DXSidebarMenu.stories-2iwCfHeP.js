import{a as c,b as He,o,u as Ge,c as h,k as b,l as v,m as O,C as t,f as _,g as Qe,O as Je,F as W,B as j,t as L,e as q,r as s}from"./vue.esm-bundler-Nfu98kES.js";import{u as Ke,D as Ye,r as l}from"./DXSidebarMenuItem-CY99HS12.js";import{_ as en}from"./DXInput-DUVmhVHV.js";import{_ as P}from"./DXIcon-DQdlGsO1.js";import{_ as nn}from"./DXDivider-DIbZiQd2.js";import{_ as tn}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as un}from"./ChevronRightIcon-Bln9TrNK.js";import{r as sn}from"./ChevronLeftIcon-CgJmgnPf.js";import{r as an}from"./MagnifyingGlassIcon-DjnTFUrM.js";import{_ as on}from"./DXButton-D4QV5g9V.js";import{_ as ln}from"./DXCard-3LRlU0Yj.js";import{a as i,r as M}from"./HomeIcon-V68wWz7H.js";import{r as m}from"./ChartBarIcon-B8uGKbeP.js";import{r as V}from"./DocumentTextIcon-BU4oBP5S.js";import{r as _e}from"./FolderIcon-yZ1Yyygo.js";import{r as $}from"./InboxIcon-DJLBFwwB.js";import{a as Ve,r as cn}from"./CreditCardIcon-4yuWS2o_.js";import{r as rn}from"./BellIcon-jfu7dOpO.js";import{r as dn}from"./ArrowRightOnRectangleIcon-CSwXYGom.js";import{r as mn}from"./ShoppingCartIcon-JRM8QiXu.js";import"./useAnimation-CL8rPOHu.js";import"./DXBadge-BzIj_AZP.js";import"./useSize-D8MrabOp.js";import"./useVariant-DBYBwuJ6.js";import"./InformationCircleIcon-DsJgS0pw.js";import"./CheckCircleIcon-BeodL6Lf.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXDropdown-CoL0Joua.js";import"./ChevronDownIcon-DnL0EvPK.js";import"./DXDropdownItem-BNem-Fpn.js";import"./DXFormLabel-Drk-51Wk.js";import"./ExclamationCircleIcon-DOJNx4bv.js";import"./DXIconWrapper-DKYfCJ0D.js";import"./useSpacing-BOHUzi8w.js";function pn(e,u){return o(),c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[He("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"})])}const bn=["data-compact"],hn=["title"],vn={key:1,class:"px-4 pb-4"},fn={key:0,class:"px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider"},$e={__name:"DXSidebarMenu",props:{title:{type:String,default:""},sections:{type:Array,required:!0},activeItem:{type:String,default:""},compact:{type:Boolean,default:!1},collapsible:{type:Boolean,default:!0},searchable:{type:Boolean,default:!1},showHeader:{type:Boolean,default:void 0},headerSize:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},width:{type:String,default:"md",validator:e=>["sm","md","lg","full"].includes(e)},fixed:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0}},emits:["item-click","update:compact"],setup(e,{emit:u}){const r=Ge(),n=e,Ue=u,{searchQuery:H,internalCompact:f,compact:d,filteredSections:ze,isItemActive:Re,toggleCompact:U,handleItemClick:z}=Ke(n,Ue),R={sm:{container:"px-3 py-2",title:"text-base"},md:{container:"px-4 py-5",title:"text-lg"},lg:{container:"px-6 py-8",title:"text-xl"}},Te=h(()=>n.showHeader!==void 0?n.showHeader:!!(r.header||n.title||n.collapsible)),Ne={sm:"w-64",md:"w-80",lg:"w-96",full:"w-full"},Oe=h(()=>["flex flex-col bg-white transition-all duration-300",f.value?"w-20":Ne[n.width],n.fixed&&"fixed top-0 left-0 h-screen",n.bordered&&"border-r border-slate-200","shadow-sm"]),We=h(()=>["flex items-center gap-2 border-b border-slate-200 flex-shrink-0",f.value?"justify-center px-2 py-3":R[n.headerSize].container]),je=h(()=>["font-bold text-slate-900",R[n.headerSize].title]),Le=h(()=>["flex-1 overflow-y-auto py-4 px-3 space-y-6",f.value&&"px-2"]),qe=h(()=>["px-4 py-4 border-t border-slate-200 flex-shrink-0",f.value&&"px-2"]);return(T,x)=>(o(),c("aside",{class:v(Oe.value),"data-component":"DXSidebarMenu","data-compact":t(d)},[Te.value?(o(),c("div",{key:0,class:v(We.value)},[t(d)?b("",!0):O(T.$slots,"header",{key:0},()=>[e.title?(o(),c("h2",{key:0,class:v(je.value)},L(e.title),3)):b("",!0)],!0),e.collapsible?(o(),c("button",{key:1,type:"button",class:v(["p-2 rounded-lg hover:bg-slate-100 transition-colors",{"ml-auto":!t(d)}]),onClick:x[0]||(x[0]=(...p)=>t(U)&&t(U)(...p)),title:t(d)?"Развернуть":"Свернуть"},[_(P,{icon:t(d)?t(un):t(sn),size:"md",animation:"scale",class:"text-slate-600"},null,8,["icon"])],10,hn)):b("",!0)],2)):b("",!0),e.searchable&&!t(d)?(o(),c("div",vn,[_(en,{modelValue:t(H),"onUpdate:modelValue":x[1]||(x[1]=p=>Je(H)?H.value=p:null),placeholder:"Поиск...",size:"sm"},{prefix:Qe(()=>[_(P,{icon:t(an),size:"sm",class:"text-slate-400"},null,8,["icon"])]),_:1},8,["modelValue"])])):b("",!0),He("nav",{class:v(Le.value)},[(o(!0),c(W,null,j(t(ze),(p,Pe)=>(o(),c("div",{key:Pe,class:"space-y-1"},[p.title&&!t(d)?(o(),c("div",fn,L(p.title),1)):b("",!0),p.title&&t(d)?(o(),q(nn,{key:1,spacing:"sm"})):b("",!0),(o(!0),c(W,null,j(p.items,(N,Ze)=>(o(),q(Ye,{key:Ze,item:N,active:t(Re)(N),compact:t(d),onClick:t(z),onChildClick:t(z)},null,8,["item","active","compact","onClick","onChildClick"]))),128))]))),128))],2),t(r).footer&&!t(d)?(o(),c("div",{key:2,class:v(qe.value)},[O(T.$slots,"footer",{},void 0,!0)],2)):b("",!0)],10,bn))}},a=tn($e,[["__scopeId","data-v-67d911c7"]]);$e.__docgenInfo={exportName:"default",displayName:"DXSidebarMenu",description:"",tags:{},props:[{name:"title",description:"Заголовок сайдбара",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"sections",description:"Секции меню: [{ title?, items: [{ label, icon?, to?, href?, badge?, children? }] }]",type:{name:"array"},required:!0},{name:"activeItem",description:"Текущий активный элемент (path или id)",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"compact",description:"Компактный режим (только иконки)",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"collapsible",description:"Можно ли сворачивать",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"searchable",description:"Показывать поиск",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showHeader",description:"Показывать header (если undefined - автоматически)",type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"headerSize",description:"Размер header: sm, md, lg",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg"]},{name:"width",description:"Ширина: sm | md | lg | full",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg","full"]},{name:"fixed",description:"Фиксированная позиция",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"bordered",description:"Показывать бордер справа",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"item-click"},{name:"update:compact"}],slots:[{name:"header"},{name:"footer"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXSidebarMenu/DXSidebarMenu.vue"]};const Kn={title:"Organisms/DXSidebarMenu",component:a,tags:["autodocs"],argTypes:{showHeader:{control:{type:"boolean"},description:"Показывать header (undefined = автоматически)"},headerSize:{control:{type:"select"},options:["sm","md","lg"]},width:{control:{type:"select"},options:["sm","md","lg","full"]}}},I={render:()=>({components:{DXSidebarMenu:a},setup(){const e=s("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:i,to:"/home",badge:"5",badgeVariant:"danger"},{id:"analytics",label:"Аналитика",icon:m,to:"/analytics"},{id:"users",label:"Пользователи",icon:l,to:"/users",badge:"12",badgeVariant:"info"}]},{title:"Контент",items:[{id:"documents",label:"Документы",icon:V,children:[{id:"all-docs",label:"Все документы",to:"/documents/all"},{id:"my-docs",label:"Мои документы",to:"/documents/my"},{id:"shared",label:"Общие",to:"/documents/shared",badge:"3"}]},{id:"folders",label:"Папки",icon:_e,to:"/folders"}]}],activeItem:e,handleItemClick:n=>{console.log("Clicked:",n),e.value=n.to||n.id}}},template:`
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Меню"
          width="md"
          :collapsible="true"
          :searchable="false"
          :bordered="true"
          :sections="sections"
          :activeItem="activeItem"
          @item-click="handleItemClick"
        />
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold mb-4">Основной контент</h1>
          <p class="text-slate-600">Активный элемент: {{ activeItem }}</p>
        </div>
      </div>
    `})},g={render:()=>({components:{DXSidebarMenu:a},setup(){const e=s("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:i,to:"/home"},{id:"analytics",label:"Аналитика",icon:m,to:"/analytics"},{id:"users",label:"Пользователи",icon:l,to:"/users",badge:"12"}]},{title:"Контент",items:[{id:"documents",label:"Документы",icon:V,to:"/documents"},{id:"folders",label:"Папки",icon:_e,to:"/folders"},{id:"inbox",label:"Входящие",icon:$,to:"/inbox",badge:"25"}]}],activeItem:e}},template:`
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Навигация"
          :sections="sections"
          :activeItem="activeItem"
          searchable
        />
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold">Поиск по меню</h1>
          <p class="text-slate-600 mt-2">Начните вводить название пункта меню</p>
        </div>
      </div>
    `})},D={render:()=>({components:{DXSidebarMenu:a},setup(){const e=s("/home"),u=s(!0);return{sections:[{items:[{id:"home",label:"Главная",icon:i,to:"/home"},{id:"analytics",label:"Аналитика",icon:m,to:"/analytics"},{id:"users",label:"Пользователи",icon:l,to:"/users"}]},{title:"Настройки",items:[{id:"calendar",label:"Календарь",icon:Ve,to:"/calendar"},{id:"settings",label:"Настройки",icon:M,to:"/settings"}]}],activeItem:e,compact:u}},template:`
      <div class="h-screen flex">
        <DXSidebarMenu 
          :sections="sections"
          :activeItem="activeItem"
          :compact="compact"
          collapsible
          @update:compact="compact = $event"
        />
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold">Компактный режим</h1>
          <p class="text-slate-600 mt-2">Кликните на иконку стрелки, чтобы развернуть</p>
        </div>
      </div>
    `})},C={render:()=>({components:{DXSidebarMenu:a},setup(){const e=s("/");return{sections:[{items:[{id:"home",label:"Главная",icon:i,to:"/"},{id:"users",label:"Пользователи",icon:l,to:"/users"},{id:"settings",label:"Настройки",icon:M,to:"/settings"}]}],activeItem:e}},template:`
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Простое меню"
          :sections="sections"
          :activeItem="activeItem"
        />
        <main class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold">Минимальный пример</h1>
        </main>
      </div>
    `})},y={render:()=>({components:{DXSidebarMenu:a},setup(){const e=s("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:i,to:"/home"},{id:"inbox",label:"Входящие",icon:$,to:"/inbox",badge:"25",badgeVariant:"danger"},{id:"notifications",label:"Уведомления",icon:rn,to:"/notifications",badge:"99+",badgeVariant:"warning"},{id:"users",label:"Пользователи",icon:l,to:"/users",badge:"156",badgeVariant:"info"}]}],activeItem:e}},template:`
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Со счетчиками"
          :sections="sections"
          :activeItem="activeItem"
        />
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold">Badges/Счетчики</h1>
          <p class="text-slate-600 mt-2">Варианты: info, success, warning, danger</p>
        </div>
      </div>
    `})},B={render:()=>({components:{DXSidebarMenu:a},setup(){const e=s("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:i,to:"/home"},{id:"settings",label:"Настройки",icon:M,children:[{id:"profile",label:"Профиль",to:"/settings/profile"},{id:"security",label:"Безопасность",to:"/settings/security"},{id:"notifications",label:"Уведомления",to:"/settings/notifications"}]}]}],activeItem:e}},template:`
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="С подменю"
          :sections="sections"
          :activeItem="activeItem"
        />
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold">Вложенное меню</h1>
          <p class="text-slate-600 mt-2">Кликните на "Настройки" чтобы раскрыть подменю</p>
        </div>
      </div>
    `})},E={render:()=>({components:{DXSidebarMenu:a},setup(){const e=s("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:i,to:"/home"},{id:"analytics",label:"Аналитика",icon:m,to:"/analytics"},{id:"users",label:"Пользователи",icon:l,to:"/users"}]}],activeItem:e}},template:`
      <div class="h-screen flex">
        <DXSidebarMenu 
          :sections="sections"
          :activeItem="activeItem"
        >
          <template #header>
            <div class="flex items-center gap-3 w-full">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <span class="text-white font-bold text-lg">D</span>
              </div>
              <div class="flex-1">
                <h2 class="text-sm font-bold text-slate-900">DXD System</h2>
                <p class="text-xs text-slate-500">Design & Development</p>
              </div>
            </div>
          </template>
        </DXSidebarMenu>
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold">Кастомный заголовок</h1>
        </div>
      </div>
    `})},S={render:()=>({components:{DXSidebarMenu:a,DXButton:on},setup(){const e=s("/");return{sections:[{items:[{id:"home",label:"Главная",icon:i,to:"/"},{id:"orders",label:"Заказы",icon:mn,to:"/orders",badge:"8",badgeVariant:"danger"}]},{title:"Продажи",items:[{id:"products",label:"Товары",icon:$,to:"/products"},{id:"customers",label:"Клиенты",icon:l,to:"/customers",badge:"156"},{id:"payments",label:"Платежи",icon:cn,to:"/payments"}]},{title:"Отчеты",items:[{id:"analytics",label:"Аналитика",icon:m,to:"/analytics"},{id:"reports",label:"Отчеты",icon:V,to:"/reports"}]}],activeItem:e,handleItemClick:n=>{e.value=n.to||n.id},UserCircleIcon:pn,ArrowRightOnRectangleIcon:dn}},template:`
      <div class="h-screen flex">
        <DXSidebarMenu 
          :sections="sections"
          :activeItem="activeItem"
          width="md"
          searchable
          @item-click="handleItemClick"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <div class="flex-1">
                <h2 class="text-sm font-bold text-slate-900">Shop Admin</h2>
                <p class="text-xs text-slate-500">v1.0.0</p>
              </div>
            </div>
          </template>
          
          <template #footer>
            <div class="space-y-2">
              <button class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
                <component :is="UserCircleIcon" class="w-5 h-5" />
                <span class="text-sm font-medium">Профиль</span>
              </button>
              <button class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-rose-600 hover:bg-rose-50 transition-colors">
                <component :is="ArrowRightOnRectangleIcon" class="w-5 h-5" />
                <span class="text-sm font-medium">Выйти</span>
              </button>
            </div>
          </template>
        </DXSidebarMenu>
        
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold mb-4">E-commerce Dashboard</h1>
          <p class="text-slate-600">Активная страница: <code class="bg-white px-2 py-1 rounded">{{ activeItem }}</code></p>
        </div>
      </div>
    `})},k={render:()=>({components:{DXSidebarMenu:a,DXCard:ln},setup(){const e=s("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:i,to:"/home",badge:"5",badgeVariant:"danger"},{id:"analytics",label:"Аналитика",icon:m,to:"/analytics"},{id:"users",label:"Пользователи",icon:l,to:"/users",badge:"12",badgeVariant:"info"}]},{title:"Настройки",items:[{id:"calendar",label:"Календарь",icon:Ve,to:"/calendar"},{id:"settings",label:"Настройки",icon:M,children:[{id:"profile",label:"Профиль",to:"/settings/profile"},{id:"security",label:"Безопасность",to:"/settings/security"},{id:"notifications",label:"Уведомления",to:"/settings/notifications"}]}]}],activeItem:e,handleItemClick:n=>{e.value=n.to||n.id}}},template:`
      <div class="p-8 bg-slate-50 min-h-screen">
        <h1 class="text-2xl font-bold mb-6">Меню внутри карточки</h1>
        
        <div class="grid grid-cols-3 gap-6">
          <!-- Меню в карточке -->
          <DXCard class="col-span-1">
            <DXSidebarMenu 
              title="Навигация"
              :sections="sections"
              :activeItem="activeItem"
              variant="embedded"
              :collapsible="false"
              :bordered="false"
              @item-click="handleItemClick"
            />
          </DXCard>
          
          <!-- Основной контент -->
          <div class="col-span-2">
            <DXCard>
              <h2 class="text-xl font-semibold mb-4">Контент страницы</h2>
              <p class="text-slate-600 mb-4">
                Меню находится в карточке слева. Используйте <code class="bg-slate-100 px-2 py-1 rounded">variant="embedded"</code> 
                для встраивания меню в контейнеры.
              </p>
              <div class="p-4 bg-slate-50 rounded-lg">
                <p class="text-sm font-medium text-slate-700 mb-2">Активный элемент:</p>
                <code class="text-sm bg-white px-3 py-2 rounded border border-slate-200">{{ activeItem }}</code>
              </div>
            </DXCard>
          </div>
        </div>
      </div>
    `})},A={render:()=>({components:{DXSidebarMenu:a},setup(){const e=s("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:i,to:"/home"},{id:"analytics",label:"Аналитика",icon:m,to:"/analytics"},{id:"users",label:"Пользователи",icon:l,to:"/users"}]}],activeItem:e,handleItemClick:n=>{e.value=n.to||n.id}}},template:`
      <div class="h-screen flex">
        <DXSidebarMenu 
          :sections="sections"
          :activeItem="activeItem"
          :showHeader="false"
          @item-click="handleItemClick"
        />
        <div class="flex-1 p-8">
          <h2 class="text-2xl font-bold">Sidebar без header</h2>
        </div>
      </div>
    `})},X={render:()=>({components:{DXSidebarMenu:a},setup(){const e=s("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:i,to:"/home"},{id:"analytics",label:"Аналитика",icon:m,to:"/analytics"},{id:"users",label:"Пользователи",icon:l,to:"/users"}]}],activeItem:e,handleItemClick:n=>{e.value=n.to||n.id}}},template:`
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Компактный"
          :sections="sections"
          :activeItem="activeItem"
          headerSize="sm"
          @item-click="handleItemClick"
        />
        <div class="flex-1 p-8">
          <h2 class="text-2xl font-bold">Маленький header (sm)</h2>
        </div>
      </div>
    `})},w={render:()=>({components:{DXSidebarMenu:a},setup(){const e=s("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:i,to:"/home"},{id:"analytics",label:"Аналитика",icon:m,to:"/analytics"},{id:"users",label:"Пользователи",icon:l,to:"/users"}]}],activeItem:e,handleItemClick:n=>{e.value=n.to||n.id}}},template:`
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Большой заголовок"
          :sections="sections"
          :activeItem="activeItem"
          headerSize="lg"
          @item-click="handleItemClick"
        />
        <div class="flex-1 p-8">
          <h2 class="text-2xl font-bold">Большой header (lg)</h2>
        </div>
      </div>
    `})},F={render:()=>({components:{DXSidebarMenu:a},setup(){const e=s("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:i,to:"/home"},{id:"analytics",label:"Аналитика",icon:m,to:"/analytics"},{id:"users",label:"Пользователи",icon:l,to:"/users"}]}],activeItem:e,handleItemClick:n=>{e.value=n.to||n.id}}},template:`
      <div class="h-screen flex">
        <DXSidebarMenu 
          :sections="sections"
          :activeItem="activeItem"
          :collapsible="false"
          @item-click="handleItemClick"
        />
        <div class="flex-1 p-8">
          <h2 class="text-2xl font-bold">Header скрывается автоматически</h2>
          <p class="text-slate-600 mt-2">Нет title, слота header и collapsible=false</p>
        </div>
      </div>
    `})};var Z,G,Q;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSidebarMenu
    },
    setup() {
      const activeItem = ref('/home');

      // Данные меню - видны в "Show code"
      const sections = [{
        items: [{
          id: 'home',
          label: 'Главная',
          icon: HomeIcon,
          to: '/home',
          badge: '5',
          badgeVariant: 'danger'
        }, {
          id: 'analytics',
          label: 'Аналитика',
          icon: ChartBarIcon,
          to: '/analytics'
        }, {
          id: 'users',
          label: 'Пользователи',
          icon: UsersIcon,
          to: '/users',
          badge: '12',
          badgeVariant: 'info'
        }]
      }, {
        title: 'Контент',
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
            badge: '3'
          }]
        }, {
          id: 'folders',
          label: 'Папки',
          icon: FolderIcon,
          to: '/folders'
        }]
      }];
      const handleItemClick = item => {
        console.log('Clicked:', item);
        activeItem.value = item.to || item.id;
      };
      return {
        sections,
        activeItem,
        handleItemClick
      };
    },
    template: \`
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Меню"
          width="md"
          :collapsible="true"
          :searchable="false"
          :bordered="true"
          :sections="sections"
          :activeItem="activeItem"
          @item-click="handleItemClick"
        />
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold mb-4">Основной контент</h1>
          <p class="text-slate-600">Активный элемент: {{ activeItem }}</p>
        </div>
      </div>
    \`
  })
}`,...(Q=(G=I.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var J,K,Y;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSidebarMenu
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
          id: 'analytics',
          label: 'Аналитика',
          icon: ChartBarIcon,
          to: '/analytics'
        }, {
          id: 'users',
          label: 'Пользователи',
          icon: UsersIcon,
          to: '/users',
          badge: '12'
        }]
      }, {
        title: 'Контент',
        items: [{
          id: 'documents',
          label: 'Документы',
          icon: DocumentTextIcon,
          to: '/documents'
        }, {
          id: 'folders',
          label: 'Папки',
          icon: FolderIcon,
          to: '/folders'
        }, {
          id: 'inbox',
          label: 'Входящие',
          icon: InboxIcon,
          to: '/inbox',
          badge: '25'
        }]
      }];
      return {
        sections,
        activeItem
      };
    },
    template: \`
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Навигация"
          :sections="sections"
          :activeItem="activeItem"
          searchable
        />
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold">Поиск по меню</h1>
          <p class="text-slate-600 mt-2">Начните вводить название пункта меню</p>
        </div>
      </div>
    \`
  })
}`,...(Y=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var ee,ne,te;D.parameters={...D.parameters,docs:{...(ee=D.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSidebarMenu
    },
    setup() {
      const activeItem = ref('/home');
      const compact = ref(true);
      const sections = [{
        items: [{
          id: 'home',
          label: 'Главная',
          icon: HomeIcon,
          to: '/home'
        }, {
          id: 'analytics',
          label: 'Аналитика',
          icon: ChartBarIcon,
          to: '/analytics'
        }, {
          id: 'users',
          label: 'Пользователи',
          icon: UsersIcon,
          to: '/users'
        }]
      }, {
        title: 'Настройки',
        items: [{
          id: 'calendar',
          label: 'Календарь',
          icon: CalendarIcon,
          to: '/calendar'
        }, {
          id: 'settings',
          label: 'Настройки',
          icon: Cog6ToothIcon,
          to: '/settings'
        }]
      }];
      return {
        sections,
        activeItem,
        compact
      };
    },
    template: \`
      <div class="h-screen flex">
        <DXSidebarMenu 
          :sections="sections"
          :activeItem="activeItem"
          :compact="compact"
          collapsible
          @update:compact="compact = $event"
        />
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold">Компактный режим</h1>
          <p class="text-slate-600 mt-2">Кликните на иконку стрелки, чтобы развернуть</p>
        </div>
      </div>
    \`
  })
}`,...(te=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ue,se,ae;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSidebarMenu
    },
    setup() {
      const activeItem = ref('/');

      // Минимальный пример данных
      const sections = [{
        items: [{
          id: 'home',
          label: 'Главная',
          icon: HomeIcon,
          to: '/'
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
      return {
        sections,
        activeItem
      };
    },
    template: \`
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Простое меню"
          :sections="sections"
          :activeItem="activeItem"
        />
        <main class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold">Минимальный пример</h1>
        </main>
      </div>
    \`
  })
}`,...(ae=(se=C.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var oe,ie,le;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSidebarMenu
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
          id: 'inbox',
          label: 'Входящие',
          icon: InboxIcon,
          to: '/inbox',
          badge: '25',
          badgeVariant: 'danger'
        }, {
          id: 'notifications',
          label: 'Уведомления',
          icon: BellIcon,
          to: '/notifications',
          badge: '99+',
          badgeVariant: 'warning'
        }, {
          id: 'users',
          label: 'Пользователи',
          icon: UsersIcon,
          to: '/users',
          badge: '156',
          badgeVariant: 'info'
        }]
      }];
      return {
        sections,
        activeItem
      };
    },
    template: \`
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Со счетчиками"
          :sections="sections"
          :activeItem="activeItem"
        />
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold">Badges/Счетчики</h1>
          <p class="text-slate-600 mt-2">Варианты: info, success, warning, danger</p>
        </div>
      </div>
    \`
  })
}`,...(le=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,re,de;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSidebarMenu
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
          id: 'settings',
          label: 'Настройки',
          icon: Cog6ToothIcon,
          children: [{
            id: 'profile',
            label: 'Профиль',
            to: '/settings/profile'
          }, {
            id: 'security',
            label: 'Безопасность',
            to: '/settings/security'
          }, {
            id: 'notifications',
            label: 'Уведомления',
            to: '/settings/notifications'
          }]
        }]
      }];
      return {
        sections,
        activeItem
      };
    },
    template: \`
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="С подменю"
          :sections="sections"
          :activeItem="activeItem"
        />
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold">Вложенное меню</h1>
          <p class="text-slate-600 mt-2">Кликните на "Настройки" чтобы раскрыть подменю</p>
        </div>
      </div>
    \`
  })
}`,...(de=(re=B.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var me,pe,be;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSidebarMenu
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
          id: 'analytics',
          label: 'Аналитика',
          icon: ChartBarIcon,
          to: '/analytics'
        }, {
          id: 'users',
          label: 'Пользователи',
          icon: UsersIcon,
          to: '/users'
        }]
      }];
      return {
        sections,
        activeItem
      };
    },
    template: \`
      <div class="h-screen flex">
        <DXSidebarMenu 
          :sections="sections"
          :activeItem="activeItem"
        >
          <template #header>
            <div class="flex items-center gap-3 w-full">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <span class="text-white font-bold text-lg">D</span>
              </div>
              <div class="flex-1">
                <h2 class="text-sm font-bold text-slate-900">DXD System</h2>
                <p class="text-xs text-slate-500">Design & Development</p>
              </div>
            </div>
          </template>
        </DXSidebarMenu>
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold">Кастомный заголовок</h1>
        </div>
      </div>
    \`
  })
}`,...(be=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var he,ve,fe;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSidebarMenu,
      DXButton
    },
    setup() {
      const activeItem = ref('/');
      const sections = [{
        items: [{
          id: 'home',
          label: 'Главная',
          icon: HomeIcon,
          to: '/'
        }, {
          id: 'orders',
          label: 'Заказы',
          icon: ShoppingCartIcon,
          to: '/orders',
          badge: '8',
          badgeVariant: 'danger'
        }]
      }, {
        title: 'Продажи',
        items: [{
          id: 'products',
          label: 'Товары',
          icon: InboxIcon,
          to: '/products'
        }, {
          id: 'customers',
          label: 'Клиенты',
          icon: UsersIcon,
          to: '/customers',
          badge: '156'
        }, {
          id: 'payments',
          label: 'Платежи',
          icon: CreditCardIcon,
          to: '/payments'
        }]
      }, {
        title: 'Отчеты',
        items: [{
          id: 'analytics',
          label: 'Аналитика',
          icon: ChartBarIcon,
          to: '/analytics'
        }, {
          id: 'reports',
          label: 'Отчеты',
          icon: DocumentTextIcon,
          to: '/reports'
        }]
      }];
      const handleItemClick = item => {
        activeItem.value = item.to || item.id;
      };
      return {
        sections,
        activeItem,
        handleItemClick,
        UserCircleIcon,
        ArrowRightOnRectangleIcon
      };
    },
    template: \`
      <div class="h-screen flex">
        <DXSidebarMenu 
          :sections="sections"
          :activeItem="activeItem"
          width="md"
          searchable
          @item-click="handleItemClick"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <div class="flex-1">
                <h2 class="text-sm font-bold text-slate-900">Shop Admin</h2>
                <p class="text-xs text-slate-500">v1.0.0</p>
              </div>
            </div>
          </template>
          
          <template #footer>
            <div class="space-y-2">
              <button class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
                <component :is="UserCircleIcon" class="w-5 h-5" />
                <span class="text-sm font-medium">Профиль</span>
              </button>
              <button class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-rose-600 hover:bg-rose-50 transition-colors">
                <component :is="ArrowRightOnRectangleIcon" class="w-5 h-5" />
                <span class="text-sm font-medium">Выйти</span>
              </button>
            </div>
          </template>
        </DXSidebarMenu>
        
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold mb-4">E-commerce Dashboard</h1>
          <p class="text-slate-600">Активная страница: <code class="bg-white px-2 py-1 rounded">{{ activeItem }}</code></p>
        </div>
      </div>
    \`
  })
}`,...(fe=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var xe,Ie,ge;k.parameters={...k.parameters,docs:{...(xe=k.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSidebarMenu,
      DXCard
    },
    setup() {
      const activeItem = ref('/home');
      const sections = [{
        items: [{
          id: 'home',
          label: 'Главная',
          icon: HomeIcon,
          to: '/home',
          badge: '5',
          badgeVariant: 'danger'
        }, {
          id: 'analytics',
          label: 'Аналитика',
          icon: ChartBarIcon,
          to: '/analytics'
        }, {
          id: 'users',
          label: 'Пользователи',
          icon: UsersIcon,
          to: '/users',
          badge: '12',
          badgeVariant: 'info'
        }]
      }, {
        title: 'Настройки',
        items: [{
          id: 'calendar',
          label: 'Календарь',
          icon: CalendarIcon,
          to: '/calendar'
        }, {
          id: 'settings',
          label: 'Настройки',
          icon: Cog6ToothIcon,
          children: [{
            id: 'profile',
            label: 'Профиль',
            to: '/settings/profile'
          }, {
            id: 'security',
            label: 'Безопасность',
            to: '/settings/security'
          }, {
            id: 'notifications',
            label: 'Уведомления',
            to: '/settings/notifications'
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
      <div class="p-8 bg-slate-50 min-h-screen">
        <h1 class="text-2xl font-bold mb-6">Меню внутри карточки</h1>
        
        <div class="grid grid-cols-3 gap-6">
          <!-- Меню в карточке -->
          <DXCard class="col-span-1">
            <DXSidebarMenu 
              title="Навигация"
              :sections="sections"
              :activeItem="activeItem"
              variant="embedded"
              :collapsible="false"
              :bordered="false"
              @item-click="handleItemClick"
            />
          </DXCard>
          
          <!-- Основной контент -->
          <div class="col-span-2">
            <DXCard>
              <h2 class="text-xl font-semibold mb-4">Контент страницы</h2>
              <p class="text-slate-600 mb-4">
                Меню находится в карточке слева. Используйте <code class="bg-slate-100 px-2 py-1 rounded">variant="embedded"</code> 
                для встраивания меню в контейнеры.
              </p>
              <div class="p-4 bg-slate-50 rounded-lg">
                <p class="text-sm font-medium text-slate-700 mb-2">Активный элемент:</p>
                <code class="text-sm bg-white px-3 py-2 rounded border border-slate-200">{{ activeItem }}</code>
              </div>
            </DXCard>
          </div>
        </div>
      </div>
    \`
  })
}`,...(ge=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:ge.source}}};var De,Ce,ye;A.parameters={...A.parameters,docs:{...(De=A.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSidebarMenu
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
          id: 'analytics',
          label: 'Аналитика',
          icon: ChartBarIcon,
          to: '/analytics'
        }, {
          id: 'users',
          label: 'Пользователи',
          icon: UsersIcon,
          to: '/users'
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
      <div class="h-screen flex">
        <DXSidebarMenu 
          :sections="sections"
          :activeItem="activeItem"
          :showHeader="false"
          @item-click="handleItemClick"
        />
        <div class="flex-1 p-8">
          <h2 class="text-2xl font-bold">Sidebar без header</h2>
        </div>
      </div>
    \`
  })
}`,...(ye=(Ce=A.parameters)==null?void 0:Ce.docs)==null?void 0:ye.source}}};var Be,Ee,Se;X.parameters={...X.parameters,docs:{...(Be=X.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSidebarMenu
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
          id: 'analytics',
          label: 'Аналитика',
          icon: ChartBarIcon,
          to: '/analytics'
        }, {
          id: 'users',
          label: 'Пользователи',
          icon: UsersIcon,
          to: '/users'
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
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Компактный"
          :sections="sections"
          :activeItem="activeItem"
          headerSize="sm"
          @item-click="handleItemClick"
        />
        <div class="flex-1 p-8">
          <h2 class="text-2xl font-bold">Маленький header (sm)</h2>
        </div>
      </div>
    \`
  })
}`,...(Se=(Ee=X.parameters)==null?void 0:Ee.docs)==null?void 0:Se.source}}};var ke,Ae,Xe;w.parameters={...w.parameters,docs:{...(ke=w.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSidebarMenu
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
          id: 'analytics',
          label: 'Аналитика',
          icon: ChartBarIcon,
          to: '/analytics'
        }, {
          id: 'users',
          label: 'Пользователи',
          icon: UsersIcon,
          to: '/users'
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
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Большой заголовок"
          :sections="sections"
          :activeItem="activeItem"
          headerSize="lg"
          @item-click="handleItemClick"
        />
        <div class="flex-1 p-8">
          <h2 class="text-2xl font-bold">Большой header (lg)</h2>
        </div>
      </div>
    \`
  })
}`,...(Xe=(Ae=w.parameters)==null?void 0:Ae.docs)==null?void 0:Xe.source}}};var we,Fe,Me;F.parameters={...F.parameters,docs:{...(we=F.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSidebarMenu
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
          id: 'analytics',
          label: 'Аналитика',
          icon: ChartBarIcon,
          to: '/analytics'
        }, {
          id: 'users',
          label: 'Пользователи',
          icon: UsersIcon,
          to: '/users'
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
      <div class="h-screen flex">
        <DXSidebarMenu 
          :sections="sections"
          :activeItem="activeItem"
          :collapsible="false"
          @item-click="handleItemClick"
        />
        <div class="flex-1 p-8">
          <h2 class="text-2xl font-bold">Header скрывается автоматически</h2>
          <p class="text-slate-600 mt-2">Нет title, слота header и collapsible=false</p>
        </div>
      </div>
    \`
  })
}`,...(Me=(Fe=F.parameters)==null?void 0:Fe.docs)==null?void 0:Me.source}}};const Yn=["Default","WithSearch","Compact","SimpleExample","WithBadges","WithSubmenu","WithCustomHeader","EcommerceExample","InsideCard","NoHeader","SmallHeader","LargeHeader","AutoHideHeader"];export{F as AutoHideHeader,D as Compact,I as Default,S as EcommerceExample,k as InsideCard,w as LargeHeader,A as NoHeader,C as SimpleExample,X as SmallHeader,y as WithBadges,E as WithCustomHeader,g as WithSearch,B as WithSubmenu,Yn as __namedExportsOrder,Kn as default};
