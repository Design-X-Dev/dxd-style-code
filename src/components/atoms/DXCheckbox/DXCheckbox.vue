<template>
  <label
    :class="labelClasses"
    data-component="DXCheckbox"
    :data-size="size"
    :data-disabled="disabled"
    :data-checked="isChecked"
    :data-variant="variant"
    :data-shape="shape"
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
      @click="handleCustomChange"
      role="checkbox"
      :aria-checked="isChecked"
      :aria-disabled="disabled"
      tabindex="0"
      @keydown.space.prevent="handleCustomChange"
    >
      <Transition name="checkbox-icon" mode="out-in">
        <DXIcon
          v-if="isChecked && iconToShow"
          :icon="iconToShow"
          :size="iconSize"
          :animation="iconAnimation"
          class="text-white absolute"
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
import { CheckIcon } from "@heroicons/vue/24/solid";
import { useComponentSize } from "@/composables/useComponentSize";
import { useClassCompositionWithConditions } from "@/composables/useClassComposition";
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
  /** Размер: sm | md | lg */
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

const BASE_LABEL_CLASSES = "inline-flex items-center gap-2 cursor-pointer mr-4";
const BASE_INPUT_CLASSES = "rounded border-slate-300 text-slate-900 focus:ring-slate-900/10 focus:ring-2 transition flex-shrink-0";
const BASE_CUSTOM_CLASSES = "relative flex items-center justify-center border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 flex-shrink-0";

const SHAPE_CLASSES = {
  square: "rounded",
  circle: "rounded-full",
};

const SIZE_CLASSES = {
  sm: "w-4 h-4 min-w-[1rem] min-h-[1rem]",
  md: "w-5 h-5 min-w-[1.25rem] min-h-[1.25rem]",
  lg: "w-6 h-6 min-w-[1.5rem] min-h-[1.5rem]",
};

const ICON_SIZES = {
  sm: "xs",
  md: "sm",
  lg: "md",
};

const COLOR_CLASSES = {
  slate: {
    unchecked: "border-slate-300 bg-white hover:border-slate-400",
    checked: "border-slate-700 bg-slate-700 hover:bg-slate-600",
    ring: "focus:ring-slate-900/10",
  },
  primary: {
    unchecked: "border-slate-300 bg-white hover:border-slate-400",
    checked: "border-slate-900 bg-slate-900 hover:bg-slate-800",
    ring: "focus:ring-slate-900/10",
  },
  success: {
    unchecked: "border-slate-300 bg-white hover:border-emerald-400",
    checked: "border-emerald-600 bg-emerald-600 hover:bg-emerald-500",
    ring: "focus:ring-emerald-500/10",
  },
  danger: {
    unchecked: "border-slate-300 bg-white hover:border-rose-400",
    checked: "border-rose-600 bg-rose-600 hover:bg-rose-500",
    ring: "focus:ring-rose-500/10",
  },
  warning: {
    unchecked: "border-slate-300 bg-white hover:border-amber-400",
    checked: "border-amber-600 bg-amber-600 hover:bg-amber-500",
    ring: "focus:ring-amber-500/10",
  },
  info: {
    unchecked: "border-slate-300 bg-white hover:border-blue-400",
    checked: "border-blue-600 bg-blue-600 hover:bg-blue-500",
    ring: "focus:ring-blue-500/10",
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
      [useComponentSize(props.size, 'checkbox')]: true,
    }
  )
);

const customCheckboxClasses = computed(() => {
  const colorClasses = COLOR_CLASSES[props.color] || COLOR_CLASSES.primary;
  return useClassCompositionWithConditions(
    BASE_CUSTOM_CLASSES,
    {
      [SIZE_CLASSES[props.size] || SIZE_CLASSES.md]: true,
      [SHAPE_CLASSES[props.shape]]: true,
      [colorClasses.unchecked]: !isChecked.value && !props.disabled,
      [colorClasses.checked]: isChecked.value && !props.disabled,
      [colorClasses.ring]: !props.disabled,
      'opacity-50 cursor-not-allowed': props.disabled,
    }
  );
});

const iconSize = computed(() => ICON_SIZES[props.size] || ICON_SIZES.md);

const iconToShow = computed(() => {
  if (isChecked.value) {
    return props.checkedIcon || CheckIcon;
  }
  return props.uncheckedIcon;
});

const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value);
  }
  return props.modelValue;
});

const handleChange = (event) => {
  if (props.disabled) return;
  
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

const handleCustomChange = () => {
  if (props.disabled) return;
  
  if (Array.isArray(props.modelValue)) {
    const newValue = [...props.modelValue];
    const isCurrentlyChecked = newValue.includes(props.value);
    
    if (!isCurrentlyChecked) {
      newValue.push(props.value);
    } else {
      const index = newValue.indexOf(props.value);
      if (index > -1) {
        newValue.splice(index, 1);
      }
    }
    emit("update:modelValue", newValue);
  } else {
    emit("update:modelValue", !props.modelValue);
  }
};
</script>

<style scoped>
/* Анимация появления/исчезновения иконки */
.checkbox-icon-enter-active,
.checkbox-icon-leave-active {
  transition: opacity 150ms ease, transform 150ms ease;
}

.checkbox-icon-enter-from {
  opacity: 0;
  transform: scale(0.5);
}

.checkbox-icon-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

.checkbox-icon-enter-to,
.checkbox-icon-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>

