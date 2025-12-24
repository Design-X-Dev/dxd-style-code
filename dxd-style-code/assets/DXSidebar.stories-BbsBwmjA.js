import{c as o,w as y,a as i,p as d,d as q,q as p,g as v,D as G,o as s,r as O}from"./vue.esm-bundler-C1fUoNF-.js";import{u as c}from"./useClassComposition-Dym2pzZ_.js";import{_ as H}from"./DXBackdrop-D0xxNXxX.js";import{D as u}from"./DXSidebarMenu-Bm0eZ8JR.js";import{_ as W}from"./DXButton-DzgLKRkE.js";import{_ as T}from"./DXIcon-Bc0cQL8C.js";import{r as J}from"./ChevronRightIcon-i770bDiF.js";import{r as K}from"./ChevronLeftIcon-DZ_29e3J.js";import"./DXSidebarMenuItem-DeeXgzQK.js";import"./useAnimation-ByVAdqmf.js";import"./DXBadge-Cnl9-G8k.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./DXDropdown-DAfwPhYF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ChevronDownIcon-DF-4rgxU.js";import"./DXDropdownItem-sgbg46Q-.js";import"./DXInput-BG2R0LGs.js";import"./DXFormLabel-DO2rZe0p.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./DXIconWrapper-Dj2l5Guj.js";import"./DXDivider-Cu8D1wP6.js";import"./useSpacing-BOHUzi8w.js";import"./DXHeading-S6mljWwV.js";import"./DXNav-rdhJaqaA.js";import"./MagnifyingGlassIcon-DKNfedfR.js";const Q=["data-mode","data-open","data-collapsed"],a={__name:"DXSidebar",props:{open:{type:Boolean,default:!0},mode:{type:String,default:"static",validator:e=>["overlay","push","static"].includes(e)},width:{type:Number,default:256},collapsedWidth:{type:Number,default:64},collapsed:{type:Boolean,default:!1},showOnMobile:{type:Boolean,default:!1},backdropBlur:{type:String,default:"sm",validator:e=>["none","sm","md","lg","xl"].includes(e)}},emits:["update:open","toggle","collapse"],setup(e,{emit:g}){const t=e,l=g,S=o(()=>t.mode==="overlay"&&t.open),z=o(()=>c("flex flex-col bg-white border-r border-slate-200 transition-all duration-300 z-20",{"fixed inset-y-0 left-0":t.mode==="overlay",relative:t.mode==="push",relative:t.mode==="static","hidden md:flex":!t.showOnMobile&&t.mode!=="overlay","md:flex":t.showOnMobile||t.mode==="overlay",hidden:t.mode==="overlay"&&!t.open})),N=o(()=>{const n=t.collapsed?t.collapsedWidth:t.width;return{width:`${n}px`,minWidth:`${n}px`,maxWidth:`${n}px`}}),j=o(()=>c("flex-shrink-0 p-4 border-b border-slate-200")),P=o(()=>c("flex-1 overflow-y-auto")),R=o(()=>c("flex-shrink-0 p-4 border-t border-slate-200"));function U(){t.mode==="overlay"&&(l("update:open",!1),l("toggle",!1))}return y(()=>t.open,n=>{l("toggle",n)}),y(()=>t.collapsed,n=>{l("collapse",n)}),(n,Y)=>(s(),i("div",{class:p(z.value),style:G(N.value),"data-component":"DXSidebar","data-mode":e.mode,"data-open":e.open,"data-collapsed":e.collapsed},[n.$slots.header?(s(),i("div",{key:0,class:p(j.value)},[v(n.$slots,"header")],2)):d("",!0),n.$slots.content?(s(),i("div",{key:1,class:p(P.value)},[v(n.$slots,"content")],2)):d("",!0),n.$slots.footer?(s(),i("div",{key:2,class:p(R.value)},[v(n.$slots,"footer")],2)):d("",!0),S.value?(s(),q(H,{key:3,show:S.value,blur:e.backdropBlur,dismissible:!0,onClose:U},null,8,["show","blur"])):d("",!0)],14,Q))}};a.__docgenInfo={exportName:"default",displayName:"DXSidebar",description:"",tags:{},props:[{name:"open",description:"Открыт ли сайдбар",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"mode",description:"Режим отображения: overlay | push | static",tags:{default:[{description:"'static'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"static"'},values:["overlay","push","static"]},{name:"width",description:"Ширина сайдбара в пикселях",tags:{default:[{description:"256",title:"default"}]},type:{name:"number"},defaultValue:{func:!1,value:"256"}},{name:"collapsedWidth",description:"Ширина свернутого сайдбара в пикселях",tags:{default:[{description:"64",title:"default"}]},type:{name:"number"},defaultValue:{func:!1,value:"64"}},{name:"collapsed",description:"Свернут ли сайдбар",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showOnMobile",description:"Показывать сайдбар на мобильных",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"backdropBlur",description:"Размытие backdrop для overlay режима: none | sm | md | lg | xl",tags:{default:[{description:"'sm'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"sm"'},values:["none","sm","md","lg","xl"]}],events:[{name:"update:open"},{name:"toggle"},{name:"collapse"}],slots:[{name:"header"},{name:"content"},{name:"footer"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXSidebar/DXSidebar.vue"]};const Me={title:"Organisms/DXSidebar",component:a,tags:["autodocs","category:navigation"],parameters:{docs:{description:{component:`
# DXSidebar

Обертка для боковой панели с поддержкой различных режимов отображения и анимаций.

## Назначение

DXSidebar предоставляет гибкую обертку для боковой панели навигации с поддержкой
различных режимов отображения, коллапсирования и адаптивного поведения.

## Архитектура

### Использует
- \`DXBackdrop\` - для overlay режима
- \`DXSidebarMenu\` - для меню (через slot)
- \`useClassComposition\` composable - для стилей
- \`useAnimation\` composable - для transitions

### Используется в
- \`DXAppLayout\` - для боковой навигации
- Самостоятельные боковые панели
- Панели фильтров

## Внутренняя логика

### Режимы отображения
- **overlay**: Сайдбар накладывается поверх контента с backdrop
- **push**: Сайдбар сдвигает контент вправо
- **static**: Сайдбар в обычном потоке документа

### Коллапсирование
При \`collapsed={true}\` сайдбар уменьшается до минимальной ширины,
показывая только иконки (если используется DXSidebarMenu).

### Адаптивность
На мобильных устройствах сайдбар скрывается (кроме overlay режима).

## Особенности

### Slots
- \`header\` - заголовок сайдбара
- \`content\` - основной контент (обычно DXSidebarMenu)
- \`footer\` - нижняя секция

### Анимации
Переходы между состояниями анимируются через CSS transitions.
        `}}},argTypes:{open:{control:"boolean",description:"Открыт ли сайдбар.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Behavior"}},mode:{control:"select",options:["overlay","push","static"],description:"Режим отображения: overlay (поверх контента) | push (сдвигает контент) | static (в потоке).",table:{type:{summary:"string"},defaultValue:{summary:"static"},category:"Layout"}},width:{control:"number",min:200,max:400,step:10,description:"Ширина сайдбара в пикселях (когда развернут).",table:{type:{summary:"number"},defaultValue:{summary:"256"},category:"Layout"}},collapsedWidth:{control:"number",min:50,max:100,step:5,description:"Ширина сайдбара в пикселях (когда свернут).",table:{type:{summary:"number"},defaultValue:{summary:"64"},category:"Layout"}},collapsed:{control:"boolean",description:"Свернут ли сайдбар.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}}}},r=[{title:"Основное",items:[{id:1,label:"Главная",href:"/",icon:"HomeIcon"},{id:2,label:"Проекты",href:"/projects",icon:"FolderIcon"},{id:3,label:"Задачи",href:"/tasks",icon:"CheckIcon"}]},{title:"Настройки",items:[{id:4,label:"Профиль",href:"/profile",icon:"UserIcon"},{id:5,label:"Настройки",href:"/settings",icon:"CogIcon"}]}],m={args:{mode:"static",open:!0,collapsed:!1},parameters:{docs:{description:{story:"Базовый сайдбар в static режиме с меню."}}},render:e=>({components:{DXSidebar:a,DXSidebarMenu:u},setup(){return{args:e,menuSections:r}},template:`
      <DXSidebar v-bind="args">
        <template #header>
          <h2 class="text-lg font-semibold text-slate-900">Меню</h2>
        </template>
        <template #content>
          <DXSidebarMenu :sections="menuSections" />
        </template>
      </DXSidebar>
    `})},b={args:{mode:"overlay",open:!0},parameters:{docs:{description:{story:"Сайдбар в overlay режиме. Накладывается поверх контента с backdrop."}}},render:e=>({components:{DXSidebar:a,DXSidebarMenu:u,DXButton:W},setup(){return{open:O(e.open),args:e,menuSections:r}},template:`
      <div>
        <DXButton @click="open = !open">
          {{ open ? 'Закрыть' : 'Открыть' }} сайдбар
        </DXButton>
        <DXSidebar v-model:open="open" v-bind="args">
          <template #header>
            <h2 class="text-lg font-semibold text-slate-900">Меню</h2>
          </template>
          <template #content>
            <DXSidebarMenu :sections="menuSections" />
          </template>
        </DXSidebar>
      </div>
    `})},f={args:{mode:"static",open:!0},parameters:{docs:{description:{story:"Коллапсируемый сайдбар. Используйте контролы для переключения состояния."}}},render:e=>({components:{DXSidebar:a,DXSidebarMenu:u,DXButton:W,DXIcon:T},setup(){return{collapsed:O(!1),args:e,menuSections:r,ChevronLeftIcon:K,ChevronRightIcon:J}},template:`
      <DXSidebar v-bind="args" :collapsed="collapsed">
        <template #header>
          <div class="flex items-center justify-between">
            <h2 v-if="!collapsed" class="text-lg font-semibold text-slate-900">Меню</h2>
            <DXButton
              variant="ghost"
              size="sm"
              @click="collapsed = !collapsed"
            >
              <template #icon>
                <DXIcon :icon="collapsed ? ChevronRightIcon : ChevronLeftIcon" size="sm" />
              </template>
            </DXButton>
          </div>
        </template>
        <template #content>
          <DXSidebarMenu :sections="menuSections" :compact="collapsed" />
        </template>
      </DXSidebar>
    `})},h={args:{mode:"static",open:!0},parameters:{docs:{description:{story:"Сайдбар с footer секцией."}}},render:e=>({components:{DXSidebar:a,DXSidebarMenu:u},setup(){return{args:e,menuSections:r}},template:`
      <DXSidebar v-bind="args">
        <template #header>
          <h2 class="text-lg font-semibold text-slate-900">Меню</h2>
        </template>
        <template #content>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #footer>
          <p class="text-xs text-slate-500">© 2024 My App</p>
        </template>
      </DXSidebar>
    `})},D={args:{mode:"push",open:!0},parameters:{docs:{description:{story:"Сайдбар в push режиме. Сдвигает контент вправо при открытии."}}},render:e=>({components:{DXSidebar:a,DXSidebarMenu:u},setup(){return{args:e,menuSections:r}},template:`
      <div class="flex">
        <DXSidebar v-bind="args">
          <template #header>
            <h2 class="text-lg font-semibold text-slate-900">Меню</h2>
          </template>
          <template #content>
            <DXSidebarMenu :sections="menuSections" />
          </template>
        </DXSidebar>
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold mb-4">Контент</h1>
          <p class="text-slate-600">Этот контент сдвигается вправо при открытии сайдбара.</p>
        </div>
      </div>
    `})};var X,x,B;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    mode: 'static',
    open: true,
    collapsed: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовый сайдбар в static режиме с меню.'
      }
    }
  },
  render: args => ({
    components: {
      DXSidebar,
      DXSidebarMenu
    },
    setup() {
      return {
        args,
        menuSections
      };
    },
    template: \`
      <DXSidebar v-bind="args">
        <template #header>
          <h2 class="text-lg font-semibold text-slate-900">Меню</h2>
        </template>
        <template #content>
          <DXSidebarMenu :sections="menuSections" />
        </template>
      </DXSidebar>
    \`
  })
}`,...(B=(x=m.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var C,E,M;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    mode: 'overlay',
    open: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Сайдбар в overlay режиме. Накладывается поверх контента с backdrop.'
      }
    }
  },
  render: args => ({
    components: {
      DXSidebar,
      DXSidebarMenu,
      DXButton
    },
    setup() {
      const open = ref(args.open);
      return {
        open,
        args,
        menuSections
      };
    },
    template: \`
      <div>
        <DXButton @click="open = !open">
          {{ open ? 'Закрыть' : 'Открыть' }} сайдбар
        </DXButton>
        <DXSidebar v-model:open="open" v-bind="args">
          <template #header>
            <h2 class="text-lg font-semibold text-slate-900">Меню</h2>
          </template>
          <template #content>
            <DXSidebarMenu :sections="menuSections" />
          </template>
        </DXSidebar>
      </div>
    \`
  })
}`,...(M=(E=b.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var k,w,I;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    mode: 'static',
    open: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Коллапсируемый сайдбар. Используйте контролы для переключения состояния.'
      }
    }
  },
  render: args => ({
    components: {
      DXSidebar,
      DXSidebarMenu,
      DXButton,
      DXIcon
    },
    setup() {
      const collapsed = ref(false);
      return {
        collapsed,
        args,
        menuSections,
        ChevronLeftIcon,
        ChevronRightIcon
      };
    },
    template: \`
      <DXSidebar v-bind="args" :collapsed="collapsed">
        <template #header>
          <div class="flex items-center justify-between">
            <h2 v-if="!collapsed" class="text-lg font-semibold text-slate-900">Меню</h2>
            <DXButton
              variant="ghost"
              size="sm"
              @click="collapsed = !collapsed"
            >
              <template #icon>
                <DXIcon :icon="collapsed ? ChevronRightIcon : ChevronLeftIcon" size="sm" />
              </template>
            </DXButton>
          </div>
        </template>
        <template #content>
          <DXSidebarMenu :sections="menuSections" :compact="collapsed" />
        </template>
      </DXSidebar>
    \`
  })
}`,...(I=(w=f.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var A,F,V;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    mode: 'static',
    open: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Сайдбар с footer секцией.'
      }
    }
  },
  render: args => ({
    components: {
      DXSidebar,
      DXSidebarMenu
    },
    setup() {
      return {
        args,
        menuSections
      };
    },
    template: \`
      <DXSidebar v-bind="args">
        <template #header>
          <h2 class="text-lg font-semibold text-slate-900">Меню</h2>
        </template>
        <template #content>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #footer>
          <p class="text-xs text-slate-500">© 2024 My App</p>
        </template>
      </DXSidebar>
    \`
  })
}`,...(V=(F=h.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var _,$,L;D.parameters={...D.parameters,docs:{...(_=D.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    mode: 'push',
    open: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Сайдбар в push режиме. Сдвигает контент вправо при открытии.'
      }
    }
  },
  render: args => ({
    components: {
      DXSidebar,
      DXSidebarMenu
    },
    setup() {
      return {
        args,
        menuSections
      };
    },
    template: \`
      <div class="flex">
        <DXSidebar v-bind="args">
          <template #header>
            <h2 class="text-lg font-semibold text-slate-900">Меню</h2>
          </template>
          <template #content>
            <DXSidebarMenu :sections="menuSections" />
          </template>
        </DXSidebar>
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold mb-4">Контент</h1>
          <p class="text-slate-600">Этот контент сдвигается вправо при открытии сайдбара.</p>
        </div>
      </div>
    \`
  })
}`,...(L=($=D.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};const ke=["Default","OverlayMode","Collapsible","WithFooter","PushMode"];export{f as Collapsible,m as Default,b as OverlayMode,D as PushMode,h as WithFooter,ke as __namedExportsOrder,Me as default};
