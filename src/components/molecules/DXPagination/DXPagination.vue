<template>
  <DXNav type="pagination" class="flex items-center gap-1" data-component="DXPagination">
    <!-- Previous -->
    <button
      type="button"
      :disabled="modelValue <= 1"
      :class="[navButtonClasses, modelValue <= 1 && 'opacity-50 cursor-not-allowed']"
      @click="goTo(modelValue - 1)"
      aria-label="Предыдущая"
    >
      <DXIcon :icon="ChevronLeftIcon" size="sm" animation="none" />
    </button>

    <!-- Pages -->
    <template v-for="page in visiblePages" :key="page">
      <span v-if="page === '...'" class="px-2 text-slate-400">...</span>
      <button
        v-else
        type="button"
        :class="[pageButtonClasses, page === modelValue && activeClasses]"
        :aria-current="page === modelValue ? 'page' : undefined"
        @click="goTo(page)"
      >
        {{ page }}
      </button>
    </template>

    <!-- Next -->
    <button
      type="button"
      :disabled="modelValue >= totalPages"
      :class="[navButtonClasses, modelValue >= totalPages && 'opacity-50 cursor-not-allowed']"
      @click="goTo(modelValue + 1)"
      aria-label="Следующая"
    >
      <DXIcon :icon="ChevronRightIcon" size="sm" animation="none" />
    </button>
  </DXNav>
</template>

<script setup>
import { computed } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";
import DXNav from "../../atoms/DXNav/DXNav.vue";

const props = defineProps({
  /** Текущая страница (v-model) */
  modelValue: { type: Number, default: 1 },
  /** Всего страниц */
  totalPages: { type: Number, required: true },
  /** Сколько страниц показывать вокруг текущей */
  siblingCount: { type: Number, default: 1 },
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
});

const emit = defineEmits(["update:modelValue"]);

const goTo = (page) => {
  if (page >= 1 && page <= props.totalPages) {
    emit("update:modelValue", page);
  }
};

const visiblePages = computed(() => {
  const current = props.modelValue;
  const total = props.totalPages;
  const siblings = props.siblingCount;
  
  const pages = [];
  
  // Always show first page
  pages.push(1);
  
  // Calculate range around current
  const leftSibling = Math.max(2, current - siblings);
  const rightSibling = Math.min(total - 1, current + siblings);
  
  // Add ellipsis after first if needed
  if (leftSibling > 2) {
    pages.push("...");
  }
  
  // Add pages around current
  for (let i = leftSibling; i <= rightSibling; i++) {
    if (i !== 1 && i !== total) {
      pages.push(i);
    }
  }
  
  // Add ellipsis before last if needed
  if (rightSibling < total - 1) {
    pages.push("...");
  }
  
  // Always show last page if more than 1
  if (total > 1) {
    pages.push(total);
  }
  
  return pages;
});

const sizeClasses = {
  sm: "h-7 min-w-7 text-xs",
  md: "h-9 min-w-9 text-sm",
  lg: "h-11 min-w-11 text-base",
};

const navButtonClasses = computed(() => [
  "inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors",
  sizeClasses[props.size] || sizeClasses.md,
]);

const pageButtonClasses = computed(() => [
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
  sizeClasses[props.size] || sizeClasses.md,
  "text-slate-600 hover:bg-slate-100",
]);

const activeClasses = "bg-slate-900 text-white hover:bg-slate-800";
</script>

