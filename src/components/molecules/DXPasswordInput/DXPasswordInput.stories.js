import DXPasswordInput from './DXPasswordInput.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXPasswordInput',
  component: DXPasswordInput,
  tags: ['autodocs', 'category:form'],
};

export const Default = {
  render: () => ({
    components: { DXPasswordInput },
    setup() {
      const password = ref('');
      return { password };
    },
    template: '<DXPasswordInput v-model="password" label="Password" placeholder="Enter password" />',
  }),
};

export const WithValue = {
  render: () => ({
    components: { DXPasswordInput },
    setup() {
      const password = ref('secretpassword');
      return { password };
    },
    template: '<DXPasswordInput v-model="password" label="Password" />',
  }),
};

export const WithHelper = {
  render: () => ({
    components: { DXPasswordInput },
    setup() {
      const password = ref('');
      return { password };
    },
    template: '<DXPasswordInput v-model="password" label="Password" helper="At least 8 characters" />',
  }),
};

