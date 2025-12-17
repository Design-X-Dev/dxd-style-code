# 🎨 Руководство по использованию иконок в формах

Все компоненты форм в DX Design System поддерживают интеграцию с Heroicons для улучшения UX и визуальной коммуникации.

## 📋 Поддержка иконок в компонентах

| Компонент | Prefix Icon | Suffix Icon | Особенности |
|-----------|-------------|-------------|-------------|
| `DXInput` | ✅ | ✅ | Полная поддержка с обеих сторон |
| `DXTextarea` | ✅ | ✅ | Иконки в верхних углах + счетчик символов |
| `DXSelect` | ✅ | ✅ (chevron) | Префикс + автоматический chevron |
| `DXPasswordInput` | - | ✅ (toggle) | Встроенная иконка показа/скрытия |
| `DXSearchSelect` | ✅ (search) | - | Встроенная иконка поиска |
| `DXDatePicker` | ✅ (calendar) | - | Встроенная иконка календаря |
| `DXCheckbox` | - | ✅ (check) | Встроенная галочка |
| `DXRadio` | - | ✅ (check) | Встроенная галочка |
| `DXToggle` | ✅ | ✅ | Кастомные иконки для вкл/выкл |

## 🚀 Примеры использования

### 1. **DXInput - Универсальные поля ввода**

```vue
<script setup>
import { ref } from 'vue';
import { DXInput } from 'dx-components';
import {
  MagnifyingGlassIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
  LockClosedIcon,
  CreditCardIcon,
  MapPinIcon,
  CurrencyDollarIcon,
} from '@heroicons/vue/24/outline';

const search = ref('');
const email = ref('');
const name = ref('');
</script>

<template>
  <!-- Поиск -->
  <DXInput
    v-model="search"
    placeholder="Search..."
    :prefix-icon="MagnifyingGlassIcon"
  />
  
  <!-- Email -->
  <DXInput
    v-model="email"
    label="Email"
    type="email"
    placeholder="example@mail.com"
    :prefix-icon="EnvelopeIcon"
  />
  
  <!-- Имя пользователя -->
  <DXInput
    v-model="name"
    label="Full Name"
    placeholder="John Doe"
    :prefix-icon="UserIcon"
  />
</template>
```

#### Популярные комбинации для DXInput:

| Тип поля | Иконка | Импорт |
|----------|--------|--------|
| Поиск | `MagnifyingGlassIcon` | `@heroicons/vue/24/outline` |
| Email | `EnvelopeIcon` | `@heroicons/vue/24/outline` |
| Телефон | `PhoneIcon` | `@heroicons/vue/24/outline` |
| Имя/Username | `UserIcon` | `@heroicons/vue/24/outline` |
| Пароль | `LockClosedIcon` | `@heroicons/vue/24/outline` |
| Карта | `CreditCardIcon` | `@heroicons/vue/24/outline` |
| Адрес | `MapPinIcon` | `@heroicons/vue/24/outline` |
| Цена | `CurrencyDollarIcon` | `@heroicons/vue/24/outline` |
| Дата | `CalendarIcon` | `@heroicons/vue/24/outline` |
| Сайт | `GlobeAltIcon` | `@heroicons/vue/24/outline` |
| Тег | `TagIcon` или `HashtagIcon` | `@heroicons/vue/24/outline` |
| Ссылка | `LinkIcon` | `@heroicons/vue/24/outline` |

### 2. **DXTextarea - Многострочные поля**

```vue
<script setup>
import { ref } from 'vue';
import { DXTextarea } from 'dx-components';
import {
  ChatBubbleLeftIcon,
  DocumentTextIcon,
  PencilIcon,
} from '@heroicons/vue/24/outline';

const message = ref('');
const description = ref('');
</script>

<template>
  <!-- Сообщение -->
  <DXTextarea
    v-model="message"
    label="Message"
    placeholder="Write your message..."
    :prefix-icon="ChatBubbleLeftIcon"
    :rows="4"
  />
  
  <!-- Описание с счетчиком -->
  <DXTextarea
    v-model="description"
    label="Description"
    placeholder="Describe your product..."
    :prefix-icon="PencilIcon"
    :max-length="500"
    :show-count="true"
    :rows="6"
  />
</template>
```

