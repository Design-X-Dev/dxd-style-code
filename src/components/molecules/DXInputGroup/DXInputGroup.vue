<template>
  <div class="w-full" data-component="DXInputGroup">
    <label v-if="label" class="block text-sm font-medium text-slate-700 mb-1">{{ label }}</label>
    <div class="flex">
      <slot />
    </div>
    <p v-if="helper" class="mt-1 text-xs text-slate-500">{{ helper }}</p>
  </div>
</template>

<script setup>
import { provide } from "vue";

const props = defineProps({
  label: { type: String, default: "" },
  helper: { type: String, default: "" },
  size: { type: String, default: "md" },
});

provide("inputGroup", {
  size: props.size,
});
</script>

