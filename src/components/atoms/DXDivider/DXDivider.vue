<template>
  <div 
    :class="dividerClasses" 
    data-component="DXDivider" 
    :data-orientation="orientation"
    :data-color="color"
    :data-thickness="thickness"
    :data-spacing="spacing"
  >
    <div v-if="$slots.default && orientation === 'horizontal'" class="flex items-center w-full">
      <div :class="lineClasses" />
      <span class="px-3 text-sm text-slate-500 whitespace-nowrap">
        <slot />
      </span>
      <div :class="lineClasses" />
    </div>
    <template v-else>
      <div :class="lineClasses" />
    </template>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Ориентация: horizontal | vertical */
  orientation: { type: String, default: "horizontal" },
  /** Цвет: light | default | dark */
  color: { type: String, default: "default" },
  /** Толщина: thin | default | thick */
  thickness: { type: String, default: "default" },
  /** Отступы: none | sm | md | lg */
  spacing: { type: String, default: "md" },
});

const COLOR_CLASSES = {
  light: "border-slate-100",
  default: "border-slate-200",
  dark: "border-slate-300",
};

const THICKNESS_CLASSES = {
  thin: "border-t",
  default: "border-t",
  thick: "border-t-2",
};

const VERTICAL_THICKNESS = {
  thin: "border-l",
  default: "border-l",
  thick: "border-l-2",
};

const SPACING_CLASSES = {
  none: "",
  sm: "my-2",
  md: "my-4",
  lg: "my-6",
};

const VERTICAL_SPACING = {
  none: "",
  sm: "mx-2",
  md: "mx-4",
  lg: "mx-6",
};

const dividerClasses = computed(() => [
  props.orientation === "vertical" ? "inline-flex h-full" : "w-full",
  props.orientation === "horizontal" 
    ? SPACING_CLASSES[props.spacing] 
    : VERTICAL_SPACING[props.spacing],
]);

const lineClasses = computed(() => [
  props.orientation === "vertical" ? "h-full" : "flex-1",
  COLOR_CLASSES[props.color] || COLOR_CLASSES.default,
  props.orientation === "vertical"
    ? VERTICAL_THICKNESS[props.thickness]
    : THICKNESS_CLASSES[props.thickness],
]);
</script>

