# DXDivider

**Категория:** Atom  
**Импорт:** `import { DXDivider } from 'dxd-style-code'`

## Назначение

Разделитель для визуального отделения секций контента. Поддерживает горизонтальную и вертикальную ориентацию, а также текст посередине.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Ориентация |
| `color` | `'light' \| 'default' \| 'dark'` | `'default'` | Цвет линии |
| `thickness` | `'thin' \| 'default' \| 'thick'` | `'default'` | Толщина линии |
| `spacing` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Отступы вокруг |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Текст посередине (только для horizontal) |

## Примеры использования

### Простой разделитель

```vue
<template>
  <div>Секция 1</div>
  <DXDivider />
  <div>Секция 2</div>
</template>
```

### Разделитель с текстом

```vue
<template>
  <DXDivider>или</DXDivider>
</template>
```

### Вертикальный разделитель

```vue
<template>
  <div class="flex items-center gap-4">
    <span>Опция 1</span>
    <DXDivider orientation="vertical" />
    <span>Опция 2</span>
    <DXDivider orientation="vertical" />
    <span>Опция 3</span>
  </div>
</template>
```

### Толстый тёмный разделитель

```vue
<template>
  <DXDivider color="dark" thickness="thick" spacing="lg" />
</template>
```

## Варианты цвета

- **light** - `border-slate-100`
- **default** - `border-slate-200`
- **dark** - `border-slate-300`

## Варианты толщины

- **thin** - 1px
- **default** - 1px с более насыщенным цветом
- **thick** - 2px

## Использует

- `useSpacing` - для отступов
- `useVariantDividerBorder` - для стилей границы

## Особенности

- Текст в слоте автоматически центрируется между двумя линиями
- Вертикальный разделитель требует контейнер с `display: flex`
- Минимальная высота для вертикального варианта `min-h-[1rem]`

