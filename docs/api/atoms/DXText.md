# DXText

**Категория:** Atom  
**Импорт:** `import { DXText } from 'dxd-style-code'`

## Назначение

Компонент для отображения текста с настраиваемым размером, весом, цветом, выравниванием и обрезкой.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `tag` | `'p' \| 'span' \| 'div'` | `'p'` | HTML тег |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Размер текста |
| `weight` | `'normal' \| 'medium' \| 'semibold' \| 'bold'` | `'normal'` | Вес шрифта |
| `color` | `'default' \| 'muted' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Цвет текста |
| `align` | `'left' \| 'center' \| 'right' \| 'justify'` | `'left'` | Выравнивание |
| `truncate` | `boolean` | `false` | Обрезать с многоточием |
| `lines` | `number` | `0` | Максимум строк (line-clamp) |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Текст |

## Примеры использования

### Базовый текст

```vue
<template>
  <DXText>Обычный параграф текста.</DXText>
</template>
```

### Разные размеры

```vue
<template>
  <DXText size="xs">Очень маленький</DXText>
  <DXText size="sm">Маленький</DXText>
  <DXText size="md">Средний</DXText>
  <DXText size="lg">Большой</DXText>
  <DXText size="xl">Очень большой</DXText>
</template>
```

### Цветной текст

```vue
<template>
  <DXText color="primary">Акцентный текст</DXText>
  <DXText color="muted">Приглушённый текст</DXText>
  <DXText color="danger">Текст с ошибкой</DXText>
</template>
```

### Обрезка текста

```vue
<template>
  <!-- Однострочный с многоточием -->
  <DXText truncate class="max-w-xs">
    Очень длинный текст, который будет обрезан
  </DXText>
  
  <!-- Ограничение на 2 строки -->
  <DXText :lines="2">
    Длинный текст, который может занимать максимум
    две строки, после чего будет обрезан с многоточием.
  </DXText>
</template>
```

### Inline текст

```vue
<template>
  <DXText tag="span" weight="bold">Жирный</DXText>
  <DXText tag="span"> и </DXText>
  <DXText tag="span" color="primary">цветной</DXText>
</template>
```

## Использует

- `useVariantText` - для цветов

## Особенности

- `leading-relaxed` для комфортной высоты строки
- `line-clamp-*` для многострочной обрезки
- Поддержка всех стандартных HTML текстовых тегов

