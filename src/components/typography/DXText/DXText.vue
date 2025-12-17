<template>
  <component
    :is="tag"
    :class="textClasses"
    data-component="DXText"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Тег: p | span | div */
  tag: { type: String, default: "p" },
  /** Размер: xs | sm | md | lg | xl */
  size: { type: String, default: "md" },
  /** Вес шрифта: normal | medium | semibold | bold */
  weight: { type: String, default: "normal" },
  /** Цвет: default | muted | primary | success | warning | danger */
  color: { type: String, default: "default" },
  /** Выравнивание: left | center | right | justify */
  align: { type: String, default: "left" },
  /** Обрезать текст с ... */
  truncate: { type: Boolean, default: false },
  /** Максимум строк (line-clamp) */
  lines: { type: Number, default: 0 },
});

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const weightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colorClasses = {
  default: "text-slate-700",
  muted: "text-slate-500",
  primary: "text-slate-900",
  success: "text-emerald-700",
  warning: "text-amber-700",
  danger: "text-rose-700",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

const textClasses = computed(() => [
  sizeClasses[props.size] || sizeClasses.md,
  weightClasses[props.weight] || weightClasses.normal,
  colorClasses[props.color] || colorClasses.default,
  alignClasses[props.align] || alignClasses.left,
  "leading-relaxed",
  props.truncate && "truncate",
  props.lines > 0 && `line-clamp-${props.lines}`,
]);
</script>

