import DXDivider from './DXDivider.vue';

export default {
  title: 'Atoms/DXDivider',
  component: DXDivider,
  tags: ['autodocs', 'category:feedback', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент разделителя для визуального разделения контента с поддержкой горизонтальной и вертикальной ориентации.

## Назначение

DXDivider предоставляет стандартизированный способ визуального разделения контента на странице.
Компонент поддерживает горизонтальную и вертикальную ориентацию, различные цвета, толщины и отступы.

## Архитектура

### Использует
- \`useSpacing\` composable - для унификации отступов
- \`useVariantDividerBorder\` composable - для вариантов границ

### Используется в
- Разделение секций контента
- Разделение элементов в списках
- Разделение групп в формах
- Любые места, требующие визуального разделения

## Внутренняя логика

### Ориентация

| Значение | Описание |
|----------|----------|
| \`horizontal\` | Горизонтальный разделитель (по умолчанию) |
| \`vertical\` | Вертикальный разделитель |

### Цвета

| Значение | Описание |
|----------|----------|
| \`light\` | Светлый цвет (для темных фонов) |
| \`default\` | Стандартный цвет (по умолчанию) |
| \`dark\` | Темный цвет (для светлых фонов) |

### Толщина

| Значение | Описание |
|----------|----------|
| \`thin\` | Тонкая линия |
| \`default\` | Стандартная толщина (по умолчанию) |
| \`thick\` | Толстая линия |

### Отступы

| Значение | Описание |
|----------|----------|
| \`none\` | Без отступов |
| \`xs\` | Очень маленькие отступы |
| \`sm\` | Маленькие отступы |
| \`md\` | Средние отступы |
| \`lg\` | Большие отступы |
| \`xl\` | Очень большие отступы |

### Текст в разделителе
Можно добавить текст в горизонтальный разделитель через default slot:
- Текст отображается по центру
- Линии автоматически размещаются по бокам

## Особенности

### Горизонтальный разделитель
Используется для разделения контента по вертикали:
\`\`\`vue
<div>
  <p>Content above</p>
  <DXDivider />
  <p>Content below</p>
</div>
\`\`\`

### Вертикальный разделитель
Используется для разделения контента по горизонтали:
\`\`\`vue
<div class="flex">
  <div>Left content</div>
  <DXDivider orientation="vertical" />
  <div>Right content</div>
</div>
\`\`\`

### С текстом
\`\`\`vue
<DXDivider>OR</DXDivider>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    orientation: { 
      control: { type: 'select' }, 
      options: ['horizontal', 'vertical'],
      description: 'Ориентация разделителя'
    },
    color: { 
      control: { type: 'select' }, 
      options: ['light', 'default', 'dark'],
      description: 'Цвет разделителя'
    },
    thickness: { 
      control: { type: 'select' }, 
      options: ['thin', 'default', 'thick'],
      description: 'Толщина разделителя'
    },
    spacing: { 
      control: { type: 'select' }, 
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Отступы вокруг разделителя'
    },
  },
};

export const Default = {
  args: {
    orientation: 'horizontal',
    color: 'default',
    thickness: 'default',
    spacing: 'md',
  },
  render: (args) => ({
    components: { DXDivider },
    setup() { return { args }; },
    template: `
      <div>
        <p>Content above</p>
        <DXDivider v-bind="args" />
        <p>Content below</p>
      </div>
    `,
  }),
};

export const WithText = {
  render: () => ({
    components: { DXDivider },
    template: `
      <div class="space-y-6">
        <div>
          <p>Section 1</p>
          <DXDivider>OR</DXDivider>
          <p>Section 2</p>
        </div>
        <div>
          <p>Content above</p>
          <DXDivider color="dark" thickness="thick">Continue</DXDivider>
          <p>Content below</p>
        </div>
      </div>
    `,
  }),
};

export const Vertical = {
  args: {
    orientation: 'vertical',
    color: 'default',
    thickness: 'default',
    spacing: 'md',
  },
  render: (args) => ({
    components: { DXDivider },
    setup() { return { args }; },
    template: `
      <div class="flex items-center h-12">
        <span>Left</span>
        <DXDivider v-bind="args" />
        <span>Right</span>
      </div>
    `,
  }),
};

export const Colors = {
  render: () => ({
    components: { DXDivider },
    template: `
      <div class="space-y-6">
        <div>
          <p class="text-sm text-slate-600 mb-2">Light</p>
          <DXDivider color="light" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Default</p>
          <DXDivider color="default" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Dark</p>
          <DXDivider color="dark" />
        </div>
      </div>
    `,
  }),
};

export const Thickness = {
  render: () => ({
    components: { DXDivider },
    template: `
      <div class="space-y-6">
        <div>
          <p class="text-sm text-slate-600 mb-2">Thin</p>
          <DXDivider thickness="thin" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Default</p>
          <DXDivider thickness="default" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Thick</p>
          <DXDivider thickness="thick" />
        </div>
      </div>
    `,
  }),
};


