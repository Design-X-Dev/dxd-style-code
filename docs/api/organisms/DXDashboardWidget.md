# DXDashboardWidget

Виджет для дашборда с заголовком, действиями и контентом.

## Import

```javascript
import { DXDashboardWidget } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `String` | `''` | Заголовок виджета |
| `subtitle` | `String` | `''` | Подзаголовок |
| `icon` | `Object\|Function` | `null` | Иконка в заголовке |
| `loading` | `Boolean` | `false` | Состояние загрузки |
| `error` | `String` | `''` | Сообщение об ошибке |
| `collapsible` | `Boolean` | `false` | Можно сворачивать |
| `collapsed` | `Boolean` | `false` | Свёрнут (v-model:collapsed) |
| `removable` | `Boolean` | `false` | Можно удалить |
| `refreshable` | `Boolean` | `false` | Можно обновить |
| `padding` | `String` | `'md'` | Отступы контента |
| `minHeight` | `String` | `null` | Минимальная высота |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:collapsed` | `Boolean` | Сворачивание/разворачивание |
| `refresh` | - | Клик по кнопке обновления |
| `remove` | - | Клик по кнопке удаления |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Контент виджета |
| `header` | Кастомный header |
| `actions` | Действия в header |
| `footer` | Футер виджета |
| `loading` | Состояние загрузки |
| `error` | Состояние ошибки |

## Usage

### Basic

```vue
<DXDashboardWidget title="Статистика">
  <DXStatCard
    title="Продажи"
    value="$12,456"
    :trend="12.5"
  />
</DXDashboardWidget>
```

### With Icon and Subtitle

```vue
<DXDashboardWidget
  title="Активность пользователей"
  subtitle="За последние 7 дней"
  :icon="ChartBarIcon"
>
  <UserActivityChart :data="activityData" />
</DXDashboardWidget>
```

### Loading State

```vue
<DXDashboardWidget
  title="Данные"
  :loading="isLoading"
>
  <template #loading>
    <div class="flex items-center justify-center h-48">
      <DXLoader size="lg" />
    </div>
  </template>
  
  <DataContent v-if="!isLoading" :data="data" />
</DXDashboardWidget>
```

### With Error

```vue
<DXDashboardWidget
  title="API Данные"
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
  
  <DataContent v-if="!errorMessage" :data="data" />
</DXDashboardWidget>
```

### Collapsible

```vue
<DXDashboardWidget
  title="Детальная статистика"
  collapsible
  v-model:collapsed="isCollapsed"
>
  <DetailedStats :data="data" />
</DXDashboardWidget>
```

### With Actions

```vue
<DXDashboardWidget
  title="Заказы"
  refreshable
  @refresh="loadOrders"
>
  <template #actions>
    <DXDropdown>
      <template #trigger>
        <DXIcon :icon="EllipsisVerticalIcon" />
      </template>
      <DXDropdownItem @click="exportData">Экспорт</DXDropdownItem>
      <DXDropdownItem @click="openSettings">Настройки</DXDropdownItem>
    </DXDropdown>
  </template>
  
  <OrdersList :orders="orders" />
</DXDashboardWidget>
```

### Removable

```vue
<DXDashboardWidget
  title="Виджет"
  removable
  @remove="removeWidget"
>
  <WidgetContent />
</DXDashboardWidget>
```

### With Footer

```vue
<DXDashboardWidget title="Последние заказы">
  <OrdersTable :data="recentOrders" />
  
  <template #footer>
    <DXLink to="/orders">Все заказы →</DXLink>
  </template>
</DXDashboardWidget>
```

### Chart Widget

```vue
<DXDashboardWidget
  title="Продажи по месяцам"
  :icon="ChartBarIcon"
  refreshable
  minHeight="300px"
  @refresh="loadChartData"
>
  <SalesChart :data="salesData" />
</DXDashboardWidget>
```

## See Also

- [DXDashboardGrid](./DXDashboardGrid.md)
- [DXStatCard](../molecules/DXStatCard.md)
- [DXCard](../atoms/DXCard.md)

