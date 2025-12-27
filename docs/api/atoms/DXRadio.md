# DXRadio

**Категория:** Atom  
**Импорт:** `import { DXRadio } from 'dxd-style-code'`

## Назначение

Компонент radio-кнопки с поддержкой нативного и кастомного вариантов. Работает в группе через v-model.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `modelValue` | `string \| number \| boolean` | `null` | Текущее значение группы (v-model) |
| `value` | `string \| number \| boolean` | **required** | Значение этого radio |
| `label` | `string` | `''` | Текст лейбла |
| `disabled` | `boolean` | `false` | Отключенное состояние |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Размер |
| `variant` | `'default' \| 'custom'` | `'default'` | Вариант отображения |
| `color` | `'slate' \| 'primary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'primary'` | Цвет (custom variant) |

## Events

| Event | Параметры | Описание |
|-------|-----------|----------|
| `update:modelValue` | `value` | Обновление значения группы |

## Примеры использования

### Группа radio-кнопок

```vue
<template>
  <DXRadio v-model="selected" value="option1" label="Опция 1" />
  <DXRadio v-model="selected" value="option2" label="Опция 2" />
  <DXRadio v-model="selected" value="option3" label="Опция 3" />
</template>

<script setup>
import { ref } from 'vue';
const selected = ref('option1');
</script>
```

### Кастомный вариант

```vue
<template>
  <DXRadio 
    v-model="plan" 
    value="basic" 
    label="Базовый" 
    variant="custom"
    color="primary"
  />
  <DXRadio 
    v-model="plan" 
    value="pro" 
    label="Профессиональный" 
    variant="custom"
    color="success"
  />
</template>
```

### Разные размеры

```vue
<template>
  <DXRadio v-model="size" value="s" label="S" size="sm" />
  <DXRadio v-model="size" value="m" label="M" size="md" />
  <DXRadio v-model="size" value="l" label="L" size="lg" />
</template>
```

## Варианты

- **default** - нативный HTML radio с Tailwind стилями
- **custom** - кастомный с анимированной точкой внутри

## Использует

- `useSize` - для размеров
- `useVariantRadio` - для цветов custom варианта

## Особенности

- Плавная анимация точки при выборе (scale transition)
- Keyboard accessible: Space для выбора
- ARIA атрибуты для доступности
- Круглая форма (`rounded-full`)

