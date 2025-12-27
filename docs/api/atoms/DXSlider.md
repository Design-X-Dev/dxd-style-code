# DXSlider

**Категория:** Atom  
**Импорт:** `import { DXSlider } from 'dxd-style-code'`

## Назначение

Слайдер (range input) с поддержкой засечек (ticks), иконок, лейблов и различных цветовых вариантов.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `modelValue` | `number` | `0` | Текущее значение (v-model) |
| `min` | `number` | `0` | Минимальное значение |
| `max` | `number` | `100` | Максимальное значение |
| `step` | `number` | `1` | Шаг изменения |
| `label` | `string` | `''` | Лейбл слайдера |
| `helper` | `string` | `''` | Вспомогательный текст |
| `showValue` | `boolean` | `true` | Показывать текущее значение |
| `ticks` | `boolean` | `false` | Показывать засечки |
| `showTickLabels` | `boolean` | `true` | Показывать подписи к засечкам |
| `tickCount` | `number` | `5` | Количество засечек |
| `tickIcons` | `Array<Component>` | `null` | Массив иконок для засечек |
| `tickIconAnimation` | `'wiggle' \| 'scale' \| 'rotate' \| 'none'` | `'wiggle'` | Анимация активной иконки |
| `unit` | `string` | `''` | Единица измерения |
| `disabled` | `boolean` | `false` | Отключенное состояние |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Размер |
| `variant` | `'slate' \| 'primary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'primary'` | Цветовой вариант |
| `spacing` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'sm'` | Отступы между элементами |

## Events

| Event | Параметры | Описание |
|-------|-----------|----------|
| `update:modelValue` | `number` | Обновление значения |

## Примеры использования

### Базовый слайдер

```vue
<template>
  <DXSlider v-model="volume" label="Громкость" unit="%" />
</template>
```

### С засечками

```vue
<template>
  <DXSlider 
    v-model="rating"
    :min="1"
    :max="5"
    :step="1"
    ticks
    :tick-count="5"
    label="Оценка"
  />
</template>
```

### С иконками

```vue
<template>
  <DXSlider 
    v-model="mood"
    :min="0"
    :max="4"
    ticks
    :tick-count="5"
    :tick-icons="[SadIcon, MehIcon, SmileIcon, GrinIcon, HeartIcon]"
    tick-icon-animation="scale"
  />
</template>
```

### Цветные варианты

```vue
<template>
  <DXSlider v-model="val" variant="success" label="Успех" />
  <DXSlider v-model="val" variant="danger" label="Опасность" />
</template>
```

## Использует

- `useSize` - для размеров
- `useVariantSlider` - для цветов
- `useSpacing` - для отступов
- `DXIcon` - для иконок засечек

## Особенности

- Кроссбраузерная стилизация (Webkit + Firefox)
- Динамическое позиционирование засечек с учётом размера thumb
- Анимация активной иконки (ближайшей к текущему значению)
- CSS переменные для динамических стилей
- Hover эффект на thumb (scale 1.1)

