import DXInput from './DXInput.vue';

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

