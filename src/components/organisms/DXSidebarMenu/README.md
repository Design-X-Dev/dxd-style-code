# DXSidebarMenu

Полнофункциональный компонент боковой панели меню для полноэкранных sidebar с поддержкой вложенных элементов, иконок, счетчиков, поиска и компактного режима.

> **Примечание:** Для встраивания меню в карточки используйте компонент [`DXMenu`](../../molecules/DXMenu/README.md).

## Отличия от DXMenu

| Характеристика | DXSidebarMenu | DXMenu |
|----------------|---------------|--------|
| **Назначение** | Полноэкранная боковая панель | Встраиваемое меню в карточках |
| **Размеры** | Фиксированная ширина (sm/md/lg) | `w-full h-full` (100% контейнера) |
| **Скругления** | Без скруглений | `rounded-xl` (всегда) |
| **Бордер** | `border-r` (только справа) | `border` (со всех сторон) |
| **Тень** | `shadow-sm` | Без тени |
| **Fixed position** | Поддерживается | Не поддерживается |
| **Width prop** | sm / md / lg / full | Не поддерживается |

## Возможности

- ✅ **Активное состояние** - автоматическое выделение активного пункта меню
- ✅ **Переключение между страницами** - поддержка `router-link` и обычных ссылок
- ✅ **Иконки** - поддержка HeroIcons и любых Vue компонентов
- ✅ **Счетчики (badges)** - отображение количества уведомлений/элементов
- ✅ **Вложенное меню** - поддержка подменю с анимацией
- ✅ **Компактный режим** - сворачивание до иконок
- ✅ **Поиск** - фильтрация пунктов меню
- ✅ **Секции** - группировка элементов с заголовками
- ✅ **Кастомизация** - слоты для header и footer
- ✅ **Адаптивная ширина** - sm, md, lg, full

## Использование

### Базовый пример

```vue
<template>
  <DXSidebarMenu 
    title="Меню"
    :sections="menuSections"
    :activeItem="currentPage"
    @item-click="handleNavigation"
  />
</template>

<script setup>
import { ref } from 'vue';
import { DXSidebarMenu } from 'dxd-style-code';
import { HomeIcon, UsersIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline';

const currentPage = ref('/home');

const menuSections = [
  {
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
        id: 'users',
        label: 'Пользователи', 
        icon: UsersIcon, 
        to: '/users',
        badge: '12'
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
        children: [
          { id: 'profile', label: 'Профиль', to: '/settings/profile' },
          { id: 'security', label: 'Безопасность', to: '/settings/security' },
        ]
      },
    ],
  },
];

const handleNavigation = (item) => {
  currentPage.value = item.to || item.id;
  // Ваша логика навигации
};
</script>
```

### С поиском и компактным режимом

```vue
<template>
  <DXSidebarMenu 
    :sections="menuSections"
    :activeItem="currentPage"
    :compact="isCompact"
    searchable
    collapsible
    @update:compact="isCompact = $event"
    @item-click="handleNavigation"
  />
</template>

<script setup>
import { ref } from 'vue';

const isCompact = ref(false);
const currentPage = ref('/home');
</script>
```

### Управление header

```vue
<!-- Без header -->
<DXSidebarMenu 
  :sections="sections"
  :activeItem="currentPage"
  :showHeader="false"
/>

<!-- С компактным header -->
<DXSidebarMenu 
  title="Меню"
  :sections="sections"
  :activeItem="currentPage"
  headerSize="sm"
/>

<!-- С большим header -->
<DXSidebarMenu 
  title="Большой заголовок"
  :sections="sections"
  :activeItem="currentPage"
  headerSize="lg"
/>

<!-- Автоматическое скрытие header -->
<!-- Header не отображается, так как нет title, слота header и collapsible=false -->
<DXSidebarMenu 
  :sections="sections"
  :activeItem="currentPage"
  :collapsible="false"
/>
```

### С кастомным header и footer

