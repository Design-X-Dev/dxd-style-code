import DXBlockquote from './DXBlockquote.vue';

export default {
  title: 'Atoms/DXBlockquote',
  component: DXBlockquote,
  tags: ['autodocs', 'category:typography'],
  parameters: {
    docs: {
      description: {
        component: `
Компонент для отображения блочных цитат с поддержкой различных вариантов оформления и источника.

## Назначение

DXBlockquote предоставляет стандартизированный способ отображения блочных цитат в статьях,
блогах и документации. Компонент поддерживает различные варианты визуального оформления
и возможность указания источника цитаты.

## Архитектура

### Использует
- Семантический HTML тег \`<blockquote>\` - для блочных цитат
- Семантический HTML тег \`<cite>\` - для источника цитаты

### Используется в
- Статьи и блоги
- Документация
- Отзывы и рекомендации
- Любые места, требующие отображения цитат

## Внутренняя логика

### Варианты оформления
- **default**: Обычная цитата без рамки, только курсив
- **bordered** (по умолчанию): Цитата с левой рамкой
- **highlighted**: Цитата с фоном и рамкой для выделения

### Размеры
Поддерживает 3 размера текста:
- **sm** - маленький текст
- **md** - средний текст (по умолчанию)
- **lg** - большой текст

### Источник цитаты
Можно указать источник через:
- \`cite\` prop - текст источника
- Слот \`cite\` - кастомный источник

Источник отображается в footer с дефисом и курсивом.

## Особенности

### Семантика
Использует семантически правильные HTML теги:
- \`<blockquote>\` для цитаты
- \`<cite>\` для источника

Это важно для:
- SEO (поисковые системы понимают цитаты)
- Доступности (скринридеры правильно обрабатывают цитаты)
- Семантической правильности HTML

### Визуальное оформление
- **default**: Только курсив, без дополнительного оформления
- **bordered**: Левая рамка 4px, padding слева, курсив
- **highlighted**: Фон (bg-slate-50), левая рамка, padding, скругление справа
        `,
      },
    },
  },
  argTypes: {
    variant: { control: { type: 'select' }, options: ['default', 'bordered', 'highlighted'] },
  },
};

export const Default = {
  args: { cite: 'Стив Джобс' },
  render: (args) => ({
    components: { DXBlockquote },
    setup() { return { args }; },
    template: '<DXBlockquote v-bind="args">Дизайн — это не только то, как что-то выглядит и ощущается. Дизайн — это то, как что-то работает.</DXBlockquote>',
  }),
};

export const Variants = {
  render: () => ({
    components: { DXBlockquote },
    template: `
      <div class="space-y-6">
        <DXBlockquote variant="default">Default variant without border</DXBlockquote>
        <DXBlockquote variant="bordered">Bordered variant with left border</DXBlockquote>
        <DXBlockquote variant="highlighted">Highlighted variant with background</DXBlockquote>
      </div>
    `,
  }),
};

