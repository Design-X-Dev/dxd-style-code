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
  title: 'Atoms/DXInput',
  component: DXInput,
  tags: ['autodocs'],
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

