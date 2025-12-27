# DXFlex

**Категория:** Atom  
**Импорт:** `import { DXFlex } from 'dxd-style-code'`

## Назначение

Flexbox контейнер с полным контролем над направлением, выравниванием, переносом и отступами.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `direction` | `'row' \| 'row-reverse' \| 'col' \| 'col-reverse'` | `'row'` | Направление flex |
| `justify` | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` | `'start'` | Выравнивание по главной оси |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch' \| 'baseline'` | `'center'` | Выравнивание по поперечной оси |
| `wrap` | `'nowrap' \| 'wrap' \| 'wrap-reverse'` | `'nowrap'` | Перенос элементов |
| `gap` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Отступ между элементами |
| `inline` | `boolean` | `false` | Использовать inline-flex |
| `height` | `'full' \| 'auto' \| 'fit'` | `null` | Высота контейнера |
| `shrink` | `'0' \| '1' \| 'auto' \| boolean` | `null` | Flex shrink |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Flex элементы |

## Примеры использования

### Горизонтальное выравнивание

```vue
<template>
  <DXFlex justify="between" align="center">
    <span>Слева</span>
    <span>Справа</span>
  </DXFlex>
</template>
```

### Вертикальный stack

```vue
<template>
  <DXFlex direction="col" gap="lg" align="stretch">
    <DXInput label="Email" />
    <DXInput label="Password" type="password" />
    <DXButton block>Войти</DXButton>
  </DXFlex>
</template>
```

### Центрирование контента

```vue
<template>
  <DXFlex justify="center" align="center" height="full">
    <div>Центрированный контент</div>
  </DXFlex>
</template>
```

### Flex wrap

```vue
<template>
  <DXFlex wrap="wrap" gap="sm">
    <DXBadge v-for="tag in tags" :key="tag">{{ tag }}</DXBadge>
  </DXFlex>
</template>
```

### Space between

```vue
<template>
  <DXFlex justify="between">
    <DXButton variant="ghost">Отмена</DXButton>
    <DXButton>Сохранить</DXButton>
  </DXFlex>
</template>
```

## Использует

- `useSize` - для gap
- `useClassComposition` - для объединения классов

## Особенности

- Поддерживает все стандартные flexbox свойства
- Интегрируется с дизайн-токенами для gap
- Prop `shrink` может быть boolean (true = shrink-0) или string

