# DXBlockquote

**Категория:** Atom  
**Импорт:** `import { DXBlockquote } from 'dxd-style-code'`

## Назначение

Компонент для отображения блочных цитат с поддержкой различных стилей оформления и указанием источника.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `variant` | `'default' \| 'bordered' \| 'highlighted'` | `'bordered'` | Вариант стилизации |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Размер текста |
| `cite` | `string` | `''` | Источник цитаты |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Текст цитаты |
| `cite` | Кастомный источник (переопределяет prop cite) |

## Примеры использования

### Базовая цитата

```vue
<template>
  <DXBlockquote>
    Лучший способ предсказать будущее — создать его.
  </DXBlockquote>
</template>
```

### Цитата с источником

```vue
<template>
  <DXBlockquote cite="Питер Друкер">
    Лучший способ предсказать будущее — создать его.
  </DXBlockquote>
</template>
```

### Выделенная цитата

```vue
<template>
  <DXBlockquote variant="highlighted" size="lg">
    Важная мысль, которую нужно выделить.
  </DXBlockquote>
</template>
```

### С кастомным источником

```vue
<template>
  <DXBlockquote>
    Цитата из книги.
    <template #cite>
      <a href="/books/example">Название книги</a>, стр. 42
    </template>
  </DXBlockquote>
</template>
```

## Варианты стилизации

- **default** - простой курсивный текст
- **bordered** - с левой вертикальной границей (по умолчанию)
- **highlighted** - с фоновой заливкой и скруглением

## Особенности

- Использует семантический тег `<blockquote>`
- Источник отображается в теге `<cite>` для SEO
- Адаптивный размер текста через prop `size`

