# useTableData

Composable для управления данными таблицы с поддержкой локального и API режимов.

## Import

```javascript
import { useTableData } from 'dxd-style-code';
```

## Signature

```typescript
function useTableData(props, emit): {
  localData: Ref<Array>;
  loading: Ref<boolean>;
  error: Ref<string | null>;
  loadData: (params?: Object) => Promise<void>;
}
```

## Parameters

### Props

```typescript
interface TableDataProps {
  data: Array;           // Данные для локального режима
  mode: 'local' | 'api'; // Режим работы
  apiUrl?: string;       // URL для API режима
  apiParams?: Object;    // Параметры запроса
  apiMethod?: string;    // HTTP метод (default: 'GET')
}
```

### Emit

- `data-loaded` - Данные загружены (API режим)
- `error` - Ошибка загрузки

## Returns

| Property | Type | Description |
|----------|------|-------------|
| `localData` | `Ref<Array>` | Локальная копия данных |
| `loading` | `Ref<boolean>` | Состояние загрузки |
| `error` | `Ref<string>` | Сообщение об ошибке |
| `loadData` | `Function` | Загрузка данных |

## Usage

### Local Mode

```vue
<script setup>
import { useTableData } from 'dxd-style-code';

const props = defineProps({
  data: { type: Array, default: () => [] },
  mode: { type: String, default: 'local' }
});

const emit = defineEmits(['data-loaded', 'error']);

const { localData, loading, error, loadData } = useTableData(props, emit);
</script>

<template>
  <table>
    <tr v-for="row in localData" :key="row.id">
      <td>{{ row.name }}</td>
    </tr>
  </table>
</template>
```

### API Mode

```vue
<script setup>
import { onMounted } from 'vue';
import { useTableData } from 'dxd-style-code';

const props = defineProps({
  mode: { type: String, default: 'api' },
  apiUrl: { type: String, required: true },
  apiParams: { type: Object, default: () => ({}) }
});

const emit = defineEmits(['data-loaded', 'error']);

const { localData, loading, error, loadData } = useTableData(props, emit);

onMounted(() => {
  loadData();
});

const reload = () => {
  loadData({ page: 1 });
};
</script>

<template>
  <div v-if="loading">Загрузка...</div>
  <div v-else-if="error">{{ error }}</div>
  <table v-else>
    <tr v-for="row in localData" :key="row.id">
      <td>{{ row.name }}</td>
    </tr>
  </table>
</template>
```

### With Pagination Params

```vue
<script setup>
const { localData, loadData } = useTableData(props, emit);

const loadPage = async (page, pageSize) => {
  await loadData({ 
    page, 
    limit: pageSize,
    sort: 'name',
    order: 'asc'
  });
};
</script>
```

## Notes

- В локальном режиме автоматически следит за изменениями `props.data`
- В API режиме поддерживает любые query параметры
- API ответ может быть массивом или объектом с полем `data`

## See Also

- [useTableSort](./useTableSort.md)
- [useTableFilter](./useTableFilter.md)
- [useTablePagination](./useTablePagination.md)
- [DXTable](../organisms/DXTable.md)

