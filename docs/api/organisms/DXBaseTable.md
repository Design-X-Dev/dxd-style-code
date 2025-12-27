# DXBaseTable

Базовый компонент таблицы без тулбара и пагинации. Используется внутри DXTable.

## Import

```javascript
import { DXBaseTable } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `Array` | `required` | Конфигурация колонок |
| `data` | `Array` | `[]` | Данные таблицы |
| `sortBy` | `String` | `null` | Колонка сортировки |
| `sortDirection` | `String` | `'asc'` | Направление: `'asc'`, `'desc'` |
| `selectable` | `Boolean` | `false` | Включить выбор строк |
| `selectedRows` | `Array` | `[]` | Выбранные строки |
| `actions` | `Boolean` | `false` | Показывать колонку действий |
| `filterable` | `Boolean` | `false` | Включить фильтры в заголовках |
| `filters` | `Object` | `{}` | Текущие фильтры |
| `groupBy` | `String` | `null` | Группировка по полю |
| `height` | `String` | `null` | Фиксированная высота |
| `stickyHeader` | `Boolean` | `true` | Закреплённый заголовок |
| `striped` | `Boolean` | `false` | Чередование цвета строк |
| `bordered` | `Boolean` | `false` | Границы ячеек |
| `hoverable` | `Boolean` | `true` | Подсветка при наведении |
| `dense` | `Boolean` | `false` | Компактный режим |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `loading` | `Boolean` | `false` | Состояние загрузки |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `sort` | `{ column, direction }` | Сортировка |
| `filter` | `{ column, value }` | Фильтрация |
| `row-click` | `row` | Клик по строке |
| `row-select` | `{ id, selected }` | Выбор строки |
| `select-all` | `Boolean` | Выбор всех строк |
| `edit` | `row` | Редактирование строки |
| `delete` | `row` | Удаление строки |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `cell-{key}` | `{ value, row, column }` | Кастомная ячейка |
| `header-{key}` | `{ column }` | Кастомный заголовок |
| `empty` | - | Пустое состояние |
| `loading` | - | Состояние загрузки |

## Usage

### Basic

```vue
<DXBaseTable
  :columns="[
    { key: 'name', label: 'Имя' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Роль' }
  ]"
  :data="users"
/>
```

### With Sorting

```vue
<DXBaseTable
  :columns="columns"
  :data="data"
  :sortBy="sortColumn"
  :sortDirection="sortDirection"
  @sort="handleSort"
/>
```

### With Selection

```vue
<DXBaseTable
  :columns="columns"
  :data="data"
  selectable
  :selectedRows="selected"
  @row-select="handleSelect"
  @select-all="handleSelectAll"
/>
```

### With Actions

```vue
<DXBaseTable
  :columns="columns"
  :data="data"
  actions
  @edit="handleEdit"
  @delete="handleDelete"
/>
```

### Styled Variants

```vue
<DXBaseTable :columns="columns" :data="data" striped />
<DXBaseTable :columns="columns" :data="data" bordered />
<DXBaseTable :columns="columns" :data="data" dense />
```

### Custom Cells

```vue
<DXBaseTable :columns="columns" :data="data">
  <template #cell-status="{ value }">
    <DXTags :variant="getStatusVariant(value)">
      {{ value }}
    </DXTags>
  </template>
</DXBaseTable>
```

Обычно используется через DXTable, который добавляет тулбар и пагинацию.

## See Also

- [DXTable](./DXTable.md)
- [DXDataTable](./DXDataTable.md)
