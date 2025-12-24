import DXAccordion from './DXAccordion.vue';

export default {
  title: 'Organisms/DXAccordion',
  component: DXAccordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# DXAccordion

Компонент аккордеона для отображения раскрывающихся секций контента.

## Назначение

DXAccordion предоставляет способ организации контента в раскрывающиеся секции. Компонент
поддерживает одиночный и множественный режимы открытия, различные варианты оформления
и возможность задать изначально открытые секции.

## Архитектура

### Использует
- \`DXIcon\` - для иконок в заголовках и chevron
- \`useTransition\` composable - для анимации раскрытия/сворачивания
- \`useClassComposition\` composable - для стилей

### Используется в
- FAQ секции
- Настройки с категориями
- Раскрывающиеся списки
- Любые места, требующие организации контента в секции

## Внутренняя логика

### Структура элементов
Элементы передаются через массив объектов:
\`\`\`
[{ title: 'Title', content: 'Content', icon?: Icon }]
\`\`\`

Каждый элемент может содержать:
- \`title\` - заголовок секции (обязательно)
- \`content\` - содержимое секции (опционально, можно использовать слот)
- \`icon\` - иконка в заголовке (опционально)

### Режимы открытия
- **single** (по умолчанию): Только одна секция может быть открыта одновременно
- **multiple**: Несколько секций могут быть открыты одновременно

### Варианты оформления
- **default** (по умолчанию): Без дополнительного оформления
- **bordered**: Рамка вокруг всего аккордеона, скругление
- **separated**: Отступы между секциями

### Изначально открытые секции
Можно указать индексы изначально открытых секций через \`defaultOpen\` prop (массив индексов).

## Особенности

### Слоты
Для каждого элемента можно использовать именованный слот:
- \`item-0\` - для первого элемента
- \`item-1\` - для второго элемента
- И так далее

Это позволяет кастомизировать содержимое каждой секции.

### Анимация
Использует collapse transition для плавного раскрытия/сворачивания секций.

### Chevron
Каждая секция имеет иконку ChevronDownIcon справа, которая поворачивается при открытии.

### Доступность
- Использует \`aria-expanded\` для указания состояния секции
- Поддержка клавиатурной навигации
        `,
      },
    },
  },
  argTypes: {
    variant: { control: { type: 'select' }, options: ['default', 'bordered', 'separated'] },
  },
};

const items = [
  { title: 'What is DX Components?', content: 'DX Components is a Vue 3 UI component library built with Tailwind CSS.' },
  { title: 'How to install?', content: 'Run npm install dxd-style-code to add the library to your project.' },
  { title: 'Is it customizable?', content: 'Yes, all components are fully customizable using Tailwind CSS classes.' },
];

export const Default = {
  args: { items },
};

export const Bordered = {
  args: { items, variant: 'bordered' },
};

export const Multiple = {
  args: { items, multiple: true, defaultOpen: [0] },
};

export const WithDefaultOpen = {
  args: { items, defaultOpen: [0, 1] },
};

