import DXRadioGroup from './DXRadioGroup.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXRadioGroup',
  component: DXRadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# DXRadioGroup

Компонент группы радиокнопок для выбора одного значения из списка опций.

## Назначение

DXRadioGroup предоставляет способ группировки радиокнопок для выбора одного значения.
Компонент автоматически управляет состоянием выбора, синхронизирует стили и поддерживает
вертикальное и горизонтальное расположение.

## Архитектура

### Использует
- \`DXRadio\` - отдельные радиокнопки в группе

### Используется в
- Формы с выбором одного варианта
- Настройки и конфигурация
- Фильтры с одним выбором
- Любые места, требующие выбор одного значения из группы

## Внутренняя логика

### Структура опций
Опции передаются через массив объектов:
\`\`\`
[{ value: 'value1', label: 'Label 1' }, { value: 'value2', label: 'Label 2' }]
\`\`\`

Каждая опция может содержать:
- \`value\` - значение опции (обязательно)
- \`label\` - текст опции (обязательно)
- \`disabled\` - отключить конкретную опцию
- \`color\` - цвет для custom variant (переопределяет глобальный цвет)

### Расположение
- **vertical** (по умолчанию): Вертикальное расположение (\`flex-col\`)
- **horizontal**: Горизонтальное расположение (\`flex flex-wrap\`)

### Варианты
- **default**: Нативные радиокнопки с кастомной стилизацией
- **custom**: Кастомные радиокнопки с точкой и настраиваемыми цветами

### Размеры
Поддерживает 3 размера:
- **sm** - маленький
- **md** - средний (по умолчанию)
- **lg** - большой

### Цвета (для custom variant)
Поддерживает 6 цветовых вариантов:
- **slate** - нейтральный серый
- **primary** - основной цвет (по умолчанию)
- **success** - зеленый цвет
- **danger** - красный цвет
- **warning** - желтый цвет
- **info** - синий цвет

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\` для String, Number или Boolean значений.

### Лейбл и вспомогательный текст
- \`label\` - отображается над группой
- \`helper\` - вспомогательный текст под группой

### Состояния
- **disabled** - отключает всю группу
- Можно отключить отдельные опции через \`disabled\` в объекте опции

### Синхронизация
Все радиокнопки в группе автоматически синхронизируются:
- Размер применяется ко всем кнопкам
- Вариант применяется ко всем кнопкам
- Цвет применяется ко всем кнопкам (если не переопределен в опции)
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'custom'],
      description: 'Radio variant'
    },
    color: {
      control: 'select',
      options: ['slate', 'primary', 'success', 'danger', 'warning', 'info'],
      description: 'Color for custom variant'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Radio size'
    },
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Layout direction'
    },
  },
};

const sizeOptions = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
];

const planOptions = [
  { value: 'free', label: 'Free Plan' },
  { value: 'basic', label: 'Basic Plan' },
  { value: 'pro', label: 'Pro Plan' },
  { value: 'enterprise', label: 'Enterprise Plan' },
];

// Default
export const Default = {
  render: () => ({
    components: { DXRadioGroup },
    setup() {
      const selected = ref('medium');
      return { selected, sizeOptions };
    },
    template: '<DXRadioGroup v-model="selected" :options="sizeOptions" label="Choose size" />',
  }),
};

// Horizontal layout
export const Horizontal = {
  render: () => ({
    components: { DXRadioGroup },
    setup() {
      const selected = ref('medium');
      return { selected, sizeOptions };
    },
    template: '<DXRadioGroup v-model="selected" :options="sizeOptions" label="Choose size" layout="horizontal" />',
  }),
};

// With helper text
export const WithHelper = {
  render: () => ({
    components: { DXRadioGroup },
    setup() {
      const selected = ref('medium');
      return { selected, sizeOptions };
    },
    template: '<DXRadioGroup v-model="selected" :options="sizeOptions" label="T-shirt size" helper="Select your preferred size" />',
  }),
};

// Custom variant
export const CustomVariant = {
  render: () => ({
    components: { DXRadioGroup },
    setup() {
      const selected = ref('pro');
      return { selected, planOptions };
    },
    template: '<DXRadioGroup v-model="selected" :options="planOptions" label="Select plan" variant="custom" />',
  }),
};

// Custom variant with color
export const CustomWithColor = {
  render: () => ({
    components: { DXRadioGroup },
    setup() {
      const selected = ref('pro');
      return { selected, planOptions };
    },
    template: '<DXRadioGroup v-model="selected" :options="planOptions" label="Select plan" variant="custom" color="success" />',
  }),
};

// Custom horizontal
export const CustomHorizontal = {
  render: () => ({
    components: { DXRadioGroup },
    setup() {
      const selected = ref('basic');
      return { selected, planOptions };
    },
    template: '<DXRadioGroup v-model="selected" :options="planOptions" label="Choose your plan" variant="custom" color="info" layout="horizontal" />',
  }),
};

// Different colors
export const DifferentColors = {
  render: () => ({
    components: { DXRadioGroup },
    setup() {
      const slate = ref('medium');
      const primary = ref('medium');
      const success = ref('medium');
      const danger = ref('medium');
      const warning = ref('medium');
      const info = ref('medium');
      return { slate, primary, success, danger, warning, info, sizeOptions };
    },
    template: `
      <div class="space-y-6">
        <DXRadioGroup v-model="slate" :options="sizeOptions" label="Slate" variant="custom" color="slate" />
        <DXRadioGroup v-model="primary" :options="sizeOptions" label="Primary (default)" variant="custom" color="primary" />
        <DXRadioGroup v-model="success" :options="sizeOptions" label="Success" variant="custom" color="success" />
        <DXRadioGroup v-model="danger" :options="sizeOptions" label="Danger" variant="custom" color="danger" />
        <DXRadioGroup v-model="warning" :options="sizeOptions" label="Warning" variant="custom" color="warning" />
        <DXRadioGroup v-model="info" :options="sizeOptions" label="Info" variant="custom" color="info" />
      </div>
    `,
  }),
};

// Sizes
export const Sizes = {
  render: () => ({
    components: { DXRadioGroup },
    setup() {
      const sm = ref('medium');
      const md = ref('medium');
      const lg = ref('medium');
      return { sm, md, lg, sizeOptions };
    },
    template: `
      <div class="space-y-6">
        <DXRadioGroup v-model="sm" :options="sizeOptions" label="Small" size="sm" variant="custom" />
        <DXRadioGroup v-model="md" :options="sizeOptions" label="Medium (default)" size="md" variant="custom" />
        <DXRadioGroup v-model="lg" :options="sizeOptions" label="Large" size="lg" variant="custom" />
      </div>
    `,
  }),
};

// Individual option colors
export const IndividualColors = {
  render: () => ({
    components: { DXRadioGroup },
    setup() {
      const options = [
        { value: 'free', label: 'Free Plan', color: 'slate' },
        { value: 'basic', label: 'Basic Plan', color: 'info' },
        { value: 'pro', label: 'Pro Plan', color: 'success' },
        { value: 'enterprise', label: 'Enterprise Plan', color: 'danger' },
      ];
      const selected = ref('pro');
      return { selected, options };
    },
    template: '<DXRadioGroup v-model="selected" :options="options" label="Select plan (each with own color)" variant="custom" />',
  }),
};

// Disabled
export const Disabled = {
  render: () => ({
    components: { DXRadioGroup },
    setup() {
      const selected = ref('medium');
      return { selected, sizeOptions };
    },
    template: '<DXRadioGroup v-model="selected" :options="sizeOptions" label="Disabled group" disabled />',
  }),
};

// Disabled individual option
export const DisabledOption = {
  render: () => ({
    components: { DXRadioGroup },
    setup() {
      const options = [
        { value: 'small', label: 'Small' },
        { value: 'medium', label: 'Medium (disabled)', disabled: true },
        { value: 'large', label: 'Large' },
      ];
      const selected = ref('small');
      return { selected, options };
    },
    template: '<DXRadioGroup v-model="selected" :options="options" label="With disabled option" variant="custom" />',
  }),
};

// Real-world: Payment method
export const PaymentMethod = {
  render: () => ({
    components: { DXRadioGroup },
    setup() {
      const options = [
        { value: 'card', label: 'Credit Card', color: 'primary' },
        { value: 'paypal', label: 'PayPal', color: 'info' },
        { value: 'bank', label: 'Bank Transfer', color: 'success' },
        { value: 'crypto', label: 'Cryptocurrency', color: 'warning' },
      ];
      const method = ref('card');
      return { method, options };
    },
    template: `
      <div class="bg-white p-6 rounded-xl border border-slate-200 max-w-md">
        <DXRadioGroup 
          v-model="method" 
          :options="options" 
          label="Payment Method"
          helper="Choose your preferred payment method"
          variant="custom"
        />
      </div>
    `,
  }),
};

// Real-world: Difficulty level
export const DifficultyLevel = {
  render: () => ({
    components: { DXRadioGroup },
    setup() {
      const options = [
        { value: 'easy', label: 'Easy - Perfect for beginners', color: 'success' },
        { value: 'medium', label: 'Medium - Some experience needed', color: 'warning' },
        { value: 'hard', label: 'Hard - For experts only', color: 'danger' },
      ];
      const difficulty = ref('medium');
      return { difficulty, options };
    },
    template: `
      <div class="bg-white p-6 rounded-xl border border-slate-200 max-w-md">
        <DXRadioGroup 
          v-model="difficulty" 
          :options="options" 
          label="Select Difficulty"
          variant="custom"
        />
      </div>
    `,
  }),
};

// Comparison: Default vs Custom
export const DefaultVsCustom = {
  render: () => ({
    components: { DXRadioGroup },
    setup() {
      const defaultSelected = ref('medium');
      const customSelected = ref('medium');
      return { defaultSelected, customSelected, sizeOptions };
    },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 bg-slate-50 rounded-xl">
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Default Variant</h3>
          <DXRadioGroup 
            v-model="defaultSelected" 
            :options="sizeOptions" 
            label="Native radio buttons"
          />
        </div>
        
        <div class="p-6 bg-slate-50 rounded-xl">
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Custom Variant</h3>
          <DXRadioGroup 
            v-model="customSelected" 
            :options="sizeOptions" 
            label="Custom styled radio"
            variant="custom"
            color="success"
          />
        </div>
      </div>
    `,
  }),
};
