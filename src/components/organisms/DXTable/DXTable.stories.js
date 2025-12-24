import { ref } from 'vue';
import DXTable from './DXTable.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';
import DXBadge from '../../atoms/DXBadge/DXBadge.vue';
import DXHeading from '../../atoms/DXHeading/DXHeading.vue';
import DXText from '../../atoms/DXText/DXText.vue';

export default {
  title: 'Organisms/DXTable',
  component: DXTable,
  tags: ['autodocs', 'category:data-display'],
  parameters: {
    docs: {
      description: {
        component: `
# DXTable

Полнофункциональная таблица данных с поддержкой сортировки, фильтрации, поиска, пагинации и выбора строк.

## Назначение

DXTable предоставляет комплексное решение для отображения и управления табличными данными. Компонент поддерживает
локальную и API-режимы работы, сортировку, фильтрацию, поиск, пагинацию, выбор строк, группировку и множество
настроек визуального оформления.

## Архитектура

### Использует
- \`DXBaseTable\` - базовая таблица для отображения данных
- \`DXTableToolbar\` - панель инструментов с поиском и переключением колонок
- \`DXTablePagination\` - пагинация с выбором размера страницы
- \`DXTableFiltersPanel\` - панель активных фильтров
- Composables:
  - \`useTableData\` - управление данными (локальные/API)
  - \`useTableSort\` - сортировка данных
  - \`useTableFilter\` - фильтрация и поиск
  - \`useTablePagination\` - пагинация
  - \`useTableSelection\` - выбор строк
  - \`useTableColumns\` - управление видимостью колонок

### Используется в
- Списки пользователей
- Таблицы заказов
- Административные панели
- Отчеты и аналитика
- Любые места, требующие отображения структурированных данных

## Внутренняя логика

### Режимы работы с данными
- **local** (по умолчанию): Данные обрабатываются локально, все операции (сортировка, фильтрация, пагинация) выполняются на клиенте
- **api**: Данные загружаются с сервера, операции выполняются на сервере через API запросы

### Структура колонок
Каждая колонка может иметь:
- \`key\` - ключ поля в данных
- \`label\` - заголовок колонки
- \`sortable\` - можно ли сортировать
- \`filterable\` - можно ли фильтровать
- \`filterOptions\` - опции фильтра (если не указаны, собираются автоматически из данных)
- \`width\` - ширина колонки
- \`align\` - выравнивание (left, center, right)
- \`format\` - функция форматирования значения

### Сортировка
- Поддерживает сортировку по любой колонке с \`sortable={true}\`
- Три состояния: нет сортировки → asc → desc → нет сортировки
- Можно задать начальную сортировку через \`defaultSort\`
- Событие \`sort\` при изменении сортировки

### Фильтрация
- Поддерживает фильтрацию по любой колонке с \`filterable={true}\`
- Опции фильтра могут быть заданы явно через \`filterOptions\` или собираются автоматически
- Панель активных фильтров показывает примененные фильтры
- Событие \`filter\` при изменении фильтров

### Поиск
- Глобальный поиск по всем колонкам (если \`searchable={true}\`)
- Поиск выполняется в реальном времени
- Отображается в тулбаре

### Пагинация
- Поддерживает пагинацию (если \`paginated={true}\`)
- Настраиваемый размер страницы (по умолчанию 10)
- Опции размера страницы: [10, 25, 50, 100] (настраивается)
- События: \`page-change\`, \`page-size-change\`

### Выбор строк
- Поддерживает выбор строк (если \`selectable={true}\`)
- Чекбокс в заголовке для выбора всех
- События: \`row-select\`, \`select-all\`, \`selection-clear\`

### Группировка
- Поддерживает группировку по колонке (через \`groupBy\` prop)
- Группы отображаются с заголовками

## Особенности

### Размеры
Поддерживает три размера: \`sm\`, \`md\` (по умолчанию), \`lg\`.

### Визуальные опции
- **stickyHeader** - фиксированный заголовок при прокрутке (по умолчанию true)
- **striped** - чередующиеся цвета строк
- **bordered** - границы вокруг ячеек
- **hoverable** - эффект при наведении на строку (по умолчанию true)
- **dense** - компактный режим

### Тулбар
- Поиск (если \`searchable={true}\`)
- Переключение видимости колонок (если \`columnToggle={true}\`)
- Слот \`toolbar-actions\` для кастомных действий
- Счетчик выбранных строк

### Слоты
- \`toolbar-actions\` - действия в тулбаре
- Слоты для кастомизации ячеек: \`cell-[columnKey]\`
- Слоты для кастомизации заголовков: \`header-[columnKey]\`
- Слоты для действий строк: \`actions\`

### События
- \`row-click\` - клик по строке
- \`row-select\` - выбор строки
- \`select-all\` - выбор всех строк
- \`sort\` - изменение сортировки
- \`filter\` - изменение фильтров
- \`page-change\` - изменение страницы
- \`page-size-change\` - изменение размера страницы
- \`edit\` - редактирование строки
- \`delete\` - удаление строки
- \`data-loaded\` - данные загружены (для API режима)
- \`error\` - ошибка загрузки данных
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
  { key: 'id', label: 'ID', width: '80px', sortable: true, filterable: false },
  { key: 'name', label: 'Имя', sortable: true, filterable: true },
  { key: 'email', label: 'Email', sortable: true, filterable: true },
  { key: 'role', label: 'Роль', sortable: true, filterable: true },
  { key: 'status', label: 'Статус', sortable: true, filterable: true },
  { key: 'age', label: 'Возраст', sortable: true, width: '100px', align: 'center' },
];

const columnsWithFilterOptions = [
  { 
    key: 'id', 
    label: 'ID', 
    width: '80px', 
    sortable: true,
    filterable: false,
  },
  { 
    key: 'name', 
    label: 'Имя', 
    sortable: true, 
    filterable: true,
    // filterOptions не указаны - будут собраны автоматически из данных
  },
  { 
    key: 'email', 
    label: 'Email', 
    sortable: true, 
    filterable: true,
    // filterOptions не указаны - будут собраны автоматически из данных
  },
  { 
    key: 'role', 
    label: 'Роль', 
    sortable: true, 
    filterable: true,
    filterOptions: [
      { value: 'Admin', label: 'Администратор' },
      { value: 'User', label: 'Пользователь' },
      { value: 'Manager', label: 'Менеджер' },
    ]
  },
  { 
    key: 'status', 
    label: 'Статус', 
    sortable: true, 
    filterable: true,
    filterOptions: [
      { value: 'Active', label: 'Активный' },
      { value: 'Inactive', label: 'Неактивный' },
      { value: 'Pending', label: 'В ожидании' },
    ]
  },
  { 
    key: 'age', 
    label: 'Возраст', 
    sortable: true, 
    width: '100px', 
    align: 'center',
    filterable: false,
  },
];

const simpleData = [
  { id: 1, name: 'Иван Иванов', email: 'ivan@example.com', role: 'Admin', status: 'Active', age: 32 },
  { id: 2, name: 'Мария Петрова', email: 'maria@example.com', role: 'User', status: 'Active', age: 28 },
  { id: 3, name: 'Петр Сидоров', email: 'petr@example.com', role: 'User', status: 'Inactive', age: 45 },
];

const largeDataset = Array.from({ length: 50 }, (_, i) => ({
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
    components: { DXTable },
    setup() {
      return { simpleColumns, simpleData };
    },
    template: `
      <DXTable
        :columns="simpleColumns"
        :data="simpleData"
        :paginated="false"
        :searchable="false"
        :showToolbar="false"
      />
    `,
  }),
};

// 2. WithPagination - с пагинацией
export const WithPagination = {
  render: () => ({
    components: { DXTable },
    setup() {
      return { columns, data: largeDataset };
    },
    template: `
      <DXTable
        :columns="columns"
        :data="data"
        :paginated="true"
        :defaultPageSize="10"
        :showToolbar="false"
      />
    `,
  }),
};

// 3. WithSearch - с поиском
export const WithSearch = {
  render: () => ({
    components: { DXTable },
    setup() {
      return { columns, data: largeDataset };
    },
    template: `
      <DXTable
        :columns="columns"
        :data="data"
        :searchable="true"
        :paginated="true"
        :defaultPageSize="10"
      />
    `,
  }),
};

// 4. WithFilters - с фильтрацией (новая реализация с иконками в заголовках)
export const WithFilters = {
  render: () => ({
    components: { DXTable },
    setup() {
      return { columns, data: largeDataset };
    },
    template: `
      <div class="p-4">
        <DXHeading level="3" size="lg" weight="semibold" class="mb-4">Фильтры в заголовках столбцов</DXHeading>
        <DXText tag="p" size="sm" color="muted" class="mb-4">
          Кликните на иконку воронки в заголовке столбца, чтобы открыть фильтр.
          Активные фильтры отображаются в панели над таблицей.
        </DXText>
        <DXTable
          :columns="columns"
          :data="data"
          :filterable="true"
          :paginated="true"
          :defaultPageSize="10"
        />
      </div>
    `,
  }),
};

// 4a. WithFilterOptions - с предопределенными значениями фильтров
export const WithFilterOptions = {
  render: () => ({
    components: { DXTable },
    setup() {
      return { columns: columnsWithFilterOptions, data: largeDataset };
    },
    template: `
      <div class="p-4">
        <DXHeading level="3" size="lg" weight="semibold" class="mb-4">Фильтры с предопределенными опциями</DXHeading>
        <DXText tag="p" size="sm" color="muted" class="mb-4">
          Некоторые столбцы имеют предопределенные опции фильтрации.
        </DXText>
        <DXTable
          :columns="columns"
          :data="data"
          :filterable="true"
          :searchable="true"
          :paginated="true"
          :defaultPageSize="10"
        />
      </div>
    `,
  }),
};

// 4b. WithMultipleFilters - демонстрация множественных активных фильтров
export const WithMultipleFilters = {
  render: () => ({
    components: { DXTable },
    setup() {
      return { columns: columnsWithFilterOptions, data: largeDataset };
    },
    template: `
      <div class="p-4">
        <DXHeading level="3" size="lg" weight="semibold" class="mb-4">Множественные активные фильтры</DXHeading>
        <DXText tag="p" size="sm" color="muted" class="mb-4">
          Примените несколько фильтров одновременно. Все активные фильтры 
          отображаются в панели над таблицей с возможностью удаления.
        </DXText>
        <DXTable
          :columns="columns"
          :data="data"
          :filterable="true"
          :searchable="true"
          :paginated="true"
          :defaultPageSize="10"
        />
      </div>
    `,
  }),
};

// 5. WithSort - с сортировкой
export const WithSort = {
  render: () => ({
    components: { DXTable },
    setup() {
      return { columns, data: simpleData };
    },
    template: `
      <DXTable
        :columns="columns"
        :data="data"
        :sortable="true"
        :defaultSort="{ column: 'name', direction: 'asc' }"
        :paginated="false"
        :showToolbar="false"
      />
    `,
  }),
};

// 6. WithSelection - с выделением
export const WithSelection = {
  render: () => ({
    components: { DXTable },
    setup() {
      const handleRowSelect = (data) => {
        console.log('Row selected:', data);
      };
      const handleSelectAll = (data) => {
        console.log('Select all:', data);
      };
      return { columns, data: simpleData, handleRowSelect, handleSelectAll };
    },
    template: `
      <DXTable
        :columns="columns"
        :data="data"
        :selectable="true"
        :paginated="false"
        @row-select="handleRowSelect"
        @select-all="handleSelectAll"
      />
    `,
  }),
};

// 7. WithActions - с действиями
export const WithActions = {
  render: () => ({
    components: { DXTable },
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
      <DXTable
        :columns="columns"
        :data="data"
        :actions="true"
        :paginated="false"
        @edit="handleEdit"
        @delete="handleDelete"
      />
    `,
  }),
};

// 8. WithColumnToggle - скрытие столбцов
export const WithColumnToggle = {
  render: () => ({
    components: { DXTable },
    setup() {
      return { columns, data: simpleData };
    },
    template: `
      <DXTable
        :columns="columns"
        :data="data"
        :columnToggle="true"
        :paginated="false"
      />
    `,
  }),
};

// 9. WithGrouping - с группировкой
export const WithGrouping = {
  render: () => ({
    components: { DXTable },
    setup() {
      return { columns, data: largeDataset };
    },
    template: `
      <DXTable
        :columns="columns"
        :data="data"
        groupBy="category"
        :paginated="false"
        :showToolbar="false"
      />
    `,
  }),
};

// 10. WithCustomHeight - с фиксированной высотой
export const WithCustomHeight = {
  render: () => ({
    components: { DXTable },
    setup() {
      return { columns, data: largeDataset };
    },
    template: `
      <DXTable
        :columns="columns"
        :data="data"
        height="400px"
        :stickyHeader="true"
        :paginated="false"
        :showToolbar="false"
      />
    `,
  }),
};

// 11. AdvancedTable - все фичи
export const AdvancedTable = {
  render: () => ({
    components: { DXTable, DXButton },
    setup() {
      const handleRowClick = (row) => {
        console.log('Row clicked:', row);
      };
      const size = ref('md');
      return { columns: columnsWithFilterOptions, data: largeDataset, handleRowClick, size };
    },
    template: `
      <DXTable
        :columns="columns"
        :data="data"
        :size="size"
        :searchable="true"
        :filterable="true"
        :sortable="true"
        :paginated="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
        height="600px"
        :striped="true"
        @row-click="handleRowClick"
      >
        <template #toolbar-actions>
          <DXButton :size="size" variant="primary">Добавить</DXButton>
          <DXButton :size="size" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTable>
    `,
  }),
};

// 12. CustomCells - кастомные ячейки
export const CustomCells = {
  render: () => ({
    components: { DXTable, DXBadge, DXButton },
    setup() {
      const size = ref('md');
      return { columns, data: simpleData, size };
    },
    template: `
      <DXTable
        :columns="columns"
        :data="data"
        :size="size"
        :paginated="false"
        :actions="true"
      >
        <template #cell-status="{ value }">
          <DXBadge
            :variant="value === 'Active' ? 'success' : value === 'Inactive' ? 'danger' : 'warning'"
          >
            {{ value }}
          </DXBadge>
        </template>
        
        <template #cell-role="{ value }">
          <DXText tag="span" weight="semibold" color="primary">{{ value }}</DXText>
        </template>

        <template #actions="{ row }">
          <div class="flex gap-2 justify-center">
            <DXButton :size="size" variant="ghost">Просмотр</DXButton>
            <DXButton :size="size" variant="primary">Изменить</DXButton>
          </div>
        </template>
      </DXTable>
    `,
  }),
};

// Small Size
export const SmallSize = {
  render: () => ({
    components: { DXTable },
    setup() {
      return { columns, data: simpleData };
    },
    template: `
      <DXTable
        :columns="columns"
        :data="data"
        size="sm"
        :searchable="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
      />
    `,
  }),
};

// Medium Size (Default)
export const MediumSize = {
  render: () => ({
    components: { DXTable },
    setup() {
      return { columns, data: simpleData };
    },
    template: `
      <DXTable
        :columns="columns"
        :data="data"
        size="md"
        :searchable="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
      />
    `,
  }),
};

// Large Size
export const LargeSize = {
  render: () => ({
    components: { DXTable },
    setup() {
      return { columns, data: simpleData };
    },
    template: `
      <DXTable
        :columns="columns"
        :data="data"
        size="lg"
        :searchable="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
      />
    `,
  }),
};

// Playground - интерактивная песочница
export const Playground = {
  args: {
    size: 'md',
    columns,
    data: largeDataset,
    searchable: true,
    filterable: false,
    sortable: true,
    paginated: true,
    selectable: false,
    actions: false,
    columnToggle: false,
    height: '',
    stickyHeader: true,
    striped: false,
    bordered: false,
    hoverable: true,
    dense: false,
    showToolbar: true,
    defaultPageSize: 10,
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    searchable: { control: 'boolean' },
    filterable: { control: 'boolean' },
    sortable: { control: 'boolean' },
    paginated: { control: 'boolean' },
    selectable: { control: 'boolean' },
    actions: { control: 'boolean' },
    columnToggle: { control: 'boolean' },
    height: { control: 'text' },
    stickyHeader: { control: 'boolean' },
    striped: { control: 'boolean' },
    bordered: { control: 'boolean' },
    hoverable: { control: 'boolean' },
    dense: { control: 'boolean' },
    showToolbar: { control: 'boolean' },
    defaultPageSize: { control: 'select', options: [10, 25, 50, 100] },
  },
  render: (args) => ({
    components: { DXTable },
    setup() {
      return { args };
    },
    template: `
      <DXTable v-bind="args" />
    `,
  }),
};
