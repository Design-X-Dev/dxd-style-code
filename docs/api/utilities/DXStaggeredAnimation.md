# DXStaggeredAnimation

Компонент для последовательной анимации дочерних элементов.

## Import

```javascript
import { DXStaggeredAnimation } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `delay` | `Number` | `100` | Задержка между элементами (ms) |
| `direction` | `String` | `'top-to-bottom'` | Направление анимации |
| `transition` | `String` | `'fade'` | Тип перехода |
| `duration` | `Number` | `300` | Длительность анимации (ms) |
| `animateOnMount` | `Boolean` | `true` | Анимировать при монтировании |

## Direction Values

| Direction | Description |
|-----------|-------------|
| `top-to-bottom` | Сверху вниз |
| `bottom-to-top` | Снизу вверх |
| `left-to-right` | Слева направо |
| `right-to-left` | Справа налево |

## Transition Types

| Transition | Description |
|------------|-------------|
| `fade` | Только прозрачность |
| `fade-slide` | Прозрачность + сдвиг |
| `scale` | Прозрачность + масштаб |

## Events

| Event | Description |
|-------|-------------|
| `animation-complete` | Все элементы анимированы |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Дочерние элементы для анимации |

## Usage

### Basic List Animation

```vue
<DXStaggeredAnimation>
  <DXCard v-for="item in items" :key="item.id">
    {{ item.name }}
  </DXCard>
</DXStaggeredAnimation>
```

### Custom Delay

```vue
<DXStaggeredAnimation :delay="150" :duration="400">
  <div v-for="i in 5" :key="i">
    Элемент {{ i }}
  </div>
</DXStaggeredAnimation>
```

### Different Directions

```vue
<!-- Справа налево -->
<DXStaggeredAnimation direction="right-to-left">
  <DXCard v-for="card in cards" :key="card.id">
    {{ card.title }}
  </DXCard>
</DXStaggeredAnimation>

<!-- Снизу вверх -->
<DXStaggeredAnimation direction="bottom-to-top">
  <DXListItem v-for="item in list" :key="item.id">
    {{ item.name }}
  </DXListItem>
</DXStaggeredAnimation>
```

### Scale Transition

```vue
<DXStaggeredAnimation transition="scale" :delay="80">
  <DXTags v-for="tag in tags" :key="tag">
    {{ tag }}
  </DXTags>
</DXStaggeredAnimation>
```

### Dashboard Widgets

```vue
<DXStaggeredAnimation 
  :delay="100" 
  direction="left-to-right"
  @animation-complete="onAnimationDone"
>
  <DXDashboardWidget v-for="widget in widgets" :key="widget.id">
    {{ widget.content }}
  </DXDashboardWidget>
</DXStaggeredAnimation>
```

### Grid Animation

```vue
<DXGrid cols="3" gap="4">
  <DXStaggeredAnimation :delay="50">
    <DXCard v-for="product in products" :key="product.id">
      <img :src="product.image" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
    </DXCard>
  </DXStaggeredAnimation>
</DXGrid>
```

### Controlled Animation

```vue
<template>
  <DXButton @click="triggerAnimation">
    Запустить анимацию
  </DXButton>
  
  <DXStaggeredAnimation 
    v-if="showItems"
    :animateOnMount="true"
    @animation-complete="onComplete"
  >
    <div v-for="item in items" :key="item.id">
      {{ item.name }}
    </div>
  </DXStaggeredAnimation>
</template>

<script setup>
import { ref } from 'vue';

const showItems = ref(false);

function triggerAnimation() {
  showItems.value = false;
  setTimeout(() => {
    showItems.value = true;
  }, 100);
}
</script>
```

## See Also

- [DXAnimatePresence](./DXAnimatePresence.md)
- [DXTransitionGroup](./DXTransitionGroup.md)

