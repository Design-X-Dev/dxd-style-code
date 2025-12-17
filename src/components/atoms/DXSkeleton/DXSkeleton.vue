<template>
  <div
    :class="['animate-pulse bg-slate-200', rounded]"
    :style="{ width, height }"
    data-component="DXSkeleton"
  />
</template>

<script setup>
defineProps({
  /** Ширина */
  width: { type: String, default: "100%" },
  /** Высота */
  height: { type: String, default: "1rem" },
  /** Скругление */
  rounded: { type: String, default: "rounded-md" },
});
</script>

