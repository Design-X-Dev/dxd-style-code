# DXTable

Расширенный компонент таблицы с поддержкой пагинации, поиска, фильтрации, сортировки, выделения строк и других продвинутых функций. Композитный компонент, объединяющий `DXBaseTable`, `DXTableToolbar` и `DXTablePagination`.

## Архитектура

`DXTable` является **композитным компонентом** (organism), который объединяет:

- **DXTableToolbar** - панель инструментов с поиском и управлением столбцами
- **DXBaseTable** - базовая таблица для отображения данных
- **DXTablePagination** - пагинация с выбором размера страницы

Все composables (фильтрация, поиск, сортировка, пагинация, выделение) управляются в `DXTable`, который передает обработанные данные в `DXBaseTable`.

## Когда использовать

- **Сложные таблицы**: Когда нужны поиск, фильтрация, пагинация
- **Большие данные**: Для работы с большими объемами данных
- **Готовое решение**: Когда нужна таблица "из коробки" со всеми функциями
- **API интеграция**: Для загрузки данных с сервера

Для простых таблиц без дополнительных функций используйте [`DXBaseTable`](./DXBaseTable.md).

## Основное использование

```vue
<DXTable
  :columns="columns"
  :data="data"
  :paginated="true"
  :searchable="true"
  :filterable="true"
/>
```

## Props

### Data Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `Array` | **required** | Массив конфигураций столбцов |
| `data` | `Array` | `[]` | Массив данных для отображения |
| `mode` | `String` | `'local'` | Режим работы: `'local'` или `'api'` |
| `apiUrl` | `String` | - | URL для загрузки данных (API режим) |
| `apiMethod` | `String` | `'GET'` | HTTP метод для API запроса |
| `apiParams` | `Object` | `{}` | Дополнительные параметры для API |

### Feature Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `searchable` | `Boolean` | `false` | Показать глобальный поиск |
| `filterable` | `Boolean` | `false` | Включить фильтрацию по столбцам |
| `sortable` | `Boolean` | `true` | Включить сортировку |
| `paginated` | `Boolean` | `true` | Включить пагинацию |
| `selectable` | `Boolean` | `false` | Включить чекбоксы для выделения |
| `groupBy` | `String` | - | Ключ столбца для группировки |
| `actions` | `Boolean` | `false` | Показать колонку действий |

### UI Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `height` | `String` | - | Максимальная высота таблицы (например, `'400px'`) |
| `stickyHeader` | `Boolean` | `true` | Закрепить заголовок при скролле |
| `striped` | `Boolean` | `false` | Зебра-стиль для строк |
| `bordered` | `Boolean` | `false` | Показать границы |
| `hoverable` | `Boolean` | `true` | Подсветка строк при наведении |
| `dense` | `Boolean` | `false` | Компактный режим (меньше отступы) |

### Toolbar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showToolbar` | `Boolean` | `true` | Показать toolbar |
| `columnToggle` | `Boolean` | `false` | Кнопка управления видимостью столбцов |

### Pagination Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultPageSize` | `Number` | `10` | Количество строк на странице по умолчанию |
| `pageSizeOptions` | `Array` | `[10, 25, 50, 100]` | Опции для выбора размера страницы |

### Sort Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultSort` | `Object` | - | Начальная сортировка: `{ column: 'name', direction: 'asc' }` |

### Other Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `loading` | `Boolean` | `false` | Показать состояние загрузки |

## Column Configuration

Каждый объект в массиве `columns` может иметь следующие свойства:

```javascript
{
  key: 'name',           // Ключ данных (обязательно)
  label: 'Имя',          // Заголовок столбца (обязательно)
  sortable: true,        // Можно ли сортировать (по умолчанию true)
  filterable: true,      // Можно ли фильтровать (по умолчанию true)
  filterOptions: [       // Опции для фильтра (опционально)
    { value: 'Active', label: 'Активный' },
    { value: 'Inactive', label: 'Неактивный' }
  ],
  width: '200px',        // Ширина столбца
  align: 'left',         // Выравнивание: 'left', 'center', 'right'
  format: (value) => {}, // Функция форматирования значения
}
```

### Фильтрация столбцов

Фильтрация в DXTable использует компонент `DXSearchSelect` для предоставления пользователю списка доступных значений:

- **Автоматический сбор значений**: Если `filterOptions` не указан, таблица автоматически соберет уникальные значения из данных для этого столбца.
- **Явные значения**: Если указан `filterOptions`, будут использованы эти предопределенные значения.
- **Поиск**: Пользователь может искать значения в списке фильтра.
- **Точное совпадение**: Фильтрация работает по принципу точного совпадения значений.

