import DXFlex from './DXFlex.vue';

export default {
  title: 'Layout/DXFlex',
  component: DXFlex,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: { type: 'select' }, options: ['row', 'row-reverse', 'col', 'col-reverse'] },
    justify: { control: { type: 'select' }, options: ['start', 'center', 'end', 'between', 'around', 'evenly'] },
    align: { control: { type: 'select' }, options: ['start', 'center', 'end', 'stretch', 'baseline'] },
    gap: { control: { type: 'select' }, options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'] },
  },
};

const box = '<div class="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center">Box</div>';

export const Default = {
  args: { justify: 'start', gap: 'md' },
  render: (args) => ({
    components: { DXFlex },
    setup() { return { args }; },
    template: `<DXFlex v-bind="args">${box.repeat(4)}</DXFlex>`,
  }),
};

export const JustifyBetween = {
  args: { justify: 'between', gap: 'md' },
  render: (args) => ({
    components: { DXFlex },
    setup() { return { args }; },
    template: `<DXFlex v-bind="args">${box.repeat(3)}</DXFlex>`,
  }),
};

export const Column = {
  args: { direction: 'col', gap: 'sm' },
  render: (args) => ({
    components: { DXFlex },
    setup() { return { args }; },
    template: `<DXFlex v-bind="args">${box.repeat(3)}</DXFlex>`,
  }),
};

