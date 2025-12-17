import DXButton from './DXButton.vue';

export default {
  title: 'Atoms/DXButton',
  component: DXButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'ghost', 'danger', 'outline'],
      description: 'Вариант оформления кнопки',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Размер кнопки',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключенное состояние',
    },
    block: {
      control: 'boolean',
      description: 'Растянуть на всю ширину',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Только иконка (квадратная кнопка)',
    },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    default: 'Кнопка',
  },
  render: (args) => ({
    components: { DXButton },
    setup() { return { args }; },
    template: '<DXButton v-bind="args">Кнопка</DXButton>',
  }),
};

export const Ghost = {
  args: {
    variant: 'ghost',
  },
  render: (args) => ({
    components: { DXButton },
    setup() { return { args }; },
    template: '<DXButton v-bind="args">Ghost кнопка</DXButton>',
  }),
};

export const Danger = {
  args: {
    variant: 'danger',
  },
  render: (args) => ({
    components: { DXButton },
    setup() { return { args }; },
    template: '<DXButton v-bind="args">Удалить</DXButton>',
  }),
};

export const Outline = {
  args: {
    variant: 'outline',
  },
  render: (args) => ({
    components: { DXButton },
    setup() { return { args }; },
    template: '<DXButton v-bind="args">Outline</DXButton>',
  }),
};

export const Sizes = {
  render: () => ({
    components: { DXButton },
    template: `
      <div class="flex items-center gap-4">
        <DXButton size="sm">Small</DXButton>
        <DXButton size="md">Medium</DXButton>
        <DXButton size="lg">Large</DXButton>
      </div>
    `,
  }),
};

export const Disabled = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { DXButton },
    setup() { return { args }; },
    template: '<DXButton v-bind="args">Disabled</DXButton>',
  }),
};

export const Block = {
  args: {
    block: true,
  },
  render: (args) => ({
    components: { DXButton },
    setup() { return { args }; },
    template: '<DXButton v-bind="args">Full Width</DXButton>',
  }),
};

export const WithIcon = {
  render: () => ({
    components: { DXButton },
    template: `
      <DXButton>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        Добавить
      </DXButton>
    `,
  }),
};

