import DXFileUpload from './DXFileUpload.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXFileUpload',
  component: DXFileUpload,
  tags: ['autodocs'],
};

export const Default = {
  render: () => ({
    components: { DXFileUpload },
    setup() {
      const file = ref(null);
      return { file };
    },
    template: '<DXFileUpload v-model="file" label="Upload file" />',
  }),
};

export const Multiple = {
  render: () => ({
    components: { DXFileUpload },
    setup() {
      const files = ref([]);
      return { files };
    },
    template: '<DXFileUpload v-model="files" label="Upload files" multiple />',
  }),
};

export const ImagesOnly = {
  render: () => ({
    components: { DXFileUpload },
    setup() {
      const file = ref(null);
      return { file };
    },
    template: '<DXFileUpload v-model="file" label="Upload image" accept="image/*" helper="PNG, JPG up to 5MB" />',
  }),
};

export const Disabled = {
  render: () => ({
    components: { DXFileUpload },
    setup() {
      const file = ref(null);
      return { file };
    },
    template: '<DXFileUpload v-model="file" label="Disabled upload" disabled />',
  }),
};

