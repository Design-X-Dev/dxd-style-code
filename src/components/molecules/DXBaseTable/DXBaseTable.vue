<template>
  <div 
    :style="{ maxHeight: height }" 
    :class="['border border-slate-200 rounded-2xl overflow-auto', height && 'relative']"
    data-component="DXBaseTable"
  >
    <table class="min-w-full divide-y divide-slate-200">
      <!-- Header -->
      <thead :class="['bg-slate-50', stickyHeader && height && 'sticky top-0 z-10']">
        <tr>
          <!-- Checkbox Column -->
          <th v-if="selectable" class="px-4 py-3 w-12">
            <DXCheckbox
              :checked="allSelected"
              :indeterminate="someSelected"
              @change="handleSelectAll"
              :size="size"
            />
          </th>

          <!-- Data Columns -->
          <th
            v-for="col in columns"
            :key="col.key"
            :style="col.width && { width: col.width }"
            :class="[
              'px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide',
              col.sortable !== false && 'cursor-pointer hover:bg-slate-100',
            ]"
            @click="col.sortable !== false && handleSort(col.key)"
          >
            <div class="flex items-center gap-2">
              <span>{{ col.label }}</span>
              <DXIcon
                v-if="sortBy === col.key"
                :icon="sortDirection === 'asc' ? ChevronUpIcon : ChevronDownIcon"
                size="xs"
                class="text-slate-500"
              />
              <!-- Filter Icon -->
              <div
                v-if="filterable && col.filterable !== false"
                class="flex items-center"
                @click.stop
              >
                <DXDropdown
                  position="bottom"
                  width="auto"
                  variant="minimal"
                  :showChevron="false"
                >
                  <template #trigger>
                    <button
                      type="button"
                      class="p-1 rounded hover:bg-slate-100 transition-colors"
                      :class="{
                        'text-blue-600': filters[col.key],
                        'text-slate-400': !filters[col.key]
                      }"
                      @click.stop
                    >
                      <DXIcon
                        :icon="FunnelIcon"
                        size="xs"
                        :class="filters[col.key] ? 'text-blue-600' : 'text-slate-400'"
                      />
                    </button>
                  </template>
                  <div class="p-2 min-w-[200px]">
                    <DXSearchSelect
                      :modelValue="filters[col.key] || ''"
                      @update:modelValue="handleFilter(col.key, $event)"
                      :options="props.getFilterOptions ? props.getFilterOptions(col) : []"
                      :size="size"
                      placeholder="Все"
                      :searchPlaceholder="`Поиск ${col.label.toLowerCase()}...`"
                    />
                  </div>
                </DXDropdown>
              </div>
            </div>
          </th>

          <!-- Actions Column -->
          <th v-if="actions" class="px-4 py-3 w-20 text-right">
            <span class="text-xs font-semibold text-slate-600 uppercase tracking-wide">
              Действия
            </span>
          </th>
        </tr>
      </thead>

      <!-- Body -->
      <tbody class="divide-y divide-slate-200 bg-white">
        <!-- Loading State -->
        <tr v-if="loading">
          <td :colspan="totalColumns" class="text-center py-12">
            <DXLoader size="lg" />
            <p class="mt-2 text-sm text-slate-500">Загрузка данных...</p>
          </td>
        </tr>

        <!-- Empty State -->
        <tr v-else-if="data.length === 0">
          <td :colspan="totalColumns" class="text-center py-12">
            <slot name="empty">
              <div class="text-slate-500">
                <p class="text-sm">Нет данных для отображения</p>
              </div>
            </slot>
          </td>
        </tr>

        <!-- Data Rows -->
        <template v-else>
          <!-- Grouped Rows -->
          <template v-if="groupBy">
            <template v-for="(group, groupKey) in groupedData" :key="groupKey">
              <tr class="bg-slate-100">
                <td :colspan="totalColumns" class="px-4 py-2 font-semibold text-slate-700">
                  {{ groupKey }} ({{ group.length }})
                </td>
              </tr>
              <tr
                v-for="row in group"
                :key="row.id"
                :class="[
                  hoverable && 'hover:bg-slate-50',
                  striped && 'even:bg-slate-50',
                  isRowSelected(row.id) && 'bg-blue-50',
                  'transition-colors'
                ]"
                @click="$emit('row-click', row)"
              >
                <td v-if="selectable" class="px-4 py-3">
                  <DXCheckbox
                    :checked="isRowSelected(row.id)"
                    @change="handleRowSelect(row.id)"
                    :size="size"
                    @click.stop
                  />
                </td>

                <td
                  v-for="col in columns"
                  :key="`${row.id}-${col.key}`"
                  :class="[
                    'px-4 py-3 text-sm text-slate-700',
                    col.align === 'center' && 'text-center',
                    col.align === 'right' && 'text-right',
                    dense && 'py-2'
                  ]"
                >
                  <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]" :column="col">
                    {{ formatCell(row[col.key], col) }}
                  </slot>
                </td>

                <td v-if="actions" class="px-4 py-3 text-right">
                  <div class="flex justify-end">
                    <slot name="actions" :row="row">
                      <DXDropdown position="right" width="auto">
                        <template #trigger>
                          <DXIcon :icon="EllipsisVerticalIcon" :size="size" class="cursor-pointer" />
                        </template>
                        <DXDropdownItem :icon="PencilIcon" @click="$emit('edit', row)">
                          Редактировать
                        </DXDropdownItem>
                        <DXDropdownDivider />
                        <DXDropdownItem :icon="TrashIcon" variant="danger" @click="$emit('delete', row)">
                          Удалить
                        </DXDropdownItem>
                      </DXDropdown>
                    </slot>
                  </div>
                </td>
              </tr>
            </template>
          </template>

          <!-- Regular Rows -->
          <tr
            v-else
            v-for="row in data"
            :key="row.id"
            :class="[
              hoverable && 'hover:bg-slate-50 cursor-pointer',
              striped && 'even:bg-slate-50',
              isRowSelected(row.id) && 'bg-blue-50',
              'transition-colors'
            ]"
            @click="$emit('row-click', row)"
          >
            <td v-if="selectable" class="px-4 py-3">
              <DXCheckbox
                :checked="isRowSelected(row.id)"
                @change="handleRowSelect(row.id)"
                :size="size"
                @click.stop
              />
            </td>

            <td
              v-for="col in columns"
              :key="`${row.id}-${col.key}`"
              :class="[
                'px-4 py-3 text-sm text-slate-700',
                col.align === 'center' && 'text-center',
                col.align === 'right' && 'text-right',
                dense && 'py-2'
              ]"
            >
              <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]" :column="col">
                {{ formatCell(row[col.key], col) }}
              </slot>
            </td>

            <td v-if="actions" class="px-4 py-3 text-right">
              <div class="flex justify-end">
                <slot name="actions" :row="row">
                  <DXDropdown position="right" width="auto">
                    <template #trigger>
                      <DXIcon :icon="EllipsisVerticalIcon" :size="size" class="cursor-pointer" />
                    </template>
                    <DXDropdownItem :icon="PencilIcon" @click="$emit('edit', row)">
                      Редактировать
                    </DXDropdownItem>
                    <DXDropdownDivider />
                    <DXDropdownItem :icon="TrashIcon" variant="danger" @click="$emit('delete', row)">
                      Удалить
                    </DXDropdownItem>
                  </DXDropdown>
                </slot>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon,
  FunnelIcon,
} from '@heroicons/vue/24/outline';

