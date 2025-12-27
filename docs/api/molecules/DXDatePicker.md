# DXDatePicker

Компонент выбора даты с календарём и поддержкой диапазонов.

## Import

```javascript
import { DXDatePicker } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `Date\|String\|Array` | `null` | Выбранная дата (v-model) |
| `mode` | `String` | `'single'` | Режим: `'single'`, `'range'`, `'multiple'` |
| `format` | `String` | `'DD.MM.YYYY'` | Формат отображения даты |
| `placeholder` | `String` | `'Выберите дату'` | Placeholder |
| `label` | `String` | `''` | Лейбл поля |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `required` | `Boolean` | `false` | Обязательное поле |
| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |
| `minDate` | `Date\|String` | `null` | Минимальная дата |
| `maxDate` | `Date\|String` | `null` | Максимальная дата |
| `disabledDates` | `Array\|Function` | `null` | Отключенные даты |
| `firstDayOfWeek` | `Number` | `1` | Первый день недели (0=Вс, 1=Пн) |
| `locale` | `String` | `'ru'` | Локаль |
| `clearable` | `Boolean` | `true` | Показать кнопку очистки |
| `inline` | `Boolean` | `false` | Показать календарь inline |
| `showTodayButton` | `Boolean` | `true` | Показать кнопку "Сегодня" |
| `showWeekNumbers` | `Boolean` | `false` | Показать номера недель |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `Date\|Array` | Изменение даты |
| `change` | `Date\|Array` | Альтернативное событие |
| `open` | - | Открытие календаря |
| `close` | - | Закрытие календаря |
| `clear` | - | Очистка значения |
| `month-change` | `{ month, year }` | Смена месяца |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `header` | `{ month, year }` | Заголовок календаря |
| `day` | `{ date, selected, disabled }` | Кастомный рендер дня |
| `footer` | - | Футер календаря |

## Usage

### Basic

```vue
<DXDatePicker
  v-model="selectedDate"
  label="Дата рождения"
  placeholder="Выберите дату"
/>
```

### Date Range

```vue
<DXDatePicker
  v-model="dateRange"
  mode="range"
  label="Период"
  placeholder="Выберите период"
/>
```

### With Min/Max Dates

```vue
<DXDatePicker
  v-model="date"
  :minDate="new Date()"
  :maxDate="maxDate"
  label="Дата бронирования"
/>
```

### Disabled Dates

```vue
<DXDatePicker
  v-model="date"
  :disabledDates="[
    new Date('2024-01-01'),
    new Date('2024-12-31')
  ]"
/>

<!-- Or with function -->
<DXDatePicker
  v-model="date"
  :disabledDates="(date) => date.getDay() === 0 || date.getDay() === 6"
/>
```

### Inline Calendar

```vue
<DXDatePicker
  v-model="date"
  inline
/>
```

### With Week Numbers

```vue
<DXDatePicker
  v-model="date"
  showWeekNumbers
/>
```

### Custom Format

```vue
<DXDatePicker
  v-model="date"
  format="YYYY-MM-DD"
  placeholder="YYYY-MM-DD"
/>
```

### Multiple Dates

```vue
<DXDatePicker
  v-model="dates"
  mode="multiple"
  label="Выберите несколько дат"
/>
```

### With Quick Actions

```vue
<DXDatePicker v-model="dateRange" mode="range">
  <template #footer>
    <div class="flex gap-2 p-2 border-t">
      <DXButton size="sm" @click="setToday">Сегодня</DXButton>
      <DXButton size="sm" @click="setThisWeek">Эта неделя</DXButton>
      <DXButton size="sm" @click="setThisMonth">Этот месяц</DXButton>
    </div>
  </template>
</DXDatePicker>
```

### In Form

```vue
<DXFormControl
  label="Дата начала"
  required
  :error="errors.startDate"
>
  <DXDatePicker
    v-model="form.startDate"
    :minDate="new Date()"
  />
</DXFormControl>
```

## Date Format Tokens

| Token | Description | Example |
|-------|-------------|---------|
| `DD` | День (2 цифры) | 01, 15, 31 |
| `D` | День | 1, 15, 31 |
| `MM` | Месяц (2 цифры) | 01, 06, 12 |
| `M` | Месяц | 1, 6, 12 |
| `YYYY` | Год | 2024 |
| `YY` | Год (2 цифры) | 24 |

## See Also

- [DXTimePicker](./DXTimePicker.md)
- [DXInput](./DXInput.md)
- [DXFormControl](./DXFormControl.md)

