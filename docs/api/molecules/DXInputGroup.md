# DXInputGroup

Группировка input-элементов с аддонами (префиксы, суффиксы, кнопки).

## Import

```javascript
import { DXInputGroup } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `String` | `'md'` | Размер: `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `disabled` | `Boolean` | `false` | Отключить все элементы |
| `error` | `Boolean` | `false` | Состояние ошибки для всей группы |
| `fullWidth` | `Boolean` | `true` | Растянуть на всю ширину |
| `direction` | `String` | `'horizontal'` | Направление: `'horizontal'`, `'vertical'` |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Элементы группы (Input, Addon, Button) |

## Usage

### Basic with Addon

```vue
<DXInputGroup>
  <DXInputAddon>@</DXInputAddon>
  <DXInput v-model="username" placeholder="username" />
</DXInputGroup>
```

### URL Input

```vue
<DXInputGroup>
  <DXInputAddon>https://</DXInputAddon>
  <DXInput v-model="domain" placeholder="example.com" />
</DXInputGroup>
```

### With Button

```vue
<DXInputGroup>
  <DXInput v-model="email" placeholder="Email для подписки" />
  <DXButton>Подписаться</DXButton>
</DXInputGroup>
```

### With Both Addons

```vue
<DXInputGroup>
  <DXInputAddon>
    <DXIcon :icon="CurrencyDollarIcon" size="sm" />
  </DXInputAddon>
  <DXInput v-model="price" type="number" placeholder="0.00" />
  <DXInputAddon>.00</DXInputAddon>
</DXInputGroup>
```

### Multiple Inputs

```vue
<DXInputGroup>
  <DXInput v-model="firstName" placeholder="Имя" />
  <DXInput v-model="lastName" placeholder="Фамилия" />
</DXInputGroup>
```

### Sizes

```vue
<DXInputGroup size="sm">
  <DXInputAddon>@</DXInputAddon>
  <DXInput v-model="value" />
</DXInputGroup>

<DXInputGroup size="md">
  <DXInputAddon>@</DXInputAddon>
  <DXInput v-model="value" />
</DXInputGroup>

<DXInputGroup size="lg">
  <DXInputAddon>@</DXInputAddon>
  <DXInput v-model="value" />
</DXInputGroup>
```

### Disabled State

```vue
<DXInputGroup disabled>
  <DXInputAddon>https://</DXInputAddon>
  <DXInput v-model="url" />
  <DXButton>Открыть</DXButton>
</DXInputGroup>
```

### Search with Icon and Button

```vue
<DXInputGroup>
  <DXInputAddon>
    <DXIcon :icon="MagnifyingGlassIcon" size="sm" />
  </DXInputAddon>
  <DXInput v-model="search" placeholder="Поиск..." />
  <DXButton variant="ghost">
    <DXIcon :icon="XMarkIcon" size="sm" />
  </DXButton>
</DXInputGroup>
```

### Phone Input

```vue
<DXInputGroup>
  <DXInputAddon>+7</DXInputAddon>
  <DXInput v-model="phone" placeholder="(999) 123-45-67" />
</DXInputGroup>
```

### With Select

```vue
<DXInputGroup>
  <DXSelect v-model="protocol" :options="['http://', 'https://']" />
  <DXInput v-model="domain" placeholder="example.com" />
</DXInputGroup>
```

### Vertical Direction

```vue
<DXInputGroup direction="vertical">
  <DXInput v-model="line1" placeholder="Адрес (строка 1)" />
  <DXInput v-model="line2" placeholder="Адрес (строка 2)" />
  <DXInput v-model="city" placeholder="Город" />
</DXInputGroup>
```

## Provide/Inject

DXInputGroup использует Vue provide/inject для передачи контекста:
- `inputGroup.size` - размер группы
- `inputGroup.disabled` - состояние disabled
- `inputGroup.error` - состояние error
- `inputGroup.registerComponent()` - регистрация компонента
- `inputGroup.unregisterComponent()` - отмена регистрации
- `inputGroup.getComponentPosition()` - позиция компонента (для скругления)

## See Also

- [DXInput](./DXInput.md)
- [DXInputAddon](../atoms/DXInputAddon.md)
- [DXButton](../atoms/DXButton.md)

