import DXSkeleton from './DXSkeleton.vue';

export default {
  title: 'Atoms/v2/DXSkeleton',
  component: DXSkeleton,
  tags: ['autodocs'],
};

export const Default = {
  render: () => ({
    components: { DXSkeleton },
    template: '<DXSkeleton class="h-4 w-48" />',
  }),
};

export const Circle = {
  render: () => ({
    components: { DXSkeleton },
    template: '<DXSkeleton class="h-12 w-12 rounded-full" />',
  }),
};

export const Card = {
  render: () => ({
    components: { DXSkeleton },
    template: `
      <div class="space-y-3 p-4 border rounded-xl">
        <DXSkeleton class="h-4 w-3/4" />
        <DXSkeleton class="h-4 w-full" />
        <DXSkeleton class="h-4 w-1/2" />
      </div>
    `,
  }),
};

export const Avatar = {
  render: () => ({
    components: { DXSkeleton },
    template: `
      <div class="flex items-center gap-3">
        <DXSkeleton class="h-10 w-10 rounded-full" />
        <div class="space-y-2">
          <DXSkeleton class="h-4 w-24" />
          <DXSkeleton class="h-3 w-32" />
        </div>
      </div>
    `,
  }),
};

