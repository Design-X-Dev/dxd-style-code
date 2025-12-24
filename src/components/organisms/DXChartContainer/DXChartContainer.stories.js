import { ref } from 'vue';
import DXChartContainer from './DXChartContainer.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';
import DXSelect from '../../molecules/DXSelect/DXSelect.vue';

export default {
  title: 'Organisms/DXChartContainer',
  component: DXChartContainer,
  tags: ['autodocs', 'category:data-display'],
  parameters: {
    docs: {
      description: {
        component: `
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
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'text',
      description: 'Тип графика (для информации, не влияет на рендеринг).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'line' },
        category: 'Content',
      },
    },
    legend: {
      control: 'boolean',
      description: 'Показывать легенду.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Display',
      },
    },
    controls: {
      control: 'boolean',
      description: 'Показывать контролы.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Display',
      },
    },
    height: {
      control: 'text',
      description: 'Высота графика.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '400px' },
        category: 'Display',
      },
    },
  },
};

export const Default = {
  args: {
    title: 'График продаж',
    legend: true,
    controls: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовый контейнер графика с заголовком и легендой. Используйте slot "chart" для вашей библиотеки графиков.',
      },
    },
  },
  render: (args) => ({
    components: { DXChartContainer },
    setup() {
      const legendData = ref([
        { label: 'Продажи', color: 'bg-blue-500', visible: true },
        { label: 'Затраты', color: 'bg-red-500', visible: true },
      ]);
      
      return { args, legendData };
    },
    template: `
      <DXChartContainer v-bind="args" :legend-data="legendData">
        <template #chart>
          <div class="flex items-center justify-center h-full bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
            <p class="text-slate-500 text-sm">Ваш график здесь</p>
          </div>
        </template>
      </DXChartContainer>
    `,
  }),
};

export const WithControls = {
  parameters: {
    docs: {
      description: {
        story: 'Контейнер с контролами для выбора типа графика.',
      },
    },
  },
  render: () => ({
    components: { DXChartContainer, DXSelect, DXButton },
    setup() {
      const chartType = ref('line');
      const chartTypes = ref([
        { value: 'line', label: 'Линейный' },
        { value: 'bar', label: 'Столбчатый' },
        { value: 'pie', label: 'Круговой' },
      ]);
      
      const handleChartTypeChange = (newType) => {
        console.log('Тип графика изменен:', newType);
        chartType.value = newType;
      };
      
      const handleExport = () => {
        console.log('Экспорт графика');
      };
      
      return { chartType, chartTypes, handleChartTypeChange, handleExport };
    },
    template: `
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
    `,
  }),
};

export const WithLegend = {
  parameters: {
    docs: {
      description: {
        story: 'Контейнер с интерактивной легендой. Клик по элементу легенды переключает его видимость.',
      },
    },
  },
  render: () => ({
    components: { DXChartContainer },
    setup() {
      const legendData = ref([
        { label: 'Продажи', color: 'bg-blue-500', visible: true },
        { label: 'Затраты', color: 'bg-red-500', visible: true },
        { label: 'Прибыль', color: 'bg-green-500', visible: true },
      ]);
      
      const handleLegendToggle = ({ index, visible }) => {
        console.log('Легенда переключена:', index, visible);
        legendData.value[index].visible = visible;
      };
      
      return { legendData, handleLegendToggle };
    },
    template: `
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
    `,
  }),
};

export const CustomHeight = {
  parameters: {
    docs: {
      description: {
        story: 'Контейнер с кастомной высотой графика.',
      },
    },
  },
  render: () => ({
    components: { DXChartContainer },
    setup() {
      return {};
    },
    template: `
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
    `,
  }),
};

export const WithoutLegend = {
  parameters: {
    docs: {
      description: {
        story: 'Контейнер без легенды.',
      },
    },
  },
  render: () => ({
    components: { DXChartContainer },
    setup() {
      return {};
    },
    template: `
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
    `,
  }),
};

