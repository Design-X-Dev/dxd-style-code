<template>
  <DXFormLabel
    :label="label"
    :error="error"
    :helper="helper"
    :required="required"
    data-component="DXInput"
    :data-size="size"
    :data-disabled="disabled"
    :data-error="!!error"
  >
    <div class="relative">
      <DXIconWrapper
        v-if="prefixIcon || $slots.prefix"
        position="left"
        :icon="prefixIcon"
      >
        <slot name="prefix" />
      </DXIconWrapper>
      
      <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        :disabled="disabled"
        :class="inputClasses"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      
      <DXIconWrapper
        v-if="suffixIcon || $slots.suffix"
        position="right"
        :icon="suffixIcon"
      >
        <slot name="suffix" />
      </DXIconWrapper>
    </div>
  </DXFormLabel>
</template>

<script setup>
import { computed } from "vue";
import { useComponentSize } from "@/composables/useComponentSize";
import { useClassCompositionWithConditions } from "@/composables/useClassComposition";
import DXFormLabel from "../DXFormLabel/DXFormLabel.vue";
import DXIconWrapper from "../DXIconWrapper/DXIconWrapper.vue";

const props = defineProps({
  /** Значение поля (v-model) */
  modelValue: [String, Number],
  /** Тип input */
  type: { type: String, default: "text" },
  /** Placeholder */
  placeholder: { type: String, default: "" },
  /** Лейбл над полем */
  label: { type: String, default: "" },
  /** Обязательное поле */
  required: { type: Boolean, default: false },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Текст ошибки */
  error: { type: String, default: "" },
  /** Вспомогательный текст */
  helper: { type: String, default: "" },
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
  /** Дополнительные классы */
  inputClass: { type: [String, Array, Object], default: "" },
  /** Иконка слева (Heroicon компонент) */
  prefixIcon: { type: Object, default: null },
  /** Иконка справа (Heroicon компонент) */
  suffixIcon: { type: Object, default: null },
});

defineEmits(["update:modelValue"]);

const BASE_CLASSES = "w-full rounded-xl border border-slate-200 bg-white transition-colors text-slate-700 placeholder:text-slate-400";

const inputClasses = computed(() => 
  useClassCompositionWithConditions(
    BASE_CLASSES,
    {
      [useComponentSize(props.size, 'input')]: true,
      'hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300': !props.disabled,
      'opacity-60 cursor-not-allowed bg-slate-50': props.disabled,
      'border-rose-300 focus:ring-rose-500/10': props.error,
      'pl-10': props.prefixIcon || props.$slots?.prefix,
      'pr-10': props.suffixIcon || props.$slots?.suffix,
    },
    props.inputClass
  )
);
</script>

