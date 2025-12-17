<template>
  <div class="w-full" data-component="DXInput">
    <label v-if="label" class="block text-sm text-slate-600 mb-1 font-medium">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      :class="inputClasses"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p v-if="error" class="mt-1 text-xs text-rose-500">{{ error }}</p>
    <p v-else-if="helper" class="mt-1 text-xs text-slate-500">{{ helper }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Значение поля (v-model) */
  modelValue: [String, Number],
  /** Тип input */
  type: { type: String, default: "text" },
  /** Placeholder */
  placeholder: { type: String, default: "" },
  /** Лейбл над полем */
  label: { type: String, default: "" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Текст ошибки */
  error: { type: String, default: "" },
  /** Вспомогательный текст */
  helper: { type: String, default: "" },
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
  /** Дополнительные классы */
  inputClass: { type: [String, Array, Object], default: "" },
});

defineEmits(["update:modelValue"]);

const sizeClasses = {
  sm: "h-8 px-3 py-1.5 text-xs",
  md: "h-10 px-4 py-2.5 text-sm",
  lg: "h-12 px-5 py-3 text-base",
};

const inputClasses = computed(() => [
  "w-full rounded-xl border border-slate-200 bg-white transition-colors",
  sizeClasses[props.size] || sizeClasses.md,
  "text-slate-700 placeholder:text-slate-400",
  !props.disabled && "hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300",
  props.disabled && "opacity-60 cursor-not-allowed bg-slate-50",
  props.error && "border-rose-300 focus:ring-rose-500/10",
  props.inputClass,
]);
</script>

