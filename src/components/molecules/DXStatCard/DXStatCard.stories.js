import { ref } from 'vue';
import DXStatCard from './DXStatCard.vue';
import {
  UserGroupIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/vue/24/outline';

const UserGroupIconComponent = UserGroupIcon;
const ChartBarIconComponent = ChartBarIcon;
const CurrencyDollarIconComponent = CurrencyDollarIcon;
const ArrowTrendingUpIconComponent = ArrowTrendingUpIcon;

export default {
  title: 'Molecules/DXStatCard',
  component: DXStatCard,
  tags: ['autodocs', 'category:data-display', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

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
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: 'number',
      description: 'Значение для отображения.',
      table: {
        type: { summary: 'number | string' },
        category: 'Content',
      },
    },
    valueFormat: {
      control: 'select',
      options: ['number', 'currency', 'percentage'],
      description: 'Формат значения: number | currency | percentage.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'number' },
        category: 'Content',
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Цветовая схема карточки.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
        category: 'Appearance',
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Размер карточки.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
        category: 'Appearance',
      },
    },
    clickable: {
      control: 'boolean',
      description: 'Кликабельная карточка.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
  },
};

export const Default = {
  args: {
    title: 'Всего пользователей',
    value: 1250,
    icon: UserGroupIcon,
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовая карточка статистики с заголовком, значением и иконкой.',
      },
    },
  },
  render: (args) => ({
    components: { DXStatCard },
    setup() {
      return { args };
    },
    template: '<DXStatCard v-bind="args" />',
  }),
};

export const WithTrend = {
  args: {
    title: 'Продажи',
    value: 45230,
    valueFormat: 'currency',
    currency: 'USD',
    trend: { value: 12.5, direction: 'up' },
    comparison: 'vs прошлый месяц',
    icon: ChartBarIcon,
  },
  parameters: {
    docs: {
      description: {
        story: 'Карточка с трендом. Тренд показывает изменение в процентах с визуальной индикацией направления.',
      },
    },
  },
  render: (args) => ({
    components: { DXStatCard },
    setup() {
      return { args };
    },
    template: '<DXStatCard v-bind="args" />',
  }),
};

export const WithPercentage = {
  args: {
    title: 'Конверсия',
    value: 24.5,
    valueFormat: 'percentage',
    trend: { value: 3.2, direction: 'up' },
    icon: ArrowTrendingUpIcon,
    color: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: 'Карточка с процентом. Значение отображается в процентном формате.',
      },
    },
  },
  render: (args) => ({
    components: { DXStatCard },
    setup() {
      return { args };
    },
    template: '<DXStatCard v-bind="args" />',
  }),
};

export const Clickable = {
  args: {
    title: 'Новые заказы',
    value: 89,
    icon: CurrencyDollarIcon,
    color: 'primary',
    clickable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Кликабельная карточка. При клике эмитит событие и имеет hover эффект.',
      },
    },
  },
  render: (args) => ({
    components: { DXStatCard },
    setup() {
      const handleClick = () => {
        console.log('Карточка кликнута');
      };
      return { args, handleClick };
    },
    template: '<DXStatCard v-bind="args" @click="handleClick" />',
  }),
};

export const WithDescription = {
  args: {
    title: 'Активные проекты',
    value: 15,
    description: 'Из 20 запланированных',
    icon: UserGroupIcon,
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Карточка с описанием. Описание отображается под значением.',
      },
    },
  },
  render: (args) => ({
    components: { DXStatCard },
    setup() {
      return { args };
    },
    template: '<DXStatCard v-bind="args" />',
  }),
};

export const AllColors = {
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация всех цветовых схем.',
      },
    },
  },
  render: () => ({
    components: { DXStatCard },
    setup() {
      return {};
    },
    template: `
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
    `,
  }),
};

export const AllSizes = {
  parameters: {
    docs: {
      description: {
        story: 'Различные размеры карточек.',
      },
    },
  },
  render: () => ({
    components: { DXStatCard },
    setup() {
      return {};
    },
    template: `
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
    `,
  }),
};

