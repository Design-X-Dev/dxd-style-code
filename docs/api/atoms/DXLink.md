# DXLink

**Категория:** Atom  
**Импорт:** `import { DXLink } from 'dxd-style-code'`

## Назначение

Универсальный компонент ссылки с поддержкой Vue Router, внешних ссылок, различных вариантов стилизации и автоматической безопасности.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `href` | `string` | `null` | URL для обычной ссылки |
| `to` | `string \| Object` | `null` | Путь для Vue Router |
| `target` | `string` | `null` | Target атрибут |
| `rel` | `string` | `null` | Rel атрибут |
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'link'` | `'link'` | Вариант стилизации |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Размер |
| `disabled` | `boolean` | `false` | Отключенное состояние |
| `inactive` | `boolean` | `false` | Неактивное состояние (приглушённый вид) |
| `ariaLabel` | `string` | `null` | Кастомный aria-label |
| `showExternalIcon` | `boolean` | `true` | Показывать иконку внешней ссылки |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Текст ссылки |

## Примеры использования

### Внутренняя ссылка (Vue Router)

```vue
<template>
  <DXLink :to="{ name: 'dashboard' }">Дашборд</DXLink>
</template>
```

### Внешняя ссылка

```vue
<template>
  <DXLink href="https://github.com" target="_blank">
    GitHub
  </DXLink>
</template>
```

### Ссылка-кнопка

```vue
<template>
  <DXLink :to="'/signup'" variant="primary" size="lg">
    Зарегистрироваться
  </DXLink>
</template>
```

### Без иконки внешней ссылки

```vue
<template>
  <DXLink href="https://example.com" :show-external-icon="false">
    Ссылка без иконки
  </DXLink>
</template>
```

## Автоматическое определение типа

- `to` указан → `<router-link>`
- `href` указан → `<a>`
- Ничего не указано → `<span>`

## Безопасность

Для внешних ссылок с `target="_blank"` автоматически добавляется:
```html
rel="noopener noreferrer"
```

## Использует

- `useSize` - для размеров
- `useVariantButton` - для вариантов стилизации
- `useClassComposition` - для объединения классов
- `DXIcon` - для иконки внешней ссылки

## Особенности

- Автоматическая иконка ArrowTopRightOnSquareIcon для внешних ссылок
- Защита от tabnabbing атак
- Поддержка всех вариантов как у DXButton

