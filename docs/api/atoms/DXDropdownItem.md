# DXDropdownItem

**Категория:** Atom  
**Импорт:** `import { DXDropdownItem } from 'dxd-style-code'`

## Назначение

Элемент выпадающего меню с поддержкой иконок, бейджей и подменю. Работает в связке с `DXDropdown` через provide/inject.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `icon` | `Component` | `null` | Иконка слева (Heroicon) |
| `variant` | `'default' \| 'danger' \| 'success'` | `'default'` | Вариант стилизации |
| `size` | `'sm' \| 'md'` | `'md'` | Размер элемента |
| `disabled` | `boolean` | `false` | Отключенное состояние |
| `submenu` | `boolean` | `false` | Показать индикатор подменю |
| `closeOnClick` | `boolean` | `true` | Закрыть dropdown при клике |
| `badge` | `string \| number` | `null` | Текст бейджа справа |
| `badgeVariant` | `string` | `'slate'` | Вариант бейджа |
| `iconAnimation` | `'none' \| 'wiggle' \| 'scale' \| 'rotate'` | `'wiggle'` | Анимация иконки при hover |

## Events

| Event | Параметры | Описание |
|-------|-----------|----------|
| `click` | `Event` | Клик по элементу |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Текст элемента меню |

## Примеры использования

### Базовый элемент

```vue
<template>
  <DXDropdown>
    <DXDropdownItem @click="handleEdit">Редактировать</DXDropdownItem>
    <DXDropdownItem @click="handleCopy">Копировать</DXDropdownItem>
    <DXDropdownItem @click="handleDelete" variant="danger">Удалить</DXDropdownItem>
  </DXDropdown>
</template>
```

### С иконками

```vue
<template>
  <DXDropdown>
    <DXDropdownItem :icon="PencilIcon">Редактировать</DXDropdownItem>
    <DXDropdownItem :icon="DocumentDuplicateIcon">Дублировать</DXDropdownItem>
    <DXDropdownItem :icon="TrashIcon" variant="danger">Удалить</DXDropdownItem>
  </DXDropdown>
</template>
```

### С бейджем

```vue
<template>
  <DXDropdownItem :icon="InboxIcon" badge="12">
    Входящие
  </DXDropdownItem>
</template>
```

### Элемент с подменю

```vue
<template>
  <DXDropdownItem :icon="ShareIcon" submenu :close-on-click="false">
    Поделиться
  </DXDropdownItem>
</template>
```

## Варианты

- **default** - стандартный серый hover
- **danger** - красный для опасных действий
- **success** - зелёный для позитивных действий

## Использует

- `useSize` - для размеров
- `useVariantDropdownItem` - для цветов
- `DXIcon` - для иконок
- `DXBadge` - для бейджей

## Особенности

- Автоматически закрывает dropdown при клике (настраивается)
- Интегрируется с `DXDropdown` через inject
- Анимация иконки при наведении через `group-hover`

