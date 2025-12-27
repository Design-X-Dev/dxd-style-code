# DXFormWizard

Многошаговая форма (wizard) с валидацией на каждом шаге.

## Import

```javascript
import { DXFormWizard } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `Array` | `required` | Конфигурация шагов |
| `modelValue` | `Number` | `0` | Текущий шаг (v-model) |
| `linear` | `Boolean` | `true` | Линейная навигация (нельзя пропускать шаги) |
| `showSteps` | `Boolean` | `true` | Показывать индикатор шагов |
| `showNavigation` | `Boolean` | `true` | Показывать кнопки навигации |
| `prevText` | `String` | `'Назад'` | Текст кнопки "Назад" |
| `nextText` | `String` | `'Далее'` | Текст кнопки "Далее" |
| `finishText` | `String` | `'Завершить'` | Текст кнопки на последнем шаге |
| `loading` | `Boolean` | `false` | Состояние загрузки |

## Step Structure

```typescript
interface Step {
  title: string;           // Название шага
  description?: string;    // Описание
  icon?: Component;        // Иконка
  validate?: () => boolean | Promise<boolean>; // Функция валидации
  optional?: boolean;      // Опциональный шаг
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `Number` | Изменение шага |
| `step-change` | `{ from, to }` | Переход между шагами |
| `next` | `Number` | Клик "Далее" |
| `prev` | `Number` | Клик "Назад" |
| `finish` | - | Завершение wizard |
| `validate-error` | `Number` | Ошибка валидации шага |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `step-{index}` | `{ step, isActive }` | Контент шага |
| `step-indicator` | `{ step, index, isActive, isCompleted }` | Кастомный индикатор |
| `navigation` | `{ canPrev, canNext, isLast, prev, next }` | Кастомная навигация |

## Usage

### Basic

```vue
<DXFormWizard
  v-model="currentStep"
  :steps="[
    { title: 'Личные данные' },
    { title: 'Контакты' },
    { title: 'Подтверждение' }
  ]"
  @finish="handleSubmit"
>
  <template #step-0>
    <DXFormControl label="Имя">
      <DXInput v-model="form.name" />
    </DXFormControl>
  </template>
  
  <template #step-1>
    <DXFormControl label="Email">
      <DXInput v-model="form.email" type="email" />
    </DXFormControl>
  </template>
  
  <template #step-2>
    <p>Проверьте введённые данные</p>
    <p>Имя: {{ form.name }}</p>
    <p>Email: {{ form.email }}</p>
  </template>
</DXFormWizard>
```

### With Validation

```vue
<DXFormWizard
  v-model="currentStep"
  :steps="[
    { 
      title: 'Аккаунт',
      validate: () => validateStep1()
    },
    { 
      title: 'Профиль',
      validate: () => validateStep2()
    },
    { title: 'Готово' }
  ]"
  @validate-error="handleValidationError"
>
  <!-- Шаги -->
</DXFormWizard>

<script setup>
function validateStep1() {
  return form.email && form.password;
}

function validateStep2() {
  return form.name && form.phone;
}
</script>
```

### With Icons

```vue
<DXFormWizard
  :steps="[
    { title: 'Личные данные', icon: UserIcon },
    { title: 'Оплата', icon: CreditCardIcon },
    { title: 'Доставка', icon: TruckIcon },
    { title: 'Подтверждение', icon: CheckIcon }
  ]"
>
  <!-- Шаги -->
</DXFormWizard>
```

### Non-linear Navigation

```vue
<DXFormWizard
  :steps="steps"
  :linear="false"
>
  <!-- Можно переходить на любой шаг -->
</DXFormWizard>
```

### Async Validation

```vue
<DXFormWizard
  :steps="[
    { 
      title: 'Email',
      validate: async () => {
        return await checkEmailAvailability(form.email);
      }
    },
    { title: 'Пароль' }
  ]"
  :loading="isValidating"
>
  <!-- Шаги -->
</DXFormWizard>
```

### Custom Navigation

```vue
<DXFormWizard :steps="steps" :showNavigation="false">
  <template #step-0>
    <!-- Контент -->
  </template>
  
  <template #navigation="{ canPrev, canNext, isLast, prev, next }">
    <div class="flex justify-between mt-6">
      <DXButton 
        v-if="canPrev"
        variant="ghost"
        @click="prev"
      >
        ← Вернуться
      </DXButton>
      
      <DXButton @click="isLast ? finish() : next()">
        {{ isLast ? 'Отправить' : 'Продолжить →' }}
      </DXButton>
    </div>
  </template>
</DXFormWizard>
```

### Registration Flow

```vue
<DXFormWizard
  v-model="step"
  :steps="[
    { title: 'Аккаунт', icon: UserIcon },
    { title: 'Компания', icon: BuildingOfficeIcon },
    { title: 'План', icon: CreditCardIcon }
  ]"
  finishText="Создать аккаунт"
  @finish="register"
>
  <template #step-0>
    <DXFormControl label="Email" required>
      <DXInput v-model="form.email" type="email" />
    </DXFormControl>
    <DXFormControl label="Пароль" required>
      <DXPasswordInput v-model="form.password" showStrength />
    </DXFormControl>
  </template>
  
  <template #step-1>
    <DXFormControl label="Название компании">
      <DXInput v-model="form.company" />
    </DXFormControl>
    <DXFormControl label="Размер">
      <DXSelect v-model="form.size" :options="companySizes" />
    </DXFormControl>
  </template>
  
  <template #step-2>
    <DXRadioGroup v-model="form.plan" :options="plans" />
  </template>
</DXFormWizard>
```

## See Also

- [DXWizard](./DXWizard.md)
- [DXFormControl](../molecules/DXFormControl.md)

