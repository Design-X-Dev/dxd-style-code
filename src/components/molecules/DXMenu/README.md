# DXMenu

Встраиваемый компонент меню для размещения в карточках и контейнерах. Поддерживает вертикальное и горизонтальное направление, вложенные элементы, иконки, счетчики, поиск и компактный режим.

## Отличия от DXSidebarMenu

| Характеристика | DXMenu | DXSidebarMenu |
|----------------|--------|---------------|
| **Назначение** | Встраиваемое меню в карточках | Полноэкранная боковая панель |
| **Размеры** | `w-full h-full` (100% контейнера) | Фиксированная ширина (sm/md/lg) |
| **Скругления** | `rounded-xl` (всегда) | Без скруглений |
| **Бордер** | `border` (со всех сторон) | `border-r` (только справа) |
| **Тень** | Без тени | `shadow-sm` |
| **Fixed position** | Не поддерживается | Поддерживается |
| **Width prop** | Не поддерживается | sm / md / lg / full |

## Возможности

- ✅ **Два направления** - вертикальное (по умолчанию) и горизонтальное (navbar)
- ✅ **Активное состояние** - автоматическое выделение активного пункта меню
- ✅ **Переключение между страницами** - поддержка `router-link` и обычных ссылок
- ✅ **Иконки** - поддержка HeroIcons и любых Vue компонентов
- ✅ **Счетчики (badges)** - отображение количества уведомлений/элементов
- ✅ **Вложенное меню** - поддержка подменю с анимацией (dropdown для horizontal)
- ✅ **Компактный режим** - сворачивание до иконок (только vertical)
- ✅ **Поиск** - фильтрация пунктов меню
- ✅ **Секции** - группировка элементов с заголовками
- ✅ **Кастомизация** - слоты для header и footer
- ✅ **Адаптивность** - занимает 100% ширины и высоты контейнера

## Использование

### Базовый пример

```vue
<template>
  <DXMenu 
    title="Навигация"
    :sections="menuSections"
    :activeItem="currentPage"
    class="w-80 h-96"
    @item-click="handleNavigation"
  />
</template>

<script setup>
import { ref } from 'vue';
import { DXMenu } from 'dxd-style-code';
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
};
</script>
```

### С поиском и компактным режимом

```vue
<template>
  <DXMenu 
    title="Меню"
    :sections="menuSections"
    :activeItem="currentPage"
    :compact="isCompact"
    searchable
    collapsible
    class="w-80 h-96"
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

### С кастомным header и footer

```vue
<template>
  <DXMenu 
    :sections="menuSections"
    :activeItem="currentPage"
    class="w-96 h-[500px]"
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
  </DXMenu>
</template>
```

### С настройкой варианта и padding

```vue
<template>
  <!-- Elevated вариант с большой тенью -->
  <DXMenu 
    title="Меню"
    :sections="menuSections"
    :activeItem="currentPage"
    cardVariant="elevated"
    cardPadding="md"
    class="w-80 h-96"
  />
  
  <!-- Bordered вариант с толстым бордером -->
  <DXMenu 
    :sections="menuSections"
    cardVariant="bordered"
    class="w-80 h-96"
  />
  
  <!-- Flat вариант без бордера и тени -->
  <DXMenu 
    :sections="menuSections"
    cardVariant="flat"
    class="w-80 h-96"
  />
</template>
```

### Управление header

```vue
<!-- Без header -->
<DXMenu 
  :sections="sections"
  :showHeader="false"
  class="w-80 h-96"
/>

<!-- С компактным header -->
<DXMenu 
  title="Меню"
  :sections="sections"
  headerSize="sm"
  class="w-80 h-96"
/>

<!-- С большим header -->
<DXMenu 
  title="Большой заголовок"
  :sections="sections"
  headerSize="lg"
  class="w-80 h-96"
/>

<!-- Автоматическое скрытие header -->
<!-- Header не отображается, так как нет title, слота header и collapsible=false -->
<DXMenu 
  :sections="sections"
  :collapsible="false"
  class="w-80 h-96"
/>
```

### Горизонтальное меню

```vue
<!-- Базовое горизонтальное меню -->
<DXMenu 
  title="Навигация"
  :sections="sections"
  :activeItem="currentPage"
  direction="horizontal"
  class="w-full"
  @item-click="handleNavigation"
/>

<!-- Горизонтальное меню с поиском -->
<DXMenu 
  title="Меню"
  :sections="sections"
  :activeItem="currentPage"
  direction="horizontal"
  searchable
  class="w-full"
/>

<!-- Navbar стиль (без header) -->
<DXMenu 
  :sections="sections"
  :activeItem="currentPage"
  direction="horizontal"
  :showHeader="false"
  cardVariant="flat"
  class="w-full"
/>

<!-- Горизонтальное меню с submenu (через dropdown) -->
<DXMenu 
  title="Панель управления"
  :sections="sectionsWithSubmenu"
  :activeItem="currentPage"
  direction="horizontal"
  class="w-full"
