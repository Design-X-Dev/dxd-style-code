import DXFilterGroup from './DXFilterGroup.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXFilterGroup',
  component: DXFilterGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Компонент группы фильтров для выбора одного значения из списка опций с поддержкой счетчиков.

## Назначение

DXFilterGroup предоставляет простой способ создания группы фильтров с кнопками-переключателями.
Компонент поддерживает счетчики для каждой опции и возможность сброса выбранного значения.

## Архитектура

### Использует
- Нативные HTML элементы - для простоты и доступности

### Используется в
- Фильтры списков и таблиц
- Переключение режимов отображения
- Категории и теги
- Любые места, требующие выбор одного значения из группы

## Внутренняя логика

### Структура опций
Опции передаются через массив объектов:
\`\`\`
[{ value: 'all', label: 'All', count?: 50 }]
\`\`\`

Каждая опция может содержать:
- \`value\` - значение опции (обязательно)
- \`label\` - текст опции (обязательно)
- \`count\` - счетчик (опционально)

### Счетчики
При наличии \`count\` в опции, счетчик отображается рядом с текстом.

### Сброс
При \`clearable={true}\` (по умолчанию) и выбранном значении:
- Отображается кнопка "Сбросить"
- При клике значение сбрасывается в \`null\`

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\` для String или Boolean значений.

### Визуальное оформление
- Активная опция: темный фон (\`bg-slate-800\`), белый текст
- Неактивные опции: белый фон, серый текст, hover эффект
- Кнопка сброса: желтый фон (\`bg-amber-50\`), желтый текст

### Лейбл
Поддерживает опциональный \`label\` prop для отображения заголовка группы.
        `,
      },
    },
  },
};

const filters = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'pending', label: 'Pending' },
  { value: 'completed', label: 'Completed' },
];

export const Default = {
  render: () => ({
    components: { DXFilterGroup },
    setup() {
      const selected = ref('all');
      return { selected, filters };
    },
    template: '<DXFilterGroup v-model="selected" :filters="filters" />',
  }),
};

export const WithCounts = {
  render: () => ({
    components: { DXFilterGroup },
    setup() {
      const selected = ref('all');
      const filtersWithCount = [
        { value: 'all', label: 'All', count: 50 },
        { value: 'active', label: 'Active', count: 32 },
        { value: 'completed', label: 'Completed', count: 18 },
      ];
      return { selected, filtersWithCount };
    },
    template: '<DXFilterGroup v-model="selected" :filters="filtersWithCount" />',
  }),
};

