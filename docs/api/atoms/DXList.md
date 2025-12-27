# DXList

**Категория:** Atom  
**Импорт:** `import { DXList } from 'dxd-style-code'`

## Назначение

Компонент списка (упорядоченного или неупорядоченного) с настраиваемым стилем маркеров и отступами.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `ordered` | `boolean` | `false` | Нумерованный список (ol) |
| `marker` | `'disc' \| 'circle' \| 'square' \| 'decimal' \| 'none'` | `''` | Стиль маркеров |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Размер текста |
| `spacing` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'sm'` | Отступ между элементами |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Элементы списка (`<li>`) |

## Примеры использования

### Ненумерованный список

```vue
<template>
  <DXList>
    <li>Первый пункт</li>
    <li>Второй пункт</li>
    <li>Третий пункт</li>
  </DXList>
</template>
```

### Нумерованный список

```vue
<template>
  <DXList ordered>
    <li>Шаг первый</li>
    <li>Шаг второй</li>
    <li>Шаг третий</li>
  </DXList>
</template>
```

### Кастомные маркеры

```vue
<template>
  <DXList marker="square">
    <li>Пункт с квадратным маркером</li>
    <li>Ещё один пункт</li>
  </DXList>
</template>
```

### Без маркеров

```vue
<template>
  <DXList marker="none" spacing="md">
    <li>Первый элемент</li>
    <li>Второй элемент</li>
  </DXList>
</template>
```

### Компактный список

```vue
<template>
  <DXList size="sm" spacing="none">
    <li>Плотный</li>
    <li>Список</li>
  </DXList>
</template>
```

## Стили маркеров

| Marker | Вид |
|--------|-----|
| `disc` | • (по умолчанию для ul) |
| `circle` | ○ |
| `square` | ▪ |
| `decimal` | 1. 2. 3. (по умолчанию для ol) |
| `none` | Без маркеров |

## Особенности

- Автоматический выбор тега: `<ul>` или `<ol>`
- Левый отступ `pl-5` для маркеров
- Цвет текста `text-slate-700`
- Отступы между элементами через `space-y-*`

