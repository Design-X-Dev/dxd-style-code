# useTableColumns

Composable для управления видимостью столбцов таблицы.

## Import

```javascript
import { useTableColumns } from 'dxd-style-code';
```

## Signature

```typescript
function useTableColumns(props, emit): {
  hiddenColumns: Ref<string[]>;
  visibleColumns: ComputedRef<Column[]>;
  columnsWithVisibility: ComputedRef<ColumnWithVisibility[]>;
  toggleColumn: (key: string) => void;
  showColumn: (key: string) => void;
  hideColumn: (key: string) => void;
  showAllColumns: () => void;
  hideAllColumns: (exceptKeys?: string[]) => void;
  resetColumns: () => void;
}
```

## Parameters

### Props

```typescript
interface TableColumnsProps {
  columns: Column[];
}

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  // ... other column props
}
```

### Emit

- `column-toggle` - Переключение видимости столбца
- `column-show` - Показ столбца
- `column-hide` - Скрытие столбца
- `columns-show-all` - Показ всех столбцов
- `columns-hide-all` - Скрытие всех столбцов
- `columns-reset` - Сброс к дефолту

## Returns

| Property | Type | Description |
|----------|------|-------------|
| `hiddenColumns` | `Ref<string[]>` | Массив ключей скрытых столбцов |
| `visibleColumns` | `ComputedRef<Column[]>` | Видимые столбцы |
| `columnsWithVisibility` | `ComputedRef<ColumnWithVisibility[]>` | Все столбцы с информацией о видимости |
| `toggleColumn` | `Function` | Переключить видимость |
| `showColumn` | `Function` | Показать столбец |
| `hideColumn` | `Function` | Скрыть столбец |
| `showAllColumns` | `Function` | Показать все |
| `hideAllColumns` | `Function` | Скрыть все (кроме указанных) |
| `resetColumns` | `Function` | Сброс |

## Usage

### Basic

```vue
<script setup>
import { useTableColumns } from 'dxd-style-code';

const props = defineProps({
  columns: { type: Array, required: true }
});

const emit = defineEmits(['column-toggle']);

const { 
  visibleColumns, 
  columnsWithVisibility, 
  toggleColumn 
} = useTableColumns(props, emit);
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="col in visibleColumns" :key="col.key">
          {{ col.label }}
        </th>
      </tr>
    </thead>
  </table>
</template>
```

### Column Picker

```vue
<script setup>
const { columnsWithVisibility, toggleColumn } = useTableColumns(props, emit);
</script>

<template>
  <DXDropdown>
    <template #trigger>
      <DXButton>Столбцы</DXButton>
    </template>
    
    <div v-for="col in columnsWithVisibility" :key="col.key">
      <DXCheckbox
        :modelValue="col.visible"
        @update:modelValue="toggleColumn(col.key)"
      >
        {{ col.label }}
      </DXCheckbox>
    </div>
  </DXDropdown>
</template>
```

### Hide All Except ID

```vue
<script setup>
const { hideAllColumns, showAllColumns, resetColumns } = useTableColumns(props, emit);

// Скрыть все кроме 'id' и 'name'
const hideNonEssential = () => {
  hideAllColumns(['id', 'name']);
};
</script>

<template>
  <DXButtonGroup>
    <DXButton @click="hideNonEssential">Только основные</DXButton>
    <DXButton @click="showAllColumns">Показать все</DXButton>
    <DXButton @click="resetColumns">Сброс</DXButton>
  </DXButtonGroup>
</template>
```

## See Also

- [useTableData](./useTableData.md)
- [DXTable](../organisms/DXTable.md)

