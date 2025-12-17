import DXTabs from './DXTabs.vue';
import { ref } from 'vue';

export default {
  title: 'Organisms/DXTabs',
  component: DXTabs,
  tags: ['autodocs'],
};

const tabs = [
  { value: 'overview', label: 'Overview' },
  { value: 'features', label: 'Features' },
  { value: 'pricing', label: 'Pricing' },
  { value: 'faq', label: 'FAQ' },
];

export const Default = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('overview');
      return { activeTab, tabs };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" />',
  }),
};

export const WithCounts = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('all');
      const tabsWithCount = [
        { value: 'all', label: 'All', count: 42 },
        { value: 'active', label: 'Active', count: 28 },
        { value: 'archived', label: 'Archived', count: 14 },
      ];
      return { activeTab, tabsWithCount };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabsWithCount" />',
  }),
};

