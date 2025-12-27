# DXDashboardGrid

Сетка для размещения виджетов дашборда с поддержкой drag-and-drop.

## Import

```javascript
import { DXDashboardGrid } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `widgets` | `Array` | `[]` | Конфигурация виджетов |
| `columns` | `Number` | `4` | Количество колонок |
| `gap` | `String` | `'md'` | Отступы между виджетами: `'sm'`, `'md'`, `'lg'` |
| `draggable` | `Boolean` | `false` | Разрешить перетаскивание |
| `resizable` | `Boolean` | `false` | Разрешить изменение размера |
| `responsive` | `Boolean` | `true` | Адаптивная сетка |

## Widget Structure

```typescript
interface Widget {
  id: string;
  x: number;           // Позиция X (колонка)
  y: number;           // Позиция Y (строка)
  w: number;           // Ширина (в колонках)
  h: number;           // Высота (в строках)
  minW?: number;       // Минимальная ширина
  minH?: number;       // Минимальная высота
  maxW?: number;       // Максимальная ширина
  maxH?: number;       // Максимальная высота
  static?: boolean;    // Нельзя перемещать
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:widgets` | `Widget[]` | Изменение конфигурации |
| `layout-change` | `Widget[]` | Изменение layout |
| `widget-move` | `{ id, x, y }` | Перемещение виджета |
| `widget-resize` | `{ id, w, h }` | Изменение размера |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `widget-{id}` | `{ widget }` | Контент виджета по ID |
| `default` | - | Общий контент виджетов |

## Usage

### Basic

```vue
<DXDashboardGrid
  :widgets="[
    { id: 'stats', x: 0, y: 0, w: 2, h: 1 },
    { id: 'chart', x: 2, y: 0, w: 2, h: 2 },
    { id: 'table', x: 0, y: 1, w: 2, h: 2 }
  ]"
>
  <template #widget-stats>
    <DXDashboardWidget title="Статистика">
      <StatsContent />
    </DXDashboardWidget>
  </template>
  
  <template #widget-chart>
    <DXDashboardWidget title="График">
      <ChartContent />
    </DXDashboardWidget>
  </template>
  
  <template #widget-table>
    <DXDashboardWidget title="Таблица">
      <TableContent />
    </DXDashboardWidget>
  </template>
</DXDashboardGrid>
```

### Draggable

```vue
<DXDashboardGrid
  v-model:widgets="widgets"
  draggable
  @layout-change="saveLayout"
/>
```

### Resizable

```vue
<DXDashboardGrid
  v-model:widgets="widgets"
  draggable
  resizable
/>
```

### Custom Columns

```vue
<DXDashboardGrid
  :widgets="widgets"
  :columns="6"
  gap="lg"
/>
```

### Static Widgets

```vue
<DXDashboardGrid
  :widgets="[
    { id: 'header', x: 0, y: 0, w: 4, h: 1, static: true },
    { id: 'content', x: 0, y: 1, w: 3, h: 2 },
    { id: 'sidebar', x: 3, y: 1, w: 1, h: 2 }
  ]"
  draggable
/>
```

### Responsive

```vue
<DXDashboardGrid
  :widgets="widgets"
  responsive
/>
<!-- Автоматически перестраивается на мобильных -->
```

### Full Dashboard Example

```vue
<template>
  <DXAppLayout variant="dashboard">
    <template #header>
      <DXHeaderBar appName="Dashboard" />
    </template>
    
    <template #content>
      <div class="p-6">
        <DXDashboardGrid
          v-model:widgets="dashboardWidgets"
          :columns="4"
          gap="md"
          draggable
          resizable
          @layout-change="saveLayout"
        >
          <template #widget-revenue>
            <DXDashboardWidget title="Выручка" :icon="CurrencyDollarIcon">
              <DXStatCard value="$45,231" :trend="12.5" />
            </DXDashboardWidget>
          </template>
          
          <template #widget-orders>
            <DXDashboardWidget title="Заказы" :icon="ShoppingBagIcon">
              <DXStatCard value="356" :trend="8.2" />
            </DXDashboardWidget>
          </template>
          
          <template #widget-chart>
            <DXDashboardWidget title="Продажи" refreshable @refresh="loadChart">
              <SalesChart :data="salesData" />
            </DXDashboardWidget>
          </template>
          
          <template #widget-recent-orders>
            <DXDashboardWidget title="Последние заказы">
              <RecentOrdersTable :orders="recentOrders" />
            </DXDashboardWidget>
          </template>
        </DXDashboardGrid>
      </div>
    </template>
  </DXAppLayout>
</template>

<script setup>
const dashboardWidgets = ref([
  { id: 'revenue', x: 0, y: 0, w: 1, h: 1 },
  { id: 'orders', x: 1, y: 0, w: 1, h: 1 },
  { id: 'chart', x: 2, y: 0, w: 2, h: 2 },
  { id: 'recent-orders', x: 0, y: 1, w: 2, h: 2 }
]);

function saveLayout(widgets) {
  localStorage.setItem('dashboardLayout', JSON.stringify(widgets));
}
</script>
```

## See Also

- [DXDashboardWidget](./DXDashboardWidget.md)
- [DXStatCard](../molecules/DXStatCard.md)
- [DXGrid](../atoms/DXGrid.md)
