# DXFormLabel

**Категория:** Atom  
**Импорт:** `import { DXFormLabel } from 'dxd-style-code'`

## Назначение

Обёртка для полей формы с label, сообщениями об ошибках, успехе, вспомогательным текстом и счётчиком символов.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `label` | `string` | `''` | Текст лейбла |
| `error` | `string` | `''` | Сообщение об ошибке |
| `helper` | `string` | `''` | Вспомогательный текст |
| `success` | `string` | `''` | Сообщение об успехе |
| `required` | `boolean` | `false` | Показать звёздочку обязательного поля |
| `showValidationIcon` | `boolean` | `true` | Показывать иконки валидации |
| `maxLength` | `number` | `0` | Максимальная длина для счётчика |
| `currentLength` | `number` | `0` | Текущая длина для счётчика |
| `showCount` | `boolean` | `false` | Показывать счётчик символов |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Поле ввода (input, textarea, select) |

## Примеры использования

### Базовое использование

```vue
<template>
  <DXFormLabel label="Email" required>
    <input type="email" class="..." />
  </DXFormLabel>
</template>
```

### С ошибкой

```vue
<template>
  <DXFormLabel 
    label="Email" 
    error="Введите корректный email"
    required
  >
    <input type="email" class="..." />
  </DXFormLabel>
</template>
```

### С успехом

```vue
<template>
  <DXFormLabel 
    label="Username" 
    success="Имя пользователя доступно"
  >
    <input type="text" class="..." />
  </DXFormLabel>
</template>
```

### Со счётчиком символов

```vue
<template>
  <DXFormLabel 
    label="Описание" 
    :max-length="200"
    :current-length="description.length"
    show-count
    helper="Краткое описание проекта"
  >
    <textarea v-model="description" />
  </DXFormLabel>
</template>
```

## Поведение сообщений

1. **Error** имеет приоритет над helper
2. **Success** показывается только если нет error
3. **Helper** показывается только если нет error

## Использует

- `DXIcon` - для иконок валидации

## Особенности

- Иконки ExclamationCircleIcon (ошибка) и CheckCircleIcon (успех)
- Звёздочка обязательного поля красного цвета
- Счётчик показывает `currentLength / maxLength`

