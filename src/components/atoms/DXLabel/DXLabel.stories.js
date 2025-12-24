import DXLabel from './DXLabel.vue';

export default {
  title: 'Atoms/DXLabel',
  component: DXLabel,
  tags: ['autodocs', 'category:typography'],
};

export const Default = {
  args: {},
  render: (args) => ({
    components: { DXLabel },
    setup() { return { args }; },
    template: '<DXLabel v-bind="args">Email адрес</DXLabel>',
  }),
};

export const Required = {
  args: { required: true },
  render: (args) => ({
    components: { DXLabel },
    setup() { return { args }; },
    template: '<DXLabel v-bind="args">Обязательное поле</DXLabel>',
  }),
};

export const Sizes = {
  render: () => ({
    components: { DXLabel },
    template: `
      <div class="space-y-2">
        <DXLabel size="xs">Extra Small Label</DXLabel>
        <DXLabel size="sm">Small Label (default)</DXLabel>
        <DXLabel size="md">Medium Label</DXLabel>
        <DXLabel size="lg">Large Label</DXLabel>
      </div>
    `,
  }),
};

