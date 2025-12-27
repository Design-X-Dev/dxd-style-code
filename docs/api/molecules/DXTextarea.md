# DXTextarea

Многострочное текстовое поле ввода.

## Import

```javascript
import { DXTextarea } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `String` | `''` | Значение (v-model) |
| `placeholder` | `String` | `''` | Placeholder |
| `rows` | `Number` | `3` | Количество строк |
| `label` | `String` | `''` | Лейбл поля |
| `required` | `Boolean` | `false` | Обязательное поле |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |
| `prefixIcon` | `Object\|Function` | `null` | Иконка слева (верхний угол) |
| `suffixIcon` | `Object\|Function` | `null` | Иконка справа (верхний угол) |
| `maxLength` | `Number` | `0` | Максимальная длина |
| `showCount` | `Boolean` | `false` | Показать счётчик символов |
| `autoResize` | `Boolean` | `false` | Автоматическое изменение высоты |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `String` | Изменение значения |
| `input` | `Event` | Событие input |
| `focus` | `Event` | Получение фокуса |
| `blur` | `Event` | Потеря фокуса |

## Usage

### Basic

```vue
<DXTextarea
  v-model="description"
  placeholder="Введите описание..."
/>
```

### With Label

```vue
<DXTextarea
  v-model="bio"
  label="О себе"
  placeholder="Расскажите о себе..."
/>
```

### With Rows

```vue
<DXTextarea
  v-model="content"
  :rows="5"
  label="Содержание"
/>
```

### With Character Count

```vue
<DXTextarea
  v-model="message"
  :maxLength="500"
  showCount
  label="Сообщение"
/>
<!-- Показывает: 125/500 -->
```

### Auto Resize

```vue
<DXTextarea
  v-model="notes"
  autoResize
  :rows="2"
  placeholder="Начните печатать..."
/>
```

### With Validation

```vue
<DXTextarea
  v-model="form.comment"
  label="Комментарий"
  required
  :error="errors.comment"
  helper="Минимум 10 символов"
/>
```

### Disabled

```vue
<DXTextarea
  v-model="readonlyText"
  disabled
  label="Только для чтения"
/>
```

### With Icons

```vue
<DXTextarea
  v-model="notes"
  :prefixIcon="PencilIcon"
  label="Заметки"
/>
```

### In Form

```vue
<DXFormControl
  label="Описание товара"
  required
  :error="errors.description"
>
  <DXTextarea
    v-model="form.description"
    :rows="4"
    :maxLength="1000"
    showCount
    placeholder="Опишите товар..."
  />
</DXFormControl>
```

### Code Editor Style

```vue
<DXTextarea
  v-model="code"
  :rows="10"
  class="font-mono text-sm"
  placeholder="// Введите код..."
/>
```

### In InputGroup

```vue
<DXInputGroup>
  <DXTextarea
    v-model="message"
    :rows="3"
    placeholder="Напишите сообщение..."
  />
</DXInputGroup>
```

### Message Input

```vue
<div class="flex gap-2">
  <DXTextarea
    v-model="message"
    :rows="1"
    autoResize
    placeholder="Написать сообщение..."
    class="flex-1"
    @keydown.enter.exact="sendMessage"
  />
  <DXButton @click="sendMessage">
    <DXIcon :icon="PaperAirplaneIcon" />
  </DXButton>
</div>
```

## Integration with InputGroup

При использовании внутри `DXInputGroup`:
- Скругление адаптируется в зависимости от позиции addon

## Accessibility

- Связывает `label` с `textarea` через `id`
- `aria-describedby` для helper и error
- `aria-invalid` при наличии ошибки

## See Also

- [DXInput](./DXInput.md)
- [DXFormControl](./DXFormControl.md)
- [DXFormLabel](../atoms/DXFormLabel.md)

