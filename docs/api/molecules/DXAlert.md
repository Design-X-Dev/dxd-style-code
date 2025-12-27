# DXAlert

Компонент для отображения информационных, предупреждающих и ошибочных сообщений.

## Import

```javascript
import { DXAlert } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `String` | `'info'` | Тип алерта: `'info'`, `'success'`, `'warning'`, `'danger'` |
| `title` | `String` | `''` | Заголовок алерта |
| `message` | `String` | `''` | Основной текст сообщения |
| `icon` | `Object\|Function` | `null` | Кастомная иконка (HeroIcon) |
| `showIcon` | `Boolean` | `true` | Показывать иконку |
| `dismissible` | `Boolean` | `false` | Показать кнопку закрытия |
| `variant` | `String` | `'solid'` | Вариант отображения: `'solid'`, `'outline'`, `'ghost'` |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `rounded` | `String` | `'md'` | Скругление: `'none'`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'full'` |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `dismiss` | - | Клик по кнопке закрытия |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Контент сообщения (альтернатива prop message) |
| `icon` | Кастомная иконка |
| `title` | Кастомный заголовок |
| `actions` | Действия справа от сообщения |

## Usage

### Basic Types

```vue
<DXAlert type="info" title="Информация" message="Это информационное сообщение" />
<DXAlert type="success" title="Успех" message="Операция выполнена успешно" />
<DXAlert type="warning" title="Внимание" message="Требуется ваше внимание" />
<DXAlert type="danger" title="Ошибка" message="Произошла ошибка" />
```

### Dismissible Alert

```vue
<DXAlert
  type="info"
  title="Уведомление"
  message="Это уведомление можно закрыть"
  dismissible
  @dismiss="handleDismiss"
/>
```

### Variants

```vue
<DXAlert type="success" variant="solid" message="Solid вариант" />
<DXAlert type="success" variant="outline" message="Outline вариант" />
<DXAlert type="success" variant="ghost" message="Ghost вариант" />
```

### With Actions

```vue
<DXAlert type="warning" title="Подтвердите действие">
  Вы уверены, что хотите продолжить?
  
  <template #actions>
    <DXButton size="sm" variant="ghost" @click="cancel">Отмена</DXButton>
    <DXButton size="sm" @click="confirm">Подтвердить</DXButton>
  </template>
</DXAlert>
```

### With Slot Content

```vue
<DXAlert type="info" title="Подробности">
  <ul>
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
  </ul>
</DXAlert>
```

## Type Icons (Default)

- `info` - InformationCircleIcon (синий)
- `success` - CheckCircleIcon (зелёный)
- `warning` - ExclamationTriangleIcon (жёлтый)
- `danger` - XCircleIcon (красный)

## See Also

- [DXToast](../atoms/DXToast.md)
- [DXValidationIcon](./DXValidationIcon.md)

