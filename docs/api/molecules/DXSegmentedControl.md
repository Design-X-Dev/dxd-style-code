# DXSegmentedControl

Сегментированный переключатель для выбора между несколькими опциями.

## Import

```javascript
import { DXSegmentedControl } from "dxd-style-code";
```

## Props

| Prop                | Type                      | Default    | Description                                                  |
| ------------------- | ------------------------- | ---------- | ------------------------------------------------------------ |
| `modelValue`        | `String\|Number\|Boolean` | `null`     | Выбранное значение (v-model)                                 |
| `options`           | `Array`                   | `required` | Список опций                                                 |
| `label`             | `String`                  | `''`       | Лейбл над контролом                                          |
| `iconAnimation`     | `String`                  | `'none'`   | Анимация иконок: `'none'`, `'wiggle'`, `'scale'`, `'rotate'` |
| `animateActiveOnly` | `Boolean`                 | `true`     | Анимировать только активную иконку                           |
| `disabled`          | `Boolean`                 | `false`    | Отключенное состояние                                        |
| `scrollable`        | `Boolean`                 | `false`    | Режим прокрутки с drag-to-scroll                             |
| `maxWidth`          | `String`                  | `null`     | Максимальная ширина при scrollable (`'300px'`, `'100%'`)     |
| `showFade`          | `Boolean`                 | `true`     | Показывать градиенты размытия по краям                       |

## Option Structure

```typescript
interface Option {
  value: string | number | boolean;
  label?: string;
  icon?: Component;
  count?: number; // Счётчик (badge)
}
```

## Events

| Event               | Payload | Description      |
| ------------------- | ------- | ---------------- |
| `update:modelValue` | `any`   | Изменение выбора |

## Usage

### Basic

```vue
<DXSegmentedControl
  v-model="view"
  :options="[
    { value: 'list', label: 'Список' },
    { value: 'grid', label: 'Сетка' },
    { value: 'table', label: 'Таблица' },
  ]"
/>
```

### With Icons

```vue
<DXSegmentedControl
  v-model="view"
  :options="[
    { value: 'list', label: 'Список', icon: ListBulletIcon },
    { value: 'grid', label: 'Сетка', icon: Squares2X2Icon },
  ]"
/>
```

### Icon Only

```vue
<DXSegmentedControl
  v-model="alignment"
  :options="[
    { value: 'left', icon: Bars3BottomLeftIcon },
    { value: 'center', icon: Bars3Icon },
    { value: 'right', icon: Bars3BottomRightIcon },
  ]"
/>
```

### With Count Badge

```vue
<DXSegmentedControl
  v-model="filter"
  :options="[
    { value: 'all', label: 'Все', count: 156 },
    { value: 'active', label: 'Активные', count: 42 },
    { value: 'completed', label: 'Завершённые', count: 114 },
  ]"
/>
```

### With Icon Animation

```vue
<DXSegmentedControl
  v-model="selected"
  :options="options"
  iconAnimation="wiggle"
/>

<!-- Анимация для всех иконок -->
<DXSegmentedControl
  v-model="selected"
  :options="options"
  iconAnimation="scale"
  :animateActiveOnly="false"
/>
```

### Scrollable Mode (New!)

Режим прокрутки без скроллбара с поддержкой drag-to-scroll (перетаскивание мышью).

```vue
<!-- Базовый scrollable -->
<DXSegmentedControl v-model="day" :options="weekDays" scrollable />

<!-- С ограниченной шириной -->
<DXSegmentedControl
  v-model="month"
  :options="[
    { value: 1, label: 'Январь' },
    { value: 2, label: 'Февраль' },
    { value: 3, label: 'Март' },
    { value: 4, label: 'Апрель' },
    { value: 5, label: 'Май' },
    { value: 6, label: 'Июнь' },
    { value: 7, label: 'Июль' },
    { value: 8, label: 'Август' },
    { value: 9, label: 'Сентябрь' },
    { value: 10, label: 'Октябрь' },
    { value: 11, label: 'Ноябрь' },
    { value: 12, label: 'Декабрь' },
  ]"
  scrollable
  maxWidth="400px"
/>
```

### Scrollable with Responsive Width

```vue
<DXSegmentedControl
  v-model="category"
  :options="manyCategories"
  scrollable
  maxWidth="100%"
/>
```

#### Scrollable Features:

- **Скрытый скроллбар** - прокрутка работает, но скроллбар не отображается
- **Drag-to-scroll** - зажмите и перетащите мышью для прокрутки
- **Автоцентрирование** - при выборе элемент автоматически центрируется
- **Защита от случайных кликов** - если был drag, клик не срабатывает
- **Градиенты по краям** - визуальная индикация возможности прокрутки (исчезают на краях)

### Without Fade Gradients

```vue
<DXSegmentedControl
  v-model="month"
  :options="months"
  scrollable
  maxWidth="300px"
  :showFade="false"
/>
```

### Disabled

```vue
<DXSegmentedControl v-model="value" :options="options" disabled />
```

### With Label

```vue
<DXSegmentedControl
  v-model="period"
  label="Период отчёта"
  :options="[
    { value: 'day', label: 'День' },
    { value: 'week', label: 'Неделя' },
    { value: 'month', label: 'Месяц' },
  ]"
/>
```

### In Toolbar

```vue
<div class="flex items-center justify-between p-4 border-b">
  <h2>Заказы</h2>
  <DXSegmentedControl
    v-model="filter"
    :options="[
      { value: 'all', label: 'Все' },
      { value: 'active', label: 'Активные' },
      { value: 'completed', label: 'Завершённые' }
    ]"
  />
</div>
```

### Date Picker Tabs

```vue
<DXSegmentedControl
  v-model="selectedDate"
  :options="
    dates.map((d) => ({
      value: d.toISOString(),
      label: formatDate(d),
    }))
  "
  scrollable
  maxWidth="300px"
/>
```

## Visual Features

- **Floating indicator** - плавный индикатор перемещается к выбранному элементу
- **Smooth transitions** - анимация длительностью 200ms
- **Icon animations** - поддержка анимаций для иконок

## Accessibility

- Поддерживает клавиатурную навигацию
- Hover и focus стили для каждого элемента
- Атрибут `disabled` отключает взаимодействие

## See Also

- [DXButtonGroup](./DXButtonGroup.md)
- [DXTabs](../organisms/DXTabs.md)
- [DXFilterGroup](./DXFilterGroup.md)
