<template>
  <label
    :class="labelClasses"
    data-component="DXRadio"
    :data-size="size"
    :data-disabled="disabled"
    :data-checked="isChecked"
    :data-variant="variant"
    @click="variant === 'custom' && !disabled && handleCustomChange()"
  >
    <!-- Нативный radio (default variant) -->
    <input
      v-if="variant === 'default'"
      type="radio"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
      :class="inputClasses"
      @change="$emit('update:modelValue', value)"
    />
    
    <!-- Кастомный radio с точкой -->
    <div
      v-else
      :class="customRadioClasses"
      @click.stop="handleCustomChange"
      role="radio"
      :aria-checked="isChecked"
      :aria-disabled="disabled"
      tabindex="0"
      @keydown.space.prevent="handleCustomChange"
    >
      <Transition v-bind="RADIO_TRANSITION" mode="out-in">
        <div
          v-if="isChecked"
          :class="dotClasses"
        />
      </Transition>
    </div>
    
    <span v-if="label" :class="labelTextClasses">
      {{ label }}
    </span>
  </label>
</template>

<script setup>
import { computed } from "vue";
import { useSize } from "../../../composables/useSize";
import { useVariantRadio } from "../../../composables/useVariant";

const props = defineProps({
  /** Текущее значение группы (v-model) */
  modelValue: { type: [String, Number, Boolean], default: null },
  /** Значение этого radio */
  value: { type: [String, Number, Boolean], required: true },
  /** Текст лейбла */
  label: { type: String, default: "" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Размер: xs | sm | md | lg | xl */
  size: { type: String, default: "md" },
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

const emit = defineEmits(["update:modelValue"]);

// Transition configuration (Tailwind classes)
const RADIO_TRANSITION = {
  enterActiveClass: 'transition-opacity transition-transform duration-150 ease-out',
  enterFromClass: 'opacity-0 scale-0',
  enterToClass: 'opacity-100 scale-100',
  leaveActiveClass: 'transition-opacity transition-transform duration-150 ease-in',
  leaveFromClass: 'opacity-100 scale-100',
  leaveToClass: 'opacity-0 scale-0',
};

const BASE_LABEL_CLASSES = "inline-flex items-center gap-2 cursor-pointer mr-4";
const BASE_INPUT_CLASSES = "rounded-full border-slate-300 text-slate-900 focus:ring-slate-900/10 focus:ring-2 transition flex-shrink-0";
const BASE_CUSTOM_CLASSES = "relative flex items-center justify-center border-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 flex-shrink-0";

// Dot size mapping: radio size -> dot size
const getDotSize = (size) => {
  const map = { xs: 'w-1.5 h-1.5', sm: 'w-2 h-2', md: 'w-2.5 h-2.5', lg: 'w-3 h-3', xl: 'w-3 h-3' };
  return map[size] || 'w-2.5 h-2.5';
};


const labelClasses = computed(() => [
  BASE_LABEL_CLASSES,
  { 'opacity-60 cursor-not-allowed': props.disabled }
]);

const labelTextClasses = computed(() => [
  useSize(props.size, 'text'),
  'text-slate-700 select-none'
]);

const inputClasses = computed(() => [
  BASE_INPUT_CLASSES,
  useSize(props.size, 'radio')
]);

const customRadioClasses = computed(() => {
  const colorClasses = useVariantRadio(props.color);
  return [
    BASE_CUSTOM_CLASSES,
    useSize(props.size, 'radio'),
    {
      [colorClasses.unchecked]: !isChecked.value && !props.disabled,
      [colorClasses.checked]: isChecked.value && !props.disabled,
      [colorClasses.ring]: !props.disabled,
      'opacity-50 cursor-not-allowed': props.disabled,
    }
  ];
});

const dotClasses = computed(() => {
  const colorClasses = useVariantRadio(props.color);
  return [
    'rounded-full transition-all duration-200 absolute',
    getDotSize(props.size),
    colorClasses.dot,
  ];
});

const isChecked = computed(() => props.modelValue === props.value);

const handleCustomChange = () => {
  if (props.disabled) return;
  emit("update:modelValue", props.value);
};
</script>
