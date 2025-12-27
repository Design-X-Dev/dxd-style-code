# DXTooltip

**Категория:** Atom  
**Импорт:** `import { DXTooltip } from 'dxd-style-code'`

## Назначение

Всплывающая подсказка с поддержкой различных позиций, цветов, анимаций и задержки показа.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `content` | `string` | `''` | Текст подсказки |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Позиция |
| `color` | `'dark' \| 'light' \| 'primary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'dark'` | Цвет |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Размер текста |
| `animation` | `'fade' \| 'fade-scale' \| 'slide-up' \| 'slide-down' \| 'slide-left' \| 'slide-right' \| 'tooltip-custom'` | `'tooltip-custom'` | Анимация появления |
| `maxWidth` | `string` | `'200px'` | Максимальная ширина |
| `delay` | `number` | `100` | Задержка показа (мс) |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Элемент, для которого показывается подсказка |
| `content` | Кастомный контент подсказки |

## Примеры использования

### Базовый tooltip

```vue
<template>
  <DXTooltip content="Это подсказка">
    <DXButton>Наведи на меня</DXButton>
  </DXTooltip>
</template>
```

### Разные позиции

```vue
<template>
  <DXTooltip content="Сверху" position="top">
    <DXButton>Top</DXButton>
  </DXTooltip>
  <DXTooltip content="Снизу" position="bottom">
    <DXButton>Bottom</DXButton>
  </DXTooltip>
  <DXTooltip content="Слева" position="left">
    <DXButton>Left</DXButton>
  </DXTooltip>
  <DXTooltip content="Справа" position="right">
    <DXButton>Right</DXButton>
  </DXTooltip>
</template>
```

### Цветные tooltips

```vue
<template>
  <DXTooltip content="Светлый" color="light">
    <DXButton>Light</DXButton>
  </DXTooltip>
  <DXTooltip content="Успех" color="success">
    <DXButton>Success</DXButton>
  </DXTooltip>
</template>
```

### С кастомным контентом

```vue
<template>
  <DXTooltip>
    <DXButton>Hover</DXButton>
    <template #content>
      <strong>Заголовок</strong>
      <p>Описание с форматированием</p>
    </template>
  </DXTooltip>
</template>
```

### С задержкой

```vue
<template>
  <DXTooltip content="Появится через 500мс" :delay="500">
    <DXButton>Долгий hover</DXButton>
  </DXTooltip>
</template>
```

## Использует

- `useSize` - для размеров
- `useVariantTooltip` - для цветов
- `useTooltipArrow` - для стрелки
- `useTooltipPosition` - для позиционирования
- `useAnimationTransition` - для анимаций

## Особенности

- Стрелка автоматически позиционируется
- `tooltip-custom` анимация адаптируется к позиции
- Tooltip скрывается мгновенно, показывается с задержкой
- Поддержка focus/blur для keyboard navigation
- Очистка таймеров при размонтировании

