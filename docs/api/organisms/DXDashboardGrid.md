# DXDashboardGrid

**Категория:** Organism  
**Импорт:** `import { DXDashboardGrid } from 'dxd-style-code'`

## Назначение

Сетка для дашборда с поддержкой drag-and-drop для перестановки виджетов и изменения их размеров.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `widgets` | `Array` | **required** | Массив виджетов (v-model): `[{ id, x, y, w, h, type, title?, config? }]` |
| `columns` | `number` | `12` | Количество колонок в сетке |
| `rowHeight` | `number` | `100` | Высота строки в пикселях |
| `editable` | `boolean` | `true` | Редактируемый режим (drag-and-drop включен) |
| `gap` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Отступ между виджетами |

## Events

| Event | Параметры | Описание |
|-------|-----------|----------|
| `update:widgets` | `Array` | Обновление виджетов |
| `widget-move` | `{ widget, newPosition }` | Перемещение виджета |
| `widget-resize` | `{ widget, newSize }` | Изменение размера виджета |
| `widget-add` | `{ widget }` | Добавление виджета |
| `widget-remove` | `{ widget }` | Удаление виджета |

## Slots

| Slot | Параметры | Описание |
|------|-----------|----------|
| `widget` | `{ widget }` | Кастомный контент виджета |

## Примеры использования

### Базовый дашборд

```vue
<template>
  <DXDashboardGrid
    v-model:widgets="widgets"
    :columns="12"
    :row-height="100"
    :editable="true"
  >
    <template #widget="{ widget }">
      <DXCard class="h-full">
        <h3>{{ widget.title }}</h3>
        <p>Контент виджета</p>
      </DXCard>
    </template>
  </DXDashboardGrid>
</template>

<script setup>
const widgets = ref([
  { id: 1, w: 4, h: 2, type: 'stat', title: 'Статистика' },
  { id: 2, w: 4, h: 2, type: 'chart', title: 'График' },
]);
</script>
```

### Дашборд с карточками статистики

```vue
<template>
  <DXDashboardGrid v-model:widgets="widgets">
    <template #widget="{ widget }">
      <DXStatCard
        v-if="widget.type === 'stat'"
        :title="widget.config.title"
        :value="widget.config.value"
        :icon="widget.config.icon"
      />
    </template>
  </DXDashboardGrid>
</template>
```

## Особенности

- **CSS Grid:** Использует CSS Grid для размещения виджетов
- **Drag-and-Drop:** Поддерживает перетаскивание виджетов за handle
- **Размеры:** Каждый виджет имеет свойства w (ширина в колонках) и h (высота в строках)
- **Редактируемый режим:** Можно включать/выключать редактирование

## Использует

- `vue-draggable-next` - для drag-and-drop функциональности
- `DXStatCard` - для карточек статистики (через slot)
- `useClassComposition` - для стилей
- `useSpacing` - для отступов

## Используется в

- Настраиваемые дашборды
- Панели мониторинга
- Аналитические панели

