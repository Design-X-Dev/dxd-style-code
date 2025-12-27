# DXPasswordInput

Input для ввода пароля с переключателем видимости.

## Import

```javascript
import { DXPasswordInput } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `String` | `''` | Значение (v-model) |
| `placeholder` | `String` | `''` | Placeholder |
| `label` | `String` | `''` | Лейбл поля |
| `size` | `String` | `'md'` | Размер: `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `required` | `Boolean` | `false` | Обязательное поле |
| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |
| `showToggle` | `Boolean` | `true` | Показать кнопку переключения |
| `defaultVisible` | `Boolean` | `false` | Показать пароль по умолчанию |
| `autocomplete` | `String` | `'current-password'` | Значение autocomplete |
| `showStrength` | `Boolean` | `false` | Показать индикатор силы |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `String` | Изменение значения |
| `visibility-change` | `Boolean` | Изменение видимости пароля |
| `strength-change` | `Object` | Изменение силы пароля |
| `focus` | `Event` | Получение фокуса |
| `blur` | `Event` | Потеря фокуса |

## Slots

| Slot | Description |
|------|-------------|
| `toggle` | Кастомная кнопка переключения |
| `strength` | Кастомный индикатор силы |

## Usage

### Basic

```vue
<DXPasswordInput
  v-model="password"
  label="Пароль"
  placeholder="Введите пароль"
/>
```

### With Helper

```vue
<DXPasswordInput
  v-model="password"
  label="Пароль"
  helper="Минимум 8 символов, включая цифры и спецсимволы"
/>
```

### With Error

```vue
<DXPasswordInput
  v-model="password"
  label="Пароль"
  :error="errors.password"
/>
```

### With Strength Indicator

```vue
<DXPasswordInput
  v-model="password"
  label="Пароль"
  showStrength
  @strength-change="handleStrength"
/>

<script setup>
function handleStrength({ score, label }) {
  // score: 0-4
  // label: 'Очень слабый', 'Слабый', 'Средний', 'Сильный', 'Очень сильный'
  console.log('Strength:', label);
}
</script>
```

### Sizes

```vue
<DXPasswordInput size="sm" v-model="password" />
<DXPasswordInput size="md" v-model="password" />
<DXPasswordInput size="lg" v-model="password" />
```

### Without Toggle

```vue
<DXPasswordInput
  v-model="password"
  :showToggle="false"
  label="PIN-код"
/>
```

### Initially Visible

```vue
<DXPasswordInput
  v-model="password"
  :defaultVisible="true"
  label="Показать пароль"
/>
```

### Registration Form

```vue
<DXFormControl label="Новый пароль" required :error="errors.password">
  <DXPasswordInput
    v-model="form.password"
    autocomplete="new-password"
    showStrength
    helper="Минимум 8 символов"
  />
</DXFormControl>

<DXFormControl label="Подтверждение пароля" required :error="errors.confirmPassword">
  <DXPasswordInput
    v-model="form.confirmPassword"
    autocomplete="new-password"
  />
</DXFormControl>
```

### Custom Toggle Button

```vue
<DXPasswordInput v-model="password">
  <template #toggle="{ visible, toggle }">
    <button @click="toggle" class="text-slate-500 hover:text-slate-700">
      {{ visible ? 'Скрыть' : 'Показать' }}
    </button>
  </template>
</DXPasswordInput>
```

## Password Strength Levels

| Score | Label | Color |
|-------|-------|-------|
| 0 | Очень слабый | red |
| 1 | Слабый | orange |
| 2 | Средний | yellow |
| 3 | Сильный | lime |
| 4 | Очень сильный | green |

## See Also

- [DXInput](./DXInput.md)
- [DXFormControl](./DXFormControl.md)

