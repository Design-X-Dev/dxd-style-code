# DXInput

Универсальный компонент текстового поля ввода.

## Import

```javascript
import { DXInput } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `String\|Number` | `''` | Значение (v-model) |
| `type` | `String` | `'text'` | Тип input: `'text'`, `'email'`, `'password'`, `'number'`, `'tel'`, `'url'`, `'search'` |
| `placeholder` | `String` | `''` | Placeholder |
| `label` | `String` | `''` | Лейбл поля |
| `size` | `String` | `'md'` | Размер: `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `readonly` | `Boolean` | `false` | Только для чтения |
| `required` | `Boolean` | `false` | Обязательное поле |
| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |
| `prefixIcon` | `Object\|Function` | `null` | Иконка слева |
| `suffixIcon` | `Object\|Function` | `null` | Иконка справа |
| `clearable` | `Boolean` | `false` | Показать кнопку очистки |
| `maxLength` | `Number` | `0` | Максимальная длина |
| `showCount` | `Boolean` | `false` | Показать счётчик символов |
| `autocomplete` | `String` | `'off'` | Значение autocomplete |
| `autofocus` | `Boolean` | `false` | Автофокус при монтировании |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `String\|Number` | Изменение значения |
| `input` | `Event` | Событие input |
| `change` | `Event` | Событие change |
| `focus` | `Event` | Получение фокуса |
| `blur` | `Event` | Потеря фокуса |
| `clear` | - | Очистка значения |
| `keydown` | `KeyboardEvent` | Нажатие клавиши |
| `keyup` | `KeyboardEvent` | Отпускание клавиши |

## Slots

| Slot | Description |
|------|-------------|
| `prefix` | Контент перед input (вместо prefixIcon) |
| `suffix` | Контент после input (вместо suffixIcon) |

## Usage

### Basic

```vue
<DXInput v-model="name" placeholder="Введите имя" />
```

### With Label

```vue
<DXInput
  v-model="email"
  label="Email"
  type="email"
  placeholder="example@mail.com"
/>
```

### With Icons

```vue
<DXInput
  v-model="search"
  :prefixIcon="MagnifyingGlassIcon"
  placeholder="Поиск..."
/>

<DXInput
  v-model="password"
  type="password"
  :suffixIcon="EyeIcon"
/>
```

### Sizes

```vue
<DXInput size="xs" placeholder="Extra Small" />
<DXInput size="sm" placeholder="Small" />
<DXInput size="md" placeholder="Medium (default)" />
<DXInput size="lg" placeholder="Large" />
<DXInput size="xl" placeholder="Extra Large" />
```

### States

```vue
<!-- Disabled -->
<DXInput v-model="value" disabled placeholder="Отключено" />

<!-- Readonly -->
<DXInput v-model="value" readonly />

<!-- With Error -->
<DXInput
  v-model="email"
  error="Введите корректный email"
  label="Email"
/>
```

### With Helper Text

```vue
<DXInput
  v-model="password"
  type="password"
  label="Пароль"
  helper="Минимум 8 символов"
/>
```

### Clearable

```vue
<DXInput
  v-model="search"
  clearable
  placeholder="Поиск..."
  @clear="handleClear"
/>
```

### With Character Count

```vue
<DXInput
  v-model="bio"
  :maxLength="200"
  showCount
  label="О себе"
/>
```

### Custom Slots

```vue
<DXInput v-model="amount">
  <template #prefix>
    <span class="text-slate-500">₽</span>
  </template>
  <template #suffix>
    <span class="text-xs text-slate-400">.00</span>
  </template>
</DXInput>
```

### Number Input

```vue
<DXInput
  v-model="quantity"
  type="number"
  :min="0"
  :max="100"
  :step="1"
/>
```

### In InputGroup

```vue
<DXInputGroup size="md">
  <DXInputAddon>https://</DXInputAddon>
  <DXInput v-model="domain" placeholder="example.com" />
  <DXButton>Проверить</DXButton>
</DXInputGroup>
```

## Integration with InputGroup

При использовании внутри `DXInputGroup`:
- Размер наследуется от группы
- Состояние disabled наследуется от группы
- Состояние error наследуется от группы
- Скругление адаптируется в зависимости от позиции

## See Also

- [DXInputGroup](./DXInputGroup.md)
- [DXPasswordInput](./DXPasswordInput.md)
- [DXTextarea](./DXTextarea.md)
- [DXFormControl](./DXFormControl.md)
