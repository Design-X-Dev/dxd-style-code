<template>
  <div 
    :class="stackClasses" 
    data-component="DXStack" 
    :data-direction="direction"
    :data-gap="gap"
    :data-align="align"
    :data-justify="justify"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Направление: vertical | horizontal */
  direction: { type: String, default: "vertical" },
  /** Отступ между элементами: none | xs | sm | md | lg | xl | 2xl */
  gap: { type: String, default: "md" },
  /** Выравнивание: start | center | end | stretch */
  align: { type: String, default: "stretch" },
  /** Распределение: start | center | end | between | around */
  justify: { type: String, default: "start" },
  /** Разделители между элементами */
  dividers: { type: Boolean, default: false },
});

const gapClasses = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
  "2xl": "gap-12",
};

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
};

const stackClasses = computed(() => [
  "flex",
  props.direction === "horizontal" ? "flex-row" : "flex-col",
  gapClasses[props.gap] || gapClasses.md,
  alignClasses[props.align] || alignClasses.stretch,
  justifyClasses[props.justify] || justifyClasses.start,
  props.dividers && (props.direction === "horizontal" ? "divide-x divide-slate-200" : "divide-y divide-slate-200"),
]);
</script>

