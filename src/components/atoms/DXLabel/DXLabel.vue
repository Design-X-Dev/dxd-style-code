<template>
  <label
    :class="labelClasses"
    :for="htmlFor"
    data-component="DXLabel"
  >
    <slot />
    <span v-if="required" class="text-rose-500 ml-0.5">*</span>
  </label>
</template>

<script setup>
import { computed } from "vue";
import { useVariantText } from "../../../composables/useVariant";

const props = defineProps({
  /** ID связанного input */
  htmlFor: { type: String, default: "" },
  /** Размер: xs | sm | md | lg */
  size: { type: String, default: "sm" },
  /** Вес шрифта: normal | medium | semibold */
  weight: { type: String, default: "medium" },
  /** Цвет: default | muted | primary */
  color: { type: String, default: "default" },
  /** Обязательное поле */
  required: { type: Boolean, default: false },
});

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const weightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
};

const labelClasses = computed(() => [
  "block",
  sizeClasses[props.size] || sizeClasses.sm,
  weightClasses[props.weight] || weightClasses.medium,
  useVariantText(props.color),
]);
</script>

