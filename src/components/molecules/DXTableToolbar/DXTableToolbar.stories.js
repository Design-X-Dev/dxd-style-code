import { ref } from 'vue';
import DXTableToolbar from './DXTableToolbar.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';

export default {
  title: 'Molecules/DXTableToolbar',
  component: DXTableToolbar,
  tags: ['autodocs', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент панели инструментов для таблиц с поддержкой поиска, переключения столбцов и кастомных действий.

## Назначение

DXTableToolbar предоставляет стандартизированную панель инструментов для таблиц данных.
Компонент объединяет поиск, информацию о выбранных элементах, переключение видимости столбцов
и слоты для кастомных действий.

## Архитектура

### Использует
- \`DXInput\` - для поисковой строки
- \`DXIcon\` - для иконок
- \`DXCheckbox\` - для переключения видимости столбцов
- \`DXDropdown\` - для меню переключения столбцов

### Используется в
- \`DXTable\` - панель инструментов таблицы
- Таблицы данных с поиском и фильтрацией
- Административные панели

## Внутренняя логика

### Поиск
При \`searchable={true}\`:
- Отображается поисковая строка с иконкой поиска
- Поддерживает v-model для двустороннего связывания
- Максимальная ширина: \`max-w-xs\`

### Информация о выборе
При \`selectedCount > 0\`:
- Отображается текст "Выбрано: N"
- Показывается слева от поиска

### Переключение столбцов
При \`columnToggle={true}\`:
- Отображается dropdown с чекбоксами для каждого столбца
- Каждый столбц имеет \`key\`, \`label\` и \`visible\` свойства
- При переключении эмитится событие \`toggle-column\` с ключом столбца

### Размеры

| Значение | Описание |
|----------|----------|
| \`sm\` | Маленький |
| \`md\` | Средний (по умолчанию) |
| \`lg\` | Большой |

## Особенности

### Слоты
- **left** - кастомные элементы слева от поиска
- **right** - кастомные элементы справа (перед переключателем столбцов)

### События
- \`@update:searchQuery\` - изменение поискового запроса
- \`@toggle-column\` - переключение видимости столбца

### Структура столбцов
Столбцы передаются через массив объектов:
\`\`\`
[{ key: 'id', label: 'ID', visible: true }, ...]
\`\`\`
        `,
      },
    },
  },
};

const sampleColumns = [
  { key: 'id', label: 'ID', visible: true },
  { key: 'name', label: 'Имя', visible: true },
  { key: 'email', label: 'Email', visible: true },
  { key: 'role', label: 'Роль', visible: false },
  { key: 'status', label: 'Статус', visible: true },
];

// Default - только с поиском
export const Default = {
  render: () => ({
    components: { DXTableToolbar },
    setup() {
      const searchQuery = ref('');
      return { searchQuery, sampleColumns };
    },
    template: `
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        :searchable="true"
      />
    `,
  }),
};

// With Selection Info
export const WithSelectionInfo = {
  render: () => ({
    components: { DXTableToolbar },
    setup() {
      const searchQuery = ref('');
      const selectedCount = ref(5);
      return { searchQuery, selectedCount };
    },
    template: `
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        :searchable="true"
        :selectedCount="selectedCount"
      />
    `,
  }),
};

// With Column Toggle
export const WithColumnToggle = {
  render: () => ({
    components: { DXTableToolbar },
    setup() {
      const searchQuery = ref('');
      const columns = ref(sampleColumns);
      const handleToggle = (key) => {
        const col = columns.value.find(c => c.key === key);
        if (col) col.visible = !col.visible;
      };
      return { searchQuery, columns, handleToggle };
    },
    template: `
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        :searchable="true"
        :columnToggle="true"
        :columns="columns"
        @toggle-column="handleToggle"
      />
    `,
  }),
};

// With Custom Actions
export const WithCustomActions = {
  render: () => ({
    components: { DXTableToolbar, DXButton },
    setup() {
      const searchQuery = ref('');
      const size = ref('md');
      return { searchQuery, size };
    },
    template: `
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        :size="size"
        :searchable="true"
      >
        <template #right>
          <DXButton :size="size" variant="primary">Добавить</DXButton>
          <DXButton :size="size" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTableToolbar>
    `,
  }),
};

