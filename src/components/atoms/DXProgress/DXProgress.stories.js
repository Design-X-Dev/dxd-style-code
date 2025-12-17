import DXProgress from './DXProgress.vue';

export default {
  title: 'Atoms/DXProgress',
  component: DXProgress,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg'] },
    color: { control: { type: 'select' }, options: ['default', 'success', 'warning', 'danger', 'info'] },
  },
};

export const Default = {
  args: { value: 60 },
};

export const WithLabel = {
  args: { value: 75, label: 'Загрузка файлов', showLabel: true, showValue: true },
};

export const Colors = {
  render: () => ({
    components: { DXProgress },
    template: `
      <div class="space-y-4">
        <DXProgress :value="80" color="default" />
        <DXProgress :value="80" color="success" />
        <DXProgress :value="80" color="warning" />
        <DXProgress :value="80" color="danger" />
        <DXProgress :value="80" color="info" />
      </div>
    `,
  }),
};

export const Striped = {
  args: { value: 70, striped: true, animated: true },
};

export const Sizes = {
  render: () => ({
    components: { DXProgress },
    template: `
      <div class="space-y-4">
        <DXProgress :value="60" size="xs" />
        <DXProgress :value="60" size="sm" />
        <DXProgress :value="60" size="md" />
        <DXProgress :value="60" size="lg" />
      </div>
    `,
  }),
};

