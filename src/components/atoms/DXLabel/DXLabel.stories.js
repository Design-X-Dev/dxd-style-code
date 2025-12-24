import DXLabel from './DXLabel.vue';

export default {
  title: 'Atoms/DXLabel',
  component: DXLabel,
  tags: ['autodocs', 'category:typography'],
  parameters: {
    docs: {
      description: {
        component: `
# DXLabel

Компонент лейбла для форм с поддержкой различных размеров, весов и цветов.

## Назначение

DXLabel предоставляет стандартизированный лейбл для форм с настраиваемыми параметрами типографики.
Компонент поддерживает различные размеры, веса шрифта, цвета и автоматическое отображение индикатора
обязательного поля.

## Архитектура

### Использует
- \`useVariantText\` composable - для цветовых вариантов

### Используется в
- Формы с полями ввода
- Связанные с input элементами лейблы
- Любые места, требующие текстовых меток

## Внутренняя логика

### Размеры
Поддерживает 4 размера:
- **xs** - очень маленький текст
- **sm** - маленький текст (по умолчанию)
- **md** - средний текст
- **lg** - большой текст

### Веса шрифта
Поддерживает 3 веса:
- **normal** - обычный вес
- **medium** - средний вес (по умолчанию)
- **semibold** - полужирный

### Цвета
Поддерживает 3 цветовых варианта:
- **default** - цвет по умолчанию
- **muted** - приглушенный цвет
- **primary** - основной цвет

### Обязательное поле
При \`required={true}\` автоматически добавляется красная звездочка (*) справа от текста.

## Особенности

### Связь с input
Поддерживает \`htmlFor\` prop для связи с input элементом через \`id\`:
- Улучшает доступность
- Позволяет кликать на лейбл для фокуса на input

### Семантика
Использует нативный HTML \`<label>\` тег для правильной семантики и доступности.
        `,
      },
    },
  },
};

export const Default = {
  args: {},
  render: (args) => ({
    components: { DXLabel },
    setup() { return { args }; },
    template: '<DXLabel v-bind="args">Email адрес</DXLabel>',
  }),
};

export const Required = {
  args: { required: true },
  render: (args) => ({
    components: { DXLabel },
    setup() { return { args }; },
    template: '<DXLabel v-bind="args">Обязательное поле</DXLabel>',
  }),
};

export const Sizes = {
  render: () => ({
    components: { DXLabel },
    template: `
      <div class="space-y-2">
        <DXLabel size="xs">Extra Small Label</DXLabel>
        <DXLabel size="sm">Small Label (default)</DXLabel>
        <DXLabel size="md">Medium Label</DXLabel>
        <DXLabel size="lg">Large Label</DXLabel>
      </div>
    `,
  }),
};

