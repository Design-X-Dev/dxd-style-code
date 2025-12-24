# DXBaseTable

**Категория:** Organism  
**Импорт:** `import { DXBaseTable } from 'dxd-style-code'`

## Назначение

Базовая таблица для отображения данных. Используется внутри DXTable, но может использоваться самостоятельно для простых случаев.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `columns` | `Array` | **required** | Массив колонок: `[{ key, label, sortable?, filterable?, width?, align?, format? }]` |
| `data` | `Array` | `[]` | Данные таблицы |
| `sortBy` | `string` | `null` | Колонка для сортировки |
| `sortDirection` | `'asc' \| 'desc'` | `'asc'` | Направление сортировки |
| `selectedRows` | `Array` | `[]` | Выбранные строки |
| `selectable` | `boolean` | `false` | Можно ли выбирать строки |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Размер таблицы |
| `stickyHeader` | `boolean` | `true` | Закрепленный заголовок |
| `striped` | `boolean` | `false` | Полосатая таблица |
| `bordered` | `boolean` | `false` | С границами |
| `hoverable` | `boolean` | `true` | Подсветка при наведении |
| `loading` | `boolean` | `false` | Состояние загрузки |

## Events

| Event | Параметры | Описание |
|-------|-----------|----------|
| `sort` | `{ column, direction }` | Сортировка |
| `filter` | `{ column, value }` | Фильтрация |
| `row-click` | `{ row, index }` | Клик по строке |
| `row-select` | `{ id, selected }` | Выбор строки |
| `select-all` | `boolean` | Выбрать все |

## Slots

| Slot | Параметры | Описание |
|------|-----------|----------|
| `[columnKey]` | `{ row, value, index }` | Кастомизация ячейки по ключу колонки |

## Примеры использования

### Простая таблица

```vue
<template>
  <DXBaseTable
    :columns="columns"
    :data="data"
  />
</template>
```

### Таблица с сортировкой

```vue
<template>
  <DXBaseTable
    :columns="columns"
    :data="data"
    :sort-by="sortBy"
    :sort-direction="sortDirection"
    @sort="handleSort"
  />
</template>
```

## Особенности

- **Базовая функциональность:** Предоставляет только базовое отображение данных
- **Используется в DXTable:** DXTable использует DXBaseTable как основу
- **Кастомизация:** Поддерживает слоты для кастомизации ячеек

## Используется в

- `DXTable` - полнофункциональная таблица
- Простые таблицы без дополнительных функций

