import DXTextarea from './DXTextarea.vue';
import { ref } from 'vue';

export default {
  title: 'Atoms/DXTextarea',
  component: DXTextarea,
  tags: ['autodocs'],
};

export const Default = {
  render: () => ({
    components: { DXTextarea },
    setup() {
      const value = ref('');
      return { value };
    },
    template: '<DXTextarea v-model="value" label="Description" placeholder="Enter description..." />',
  }),
};

export const WithValue = {
  render: () => ({
    components: { DXTextarea },
    setup() {
      const value = ref('This is some sample text in the textarea.');
      return { value };
    },
    template: '<DXTextarea v-model="value" label="Notes" />',
  }),
};

export const WithHelper = {
  render: () => ({
    components: { DXTextarea },
    setup() {
      const value = ref('');
      return { value };
    },
    template: '<DXTextarea v-model="value" label="Bio" helper="Maximum 500 characters" />',
  }),
};

export const Disabled = {
  render: () => ({
    components: { DXTextarea },
    setup() {
      const value = ref('Disabled content');
      return { value };
    },
    template: '<DXTextarea v-model="value" label="Disabled" disabled />',
  }),
};

