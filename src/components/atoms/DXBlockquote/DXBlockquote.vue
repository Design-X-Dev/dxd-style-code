<template>
  <blockquote
    :class="blockquoteClasses"
    data-component="DXBlockquote"
    :data-variant="variant"
  >
    <slot />
    <footer v-if="cite || $slots.cite" class="mt-2 text-sm text-slate-500">
      — <cite><slot name="cite">{{ cite }}</slot></cite>
    </footer>
  </blockquote>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Вариант: default | bordered | highlighted */
  variant: { type: String, default: "bordered" },
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
  /** Источник цитаты */
  cite: { type: String, default: "" },
});

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const variantClasses = {
  default: "text-slate-600 italic",
  bordered: "border-l-4 border-slate-300 pl-4 text-slate-600 italic",
  highlighted: "bg-slate-50 border-l-4 border-slate-400 pl-4 pr-4 py-3 rounded-r-lg text-slate-700",
};

const blockquoteClasses = computed(() => [
  sizeClasses[props.size] || sizeClasses.md,
  variantClasses[props.variant] || variantClasses.bordered,
  "leading-relaxed",
]);
</script>

