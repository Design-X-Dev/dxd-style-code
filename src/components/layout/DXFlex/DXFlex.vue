<template>
  <div :class="flexClasses" data-component="DXFlex">
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Направление: row | row-reverse | col | col-reverse */
  direction: { type: String, default: "row" },
  /** Выравнивание по главной оси: start | center | end | between | around | evenly */
  justify: { type: String, default: "start" },
  /** Выравнивание по поперечной оси: start | center | end | stretch | baseline */
  align: { type: String, default: "center" },
  /** Перенос: nowrap | wrap | wrap-reverse */
  wrap: { type: String, default: "nowrap" },
  /** Отступ между элементами: none | xs | sm | md | lg | xl */
  gap: { type: String, default: "md" },
  /** Inline flex */
  inline: { type: Boolean, default: false },
});

const directionClasses = {
  row: "flex-row",
  "row-reverse": "flex-row-reverse",
  col: "flex-col",
  "col-reverse": "flex-col-reverse",
};

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const wrapClasses = {
  nowrap: "flex-nowrap",
  wrap: "flex-wrap",
  "wrap-reverse": "flex-wrap-reverse",
};

const gapClasses = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

const flexClasses = computed(() => [
  props.inline ? "inline-flex" : "flex",
  directionClasses[props.direction] || directionClasses.row,
  justifyClasses[props.justify] || justifyClasses.start,
  alignClasses[props.align] || alignClasses.center,
  wrapClasses[props.wrap] || wrapClasses.nowrap,
  gapClasses[props.gap] || gapClasses.md,
]);
</script>

