# DXSidebarMenu

**Категория:** Organism  
**Импорт:** `import { DXSidebarMenu } from 'dxd-style-code'`

## Назначение

Боковое меню навигации с поддержкой поиска, иконок, вложенных секций и компактного режима.

## Props

| Prop                | Тип       | По умолчанию | Описание                                                                                         |
| ------------------- | --------- | ------------ | ------------------------------------------------------------------------------------------------ |
| `title`             | `string`  | `''`         | Заголовок сайдбара                                                                               |
| `sections`          | `Array`   | **required** | Секции меню: `[{ title?, items: [{ label, icon?, to?, href?, badge?, children?, disabled? }] }]` |
| `activeItem`        | `string`  | -            | Активный элемент (to или id)                                                                     |
| `compact`           | `boolean` | `false`      | Компактный режим                                                                                 |
| `searchable`        | `boolean` | `false`      | Включить поиск                                                                                   |
| `searchPlaceholder` | `string`  | `'Поиск...'` | Placeholder для поиска                                                                           |

## Events

| Event            | Параметры           | Описание                        |
| ---------------- | ------------------- | ------------------------------- |
| `item-click`     | `{ item, section }` | Клик по элементу меню           |
| `toggle-compact` | `boolean`           | Переключение компактного режима |

## Структура данных

```typescript
interface MenuSection {
  title?: string;
  items: MenuItem[];
}

interface MenuItem {
  label: string;
  icon?: Component;
  to?: string | Object; // Vue Router путь
  href?: string; // Обычная ссылка
  badge?: string | number;
  children?: MenuItem[]; // Вложенные элементы
  disabled?: boolean;
  id?: string; // Уникальный идентификатор
}
```

## Примеры использования

### Базовое меню

```vue
<template>
  <DXSidebarMenu
    title="Навигация"
    :sections="menuSections"
    active-item="/dashboard"
  />
</template>

<script setup>
const menuSections = [
  {
    title: "Основное",
    items: [
      { label: "Дашборд", icon: HomeIcon, to: "/dashboard" },
      { label: "Проекты", icon: FolderIcon, to: "/projects" },
    ],
  },
  {
    items: [{ label: "Настройки", icon: CogIcon, to: "/settings" }],
  },
];
</script>
```

### Меню с поиском

```vue
<template>
  <DXSidebarMenu
    :sections="menuSections"
    :searchable="true"
    search-placeholder="Поиск по меню..."
  />
</template>
```

### Меню с вложенными элементами

```vue
<template>
  <DXSidebarMenu :sections="menuSections" />
</template>

<script setup>
const menuSections = [
  {
    items: [
      {
        label: "Проекты",
        icon: FolderIcon,
        to: "/projects",
        children: [
          { label: "Все проекты", to: "/projects/all" },
          { label: "Мои проекты", to: "/projects/my" },
        ],
      },
    ],
  },
];
</script>
```

### Меню с бейджами

```vue
<template>
  <DXSidebarMenu :sections="menuSections" />
</template>

<script setup>
const menuSections = [
  {
    items: [
      { label: "Уведомления", icon: BellIcon, to: "/notifications", badge: 5 },
      { label: "Сообщения", icon: ChatIcon, to: "/messages", badge: 12 },
    ],
  },
];
</script>
```

## Особенности

- **Поиск:** Автоматически фильтрует элементы меню по тексту
- **Компактный режим:** Скрывает текст, оставляя только иконки
- **Вложенность:** Поддерживает многоуровневую структуру меню
- **Активное состояние:** Автоматически подсвечивает активный элемент
- **Vue Router:** Автоматически интегрируется с Vue Router при наличии

## Использует

- `DXInput` - для поиска по меню
- `DXIcon` - для иконок пунктов меню
- `useMenu` - composable для управления меню

## Используется в

- `DXAppLayout` - главный layout приложения
- `DXSidebar` - боковая панель
- Навигационные панели приложений
