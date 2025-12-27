# DXBreakpointProvider

Провайдер брейкпоинтов для адаптивного дизайна.

## Import

```javascript
import { DXBreakpointProvider } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `breakpoints` | `Object` | `null` | Кастомные брейкпоинты |
| `debounce` | `Number` | `150` | Debounce для resize (ms) |

## Default Breakpoints (Tailwind CSS)

```javascript
{
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `breakpoint-change` | `(newBreakpoint, oldBreakpoint)` | Изменение брейкпоинта |

## Provided Values

Доступны через `inject()`:

| Key | Inject | Type | Description |
|-----|--------|------|-------------|
| `breakpoints` | `inject('breakpoints')` | `ComputedRef<Object>` | Активные брейкпоинты |
| `currentBreakpoint` | `inject('currentBreakpoint')` | `ComputedRef<string>` | Текущий брейкпоинт |
| `screenWidth` | `inject('screenWidth')` | `ComputedRef<number>` | Ширина экрана |
| `screenHeight` | `inject('screenHeight')` | `ComputedRef<number>` | Высота экрана |

## Usage

### Basic

```vue
<DXBreakpointProvider>
  <App />
</DXBreakpointProvider>
```

### With Custom Breakpoints

```vue
<DXBreakpointProvider
  :breakpoints="{
    mobile: 0,
    tablet: 768,
    desktop: 1200
  }"
>
  <App />
</DXBreakpointProvider>
```

### Responsive Component

```vue
<template>
  <div>
    <MobileLayout v-if="isMobile" />
    <DesktopLayout v-else />
  </div>
</template>

<script setup>
import { inject, computed } from 'vue';

const currentBreakpoint = inject('currentBreakpoint');
const isMobile = computed(() => 
  ['xs', 'sm'].includes(currentBreakpoint.value)
);
</script>
```

### Using Screen Dimensions

```vue
<script setup>
import { inject, computed } from 'vue';

const screenWidth = inject('screenWidth');
const screenHeight = inject('screenHeight');

const columns = computed(() => {
  if (screenWidth.value >= 1280) return 4;
  if (screenWidth.value >= 768) return 3;
  if (screenWidth.value >= 640) return 2;
  return 1;
});
</script>

<template>
  <DXGrid :cols="columns">
    <DXCard v-for="item in items" :key="item.id">
      {{ item.name }}
    </DXCard>
  </DXGrid>
</template>
```

### Listen to Changes

```vue
<DXBreakpointProvider 
  @breakpoint-change="onBreakpointChange"
>
  <App />
</DXBreakpointProvider>

<script setup>
function onBreakpointChange(newBreakpoint, oldBreakpoint) {
  console.log(`Брейкпоинт изменился: ${oldBreakpoint} → ${newBreakpoint}`);
}
</script>
```

### Conditional Rendering

```vue
<script setup>
import { inject, computed } from 'vue';

const breakpoints = inject('breakpoints');
const screenWidth = inject('screenWidth');

const isTabletOrLarger = computed(() => 
  screenWidth.value >= breakpoints.value.md
);
</script>

<template>
  <DXSidebar v-if="isTabletOrLarger">
    <DXSidebarMenu :items="menuItems" />
  </DXSidebar>
  
  <DXDrawer v-else>
    <DXMenu :items="menuItems" />
  </DXDrawer>
</template>
```

## See Also

- [DXThemeProvider](./DXThemeProvider.md)
- [DXAppLayout](../organisms/DXAppLayout.md)