// Components
import DXIcon from '../../atoms/DXIcon/DXIcon.vue';
import DXCheckbox from '../../atoms/DXCheckbox/DXCheckbox.vue';
import DXDropdown from '../../organisms/DXDropdown/DXDropdown.vue';
import DXDropdownItem from '../../atoms/DXDropdownItem/DXDropdownItem.vue';
import DXDropdownDivider from '../../atoms/DXDropdownDivider/DXDropdownDivider.vue';
import DXLoader from '../../atoms/DXLoader/DXLoader.vue';
import DXSearchSelect from '../../molecules/DXSearchSelect/DXSearchSelect.vue';

const props = defineProps({
  // Data
  columns: {
    type: Array,
    required: true,
    // [{ key, label, sortable, width, align, format }]
  },
  data: {
    type: Array,
    default: () => [],
  },

  // Sorting (controlled)
  sortBy: {
    type: String,
    default: '',
  },
  sortDirection: {
    type: String,
    default: 'asc',
    validator: (v) => ['asc', 'desc'].includes(v),
  },

  // Selection (controlled)
  selectable: {
    type: Boolean,
    default: false,
  },
  selectedRows: {
    type: Array,
    default: () => [],
  },

  // Actions
  actions: {
    type: Boolean,
    default: false,
  },

  // Filtering
  filterable: {
    type: Boolean,
    default: false,
  },
  filters: {
    type: Object,
    default: () => ({}),
  },
  getFilterOptions: {
    type: Function,
    default: null,
  },

  // Grouping
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
  'edit',
  'delete',
]);

// Total columns count (for colspan)
const totalColumns = computed(() => {
  let count = props.columns.length;
  if (props.selectable) count++;
  if (props.actions) count++;
  return count;
});

// Grouped data
const groupedData = computed(() => {
  if (!props.groupBy) return {};

  return props.data.reduce((groups, row) => {
    const key = row[props.groupBy] || 'Без группы';
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(row);
    return groups;
  }, {});
});

// Selection helpers
const isRowSelected = (id) => {
  return props.selectedRows.includes(id);
};

const allSelected = computed(() => {
  return props.data.length > 0 && props.data.every(row => isRowSelected(row.id));
});

const someSelected = computed(() => {
  return props.data.some(row => isRowSelected(row.id)) && !allSelected.value;
});

// Format cell value
const formatCell = (value, column) => {
  if (value == null) return '-';
  
  if (column.format) {
    if (typeof column.format === 'function') {
      return column.format(value);
    }
  }
  
  return value;
};

// Event handlers
const handleSort = (column) => {
  const newDirection = 
    props.sortBy === column && props.sortDirection === 'asc' 
      ? 'desc' 
      : 'asc';
  
  emit('sort', { column, direction: newDirection });
};

const handleFilter = (column, value) => {
  emit('filter', { column, value });
};

const handleRowSelect = (id) => {
  emit('row-select', { id, selected: !isRowSelected(id) });
};

const handleSelectAll = () => {
  emit('select-all', !allSelected.value);
};
</script>

<style scoped>
/* Стили для скроллбара */
div ::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

div ::-webkit-scrollbar-track {
  background-color: rgb(241 245 249);
}

div ::-webkit-scrollbar-thumb {
  background-color: rgb(203 213 225);
  border-radius: 0.25rem;
}

div ::-webkit-scrollbar-thumb:hover {
  background-color: rgb(148 163 184);
}
</style>

