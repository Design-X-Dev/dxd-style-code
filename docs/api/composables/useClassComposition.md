# useClassComposition

Composable для объединения базовых и дополнительных CSS классов.

## Import

```javascript
import { useClassComposition } from 'dxd-style-code';
```

## Signature

```typescript
function useClassComposition(
  baseClasses: string,
  ...additionalClasses: (string | Array | Object)[]
): Array
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `baseClasses` | `String` | Базовые классы (всегда применяются) |
| `additionalClasses` | `...any` | Дополнительные источники классов |

## Returns

`Array` - Массив классов для использования в `:class` binding.

## Usage

### Basic

```javascript
import { useClassComposition } from 'dxd-style-code';

const BASE_CLASSES = 'flex items-center';
const classes = useClassComposition(BASE_CLASSES, 'text-lg', 'font-bold');
// Returns: ['flex items-center', 'text-lg', 'font-bold']
```

### With Conditional Classes

```vue
<script setup>
import { computed } from 'vue';
import { useClassComposition } from 'dxd-style-code';

const props = defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' }
});

const VARIANT_CLASSES = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-gray-200 text-gray-800'
};

const SIZE_CLASSES = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2 text-base'
};

const buttonClasses = computed(() => 
  useClassComposition(
    'rounded font-medium',
    VARIANT_CLASSES[props.variant],
    SIZE_CLASSES[props.size]
  )
);
</script>

<template>
  <button :class="buttonClasses">
    <slot />
  </button>
</template>
```

### Filtering Empty Values

```javascript
const classes = useClassComposition(
  'base-class',
  null,              // Filtered out
  undefined,         // Filtered out
  '',                // Filtered out
  'valid-class'
);
// Returns: ['base-class', 'valid-class']
```

### In Component

```vue
<script setup>
import { computed } from 'vue';
import { useClassComposition } from 'dxd-style-code';

const props = defineProps({
  disabled: Boolean,
  class: String
});

const wrapperClasses = computed(() => 
  useClassComposition(
    'flex items-center gap-2',
    props.disabled && 'opacity-50 pointer-events-none',
    props.class
  )
);
</script>

<template>
  <div :class="wrapperClasses">
    <slot />
  </div>
</template>
```

## Notes

- Пустые значения (`null`, `undefined`, `''`, `false`) автоматически фильтруются
- Поддерживает строки, массивы и объекты
- Используется внутри большинства компонентов библиотеки

