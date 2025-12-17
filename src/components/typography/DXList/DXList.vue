<template>
  <component
    :is="ordered ? 'ol' : 'ul'"
    :class="listClasses"
    data-component="DXList"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Нумерованный список */
  ordered: { type: Boolean, default: false },
  /** Стиль маркеров: disc | circle | square | decimal | none */
  marker: { type: String, default: "" },
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
  /** Отступ между элементами: none | sm | md | lg */
  spacing: { type: String, default: "sm" },
});

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const spacingClasses = {
  none: "space-y-0",
  sm: "space-y-1",
  md: "space-y-2",
  lg: "space-y-3",
};

const markerClasses = {
  disc: "list-disc",
  circle: "list-circle",
  square: "list-square",
  decimal: "list-decimal",
  none: "list-none",
};

const listClasses = computed(() => [
  sizeClasses[props.size] || sizeClasses.md,
  spacingClasses[props.spacing] || spacingClasses.sm,
  props.marker 
    ? markerClasses[props.marker] 
    : (props.ordered ? "list-decimal" : "list-disc"),
  "pl-5 text-slate-700",
]);
</script>

