<template>
  <DXNav type="pagination" class="flex items-center gap-1" data-component="DXPagination">
    <!-- Previous -->
    <DXButton
      variant="ghost"
      :size="size"
      icon-only
      :disabled="modelValue <= 1"
      @click="goTo(modelValue - 1)"
      aria-label="Предыдущая"
    >
      <DXIcon :icon="ChevronLeftIcon" size="sm" animation="none" />
    </DXButton>

    <!-- Pages -->
    <template v-for="page in visiblePages" :key="page">
      <span v-if="page === '...'" class="px-2 text-slate-400">...</span>
      <DXButton
        v-else
        :variant="page === modelValue ? 'primary' : 'ghost'"
        :size="size"
        :aria-current="page === modelValue ? 'page' : undefined"
        @click="goTo(page)"
      >
        {{ page }}
      </DXButton>
    </template>

    <!-- Next -->
    <DXButton
      variant="ghost"
      :size="size"
      icon-only
      :disabled="modelValue >= totalPages"
      @click="goTo(modelValue + 1)"
      aria-label="Следующая"
    >
      <DXIcon :icon="ChevronRightIcon" size="sm" animation="none" />
    </DXButton>
  </DXNav>
</template>

<script setup>
import { computed } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";
import DXButton from "../../atoms/DXButton/DXButton.vue";
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
</script>

