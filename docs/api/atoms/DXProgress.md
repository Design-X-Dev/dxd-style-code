# DXProgress

**Категория:** Atom  
**Импорт:** `import { DXProgress } from 'dxd-style-code'`

## Назначение

Индикатор прогресса с поддержкой label, значения, анимации и полосатого стиля.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `value` | `number` | `0` | Текущее значение |
| `min` | `number` | `0` | Минимальное значение |
| `max` | `number` | `100` | Максимальное значение |
| `label` | `string` | `''` | Текст лейбла |
| `showLabel` | `boolean` | `false` | Показывать лейбл |
| `showValue` | `boolean` | `false` | Показывать значение справа |
| `showInnerValue` | `boolean` | `false` | Показывать значение внутри бара |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Размер (высота бара) |
| `color` | `'default' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` | Цвет бара |
| `animated` | `boolean` | `false` | Анимация полос |
| `striped` | `boolean` | `false` | Полосатый стиль |

## Slots

| Slot | Описание |
|------|----------|
| `label` | Кастомный лейбл |

## Примеры использования

### Базовый прогресс

```vue
<template>
  <DXProgress :value="65" />
</template>
```

### С лейблом и значением

```vue
<template>
  <DXProgress 
    :value="45" 
    label="Загрузка файлов"
    show-label
    show-value
  />
</template>
```

### Цветные варианты

```vue
<template>
  <DXProgress :value="100" color="success" />
  <DXProgress :value="75" color="warning" />
  <DXProgress :value="25" color="danger" />
</template>
```

### Полосатый с анимацией

```vue
<template>
  <DXProgress 
    :value="60" 
    striped 
    animated
    color="info"
  />
</template>
```

### Значение внутри бара

```vue
<template>
  <DXProgress 
    :value="80" 
    size="lg"
    show-inner-value
  />
</template>
```

## ARIA атрибуты

```html
<div 
  role="progressbar"
  aria-valuenow="65"
  aria-valuemin="0"
  aria-valuemax="100"
/>
```

## Использует

- `useSize` - для размеров
- `useVariantProgress` - для цветов
- `useAnimation` - для анимации полос

## Особенности

- Автоматический расчёт процента от min/max
- Внутреннее значение показывается только при percentage > 10%
- Анимация работает только с `striped`
- Плавная transition на изменение ширины

