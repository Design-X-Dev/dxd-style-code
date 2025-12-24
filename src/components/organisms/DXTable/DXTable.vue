<template>
  <div class="dx-table-wrapper" data-component="DXTable">
    <!-- Toolbar -->
    <DXTableToolbar
      v-if="showToolbar && hasToolbarContent"
      v-model:searchQuery="searchQuery"
      :size="size"
      :searchable="searchable"
      :selectedCount="selectedRows.length"
      :columnToggle="columnToggle"
      :columns="columnsWithVisibility"
      @toggle-column="toggleColumn"
    >
      <template #right>
        <slot name="toolbar-actions" />
      </template>
    </DXTableToolbar>

    <!-- Active Filters Panel -->
    <DXTableFiltersPanel
      v-if="filterable"
      :activeFilters="activeFilters"
      @remove-filter="handleRemoveFilter"
      @clear-all="handleClearAllFilters"
    />

    <!-- Base Table -->
    <DXBaseTable
      :columns="visibleColumns"
      :data="displayData"
      :sortBy="sortBy"
      :sortDirection="sortDirection"
      :selectedRows="selectedRows"
      :selectable="selectable"
      :actions="actions"
      :filterable="filterable"
      :filters="filters"
      :getFilterOptions="getColumnFilterOptions"
      :groupBy="groupBy"
      :height="height"
      :stickyHeader="stickyHeader"
      :striped="striped"
      :bordered="bordered"
      :hoverable="hoverable"
      :dense="dense"
      :size="size"
      :loading="loading"
      @sort="handleSort"
      @filter="handleFilter"
      @row-click="$emit('row-click', $event)"
      @row-select="handleRowSelect"
      @select-all="handleSelectAll"
      @edit="$emit('edit', $event)"
      @delete="$emit('delete', $event)"
    >
      <!-- Forward all slots to DXBaseTable -->
      <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
        <slot :name="slot" v-bind="scope || {}" />
      </template>
    </DXBaseTable>

    <!-- Pagination -->
    <DXTablePagination
      v-if="paginated && !loading && displayData.length > 0"
      v-model:currentPage="currentPage"
      v-model:pageSize="pageSize"
      :size="size"
      :totalPages="totalPages"
      :pageSizeOptions="pageSizeOptions"
      :from="paginationInfo.from"
      :to="paginationInfo.to"
      :total="paginationInfo.total"
    />
  </div>
</template>

<script setup>
import { computed, useSlots } from 'vue';

const slots = useSlots();

// Components
import DXBaseTable from '../DXBaseTable/DXBaseTable.vue';
import DXTableToolbar from '../../molecules/DXTableToolbar/DXTableToolbar.vue';
import DXTablePagination from '../../molecules/DXTablePagination/DXTablePagination.vue';
import DXTableFiltersPanel from '../../molecules/DXTableFiltersPanel/DXTableFiltersPanel.vue';

// Composables
import { useTableData } from '../../../composables/useTableData';
import { useTableSort } from '../../../composables/useTableSort';
import { useTableFilter } from '../../../composables/useTableFilter';
import { useTablePagination } from '../../../composables/useTablePagination';
import { useTableSelection } from '../../../composables/useTableSelection';
import { useTableColumns } from '../../../composables/useTableColumns';

const props = defineProps({
  // Data
  columns: {
    type: Array,
    required: true,
    // [{ key, label, sortable, filterable, filterOptions, width, align, format }]
  },
  data: {
    type: Array,
    default: () => [],
  },

  // Data Mode
  mode: {
    type: String,
    default: 'local',
    validator: (v) => ['local', 'api'].includes(v),
  },
  apiUrl: {
    type: String,
  },
  apiMethod: {
    type: String,
    default: 'GET',
  },
  apiParams: {
    type: Object,
    default: () => ({}),
  },

  // Features
  searchable: {
    type: Boolean,
    default: false,
  },
  filterable: {
    type: Boolean,
    default: false,
  },
  sortable: {
    type: Boolean,
    default: true,
  },
  paginated: {
    type: Boolean,
    default: true,
  },
  selectable: {
    type: Boolean,
    default: false,
  },
  groupBy: {
    type: String,
  },

  // UI
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  height: {
    type: String,
  },
  stickyHeader: {
    type: Boolean,
    default: true,
  },
  striped: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  hoverable: {
    type: Boolean,
    default: true,
  },
  dense: {
    type: Boolean,
    default: false,
  },

  // Toolbar
  showToolbar: {
    type: Boolean,
    default: true,
  },
  columnToggle: {
    type: Boolean,
    default: false,
  },
  actions: {
    type: Boolean,
    default: false,
  },

  // Pagination
  defaultPageSize: {
    type: Number,
    default: 10,
  },
  pageSizeOptions: {
    type: Array,
    default: () => [10, 25, 50, 100],
  },

  // Sort
  defaultSort: {
    type: Object,
    // { column: 'name', direction: 'asc' }
  },

  // Loading
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([
  'row-click',
  'row-select',
  'select-all',
  'sort',
  'filter',
  'filter-clear',
  'page-change',
  'page-size-change',
  'edit',
  'delete',
  'data-loaded',
  'error',
  'column-toggle',
  'selection-clear',
]);

// Initialize composables
const { localData, loading: dataLoading, error: dataError, loadData } = useTableData(props, emit);
const { sortBy, sortDirection, sortedData, toggleSort } = useTableSort(localData, props, emit);
const { 
  searchQuery, 
  filters, 
  filteredData, 
  applyFilter, 
  getFilterOptions,
  activeFilters,
  activeFiltersCount,
  clearFilters,
  clearColumnFilter,
} = useTableFilter(sortedData, props, emit, localData);
const {
  currentPage,
  pageSize,
  totalPages,
  paginatedData,
  paginationInfo,
  changePageSize,
} = useTablePagination(filteredData, props, emit);
const {
  selectedRows,
  allSelected,
  someSelected,
  isSelected,
  toggleRow,
  selectAll,
} = useTableSelection(filteredData, props, emit);
const {
  visibleColumns,
  columnsWithVisibility,
  toggleColumn,
} = useTableColumns(props, emit);

// Check if toolbar has content
const hasToolbarContent = computed(() => {
  return props.searchable || props.columnToggle || !!slots['toolbar-actions'];
});

// Display data - final processed data
const displayData = computed(() => {
  if (props.groupBy) {
    return filteredData.value; // Grouping handles its own display
  }
  return paginatedData.value;
});

// Get filter options for column
const getColumnFilterOptions = (column) => {
  return getFilterOptions(column);
};

// Handle filter from DXBaseTable
const handleFilter = ({ column, value }) => {
  applyFilter(column, value);
};

// Handle remove filter from panel
const handleRemoveFilter = (column) => {
  clearColumnFilter(column);
};

// Handle clear all filters
const handleClearAllFilters = () => {
  clearFilters();
};

// Handle sort from DXBaseTable
const handleSort = ({ column, direction }) => {
  toggleSort(column);
};

// Handle row select from DXBaseTable
const handleRowSelect = ({ id, selected }) => {
  toggleRow(id);
};

// Handle select all from DXBaseTable
const handleSelectAll = (selected) => {
  selectAll();
};
</script>

<style scoped>
.dx-table-wrapper {
  background-color: white;
}
</style>
