# useTableSelection

Composable для выделения строк таблицы.

## Import

```javascript
import { useTableSelection } from 'dxd-style-code';
```

## Signature

```typescript
function useTableSelection(
  data: Ref<Array>,
  props: Object,
  emit: Function
): {
  selectedRows: Ref<Array<string | number>>;
  allSelected: ComputedRef<boolean>;
  someSelected: ComputedRef<boolean>;
  isSelected: (id: string | number) => boolean;
  toggleRow: (id: string | number) => void;
  selectAll: () => void;
  clearSelection: () => void;
  selectRows: (ids: Array) => void;
  getSelectedRowsData: () => Array;
}
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | `Ref<Array>` | Данные таблицы |
| `props` | `Object` | Props компонента |
| `emit` | `Function` | Emit функция |

### Emit Events

- `row-select` - Выделение строки `{ id, selected, selectedRows }`
- `select-all` - Выделение всех `{ selected, selectedRows }`
- `selection-clear` - Очистка выделения
- `selection-change` - Изменение выделения

## Returns

| Property | Type | Description |
|----------|------|-------------|
| `selectedRows` | `Ref<Array>` | Массив ID выделенных строк |
| `allSelected` | `ComputedRef<boolean>` | Все строки выделены |
| `someSelected` | `ComputedRef<boolean>` | Некоторые строки выделены |
| `isSelected` | `Function` | Проверка выделения строки |
| `toggleRow` | `Function` | Переключить выделение строки |
| `selectAll` | `Function` | Выделить/снять выделение со всех |
| `clearSelection` | `Function` | Очистить выделение |
| `selectRows` | `Function` | Выделить указанные строки |
| `getSelectedRowsData` | `Function` | Получить данные выделенных строк |

## Usage

### Basic

```vue
<script setup>
import { ref } from 'vue';
import { useTableSelection } from 'dxd-style-code';

const data = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
]);

const emit = defineEmits(['row-select', 'select-all', 'selection-clear']);

const { 
  selectedRows, 
  allSelected, 
  someSelected,
  isSelected, 
  toggleRow, 
  selectAll 
} = useTableSelection(data, {}, emit);
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>
          <DXCheckbox
            :modelValue="allSelected"
            :indeterminate="someSelected"
            @update:modelValue="selectAll"
          />
        </th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data" :key="row.id">
        <td>
          <DXCheckbox
            :modelValue="isSelected(row.id)"
            @update:modelValue="toggleRow(row.id)"
          />
        </td>
        <td>{{ row.name }}</td>
      </tr>
    </tbody>
  </table>
</template>
```

### Bulk Actions

```vue
<script setup>
const { selectedRows, getSelectedRowsData, clearSelection } = useTableSelection(data, {}, emit);

const deleteSelected = async () => {
  const rows = getSelectedRowsData();
  await api.delete(rows.map(r => r.id));
  clearSelection();
};
</script>

<template>
  <div v-if="selectedRows.length > 0" class="flex gap-2 items-center">
    <span>Выбрано: {{ selectedRows.length }}</span>
    <DXButton variant="danger" @click="deleteSelected">
      Удалить выбранные
    </DXButton>
    <DXButton variant="ghost" @click="clearSelection">
      Снять выделение
    </DXButton>
  </div>
</template>
```

### Programmatic Selection

```vue
<script setup>
const { selectRows, clearSelection } = useTableSelection(data, {}, emit);

// Выделить первые 5 строк
const selectFirst5 = () => {
  const first5Ids = data.value.slice(0, 5).map(r => r.id);
  selectRows(first5Ids);
};

// Выделить все с определённым статусом
const selectByStatus = (status) => {
  const ids = data.value
    .filter(r => r.status === status)
    .map(r => r.id);
  selectRows(ids);
};
</script>

<template>
  <DXButtonGroup>
    <DXButton @click="selectFirst5">Первые 5</DXButton>
    <DXButton @click="selectByStatus('active')">Активные</DXButton>
    <DXButton @click="clearSelection">Очистить</DXButton>
  </DXButtonGroup>
</template>
```

### Row Highlighting

```vue
<template>
  <tr 
    v-for="row in data" 
    :key="row.id"
    :class="{ 'bg-blue-50': isSelected(row.id) }"
  >
    <td>
      <DXCheckbox
        :modelValue="isSelected(row.id)"
        @update:modelValue="toggleRow(row.id)"
      />
    </td>
    <td>{{ row.name }}</td>
  </tr>
</template>
```

## Notes

- Требует наличие поля `id` в каждой строке данных
- `allSelected` возвращает `false` если данных нет
- `someSelected` используется для indeterminate состояния чекбокса

## See Also

- [useTableData](./useTableData.md)
- [DXTable](../organisms/DXTable.md)
- [DXCheckbox](../atoms/DXCheckbox.md)

