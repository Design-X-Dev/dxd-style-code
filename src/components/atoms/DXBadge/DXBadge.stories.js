import DXBadge from './DXBadge.vue';

export default {
  title: 'Atoms/DXBadge',
  component: DXBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['slate', 'success', 'warning', 'danger', 'info'],
      description: 'Вариант оформления',
    },
  },
};

export const Default = {
  args: {
    variant: 'slate',
  },
  render: (args) => ({
    components: { DXBadge },
    setup() { return { args }; },
    template: '<DXBadge v-bind="args">Статус</DXBadge>',
  }),
};

export const Success = {
  args: {
    variant: 'success',
  },
  render: (args) => ({
    components: { DXBadge },
    setup() { return { args }; },
    template: '<DXBadge v-bind="args">Активен</DXBadge>',
  }),
};

export const Warning = {
  args: {
    variant: 'warning',
  },
  render: (args) => ({
    components: { DXBadge },
    setup() { return { args }; },
    template: '<DXBadge v-bind="args">Ожидание</DXBadge>',
  }),
};

export const Danger = {
  args: {
    variant: 'danger',
  },
  render: (args) => ({
    components: { DXBadge },
    setup() { return { args }; },
    template: '<DXBadge v-bind="args">Ошибка</DXBadge>',
  }),
};

export const Info = {
  args: {
    variant: 'info',
  },
  render: (args) => ({
    components: { DXBadge },
    setup() { return { args }; },
    template: '<DXBadge v-bind="args">Информация</DXBadge>',
  }),
};

export const AllVariants = {
  render: () => ({
    components: { DXBadge },
    template: `
      <div class="flex flex-wrap gap-2">
        <DXBadge variant="slate">Slate</DXBadge>
        <DXBadge variant="success">Success</DXBadge>
        <DXBadge variant="warning">Warning</DXBadge>
        <DXBadge variant="danger">Danger</DXBadge>
        <DXBadge variant="info">Info</DXBadge>
      </div>
    `,
  }),
};

