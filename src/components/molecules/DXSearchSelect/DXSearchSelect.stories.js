import DXSearchSelect from './DXSearchSelect.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXSearchSelect',
  component: DXSearchSelect,
  tags: ['autodocs'],
};

const users = [
  { value: '1', label: 'John Doe' },
  { value: '2', label: 'Jane Smith' },
  { value: '3', label: 'Bob Johnson' },
  { value: '4', label: 'Alice Williams' },
  { value: '5', label: 'Charlie Brown' },
];

export const Default = {
  render: () => ({
    components: { DXSearchSelect },
    setup() {
      const value = ref('');
      return { value, users };
    },
    template: '<DXSearchSelect v-model="value" :options="users" label="Select User" placeholder="Search users..." />',
  }),
};

export const WithValue = {
  render: () => ({
    components: { DXSearchSelect },
    setup() {
      const value = ref('2');
      return { value, users };
    },
    template: '<DXSearchSelect v-model="value" :options="users" label="Assigned To" />',
  }),
};

export const Multiple = {
  render: () => ({
    components: { DXSearchSelect },
    setup() {
      const value = ref([]);
      return { value, users };
    },
    template: '<DXSearchSelect v-model="value" :options="users" label="Team Members" multiple />',
  }),
};

