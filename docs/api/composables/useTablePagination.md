# useTablePagination

Composable для пагинации данных таблицы.

## Import

```javascript
import { useTablePagination } from 'dxd-style-code';
```

## Signature

```typescript
function useTablePagination(
  data: Ref<Array>,
  props: TablePaginationProps,
  emit: Function
): {
  currentPage: Ref<number>;
  pageSize: Ref<number>;
  totalPages: ComputedRef<number>;
  paginatedData: ComputedRef<Array>;
  paginationInfo: ComputedRef<PaginationInfo>;
  goToPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  changePageSize: (size: number) => void;
}
```

## Parameters

### Props

```typescript
interface TablePaginationProps {
  paginated: boolean;
  defaultPageSize?: number; // default: 10
}
```

### Emit

- `page-change` - Изменение текущей страницы
- `page-size-change` - Изменение размера страницы

## Returns

| Property | Type | Description |
|----------|------|-------------|
| `currentPage` | `Ref<number>` | Текущая страница |
| `pageSize` | `Ref<number>` | Размер страницы |
| `totalPages` | `ComputedRef<number>` | Общее количество страниц |
| `paginatedData` | `ComputedRef<Array>` | Данные текущей страницы |
| `paginationInfo` | `ComputedRef<PaginationInfo>` | Информация о пагинации |
| `goToPage` | `Function` | Перейти на страницу |
| `nextPage` | `Function` | Следующая страница |
| `previousPage` | `Function` | Предыдущая страница |
| `changePageSize` | `Function` | Изменить размер страницы |

### PaginationInfo

```typescript
interface PaginationInfo {
  from: number;  // Начальная запись (1-based)
  to: number;    // Конечная запись
  total: number; // Всего записей
}
```

## Usage

### Basic

```vue
<script setup>
import { ref } from 'vue';
import { useTablePagination } from 'dxd-style-code';

const data = ref([...]);
const props = defineProps({
  paginated: { type: Boolean, default: true },
  defaultPageSize: { type: Number, default: 10 }
});
const emit = defineEmits(['page-change', 'page-size-change']);

const { 
  paginatedData, 
  currentPage, 
  totalPages,
  nextPage, 
  previousPage 
} = useTablePagination(data, props, emit);
</script>

<template>
  <table>
    <tr v-for="row in paginatedData" :key="row.id">
      <td>{{ row.name }}</td>
    </tr>
  </table>
  
  <div class="flex gap-2">
    <DXButton @click="previousPage" :disabled="currentPage === 1">
      Назад
    </DXButton>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <DXButton @click="nextPage" :disabled="currentPage === totalPages">
      Вперёд
    </DXButton>
  </div>
</template>
```

### With Page Info

```vue
<script setup>
const { paginationInfo, paginatedData } = useTablePagination(data, props, emit);
</script>

<template>
  <p>
    Показано {{ paginationInfo.from }}-{{ paginationInfo.to }} 
    из {{ paginationInfo.total }}
  </p>
</template>
```

### Page Size Selector

```vue
<script setup>
const { pageSize, changePageSize } = useTablePagination(data, props, emit);

const pageSizeOptions = [10, 25, 50, 100];
</script>

<template>
  <DXSelect
    :modelValue="pageSize"
    :options="pageSizeOptions.map(n => ({ value: n, label: `${n} на странице` }))"
    @update:modelValue="changePageSize"
  />
</template>
```

### Page Navigation

```vue
<script setup>
const { 
  currentPage, 
  totalPages, 
  goToPage, 
  nextPage, 
  previousPage 
} = useTablePagination(data, props, emit);

const visiblePages = computed(() => {
  const pages = [];
  const start = Math.max(1, currentPage.value - 2);
  const end = Math.min(totalPages.value, currentPage.value + 2);
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
});
</script>

<template>
  <nav class="flex gap-1">
    <DXButton 
      variant="ghost" 
      @click="previousPage"
      :disabled="currentPage === 1"
    >
      ←
    </DXButton>
    
    <DXButton
      v-for="page in visiblePages"
      :key="page"
      :variant="page === currentPage ? 'primary' : 'ghost'"
      @click="goToPage(page)"
    >
      {{ page }}
    </DXButton>
    
    <DXButton 
      variant="ghost" 
      @click="nextPage"
      :disabled="currentPage === totalPages"
    >
      →
    </DXButton>
  </nav>
</template>
```

## Notes

- При изменении данных текущая страница автоматически корректируется
- При изменении размера страницы происходит сброс на первую страницу
- Если `paginated: false`, возвращаются все данные

## See Also

- [useTableFilter](./useTableFilter.md)
- [useTableSort](./useTableSort.md)
- [DXPagination](../molecules/DXPagination.md)
- [DXTablePagination](../molecules/DXTablePagination.md)

