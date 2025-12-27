# DXBreadcrumb

Компонент навигации "хлебные крошки" для отображения иерархии страниц.

## Import

```javascript
import { DXBreadcrumb } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array` | `[]` | Массив элементов навигации |
| `separator` | `String` | `'/'` | Разделитель между элементами |
| `variant` | `String` | `'default'` | Вариант ссылок: `'default'`, `'underline'`, `'muted'` |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `maxItems` | `Number` | `0` | Максимум видимых элементов (0 = все) |
| `showHomeIcon` | `Boolean` | `false` | Показать иконку дома для первого элемента |

## Items Structure

```typescript
interface BreadcrumbItem {
  label: string;      // Текст ссылки
  href?: string;      // URL (опционально)
  to?: string;        // Путь для Vue Router (опционально)
  icon?: Component;   // Иконка (опционально)
  active?: boolean;   // Текущий элемент (обычно последний)
}
```

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `separator` | - | Кастомный разделитель |
| `item` | `{ item, index, isLast }` | Кастомный элемент |

## Usage

### Basic

```vue
<DXBreadcrumb
  :items="[
    { label: 'Главная', href: '/' },
    { label: 'Каталог', href: '/catalog' },
    { label: 'Товар', active: true }
  ]"
/>
```

### With Vue Router

```vue
<DXBreadcrumb
  :items="[
    { label: 'Главная', to: '/' },
    { label: 'Пользователи', to: '/users' },
    { label: 'Профиль', to: '/users/123' }
  ]"
/>
```

### Custom Separator

```vue
<DXBreadcrumb
  :items="items"
  separator=">"
/>

<!-- Or with slot -->
<DXBreadcrumb :items="items">
  <template #separator>
    <DXIcon :icon="ChevronRightIcon" size="sm" />
  </template>
</DXBreadcrumb>
```

### With Icons

```vue
<script setup>
import { HomeIcon, FolderIcon, DocumentIcon } from '@heroicons/vue/24/outline';
</script>

<DXBreadcrumb
  :items="[
    { label: 'Главная', href: '/', icon: HomeIcon },
    { label: 'Проекты', href: '/projects', icon: FolderIcon },
    { label: 'Документ', active: true, icon: DocumentIcon }
  ]"
/>
```

### With Home Icon

```vue
<DXBreadcrumb
  :showHomeIcon="true"
  :items="[
    { label: 'Главная', href: '/' },
    { label: 'Настройки', href: '/settings' },
    { label: 'Профиль', active: true }
  ]"
/>
```

### Collapsed (Max Items)

```vue
<!-- Показать только первые 2 и последние 2, остальное скрыть -->
<DXBreadcrumb
  :items="longBreadcrumbs"
  :maxItems="4"
/>
```

### Variants

```vue
<DXBreadcrumb :items="items" variant="default" />
<DXBreadcrumb :items="items" variant="underline" />
<DXBreadcrumb :items="items" variant="muted" />
```

## See Also

- [DXLink](../atoms/DXLink.md)
- [DXSidebarMenu](../organisms/DXSidebarMenu.md)

