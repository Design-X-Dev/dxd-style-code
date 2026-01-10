import DXFlex from './DXFlex.vue';

export default {
  title: 'Atoms/DXFlex',
  component: DXFlex,
  tags: ['autodocs', 'category:layout'],
  parameters: {
    docs: {
      description: {
        component: `
Flexbox контейнер с полным контролем над направлением, выравниванием и отступами.

## Назначение

DXFlex - мощный layout компонент для создания гибких макетов с использованием CSS Flexbox.
Предоставляет полный контроль над всеми аспектами flex контейнера: направлением, выравниванием, переносом и отступами.

## Архитектура

### Использует
- \`useSize\` composable - для унификации отступов между элементами (gap)
- \`useClassComposition\` composable - для объединения классов

### Используется в
- Навигационные панели и меню
- Карточки и списки элементов
- Формы и группы полей
- Заголовки и футеры
- Любые места, требующие гибкого расположения элементов

## Внутренняя логика

### Направление (direction)
Определяет главную ось flex контейнера:
- \`row\` - горизонтально (слева направо)
- \`row-reverse\` - горизонтально (справа налево)
- \`col\` - вертикально (сверху вниз)
- \`col-reverse\` - вертикально (снизу вверх)

### Выравнивание по главной оси (justify)
Управляет распределением элементов по главной оси:
- \`start\`, \`center\`, \`end\` - выравнивание
- \`between\` - пространство между элементами
- \`around\` - пространство вокруг элементов
- \`evenly\` - равномерное распределение

### Выравнивание по поперечной оси (align)
Управляет выравниванием элементов по поперечной оси:
- \`start\`, \`center\`, \`end\` - выравнивание
- \`stretch\` - растягивание на всю высоту/ширину
- \`baseline\` - выравнивание по базовой линии текста

### Gap система
Использует \`useSize\` с типом \`spacing\` для вычисления gap между элементами.
Это обеспечивает единообразный подход к размерам gap во всех layout компонентах.

## Особенности

### Inline flex
\`\`\`vue
<DXFlex inline justify="center" align="center">
  Inline flex container
</DXFlex>
\`\`\`

### Полный контроль над flex
\`\`\`vue
<DXFlex 
  direction="row" 
  justify="between" 
  align="center" 
  wrap="wrap" 
  gap="lg"
>
  Flexible content
</DXFlex>
\`\`\`

### Вертикальный layout
\`\`\`vue
<DXFlex direction="col" gap="md" align="stretch">
  <div>Item 1</div>
  <div>Item 2</div>
</DXFlex>
\`\`\`

## Ограничения

- Gap использует предопределенные значения из \`useSpacing\` (none, xs, sm, md, lg, xl)
- Для кастомных gap значений используйте CSS классы через \`class\` prop
- Для упрощенного API используйте \`DXStack\` компонент
        `,
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'row-reverse', 'col', 'col-reverse'],
      description: 'Направление главной оси flex контейнера. Определяет, как элементы располагаются: горизонтально (row) или вертикально (col).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"row"' },
        category: 'Layout',
      },
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Выравнивание элементов по главной оси (justify-content). Управляет распределением пространства между элементами.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"start"' },
        category: 'Alignment',
      },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Выравнивание элементов по поперечной оси (align-items). Определяет, как элементы выравниваются перпендикулярно главной оси.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"center"' },
        category: 'Alignment',
      },
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Перенос элементов на новую строку (flex-wrap). Определяет, будут ли элементы переноситься, если не помещаются в одну строку.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"nowrap"' },
        category: 'Behavior',
      },
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Отступ между элементами (gap). Использует систему spacing из useSpacing для унификации отступов.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"md"' },
        category: 'Spacing',
      },
    },
    inline: {
      control: 'boolean',
      description: 'Использовать inline-flex вместо flex. Делает контейнер inline элементом, позволяя ему располагаться в строке с другими элементами.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
  },
};

const box = '<div class="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center">Box</div>';

export const Default = {
  args: { justify: 'start', gap: 'md' },
  parameters: {
    docs: {
      description: {
        story: 'Базовый flex контейнер с горизонтальным направлением (row), выравниванием по началу и средним отступом между элементами. Это стандартная конфигурация для большинства случаев.',
      },
    },
  },
  render: (args) => ({
    components: { DXFlex },
    setup() { return { args }; },
    template: `<DXFlex v-bind="args">${box.repeat(4)}</DXFlex>`,
  }),
};

export const JustifyBetween = {
  args: { justify: 'between', gap: 'md' },
  parameters: {
    docs: {
      description: {
        story: 'Flex контейнер с justify="between". Распределяет элементы с максимальным пространством между ними. Часто используется для навигационных панелей, где элементы должны быть по краям.',
      },
    },
  },
  render: (args) => ({
    components: { DXFlex },
    setup() { return { args }; },
    template: `<DXFlex v-bind="args">${box.repeat(3)}</DXFlex>`,
  }),
};

export const Column = {
  args: { direction: 'col', gap: 'sm' },
  parameters: {
    docs: {
      description: {
        story: 'Вертикальный flex контейнер (direction="col"). Элементы располагаются друг под другом. Используется для создания вертикальных списков, форм и стеков элементов.',
      },
    },
  },
  render: (args) => ({
    components: { DXFlex },
    setup() { return { args }; },
    template: `<DXFlex v-bind="args">${box.repeat(3)}</DXFlex>`,
  }),
};

