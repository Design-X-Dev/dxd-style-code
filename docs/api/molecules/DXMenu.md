# DXMenu

Универсальный компонент меню навигации с поддержкой секций, поиска и сворачивания.

## Import

```javascript
import { DXMenu } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array` | `[]` | Элементы меню |
| `modelValue` | `String` | `''` | Активный элемент (v-model) |
| `orientation` | `String` | `'vertical'` | Ориентация: `'vertical'`, `'horizontal'` |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'pills'`, `'underline'` |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `collapsible` | `Boolean` | `false` | Сворачиваемые секции |
| `searchable` | `Boolean` | `false` | Показать поиск |
| `searchPlaceholder` | `String` | `'Поиск...'` | Placeholder поиска |
| `accordion` | `Boolean` | `false` | Режим аккордеона (одна секция открыта) |
| `disabled` | `Boolean` | `false` | Отключить меню |
| `showIcons` | `Boolean` | `true` | Показывать иконки |
| `compact` | `Boolean` | `false` | Компактный режим |

## Menu Item Structure

```typescript
interface MenuItem {
  id: string;              // Уникальный ID
  label: string;           // Текст
  icon?: Component;        // Иконка
  href?: string;           // URL ссылки
  to?: string;             // Vue Router path
  badge?: string | number; // Бейдж
  disabled?: boolean;      // Отключен
  children?: MenuItem[];   // Вложенные элементы
  section?: string;        // Заголовок секции
  divider?: boolean;       // Разделитель
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `String` | Изменение активного элемента |
| `select` | `MenuItem` | Выбор элемента |
| `expand` | `String` | Раскрытие секции |
| `collapse` | `String` | Сворачивание секции |
| `search` | `String` | Изменение поискового запроса |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `item` | `{ item, active }` | Кастомный рендер элемента |
| `icon` | `{ item }` | Кастомная иконка |
| `badge` | `{ item }` | Кастомный бейдж |
| `section-header` | `{ section }` | Заголовок секции |
| `header` | - | Контент перед меню |
| `footer` | - | Контент после меню |

## Usage

### Basic

```vue
<DXMenu
  v-model="activeItem"
  :items="[
    { id: 'home', label: 'Главная', icon: HomeIcon },
    { id: 'about', label: 'О нас', icon: InformationCircleIcon },
    { id: 'contact', label: 'Контакты', icon: EnvelopeIcon }
  ]"
/>
```

### With Sections

```vue
<DXMenu
  v-model="activeItem"
  :items="[
    { section: 'Навигация' },
    { id: 'home', label: 'Главная' },
    { id: 'dashboard', label: 'Панель' },
    { divider: true },
    { section: 'Настройки' },
    { id: 'profile', label: 'Профиль' },
    { id: 'settings', label: 'Настройки' }
  ]"
/>
```

### Nested Menu

```vue
<DXMenu
  v-model="activeItem"
  :items="[
    { id: 'home', label: 'Главная' },
    {
      id: 'products',
      label: 'Товары',
      children: [
        { id: 'catalog', label: 'Каталог' },
        { id: 'categories', label: 'Категории' },
        { id: 'brands', label: 'Бренды' }
      ]
    },
    { id: 'orders', label: 'Заказы' }
  ]"
  collapsible
/>
```

### Horizontal Menu

```vue
<DXMenu
  v-model="activeItem"
  :items="items"
  orientation="horizontal"
  variant="underline"
/>
```

### With Search

```vue
<DXMenu
  v-model="activeItem"
  :items="items"
  searchable
  searchPlaceholder="Найти страницу..."
/>
```

### With Badges

```vue
<DXMenu
  v-model="activeItem"
  :items="[
    { id: 'inbox', label: 'Входящие', icon: InboxIcon, badge: 5 },
    { id: 'sent', label: 'Отправленные', icon: PaperAirplaneIcon },
    { id: 'draft', label: 'Черновики', icon: DocumentIcon, badge: 2 }
  ]"
/>
```

### Accordion Mode

```vue
<DXMenu
  v-model="activeItem"
  :items="menuWithSections"
  collapsible
  accordion
/>
```

### Compact Mode

```vue
<DXMenu
  v-model="activeItem"
  :items="items"
  compact
  :showIcons="false"
/>
```

### With Vue Router

```vue
<DXMenu
  v-model="activeItem"
  :items="[
    { id: 'home', label: 'Главная', to: '/' },
    { id: 'users', label: 'Пользователи', to: '/users' },
    { id: 'settings', label: 'Настройки', to: '/settings' }
  ]"
/>
```

### Custom Item Render

```vue
<DXMenu v-model="activeItem" :items="items">
  <template #item="{ item, active }">
    <div :class="['flex items-center gap-3', active && 'font-bold']">
      <DXIcon v-if="item.icon" :icon="item.icon" />
      <span>{{ item.label }}</span>
      <DXTags v-if="item.badge" size="sm">{{ item.badge }}</DXTags>
    </div>
  </template>
</DXMenu>
```

## See Also

- [DXSidebarMenu](../organisms/DXSidebarMenu.md)
- [DXTabs](../organisms/DXTabs.md)
- [DXBreadcrumb](./DXBreadcrumb.md)

