# DXCode

**Категория:** Atom  
**Импорт:** `import { DXCode } from 'dxd-style-code'`

## Назначение

Компонент для отображения кода. Поддерживает inline и block режимы с соответствующей стилизацией.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `block` | `boolean` | `false` | Блочный режим (pre) или inline (code) |
| `size` | `'xs' \| 'sm' \| 'md'` | `'sm'` | Размер шрифта |
| `lineNumbers` | `boolean` | `false` | Показывать номера строк (только block) |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Код для отображения |

## Примеры использования

### Inline код

```vue
<template>
  <p>
    Используйте функцию <DXCode>console.log()</DXCode> для отладки.
  </p>
</template>
```

### Блок кода

```vue
<template>
  <DXCode block>
const greeting = 'Hello, World!';
console.log(greeting);
  </DXCode>
</template>
```

### Разные размеры

```vue
<template>
  <DXCode size="xs">маленький код</DXCode>
  <DXCode size="sm">средний код</DXCode>
  <DXCode size="md">большой код</DXCode>
</template>
```

## Стилизация

### Inline режим
- Светло-серый фон (`bg-slate-100`)
- Тёмный текст (`text-slate-800`)
- Небольшие отступы и скругление

### Block режим
- Тёмный фон (`bg-slate-900`)
- Светлый текст (`text-slate-100`)
- Полная ширина с прокруткой
- Большее скругление (`rounded-xl`)

## Особенности

- Моноширинный шрифт (`font-mono`)
- Горизонтальная прокрутка для длинных строк в block режиме
- Семантические теги: `<code>` для inline, `<pre><code>` для block

