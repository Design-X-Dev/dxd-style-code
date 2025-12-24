# DXButton

**Категория:** Atom  
**Импорт:** `import { DXButton } from 'dxd-style-code'`

## Назначение

Универсальная кнопка с различными вариантами оформления. Поддерживает работу как обычная кнопка, ссылка или router-link.

## Props

| Prop       | Тип                                                                                                                    | По умолчанию | Описание                                   |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------ |
| `variant`  | `'primary' \| 'secondary' \| 'ghost' \| 'outline' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'link' \| 'soft'` | `'primary'`  | Вариант оформления кнопки                  |
| `size`     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                                                                 | `'md'`       | Размер кнопки                              |
| `block`    | `boolean`                                                                                                              | `false`      | Растянуть на всю ширину                    |
| `iconOnly` | `boolean`                                                                                                              | `false`      | Квадратная кнопка только с иконкой         |
| `disabled` | `boolean`                                                                                                              | `false`      | Отключенное состояние                      |
| `type`     | `'button' \| 'submit' \| 'reset'`                                                                                      | `'button'`   | Тип кнопки для формы                       |
| `to`       | `string \| Object`                                                                                                     | `null`       | Vue Router путь (превращает в router-link) |
| `href`     | `string`                                                                                                               | `null`       | Обычная ссылка (превращает в `<a>`)        |
| `target`   | `string`                                                                                                               | `null`       | Target для ссылки                          |
| `rel`      | `string`                                                                                                               | `null`       | Rel для ссылки                             |
| `value`    | `string \| number`                                                                                                     | `null`       | Значение для использования в DXButtonGroup |

## Events

| Event   | Параметры | Описание       |
| ------- | --------- | -------------- |
| `click` | `Event`   | Клик по кнопке |

## Slots

| Slot      | Описание                               |
| --------- | -------------------------------------- |
| `default` | Содержимое кнопки (текст и/или иконки) |

## Примеры использования

### Базовая кнопка

```vue
<template>
  <DXButton variant="primary" size="md">Сохранить</DXButton>
</template>
```

### Кнопка с действием

```vue
<template>
  <DXButton variant="danger" @click="handleDelete">
    <TrashIcon class="w-4 h-4" />
    Удалить
  </DXButton>
</template>
```

### Кнопка как router-link

```vue
<template>
  <DXButton :to="{ name: 'home' }" variant="ghost"> На главную </DXButton>
</template>
```

### Кнопка как обычная ссылка

```vue
<template>
  <DXButton href="https://example.com" target="_blank" variant="link">
    Внешняя ссылка
  </DXButton>
</template>
```

### Кнопка только с иконкой

```vue
<template>
  <DXButton icon-only variant="ghost" size="md" @click="handleEdit">
    <PencilIcon class="w-5 h-5" />
  </DXButton>
</template>
```

### Кнопка на всю ширину

```vue
<template>
  <DXButton block variant="primary"> Полная ширина </DXButton>
</template>
```

## Особенности

- **Автоматическое определение тега:** Компонент автоматически становится `<a>` при наличии `href`, `router-link` при наличии `to`, или `<button>` в остальных случаях
- **Интеграция с DXButtonGroup:** Поддерживает интеграцию с `DXButtonGroup` через provide/inject. При использовании в группе автоматически применяются стили группы
- **Доступность:** Поддерживает все стандартные ARIA атрибуты для кнопок и ссылок

## Использует

- `useSize` - для управления размерами
- `useVariantButton` - для вариантов оформления
- `useClassComposition` - для объединения классов

## Используется в

- `DXButtonGroup` - группа кнопок
- `DXActionButtons` - кнопки действий
- Практически во всех компонентах библиотеки
