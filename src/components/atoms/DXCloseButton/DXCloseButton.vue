<template>
  <button
    type="button"
    :class="allClasses"
    @click="$emit('click', $event)"
    :aria-label="ariaLabel"
    data-component="DXCloseButton"
  >
    <DXIcon :icon="XMarkIcon" :size="iconSize" animation="scale" />
  </button>
</template>

<script setup>
import { computed } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import DXIcon from "../DXIcon/DXIcon.vue";

const props = defineProps({
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
  /** Вариант цвета: default | light | danger */
  variant: { type: String, default: "default" },
  /** Aria label */
  ariaLabel: { type: String, default: "Закрыть" },
});

defineEmits(["click"]);

const sizeClasses = {
  sm: "p-0.5",
  md: "p-1",
  lg: "p-1.5",
};

const iconSizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
};

const variantClasses = {
  default: "text-slate-400 hover:text-slate-600",
  light: "text-white/70 hover:text-white",
  danger: "text-rose-400 hover:text-rose-600",
};

const iconSize = computed(() => iconSizes[props.size] || iconSizes.md);

const allClasses = computed(() => [
  "inline-flex items-center justify-center rounded transition-colors",
  sizeClasses[props.size] || sizeClasses.md,
  variantClasses[props.variant] || variantClasses.default,
]);
</script>

