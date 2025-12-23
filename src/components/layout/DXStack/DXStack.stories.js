import DXStack from './DXStack.vue';

export default {
  title: 'Layout/DXStack',
  component: DXStack,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# DXStack

Вертикальный или горизонтальный стек элементов с единообразными отступами и поддержкой разделителей.

## Назначение

DXStack - упрощенный layout компонент для создания стеков элементов (вертикальных или горизонтальных).
Предоставляет более простой API по сравнению с DXFlex, фокусируясь на типичных случаях использования стеков.

## Архитектура

### Использует
- \`useSize\` composable - для унификации отступов между элементами (gap)
- \`useClassComposition\` composable - для объединения классов

### Используется в
- Списки элементов и карточек
- Формы и группы полей
- Навигационные меню
- Комментарии и отзывы
- Любые места, где требуется стек элементов с единообразными отступами

## Внутренняя логика

### Упрощенное направление
В отличие от DXFlex, использует упрощенные значения:
- \`vertical\` → \`flex-col\` (вертикальный стек)
- \`horizontal\` → \`flex-row\` (горизонтальный стек)

### Расширенный gap
Использует \`useSize\` с типом \`spacing\` для стандартных значений gap (none, xs, sm, md, lg, xl).
Поддерживает дополнительное значение \`2xl\` для больших отступов (gap-12),
которое обрабатывается специально, так как не входит в стандартную размерную сетку.

### Разделители (dividers)
Автоматически добавляет разделители между элементами:
- Для \`vertical\` → горизонтальные разделители (\`divide-y\`)
- Для \`horizontal\` → вертикальные разделители (\`divide-x\`)

### Упрощенное выравнивание
Предоставляет только основные варианты выравнивания:
- \`start\`, \`center\`, \`end\`, \`stretch\`

## Особенности

### Вертикальный стек
\`\`\`vue
<DXStack direction="vertical" gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
</DXStack>
\`\`\`

### Горизонтальный стек
\`\`\`vue
<DXStack direction="horizontal" gap="lg" align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</DXStack>
\`\`\`

### С разделителями
\`\`\`vue
<DXStack direction="vertical" gap="md" dividers>
  <div>Item 1</div>
  <div>Item 2</div>
</DXStack>
\`\`\`

## Отличия от DXFlex

- **Упрощенный API**: меньше props, более понятные значения
- **Семантические названия**: \`vertical\`/\`horizontal\` вместо \`col\`/\`row\`
- **Расширенный gap**: поддержка \`2xl\`
- **Встроенные разделители**: опция \`dividers\` для автоматических разделителей
- **Меньше опций**: фокус на типичных случаях использования

## Ограничения

- Не поддерживает \`row-reverse\` и \`col-reverse\` (используйте DXFlex)
- Ограниченный набор вариантов justify (используйте DXFlex для полного контроля)
- Для сложных flex макетов используйте DXFlex
        `,
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Направление стека элементов. Vertical располагает элементы вертикально (друг под другом), horizontal - горизонтально (в ряд).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"vertical"' },
        category: 'Layout',
      },
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Отступ между элементами стека. Поддерживает расширенное значение 2xl для больших отступов, которое не доступно в стандартном useSpacing.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"md"' },
        category: 'Spacing',
      },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Выравнивание элементов по поперечной оси. Определяет, как элементы выравниваются перпендикулярно направлению стека.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"stretch"' },
        category: 'Alignment',
      },
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around'],
      description: 'Распределение элементов по главной оси. Управляет распределением пространства между элементами вдоль направления стека.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"start"' },
        category: 'Alignment',
      },
    },
    dividers: {
      control: 'boolean',
      description: 'Добавлять разделители между элементами. Для vertical стека добавляет горизонтальные разделители, для horizontal - вертикальные.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
  },
};

const item = '<div class="bg-slate-100 p-4 rounded-lg">Stack Item</div>';

export const Vertical = {
  args: { direction: 'vertical', gap: 'md' },
  parameters: {
    docs: {
      description: {
        story: 'Вертикальный стек элементов. Это наиболее распространенный вариант использования DXStack. Элементы располагаются друг под другом с единообразными отступами.',
      },
    },
  },
  render: (args) => ({
    components: { DXStack },
    setup() { return { args }; },
    template: `<DXStack v-bind="args">${item.repeat(4)}</DXStack>`,
  }),
};

export const Horizontal = {
  args: { direction: 'horizontal', gap: 'md' },
  parameters: {
    docs: {
      description: {
        story: 'Горизонтальный стек элементов. Элементы располагаются в ряд (слева направо) с единообразными отступами между ними. Полезен для создания горизонтальных списков и групп элементов.',
      },
    },
  },
  render: (args) => ({
    components: { DXStack },
    setup() { return { args }; },
    template: `<DXStack v-bind="args">${item.repeat(4)}</DXStack>`,
  }),
};

export const WithDividers = {
  args: { direction: 'vertical', gap: 'md', dividers: true },
  parameters: {
    docs: {
      description: {
        story: 'Стек с разделителями между элементами. Автоматически добавляет визуальные разделители (горизонтальные для vertical стека, вертикальные для horizontal). Используется для четкого визуального разделения элементов.',
      },
    },
  },
  render: (args) => ({
    components: { DXStack },
    setup() { return { args }; },
    template: `<DXStack v-bind="args">${item.repeat(3)}</DXStack>`,
  }),
};

