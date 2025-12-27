# DXTabs

Компонент табов для переключения между контентом.

## Import

```javascript
import { DXTabs } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `String\|Number` | - | Текущий активный таб (v-model) |
| `tabs` | `Array` | `[]` | Конфигурация табов |
| `variant` | `String` | `'buttons'` | Вариант: `'buttons'`, `'tabs-top'`, `'tabs-bottom'` |
| `align` | `String` | `'left'` | Выравнивание: `'left'`, `'center'`, `'right'` |
| `scrollable` | `Boolean` | `true` | Включить прокрутку при overflow |
| `compact` | `Boolean` | `false` | Компактный режим |
| `compactDisplay` | `String` | `'icon-badge'` | Отображение в компактном режиме: `'icon'`, `'icon-badge'` |
| `iconAnimation` | `String` | `'wiggle'` | Анимация иконок: `'none'`, `'wiggle'`, `'scale'`, `'rotate'` |
| `animateActiveOnly` | `Boolean` | `true` | Анимировать только активную иконку |

## Tab Structure

```typescript
interface Tab {
  value: string | number;    // Уникальное значение
  label: string;             // Текст таба
  icon?: Component;          // Иконка
  count?: number;            // Бейдж с числом
  iconAnimation?: string;    // Индивидуальная анимация иконки
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `String\|Number` | Изменение активного таба |

## Usage

### Basic

```vue
<DXTabs
  v-model="activeTab"
  :tabs="[
    { value: 'all', label: 'Все' },
    { value: 'active', label: 'Активные' },
    { value: 'archived', label: 'Архив' }
  ]"
/>
```

### With Icons

```vue
<DXTabs
  v-model="activeTab"
  :tabs="[
    { value: 'inbox', label: 'Входящие', icon: InboxIcon },
    { value: 'sent', label: 'Отправленные', icon: PaperAirplaneIcon },
    { value: 'trash', label: 'Корзина', icon: TrashIcon }
  ]"
/>
```

### With Counts

```vue
<DXTabs
  v-model="activeTab"
  :tabs="[
    { value: 'all', label: 'Все', count: 42 },
    { value: 'unread', label: 'Непрочитанные', count: 5 },
    { value: 'starred', label: 'Избранные', count: 12 }
  ]"
/>
```

### Variants

```vue
<!-- Кнопки (default) -->
<DXTabs v-model="tab" :tabs="tabs" variant="buttons" />

<!-- Табы сверху -->
<DXTabs v-model="tab" :tabs="tabs" variant="tabs-top" />

<!-- Табы снизу -->
<DXTabs v-model="tab" :tabs="tabs" variant="tabs-bottom" />
```

### Alignment

```vue
<DXTabs v-model="tab" :tabs="tabs" align="left" />
<DXTabs v-model="tab" :tabs="tabs" align="center" />
<DXTabs v-model="tab" :tabs="tabs" align="right" />
```

### Compact Mode

```vue
<DXTabs
  v-model="activeTab"
  :tabs="tabsWithIcons"
  compact
  compactDisplay="icon-badge"
/>
<!-- В компактном режиме неактивные табы показывают только иконки,
     при наведении раскрываются с текстом -->
```

### Icon Animations

```vue
<DXTabs
  v-model="tab"
  :tabs="tabs"
  iconAnimation="wiggle"
/>

<!-- Варианты: none, wiggle, scale, rotate -->
```

### Animate All Icons

```vue
<DXTabs
  v-model="tab"
  :tabs="tabs"
  iconAnimation="scale"
  :animateActiveOnly="false"
/>
```

### Full Example with Content

```vue
<template>
  <div>
    <DXTabs v-model="activeTab" :tabs="tabs" />
    
    <div class="mt-4">
      <div v-if="activeTab === 'profile'">
        <h2>Профиль</h2>
        <!-- ... -->
      </div>
      <div v-else-if="activeTab === 'settings'">
        <h2>Настройки</h2>
        <!-- ... -->
      </div>
      <div v-else-if="activeTab === 'notifications'">
        <h2>Уведомления</h2>
        <!-- ... -->
      </div>
    </div>
  </div>
</template>

<script setup>
const activeTab = ref('profile');

const tabs = [
  { value: 'profile', label: 'Профиль', icon: UserIcon },
  { value: 'settings', label: 'Настройки', icon: CogIcon },
  { value: 'notifications', label: 'Уведомления', icon: BellIcon, count: 3 }
];
</script>
```

### Scrollable Tabs

```vue
<DXTabs
  v-model="activeTab"
  :tabs="manyTabs"
  scrollable
/>
<!-- При переполнении появляется горизонтальный скролл -->
```

## Accessibility

- `role="radiogroup"` на контейнере
- `role="radio"` на каждом табе
- `aria-selected` для активного таба
- Клавиатурная навигация (←, →, Home, End)

## See Also

- [DXSegmentedControl](../molecules/DXSegmentedControl.md)
- [DXButtonGroup](../molecules/DXButtonGroup.md)

