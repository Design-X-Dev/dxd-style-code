import DXAlert from './DXAlert.vue';

export default {
  title: 'Molecules/DXAlert',
  component: DXAlert,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: { type: 'select' }, options: ['info', 'success', 'warning', 'danger'] },
  },
};

export const Info = {
  args: { variant: 'info', title: 'Information' },
  render: (args) => ({
    components: { DXAlert },
    setup() { return { args }; },
    template: '<DXAlert v-bind="args">This is an informational message.</DXAlert>',
  }),
};

export const Success = {
  args: { variant: 'success', title: 'Success' },
  render: (args) => ({
    components: { DXAlert },
    setup() { return { args }; },
    template: '<DXAlert v-bind="args">Your changes have been saved successfully.</DXAlert>',
  }),
};

export const Warning = {
  args: { variant: 'warning', title: 'Warning' },
  render: (args) => ({
    components: { DXAlert },
    setup() { return { args }; },
    template: '<DXAlert v-bind="args">Please review before continuing.</DXAlert>',
  }),
};

export const Danger = {
  args: { variant: 'danger', title: 'Error' },
  render: (args) => ({
    components: { DXAlert },
    setup() { return { args }; },
    template: '<DXAlert v-bind="args">Something went wrong. Please try again.</DXAlert>',
  }),
};

export const Dismissible = {
  args: { variant: 'info', title: 'Dismissible', dismissible: true },
  render: (args) => ({
    components: { DXAlert },
    setup() { return { args }; },
    template: '<DXAlert v-bind="args">Click the X to dismiss this alert.</DXAlert>',
  }),
};

export const AllVariants = {
  render: () => ({
    components: { DXAlert },
    template: `
      <div class="space-y-4">
        <DXAlert variant="info" title="Info">Informational message</DXAlert>
        <DXAlert variant="success" title="Success">Success message</DXAlert>
        <DXAlert variant="warning" title="Warning">Warning message</DXAlert>
        <DXAlert variant="danger" title="Error">Error message</DXAlert>
      </div>
    `,
  }),
};

