import { ref } from 'vue';
import DXDashboardWidget from './DXDashboardWidget.vue';
import { ChartBarIcon, CurrencyDollarIcon } from '@heroicons/vue/24/solid';

export default {
  title: 'Organisms/DXDashboardWidget',
  component: DXDashboardWidget,
  tags: ['autodocs', 'category:data-display', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Виджет для дашборда с настройками, обновлением данных и различными типами контента.

## Назначение

DXDashboardWidget предоставляет универсальный виджет для дашбордов с поддержкой
различных типов контента (статистика, графики, таблицы, текст) и действий (редактирование, удаление, обновление).

## Архитектура

### Использует
- \`DXCard\` - как базовый контейнер
- \`DXStatCard\` - для статистики
- \`DXChartContainer\` - для графиков
- \`DXTable\` - для таблиц
- \`DXButton\` - для действий
- \`DXIcon\` - для иконок
- \`useClassComposition\` composable - для стилей
- \`useSize\` composable - для размеров

### Используется в
- \`DXDashboardGrid\` - для размещения виджетов
- Дашборды с аналитикой
- Настраиваемые панели мониторинга

## Внутренняя логика

### Типы виджетов
- **stat**: Виджет статистики (использует DXStatCard)
- **chart**: Виджет графика (использует DXChartContainer)
- **table**: Виджет таблицы (использует DXTable)
- **text**: Текстовый виджет

### Конфигурация
Каждый тип виджета имеет свою конфигурацию через prop \`config\`.

### Действия
Виджет поддерживает редактирование, удаление и обновление данных.

## Особенности

### Слоты
- **header**: Кастомный заголовок
- **content**: Кастомный контент
- **chart**: Кастомный график (для type="chart")
- **text**: Кастомный текст (для type="text")

### Редактирование
При \`editable={true}\` показываются кнопки действий в header.
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['stat', 'chart', 'table', 'text'],
      description: 'Тип виджета: stat (статистика) | chart (график) | table (таблица) | text (текст).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'stat' },
        category: 'Content',
      },
    },
    editable: {
      control: 'boolean',
      description: 'Редактируемый виджет (показывает кнопки действий).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
  },
};

export const StatWidget = {
  args: {
    id: 1,
    type: 'stat',
    title: 'Продажи',
    config: {
      title: 'Всего продаж',
      value: 125000,
      valueFormat: 'currency',
      currency: 'USD',
      trend: { direction: 'up', value: 12.5 },
      icon: CurrencyDollarIcon,
      color: 'primary',
    },
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Виджет статистики с трендом и иконкой.',
      },
    },
  },
  render: (args) => ({
    components: { DXDashboardWidget },
    setup() {
      return { args };
    },
    template: `
      <div class="max-w-md">
        <DXDashboardWidget v-bind="args" />
      </div>
    `,
  }),
};

export const ChartWidget = {
  args: {
    id: 2,
    type: 'chart',
    title: 'График продаж',
    config: {
      chartType: 'line',
      data: { labels: ['Янв', 'Фев', 'Мар'], datasets: [{ data: [100, 150, 200] }] },
      legend: true,
      legendData: [
        { label: 'Продажи', color: 'bg-blue-500', visible: true },
      ],
      height: '300px',
    },
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Виджет графика с легендой.',
      },
    },
  },
  render: (args) => ({
    components: { DXDashboardWidget },
    setup() {
      return { args };
    },
    template: `
      <div class="max-w-2xl">
        <DXDashboardWidget v-bind="args">
          <template #chart>
            <div class="flex items-center justify-center h-full bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
              <p class="text-slate-500 text-sm">График здесь</p>
            </div>
          </template>
        </DXDashboardWidget>
      </div>
    `,
  }),
};

export const TableWidget = {
  args: {
    id: 3,
    type: 'table',
    title: 'Последние заказы',
    config: {
      columns: [
        { key: 'id', label: 'ID' },
        { key: 'customer', label: 'Клиент' },
        { key: 'amount', label: 'Сумма' },
      ],
      data: [
        { id: 1, customer: 'John Doe', amount: '$100' },
        { id: 2, customer: 'Jane Smith', amount: '$200' },
        { id: 3, customer: 'Bob Johnson', amount: '$150' },
      ],
      paginated: false,
    },
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Виджет таблицы с данными.',
      },
    },
  },
  render: (args) => ({
    components: { DXDashboardWidget },
    setup() {
      return { args };
    },
    template: `
      <div class="max-w-2xl">
        <DXDashboardWidget v-bind="args" />
      </div>
    `,
  }),
};

export const TextWidget = {
  args: {
    id: 4,
    type: 'text',
    title: 'Заметки',
    config: {
      text: 'Это текстовый виджет для отображения произвольного контента.',
    },
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Текстовый виджет для произвольного контента.',
      },
    },
  },
  render: (args) => ({
    components: { DXDashboardWidget },
    setup() {
      return { args };
    },
    template: `
      <div class="max-w-md">
        <DXDashboardWidget v-bind="args" />
      </div>
    `,
  }),
};

export const AllTypes = {
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация всех типов виджетов.',
      },
    },
  },
  render: () => ({
    components: { DXDashboardWidget },
    setup() {
      return {};
    },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DXDashboardWidget
          :id="1"
          type="stat"
          title="Продажи"
          :config="{ title: 'Всего', value: 125000, valueFormat: 'currency' }"
          :editable="true"
        />
        <DXDashboardWidget
          :id="2"
          type="text"
          title="Заметки"
          :config="{ text: 'Текстовый виджет' }"
          :editable="true"
        />
      </div>
    `,
  }),
};

