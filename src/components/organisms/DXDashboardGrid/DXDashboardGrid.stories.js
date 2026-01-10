import { ref } from 'vue';
import DXDashboardGrid from './DXDashboardGrid.vue';
import DXStatCard from '../../molecules/DXStatCard/DXStatCard.vue';
import DXCard from '../../atoms/DXCard/DXCard.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';
import { UserGroupIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/vue/24/outline';

export default {
  title: 'Organisms/DXDashboardGrid',
  component: DXDashboardGrid,
  tags: ['autodocs', 'category:data-display', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Сетка для дашборда с поддержкой drag-and-drop для перестановки виджетов.

## Назначение

DXDashboardGrid предоставляет настраиваемую сетку для создания дашбордов с виджетами.
Поддерживает перестановку виджетов через drag-and-drop и изменение их размеров.

## Архитектура

### Использует
- \`vue-draggable-next\` - для drag-and-drop функциональности
- \`DXStatCard\` - для карточек статистики (через slot)
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- Настраиваемые дашборды
- Панели мониторинга
- Аналитические панели

## Внутренняя логика

### Grid Layout
Использует CSS Grid для размещения виджетов. Каждый виджет занимает определенное
количество колонок (w) и строк (h).

### Drag-and-Drop
Виджеты можно перетаскивать за handle (иконка в правом верхнем углу).
При перетаскивании вычисляется новая позиция виджета.

### Размеры виджетов
Каждый виджет имеет свойства w (ширина в колонках) и h (высота в строках).

## Особенности

### Редактируемый режим
При \`editable={false}\` drag-and-drop отключается, виджеты становятся статичными.

### Кастомные виджеты
Используйте slot \`widget\` для кастомного отображения виджетов.

### События
Компонент эмитит события при перемещении, добавлении и удалении виджетов.
        `,
      },
    },
  },
  argTypes: {
    columns: {
      control: 'number',
      min: 1,
      max: 12,
      description: 'Количество колонок в сетке.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '12' },
        category: 'Layout',
      },
    },
    rowHeight: {
      control: 'number',
      min: 50,
      max: 200,
      step: 10,
      description: 'Высота строки в пикселях.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
        category: 'Layout',
      },
    },
    editable: {
      control: 'boolean',
      description: 'Редактируемый режим (drag-and-drop включен).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Behavior',
      },
    },
  },
};

const defaultWidgets = [
  {
    id: 1,
    w: 4,
    h: 2,
    type: 'stat',
    title: 'Пользователи',
    config: { title: 'Всего', value: 1250, icon: UserGroupIcon },
  },
  {
    id: 2,
    w: 4,
    h: 2,
    type: 'stat',
    title: 'Продажи',
    config: { title: 'Сегодня', value: 45230, icon: ChartBarIcon },
  },
  {
    id: 3,
    w: 4,
    h: 2,
    type: 'stat',
    title: 'Доход',
    config: { title: 'За месяц', value: 125000, icon: CurrencyDollarIcon },
  },
  {
    id: 4,
    w: 6,
    h: 3,
    type: 'chart',
    title: 'График продаж',
  },
  {
    id: 5,
    w: 6,
    h: 3,
    type: 'table',
    title: 'Последние заказы',
  },
];

export const Default = {
  args: {
    columns: 12,
    rowHeight: 100,
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовый дашборд с виджетами. Перетаскивайте виджеты за иконку в правом верхнем углу.',
      },
    },
  },
  render: (args) => ({
    components: { DXDashboardGrid, DXStatCard, DXCard },
    setup() {
      const widgets = ref([...defaultWidgets]);
      return { args, widgets };
    },
    template: `
      <DXDashboardGrid v-bind="args" v-model:widgets="widgets">
        <template #widget="{ widget }">
          <DXCard v-if="widget.type === 'stat'" class="h-full">
            <DXStatCard
              :title="widget.config.title"
              :value="widget.config.value"
              :icon="widget.config.icon"
            />
          </DXCard>
          <DXCard v-else class="h-full p-4">
            <h3 class="font-semibold mb-2">{{ widget.title }}</h3>
            <p class="text-sm text-slate-600">Контент виджета {{ widget.type }}</p>
          </DXCard>
        </template>
      </DXDashboardGrid>
    `,
  }),
};

