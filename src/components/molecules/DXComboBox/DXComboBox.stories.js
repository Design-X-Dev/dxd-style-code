import DXComboBox from './DXComboBox.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXComboBox',
  component: DXComboBox,
  tags: ['autodocs'],
};

const countries = [
  { value: 'ru', label: 'Russia' },
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
];

export const Default = {
  render: () => ({
    components: { DXComboBox },
    setup() {
      const value = ref('');
      return { value, countries };
    },
    template: '<DXComboBox v-model="value" :options="countries" label="Country" placeholder="Search country..." />',
  }),
};

export const WithValue = {
  render: () => ({
    components: { DXComboBox },
    setup() {
      const value = ref('ru');
      return { value, countries };
    },
    template: '<DXComboBox v-model="value" :options="countries" label="Country" />',
  }),
};

export const AllowCustom = {
  render: () => ({
    components: { DXComboBox },
    setup() {
      const value = ref('');
      return { value, countries };
    },
    template: '<DXComboBox v-model="value" :options="countries" label="Country" placeholder="Type or select..." allow-custom helper="You can type a custom value" />',
  }),
};

export const Disabled = {
  render: () => ({
    components: { DXComboBox },
    setup() {
      const value = ref('us');
      return { value, countries };
    },
    template: '<DXComboBox v-model="value" :options="countries" label="Country" disabled />',
  }),
};

