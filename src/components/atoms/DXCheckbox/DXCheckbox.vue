<template>
  <label
    class="inline-flex items-center gap-2 cursor-pointer"
    :class="{ 'opacity-60 cursor-not-allowed': disabled }"
    data-component="DXCheckbox"
  >
    <input
      type="checkbox"
      :checked="isChecked"
      :value="value"
      :disabled="disabled"
      class="rounded border-slate-300 text-slate-900 focus:ring-slate-900/10 focus:ring-2 transition"
      :class="sizeClass"
      @change="handleChange"
    />
    <span v-if="label" class="text-sm text-slate-700 select-none">
      {{ label }}
    </span>
  </label>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Значение (v-model) - boolean или массив */
  modelValue: { type: [Boolean, Array], default: false },
  /** Значение для массива */
  value: { type: [String, Number], default: undefined },
  /** Текст лейбла */
  label: { type: String, default: "" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
});

const emit = defineEmits(["update:modelValue"]);

const sizeClass = computed(() => {
  switch (props.size) {
    case "sm": return "h-3.5 w-3.5";
    case "lg": return "h-5 w-5";
    default: return "h-4 w-4";
  }
});

const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value);
  }
  return props.modelValue;
});

const handleChange = (event) => {
  if (Array.isArray(props.modelValue)) {
    const newValue = [...props.modelValue];
    if (event.target.checked) {
      newValue.push(props.value);
    } else {
      const index = newValue.indexOf(props.value);
      if (index > -1) {
        newValue.splice(index, 1);
      }
    }
    emit("update:modelValue", newValue);
  } else {
    emit("update:modelValue", event.target.checked);
  }
};
</script>

