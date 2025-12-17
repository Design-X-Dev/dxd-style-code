<template>
  <div :class="spacerClasses" :style="spacerStyle" data-component="DXSpacer" aria-hidden="true" />
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Размер: xs | sm | md | lg | xl | 2xl или число в пикселях */
  size: { type: [String, Number], default: "md" },
  /** Направление: vertical | horizontal | both */
  direction: { type: String, default: "vertical" },
  /** Занять всё доступное пространство (flex-grow) */
  grow: { type: Boolean, default: false },
});

const sizeClasses = {
  xs: { v: "h-1", h: "w-1" },
  sm: { v: "h-2", h: "w-2" },
  md: { v: "h-4", h: "w-4" },
  lg: { v: "h-8", h: "w-8" },
  xl: { v: "h-12", h: "w-12" },
  "2xl": { v: "h-16", h: "w-16" },
};

const spacerClasses = computed(() => {
  if (props.grow) {
    return ["flex-grow"];
  }
  
  const sizes = sizeClasses[props.size];
  if (sizes) {
    if (props.direction === "horizontal") return [sizes.h];
    if (props.direction === "both") return [sizes.v, sizes.h];
    return [sizes.v];
  }
  return [];
});

const spacerStyle = computed(() => {
  if (props.grow) return {};
  if (typeof props.size === "number") {
    const px = `${props.size}px`;
    if (props.direction === "horizontal") return { width: px };
    if (props.direction === "both") return { height: px, width: px };
    return { height: px };
  }
  return {};
});
</script>

