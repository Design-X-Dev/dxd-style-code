# DXLabel

**Категория:** Atom  
**Импорт:** `import { DXLabel } from 'dxd-style-code'`

## Назначение

Компонент label для форм с настраиваемым размером, весом шрифта и индикатором обязательного поля.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `htmlFor` | `string` | `''` | ID связанного input |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'sm'` | Размер текста |
| `weight` | `'normal' \| 'medium' \| 'semibold'` | `'medium'` | Вес шрифта |
| `color` | `'default' \| 'muted' \| 'primary'` | `'default'` | Цвет текста |
| `required` | `boolean` | `false` | Показать звёздочку обязательного поля |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Текст label |

## Примеры использования

### Базовый label

```vue
<template>
  <DXLabel html-for="email">Email</DXLabel>
  <input id="email" type="email" />
</template>
```

### Обязательное поле

```vue
<template>
  <DXLabel html-for="name" required>Имя</DXLabel>
  <input id="name" type="text" />
</template>
```

### Разные размеры

```vue
<template>
  <DXLabel size="xs">Маленький</DXLabel>
  <DXLabel size="sm">Средний</DXLabel>
  <DXLabel size="md">Обычный</DXLabel>
  <DXLabel size="lg">Большой</DXLabel>
</template>
```

### Приглушённый цвет

```vue
<template>
  <DXLabel color="muted">Опциональное поле</DXLabel>
</template>
```

## Стилизация

- Тег: `<label>` с корректным `for`
- Звёздочка: `<span class="text-rose-500 ml-0.5">*</span>`
- Display: `block`

## Использует

- `useVariantText` - для цветов

## Особенности

- Семантически связывается с input через `htmlFor`
- Звёздочка обязательного поля красного цвета
- По умолчанию средний вес шрифта для лучшей читаемости

