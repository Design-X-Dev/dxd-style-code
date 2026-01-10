import { ref } from 'vue';
import DXBaseTable from './DXBaseTable.vue';
import DXBadge from '../../atoms/DXBadge/DXBadge.vue';

export default {
  title: 'Organisms/DXBaseTable',
  component: DXBaseTable,
  tags: ['autodocs', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Базовая таблица данных с поддержкой сортировки, кастомных ячеек и различных вариантов оформления.

## Назначение

DXBaseTable предоставляет базовую функциональность таблицы данных без расширенных функций
(фильтрация, пагинация, выбор). Используется как основа для DXTable или для простых таблиц,
требующих только сортировку и кастомное отображение ячеек.

## Архитектура

### Использует
- Нативные HTML таблицы (\`<table>\`, \`<thead>\`, \`<tbody>\`, \`<tr>\`, \`<td>\`, \`<th>\`)
- \`useClassComposition\` composable - для стилей

### Используется в
- \`DXTable\` - как базовая таблица
- Простые таблицы данных
- Таблицы без расширенных функций

## Внутренняя логика

### Структура колонок
Колонки определяются через массив объектов:
\`\`\`
[{
  key: 'id',
  label: 'ID',
  sortable?: true,
  width?: '80px',
  align?: 'left' | 'center' | 'right'
}]
\`\`\`

### Сортировка
При \`sortable={true}\` в колонке:
- Отображается иконка сортировки в заголовке
- При клике эмитится событие \`sort\` с информацией о колонке и направлении
- Сортировка должна обрабатываться родительским компонентом

### Кастомные ячейки
Можно использовать named slots для кастомного отображения ячеек:
- \`cell-{key}\` - кастомная ячейка для колонки (например, \`cell-status\`)
- \`header-{key}\` - кастомный заголовок для колонки

### Выравнивание
Каждая колонка может иметь свое выравнивание:
- **left** (по умолчанию) - по левому краю
- **center** - по центру
- **right** - по правому краю

### Ширина колонок
Можно указать фиксированную ширину колонки через \`width\` prop.

## Особенности

### События
- \`@sort\` - эмитится при клике на сортируемую колонку, передает \`{ column, direction }\`

### Варианты оформления
Поддерживает различные варианты оформления:
- **default** - стандартное оформление
- **bordered** - с рамками
- **striped** - с чередующимися строками

### Слоты
- **cell-{key}** - кастомная ячейка для колонки
- **header-{key}** - кастомный заголовок для колонки
        `,
      },
    },
  },
};

// Sample data
const simpleColumns = [
  { key: 'name', label: 'Имя' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Роль' },
];

const columns = [
  { key: 'id', label: 'ID', width: '80px', sortable: true },
  { key: 'name', label: 'Имя', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Роль', sortable: true },
  { key: 'status', label: 'Статус', sortable: true },
  { key: 'age', label: 'Возраст', sortable: true, width: '100px', align: 'center' },
];

const simpleData = [
  { id: 1, name: 'Иван Иванов', email: 'ivan@example.com', role: 'Admin', status: 'Active', age: 32 },
  { id: 2, name: 'Мария Петрова', email: 'maria@example.com', role: 'User', status: 'Active', age: 28 },
  { id: 3, name: 'Петр Сидоров', email: 'petr@example.com', role: 'User', status: 'Inactive', age: 45 },
  { id: 4, name: 'Анна Смирнова', email: 'anna@example.com', role: 'Manager', status: 'Active', age: 35 },
  { id: 5, name: 'Дмитрий Козлов', email: 'dmitry@example.com', role: 'User', status: 'Pending', age: 29 },
];

const largeDataset = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Пользователь ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: ['Admin', 'User', 'Manager'][i % 3],
  status: ['Active', 'Inactive', 'Pending'][i % 3],
  age: 20 + (i % 50),
  category: ['Tech', 'Sales', 'Marketing'][i % 3],
}));

// 1. SimpleTable - базовая таблица
export const SimpleTable = {
  render: () => ({
    components: { DXBaseTable },
    setup() {
      return { simpleColumns, simpleData };
    },
    template: `
      <DXBaseTable
        :columns="simpleColumns"
        :data="simpleData"
      />
    `,
  }),
};

