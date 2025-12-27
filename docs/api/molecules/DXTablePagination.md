# DXTablePagination

Специализированный компонент пагинации для таблиц с информацией о записях и размере страницы.

## Import

```javascript
import { DXTablePagination } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentPage` | `Number` | `required` | Текущая страница (v-model:currentPage) |
| `totalPages` | `Number` | `required` | Общее количество страниц |
| `pageSize` | `Number` | `required` | Размер страницы (v-model:pageSize) |
| `pageSizeOptions` | `Array` | `[10, 25, 50, 100]` | Опции размера страницы |
| `from` | `Number` | `required` | Номер первого элемента на странице |
| `to` | `Number` | `required` | Номер последнего элемента на странице |
| `total` | `Number` | `required` | Общее количество элементов |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:currentPage` | `Number` | Изменение страницы |
| `update:pageSize` | `Number` | Изменение размера страницы |

## Usage

### Basic

```vue
<DXTablePagination
  v-model:currentPage="currentPage"
  v-model:pageSize="pageSize"
  :totalPages="totalPages"
  :from="from"
  :to="to"
  :total="total"
/>
```

### Complete Example

```vue
<template>
  <DXTable :data="paginatedData" :columns="columns" />
  
  <DXTablePagination
    v-model:currentPage="currentPage"
    v-model:pageSize="pageSize"
    :totalPages="totalPages"
    :from="from"
    :to="to"
    :total="data.length"
  />
</template>

<script setup>
import { ref, computed } from 'vue';

const data = ref([/* ... 150 items ... */]);
const currentPage = ref(1);
const pageSize = ref(10);

const totalPages = computed(() => 
  Math.ceil(data.value.length / pageSize.value)
);

const from = computed(() => 
  (currentPage.value - 1) * pageSize.value + 1
);

const to = computed(() => 
  Math.min(currentPage.value * pageSize.value, data.value.length)
);

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  return data.value.slice(start, start + pageSize.value);
});
</script>
```

### Custom Page Size Options

```vue
<DXTablePagination
  v-model:currentPage="page"
  v-model:pageSize="size"
  :totalPages="100"
  :pageSizeOptions="[5, 10, 20, 50, 100]"
  :from="1"
  :to="5"
  :total="500"
/>
```

### Sizes

```vue
<DXTablePagination size="sm" ... />
<DXTablePagination size="md" ... />
<DXTablePagination size="lg" ... />
```

### With Loading State

```vue
<template>
  <DXTable :data="data" :columns="columns" :loading="isLoading" />
  
  <DXTablePagination
    v-model:currentPage="currentPage"
    v-model:pageSize="pageSize"
    :totalPages="totalPages"
    :from="from"
    :to="to"
    :total="total"
    :disabled="isLoading"
  />
</template>

<script setup>
async function handlePageChange(page) {
  isLoading.value = true;
  await fetchData({ page, pageSize: pageSize.value });
  isLoading.value = false;
}
</script>
```

### Server-Side Pagination

```vue
<template>
  <DXTable :data="serverData" :columns="columns" :loading="loading" />
  
  <DXTablePagination
    :currentPage="pagination.page"
    :pageSize="pagination.perPage"
    :totalPages="pagination.totalPages"
    :from="pagination.from"
    :to="pagination.to"
    :total="pagination.total"
    @update:currentPage="handlePageChange"
    @update:pageSize="handlePageSizeChange"
  />
</template>

<script setup>
const pagination = ref({
  page: 1,
  perPage: 10,
  total: 0,
  totalPages: 0,
  from: 0,
  to: 0
});

async function fetchData() {
  loading.value = true;
  const response = await api.getItems({
    page: pagination.value.page,
    perPage: pagination.value.perPage
  });
  
  serverData.value = response.data;
  pagination.value = response.meta;
  loading.value = false;
}

function handlePageChange(page) {
  pagination.value.page = page;
  fetchData();
}

function handlePageSizeChange(size) {
  pagination.value.perPage = size;
  pagination.value.page = 1; // Сбросить на первую страницу
  fetchData();
}
</script>
```

## Display Format

Компонент отображает:
- Слева: "Показано X-Y из Z" 
- Справа: Пагинация + Селект размера страницы

## See Also

- [DXPagination](./DXPagination.md)
- [DXTable](../organisms/DXTable.md)
- [DXSelect](./DXSelect.md)

