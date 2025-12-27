# DXTable

Полнофункциональный компонент таблицы данных с сортировкой, фильтрацией, пагинацией и выбором.

## Import

```javascript
import { DXTable } from 'dxd-style-code';
```

## Props

### Data Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `Array` | `required` | Конфигурация колонок |
| `data` | `Array` | `[]` | Данные таблицы |
| `mode` | `String` | `'local'` | Режим данных: `'local'`, `'api'` |
| `apiUrl` | `String` | - | URL для API режима |
| `apiMethod` | `String` | `'GET'` | HTTP метод |
| `apiParams` | `Object` | `{}` | Дополнительные параметры API |

### Features Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `searchable` | `Boolean` | `false` | Включить поиск |
| `filterable` | `Boolean` | `false` | Включить фильтры |
| `sortable` | `Boolean` | `true` | Включить сортировку |
| `paginated` | `Boolean` | `true` | Включить пагинацию |
| `selectable` | `Boolean` | `false` | Включить выбор строк |
| `groupBy` | `String` | - | Группировка по полю |

### UI Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `height` | `String` | - | Фиксированная высота |
| `stickyHeader` | `Boolean` | `true` | Закреплённый заголовок |
| `striped` | `Boolean` | `false` | Чередование цвета строк |
| `bordered` | `Boolean` | `false` | Границы ячеек |
| `hoverable` | `Boolean` | `true` | Подсветка при наведении |
| `dense` | `Boolean` | `false` | Компактный режим |

### Toolbar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showToolbar` | `Boolean` | `true` | Показывать тулбар |
| `columnToggle` | `Boolean` | `false` | Переключатель колонок |
| `actions` | `Boolean` | `false` | Показывать колонку действий |

### Pagination Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultPageSize` | `Number` | `10` | Размер страницы по умолчанию |
| `pageSizeOptions` | `Array` | `[10, 25, 50, 100]` | Опции размера страницы |

### Other Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultSort` | `Object` | - | `{ column: 'name', direction: 'asc' }` |
| `loading` | `Boolean` | `false` | Состояние загрузки |

## Column Structure

```typescript
interface Column {
  key: string;                    // Ключ данных
  label: string;                  // Заголовок
  sortable?: boolean;             // Можно сортировать
  filterable?: boolean;           // Можно фильтровать
  filterOptions?: Array;          // Опции фильтра
  width?: string;                 // Ширина ('100px', '20%')
  align?: 'left'|'center'|'right'; // Выравнивание
  format?: (value, row) => string; // Форматирование
  visible?: boolean;              // Видимость (default: true)
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `row-click` | `row` | Клик по строке |
| `row-select` | `{ id, selected }` | Выбор строки |
| `select-all` | `Boolean` | Выбор всех строк |
| `sort` | `{ column, direction }` | Сортировка |
| `filter` | `{ column, value }` | Фильтрация |
| `filter-clear` | - | Очистка фильтров |
| `page-change` | `Number` | Изменение страницы |
| `page-size-change` | `Number` | Изменение размера страницы |
| `edit` | `row` | Редактирование строки |
| `delete` | `row` | Удаление строки |
| `data-loaded` | `data` | Данные загружены (API режим) |
| `error` | `Error` | Ошибка загрузки |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `cell-{key}` | `{ value, row, column }` | Кастомная ячейка |
| `header-{key}` | `{ column }` | Кастомный заголовок |
| `toolbar-actions` | - | Действия в тулбаре |
| `empty` | - | Пустое состояние |
| `loading` | - | Состояние загрузки |

## Usage

### Basic

```vue
<DXTable
  :columns="[
    { key: 'name', label: 'Имя' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Роль' }
  ]"
  :data="users"
/>
```

### With Search and Filters

```vue
<DXTable
  :columns="columns"
  :data="data"
  searchable
  filterable
/>
```

### With Selection

```vue
<DXTable
  :columns="columns"
  :data="data"
  selectable
  @row-select="handleSelect"
  @select-all="handleSelectAll"
/>
```

### With Actions Column

```vue
<DXTable
  :columns="columns"
  :data="data"
  actions
  @edit="handleEdit"
  @delete="handleDelete"
/>
```

### Custom Cell Render

```vue
<DXTable :columns="columns" :data="data">
  <template #cell-status="{ value }">
    <DXTags :variant="getStatusVariant(value)">
      {{ value }}
    </DXTags>
  </template>
  
  <template #cell-avatar="{ row }">
    <img :src="row.avatar" class="w-8 h-8 rounded-full" />
  </template>
</DXTable>
```

### With Column Toggle

```vue
<DXTable
  :columns="columns"
  :data="data"
  columnToggle
/>
```

### Striped and Bordered

```vue
<DXTable
  :columns="columns"
  :data="data"
  striped
  bordered
/>
```

### Fixed Height with Scroll

```vue
<DXTable
  :columns="columns"
  :data="data"
  height="400px"
  stickyHeader
/>
```

### Server-Side Mode

```vue
<DXTable
  mode="api"
  apiUrl="/api/users"
  :columns="columns"
  @data-loaded="handleDataLoaded"
  @error="handleError"
/>
```

### With Default Sort

```vue
<DXTable
  :columns="columns"
  :data="data"
  :defaultSort="{ column: 'createdAt', direction: 'desc' }"
/>
```

### Toolbar Actions

```vue
<DXTable :columns="columns" :data="data" searchable>
  <template #toolbar-actions>
    <DXButton size="sm" @click="exportData">
      <DXIcon :icon="ArrowDownTrayIcon" />
      Экспорт
    </DXButton>
    <DXButton size="sm" @click="addNew">
      <DXIcon :icon="PlusIcon" />
      Добавить
    </DXButton>
  </template>
</DXTable>
```

## Composables Used

- `useTableData` - управление данными
- `useTableSort` - сортировка
- `useTableFilter` - фильтрация
- `useTablePagination` - пагинация
- `useTableSelection` - выбор строк
- `useTableColumns` - управление колонками

## See Also

- [DXTableToolbar](../molecules/DXTableToolbar.md)
- [DXTablePagination](../molecules/DXTablePagination.md)
- [DXPagination](../molecules/DXPagination.md)
