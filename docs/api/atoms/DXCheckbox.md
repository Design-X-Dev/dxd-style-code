# DXCheckbox

**Категория:** Atom  
**Импорт:** `import { DXCheckbox } from 'dxd-style-code'`

## Назначение

Компонент чекбокса с поддержкой нативного и кастомного вариантов. Поддерживает работу как с boolean значением, так и с массивом значений.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `modelValue` | `boolean \| Array` | `false` | Значение (v-model) |
| `value` | `string \| number` | `undefined` | Значение для массива |
| `label` | `string` | `''` | Текст лейбла |
| `disabled` | `boolean` | `false` | Отключенное состояние |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Размер |
| `variant` | `'default' \| 'custom'` | `'default'` | Вариант отображения |
| `checkedIcon` | `Component` | `CheckIcon` | Иконка для checked (custom variant) |
| `uncheckedIcon` | `Component` | `null` | Иконка для unchecked (custom variant) |
| `shape` | `'square' \| 'circle'` | `'square'` | Форма (custom variant) |
| `iconAnimation` | `'none' \| 'scale' \| 'wiggle'` | `'scale'` | Анимация иконки |
| `color` | `'slate' \| 'primary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'primary'` | Цвет (custom variant) |

## Events

| Event | Параметры | Описание |
|-------|-----------|----------|
| `update:modelValue` | `boolean \| Array` | Обновление значения |

## Примеры использования

### Базовый чекбокс

```vue
<template>
  <DXCheckbox v-model="agreed" label="Я согласен с условиями" />
</template>
```

### Группа чекбоксов

```vue
<template>
  <DXCheckbox v-model="selected" value="option1" label="Опция 1" />
  <DXCheckbox v-model="selected" value="option2" label="Опция 2" />
  <DXCheckbox v-model="selected" value="option3" label="Опция 3" />
</template>

<script setup>
import { ref } from 'vue';
const selected = ref([]); // ['option1', 'option3']
</script>
```

### Кастомный чекбокс

```vue
<template>
  <DXCheckbox 
    v-model="isActive"
    variant="custom"
    color="success"
    shape="circle"
    label="Активировать"
  />
</template>
```

### С кастомной иконкой

```vue
<template>
  <DXCheckbox 
    v-model="isFavorite"
    variant="custom"
    :checked-icon="HeartIcon"
    :unchecked-icon="HeartOutlineIcon"
    color="danger"
    icon-animation="wiggle"
  />
</template>
```

## Варианты

- **default** - нативный HTML checkbox с Tailwind стилями
- **custom** - полностью кастомный с анимированной иконкой

## Использует

- `useSize` - для размеров
- `useVariantCheckbox` - для цветов custom варианта
- `DXIcon` - для отображения иконок

## Особенности

- **v-model с массивом:** При передаче массива работает как checkbox-группа
- **Keyboard accessible:** Поддерживает Space для переключения
- **ARIA:** Правильные aria-атрибуты для доступности