```javascript
// Пример с явными filterOptions
const columns = [
  {
    key: 'status',
    label: 'Статус',
    filterable: true,
    filterOptions: [
      { value: 'Active', label: 'Активный' },
      { value: 'Inactive', label: 'Неактивный' },
      { value: 'Pending', label: 'В ожидании' },
    ]
  },
  {
    key: 'name',
    label: 'Имя',
    filterable: true,
    // filterOptions не указан - значения будут собраны автоматически
  }
];
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `row-click` | `row` | Клик по строке |
| `row-select` | `{ id, selected, selectedRows }` | Выделение строки |
| `select-all` | `{ selected, selectedRows }` | Выделение всех строк |
| `sort` | `{ column, direction }` | Изменение сортировки |
| `filter` | `{ column, value, filters }` | Изменение фильтра |
| `filter-clear` | - | Очистка всех фильтров |
| `page-change` | `page` | Смена страницы |
| `page-size-change` | `size` | Изменение размера страницы |
| `edit` | `row` | Кнопка "Редактировать" (дефолтный action) |
| `delete` | `row` | Кнопка "Удалить" (дефолтный action) |
| `data-loaded` | `data` | Данные загружены (API режим) |
| `error` | `error` | Ошибка загрузки (API режим) |
| `column-toggle` | `{ column, visible, hiddenColumns }` | Изменение видимости столбца |

## Slots

### `toolbar-actions`

Кастомные действия в toolbar:

```vue
<DXTable :columns="columns" :data="data">
  <template #toolbar-actions>
    <DXButton>Добавить</DXButton>
    <DXButton>Экспорт</DXButton>
  </template>
</DXTable>
```

### `cell-{key}`

Кастомное отображение ячейки:

```vue
<DXTable :columns="columns" :data="data">
  <template #cell-status="{ row, value, column }">
    <DXBadge :variant="value === 'Active' ? 'success' : 'danger'">
      {{ value }}
    </DXBadge>
  </template>
</DXTable>
```

### `actions`

Кастомные действия для строки:

```vue
<DXTable :columns="columns" :data="data" :actions="true">
  <template #actions="{ row }">
    <DXButton size="sm" @click="handleView(row)">Просмотр</DXButton>
    <DXButton size="sm" @click="handleEdit(row)">Изменить</DXButton>
  </template>
</DXTable>
```

### `empty`

Кастомное пустое состояние:

```vue
<DXTable :columns="columns" :data="[]">
  <template #empty>
    <div class="text-center py-8">
      <p>Нет данных для отображения</p>
      <DXButton @click="loadData">Загрузить данные</DXButton>
    </div>
  </template>
</DXTable>
```

## Примеры

### Базовая таблица

```vue
<template>
  <DXTable
    :columns="columns"
    :data="data"
    :paginated="false"
    :showToolbar="false"
  />
</template>

