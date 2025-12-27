# DXInputMask

Input с маской ввода для форматированных данных (телефон, дата, карта).

## Import

```javascript
import { DXInputMask } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `String` | `''` | Значение (v-model) |
| `mask` | `String` | `''` | Маска ввода |
| `placeholder` | `String` | `''` | Placeholder |
| `label` | `String` | `''` | Лейбл поля |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |
| `required` | `Boolean` | `false` | Обязательное поле |
| `showMask` | `Boolean` | `false` | Показывать маску в placeholder |
| `returnMasked` | `Boolean` | `false` | Возвращать значение с маской |
| `tokens` | `Object` | `default` | Кастомные токены маски |
| `prefixIcon` | `Object\|Function` | `null` | Иконка слева |
| `suffixIcon` | `Object\|Function` | `null` | Иконка справа |

## Default Mask Tokens

| Token | Pattern | Description |
|-------|---------|-------------|
| `#` | `[0-9]` | Только цифры |
| `A` | `[A-Za-z]` | Только буквы |
| `N` | `[A-Za-z0-9]` | Буквы и цифры |
| `X` | `.` | Любой символ |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `String` | Изменение значения |
| `complete` | `String` | Маска полностью заполнена |
| `focus` | `Event` | Получение фокуса |
| `blur` | `Event` | Потеря фокуса |

## Usage

### Phone Number

```vue
<DXInputMask
  v-model="phone"
  mask="+7 (###) ###-##-##"
  label="Телефон"
  placeholder="+7 (___) ___-__-__"
/>
```

### Credit Card

```vue
<DXInputMask
  v-model="cardNumber"
  mask="#### #### #### ####"
  label="Номер карты"
/>
```

### Date

```vue
<DXInputMask
  v-model="birthDate"
  mask="##.##.####"
  label="Дата рождения"
  placeholder="ДД.ММ.ГГГГ"
/>
```

### Time

```vue
<DXInputMask
  v-model="time"
  mask="##:##"
  label="Время"
  placeholder="ЧЧ:ММ"
/>
```

### Passport (Russia)

```vue
<DXInputMask
  v-model="passport"
  mask="## ## ######"
  label="Серия и номер паспорта"
/>
```

### INN (Individual)

```vue
<DXInputMask
  v-model="inn"
  mask="############"
  label="ИНН"
/>
```

### With Icon

```vue
<DXInputMask
  v-model="phone"
  mask="+7 (###) ###-##-##"
  :prefixIcon="PhoneIcon"
  label="Контактный телефон"
/>
```

### Show Mask in Placeholder

```vue
<DXInputMask
  v-model="code"
  mask="AA-####"
  :showMask="true"
/>
<!-- Показывает "AA-____" как placeholder -->
```

### Return Masked Value

```vue
<DXInputMask
  v-model="phone"
  mask="+7 (###) ###-##-##"
  :returnMasked="true"
/>
<!-- v-model будет содержать "+7 (999) 123-45-67" вместо "9991234567" -->
```

### Custom Tokens

```vue
<DXInputMask
  v-model="code"
  mask="HH-HH-HH"
  :tokens="{
    H: { pattern: /[0-9A-Fa-f]/ }
  }"
  label="Hex код"
/>
```

### On Complete Event

```vue
<DXInputMask
  v-model="phone"
  mask="+7 (###) ###-##-##"
  @complete="validatePhone"
/>

<script setup>
function validatePhone(value) {
  console.log('Phone complete:', value);
}
</script>
```

### With Validation

```vue
<DXInputMask
  v-model="phone"
  mask="+7 (###) ###-##-##"
  label="Телефон"
  required
  :error="errors.phone"
  helper="Введите номер мобильного телефона"
/>
```

## Common Masks

| Use Case | Mask |
|----------|------|
| Phone (RU) | `+7 (###) ###-##-##` |
| Phone (US) | `(###) ###-####` |
| Credit Card | `#### #### #### ####` |
| Date | `##.##.####` |
| Time | `##:##` |
| ZIP (RU) | `######` |
| ZIP (US) | `#####-####` |
| SSN | `###-##-####` |
| IP Address | `###.###.###.###` |

## See Also

- [DXInput](./DXInput.md)
- [DXFormControl](./DXFormControl.md)
- [DXPhoneInput](./DXPhoneInput.md)

