import DXCard from './DXCard.vue';

export default {
  title: 'Atoms/DXCard',
  component: DXCard,
  tags: ['autodocs'],
};

export const Default = {
  render: () => ({
    components: { DXCard },
    template: `
      <DXCard class="p-6">
        <h3 class="font-semibold text-lg mb-2">Card Title</h3>
        <p class="text-slate-600">This is a simple card component.</p>
      </DXCard>
    `,
  }),
};

export const Clickable = {
  render: () => ({
    components: { DXCard },
    template: `
      <DXCard class="p-6 cursor-pointer hover:shadow-lg transition-shadow">
        <h3 class="font-semibold text-lg mb-2">Clickable Card</h3>
        <p class="text-slate-600">Hover to see effect.</p>
      </DXCard>
    `,
  }),
};