#### Особенности DXTextarea:

- **`prefixIcon`** - отображается в **верхнем левом** углу
- **`suffixIcon`** - отображается в **верхнем правом** углу
- **`showCount`** + **`maxLength`** - счетчик символов в **нижнем правом** углу
- **`autoResize`** - автоматическое изменение высоты

#### Популярные иконки для DXTextarea:

| Тип поля | Иконка |
|----------|--------|
| Сообщение/Комментарий | `ChatBubbleLeftIcon` |
| Описание | `DocumentTextIcon` или `PencilIcon` |
| Заметка | `PencilSquareIcon` |
| Отзыв | `StarIcon` |

### 3. **DXSelect - Выпадающие списки**

```vue
<script setup>
import { ref } from 'vue';
import { DXSelect } from 'dx-components';
import {
  GlobeAltIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  BriefcaseIcon,
} from '@heroicons/vue/24/outline';

const country = ref('');
const currency = ref('');

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
];

const currencies = [
  { value: 'usd', label: 'USD' },
  { value: 'eur', label: 'EUR' },
  { value: 'gbp', label: 'GBP' },
];
</script>

<template>
  <!-- Страна -->
  <DXSelect
    v-model="country"
    label="Country"
    :options="countries"
    :prefix-icon="GlobeAltIcon"
    placeholder="Select country"
  />
  
  <!-- Валюта -->
  <DXSelect
    v-model="currency"
    label="Currency"
    :options="currencies"
    :prefix-icon="CurrencyDollarIcon"
    placeholder="Select currency"
  />
</template>
```

#### Популярные иконки для DXSelect:

| Тип списка | Иконка |
|------------|--------|
| Страна/Регион | `GlobeAltIcon` или `MapPinIcon` |
| Валюта | `CurrencyDollarIcon` |
| Язык | `LanguageIcon` |
| Категория | `FolderIcon` или `TagIcon` |
| Должность | `BriefcaseIcon` |
| Статус | `CheckBadgeIcon` |
| Приоритет | `FlagIcon` |

## 🎯 Лучшие практики

### ✅ DO (Правильно)

```vue
<!-- Используйте иконки для улучшения понимания -->
<DXInput
  label="Email Address"
  placeholder="your.email@example.com"
  :prefix-icon="EnvelopeIcon"
/>

<!-- Группируйте связанные поля с одинаковым стилем иконок -->
<div class="space-y-4">
  <DXInput label="First Name" :prefix-icon="UserIcon" />
  <DXInput label="Last Name" :prefix-icon="UserIcon" />
  <DXInput label="Email" :prefix-icon="EnvelopeIcon" />
</div>

<!-- Используйте suffix для действий или статуса -->
<DXInput
  label="Username"
  :prefix-icon="AtSymbolIcon"
  :suffix-icon="CheckCircleIcon"
  helper="Username is available"
/>
```

### ❌ DON'T (Неправильно)

```vue
<!-- Не используйте слишком много разных иконок -->
<DXInput :prefix-icon="Icon1" :suffix-icon="Icon2" /> <!-- Перегружено -->

<!-- Не используйте иконки без явной причины -->
<DXInput label="Notes" :prefix-icon="QuestionMarkIcon" /> <!-- Неясно -->

<!-- Не смешивайте стили иконок (outline vs solid) -->
<DXInput :prefix-icon="UserIconSolid" />
<DXInput :prefix-icon="EnvelopeIconOutline" /> <!-- Несогласованно -->
```

## 📚 Полные примеры форм

### Форма регистрации

```vue
<script setup>
import { ref } from 'vue';
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  LockClosedIcon,
  MapPinIcon,
  GlobeAltIcon,
} from '@heroicons/vue/24/outline';

const form = ref({
  name: '',
  email: '',
  phone: '',
  password: '',
  country: '',
  bio: '',
});
</script>

<template>
  <form class="space-y-4 max-w-md">
    <DXInput
      v-model="form.name"
      label="Full Name"
      :prefix-icon="UserIcon"
      placeholder="John Doe"
      required
    />
    
    <DXInput
      v-model="form.email"
      label="Email"
      type="email"
      :prefix-icon="EnvelopeIcon"
      placeholder="john@example.com"
      required
    />
    
    <DXInput
      v-model="form.phone"
      label="Phone"
      type="tel"
      :prefix-icon="PhoneIcon"
      placeholder="+1 (555) 000-0000"
    />
    
    <DXPasswordInput
      v-model="form.password"
      label="Password"
      required
    />
    
    <DXSelect
      v-model="form.country"
      label="Country"
      :prefix-icon="GlobeAltIcon"
      :options="countryOptions"
      placeholder="Select country"
    />
    
    <DXTextarea
      v-model="form.bio"
      label="Bio"
      :prefix-icon="UserIcon"
      placeholder="Tell us about yourself..."
      :max-length="500"
      :show-count="true"
      :rows="4"
    />
  </form>
</template>
```

