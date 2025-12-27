# DXTimePicker

Компонент выбора времени с поддержкой 12/24-часового формата.

## Import

```javascript
import { DXTimePicker } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `String` | `null` | Значение времени (v-model) в формате HH:mm или HH:mm:ss |
| `format` | `String` | `'24h'` | Формат: `'12h'`, `'24h'` |
| `showSeconds` | `Boolean` | `false` | Показывать секунды |
| `placeholder` | `String` | `''` | Placeholder |
| `label` | `String` | `''` | Лейбл поля |
| `helper` | `String` | `''` | Вспомогательный текст |
| `error` | `String` | `''` | Текст ошибки |
| `required` | `Boolean` | `false` | Обязательное поле |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `size` | `String` | `'md'` | Размер: `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `minTime` | `String` | `null` | Минимальное время |
| `maxTime` | `String` | `null` | Максимальное время |
| `showDropdown` | `Boolean` | `true` | Показывать dropdown для выбора |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `String` | Изменение значения |
| `change` | `String` | Альтернативное событие |
| `focus` | `Event` | Фокус на input |
| `blur` | `Event` | Потеря фокуса |

## Usage

### Basic

```vue
<DXTimePicker
  v-model="time"
  label="Время"
/>
```

### 12-Hour Format

```vue
<DXTimePicker
  v-model="time"
  format="12h"
  label="Время встречи"
/>
<!-- Отображает: 02:30 PM -->
```

### With Seconds

```vue
<DXTimePicker
  v-model="time"
  showSeconds
  label="Точное время"
/>
<!-- Формат: HH:mm:ss -->
```

### With Min/Max Time

```vue
<DXTimePicker
  v-model="time"
  minTime="09:00"
  maxTime="18:00"
  label="Рабочие часы"
  helper="Выберите время с 9:00 до 18:00"
/>
```

### Sizes

```vue
<DXTimePicker size="sm" v-model="time" />
<DXTimePicker size="md" v-model="time" />
<DXTimePicker size="lg" v-model="time" />
```

### With Validation

```vue
<DXTimePicker
  v-model="form.startTime"
  label="Время начала"
  required
  :error="errors.startTime"
/>
```

### Without Dropdown

```vue
<DXTimePicker
  v-model="time"
  :showDropdown="false"
  label="Введите время"
/>
<!-- Только ручной ввод -->
```

### Time Range

```vue
<div class="flex gap-4 items-end">
  <DXTimePicker
    v-model="startTime"
    label="С"
  />
  <span class="pb-3">—</span>
  <DXTimePicker
    v-model="endTime"
    :minTime="startTime"
    label="До"
  />
</div>
```

### In Form

```vue
<DXFormControl
  label="Время доставки"
  required
  :error="errors.deliveryTime"
>
  <DXTimePicker
    v-model="form.deliveryTime"
    minTime="10:00"
    maxTime="22:00"
    placeholder="Выберите время"
  />
</DXFormControl>
```

### With Date Picker

```vue
<div class="flex gap-4">
  <DXDatePicker
    v-model="date"
    label="Дата"
    class="flex-1"
  />
  <DXTimePicker
    v-model="time"
    label="Время"
  />
</div>
```

### Appointment Booking

```vue
<div class="space-y-4">
  <DXDatePicker
    v-model="appointmentDate"
    label="Дата записи"
    :minDate="new Date()"
  />
  
  <DXTimePicker
    v-model="appointmentTime"
    label="Время записи"
    minTime="09:00"
    maxTime="17:00"
    format="24h"
    helper="Доступные слоты: 9:00 - 17:00"
  />
</div>
```

## Time Format

| Format | Input Example | Display |
|--------|---------------|---------|
| 24h | `14:30` | `14:30` |
| 24h + seconds | `14:30:45` | `14:30:45` |
| 12h | `14:30` | `02:30 PM` |
| 12h + seconds | `14:30:45` | `02:30:45 PM` |

## Dropdown Options

- **Часы (24h)**: 0-23
- **Часы (12h)**: 1-12 + AM/PM
- **Минуты**: 0, 5, 10, ..., 55 (шаг 5)
- **Секунды**: 0, 5, 10, ..., 55 (шаг 5)

## See Also

- [DXDatePicker](./DXDatePicker.md)
- [DXInput](./DXInput.md)
- [DXFormControl](./DXFormControl.md)

