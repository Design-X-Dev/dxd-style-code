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
import { useClassComposition } from "@/composables/useClassComposition";

const props = defineProps({
  /** Вариант: default | bordered | elevated | flat */
  variant: {
    type: String,
    default: "default",
    validator: (value) => ['default', 'bordered', 'elevated', 'flat'].includes(value)
  },
  /** Padding: none | sm | md | lg */
  padding: {
    type: String,
    default: "md",
    validator: (value) => ['none', 'sm', 'md', 'lg'].includes(value)
  },
});

const BASE_CLASSES = "bg-white rounded-2xl";

const VARIANT_CLASSES = {
  default: "border border-slate-100 shadow-sm",
  bordered: "border-2 border-slate-200",
  elevated: "shadow-lg border border-slate-50",
  flat: "border-0",
};

const PADDING_CLASSES = {
  none: "",
  sm: "p-3",
  md: "p-5",
  lg: "p-8",
};

const allClasses = computed(() =>
  useClassComposition(
    BASE_CLASSES,
    `${VARIANT_CLASSES[props.variant]} ${PADDING_CLASSES[props.padding]}`
  )
);
</script>

