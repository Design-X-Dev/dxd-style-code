import DXProgress from './DXProgress.vue';

export default {
  title: 'Atoms/DXProgress',
  component: DXProgress,
  tags: ['autodocs', 'category:feedback', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент прогресс-бара для отображения прогресса выполнения задачи с поддержкой различных размеров, цветов и режимов отображения.

## Назначение

DXProgress предоставляет стандартизированный способ отображения прогресса выполнения задачи.
Компонент поддерживает различные размеры, цвета, анимации, полосатый фон и различные варианты
отображения значения.

## Архитектура

### Использует
- \`useSize\` composable - для унификации размеров (xs, sm, md, lg)
- \`useVariantProgress\` composable - для цветовых вариантов
- \`useAnimation\` composable - для анимаций

### Используется в
- Загрузка файлов
- Процесс выполнения задач
- Индикаторы прогресса
- Любые места, требующие отображения прогресса

## Внутренняя логика

### Расчет прогресса
Прогресс рассчитывается как процент от диапазона:
\`\`\`
percentage = ((value - min) / (max - min)) * 100
\`\`\`

### Размеры

| Значение | Описание |
|----------|----------|
| \`xs\` | Очень маленький |
| \`sm\` | Маленький |
| \`md\` | Средний (по умолчанию) |
| \`lg\` | Большой |

### Цвета

| Значение | Описание |
|----------|----------|
| \`default\` | Стандартный цвет (по умолчанию) |
| \`success\` | Зеленый цвет |
| \`warning\` | Желтый цвет |
| \`danger\` | Красный цвет |
| \`info\` | Синий цвет |

### Режимы отображения значения
- **showLabel** - показывать лейбл слева (через slot или prop)
- **showValue** - показывать значение справа (в процентах)
- **showInnerValue** - показывать значение внутри бара (только если процент > 10)

### Анимации
- **animated** - анимация заполнения бара
- **striped** - полосатый фон для визуального эффекта

## Особенности

### Минимальные и максимальные значения
Поддерживает настраиваемые \`min\` и \`max\` значения (по умолчанию 0 и 100).

### Доступность
- Использует \`role="progressbar"\`
- Правильные ARIA атрибуты (\`aria-valuenow\`, \`aria-valuemin\`, \`aria-valuemax\`)

### Слоты
- **label** - кастомный лейбл (если нужно)
- **default** - основной контент (если нужно)
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Текущее значение прогресса',
    },
    min: {
      control: { type: 'number' },
      description: 'Минимальное значение',
    },
    max: {
      control: { type: 'number' },
      description: 'Максимальное значение',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Размер прогресс-бара',
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'danger', 'info'],
      description: 'Цвет прогресс-бара',
    },
    label: {
      control: { type: 'text' },
      description: 'Текст лейбла',
    },
    showLabel: {
      control: { type: 'boolean' },
      description: 'Показывать лейбл',
    },
    showValue: {
      control: { type: 'boolean' },
      description: 'Показывать значение справа',
    },
    showInnerValue: {
      control: { type: 'boolean' },
      description: 'Показывать значение внутри бара',
    },
    striped: {
      control: { type: 'boolean' },
      description: 'Полосатый фон',
    },
    animated: {
      control: { type: 'boolean' },
      description: 'Анимированные полосы',
    },
  },
};

export const Default = {
  args: {
    value: 60,
    size: 'md',
    color: 'default',
  },
  render: (args) => ({
    components: { DXProgress },
    setup() { return { args }; },
    template: '<DXProgress v-bind="args" />',
  }),
};

export const Sizes = {
  render: () => ({
    components: { DXProgress },
    template: `
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">xs (h-1)</span>
          <DXProgress :value="60" size="xs" />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">sm (h-2)</span>
          <DXProgress :value="60" size="sm" />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">md (h-3)</span>
          <DXProgress :value="60" size="md" />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">lg (h-4)</span>
          <DXProgress :value="60" size="lg" />
        </div>
        <div class="text-sm text-slate-500 mt-2">
          Все размеры: xs | sm | md | lg
        </div>
      </div>
    `,
  }),
};

export const Variants = {
  render: () => ({
    components: { DXProgress },
    template: `
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-4 w-full">
          <h3 class="text-sm font-semibold text-slate-700">Цветовые варианты</h3>
          <div class="space-y-4">
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Default</span>
              <DXProgress :value="75" color="default" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Success</span>
              <DXProgress :value="75" color="success" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Warning</span>
              <DXProgress :value="75" color="warning" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Danger</span>
              <DXProgress :value="75" color="danger" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Info</span>
              <DXProgress :value="75" color="info" />
            </div>
          </div>
        </div>
        <div class="text-sm text-slate-500">
          Все варианты: default | success | warning | danger | info
        </div>
      </div>
    `,
  }),
};

export const WithLabel = {
  render: () => ({
    components: { DXProgress },
    template: `
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">С лейблом и значением</h3>
          <DXProgress 
            :value="75" 
            label="Загрузка файлов" 
            :show-label="true" 
            :show-value="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Только лейбл</h3>
          <DXProgress 
            :value="50" 
            label="Обработка данных" 
            :show-label="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Только значение</h3>
          <DXProgress 
            :value="90" 
            :show-value="true" 
          />
        </div>
      </div>
    `,
  }),
};

export const WithInnerValue = {
  render: () => ({
    components: { DXProgress },
    template: `
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Значение внутри бара</h3>
          <DXProgress 
            :value="65" 
            color="success"
            :show-inner-value="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">С лейблом и внутренним значением</h3>
          <DXProgress 
            :value="80" 
            label="Синхронизация"
            color="info"
            :show-label="true"
            :show-inner-value="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Разные значения</h3>
          <DXProgress :value="25" color="danger" :show-inner-value="true" />
          <DXProgress :value="50" color="warning" :show-inner-value="true" />
          <DXProgress :value="75" color="success" :show-inner-value="true" />
        </div>
      </div>
    `,
  }),
};

export const Striped = {
  render: () => ({
    components: { DXProgress },
    template: `
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Полосатый (без анимации)</h3>
          <DXProgress :value="70" color="default" :striped="true" />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Анимированные полосы</h3>
          <DXProgress :value="70" color="success" :striped="true" :animated="true" />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Разные цвета с анимацией</h3>
          <DXProgress :value="60" color="default" :striped="true" :animated="true" />
          <DXProgress :value="60" color="success" :striped="true" :animated="true" />
          <DXProgress :value="60" color="warning" :striped="true" :animated="true" />
          <DXProgress :value="60" color="danger" :striped="true" :animated="true" />
          <DXProgress :value="60" color="info" :striped="true" :animated="true" />
        </div>
      </div>
    `,
  }),
};

export const SizesAndVariants = {
  render: () => ({
    components: { DXProgress },
    template: `
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Размеры с вариантом success</h3>
          <div class="space-y-4">
            <DXProgress :value="70" size="xs" color="success" />
            <DXProgress :value="70" size="sm" color="success" />
            <DXProgress :value="70" size="md" color="success" />
            <DXProgress :value="70" size="lg" color="success" />
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Размеры с вариантом danger</h3>
          <div class="space-y-4">
            <DXProgress :value="40" size="xs" color="danger" />
            <DXProgress :value="40" size="sm" color="danger" />
            <DXProgress :value="40" size="md" color="danger" />
            <DXProgress :value="40" size="lg" color="danger" />
          </div>
        </div>
      </div>
    `,
  }),
};

export const UseCases = {
  render: () => ({
    components: { DXProgress },
    template: `
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Загрузка файла</h3>
          <DXProgress 
            :value="45" 
            label="Загрузка файла.pdf" 
            :show-label="true" 
            :show-value="true"
            color="info"
          />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Обработка данных</h3>
          <DXProgress 
            :value="80" 
            label="Обработка данных" 
            :show-label="true" 
            :show-inner-value="true"
            color="success"
            :striped="true"
            :animated="true"
          />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Ошибка загрузки</h3>
          <DXProgress 
            :value="30" 
            label="Ошибка загрузки" 
            :show-label="true" 
            :show-value="true"
            color="danger"
          />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Кастомный диапазон</h3>
          <DXProgress 
            :value="150" 
            :min="0" 
            :max="200"
            label="Прогресс: 150/200" 
            :show-label="true" 
            :show-value="true"
            color="warning"
          />
        </div>
      </div>
    `,
  }),
};

