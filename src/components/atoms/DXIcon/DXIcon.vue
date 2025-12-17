<template>
  <component
    :is="icon"
    :class="allClasses"
    data-component="DXIcon"
    :data-size="size"
    :data-animation="animation"
  />
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Heroicon компонент */
  icon: { type: Object, required: true },
  /** Размер: xs | sm | md | lg | xl */
  size: { type: String, default: "md" },
  /** Анимация при hover: none | wiggle | scale | rotate */
  animation: { type: String, default: "none" },
  /** Дополнительные классы */
  class: { type: [String, Array, Object], default: "" },
});

const sizeClasses = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
};

const animationClasses = {
  none: "",
  wiggle: "dx-icon-wiggle",
  scale: "dx-icon-scale",
  rotate: "dx-icon-rotate",
};

const allClasses = computed(() => [
  sizeClasses[props.size] || sizeClasses.md,
  animationClasses[props.animation] || "",
  props.class,
]);
</script>

<style scoped>
/* Wiggle animation - тряска при hover */
@keyframes icon-wiggle {
  0% { transform: translateX(0) rotate(0deg); }
  25% { transform: translateX(-1px) rotate(-3deg); }
  50% { transform: translateX(0) rotate(0deg); }
  75% { transform: translateX(1px) rotate(3deg); }
  100% { transform: translateX(0) rotate(0deg); }
}

.dx-icon-wiggle {
  transition: transform 150ms ease;
}

.dx-icon-wiggle:hover {
  animation: icon-wiggle 0.28s ease-in-out;
}

/* Scale animation - увеличение при hover */
.dx-icon-scale {
  transition: transform 200ms ease;
}

.dx-icon-scale:hover {
  transform: scale(1.1);
}

/* Rotate animation - поворот при hover */
.dx-icon-rotate {
  transition: transform 250ms ease;
}

.dx-icon-rotate:hover {
  transform: rotate(90deg);
}
</style>

