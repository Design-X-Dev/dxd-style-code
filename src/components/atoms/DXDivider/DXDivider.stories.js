import DXDivider from './DXDivider.vue';

export default {
  title: 'Atoms/DXDivider',
  component: DXDivider,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: { type: 'select' }, options: ['horizontal', 'vertical'] },
    color: { control: { type: 'select' }, options: ['light', 'default', 'dark'] },
    spacing: { control: { type: 'select' }, options: ['none', 'sm', 'md', 'lg'] },
  },
};

export const Default = {
  render: () => ({
    components: { DXDivider },
    template: `
      <div>
        <p>Content above</p>
        <DXDivider />
        <p>Content below</p>
      </div>
    `,
  }),
};

export const WithText = {
  render: () => ({
    components: { DXDivider },
    template: `
      <div>
        <p>Section 1</p>
        <DXDivider>OR</DXDivider>
        <p>Section 2</p>
      </div>
    `,
  }),
};

export const Vertical = {
  render: () => ({
    components: { DXDivider },
    template: `
      <div class="flex items-center h-12">
        <span>Left</span>
        <DXDivider orientation="vertical" />
        <span>Right</span>
      </div>
    `,
  }),
};

export const Colors = {
  render: () => ({
    components: { DXDivider },
    template: `
      <div class="space-y-6">
        <DXDivider color="light" />
        <DXDivider color="default" />
        <DXDivider color="dark" />
      </div>
    `,
  }),
};

