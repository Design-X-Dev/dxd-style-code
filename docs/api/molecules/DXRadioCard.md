# DXRadioCard

Радио-кнопка в виде карточки для визуально выразительного выбора.

## Import

```javascript
import { DXRadioCard } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `String\|Number\|Boolean` | `null` | Выбранное значение (v-model) |
| `value` | `String\|Number\|Boolean` | `required` | Значение опции |
| `label` | `String` | `''` | Заголовок |
| `description` | `String` | `''` | Описание |
| `icon` | `Object\|Function` | `null` | Иконка |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'bordered'`, `'filled'` |
| `showRadio` | `Boolean` | `true` | Показать радио-кружок |
| `fullWidth` | `Boolean` | `false` | Растянуть на всю ширину |
| `name` | `String` | `''` | Имя группы (для form submit) |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `any` | Изменение выбора |
| `change` | `any` | Альтернативное событие |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Контент карточки (вместо label + description) |
| `icon` | Кастомная иконка |
| `extra` | Дополнительный контент |

## Usage

### Basic

```vue
<DXRadioCard
  v-model="selected"
  value="option1"
  label="Опция 1"
  description="Описание первой опции"
/>
```

### Radio Card Group

```vue
<div class="space-y-3">
  <DXRadioCard
    v-model="plan"
    value="free"
    label="Бесплатный"
    description="Для личного использования"
    :icon="GiftIcon"
  />
  <DXRadioCard
    v-model="plan"
    value="pro"
    label="Профессиональный"
    description="Для бизнеса"
    :icon="RocketLaunchIcon"
  />
  <DXRadioCard
    v-model="plan"
    value="enterprise"
    label="Корпоративный"
    description="Для крупных компаний"
    :icon="BuildingOfficeIcon"
  />
</div>
```

### Horizontal Layout

```vue
<div class="flex gap-4">
  <DXRadioCard
    v-model="size"
    value="s"
    label="S"
    class="flex-1"
  />
  <DXRadioCard
    v-model="size"
    value="m"
    label="M"
    class="flex-1"
  />
  <DXRadioCard
    v-model="size"
    value="l"
    label="L"
    class="flex-1"
  />
</div>
```

### With Price

```vue
<DXRadioCard
  v-model="plan"
  value="monthly"
  label="Ежемесячная подписка"
>
  <template #extra>
    <div class="text-xl font-bold">$9.99<span class="text-sm font-normal">/мес</span></div>
  </template>
</DXRadioCard>

<DXRadioCard
  v-model="plan"
  value="yearly"
  label="Годовая подписка"
>
  <template #extra>
    <div class="text-xl font-bold">$99.99<span class="text-sm font-normal">/год</span></div>
    <div class="text-xs text-green-600">Экономия 17%</div>
  </template>
</DXRadioCard>
```

### Without Radio Circle

```vue
<DXRadioCard
  v-model="selected"
  value="compact"
  label="Компактный вид"
  :showRadio="false"
/>
```

### Sizes

```vue
<DXRadioCard size="sm" v-model="val" value="1" label="Small" />
<DXRadioCard size="md" v-model="val" value="2" label="Medium" />
<DXRadioCard size="lg" v-model="val" value="3" label="Large" />
```

### Variants

```vue
<DXRadioCard variant="default" v-model="val" value="1" label="Default" />
<DXRadioCard variant="bordered" v-model="val" value="2" label="Bordered" />
<DXRadioCard variant="filled" v-model="val" value="3" label="Filled" />
```

### Custom Content

```vue
<DXRadioCard v-model="delivery" value="express">
  <div class="flex items-center gap-4">
    <img src="/express-icon.svg" class="w-12 h-12" />
    <div>
      <div class="font-medium">Экспресс доставка</div>
      <div class="text-sm text-slate-500">1-2 рабочих дня</div>
    </div>
    <div class="ml-auto text-lg font-bold">$15</div>
  </div>
</DXRadioCard>
```

### Disabled Options

```vue
<DXRadioCard
  v-model="plan"
  value="enterprise"
  label="Корпоративный"
  description="Свяжитесь с нами"
  disabled
/>
```

## See Also

- [DXRadio](../atoms/DXRadio.md)
- [DXRadioGroup](./DXRadioGroup.md)
- [DXCard](../atoms/DXCard.md)

