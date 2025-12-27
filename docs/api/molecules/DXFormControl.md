# DXFormControl

Обёртка для полей формы с лейблом, ошибками и вспомогательным текстом.

## Import

```javascript
import { DXFormControl } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `String` | `''` | Лейбл поля |
| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |
| `required` | `Boolean` | `false` | Пометка обязательного поля (*) |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `labelPosition` | `String` | `'top'` | Позиция лейбла: `'top'`, `'left'`, `'right'` |
| `labelWidth` | `String` | `'auto'` | Ширина лейбла (для position left/right) |
| `showOptional` | `Boolean` | `false` | Показывать "(опционально)" для необязательных |
| `id` | `String` | `auto` | ID для связи label и input |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Содержимое (input, select и т.д.) |
| `label` | Кастомный лейбл |
| `error` | Кастомное сообщение об ошибке |
| `helper` | Кастомный вспомогательный текст |

## Usage

### Basic

```vue
<DXFormControl label="Email" required>
  <DXInput v-model="email" type="email" />
</DXFormControl>
```

### With Error

```vue
<DXFormControl
  label="Пароль"
  required
  :error="errors.password"
>
  <DXInput v-model="password" type="password" />
</DXFormControl>
```

### With Helper Text

```vue
<DXFormControl
  label="Имя пользователя"
  helper="Только латинские буквы и цифры, 3-20 символов"
>
  <DXInput v-model="username" />
</DXFormControl>
```

### Label Positions

```vue
<!-- Top (default) -->
<DXFormControl label="Имя" labelPosition="top">
  <DXInput v-model="name" />
</DXFormControl>

<!-- Left -->
<DXFormControl label="Имя" labelPosition="left" labelWidth="120px">
  <DXInput v-model="name" />
</DXFormControl>

<!-- Right -->
<DXFormControl label="Имя" labelPosition="right" labelWidth="120px">
  <DXInput v-model="name" />
</DXFormControl>
```

### Optional Field

```vue
<DXFormControl label="Телефон" showOptional>
  <DXInput v-model="phone" />
</DXFormControl>
```

### With Custom Label

```vue
<DXFormControl>
  <template #label>
    <div class="flex items-center gap-2">
      <span>API Key</span>
      <DXTooltip content="Ключ для доступа к API">
        <DXIcon :icon="QuestionMarkCircleIcon" size="sm" />
      </DXTooltip>
    </div>
  </template>
  <DXCopyField :value="apiKey" />
</DXFormControl>
```

### With Custom Error

```vue
<DXFormControl label="Email" :error="errors.email">
  <DXInput v-model="email" />
  <template #error>
    <div class="flex items-center gap-1 text-rose-500">
      <DXIcon :icon="ExclamationCircleIcon" size="sm" />
      <span>{{ errors.email }}</span>
    </div>
  </template>
</DXFormControl>
```

### Complex Form Example

```vue
<form @submit.prevent="handleSubmit">
  <DXStack spacing="lg">
    <DXFormControl
      label="Имя"
      required
      :error="errors.name"
    >
      <DXInput v-model="form.name" placeholder="Введите имя" />
    </DXFormControl>

    <DXFormControl
      label="Email"
      required
      :error="errors.email"
      helper="На этот адрес будет отправлено подтверждение"
    >
      <DXInput v-model="form.email" type="email" />
    </DXFormControl>

    <DXFormControl label="Роль" required :error="errors.role">
      <DXSelect v-model="form.role" :options="roles" />
    </DXFormControl>

    <DXFormControl label="Примечание">
      <DXTextarea v-model="form.note" :rows="3" />
    </DXFormControl>

    <DXButton type="submit">Сохранить</DXButton>
  </DXStack>
</form>
```

## Accessibility

- Автоматически связывает `label` с полем через `for`/`id`
- Добавляет `aria-describedby` для helper и error
- Добавляет `aria-invalid="true"` при наличии ошибки

## See Also

- [DXFormLabel](../atoms/DXFormLabel.md)
- [DXInput](./DXInput.md)
- [DXInputGroup](./DXInputGroup.md)

