# DXRating

Компонент рейтинга с поддержкой звёзд, сердец и других символов.

## Import

```javascript
import { DXRating } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `Number` | `0` | Текущий рейтинг (v-model) |
| `max` | `Number` | `5` | Максимальное значение |
| `size` | `String` | `'md'` | Размер: `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `symbol` | `String` | `'star'` | Символ: `'star'`, `'heart'`, `'custom'` |
| `icon` | `Object\|Function` | `null` | Кастомная иконка (для symbol='custom') |
| `activeColor` | `String` | `'text-amber-400'` | Цвет активных элементов |
| `inactiveColor` | `String` | `'text-slate-300'` | Цвет неактивных элементов |
| `readonly` | `Boolean` | `false` | Только для чтения |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `allowHalf` | `Boolean` | `false` | Разрешить половинные значения |
| `allowClear` | `Boolean` | `true` | Разрешить сброс до 0 |
| `showValue` | `Boolean` | `false` | Показать числовое значение |
| `label` | `String` | `''` | Лейбл |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `Number` | Изменение рейтинга |
| `change` | `Number` | Альтернативное событие |
| `hover` | `Number` | Наведение на элемент |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `icon` | `{ index, active, half }` | Кастомная иконка |
| `value` | `{ value, max }` | Кастомное отображение значения |

## Usage

### Basic

```vue
<DXRating v-model="rating" />
```

### With Label

```vue
<DXRating v-model="rating" label="Оцените товар" />
```

### Sizes

```vue
<DXRating v-model="rating" size="xs" />
<DXRating v-model="rating" size="sm" />
<DXRating v-model="rating" size="md" />
<DXRating v-model="rating" size="lg" />
<DXRating v-model="rating" size="xl" />
```

### Symbols

```vue
<!-- Звёзды (по умолчанию) -->
<DXRating v-model="rating" symbol="star" />

<!-- Сердца -->
<DXRating v-model="rating" symbol="heart" />

<!-- Кастомный -->
<DXRating v-model="rating" symbol="custom" :icon="FireIcon" />
```

### Half Values

```vue
<DXRating
  v-model="rating"
  allowHalf
/>
<!-- Позволяет устанавливать 0.5, 1.5, 2.5 и т.д. -->
```

### Custom Max

```vue
<DXRating v-model="rating" :max="10" />
```

### Colors

```vue
<DXRating
  v-model="rating"
  activeColor="text-rose-500"
  inactiveColor="text-rose-200"
/>
```

### Readonly

```vue
<DXRating v-model="rating" readonly />
```

### With Value Display

```vue
<DXRating v-model="rating" showValue />
<!-- Показывает: ★★★★☆ 4/5 -->
```

### Custom Value Display

```vue
<DXRating v-model="rating" showValue>
  <template #value="{ value, max }">
    <span class="ml-2 text-sm font-medium">
      {{ value.toFixed(1) }} из {{ max }}
    </span>
  </template>
</DXRating>
```

### In Review Form

```vue
<div class="space-y-4">
  <DXFormControl label="Качество">
    <DXRating v-model="review.quality" />
  </DXFormControl>
  
  <DXFormControl label="Сервис">
    <DXRating v-model="review.service" />
  </DXFormControl>
  
  <DXFormControl label="Соотношение цена/качество">
    <DXRating v-model="review.value" />
  </DXFormControl>
</div>
```

### Average Rating Display

```vue
<div class="flex items-center gap-2">
  <DXRating :modelValue="4.5" readonly allowHalf size="sm" />
  <span class="text-lg font-bold">4.5</span>
  <span class="text-slate-500">(128 отзывов)</span>
</div>
```

### Compact Inline

```vue
<div class="flex items-center gap-1">
  <DXRating :modelValue="4" readonly size="xs" />
  <span class="text-xs">4.0</span>
</div>
```

## Accessibility

- Поддерживает клавиатурную навигацию (←, →)
- Имеет `role="slider"` и соответствующие ARIA атрибуты
- `aria-valuenow`, `aria-valuemin`, `aria-valuemax`

## See Also

- [DXProgress](../atoms/DXProgress.md)
- [DXIcon](../atoms/DXIcon.md)

