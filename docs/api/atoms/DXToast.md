# DXToast

**Категория:** Atom  
**Импорт:** `import { DXToast } from 'dxd-style-code'`

## Назначение

Компонент уведомления (toast) с иконкой и цветовыми вариантами. Используется для отображения информационных сообщений, успехов, предупреждений и ошибок.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `variant` | `'info' \| 'success' \| 'warning' \| 'danger'` | `'info'` | Вариант стилизации |
| `showIcon` | `boolean` | `true` | Показывать иконку |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Текст уведомления |

## Примеры использования

### Информационный toast

```vue
<template>
  <DXToast variant="info">
    Новая версия доступна для скачивания.
  </DXToast>
</template>
```

### Успех

```vue
<template>
  <DXToast variant="success">
    Данные успешно сохранены!
  </DXToast>
</template>
```

### Предупреждение

```vue
<template>
  <DXToast variant="warning">
    Срок действия сессии истекает через 5 минут.
  </DXToast>
</template>
```

### Ошибка

```vue
<template>
  <DXToast variant="danger">
    Не удалось загрузить данные. Попробуйте снова.
  </DXToast>
</template>
```

### Без иконки

```vue
<template>
  <DXToast variant="info" :show-icon="false">
    Простое уведомление без иконки.
  </DXToast>
</template>
```

## Иконки по вариантам

| Variant | Иконка |
|---------|--------|
| `info` | InformationCircleIcon |
| `success` | CheckCircleIcon |
| `warning` | ExclamationTriangleIcon |
| `danger` | ExclamationCircleIcon |

## Стилизация

- Скругление: `rounded-2xl`
- Рамка + фон в соответствии с вариантом
- Иконка размера `md`
- Flex layout с gap-3

## Использует

- `useVariantConfig` - для получения цветов и иконки
- `DXIcon` - для отображения иконки

## Особенности

- Автоматическая иконка в зависимости от варианта
- Flex-1 для контента, чтобы он занимал оставшееся пространство
- Иконка с `shrink-0` для предотвращения сжатия