```vue
<template>
  <DXSidebarMenu 
    :sections="menuSections"
    :activeItem="currentPage"
  >
    <template #header>
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold">
          A
        </div>
        <div>
          <h2 class="text-sm font-bold">Admin Panel</h2>
          <p class="text-xs text-slate-500">v2.0.0</p>
        </div>
      </div>
    </template>
    
    <template #footer>
      <DXButton variant="ghost" block @click="logout">
        Выйти
      </DXButton>
    </template>
  </DXSidebarMenu>
</template>
```

## Props

| Prop | Type | Default | Описание |
|------|------|---------|----------|
| `title` | String | `''` | Заголовок сайдбара |
| `sections` | Array | required | Массив секций меню |
| `activeItem` | String | `''` | ID или path активного элемента |
| `compact` | Boolean | `false` | Компактный режим (только иконки) |
| `collapsible` | Boolean | `true` | Можно ли сворачивать |
| `searchable` | Boolean | `false` | Показывать поиск |
| `showHeader` | Boolean | `undefined` | Показывать header (undefined = автоматически) |
| `headerSize` | String | `'md'` | Размер header: sm, md, lg |
| `width` | String | `'md'` | Ширина: sm, md, lg, full |
| `fixed` | Boolean | `false` | Фиксированная позиция |
| `bordered` | Boolean | `true` | Показывать бордер справа |

## Структура данных sections

```javascript
const sections = [
  {
    title: 'Название секции', // опционально
    items: [
      {
        id: 'unique-id',        // уникальный идентификатор
        label: 'Пункт меню',    // текст
        icon: IconComponent,    // Vue компонент иконки
        to: '/path',            // для router-link
        href: 'https://...',    // для обычной ссылки
        badge: '5',             // счетчик
        badgeVariant: 'danger', // вариант badge: info, success, warning, danger
        disabled: false,        // отключить элемент
        children: [             // подменю
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

## Events

| Event | Payload | Описание |
|-------|---------|----------|
| `item-click` | `(item, event)` | Клик по элементу меню |
| `update:compact` | `boolean` | Изменение компактного режима |

## Slots

| Slot | Описание |
|------|----------|
| `header` | Кастомный заголовок сайдбара |
| `footer` | Контент в футере сайдбара |

## Примеры использования

### E-commerce панель

```vue
<DXSidebarMenu 
  :sections="ecommerceSections"
  :activeItem="currentPage"
  searchable
  width="md"
>
  <template #header>
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
        <span class="text-white font-bold">S</span>
      </div>
      <div>
        <h2 class="text-sm font-bold">Shop Admin</h2>
      </div>
    </div>
  </template>
  
  <template #footer>
    <button class="w-full px-4 py-2 text-rose-600 hover:bg-rose-50 rounded-xl">
      Выйти
    </button>
  </template>
</DXSidebarMenu>
```

### С Vue Router

```vue
<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const currentPage = computed(() => route.path);

const handleNavigation = (item) => {
  // router.push автоматически сработает через router-link
  console.log('Navigating to:', item.to);
};
</script>

<template>
  <DXSidebarMenu 
    :sections="sections"
    :activeItem="currentPage"
    @item-click="handleNavigation"
  />
</template>
```

## Стилизация

Компонент использует Tailwind CSS классы и полностью адаптируется под вашу тему. Активные элементы выделяются темным фоном с тенью.

## Accessibility

- Семантический HTML (`<nav>`, `<button>`, `<a>`)
- ARIA атрибуты для состояний
- Поддержка клавиатурной навигации
- Правильные role атрибуты

## Композиция

`DXSidebarMenu` использует общий composable `useMenu` с `DXMenu`, что обеспечивает:
- Единую бизнес-логику
- Одинаковое поведение
- Легкую поддержку

## Когда использовать DXSidebarMenu vs DXMenu

**Используйте DXSidebarMenu когда:**
- Нужна полноэкранная боковая панель
- Требуется фиксированная позиция (fixed)
- Меню должно быть отдельным layout элементом
- Нужна тень и бордер только справа

**Используйте DXMenu когда:**
- Нужно встроить меню в карточку или контейнер
- Меню является частью layout, а не отдельной панелью
- Требуется адаптивность к размерам контейнера
- Нужны скругленные углы и бордер со всех сторон

## См. также

- [`DXMenu`](../../molecules/DXMenu/README.md) - встраиваемое меню для карточек

