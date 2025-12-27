# DXCloseButton

Универсальная кнопка закрытия для модалов, алертов, тегов и других компонентов.

## Import

```javascript
import { DXCloseButton } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `String` | `'md'` | Размер: `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `variant` | `String` | `'ghost'` | Вариант: `'ghost'`, `'solid'`, `'outline'` |
| `color` | `String` | `'default'` | Цвет: `'default'`, `'light'`, `'dark'`, `'danger'` |
| `rounded` | `String` | `'full'` | Скругление: `'none'`, `'sm'`, `'md'`, `'lg'`, `'full'` |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `ariaLabel` | `String` | `'Закрыть'` | Aria-label для доступности |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `click` | `Event` | Клик по кнопке |

## Usage

### Basic

```vue
<DXCloseButton @click="handleClose" />
```

### Sizes

```vue
<DXCloseButton size="xs" />
<DXCloseButton size="sm" />
<DXCloseButton size="md" />
<DXCloseButton size="lg" />
<DXCloseButton size="xl" />
```

### Variants

```vue
<DXCloseButton variant="ghost" />
<DXCloseButton variant="solid" />
<DXCloseButton variant="outline" />
```

### Colors

```vue
<DXCloseButton color="default" />
<DXCloseButton color="light" />
<DXCloseButton color="dark" />
<DXCloseButton color="danger" />
```

### In Modal Header

```vue
<div class="flex justify-between items-center">
  <h2>Заголовок модала</h2>
  <DXCloseButton size="sm" @click="closeModal" />
</div>
```

### In Alert

```vue
<DXAlert type="info" dismissible>
  <template #close>
    <DXCloseButton size="xs" color="light" @click="dismiss" />
  </template>
  Сообщение алерта
</DXAlert>
```

### In Tag

```vue
<DXTags>
  <span>Тег</span>
  <DXCloseButton size="xs" @click="removeTag" />
</DXTags>
```

### With Custom Aria Label

```vue
<DXCloseButton 
  ariaLabel="Закрыть диалог" 
  @click="closeDialog"
/>
```

## Accessibility

- Использует `<button>` элемент
- Имеет `aria-label` для screen readers
- Поддерживает фокус и клавиатурную навигацию (Enter, Space)

## See Also

- [DXModal](../organisms/DXModal.md)
- [DXAlert](./DXAlert.md)
- [DXTags](../atoms/DXTags.md)

