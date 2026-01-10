import DXInput from './DXInput.vue';
import { ref } from 'vue';
import {
  MagnifyingGlassIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
  LockClosedIcon,
  CreditCardIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/vue/24/outline';

export default {
  title: 'Molecules/DXInput',
  component: DXInput,
  tags: ['autodocs', 'category:form', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент поля ввода с поддержкой иконок, валидации и интеграции с группами полей.

## Назначение

DXInput предоставляет стандартизированное поле ввода с поддержкой различных типов (text, email, number, tel, url),
иконок слева и справа, валидации, состояний ошибок и автоматической адаптации при использовании внутри DXInputGroup.

## Архитектура

### Использует
- \`DXFormLabel\` - для отображения лейбла, ошибок и вспомогательного текста
- \`DXIconWrapper\` - для отображения иконок слева и справа
- \`useSize\` composable - для унификации размеров (sm, md, lg)
- \`useClassComposition\` composable - для объединения CSS классов
- \`provide/inject\` - для интеграции с DXInputGroup

### Используется в
- \`DXInputGroup\` - группы полей с аддонами
- \`DXFormControl\` - контроль форм
- \`DXAuthenticationForm\` - формы аутентификации
- Любые формы, требующие текстового ввода

## Внутренняя логика

### Интеграция с DXInputGroup
При использовании внутри \`DXInputGroup\`:
- Поле автоматически регистрируется в группе через \`provide/inject\`
- Размер синхронизируется с размером группы
- Состояние \`disabled\` наследуется от группы
- Состояние \`error\` синхронизируется с группой
- Border-radius адаптируется в зависимости от наличия аддонов слева/справа:
  - Оба аддона → \`rounded-none\`
  - Только слева → \`rounded-l-none rounded-r-xl\`
  - Только справа → \`rounded-l-xl rounded-r-none\`
  - Нет аддонов → \`rounded-xl\`

### Иконки
Поддерживает иконки через:
- \`prefixIcon\` prop - иконка слева (Heroicon компонент)
- \`suffixIcon\` prop - иконка справа (Heroicon компонент)
- Слоты \`prefix\` и \`suffix\` - для кастомных элементов

Размер иконки автоматически адаптируется к размеру поля:
- sm → sm
- md → md
- lg → lg

Padding для текста автоматически увеличивается при наличии иконок:
- sm: pl-10 / pr-10
- md: pl-11 / pr-11
- lg: pl-12 / pr-12

### Валидация
- При наличии \`error\` prop, поле получает красную рамку (\`border-rose-300\`)
- Текст ошибки отображается через \`DXFormLabel\`
- Состояние ошибки синхронизируется с \`DXInputGroup\`

### Размеры

| Значение | Описание |
|----------|----------|
| \`sm\` | Компактный размер |
| \`md\` | Средний размер (по умолчанию) |
| \`lg\` | Крупный размер |

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\` для String или Number значений.

### Типы полей
Поддерживает стандартные HTML типы:
- \`text\` - обычный текст (по умолчанию)
- \`email\` - email адрес
- \`number\` - число
- \`tel\` - телефон
- \`url\` - URL адрес
- И другие стандартные типы input

### Состояния

| Состояние | Описание |
|-----------|----------|
| \`disabled\` | Отключает поле (opacity-60, cursor-not-allowed, bg-slate-50) |
| \`error\` | Визуально выделяет ошибку (красная рамка) |
| \`required\` | Отмечает поле как обязательное (через DXFormLabel) |

### Лейбл и вспомогательный текст
- \`label\` - отображается над полем
- \`helper\` - вспомогательный текст под полем
- \`error\` - текст ошибки (заменяет helper при наличии)

### Кастомные классы
Поддерживает \`inputClass\` prop для добавления дополнительных CSS классов к input элементу.
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Размер поля',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключенное состояние',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'number', 'tel', 'url'],
      description: 'Тип input',
    },
  },
};

export const Default = {
  args: {
    placeholder: 'Введите текст...',
  },
  render: (args) => ({
    components: { DXInput },
    setup() { return { args }; },
    template: '<DXInput v-bind="args" />',
  }),
};

export const WithLabel = {
  args: {
    label: 'Email',
    placeholder: 'example@mail.com',
    type: 'email',
  },
  render: (args) => ({
    components: { DXInput },
    setup() { return { args }; },
    template: '<DXInput v-bind="args" />',
  }),
};

export const WithHelper = {
  args: {
    label: 'Пароль',
    placeholder: 'Минимум 8 символов',
    helper: 'Используйте буквы, цифры и символы',
    type: 'password',
  },
  render: (args) => ({
    components: { DXInput },
    setup() { return { args }; },
    template: '<DXInput v-bind="args" />',
  }),
};

export const WithError = {
  args: {
    label: 'Email',
    placeholder: 'example@mail.com',
    error: 'Неверный формат email',
    modelValue: 'invalid-email',
  },
  render: (args) => ({
    components: { DXInput },
    setup() { return { args }; },
    template: '<DXInput v-bind="args" />',
  }),
};

export const Disabled = {
  args: {
    label: 'Поле отключено',
    placeholder: 'Нельзя редактировать',
    disabled: true,
    modelValue: 'Значение',
  },
  render: (args) => ({
    components: { DXInput },
    setup() { return { args }; },
    template: '<DXInput v-bind="args" />',
  }),
};

export const Sizes = {
  render: () => ({
    components: { DXInput },
    template: `
      <div class="space-y-4 max-w-md">
        <DXInput size="sm" placeholder="Small" label="Small" />
        <DXInput size="md" placeholder="Medium" label="Medium" />
        <DXInput size="lg" placeholder="Large" label="Large" />
      </div>
    `,
  }),
};

// С иконками
export const WithPrefixIcon = {
  render: () => ({
    components: { DXInput },
    setup() {
      const email = ref('');
      return { email, EnvelopeIcon };
    },
    template: `
      <DXInput
        v-model="email"
        label="Email"
        placeholder="example@mail.com"
        :prefix-icon="EnvelopeIcon"
      />
    `,
  }),
};

export const WithSuffixIcon = {
  render: () => ({
    components: { DXInput },
    setup() {
      const url = ref('https://example.com');
      return { url, CheckCircleIcon };
    },
    template: `
      <DXInput
        v-model="url"
        label="Website"
        placeholder="https://..."
        :suffix-icon="CheckCircleIcon"
        helper="URL is valid"
      />
    `,
  }),
};

export const Search = {
  render: () => ({
    components: { DXInput },
    setup() {
      const search = ref('');
      return { search, MagnifyingGlassIcon };
    },
    template: `
      <DXInput
        v-model="search"
        placeholder="Search..."
        :prefix-icon="MagnifyingGlassIcon"
      />
    `,
  }),
};

export const FormWithIcons = {
  render: () => ({
    components: { DXInput },
    setup() {
      const form = ref({
        name: '',
        email: '',
        phone: '',
        address: '',
      });
      return { 
        form,
        UserIcon,
        EnvelopeIcon,
        PhoneIcon,
        MapPinIcon,
      };
    },
    template: `
      <div class="space-y-4 max-w-md">
        <DXInput
          v-model="form.name"
          label="Full Name"
          placeholder="John Doe"
          :prefix-icon="UserIcon"
        />
        <DXInput
          v-model="form.email"
          label="Email"
          type="email"
          placeholder="john@example.com"
          :prefix-icon="EnvelopeIcon"
        />
        <DXInput
          v-model="form.phone"
          label="Phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          :prefix-icon="PhoneIcon"
        />
        <DXInput
          v-model="form.address"
          label="Address"
          placeholder="123 Main St"
          :prefix-icon="MapPinIcon"
        />
      </div>
    `,
  }),
};

export const PaymentForm = {
  render: () => ({
    components: { DXInput },
    setup() {
      const cardNumber = ref('');
      const amount = ref('');
      return { 
        cardNumber,
        amount,
        CreditCardIcon,
        CurrencyDollarIcon,
      };
    },
    template: `
      <div class="space-y-4 max-w-md">
        <DXInput
          v-model="cardNumber"
          label="Card Number"
          placeholder="1234 5678 9012 3456"
          :prefix-icon="CreditCardIcon"
        />
        <DXInput
          v-model="amount"
          label="Amount"
          type="number"
          placeholder="0.00"
          :prefix-icon="CurrencyDollarIcon"
        />
      </div>
    `,
  }),
};

export const AllIconTypes = {
  render: () => ({
    components: { DXInput },
    setup() {
      return {
        MagnifyingGlassIcon,
        EnvelopeIcon,
        PhoneIcon,
        UserIcon,
        LockClosedIcon,
        CreditCardIcon,
        CalendarIcon,
        MapPinIcon,
        CurrencyDollarIcon,
        GlobeAltIcon,
      };
    },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DXInput placeholder="Search" :prefix-icon="MagnifyingGlassIcon" />
        <DXInput placeholder="Email" :prefix-icon="EnvelopeIcon" />
        <DXInput placeholder="Phone" :prefix-icon="PhoneIcon" />
        <DXInput placeholder="Username" :prefix-icon="UserIcon" />
        <DXInput placeholder="Password" type="password" :prefix-icon="LockClosedIcon" />
        <DXInput placeholder="Card" :prefix-icon="CreditCardIcon" />
        <DXInput placeholder="Date" :prefix-icon="CalendarIcon" />
        <DXInput placeholder="Location" :prefix-icon="MapPinIcon" />
        <DXInput placeholder="Price" :prefix-icon="CurrencyDollarIcon" />
        <DXInput placeholder="Website" :prefix-icon="GlobeAltIcon" />
      </div>
    `,
  }),
};

