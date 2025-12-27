# DXToggle

**Категория:** Atom  
**Импорт:** `import { DXToggle } from 'dxd-style-code'`

## Назначение

Компонент переключателя (toggle switch) для бинарных состояний с плавной анимацией.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `modelValue` | `boolean` | `false` | Состояние (v-model) |
| `label` | `string` | `''` | Текст лейбла |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Размер |
| `color` | `'slate' \| 'primary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'slate'` | Цвет при включении |
| `animation` | `'none' \| 'smooth'` | `'smooth'` | Анимация переключения |
| `disabled` | `boolean` | `false` | Отключенное состояние |

## Events

| Event | Параметры | Описание |
|-------|-----------|----------|
| `update:modelValue` | `boolean` | Обновление состояния |

## Примеры использования

### Базовый toggle

```vue
<template>
  <DXToggle v-model="isEnabled" label="Уведомления" />
</template>
```

### Цветные варианты

```vue
<template>
  <DXToggle v-model="darkMode" color="slate" label="Тёмная тема" />
  <DXToggle v-model="notifications" color="primary" label="Push-уведомления" />
  <DXToggle v-model="analytics" color="success" label="Аналитика" />
</template>
```

### Разные размеры

```vue
<template>
  <DXToggle v-model="val" size="xs" label="Маленький" />
  <DXToggle v-model="val" size="md" label="Средний" />
  <DXToggle v-model="val" size="xl" label="Большой" />
</template>
```

### Без анимации

```vue
<template>
  <DXToggle v-model="val" animation="none" label="Без анимации" />
</template>
```

### В форме настроек

```vue
<template>
  <DXStack gap="md">
    <DXToggle v-model="settings.notifications" label="Email уведомления" />
    <DXToggle v-model="settings.marketing" label="Маркетинговые рассылки" />
    <DXToggle v-model="settings.twoFactor" color="success" label="Двухфакторная аутентификация" />
  </DXStack>
</template>
```

## Размеры

| Size | Track | Thumb |
|------|-------|-------|
| `xs` | w-7 h-4 | w-3 h-3 |
| `sm` | w-9 h-5 | w-3.5 h-3.5 |
| `md` | w-11 h-6 | w-4 h-4 |
| `lg` | w-14 h-7 | w-5 h-5 |
| `xl` | w-16 h-8 | w-6 h-6 |

## Использует

- `useSize` - для размеров
- `useVariantToggle` - для цветов
- `useAnimation` - для анимации
- `useClassComposition` - для объединения классов

## Особенности

- ARIA: `role="switch"` и `aria-checked`
- Плавная анимация translate для thumb
- Focus ring при фокусе
- Белый thumb (`bg-white`)

