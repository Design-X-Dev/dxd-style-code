<template>
  <div 
    class="space-y-2" 
    data-component="DXRadioGroup"
    :data-size="size"
    :data-layout="layout"
    :data-disabled="disabled"
    :data-variant="variant"
    :data-color="color"
  >
    <p v-if="label" class="text-sm font-medium text-slate-700 mb-3">{{ label }}</p>
    
    <div :class="layoutClasses">
      <DXRadio
        v-for="option in options"
        :key="option.value"
        :model-value="modelValue"
        :value="option.value"
        :label="option.label"
        :disabled="disabled || option.disabled"
        :size="size"
        :variant="variant"
        :color="option.color || color"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </div>
    
    <p v-if="helper" class="text-xs text-slate-500 mt-1">{{ helper }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import DXRadio from "../../atoms/v2/DXRadio/DXRadio.vue";

const props = defineProps({
  /** Текущее значение (v-model) */
  modelValue: { type: [String, Number, Boolean], default: null },
  /** Опции: [{ value, label, disabled?, color? }] */
  options: { type: Array, required: true },
  /** Лейбл группы */
  label: { type: String, default: "" },
  /** Вспомогательный текст */
  helper: { type: String, default: "" },
  /** Отключить все опции */
  disabled: { type: Boolean, default: false },
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
  /** Расположение: vertical | horizontal */
  layout: { type: String, default: "vertical" },
  /** Вариант: default | custom */
  variant: { 
    type: String, 
    default: "default",
    validator: (value) => ['default', 'custom'].includes(value)
  },
  /** Цвет для custom variant: slate | primary | success | danger | warning | info */
  color: {
    type: String,
    default: "primary",
    validator: (value) => ['slate', 'primary', 'success', 'danger', 'warning', 'info'].includes(value)
  },
});

defineEmits(["update:modelValue"]);

const layoutClasses = computed(() => 
  props.layout === 'horizontal' 
    ? 'flex flex-wrap items-center' 
    : 'flex flex-col'
);
</script>

