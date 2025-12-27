# useTableFilter

Composable для фильтрации данных таблицы.

## Import

```javascript
import { useTableFilter } from 'dxd-style-code';
```

## Signature

```typescript
function useTableFilter(
  data: Ref<Array>,
  props: TableFilterProps,
  emit: Function,
  sourceData?: Ref<Array>
): {
  filters: Ref<Object>;
  searchQuery: Ref<string>;
  filteredData: ComputedRef<Array>;
  applyFilter: (column: string, value: any) => void;
  clearFilters: () => void;
  clearColumnFilter: (column: string) => void;
  getFilterOptions: (column: Column) => FilterOption[];
  activeFilters: ComputedRef<ActiveFilter[]>;
  activeFiltersCount: ComputedRef<number>;
}
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | `Ref<Array>` | Данные для фильтрации |
| `props` | `Object` | Props компонента |
| `emit` | `Function` | Emit функция |
| `sourceData` | `Ref<Array>` | Исходные данные для опций фильтра (опционально) |

### Props

```typescript
interface TableFilterProps {
  columns: Column[];
  searchable: boolean;
  filterable: boolean;
}

interface Column {
  key: string;
  label: string;
  filterOptions?: FilterOption[];
}
```

### Emit

- `filter` - Применение фильтра
- `filter-clear` - Очистка всех фильтров

## Returns

| Property | Type | Description |
|----------|------|-------------|
| `filters` | `Ref<Object>` | Активные фильтры `{ column: value }` |
| `searchQuery` | `Ref<string>` | Поисковый запрос |
| `filteredData` | `ComputedRef<Array>` | Отфильтрованные данные |
| `applyFilter` | `Function` | Применить фильтр |
| `clearFilters` | `Function` | Очистить все фильтры |
| `clearColumnFilter` | `Function` | Очистить фильтр столбца |
| `getFilterOptions` | `Function` | Получить опции для фильтра |
| `activeFilters` | `ComputedRef<ActiveFilter[]>` | Активные фильтры с метаданными |
| `activeFiltersCount` | `ComputedRef<number>` | Количество активных фильтров |

## Usage

### Basic Filtering

```vue
<script setup>
import { ref } from 'vue';
import { useTableFilter } from 'dxd-style-code';

const data = ref([...]);
const props = defineProps({
  columns: Array,
  searchable: Boolean,
  filterable: Boolean
});
const emit = defineEmits(['filter', 'filter-clear']);

const { 
  searchQuery, 
  filteredData, 
  applyFilter, 
  clearFilters 
} = useTableFilter(data, props, emit);
</script>

<template>
  <DXInput v-model="searchQuery" placeholder="Поиск..." />
  
  <table>
    <tr v-for="row in filteredData" :key="row.id">
      <td>{{ row.name }}</td>
    </tr>
  </table>
</template>
```

### Column Filters

```vue
<script setup>
const { filters, applyFilter, getFilterOptions } = useTableFilter(data, props, emit);
</script>

<template>
  <thead>
    <tr>
      <th v-for="col in columns" :key="col.key">
        {{ col.label }}
        
        <DXSelect
          v-if="col.filterable"
          :modelValue="filters[col.key]"
          :options="getFilterOptions(col)"
          @update:modelValue="applyFilter(col.key, $event)"
        />
      </th>
    </tr>
  </thead>
</template>
```

### Active Filters Display

```vue
<script setup>
const { activeFilters, clearColumnFilter, clearFilters } = useTableFilter(data, props, emit);
</script>

<template>
  <div v-if="activeFilters.length > 0" class="flex gap-2">
    <DXTags 
      v-for="filter in activeFilters" 
      :key="filter.column"
      closable
      @close="clearColumnFilter(filter.column)"
    >
      {{ filter.columnLabel }}: {{ filter.valueLabel }}
    </DXTags>
    
    <DXButton size="sm" variant="ghost" @click="clearFilters">
      Очистить все
    </DXButton>
  </div>
</template>
```

### Custom Filter Options

```vue
<script setup>
const columns = [
  {
    key: 'status',
    label: 'Статус',
    filterable: true,
    filterOptions: [
      { value: 'active', label: 'Активный' },
      { value: 'inactive', label: 'Неактивный' },
      { value: 'pending', label: 'В ожидании' }
    ]
  }
];
</script>
```

## Notes

- Глобальный поиск ищет по всем столбцам
- Фильтры столбцов используют точное совпадение
- Опция "Все" добавляется автоматически к filterOptions
- `sourceData` используется для генерации уникальных значений фильтра

## See Also

- [useTableSort](./useTableSort.md)
- [useTablePagination](./useTablePagination.md)
- [DXTable](../organisms/DXTable.md)

