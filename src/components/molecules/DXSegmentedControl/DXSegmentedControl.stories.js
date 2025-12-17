import DXSegmentedControl from './DXSegmentedControl.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXSegmentedControl',
  component: DXSegmentedControl,
  tags: ['autodocs'],
};

export const Default = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const selected = ref('all');
      const options = [
        { value: 'all', label: 'All' },
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
      ];
      return { selected, options };
    },
    template: '<DXSegmentedControl v-model="selected" :options="options" />',
  }),
};

export const WithCounts = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const selected = ref('all');
      const options = [
        { value: 'all', label: 'All', count: 42 },
        { value: 'active', label: 'Active', count: 28 },
        { value: 'archived', label: 'Archived', count: 14 },
      ];
      return { selected, options };
    },
    template: '<DXSegmentedControl v-model="selected" :options="options" />',
  }),
};

export const Disabled = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const selected = ref('option1');
      const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
      ];
      return { selected, options };
    },
    template: '<DXSegmentedControl v-model="selected" :options="options" disabled />',
  }),
};