// 2. WithSort - с сортировкой
export const WithSort = {
  render: () => ({
    components: { DXBaseTable },
    setup() {
      const sortBy = ref('name');
      const sortDirection = ref('asc');
      const data = ref([...simpleData]);

      const handleSort = ({ column, direction }) => {
        sortBy.value = column;
        sortDirection.value = direction;
        
        // Sort data
        data.value = [...data.value].sort((a, b) => {
          const aVal = a[column];
          const bVal = b[column];
          const modifier = direction === 'asc' ? 1 : -1;
          
          if (aVal < bVal) return -1 * modifier;
          if (aVal > bVal) return 1 * modifier;
          return 0;
        });
      };

      return { columns, data, sortBy, sortDirection, handleSort };
    },
    template: `
      <DXBaseTable
        :columns="columns"
        :data="data"
        :sortBy="sortBy"
        :sortDirection="sortDirection"
        @sort="handleSort"
      />
    `,
  }),
};

// 3. WithSelection - с выделением строк
export const WithSelection = {
  render: () => ({
    components: { DXBaseTable },
    setup() {
      const selectedRows = ref([]);

      const handleRowSelect = ({ id, selected }) => {
        if (selected) {
          selectedRows.value.push(id);
        } else {
          selectedRows.value = selectedRows.value.filter(rowId => rowId !== id);
        }
      };

      const handleSelectAll = (selected) => {
        if (selected) {
          selectedRows.value = simpleData.map(row => row.id);
        } else {
          selectedRows.value = [];
        }
      };

      return { columns, data: simpleData, selectedRows, handleRowSelect, handleSelectAll };
    },
    template: `
      <div>
        <div class="mb-4 text-sm text-slate-600">
          Выбрано строк: {{ selectedRows.length }}
        </div>
        <DXBaseTable
          :columns="columns"
          :data="data"
          :selectable="true"
          :selectedRows="selectedRows"
          @row-select="handleRowSelect"
          @select-all="handleSelectAll"
        />
      </div>
    `,
  }),
};

// 4. WithActions - с действиями
export const WithActions = {
  render: () => ({
    components: { DXBaseTable },
    setup() {
      const handleEdit = (row) => {
        alert(`Редактировать: ${row.name}`);
      };
      const handleDelete = (row) => {
        alert(`Удалить: ${row.name}`);
      };
      return { columns, data: simpleData, handleEdit, handleDelete };
    },
    template: `
      <DXBaseTable
        :columns="columns"
        :data="data"
        :actions="true"
        @edit="handleEdit"
        @delete="handleDelete"
      />
    `,
  }),
};

// 5. WithGrouping - с группировкой
export const WithGrouping = {
  render: () => ({
    components: { DXBaseTable },
    setup() {
      return { columns, data: largeDataset };
    },
    template: `
      <DXBaseTable
        :columns="columns"
        :data="data"
        groupBy="role"
      />
    `,
  }),
};

// 6. WithCustomHeight - с фиксированной высотой
export const WithCustomHeight = {
  render: () => ({
    components: { DXBaseTable },
    setup() {
      return { columns, data: largeDataset };
    },
    template: `
      <DXBaseTable
        :columns="columns"
        :data="data"
        height="400px"
        :stickyHeader="true"
      />
    `,
  }),
};

// 7. CustomCells - кастомные ячейки
export const CustomCells = {
  render: () => ({
    components: { DXBaseTable, DXBadge },
    setup() {
      const getStatusVariant = (status) => {
        const map = {
          'Active': 'success',
          'Inactive': 'neutral',
          'Pending': 'warning',
        };
        return map[status] || 'neutral';
      };

      return { columns, data: simpleData, getStatusVariant };
    },
    template: `
      <DXBaseTable
        :columns="columns"
        :data="data"
      >
        <template #cell-status="{ value }">
          <DXBadge :variant="getStatusVariant(value)">
            {{ value }}
          </DXBadge>
        </template>
        <template #cell-role="{ value }">
          <span class="font-semibold text-slate-700">{{ value }}</span>
        </template>
      </DXBaseTable>
    `,
  }),
};

