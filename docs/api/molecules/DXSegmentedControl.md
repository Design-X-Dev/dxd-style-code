# DXSegmentedControl

Сегментированный переключатель для выбора между несколькими опциями.

## Import

```javascript
import { DXSegmentedControl } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `String\|Number` | `null` | Выбранное значение (v-model) |
| `options` | `Array` | `[]` | Список опций |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'pills'`, `'underline'` |
| `fullWidth` | `Boolean` | `false` | Растянуть на всю ширину |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `block` | `Boolean` | `false` | Блочный режим (100% ширина) |
| `animated` | `Boolean` | `true` | Анимация перехода |

## Option Structure

```typescript
// Простой формат
type SimpleOption = string | number;

// Объектный формат
interface Option {
  value: string | number;
  label: string;
  icon?: Component;
  disabled?: boolean;
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `any` | Изменение выбора |
| `change` | `any` | Альтернативное событие |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `option` | `{ option, selected }` | Кастомный рендер опции |

## Usage

### Basic

```vue
<DXSegmentedControl
  v-model="view"
  :options="['Список', 'Сетка', 'Таблица']"
/>
```

### With Object Options

```vue
<DXSegmentedControl
  v-model="period"
  :options="[
    { value: 'day', label: 'День' },
    { value: 'week', label: 'Неделя' },
    { value: 'month', label: 'Месяц' },
    { value: 'year', label: 'Год' }
  ]"
/>
```

### With Icons

```vue
<DXSegmentedControl
  v-model="view"
  :options="[
    { value: 'list', label: 'Список', icon: ListBulletIcon },
    { value: 'grid', label: 'Сетка', icon: Squares2X2Icon }
  ]"
/>
```

### Icon Only

```vue
<DXSegmentedControl
  v-model="alignment"
  :options="[
    { value: 'left', icon: Bars3BottomLeftIcon },
    { value: 'center', icon: Bars3Icon },
    { value: 'right', icon: Bars3BottomRightIcon }
  ]"
/>
```

### Sizes

```vue
<DXSegmentedControl size="sm" :options="options" v-model="val" />
<DXSegmentedControl size="md" :options="options" v-model="val" />
<DXSegmentedControl size="lg" :options="options" v-model="val" />
```

### Variants

```vue
<DXSegmentedControl variant="default" :options="options" v-model="val" />
<DXSegmentedControl variant="pills" :options="options" v-model="val" />
<DXSegmentedControl variant="underline" :options="options" v-model="val" />
```

### Full Width

```vue
<DXSegmentedControl
  v-model="tab"
  :options="['Профиль', 'Настройки', 'Безопасность']"
  fullWidth
/>
```

### Block Mode

```vue
<DXSegmentedControl
  v-model="plan"
  :options="plans"
  block
/>
```

### Disabled Options

```vue
<DXSegmentedControl
  v-model="option"
  :options="[
    { value: 'a', label: 'Доступно' },
    { value: 'b', label: 'Недоступно', disabled: true },
    { value: 'c', label: 'Доступно' }
  ]"
/>
```

### Without Animation

```vue
<DXSegmentedControl
  v-model="value"
  :options="options"
  :animated="false"
/>
```

### Custom Option Render

```vue
<DXSegmentedControl v-model="selected" :options="options">
  <template #option="{ option, selected }">
    <div class="flex items-center gap-2">
      <DXIcon v-if="option.icon" :icon="option.icon" size="sm" />
      <span :class="selected && 'font-bold'">{{ option.label }}</span>
      <span v-if="option.count" class="text-xs bg-slate-200 px-1 rounded">
        {{ option.count }}
      </span>
    </div>
  </template>
</DXSegmentedControl>
```

### In Toolbar

```vue
<div class="flex items-center justify-between p-4 border-b">
  <h2>Заказы</h2>
  <DXSegmentedControl
    v-model="filter"
    :options="[
      { value: 'all', label: 'Все' },
      { value: 'active', label: 'Активные' },
      { value: 'completed', label: 'Завершённые' }
    ]"
    size="sm"
  />
</div>
```

## Accessibility

- Использует `role="radiogroup"` для группы
- Каждая опция имеет `role="radio"`
- Поддерживает клавиатурную навигацию (←, →, Home, End)
- `aria-checked` для выбранной опции

## See Also

- [DXButtonGroup](./DXButtonGroup.md)
- [DXTabs](../organisms/DXTabs.md)
- [DXFilterGroup](./DXFilterGroup.md)

