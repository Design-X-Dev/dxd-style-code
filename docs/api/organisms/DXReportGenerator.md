# DXReportGenerator

Генератор отчётов с фильтрами и экспортом.

## Import

```javascript
import { DXReportGenerator } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `String` | `''` | Заголовок отчёта |
| `filters` | `Array` | `[]` | Конфигурация фильтров |
| `columns` | `Array` | `[]` | Колонки отчёта |
| `data` | `Array` | `[]` | Данные отчёта |
| `loading` | `Boolean` | `false` | Состояние загрузки |
| `exportFormats` | `Array` | `['csv', 'xlsx', 'pdf']` | Доступные форматы экспорта |
| `showPreview` | `Boolean` | `true` | Показывать превью |
| `autoGenerate` | `Boolean` | `false` | Автогенерация при изменении фильтров |

## Filter Structure

```typescript
interface Filter {
  key: string;
  label: string;
  type: 'select' | 'date' | 'daterange' | 'input' | 'checkbox';
  options?: Array;
  defaultValue?: any;
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `generate` | `filters` | Генерация отчёта |
| `export` | `{ format, data }` | Экспорт |
| `filter-change` | `{ key, value }` | Изменение фильтра |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `filters` | `{ filters, values }` | Кастомные фильтры |
| `preview` | `{ data }` | Кастомный превью |
| `actions` | - | Дополнительные действия |

## Usage

### Basic

```vue
<DXReportGenerator
  title="Отчёт по продажам"
  :filters="[
    { key: 'period', label: 'Период', type: 'daterange' },
    { key: 'category', label: 'Категория', type: 'select', options: categories }
  ]"
  :columns="columns"
  :data="reportData"
  @generate="generateReport"
  @export="exportReport"
/>
```

### With Custom Filters

```vue
<DXReportGenerator title="Финансовый отчёт">
  <template #filters="{ values }">
    <DXFormControl label="Год">
      <DXSelect v-model="values.year" :options="years" />
    </DXFormControl>
    <DXFormControl label="Квартал">
      <DXSelect v-model="values.quarter" :options="quarters" />
    </DXFormControl>
  </template>
</DXReportGenerator>
```

### Auto-generate

```vue
<DXReportGenerator
  title="Отчёт"
  :filters="filters"
  :data="data"
  autoGenerate
  @filter-change="handleFilterChange"
/>
```

## See Also

- [DXTable](./DXTable.md)
- [DXDatePicker](../molecules/DXDatePicker.md)

