# DXChartContainer

Контейнер для графиков с заголовком, легендой и опциями.

## Import

```javascript
import { DXChartContainer } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `String` | `''` | Заголовок графика |
| `subtitle` | `String` | `''` | Подзаголовок |
| `legend` | `Array` | `[]` | Легенда графика |
| `showLegend` | `Boolean` | `true` | Показывать легенду |
| `legendPosition` | `String` | `'bottom'` | Позиция легенды: `'top'`, `'bottom'`, `'left'`, `'right'` |
| `loading` | `Boolean` | `false` | Состояние загрузки |
| `error` | `String` | `''` | Сообщение об ошибке |
| `height` | `String` | `'300px'` | Высота графика |
| `refreshable` | `Boolean` | `false` | Можно обновлять |
| `downloadable` | `Boolean` | `false` | Можно скачать |
| `fullscreen` | `Boolean` | `false` | Режим fullscreen |

## Legend Item Structure

```typescript
interface LegendItem {
  label: string;
  color: string;
  value?: string | number;
  active?: boolean;
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `refresh` | - | Обновление данных |
| `download` | - | Скачивание графика |
| `fullscreen` | `Boolean` | Переключение fullscreen |
| `legend-toggle` | `number` | Переключение элемента легенды |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Контент графика |
| `header` | Кастомный header |
| `legend` | Кастомная легенда |
| `loading` | Состояние загрузки |
| `error` | Состояние ошибки |
| `actions` | Дополнительные действия |

## Usage

### Basic

```vue
<DXChartContainer title="Продажи">
  <MyChart :data="salesData" />
</DXChartContainer>
```

### With Legend

```vue
<DXChartContainer
  title="Выручка по категориям"
  :legend="[
    { label: 'Электроника', color: '#3b82f6', value: '45%' },
    { label: 'Одежда', color: '#10b981', value: '30%' },
    { label: 'Книги', color: '#f59e0b', value: '25%' }
  ]"
>
  <PieChart :data="revenueData" />
</DXChartContainer>
```

### With Subtitle

```vue
<DXChartContainer
  title="Активность пользователей"
  subtitle="За последние 30 дней"
>
  <LineChart :data="activityData" />
</DXChartContainer>
```

### Refreshable

```vue
<DXChartContainer
  title="Данные в реальном времени"
  refreshable
  @refresh="loadChartData"
>
  <RealtimeChart :data="realtimeData" />
</DXChartContainer>
```

### Downloadable

```vue
<DXChartContainer
  title="Отчёт"
  downloadable
  @download="downloadChart"
>
  <BarChart :data="reportData" />
</DXChartContainer>
```

### Custom Height

```vue
<DXChartContainer
  title="Большой график"
  height="500px"
>
  <LargeChart :data="data" />
</DXChartContainer>
```

### Loading State

```vue
<DXChartContainer
  title="Данные"
  :loading="isLoading"
>
  <Chart v-if="!isLoading" :data="data" />
</DXChartContainer>
```

### Error State

```vue
<DXChartContainer
  title="Данные"
  :error="errorMessage"
>
  <template #error>
    <DXEmptyState
      :icon="ExclamationTriangleIcon"
      title="Ошибка загрузки"
      :description="errorMessage"
    >
      <template #action>
        <DXButton @click="retry">Повторить</DXButton>
      </template>
    </DXEmptyState>
  </template>
</DXChartContainer>
```

### Legend Positions

```vue
<DXChartContainer :legend="legend" legendPosition="top" />
<DXChartContainer :legend="legend" legendPosition="bottom" />
<DXChartContainer :legend="legend" legendPosition="left" />
<DXChartContainer :legend="legend" legendPosition="right" />
```

### With Actions

```vue
<DXChartContainer title="Продажи">
  <template #actions>
    <DXSegmentedControl
      v-model="period"
      :options="['День', 'Неделя', 'Месяц']"
      size="sm"
    />
  </template>
  
  <SalesChart :data="salesData" :period="period" />
</DXChartContainer>
```

### Dashboard Widget

```vue
<DXDashboardWidget title="Аналитика">
  <DXChartContainer
    :legend="chartLegend"
    refreshable
    downloadable
    height="250px"
    @refresh="refreshData"
  >
    <AreaChart :data="analyticsData" />
  </DXChartContainer>
</DXDashboardWidget>
```

## See Also

- [DXDashboardWidget](./DXDashboardWidget.md)
- [DXStatCard](../molecules/DXStatCard.md)

