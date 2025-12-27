# DXLoader

**Категория:** Atom  
**Импорт:** `import { DXLoader } from 'dxd-style-code'`

## Назначение

Индикатор загрузки (спиннер) с опциональным текстом и цветовыми вариантами.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Размер спиннера |
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'slate'` | `'default'` | Цветовой вариант |
| `text` | `string` | `''` | Текст загрузки |
| `showText` | `boolean` | `undefined` | Принудительно показать/скрыть текст |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Кастомный текст загрузки |

## Примеры использования

### Простой лоадер

```vue
<template>
  <DXLoader />
</template>
```

### С текстом

```vue
<template>
  <DXLoader text="Загрузка..." />
</template>
```

### Цветные варианты

```vue
<template>
  <DXLoader variant="primary" />
  <DXLoader variant="success" text="Сохранение..." />
  <DXLoader variant="danger" />
</template>
```

### Разные размеры

```vue
<template>
  <DXLoader size="xs" />
  <DXLoader size="sm" />
  <DXLoader size="md" />
  <DXLoader size="lg" />
  <DXLoader size="xl" />
</template>
```

### В кнопке

```vue
<template>
  <DXButton :disabled="isLoading">
    <DXLoader v-if="isLoading" size="xs" variant="slate" />
    <span v-else>Отправить</span>
  </DXButton>
</template>
```

## Размеры

| Size | Spinner | 
|------|---------|
| `xs` | 12x12px |
| `sm` | 16x16px |
| `md` | 20x20px |
| `lg` | 24x24px |
| `xl` | 32x32px |

## Использует

- `useSize` - для размеров
- `useVariantLoader` - для цветов

## Особенности

- CSS анимация `animate-spin`
- Двухцветная граница для эффекта вращения
- Текст отображается справа от спиннера с `gap-2`
- Автоматическое определение показа текста по наличию prop или slot

