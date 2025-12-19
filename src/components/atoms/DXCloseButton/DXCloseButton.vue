<template>
  <button
    type="button"
    :class="allClasses"
    @click="$emit('click', $event)"
    :aria-label="ariaLabel"
    data-component="DXCloseButton"
    :data-size="size"
    :data-variant="variant"
  >
    <DXIcon :icon="XMarkIcon" :size="iconSize" animation="scale" />
  </button>
</template>

<script setup>
import { computed } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { useClassComposition } from "@/composables/useClassComposition";
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

const BASE_CLASSES = "inline-flex items-center justify-center rounded transition-colors";

const SIZE_CLASSES = {
  sm: "p-0.5",
  md: "p-1",
  lg: "p-1.5",
};

const ICON_SIZES = {
  sm: "sm",
  md: "md",
  lg: "lg",
};

const VARIANT_CLASSES = {
  default: "text-slate-400 hover:text-slate-600",
  light: "text-white/70 hover:text-white",
  danger: "text-rose-400 hover:text-rose-600",
};

const iconSize = computed(() => ICON_SIZES[props.size] || ICON_SIZES.md);

const allClasses = computed(() =>
  useClassComposition(
    BASE_CLASSES,
    SIZE_CLASSES[props.size],
    VARIANT_CLASSES[props.variant]
  )
);
</script>

