# useAnimation

Composable для управления анимациями и transition конфигурациями.

## Import

```javascript
import { 
  useAnimation,
  useAnimationTransition,
  useTooltipCustomTransition,
  FADE_TRANSITION,
  COLLAPSE_TRANSITION,
  FADE_SCALE_TRANSITION,
  SLIDE_RIGHT_TRANSITION,
  SLIDE_LEFT_TRANSITION,
  SLIDE_UP_TRANSITION,
  SLIDE_DOWN_TRANSITION,
} from 'dxd-style-code';
```

## Transition Constants

### FADE_TRANSITION
Плавное появление/исчезновение.

### COLLAPSE_TRANSITION
Сворачивание/разворачивание с opacity и max-height.

### FADE_SCALE_TRANSITION
Появление с масштабированием.

### SLIDE_*_TRANSITION
Слайд анимации (RIGHT, LEFT, UP, DOWN).

## Functions

### useAnimationTransition(name)

Получение transition конфигурации по имени.

```javascript
const transition = useAnimationTransition('fade-scale');
// Returns: { enterActiveClass, enterFromClass, enterToClass, ... }
```

**Parameters:**
- `name` - `'collapse'` | `'fade'` | `'fade-scale'` | `'slide-right'` | `'slide-left'` | `'slide-up'` | `'slide-down'` | `'tooltip-custom'`

**Returns:** Object с классами для Vue Transition.

### useTooltipCustomTransition(position)

Кастомная анимация для tooltip с учётом позиции.

```javascript
const transition = useTooltipCustomTransition('bottom');
```

**Parameters:**
- `position` - `'top'` | `'bottom'` | `'left'` | `'right'`

**Returns:** Transition конфигурация.

### useAnimation(animation, type, groupHover)

Универсальный composable для CSS классов анимаций.

```javascript
const animClass = useAnimation('wiggle', 'icon', false);
// Returns: "dx-icon-wiggle"

const groupAnimClass = useAnimation('scale', 'icon', true);
// Returns: "dx-icon-scale-group"
```

**Parameters:**
- `animation` - Тип анимации
- `type` - `'icon'` | `'button'` | `'general'` | `'progress'` | `'tooltip'` | `'toggle'`
- `groupHover` - Использовать group-hover

**Animation types by component:**

| Type | Animations |
|------|------------|
| `icon` | `none`, `wiggle`, `scale`, `rotate` |
| `button` | `none`, `wiggle`, `scale`, `rotate` |
| `general` | `none`, `fade`, `fade-out`, `slide`, `bounce`, `pulse`, `spin`, `shake` |
| `progress` | `none`, `stripes` |
| `toggle` | `none`, `smooth` |

## Usage

### With Vue Transition

```vue
<template>
  <Transition v-bind="transitionProps">
    <div v-show="isOpen">Content</div>
  </Transition>
</template>

<script setup>
import { useAnimationTransition } from 'dxd-style-code';

const transitionProps = useAnimationTransition('collapse');
</script>
```

### Icon Animation

```vue
<template>
  <button class="group">
    <DXIcon :class="iconAnim" />
    <span>Hover me</span>
  </button>
</template>

<script setup>
import { useAnimation } from 'dxd-style-code';

const iconAnim = useAnimation('rotate', 'icon', true);
</script>
```

### Fade-in on Mount

```vue
<template>
  <div :class="fadeIn">
    Animated content
  </div>
</template>

<script setup>
import { useAnimation } from 'dxd-style-code';

const fadeIn = useAnimation('fade', 'general');
</script>
```

## See Also

- [DXAnimatePresence](../utilities/DXAnimatePresence.md)
- [DXTransitionGroup](../utilities/DXTransitionGroup.md)

