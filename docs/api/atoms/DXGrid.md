# DXGrid

**Категория:** Atom  
**Импорт:** `import { DXGrid } from 'dxd-style-code'`

## Назначение

CSS Grid контейнер с поддержкой адаптивного количества колонок и гибкими отступами.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `cols` | `number \| 'auto'` | `12` | Количество колонок (1-12 или auto) |
| `colsSm` | `number \| string` | `''` | Колонки на sm брейкпоинте |
| `colsMd` | `number \| string` | `''` | Колонки на md брейкпоинте |
| `colsLg` | `number \| string` | `''` | Колонки на lg брейкпоинте |
| `gap` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Общий отступ |
| `gapX` | `string` | `''` | Горизонтальный отступ |
| `gapY` | `string` | `''` | Вертикальный отступ |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Grid элементы |

## Примеры использования

### Базовая сетка

```vue
<template>
  <DXGrid :cols="3" gap="md">
    <DXCard>Карточка 1</DXCard>
    <DXCard>Карточка 2</DXCard>
    <DXCard>Карточка 3</DXCard>
  </DXGrid>
</template>
```

### Адаптивная сетка

```vue
<template>
  <DXGrid :cols="1" :cols-sm="2" :cols-md="3" :cols-lg="4" gap="lg">
    <DXCard v-for="item in items" :key="item.id">
      {{ item.title }}
    </DXCard>
  </DXGrid>
</template>
```

### Автоматическая сетка

```vue
<template>
  <DXGrid cols="auto" gap="md">
    <!-- Автоматически подстраивает количество колонок -->
    <DXCard v-for="item in items" :key="item.id">
      {{ item.title }}
    </DXCard>
  </DXGrid>
</template>
```

### Разные отступы по осям

```vue
<template>
  <DXGrid :cols="2" gap-x="lg" gap-y="sm">
    <div>Элемент 1</div>
    <div>Элемент 2</div>
    <div>Элемент 3</div>
    <div>Элемент 4</div>
  </DXGrid>
</template>
```

## Auto режим

При `cols="auto"` используется:
```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
```

Это создаёт адаптивную сетку с минимальной шириной колонки 250px.

## Использует

- `useSize` - для общего gap
- `useSpacing` - для gapX/gapY
- `useClassComposition` - для объединения классов

## Особенности

- Полная поддержка адаптивных брейкпоинтов (sm, md, lg)
- Раздельное управление gap по осям
- Auto режим для автоматической адаптации

