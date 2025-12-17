import DXToggle from './DXToggle.vue';
import { ref } from 'vue';

export default {
  title: 'Atoms/DXToggle',
  component: DXToggle,
  tags: ['autodocs'],
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

