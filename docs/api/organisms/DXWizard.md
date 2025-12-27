# DXWizard

Компонент пошагового мастера (wizard) с индикатором прогресса.

## Import

```javascript
import { DXWizard } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `Number` | `0` | Текущий шаг (v-model) |
| `steps` | `Array` | `required` | Конфигурация шагов |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'vertical'`, `'compact'` |
| `linear` | `Boolean` | `true` | Линейная навигация |
| `showNumbers` | `Boolean` | `true` | Показывать номера шагов |
| `clickable` | `Boolean` | `false` | Клик по индикатору переключает шаг |

## Step Structure

```typescript
interface Step {
  title: string;
  description?: string;
  icon?: Component;
  optional?: boolean;
  completed?: boolean;
  error?: boolean;
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `Number` | Изменение шага |
| `step-click` | `Number` | Клик по индикатору шага |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `step-{index}` | `{ step, isActive }` | Контент шага |
| `indicator` | `{ step, index, isActive, isCompleted }` | Кастомный индикатор |

## Usage

### Basic

```vue
<DXWizard
  v-model="currentStep"
  :steps="[
    { title: 'Шаг 1' },
    { title: 'Шаг 2' },
    { title: 'Шаг 3' }
  ]"
>
  <template #step-0>
    <p>Контент первого шага</p>
  </template>
  
  <template #step-1>
    <p>Контент второго шага</p>
  </template>
  
  <template #step-2>
    <p>Контент третьего шага</p>
  </template>
</DXWizard>
```

### With Descriptions

```vue
<DXWizard
  v-model="step"
  :steps="[
    { title: 'Личные данные', description: 'Введите имя и email' },
    { title: 'Аккаунт', description: 'Создайте пароль' },
    { title: 'Подтверждение', description: 'Проверьте данные' }
  ]"
/>
```

### With Icons

```vue
<DXWizard
  v-model="step"
  :steps="[
    { title: 'Корзина', icon: ShoppingCartIcon },
    { title: 'Доставка', icon: TruckIcon },
    { title: 'Оплата', icon: CreditCardIcon },
    { title: 'Готово', icon: CheckIcon }
  ]"
  :showNumbers="false"
/>
```

### Vertical Variant

```vue
<DXWizard
  v-model="step"
  :steps="steps"
  variant="vertical"
>
  <template #step-0>
    <!-- Контент -->
  </template>
</DXWizard>
```

### Compact Variant

```vue
<DXWizard
  v-model="step"
  :steps="steps"
  variant="compact"
/>
```

### Non-linear Navigation

```vue
<DXWizard
  v-model="step"
  :steps="steps"
  :linear="false"
  clickable
/>
```

### With Completed/Error States

```vue
<DXWizard
  v-model="step"
  :steps="[
    { title: 'Шаг 1', completed: true },
    { title: 'Шаг 2', error: true },
    { title: 'Шаг 3' }
  ]"
/>
```

### Optional Steps

```vue
<DXWizard
  v-model="step"
  :steps="[
    { title: 'Обязательный' },
    { title: 'Опциональный', optional: true },
    { title: 'Обязательный' }
  ]"
/>
```

### Checkout Flow

```vue
<template>
  <div class="max-w-3xl mx-auto">
    <DXWizard
      v-model="checkoutStep"
      :steps="checkoutSteps"
    >
      <template #step-0>
        <CartReview :items="cartItems" />
      </template>
      
      <template #step-1>
        <ShippingForm v-model="shipping" />
      </template>
      
      <template #step-2>
        <PaymentForm v-model="payment" />
      </template>
      
      <template #step-3>
        <OrderConfirmation :order="order" />
      </template>
    </DXWizard>
    
    <div class="flex justify-between mt-8">
      <DXButton
        v-if="checkoutStep > 0"
        variant="ghost"
        @click="checkoutStep--"
      >
        Назад
      </DXButton>
      
      <DXButton
        @click="nextStep"
        :loading="isProcessing"
      >
        {{ checkoutStep === 3 ? 'Оформить заказ' : 'Далее' }}
      </DXButton>
    </div>
  </div>
</template>
```

### Custom Indicator

```vue
<DXWizard v-model="step" :steps="steps">
  <template #indicator="{ step, index, isActive, isCompleted }">
    <div
      :class="[
        'w-10 h-10 rounded-full flex items-center justify-center',
        isCompleted ? 'bg-green-500 text-white' :
        isActive ? 'bg-blue-500 text-white' :
        'bg-slate-200 text-slate-600'
      ]"
    >
      <DXIcon v-if="isCompleted" :icon="CheckIcon" />
      <span v-else>{{ index + 1 }}</span>
    </div>
  </template>
</DXWizard>
```

## See Also

- [DXFormWizard](./DXFormWizard.md)
- [DXProgress](../atoms/DXProgress.md)
