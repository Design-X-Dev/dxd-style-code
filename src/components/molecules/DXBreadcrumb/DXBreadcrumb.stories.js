import DXBreadcrumb from './DXBreadcrumb.vue';

export default {
  title: 'Molecules/DXBreadcrumb',
  component: DXBreadcrumb,
  tags: ['autodocs'],
  argTypes: {
    separator: { control: { type: 'select' }, options: ['slash', 'chevron'] },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
  },
};

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Category', href: '/products/category' },
  { label: 'Current Page' },
];

export const Default = {
  args: { items },
};

export const WithSlash = {
  args: { items, separator: 'slash' },
};

export const Short = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Page' },
    ],
  },
};

export const Sizes = {
  render: () => ({
    components: { DXBreadcrumb },
    setup() { return { items }; },
    template: `
      <div class="space-y-4">
        <DXBreadcrumb :items="items" size="sm" />
        <DXBreadcrumb :items="items" size="md" />
        <DXBreadcrumb :items="items" size="lg" />
      </div>
    `,
  }),
};

