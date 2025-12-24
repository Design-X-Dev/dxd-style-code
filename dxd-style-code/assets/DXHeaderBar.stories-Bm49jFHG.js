import{r as o,A as He,w as A}from"./vue.esm-bundler-CzLKT_w4.js";import{_ as a}from"./DXHeaderBar-DfEZk6cJ.js";import{_ as x}from"./DXLink-Dne95vSb.js";import{_ as H}from"./DXButton-ChBdj9Dq.js";import{_ as E}from"./DXAvatar-DaIMde_I.js";import{_ as be}from"./DXInput-BLwLEfW9.js";import{D as M}from"./DXDropdown-BME4Lvuj.js";import{_ as k}from"./DXIcon-BbhqsR95.js";import{_ as Ee}from"./DXSegmentedControl-CTQA6AsC.js";import"./DXHeading-DwWVK5ab.js";import"./DXText-DW7ThwBY.js";import{_ as Me}from"./DXCard-BX01pIOu.js";import{_ as Ie}from"./DXBreakpointProvider-BM_mGtsi.js";import{r as fe}from"./MagnifyingGlassIcon-ssG6g_B7.js";import{r as ke}from"./UserIcon-DiLxIH0K.js";import{r as Ae}from"./Cog6ToothIcon-By8I8Qry.js";import{r as xe}from"./BellIcon-Ch96uq91.js";import{r as Ce}from"./Bars3Icon-CdXxK_6D.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXContainer-Cm05cMz-.js";import"./useSpacing-BOHUzi8w.js";import"./DXFlex-BOuIun57.js";import"./useSize-DIMNv1Ms.js";import"./DXBox-BvEpHmww.js";import"./DXStack-BRt3Mlar.js";import"./DXImage-3IUouY75.js";import"./DXObserver-CFvTDM2z.js";import"./PhotoIcon-CRlcUBNP.js";import"./DXAnimatePresence-CGCD0VAF.js";import"./useAnimation-ByVAdqmf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./XMarkIcon-B2lmC1bd.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./DXFormLabel-CkXlkm95.js";import"./ExclamationCircleIcon-CzLk2qiN.js";import"./DXIconWrapper-DA1ppaUf.js";import"./ChevronDownIcon-oXhPA-Up.js";const ga={title:"Organisms/DXHeaderBar",component:a,tags:["autodocs","category:navigation"],parameters:{docs:{description:{component:'\n\n\nВерхняя панель приложения с навигацией, поиском и действиями.\n\n## Назначение\n\nDXHeaderBar предоставляет стандартизированную верхнюю панель для приложений с:\n- Логотипом и названием приложения\n- Навигационными ссылками\n- Поисковой строкой\n- Действиями (уведомления, настройки, профиль)\n- Адаптивным мобильным меню\n\n## Архитектура\n\n### Использует\n- `DXContainer` - для ограничения ширины контента\n- `DXLink` - для навигационных ссылок\n- `DXButton` - для действий\n- `DXAvatar` - для профиля пользователя\n- `DXInput` - для поиска (через slot)\n- `DXDropdown` - для меню профиля\n- `DXBreakpointProvider` (опционально) - для получения данных о breakpoint через `inject`\n\n### Используется в\n- `DXAppLayout` - как верхняя панель приложения\n- Любые приложения, требующие навигационную панель\n\n## Внутренняя логика\n\n### Адаптивность\n- Desktop: показывает навигацию, поиск и действия\n- Mobile: скрывает навигацию и поиск, показывает мобильное меню\n\n### Позиционирование\n- `sticky`: header остается видимым при скролле\n- `fixed`: header зафиксирован вверху страницы\n\n### Мобильное меню\n- Drawer меню, открывается по клику на кнопку мобильного меню\n- Закрывается по клику на кнопку закрытия или вне меню\n\n### Breakpoint данные\nКомпонент автоматически получает данные о breakpoint через `inject`, если `DXBreakpointProvider` обернут вокруг приложения:\n- `currentBreakpoint` - текущий breakpoint (xs, sm, md, lg, xl, 2xl)\n- `screenWidth` - ширина экрана в пикселях\n- `screenHeight` - высота экрана в пикселях\n- `breakpoints` - объект с определением всех breakpoint\n- `isMobile` - computed свойство, true если breakpoint < md (768px)\n- `isDesktop` - computed свойство, true если breakpoint >= md (768px)\n\nЭти данные доступны через `defineExpose` для использования в родительских компонентах.\n\n### Стилизация\nКомпонент поддерживает гибкую стилизацию через пропсы, аналогично `DXCard` и `DXBox`:\n\n- **`variant`**: Вариант стилизации (опционально)\n  - `null` - базовый стиль (по умолчанию, без дополнительных стилей)\n  - `bordered` - более выраженная рамка (`border-slate-300`)\n  - `elevated` - с тенью (автоматически применяется `shadow-sm`, если `shadow` не указан)\n  - `flat` - без рамки (`border-0`)\n\n- **`bg`**: Фон header\n  - `white` - белый фон (по умолчанию)\n  - `slate` - светло-серый фон (`bg-slate-50`)\n  - `transparent` - прозрачный фон\n\n- **`shadow`**: Тень header\n  - `null` - без тени (по умолчанию)\n  - `none` - явно без тени\n  - `sm`, `md`, `lg`, `xl` - различные уровни тени\n\n- **`border`**: Рамка header\n  - `bottom` - только нижняя рамка (по умолчанию)\n  - `none` - без рамки\n  - `full` - рамка со всех сторон\n\n- **`height`**: Высота header\n  - `auto` - автоматическая высота (по умолчанию)\n  - `sm` - 56px (`h-14`)\n  - `md` - 64px (`h-16`)\n  - `lg` - 80px (`h-20`)\n\n## Особенности\n\n### Slots\n- `logo` - кастомный логотип\n- `navigation` - навигационные ссылки (desktop)\n- `search` - поисковая строка (desktop)\n- `actions` - действия (desktop)\n- `center` - центральный контент с абсолютным позиционированием (desktop)\n- `mobile-menu` - кнопка мобильного меню\n- `mobile-navigation` - навигация для мобильного меню\n\n### Примеры использования\n\n```vue\n<!-- Стандартный header -->\n<DXHeaderBar app-name="My App" />\n\n<!-- С тенью и полной рамкой -->\n<DXHeaderBar \n  app-name="My App" \n  variant="elevated"\n  shadow="lg"\n  border="full"\n/>\n\n<!-- Плоский прозрачный -->\n<DXHeaderBar \n  app-name="My App" \n  variant="flat"\n  bg="transparent"\n  border="none"\n/>\n\n<!-- Светлый фон с тенью -->\n<DXHeaderBar \n  app-name="My App" \n  bg="slate"\n  shadow="md"\n/>\n```\n        '}}},argTypes:{logo:{control:"text",description:"URL логотипа приложения.",table:{type:{summary:"string"},defaultValue:{summary:"null"},category:"Branding"}},appName:{control:"text",description:"Название приложения.",table:{type:{summary:"string"},defaultValue:{summary:""},category:"Branding"}},sticky:{control:"boolean",description:"Sticky позиционирование (остается видимым при скролле).",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Layout"}},fixed:{control:"boolean",description:"Fixed позиционирование (зафиксирован вверху).",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Layout"}},height:{control:"select",options:["auto","sm","md","lg"],description:"Высота header.",table:{type:{summary:"string"},defaultValue:{summary:"auto"},category:"Layout"}},variant:{control:"select",options:[null,"bordered","elevated","flat"],description:"Вариант стилизации header. Если не указан, применяется базовый стиль.",table:{type:{summary:"string | null"},defaultValue:{summary:"null"},category:"Styling"}},bg:{control:"select",options:["white","slate","transparent"],description:"Фон header.",table:{type:{summary:"string"},defaultValue:{summary:"white"},category:"Styling"}},shadow:{control:"select",options:[null,"none","sm","md","lg","xl"],description:"Тень header.",table:{type:{summary:"string | null"},defaultValue:{summary:"null"},category:"Styling"}},border:{control:"select",options:["none","bottom","full"],description:"Рамка header.",table:{type:{summary:"string"},defaultValue:{summary:"bottom"},category:"Styling"}}}},i={args:{appName:"My Application"},parameters:{docs:{description:{story:"Базовый header с названием приложения."}}},render:e=>({components:{DXHeaderBar:a},setup(){return{args:e}},template:'<DXHeaderBar v-bind="args" />'})},p={args:{appName:"My Application",logo:"https://via.placeholder.com/32x32"},parameters:{docs:{description:{story:"Header с логотипом и названием приложения."}}},render:e=>({components:{DXHeaderBar:a},setup(){return{args:e}},template:'<DXHeaderBar v-bind="args" />'})},d={args:{appName:"My Application",logo:"https://via.placeholder.com/32x32"},parameters:{docs:{description:{story:"Header с навигационными ссылками."}}},render:e=>({components:{DXHeaderBar:a,DXLink:x},setup(){return{args:e}},template:`
      <DXHeaderBar v-bind="args">
        <template #navigation>
          <DXLink href="/dashboard" variant="ghost">Дашборд</DXLink>
          <DXLink href="/projects" variant="ghost">Проекты</DXLink>
          <DXLink href="/analytics" variant="ghost">Аналитика</DXLink>
        </template>
      </DXHeaderBar>
    `})},l={args:{appName:"My Application",logo:"https://via.placeholder.com/32x32"},parameters:{docs:{description:{story:"Header с поисковой строкой."}}},render:e=>({components:{DXHeaderBar:a,DXInput:be,DXIcon:k},setup(){const t=o("");return{args:e,searchQuery:t,MagnifyingGlassIcon:fe}},template:`
      <DXHeaderBar v-bind="args">
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
      </DXHeaderBar>
    `})},c={args:{appName:"My Application",logo:"https://via.placeholder.com/32x32"},parameters:{docs:{description:{story:"Header с действиями (уведомления, настройки, профиль)."}}},render:e=>({components:{DXHeaderBar:a,DXButton:H,DXAvatar:E,DXDropdown:M,DXIcon:k},setup(){const t=o(5);return{args:e,unreadCount:t,BellIcon:xe,Cog6ToothIcon:Ae,UserIcon:ke}},template:`
      <DXHeaderBar v-bind="args">
        <template #navigation>
          <DXLink href="/dashboard" variant="ghost">Дашборд</DXLink>
          <DXLink href="/projects" variant="ghost">Проекты</DXLink>
        </template>
        <template #actions>
          <DXButton variant="ghost" size="sm">
            <template #icon>
              <DXIcon :icon="BellIcon" size="md" />
            </template>
          </DXButton>
          <DXButton variant="ghost" size="sm">
            <template #icon>
              <DXIcon :icon="Cog6ToothIcon" size="md" />
            </template>
          </DXButton>
          <DXDropdown>
            <template #trigger>
              <DXAvatar
                src="https://via.placeholder.com/40x40"
                size="sm"
              />
            </template>
            <div class="p-2">
              <div class="px-3 py-2 text-sm text-slate-700">Профиль</div>
              <div class="px-3 py-2 text-sm text-slate-700">Настройки</div>
              <div class="px-3 py-2 text-sm text-slate-700">Выйти</div>
            </div>
          </DXDropdown>
        </template>
      </DXHeaderBar>
    `})},m={args:{appName:"My Application",logo:"https://via.placeholder.com/32x32",sticky:!0},parameters:{docs:{description:{story:"Полнофункциональный header с навигацией, поиском, действиями и мобильным меню."}}},render:e=>({components:{DXHeaderBar:a,DXLink:x,DXInput:be,DXButton:H,DXAvatar:E,DXDropdown:M,DXIcon:k},setup(){const t=o(""),r=o(null),n=o(!1);return{args:e,searchQuery:t,headerBarRef:r,showMobileMenu:n,toggleMobileMenu:()=>{n.value=!n.value,r.value&&(n.value?r.value.openMobileMenu():r.value.closeMobileMenu())},MagnifyingGlassIcon:fe,BellIcon:xe,Bars3Icon:Ce}},template:`
      <DXHeaderBar ref="headerBarRef" v-bind="args">
        <template #navigation>
          <DXLink href="/dashboard" variant="ghost">Дашборд</DXLink>
          <DXLink href="/projects" variant="ghost">Проекты</DXLink>
          <DXLink href="/analytics" variant="ghost">Аналитика</DXLink>
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
              <DXAvatar
                src="https://via.placeholder.com/40x40"
                size="sm"
              />
            </template>
            <div class="p-2">
              <div class="px-3 py-2 text-sm text-slate-700">Профиль</div>
              <div class="px-3 py-2 text-sm text-slate-700">Настройки</div>
              <div class="px-3 py-2 text-sm text-slate-700">Выйти</div>
            </div>
          </DXDropdown>
        </template>
        <template #mobile-menu>
          <DXButton variant="ghost" size="sm" @click="toggleMobileMenu">
            <template #icon>
              <DXIcon :icon="Bars3Icon" size="md" />
            </template>
          </DXButton>
        </template>
        <template #mobile-navigation>
          <DXLink href="/dashboard" variant="ghost" class="block py-2">Дашборд</DXLink>
          <DXLink href="/projects" variant="ghost" class="block py-2">Проекты</DXLink>
          <DXLink href="/analytics" variant="ghost" class="block py-2">Аналитика</DXLink>
        </template>
      </DXHeaderBar>
    `})},D={args:{appName:"My Application",logo:"https://via.placeholder.com/32x32",sticky:!0},parameters:{docs:{description:{story:"Sticky header, который остается видимым при скролле страницы."}}},render:e=>({components:{DXHeaderBar:a,DXLink:x},setup(){return{args:e}},template:`
      <div>
        <DXHeaderBar v-bind="args">
          <template #navigation>
            <DXLink href="/dashboard" variant="ghost">Дашборд</DXLink>
            <DXLink href="/projects" variant="ghost">Проекты</DXLink>
          </template>
        </DXHeaderBar>
        <div class="h-screen bg-slate-50 p-8">
          <p class="text-slate-600">Прокрутите страницу вниз, чтобы увидеть sticky header</p>
        </div>
      </div>
    `})},X={parameters:{docs:{description:{story:"Различные размеры header (высота)."}}},render:()=>({components:{DXHeaderBar:a},setup(){return{}},template:`
      <div class="space-y-4">
        <DXHeaderBar app-name="Small" height="sm" />
        <DXHeaderBar app-name="Medium" height="md" />
        <DXHeaderBar app-name="Large" height="lg" />
      </div>
    `})},g={args:{appName:"My Application",logo:"https://via.placeholder.com/32x32",sticky:!0},parameters:{docs:{description:{story:"Header с центральным контентом (DXSegmentedControl) с абсолютным позиционированием. Центральный контент позиционируется абсолютно по центру header и не влияет на layout остальных элементов."}}},render:e=>({components:{DXHeaderBar:a,DXSegmentedControl:Ee,DXButton:H,DXAvatar:E,DXDropdown:M,DXIcon:k},setup(){const t=o("list"),r=o(!0);return{args:e,currentMode:t,isAuthenticated:r,modeOptions:[{value:"list",label:"Список"},{value:"grid",label:"Сетка"},{value:"card",label:"Карточки"}],handleModeChange:s=>{t.value=s,console.log("Mode changed to:",s)},UserIcon:ke}},template:`
      <DXHeaderBar v-bind="args">
        <template #actions>
          <DXButton variant="ghost" size="sm">
            <template #icon>
              <DXIcon :icon="BellIcon" size="md" />
            </template>
          </DXButton>
          <DXDropdown>
            <template #trigger>
              <DXAvatar
                src="https://via.placeholder.com/40x40"
                size="sm"
              />
            </template>
            <div class="p-2">
              <div class="px-3 py-2 text-sm text-slate-700">Профиль</div>
              <div class="px-3 py-2 text-sm text-slate-700">Настройки</div>
              <div class="px-3 py-2 text-sm text-slate-700">Выйти</div>
            </div>
          </DXDropdown>
        </template>
        <template #center>
          <DXSegmentedControl
            v-if="isAuthenticated"
            v-model="currentMode"
            :options="modeOptions"
            size="sm"
            @update:model-value="handleModeChange"
          />
        </template>
      </DXHeaderBar>
    `})},h={parameters:{docs:{description:{story:"Различные варианты стилизации header (variant)."}}},render:()=>({components:{DXHeaderBar:a},setup(){return{}},template:`
      <div class="space-y-4">
        <DXHeaderBar app-name="Default (no variant)" />
        <DXHeaderBar app-name="Bordered" variant="bordered" />
        <DXHeaderBar app-name="Elevated" variant="elevated" />
        <DXHeaderBar app-name="Flat" variant="flat" />
      </div>
    `})},B={parameters:{docs:{description:{story:"Различные варианты фона header (bg)."}}},render:()=>({components:{DXHeaderBar:a},setup(){return{}},template:`
      <div class="space-y-4">
        <DXHeaderBar app-name="White Background" bg="white" />
        <DXHeaderBar app-name="Slate Background" bg="slate" />
        <DXHeaderBar app-name="Transparent Background" bg="transparent" />
      </div>
    `})},v={parameters:{docs:{description:{story:"Различные варианты тени header (shadow)."}}},render:()=>({components:{DXHeaderBar:a},setup(){return{}},template:`
      <div class="space-y-4 bg-slate-50 p-4">
        <DXHeaderBar app-name="No Shadow" shadow="none" />
        <DXHeaderBar app-name="Small Shadow" shadow="sm" />
        <DXHeaderBar app-name="Medium Shadow" shadow="md" />
        <DXHeaderBar app-name="Large Shadow" shadow="lg" />
        <DXHeaderBar app-name="Extra Large Shadow" shadow="xl" />
      </div>
    `})},y={parameters:{docs:{description:{story:"Различные варианты рамки header (border)."}}},render:()=>({components:{DXHeaderBar:a},setup(){return{}},template:`
      <div class="space-y-4">
        <DXHeaderBar app-name="No Border" border="none" />
        <DXHeaderBar app-name="Bottom Border" border="bottom" />
        <DXHeaderBar app-name="Full Border" border="full" />
      </div>
    `})},b={parameters:{docs:{description:{story:"Комбинации различных вариантов стилизации."}}},render:()=>({components:{DXHeaderBar:a},setup(){return{}},template:`
      <div class="space-y-4 bg-slate-50 p-4">
        <DXHeaderBar 
          app-name="Elevated with Shadow" 
          variant="elevated" 
          shadow="lg"
        />
        <DXHeaderBar 
          app-name="Flat Transparent" 
          variant="flat" 
          bg="transparent"
          border="none"
        />
        <DXHeaderBar 
          app-name="Bordered Slate" 
          variant="bordered" 
          bg="slate"
          border="full"
        />
      </div>
    `})},f={parameters:{docs:{description:{story:"DXHeaderBar автоматически получает данные о breakpoint через inject, если DXBreakpointProvider обернут вокруг приложения. Эти данные доступны через defineExpose."}}},render:()=>({components:{DXHeaderBar:a,DXBreakpointProvider:Ie,DXCard:Me},setup(){const e=o(null),t=o({currentBreakpoint:null,screenWidth:null,isMobile:!1,isDesktop:!1}),r=()=>{var n,u,s,I;e.value&&(t.value={currentBreakpoint:((n=e.value.currentBreakpoint)==null?void 0:n.value)||"unknown",screenWidth:((u=e.value.screenWidth)==null?void 0:u.value)||null,isMobile:((s=e.value.isMobile)==null?void 0:s.value)||!1,isDesktop:((I=e.value.isDesktop)==null?void 0:I.value)||!1})};return He(()=>{r()}),A(()=>{var n,u;return(u=(n=e.value)==null?void 0:n.currentBreakpoint)==null?void 0:u.value},()=>{r()},{immediate:!0}),A(()=>{var n,u;return(u=(n=e.value)==null?void 0:n.screenWidth)==null?void 0:u.value},()=>{r()},{immediate:!0}),{headerRef:e,breakpointInfo:t}},template:`
      <DXBreakpointProvider>
        <div class="space-y-4">
          <DXHeaderBar 
            ref="headerRef"
            app-name="Breakpoint Demo"
            sticky
          >
            <template #actions>
              <DXButton variant="ghost" size="sm">
                <template #icon>
                  <DXIcon :icon="BellIcon" size="md" />
                </template>
              </DXButton>
            </template>
          </DXHeaderBar>
          
          <div class="p-4">
            <DXCard padding="md">
              <DXHeading level="3" weight="semibold" class="mb-4">Breakpoint данные из DXHeaderBar:</DXHeading>
              <div class="space-y-2">
                <DXText tag="p" size="sm"><strong>Текущий breakpoint:</strong> {{ breakpointInfo.currentBreakpoint }}</DXText>
                <DXText tag="p" size="sm"><strong>Ширина экрана:</strong> {{ breakpointInfo.screenWidth }}px</DXText>
                <DXText tag="p" size="sm"><strong>Мобильный режим:</strong> {{ breakpointInfo.isMobile ? 'Да' : 'Нет' }}</DXText>
                <DXText tag="p" size="sm"><strong>Десктопный режим:</strong> {{ breakpointInfo.isDesktop ? 'Да' : 'Нет' }}</DXText>
              </div>
              <DXText tag="p" size="xs" color="muted" class="mt-4">
                Измените размер окна, чтобы увидеть обновление breakpoint данных.
              </DXText>
            </DXCard>
          </div>
        </div>
      </DXBreakpointProvider>
    `})};var C,w,L;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    appName: 'My Application'
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовый header с названием приложения.'
      }
    }
  },
  render: args => ({
    components: {
      DXHeaderBar
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXHeaderBar v-bind="args" />'
  })
}`,...(L=(w=i.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var S,z,F;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    appName: 'My Application',
    logo: 'https://via.placeholder.com/32x32'
  },
  parameters: {
    docs: {
      description: {
        story: 'Header с логотипом и названием приложения.'
      }
    }
  },
  render: args => ({
    components: {
      DXHeaderBar
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXHeaderBar v-bind="args" />'
  })
}`,...(F=(z=p.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var _,T,W;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    appName: 'My Application',
    logo: 'https://via.placeholder.com/32x32'
  },
  parameters: {
    docs: {
      description: {
        story: 'Header с навигационными ссылками.'
      }
    }
  },
  render: args => ({
    components: {
      DXHeaderBar,
      DXLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXHeaderBar v-bind="args">
        <template #navigation>
          <DXLink href="/dashboard" variant="ghost">Дашборд</DXLink>
          <DXLink href="/projects" variant="ghost">Проекты</DXLink>
          <DXLink href="/analytics" variant="ghost">Аналитика</DXLink>
        </template>
      </DXHeaderBar>
    \`
  })
}`,...(W=(T=d.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var N,R,j;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    appName: 'My Application',
    logo: 'https://via.placeholder.com/32x32'
  },
  parameters: {
    docs: {
      description: {
        story: 'Header с поисковой строкой.'
      }
    }
  },
  render: args => ({
    components: {
      DXHeaderBar,
      DXInput,
      DXIcon
    },
    setup() {
      const searchQuery = ref('');
      return {
        args,
        searchQuery,
        MagnifyingGlassIcon
      };
    },
    template: \`
      <DXHeaderBar v-bind="args">
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
      </DXHeaderBar>
    \`
  })
}`,...(j=(R=l.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var P,$,V;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    appName: 'My Application',
    logo: 'https://via.placeholder.com/32x32'
  },
  parameters: {
    docs: {
      description: {
        story: 'Header с действиями (уведомления, настройки, профиль).'
      }
    }
  },
  render: args => ({
    components: {
      DXHeaderBar,
      DXButton,
      DXAvatar,
      DXDropdown,
      DXIcon
    },
    setup() {
      const unreadCount = ref(5);
      return {
        args,
        unreadCount,
        BellIcon,
        Cog6ToothIcon,
        UserIcon
      };
    },
    template: \`
      <DXHeaderBar v-bind="args">
        <template #navigation>
          <DXLink href="/dashboard" variant="ghost">Дашборд</DXLink>
          <DXLink href="/projects" variant="ghost">Проекты</DXLink>
        </template>
        <template #actions>
          <DXButton variant="ghost" size="sm">
            <template #icon>
              <DXIcon :icon="BellIcon" size="md" />
            </template>
          </DXButton>
          <DXButton variant="ghost" size="sm">
            <template #icon>
              <DXIcon :icon="Cog6ToothIcon" size="md" />
            </template>
          </DXButton>
          <DXDropdown>
            <template #trigger>
              <DXAvatar
                src="https://via.placeholder.com/40x40"
                size="sm"
              />
            </template>
            <div class="p-2">
              <div class="px-3 py-2 text-sm text-slate-700">Профиль</div>
              <div class="px-3 py-2 text-sm text-slate-700">Настройки</div>
              <div class="px-3 py-2 text-sm text-slate-700">Выйти</div>
            </div>
          </DXDropdown>
        </template>
      </DXHeaderBar>
    \`
  })
}`,...(V=($=c.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var Q,G,O;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    appName: 'My Application',
    logo: 'https://via.placeholder.com/32x32',
    sticky: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Полнофункциональный header с навигацией, поиском, действиями и мобильным меню.'
      }
    }
  },
  render: args => ({
    components: {
      DXHeaderBar,
      DXLink,
      DXInput,
      DXButton,
      DXAvatar,
      DXDropdown,
      DXIcon
    },
    setup() {
      const searchQuery = ref('');
      const headerBarRef = ref(null);
      const showMobileMenu = ref(false);
      const toggleMobileMenu = () => {
        showMobileMenu.value = !showMobileMenu.value;
        if (headerBarRef.value) {
          if (showMobileMenu.value) {
            headerBarRef.value.openMobileMenu();
          } else {
            headerBarRef.value.closeMobileMenu();
          }
        }
      };
      return {
        args,
        searchQuery,
        headerBarRef,
        showMobileMenu,
        toggleMobileMenu,
        MagnifyingGlassIcon,
        BellIcon,
        Bars3Icon
      };
    },
    template: \`
      <DXHeaderBar ref="headerBarRef" v-bind="args">
        <template #navigation>
          <DXLink href="/dashboard" variant="ghost">Дашборд</DXLink>
          <DXLink href="/projects" variant="ghost">Проекты</DXLink>
          <DXLink href="/analytics" variant="ghost">Аналитика</DXLink>
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
              <DXAvatar
                src="https://via.placeholder.com/40x40"
                size="sm"
              />
            </template>
            <div class="p-2">
              <div class="px-3 py-2 text-sm text-slate-700">Профиль</div>
              <div class="px-3 py-2 text-sm text-slate-700">Настройки</div>
              <div class="px-3 py-2 text-sm text-slate-700">Выйти</div>
            </div>
          </DXDropdown>
        </template>
        <template #mobile-menu>
          <DXButton variant="ghost" size="sm" @click="toggleMobileMenu">
            <template #icon>
              <DXIcon :icon="Bars3Icon" size="md" />
            </template>
          </DXButton>
        </template>
        <template #mobile-navigation>
          <DXLink href="/dashboard" variant="ghost" class="block py-2">Дашборд</DXLink>
          <DXLink href="/projects" variant="ghost" class="block py-2">Проекты</DXLink>
          <DXLink href="/analytics" variant="ghost" class="block py-2">Аналитика</DXLink>
        </template>
      </DXHeaderBar>
    \`
  })
}`,...(O=(G=m.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var U,q,J;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    appName: 'My Application',
    logo: 'https://via.placeholder.com/32x32',
    sticky: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Sticky header, который остается видимым при скролле страницы.'
      }
    }
  },
  render: args => ({
    components: {
      DXHeaderBar,
      DXLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <DXHeaderBar v-bind="args">
          <template #navigation>
            <DXLink href="/dashboard" variant="ghost">Дашборд</DXLink>
            <DXLink href="/projects" variant="ghost">Проекты</DXLink>
          </template>
        </DXHeaderBar>
        <div class="h-screen bg-slate-50 p-8">
          <p class="text-slate-600">Прокрутите страницу вниз, чтобы увидеть sticky header</p>
        </div>
      </div>
    \`
  })
}`,...(J=(q=D.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Y,Z;X.parameters={...X.parameters,docs:{...(K=X.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Различные размеры header (высота).'
      }
    }
  },
  render: () => ({
    components: {
      DXHeaderBar
    },
    setup() {
      return {};
    },
    template: \`
      <div class="space-y-4">
        <DXHeaderBar app-name="Small" height="sm" />
        <DXHeaderBar app-name="Medium" height="md" />
        <DXHeaderBar app-name="Large" height="lg" />
      </div>
    \`
  })
}`,...(Z=(Y=X.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,ne;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    appName: 'My Application',
    logo: 'https://via.placeholder.com/32x32',
    sticky: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Header с центральным контентом (DXSegmentedControl) с абсолютным позиционированием. Центральный контент позиционируется абсолютно по центру header и не влияет на layout остальных элементов.'
      }
    }
  },
  render: args => ({
    components: {
      DXHeaderBar,
      DXSegmentedControl,
      DXButton,
      DXAvatar,
      DXDropdown,
      DXIcon
    },
    setup() {
      const currentMode = ref('list');
      const isAuthenticated = ref(true);
      const modeOptions = [{
        value: 'list',
        label: 'Список'
      }, {
        value: 'grid',
        label: 'Сетка'
      }, {
        value: 'card',
        label: 'Карточки'
      }];
      const handleModeChange = value => {
        currentMode.value = value;
        console.log('Mode changed to:', value);
      };
      return {
        args,
        currentMode,
        isAuthenticated,
        modeOptions,
        handleModeChange,
        UserIcon
      };
    },
    template: \`
      <DXHeaderBar v-bind="args">
        <template #actions>
          <DXButton variant="ghost" size="sm">
            <template #icon>
              <DXIcon :icon="BellIcon" size="md" />
            </template>
          </DXButton>
          <DXDropdown>
            <template #trigger>
              <DXAvatar
                src="https://via.placeholder.com/40x40"
                size="sm"
              />
            </template>
            <div class="p-2">
              <div class="px-3 py-2 text-sm text-slate-700">Профиль</div>
              <div class="px-3 py-2 text-sm text-slate-700">Настройки</div>
              <div class="px-3 py-2 text-sm text-slate-700">Выйти</div>
            </div>
          </DXDropdown>
        </template>
        <template #center>
          <DXSegmentedControl
            v-if="isAuthenticated"
            v-model="currentMode"
            :options="modeOptions"
            size="sm"
            @update:model-value="handleModeChange"
          />
        </template>
      </DXHeaderBar>
    \`
  })
}`,...(ne=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,re,ue;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Различные варианты стилизации header (variant).'
      }
    }
  },
  render: () => ({
    components: {
      DXHeaderBar
    },
    setup() {
      return {};
    },
    template: \`
      <div class="space-y-4">
        <DXHeaderBar app-name="Default (no variant)" />
        <DXHeaderBar app-name="Bordered" variant="bordered" />
        <DXHeaderBar app-name="Elevated" variant="elevated" />
        <DXHeaderBar app-name="Flat" variant="flat" />
      </div>
    \`
  })
}`,...(ue=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ue.source}}};var oe,se,ie;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Различные варианты фона header (bg).'
      }
    }
  },
  render: () => ({
    components: {
      DXHeaderBar
    },
    setup() {
      return {};
    },
    template: \`
      <div class="space-y-4">
        <DXHeaderBar app-name="White Background" bg="white" />
        <DXHeaderBar app-name="Slate Background" bg="slate" />
        <DXHeaderBar app-name="Transparent Background" bg="transparent" />
      </div>
    \`
  })
}`,...(ie=(se=B.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var pe,de,le;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Различные варианты тени header (shadow).'
      }
    }
  },
  render: () => ({
    components: {
      DXHeaderBar
    },
    setup() {
      return {};
    },
    template: \`
      <div class="space-y-4 bg-slate-50 p-4">
        <DXHeaderBar app-name="No Shadow" shadow="none" />
        <DXHeaderBar app-name="Small Shadow" shadow="sm" />
        <DXHeaderBar app-name="Medium Shadow" shadow="md" />
        <DXHeaderBar app-name="Large Shadow" shadow="lg" />
        <DXHeaderBar app-name="Extra Large Shadow" shadow="xl" />
      </div>
    \`
  })
}`,...(le=(de=v.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ce,me,De;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Различные варианты рамки header (border).'
      }
    }
  },
  render: () => ({
    components: {
      DXHeaderBar
    },
    setup() {
      return {};
    },
    template: \`
      <div class="space-y-4">
        <DXHeaderBar app-name="No Border" border="none" />
        <DXHeaderBar app-name="Bottom Border" border="bottom" />
        <DXHeaderBar app-name="Full Border" border="full" />
      </div>
    \`
  })
}`,...(De=(me=y.parameters)==null?void 0:me.docs)==null?void 0:De.source}}};var Xe,ge,he;b.parameters={...b.parameters,docs:{...(Xe=b.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Комбинации различных вариантов стилизации.'
      }
    }
  },
  render: () => ({
    components: {
      DXHeaderBar
    },
    setup() {
      return {};
    },
    template: \`
      <div class="space-y-4 bg-slate-50 p-4">
        <DXHeaderBar 
          app-name="Elevated with Shadow" 
          variant="elevated" 
          shadow="lg"
        />
        <DXHeaderBar 
          app-name="Flat Transparent" 
          variant="flat" 
          bg="transparent"
          border="none"
        />
        <DXHeaderBar 
          app-name="Bordered Slate" 
          variant="bordered" 
          bg="slate"
          border="full"
        />
      </div>
    \`
  })
}`,...(he=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var Be,ve,ye;f.parameters={...f.parameters,docs:{...(Be=f.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'DXHeaderBar автоматически получает данные о breakpoint через inject, если DXBreakpointProvider обернут вокруг приложения. Эти данные доступны через defineExpose.'
      }
    }
  },
  render: () => ({
    components: {
      DXHeaderBar,
      DXBreakpointProvider,
      DXCard
    },
    setup() {
      const headerRef = ref(null);
      const breakpointInfo = ref({
        currentBreakpoint: null,
        screenWidth: null,
        isMobile: false,
        isDesktop: false
      });
      const updateInfo = () => {
        if (headerRef.value) {
          breakpointInfo.value = {
            currentBreakpoint: headerRef.value.currentBreakpoint?.value || 'unknown',
            screenWidth: headerRef.value.screenWidth?.value || null,
            isMobile: headerRef.value.isMobile?.value || false,
            isDesktop: headerRef.value.isDesktop?.value || false
          };
        }
      };
      onMounted(() => {
        updateInfo();
      });

      // Отслеживаем изменения breakpoint данных
      watch(() => headerRef.value?.currentBreakpoint?.value, () => {
        updateInfo();
      }, {
        immediate: true
      });
      watch(() => headerRef.value?.screenWidth?.value, () => {
        updateInfo();
      }, {
        immediate: true
      });
      return {
        headerRef,
        breakpointInfo
      };
    },
    template: \`
      <DXBreakpointProvider>
        <div class="space-y-4">
          <DXHeaderBar 
            ref="headerRef"
            app-name="Breakpoint Demo"
            sticky
          >
            <template #actions>
              <DXButton variant="ghost" size="sm">
                <template #icon>
                  <DXIcon :icon="BellIcon" size="md" />
                </template>
              </DXButton>
            </template>
          </DXHeaderBar>
          
          <div class="p-4">
            <DXCard padding="md">
              <DXHeading level="3" weight="semibold" class="mb-4">Breakpoint данные из DXHeaderBar:</DXHeading>
              <div class="space-y-2">
                <DXText tag="p" size="sm"><strong>Текущий breakpoint:</strong> {{ breakpointInfo.currentBreakpoint }}</DXText>
                <DXText tag="p" size="sm"><strong>Ширина экрана:</strong> {{ breakpointInfo.screenWidth }}px</DXText>
                <DXText tag="p" size="sm"><strong>Мобильный режим:</strong> {{ breakpointInfo.isMobile ? 'Да' : 'Нет' }}</DXText>
                <DXText tag="p" size="sm"><strong>Десктопный режим:</strong> {{ breakpointInfo.isDesktop ? 'Да' : 'Нет' }}</DXText>
              </div>
              <DXText tag="p" size="xs" color="muted" class="mt-4">
                Измените размер окна, чтобы увидеть обновление breakpoint данных.
              </DXText>
            </DXCard>
          </div>
        </div>
      </DXBreakpointProvider>
    \`
  })
}`,...(ye=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};const ha=["Default","WithLogo","WithNavigation","WithSearch","WithActions","FullFeatured","Sticky","Sizes","WithCenterContent","Variants","Backgrounds","Shadows","Borders","StylingCombinations","WithBreakpointProvider"];export{B as Backgrounds,y as Borders,i as Default,m as FullFeatured,v as Shadows,X as Sizes,D as Sticky,b as StylingCombinations,h as Variants,c as WithActions,f as WithBreakpointProvider,g as WithCenterContent,p as WithLogo,d as WithNavigation,l as WithSearch,ha as __namedExportsOrder,ga as default};
