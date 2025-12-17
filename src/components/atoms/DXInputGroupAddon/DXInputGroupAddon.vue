<template>
  <div
    class="flex items-center px-3 border border-r-0 bg-slate-50 text-slate-600 text-sm first:rounded-l-xl last:rounded-r-xl last:border-r"
    :class="sizeClasses"
    data-component="DXInputGroupAddon"
  >
    <component v-if="icon" :is="icon" class="w-4 h-4" />
    <slot />
  </div>
</template>

<script setup>
import { inject, computed } from "vue";

const props = defineProps({
  icon: { type: Object, default: null },
});

const inputGroup = inject("inputGroup", { size: "md" });

const sizeClasses = computed(() => {
  const sizes = {
    sm: "h-9",
    md: "h-11",
    lg: "h-13",
  };
  return sizes[inputGroup.size] || sizes.md;
});
</script>