/>
```

## Props

| Prop | Type | Default | Описание |
|------|------|---------|----------|
| `direction` | String | `'vertical'` | Направление: vertical, horizontal |
| `title` | String | `''` | Заголовок меню |
| `sections` | Array | required | Массив секций меню |
| `activeItem` | String | `''` | ID или path активного элемента |
| `compact` | Boolean | `false` | Компактный режим (только vertical) |
| `collapsible` | Boolean | `false` | Можно ли сворачивать (только vertical) |
| `searchable` | Boolean | `false` | Показывать поиск |
| `showHeader` | Boolean | `undefined` | Показывать header (undefined = автоматически) |
| `headerSize` | String | `'md'` | Размер header: sm, md, lg (только vertical) |
| `cardPadding` | String | `'none'` | Padding карточки: none, sm, md, lg |
| `cardVariant` | String | `'default'` | Вариант карточки: default, bordered, elevated, flat |

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
| `header` | Кастомный заголовок меню |
| `footer` | Контент в футере меню |

## Примеры использования

### Dashboard панель

```vue
<DXMenu 
  :sections="dashboardSections"
  :activeItem="currentPage"
  searchable
  class="w-80 h-96"
>
  <template #header>
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
        D
      </div>
      <div>
        <h2 class="text-sm font-bold">Dashboard</h2>
      </div>
    </div>
  </template>
</DXMenu>
```

### Компактное меню

```vue
<DXMenu 
  :sections="sections"
  :activeItem="currentPage"
  :compact="true"
  class="w-24 h-96"
/>
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
  <DXMenu 
    :sections="sections"
    :activeItem="currentPage"
    class="w-80 h-96"
    @item-click="handleNavigation"
  />
</template>
```

## Стилизация

Компонент использует `DXCard` внутри и Tailwind CSS классы, полностью адаптируется под вашу тему. Активные элементы выделяются темным фоном с тенью.

### Управление стилями карточки:

**`cardVariant`** - вариант оформления:
- `default` - тонкий бордер `border-slate-100` + тень `shadow-sm`
- `bordered` - толстый бордер `border-2 border-slate-200`, без тени
- `elevated` - светлый бордер `border-slate-50` + большая тень `shadow-lg`
- `flat` - без бордера и тени

**`cardPadding`** - внутренние отступы:
- `none` - без отступов
- `sm` - `p-3`
- `md` - `p-5`
- `lg` - `p-8`

**`class`** - дополнительные классы для размеров (w-80, h-96 и т.д.)

### Автоматические стили от DXCard:
- `rounded-2xl` - скругленные углы
- `bg-white` - белый фон

## Accessibility

- Семантический HTML (`<nav>`, `<button>`, `<a>`)
- ARIA атрибуты для состояний
- Поддержка клавиатурной навигации
- Правильные role атрибуты

## Композиция

`DXMenu` использует [`DXCard`](../../atoms/DXCard/README.md) внутри как базовый контейнер, что обеспечивает:
- Единое оформление карточек во всем приложении
- Управление тенью, padding, вариантами через props
- Не нужно оборачивать в DXCard вручную
- Автоматическое применение стилей карточки (rounded, border, overflow)

Также использует общий composable `useMenu` с `DXSidebarMenu`, что обеспечивает:
- Единую бизнес-логику
- Одинаковое поведение
- Легкую поддержку

## Когда использовать DXMenu vs DXSidebarMenu

**Используйте DXMenu когда:**
- Нужно встроить меню в карточку или контейнер
- Требуется горизонтальная навигация (navbar)
- Меню является частью layout, а не отдельной панелью
- Требуется адаптивность к размерам контейнера
- Нужны скругленные углы и бордер со всех сторон

**Используйте DXSidebarMenu когда:**
- Нужна полноэкранная боковая панель
- Требуется фиксированная позиция (fixed)
- Меню должно быть отдельным layout элементом
- Нужна тень и бордер только справа
- Только вертикальное направление

## Особенности горизонтального режима

### Автоматические изменения в `direction="horizontal"`:

1. **Layout меняется на горизонтальный**:
   - Items располагаются в строку (`flex-row`)
   - Автоматический горизонтальный скролл (`overflow-x-auto`)

2. **Header в одну строку**:
   - Title, Search и Toggle размещаются в одну строку
   - Search inline с классом `max-w-xs`

3. **Submenu через Dropdown**:
   - Вместо встроенного submenu используется `DXDropdown`
   - Submenu открывается вниз как dropdown

4. **Отключаются некоторые фичи**:
   - Section titles не отображаются
   - Footer не отображается
   - Compact режим недоступен

5. **Стили элементов меняются**:
   - Меньше padding: `px-3 py-2` вместо `px-4 py-2.5`
   - Меньше gap: `gap-2` вместо `gap-3`
   - Класс `whitespace-nowrap` для предотвращения переноса

### Navbar стиль:

Для создания navbar используйте:
```vue
<DXMenu 
  :sections="sections"
  direction="horizontal"
  :showHeader="false"
  cardVariant="flat"
  class="w-full"
/>
```

Это создаст чистую горизонтальную навигацию без header и без бордера/тени.

