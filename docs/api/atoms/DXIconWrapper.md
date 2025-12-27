# DXIconWrapper

**Категория:** Atom  
**Импорт:** `import { DXIconWrapper } from 'dxd-style-code'`

## Назначение

Обёртка для позиционирования иконок внутри input-полей. Обеспечивает абсолютное позиционирование иконки слева или справа.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `position` | `'left' \| 'right'` | `'left'` | Позиция иконки |
| `icon` | `Component` | `null` | Иконка (Heroicon) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'sm'` | Размер иконки |
| `animation` | `'none' \| 'wiggle' \| 'scale' \| 'rotate'` | `'none'` | Анимация |
| `iconClass` | `string \| Array \| Object` | `'text-slate-400'` | Дополнительные классы иконки |
| `verticalAlign` | `'center' \| 'top'` | `'center'` | Вертикальное выравнивание |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Кастомный контент вместо иконки |

## Примеры использования

### Иконка слева

```vue
<template>
  <div class="relative">
    <DXIconWrapper :icon="MagnifyingGlassIcon" position="left" />
    <input class="pl-10 ..." />
  </div>
</template>
```

### Иконка справа

```vue
<template>
  <div class="relative">
    <input class="pr-10 ..." />
    <DXIconWrapper :icon="EyeIcon" position="right" />
  </div>
</template>
```

### С кастомным контентом

```vue
<template>
  <div class="relative">
    <DXIconWrapper position="right">
      <DXLoader size="xs" />
    </DXIconWrapper>
    <input class="pr-10 ..." />
  </div>
</template>
```

### Выравнивание по верху

```vue
<template>
  <div class="relative">
    <DXIconWrapper :icon="ChatIcon" position="left" vertical-align="top" />
    <textarea class="pl-10 ..." />
  </div>
</template>
```

## Позиционирование

- **left** - `left-3`
- **right** - `right-3`
- **center** (вертикаль) - `top-1/2 -translate-y-1/2`
- **top** (вертикаль) - `top-3`

## Использует

- `DXIcon` - для отображения иконок
- `useClassComposition` - для объединения классов
- `useCustomDataAttributes` - для data-атрибутов

## Особенности

- `pointer-events-none` - клики проходят сквозь иконку к input
- Абсолютное позиционирование - требует `position: relative` у родителя
- Автоматически использует DXIcon при передаче prop `icon`

