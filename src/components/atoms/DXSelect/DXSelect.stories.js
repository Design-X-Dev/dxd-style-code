import DXSelect from './DXSelect.vue';
import { ref } from 'vue';

export default {
  title: 'Atoms/DXSelect',
  component: DXSelect,
  tags: ['autodocs'],
};

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
];

export const Default = {
  render: () => ({
    components: { DXSelect },
    setup() {
      const value = ref('');
      return { value, options };
    },
    template: '<DXSelect v-model="value" :options="options" label="Choose fruit" placeholder="Select..." />',
  }),
};

export const WithValue = {
  render: () => ({
    components: { DXSelect },
    setup() {
      const value = ref('banana');
      return { value, options };
    },
    template: '<DXSelect v-model="value" :options="options" label="Fruit" />',
  }),
};

export const Disabled = {
  render: () => ({
    components: { DXSelect },
    setup() {
      const value = ref('apple');
      return { value, options };
    },
    template: '<DXSelect v-model="value" :options="options" label="Disabled" disabled />',
  }),
};

