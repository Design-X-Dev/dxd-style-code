import DXValidationIcon from './DXValidationIcon.vue';

export default {
  title: 'Atoms/DXValidationIcon',
  component: DXValidationIcon,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export const Default = {
  args: {
    state: 'success',
    size: 'md',
  },
};

export const States = () => ({
  components: { DXValidationIcon },
  template: `
    <div class="flex items-center gap-8">
      <div class="text-center">
        <DXValidationIcon state="success" size="lg" />
        <p class="text-xs mt-2 text-slate-600">Success</p>
      </div>
      <div class="text-center">
        <DXValidationIcon state="error" size="lg" />
        <p class="text-xs mt-2 text-slate-600">Error</p>
      </div>
      <div class="text-center">
        <DXValidationIcon state="warning" size="lg" />
        <p class="text-xs mt-2 text-slate-600">Warning</p>
      </div>
      <div class="text-center">
        <DXValidationIcon state="info" size="lg" />
        <p class="text-xs mt-2 text-slate-600">Info</p>
      </div>
    </div>
  `,
});

export const Sizes = () => ({
  components: { DXValidationIcon },
  template: `
    <div class="flex items-center gap-4">
      <DXValidationIcon state="success" size="sm" />
      <DXValidationIcon state="success" size="md" />
      <DXValidationIcon state="success" size="lg" />
    </div>
  `,
});

