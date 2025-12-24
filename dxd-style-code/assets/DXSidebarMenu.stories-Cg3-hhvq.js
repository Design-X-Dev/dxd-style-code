import{a as me,b as pe,o as be,r as u}from"./vue.esm-bundler-C1fUoNF-.js";import{D as s}from"./DXSidebarMenu-Bm0eZ8JR.js";import{_ as he}from"./DXButton-DzgLKRkE.js";import{_ as ve}from"./DXCard-CLY4ojX0.js";import{r as a}from"./HomeIcon-BnzVSbD9.js";import{r as i}from"./ChartBarIcon-BYW9ii54.js";import{r as o}from"./UsersIcon-DXAKJEvr.js";import{r as B}from"./DocumentTextIcon-BZT0hOe_.js";import{r as re}from"./FolderIcon-DPy9zs4e.js";import{r as E}from"./InboxIcon-BFNsOR6t.js";import{a as de,r as xe}from"./CreditCardIcon-DMq21L2i.js";import{r as C}from"./Cog6ToothIcon-B4Fko_kw.js";import{r as Ie}from"./BellIcon-Dyw4foDT.js";import{r as fe}from"./ArrowRightOnRectangleIcon-DkGdlgkI.js";import{r as ge}from"./ShoppingCartIcon-CKMnSN-v.js";import"./DXSidebarMenuItem-DeeXgzQK.js";import"./useAnimation-ByVAdqmf.js";import"./DXBadge-Cnl9-G8k.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXIcon-Bc0cQL8C.js";import"./DXDropdown-DAfwPhYF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ChevronDownIcon-DF-4rgxU.js";import"./DXDropdownItem-sgbg46Q-.js";import"./ChevronRightIcon-i770bDiF.js";import"./DXInput-BG2R0LGs.js";import"./DXFormLabel-DO2rZe0p.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./DXIconWrapper-Dj2l5Guj.js";import"./DXDivider-Cu8D1wP6.js";import"./useSpacing-BOHUzi8w.js";import"./DXHeading-S6mljWwV.js";import"./DXNav-rdhJaqaA.js";import"./ChevronLeftIcon-DZ_29e3J.js";import"./MagnifyingGlassIcon-DKNfedfR.js";function De(e,t){return be(),me("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[pe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"})])}const cn={title:"Organisms/DXSidebarMenu",component:s,tags:["autodocs","category:navigation"],parameters:{docs:{description:{component:`
# DXSidebarMenu

Компонент меню боковой панели с поддержкой секций, вложенных элементов, поиска и compact режима.

## Назначение

DXSidebarMenu предоставляет полнофункциональное меню для боковой панели с поддержкой
секций, вложенных элементов (children), иконок, badges, поиска и компактного режима.
Компонент автоматически управляет активным элементом и поддерживает роутинг.

## Архитектура

### Использует
- \`DXNav\` - для обертки навигации
- \`DXSidebarMenuItem\` - для элементов меню
- \`DXInput\` - для поиска
- \`DXIcon\` - для иконок
- \`DXDivider\` - для разделителей
- \`DXHeading\` - для заголовка
- \`useMenu\` composable - для логики меню

### Используется в
- \`DXSidebar\` - для боковой панели
- \`DXAppLayout\` - для навигации приложения
- Самостоятельные боковые меню

## Внутренняя логика

### Структура данных
Меню состоит из секций, каждая секция содержит массив элементов:
\`\`\`
[{
  title?: 'Section Title',
  items: [{
    id: 'item-id',
    label: 'Item Label',
    icon?: Icon,
    to?: '/path',
    badge?: '5',
    badgeVariant?: 'danger',
    children?: [...]
  }]
}]
\`\`\`

### Поиск
При \`searchable={true}\` и \`!compact\`:
- Отображается поисковая строка
- Фильтруются элементы меню по \`label\`
- Поиск нечувствителен к регистру

### Compact режим
При \`compact={true}\`:
- Скрывается текст, показываются только иконки
- Скрываются заголовки секций (показываются разделители)
- Скрывается поиск
- Скрывается футер
- Меню становится компактным

### Collapsible
При \`collapsible={true}\`:
- Отображается кнопка для переключения compact режима
- Кнопка автоматически позиционируется

### Активный элемент
Активный элемент определяется через:
- \`activeItem\` prop (приоритет)
- \`$route.path\` (если используется Vue Router)
- Сравнение \`to\` с текущим маршрутом

### Вложенные элементы
Элементы могут иметь \`children\` для создания вложенной структуры:
- Вложенные элементы отображаются при клике на родительский
- Поддерживается многоуровневая вложенность

## Особенности

### Слоты
- **header** - кастомный заголовок
- **footer** - кастомный футер (скрывается в compact режиме)

### Ширина
Поддерживает 4 варианта ширины:
- **sm** - маленькая
- **md** - средняя (по умолчанию)
- **lg** - большая
- **full** - на всю ширину

### Badges
Элементы могут иметь badges для отображения счетчиков:
- \`badge\` - текст badge
- \`badgeVariant\` - вариант badge (danger, info, success и т.д.)

### Роутинг
Поддерживает интеграцию с Vue Router через \`to\` prop в элементах меню.
        `}}},argTypes:{showHeader:{control:{type:"boolean"},description:"Показывать header (undefined = автоматически)"},headerSize:{control:{type:"select"},options:["sm","md","lg"]},width:{control:{type:"select"},options:["sm","md","lg","full"]}}},l={render:()=>({components:{DXSidebarMenu:s},setup(){const e=u("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:a,to:"/home",badge:"5",badgeVariant:"danger"},{id:"analytics",label:"Аналитика",icon:i,to:"/analytics"},{id:"users",label:"Пользователи",icon:o,to:"/users",badge:"12",badgeVariant:"info"}]},{title:"Контент",items:[{id:"documents",label:"Документы",icon:B,children:[{id:"all-docs",label:"Все документы",to:"/documents/all"},{id:"my-docs",label:"Мои документы",to:"/documents/my"},{id:"shared",label:"Общие",to:"/documents/shared",badge:"3"}]},{id:"folders",label:"Папки",icon:re,to:"/folders"}]}],activeItem:e,handleItemClick:n=>{console.log("Clicked:",n),e.value=n.to||n.id}}},template:`
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
    `})},r={render:()=>({components:{DXSidebarMenu:s},setup(){const e=u("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:a,to:"/home"},{id:"analytics",label:"Аналитика",icon:i,to:"/analytics"},{id:"users",label:"Пользователи",icon:o,to:"/users",badge:"12"}]},{title:"Контент",items:[{id:"documents",label:"Документы",icon:B,to:"/documents"},{id:"folders",label:"Папки",icon:re,to:"/folders"},{id:"inbox",label:"Входящие",icon:E,to:"/inbox",badge:"25"}]}],activeItem:e}},template:`
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
    `})},d={render:()=>({components:{DXSidebarMenu:s},setup(){const e=u("/home"),t=u(!0);return{sections:[{items:[{id:"home",label:"Главная",icon:a,to:"/home"},{id:"analytics",label:"Аналитика",icon:i,to:"/analytics"},{id:"users",label:"Пользователи",icon:o,to:"/users"}]},{title:"Настройки",items:[{id:"calendar",label:"Календарь",icon:de,to:"/calendar"},{id:"settings",label:"Настройки",icon:C,to:"/settings"}]}],activeItem:e,compact:t}},template:`
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
    `})},m={render:()=>({components:{DXSidebarMenu:s},setup(){const e=u("/");return{sections:[{items:[{id:"home",label:"Главная",icon:a,to:"/"},{id:"users",label:"Пользователи",icon:o,to:"/users"},{id:"settings",label:"Настройки",icon:C,to:"/settings"}]}],activeItem:e}},template:`
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
    `})},p={render:()=>({components:{DXSidebarMenu:s},setup(){const e=u("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:a,to:"/home"},{id:"inbox",label:"Входящие",icon:E,to:"/inbox",badge:"25",badgeVariant:"danger"},{id:"notifications",label:"Уведомления",icon:Ie,to:"/notifications",badge:"99+",badgeVariant:"warning"},{id:"users",label:"Пользователи",icon:o,to:"/users",badge:"156",badgeVariant:"info"}]}],activeItem:e}},template:`
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
    `})},b={render:()=>({components:{DXSidebarMenu:s},setup(){const e=u("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:a,to:"/home"},{id:"settings",label:"Настройки",icon:C,children:[{id:"profile",label:"Профиль",to:"/settings/profile"},{id:"security",label:"Безопасность",to:"/settings/security"},{id:"notifications",label:"Уведомления",to:"/settings/notifications"}]}]}],activeItem:e}},template:`
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
    `})},h={render:()=>({components:{DXSidebarMenu:s},setup(){const e=u("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:a,to:"/home"},{id:"analytics",label:"Аналитика",icon:i,to:"/analytics"},{id:"users",label:"Пользователи",icon:o,to:"/users"}]}],activeItem:e}},template:`
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
    `})},v={render:()=>({components:{DXSidebarMenu:s,DXButton:he},setup(){const e=u("/");return{sections:[{items:[{id:"home",label:"Главная",icon:a,to:"/"},{id:"orders",label:"Заказы",icon:ge,to:"/orders",badge:"8",badgeVariant:"danger"}]},{title:"Продажи",items:[{id:"products",label:"Товары",icon:E,to:"/products"},{id:"customers",label:"Клиенты",icon:o,to:"/customers",badge:"156"},{id:"payments",label:"Платежи",icon:xe,to:"/payments"}]},{title:"Отчеты",items:[{id:"analytics",label:"Аналитика",icon:i,to:"/analytics"},{id:"reports",label:"Отчеты",icon:B,to:"/reports"}]}],activeItem:e,handleItemClick:n=>{e.value=n.to||n.id},UserCircleIcon:De,ArrowRightOnRectangleIcon:fe}},template:`
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
    `})},x={render:()=>({components:{DXSidebarMenu:s,DXCard:ve},setup(){const e=u("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:a,to:"/home",badge:"5",badgeVariant:"danger"},{id:"analytics",label:"Аналитика",icon:i,to:"/analytics"},{id:"users",label:"Пользователи",icon:o,to:"/users",badge:"12",badgeVariant:"info"}]},{title:"Настройки",items:[{id:"calendar",label:"Календарь",icon:de,to:"/calendar"},{id:"settings",label:"Настройки",icon:C,children:[{id:"profile",label:"Профиль",to:"/settings/profile"},{id:"security",label:"Безопасность",to:"/settings/security"},{id:"notifications",label:"Уведомления",to:"/settings/notifications"}]}]}],activeItem:e,handleItemClick:n=>{e.value=n.to||n.id}}},template:`
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
    `})},I={render:()=>({components:{DXSidebarMenu:s},setup(){const e=u("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:a,to:"/home"},{id:"analytics",label:"Аналитика",icon:i,to:"/analytics"},{id:"users",label:"Пользователи",icon:o,to:"/users"}]}],activeItem:e,handleItemClick:n=>{e.value=n.to||n.id}}},template:`
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
    `})},f={render:()=>({components:{DXSidebarMenu:s},setup(){const e=u("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:a,to:"/home"},{id:"analytics",label:"Аналитика",icon:i,to:"/analytics"},{id:"users",label:"Пользователи",icon:o,to:"/users"}]}],activeItem:e,handleItemClick:n=>{e.value=n.to||n.id}}},template:`
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
    `})},g={render:()=>({components:{DXSidebarMenu:s},setup(){const e=u("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:a,to:"/home"},{id:"analytics",label:"Аналитика",icon:i,to:"/analytics"},{id:"users",label:"Пользователи",icon:o,to:"/users"}]}],activeItem:e,handleItemClick:n=>{e.value=n.to||n.id}}},template:`
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
    `})},D={render:()=>({components:{DXSidebarMenu:s},setup(){const e=u("/home");return{sections:[{items:[{id:"home",label:"Главная",icon:a,to:"/home"},{id:"analytics",label:"Аналитика",icon:i,to:"/analytics"},{id:"users",label:"Пользователи",icon:o,to:"/users"}]}],activeItem:e,handleItemClick:n=>{e.value=n.to||n.id}}},template:`
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
    `})};var S,y,A;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(y=l.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var X,k,F;r.parameters={...r.parameters,docs:{...(X=r.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(F=(k=r.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var M,w,H;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(H=(w=d.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var V,U,$;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...($=(U=m.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var _,R,T;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(T=(R=p.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var W,O,j;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(j=(O=b.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var z,L,N;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(N=(L=h.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var Z,q,G;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(G=(q=v.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,P;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(P=(K=x.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,Y,ee;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ne,te,ue;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ue=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ue.source}}};var se,ae,oe;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ie,ce,le;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(ce=D.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};const ln=["Default","WithSearch","Compact","SimpleExample","WithBadges","WithSubmenu","WithCustomHeader","EcommerceExample","InsideCard","NoHeader","SmallHeader","LargeHeader","AutoHideHeader"];export{D as AutoHideHeader,d as Compact,l as Default,v as EcommerceExample,x as InsideCard,g as LargeHeader,I as NoHeader,m as SimpleExample,f as SmallHeader,p as WithBadges,h as WithCustomHeader,r as WithSearch,b as WithSubmenu,ln as __namedExportsOrder,cn as default};
