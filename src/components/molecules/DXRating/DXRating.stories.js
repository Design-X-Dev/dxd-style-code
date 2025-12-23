import { ref } from 'vue';
import DXRating from './DXRating.vue';
import DXFormControl from '../DXFormControl/DXFormControl.vue';

export default {
  title: 'Molecules/DXRating',
  component: DXRating,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# DXRating

Компонент для отображения и выбора рейтинга с использованием звезд или других символов.

## Назначение

DXRating позволяет отображать и выбирать рейтинг в различных форматах:
звезды, сердца или числа. Поддерживает дробные значения и различные размеры.

## Архитектура

### Использует
- \`DXIcon\` - для отображения символов (звезды, сердца)
- \`useSize\` composable - для размеров
- \`useClassComposition\` composable - для стилей

### Используется в
- Формы отзывов
- Карточки товаров для отображения рейтинга
- Системы обратной связи

## Внутренняя логика

### Символы
- **star**: Звезды (по умолчанию)
- **heart**: Сердца
- **number**: Числа (будущая реализация)

### Дробные значения
При \`allowHalf={true}\` можно выбирать половину значения (например, 4.5).

### Hover эффект
При наведении курсора элементы подсвечиваются для визуальной обратной связи.

## Особенности

### Доступность
- ARIA атрибуты для screen readers
- Клавиатурная навигация (Enter, Space)
- Role="radiogroup" для семантики

### Readonly режим
В readonly режиме компонент только отображает рейтинг без возможности изменения.
        `,
      },
    },
  },
  argTypes: {
    modelValue: {
      control: 'number',
      min: 0,
      max: 5,
      step: 0.5,
      description: 'Значение рейтинга (v-model).',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Content',
      },
    },
    max: {
      control: 'number',
      min: 1,
      max: 10,
      description: 'Максимальное значение рейтинга.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
        category: 'Content',
      },
    },
    readonly: {
      control: 'boolean',
      description: 'Только для чтения (не интерактивный).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    allowHalf: {
      control: 'boolean',
      description: 'Разрешить половину значения (например, 4.5).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    symbol: {
      control: 'select',
      options: ['star', 'heart', 'number'],
      description: 'Символ для отображения: star | heart | number.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'star' },
        category: 'Appearance',
      },
    },
    color: {
      control: 'select',
      options: ['yellow', 'red', 'blue', 'green', 'purple'],
      description: 'Цвет символов.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'yellow' },
        category: 'Appearance',
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Размер компонента.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
        category: 'Appearance',
      },
    },
    count: {
      control: 'number',
      description: 'Количество оценок для отображения.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'null' },
        category: 'Content',
      },
    },
  },
};

export const Default = {
  args: {
    modelValue: 4.5,
    readonly: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовое использование для отображения рейтинга (readonly режим).',
      },
    },
  },
  render: (args) => ({
    components: { DXRating },
    setup() {
      return { args };
    },
    template: '<DXRating v-bind="args" />',
  }),
};

export const Interactive = {
  parameters: {
    docs: {
      description: {
        story: 'Интерактивный выбор рейтинга. Пользователь может выбрать рейтинг кликом.',
      },
    },
  },
  render: () => ({
    components: { DXRating, DXFormControl },
    setup() {
      const productRating = ref(0);
      const handleRatingChange = (value) => {
        console.log('Выбран рейтинг:', value);
      };
      return { productRating, handleRatingChange };
    },
    template: `
      <DXFormControl label="Оцените товар">
        <DXRating
          v-model="productRating"
          :max="5"
          @change="handleRatingChange"
        />
      </DXFormControl>
    `,
  }),
};

export const WithHalf = {
  args: {
    modelValue: 3.5,
    allowHalf: true,
    readonly: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Рейтинг с поддержкой дробных значений. Можно выбрать половину звезды.',
      },
    },
  },
  render: (args) => ({
    components: { DXRating },
    setup() {
      return { args };
    },
    template: '<DXRating v-bind="args" />',
  }),
};

export const WithCount = {
  args: {
    modelValue: 4.2,
    count: 125,
    readonly: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Рейтинг с количеством оценок. Отображает количество оценок рядом с рейтингом.',
      },
    },
  },
  render: (args) => ({
    components: { DXRating },
    setup() {
      return { args };
    },
    template: '<DXRating v-bind="args" />',
  }),
};

export const HeartSymbol = {
  args: {
    modelValue: 4,
    symbol: 'heart',
    color: 'red',
    readonly: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Рейтинг с сердцами вместо звезд. Полезно для лайков и избранного.',
      },
    },
  },
  render: (args) => ({
    components: { DXRating },
    setup() {
      const heartRating = ref(0);
      return { args, heartRating };
    },
    template: `
      <div class="space-y-4">
        <DXRating v-bind="args" />
        <DXRating
          v-model="heartRating"
          :max="5"
          symbol="heart"
          color="red"
        />
        <p class="text-sm text-slate-600">Выбрано: {{ heartRating }}</p>
      </div>
    `,
  }),
};

export const AllSizes = {
  parameters: {
    docs: {
      description: {
        story: 'Различные размеры компонента.',
      },
    },
  },
  render: () => ({
    components: { DXRating },
    setup() {
      return {};
    },
    template: `
      <div class="space-y-4">
        <DXRating :model-value="4" size="xs" readonly />
        <DXRating :model-value="4" size="sm" readonly />
        <DXRating :model-value="4" size="md" readonly />
        <DXRating :model-value="4" size="lg" readonly />
        <DXRating :model-value="4" size="xl" readonly />
      </div>
    `,
  }),
};

export const AllColors = {
  parameters: {
    docs: {
      description: {
        story: 'Различные цвета символов.',
      },
    },
  },
  render: () => ({
    components: { DXRating },
    setup() {
      return {};
    },
    template: `
      <div class="space-y-4">
        <DXRating :model-value="4" color="yellow" readonly />
        <DXRating :model-value="4" color="red" readonly />
        <DXRating :model-value="4" color="blue" readonly />
        <DXRating :model-value="4" color="green" readonly />
        <DXRating :model-value="4" color="purple" readonly />
      </div>
    `,
  }),
};

