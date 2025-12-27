# DXModal

Модальное окно с различными вариантами отображения.

## Import

```javascript
import { DXModal } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `Boolean` | `false` | Открыто/закрыто |
| `variant` | `String` | `'modal'` | Вариант: `'modal'`, `'fullscreen'`, `'sidebar-right'`, `'half-right'` |
| `width` | `String` | `'md'` | Ширина (для modal): `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `closable` | `Boolean` | `true` | Можно ли закрыть |
| `showModeSwitcher` | `Boolean` | `false` | Показывать переключатель режимов |
| `backdropBlur` | `String` | `'sm'` | Размытие: `'none'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `backdropOpacity` | `String\|Number` | `'40'` | Прозрачность backdrop (0-100) |
| `backdropColor` | `String` | `'slate-900'` | Цвет backdrop |
| `backdropLockScroll` | `Boolean` | `true` | Блокировать скролл body |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `close` | - | Запрос закрытия |
| `opened` | - | Модал полностью открылся |
| `closed` | - | Модал полностью закрылся |
| `update:variant` | `String` | Изменение варианта (при showModeSwitcher) |

## Slots

| Slot | Description |
|------|-------------|
| `title` | Заголовок модала |
| `default` | Контент модала |
| `actions` | Действия в футере |

## Usage

### Basic Modal

```vue
<DXButton @click="showModal = true">Открыть</DXButton>

<DXModal :open="showModal" @close="showModal = false">
  <template #title>Заголовок модала</template>
  
  <p>Контент модального окна</p>
  
  <template #actions>
    <DXButton variant="ghost" @click="showModal = false">Отмена</DXButton>
    <DXButton @click="handleConfirm">Подтвердить</DXButton>
  </template>
</DXModal>
```

### Width Sizes

```vue
<DXModal :open="show" width="sm">Маленький (max-w-md)</DXModal>
<DXModal :open="show" width="md">Средний (max-w-xl)</DXModal>
<DXModal :open="show" width="lg">Большой (max-w-3xl)</DXModal>
<DXModal :open="show" width="xl">Очень большой (max-w-5xl)</DXModal>
```

### Fullscreen Modal

```vue
<DXModal :open="show" variant="fullscreen" @close="show = false">
  <template #title>Полноэкранный режим</template>
  <div class="h-full overflow-auto">
    <!-- Большой контент -->
  </div>
</DXModal>
```

### Sidebar Right

```vue
<DXModal :open="show" variant="sidebar-right" @close="show = false">
  <template #title>Детали</template>
  <div class="space-y-4">
    <!-- Контент боковой панели -->
  </div>
</DXModal>
```

### Half Right

```vue
<DXModal :open="show" variant="half-right" @close="show = false">
  <template #title>Редактор</template>
  <div class="h-full">
    <!-- Контент половины экрана справа -->
  </div>
</DXModal>
```

### With Mode Switcher

```vue
<DXModal
  :open="show"
  v-model:variant="modalVariant"
  showModeSwitcher
  @close="show = false"
>
  <template #title>Настраиваемый модал</template>
  <p>Переключайте режимы с помощью кнопок справа от заголовка</p>
</DXModal>
```

### Custom Backdrop

```vue
<DXModal
  :open="show"
  backdropBlur="lg"
  backdropOpacity="60"
  backdropColor="black"
  @close="show = false"
>
  <template #title>Кастомный backdrop</template>
  <p>Контент</p>
</DXModal>
```

### Non-closable Modal

```vue
<DXModal
  :open="show"
  :closable="false"
>
  <template #title>Важное действие</template>
  <p>Это модальное окно нельзя закрыть кликом по backdrop</p>
  
  <template #actions>
    <DXButton @click="handleComplete">Завершить</DXButton>
  </template>
</DXModal>
```

### Confirmation Dialog

```vue
<DXModal :open="showConfirm" width="sm" @close="showConfirm = false">
  <template #title>Подтверждение</template>
  
  <p>Вы уверены, что хотите удалить этот элемент?</p>
  
  <template #actions>
    <DXButton variant="ghost" @click="showConfirm = false">
      Отмена
    </DXButton>
    <DXButton variant="danger" @click="handleDelete">
      Удалить
    </DXButton>
  </template>
</DXModal>
```

## Animations

| Variant | Animation |
|---------|-----------|
| `modal` | fade-scale |
| `fullscreen` | fade-scale |
| `sidebar-right` | slide-right |
| `half-right` | slide-right |

## Accessibility

- Блокировка скролла body
- Фокус-ловушка внутри модала
- Закрытие по Escape

## See Also

- [DXBackdrop](../atoms/DXBackdrop.md)
- [DXCloseButton](../molecules/DXCloseButton.md)
