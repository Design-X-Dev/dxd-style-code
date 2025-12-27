# DXRadioGroup

Группа радио-кнопок с управлением выбором.

## Import

```javascript
import { DXRadioGroup } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `String\|Number\|Boolean` | `null` | Выбранное значение (v-model) |
| `options` | `Array` | `[]` | Массив опций |
| `name` | `String` | `auto` | Имя группы для form submit |
| `label` | `String` | `''` | Лейбл группы |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `orientation` | `String` | `'vertical'` | Ориентация: `'vertical'`, `'horizontal'` |
| `disabled` | `Boolean` | `false` | Отключить все опции |
| `required` | `Boolean` | `false` | Обязательное поле |
| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |

## Option Structure

```typescript
// Простой формат
type SimpleOption = string | number;

// Объектный формат
interface Option {
  value: string | number | boolean;
  label: string;
  description?: string;
  disabled?: boolean;
  icon?: Component;
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `any` | Изменение выбора |
| `change` | `any` | Альтернативное событие |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `default` | - | Кастомные DXRadio компоненты |
| `label` | `{ option }` | Кастомный лейбл опции |
| `option` | `{ option, selected }` | Полностью кастомная опция |

## Usage

### Basic with Options Array

```vue
<DXRadioGroup
  v-model="gender"
  :options="['Мужской', 'Женский']"
  label="Пол"
/>
```

### With Object Options

```vue
<DXRadioGroup
  v-model="role"
  :options="[
    { value: 'admin', label: 'Администратор' },
    { value: 'editor', label: 'Редактор' },
    { value: 'viewer', label: 'Читатель' }
  ]"
  label="Роль"
/>
```

### With Descriptions

```vue
<DXRadioGroup
  v-model="plan"
  :options="[
    { 
      value: 'free', 
      label: 'Бесплатный', 
      description: 'Базовые функции' 
    },
    { 
      value: 'pro', 
      label: 'Профессиональный', 
      description: 'Все функции + поддержка' 
    }
  ]"
/>
```

### Horizontal Layout

```vue
<DXRadioGroup
  v-model="priority"
  :options="['Низкий', 'Средний', 'Высокий']"
  orientation="horizontal"
  label="Приоритет"
/>
```

### With Disabled Options

```vue
<DXRadioGroup
  v-model="option"
  :options="[
    { value: 'a', label: 'Опция A' },
    { value: 'b', label: 'Опция B', disabled: true },
    { value: 'c', label: 'Опция C' }
  ]"
/>
```

### With Slot Children

```vue
<DXRadioGroup v-model="selected" label="Выберите вариант">
  <DXRadio value="opt1" label="Первый вариант" />
  <DXRadio value="opt2" label="Второй вариант" />
  <DXRadio value="opt3" label="Третий вариант" />
</DXRadioGroup>
```

### With Validation

```vue
<DXRadioGroup
  v-model="acceptTerms"
  :options="[
    { value: true, label: 'Принимаю условия' },
    { value: false, label: 'Не принимаю' }
  ]"
  required
  :error="errors.terms"
/>
```

### Sizes

```vue
<DXRadioGroup size="sm" :options="options" v-model="value" />
<DXRadioGroup size="md" :options="options" v-model="value" />
<DXRadioGroup size="lg" :options="options" v-model="value" />
```

### Custom Option Render

```vue
<DXRadioGroup v-model="color" :options="colors">
  <template #option="{ option, selected }">
    <div class="flex items-center gap-2">
      <div 
        :class="[
          'w-4 h-4 rounded-full border-2',
          selected ? 'border-slate-900' : 'border-slate-300'
        ]"
        :style="{ backgroundColor: option.value }"
      />
      <span>{{ option.label }}</span>
    </div>
  </template>
</DXRadioGroup>
```

### In Form

```vue
<DXFormControl label="Способ оплаты" required :error="errors.paymentMethod">
  <DXRadioGroup
    v-model="form.paymentMethod"
    :options="[
      { value: 'card', label: 'Банковская карта', icon: CreditCardIcon },
      { value: 'cash', label: 'Наличные', icon: BanknotesIcon },
      { value: 'qr', label: 'QR-код', icon: QrCodeIcon }
    ]"
    orientation="horizontal"
  />
</DXFormControl>
```

## Provide/Inject

DXRadioGroup использует Vue provide/inject для передачи контекста дочерним DXRadio:
- `radioGroup.name` - имя группы
- `radioGroup.modelValue` - текущее значение
- `radioGroup.disabled` - состояние disabled
- `radioGroup.size` - размер
- `radioGroup.change(value)` - функция изменения

## See Also

- [DXRadio](../atoms/DXRadio.md)
- [DXRadioCard](./DXRadioCard.md)
- [DXButtonGroup](./DXButtonGroup.md)