// Full Features
export const FullFeatures = {
  render: () => ({
    components: { DXTableToolbar, DXButton },
    setup() {
      const searchQuery = ref('');
      const selectedCount = ref(3);
      const columns = ref(sampleColumns);
      const size = ref('md');
      const handleToggle = (key) => {
        const col = columns.value.find(c => c.key === key);
        if (col) col.visible = !col.visible;
      };
      return { searchQuery, selectedCount, columns, size, handleToggle };
    },
    template: `
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        :size="size"
        :searchable="true"
        :selectedCount="selectedCount"
        :columnToggle="true"
        :columns="columns"
        @toggle-column="handleToggle"
      >
        <template #right>
          <DXButton :size="size" variant="primary">Добавить</DXButton>
          <DXButton :size="size" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTableToolbar>
    `,
  }),
};

// Small Size
export const SmallSize = {
  render: () => ({
    components: { DXTableToolbar, DXButton },
    setup() {
      const searchQuery = ref('');
      const selectedCount = ref(3);
      const columns = ref(sampleColumns);
      const handleToggle = (key) => {
        const col = columns.value.find(c => c.key === key);
        if (col) col.visible = !col.visible;
      };
      return { searchQuery, selectedCount, columns, handleToggle };
    },
    template: `
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        size="sm"
        :searchable="true"
        :selectedCount="selectedCount"
        :columnToggle="true"
        :columns="columns"
        @toggle-column="handleToggle"
      >
        <template #right>
          <DXButton size="sm" variant="primary">Добавить</DXButton>
          <DXButton size="sm" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTableToolbar>
    `,
  }),
};

// Medium Size
export const MediumSize = {
  render: () => ({
    components: { DXTableToolbar, DXButton },
    setup() {
      const searchQuery = ref('');
      const selectedCount = ref(3);
      const columns = ref(sampleColumns);
      const handleToggle = (key) => {
        const col = columns.value.find(c => c.key === key);
        if (col) col.visible = !col.visible;
      };
      return { searchQuery, selectedCount, columns, handleToggle };
    },
    template: `
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        size="md"
        :searchable="true"
        :selectedCount="selectedCount"
        :columnToggle="true"
        :columns="columns"
        @toggle-column="handleToggle"
      >
        <template #right>
          <DXButton size="md" variant="primary">Добавить</DXButton>
          <DXButton size="md" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTableToolbar>
    `,
  }),
};

// Large Size
export const LargeSize = {
  render: () => ({
    components: { DXTableToolbar, DXButton },
    setup() {
      const searchQuery = ref('');
      const selectedCount = ref(3);
      const columns = ref(sampleColumns);
      const handleToggle = (key) => {
        const col = columns.value.find(c => c.key === key);
        if (col) col.visible = !col.visible;
      };
      return { searchQuery, selectedCount, columns, handleToggle };
    },
    template: `
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        size="lg"
        :searchable="true"
        :selectedCount="selectedCount"
        :columnToggle="true"
        :columns="columns"
        @toggle-column="handleToggle"
      >
        <template #right>
          <DXButton size="lg" variant="primary">Добавить</DXButton>
          <DXButton size="lg" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTableToolbar>
    `,
  }),
};

// Playground
export const Playground = {
  args: {
    size: 'md',
    searchQuery: '',
    searchable: true,
    selectedCount: 0,
    columnToggle: false,
    columns: sampleColumns,
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    searchable: { control: 'boolean' },
    selectedCount: { control: 'number' },
    columnToggle: { control: 'boolean' },
  },
  render: (args) => ({
    components: { DXTableToolbar },
    setup() {
      const searchQuery = ref(args.searchQuery);
      const handleToggle = (key) => {
        console.log('Toggle column:', key);
      };
      return { args, searchQuery, handleToggle };
    },
    template: `
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        v-bind="args"
        @toggle-column="handleToggle"
      />
    `,
  }),
};