// 8. StripedTable - с зеброй
export const StripedTable = {
  render: () => ({
    components: { DXBaseTable },
    setup() {
      return { columns, data: simpleData };
    },
    template: `
      <DXBaseTable
        :columns="columns"
        :data="data"
        :striped="true"
      />
    `,
  }),
};

// 9. DenseTable - компактная таблица
export const DenseTable = {
  render: () => ({
    components: { DXBaseTable },
    setup() {
      return { columns, data: simpleData };
    },
    template: `
      <DXBaseTable
        :columns="columns"
        :data="data"
        :dense="true"
      />
    `,
  }),
};

// 10. SmallSize - маленький размер
export const SmallSize = {
  render: () => ({
    components: { DXBaseTable },
    setup() {
      return { columns, data: simpleData };
    },
    template: `
      <DXBaseTable
        :columns="columns"
        :data="data"
        size="sm"
        :actions="true"
      />
    `,
  }),
};

// 11. LargeSize - большой размер
export const LargeSize = {
  render: () => ({
    components: { DXBaseTable },
    setup() {
      return { columns, data: simpleData };
    },
    template: `
      <DXBaseTable
        :columns="columns"
        :data="data"
        size="lg"
        :actions="true"
      />
    `,
  }),
};

// 12. LoadingState - состояние загрузки
export const LoadingState = {
  render: () => ({
    components: { DXBaseTable },
    setup() {
      return { columns, data: [] };
    },
    template: `
      <DXBaseTable
        :columns="columns"
        :data="data"
        :loading="true"
      />
    `,
  }),
};

// 13. EmptyState - пустое состояние
export const EmptyState = {
  render: () => ({
    components: { DXBaseTable },
    setup() {
      return { columns, data: [] };
    },
    template: `
      <DXBaseTable
        :columns="columns"
        :data="data"
      >
        <template #empty>
          <div class="text-center">
            <p class="text-lg font-semibold text-slate-700">Нет данных</p>
            <p class="text-sm text-slate-500 mt-1">Попробуйте изменить фильтры</p>
          </div>
        </template>
      </DXBaseTable>
    `,
  }),
};

// 14. FullFeatured - все возможности
export const FullFeatured = {
  render: () => ({
    components: { DXBaseTable, DXBadge },
    setup() {
      const sortBy = ref('name');
      const sortDirection = ref('asc');
      const selectedRows = ref([]);
      const data = ref([...simpleData]);

      const handleSort = ({ column, direction }) => {
        sortBy.value = column;
        sortDirection.value = direction;
        
        data.value = [...data.value].sort((a, b) => {
          const aVal = a[column];
          const bVal = b[column];
          const modifier = direction === 'asc' ? 1 : -1;
          
          if (aVal < bVal) return -1 * modifier;
          if (aVal > bVal) return 1 * modifier;
          return 0;
        });
      };

      const handleRowSelect = ({ id, selected }) => {
        if (selected) {
          selectedRows.value.push(id);
        } else {
          selectedRows.value = selectedRows.value.filter(rowId => rowId !== id);
        }
      };

      const handleSelectAll = (selected) => {
        if (selected) {
          selectedRows.value = data.value.map(row => row.id);
        } else {
          selectedRows.value = [];
        }
      };

      const getStatusVariant = (status) => {
        const map = {
          'Active': 'success',
          'Inactive': 'neutral',
          'Pending': 'warning',
        };
        return map[status] || 'neutral';
      };

      return { 
        columns, 
        data, 
        sortBy, 
        sortDirection, 
        selectedRows,
        handleSort, 
        handleRowSelect, 
        handleSelectAll,
        getStatusVariant
      };
    },
    template: `
      <DXBaseTable
        :columns="columns"
        :data="data"
        :sortBy="sortBy"
        :sortDirection="sortDirection"
        :selectable="true"
        :selectedRows="selectedRows"
        :actions="true"
        :striped="true"
        :hoverable="true"
        @sort="handleSort"
        @row-select="handleRowSelect"
        @select-all="handleSelectAll"
      >
        <template #cell-status="{ value }">
          <DXBadge :variant="getStatusVariant(value)">
            {{ value }}
          </DXBadge>
        </template>
      </DXBaseTable>
    `,
  }),
};

