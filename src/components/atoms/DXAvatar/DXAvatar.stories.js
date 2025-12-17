import DXAvatar from './DXAvatar.vue';

export default {
  title: 'Atoms/DXAvatar',
  component: DXAvatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    shape: { control: { type: 'select' }, options: ['circle', 'square', 'rounded'] },
    status: { control: { type: 'select' }, options: ['', 'online', 'offline', 'busy', 'away'] },
  },
};

export const Default = {
  args: { initials: 'JD' },
};

export const WithImage = {
  args: { src: 'https://i.pravatar.cc/100', alt: 'User' },
};

export const Sizes = {
  render: () => ({
    components: { DXAvatar },
    template: `
      <div class="flex items-end gap-4">
        <DXAvatar size="xs" initials="XS" />
        <DXAvatar size="sm" initials="SM" />
        <DXAvatar size="md" initials="MD" />
        <DXAvatar size="lg" initials="LG" />
        <DXAvatar size="xl" initials="XL" />
      </div>
    `,
  }),
};

export const WithStatus = {
  render: () => ({
    components: { DXAvatar },
    template: `
      <div class="flex gap-4">
        <DXAvatar initials="ON" status="online" />
        <DXAvatar initials="OF" status="offline" />
        <DXAvatar initials="BU" status="busy" />
        <DXAvatar initials="AW" status="away" />
      </div>
    `,
  }),
};

export const Shapes = {
  render: () => ({
    components: { DXAvatar },
    template: `
      <div class="flex gap-4">
        <DXAvatar initials="CI" shape="circle" />
        <DXAvatar initials="SQ" shape="square" />
        <DXAvatar initials="RD" shape="rounded" />
      </div>
    `,
  }),
};

