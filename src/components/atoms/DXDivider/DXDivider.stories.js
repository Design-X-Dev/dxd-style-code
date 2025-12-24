import DXDivider from './DXDivider.vue';

export default {
  title: 'Atoms/DXDivider',
  component: DXDivider,
  tags: ['autodocs', 'category:feedback'],
  argTypes: {
    orientation: { 
      control: { type: 'select' }, 
      options: ['horizontal', 'vertical'],
      description: 'Ориентация разделителя'
    },
    color: { 
      control: { type: 'select' }, 
      options: ['light', 'default', 'dark'],
      description: 'Цвет разделителя'
    },
    thickness: { 
      control: { type: 'select' }, 
      options: ['thin', 'default', 'thick'],
      description: 'Толщина разделителя'
    },
    spacing: { 
      control: { type: 'select' }, 
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Отступы вокруг разделителя'
    },
  },
};

export const Default = {
  args: {
    orientation: 'horizontal',
    color: 'default',
    thickness: 'default',
    spacing: 'md',
  },
  render: (args) => ({
    components: { DXDivider },
    setup() { return { args }; },
    template: `
      <div>
        <p>Content above</p>
        <DXDivider v-bind="args" />
        <p>Content below</p>
      </div>
    `,
  }),
};

export const WithText = {
  render: () => ({
    components: { DXDivider },
    template: `
      <div class="space-y-6">
        <div>
          <p>Section 1</p>
          <DXDivider>OR</DXDivider>
          <p>Section 2</p>
        </div>
        <div>
          <p>Content above</p>
          <DXDivider color="dark" thickness="thick">Continue</DXDivider>
          <p>Content below</p>
        </div>
      </div>
    `,
  }),
};

export const Vertical = {
  args: {
    orientation: 'vertical',
    color: 'default',
    thickness: 'default',
    spacing: 'md',
  },
  render: (args) => ({
    components: { DXDivider },
    setup() { return { args }; },
    template: `
      <div class="flex items-center h-12">
        <span>Left</span>
        <DXDivider v-bind="args" />
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
        <div>
          <p class="text-sm text-slate-600 mb-2">Light</p>
          <DXDivider color="light" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Default</p>
          <DXDivider color="default" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Dark</p>
          <DXDivider color="dark" />
        </div>
      </div>
    `,
  }),
};

export const Thickness = {
  render: () => ({
    components: { DXDivider },
    template: `
      <div class="space-y-6">
        <div>
          <p class="text-sm text-slate-600 mb-2">Thin</p>
          <DXDivider thickness="thin" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Default</p>
          <DXDivider thickness="default" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Thick</p>
          <DXDivider thickness="thick" />
        </div>
      </div>
    `,
  }),
};


