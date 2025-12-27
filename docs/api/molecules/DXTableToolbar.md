# DXTableToolbar

Панель инструментов для таблицы с поиском, фильтрами и управлением колонками.

## Import

```javascript
import { DXTableToolbar } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `searchQuery` | `String` | `''` | Поисковый запрос (v-model:searchQuery) |
| `searchable` | `Boolean` | `false` | Показать поиск |
| `selectedCount` | `Number` | `0` | Количество выбранных строк |
| `columnToggle` | `Boolean` | `false` | Показать переключатель колонок |
| `columns` | `Array` | `[]` | Список колонок с информацией о видимости |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |

## Column Structure

```typescript
interface Column {
  key: string;       // Уникальный ключ
  label: string;     // Отображаемое название
  visible: boolean;  // Видимость
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:searchQuery` | `String` | Изменение поиска |
| `toggle-column` | `String` | Переключение видимости колонки (key) |

## Slots

| Slot | Description |
|------|-------------|
| `left` | Контент в левой части (после поиска) |
| `right` | Контент в правой части (перед колонками) |

## Usage

### Basic with Search

```vue
<DXTableToolbar
  v-model:searchQuery="search"
  searchable
/>

<DXTable :data="filteredData" :columns="columns" />
```

### With Column Toggle

```vue
<DXTableToolbar
  v-model:searchQuery="search"
  searchable
  columnToggle
  :columns="columnsWithVisibility"
  @toggle-column="toggleColumn"
/>

<script setup>
const columnsWithVisibility = ref([
  { key: 'name', label: 'Имя', visible: true },
  { key: 'email', label: 'Email', visible: true },
  { key: 'role', label: 'Роль', visible: true },
  { key: 'created', label: 'Дата создания', visible: false }
]);

function toggleColumn(key) {
  const col = columnsWithVisibility.value.find(c => c.key === key);
  if (col) col.visible = !col.visible;
}
</script>
```

### With Selection Info

```vue
<DXTableToolbar
  v-model:searchQuery="search"
  searchable
  :selectedCount="selectedRows.length"
/>

<DXTable
  :data="data"
  :columns="columns"
  selectable
  v-model:selected="selectedRows"
/>
```

### With Custom Actions

```vue
<DXTableToolbar
  v-model:searchQuery="search"
  searchable
  :selectedCount="selected.length"
>
  <template #left>
    <DXFilterGroup
      v-model="filters"
      :filters="statusFilters"
      size="sm"
    />
  </template>
  
  <template #right>
    <DXButton v-if="selected.length" variant="ghost" size="sm" @click="deleteSelected">
      <DXIcon :icon="TrashIcon" />
      Удалить
    </DXButton>
    <DXButton size="sm" @click="addNew">
      <DXIcon :icon="PlusIcon" />
      Добавить
    </DXButton>
  </template>
</DXTableToolbar>
```

### Full Example

```vue
<template>
  <div class="border rounded-xl">
    <DXTableToolbar
      v-model:searchQuery="search"
      searchable
      columnToggle
      :columns="columnsConfig"
      :selectedCount="selected.length"
      @toggle-column="toggleColumn"
    >
      <template #left>
        <DXSegmentedControl
          v-model="statusFilter"
          :options="['Все', 'Активные', 'Архив']"
          size="sm"
        />
      </template>
      
      <template #right>
        <DXButton size="sm" variant="outline" @click="exportData">
          <DXIcon :icon="ArrowDownTrayIcon" />
          Экспорт
        </DXButton>
      </template>
    </DXTableToolbar>
    
    <DXTable
      :data="filteredData"
      :columns="visibleColumns"
      selectable
      v-model:selected="selected"
    />
    
    <DXTablePagination
      v-model:currentPage="page"
      v-model:pageSize="pageSize"
      :totalPages="totalPages"
      :from="from"
      :to="to"
      :total="total"
    />
  </div>
</template>
```

### Sizes

```vue
<DXTableToolbar size="sm" searchable />
<DXTableToolbar size="md" searchable />
<DXTableToolbar size="lg" searchable />
```

## See Also

- [DXTable](../organisms/DXTable.md)
- [DXTablePagination](./DXTablePagination.md)
- [DXInput](./DXInput.md)

