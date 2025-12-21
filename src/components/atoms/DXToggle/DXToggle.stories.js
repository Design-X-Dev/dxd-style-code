import DXToggle from './DXToggle.vue';
import { ref } from 'vue';

export default {
  title: 'Atoms/v1/DXToggle',
  component: DXToggle,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    color: { control: { type: 'select' }, options: ['slate', 'primary', 'success', 'danger', 'warning', 'info'] },
    animation: { control: { type: 'select' }, options: ['none', 'smooth'] },
  },
};

export const Default = {
  render: () => ({
    components: { DXToggle },
    setup() {
      const enabled = ref(false);
      return { enabled };
    },
    template: '<DXToggle v-model="enabled" />',
  }),
};

export const WithLabel = {
  render: () => ({
    components: { DXToggle },
    setup() {
      const enabled = ref(true);
      return { enabled };
    },
    template: '<DXToggle v-model="enabled" label="Enable notifications" />',
  }),
};

export const Sizes = {
  render: () => ({
    components: { DXToggle },
    setup() {
      const xs = ref(false);
      const sm = ref(false);
      const md = ref(false);
      const lg = ref(false);
      const xl = ref(false);
      return { xs, sm, md, lg, xl };
    },
    template: `
      <div class="flex flex-col gap-4 py-8">
        <div class="flex items-center gap-4">
          <DXToggle v-model="xs" size="xs" label="Extra small" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="sm" size="sm" label="Small" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="md" size="md" label="Medium (default)" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="lg" size="lg" label="Large" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="xl" size="xl" label="Extra large" />
        </div>
      </div>
    `,
  }),
};

export const Colors = {
  render: () => ({
    components: { DXToggle },
    setup() {
      const slate = ref(true);
      const primary = ref(true);
      const success = ref(true);
      const danger = ref(true);
      const warning = ref(true);
      const info = ref(true);
      return { slate, primary, success, danger, warning, info };
    },
    template: `
      <div class="flex flex-col gap-4 py-8">
        <div class="flex items-center gap-4">
          <DXToggle v-model="slate" color="slate" label="Slate" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="primary" color="primary" label="Primary" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="success" color="success" label="Success" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="danger" color="danger" label="Danger" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="warning" color="warning" label="Warning" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="info" color="info" label="Info" />
        </div>
      </div>
    `,
  }),
};

export const Animations = {
  render: () => ({
    components: { DXToggle },
    setup() {
      const smooth = ref(false);
      const none = ref(false);
      return { smooth, none };
    },
    template: `
      <div class="flex flex-col gap-4 py-8">
        <div class="flex items-center gap-4">
          <DXToggle v-model="smooth" animation="smooth" label="Smooth animation (default)" />
        </div>
        <div class="flex items-center gap-4">
          <DXToggle v-model="none" animation="none" label="No animation" />
        </div>
      </div>
    `,
  }),
};

export const Disabled = {
  render: () => ({
    components: { DXToggle },
    setup() {
      const enabled = ref(false);
      return { enabled };
    },
    template: '<DXToggle v-model="enabled" label="Disabled toggle" disabled />',
  }),
};

