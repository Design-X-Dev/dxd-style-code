import { ref } from 'vue';
import DXTablePagination from './DXTablePagination.vue';

export default {
  title: 'Molecules/DXTablePagination',
  component: DXTablePagination,
  tags: ['autodocs'],
};

// Default
export const Default = {
  render: () => ({
    components: { DXTablePagination },
    setup() {
      const currentPage = ref(1);
      const pageSize = ref(10);
      return { currentPage, pageSize };
    },
    template: `
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        :totalPages="10"
        :from="1"
        :to="10"
        :total="100"
      />
    `,
  }),
};

// Middle Page
export const MiddlePage = {
  render: () => ({
    components: { DXTablePagination },
    setup() {
      const currentPage = ref(5);
      const pageSize = ref(25);
      return { currentPage, pageSize };
    },
    template: `
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        :totalPages="20"
        :from="101"
        :to="125"
        :total="500"
      />
    `,
  }),
};

// Last Page
export const LastPage = {
  render: () => ({
    components: { DXTablePagination },
    setup() {
      const currentPage = ref(10);
      const pageSize = ref(10);
      return { currentPage, pageSize };
    },
    template: `
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        :totalPages="10"
        :from="91"
        :to="100"
        :total="100"
      />
    `,
  }),
};

// Large Dataset
export const LargeDataset = {
  render: () => ({
    components: { DXTablePagination },
    setup() {
      const currentPage = ref(42);
      const pageSize = ref(50);
      return { currentPage, pageSize };
    },
    template: `
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        :totalPages="200"
        :pageSizeOptions="[10, 25, 50, 100, 200]"
        :from="2051"
        :to="2100"
        :total="10000"
      />
    `,
  }),
};

// Interactive
export const Interactive = {
  render: () => ({
    components: { DXTablePagination },
    setup() {
      const currentPage = ref(1);
      const pageSize = ref(10);
      const handlePageChange = (page) => {
        console.log('Page changed to:', page);
      };
      const handlePageSizeChange = (size) => {
        console.log('Page size changed to:', size);
        currentPage.value = 1;
      };
      return { currentPage, pageSize, handlePageChange, handlePageSizeChange };
    },
    template: `
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        :totalPages="50"
        :from="(currentPage - 1) * pageSize + 1"
        :to="Math.min(currentPage * pageSize, 500)"
        :total="500"
        @update:currentPage="handlePageChange"
        @update:pageSize="handlePageSizeChange"
      />
    `,
  }),
};

// Small Size
export const SmallSize = {
  render: () => ({
    components: { DXTablePagination },
    setup() {
      const currentPage = ref(5);
      const pageSize = ref(10);
      return { currentPage, pageSize };
    },
    template: `
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        size="sm"
        :totalPages="20"
        :from="41"
        :to="50"
        :total="200"
      />
    `,
  }),
};

// Medium Size
export const MediumSize = {
  render: () => ({
    components: { DXTablePagination },
    setup() {
      const currentPage = ref(5);
      const pageSize = ref(10);
      return { currentPage, pageSize };
    },
    template: `
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        size="md"
        :totalPages="20"
        :from="41"
        :to="50"
        :total="200"
      />
    `,
  }),
};

// Large Size
export const LargeSize = {
  render: () => ({
    components: { DXTablePagination },
    setup() {
      const currentPage = ref(5);
      const pageSize = ref(10);
      return { currentPage, pageSize };
    },
    template: `
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        size="lg"
        :totalPages="20"
        :from="41"
        :to="50"
        :total="200"
      />
    `,
  }),
};

// Playground
export const Playground = {
  args: {
    size: 'md',
    currentPage: 1,
    totalPages: 10,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
    from: 1,
    to: 10,
    total: 100,
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    pageSize: { control: 'select', options: [10, 25, 50, 100] },
    from: { control: 'number' },
    to: { control: 'number' },
    total: { control: 'number' },
  },
  render: (args) => ({
    components: { DXTablePagination },
    setup() {
      const currentPage = ref(args.currentPage);
      const pageSize = ref(args.pageSize);
      return { args, currentPage, pageSize };
    },
    template: `
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        v-bind="args"
      />
    `,
  }),
};

