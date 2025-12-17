<template>
  <div class="w-full" data-component="DXFormControl">
    <div class="flex items-center justify-between mb-1">
      <label v-if="label" class="text-sm font-medium text-slate-700">
        {{ label }}
        <span v-if="required" class="text-rose-500">*</span>
      </label>
      <span v-if="maxLength && showCount" class="text-xs text-slate-500">
        {{ currentLength }} / {{ maxLength }}
      </span>
    </div>
    
    <div class="relative">
      <!-- Prefix Icon -->
      <div
        v-if="$slots.prefix || prefixIcon"
        class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      >
        <component v-if="prefixIcon" :is="prefixIcon" class="w-4 h-4" />
        <slot name="prefix" />
      </div>
      
      <!-- Input/Select/Textarea -->
      <div :class="{ 'pl-10': $slots.prefix || prefixIcon, 'pr-10': showValidationIcon }">
        <slot />
      </div>
      
      <!-- Validation Icon -->
      <div v-if="showValidationIcon" class="absolute right-3 top-1/2 -translate-y-1/2">
        <svg v-if="validationState === 'success'" class="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        <svg v-else-if="validationState === 'error'" class="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
    
    <p v-if="error" class="mt-1 text-xs text-rose-500 flex items-center gap-1">
      <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
      {{ error }}
    </p>
    <p v-else-if="helper" class="mt-1 text-xs text-slate-500">{{ helper }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Лейбл */
  label: { type: String, default: "" },
  /** Текст ошибки */
  error: { type: String, default: "" },
  /** Вспомогательный текст */
  helper: { type: String, default: "" },
  /** Обязательное поле */
  required: { type: Boolean, default: false },
  /** Состояние валидации: success | error | '' */
  validationState: { type: String, default: "" },
  /** Иконка-префикс */
  prefixIcon: { type: Object, default: null },
  /** Максимальная длина */
  maxLength: { type: Number, default: 0 },
  /** Текущая длина */
  currentLength: { type: Number, default: 0 },
  /** Показывать счетчик */
  showCount: { type: Boolean, default: false },
});

const showValidationIcon = computed(() => {
  return props.validationState === "success" || props.validationState === "error";
});
</script>

