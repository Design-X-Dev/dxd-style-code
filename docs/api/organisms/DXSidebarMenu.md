# DXSidebarMenu

Боковое меню навигации с поддержкой секций, вложенных элементов и компактного режима.

## Import

```javascript
import { DXSidebarMenu } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `String` | `''` | Заголовок сайдбара |
| `sections` | `Array` | `required` | Секции меню |
| `activeItem` | `String` | `''` | Текущий активный элемент (path или id) |
| `compact` | `Boolean` | `false` | Компактный режим (только иконки) |
| `collapsible` | `Boolean` | `true` | Можно ли сворачивать |
| `searchable` | `Boolean` | `false` | Показывать поиск |
| `showHeader` | `Boolean` | `undefined` | Показывать header (auto если undefined) |
| `headerSize` | `String` | `'md'` | Размер header: `'sm'`, `'md'`, `'lg'` |
| `width` | `String` | `'md'` | Ширина: `'sm'`, `'md'`, `'lg'`, `'full'` |
| `fixed` | `Boolean` | `false` | Фиксированная позиция |
| `bordered` | `Boolean` | `true` | Показывать бордер справа |

## Section Structure

```typescript
interface Section {
  title?: string;           // Заголовок секции
  items: MenuItem[];        // Элементы секции
}

interface MenuItem {
  id?: string;              // Уникальный ID
  label: string;            // Текст
  icon?: Component;         // Иконка
  to?: string;              // Vue Router path
  href?: string;            // Обычная ссылка
  badge?: string | number;  // Бейдж
  badgeVariant?: string;    // Вариант бейджа
  children?: MenuItem[];    // Вложенные элементы
  disabled?: boolean;       // Отключен
  action?: () => void;      // Действие при клике
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `item-click` | `MenuItem` | Клик по элементу меню |
| `update:compact` | `Boolean` | Изменение компактного режима |

## Slots

| Slot | Description |
|------|-------------|
| `header` | Кастомный header |
| `footer` | Футер сайдбара |

## Usage

### Basic

```vue
<DXSidebarMenu
  title="Приложение"
  :sections="[
    {
      items: [
        { label: 'Главная', icon: HomeIcon, to: '/' },
        { label: 'Профиль', icon: UserIcon, to: '/profile' },
        { label: 'Настройки', icon: CogIcon, to: '/settings' }
      ]
    }
  ]"
  :activeItem="$route.path"
/>
```

### With Sections

```vue
<DXSidebarMenu
  :sections="[
    {
      title: 'Основное',
      items: [
        { label: 'Дашборд', icon: ChartBarIcon, to: '/dashboard' },
        { label: 'Проекты', icon: FolderIcon, to: '/projects' }
      ]
    },
    {
      title: 'Настройки',
      items: [
        { label: 'Профиль', icon: UserIcon, to: '/profile' },
        { label: 'Настройки', icon: CogIcon, to: '/settings' }
      ]
    }
  ]"
/>
```

### With Nested Items

```vue
<DXSidebarMenu
  :sections="[
    {
      items: [
        { label: 'Главная', icon: HomeIcon, to: '/' },
        {
          label: 'Товары',
          icon: CubeIcon,
          children: [
            { label: 'Каталог', to: '/products' },
            { label: 'Категории', to: '/categories' },
            { label: 'Бренды', to: '/brands' }
          ]
        },
        { label: 'Заказы', icon: ShoppingCartIcon, to: '/orders' }
      ]
    }
  ]"
/>
```

### With Badges

```vue
<DXSidebarMenu
  :sections="[
    {
      items: [
        { label: 'Входящие', icon: InboxIcon, to: '/inbox', badge: 5 },
        { label: 'Задачи', icon: ClipboardIcon, to: '/tasks', badge: 12 },
        { label: 'Уведомления', icon: BellIcon, to: '/notifications', badge: 'new', badgeVariant: 'success' }
      ]
    }
  ]"
/>
```

### Compact Mode

```vue
<DXSidebarMenu
  :sections="sections"
  compact
  collapsible
/>
```

### With Search

```vue
<DXSidebarMenu
  :sections="sections"
  searchable
/>
```

### Width Variants

```vue
<DXSidebarMenu :sections="sections" width="sm" /> <!-- 256px -->
<DXSidebarMenu :sections="sections" width="md" /> <!-- 320px -->
<DXSidebarMenu :sections="sections" width="lg" /> <!-- 384px -->
<DXSidebarMenu :sections="sections" width="full" /> <!-- 100% -->
```

### With Footer

```vue
<DXSidebarMenu :sections="sections">
  <template #footer>
    <div class="flex items-center gap-3">
      <img src="/avatar.jpg" class="w-8 h-8 rounded-full" />
      <div>
        <div class="font-medium">Иван Иванов</div>
        <div class="text-xs text-slate-500">admin@example.com</div>
      </div>
    </div>
  </template>
</DXSidebarMenu>
```

### Fixed Position

```vue
<DXSidebarMenu
  :sections="sections"
  fixed
  width="md"
/>
```

### Full Example

```vue
<template>
  <DXAppLayout>
    <template #sidebar>
      <DXSidebarMenu
        title="MyApp"
        :sections="menuSections"
        :activeItem="$route.path"
        collapsible
        searchable
        @item-click="handleMenuClick"
      >
        <template #footer>
          <DXDropdown position="left" width="md">
            <template #trigger>
              <UserProfileButton :user="currentUser" />
            </template>
            <DXDropdownItem @click="logout">Выйти</DXDropdownItem>
          </DXDropdown>
        </template>
      </DXSidebarMenu>
    </template>
    
    <template #content>
      <router-view />
    </template>
  </DXAppLayout>
</template>
```

## Composables Used

- `useMenu` - логика меню, поиск, compact режим

## See Also

- [DXAppLayout](./DXAppLayout.md)
- [DXSidebar](./DXSidebar.md)
- [DXMenu](../molecules/DXMenu.md)
