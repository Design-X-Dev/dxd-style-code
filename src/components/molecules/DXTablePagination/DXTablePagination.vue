<template>
  <div 
    class="flex items-center justify-between py-4 px-0 bg-white" 
    data-component="DXTablePagination"
  >
    <!-- Results Info -->
    <div :class="textSizeClass">
      Показано {{ from }}-{{ to }} из {{ total }}
    </div>

    <!-- Pagination Controls -->
    <div class="flex items-center gap-4">
      <DXPagination
        :modelValue="currentPage"
        :totalPages="totalPages"
        :size="size"
        @update:modelValue="$emit('update:currentPage', $event)"
      />

      <!-- Page Size Selector -->
      <DXSelect
        :modelValue="pageSize"
        @update:modelValue="$emit('update:pageSize', $event)"
        :options="pageSizeOptions.map(v => ({ value: v, label: `${v} / стр` }))"
        :size="size"
        class="w-32"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import DXPagination from '../DXPagination/DXPagination.vue';
import DXSelect from '../../atoms/DXSelect/DXSelect.vue';

const props = defineProps({
  /** Размер элементов управления */
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  /** Текущая страница */
  currentPage: {
    type: Number,
    required: true,
  },
  /** Всего страниц */
  totalPages: {
    type: Number,
    required: true,
  },
  /** Размер страницы */
  pageSize: {
    type: Number,
    required: true,
  },
  /** Опции размера страницы */
  pageSizeOptions: {
    type: Array,
    default: () => [10, 25, 50, 100],
  },
  /** Номер первого элемента на странице */
  from: {
    type: Number,
    required: true,
  },
  /** Номер последнего элемента на странице */
  to: {
    type: Number,
    required: true,
  },
  /** Общее количество элементов */
  total: {
    type: Number,
    required: true,
  },
});

defineEmits(['update:currentPage', 'update:pageSize']);

// Размер текста в зависимости от размера компонента
const textSizeClass = computed(() => {
  const sizeMap = {
    sm: 'text-xs text-slate-600',
    md: 'text-sm text-slate-600',
    lg: 'text-base text-slate-600',
  };
  return sizeMap[props.size] || sizeMap.md;
});
</script>

