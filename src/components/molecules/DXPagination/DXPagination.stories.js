import DXPagination from './DXPagination.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXPagination',
  component: DXPagination,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
  },
};

export const Default = {
  render: () => ({
    components: { DXPagination },
    setup() {
      const page = ref(1);
      return { page };
    },
    template: '<DXPagination v-model="page" :total-pages="10" />',
  }),
};

export const MiddlePage = {
  render: () => ({
    components: { DXPagination },
    setup() {
      const page = ref(5);
      return { page };
    },
    template: '<DXPagination v-model="page" :total-pages="10" />',
  }),
};

export const ManyPages = {
  render: () => ({
    components: { DXPagination },
    setup() {
      const page = ref(15);
      return { page };
    },
    template: '<DXPagination v-model="page" :total-pages="50" />',
  }),
};

export const Sizes = {
  render: () => ({
    components: { DXPagination },
    setup() {
      const page = ref(1);
      return { page };
    },
    template: `
      <div class="space-y-4">
        <DXPagination v-model="page" :total-pages="10" size="sm" />
        <DXPagination v-model="page" :total-pages="10" size="md" />
        <DXPagination v-model="page" :total-pages="10" size="lg" />
      </div>
    `,
  }),
};

