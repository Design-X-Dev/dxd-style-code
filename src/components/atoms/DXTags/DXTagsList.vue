<template>
  <div class="flex flex-wrap gap-2" data-component="DXTagsList">
    <span
      v-for="tag in tags"
      :key="tag"
      :class="tagClasses"
    >
      {{ tag }}
    </span>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  tags: { type: Array, default: () => [] },
  variant: { type: String, default: "default" }, // 'default' | 'large'
});

const tagClasses = computed(() => 
  props.variant === 'large'
    ? 'px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-800 border border-slate-200'
    : 'px-2 py-1 text-xs rounded-full bg-slate-50 text-slate-700 border border-slate-100'
);
</script>

