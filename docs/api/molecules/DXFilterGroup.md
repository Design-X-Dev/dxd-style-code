# DXFilterGroup

Группа фильтров с возможностью выбора и очистки.

## Import

```javascript
import { DXFilterGroup } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `Array` | `[]` | Выбранные фильтры (v-model) |
| `filters` | `Array` | `[]` | Список доступных фильтров |
| `multiple` | `Boolean` | `true` | Множественный выбор |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'outline'`, `'ghost'` |
| `showClear` | `Boolean` | `true` | Показать кнопку очистки |
| `clearText` | `String` | `'Сбросить'` | Текст кнопки очистки |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `label` | `String` | `''` | Лейбл группы |

## Filter Structure

```typescript
interface Filter {
  value: string | number;   // Уникальное значение
  label: string;            // Отображаемый текст
  icon?: Component;         // Иконка (опционально)
  count?: number;           // Количество элементов (опционально)
  disabled?: boolean;       // Отключен ли фильтр
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `Array` | Изменение выбранных фильтров |
| `change` | `Array` | Альтернативное событие |
| `clear` | - | Очистка всех фильтров |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `filter` | `{ filter, selected }` | Кастомный рендер фильтра |
| `clear` | - | Кастомная кнопка очистки |

## Usage

### Basic

```vue
<DXFilterGroup
  v-model="selectedFilters"
  :filters="[
    { value: 'all', label: 'Все' },
    { value: 'active', label: 'Активные' },
    { value: 'completed', label: 'Завершённые' },
    { value: 'archived', label: 'Архив' }
  ]"
/>
```

### With Counts

```vue
<DXFilterGroup
  v-model="selectedFilters"
  :filters="[
    { value: 'all', label: 'Все', count: 150 },
    { value: 'active', label: 'Активные', count: 45 },
    { value: 'pending', label: 'Ожидают', count: 12 },
    { value: 'completed', label: 'Завершённые', count: 93 }
  ]"
/>
```

### With Icons

```vue
<DXFilterGroup
  v-model="selectedFilters"
  :filters="[
    { value: 'inbox', label: 'Входящие', icon: InboxIcon },
    { value: 'sent', label: 'Отправленные', icon: PaperAirplaneIcon },
    { value: 'draft', label: 'Черновики', icon: DocumentIcon },
    { value: 'trash', label: 'Корзина', icon: TrashIcon }
  ]"
/>
```

### Single Selection

```vue
<DXFilterGroup
  v-model="selectedStatus"
  :filters="statusFilters"
  :multiple="false"
/>
```

### Without Clear Button

```vue
<DXFilterGroup
  v-model="selectedFilters"
  :filters="filters"
  :showClear="false"
/>
```

### With Label

```vue
<DXFilterGroup
  v-model="selectedFilters"
  :filters="filters"
  label="Фильтр по статусу"
/>
```

### Variants

```vue
<DXFilterGroup :filters="filters" variant="default" />
<DXFilterGroup :filters="filters" variant="outline" />
<DXFilterGroup :filters="filters" variant="ghost" />
```

### Custom Filter Render

```vue
<DXFilterGroup v-model="selected" :filters="filters">
  <template #filter="{ filter, selected }">
    <div :class="['flex items-center gap-2', selected && 'font-bold']">
      <DXIcon v-if="filter.icon" :icon="filter.icon" size="sm" />
      <span>{{ filter.label }}</span>
      <span v-if="filter.count" class="text-xs bg-slate-200 px-1.5 rounded">
        {{ filter.count }}
      </span>
    </div>
  </template>
</DXFilterGroup>
```

## See Also

- [DXButtonGroup](./DXButtonGroup.md)
- [DXSegmentedControl](./DXSegmentedControl.md)
- [DXTabs](../organisms/DXTabs.md)