### Платежная форма

```vue
<script setup>
import { ref } from 'vue';
import {
  CreditCardIcon,
  CalendarIcon,
  LockClosedIcon,
  CurrencyDollarIcon,
} from '@heroicons/vue/24/outline';

const payment = ref({
  cardNumber: '',
  expiry: '',
  cvv: '',
  amount: '',
});
</script>

<template>
  <form class="space-y-4 max-w-md">
    <DXInput
      v-model="payment.cardNumber"
      label="Card Number"
      :prefix-icon="CreditCardIcon"
      placeholder="1234 5678 9012 3456"
      required
    />
    
    <div class="grid grid-cols-2 gap-4">
      <DXInput
        v-model="payment.expiry"
        label="Expiry Date"
        :prefix-icon="CalendarIcon"
        placeholder="MM/YY"
        required
      />
      
      <DXInput
        v-model="payment.cvv"
        label="CVV"
        type="password"
        :prefix-icon="LockClosedIcon"
        placeholder="123"
        maxlength="3"
        required
      />
    </div>
    
    <DXInput
      v-model="payment.amount"
      label="Amount"
      type="number"
      :prefix-icon="CurrencyDollarIcon"
      placeholder="0.00"
      required
    />
  </form>
</template>
```

## 🎨 Кастомизация

### Изменение цвета иконок

По умолчанию иконки имеют цвет `text-slate-400`. Вы можете изменить это через slots:

```vue
<DXInput label="Email">
  <template #prefix>
    <EnvelopeIcon class="w-5 h-5 text-blue-500" />
  </template>
</DXInput>
```

### Анимация иконок

Для более сложных случаев используйте `DXIcon` напрямую:

```vue
<DXInput label="Search">
  <template #prefix>
    <DXIcon :icon="MagnifyingGlassIcon" size="sm" animation="wiggle" />
  </template>
</DXInput>
```

## 📖 API Reference

### DXInput Props

```typescript
{
  prefixIcon?: Component,  // Heroicon компонент для левой иконки
  suffixIcon?: Component,  // Heroicon компонент для правой иконки
}
```

### DXTextarea Props

```typescript
{
  prefixIcon?: Component,   // Иконка в верхнем левом углу
  suffixIcon?: Component,   // Иконка в верхнем правом углу
  maxLength?: number,       // Максимальная длина
  showCount?: boolean,      // Показывать счетчик символов
  autoResize?: boolean,     // Автоматическое изменение размера
}
```

### DXSelect Props

```typescript
{
  prefixIcon?: Component,  // Иконка слева от select
  // Chevron справа добавляется автоматически
}
```

## 🔗 Связанные компоненты

- **DXIcon** - базовый компонент для отображения Heroicons с анимациями
- **DXValidationIcon** - иконки для состояний валидации (success/error/warning)
- **DXPasswordInput** - специализированный input с toggle иконкой
- **DXSearchSelect** - select с встроенной иконкой поиска
- **DXDatePicker** - поле даты с встроенной иконкой календаря

## 💡 Советы

1. **Консистентность** - используйте одинаковый стиль иконок (outline или solid) во всей форме
2. **Семантика** - выбирайте иконки, которые ясно передают назначение поля
3. **Не перегружайте** - не каждое поле нуждается в иконке
4. **Группировка** - используйте одинаковые иконки для связанных полей
5. **Доступность** - иконки дополняют, но не заменяют лейблы

---

✨ **Все иконки взяты из [Heroicons](https://heroicons.com/) - официальной библиотеки иконок Tailwind CSS**

