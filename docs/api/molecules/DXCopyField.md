# DXCopyField

Поле с кнопкой для копирования значения в буфер обмена.

## Import

```javascript
import { DXCopyField } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `String` | `''` | Значение для копирования |
| `label` | `String` | `''` | Лейбл поля |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'outline'`, `'ghost'` |
| `truncate` | `Boolean` | `true` | Обрезать длинный текст |
| `showTooltip` | `Boolean` | `true` | Показать tooltip при копировании |
| `successText` | `String` | `'Скопировано!'` | Текст успеха |
| `buttonText` | `String` | `''` | Текст кнопки (по умолчанию иконка) |
| `disabled` | `Boolean` | `false` | Отключенное состояние |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `copy` | `String` | Значение скопировано в буфер |
| `error` | `Error` | Ошибка копирования |

## Slots

| Slot | Description |
|------|-------------|
| `prefix` | Контент перед значением |
| `suffix` | Контент после значения (перед кнопкой) |
| `button` | Кастомная кнопка копирования |

## Usage

### Basic

```vue
<DXCopyField value="https://example.com/invite/abc123" />
```

### With Label

```vue
<DXCopyField
  label="Ссылка для приглашения"
  value="https://example.com/invite/abc123"
/>
```

### API Key

```vue
<DXCopyField
  label="API Key"
  value="sk-1234567890abcdef"
  variant="outline"
/>
```

### With Prefix

```vue
<DXCopyField value="user@example.com">
  <template #prefix>
    <DXIcon :icon="EnvelopeIcon" size="sm" class="text-slate-400" />
  </template>
</DXCopyField>
```

### Sizes

```vue
<DXCopyField size="sm" value="Маленький" />
<DXCopyField size="md" value="Средний" />
<DXCopyField size="lg" value="Большой" />
```

### With Button Text

```vue
<DXCopyField
  value="promo2024"
  buttonText="Копировать код"
/>
```

### Custom Success Message

```vue
<DXCopyField
  value="ABC-123-XYZ"
  successText="Код скопирован в буфер!"
  @copy="showNotification"
/>
```

### In Form

```vue
<DXFormControl label="Реферальная ссылка">
  <DXCopyField
    :value="`https://app.example.com/ref/${userId}`"
    @copy="trackCopy"
  />
</DXFormControl>
```

### Without Truncation

```vue
<DXCopyField
  :truncate="false"
  value="Это очень длинное значение которое не будет обрезаться и покажется полностью"
/>
```

## Accessibility

- Кнопка имеет `aria-label` для screen readers
- Поддерживает клавиатурную навигацию
- Уведомляет о результате через `aria-live`

## See Also

- [DXInput](./DXInput.md)
- [DXButton](../atoms/DXButton.md)
- [DXTooltip](../atoms/DXTooltip.md)

