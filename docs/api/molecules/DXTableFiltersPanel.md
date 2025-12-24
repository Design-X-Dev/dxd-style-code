# DXTableFiltersPanel

**Категория:** Molecule  
**Импорт:** `import { DXTableFiltersPanel } from 'dxd-style-code'`

## Назначение

Панель активных фильтров таблицы с возможностью удаления отдельных фильтров или очистки всех.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `activeFilters` | `Array` | `[]` | Массив активных фильтров: `[{ column, value, label }]` |

## Events

| Event | Параметры | Описание |
|-------|-----------|----------|
| `remove-filter` | `string` | Удаление фильтра по колонке |
| `clear-all` | - | Очистка всех фильтров |

## Примеры использования

```vue
<template>
  <DXTableFiltersPanel
    :active-filters="activeFilters"
    @remove-filter="handleRemoveFilter"
    @clear-all="handleClearAll"
  />
</template>

<script setup>
const activeFilters = [
  { column: 'status', value: 'active', label: 'Статус: Активен' },
  { column: 'category', value: 'electronics', label: 'Категория: Электроника' },
];
</script>
```

## Используется в

- `DXTable` - таблица с фильтрацией
- Отображает активные фильтры и позволяет их управлять

