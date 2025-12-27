# DXHeading

**Категория:** Atom  
**Импорт:** `import { DXHeading } from 'dxd-style-code'`

## Назначение

Компонент заголовков с семантическими уровнями (h1-h6), настраиваемым размером, весом и цветом.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `1` | Уровень заголовка (h1-h6) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl'` | `''` | Размер (переопределяет level) |
| `weight` | `'normal' \| 'medium' \| 'semibold' \| 'bold'` | `'semibold'` | Вес шрифта |
| `color` | `'default' \| 'muted' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Цвет текста |
| `truncate` | `boolean` | `false` | Обрезать текст с многоточием |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Текст заголовка |

## Примеры использования

### Заголовки разных уровней

```vue
<template>
  <DXHeading :level="1">Заголовок страницы</DXHeading>
  <DXHeading :level="2">Раздел</DXHeading>
  <DXHeading :level="3">Подраздел</DXHeading>
</template>
```

### Кастомный размер

```vue
<template>
  <!-- h2 с размером как h1 -->
  <DXHeading :level="2" size="4xl">Большой заголовок</DXHeading>
</template>
```

### Цветной заголовок

```vue
<template>
  <DXHeading color="primary">Акцентный заголовок</DXHeading>
  <DXHeading color="muted">Приглушённый заголовок</DXHeading>
</template>
```

### Обрезка длинного текста

```vue
<template>
  <DXHeading :level="3" truncate class="max-w-xs">
    Очень длинный заголовок, который будет обрезан
  </DXHeading>
</template>
```

## Размеры по уровням

| Level | Size |
|-------|------|
| 1 | `text-4xl` |
| 2 | `text-3xl` |
| 3 | `text-2xl` |
| 4 | `text-xl` |
| 5 | `text-lg` |
| 6 | `text-base` |

## Использует

- `useVariantText` - для цветов

## Особенности

- Семантически правильные теги (h1-h6)
- `tracking-tight` для лучшей читаемости крупного текста
- Prop `size` переопределяет автоматический размер по level

