import DXContainer from './DXContainer.vue';

export default {
  title: 'Atoms/DXContainer',
  component: DXContainer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# DXContainer

Контейнер с ограниченной шириной для центрирования контента на странице.

## Назначение

DXContainer - layout компонент для создания контейнеров с ограниченной максимальной шириной.
Автоматически центрирует контент на больших экранах, обеспечивая оптимальную читаемость и структуру страницы.

## Архитектура

### Использует
- \`useSpacing\` composable - для унификации горизонтальных отступов (padding-x)
- \`useClassComposition\` composable - для объединения классов

### Используется в
- Основные layout страниц и разделов
- \`DXAppLayout\` - для контентной области
- Блоги и статьи
- Формы и модальные окна
- Любые места, где требуется ограничение ширины контента

## Внутренняя логика

### Адаптивные размеры
Компонент использует Tailwind классы \`max-w-screen-*\` для ограничения ширины:
- \`sm\` → \`max-w-screen-sm\` (640px)
- \`md\` → \`max-w-screen-md\` (768px)
- \`lg\` → \`max-w-screen-lg\` (1024px)
- \`xl\` → \`max-w-screen-xl\` (1280px)
- \`2xl\` → \`max-w-screen-2xl\` (1536px)
- \`full\` → \`max-w-full\` (100%)

### Автоматическое центрирование
По умолчанию контейнер центрируется через \`mx-auto\` (margin: 0 auto).
Это можно отключить через prop \`center={false}\`.

### Горизонтальные отступы
Компонент применяет горизонтальные отступы (padding-x) для создания пространства
от краев экрана на мобильных устройствах. Использует систему spacing из \`useSpacing\`.

## Особенности

### Адаптивная ширина
\`\`\`vue
<DXContainer size="lg">Content</DXContainer>
\`\`\`

### Без центрирования
\`\`\`vue
<DXContainer size="xl" :center="false">Left-aligned</DXContainer>
\`\`\`

### Кастомные отступы
\`\`\`vue
<DXContainer size="lg" padding="lg">Content with large padding</DXContainer>
\`\`\`

## Ограничения

- Размеры привязаны к Tailwind breakpoints
- Вертикальные отступы не управляются компонентом (используйте DXBox или CSS)
- Для кастомной максимальной ширины используйте CSS классы через \`class\` prop
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
      description: 'Максимальная ширина контейнера. Определяет максимальную ширину контента на больших экранах. Использует Tailwind классы max-w-screen-*.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"lg"' },
        category: 'Layout',
      },
    },
    center: {
      control: 'boolean',
      description: 'Автоматически центрировать контейнер. При true применяет mx-auto для горизонтального центрирования.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Behavior',
      },
    },
    padding: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Горизонтальные отступы (padding-x) контейнера. Создает пространство от краев экрана на мобильных устройствах. Использует систему spacing из useSpacing.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"md"' },
        category: 'Spacing',
      },
    },
  },
};

export const Default = {
  args: { size: 'lg' },
  parameters: {
    docs: {
      description: {
        story: 'Базовый контейнер с размером lg. Автоматически центрируется и ограничивает ширину контента для оптимальной читаемости.',
      },
    },
  },
  render: (args) => ({
    components: { DXContainer },
    setup() { return { args }; },
    template: '<DXContainer v-bind="args" class="bg-slate-100 py-8"><div class="bg-white p-4 rounded">Content inside container</div></DXContainer>',
  }),
};

export const Sizes = {
  parameters: {
    docs: {
      description: {
        story: 'Все доступные размеры контейнера. Размер определяет максимальную ширину контента на больших экранах. На мобильных устройствах контейнер занимает всю ширину с учетом padding.',
      },
    },
  },
  render: () => ({
    components: { DXContainer },
    template: `
      <div class="space-y-4">
        <DXContainer size="sm" class="bg-blue-100 py-4"><div class="bg-white p-2 rounded">Small</div></DXContainer>
        <DXContainer size="md" class="bg-green-100 py-4"><div class="bg-white p-2 rounded">Medium</div></DXContainer>
        <DXContainer size="lg" class="bg-yellow-100 py-4"><div class="bg-white p-2 rounded">Large</div></DXContainer>
        <DXContainer size="xl" class="bg-red-100 py-4"><div class="bg-white p-2 rounded">Extra Large</div></DXContainer>
      </div>
    `,
  }),
};

