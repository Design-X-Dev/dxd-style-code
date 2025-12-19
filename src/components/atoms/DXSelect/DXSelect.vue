<template>
  <DXFormLabel
    :label="label"
    :error="error"
    :helper="helper"
    :required="required"
    data-component="DXSelect"
    :data-size="size"
    :data-disabled="disabled"
    :data-error="!!error"
  >
    <div class="relative">
      <DXIconWrapper
        v-if="prefixIcon"
        position="left"
        :icon="prefixIcon"
      />
      
      <select
        :value="modelValue"
        :disabled="disabled"
        :class="selectClasses"
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <option v-if="placeholder" value="" disabled selected>{{ placeholder }}</option>
        <option v-for="opt in options" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>
      
      <!-- Chevron Icon -->
      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <DXIcon :icon="ChevronDownIcon" size="sm" animation="none" class="text-slate-400" />
      </div>
    </div>
  </DXFormLabel>
</template>

<script setup>
import { computed } from "vue";
import { useComponentSize } from "@/composables/useComponentSize";
import { useClassCompositionWithConditions } from "@/composables/useClassComposition";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
import DXFormLabel from "../DXFormLabel/DXFormLabel.vue";
import DXIconWrapper from "../DXIconWrapper/DXIconWrapper.vue";
import DXIcon from "../DXIcon/DXIcon.vue";

const props = defineProps({
  /** Значение (v-model) */
  modelValue: [String, Number],
  /** Массив опций: [{ value, label }] */
  options: { type: Array, default: () => [] },
  /** Лейбл */
  label: { type: String, default: "" },
  /** Обязательное поле */
  required: { type: Boolean, default: false },
  /** Placeholder */
  placeholder: { type: String, default: "" },
  /** Текст ошибки */
  error: { type: String, default: "" },
  /** Вспомогательный текст */
  helper: { type: String, default: "" },
  /** Иконка слева (Heroicon компонент) */
  prefixIcon: { type: Object, default: null },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
});

defineEmits(["update:modelValue"]);

const BASE_CLASSES = "w-full appearance-none rounded-xl border border-slate-200 bg-white transition-colors pr-10 text-slate-700";

const selectClasses = computed(() =>
  useClassCompositionWithConditions(
    BASE_CLASSES,
    {
      [useComponentSize(props.size, 'input')]: true,
      'pl-10': props.prefixIcon,
      'hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300': !props.disabled,
      'opacity-60 cursor-not-allowed bg-slate-50': props.disabled,
      'border-rose-300 focus:ring-rose-500/10': props.error,
    }
  )
);
</script>

