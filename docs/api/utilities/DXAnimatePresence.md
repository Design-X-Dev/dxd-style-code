# DXAnimatePresence

Компонент для анимации появления/исчезновения элементов.

## Import

```javascript
import { DXAnimatePresence } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `show` | `Boolean` | `false` | Показывать/скрывать элемент |
| `name` | `String` | `'fade'` | Имя transition для CSS классов |
| `mode` | `String` | `'default'` | Режим: `'default'`, `'in-out'`, `'out-in'` |
| `type` | `String` | `'fade'` | Тип анимации |
| `duration` | `Number` | `200` | Длительность в ms |
| `appear` | `Boolean` | `false` | Анимировать при первом появлении |

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
| `default` | Анимируемый контент |

## Usage

### Basic Fade

```vue
<DXAnimatePresence :show="isVisible">
  <div>Анимированный контент</div>
</DXAnimatePresence>
```

### Fade Scale

```vue
<DXAnimatePresence :show="isOpen" type="fade-scale">
  <DXModal>
    <p>Модальное окно с масштабированием</p>
  </DXModal>
</DXAnimatePresence>
```

### Slide Animations

```vue
<DXAnimatePresence :show="showSidebar" type="slide-left">
  <DXSidebar>Боковая панель</DXSidebar>
</DXAnimatePresence>

<DXAnimatePresence :show="showDropdown" type="slide-down">
  <DXDropdown>Выпадающее меню</DXDropdown>
</DXAnimatePresence>
```

### Custom Duration

```vue
<DXAnimatePresence :show="isVisible" :duration="500">
  <div>Медленная анимация</div>
</DXAnimatePresence>
```

### With Appear

```vue
<DXAnimatePresence :show="true" appear type="fade-scale">
  <DXCard>Появляется с анимацией при монтировании</DXCard>
</DXAnimatePresence>
```

### Mode out-in

```vue
<DXAnimatePresence :show="showFirst" mode="out-in">
  <div v-if="showFirst" key="first">Первый</div>
  <div v-else key="second">Второй</div>
</DXAnimatePresence>
```

### Notification Example

```vue
<DXAnimatePresence 
  :show="notification.visible" 
  type="slide-right"
  :duration="300"
>
  <DXToast :variant="notification.type">
    {{ notification.message }}
  </DXToast>
</DXAnimatePresence>
```

### Modal with Backdrop

```vue
<template>
  <DXAnimatePresence :show="isOpen" type="fade" :duration="150">
    <DXBackdrop @click="close" />
  </DXAnimatePresence>
  
  <DXAnimatePresence :show="isOpen" type="fade-scale" :duration="200">
    <DXModal>
      <h2>Заголовок</h2>
      <p>Контент модального окна</p>
    </DXModal>
  </DXAnimatePresence>
</template>
```

## See Also

- [DXTransitionGroup](./DXTransitionGroup.md)
- [DXStaggeredAnimation](./DXStaggeredAnimation.md)
- [useAnimation](../composables/useAnimation.md)

