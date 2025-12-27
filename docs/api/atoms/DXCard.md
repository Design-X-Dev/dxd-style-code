# DXCard

**Категория:** Atom  
**Импорт:** `import { DXCard } from 'dxd-style-code'`

## Назначение

Базовый компонент карточки с вариантами оформления. Используется как контейнер для группировки контента.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `variant` | `'bordered' \| 'elevated' \| 'flat'` | `'bordered'` | Вариант стилизации |
| `padding` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Внутренний отступ |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Содержимое карточки |

## Примеры использования

### Базовая карточка

```vue
<template>
  <DXCard>
    <h3>Заголовок карточки</h3>
    <p>Содержимое карточки</p>
  </DXCard>
</template>
```

### Карточка с тенью

```vue
<template>
  <DXCard variant="elevated" padding="lg">
    <h3>Выделенная карточка</h3>
    <p>С тенью для визуального выделения</p>
  </DXCard>
</template>
```

### Плоская карточка

```vue
<template>
  <DXCard variant="flat" padding="sm">
    Минималистичная карточка без границ
  </DXCard>
</template>
```

### Карточка без отступов

```vue
<template>
  <DXCard padding="none">
    <img src="/image.jpg" class="w-full rounded-t-2xl" />
    <div class="p-4">
      <h3>Карточка с изображением</h3>
    </div>
  </DXCard>
</template>
```

## Варианты стилизации

- **bordered** - с тонкой рамкой (по умолчанию)
- **elevated** - с тенью и едва заметной рамкой
- **flat** - без рамки и тени

## Использует

- `useSpacing` - для вычисления padding классов

## Особенности

- Всегда белый фон (`bg-white`)
- Фиксированное скругление `rounded-2xl`
- Интегрируется с дизайн-системой через composables

