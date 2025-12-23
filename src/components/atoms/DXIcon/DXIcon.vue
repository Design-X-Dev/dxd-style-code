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
import { useSize } from "../../../composables/useSize";
import { useAnimation } from "../../../composables/useAnimation";

const props = defineProps({
  /** Heroicon компонент */
  icon: { type: [Object, Function], required: true },
  /** Размер: xs | sm | md | lg | xl */
  size: { type: String, default: "md" },
  /** Анимация при hover: none | wiggle | scale | rotate */
  animation: { type: String, default: "none" },
  /** Использовать group-hover вместо обычного hover */
  groupHover: { type: Boolean, default: false },
  /** Дополнительные классы */
  class: { type: [String, Array, Object], default: "" },
});

const allClasses = computed(() => [
  useSize(props.size, 'icon'),
  useAnimation(props.animation, 'icon', props.groupHover),
  props.class,
]);
</script>

<style>
/* Wiggle animation - тряска при hover */
@keyframes icon-wiggle {
  0% { transform: translateX(0) rotate(0deg); }
  25% { transform: translateX(-1px) rotate(-3deg); }
  50% { transform: translateX(0) rotate(0deg); }
  75% { transform: translateX(1px) rotate(3deg); }
  100% { transform: translateX(0) rotate(0deg); }
}

/* Regular hover */
.dx-icon-wiggle {
  transition: transform 150ms ease;
}

.dx-icon-wiggle:hover {
  animation: icon-wiggle 0.28s ease-in-out;
}

/* Group hover */
.dx-icon-wiggle-group {
  transition: transform 150ms ease;
}

.group:hover .dx-icon-wiggle-group {
  animation: icon-wiggle 0.28s ease-in-out;
}

/* Scale animation - увеличение при hover */
/* Regular hover */
.dx-icon-scale {
  transition: transform 200ms ease;
}

.dx-icon-scale:hover {
  transform: scale(1.1);
}

/* Group hover */
.dx-icon-scale-group {
  transition: transform 200ms ease;
}

.group:hover .dx-icon-scale-group {
  transform: scale(1.1);
}

/* Rotate animation - поворот при hover */
/* Regular hover */
.dx-icon-rotate {
  transition: transform 250ms ease;
}

.dx-icon-rotate:hover {
  transform: rotate(90deg);
}

/* Group hover */
.dx-icon-rotate-group {
  transition: transform 250ms ease;
}

.group:hover .dx-icon-rotate-group {
  transform: rotate(90deg);
}
</style>