export const WithStatCards = {
  parameters: {
    docs: {
      description: {
        story: 'Дашборд с карточками статистики. Использует DXStatCard для отображения метрик.',
      },
    },
  },
  render: () => ({
    components: { DXDashboardGrid, DXStatCard, DXCard },
    setup() {
      const widgets = ref([
        {
          id: 1,
          w: 3,
          h: 2,
          type: 'stat',
          config: {
            title: 'Всего пользователей',
            value: 1250,
            icon: UserGroupIcon,
          },
        },
        {
          id: 2,
          w: 3,
          h: 2,
          type: 'stat',
          config: {
            title: 'Продажи',
            value: 45230,
            valueFormat: 'currency',
            currency: 'USD',
            trend: { value: 12.5, direction: 'up' },
            icon: ChartBarIcon,
          },
        },
        {
          id: 3,
          w: 3,
          h: 2,
          type: 'stat',
          config: {
            title: 'Конверсия',
            value: 24.5,
            valueFormat: 'percentage',
            trend: { value: 3.2, direction: 'up' },
            icon: CurrencyDollarIcon,
            color: 'success',
          },
        },
        {
          id: 4,
          w: 3,
          h: 2,
          type: 'stat',
          config: {
            title: 'Новые заказы',
            value: 89,
            icon: UserGroupIcon,
            color: 'primary',
          },
        },
      ]);
      return { widgets };
    },
    template: `
      <DXDashboardGrid :widgets="widgets" :columns="12" :row-height="120">
        <template #widget="{ widget }">
          <DXCard class="h-full">
            <DXStatCard
              :title="widget.config.title"
              :value="widget.config.value"
              :value-format="widget.config.valueFormat"
              :currency="widget.config.currency"
              :trend="widget.config.trend"
              :icon="widget.config.icon"
              :color="widget.config.color"
            />
          </DXCard>
        </template>
      </DXDashboardGrid>
    `,
  }),
};

export const ReadOnly = {
  args: {
    columns: 12,
    rowHeight: 100,
    editable: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Дашборд в режиме только для чтения. Drag-and-drop отключен.',
      },
    },
  },
  render: (args) => ({
    components: { DXDashboardGrid, DXCard },
    setup() {
      const widgets = ref([...defaultWidgets]);
      return { args, widgets };
    },
    template: `
      <DXDashboardGrid v-bind="args" v-model:widgets="widgets">
        <template #widget="{ widget }">
          <DXCard class="h-full p-4">
            <h3 class="font-semibold mb-2">{{ widget.title }}</h3>
            <p class="text-sm text-slate-600">Виджет {{ widget.type }}</p>
          </DXCard>
        </template>
      </DXDashboardGrid>
    `,
  }),
};

export const CustomSizes = {
  parameters: {
    docs: {
      description: {
        story: 'Дашборд с различными размерами виджетов. Виджеты имеют разные значения w и h.',
      },
    },
  },
  render: () => ({
    components: { DXDashboardGrid, DXCard },
    setup() {
      const widgets = ref([
        { id: 1, w: 6, h: 2, title: 'Большой виджет 1' },
        { id: 2, w: 3, h: 2, title: 'Маленький виджет 1' },
        { id: 3, w: 3, h: 2, title: 'Маленький виджет 2' },
        { id: 4, w: 4, h: 4, title: 'Высокий виджет' },
        { id: 5, w: 8, h: 2, title: 'Широкий виджет' },
      ]);
      return { widgets };
    },
    template: `
      <DXDashboardGrid :widgets="widgets" :columns="12" :row-height="100">
        <template #widget="{ widget }">
          <DXCard class="h-full p-4">
            <h3 class="font-semibold mb-2">{{ widget.title }}</h3>
            <p class="text-sm text-slate-600">Размер: {{ widget.w }}x{{ widget.h }}</p>
          </DXCard>
        </template>
      </DXDashboardGrid>
    `,
  }),
};

