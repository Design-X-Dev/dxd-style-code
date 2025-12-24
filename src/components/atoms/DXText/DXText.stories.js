import DXText from './DXText.vue';

export default {
  title: 'Atoms/DXText',
  component: DXText,
  tags: ['autodocs', 'category:typography'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    weight: { control: { type: 'select' }, options: ['normal', 'medium', 'semibold', 'bold'] },
    color: { control: { type: 'select' }, options: ['default', 'muted', 'primary', 'success', 'warning', 'danger'] },
    align: { control: { type: 'select' }, options: ['left', 'center', 'right', 'justify'] },
  },
};

export const Default = {
  args: {},
  render: (args) => ({
    components: { DXText },
    setup() { return { args }; },
    template: '<DXText v-bind="args">Это обычный текстовый параграф с настройками по умолчанию.</DXText>',
  }),
};

export const Sizes = {
  render: () => ({
    components: { DXText },
    template: `
      <div class="space-y-2">
        <DXText size="xs">Extra Small Text</DXText>
        <DXText size="sm">Small Text</DXText>
        <DXText size="md">Medium Text (default)</DXText>
        <DXText size="lg">Large Text</DXText>
        <DXText size="xl">Extra Large Text</DXText>
      </div>
    `,
  }),
};

export const Truncated = {
  args: { truncate: true },
  render: (args) => ({
    components: { DXText },
    setup() { return { args }; },
    template: '<div class="w-48"><DXText v-bind="args">Это очень длинный текст который будет обрезан с многоточием</DXText></div>',
  }),
};

