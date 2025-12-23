<template>
  <component
    :is="tag"
    :class="textClasses"
    data-component="DXText"
    :data-size="size"
    :data-weight="weight"
    :data-color="color"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { useVariantText } from "../../../composables/useVariant";

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

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

const textClasses = computed(() => [
  sizeClasses[props.size] || sizeClasses.md,
  weightClasses[props.weight] || weightClasses.normal,
  useVariantText(props.color),
  alignClasses[props.align] || alignClasses.left,
  "leading-relaxed",
  props.truncate && "truncate",
  props.lines > 0 && `line-clamp-${props.lines}`,
]);
</script>

