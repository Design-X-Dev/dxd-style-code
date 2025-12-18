<template>
  <div class="w-full" data-component="DXSelect">
    <label v-if="label" class="block text-sm text-slate-600 mb-1 font-medium">{{ label }}</label>
    <div class="relative">
      <!-- Prefix Icon -->
      <div
        v-if="prefixIcon"
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400"
      >
        <DXIcon :icon="prefixIcon" size="sm" animation="none" />
      </div>
      
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
      
      <!-- Chevron Icon -->
      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <DXIcon :icon="ChevronDownIcon" size="sm" animation="none" class="text-slate-400" />
      </div>
    </div>
    <p v-if="error" class="mt-1 text-xs text-rose-500">{{ error }}</p>
    <p v-else-if="helper" class="mt-1 text-xs text-slate-500">{{ helper }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useComponentSize } from "@/composables/useComponentSize";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
import DXIcon from "../DXIcon/DXIcon.vue";

const props = defineProps({
  /** Значение (v-model) */
  modelValue: [String, Number],
  /** Массив опций: [{ value, label }] */
  options: { type: Array, default: () => [] },
  /** Лейбл */
  label: { type: String, default: "" },
  /** Placeholder */
  placeholder: { type: String, default: "" },
  /** Текст ошибки */
  error: { type: String, default: "" },
  /** Вспомогательный текст */
  helper: { type: String, default: "" },
  /** Иконка слева (Heroicon компонент) */
  prefixIcon: { type: Object, default: null },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
});

defineEmits(["update:modelValue"]);

const selectClasses = computed(() => [
  "w-full appearance-none rounded-xl border border-slate-200 bg-white transition-colors pr-10",
  useComponentSize(props.size, 'input'),
  "text-slate-700",
  props.prefixIcon && "pl-10",
  !props.disabled && "hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300",
  props.disabled && "opacity-60 cursor-not-allowed bg-slate-50",
  props.error && "border-rose-300 focus:ring-rose-500/10",
]);
</script>

