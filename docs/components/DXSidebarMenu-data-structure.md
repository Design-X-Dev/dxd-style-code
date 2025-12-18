# Структура данных для DXSidebarMenu

## Формат данных sections

```javascript
const sections = [
  {
    title: 'Название секции',  // Опционально - заголовок группы
    items: [
      {
        id: 'unique-id',        // Обязательно - уникальный идентификатор
        label: 'Текст пункта',  // Обязательно - отображаемый текст
        icon: IconComponent,    // Опционально - компонент иконки из @heroicons/vue
        to: '/path',            // Опционально - путь для router-link
        href: 'https://...',    // Опционально - URL для обычной ссылки
        badge: '5',             // Опционально - текст счетчика
        badgeVariant: 'danger', // Опционально - вариант badge (info, success, warning, danger)
        disabled: false,        // Опционально - отключить элемент
        children: [             // Опционально - подменю
          {
            id: 'child-id',
            label: 'Подпункт',
            to: '/path/child',
            badge: '2'
          }
        ]
      }
    ]
  }
];
```

## Минимальный пример

```vue
<script setup>
import { ref } from 'vue';
import { DXSidebarMenu } from 'dxd-style-code';
import { HomeIcon, UsersIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline';

const activeItem = ref('/');

const sections = [
  {
    items: [
      { id: 'home', label: 'Главная', icon: HomeIcon, to: '/' },
      { id: 'users', label: 'Пользователи', icon: UsersIcon, to: '/users' },
      { id: 'settings', label: 'Настройки', icon: Cog6ToothIcon, to: '/settings' },
    ]
  }
];
</script>

<template>
  <DXSidebarMenu 
    title="Меню"
    :sections="sections"
    :activeItem="activeItem"
  />
</template>
```

## С секциями и заголовками

```javascript
const sections = [
  {
    // Секция без заголовка
    items: [
      { id: 'home', label: 'Главная', icon: HomeIcon, to: '/' },
      { id: 'dashboard', label: 'Dashboard', icon: ChartBarIcon, to: '/dashboard' },
    ]
  },
  {
    title: 'Управление',  // Секция с заголовком
    items: [
      { id: 'users', label: 'Пользователи', icon: UsersIcon, to: '/users' },
      { id: 'settings', label: 'Настройки', icon: Cog6ToothIcon, to: '/settings' },
    ]
  }
];
```

## Со счетчиками (badges)

```javascript
const sections = [
  {
    items: [
      { 
        id: 'inbox', 
        label: 'Входящие', 
        icon: InboxIcon, 
        to: '/inbox',
        badge: '25',              // Текст счетчика
        badgeVariant: 'danger'    // Цвет: info, success, warning, danger
      },
      { 
        id: 'notifications', 
        label: 'Уведомления', 
        icon: BellIcon, 
        to: '/notifications',
        badge: '99+',
        badgeVariant: 'warning'
      },
    ]
  }
];
```

## С подменю

```javascript
const sections = [
  {
    items: [
      { id: 'home', label: 'Главная', icon: HomeIcon, to: '/' },
      { 
        id: 'settings',
        label: 'Настройки', 
        icon: Cog6ToothIcon,
        // Подменю через children
        children: [
          { id: 'profile', label: 'Профиль', to: '/settings/profile' },
          { id: 'security', label: 'Безопасность', to: '/settings/security' },
          { 
            id: 'notifications', 
            label: 'Уведомления', 
            to: '/settings/notifications',
            badge: '3'  // Счетчики работают и в подменю
          },
        ]
      },
    ]
  }
];
```

## Полный пример со всеми возможностями

```javascript
const sections = [
  {
    // Первая секция без заголовка
    items: [
      { 
        id: 'home',
        label: 'Главная', 
        icon: HomeIcon, 
        to: '/home',
        badge: '5',
        badgeVariant: 'danger'
      },
      { 
        id: 'analytics',
        label: 'Аналитика', 
        icon: ChartBarIcon, 
        to: '/analytics',
      },
    ],
  },
  {
    title: 'Контент',  // Секция с заголовком
    items: [
      { 
        id: 'documents',
        label: 'Документы', 
        icon: DocumentTextIcon,
        // Вложенное меню
        children: [
          { id: 'all-docs', label: 'Все документы', to: '/documents/all' },
          { id: 'my-docs', label: 'Мои документы', to: '/documents/my' },
          { id: 'shared', label: 'Общие', to: '/documents/shared', badge: '3' },
        ]
      },
      { 
        id: 'inbox',
        label: 'Входящие', 
        icon: InboxIcon, 
        to: '/inbox',
        badge: '25',
        badgeVariant: 'success'
      },
    ],
  },
  {
    title: 'Настройки',
    items: [
      { 
        id: 'settings',
        label: 'Настройки', 
        icon: Cog6ToothIcon,
        to: '/settings'
      },
      { 
        id: 'disabled-item',
        label: 'Недоступно', 
        icon: LockClosedIcon,
        disabled: true  // Отключенный элемент
      },
    ],
  },
];
```

## Динамические данные

```vue
<script setup>
import { ref, computed } from 'vue';

const notifications = ref(5);
const unreadMessages = ref(12);

// Динамически обновляемые счетчики
const sections = computed(() => [
  {
    items: [
      { 
        id: 'notifications', 
        label: 'Уведомления', 
        icon: BellIcon,
        badge: notifications.value > 0 ? String(notifications.value) : undefined,
        badgeVariant: 'danger'
      },
      { 
        id: 'messages', 
        label: 'Сообщения', 
        icon: InboxIcon,
        badge: String(unreadMessages.value),
        badgeVariant: 'info'
      },
    ]
  }
]);
</script>
```

## Условное отображение элементов

```javascript
const user = ref({ role: 'admin' });

const sections = computed(() => {
  const items = [
    { id: 'home', label: 'Главная', icon: HomeIcon, to: '/' },
    { id: 'profile', label: 'Профиль', icon: UserIcon, to: '/profile' },
  ];
  
  // Показывать админ-панель только для админов
  if (user.value.role === 'admin') {
    items.push({
      id: 'admin',
      label: 'Администрирование',
      icon: ShieldCheckIcon,
      children: [
        { id: 'users', label: 'Пользователи', to: '/admin/users' },
        { id: 'settings', label: 'Настройки', to: '/admin/settings' },
      ]
    });
  }
  
  return [{ items }];
});
```

## Типы ссылок

```javascript
const sections = [
  {
    items: [
      // Router-link (для Vue Router)
      { id: 'home', label: 'Главная', icon: HomeIcon, to: '/' },
      
      // Обычная ссылка
      { id: 'docs', label: 'Документация', icon: DocumentTextIcon, href: 'https://example.com' },
      
      // Кнопка (без to/href)
      { id: 'action', label: 'Действие', icon: BoltIcon },
    ]
  }
];
```

## Варианты badge

- `info` - синий (по умолчанию)
- `success` - зеленый
- `warning` - желтый/оранжевый
- `danger` - красный

```javascript
{ badge: '5', badgeVariant: 'info' }     // Синий
{ badge: '10', badgeVariant: 'success' } // Зеленый
{ badge: '99+', badgeVariant: 'warning' } // Желтый
{ badge: '3', badgeVariant: 'danger' }   // Красный
```

