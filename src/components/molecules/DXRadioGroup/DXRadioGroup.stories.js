import DXRadioGroup from './DXRadioGroup.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXRadioGroup',
  component: DXRadioGroup,
  tags: ['autodocs'],
};

const options = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
];

export const Default = {
  render: () => ({
    components: { DXRadioGroup },
    setup() {
      const size = ref('medium');
      return { size, options };
    },
    template: '<DXRadioGroup v-model="size" :options="options" label="Size" />',
  }),
};

export const Horizontal = {
  render: () => ({
    components: { DXRadioGroup },
    setup() {
      const size = ref('medium');
      return { size, options };
    },
    template: '<DXRadioGroup v-model="size" :options="options" label="Size" direction="horizontal" />',
  }),
};

