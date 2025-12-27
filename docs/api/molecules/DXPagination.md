# DXPagination

Компонент пагинации для навигации по страницам.

## Import

```javascript
import { DXPagination } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `Number` | `1` | Текущая страница (v-model) |
| `totalPages` | `Number` | `1` | Общее количество страниц |
| `totalItems` | `Number` | `0` | Общее количество элементов (альтернатива totalPages) |
| `perPage` | `Number` | `10` | Элементов на странице |
| `maxVisible` | `Number` | `5` | Максимум видимых кнопок страниц |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'outline'`, `'ghost'` |
| `showFirstLast` | `Boolean` | `true` | Показать кнопки первой/последней страницы |
| `showPrevNext` | `Boolean` | `true` | Показать кнопки предыдущей/следующей |
| `showPageNumbers` | `Boolean` | `true` | Показать номера страниц |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `compact` | `Boolean` | `false` | Компактный режим |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `Number` | Изменение страницы |
| `change` | `Number` | Альтернативное событие |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `prev` | - | Кастомная кнопка "назад" |
| `next` | - | Кастомная кнопка "вперёд" |
| `first` | - | Кастомная кнопка "в начало" |
| `last` | - | Кастомная кнопка "в конец" |
| `page` | `{ page, active }` | Кастомный рендер страницы |

## Usage

### Basic

```vue
<DXPagination
  v-model="currentPage"
  :totalPages="10"
/>
```

### With Total Items

```vue
<DXPagination
  v-model="currentPage"
  :totalItems="150"
  :perPage="15"
/>
```

### Sizes

```vue
<DXPagination v-model="page" :totalPages="10" size="sm" />
<DXPagination v-model="page" :totalPages="10" size="md" />
<DXPagination v-model="page" :totalPages="10" size="lg" />
```

### Variants

```vue
<DXPagination v-model="page" :totalPages="10" variant="default" />
<DXPagination v-model="page" :totalPages="10" variant="outline" />
<DXPagination v-model="page" :totalPages="10" variant="ghost" />
```

### Without First/Last

```vue
<DXPagination
  v-model="currentPage"
  :totalPages="20"
  :showFirstLast="false"
/>
```

### Compact Mode

```vue
<DXPagination
  v-model="currentPage"
  :totalPages="10"
  compact
/>
<!-- Показывает только "< 1/10 >" -->
```

### Max Visible Pages

```vue
<DXPagination
  v-model="currentPage"
  :totalPages="100"
  :maxVisible="7"
/>
<!-- Показывает: 1 ... 45 46 47 48 49 ... 100 -->
```

### Only Arrows

```vue
<DXPagination
  v-model="currentPage"
  :totalPages="10"
  :showPageNumbers="false"
/>
```

### Custom Navigation

```vue
<DXPagination v-model="currentPage" :totalPages="10">
  <template #prev>
    <span>← Назад</span>
  </template>
  <template #next>
    <span>Вперёд →</span>
  </template>
</DXPagination>
```

### With Table

```vue
<template>
  <DXTable :data="paginatedData" :columns="columns" />
  
  <div class="flex justify-between items-center mt-4">
    <span class="text-sm text-slate-500">
      Показано {{ from }}-{{ to }} из {{ total }}
    </span>
    <DXPagination
      v-model="currentPage"
      :totalItems="total"
      :perPage="perPage"
    />
  </div>
</template>
```

### Controlled

```vue
<DXPagination
  :modelValue="currentPage"
  :totalPages="totalPages"
  @update:modelValue="handlePageChange"
/>

<script setup>
async function handlePageChange(page) {
  loading.value = true;
  await fetchData(page);
  currentPage.value = page;
  loading.value = false;
}
</script>
```

## Keyboard Navigation

- `←` / `→` - предыдущая/следующая страница
- `Home` - первая страница
- `End` - последняя страница

## See Also

- [DXTablePagination](./DXTablePagination.md)
- [DXTable](../organisms/DXTable.md)

