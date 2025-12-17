<template>
  <div class="w-full" data-component="DXSlider">
    <div class="flex items-center justify-between mb-2">
      <label v-if="label" class="text-sm font-medium text-slate-700">{{ label }}</label>
      <span v-if="showValue" class="text-sm font-semibold text-slate-900">
        {{ displayValue }}
      </span>
    </div>
    
    <div class="relative">
      <input
        type="range"
        :value="modelValue"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        class="slider w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        @input="handleInput"
      />
    </div>
    
    <div v-if="ticks" class="flex justify-between mt-1 px-1">
      <span v-for="tick in tickValues" :key="tick" class="text-xs text-slate-500">
        {{ tick }}
      </span>
    </div>
    
    <p v-if="helper" class="mt-1 text-xs text-slate-500">{{ helper }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Значение (v-model) */
  modelValue: { type: Number, default: 0 },
  /** Минимум */
  min: { type: Number, default: 0 },
  /** Максимум */
  max: { type: Number, default: 100 },
  /** Шаг */
  step: { type: Number, default: 1 },
  /** Лейбл */
  label: { type: String, default: "" },
  /** Вспомогательный текст */
  helper: { type: String, default: "" },
  /** Показывать текущее значение */
  showValue: { type: Boolean, default: true },
  /** Показывать метки */
  ticks: { type: Boolean, default: false },
  /** Единица измерения */
  unit: { type: String, default: "" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);

const displayValue = computed(() => `${props.modelValue}${props.unit}`);

const tickValues = computed(() => {
  if (!props.ticks) return [];
  const count = 5;
  const step = (props.max - props.min) / (count - 1);
  return Array.from({ length: count }, (_, i) => Math.round(props.min + step * i));
});

const handleInput = (event) => {
  emit("update:modelValue", Number(event.target.value));
};
</script>

<style scoped>
.slider::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #0f172a;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.15s;
}
.slider::-webkit-slider-thumb:hover { transform: scale(1.1); }
.slider::-webkit-slider-thumb:active { transform: scale(0.95); }
.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #0f172a;
  cursor: pointer;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.15s;
}
.slider::-moz-range-thumb:hover { transform: scale(1.1); }
.slider::-moz-range-thumb:active { transform: scale(0.95); }
.slider::-webkit-slider-runnable-track { height: 8px; border-radius: 4px; }
.slider::-moz-range-track { height: 8px; border-radius: 4px; }
</style>

