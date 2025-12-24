import DXBlockquote from './DXBlockquote.vue';

export default {
  title: 'Atoms/DXBlockquote',
  component: DXBlockquote,
  tags: ['autodocs', 'category:typography'],
  argTypes: {
    variant: { control: { type: 'select' }, options: ['default', 'bordered', 'highlighted'] },
  },
};

export const Default = {
  args: { cite: 'Стив Джобс' },
  render: (args) => ({
    components: { DXBlockquote },
    setup() { return { args }; },
    template: '<DXBlockquote v-bind="args">Дизайн — это не только то, как что-то выглядит и ощущается. Дизайн — это то, как что-то работает.</DXBlockquote>',
  }),
};

export const Variants = {
  render: () => ({
    components: { DXBlockquote },
    template: `
      <div class="space-y-6">
        <DXBlockquote variant="default">Default variant without border</DXBlockquote>
        <DXBlockquote variant="bordered">Bordered variant with left border</DXBlockquote>
        <DXBlockquote variant="highlighted">Highlighted variant with background</DXBlockquote>
      </div>
    `,
  }),
};

