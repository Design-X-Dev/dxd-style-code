<template>
  <component :is="tag" :class="boxClasses" data-component="DXBox">
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** HTML тег */
  tag: { type: String, default: "div" },
  /** Padding: none | xs | sm | md | lg | xl */
  p: { type: String, default: "" },
  /** Padding X (horizontal) */
  px: { type: String, default: "" },
  /** Padding Y (vertical) */
  py: { type: String, default: "" },
  /** Margin: none | xs | sm | md | lg | xl | auto */
  m: { type: String, default: "" },
  /** Margin X (horizontal) */
  mx: { type: String, default: "" },
  /** Margin Y (vertical) */
  my: { type: String, default: "" },
  /** Скругление: none | sm | md | lg | xl | 2xl | full */
  rounded: { type: String, default: "" },
  /** Фон: white | slate | transparent */
  bg: { type: String, default: "" },
  /** Тень: none | sm | md | lg | xl */
  shadow: { type: String, default: "" },
  /** Рамка */
  border: { type: Boolean, default: false },
});

const paddingMap = {
  none: "0",
  xs: "1",
  sm: "2",
  md: "4",
  lg: "6",
  xl: "8",
};

const marginMap = {
  none: "0",
  xs: "1",
  sm: "2",
  md: "4",
  lg: "6",
  xl: "8",
  auto: "auto",
};

const roundedClasses = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
};

const bgClasses = {
  white: "bg-white",
  slate: "bg-slate-50",
  transparent: "bg-transparent",
};

const shadowClasses = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow",
  lg: "shadow-lg",
  xl: "shadow-xl",
};

const boxClasses = computed(() => [
  props.p && `p-${paddingMap[props.p] || props.p}`,
  props.px && `px-${paddingMap[props.px] || props.px}`,
  props.py && `py-${paddingMap[props.py] || props.py}`,
  props.m && `m-${marginMap[props.m] || props.m}`,
  props.mx && `mx-${marginMap[props.mx] || props.mx}`,
  props.my && `my-${marginMap[props.my] || props.my}`,
  props.rounded && (roundedClasses[props.rounded] || `rounded-${props.rounded}`),
  props.bg && (bgClasses[props.bg] || props.bg),
  props.shadow && (shadowClasses[props.shadow] || `shadow-${props.shadow}`),
  props.border && "border border-slate-200",
]);
</script>

