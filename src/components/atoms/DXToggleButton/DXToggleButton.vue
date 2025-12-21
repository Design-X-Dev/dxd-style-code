<template>
  <button
    type="button"
    class="toggle-btn inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
    :class="[sizeClass, currentVariantClass, { 'w-full': block }]"
    :disabled="disabled"
    @click="handleToggle"
    :aria-pressed="modelValue"
    :aria-label="ariaLabel"
    data-component="DXToggleButton"
  >
    <!-- Иконка -->
    <DXIcon
      v-if="currentIcon"
      :icon="currentIcon"
      :size="iconSize"
      :animation="iconAnimation"
    />
    
    <!-- Текст (опционально) -->
    <span v-if="currentLabel">{{ currentLabel }}</span>
  </button>
</template>

<script setup>
import { computed } from "vue";
import DXIcon from "../v2/DXIcon/DXIcon.vue";

const props = defineProps({
  /** Текущее состояние (v-model) */
  modelValue: { type: Boolean, default: false },
  
  /** Иконка для активного состояния */
  activeIcon: { type: Object, required: true },
  /** Иконка для неактивного состояния */
  inactiveIcon: { type: Object, required: true },
  
  /** Текст для активного состояния (опционально) */
  activeLabel: { type: String, default: null },
  /** Текст для неактивного состояния (опционально) */
  inactiveLabel: { type: String, default: null },
  
  /** Вариант оформления для активного состояния */
  activeVariant: { type: String, default: "primary" },
  /** Вариант оформления для неактивного состояния */
  inactiveVariant: { type: String, default: "ghost" },
  
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
  
  /** Анимация иконки: none | wiggle | scale | rotate */
  iconAnimation: { type: String, default: "wiggle" },
  
  /** Растянуть на всю ширину */
  block: { type: Boolean, default: false },
  
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  
  /** Aria-label для доступности */
  ariaLabel: { type: String, default: null },
});

const emit = defineEmits(["update:modelValue", "change"]);

const handleToggle = () => {
  const newValue = !props.modelValue;
  emit("update:modelValue", newValue);
  emit("change", newValue);
};

// Текущая иконка в зависимости от состояния
const currentIcon = computed(() => {
  return props.modelValue ? props.activeIcon : props.inactiveIcon;
});

// Текущий текст
const currentLabel = computed(() => {
  return props.modelValue ? props.activeLabel : props.inactiveLabel;
});

// Размер иконки в зависимости от размера кнопки
const iconSize = computed(() => {
  if (props.size === "sm") return "xs";
  if (props.size === "lg") return "md";
  return "sm";
});

// Классы размера
const sizeClass = computed(() => {
  if (!currentLabel.value) {
    // Только иконка - квадратная кнопка
    if (props.size === "sm") return "h-9 w-9 text-xs";
    if (props.size === "lg") return "h-12 w-12 text-base";
    return "h-10 w-10 text-sm";
  }
  // С текстом
  if (props.size === "sm") return "px-3 py-2 text-xs";
  if (props.size === "lg") return "px-5 py-3 text-base";
  return "px-4 py-2.5 text-sm";
});

// Варианты оформления
const variantClasses = {
  primary: "bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-500",
  ghost: "border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 bg-white focus:ring-slate-400",
  danger: "bg-rose-600 text-white hover:bg-rose-500 focus:ring-rose-500",
  success: "bg-green-600 text-white hover:bg-green-500 focus:ring-green-500",
  warning: "bg-amber-500 text-white hover:bg-amber-400 focus:ring-amber-500",
  outline: "border border-slate-200 text-slate-700 hover:border-slate-300 bg-transparent focus:ring-slate-400",
};

// Текущий вариант в зависимости от состояния
const currentVariantClass = computed(() => {
  const variant = props.modelValue ? props.activeVariant : props.inactiveVariant;
  return variantClasses[variant] || variantClasses.ghost;
});
</script>

<style scoped>
.toggle-btn {
  user-select: none;
}

.toggle-btn:active:not(:disabled) {
  transform: scale(0.97);
}
</style>