<script setup>
const columns = [
  { key: 'name', label: 'Имя' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Роль' },
];

const data = [
  { id: 1, name: 'Иван', email: 'ivan@example.com', role: 'Admin' },
  { id: 2, name: 'Мария', email: 'maria@example.com', role: 'User' },
];
</script>
```

### С пагинацией и поиском

```vue
<DXTable
  :columns="columns"
  :data="largeDataset"
  :searchable="true"
  :paginated="true"
  :defaultPageSize="25"
/>
```

### С фильтрацией по столбцам

```vue
<template>
  <DXTable
    :columns="columns"
    :data="data"
    :filterable="true"
    :sortable="true"
    :paginated="true"
  />
</template>

<script setup>
const columns = [
  { 
    key: 'name', 
    label: 'Имя', 
    filterable: true,
    // filterOptions не указаны - будут собраны из данных
  },
  { 
    key: 'status', 
    label: 'Статус', 
    filterable: true,
    filterOptions: [
      { value: 'Active', label: 'Активный' },
      { value: 'Inactive', label: 'Неактивный' },
      { value: 'Pending', label: 'В ожидании' },
    ]
  },
  { 
    key: 'role', 
    label: 'Роль', 
    filterable: true,
    filterOptions: [
      { value: 'Admin', label: 'Администратор' },
      { value: 'User', label: 'Пользователь' },
      { value: 'Manager', label: 'Менеджер' },
    ]
  },
];

const data = [
  { id: 1, name: 'Иван', status: 'Active', role: 'Admin' },
  { id: 2, name: 'Мария', status: 'Inactive', role: 'User' },
  { id: 3, name: 'Петр', status: 'Pending', role: 'Manager' },
];
</script>
```

### С выделением строк

```vue
<template>
  <DXTable
    :columns="columns"
    :data="data"
    :selectable="true"
    @row-select="handleRowSelect"
    @select-all="handleSelectAll"
  />
</template>

<script setup>
const handleRowSelect = ({ id, selected, selectedRows }) => {
  console.log('Selected rows:', selectedRows);
};

const handleSelectAll = ({ selected, selectedRows }) => {
  console.log('All selected:', selected, selectedRows);
};
</script>
```

### С группировкой

```vue
<DXTable
  :columns="columns"
  :data="data"
  groupBy="category"
/>
```

### С фиксированной высотой

```vue
<DXTable
  :columns="columns"
  :data="largeDataset"
  height="500px"
  :stickyHeader="true"
/>
```

### С кастомными ячейками

```vue
<DXTable :columns="columns" :data="data">
  <template #cell-status="{ value }">
    <DXBadge :variant="value === 'Active' ? 'success' : 'danger'">
      {{ value }}
    </DXBadge>
  </template>
  
  <template #cell-avatar="{ row }">
    <DXAvatar :src="row.avatar" :alt="row.name" size="sm" />
  </template>
</DXTable>
```

### С действиями

```vue
<template>
  <DXTable
    :columns="columns"
    :data="data"
    :actions="true"
    @edit="handleEdit"
    @delete="handleDelete"
  />
</template>

<script setup>
const handleEdit = (row) => {
  console.log('Edit:', row);
};

const handleDelete = (row) => {
  if (confirm(`Удалить ${row.name}?`)) {
    // Delete logic
  }
};
</script>
```

### Полная таблица со всеми фичами

```vue
<template>
  <DXTable
    :columns="columns"
    :data="data"
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
      <DXButton size="sm" variant="primary" @click="handleAdd">
        Добавить
      </DXButton>
      <DXButton size="sm" variant="ghost" @click="handleExport">
        Экспорт
      </DXButton>
    </template>

    <template #cell-status="{ value }">
      <DXBadge :variant="getStatusVariant(value)">
        {{ value }}
      </DXBadge>
    </template>

    <template #actions="{ row }">
      <div class="flex gap-2">
        <DXButton size="sm" @click="handleView(row)">Просмотр</DXButton>
        <DXButton size="sm" variant="primary" @click="handleEdit(row)">
          Изменить
        </DXButton>
      </div>
    </template>
  </DXTable>
</template>
```

### API режим

```vue
<template>
  <DXTable
    :columns="columns"
    mode="api"
    apiUrl="/api/users"
    :apiParams="{ sort: 'name' }"
    :searchable="true"
    :paginated="true"
    @data-loaded="handleDataLoaded"
    @error="handleError"
  />
</template>

<script setup>
const handleDataLoaded = (data) => {
  console.log('Data loaded:', data);
};

const handleError = (error) => {
  console.error('Error loading data:', error);
};
</script>
```

## Composables

DXTable использует 6 специализированных composables, которые можно использовать отдельно:

- `useTableData` - управление данными (локальный/API режимы)
- `useTableSort` - сортировка данных
- `useTableFilter` - фильтрация и поиск
- `useTablePagination` - пагинация
- `useTableSelection` - выделение строк
- `useTableColumns` - управление видимостью столбцов

```javascript
import { useTableSort } from '@/composables/useTableSort';

const { sortBy, sortDirection, sortedData, toggleSort } = useTableSort(data, props, emit);
```

## Accessibility

- Таблица использует семантические HTML теги (`<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`)
- Checkbox для выделения строк доступны с клавиатуры
- Сортировка столбцов работает при клике и с клавиатуры
- Все интерактивные элементы имеют правильные `aria-` атрибуты

## Сравнение с DXBaseTable

| Функция | DXBaseTable | DXTable |
|---------|-------------|---------|
| Отображение данных | ✅ | ✅ |
| Сортировка | ✅ (контролируемая) | ✅ (встроенная) |
| Выделение строк | ✅ (контролируемое) | ✅ (встроенное) |
| Действия | ✅ | ✅ |
| Группировка | ✅ | ✅ |
| Toolbar | ❌ | ✅ |
| Поиск | ❌ | ✅ |
| Фильтрация | ❌ | ✅ |
| Пагинация | ❌ | ✅ |
| API режим | ❌ | ✅ |
| Composables | ❌ | ✅ |

**Используйте DXTable когда:**
- Нужны поиск, фильтрация, пагинация
- Хотите готовое решение "из коробки"
- Работаете с большими объемами данных
- Нужна интеграция с API

**Используйте DXBaseTable когда:**
- Нужна простая таблица без дополнительных элементов
- Хотите создать свою композицию
- Нужен полный контроль над состоянием
- Таблица является частью более крупного компонента

## Best Practices

1. **Используйте ключ `id`** - каждая строка должна иметь уникальный `id`
2. **Ограничьте количество столбцов** - для лучшей читаемости держите 5-7 столбцов
3. **Используйте пагинацию** - для больших наборов данных всегда включайте пагинацию
4. **Форматируйте данные** - используйте функцию `format` в конфигурации столбца
5. **Кастомизируйте ячейки** - используйте слоты для сложных данных (статусы, аватары, кнопки)
6. **API режим для больших данных** - используйте серверную пагинацию и фильтрацию для больших датасетов
7. **Sticky header** - для длинных таблиц используйте `height` и `stickyHeader`
8. **Фильтры с filterOptions** - для лучшего UX указывайте явные `filterOptions` в конфигурации столбцов

## Performance Tips

- Используйте `v-memo` для строк при очень больших таблицах
- В API режиме делегируйте сортировку и фильтрацию серверу
- Ограничьте `pageSize` для больших датасетов
- Используйте виртуальный скролл для таблиц с 1000+ строк (кастомная реализация)

