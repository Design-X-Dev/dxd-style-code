import DXCloseButton from './DXCloseButton.vue';

export default {
  title: 'Atoms/DXCloseButton',
  component: DXCloseButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'light', 'danger'],
    },
  },
};

export const Default = {
  args: {
    size: 'md',
    variant: 'default',
  },
};

export const Sizes = () => ({
  components: { DXCloseButton },
  template: `
    <div class="flex items-center gap-4">
      <DXCloseButton size="sm" />
      <DXCloseButton size="md" />
      <DXCloseButton size="lg" />
    </div>
  `,
});

export const Variants = () => ({
  components: { DXCloseButton },
  template: `
    <div class="flex items-center gap-4">
      <div class="p-4 bg-white border rounded">
        <DXCloseButton variant="default" />
      </div>
      <div class="p-4 bg-slate-800 rounded">
        <DXCloseButton variant="light" />
      </div>
      <div class="p-4 bg-white border rounded">
        <DXCloseButton variant="danger" />
      </div>
    </div>
  `,
});

