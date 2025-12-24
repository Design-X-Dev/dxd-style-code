import{r as A,t as n,c as f}from"./vue.esm-bundler-C1fUoNF-.js";import{_ as t}from"./DXBreakpointProvider-aruntlWT.js";import{_ as a}from"./DXCard-CLY4ojX0.js";import{_ as h}from"./DXButton-DzgLKRkE.js";import{_ as y}from"./DXGrid-CzBFoCRA.js";import"./useClassComposition-Dym2pzZ_.js";import"./useSpacing-BOHUzi8w.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";const $={title:"Utilities/DXBreakpointProvider",component:t,tags:["autodocs","category:provider"],parameters:{docs:{description:{component:`
# DXBreakpointProvider

Провайдер для доступа к текущему брейкпоинту и размерам экрана в компонентах.

## Назначение

DXBreakpointProvider предоставляет реактивный доступ к информации о размере экрана
и текущем брейкпоинте через provide/inject. Используется для адаптивного поведения
компонентов и условного рендеринга.

## Архитектура

### Использует
- Vue provide/inject - для доступа к брейкпоинтам в компонентах
- Window resize API - для отслеживания изменения размера
- Debounce - для оптимизации производительности

### Используется в
- Корневой компонент приложения
- Адаптивные компоненты (\`DXSidebar\`, \`DXHeaderBar\`)
- Любые компоненты, требующие адаптивного поведения

## Внутренняя логика

### Брейкпоинты
По умолчанию использует стандартные брейкпоинты Tailwind CSS:
- xs: 0px
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

### Provide/Inject
Компоненты могут получить доступ к брейкпоинтам через inject:
\`\`\`javascript
const currentBreakpoint = inject('currentBreakpoint');
const screenWidth = inject('screenWidth');
\`\`\`

### Debounce
Изменения размера окна обрабатываются с задержкой для оптимизации производительности.

## Особенности

### Кастомные брейкпоинты
Можно указать кастомные брейкпоинты через prop \`breakpoints\`.

### Реактивность
Все значения реактивны и автоматически обновляются при изменении размера окна.
        `}}},argTypes:{debounce:{control:"number",min:0,max:1e3,step:10,description:"Задержка debounce для resize события в миллисекундах.",table:{type:{summary:"number"},defaultValue:{summary:"150"},category:"Behavior"}}}},r={parameters:{docs:{description:{story:"Базовое использование провайдера. Информация о брейкпоинте доступна через inject."}}},render:()=>({components:{DXBreakpointProvider:t,DXCard:a},setup(){return{BreakpointInfo:{setup(){const u=n("currentBreakpoint"),e=n("screenWidth"),c=n("screenHeight"),d=n("breakpoints");return{currentBreakpoint:u,screenWidth:e,screenHeight:c,breakpoints:d}},template:`
          <DXCard class="p-4">
            <h3 class="font-semibold mb-2">Информация о брейкпоинте</h3>
            <div class="space-y-2 text-sm">
              <p><strong>Текущий брейкпоинт:</strong> {{ currentBreakpoint }}</p>
              <p><strong>Ширина экрана:</strong> {{ screenWidth }}px</p>
              <p><strong>Высота экрана:</strong> {{ screenHeight }}px</p>
              <div class="mt-4">
                <p class="font-medium mb-1">Доступные брейкпоинты:</p>
                <ul class="list-disc list-inside space-y-1">
                  <li v-for="(width, name) in breakpoints" :key="name">
                    {{ name }}: {{ width }}px
                  </li>
                </ul>
              </div>
            </div>
          </DXCard>
        `}}},template:`
      <DXBreakpointProvider>
        <div class="p-8">
          <BreakpointInfo />
        </div>
      </DXBreakpointProvider>
    `})},s={parameters:{docs:{description:{story:"Адаптивная сетка, которая меняет количество колонок в зависимости от брейкпоинта."}}},render:()=>({components:{DXBreakpointProvider:t,DXGrid:y,DXCard:a},setup(){return{AdaptiveGridComponent:{setup(){const u=n("currentBreakpoint");return{gridColumns:f(()=>{switch(u.value){case"xs":return 1;case"sm":return 2;case"md":return 3;case"lg":case"xl":case"2xl":return 4;default:return 2}}),currentBreakpoint:u}},template:`
          <div class="space-y-4">
            <p class="text-sm text-slate-600">
              Текущий брейкпоинт: <strong>{{ currentBreakpoint }}</strong> | 
              Колонок: <strong>{{ gridColumns }}</strong>
            </p>
            <DXGrid :cols="gridColumns" gap="md">
              <DXCard v-for="i in 8" :key="i" class="p-4">
                <p>Элемент {{ i }}</p>
              </DXCard>
            </DXGrid>
          </div>
        `}}},template:`
      <DXBreakpointProvider>
        <div class="p-8">
          <AdaptiveGridComponent />
        </div>
      </DXBreakpointProvider>
    `})},o={parameters:{docs:{description:{story:"Условный рендеринг на основе брейкпоинта. На мобильных показывается одно, на десктопе - другое."}}},render:()=>({components:{DXBreakpointProvider:t,DXCard:a,DXButton:h},setup(){return{ConditionalComponent:{setup(){const u=n("currentBreakpoint");return{isMobile:f(()=>u.value==="xs"||u.value==="sm"),currentBreakpoint:u}},template:`
          <div class="space-y-4">
            <DXCard class="p-4">
              <p class="text-sm text-slate-600 mb-2">
                Текущий брейкпоинт: <strong>{{ currentBreakpoint }}</strong>
              </p>
              <p class="text-sm text-slate-600">
                Режим: <strong>{{ isMobile ? 'Мобильный' : 'Десктоп' }}</strong>
              </p>
            </DXCard>
            
            <div v-if="isMobile" class="space-y-2">
              <DXCard class="p-4">
                <h3 class="font-semibold mb-2">Мобильный интерфейс</h3>
                <p class="text-sm text-slate-600">Этот контент виден только на мобильных устройствах</p>
                <DXButton class="mt-4" block>Мобильная кнопка</DXButton>
              </DXCard>
            </div>
            
            <div v-else class="space-y-2">
              <DXCard class="p-4">
                <h3 class="font-semibold mb-2">Десктопный интерфейс</h3>
                <p class="text-sm text-slate-600">Этот контент виден только на десктопе</p>
                <div class="flex gap-2 mt-4">
                  <DXButton>Действие 1</DXButton>
                  <DXButton>Действие 2</DXButton>
                </div>
              </DXCard>
            </div>
          </div>
        `}}},template:`
      <DXBreakpointProvider>
        <div class="p-8">
          <ConditionalComponent />
        </div>
      </DXBreakpointProvider>
    `})},i={parameters:{docs:{description:{story:"Провайдер с кастомными брейкпоинтами. Можно определить свои значения для различных размеров экрана."}}},render:()=>({components:{DXBreakpointProvider:t,DXCard:a},setup(){return{customBreakpoints:A({mobile:0,tablet:768,desktop:1024,wide:1440}),BreakpointInfo:{setup(){const e=n("currentBreakpoint"),c=n("screenWidth"),d=n("breakpoints");return{currentBreakpoint:e,screenWidth:c,breakpoints:d}},template:`
          <DXCard class="p-4">
            <h3 class="font-semibold mb-2">Кастомные брейкпоинты</h3>
            <div class="space-y-2 text-sm">
              <p><strong>Текущий брейкпоинт:</strong> {{ currentBreakpoint }}</p>
              <p><strong>Ширина экрана:</strong> {{ screenWidth }}px</p>
              <div class="mt-4">
                <p class="font-medium mb-1">Кастомные брейкпоинты:</p>
                <ul class="list-disc list-inside space-y-1">
                  <li v-for="(width, name) in breakpoints" :key="name">
                    {{ name }}: {{ width }}px
                  </li>
                </ul>
              </div>
            </div>
          </DXCard>
        `}}},template:`
      <DXBreakpointProvider :breakpoints="customBreakpoints">
        <div class="p-8">
          <BreakpointInfo />
        </div>
      </DXBreakpointProvider>
    `})};var l,m,D;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Базовое использование провайдера. Информация о брейкпоинте доступна через inject.'
      }
    }
  },
  render: () => ({
    components: {
      DXBreakpointProvider,
      DXCard
    },
    setup() {
      // Компонент, использующий inject
      const BreakpointInfo = {
        setup() {
          const currentBreakpoint = inject('currentBreakpoint');
          const screenWidth = inject('screenWidth');
          const screenHeight = inject('screenHeight');
          const breakpoints = inject('breakpoints');
          return {
            currentBreakpoint,
            screenWidth,
            screenHeight,
            breakpoints
          };
        },
        template: \`
          <DXCard class="p-4">
            <h3 class="font-semibold mb-2">Информация о брейкпоинте</h3>
            <div class="space-y-2 text-sm">
              <p><strong>Текущий брейкпоинт:</strong> {{ currentBreakpoint }}</p>
              <p><strong>Ширина экрана:</strong> {{ screenWidth }}px</p>
              <p><strong>Высота экрана:</strong> {{ screenHeight }}px</p>
              <div class="mt-4">
                <p class="font-medium mb-1">Доступные брейкпоинты:</p>
                <ul class="list-disc list-inside space-y-1">
                  <li v-for="(width, name) in breakpoints" :key="name">
                    {{ name }}: {{ width }}px
                  </li>
                </ul>
              </div>
            </div>
          </DXCard>
        \`
      };
      return {
        BreakpointInfo
      };
    },
    template: \`
      <DXBreakpointProvider>
        <div class="p-8">
          <BreakpointInfo />
        </div>
      </DXBreakpointProvider>
    \`
  })
}`,...(D=(m=r.parameters)==null?void 0:m.docs)==null?void 0:D.source}}};var B,v,k;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Адаптивная сетка, которая меняет количество колонок в зависимости от брейкпоинта.'
      }
    }
  },
  render: () => ({
    components: {
      DXBreakpointProvider,
      DXGrid,
      DXCard
    },
    setup() {
      const AdaptiveGridComponent = {
        setup() {
          const currentBreakpoint = inject('currentBreakpoint');
          const gridColumns = computed(() => {
            switch (currentBreakpoint.value) {
              case 'xs':
                return 1;
              case 'sm':
                return 2;
              case 'md':
                return 3;
              case 'lg':
              case 'xl':
              case '2xl':
                return 4;
              default:
                return 2;
            }
          });
          return {
            gridColumns,
            currentBreakpoint
          };
        },
        template: \`
          <div class="space-y-4">
            <p class="text-sm text-slate-600">
              Текущий брейкпоинт: <strong>{{ currentBreakpoint }}</strong> | 
              Колонок: <strong>{{ gridColumns }}</strong>
            </p>
            <DXGrid :cols="gridColumns" gap="md">
              <DXCard v-for="i in 8" :key="i" class="p-4">
                <p>Элемент {{ i }}</p>
              </DXCard>
            </DXGrid>
          </div>
        \`
      };
      return {
        AdaptiveGridComponent
      };
    },
    template: \`
      <DXBreakpointProvider>
        <div class="p-8">
          <AdaptiveGridComponent />
        </div>
      </DXBreakpointProvider>
    \`
  })
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var C,X,E;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Условный рендеринг на основе брейкпоинта. На мобильных показывается одно, на десктопе - другое.'
      }
    }
  },
  render: () => ({
    components: {
      DXBreakpointProvider,
      DXCard,
      DXButton
    },
    setup() {
      const ConditionalComponent = {
        setup() {
          const currentBreakpoint = inject('currentBreakpoint');
          const isMobile = computed(() => {
            return currentBreakpoint.value === 'xs' || currentBreakpoint.value === 'sm';
          });
          return {
            isMobile,
            currentBreakpoint
          };
        },
        template: \`
          <div class="space-y-4">
            <DXCard class="p-4">
              <p class="text-sm text-slate-600 mb-2">
                Текущий брейкпоинт: <strong>{{ currentBreakpoint }}</strong>
              </p>
              <p class="text-sm text-slate-600">
                Режим: <strong>{{ isMobile ? 'Мобильный' : 'Десктоп' }}</strong>
              </p>
            </DXCard>
            
            <div v-if="isMobile" class="space-y-2">
              <DXCard class="p-4">
                <h3 class="font-semibold mb-2">Мобильный интерфейс</h3>
                <p class="text-sm text-slate-600">Этот контент виден только на мобильных устройствах</p>
                <DXButton class="mt-4" block>Мобильная кнопка</DXButton>
              </DXCard>
            </div>
            
            <div v-else class="space-y-2">
              <DXCard class="p-4">
                <h3 class="font-semibold mb-2">Десктопный интерфейс</h3>
                <p class="text-sm text-slate-600">Этот контент виден только на десктопе</p>
                <div class="flex gap-2 mt-4">
                  <DXButton>Действие 1</DXButton>
                  <DXButton>Действие 2</DXButton>
                </div>
              </DXCard>
            </div>
          </div>
        \`
      };
      return {
        ConditionalComponent
      };
    },
    template: \`
      <DXBreakpointProvider>
        <div class="p-8">
          <ConditionalComponent />
        </div>
      </DXBreakpointProvider>
    \`
  })
}`,...(E=(X=o.parameters)==null?void 0:X.docs)==null?void 0:E.source}}};var g,b,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Провайдер с кастомными брейкпоинтами. Можно определить свои значения для различных размеров экрана.'
      }
    }
  },
  render: () => ({
    components: {
      DXBreakpointProvider,
      DXCard
    },
    setup() {
      const customBreakpoints = ref({
        mobile: 0,
        tablet: 768,
        desktop: 1024,
        wide: 1440
      });
      const BreakpointInfo = {
        setup() {
          const currentBreakpoint = inject('currentBreakpoint');
          const screenWidth = inject('screenWidth');
          const breakpoints = inject('breakpoints');
          return {
            currentBreakpoint,
            screenWidth,
            breakpoints
          };
        },
        template: \`
          <DXCard class="p-4">
            <h3 class="font-semibold mb-2">Кастомные брейкпоинты</h3>
            <div class="space-y-2 text-sm">
              <p><strong>Текущий брейкпоинт:</strong> {{ currentBreakpoint }}</p>
              <p><strong>Ширина экрана:</strong> {{ screenWidth }}px</p>
              <div class="mt-4">
                <p class="font-medium mb-1">Кастомные брейкпоинты:</p>
                <ul class="list-disc list-inside space-y-1">
                  <li v-for="(width, name) in breakpoints" :key="name">
                    {{ name }}: {{ width }}px
                  </li>
                </ul>
              </div>
            </div>
          </DXCard>
        \`
      };
      return {
        customBreakpoints,
        BreakpointInfo
      };
    },
    template: \`
      <DXBreakpointProvider :breakpoints="customBreakpoints">
        <div class="p-8">
          <BreakpointInfo />
        </div>
      </DXBreakpointProvider>
    \`
  })
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const z=["Default","AdaptiveGrid","ConditionalRendering","CustomBreakpoints"];export{s as AdaptiveGrid,o as ConditionalRendering,i as CustomBreakpoints,r as Default,z as __namedExportsOrder,$ as default};
