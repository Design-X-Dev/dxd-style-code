# DXSelect

Стандартный компонент выпадающего списка.

## Import

```javascript
import { DXSelect } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `String\|Number\|Array` | `null` | Выбранное значение (v-model) |
| `options` | `Array` | `[]` | Список опций |
| `placeholder` | `String` | `'Выберите...'` | Placeholder |
| `label` | `String` | `''` | Лейбл поля |
| `size` | `String` | `'md'` | Размер: `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `required` | `Boolean` | `false` | Обязательное поле |
| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |
| `multiple` | `Boolean` | `false` | Мультивыбор |
| `labelField` | `String` | `'label'` | Поле для отображения |
| `valueField` | `String` | `'value'` | Поле для значения |
| `prefixIcon` | `Object\|Function` | `null` | Иконка слева |
| `clearable` | `Boolean` | `false` | Кнопка очистки |

## Option Structure

```typescript
// Простой формат
type SimpleOption = string | number;

// Объектный формат
interface Option {
  value: string | number;
  label: string;
  disabled?: boolean;
  group?: string;  // Для группировки
}

// Группа опций
interface OptionGroup {
  label: string;    // Название группы
  options: Option[]; // Опции в группе
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `any` | Изменение выбора |
| `change` | `any` | Альтернативное событие |
| `focus` | `Event` | Фокус |
| `blur` | `Event` | Потеря фокуса |

## Slots

| Slot | Description |
|------|-------------|
| `prefix` | Контент перед select |

## Usage

### Basic

```vue
<DXSelect
  v-model="country"
  :options="['Россия', 'США', 'Германия', 'Франция']"
  label="Страна"
/>
```

### With Object Options

```vue
<DXSelect
  v-model="status"
  :options="[
    { value: 'active', label: 'Активный' },
    { value: 'inactive', label: 'Неактивный' },
    { value: 'pending', label: 'Ожидает' }
  ]"
  label="Статус"
/>
```

### With Placeholder

```vue
<DXSelect
  v-model="category"
  :options="categories"
  placeholder="Выберите категорию"
  label="Категория"
/>
```

### Sizes

```vue
<DXSelect size="xs" :options="options" v-model="val" />
<DXSelect size="sm" :options="options" v-model="val" />
<DXSelect size="md" :options="options" v-model="val" />
<DXSelect size="lg" :options="options" v-model="val" />
<DXSelect size="xl" :options="options" v-model="val" />
```

### With Icon

```vue
<DXSelect
  v-model="country"
  :options="countries"
  :prefixIcon="GlobeAltIcon"
  label="Страна"
/>
```

### With Validation

```vue
<DXSelect
  v-model="form.role"
  :options="roles"
  label="Роль"
  required
  :error="errors.role"
  helper="Выберите роль пользователя"
/>
```

### Disabled State

```vue
<DXSelect
  v-model="value"
  :options="options"
  disabled
  label="Отключено"
/>
```

### Disabled Options

```vue
<DXSelect
  v-model="selected"
  :options="[
    { value: 'a', label: 'Доступно' },
    { value: 'b', label: 'Недоступно', disabled: true },
    { value: 'c', label: 'Доступно' }
  ]"
/>
```

### Grouped Options

```vue
<DXSelect
  v-model="selected"
  :options="[
    {
      label: 'Фрукты',
      options: [
        { value: 'apple', label: 'Яблоко' },
        { value: 'banana', label: 'Банан' }
      ]
    },
    {
      label: 'Овощи',
      options: [
        { value: 'carrot', label: 'Морковь' },
        { value: 'tomato', label: 'Помидор' }
      ]
    }
  ]"
/>
```

### Multiple Select

```vue
<DXSelect
  v-model="selectedItems"
  :options="items"
  multiple
  label="Выберите несколько"
/>
```

### Clearable

```vue
<DXSelect
  v-model="selected"
  :options="options"
  clearable
  label="С очисткой"
/>
```

### In InputGroup

```vue
<DXInputGroup>
  <DXSelect v-model="protocol" :options="['http://', 'https://']" />
  <DXInput v-model="domain" placeholder="example.com" />
</DXInputGroup>
```

### In Form

```vue
<DXFormControl label="Отдел" required :error="errors.department">
  <DXSelect
    v-model="form.department"
    :options="departments"
    placeholder="Выберите отдел"
  />
</DXFormControl>
```

## Integration with InputGroup

При использовании внутри `DXInputGroup`:
- Размер наследуется от группы
- Состояние disabled наследуется от группы
- Скругление адаптируется в зависимости от позиции

## See Also

- [DXSearchSelect](./DXSearchSelect.md)
- [DXComboBox](./DXComboBox.md)
- [DXFormControl](./DXFormControl.md)

