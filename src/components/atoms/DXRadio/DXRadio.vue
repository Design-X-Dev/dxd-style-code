<template>
  <label
    :class="labelClasses"
    data-component="DXRadio"
    :data-size="size"
    :data-disabled="disabled"
    :data-checked="isChecked"
    :data-variant="variant"
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
      @click="handleCustomChange"
      role="radio"
      :aria-checked="isChecked"
      :aria-disabled="disabled"
      tabindex="0"
      @keydown.space.prevent="handleCustomChange"
    >
      <Transition name="radio-dot" mode="out-in">
        <div
          v-if="isChecked"
          :class="dotClasses"
          class="absolute"
        />
      </Transition>
    </div>
    
    <span v-if="label" class="text-sm text-slate-700 select-none">
      {{ label }}
    </span>
  </label>
</template>

<script setup>
import { computed } from "vue";
import { useComponentSize } from "@/composables/useComponentSize";
import { useClassCompositionWithConditions } from "@/composables/useClassComposition";

const props = defineProps({
  /** Текущее значение группы (v-model) */
  modelValue: { type: [String, Number, Boolean], default: null },
  /** Значение этого radio */
  value: { type: [String, Number, Boolean], required: true },
  /** Текст лейбла */
  label: { type: String, default: "" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Размер: sm | md | lg */
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

const BASE_LABEL_CLASSES = "inline-flex items-center gap-2 cursor-pointer mr-4";
const BASE_INPUT_CLASSES = "rounded-full border-slate-300 text-slate-900 focus:ring-slate-900/10 focus:ring-2 transition flex-shrink-0";
const BASE_CUSTOM_CLASSES = "relative flex items-center justify-center border-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 flex-shrink-0";

const SIZE_CLASSES = {
  sm: "w-4 h-4 min-w-[1rem] min-h-[1rem]",
  md: "w-5 h-5 min-w-[1.25rem] min-h-[1.25rem]",
  lg: "w-6 h-6 min-w-[1.5rem] min-h-[1.5rem]",
};

const DOT_SIZE_CLASSES = {
  sm: "w-2 h-2",
  md: "w-2.5 h-2.5",
  lg: "w-3 h-3",
};

const COLOR_CLASSES = {
  slate: {
    unchecked: "border-slate-300 bg-white hover:border-slate-400",
    checked: "border-slate-700 bg-slate-50 hover:border-slate-600",
    ring: "focus:ring-slate-900/10",
    dot: "bg-slate-700",
  },
  primary: {
    unchecked: "border-slate-300 bg-white hover:border-slate-400",
    checked: "border-slate-900 bg-slate-50 hover:border-slate-800",
    ring: "focus:ring-slate-900/10",
    dot: "bg-slate-900",
  },
  success: {
    unchecked: "border-slate-300 bg-white hover:border-emerald-400",
    checked: "border-emerald-600 bg-emerald-50 hover:border-emerald-500",
    ring: "focus:ring-emerald-500/10",
    dot: "bg-emerald-600",
  },
  danger: {
    unchecked: "border-slate-300 bg-white hover:border-rose-400",
    checked: "border-rose-600 bg-rose-50 hover:border-rose-500",
    ring: "focus:ring-rose-500/10",
    dot: "bg-rose-600",
  },
  warning: {
    unchecked: "border-slate-300 bg-white hover:border-amber-400",
    checked: "border-amber-600 bg-amber-50 hover:border-amber-500",
    ring: "focus:ring-amber-500/10",
    dot: "bg-amber-600",
  },
  info: {
    unchecked: "border-slate-300 bg-white hover:border-blue-400",
    checked: "border-blue-600 bg-blue-50 hover:border-blue-500",
    ring: "focus:ring-blue-500/10",
    dot: "bg-blue-600",
  },
};

const labelClasses = computed(() =>
  useClassCompositionWithConditions(
    BASE_LABEL_CLASSES,
    {
      'opacity-60 cursor-not-allowed': props.disabled,
    }
  )
);

const inputClasses = computed(() =>
  useClassCompositionWithConditions(
    BASE_INPUT_CLASSES,
    {
      [useComponentSize(props.size, 'radio')]: true,
    }
  )
);

const customRadioClasses = computed(() => {
  const colorClasses = COLOR_CLASSES[props.color] || COLOR_CLASSES.primary;
  return useClassCompositionWithConditions(
    BASE_CUSTOM_CLASSES,
    {
      [SIZE_CLASSES[props.size] || SIZE_CLASSES.md]: true,
      [colorClasses.unchecked]: !isChecked.value && !props.disabled,
      [colorClasses.checked]: isChecked.value && !props.disabled,
      [colorClasses.ring]: !props.disabled,
      'opacity-50 cursor-not-allowed': props.disabled,
    }
  );
});

const dotClasses = computed(() => {
  const colorClasses = COLOR_CLASSES[props.color] || COLOR_CLASSES.primary;
  return [
    'rounded-full transition-all duration-200',
    DOT_SIZE_CLASSES[props.size] || DOT_SIZE_CLASSES.md,
    colorClasses.dot,
  ];
});

const isChecked = computed(() => props.modelValue === props.value);

const handleCustomChange = () => {
  if (props.disabled) return;
  emit("update:modelValue", props.value);
};
</script>

<style scoped>
/* Анимация появления/исчезновения точки */
.radio-dot-enter-active,
.radio-dot-leave-active {
  transition: opacity 150ms ease, transform 150ms ease;
}

.radio-dot-enter-from {
  opacity: 0;
  transform: scale(0);
}

.radio-dot-leave-to {
  opacity: 0;
  transform: scale(0);
}

.radio-dot-enter-to,
.radio-dot-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
