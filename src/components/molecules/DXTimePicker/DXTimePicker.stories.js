import { ref } from 'vue';
import DXTimePicker from './DXTimePicker.vue';

export default {
  title: 'Molecules/DXTimePicker',
  component: DXTimePicker,
  tags: ['autodocs', 'category:form'],
  parameters: {
    docs: {
      description: {
        component: `
Компонент выбора времени с валидацией и поддержкой различных форматов.

## Назначение

DXTimePicker позволяет пользователям выбирать время через input с валидацией или через dropdown.
Поддерживает форматы 12h и 24h, с секундами или без.

## Архитектура

### Использует
- \`DXInput\` - базовый компонент input
- \`useSize\` composable - для размеров
- \`ClockIcon\` - иконка часов

### Используется в
- Формы с выбором времени
- Интеграция с \`DXDatePicker\` для выбора даты и времени
- Планировщики и календари

## Внутренняя логика

### Форматы времени
- **12h**: формат с AM/PM (например, "02:30 PM")
- **24h**: 24-часовой формат (например, "14:30")

### Валидация
- Проверка корректности формата времени
- Поддержка min-time и max-time для ограничения диапазона
- Автоматическая валидация при blur

### Dropdown
- Грид с часами, минутами и секундами (опционально)
- Выбор через клик
- Автоматическое закрытие при клике вне компонента

## Особенности

### Ручной ввод
Пользователь может вводить время вручную в input. Компонент автоматически парсит и валидирует введенное значение.

### Dropdown выбор
При фокусе на input открывается dropdown с предустановленными значениями для быстрого выбора.

### Интеграция с формами
Полностью совместим с v-model и стандартными событиями Vue (change, blur, focus).
        `,
      },
    },
  },
  argTypes: {
    format: {
      control: 'select',
      options: ['12h', '24h'],
      description: 'Формат времени: 12h (с AM/PM) или 24h.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '24h' },
        category: 'Format',
      },
    },
    showSeconds: {
      control: 'boolean',
      description: 'Показывать секунды в формате времени.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Format',
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
    disabled: {
      control: 'boolean',
      description: 'Отключенное состояние.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    minTime: {
      control: 'text',
      description: 'Минимальное допустимое время (HH:mm или HH:mm:ss).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
        category: 'Validation',
      },
    },
    maxTime: {
      control: 'text',
      description: 'Максимальное допустимое время (HH:mm или HH:mm:ss).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
        category: 'Validation',
      },
    },
  },
};

export const Default = {
  args: {
    format: '24h',
    placeholder: 'Выберите время',
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовое использование компонента в 24-часовом формате.',
      },
    },
  },
  render: (args) => ({
    components: { DXTimePicker },
    setup() {
      const time = ref('');
      return { args, time };
    },
    template: '<DXTimePicker v-model="time" v-bind="args" label="Время" />',
  }),
};

export const Format12h = {
  args: {
    format: '12h',
    placeholder: 'Выберите время',
  },
  parameters: {
    docs: {
      description: {
        story: 'Использование 12-часового формата с AM/PM.',
      },
    },
  },
  render: (args) => ({
    components: { DXTimePicker },
    setup() {
      const time = ref('');
      return { args, time };
    },
    template: '<DXTimePicker v-model="time" v-bind="args" label="Время (12h)" />',
  }),
};

export const WithSeconds = {
  args: {
    format: '24h',
    showSeconds: true,
    placeholder: 'Выберите время',
  },
  parameters: {
    docs: {
      description: {
        story: 'Компонент с отображением секунд.',
      },
    },
  },
  render: (args) => ({
    components: { DXTimePicker },
    setup() {
      const time = ref('');
      return { args, time };
    },
    template: '<DXTimePicker v-model="time" v-bind="args" label="Время с секундами" />',
  }),
};

export const WithMinMax = {
  args: {
    format: '24h',
    minTime: '09:00',
    maxTime: '18:00',
    placeholder: 'Выберите время',
  },
  parameters: {
    docs: {
      description: {
        story: 'Компонент с ограничением диапазона времени (рабочие часы 9:00 - 18:00).',
      },
    },
  },
  render: (args) => ({
    components: { DXTimePicker },
    setup() {
      const time = ref('');
      return { args, time };
    },
    template: '<DXTimePicker v-model="time" v-bind="args" label="Рабочее время" helper="Выберите время с 9:00 до 18:00" />',
  }),
};

export const WithValue = {
  args: {
    format: '24h',
  },
  parameters: {
    docs: {
      description: {
        story: 'Компонент с предустановленным значением.',
      },
    },
  },
  render: (args) => ({
    components: { DXTimePicker },
    setup() {
      const time = ref('14:30');
      return { args, time };
    },
    template: '<DXTimePicker v-model="time" v-bind="args" label="Время" />',
  }),
};

export const Disabled = {
  args: {
    format: '24h',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Отключенное состояние компонента.',
      },
    },
  },
  render: (args) => ({
    components: { DXTimePicker },
    setup() {
      const time = ref('14:30');
      return { args, time };
    },
    template: '<DXTimePicker v-model="time" v-bind="args" label="Время" />',
  }),
};

export const Sizes = {
  parameters: {
    docs: {
      description: {
        story: 'Различные размеры компонента.',
      },
    },
  },
  render: () => ({
    components: { DXTimePicker },
    setup() {
      const time1 = ref('');
      const time2 = ref('');
      const time3 = ref('');
      return { time1, time2, time3 };
    },
    template: `
      <div class="space-y-4">
        <DXTimePicker v-model="time1" size="sm" label="Маленький" />
        <DXTimePicker v-model="time2" size="md" label="Средний" />
        <DXTimePicker v-model="time3" size="lg" label="Большой" />
      </div>
    `,
  }),
};

