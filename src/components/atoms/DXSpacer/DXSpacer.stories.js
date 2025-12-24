import DXSpacer from './DXSpacer.vue';

export default {
  title: 'Atoms/DXSpacer',
  component: DXSpacer,
  tags: ['autodocs', 'category:layout'],
  parameters: {
    docs: {
      description: {
        component: `
Компонент для создания отступов между элементами с поддержкой различных размеров и направлений.

## Назначение

DXSpacer - вспомогательный layout компонент для создания пространства между элементами.
Поддерживает как фиксированные размеры (строковые и числовые), так и динамическое заполнение пространства (flex-grow).

## Архитектура

### Использует
- \`useClassComposition\` composable - для объединения классов

### Используется в
- Вертикальные и горизонтальные отступы между элементами
- Flex контейнеры для распределения пространства
- Формы и группы полей
- Навигационные меню
- Любые места, где требуется добавить пространство между элементами

## Внутренняя логика

### Система размеров
Поддерживает два типа размеров:
- **Строковые значения**: \`xs\`, \`sm\`, \`md\`, \`lg\`, \`xl\`, \`2xl\` - используют предопределенные Tailwind классы
- **Числовые значения**: пиксели (например, \`size={24}\`) - используют inline стили

### Направления
- \`vertical\` - вертикальный отступ (высота)
- \`horizontal\` - горизонтальный отступ (ширина)
- \`both\` - отступ по обеим осям (высота и ширина)

### Flex-grow режим
При \`grow={true}\` компонент использует \`flex-grow\` для заполнения всего доступного пространства.
В этом режиме размеры игнорируются.

### Обработка размеров
- **Строковые значения**: применяются через Tailwind классы (\`h-*\`, \`w-*\`)
- **Числовые значения**: применяются через inline стили (\`height: Npx\`, \`width: Npx\`)
- **Grow режим**: применяется только \`flex-grow\` класс

## Особенности

### Вертикальный отступ
\`\`\`vue
<div>
  <div>Content above</div>
  <DXSpacer size="lg" />
  <div>Content below</div>
</div>
\`\`\`

### Горизонтальный отступ
\`\`\`vue
<div class="flex">
  <div>Left content</div>
  <DXSpacer size="md" direction="horizontal" />
  <div>Right content</div>
</div>
\`\`\`

### Числовые размеры
\`\`\`vue
<DXSpacer :size="32" direction="vertical" />
\`\`\`

### Flex-grow
\`\`\`vue
<div class="flex">
  <div>Start</div>
  <DXSpacer grow />
  <div>End</div>
</div>
\`\`\`

## Ограничения

- Строковые размеры ограничены предопределенными значениями
- Для кастомных размеров используйте числовые значения (px)
- Flex-grow работает только внутри flex контейнеров
- Компонент имеет \`aria-hidden="true"\` для скринридеров (не является семантическим элементом)
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Размер отступа. Поддерживает строковые значения (xs, sm, md, lg, xl, 2xl) для предопределенных размеров или числовые значения (в пикселях) для кастомных размеров.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '"md"' },
        category: 'Spacing',
      },
    },
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal', 'both'],
      description: 'Направление отступа. Vertical создает вертикальный отступ (высота), horizontal - горизонтальный (ширина), both - по обеим осям.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"vertical"' },
        category: 'Layout',
      },
    },
    grow: {
      control: 'boolean',
      description: 'Использовать flex-grow для заполнения всего доступного пространства. При true размеры игнорируются, и компонент заполняет все доступное пространство в flex контейнере.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
  },
};

export const Vertical = {
  parameters: {
    docs: {
      description: {
        story: 'Вертикальный отступ между элементами. Это наиболее распространенный вариант использования DXSpacer. Создает пространство между элементами, расположенными друг под другом.',
      },
    },
  },
  render: () => ({
    components: { DXSpacer },
    template: `
      <div>
        <div class="bg-slate-100 p-4 rounded">Above</div>
        <DXSpacer size="lg" />
        <div class="bg-slate-100 p-4 rounded">Below</div>
      </div>
    `,
  }),
};

export const Horizontal = {
  parameters: {
    docs: {
      description: {
        story: 'Горизонтальный отступ между элементами. Используется внутри flex контейнеров для создания пространства между элементами, расположенными в ряд. Требует flex контейнер для корректной работы.',
      },
    },
  },
  render: () => ({
    components: { DXSpacer },
    template: `
      <div class="flex">
        <div class="bg-slate-100 p-4 rounded">Left</div>
        <DXSpacer size="lg" direction="horizontal" />
        <div class="bg-slate-100 p-4 rounded">Right</div>
      </div>
    `,
  }),
};

export const FlexGrow = {
  parameters: {
    docs: {
      description: {
        story: 'DXSpacer с flex-grow режимом. Заполняет все доступное пространство между элементами в flex контейнере. Полезен для создания макетов, где элементы должны быть по краям, а пространство между ними заполняется автоматически. В этом режиме размеры игнорируются.',
      },
    },
  },
  render: () => ({
    components: { DXSpacer },
    template: `
      <div class="flex">
        <div class="bg-slate-100 p-4 rounded">Start</div>
        <DXSpacer grow />
        <div class="bg-slate-100 p-4 rounded">End</div>
      </div>
    `,
  }),
};

