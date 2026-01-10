import { ref } from 'vue';
import DXDataFilter from './DXDataFilter.vue';
import DXCard from '../../atoms/DXCard/DXCard.vue';

export default {
  title: 'Molecules/DXDataFilter',
  component: DXDataFilter,
  tags: ['autodocs', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Комплексный фильтр данных с различными типами условий, группировкой и сохранением фильтров.

## Назначение

DXDataFilter предоставляет расширенную систему фильтрации с поддержкой различных типов
условий (текст, число, дата, выбор), группировки условий (AND/OR) и сохранения фильтров.

## Архитектура

### Использует
- \`DXInput\` - для текстовых и числовых фильтров
- \`DXSelect\` - для фильтров выбора
- \`DXDatePicker\` - для фильтров даты
- \`DXButton\` - для действий
- \`DXIcon\` - для иконок
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- \`DXTable\` - для фильтрации данных
- \`DXReportGenerator\` - для фильтрации отчетов
- Каталоги товаров
- Аналитические панели

## Внутренняя логика

### Типы фильтров
- **text**: Текстовый фильтр
- **number**: Числовой фильтр с диапазоном (min/max)
- **select**: Фильтр выбора из списка
- **date**: Фильтр даты (с поддержкой диапазона)

### Группировка
Условия могут быть сгруппированы через AND или OR логику.

### Кастомные фильтры
Можно использовать slots для кастомных типов фильтров.

## Особенности

### Удаление фильтров
При \`removable={true}\` каждый фильтр можно удалить.

### События
Компонент эмитит события при изменении, применении и сбросе фильтров.
        `,
      },
    },
  },
  argTypes: {
    grouping: {
      control: 'select',
      options: ['AND', 'OR'],
      description: 'Группировка условий: AND (все условия) | OR (любое условие).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'AND' },
        category: 'Behavior',
      },
    },
    removable: {
      control: 'boolean',
      description: 'Можно ли удалять фильтры.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Behavior',
      },
    },
    showActions: {
      control: 'boolean',
      description: 'Показывать кнопки действий (Применить/Сбросить).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Behavior',
      },
    },
  },
};

const defaultFilterDefinitions = [
  {
    id: 'name',
    label: 'Название',
    type: 'text',
    placeholder: 'Введите название',
  },
  {
    id: 'status',
    label: 'Статус',
    type: 'select',
    options: [
      { value: 'active', label: 'Активный' },
      { value: 'inactive', label: 'Неактивный' },
      { value: 'pending', label: 'Ожидание' },
    ],
  },
  {
    id: 'price',
    label: 'Цена',
    type: 'number',
  },
  {
    id: 'date',
    label: 'Дата',
    type: 'date',
    range: true,
  },
];

export const Default = {
  args: {
    filters: [
      { id: 'name', type: 'text', value: '' },
      { id: 'status', type: 'select', value: '' },
    ],
    filterDefinitions: defaultFilterDefinitions,
    grouping: 'AND',
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовый фильтр с текстовым и select фильтрами.',
      },
    },
  },
  render: (args) => ({
    components: { DXDataFilter, DXCard },
    setup() {
      const filters = ref(args.filters);
      const handleApply = (data) => {
        console.log('Применены фильтры:', data);
      };
      const handleReset = () => {
        console.log('Фильтры сброшены');
      };
      return { args, filters, handleApply, handleReset };
    },
    template: `
      <DXCard class="p-6">
        <DXDataFilter
          v-model:filters="filters"
          v-bind="args"
          @apply="handleApply"
          @reset="handleReset"
        />
      </DXCard>
    `,
  }),
};

export const WithAllTypes = {
  parameters: {
    docs: {
      description: {
        story: 'Фильтр со всеми типами условий: текст, число, выбор, дата.',
      },
    },
  },
  render: () => ({
    components: { DXDataFilter, DXCard },
    setup() {
      const filters = ref([
        { id: 'name', type: 'text', value: '' },
        { id: 'status', type: 'select', value: '' },
        { id: 'price', type: 'number', value: { min: '', max: '' } },
        { id: 'date', type: 'date', value: null, range: true },
      ]);
      
      const handleApply = (data) => {
        console.log('Применены фильтры:', data);
      };
      
      return { filters, defaultFilterDefinitions, handleApply };
    },
    template: `
      <DXCard class="p-6">
        <DXDataFilter
          v-model:filters="filters"
          :filter-definitions="defaultFilterDefinitions"
          @apply="handleApply"
        />
      </DXCard>
    `,
  }),
};

export const WithGrouping = {
  parameters: {
    docs: {
      description: {
        story: 'Фильтр с группировкой условий. Можно переключать между AND и OR.',
      },
    },
  },
  render: () => ({
    components: { DXDataFilter, DXCard },
    setup() {
      const filters = ref([
        { id: 'name', type: 'text', value: '' },
        { id: 'status', type: 'select', value: '' },
      ]);
      const grouping = ref('AND');
      
      const handleGroupingChange = (newGrouping) => {
        console.log('Группировка изменена:', newGrouping);
      };
      
      return { filters, grouping, defaultFilterDefinitions, handleGroupingChange };
    },
    template: `
      <DXCard class="p-6">
        <DXDataFilter
          v-model:filters="filters"
          v-model:grouping="grouping"
          :filter-definitions="defaultFilterDefinitions"
          @grouping-change="handleGroupingChange"
        />
      </DXCard>
    `,
  }),
};

export const WithoutActions = {
  args: {
    filters: [
      { id: 'name', type: 'text', value: '' },
    ],
    filterDefinitions: defaultFilterDefinitions,
    showActions: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Фильтр без кнопок действий. Используйте кастомные действия через slot actions.',
      },
    },
  },
  render: (args) => ({
    components: { DXDataFilter, DXCard, DXButton },
    setup() {
      const filters = ref(args.filters);
      return { args, filters };
    },
    template: `
      <DXCard class="p-6">
        <DXDataFilter
          v-model:filters="filters"
          v-bind="args"
        >
          <template #actions>
            <DXButton variant="ghost">Отмена</DXButton>
            <DXButton variant="primary">Применить фильтры</DXButton>
          </template>
        </DXDataFilter>
      </DXCard>
    `,
  }),
};

