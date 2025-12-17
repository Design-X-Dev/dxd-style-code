<template>
  <div class="w-full" data-component="DXInputMask">
    <label v-if="label" class="block text-sm text-slate-600 mb-1 font-medium">{{ label }}</label>
    <input
      ref="inputRef"
      :type="type"
      :placeholder="placeholder"
      :value="displayValue"
      :disabled="disabled"
      class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 transition-colors hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-slate-50"
      @input="handleInput"
      @keydown="handleKeydown"
    />
    <p v-if="helper" class="mt-1 text-xs text-slate-500">{{ helper }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  /** Значение (v-model) - сырое значение без маски */
  modelValue: { type: String, default: "" },
  /** Маска: # = цифра, например "+7 (###) ###-##-##" */
  mask: { type: String, required: true },
  /** Лейбл */
  label: { type: String, default: "" },
  /** Placeholder */
  placeholder: { type: String, default: "" },
  /** Вспомогательный текст */
  helper: { type: String, default: "" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Тип input */
  type: { type: String, default: "text" },
});

const emit = defineEmits(["update:modelValue"]);

const inputRef = ref(null);
const displayValue = ref("");

const applyMask = (value) => {
  const digits = value.replace(/\D/g, "");
  let masked = "";
  let digitIndex = 0;
  
  for (let i = 0; i < props.mask.length && digitIndex < digits.length; i++) {
    if (props.mask[i] === "#") {
      masked += digits[digitIndex];
      digitIndex++;
    } else {
      masked += props.mask[i];
    }
  }
  
  return masked;
};

const extractRawValue = (masked) => masked.replace(/\D/g, "");

const handleInput = (event) => {
  const rawValue = extractRawValue(event.target.value);
  const masked = applyMask(rawValue);
  
  displayValue.value = masked;
  emit("update:modelValue", rawValue);
  
  setTimeout(() => {
    if (inputRef.value) {
      const cursorPos = masked.length;
      inputRef.value.setSelectionRange(cursorPos, cursorPos);
    }
  }, 0);
};

const handleKeydown = (event) => {
  const allowedKeys = ["Backspace", "Delete", "Tab", "Escape", "Enter", "ArrowLeft", "ArrowRight"];
  if (allowedKeys.includes(event.key)) return;
  if (!/^\d$/.test(event.key)) event.preventDefault();
};

watch(() => props.modelValue, (newVal) => {
  if (newVal !== extractRawValue(displayValue.value)) {
    displayValue.value = applyMask(newVal);
  }
}, { immediate: true });
</script>

