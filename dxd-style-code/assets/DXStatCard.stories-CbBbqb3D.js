import{a as z,b as w,o as W}from"./vue.esm-bundler-C1fUoNF-.js";import{_ as r}from"./DXStatCard-Dp_PewxT.js";import{r as G}from"./UserGroupIcon-B8OQEbyv.js";import{r as _}from"./ChartBarIcon-BYW9ii54.js";import{r as V}from"./CurrencyDollarIcon-JgbsZQlv.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXCard-CLY4ojX0.js";import"./useSpacing-BOHUzi8w.js";import"./DXIcon-Bc0cQL8C.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./DXText-Bu-Qlv6N.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";function x(u,f){return W(),z("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[w("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"})])}const Z={title:"Molecules/DXStatCard",component:r,tags:["autodocs","category:data-display"],parameters:{docs:{description:{component:`
# DXStatCard

Карточка для отображения статистики с иконкой, значением и метаданными.

## Назначение

DXStatCard предоставляет стандартизированный способ отображения метрик и KPI
в дашбордах, отчетах и панелях управления. Поддерживает различные форматы значений,
тренды, сравнения и цветовые схемы.

## Архитектура

### Использует
- \`DXCard\` - базовая карточка
- \`DXIcon\` - для иконок и индикаторов тренда
- \`useSize\` composable - для размеров
- \`useSpacing\` composable - для отступов
- \`useClassComposition\` composable - для стилей
- \`useVariantButton\` composable - для цветовых схем

### Используется в
- \`DXDashboardGrid\` - для создания дашбордов
- Отчеты и аналитика
- Панели управления

## Внутренняя логика

### Форматирование значений
- **number**: Обычное число с разделителями тысяч (1,234)
- **currency**: Валюта с символом ($1,234.56)
- **percentage**: Процент с символом (24.5%)

### Тренды
Тренд отображается с иконкой стрелки и процентом изменения.
Цвет зависит от направления: зеленый для роста, красный для падения.

### Цветовые схемы
Поддерживает различные цветовые схемы для визуального разделения типов метрик.

## Особенности

### Кликабельность
При \`clickable={true}\` карточка становится интерактивной с hover эффектом.

### Адаптивность
Размеры адаптируются для различных экранов через prop \`size\`.
        `}}},argTypes:{value:{control:"number",description:"Значение для отображения.",table:{type:{summary:"number | string"},category:"Content"}},valueFormat:{control:"select",options:["number","currency","percentage"],description:"Формат значения: number | currency | percentage.",table:{type:{summary:"string"},defaultValue:{summary:"number"},category:"Content"}},color:{control:"select",options:["primary","secondary","success","warning","danger"],description:"Цветовая схема карточки.",table:{type:{summary:"string"},defaultValue:{summary:"primary"},category:"Appearance"}},size:{control:"select",options:["sm","md","lg"],description:"Размер карточки.",table:{type:{summary:"string"},defaultValue:{summary:"md"},category:"Appearance"}},clickable:{control:"boolean",description:"Кликабельная карточка.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}}}},e={args:{title:"Всего пользователей",value:1250,icon:G},parameters:{docs:{description:{story:"Базовая карточка статистики с заголовком, значением и иконкой."}}},render:u=>({components:{DXStatCard:r},setup(){return{args:u}},template:'<DXStatCard v-bind="args" />'})},n={args:{title:"Продажи",value:45230,valueFormat:"currency",currency:"USD",trend:{value:12.5,direction:"up"},comparison:"vs прошлый месяц",icon:_},parameters:{docs:{description:{story:"Карточка с трендом. Тренд показывает изменение в процентах с визуальной индикацией направления."}}},render:u=>({components:{DXStatCard:r},setup(){return{args:u}},template:'<DXStatCard v-bind="args" />'})},t={args:{title:"Конверсия",value:24.5,valueFormat:"percentage",trend:{value:3.2,direction:"up"},icon:x,color:"success"},parameters:{docs:{description:{story:"Карточка с процентом. Значение отображается в процентном формате."}}},render:u=>({components:{DXStatCard:r},setup(){return{args:u}},template:'<DXStatCard v-bind="args" />'})},a={args:{title:"Новые заказы",value:89,icon:V,color:"primary",clickable:!0},parameters:{docs:{description:{story:"Кликабельная карточка. При клике эмитит событие и имеет hover эффект."}}},render:u=>({components:{DXStatCard:r},setup(){return{args:u,handleClick:()=>{console.log("Карточка кликнута")}}},template:'<DXStatCard v-bind="args" @click="handleClick" />'})},o={args:{title:"Активные проекты",value:15,description:"Из 20 запланированных",icon:G,size:"lg"},parameters:{docs:{description:{story:"Карточка с описанием. Описание отображается под значением."}}},render:u=>({components:{DXStatCard:r},setup(){return{args:u}},template:'<DXStatCard v-bind="args" />'})},s={parameters:{docs:{description:{story:"Демонстрация всех цветовых схем."}}},render:()=>({components:{DXStatCard:r},setup(){return{}},template:`
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DXStatCard
          title="Primary"
          :value="1000"
          color="primary"
          :icon="UserGroupIcon"
        />
        <DXStatCard
          title="Secondary"
          :value="2000"
          color="secondary"
          :icon="UserGroupIcon"
        />
        <DXStatCard
          title="Success"
          :value="3000"
          color="success"
          :icon="UserGroupIcon"
        />
        <DXStatCard
          title="Warning"
          :value="4000"
          color="warning"
          :icon="UserGroupIcon"
        />
        <DXStatCard
          title="Danger"
          :value="5000"
          color="danger"
          :icon="UserGroupIcon"
        />
      </div>
    `})},c={parameters:{docs:{description:{story:"Различные размеры карточек."}}},render:()=>({components:{DXStatCard:r},setup(){return{}},template:`
      <div class="space-y-4">
        <DXStatCard
          title="Small"
          :value="1000"
          size="sm"
          :icon="UserGroupIcon"
        />
        <DXStatCard
          title="Medium"
          :value="2000"
          size="md"
          :icon="UserGroupIcon"
        />
        <DXStatCard
          title="Large"
          :value="3000"
          size="lg"
          :icon="UserGroupIcon"
        />
      </div>
    `})};var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'Всего пользователей',
    value: 1250,
    icon: UserGroupIcon
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовая карточка статистики с заголовком, значением и иконкой.'
      }
    }
  },
  render: args => ({
    components: {
      DXStatCard
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXStatCard v-bind="args" />'
  })
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Продажи',
    value: 45230,
    valueFormat: 'currency',
    currency: 'USD',
    trend: {
      value: 12.5,
      direction: 'up'
    },
    comparison: 'vs прошлый месяц',
    icon: ChartBarIcon
  },
  parameters: {
    docs: {
      description: {
        story: 'Карточка с трендом. Тренд показывает изменение в процентах с визуальной индикацией направления.'
      }
    }
  },
  render: args => ({
    components: {
      DXStatCard
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXStatCard v-bind="args" />'
  })
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var D,C,v;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Конверсия',
    value: 24.5,
    valueFormat: 'percentage',
    trend: {
      value: 3.2,
      direction: 'up'
    },
    icon: ArrowTrendingUpIcon,
    color: 'success'
  },
  parameters: {
    docs: {
      description: {
        story: 'Карточка с процентом. Значение отображается в процентном формате.'
      }
    }
  },
  render: args => ({
    components: {
      DXStatCard
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXStatCard v-bind="args" />'
  })
}`,...(v=(C=t.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var S,y,X;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Новые заказы',
    value: 89,
    icon: CurrencyDollarIcon,
    color: 'primary',
    clickable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Кликабельная карточка. При клике эмитит событие и имеет hover эффект.'
      }
    }
  },
  render: args => ({
    components: {
      DXStatCard
    },
    setup() {
      const handleClick = () => {
        console.log('Карточка кликнута');
      };
      return {
        args,
        handleClick
      };
    },
    template: '<DXStatCard v-bind="args" @click="handleClick" />'
  })
}`,...(X=(y=a.parameters)==null?void 0:y.docs)==null?void 0:X.source}}};var E,A,b;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Активные проекты',
    value: 15,
    description: 'Из 20 запланированных',
    icon: UserGroupIcon,
    size: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: 'Карточка с описанием. Описание отображается под значением.'
      }
    }
  },
  render: args => ({
    components: {
      DXStatCard
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXStatCard v-bind="args" />'
  })
}`,...(b=(A=o.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var B,F,h;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация всех цветовых схем.'
      }
    }
  },
  render: () => ({
    components: {
      DXStatCard
    },
    setup() {
      return {};
    },
    template: \`
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DXStatCard
          title="Primary"
          :value="1000"
          color="primary"
          :icon="UserGroupIcon"
        />
        <DXStatCard
          title="Secondary"
          :value="2000"
          color="secondary"
          :icon="UserGroupIcon"
        />
        <DXStatCard
          title="Success"
          :value="3000"
          color="success"
          :icon="UserGroupIcon"
        />
        <DXStatCard
          title="Warning"
          :value="4000"
          color="warning"
          :icon="UserGroupIcon"
        />
        <DXStatCard
          title="Danger"
          :value="5000"
          color="danger"
          :icon="UserGroupIcon"
        />
      </div>
    \`
  })
}`,...(h=(F=s.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};var I,U,k;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Различные размеры карточек.'
      }
    }
  },
  render: () => ({
    components: {
      DXStatCard
    },
    setup() {
      return {};
    },
    template: \`
      <div class="space-y-4">
        <DXStatCard
          title="Small"
          :value="1000"
          size="sm"
          :icon="UserGroupIcon"
        />
        <DXStatCard
          title="Medium"
          :value="2000"
          size="md"
          :icon="UserGroupIcon"
        />
        <DXStatCard
          title="Large"
          :value="3000"
          size="lg"
          :icon="UserGroupIcon"
        />
      </div>
    \`
  })
}`,...(k=(U=c.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};const uu=["Default","WithTrend","WithPercentage","Clickable","WithDescription","AllColors","AllSizes"];export{s as AllColors,c as AllSizes,a as Clickable,e as Default,o as WithDescription,t as WithPercentage,n as WithTrend,uu as __namedExportsOrder,Z as default};
