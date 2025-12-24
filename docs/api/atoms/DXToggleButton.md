# DXToggleButton

**Категория:** Atom  
**Импорт:** `import { DXToggleButton } from 'dxd-style-code'`

## Назначение

Кнопка-переключатель с иконками для активного/неактивного состояний. Полезен для действий типа "лайк", "избранное", "закрепить".

## Props

| Prop              | Тип                                         | По умолчанию | Описание                          |
| ----------------- | ------------------------------------------- | ------------ | --------------------------------- |
| `modelValue`      | `boolean`                                   | `false`      | Текущее состояние (v-model)       |
| `activeIcon`      | `Component`                                 | **required** | Иконка для активного состояния    |
| `inactiveIcon`    | `Component`                                 | **required** | Иконка для неактивного состояния  |
| `activeLabel`     | `string`                                    | `null`       | Текст для активного состояния     |
| `inactiveLabel`   | `string`                                    | `null`       | Текст для неактивного состояния   |
| `activeVariant`   | `string`                                    | `'primary'`  | Вариант для активного состояния   |
| `inactiveVariant` | `string`                                    | `'ghost'`    | Вариант для неактивного состояния |
| `size`            | `'sm' \| 'md' \| 'lg'`                      | `'md'`       | Размер кнопки                     |
| `iconAnimation`   | `'none' \| 'wiggle' \| 'scale' \| 'rotate'` | `'wiggle'`   | Анимация иконки                   |
| `block`           | `boolean`                                   | `false`      | Растянуть на всю ширину           |
| `disabled`        | `boolean`                                   | `false`      | Отключенное состояние             |
| `ariaLabel`       | `string`                                    | `null`       | Aria-label для доступности        |

## Events

| Event               | Параметры | Описание             |
| ------------------- | --------- | -------------------- |
| `update:modelValue` | `boolean` | Обновление состояния |
| `change`            | `boolean` | Изменение состояния  |

## Примеры использования

### Кнопка "лайк"

```vue
<template>
  <DXToggleButton
    v-model="liked"
    :activeIcon="HeartSolidIcon"
    :inactiveIcon="HeartOutlineIcon"
  />
</template>
```

### Кнопка с текстом

```vue
<template>
  <DXToggleButton
    v-model="pinned"
    :activeIcon="PinSolidIcon"
    :inactiveIcon="PinOutlineIcon"
    active-label="Закреплено"
    inactive-label="Закрепить"
  />
</template>
```

### Кнопка на всю ширину

```vue
<template>
  <DXToggleButton
    v-model="favorite"
    :activeIcon="StarSolidIcon"
    :inactiveIcon="StarOutlineIcon"
    block
  />
</template>
```

## Особенности

- **Два состояния:** Автоматически переключается между активным и неактивным состоянием
- **Разные варианты:** Может иметь разные варианты оформления для разных состояний
- **Доступность:** Поддерживает aria-pressed и aria-label для доступности

## Использует

- `DXIcon` - для отображения иконок
- `useSize` - для управления размерами
- `useVariantButton` - для вариантов оформления

## Используется в

- Кнопки "лайк", "избранное"
- Переключатели состояния
- Интерактивные элементы с двумя состояниями
