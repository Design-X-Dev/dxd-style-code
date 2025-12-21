<template>
  <label
    :class="labelClasses"
    data-component="DXCheckbox"
    :data-size="size"
    :data-disabled="disabled"
    :data-checked="isChecked"
    :data-variant="variant"
    :data-shape="shape"
    @click="variant === 'custom' && !disabled && handleToggle(!isChecked)"
  >
    <!-- Нативный checkbox (default variant) -->
    <input
      v-if="variant === 'default'"
      type="checkbox"
      :checked="isChecked"
      :value="value"
      :disabled="disabled"
      :class="inputClasses"
      @change="handleChange"
    />
    
    <!-- Кастомный checkbox с иконками -->
    <div
      v-else
      :class="customCheckboxClasses"
      @click.stop="handleToggle(!isChecked)"
      role="checkbox"
      :aria-checked="isChecked"
      :aria-disabled="disabled"
      tabindex="0"
      @keydown.space.prevent="handleToggle(!isChecked)"
    >
      <Transition v-bind="CHECKBOX_TRANSITION" mode="out-in">
        <DXIcon
          v-if="isChecked && iconToShow"
          :icon="iconToShow"
          :size="getIconSize(props.size)"
          :animation="iconAnimation"
          class="text-white absolute"
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
import { CheckIcon } from "@heroicons/vue/24/solid";
import { useSize } from "@/composables/useSize";
import { useVariantCheckbox } from "@/composables/useVariant";
import DXIcon from "../DXIcon/DXIcon.vue";

const props = defineProps({
  /** Значение (v-model) - boolean или массив */
  modelValue: { type: [Boolean, Array], default: false },
  /** Значение для массива */
  value: { type: [String, Number], default: undefined },
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
  /** Иконка для checked состояния (для custom variant) */
  checkedIcon: { type: Object, default: null },
  /** Иконка для unchecked состояния (для custom variant) */
  uncheckedIcon: { type: Object, default: null },
  /** Форма кастомного checkbox: square | circle */
  shape: {
    type: String,
    default: "square",
    validator: (value) => ['square', 'circle'].includes(value)
  },
  /** Анимация иконки: none | scale | wiggle */
  iconAnimation: {
    type: String,
    default: "scale",
    validator: (value) => ['none', 'scale', 'wiggle'].includes(value)
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
const CHECKBOX_TRANSITION = {
  enterActiveClass: 'transition-opacity transition-transform duration-150 ease-out',
  enterFromClass: 'opacity-0 scale-50',
  enterToClass: 'opacity-100 scale-100',
  leaveActiveClass: 'transition-opacity transition-transform duration-150 ease-in',
  leaveFromClass: 'opacity-100 scale-100',
  leaveToClass: 'opacity-0 scale-50',
};

const BASE_LABEL_CLASSES = "inline-flex items-center gap-2 cursor-pointer mr-4";
const BASE_INPUT_CLASSES = "rounded border-slate-300 text-slate-900 focus:ring-slate-900/10 focus:ring-2 transition flex-shrink-0";
const BASE_CUSTOM_CLASSES = "relative flex items-center justify-center border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 flex-shrink-0";

const SHAPE_CLASSES = {
  square: "rounded",
  circle: "rounded-full",
};

// Icon size mapping: checkbox size -> icon size
const getIconSize = (size) => {
  const map = { xs: 'xs', sm: 'xs', md: 'sm', lg: 'md', xl: 'md' };
  return map[size] || 'sm';
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
  useSize(props.size, 'checkbox')
]);

const customCheckboxClasses = computed(() => {
  const colorClasses = useVariantCheckbox(props.color);
  return [
    BASE_CUSTOM_CLASSES,
    useSize(props.size, 'checkbox'),
    SHAPE_CLASSES[props.shape],
    {
      [colorClasses.unchecked]: !isChecked.value && !props.disabled,
      [colorClasses.checked]: isChecked.value && !props.disabled,
      [colorClasses.ring]: !props.disabled,
      'opacity-50 cursor-not-allowed': props.disabled,
    }
  ];
});

const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value);
  }
  return props.modelValue;
});

const iconToShow = computed(() => 
  isChecked.value ? (props.checkedIcon || CheckIcon) : props.uncheckedIcon
);

const handleToggle = (newChecked) => {
  if (props.disabled) return;
  
  if (Array.isArray(props.modelValue)) {
    const newValue = [...props.modelValue];
    if (newChecked) {
      if (!newValue.includes(props.value)) {
        newValue.push(props.value);
      }
    } else {
      const index = newValue.indexOf(props.value);
      if (index > -1) newValue.splice(index, 1);
    }
    emit("update:modelValue", newValue);
  } else {
    emit("update:modelValue", newChecked);
  }
};

const handleChange = (event) => {
  handleToggle(event.target.checked);
};
</script>

