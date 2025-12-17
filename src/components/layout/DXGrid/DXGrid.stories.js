import DXGrid from './DXGrid.vue';

export default {
  title: 'Layout/DXGrid',
  component: DXGrid,
  tags: ['autodocs'],
  argTypes: {
    cols: { control: { type: 'select' }, options: [1, 2, 3, 4, 6, 12, 'auto'] },
    gap: { control: { type: 'select' }, options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'] },
  },
};

const gridItem = '<div class="bg-slate-100 rounded-lg p-4 text-center">Item</div>';

export const Default = {
  args: { cols: 3, gap: 'md' },
  render: (args) => ({
    components: { DXGrid },
    setup() { return { args }; },
    template: `
      <DXGrid v-bind="args">
        ${Array(6).fill(gridItem).join('')}
      </DXGrid>
    `,
  }),
};

export const Responsive = {
  args: { cols: 1, colsSm: 2, colsMd: 3, colsLg: 4 },
  render: (args) => ({
    components: { DXGrid },
    setup() { return { args }; },
    template: `
      <DXGrid v-bind="args">
        ${Array(8).fill(gridItem).join('')}
      </DXGrid>
    `,
  }),
};

export const AutoFit = {
  args: { cols: 'auto', gap: 'md' },
  render: (args) => ({
    components: { DXGrid },
    setup() { return { args }; },
    template: `
      <DXGrid v-bind="args">
        ${Array(5).fill(gridItem).join('')}
      </DXGrid>
    `,
  }),
};

