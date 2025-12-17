<template>
  <label
    class="inline-flex items-center gap-2 cursor-pointer"
    :class="{ 'opacity-60 cursor-not-allowed': disabled }"
    data-component="DXRadio"
  >
    <input
      type="radio"
      :value="value"
      :checked="modelValue === value"
      :disabled="disabled"
      class="rounded-full border-slate-300 text-slate-900 focus:ring-slate-900/10 focus:ring-2 transition"
      :class="sizeClass"
      @change="$emit('update:modelValue', value)"
    />
    <span v-if="label" class="text-sm text-slate-700 select-none">
      {{ label }}
    </span>
  </label>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Текущее значение группы (v-model) */
  modelValue: [String, Number, Boolean],
  /** Значение этого radio */
  value: { type: [String, Number, Boolean], required: true },
  /** Текст лейбла */
  label: { type: String, default: "" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
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

