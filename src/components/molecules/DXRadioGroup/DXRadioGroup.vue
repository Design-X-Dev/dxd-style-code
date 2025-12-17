<template>
  <div class="space-y-2" data-component="DXRadioGroup">
    <p v-if="label" class="text-sm font-medium text-slate-700 mb-3">{{ label }}</p>
    <div :class="layout === 'horizontal' ? 'flex flex-wrap gap-3' : 'space-y-2'">
      <label
        v-for="option in options"
        :key="option.value"
        class="inline-flex items-center gap-2 cursor-pointer"
        :class="{ 'opacity-60 cursor-not-allowed': disabled || option.disabled }"
      >
        <input
          type="radio"
          :value="option.value"
          :checked="modelValue === option.value"
          :disabled="disabled || option.disabled"
          class="rounded-full border-slate-300 text-slate-900 focus:ring-slate-900/10 focus:ring-2 transition"
          :class="sizeClass"
          @change="$emit('update:modelValue', option.value)"
        />
        <span class="text-sm text-slate-700 select-none">{{ option.label }}</span>
      </label>
    </div>
    <p v-if="helper" class="text-xs text-slate-500 mt-1">{{ helper }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Текущее значение (v-model) */
  modelValue: [String, Number, Boolean],
  /** Опции: [{ value, label, disabled? }] */
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
});

defineEmits(["update:modelValue"]);

const sizeClass = computed(() => {
  switch (props.size) {
    case "sm": return "h-3.5 w-3.5";
    case "lg": return "h-5 w-5";
    default: return "h-4 w-4";
  }
});
</script>

