# DXObserver

Компонент для отслеживания видимости элементов (Intersection Observer).

## Import

```javascript
import { DXObserver } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `threshold` | `Number\|Array` | `0.1` | Порог видимости (0.0 - 1.0) |
| `rootMargin` | `String` | `'0px'` | Отступы от root (CSS margin формат) |
| `once` | `Boolean` | `false` | Срабатывать только один раз |
| `root` | `String\|HTMLElement` | `null` | Root элемент (по умолчанию viewport) |
| `disabled` | `Boolean` | `false` | Отключить observer |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `intersect` | `(isIntersecting: Boolean, entry: IntersectionObserverEntry)` | Пересечение с viewport |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Наблюдаемый контент |

## Usage

### Basic

```vue
<DXObserver @intersect="onVisible">
  <div>Отслеживаемый элемент</div>
</DXObserver>

<script setup>
function onVisible(isVisible, entry) {
  if (isVisible) {
    console.log('Элемент виден!');
  }
}
</script>
```

### Lazy Loading

```vue
<DXObserver :once="true" @intersect="loadImage">
  <img v-if="loaded" :src="imageSrc" />
  <DXSkeleton v-else height="200px" />
</DXObserver>

<script setup>
import { ref } from 'vue';

const loaded = ref(false);
const imageSrc = ref('');

function loadImage(isVisible) {
  if (isVisible) {
    imageSrc.value = '/large-image.jpg';
    loaded.value = true;
  }
}
</script>
```

### Infinite Scroll

```vue
<div class="list">
  <div v-for="item in items" :key="item.id">
    {{ item.name }}
  </div>
  
  <DXObserver @intersect="loadMore" :threshold="0">
    <DXLoader v-if="loading" />
  </DXObserver>
</div>

<script setup>
async function loadMore(isVisible) {
  if (isVisible && !loading.value) {
    loading.value = true;
    await fetchMoreItems();
    loading.value = false;
  }
}
</script>
```

### Animate on Scroll

```vue
<DXObserver 
  :once="true" 
  :threshold="0.3"
  @intersect="(visible) => isVisible = visible"
>
  <div :class="{ 'animate-fade-in': isVisible }">
    Анимированный контент
  </div>
</DXObserver>
```

### Custom Root

```vue
<div id="scroll-container" class="overflow-auto h-64">
  <DXObserver 
    root="#scroll-container" 
    :rootMargin="'-50px'"
    @intersect="handleIntersect"
  >
    <div>Элемент в контейнере</div>
  </DXObserver>
</div>
```

### Multiple Thresholds

```vue
<DXObserver 
  :threshold="[0, 0.25, 0.5, 0.75, 1]"
  @intersect="onProgress"
>
  <div>Элемент с прогрессом видимости</div>
</DXObserver>

<script setup>
function onProgress(isVisible, entry) {
  console.log(`Видимость: ${entry.intersectionRatio * 100}%`);
}
</script>
```

## See Also

- [DXLoader](../atoms/DXLoader.md)
- [DXSkeleton](../atoms/DXSkeleton.md)
- [DXAnimatePresence](./DXAnimatePresence.md)

