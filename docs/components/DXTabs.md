# DXTabs

Компонент табов с поддержкой трех вариантов представления, выравнивания, прокрутки и компактного режима.

## Основное использование

```vue
<DXTabs
  v-model="activeTab"
  :tabs="tabs"
/>
```

## Варианты представления

### Buttons (по умолчанию)

Кнопки с закругленными углами и промежутками между ними:

```vue
<DXTabs
  v-model="activeTab"
  :tabs="tabs"
  variant="buttons"
/>
```

### Tabs Top (классические табы)

Табы со скруглением сверху, прижатые друг к другу:

```vue
<DXTabs
  v-model="activeTab"
  :tabs="tabs"
  variant="tabs-top"
/>
```

### Tabs Bottom (обратные табы)

Табы со скруглением снизу:

```vue
<DXTabs
  v-model="activeTab"
  :tabs="tabs"
  variant="tabs-bottom"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `String\|Number` | - | Текущее значение (v-model) |
| `tabs` | `Array` | `[]` | Массив табов |
| `variant` | `String` | `'buttons'` | Вариант: `'buttons'`, `'tabs-top'`, `'tabs-bottom'` |
| `align` | `String` | `'left'` | Выравнивание: `'left'`, `'center'`, `'right'` |
| `scrollable` | `Boolean` | `true` | Включить прокрутку при overflow |
| `showScrollButtons` | `Boolean` | `false` | Показать кнопки прокрутки |
| `compact` | `Boolean` | `false` | Компактный режим |
| `compactDisplay` | `String` | `'icon-badge'` | Что показывать в компактном режиме: `'icon'`, `'icon-badge'` |
| `iconAnimation` | `String` | `'wiggle'` | Анимация иконок: `'none'`, `'wiggle'`, `'scale'`, `'rotate'` |
| `animateActiveOnly` | `Boolean` | `true` | Анимировать только активную иконку |

## Tab Configuration

Каждый объект в массиве `tabs`:

```javascript
{
  value: 'home',              // Значение таба (обязательно)
  label: 'Home',              // Текст таба (обязательно)
  icon: HomeIcon,             // Иконка (опционально)
  count: 12,                  // Счетчик/badge (опционально)
  iconAnimation: 'wiggle',    // Своя анимация иконки (опционально)
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `value` | Изменение активного таба |

## Примеры

### С иконками

```vue
<template>
  <DXTabs
    v-model="activeTab"
    :tabs="tabs"
  />
</template>

<script setup>
import { ref } from 'vue';
import { HomeIcon, UserIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline';

const activeTab = ref('home');

const tabs = [
  { value: 'home', label: 'Home', icon: HomeIcon },
  { value: 'profile', label: 'Profile', icon: UserIcon },
  { value: 'settings', label: 'Settings', icon: Cog6ToothIcon },
];
</script>
```

### С счетчиками

```vue
<DXTabs
  v-model="activeTab"
  :tabs="[
    { value: 'all', label: 'All', count: 42 },
    { value: 'active', label: 'Active', count: 28 },
    { value: 'archived', label: 'Archived', count: 14 },
  ]"
/>
```

### Классические табы с выравниванием по центру

```vue
<DXTabs
  v-model="activeTab"
  :tabs="tabs"
  variant="tabs-top"
  align="center"
/>
```

### С прокруткой

```vue
<div class="max-w-2xl">
  <DXTabs
    v-model="activeTab"
    :tabs="manyTabs"
    variant="tabs-top"
    :scrollable="true"
    :showScrollButtons="true"
  />
</div>
```

### Компактный режим

```vue
<DXTabs
  v-model="activeTab"
  :tabs="tabsWithIcons"
  :compact="true"
  compactDisplay="icon-badge"
/>
```

При наведении или выборе таб расширяется, показывая полный текст.

### Компактный режим только с иконками

```vue
<DXTabs
  v-model="activeTab"
  :tabs="tabsWithIcons"
  :compact="true"
  compactDisplay="icon"
/>
```

В этом режиме показываются только иконки, счетчики скрыты.

### Все возможности вместе

```vue
<DXTabs
  v-model="activeTab"
  :tabs="manyTabs"
  variant="tabs-top"
  align="center"
  :compact="true"
  compactDisplay="icon-badge"
  :scrollable="true"
  :showScrollButtons="true"
  iconAnimation="scale"
/>
```

## Варианты использования

### Buttons

**Когда использовать:**
- Навигация между разделами
- Фильтры или категории
- Когда табы могут переноситься на новую строку

**Особенности:**
- Flex-wrap (переносятся на новую строку)
- Промежутки между табами
- Полное скругление

### Tabs Top

**Когда использовать:**
- Классическая табовая навигация
- Когда табы должны быть в одну строку
- Для контента с панелями

**Особенности:**
- Скругление только сверху
- Прижаты друг к другу
- Линия под табами
- Активный таб сливается с контентом

### Tabs Bottom

**Когда использовать:**
- Навигация снизу (мобильные приложения)
- Когда контент находится сверху

**Особенности:**
- Скругление только снизу
- Прижаты друг к другу
- Линия над табами

## Выравнивание

### Left (по умолчанию)

Табы выравниваются по левому краю:

```vue
<DXTabs :tabs="tabs" align="left" />
```

### Center

Табы выравниваются по центру:

```vue
<DXTabs :tabs="tabs" align="center" />
```

Хорошо подходит для:
- Главной навигации
- Когда табов немного (3-5)
- Симметричного дизайна

### Right

Табы выравниваются по правому краю:

```vue
<DXTabs :tabs="tabs" align="right" />
```

## Прокрутка

### Автоматическая прокрутка

По умолчанию включена (`scrollable="true"`). Когда табы не помещаются в контейнер, появляется прокрутка:

```vue
<div class="max-w-2xl">
  <DXTabs :tabs="manyTabs" />
</div>
```

### С кнопками навигации

Добавьте кнопки для прокрутки влево/вправо:

```vue
<DXTabs
  :tabs="manyTabs"
  :showScrollButtons="true"
/>
```

**Когда использовать кнопки:**
- Много табов
- На мобильных устройствах
- Когда прокрутка не очевидна

## Компактный режим

### Как работает

В компактном режиме неактивные табы сжимаются:

- **Сжатое состояние**: показывается только иконка (и опционально badge)
- **Расширенное состояние**: при наведении или когда таб активен, показывается полный текст

### Настройка отображения

**Icon only** - только иконка:

```vue
<DXTabs
  :tabs="tabs"
  :compact="true"
  compactDisplay="icon"
/>
```

**Icon + Badge** - иконка и счетчик:

```vue
<DXTabs
  :tabs="tabs"
  :compact="true"
  compactDisplay="icon-badge"
/>
```

### Когда использовать

- Много табов в ограниченном пространстве
- Все табы имеют иконки
- Мобильные устройства
- Боковые панели

## Анимация иконок

### Глобальная анимация

Применяется ко всем табам:

```vue
<DXTabs
  :tabs="tabs"
  iconAnimation="wiggle"
/>
```

Доступные анимации:
- `none` - без анимации
- `wiggle` - покачивание
- `scale` - увеличение
- `rotate` - поворот

### Только для активного таба

По умолчанию анимируется только активный таб:

```vue
<DXTabs
  :tabs="tabs"
  iconAnimation="scale"
  :animateActiveOnly="true"
/>
```

### Индивидуальная анимация

Каждый таб может иметь свою анимацию:

```vue
<script setup>
const tabs = [
  { value: 'home', label: 'Home', icon: HomeIcon, iconAnimation: 'wiggle' },
  { value: 'profile', label: 'Profile', icon: UserIcon, iconAnimation: 'scale' },
  { value: 'settings', label: 'Settings', icon: Cog6ToothIcon, iconAnimation: 'rotate' },
];
</script>
```

## Accessibility

- Используется `role="tab"` для табов
- `aria-selected` для активного таба
- Keyboard navigation (будет добавлена)
- Семантические кнопки

## Best Practices

1. **Используйте иконки**: Иконки улучшают узнаваемость и работают в компактном режиме
2. **Ограничьте количество**: 3-7 табов оптимально, для большего используйте компактный режим или прокрутку
3. **Выбирайте правильный variant**:
   - `buttons` - для фильтров и категорий
   - `tabs-top` - для классической навигации
   - `tabs-bottom` - для мобильных приложений
4. **Компактный режим**: Используйте только если у всех табов есть иконки
5. **Выравнивание**: `center` для главной навигации, `left` для остального
6. **Счетчики**: Показывайте актуальные данные, обновляйте в реальном времени

## Комбинации

### Мобильная навигация

```vue
<DXTabs
  v-model="activeTab"
  :tabs="tabs"
  variant="tabs-bottom"
  :compact="true"
  compactDisplay="icon"
  align="center"
/>
```

### Боковая панель

```vue
<DXTabs
  v-model="activeTab"
  :tabs="tabs"
  variant="buttons"
  :compact="true"
  compactDisplay="icon-badge"
  align="left"
/>
```

### Главная навигация

```vue
<DXTabs
  v-model="activeTab"
  :tabs="tabs"
  variant="tabs-top"
  align="center"
  :scrollable="true"
/>
```

### Фильтры с большим количеством опций

```vue
<DXTabs
  v-model="activeFilter"
  :tabs="filterTabs"
  variant="buttons"
  :compact="true"
  compactDisplay="icon-badge"
  :scrollable="true"
  :showScrollButtons="true"
/>
```

## Styling

Компонент использует Tailwind CSS и поддерживает темизацию через CSS переменные. Основные цвета:

- Активный таб (buttons): `bg-slate-800 text-white`
- Неактивный таб (buttons): `border-slate-200 text-slate-700`
- Активный таб (tabs): `bg-white text-slate-900`
- Неактивный таб (tabs): `bg-slate-50 text-slate-600`

## Performance

- Оптимизированные transitions (200ms)
- Lazy scroll state updates
- Минимальные re-renders
- Efficient event handlers

