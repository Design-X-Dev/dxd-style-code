<template>
  <span :class="allClasses" data-component="DXBadge" :data-variant="variant">
    <DXIcon v-if="iconLeft" :icon="iconLeft" size="xs" animation="none" />
    <slot />
    <DXIcon v-if="iconRight" :icon="iconRight" size="xs" animation="none" />
  </span>
</template>

<script setup>
import { computed } from "vue";
import DXIcon from "../DXIcon/DXIcon.vue";

const props = defineProps({
  /** Вариант оформления: slate | success | warning | danger | info */
  variant: { type: String, default: "slate" },
  /** Иконка слева */
  iconLeft: { type: Object, default: null },
  /** Иконка справа */
  iconRight: { type: Object, default: null },
});

const BASE_CLASSES = "inline-flex items-center gap-1 px-2 py-1 text-[11px] rounded-full border font-semibold";

const VARIANT_CLASSES = {
  slate: "bg-slate-50 text-slate-700 border-slate-100",
  success: "bg-emerald-50 text-emerald-700 border-emerald-100",
  warning: "bg-amber-50 text-amber-700 border-amber-100",
  danger: "bg-rose-50 text-rose-700 border-rose-100",
  info: "bg-blue-50 text-blue-700 border-blue-100",
};

const allClasses = computed(() => {
  const variantClass = VARIANT_CLASSES[props.variant] || VARIANT_CLASSES.slate;
  return `${BASE_CLASSES} ${variantClass}`;
});
</script>

