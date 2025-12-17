<template>
  <div class="inline-flex" data-component="DXButtonGroup">
    <p v-if="label" class="text-sm font-medium text-slate-700 mb-2">{{ label }}</p>
    <div
      class="inline-flex border border-slate-200 rounded-xl overflow-hidden divide-x divide-slate-200"
      :class="sizeClass"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { provide, computed } from "vue";

const props = defineProps({
  /** Значение (v-model) */
  modelValue: [String, Number, Array],
  /** Лейбл */
  label: { type: String, default: "" },
  /** Множественный выбор */
  multiple: { type: Boolean, default: false },
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);

const sizeClass = computed(() => {
  switch (props.size) {
    case "sm": return "h-8";
    case "lg": return "h-12";
    default: return "h-10";
  }
});

const handleSelect = (value) => {
  if (props.disabled) return;
  if (props.multiple) {
    const currentValues = Array.isArray(props.modelValue) ? props.modelValue : [];
    const index = currentValues.indexOf(value);
    if (index > -1) {
      const newValues = [...currentValues];
      newValues.splice(index, 1);
      emit("update:modelValue", newValues);
    } else {
      emit("update:modelValue", [...currentValues, value]);
    }
  } else {
    emit("update:modelValue", value);
  }
};

const isSelected = (value) => {
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.includes(value);
  }
  return props.modelValue === value;
};

provide("buttonGroup", {
  modelValue: props.modelValue,
  multiple: props.multiple,
  size: props.size,
  disabled: props.disabled,
  handleSelect,
  isSelected,
});
</script>

