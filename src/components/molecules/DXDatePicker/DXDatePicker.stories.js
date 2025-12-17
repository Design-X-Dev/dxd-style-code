import DXDatePicker from './DXDatePicker.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXDatePicker',
  component: DXDatePicker,
  tags: ['autodocs'],
};

export const Default = {
  render: () => ({
    components: { DXDatePicker },
    setup() {
      const date = ref('');
      return { date };
    },
    template: '<DXDatePicker v-model="date" label="Date" />',
  }),
};

export const WithValue = {
  render: () => ({
    components: { DXDatePicker },
    setup() {
      const date = ref('2024-01-15');
      return { date };
    },
    template: '<DXDatePicker v-model="date" label="Selected Date" />',
  }),
};

export const WithPlaceholder = {
  render: () => ({
    components: { DXDatePicker },
    setup() {
      const date = ref('');
      return { date };
    },
    template: '<DXDatePicker v-model="date" label="Birth Date" placeholder="Select your birth date" />',
  }),
};

