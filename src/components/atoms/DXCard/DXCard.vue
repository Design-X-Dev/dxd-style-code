<template>
  <div 
    :class="allClasses" 
    data-component="DXCard"
    :data-variant="variant"
    :data-padding="padding"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useSpacing } from "../../../composables/useSpacing";

const props = defineProps({
  /** Вариант: default | bordered | elevated | flat */
  variant: {
    type: String,
    default: "default",
    validator: (value) => ['default', 'bordered', 'elevated', 'flat'].includes(value)
  },
  /** Padding: none | xs | sm | md | lg | xl */
  padding: {
    type: String,
    default: "md",
    validator: (value) => ['none', 'xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
});

const BASE_CLASSES = "bg-white rounded-2xl";

const VARIANT_CLASSES = {
  default: "border border-slate-100 shadow-sm",
  bordered: "border-1 border-slate-200",
  elevated: "shadow-lg border border-slate-50",
  flat: "border-0",
};

const allClasses = computed(() => [
  BASE_CLASSES,
  VARIANT_CLASSES[props.variant],
  useSpacing(props.padding, 'padding')
]);
</script>

