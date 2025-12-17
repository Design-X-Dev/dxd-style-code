import DXLoader from './DXLoader.vue';

export default {
  title: 'Atoms/DXLoader',
  component: DXLoader,
  tags: ['autodocs'],
};

export const Default = {
  render: () => ({
    components: { DXLoader },
    template: '<DXLoader />',
  }),
};

export const Sizes = {
  render: () => ({
    components: { DXLoader },
    template: `
      <div class="flex items-center gap-8">
        <DXLoader size="sm" />
        <DXLoader size="md" />
        <DXLoader size="lg" />
      </div>
    `,
  }),
};

export const WithText = {
  render: () => ({
    components: { DXLoader },
    template: `
      <div class="flex items-center gap-2">
        <DXLoader size="sm" />
        <span>Loading...</span>
      </div>
    `,
  }),
};

