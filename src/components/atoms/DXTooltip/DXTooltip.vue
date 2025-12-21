<template>
  <div
    class="relative inline-block"
    @mouseenter="show = true"
    @mouseleave="show = false"
    @focus="show = true"
    @blur="show = false"
    data-component="DXTooltip"
  >
    <slot />
    <Transition name="tooltip">
      <div
        v-if="show && (content || $slots.content)"
        :class="tooltipClasses"
        role="tooltip"
      >
        <slot name="content">{{ content }}</slot>
        <div :class="arrowClasses" />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useVariantTooltip } from "@/composables/useVariant";

const props = defineProps({
  /** Текст подсказки */
  content: { type: String, default: "" },
  /** Позиция: top | bottom | left | right */
  position: { type: String, default: "top" },
  /** Цвет: dark | light */
  color: { type: String, default: "dark" },
  /** Максимальная ширина */
  maxWidth: { type: String, default: "200px" },
});

const show = ref(false);

const positionClasses = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const arrowPositions = {
  top: "top-full left-1/2 -translate-x-1/2 border-t-slate-900 border-l-transparent border-r-transparent border-b-transparent",
  bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-slate-900 border-l-transparent border-r-transparent border-t-transparent",
  left: "left-full top-1/2 -translate-y-1/2 border-l-slate-900 border-t-transparent border-b-transparent border-r-transparent",
  right: "right-full top-1/2 -translate-y-1/2 border-r-slate-900 border-t-transparent border-b-transparent border-l-transparent",
};

const arrowLightPositions = {
  top: "top-full left-1/2 -translate-x-1/2 border-t-white border-l-transparent border-r-transparent border-b-transparent",
  bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-white border-l-transparent border-r-transparent border-t-transparent",
  left: "left-full top-1/2 -translate-y-1/2 border-l-white border-t-transparent border-b-transparent border-r-transparent",
  right: "right-full top-1/2 -translate-y-1/2 border-r-white border-t-transparent border-b-transparent border-l-transparent",
};

const tooltipClasses = computed(() => [
  "absolute z-50 px-3 py-2 text-sm rounded-lg whitespace-normal",
  positionClasses[props.position] || positionClasses.top,
  useVariantTooltip(props.color),
]);

const arrowClasses = computed(() => [
  "absolute w-0 h-0 border-4",
  props.color === "light"
    ? arrowLightPositions[props.position]
    : arrowPositions[props.position],
]);
</script>

<style scoped>
.tooltip-enter-active,
.tooltip-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
  transform: translateY(4px);
}
</style>

