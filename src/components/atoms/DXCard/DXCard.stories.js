import DXCard from './DXCard.vue';

export default {
  title: 'Atoms/DXCard',
  component: DXCard,
  tags: ['autodocs', 'category:data-display'],
  parameters: {
    docs: {
      description: {
        component: `
Универсальный компонент карточки с различными вариантами оформления и настраиваемым padding.

## Назначение

DXCard предоставляет стандартизированный контейнер для группировки контента. Компонент поддерживает
различные варианты визуального оформления (bordered, elevated, flat) и гибкую систему padding для
создания карточек с различной плотностью контента.

## Архитектура

### Использует
- \`useSpacing\` composable - для унификации padding (none, xs, sm, md, lg, xl)

### Используется в
- \`DXStatCard\` - карточки статистики
- \`DXDashboardWidget\` - виджеты дашборда
- \`DXUserProfileCard\` - карточки профиля
- \`DXMenu\` - контейнеры меню
- Любые места, где требуется визуальное выделение контента

## Внутренняя логика

### Варианты оформления

| Значение | Описание |
|----------|----------|
| \`bordered\` | Карточка с рамкой 2px (\`border-1 border-slate-200\`), без тени (по умолчанию) |
| \`elevated\` | Карточка с большой тенью (\`shadow-lg\`) и тонкой рамкой для эффекта "плавающей" карточки |
| \`flat\` | Минимальное оформление, только фон и скругление, без рамки и тени |

### Система padding

| Значение | Описание |
|----------|----------|
| \`none\` | Без отступов |
| \`xs\` | Минимальные отступы |
| \`sm\` | Маленькие отступы (p-3) |
| \`md\` | Средние отступы (p-5, по умолчанию) |
| \`lg\` | Большие отступы (p-8) |
| \`xl\` | Очень большие отступы |

### Скругление
Все карточки имеют скругление \`rounded-2xl\` для единообразного внешнего вида.

## Особенности

### Базовые стили
- Белый фон (\`bg-white\`)
- Скругление углов (\`rounded-2xl\`)
- Варианты оформления через \`variant\` prop

### Гибкость контента
Компонент использует slot для контента, что позволяет размещать внутри любые элементы:
- Заголовки и текст
- Изображения
- Формы и интерактивные элементы
- Другие компоненты

### Использование в композиции
DXCard часто используется как базовый контейнер для более сложных компонентов:
- Карточки статистики с иконками и метриками
- Виджеты дашборда с графиками
- Карточки профиля с аватарами и информацией
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['bordered', 'elevated', 'flat'],
      description: 'Card variant style'
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Card padding size'
    },
  },
};

export const Default = {
  args: {
    variant: 'bordered',
    padding: 'md',
  },
  render: (args) => ({
    components: { DXCard },
    setup() {
      return { args };
    },
    template: `
      <DXCard v-bind="args">
        <h3 class="text-lg font-semibold text-slate-900 mb-2">Card Title</h3>
        <p class="text-sm text-slate-600">
          This is a card component with default styling. It includes border, shadow, and padding.
        </p>
      </DXCard>
    `,
  }),
};

// All variants
export const Variants = {
  render: () => ({
    components: { DXCard },
    template: `
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Bordered (2px border, no shadow) - Default</p>
          <DXCard variant="bordered">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Bordered Card</h3>
            <p class="text-sm text-slate-600">
              More prominent border without shadow for emphasis.
            </p>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Elevated (large shadow)</p>
          <DXCard variant="elevated">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Elevated Card</h3>
            <p class="text-sm text-slate-600">
              Pronounced shadow creates a floating effect.
            </p>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Flat (no border or shadow)</p>
          <DXCard variant="flat">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Flat Card</h3>
            <p class="text-sm text-slate-600">
              Minimal styling, just background color and rounded corners.
            </p>
          </DXCard>
        </div>
      </div>
    `,
  }),
};

// All padding sizes
export const PaddingSizes = {
  render: () => ({
    components: { DXCard },
    template: `
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">No Padding</p>
          <DXCard padding="none">
            <div class="h-32 flex items-center justify-center text-slate-500">
              Content with no padding
            </div>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Small Padding (p-3)</p>
          <DXCard padding="sm">
            <h3 class="text-base font-semibold text-slate-900 mb-1">Small</h3>
            <p class="text-sm text-slate-600">Compact padding for dense layouts.</p>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Medium Padding (p-5, default)</p>
          <DXCard padding="md">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Medium</h3>
            <p class="text-sm text-slate-600">Standard padding for most use cases.</p>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Large Padding (p-8)</p>
          <DXCard padding="lg">
            <h3 class="text-xl font-semibold text-slate-900 mb-3">Large</h3>
            <p class="text-sm text-slate-600">Generous padding for spacious layouts.</p>
          </DXCard>
        </div>
      </div>
    `,
  }),
};
