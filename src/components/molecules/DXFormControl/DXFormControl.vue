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
        <DXIcon v-if="prefixIcon" :icon="prefixIcon" size="sm" animation="none" />
        <slot name="prefix" />
      </div>
      
      <!-- Input/Select/Textarea -->
      <div :class="{ 'pl-11': $slots.prefix || prefixIcon, 'pr-10': showValidationIcon }">
        <slot />
      </div>
      
      <!-- Validation Icon -->
      <div v-if="showValidationIcon" class="absolute right-3 top-1/2 -translate-y-1/2">
        <DXValidationIcon :state="validationState" size="md" />
      </div>
    </div>
    
    <p v-if="error" class="mt-1 text-xs text-rose-500 flex items-center gap-1">
      <DXValidationIcon state="error" size="xs" />
      {{ error }}
    </p>
    <p v-else-if="helper" class="mt-1 text-xs text-slate-500">{{ helper }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";
import DXValidationIcon from "../DXValidationIcon/DXValidationIcon.vue";

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
  prefixIcon: { type: [Object, Function], default: null },
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

