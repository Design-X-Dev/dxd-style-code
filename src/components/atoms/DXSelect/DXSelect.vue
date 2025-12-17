<template>
  <div class="w-full" data-component="DXSelect">
    <label v-if="label" class="block text-sm text-slate-600 mb-1 font-medium">{{ label }}</label>
    <div class="relative">
      <select
        :value="modelValue"
        :disabled="disabled"
        :class="selectClasses"
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <option v-if="placeholder" value="" disabled selected>{{ placeholder }}</option>
        <option v-for="opt in options" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>
      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
    <p v-if="helper" class="mt-1 text-xs text-slate-500">{{ helper }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Значение (v-model) */
  modelValue: [String, Number],
  /** Массив опций: [{ value, label }] */
  options: { type: Array, default: () => [] },
  /** Лейбл */
  label: { type: String, default: "" },
  /** Placeholder */
  placeholder: { type: String, default: "" },
  /** Вспомогательный текст */
  helper: { type: String, default: "" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
});

defineEmits(["update:modelValue"]);

const sizeClasses = {
  sm: "h-8 px-3 py-1.5 text-xs",
  md: "h-10 px-4 py-2.5 text-sm",
  lg: "h-12 px-5 py-3 text-base",
};

const selectClasses = computed(() => [
  "w-full appearance-none rounded-xl border border-slate-200 bg-white transition-colors pr-10",
  sizeClasses[props.size] || sizeClasses.md,
  "text-slate-700",
  !props.disabled && "hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300",
  props.disabled && "opacity-60 cursor-not-allowed bg-slate-50",
]);
</script>

