import DXSlider from './DXSlider.vue';
import { ref } from 'vue';

export default {
  title: 'Atoms/DXSlider',
  component: DXSlider,
  tags: ['autodocs'],
};

export const Default = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const value = ref(50);
      return { value };
    },
    template: '<DXSlider v-model="value" />',
  }),
};

export const WithLabel = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const value = ref(75);
      return { value };
    },
    template: '<DXSlider v-model="value" label="Volume" />',
  }),
};

export const Range = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const value = ref(30);
      return { value };
    },
    template: '<DXSlider v-model="value" :min="0" :max="100" :step="10" label="Brightness" />',
  }),
};

