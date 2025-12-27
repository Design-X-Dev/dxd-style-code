# useSize

Composable для унификации размеров компонентов.

## Import

```javascript
import { useSize } from 'dxd-style-code';
```

## Signature

```typescript
function useSize(
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none',
  type: string
): string | Object
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `size` | `String` | - | Размер: `xs`, `sm`, `md`, `lg`, `xl` |
| `type` | `String` | `'input'` | Тип компонента |

## Component Types

| Type | Description | Sizes |
|------|-------------|-------|
| `button` | Кнопки | xs, sm, md, lg, xl |
| `buttonIcon` | Иконочные кнопки | xs, sm, md, lg, xl |
| `input` | Инпуты | xs, sm, md, lg, xl |
| `icon` | Иконки | xs, sm, md, lg, xl |
| `text` | Текст | xs, sm, md, lg, xl |
| `checkbox` | Чекбоксы | xs, sm, md, lg, xl |
| `radio` | Радио-кнопки | xs, sm, md, lg, xl |
| `avatar` | Аватары | xs, sm, md, lg, xl |
| `loader` | Лоадеры | xs, sm, md, lg, xl |
| `progress` | Прогресс-бары | xs, sm, md, lg |
| `inputAddon` | Аддоны инпутов | xs, sm, md, lg, xl |
| `sliderTrack` | Трек слайдера | xs, sm, md, lg, xl |
| `sliderThumb` | Ползунок слайдера | xs, sm, md, lg, xl |
| `spacing` | Отступы | none, xs, sm, md, lg, xl |
| `tooltip` | Тултипы | xs, sm, md, lg, xl |
| `toggle` | Переключатели | xs, sm, md, lg, xl |
| `badge` | Бейджи | sm, md |
| `image` | Изображения | xs, sm, md, lg, xl |

## Returns

- `String` - Tailwind CSS классы (для большинства типов)
- `Object` - `{ track, thumb }` (для типа `toggle`)

## Usage

### Basic

```javascript
import { useSize } from 'dxd-style-code';

const buttonClasses = useSize('md', 'button');
// Returns: 'h-10 px-4 py-2.5 text-sm'

const iconClasses = useSize('lg', 'icon');
// Returns: 'w-6 h-6'
```

### In Component

```vue
<script setup>
import { computed } from 'vue';
import { useSize } from 'dxd-style-code';

const props = defineProps({
  size: { type: String, default: 'md' }
});

const sizeClasses = computed(() => useSize(props.size, 'button'));
</script>

<template>
  <button :class="sizeClasses">
    <slot />
  </button>
</template>
```

### Toggle (returns Object)

```vue
<script setup>
import { computed } from 'vue';
import { useSize } from 'dxd-style-code';

const props = defineProps({
  size: { type: String, default: 'md' }
});

const toggleSizes = computed(() => useSize(props.size, 'toggle'));
// Returns: { track: 'h-6 w-11', thumb: 'h-4 w-4' }
</script>

<template>
  <div :class="toggleSizes.track">
    <span :class="toggleSizes.thumb" />
  </div>
</template>
```

### Spacing

```vue
<script setup>
import { useSize } from 'dxd-style-code';

const gapClass = useSize('md', 'spacing');
// Returns: 'gap-4'
</script>

<template>
  <div :class="['flex', gapClass]">
    <div>Item 1</div>
    <div>Item 2</div>
  </div>
</template>
```

## Size Reference Table

| Size | Button Height | Icon Size | Text Size |
|------|---------------|-----------|-----------|
| xs | h-7 | w-3 h-3 | text-xs |
| sm | h-8 | w-4 h-4 | text-sm |
| md | h-10 | w-5 h-5 | text-base |
| lg | h-12 | w-6 h-6 | text-lg |
| xl | h-14 | w-8 h-8 | text-xl |

## See Also

- [useSpacing](./useSpacing.md)
- [useVariant](./useVariant.md)

