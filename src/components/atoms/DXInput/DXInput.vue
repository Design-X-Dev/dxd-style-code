<template>
  <div class="w-full" data-component="DXInput">
    <label v-if="label" class="block text-sm text-slate-600 mb-1 font-medium">{{ label }}</label>
    <div class="relative">
      <div v-if="prefixIcon || $slots.prefix" class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
        <DXIcon v-if="prefixIcon" :icon="prefixIcon" size="sm" animation="none" />
        <slot v-else name="prefix" />
      </div>
      <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        :disabled="disabled"
        :class="inputClasses"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <div v-if="suffixIcon || $slots.suffix" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
        <DXIcon v-if="suffixIcon" :icon="suffixIcon" size="sm" animation="none" />
        <slot v-else name="suffix" />
      </div>
    </div>
    <p v-if="error" class="mt-1 text-xs text-rose-500">{{ error }}</p>
    <p v-else-if="helper" class="mt-1 text-xs text-slate-500">{{ helper }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useComponentSize } from "@/composables/useComponentSize";
import DXIcon from "../DXIcon/DXIcon.vue";

const props = defineProps({
  /** Значение поля (v-model) */
  modelValue: [String, Number],
  /** Тип input */
  type: { type: String, default: "text" },
  /** Placeholder */
  placeholder: { type: String, default: "" },
  /** Лейбл над полем */
  label: { type: String, default: "" },
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

const inputClasses = computed(() => [
  "w-full rounded-xl border border-slate-200 bg-white transition-colors",
  useComponentSize(props.size, 'input'),
  "text-slate-700 placeholder:text-slate-400",
  !props.disabled && "hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300",
  props.disabled && "opacity-60 cursor-not-allowed bg-slate-50",
  props.error && "border-rose-300 focus:ring-rose-500/10",
  (props.prefixIcon || props.$slots?.prefix) && "pl-10",
  (props.suffixIcon || props.$slots?.suffix) && "pr-10",
  props.inputClass,
]);
</script>

