<template>
  <div 
    class="w-full" 
    data-component="DXProgress"
    :data-size="size"
    :data-color="color"
    :data-animated="animated"
    :data-striped="striped"
  >
    <div v-if="showLabel || $slots.label" class="flex justify-between items-center mb-1">
      <span class="text-sm font-medium text-slate-700">
        <slot name="label">{{ label }}</slot>
      </span>
      <span v-if="showValue" class="text-sm font-semibold text-slate-900">
        {{ displayValue }}
      </span>
    </div>
    <div :class="trackClasses">
      <div
        :class="barClasses"
        :style="{ width: `${percentage}%` }"
        role="progressbar"
        :aria-valuenow="value"
        :aria-valuemin="min"
        :aria-valuemax="max"
      >
        <span v-if="showInnerValue && percentage > 10" class="text-xs font-medium text-white px-1">
          {{ displayValue }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useVariantProgress } from "@/composables/useVariant";

const props = defineProps({
  /** Текущее значение */
  value: { type: Number, default: 0 },
  /** Минимум */
  min: { type: Number, default: 0 },
  /** Максимум */
  max: { type: Number, default: 100 },
  /** Лейбл */
  label: { type: String, default: "" },
  /** Показывать лейбл */
  showLabel: { type: Boolean, default: false },
  /** Показывать значение справа */
  showValue: { type: Boolean, default: false },
  /** Показывать значение внутри бара */
  showInnerValue: { type: Boolean, default: false },
  /** Размер: xs | sm | md | lg */
  size: { type: String, default: "md" },
  /** Цвет: default | success | warning | danger | info */
  color: { type: String, default: "default" },
  /** Анимация */
  animated: { type: Boolean, default: false },
  /** Полосатый */
  striped: { type: Boolean, default: false },
});

const percentage = computed(() => {
  const range = props.max - props.min;
  return Math.min(100, Math.max(0, ((props.value - props.min) / range) * 100));
});

const displayValue = computed(() => `${Math.round(percentage.value)}%`);

const SIZE_CLASSES = {
  xs: "h-1",
  sm: "h-2",
  md: "h-3",
  lg: "h-4",
};

const trackClasses = computed(() => [
  "w-full bg-slate-200 rounded-full overflow-hidden",
  SIZE_CLASSES[props.size] || SIZE_CLASSES.md,
]);

const barClasses = computed(() => [
  "h-full rounded-full transition-all duration-300 flex items-center justify-end",
  useVariantProgress(props.color),
  props.striped && "bg-stripes",
  props.animated && props.striped && "animate-stripes",
]);
</script>

<style scoped>
.bg-stripes {
  background-image: linear-gradient(
    45deg,
    rgba(255,255,255,0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255,255,255,0.15) 50%,
    rgba(255,255,255,0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;
}
.animate-stripes {
  animation: stripes 1s linear infinite;
}
@keyframes stripes {
  0% { background-position: 1rem 0; }
  100% { background-position: 0 0; }
}
</style>

