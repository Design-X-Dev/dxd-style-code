# DXStack

**Категория:** Atom  
**Импорт:** `import { DXStack } from 'dxd-style-code'`

## Назначение

Компонент для вертикального или горизонтального выстраивания элементов с настраиваемыми отступами и разделителями.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `tag` | `string` | `'div'` | HTML тег |
| `direction` | `'vertical' \| 'horizontal'` | `'vertical'` | Направление |
| `gap` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'md'` | Отступ между элементами |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | `'stretch'` | Выравнивание по поперечной оси |
| `justify` | `'start' \| 'center' \| 'end' \| 'between' \| 'around'` | `'start'` | Распределение по главной оси |
| `dividers` | `boolean` | `false` | Разделители между элементами |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Элементы стека |

## Примеры использования

### Вертикальный стек

```vue
<template>
  <DXStack gap="lg">
    <DXInput label="Имя" />
    <DXInput label="Email" />
    <DXButton>Отправить</DXButton>
  </DXStack>
</template>
```

### Горизонтальный стек

```vue
<template>
  <DXStack direction="horizontal" gap="sm" align="center">
    <DXAvatar />
    <span>Имя пользователя</span>
  </DXStack>
</template>
```

### С разделителями

```vue
<template>
  <DXStack dividers gap="md">
    <div>Секция 1</div>
    <div>Секция 2</div>
    <div>Секция 3</div>
  </DXStack>
</template>
```

### Распределение space-between

```vue
<template>
  <DXStack direction="horizontal" justify="between">
    <DXButton variant="ghost">Отмена</DXButton>
    <DXButton>Сохранить</DXButton>
  </DXStack>
</template>
```

## Сравнение с DXFlex

`DXStack` - это упрощённый вариант `DXFlex`:
- Меньше props (только основные)
- Предустановленные значения для типичных use-cases
- Встроенная поддержка разделителей

## Использует

- `useSize` - для gap
- `useClassComposition` - для объединения классов

## Особенности

- Разделители автоматически адаптируются к направлению (horizontal → divide-x, vertical → divide-y)
- По умолчанию `align: stretch` для полноширинных элементов
- Поддержка любого HTML тега через prop `tag`

