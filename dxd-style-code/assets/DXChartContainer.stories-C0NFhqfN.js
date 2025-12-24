import{r as l}from"./vue.esm-bundler-C1fUoNF-.js";import{_ as u}from"./DXChartContainer-GkBq1kF_.js";import{_ as T}from"./DXButton-DzgLKRkE.js";import{_ as F}from"./DXSelect-CgmhnMxb.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXCard-CLY4ojX0.js";import"./useSpacing-BOHUzi8w.js";import"./DXHeading-S6mljWwV.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./DXText-Bu-Qlv6N.js";import"./useSize-DIMNv1Ms.js";import"./DXFormLabel-DO2rZe0p.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./DXIconWrapper-Dj2l5Guj.js";import"./ChevronDownIcon-DF-4rgxU.js";const N={title:"Organisms/DXChartContainer",component:u,tags:["autodocs","category:data-display"],parameters:{docs:{description:{component:`
# DXChartContainer

Контейнер для графиков с легендой, контролами и настройками отображения.

## Назначение

DXChartContainer предоставляет UI-обертку для графиков различных библиотек (Chart.js, ApexCharts, ECharts и т.д.).
Включает легенду, контролы и структуру для размещения графика.

## Архитектура

### Использует
- \`DXCard\` - как базовый контейнер
- \`DXSelect\` - для выбора типа графика
- \`DXButton\` - для контролов
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- \`DXDashboardWidget\` - для виджетов с графиками
- Отчеты с графиками
- Дашборды с аналитикой

## Внутренняя логика

### Слоты
- **chart**: Основной слот для размещения графика (обязателен)
- **header**: Слот для кастомного заголовка
- **controls**: Слот для кастомных контролов
- **legend**: Слот для кастомной легенды

### Легенда
Легенда поддерживает переключение видимости серий через клик.

### Контролы
Можно добавить кастомные контролы через slot или использовать встроенный селект типов графиков.

## Особенности

### Независимость от библиотек
Компонент не зависит от конкретной библиотеки графиков. Пользователь сам подключает библиотеку в slot "chart".

### Гибкость
Все элементы (заголовок, контролы, легенда) можно кастомизировать через slots.
        `}}},argTypes:{type:{control:"text",description:"Тип графика (для информации, не влияет на рендеринг).",table:{type:{summary:"string"},defaultValue:{summary:"line"},category:"Content"}},legend:{control:"boolean",description:"Показывать легенду.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Display"}},controls:{control:"boolean",description:"Показывать контролы.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Display"}},height:{control:"text",description:"Высота графика.",table:{type:{summary:"string"},defaultValue:{summary:"400px"},category:"Display"}}}},n={args:{title:"График продаж",legend:!0,controls:!1},parameters:{docs:{description:{story:'Базовый контейнер графика с заголовком и легендой. Используйте slot "chart" для вашей библиотеки графиков.'}}},render:e=>({components:{DXChartContainer:u},setup(){const t=l([{label:"Продажи",color:"bg-blue-500",visible:!0},{label:"Затраты",color:"bg-red-500",visible:!0}]);return{args:e,legendData:t}},template:`
      <DXChartContainer v-bind="args" :legend-data="legendData">
        <template #chart>
          <div class="flex items-center justify-center h-full bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
            <p class="text-slate-500 text-sm">Ваш график здесь</p>
          </div>
        </template>
      </DXChartContainer>
    `})},r={parameters:{docs:{description:{story:"Контейнер с контролами для выбора типа графика."}}},render:()=>({components:{DXChartContainer:u,DXSelect:F,DXButton:T},setup(){const e=l("line"),t=l([{value:"line",label:"Линейный"},{value:"bar",label:"Столбчатый"},{value:"pie",label:"Круговой"}]);return{chartType:e,chartTypes:t,handleChartTypeChange:c=>{console.log("Тип графика изменен:",c),e.value=c},handleExport:()=>{console.log("Экспорт графика")}}},template:`
      <DXChartContainer
        title="График продаж"
        :type="chartType"
        :controls="true"
        :chart-types="chartTypes"
        @chart-type-change="handleChartTypeChange"
        @export="handleExport"
      >
        <template #chart>
          <div class="flex items-center justify-center h-full bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
            <p class="text-slate-500 text-sm">График типа: {{ chartType }}</p>
          </div>
        </template>
        <template #controls>
          <DXButton variant="ghost" size="sm" @click="handleExport">
            Экспорт
          </DXButton>
        </template>
      </DXChartContainer>
    `})},a={parameters:{docs:{description:{story:"Контейнер с интерактивной легендой. Клик по элементу легенды переключает его видимость."}}},render:()=>({components:{DXChartContainer:u},setup(){const e=l([{label:"Продажи",color:"bg-blue-500",visible:!0},{label:"Затраты",color:"bg-red-500",visible:!0},{label:"Прибыль",color:"bg-green-500",visible:!0}]);return{legendData:e,handleLegendToggle:({index:d,visible:i})=>{console.log("Легенда переключена:",d,i),e.value[d].visible=i}}},template:`
      <DXChartContainer
        title="График продаж"
        :legend="true"
        :legend-data="legendData"
        @legend-toggle="handleLegendToggle"
      >
        <template #chart>
          <div class="flex items-center justify-center h-full bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
            <p class="text-slate-500 text-sm">График с легендой</p>
          </div>
        </template>
      </DXChartContainer>
    `})},s={parameters:{docs:{description:{story:"Контейнер с кастомной высотой графика."}}},render:()=>({components:{DXChartContainer:u},setup(){return{}},template:`
      <DXChartContainer
        title="Высокий график"
        height="600px"
      >
        <template #chart>
          <div class="flex items-center justify-center h-full bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
            <p class="text-slate-500 text-sm">Высота: 600px</p>
          </div>
        </template>
      </DXChartContainer>
    `})},o={parameters:{docs:{description:{story:"Контейнер без легенды."}}},render:()=>({components:{DXChartContainer:u},setup(){return{}},template:`
      <DXChartContainer
        title="График без легенды"
        :legend="false"
      >
        <template #chart>
          <div class="flex items-center justify-center h-full bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
            <p class="text-slate-500 text-sm">График без легенды</p>
          </div>
        </template>
      </DXChartContainer>
    `})};var p,m,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'График продаж',
    legend: true,
    controls: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовый контейнер графика с заголовком и легендой. Используйте slot "chart" для вашей библиотеки графиков.'
      }
    }
  },
  render: args => ({
    components: {
      DXChartContainer
    },
    setup() {
      const legendData = ref([{
        label: 'Продажи',
        color: 'bg-blue-500',
        visible: true
      }, {
        label: 'Затраты',
        color: 'bg-red-500',
        visible: true
      }]);
      return {
        args,
        legendData
      };
    },
    template: \`
      <DXChartContainer v-bind="args" :legend-data="legendData">
        <template #chart>
          <div class="flex items-center justify-center h-full bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
            <p class="text-slate-500 text-sm">Ваш график здесь</p>
          </div>
        </template>
      </DXChartContainer>
    \`
  })
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,C,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Контейнер с контролами для выбора типа графика.'
      }
    }
  },
  render: () => ({
    components: {
      DXChartContainer,
      DXSelect,
      DXButton
    },
    setup() {
      const chartType = ref('line');
      const chartTypes = ref([{
        value: 'line',
        label: 'Линейный'
      }, {
        value: 'bar',
        label: 'Столбчатый'
      }, {
        value: 'pie',
        label: 'Круговой'
      }]);
      const handleChartTypeChange = newType => {
        console.log('Тип графика изменен:', newType);
        chartType.value = newType;
      };
      const handleExport = () => {
        console.log('Экспорт графика');
      };
      return {
        chartType,
        chartTypes,
        handleChartTypeChange,
        handleExport
      };
    },
    template: \`
      <DXChartContainer
        title="График продаж"
        :type="chartType"
        :controls="true"
        :chart-types="chartTypes"
        @chart-type-change="handleChartTypeChange"
        @export="handleExport"
      >
        <template #chart>
          <div class="flex items-center justify-center h-full bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
            <p class="text-slate-500 text-sm">График типа: {{ chartType }}</p>
          </div>
        </template>
        <template #controls>
          <DXButton variant="ghost" size="sm" @click="handleExport">
            Экспорт
          </DXButton>
        </template>
      </DXChartContainer>
    \`
  })
}`,...(b=(C=r.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var D,y,f;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Контейнер с интерактивной легендой. Клик по элементу легенды переключает его видимость.'
      }
    }
  },
  render: () => ({
    components: {
      DXChartContainer
    },
    setup() {
      const legendData = ref([{
        label: 'Продажи',
        color: 'bg-blue-500',
        visible: true
      }, {
        label: 'Затраты',
        color: 'bg-red-500',
        visible: true
      }, {
        label: 'Прибыль',
        color: 'bg-green-500',
        visible: true
      }]);
      const handleLegendToggle = ({
        index,
        visible
      }) => {
        console.log('Легенда переключена:', index, visible);
        legendData.value[index].visible = visible;
      };
      return {
        legendData,
        handleLegendToggle
      };
    },
    template: \`
      <DXChartContainer
        title="График продаж"
        :legend="true"
        :legend-data="legendData"
        @legend-toggle="handleLegendToggle"
      >
        <template #chart>
          <div class="flex items-center justify-center h-full bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
            <p class="text-slate-500 text-sm">График с легендой</p>
          </div>
        </template>
      </DXChartContainer>
    \`
  })
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,E,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Контейнер с кастомной высотой графика.'
      }
    }
  },
  render: () => ({
    components: {
      DXChartContainer
    },
    setup() {
      return {};
    },
    template: \`
      <DXChartContainer
        title="Высокий график"
        height="600px"
      >
        <template #chart>
          <div class="flex items-center justify-center h-full bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
            <p class="text-slate-500 text-sm">Высота: 600px</p>
          </div>
        </template>
      </DXChartContainer>
    \`
  })
}`,...(v=(E=s.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var X,B,A;o.parameters={...o.parameters,docs:{...(X=o.parameters)==null?void 0:X.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Контейнер без легенды.'
      }
    }
  },
  render: () => ({
    components: {
      DXChartContainer
    },
    setup() {
      return {};
    },
    template: \`
      <DXChartContainer
        title="График без легенды"
        :legend="false"
      >
        <template #chart>
          <div class="flex items-center justify-center h-full bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
            <p class="text-slate-500 text-sm">График без легенды</p>
          </div>
        </template>
      </DXChartContainer>
    \`
  })
}`,...(A=(B=o.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const P=["Default","WithControls","WithLegend","CustomHeight","WithoutLegend"];export{s as CustomHeight,n as Default,r as WithControls,a as WithLegend,o as WithoutLegend,P as __namedExportsOrder,N as default};
