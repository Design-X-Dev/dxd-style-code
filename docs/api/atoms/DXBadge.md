# DXBadge

**Категория:** Atom  
**Импорт:** `import { DXBadge } from 'dxd-style-code'`

## Назначение

Бейдж для отображения статусов и меток с поддержкой иконок.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `variant` | `'slate' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'slate'` | Вариант оформления |
| `size` | `'sm' \| 'md'` | `'sm'` | Размер бейджа |
| `iconLeft` | `Component` | `null` | Иконка слева |
| `iconRight` | `Component` | `null` | Иконка справа |

## Примеры использования

### Базовый бейдж

```vue
<template>
  <DXBadge variant="success">Активен</DXBadge>
</template>
```

### Бейдж с иконкой

```vue
<template>
  <DXBadge variant="success" :icon-left="CheckIcon">
    Активен
  </DXBadge>
</template>
```

### Бейдж с иконкой справа

```vue
<template>
  <DXBadge variant="info" :icon-right="InformationCircleIcon">
    Новое
  </DXBadge>
</template>
```

## Используется в

- Статусы элементов
- Метки и теги
- Уведомления и счетчики

