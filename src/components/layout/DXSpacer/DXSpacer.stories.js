import DXSpacer from './DXSpacer.vue';

export default {
  title: 'Layout/DXSpacer',
  component: DXSpacer,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] },
    direction: { control: { type: 'select' }, options: ['vertical', 'horizontal', 'both'] },
  },
};

export const Vertical = {
  render: () => ({
    components: { DXSpacer },
    template: `
      <div>
        <div class="bg-slate-100 p-4 rounded">Above</div>
        <DXSpacer size="lg" />
        <div class="bg-slate-100 p-4 rounded">Below</div>
      </div>
    `,
  }),
};

export const Horizontal = {
  render: () => ({
    components: { DXSpacer },
    template: `
      <div class="flex">
        <div class="bg-slate-100 p-4 rounded">Left</div>
        <DXSpacer size="lg" direction="horizontal" />
        <div class="bg-slate-100 p-4 rounded">Right</div>
      </div>
    `,
  }),
};

export const FlexGrow = {
  render: () => ({
    components: { DXSpacer },
    template: `
      <div class="flex">
        <div class="bg-slate-100 p-4 rounded">Start</div>
        <DXSpacer grow />
        <div class="bg-slate-100 p-4 rounded">End</div>
      </div>
    `,
  }),
};

