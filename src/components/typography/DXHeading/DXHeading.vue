<template>
  <component
    :is="tag"
    :class="headingClasses"
    data-component="DXHeading"
    :data-level="level"
    :data-weight="weight"
    :data-color="color"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Уровень заголовка: 1-6 */
  level: { type: [Number, String], default: 1 },
  /** Размер (переопределяет level): xs | sm | md | lg | xl | 2xl | 3xl | 4xl */
  size: { type: String, default: "" },
  /** Вес шрифта: normal | medium | semibold | bold */
  weight: { type: String, default: "semibold" },
  /** Цвет: default | muted | primary | success | warning | danger */
  color: { type: String, default: "default" },
  /** Обрезать текст с ... */
  truncate: { type: Boolean, default: false },
});

const tag = computed(() => `h${props.level}`);

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
};

const levelSizes = {
  1: "text-4xl",
  2: "text-3xl",
  3: "text-2xl",
  4: "text-xl",
  5: "text-lg",
  6: "text-base",
};

const weightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colorClasses = {
  default: "text-slate-900",
  muted: "text-slate-500",
  primary: "text-slate-800",
  success: "text-emerald-700",
  warning: "text-amber-700",
  danger: "text-rose-700",
};

const headingClasses = computed(() => [
  props.size ? sizeClasses[props.size] : levelSizes[props.level],
  weightClasses[props.weight] || weightClasses.semibold,
  colorClasses[props.color] || colorClasses.default,
  "tracking-tight",
  props.truncate && "truncate",
]);
</script>

