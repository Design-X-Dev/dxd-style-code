import DXStack from './DXStack.vue';

export default {
  title: 'Layout/DXStack',
  component: DXStack,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: { type: 'select' }, options: ['vertical', 'horizontal'] },
    gap: { control: { type: 'select' }, options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] },
    align: { control: { type: 'select' }, options: ['start', 'center', 'end', 'stretch'] },
  },
};

const item = '<div class="bg-slate-100 p-4 rounded-lg">Stack Item</div>';

export const Vertical = {
  args: { direction: 'vertical', gap: 'md' },
  render: (args) => ({
    components: { DXStack },
    setup() { return { args }; },
    template: `<DXStack v-bind="args">${item.repeat(4)}</DXStack>`,
  }),
};

export const Horizontal = {
  args: { direction: 'horizontal', gap: 'md' },
  render: (args) => ({
    components: { DXStack },
    setup() { return { args }; },
    template: `<DXStack v-bind="args">${item.repeat(4)}</DXStack>`,
  }),
};

export const WithDividers = {
  args: { direction: 'vertical', gap: 'md', dividers: true },
  render: (args) => ({
    components: { DXStack },
    setup() { return { args }; },
    template: `<DXStack v-bind="args">${item.repeat(3)}</DXStack>`,
  }),
};

