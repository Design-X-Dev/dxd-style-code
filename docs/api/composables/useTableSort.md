# useTableSort

Composable для сортировки данных таблицы.

## Import

```javascript
import { useTableSort } from 'dxd-style-code';
```

## Signature

```typescript
function useTableSort(
  data: Ref<Array>,
  props: TableSortProps,
  emit: Function
): {
  sortBy: Ref<string | null>;
  sortDirection: Ref<'asc' | 'desc'>;
  sortedData: ComputedRef<Array>;
  toggleSort: (column: string) => void;
  resetSort: () => void;
}
```

## Parameters

### Props

```typescript
interface TableSortProps {
  sortable: boolean;
  defaultSort?: {
    column: string;
    direction: 'asc' | 'desc';
  };
}
```

### Emit

- `sort` - Событие сортировки `{ column, direction }`

## Returns

| Property | Type | Description |
|----------|------|-------------|
| `sortBy` | `Ref<string>` | Текущий столбец сортировки |
| `sortDirection` | `Ref<'asc'\|'desc'>` | Направление сортировки |
| `sortedData` | `ComputedRef<Array>` | Отсортированные данные |
| `toggleSort` | `Function` | Переключить сортировку столбца |
| `resetSort` | `Function` | Сбросить к дефолту |

## Sort Cycle

При клике на столбец сортировка циклически меняется:
1. `asc` - по возрастанию
2. `desc` - по убыванию
3. `null` - без сортировки (исходный порядок)

## Usage

### Basic

```vue
<script setup>
import { ref } from 'vue';
import { useTableSort } from 'dxd-style-code';

const data = ref([...]);
const props = defineProps({
  sortable: { type: Boolean, default: true }
});
const emit = defineEmits(['sort']);

const { sortBy, sortDirection, sortedData, toggleSort } = useTableSort(data, props, emit);
</script>

<template>
  <table>
    <thead>
      <tr>
        <th @click="toggleSort('name')" class="cursor-pointer">
          Имя
          <span v-if="sortBy === 'name'">
            {{ sortDirection === 'asc' ? '↑' : '↓' }}
          </span>
        </th>
        <th @click="toggleSort('date')" class="cursor-pointer">
          Дата
          <span v-if="sortBy === 'date'">
            {{ sortDirection === 'asc' ? '↑' : '↓' }}
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in sortedData" :key="row.id">
        <td>{{ row.name }}</td>
        <td>{{ row.date }}</td>
      </tr>
    </tbody>
  </table>
</template>
```

### With Default Sort

```vue
<script setup>
const props = defineProps({
  sortable: { type: Boolean, default: true },
  defaultSort: { 
    type: Object, 
    default: () => ({ column: 'createdAt', direction: 'desc' }) 
  }
});

const { sortedData } = useTableSort(data, props, emit);
</script>
```

### Sort Indicator Component

```vue
<script setup>
const getSortIcon = (column) => {
  if (sortBy.value !== column) return '⇅';
  return sortDirection.value === 'asc' ? '↑' : '↓';
};
</script>

<template>
  <th 
    v-for="col in columns" 
    :key="col.key"
    @click="col.sortable && toggleSort(col.key)"
    :class="{ 'cursor-pointer': col.sortable }"
  >
    {{ col.label }}
    <span v-if="col.sortable" class="ml-1">
      {{ getSortIcon(col.key) }}
    </span>
  </th>
</template>
```

### Reset Button

```vue
<script setup>
const { resetSort, sortBy } = useTableSort(data, props, emit);
</script>

<template>
  <DXButton 
    v-if="sortBy" 
    variant="ghost" 
    size="sm" 
    @click="resetSort"
  >
    Сбросить сортировку
  </DXButton>
</template>
```

## Sort Logic

- **Числа**: Числовое сравнение
- **Строки**: Case-insensitive сравнение через `localeCompare`
- **null/undefined**: Перемещаются в конец

```javascript
// Пример сортировки
const data = [
  { name: 'Banana', price: 100 },
  { name: 'apple', price: null },  // null → в конец
  { name: 'Cherry', price: 50 }
];

// После сортировки по name asc:
// Apple, Banana, Cherry (case-insensitive)

// После сортировки по price asc:
// Cherry (50), Banana (100), apple (null в конце)
```

## See Also

- [useTableFilter](./useTableFilter.md)
- [useTablePagination](./useTablePagination.md)
- [DXTable](../organisms/DXTable.md)

