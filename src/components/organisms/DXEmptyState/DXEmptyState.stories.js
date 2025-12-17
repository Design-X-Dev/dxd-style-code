import DXEmptyState from './DXEmptyState.vue';

export default {
  title: 'Organisms/DXEmptyState',
  component: DXEmptyState,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: 'No items found',
    description: 'Get started by creating your first item.',
  },
};

export const NoResults = {
  args: {
    title: 'No results',
    description: 'Try adjusting your search or filter to find what you\'re looking for.',
  },
};

export const WithAction = {
  render: () => ({
    components: { DXEmptyState },
    template: `
      <DXEmptyState title="No projects yet" description="Create your first project to get started.">
        <template #action>
          <button class="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-semibold">
            Create Project
          </button>
        </template>
      </DXEmptyState>
    `,
  }),
};

