# DXStatCard

Карточка для отображения статистических данных с трендом.

## Import

```javascript
import { DXStatCard } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `String` | `''` | Заголовок метрики |
| `value` | `String\|Number` | `''` | Значение метрики |
| `previousValue` | `Number` | `null` | Предыдущее значение для расчёта тренда |
| `trend` | `Number` | `null` | Процент изменения (альтернатива previousValue) |
| `trendDirection` | `String` | `'auto'` | Направление: `'auto'`, `'up'`, `'down'`, `'neutral'` |
| `trendLabel` | `String` | `''` | Текст тренда (например, "vs last month") |
| `icon` | `Object\|Function` | `null` | Иконка |
| `iconColor` | `String` | `'default'` | Цвет иконки: `'default'`, `'primary'`, `'success'`, `'warning'`, `'danger'` |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'bordered'`, `'filled'` |
| `loading` | `Boolean` | `false` | Состояние загрузки |
| `prefix` | `String` | `''` | Префикс значения (например, "$") |
| `suffix` | `String` | `''` | Суффикс значения (например, "%") |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `click` | `Event` | Клик по карточке |

## Slots

| Slot | Description |
|------|-------------|
| `icon` | Кастомная иконка |
| `value` | Кастомное значение |
| `trend` | Кастомный тренд |
| `footer` | Футер карточки |

## Usage

### Basic

```vue
<DXStatCard
  title="Выручка"
  value="$12,456"
  :trend="12.5"
  trendLabel="vs прошлый месяц"
/>
```

### With Icon

```vue
<DXStatCard
  title="Пользователи"
  value="1,234"
  :icon="UsersIcon"
  :trend="8.3"
/>
```

### With Previous Value (Auto Trend)

```vue
<DXStatCard
  title="Продажи"
  :value="1500"
  :previousValue="1200"
  prefix="$"
/>
<!-- Автоматически покажет +25% -->
```

### Negative Trend

```vue
<DXStatCard
  title="Возвраты"
  value="23"
  :trend="-5.2"
  trendLabel="vs прошлая неделя"
/>
```

### Sizes

```vue
<DXStatCard size="sm" title="Small" value="123" />
<DXStatCard size="md" title="Medium" value="456" />
<DXStatCard size="lg" title="Large" value="789" />
```

### Icon Colors

```vue
<DXStatCard title="Успех" value="95%" :icon="CheckIcon" iconColor="success" />
<DXStatCard title="Внимание" value="12" :icon="ExclamationIcon" iconColor="warning" />
<DXStatCard title="Ошибки" value="3" :icon="XMarkIcon" iconColor="danger" />
```

### Loading State

```vue
<DXStatCard
  title="Загрузка..."
  loading
/>
```

### With Prefix/Suffix

```vue
<DXStatCard
  title="Средний чек"
  value="2,345"
  prefix="₽"
/>

<DXStatCard
  title="Конверсия"
  value="4.5"
  suffix="%"
/>
```

### With Footer

```vue
<DXStatCard title="Заказы" value="156">
  <template #footer>
    <DXLink href="/orders">Посмотреть все →</DXLink>
  </template>
</DXStatCard>
```

### Dashboard Grid

```vue
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <DXStatCard
    title="Выручка"
    value="$45,231"
    :trend="12.5"
    :icon="CurrencyDollarIcon"
    iconColor="success"
  />
  <DXStatCard
    title="Заказы"
    value="356"
    :trend="8.2"
    :icon="ShoppingBagIcon"
    iconColor="primary"
  />
  <DXStatCard
    title="Клиенты"
    value="2,103"
    :trend="3.1"
    :icon="UsersIcon"
  />
  <DXStatCard
    title="Конверсия"
    value="3.24%"
    :trend="-0.5"
    :icon="ChartBarIcon"
    iconColor="warning"
  />
</div>
```

### Clickable

```vue
<DXStatCard
  title="Активные задачи"
  value="12"
  class="cursor-pointer hover:shadow-md transition-shadow"
  @click="goToTasks"
/>
```

### Custom Value Format

```vue
<DXStatCard title="Средняя оценка">
  <template #value>
    <div class="flex items-center gap-2">
      <span class="text-3xl font-bold">4.8</span>
      <DXRating :modelValue="4.8" readonly size="sm" />
    </div>
  </template>
</DXStatCard>
```

### With Sparkline

```vue
<DXStatCard title="Продажи" value="$12,456">
  <template #footer>
    <div class="h-12">
      <SparklineChart :data="salesData" />
    </div>
  </template>
</DXStatCard>
```

## See Also

- [DXCard](../atoms/DXCard.md)
- [DXProgress](../atoms/DXProgress.md)
- [DXSkeleton](../atoms/DXSkeleton.md)

