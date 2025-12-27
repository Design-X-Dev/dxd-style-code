# DXContainer

**Категория:** Atom  
**Импорт:** `import { DXContainer } from 'dxd-style-code'`

## Назначение

Контейнер с ограниченной шириной для центрирования контента. Используется как обёртка для секций страницы.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'full'` | `'lg'` | Максимальная ширина |
| `center` | `boolean` | `true` | Центрировать контейнер |
| `padding` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Горизонтальные отступы |
| `position` | `'static' \| 'relative' \| 'absolute' \| 'fixed' \| 'sticky'` | `null` | CSS position |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Содержимое контейнера |

## Примеры использования

### Базовый контейнер

```vue
<template>
  <DXContainer>
    <h1>Заголовок страницы</h1>
    <p>Контент ограничен по ширине и центрирован</p>
  </DXContainer>
</template>
```

### Узкий контейнер для статей

```vue
<template>
  <DXContainer size="md" padding="lg">
    <article>
      <h1>Заголовок статьи</h1>
      <p>Текст статьи с комфортной шириной для чтения</p>
    </article>
  </DXContainer>
</template>
```

### Широкий контейнер

```vue
<template>
  <DXContainer size="2xl">
    <DXGrid cols="4" gap="md">
      <!-- Сетка на всю ширину -->
    </DXGrid>
  </DXContainer>
</template>
```

### Контейнер на полную ширину

```vue
<template>
  <DXContainer size="full" padding="lg">
    Контент на всю ширину с боковыми отступами
  </DXContainer>
</template>
```

## Размеры

| Size | Max Width |
|------|-----------|
| `sm` | `max-w-screen-sm` (640px) |
| `md` | `max-w-screen-md` (768px) |
| `lg` | `max-w-screen-lg` (1024px) |
| `xl` | `max-w-screen-xl` (1280px) |
| `2xl` | `max-w-screen-2xl` (1536px) |
| `full` | `max-w-full` (100%) |

## Использует

- `useSpacing` - для горизонтальных отступов
- `useClassComposition` - для объединения классов

## Особенности

- Автоматическое центрирование через `mx-auto`
- Всегда `width: 100%` с ограничением `max-width`
- Адаптивные горизонтальные отступы

