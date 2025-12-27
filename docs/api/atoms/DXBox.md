# DXBox

**Категория:** Atom  
**Импорт:** `import { DXBox } from 'dxd-style-code'`

## Назначение

Универсальный контейнер с гибкой настройкой отступов, фона, тени, рамки и позиционирования. Базовый строительный блок для создания layouts.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `tag` | `string` | `'div'` | HTML тег элемента |
| `p` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `''` | Padding со всех сторон |
| `px` | `string` | `''` | Горизонтальный padding |
| `py` | `string` | `''` | Вертикальный padding |
| `m` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'auto'` | `''` | Margin со всех сторон |
| `mx` | `string` | `''` | Горизонтальный margin |
| `my` | `string` | `''` | Вертикальный margin |
| `rounded` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'full'` | `''` | Скругление углов |
| `bg` | `'white' \| 'slate' \| 'transparent'` | `''` | Цвет фона |
| `shadow` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `''` | Тень |
| `border` | `boolean` | `false` | Показывать рамку |
| `position` | `'static' \| 'relative' \| 'absolute' \| 'fixed' \| 'sticky'` | `null` | CSS position |
| `zIndex` | `'0' \| '10' \| '20' \| '30' \| '40' \| '50' \| 'auto'` | `null` | z-index |
| `inset` | `boolean` | `false` | Применить inset-0 (заполнить родителя) |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Содержимое контейнера |

## Примеры использования

### Простой контейнер с отступами

```vue
<template>
  <DXBox p="md" bg="white" rounded="lg">
    Контент с отступами
  </DXBox>
</template>
```

### Карточка с тенью

```vue
<template>
  <DXBox p="lg" bg="white" rounded="xl" shadow="lg" border>
    Карточка с тенью и рамкой
  </DXBox>
</template>
```

### Центрированный контейнер

```vue
<template>
  <DXBox mx="auto" p="md" bg="slate" rounded="md">
    Центрированный контент
  </DXBox>
</template>
```

### Абсолютно позиционированный overlay

```vue
<template>
  <DXBox position="relative">
    <img src="/image.jpg" />
    <DXBox position="absolute" inset bg="slate" rounded="lg">
      Overlay поверх изображения
    </DXBox>
  </DXBox>
</template>
```

## Использует

- `useSpacing` - для вычисления padding/margin классов
- `useClassComposition` - для объединения классов

## Особенности

- Поддерживает любой HTML тег через prop `tag`
- Гибкая система отступов с раздельными осями (px, py, mx, my)
- Интегрируется с дизайн-токенами через composables

