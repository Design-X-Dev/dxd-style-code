<template>
  <div :class="gridClasses" :style="gridStyle" data-component="DXGrid">
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Количество колонок: 1-12 или auto */
  cols: { type: [Number, String], default: 12 },
  /** Количество колонок на sm */
  colsSm: { type: [Number, String], default: "" },
  /** Количество колонок на md */
  colsMd: { type: [Number, String], default: "" },
  /** Количество колонок на lg */
  colsLg: { type: [Number, String], default: "" },
  /** Отступ между элементами: none | xs | sm | md | lg | xl */
  gap: { type: String, default: "md" },
  /** Горизонтальный отступ */
  gapX: { type: String, default: "" },
  /** Вертикальный отступ */
  gapY: { type: String, default: "" },
});

const gapClasses = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

const colsClasses = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12",
  auto: "grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
};

const gridClasses = computed(() => [
  "grid",
  colsClasses[props.cols] || `grid-cols-${props.cols}`,
  props.colsSm && `sm:grid-cols-${props.colsSm}`,
  props.colsMd && `md:grid-cols-${props.colsMd}`,
  props.colsLg && `lg:grid-cols-${props.colsLg}`,
  !props.gapX && !props.gapY && (gapClasses[props.gap] || gapClasses.md),
  props.gapX && `gap-x-${props.gapX}`,
  props.gapY && `gap-y-${props.gapY}`,
]);

const gridStyle = computed(() => {
  if (props.cols === "auto") return {};
  return {};
});
</script>

