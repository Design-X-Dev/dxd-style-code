import DXCard from './DXCard.vue';

export default {
  title: 'Atoms/DXCard',
  component: DXCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'elevated', 'flat'],
      description: 'Card variant style'
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Card padding size'
    },
  },
};

export const Default = {
  args: {
    variant: 'default',
    padding: 'md',
  },
  render: (args) => ({
    components: { DXCard },
    setup() {
      return { args };
    },
    template: `
      <DXCard v-bind="args">
        <h3 class="text-lg font-semibold text-slate-900 mb-2">Card Title</h3>
        <p class="text-sm text-slate-600">
          This is a card component with default styling. It includes border, shadow, and padding.
        </p>
      </DXCard>
    `,
  }),
};

// All variants
export const Variants = {
  render: () => ({
    components: { DXCard },
    template: `
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Default (border + shadow)</p>
          <DXCard variant="default">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Default Card</h3>
            <p class="text-sm text-slate-600">
              Subtle border and shadow for a clean, modern look.
            </p>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Bordered (2px border, no shadow)</p>
          <DXCard variant="bordered">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Bordered Card</h3>
            <p class="text-sm text-slate-600">
              More prominent border without shadow for emphasis.
            </p>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Elevated (large shadow)</p>
          <DXCard variant="elevated">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Elevated Card</h3>
            <p class="text-sm text-slate-600">
              Pronounced shadow creates a floating effect.
            </p>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Flat (no border or shadow)</p>
          <DXCard variant="flat">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Flat Card</h3>
            <p class="text-sm text-slate-600">
              Minimal styling, just background color and rounded corners.
            </p>
          </DXCard>
        </div>
      </div>
    `,
  }),
};

// All padding sizes
export const PaddingSizes = {
  render: () => ({
    components: { DXCard },
    template: `
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">No Padding</p>
          <DXCard padding="none">
            <div class="h-32 flex items-center justify-center text-slate-500">
              Content with no padding
            </div>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Small Padding (p-3)</p>
          <DXCard padding="sm">
            <h3 class="text-base font-semibold text-slate-900 mb-1">Small</h3>
            <p class="text-sm text-slate-600">Compact padding for dense layouts.</p>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Medium Padding (p-5, default)</p>
          <DXCard padding="md">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Medium</h3>
            <p class="text-sm text-slate-600">Standard padding for most use cases.</p>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Large Padding (p-8)</p>
          <DXCard padding="lg">
            <h3 class="text-xl font-semibold text-slate-900 mb-3">Large</h3>
            <p class="text-sm text-slate-600">Generous padding for spacious layouts.</p>
          </DXCard>
        </div>
      </div>
    `,
  }),
};

// Clickable card
export const Clickable = {
  render: () => ({
    components: { DXCard },
    template: `
      <DXCard class="cursor-pointer hover:shadow-lg transition-shadow">
        <h3 class="text-lg font-semibold text-slate-900 mb-2">Clickable Card</h3>
        <p class="text-sm text-slate-600">Hover to see effect.</p>
      </DXCard>
    `,
  }),
};

// Combined: Variants + Padding
export const VariantsPaddingCombinations = {
  render: () => ({
    components: { DXCard },
    template: `
      <div class="grid grid-cols-2 gap-4">
        <DXCard variant="elevated" padding="lg">
          <h3 class="text-xl font-semibold text-slate-900 mb-2">Featured Card</h3>
          <p class="text-sm text-slate-600">Elevated variant with large padding.</p>
        </DXCard>
        
        <DXCard variant="bordered" padding="sm">
          <h3 class="text-base font-semibold text-slate-900 mb-1">Compact Card</h3>
          <p class="text-xs text-slate-600">Bordered variant with small padding.</p>
        </DXCard>
        
        <DXCard variant="flat" padding="none">
          <img src="https://via.placeholder.com/400x200" alt="Placeholder" class="w-full rounded-t-2xl" />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Image Card</h3>
            <p class="text-sm text-slate-600">Flat variant with custom padding.</p>
          </div>
        </DXCard>
        
        <DXCard variant="default" padding="md">
          <h3 class="text-lg font-semibold text-slate-900 mb-2">Standard Card</h3>
          <p class="text-sm text-slate-600">Default variant with medium padding.</p>
        </DXCard>
      </div>
    `,
  }),
};
