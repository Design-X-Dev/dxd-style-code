# DXTransitionGroup

Компонент для анимации списков элементов (TransitionGroup wrapper).

## Import

```javascript
import { DXTransitionGroup } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `String` | `'fade'` | Имя transition для CSS классов |
| `tag` | `String` | `'div'` | HTML тег для контейнера |
| `type` | `String` | `'fade'` | Тип анимации |
| `duration` | `Number` | `200` | Длительность анимации (ms) |

## Animation Types

| Type | Description |
|------|-------------|
| `fade` | Плавное появление/исчезновение |
| `fade-scale` | Появление с масштабированием |
| `slide-right` | Слайд справа |
| `slide-left` | Слайд слева |
| `slide-up` | Слайд снизу вверх |
| `slide-down` | Слайд сверху вниз |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Элементы списка (требуется `key` для каждого) |

## Usage

### Basic List

```vue
<DXTransitionGroup>
  <div v-for="item in items" :key="item.id">
    {{ item.name }}
  </div>
</DXTransitionGroup>
```

### Custom Tag

```vue
<DXTransitionGroup tag="ul">
  <li v-for="item in items" :key="item.id">
    {{ item.name }}
  </li>
</DXTransitionGroup>
```

### Fade Scale

```vue
<DXTransitionGroup type="fade-scale" :duration="300">
  <DXCard v-for="card in cards" :key="card.id">
    {{ card.title }}
  </DXCard>
</DXTransitionGroup>
```

### Todo List

```vue
<template>
  <DXTransitionGroup type="slide-right" tag="div" class="space-y-2">
    <div 
      v-for="todo in todos" 
      :key="todo.id"
      class="flex items-center gap-2"
    >
      <DXCheckbox 
        :modelValue="todo.done"
        @update:modelValue="toggleTodo(todo.id)"
      />
      <span :class="{ 'line-through': todo.done }">
        {{ todo.text }}
      </span>
      <DXButton size="sm" variant="ghost" @click="removeTodo(todo.id)">
        ✕
      </DXButton>
    </div>
  </DXTransitionGroup>
</template>

<script setup>
import { ref } from 'vue';

const todos = ref([
  { id: 1, text: 'Задача 1', done: false },
  { id: 2, text: 'Задача 2', done: true },
]);

function toggleTodo(id) {
  const todo = todos.value.find(t => t.id === id);
  if (todo) todo.done = !todo.done;
}

function removeTodo(id) {
  todos.value = todos.value.filter(t => t.id !== id);
}
</script>
```

### Notifications Stack

```vue
<DXTransitionGroup type="slide-left" tag="div" class="fixed top-4 right-4 space-y-2">
  <DXToast 
    v-for="notification in notifications" 
    :key="notification.id"
    :variant="notification.type"
  >
    {{ notification.message }}
  </DXToast>
</DXTransitionGroup>
```

### Grid with Move Animation

```vue
<DXTransitionGroup 
  type="fade-scale" 
  tag="div" 
  class="grid grid-cols-3 gap-4"
>
  <DXCard v-for="item in sortedItems" :key="item.id">
    {{ item.name }}
  </DXCard>
</DXTransitionGroup>

<script setup>
import { computed, ref } from 'vue';

const items = ref([...]);
const sortedItems = computed(() => 
  [...items.value].sort((a, b) => a.order - b.order)
);
</script>
```

### Filter Animation

```vue
<template>
  <DXButtonGroup>
    <DXButton 
      v-for="cat in categories" 
      :key="cat"
      :variant="filter === cat ? 'primary' : 'outline'"
      @click="filter = cat"
    >
      {{ cat }}
    </DXButton>
  </DXButtonGroup>
  
  <DXTransitionGroup type="fade" tag="div" class="grid grid-cols-4 gap-4 mt-4">
    <DXCard v-for="item in filteredItems" :key="item.id">
      {{ item.name }}
    </DXCard>
  </DXTransitionGroup>
</template>

<script setup>
import { ref, computed } from 'vue';

const filter = ref('all');
const items = ref([...]);

const filteredItems = computed(() => {
  if (filter.value === 'all') return items.value;
  return items.value.filter(i => i.category === filter.value);
});
</script>
```

## Notes

- Каждый дочерний элемент должен иметь уникальный `key`
- Move анимация применяется автоматически при изменении порядка элементов
- Для правильной работы move анимации элементы должны быть в одном контейнере

## See Also

- [DXAnimatePresence](./DXAnimatePresence.md)
- [DXStaggeredAnimation](./DXStaggeredAnimation.md)

