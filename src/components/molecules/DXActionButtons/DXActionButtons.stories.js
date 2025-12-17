import DXActionButtons from './DXActionButtons.vue';

export default {
  title: 'Molecules/DXActionButtons',
  component: DXActionButtons,
  tags: ['autodocs'],
};

export const Default = {
  render: () => ({
    components: { DXActionButtons },
    template: `
      <DXActionButtons>
        <button class="px-4 py-2 bg-slate-100 rounded-xl text-sm">Cancel</button>
        <button class="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm">Save</button>
      </DXActionButtons>
    `,
  }),
};

export const WithDanger = {
  render: () => ({
    components: { DXActionButtons },
    template: `
      <DXActionButtons>
        <button class="px-4 py-2 bg-slate-100 rounded-xl text-sm">Cancel</button>
        <button class="px-4 py-2 bg-rose-600 text-white rounded-xl text-sm">Delete</button>
      </DXActionButtons>
    `,
  }),
};

