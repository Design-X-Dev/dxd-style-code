<template>
  <div 
    :class="containerClasses" 
    data-component="DXContainer" 
    :data-size="size"
    :data-padding="padding"
    :data-center="center"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useSpacing } from "@/composables/useSpacing";

const props = defineProps({
  /** Максимальная ширина: sm | md | lg | xl | 2xl | full */
  size: { type: String, default: "lg" },
  /** Центрировать контейнер */
  center: { type: Boolean, default: true },
  /** Горизонтальные отступы: none | xs | sm | md | lg | xl */
  padding: { type: String, default: "md" },
});

const sizeClasses = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl",
  full: "max-w-full",
};

const containerClasses = computed(() => [
  "w-full",
  sizeClasses[props.size] || sizeClasses.lg,
  useSpacing(props.padding, 'paddingX'),
  props.center && "mx-auto",
]);
</script>

