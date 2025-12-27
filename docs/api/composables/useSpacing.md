# useSpacing

Composable для унификации padding и margin классов.

## Import

```javascript
import { useSpacing } from 'dxd-style-code';
```

## Signature

```typescript
function useSpacing(
  size: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  type: 'padding' | 'paddingX' | 'paddingY' | 'margin' | 'marginX' | 'marginY'
): string
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `size` | `String` | - | Размер отступа |
| `type` | `String` | `'padding'` | Тип отступа |

## Size Values

| Size | Tailwind Value | Pixels |
|------|----------------|--------|
| `none` | `0` | 0px |
| `xs` | `1` | 4px |
| `sm` | `2` | 8px |
| `md` | `4` | 16px |
| `lg` | `6` | 24px |
| `xl` | `8` | 32px |

## Type Values

| Type | Tailwind Prefix |
|------|-----------------|
| `padding` | `p-` |
| `paddingX` | `px-` |
| `paddingY` | `py-` |
| `margin` | `m-` |
| `marginX` | `mx-` |
| `marginY` | `my-` |

## Usage

### Basic

```javascript
import { useSpacing } from 'dxd-style-code';

const padding = useSpacing('md', 'padding');
// Returns: 'p-4'

const marginX = useSpacing('sm', 'marginX');
// Returns: 'mx-2'

const paddingY = useSpacing('lg', 'paddingY');
// Returns: 'py-6'
```

### In Component

```vue
<script setup>
import { computed } from 'vue';
import { useSpacing } from 'dxd-style-code';

const props = defineProps({
  padding: { type: String, default: 'md' }
});

const paddingClass = computed(() => useSpacing(props.padding, 'padding'));
</script>

<template>
  <div :class="paddingClass">
    <slot />
  </div>
</template>
```

### Combining Spacings

```vue
<script setup>
import { useSpacing } from 'dxd-style-code';

const paddingX = useSpacing('lg', 'paddingX');
const paddingY = useSpacing('md', 'paddingY');
</script>

<template>
  <div :class="[paddingX, paddingY]">
    <!-- px-6 py-4 -->
    Content
  </div>
</template>
```

### Card Example

```vue
<script setup>
import { useSpacing } from 'dxd-style-code';

const props = defineProps({
  spacing: { 
    type: String, 
    default: 'md',
    validator: v => ['none', 'xs', 'sm', 'md', 'lg', 'xl'].includes(v)
  }
});

const cardPadding = useSpacing(props.spacing, 'padding');
</script>

<template>
  <div :class="['bg-white rounded-lg shadow', cardPadding]">
    <slot />
  </div>
</template>
```

## See Also

- [useSize](./useSize.md)

