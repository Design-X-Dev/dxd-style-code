# DXButtonGroup

Компонент для группировки кнопок с общим стилем и управлением выбором.

## Import

```javascript
import { DXButtonGroup } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `String\|Array` | `null` | Выбранное значение (v-model) |
| `multiple` | `Boolean` | `false` | Множественный выбор |
| `size` | `String` | `'md'` | Размер кнопок: `'sm'`, `'md'`, `'lg'` |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'outline'`, `'ghost'` |
| `color` | `String` | `'default'` | Цвет: `'default'`, `'primary'`, `'secondary'`, `'success'`, `'danger'` |
| `fullWidth` | `Boolean` | `false` | Растянуть на всю ширину |
| `disabled` | `Boolean` | `false` | Отключить все кнопки |
| `orientation` | `String` | `'horizontal'` | Ориентация: `'horizontal'`, `'vertical'` |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `String\|Array` | Изменение выбранного значения |
| `change` | `String\|Array` | Альтернативное событие изменения |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Кнопки группы (DXButton с value) |

## Usage

### Basic Group

```vue
<DXButtonGroup>
  <DXButton>Левая</DXButton>
  <DXButton>Центр</DXButton>
  <DXButton>Правая</DXButton>
</DXButtonGroup>
```

### Single Selection (Radio-like)

```vue
<DXButtonGroup v-model="selected">
  <DXButton value="day">День</DXButton>
  <DXButton value="week">Неделя</DXButton>
  <DXButton value="month">Месяц</DXButton>
</DXButtonGroup>
```

### Multiple Selection

```vue
<DXButtonGroup v-model="selectedItems" multiple>
  <DXButton value="bold">B</DXButton>
  <DXButton value="italic">I</DXButton>
  <DXButton value="underline">U</DXButton>
</DXButtonGroup>
```

### Sizes

```vue
<DXButtonGroup size="sm">
  <DXButton>Маленькие</DXButton>
  <DXButton>Кнопки</DXButton>
</DXButtonGroup>

<DXButtonGroup size="md">
  <DXButton>Средние</DXButton>
  <DXButton>Кнопки</DXButton>
</DXButtonGroup>

<DXButtonGroup size="lg">
  <DXButton>Большие</DXButton>
  <DXButton>Кнопки</DXButton>
</DXButtonGroup>
```

### Variants

```vue
<DXButtonGroup variant="default">
  <DXButton>Default</DXButton>
  <DXButton>Variant</DXButton>
</DXButtonGroup>

<DXButtonGroup variant="outline">
  <DXButton>Outline</DXButton>
  <DXButton>Variant</DXButton>
</DXButtonGroup>

<DXButtonGroup variant="ghost">
  <DXButton>Ghost</DXButton>
  <DXButton>Variant</DXButton>
</DXButtonGroup>
```

### Full Width

```vue
<DXButtonGroup fullWidth>
  <DXButton>Первая</DXButton>
  <DXButton>Вторая</DXButton>
  <DXButton>Третья</DXButton>
</DXButtonGroup>
```

### Vertical Orientation

```vue
<DXButtonGroup orientation="vertical">
  <DXButton>Верхняя</DXButton>
  <DXButton>Средняя</DXButton>
  <DXButton>Нижняя</DXButton>
</DXButtonGroup>
```

### With Icons

```vue
<DXButtonGroup v-model="view">
  <DXButton value="list">
    <DXIcon :icon="ListBulletIcon" />
  </DXButton>
  <DXButton value="grid">
    <DXIcon :icon="Squares2X2Icon" />
  </DXButton>
  <DXButton value="table">
    <DXIcon :icon="TableCellsIcon" />
  </DXButton>
</DXButtonGroup>
```

## Provide/Inject

DXButtonGroup использует Vue provide/inject для передачи контекста дочерним DXButton:
- `buttonGroup.size` - размер группы
- `buttonGroup.variant` - вариант группы
- `buttonGroup.disabled` - состояние disabled
- `buttonGroup.selected` - выбранные значения
- `buttonGroup.toggle(value)` - функция переключения

## See Also

- [DXButton](../atoms/DXButton.md)
- [DXSegmentedControl](./DXSegmentedControl.md)

