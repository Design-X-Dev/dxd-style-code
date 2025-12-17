import DXFilterGroup from './DXFilterGroup.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXFilterGroup',
  component: DXFilterGroup,
  tags: ['autodocs'],
};

const filters = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'pending', label: 'Pending' },
  { value: 'completed', label: 'Completed' },
];

export const Default = {
  render: () => ({
    components: { DXFilterGroup },
    setup() {
      const selected = ref('all');
      return { selected, filters };
    },
    template: '<DXFilterGroup v-model="selected" :filters="filters" />',
  }),
};

export const WithCounts = {
  render: () => ({
    components: { DXFilterGroup },
    setup() {
      const selected = ref('all');
      const filtersWithCount = [
        { value: 'all', label: 'All', count: 50 },
        { value: 'active', label: 'Active', count: 32 },
        { value: 'completed', label: 'Completed', count: 18 },
      ];
      return { selected, filtersWithCount };
    },
    template: '<DXFilterGroup v-model="selected" :filters="filtersWithCount" />',
  }),
};

