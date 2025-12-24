import{r as L,c as n,s as xe,w as Se,a as D,o as p,p as y,b as i,q as s,g,d as Ae,D as f,F as Ee,m as He}from"./vue.esm-bundler-C1fUoNF-.js";import{u as c}from"./useClassComposition-Dym2pzZ_.js";import{u as X}from"./useSpacing-BOHUzi8w.js";import{u as Me}from"./DXIconWrapper-Dj2l5Guj.js";import{_ as Le}from"./DXBackdrop-D0xxNXxX.js";import{_ as r}from"./DXHeaderBar-2R9DY9NG.js";import{D as l}from"./DXSidebarMenu-Bm0eZ8JR.js";import{_ as o}from"./DXContainer-DdAaCCrN.js";import{_ as Te}from"./DXLink-BApoi3ng.js";import{_ as me}from"./DXButton-DzgLKRkE.js";import{_ as Fe}from"./DXAvatar-CBvTh_o7.js";import{D as we}from"./DXDropdown-DAfwPhYF.js";import{_ as ze}from"./DXInput-BG2R0LGs.js";import{_ as ke}from"./DXIcon-Bc0cQL8C.js";import{D as Pe}from"./DXTabs-aO3r3RLy.js";import"./DXHeading-S6mljWwV.js";import"./DXText-Bu-Qlv6N.js";import{r as Ie}from"./BellIcon-Dyw4foDT.js";import{r as Ve}from"./MagnifyingGlassIcon-DKNfedfR.js";import"./DXFlex-wmS4uXZI.js";import"./useSize-DIMNv1Ms.js";import"./DXBox-BETOFdSU.js";import"./DXStack-D6-bNsWk.js";import"./DXImage-0wzmLVnc.js";import"./DXObserver-BdOJti0k.js";import"./PhotoIcon-Bus_5N6F.js";import"./DXNav-rdhJaqaA.js";import"./DXAnimatePresence-DTb5a1uI.js";import"./useAnimation-ByVAdqmf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./XMarkIcon-DTqRFgaM.js";import"./DXSidebarMenuItem-DeeXgzQK.js";import"./DXBadge-Cnl9-G8k.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./DXDropdownItem-sgbg46Q-.js";import"./ChevronRightIcon-i770bDiF.js";import"./ChevronDownIcon-DF-4rgxU.js";import"./DXDivider-Cu8D1wP6.js";import"./ChevronLeftIcon-DZ_29e3J.js";import"./DXFormLabel-DO2rZe0p.js";import"./ExclamationCircleIcon-4GpTxUBf.js";const $e={key:0,class:"w-px bg-slate-200 flex-shrink-0"},u={__name:"DXAppLayout",props:{variant:{type:String,default:"dashboard",validator:t=>["dashboard","content","minimal","split","tabbed"].includes(t)},sidebarMode:{type:String,default:"static",validator:t=>["overlay","push","static"].includes(t)},sidebarCollapsed:{type:Boolean,default:!1},sidebarWidth:{type:Number,default:256},sidebarCollapsedWidth:{type:Number,default:64},showSidebarOnMobile:{type:Boolean,default:!1},backdropBlur:{type:String,default:"sm",validator:t=>["none","sm","md","lg","xl"].includes(t)},headerPadding:{type:String,default:""},contentPadding:{type:String,default:""},sidebarPadding:{type:String,default:""},footerPadding:{type:String,default:""}},emits:["sidebar-toggle","sidebar-collapse"],setup(t,{emit:m}){const e=t,F=m,w=L(!1),De=n(()=>Me({component:"DXAppLayout",variant:e.variant,sidebarMode:e.sidebarMode,sidebarCollapsed:e.sidebarCollapsed}));xe(()=>{typeof window<"u"&&(w.value=!!(document.querySelector(".docs-story")||document.querySelector("[data-storybook-docs]")||document.querySelector(".sbdocs")||window.location.pathname.includes("/docs/")))});const z=n(()=>w.value?!1:e.sidebarMode==="overlay"&&!e.sidebarCollapsed),be=n(()=>c("flex flex-col h-screen w-full bg-slate-50",{"bg-white":e.variant==="content","bg-slate-50":e.variant==="minimal"})),ge=n(()=>{const a=e.headerPadding?X(e.headerPadding,"padding"):null;return c("flex-shrink-0 z-30",a)}),Xe=n(()=>{const a=e.sidebarPadding?X(e.sidebarPadding,"padding"):null;return c("flex-shrink-0 bg-white border-r border-slate-200 transition-all duration-300 z-20",a,{"fixed inset-y-0 left-0":e.sidebarMode==="overlay",relative:e.sidebarMode==="push",relative:e.sidebarMode==="static","hidden md:flex":!e.showSidebarOnMobile&&e.sidebarMode!=="overlay","md:flex":e.showSidebarOnMobile||e.sidebarMode==="overlay",hidden:(e.variant==="content"||e.variant==="minimal")&&e.sidebarMode!=="overlay","md:hidden":e.variant==="content"&&e.sidebarMode==="overlay"})}),ye=n(()=>{const a=e.sidebarCollapsed?e.sidebarCollapsedWidth:e.sidebarWidth;return{width:`${a}px`,minWidth:`${a}px`,maxWidth:`${a}px`}}),fe=n(()=>c("flex flex-1 overflow-hidden",{"flex-row":e.variant==="split"})),ve=n(()=>{const a=e.contentPadding?X(e.contentPadding,"padding"):null;return c("flex-1 overflow-y-auto",a,{"transition-all duration-300":e.sidebarMode==="push","max-w-full":e.variant==="content"})}),k=n(()=>{const a=e.contentPadding?X(e.contentPadding,"padding"):null;return c("flex-1 overflow-y-auto",a)}),P=n(()=>({minWidth:0})),he=n(()=>e.sidebarMode==="push"&&!e.sidebarCollapsed?{marginLeft:`${e.sidebarWidth}px`}:e.sidebarMode==="push"&&e.sidebarCollapsed?{marginLeft:`${e.sidebarCollapsedWidth}px`}:{}),Ce=n(()=>{const a=e.footerPadding?X(e.footerPadding,"padding"):null;return c("flex-shrink-0",a)}),T=n(()=>c(X(e.contentPadding||"md","padding")));function Be(){e.sidebarMode==="overlay"&&F("sidebar-toggle",!1)}return Se(()=>e.sidebarCollapsed,a=>{F("sidebar-collapse",a)}),(a,b)=>(p(),D("div",He({class:be.value},De.value),[a.$slots.header?(p(),D("header",{key:0,class:s(ge.value)},[g(a.$slots,"header")],2)):y("",!0),i("div",{class:s(fe.value)},[a.$slots.sidebar&&t.variant!=="minimal"?(p(),D("aside",{key:0,class:s(Xe.value),style:f(ye.value)},[g(a.$slots,"sidebar")],6)):y("",!0),z.value?(p(),Ae(Le,{key:1,show:z.value,blur:t.backdropBlur,"z-index":"20",dismissible:!0,onClose:Be},null,8,["show","blur"])):y("",!0),t.variant==="split"?(p(),D(Ee,{key:2},[i("main",{class:s(k.value),style:f(P.value)},[g(a.$slots,"content-left",{},()=>[i("div",{class:s(T.value)},[...b[0]||(b[0]=[i("p",{class:"text-slate-500"},"Левая панель не указана",-1)])],2)])],6),a.$slots["content-left"]&&a.$slots["content-right"]?(p(),D("div",$e)):y("",!0),i("main",{class:s(k.value),style:f(P.value)},[g(a.$slots,"content-right",{},()=>[i("div",{class:s(T.value)},[...b[1]||(b[1]=[i("p",{class:"text-slate-500"},"Правая панель не указана",-1)])],2)])],6)],64)):(p(),D("main",{key:3,class:s(ve.value),style:f(he.value)},[g(a.$slots,"content",{},()=>[i("div",{class:s(T.value)},[...b[2]||(b[2]=[i("p",{class:"text-slate-500"},"Контент не указан",-1)])],2)])],6))],2),a.$slots.footer&&t.variant!=="minimal"?(p(),D("footer",{key:1,class:s(Ce.value)},[g(a.$slots,"footer")],2)):y("",!0)],16))}};u.__docgenInfo={exportName:"default",displayName:"DXAppLayout",description:"",tags:{},props:[{name:"variant",description:"Вариант layout для разных задач приложения.\n- `dashboard`: Для дашбордов с множеством виджетов (полнофункциональный header и sidebar)\n- `content`: Для блогов, статей, документации (минималистичный header, широкий контент)\n- `minimal`: Для простых приложений (только header и content, без sidebar и footer)\n- `split`: Для приложений с двумя панелями (редакторы, сравнение)\n- `tabbed`: Для приложений с вкладками (header с табами, переключаемый контент)",tags:{type:[{title:"type",type:{name:"'dashboard'|'content'|'minimal'|'split'|'tabbed'"}}],default:[{description:"'dashboard'",title:"default"}],category:[{description:"Layout",title:"category"}]},values:["dashboard","content","minimal","split","tabbed"],type:{name:"string"},defaultValue:{func:!1,value:'"dashboard"'}},{name:"sidebarMode",description:"Режим отображения сайдбара.\n- `overlay`: Сайдбар накладывается поверх контента с backdrop\n- `push`: Сайдбар сдвигает контент вправо\n- `static`: Сайдбар в обычном потоке документа",tags:{type:[{title:"type",type:{name:"'overlay'|'push'|'static'"}}],default:[{description:"'static'",title:"default"}],category:[{description:"Sidebar",title:"category"}]},values:["overlay","push","static"],type:{name:"string"},defaultValue:{func:!1,value:'"static"'}},{name:"sidebarCollapsed",description:"Свернут ли сайдбар. В свернутом состоянии отображаются только иконки.",tags:{type:[{title:"type",type:{name:"boolean"}}],default:[{description:"false",title:"default"}],category:[{description:"Sidebar",title:"category"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"sidebarWidth",description:"Ширина сайдбара в пикселях, когда он развернут.",tags:{type:[{title:"type",type:{name:"number"}}],default:[{description:"256",title:"default"}],category:[{description:"Sidebar",title:"category"}]},type:{name:"number"},defaultValue:{func:!1,value:"256"}},{name:"sidebarCollapsedWidth",description:"Ширина сайдбара в пикселях, когда он свернут.",tags:{type:[{title:"type",type:{name:"number"}}],default:[{description:"64",title:"default"}],category:[{description:"Sidebar",title:"category"}]},type:{name:"number"},defaultValue:{func:!1,value:"64"}},{name:"showSidebarOnMobile",description:`Показывать сайдбар на мобильных устройствах.
По умолчанию сайдбар скрыт на мобильных (кроме overlay режима).`,tags:{type:[{title:"type",type:{name:"boolean"}}],default:[{description:"false",title:"default"}],category:[{description:"Sidebar",title:"category"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"backdropBlur",description:`Уровень размытия backdrop для overlay режима.
Используется только когда sidebarMode === "overlay".`,tags:{type:[{title:"type",type:{name:"'none'|'sm'|'md'|'lg'|'xl'"}}],default:[{description:"'sm'",title:"default"}],category:[{description:"Sidebar",title:"category"}]},values:["none","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:'"sm"'}},{name:"headerPadding",description:"Отступы header секции. Использует систему spacing из useSpacing composable.",tags:{type:[{title:"type",type:{name:"'none'|'xs'|'sm'|'md'|'lg'|'xl'"}}],default:[{description:"''",title:"default"}],category:[{description:"Spacing",title:"category"}]},values:["none","xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"contentPadding",description:"Отступы контентной области. Использует систему spacing из useSpacing composable.",tags:{type:[{title:"type",type:{name:"'none'|'xs'|'sm'|'md'|'lg'|'xl'"}}],default:[{description:"''",title:"default"}],category:[{description:"Spacing",title:"category"}]},values:["none","xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"sidebarPadding",description:"Отступы sidebar секции. Использует систему spacing из useSpacing composable.",tags:{type:[{title:"type",type:{name:"'none'|'xs'|'sm'|'md'|'lg'|'xl'"}}],default:[{description:"''",title:"default"}],category:[{description:"Spacing",title:"category"}]},values:["none","xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"footerPadding",description:"Отступы footer секции. Использует систему spacing из useSpacing composable.",tags:{type:[{title:"type",type:{name:"'none'|'xs'|'sm'|'md'|'lg'|'xl'"}}],default:[{description:"''",title:"default"}],category:[{description:"Spacing",title:"category"}]},values:["none","xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"sidebar-toggle"},{name:"sidebar-collapse"}],slots:[{name:"header"},{name:"sidebar"},{name:"content-left"},{name:"content-right"},{name:"content"},{name:"footer"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXAppLayout/DXAppLayout.vue"]};const Mt={title:"Organisms/DXAppLayout",component:u,tags:["autodocs","category:navigation"],parameters:{layout:"fullscreen",docs:{inlineStories:!1,iframeHeight:800,description:{component:`
# DXAppLayout

Основной макет приложения, объединяющий header, sidebar, content и footer с поддержкой различных вариантов для разных задач.

## Назначение

DXAppLayout предоставляет стандартизированную структуру для приложений с:
- Верхней панелью (header)
- Боковой навигацией (sidebar)
- Основным контентом (content)
- Нижним колонтитулом (footer)

## Варианты Layout

### Dashboard (по умолчанию)
Для дашбордов с множеством виджетов. Полнофункциональный header и sidebar, grid-based контентная область.

### Content-Focused
Для блогов, статей, документации. Минималистичный header, широкий контент без sidebar (или скрываемый), фокус на читаемости.

### Minimal
Для простых приложений. Только header и content, без sidebar и footer. Максимальная простота.

### Split
Для приложений с двумя панелями (редакторы, сравнение). Два контентных слота (content-left, content-right) с разделителем.

### Tabbed
Для приложений с вкладками. Header с табами (используется DXTabs), контент переключается через табы.

## Архитектура

### Использует
- \`useClassComposition\` - для композиции классов
- \`useSpacing\` - для управления отступами
- \`useCustomDataAttributes\` - для data-атрибутов
- \`DXHeaderBar\` - для верхней панели
- \`DXSidebarMenu\` - для боковой навигации
- \`DXContainer\` - для контентной области
- \`DXBackdrop\` - для overlay режима сайдбара

### Используется в
- Основной макет всех страниц приложения
- Админ-панели и дашборды
- Приложения с боковой навигацией
- Блоги и документация
- Редакторы и инструменты разработки

## Внутренняя логика

### Режимы сайдбара
- **overlay**: Сайдбар накладывается поверх контента с backdrop
- **push**: Сайдбар сдвигает контент вправо
- **static**: Сайдбар в обычном потоке документа

### Адаптивность
- На мобильных устройствах сайдбар скрывается (кроме overlay режима)
- В overlay режиме сайдбар открывается поверх контента
- Использует \`useSpacing\` для адаптивных отступов

### Управление состоянием
- \`sidebarCollapsed\` - управляет свернутым состоянием
- \`sidebarMode\` - определяет режим отображения
- \`variant\` - определяет вариант layout
- События \`sidebar-toggle\` и \`sidebar-collapse\` для синхронизации состояния

## Особенности

### Slots
- \`header\` - верхняя панель (обычно DXHeaderBar)
- \`sidebar\` - боковая панель (обычно DXSidebarMenu)
- \`content\` - основной контент страницы (для всех вариантов кроме split)
- \`content-left\` - левая панель (только для split варианта)
- \`content-right\` - правая панель (только для split варианта)
- \`footer\` - нижний колонтитул (скрыт для minimal варианта)

### Семантическая структура
Использует семантические HTML теги: \`<header>\`, \`<aside>\`, \`<main>\`, \`<footer>\`.

### Spacing Props
Все отступы управляются через props (\`headerPadding\`, \`contentPadding\`, \`sidebarPadding\`, \`footerPadding\`) с использованием \`useSpacing\` composable.
        `}}},argTypes:{variant:{control:"select",options:["dashboard","content","minimal","split","tabbed"],description:"Вариант layout для разных задач приложения.",table:{type:{summary:"string"},defaultValue:{summary:"dashboard"},category:"Layout"}},sidebarMode:{control:"select",options:["overlay","push","static"],description:"Режим отображения сайдбара: overlay (поверх контента), push (сдвигает контент), static (в потоке).",table:{type:{summary:"string"},defaultValue:{summary:"static"},category:"Sidebar"}},sidebarCollapsed:{control:"boolean",description:"Свернут ли сайдбар.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Sidebar"}},sidebarWidth:{control:"number",description:"Ширина сайдбара в пикселях (когда развернут).",table:{type:{summary:"number"},defaultValue:{summary:"256"},category:"Sidebar"}},sidebarCollapsedWidth:{control:"number",description:"Ширина сайдбара в пикселях (когда свернут).",table:{type:{summary:"number"},defaultValue:{summary:"64"},category:"Sidebar"}},showSidebarOnMobile:{control:"boolean",description:"Показывать сайдбар на мобильных устройствах.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Sidebar"}},backdropBlur:{control:"select",options:["none","sm","md","lg","xl"],description:"Уровень размытия backdrop для overlay режима.",table:{type:{summary:"string"},defaultValue:{summary:"sm"},category:"Sidebar"}},headerPadding:{control:"select",options:["","none","xs","sm","md","lg","xl"],description:"Отступы header секции.",table:{type:{summary:"string"},defaultValue:{summary:""},category:"Spacing"}},contentPadding:{control:"select",options:["","none","xs","sm","md","lg","xl"],description:"Отступы контентной области.",table:{type:{summary:"string"},defaultValue:{summary:""},category:"Spacing"}},sidebarPadding:{control:"select",options:["","none","xs","sm","md","lg","xl"],description:"Отступы sidebar секции.",table:{type:{summary:"string"},defaultValue:{summary:""},category:"Spacing"}},footerPadding:{control:"select",options:["","none","xs","sm","md","lg","xl"],description:"Отступы footer секции.",table:{type:{summary:"string"},defaultValue:{summary:""},category:"Spacing"}}}},d=[{title:"Основное",items:[{id:1,label:"Главная",href:"/",icon:"HomeIcon"},{id:2,label:"Проекты",href:"/projects",icon:"FolderIcon"},{id:3,label:"Задачи",href:"/tasks",icon:"CheckIcon"}]},{title:"Настройки",items:[{id:4,label:"Профиль",href:"/profile",icon:"UserIcon"},{id:5,label:"Настройки",href:"/settings",icon:"CogIcon"}]}],v={args:{variant:"dashboard",sidebarMode:"static",sidebarCollapsed:!1},parameters:{docs:{inlineStories:!1,iframeHeight:800,description:{story:"Базовый layout с header, sidebar и content в static режиме."}}},render:t=>({components:{DXAppLayout:u,DXHeaderBar:r,DXSidebarMenu:l,DXContainer:o},setup(){return{args:t,menuSections:d}},template:`
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="My Application" />
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Добро пожаловать</DXHeading>
            <DXText tag="p" color="muted">Это основной контент страницы.</DXText>
          </DXContainer>
        </template>
      </DXAppLayout>
    `})},h={args:{sidebarMode:"static",sidebarCollapsed:!1},parameters:{docs:{description:{story:"Layout с полнофункциональным header (навигация, поиск, действия)."}}},render:t=>({components:{DXAppLayout:u,DXHeaderBar:r,DXSidebarMenu:l,DXContainer:o,DXLink:Te,DXInput:ze,DXButton:me,DXAvatar:Fe,DXDropdown:we,DXIcon:ke},setup(){const m=L("");return{args:t,menuSections:d,searchQuery:m,MagnifyingGlassIcon:Ve,BellIcon:Ie}},template:`
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="My Application">
            <template #navigation>
              <DXLink href="/dashboard" variant="ghost">Дашборд</DXLink>
              <DXLink href="/projects" variant="ghost">Проекты</DXLink>
            </template>
            <template #search>
              <DXInput
                v-model="searchQuery"
                placeholder="Поиск..."
                size="sm"
              >
                <template #prefix>
                  <DXIcon :icon="MagnifyingGlassIcon" size="sm" class="text-slate-400" />
                </template>
              </DXInput>
            </template>
            <template #actions>
              <DXButton variant="ghost" size="sm">
                <template #icon>
                  <DXIcon :icon="BellIcon" size="md" />
                </template>
              </DXButton>
              <DXDropdown>
                <template #trigger>
                  <DXAvatar src="https://via.placeholder.com/40x40" size="sm" />
                </template>
                <div class="p-2">
                  <div class="px-3 py-2 text-sm text-slate-700">Профиль</div>
                  <div class="px-3 py-2 text-sm text-slate-700">Настройки</div>
                  <div class="px-3 py-2 text-sm text-slate-700">Выйти</div>
                </div>
              </DXDropdown>
            </template>
          </DXHeaderBar>
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Дашборд</DXHeading>
            <DXText tag="p" color="muted">Основной контент страницы.</DXText>
          </DXContainer>
        </template>
      </DXAppLayout>
    `})},C={args:{sidebarMode:"overlay",sidebarCollapsed:!1},parameters:{docs:{inlineStories:!1,iframeHeight:800,description:{story:"Layout с overlay режимом сайдбара. Сайдбар накладывается поверх контента с backdrop."}}},render:t=>({components:{DXAppLayout:u,DXHeaderBar:r,DXSidebarMenu:l,DXContainer:o},setup(){return{args:t,menuSections:d}},template:`
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="My Application" />
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Overlay Mode</DXHeading>
            <DXText tag="p" color="muted">Сайдбар накладывается поверх контента.</DXText>
          </DXContainer>
        </template>
      </DXAppLayout>
    `})},B={args:{sidebarMode:"push",sidebarCollapsed:!1},parameters:{docs:{description:{story:"Layout с push режимом сайдбара. Сайдбар сдвигает контент вправо."}}},render:t=>({components:{DXAppLayout:u,DXHeaderBar:r,DXSidebarMenu:l,DXContainer:o},setup(){return{args:t,menuSections:d}},template:`
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="My Application" />
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Push Mode</DXHeading>
            <DXText tag="p" color="muted">Сайдбар сдвигает контент вправо.</DXText>
          </DXContainer>
        </template>
      </DXAppLayout>
    `})},x={args:{sidebarMode:"static",sidebarCollapsed:!1},parameters:{docs:{description:{story:"Layout с footer секцией."}}},render:t=>({components:{DXAppLayout:u,DXHeaderBar:r,DXSidebarMenu:l,DXContainer:o},setup(){return{args:t,menuSections:d}},template:`
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="My Application" />
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Контент</DXHeading>
            <DXText tag="p" color="muted">Основной контент страницы.</DXText>
          </DXContainer>
        </template>
        <template #footer>
          <footer class="bg-white border-t border-slate-200 py-4">
            <DXContainer>
              <p class="text-sm text-slate-500 text-center">© 2024 My Application. Все права защищены.</p>
            </DXContainer>
          </footer>
        </template>
      </DXAppLayout>
    `})},S={args:{sidebarMode:"static",sidebarCollapsed:!1},parameters:{docs:{description:{story:"Layout с коллапсируемым сайдбаром. Используйте контролы для переключения состояния."}}},render:t=>({components:{DXAppLayout:u,DXHeaderBar:r,DXSidebarMenu:l,DXContainer:o,DXButton:me},setup(){const m=L(!1);return{args:t,menuSections:d,collapsed:m}},template:`
      <DXAppLayout v-bind="args" :sidebar-collapsed="collapsed">
        <template #header>
          <DXHeaderBar app-name="My Application">
            <template #actions>
              <DXButton @click="collapsed = !collapsed" variant="ghost" size="sm">
                {{ collapsed ? 'Развернуть' : 'Свернуть' }}
              </DXButton>
            </template>
          </DXHeaderBar>
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" :compact="collapsed" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Коллапсируемый сайдбар</DXHeading>
            <DXText tag="p" color="muted">Используйте кнопку в header для переключения состояния сайдбара.</DXText>
          </DXContainer>
        </template>
      </DXAppLayout>
    `})},A={args:{variant:"content",sidebarMode:"overlay",sidebarCollapsed:!0,contentPadding:"lg"},parameters:{docs:{inlineStories:!1,iframeHeight:800,description:{story:"Content-focused вариант для блогов, статей и документации. Минималистичный header, широкий контент, sidebar скрыт по умолчанию."}}},render:t=>({components:{DXAppLayout:u,DXHeaderBar:r,DXSidebarMenu:l,DXContainer:o},setup(){return{args:t,menuSections:d}},template:`
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="My Blog" />
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer size="lg">
            <article class="prose prose-slate max-w-none">
              <h1>Заголовок статьи</h1>
              <p>Это пример content-focused layout для блогов и документации. Контент имеет максимальную ширину для лучшей читаемости.</p>
              <p>Sidebar скрыт по умолчанию и может быть открыт через overlay режим.</p>
            </article>
          </DXContainer>
        </template>
      </DXAppLayout>
    `})},E={args:{variant:"minimal",contentPadding:"md"},parameters:{docs:{inlineStories:!1,iframeHeight:800,description:{story:"Minimal вариант для простых приложений. Только header и content, без sidebar и footer."}}},render:t=>({components:{DXAppLayout:u,DXHeaderBar:r,DXContainer:o},setup(){return{args:t}},template:`
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="Simple App" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Простое приложение</DXHeading>
            <DXText tag="p" color="muted">Это минималистичный layout без sidebar и footer.</DXText>
          </DXContainer>
        </template>
      </DXAppLayout>
    `})},H={args:{variant:"split",sidebarMode:"static",sidebarCollapsed:!1,contentPadding:"md"},parameters:{docs:{inlineStories:!1,iframeHeight:800,description:{story:"Split вариант для приложений с двумя панелями (редакторы, сравнение). Использует слоты content-left и content-right."}}},render:t=>({components:{DXAppLayout:u,DXHeaderBar:r,DXSidebarMenu:l,DXContainer:o},setup(){return{args:t,menuSections:d}},template:`
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="Code Editor" />
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content-left>
          <div class="h-full bg-slate-50 p-4">
            <DXHeading level="2" size="lg" weight="semibold" class="mb-2">Левая панель</DXHeading>
            <DXText tag="p" size="sm" color="muted">Здесь может быть редактор кода или файловый менеджер.</DXText>
          </div>
        </template>
        <template #content-right>
          <div class="h-full bg-white p-4">
            <DXHeading level="2" size="lg" weight="semibold" class="mb-2">Правая панель</DXHeading>
            <DXText tag="p" size="sm" color="muted">Здесь может быть предпросмотр или результат.</DXText>
          </div>
        </template>
      </DXAppLayout>
    `})},M={args:{variant:"tabbed",sidebarMode:"static",sidebarCollapsed:!1},parameters:{docs:{inlineStories:!1,iframeHeight:800,description:{story:"Tabbed вариант для приложений с вкладками. Header содержит табы (используется DXTabs), контент переключается через табы."}}},render:t=>({components:{DXAppLayout:u,DXHeaderBar:r,DXSidebarMenu:l,DXContainer:o,DXTabs:Pe},setup(){const m=L("dashboard");return{args:t,menuSections:d,activeTab:m,tabs:[{value:"dashboard",label:"Дашборд"},{value:"analytics",label:"Аналитика"},{value:"settings",label:"Настройки"}]}},template:`
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="Dashboard">
            <template #navigation>
              <DXTabs v-model="activeTab" :tabs="tabs" variant="tabs-top" />
            </template>
          </DXHeaderBar>
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer>
            <div v-if="activeTab === 'dashboard'">
              <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Дашборд</DXHeading>
              <DXText tag="p" color="muted">Контент дашборда.</DXText>
            </div>
            <div v-else-if="activeTab === 'analytics'">
              <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Аналитика</DXHeading>
              <DXText tag="p" color="muted">Контент аналитики.</DXText>
            </div>
            <div v-else-if="activeTab === 'settings'">
              <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Настройки</DXHeading>
              <DXText tag="p" color="muted">Контент настроек.</DXText>
            </div>
          </DXContainer>
        </template>
      </DXAppLayout>
    `})};var I,V,$;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'dashboard',
    sidebarMode: 'static',
    sidebarCollapsed: false
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 800,
      description: {
        story: 'Базовый layout с header, sidebar и content в static режиме.'
      }
    }
  },
  render: args => ({
    components: {
      DXAppLayout,
      DXHeaderBar,
      DXSidebarMenu,
      DXContainer
    },
    setup() {
      return {
        args,
        menuSections
      };
    },
    template: \`
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="My Application" />
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Добро пожаловать</DXHeading>
            <DXText tag="p" color="muted">Это основной контент страницы.</DXText>
          </DXContainer>
        </template>
      </DXAppLayout>
    \`
  })
}`,...($=(V=v.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var W,_,O;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    sidebarMode: 'static',
    sidebarCollapsed: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Layout с полнофункциональным header (навигация, поиск, действия).'
      }
    }
  },
  render: args => ({
    components: {
      DXAppLayout,
      DXHeaderBar,
      DXSidebarMenu,
      DXContainer,
      DXLink,
      DXInput,
      DXButton,
      DXAvatar,
      DXDropdown,
      DXIcon
    },
    setup() {
      const searchQuery = ref('');
      return {
        args,
        menuSections,
        searchQuery,
        MagnifyingGlassIcon,
        BellIcon
      };
    },
    template: \`
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="My Application">
            <template #navigation>
              <DXLink href="/dashboard" variant="ghost">Дашборд</DXLink>
              <DXLink href="/projects" variant="ghost">Проекты</DXLink>
            </template>
            <template #search>
              <DXInput
                v-model="searchQuery"
                placeholder="Поиск..."
                size="sm"
              >
                <template #prefix>
                  <DXIcon :icon="MagnifyingGlassIcon" size="sm" class="text-slate-400" />
                </template>
              </DXInput>
            </template>
            <template #actions>
              <DXButton variant="ghost" size="sm">
                <template #icon>
                  <DXIcon :icon="BellIcon" size="md" />
                </template>
              </DXButton>
              <DXDropdown>
                <template #trigger>
                  <DXAvatar src="https://via.placeholder.com/40x40" size="sm" />
                </template>
                <div class="p-2">
                  <div class="px-3 py-2 text-sm text-slate-700">Профиль</div>
                  <div class="px-3 py-2 text-sm text-slate-700">Настройки</div>
                  <div class="px-3 py-2 text-sm text-slate-700">Выйти</div>
                </div>
              </DXDropdown>
            </template>
          </DXHeaderBar>
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Дашборд</DXHeading>
            <DXText tag="p" color="muted">Основной контент страницы.</DXText>
          </DXContainer>
        </template>
      </DXAppLayout>
    \`
  })
}`,...(O=(_=h.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var N,G,Q;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    sidebarMode: 'overlay',
    sidebarCollapsed: false
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 800,
      description: {
        story: 'Layout с overlay режимом сайдбара. Сайдбар накладывается поверх контента с backdrop.'
      }
    }
  },
  render: args => ({
    components: {
      DXAppLayout,
      DXHeaderBar,
      DXSidebarMenu,
      DXContainer
    },
    setup() {
      return {
        args,
        menuSections
      };
    },
    template: \`
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="My Application" />
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Overlay Mode</DXHeading>
            <DXText tag="p" color="muted">Сайдбар накладывается поверх контента.</DXText>
          </DXContainer>
        </template>
      </DXAppLayout>
    \`
  })
}`,...(Q=(G=C.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var j,q,U;B.parameters={...B.parameters,docs:{...(j=B.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    sidebarMode: 'push',
    sidebarCollapsed: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Layout с push режимом сайдбара. Сайдбар сдвигает контент вправо.'
      }
    }
  },
  render: args => ({
    components: {
      DXAppLayout,
      DXHeaderBar,
      DXSidebarMenu,
      DXContainer
    },
    setup() {
      return {
        args,
        menuSections
      };
    },
    template: \`
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="My Application" />
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Push Mode</DXHeading>
            <DXText tag="p" color="muted">Сайдбар сдвигает контент вправо.</DXText>
          </DXContainer>
        </template>
      </DXAppLayout>
    \`
  })
}`,...(U=(q=B.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var J,K,R;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    sidebarMode: 'static',
    sidebarCollapsed: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Layout с footer секцией.'
      }
    }
  },
  render: args => ({
    components: {
      DXAppLayout,
      DXHeaderBar,
      DXSidebarMenu,
      DXContainer
    },
    setup() {
      return {
        args,
        menuSections
      };
    },
    template: \`
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="My Application" />
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Контент</DXHeading>
            <DXText tag="p" color="muted">Основной контент страницы.</DXText>
          </DXContainer>
        </template>
        <template #footer>
          <footer class="bg-white border-t border-slate-200 py-4">
            <DXContainer>
              <p class="text-sm text-slate-500 text-center">© 2024 My Application. Все права защищены.</p>
            </DXContainer>
          </footer>
        </template>
      </DXAppLayout>
    \`
  })
}`,...(R=(K=x.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var Y,Z,ee;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    sidebarMode: 'static',
    sidebarCollapsed: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Layout с коллапсируемым сайдбаром. Используйте контролы для переключения состояния.'
      }
    }
  },
  render: args => ({
    components: {
      DXAppLayout,
      DXHeaderBar,
      DXSidebarMenu,
      DXContainer,
      DXButton
    },
    setup() {
      const collapsed = ref(false);
      return {
        args,
        menuSections,
        collapsed
      };
    },
    template: \`
      <DXAppLayout v-bind="args" :sidebar-collapsed="collapsed">
        <template #header>
          <DXHeaderBar app-name="My Application">
            <template #actions>
              <DXButton @click="collapsed = !collapsed" variant="ghost" size="sm">
                {{ collapsed ? 'Развернуть' : 'Свернуть' }}
              </DXButton>
            </template>
          </DXHeaderBar>
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" :compact="collapsed" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Коллапсируемый сайдбар</DXHeading>
            <DXText tag="p" color="muted">Используйте кнопку в header для переключения состояния сайдбара.</DXText>
          </DXContainer>
        </template>
      </DXAppLayout>
    \`
  })
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    variant: 'content',
    sidebarMode: 'overlay',
    sidebarCollapsed: true,
    contentPadding: 'lg'
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 800,
      description: {
        story: 'Content-focused вариант для блогов, статей и документации. Минималистичный header, широкий контент, sidebar скрыт по умолчанию.'
      }
    }
  },
  render: args => ({
    components: {
      DXAppLayout,
      DXHeaderBar,
      DXSidebarMenu,
      DXContainer
    },
    setup() {
      return {
        args,
        menuSections
      };
    },
    template: \`
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="My Blog" />
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer size="lg">
            <article class="prose prose-slate max-w-none">
              <h1>Заголовок статьи</h1>
              <p>Это пример content-focused layout для блогов и документации. Контент имеет максимальную ширину для лучшей читаемости.</p>
              <p>Sidebar скрыт по умолчанию и может быть открыт через overlay режим.</p>
            </article>
          </DXContainer>
        </template>
      </DXAppLayout>
    \`
  })
}`,...(ne=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ue,se,re;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    variant: 'minimal',
    contentPadding: 'md'
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 800,
      description: {
        story: 'Minimal вариант для простых приложений. Только header и content, без sidebar и footer.'
      }
    }
  },
  render: args => ({
    components: {
      DXAppLayout,
      DXHeaderBar,
      DXContainer
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="Simple App" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Простое приложение</DXHeading>
            <DXText tag="p" color="muted">Это минималистичный layout без sidebar и footer.</DXText>
          </DXContainer>
        </template>
      </DXAppLayout>
    \`
  })
}`,...(re=(se=E.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,ie,le;H.parameters={...H.parameters,docs:{...(oe=H.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    variant: 'split',
    sidebarMode: 'static',
    sidebarCollapsed: false,
    contentPadding: 'md'
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 800,
      description: {
        story: 'Split вариант для приложений с двумя панелями (редакторы, сравнение). Использует слоты content-left и content-right.'
      }
    }
  },
  render: args => ({
    components: {
      DXAppLayout,
      DXHeaderBar,
      DXSidebarMenu,
      DXContainer
    },
    setup() {
      return {
        args,
        menuSections
      };
    },
    template: \`
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="Code Editor" />
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content-left>
          <div class="h-full bg-slate-50 p-4">
            <DXHeading level="2" size="lg" weight="semibold" class="mb-2">Левая панель</DXHeading>
            <DXText tag="p" size="sm" color="muted">Здесь может быть редактор кода или файловый менеджер.</DXText>
          </div>
        </template>
        <template #content-right>
          <div class="h-full bg-white p-4">
            <DXHeading level="2" size="lg" weight="semibold" class="mb-2">Правая панель</DXHeading>
            <DXText tag="p" size="sm" color="muted">Здесь может быть предпросмотр или результат.</DXText>
          </div>
        </template>
      </DXAppLayout>
    \`
  })
}`,...(le=(ie=H.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,pe,ce;M.parameters={...M.parameters,docs:{...(de=M.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    variant: 'tabbed',
    sidebarMode: 'static',
    sidebarCollapsed: false
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 800,
      description: {
        story: 'Tabbed вариант для приложений с вкладками. Header содержит табы (используется DXTabs), контент переключается через табы.'
      }
    }
  },
  render: args => ({
    components: {
      DXAppLayout,
      DXHeaderBar,
      DXSidebarMenu,
      DXContainer,
      DXTabs
    },
    setup() {
      const activeTab = ref('dashboard');
      const tabs = [{
        value: 'dashboard',
        label: 'Дашборд'
      }, {
        value: 'analytics',
        label: 'Аналитика'
      }, {
        value: 'settings',
        label: 'Настройки'
      }];
      return {
        args,
        menuSections,
        activeTab,
        tabs
      };
    },
    template: \`
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="Dashboard">
            <template #navigation>
              <DXTabs v-model="activeTab" :tabs="tabs" variant="tabs-top" />
            </template>
          </DXHeaderBar>
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer>
            <div v-if="activeTab === 'dashboard'">
              <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Дашборд</DXHeading>
              <DXText tag="p" color="muted">Контент дашборда.</DXText>
            </div>
            <div v-else-if="activeTab === 'analytics'">
              <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Аналитика</DXHeading>
              <DXText tag="p" color="muted">Контент аналитики.</DXText>
            </div>
            <div v-else-if="activeTab === 'settings'">
              <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Настройки</DXHeading>
              <DXText tag="p" color="muted">Контент настроек.</DXText>
            </div>
          </DXContainer>
        </template>
      </DXAppLayout>
    \`
  })
}`,...(ce=(pe=M.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};const Lt=["Default","WithFullHeader","OverlayMode","PushMode","WithFooter","CollapsibleSidebar","ContentFocused","Minimal","Split","Tabbed"];export{S as CollapsibleSidebar,A as ContentFocused,v as Default,E as Minimal,C as OverlayMode,B as PushMode,H as Split,M as Tabbed,x as WithFooter,h as WithFullHeader,Lt as __namedExportsOrder,Mt as default};
