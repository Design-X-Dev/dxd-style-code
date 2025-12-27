# useDataAttributes

Composable для генерации data-атрибутов из props компонента.

## Import

```javascript
import { 
  useDataAttributes, 
  useCustomDataAttributes, 
  useBooleanDataAttributes 
} from 'dxd-style-code';
```

## Functions

### useDataAttributes(props, attributeNames)

Генерирует data-атрибуты из указанных props.

```javascript
const dataAttrs = useDataAttributes(props, ['variant', 'size', 'disabled']);
// Returns: { 'data-variant': 'primary', 'data-size': 'md', 'data-disabled': true }
```

**Parameters:**
- `props` - Объект props компонента
- `attributeNames` - Массив имён props для конвертации

**Returns:** Объект с data-* атрибутами.

### useCustomDataAttributes(attributesMap)

Генерирует data-атрибуты с кастомной логикой.

```javascript
const dataAttrs = useCustomDataAttributes({
  variant: props.variant,
  size: props.size,
  active: isActive.value,
  disabled: props.disabled || props.loading
});
// Returns: { 'data-variant': 'primary', 'data-size': 'md', 'data-active': true, 'data-disabled': false }
```

**Parameters:**
- `attributesMap` - Объект с именами атрибутов и их значениями

**Returns:** Объект с data-* атрибутами (false значения исключаются).

### useBooleanDataAttributes(props, booleanPropNames)

Генерирует data-атрибуты только для truthy boolean props.

```javascript
const dataAttrs = useBooleanDataAttributes(props, ['disabled', 'loading', 'active']);
// If props.disabled = true, props.loading = false
// Returns: { 'data-disabled': true }
```

**Parameters:**
- `props` - Объект props компонента
- `booleanPropNames` - Массив имён boolean props

**Returns:** Объект только с truthy boolean атрибутами.

## Usage

### Basic Component

```vue
<template>
  <div v-bind="dataAttrs">
    <slot />
  </div>
</template>

<script setup>
import { useDataAttributes } from 'dxd-style-code';

const props = defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' }
});

const dataAttrs = useDataAttributes(props, ['variant', 'size']);
</script>
```

### Combined with Computed

```vue
<script setup>
import { computed } from 'vue';
import { useCustomDataAttributes } from 'dxd-style-code';

const props = defineProps({
  loading: Boolean,
  disabled: Boolean,
  variant: String
});

const dataAttrs = computed(() => useCustomDataAttributes({
  variant: props.variant,
  loading: props.loading,
  disabled: props.disabled || props.loading,
  component: 'DXButton'
}));
</script>

<template>
  <button v-bind="dataAttrs">
    <slot />
  </button>
</template>
```

### For Testing/Debugging

```vue
<template>
  <!-- Результат: <div data-component="MyCard" data-variant="primary" data-expanded="true"> -->
  <div 
    v-bind="dataAttrs"
    data-component="MyCard"
  >
    <slot />
  </div>
</template>

<script setup>
import { useDataAttributes } from 'dxd-style-code';

const props = defineProps({
  variant: String,
  expanded: Boolean
});

const dataAttrs = useDataAttributes(props, ['variant', 'expanded']);
</script>
```

## Notes

- camelCase имена автоматически конвертируются в kebab-case
- `null` и `undefined` значения исключаются
- Полезно для:
  - Отладки (инспекция элементов)
  - E2E тестирования (селекторы)
  - CSS стилизации (`[data-variant="primary"]`)

