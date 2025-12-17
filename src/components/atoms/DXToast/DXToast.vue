<template>
  <div
    class="flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm"
    :class="variantClasses"
    data-component="DXToast"
    :data-variant="variant"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Вариант: info | success | warning | danger */
  variant: { type: String, default: "info" },
});

const variantClasses = computed(() => {
  switch (props.variant) {
    case "success": return "bg-emerald-50 border-emerald-200 text-emerald-800";
    case "warning": return "bg-amber-50 border-amber-200 text-amber-800";
    case "danger": return "bg-rose-50 border-rose-200 text-rose-800";
    default: return "bg-blue-50 border-blue-200 text-blue-800";
  }
});
</script>

