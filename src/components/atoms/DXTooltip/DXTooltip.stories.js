import DXTooltip from './DXTooltip.vue';

export default {
  title: 'Atoms/DXTooltip',
  component: DXTooltip,
  tags: ['autodocs'],
  argTypes: {
    position: { control: { type: 'select' }, options: ['top', 'bottom', 'left', 'right'] },
    color: { control: { type: 'select' }, options: ['dark', 'light'] },
  },
};

export const Default = {
  args: { content: 'This is a tooltip' },
  render: (args) => ({
    components: { DXTooltip },
    setup() { return { args }; },
    template: '<DXTooltip v-bind="args"><button class="px-4 py-2 bg-slate-100 rounded">Hover me</button></DXTooltip>',
  }),
};

export const Positions = {
  render: () => ({
    components: { DXTooltip },
    template: `
      <div class="flex gap-8 justify-center py-12">
        <DXTooltip content="Top tooltip" position="top">
          <button class="px-4 py-2 bg-slate-100 rounded">Top</button>
        </DXTooltip>
        <DXTooltip content="Bottom tooltip" position="bottom">
          <button class="px-4 py-2 bg-slate-100 rounded">Bottom</button>
        </DXTooltip>
        <DXTooltip content="Left tooltip" position="left">
          <button class="px-4 py-2 bg-slate-100 rounded">Left</button>
        </DXTooltip>
        <DXTooltip content="Right tooltip" position="right">
          <button class="px-4 py-2 bg-slate-100 rounded">Right</button>
        </DXTooltip>
      </div>
    `,
  }),
};

export const LightTheme = {
  args: { content: 'Light theme tooltip', color: 'light' },
  render: (args) => ({
    components: { DXTooltip },
    setup() { return { args }; },
    template: '<DXTooltip v-bind="args"><button class="px-4 py-2 bg-slate-800 text-white rounded">Hover me</button></DXTooltip>',
  }),
};

