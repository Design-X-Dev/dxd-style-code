# useVariant

Composable для управления вариантами и цветовыми схемами компонентов.

## Import

```javascript
import { 
  useVariantClasses,
  useVariantIcon,
  useVariantConfig,
  useVariantCheckbox,
  useVariantRadio,
  useVariantText,
  useVariantTag,
  useVariantProgress,
  useVariantLoader,
  useVariantDivider,
  useVariantDividerBorder,
  useVariantTooltip,
  useTooltipPosition,
  useTooltipArrow,
  useVariantSlider,
  useVariantToggle,
  useVariantBadge,
  useVariantButton,
  useVariantDropdownItem,
  VARIANT_CONFIGS,
} from 'dxd-style-code';
```

## Variants

| Variant | Description | Use Case |
|---------|-------------|----------|
| `default` | Нейтральный серый | Общее использование |
| `primary` | Основной цвет | Главные действия |
| `info` | Синий | Информация |
| `success` | Зелёный | Успех, подтверждение |
| `warning` | Жёлтый/оранжевый | Предупреждение |
| `danger` | Красный | Ошибка, удаление |

## Functions

### useVariantClasses(variant)

Базовые классы для Alert/Toast.

```javascript
const classes = useVariantClasses('success');
// Returns: 'bg-emerald-50 text-emerald-800 border-emerald-200'
```

### useVariantIcon(variant)

Иконка для варианта (Heroicons).

```javascript
import { useVariantIcon } from 'dxd-style-code';

const Icon = useVariantIcon('warning');
// Returns: ExclamationTriangleIcon component
```

### useVariantConfig(variant)

Полная конфигурация варианта.

```javascript
const config = useVariantConfig('info');
// Returns: { bg, text, border, icon, iconColor, checkbox, radio, ... }
```

### useVariantButton(variant)

Классы для кнопки.

```javascript
const classes = useVariantButton('primary');
// Returns: 'bg-slate-800 text-white hover:bg-slate-700'
```

**Button variants:** `primary`, `secondary`, `ghost`, `outline`, `success`, `warning`, `danger`, `info`, `link`, `soft`

### useVariantCheckbox(color)

Классы для checkbox.

```javascript
const classes = useVariantCheckbox('primary');
// Returns: { unchecked, checked, ring }
```

### useVariantRadio(color)

Классы для radio.

```javascript
const classes = useVariantRadio('success');
// Returns: { unchecked, checked, ring, dot }
```

### useVariantText(color)

Цвет текста.

```javascript
const textClass = useVariantText('muted');
// Returns: 'text-slate-500'
```

### useVariantTag(color)

Классы для тега.

```javascript
const classes = useVariantTag('info');
// Returns: 'bg-cyan-100 text-cyan-800 border-cyan-200'
```

### useVariantProgress(color)

Класс для progress bar.

```javascript
const progressClass = useVariantProgress('success');
// Returns: 'bg-emerald-500'
```

### useVariantLoader(color)

Конфигурация для loader.

```javascript
const loader = useVariantLoader('info');
// Returns: { border, borderTop, text }
```

### useVariantTooltip(color)

Классы для tooltip.

```javascript
const classes = useVariantTooltip('dark');
// Returns: 'bg-slate-900 text-white'
```

### useTooltipPosition(position)

Классы позиционирования tooltip.

```javascript
const positionClasses = useTooltipPosition('bottom');
// Returns: 'top-full left-1/2 -translate-x-1/2 mt-2'
```

### useTooltipArrow(position, color)

Классы для стрелки tooltip.

```javascript
const arrowClasses = useTooltipArrow('top', 'dark');
```

### useVariantSlider(variant)

Конфигурация для slider.

```javascript
const slider = useVariantSlider('primary');
// Returns: { track, thumb, thumbHover, tick, text, textActive, textValue }
```

### useVariantToggle(color, checked)

Классы для toggle.

```javascript
const toggle = useVariantToggle('success', true);
// Returns: { checked, unchecked, ring, current }
```

### useVariantBadge(variant)

Классы для badge.

```javascript
const classes = useVariantBadge('success');
// Returns: 'bg-emerald-50 text-emerald-700 border-emerald-100'
```

### useVariantDividerBorder(orientation, thickness, color)

Классы для divider.

```javascript
const classes = useVariantDividerBorder('horizontal', 'default', 'dark');
// Returns: 'border-t border-slate-300'
```

## Usage

### Alert Component

```vue
<script setup>
import { computed } from 'vue';
import { useVariantClasses, useVariantIcon } from 'dxd-style-code';

const props = defineProps({
  variant: { type: String, default: 'info' }
});

const alertClasses = computed(() => useVariantClasses(props.variant));
const AlertIcon = computed(() => useVariantIcon(props.variant));
</script>

<template>
  <div :class="['rounded-lg p-4 border', alertClasses]">
    <component :is="AlertIcon" v-if="AlertIcon" class="w-5 h-5" />
    <slot />
  </div>
</template>
```

### Button Component

```vue
<script setup>
import { computed } from 'vue';
import { useVariantButton } from 'dxd-style-code';

const props = defineProps({
  variant: { type: String, default: 'primary' }
});

const buttonClasses = computed(() => useVariantButton(props.variant));
</script>

<template>
  <button :class="['px-4 py-2 rounded', buttonClasses]">
    <slot />
  </button>
</template>
```

## See Also

- [useSize](./useSize.md)
- [DXButton](../atoms/DXButton.md)
- [DXAlert](../molecules/DXAlert.md)

