import DXHeading from './DXHeading.vue';

export default {
  title: 'Atoms/DXHeading',
  component: DXHeading,
  tags: ['autodocs', 'category:typography'],
  parameters: {
    docs: {
      description: {
        component: `
Компонент заголовка с поддержкой уровней (h1-h6), размеров, весов и цветов.

## Назначение

DXHeading предоставляет стандартизированный способ создания заголовков с настраиваемыми параметрами
типографики. Компонент автоматически рендерится как соответствующий HTML тег (h1-h6) для семантической
правильности и SEO.

## Архитектура

### Использует
- Динамический рендеринг HTML тегов - для семантической правильности
- \`useSize\` composable - для унификации размеров (опционально)

### Используется в
- Заголовки страниц и разделов
- Заголовки карточек
- Заголовки форм
- Любые места, требующие семантических заголовков

## Внутренняя логика

### Уровни заголовков

| Значение | Описание |
|----------|----------|
| \`1\` | h1 (самый важный, самый крупный) |
| \`2\` | h2 |
| \`3\` | h3 |
| \`4\` | h4 |
| \`5\` | h5 |
| \`6\` | h6 (наименее важный, самый маленький) |

### Размеры

| Значение | Описание |
|----------|----------|
| \`xs\` | Очень маленький |
| \`sm\` | Маленький |
| \`md\` | Средний |
| \`lg\` | Большой |
| \`xl\` | Очень большой |
| \`2xl\` | Extra large |
| \`3xl\` | 3x large |
| \`4xl\` | 4x large |

### Веса шрифта

| Значение | Описание |
|----------|----------|
| \`normal\` | Обычный вес |
| \`medium\` | Средний вес |
| \`semibold\` | Полужирный (по умолчанию для заголовков) |
| \`bold\` | Жирный |

### Цвета

| Значение | Описание |
|----------|----------|
| \`default\` | Цвет по умолчанию (text-slate-900) |
| \`muted\` | Приглушенный цвет (text-slate-600) |
| \`primary\` | Основной цвет |
| \`success\` | Зеленый цвет |
| \`warning\` | Желтый цвет |
| \`danger\` | Красный цвет |

## Особенности

### Семантика
Компонент автоматически рендерится как соответствующий HTML тег (h1-h6) на основе \`level\` prop:
- \`level={1}\` → \`<h1>\`
- \`level={2}\` → \`<h2>\`
- И так далее

Это важно для:
- SEO (поисковые системы понимают иерархию заголовков)
- Доступности (скринридеры используют заголовки для навигации)
- Семантической правильности HTML

### Независимость level и size
Уровень заголовка (\`level\`) и его визуальный размер (\`size\`) независимы:
- Можно использовать h1 с маленьким размером
- Можно использовать h3 с большим размером
- Это позволяет разделять семантику и визуальное представление

### Кастомные классы
Поддерживает \`class\` prop для добавления дополнительных CSS классов.
        `,
      },
    },
  },
  argTypes: {
    level: { control: { type: 'select' }, options: [1, 2, 3, 4, 5, 6] },
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] },
    weight: { control: { type: 'select' }, options: ['normal', 'medium', 'semibold', 'bold'] },
    color: { control: { type: 'select' }, options: ['default', 'muted', 'primary', 'success', 'warning', 'danger'] },
  },
};

export const Default = {
  args: { level: 1 },
  render: (args) => ({
    components: { DXHeading },
    setup() { return { args }; },
    template: '<DXHeading v-bind="args">Заголовок страницы</DXHeading>',
  }),
};

export const AllLevels = {
  render: () => ({
    components: { DXHeading },
    template: `
      <div class="space-y-4">
        <DXHeading :level="1">Heading 1</DXHeading>
        <DXHeading :level="2">Heading 2</DXHeading>
        <DXHeading :level="3">Heading 3</DXHeading>
        <DXHeading :level="4">Heading 4</DXHeading>
        <DXHeading :level="5">Heading 5</DXHeading>
        <DXHeading :level="6">Heading 6</DXHeading>
      </div>
    `,
  }),
};

export const Colors = {
  render: () => ({
    components: { DXHeading },
    template: `
      <div class="space-y-2">
        <DXHeading :level="3" color="default">Default Color</DXHeading>
        <DXHeading :level="3" color="muted">Muted Color</DXHeading>
        <DXHeading :level="3" color="success">Success Color</DXHeading>
        <DXHeading :level="3" color="warning">Warning Color</DXHeading>
        <DXHeading :level="3" color="danger">Danger Color</DXHeading>
      </div>
    `,
  }),
};

