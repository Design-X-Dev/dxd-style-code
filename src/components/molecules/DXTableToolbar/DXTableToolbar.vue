<template>
  <div 
    class="flex items-center justify-between gap-4 py-4 px-0 bg-white" 
    data-component="DXTableToolbar"
  >
    <div class="flex items-center gap-4 flex-1">
      <!-- Search -->
      <DXInput
        v-if="searchable"
        :modelValue="searchQuery"
        @update:modelValue="$emit('update:searchQuery', $event)"
        placeholder="Поиск..."
        :size="size"
        class="max-w-xs"
      >
        <template #prefix>
          <DXIcon :icon="MagnifyingGlassIcon" :size="size" class="text-slate-400" />
        </template>
      </DXInput>

      <!-- Selection Info -->
      <div v-if="selectedCount > 0" class="text-sm text-slate-600">
        Выбрано: {{ selectedCount }}
      </div>

      <!-- Custom slot for left side -->
      <slot name="left" />
    </div>

    <div class="flex items-center gap-2">
      <!-- Custom slot for right side -->
      <slot name="right" />

      <!-- Column Toggle -->
      <DXDropdown v-if="columnToggle" position="bottom" width="auto">
        <template #trigger>
          <DXIcon :icon="ViewColumnsIcon" size="md" />
          <span class="text-sm">Столбцы</span>
        </template>
        <div class="p-2 space-y-1">
          <div
            v-for="col in columns"
            :key="col.key"
            class="flex items-center gap-2 px-2 py-1 hover:bg-slate-50 rounded"
          >
            <DXCheckbox
              :checked="col.visible"
              @change="$emit('toggle-column', col.key)"
              :size="size"
            />
            <span class="text-sm">{{ col.label }}</span>
          </div>
        </div>
      </DXDropdown>
    </div>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon, ViewColumnsIcon } from '@heroicons/vue/24/outline';
import DXInput from '../DXInput/DXInput.vue';
import DXIcon from '../../atoms/v2/DXIcon/DXIcon.vue';
import DXCheckbox from '../../atoms/v2/DXCheckbox/DXCheckbox.vue';
import DXDropdown from '../../organisms/DXDropdown/DXDropdown.vue';

defineProps({
  /** Размер элементов управления */
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  /** Значение поискового запроса */
  searchQuery: {
    type: String,
    default: '',
  },
  /** Показать поиск */
  searchable: {
    type: Boolean,
    default: false,
  },
  /** Количество выбранных элементов */
  selectedCount: {
    type: Number,
    default: 0,
  },
  /** Показать переключатель столбцов */
  columnToggle: {
    type: Boolean,
    default: false,
  },
  /** Список столбцов с информацией о видимости */
  columns: {
    type: Array,
    default: () => [],
  },
});

defineEmits(['update:searchQuery', 'toggle-column']);
</script>

