<template>
  <div
    v-if="activeFilters.length > 0"
    class="flex items-center justify-between gap-4 px-4 py-3 bg-slate-50 border-b border-slate-200"
    data-component="DXTableFiltersPanel"
  >
    <div class="flex items-center gap-3 flex-1 flex-wrap">
      <!-- Filter Icon and Count -->
      <div class="flex items-center gap-2 text-sm text-slate-600 font-medium">
        <DXIcon :icon="FunnelIcon" size="sm" class="text-slate-500" />
        <span>Активные фильтры ({{ activeFilters.length }})</span>
      </div>

      <!-- Filter Chips -->
      <DXTags
        :tags="filterTags"
        variant="default"
        color="primary"
        @remove="handleRemoveFilter"
      />
    </div>

    <!-- Clear All Button -->
    <button
      type="button"
      @click="handleClearAll"
      class="flex items-center gap-1.5 px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
    >
      <DXIcon :icon="XCircleIcon" size="sm" class="text-slate-500" />
      <span>Очистить все</span>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { FunnelIcon, XCircleIcon } from '@heroicons/vue/24/outline';
import DXIcon from '../../atoms/v2/DXIcon/DXIcon.vue';
import DXTags from '../../atoms/DXTags/DXTags.vue';

const props = defineProps({
  /** Список активных фильтров: [{ column, columnLabel, value, valueLabel }] */
  activeFilters: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(['remove-filter', 'clear-all']);

// Преобразовать активные фильтры в теги
const filterTags = computed(() => {
  return props.activeFilters.map((filter) => ({
    label: `${filter.columnLabel}: ${filter.valueLabel}`,
    closable: true,
    color: 'primary',
    data: filter, // Сохраняем исходные данные для удаления
  }));
});

const handleRemoveFilter = (event) => {
  const tag = event?.tag || event;
  if (tag?.data) {
    emit('remove-filter', tag.data.column);
  }
};

const handleClearAll = () => {
  emit('clear-all');
};
</script>

