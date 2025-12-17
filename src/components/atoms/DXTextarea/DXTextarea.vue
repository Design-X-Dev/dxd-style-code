<template>
  <div class="w-full" data-component="DXTextarea">
    <label v-if="label" class="block text-sm text-slate-600 mb-1 font-medium">{{ label }}</label>
    <div class="relative">
      <!-- Prefix Icon (top-left corner) -->
      <div
        v-if="prefixIcon"
        class="absolute left-3 top-3 text-slate-400 z-10"
      >
        <DXIcon :icon="prefixIcon" size="sm" animation="none" />
      </div>
      
      <textarea
        :rows="rows"
        :placeholder="placeholder"
        :value="modelValue"
        :disabled="disabled"
        :maxlength="maxLength"
        :class="textareaClasses"
        @input="handleInput"
      />
      
      <!-- Suffix Icon (top-right corner) -->
      <div
        v-if="suffixIcon"
        class="absolute right-3 top-3 text-slate-400 z-10"
      >
        <DXIcon :icon="suffixIcon" size="sm" animation="none" />
      </div>
      
      <!-- Character count -->
      <div
        v-if="maxLength && showCount"
        class="absolute right-3 bottom-3 text-xs text-slate-400"
      >
        {{ currentLength }} / {{ maxLength }}
      </div>
    </div>
    <p v-if="error" class="mt-1 text-xs text-rose-500">{{ error }}</p>
    <p v-else-if="helper" class="mt-1 text-xs text-slate-500">{{ helper }}</p>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import DXIcon from "../DXIcon/DXIcon.vue";

const props = defineProps({
  /** Значение (v-model) */
  modelValue: String,
  /** Placeholder */
  placeholder: { type: String, default: "" },
  /** Количество строк */
  rows: { type: Number, default: 3 },
  /** Лейбл */
  label: { type: String, default: "" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Текст ошибки */
  error: { type: String, default: "" },
  /** Вспомогательный текст */
  helper: { type: String, default: "" },
  /** Иконка слева (в верхнем левом углу) */
  prefixIcon: { type: Object, default: null },
  /** Иконка справа (в верхнем правом углу) */
  suffixIcon: { type: Object, default: null },
  /** Максимальная длина */
  maxLength: { type: Number, default: 0 },
  /** Показывать счетчик символов */
  showCount: { type: Boolean, default: false },
  /** Автоматическое изменение размера */
  autoResize: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);

const currentLength = ref(props.modelValue?.length || 0);

const handleInput = (event) => {
  const value = event.target.value;
  currentLength.value = value.length;
  emit("update:modelValue", value);
  
  // Auto-resize functionality
  if (props.autoResize) {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  }
};

watch(() => props.modelValue, (newValue) => {
  currentLength.value = newValue?.length || 0;
});

const textareaClasses = computed(() => [
  "w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-slate-50",
  props.prefixIcon && "pl-10",
  props.suffixIcon && "pr-10",
  props.maxLength && props.showCount && "pb-8",
  props.error && "border-rose-300 focus:ring-rose-500/10",
]);
</script>

