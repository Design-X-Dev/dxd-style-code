import DXHeading from './DXHeading.vue';

export default {
  title: 'Atoms/DXHeading',
  component: DXHeading,
  tags: ['autodocs'],
  argTypes: {
    level: { control: { type: 'select' }, options: [1, 2, 3, 4, 5, 6] },
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] },
    weight: { control: { type: 'select' }, options: ['normal', 'medium', 'semibold', 'bold'] },
    color: { control: { type: 'select' }, options: ['default', 'muted', 'primary', 'success', 'warning', 'danger'] },
  },
};

export const Default = {
  args: { level: 1 },
  render: (args) => ({
    components: { DXHeading },
    setup() { return { args }; },
    template: '<DXHeading v-bind="args">Заголовок страницы</DXHeading>',
  }),
};

export const AllLevels = {
  render: () => ({
    components: { DXHeading },
    template: `
      <div class="space-y-4">
        <DXHeading :level="1">Heading 1</DXHeading>
        <DXHeading :level="2">Heading 2</DXHeading>
        <DXHeading :level="3">Heading 3</DXHeading>
        <DXHeading :level="4">Heading 4</DXHeading>
        <DXHeading :level="5">Heading 5</DXHeading>
        <DXHeading :level="6">Heading 6</DXHeading>
      </div>
    `,
  }),
};

export const Colors = {
  render: () => ({
    components: { DXHeading },
    template: `
      <div class="space-y-2">
        <DXHeading :level="3" color="default">Default Color</DXHeading>
        <DXHeading :level="3" color="muted">Muted Color</DXHeading>
        <DXHeading :level="3" color="success">Success Color</DXHeading>
        <DXHeading :level="3" color="warning">Warning Color</DXHeading>
        <DXHeading :level="3" color="danger">Danger Color</DXHeading>
      </div>
    `,
  }),
};

