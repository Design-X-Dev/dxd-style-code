# DXDataFilter

**Категория:** Molecule  
**Импорт:** `import { DXDataFilter } from 'dxd-style-code'`

## Назначение

Панель фильтрации данных с поддержкой различных типов фильтров (текст, выбор, дата, диапазон).

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `filters` | `Array` | `[]` | Массив определений фильтров |
| `values` | `Object` | `{}` | Текущие значения фильтров (v-model) |

## Events

| Event | Параметры | Описание |
|-------|-----------|----------|
| `update:values` | `Object` | Обновление значений фильтров |
| `apply` | `Object` | Применение фильтров |
| `reset` | - | Сброс фильтров |

## Примеры использования

```vue
<template>
  <DXDataFilter
    :filters="filterDefinitions"
    v-model:values="filterValues"
    @apply="handleApplyFilters"
  />
</template>

<script setup>
const filterDefinitions = [
  { key: 'status', type: 'select', label: 'Статус', options: ['active', 'inactive'] },
  { key: 'date', type: 'date', label: 'Дата' },
  { key: 'search', type: 'text', label: 'Поиск' },
];
</script>
```

## Используется в

- Таблицы с фильтрацией
- Списки с фильтрами
- Поисковые интерфейсы

