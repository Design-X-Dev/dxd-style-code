<template>
  <label
    :class="labelClasses"
    data-component="DXToggle"
    :data-disabled="disabled"
    :data-checked="modelValue"
  >
    <button
      type="button"
      role="switch"
      :aria-checked="modelValue"
      :disabled="disabled"
      :class="buttonClasses"
      @click="$emit('update:modelValue', !modelValue)"
    >
      <span :class="indicatorClasses" />
    </button>
    <span v-if="label" class="text-sm text-slate-700 select-none">
      {{ label }}
    </span>
  </label>
</template>

<script setup>
import { computed } from "vue";
import { useClassCompositionWithConditions } from "@/composables/useClassComposition";

const props = defineProps({
  /** Значение (v-model) */
  modelValue: { type: Boolean, default: false },
  /** Текст лейбла */
  label: { type: String, default: "" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
});

defineEmits(["update:modelValue"]);

const BASE_LABEL_CLASSES = "inline-flex items-center gap-2 cursor-pointer mr-4";
const BASE_BUTTON_CLASSES = "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:ring-offset-2";
const BASE_INDICATOR_CLASSES = "inline-block h-4 w-4 transform rounded-full bg-white transition-transform";

const labelClasses = computed(() =>
  useClassCompositionWithConditions(
    BASE_LABEL_CLASSES,
    {
      'opacity-60 cursor-not-allowed': props.disabled,
    }
  )
);

const buttonClasses = computed(() =>
  useClassCompositionWithConditions(
    BASE_BUTTON_CLASSES,
    {
      'bg-slate-900': props.modelValue,
      'bg-slate-200': !props.modelValue,
    }
  )
);

const indicatorClasses = computed(() =>
  useClassCompositionWithConditions(
    BASE_INDICATOR_CLASSES,
    {
      'translate-x-6': props.modelValue,
      'translate-x-1': !props.modelValue,
    }
  )
);
</script>

