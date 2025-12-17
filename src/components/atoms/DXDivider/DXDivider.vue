<template>
  <div :class="dividerClasses" data-component="DXDivider" :data-orientation="orientation">
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

const colorClasses = {
  light: "border-slate-100",
  default: "border-slate-200",
  dark: "border-slate-300",
};

const thicknessClasses = {
  thin: "border-t",
  default: "border-t",
  thick: "border-t-2",
};

const verticalThickness = {
  thin: "border-l",
  default: "border-l",
  thick: "border-l-2",
};

const spacingClasses = {
  none: "",
  sm: "my-2",
  md: "my-4",
  lg: "my-6",
};

const verticalSpacing = {
  none: "",
  sm: "mx-2",
  md: "mx-4",
  lg: "mx-6",
};

const dividerClasses = computed(() => [
  props.orientation === "vertical" ? "inline-flex h-full" : "w-full",
  props.orientation === "horizontal" 
    ? spacingClasses[props.spacing] 
    : verticalSpacing[props.spacing],
]);

const lineClasses = computed(() => [
  props.orientation === "vertical" ? "h-full" : "flex-1",
  colorClasses[props.color] || colorClasses.default,
  props.orientation === "vertical"
    ? verticalThickness[props.thickness]
    : thicknessClasses[props.thickness],
]);
</script>

