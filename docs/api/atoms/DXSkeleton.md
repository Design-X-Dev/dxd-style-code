# DXSkeleton

**Категория:** Atom  
**Импорт:** `import { DXSkeleton } from 'dxd-style-code'`

## Назначение

Компонент-заглушка для отображения во время загрузки контента. Показывает анимированный placeholder вместо реальных данных.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `width` | `string` | `'100%'` | Ширина элемента |
| `height` | `string` | `'1rem'` | Высота элемента |
| `rounded` | `string` | `'rounded-md'` | Tailwind класс скругления |

## Примеры использования

### Скелетон для текста

```vue
<template>
  <DXSkeleton width="60%" height="1rem" />
  <DXSkeleton width="80%" height="1rem" />
  <DXSkeleton width="40%" height="1rem" />
</template>
```

### Скелетон для аватара

```vue
<template>
  <DXSkeleton width="48px" height="48px" rounded="rounded-full" />
</template>
```

### Скелетон для карточки

```vue
<template>
  <DXCard padding="md">
    <DXFlex gap="md" align="start">
      <DXSkeleton width="64px" height="64px" rounded="rounded-lg" />
      <div class="flex-1 space-y-2">
        <DXSkeleton width="70%" height="1.25rem" />
        <DXSkeleton width="100%" height="0.875rem" />
        <DXSkeleton width="50%" height="0.875rem" />
      </div>
    </DXFlex>
  </DXCard>
</template>
```

### Скелетон для изображения

```vue
<template>
  <DXSkeleton width="100%" height="200px" rounded="rounded-xl" />
</template>
```

### Скелетон для списка

```vue
<template>
  <div v-for="i in 5" :key="i" class="flex items-center gap-3 py-2">
    <DXSkeleton width="40px" height="40px" rounded="rounded-full" />
    <div class="flex-1 space-y-1">
      <DXSkeleton width="40%" height="1rem" />
      <DXSkeleton width="60%" height="0.75rem" />
    </div>
  </div>
</template>
```

## Стилизация

- Фон: `bg-slate-200`
- Анимация: `animate-pulse` (плавное мерцание)
- Inline стили для width/height

## Особенности

- Минималистичный компонент без дополнительной логики
- Использует CSS анимацию Tailwind
- Гибкие размеры через inline стили
- Любое скругление через Tailwind класс

