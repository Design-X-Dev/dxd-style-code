import DXContainer from './DXContainer.vue';

export default {
  title: 'Layout/DXContainer',
  component: DXContainer,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'] },
    padding: { control: { type: 'select' }, options: ['none', 'sm', 'md', 'lg'] },
  },
};

export const Default = {
  args: { size: 'lg' },
  render: (args) => ({
    components: { DXContainer },
    setup() { return { args }; },
    template: '<DXContainer v-bind="args" class="bg-slate-100 py-8"><div class="bg-white p-4 rounded">Content inside container</div></DXContainer>',
  }),
};

export const Sizes = {
  render: () => ({
    components: { DXContainer },
    template: `
      <div class="space-y-4">
        <DXContainer size="sm" class="bg-blue-100 py-4"><div class="bg-white p-2 rounded">Small</div></DXContainer>
        <DXContainer size="md" class="bg-green-100 py-4"><div class="bg-white p-2 rounded">Medium</div></DXContainer>
        <DXContainer size="lg" class="bg-yellow-100 py-4"><div class="bg-white p-2 rounded">Large</div></DXContainer>
        <DXContainer size="xl" class="bg-red-100 py-4"><div class="bg-white p-2 rounded">Extra Large</div></DXContainer>
      </div>
    `,
  }),
};

