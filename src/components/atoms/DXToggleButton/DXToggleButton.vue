<template>
  <button
    type="button"
    :class="allClasses"
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
import { useSize } from "../../../composables/useSize";
import { useVariantButton } from "../../../composables/useVariant";
import { useClassComposition } from "../../../composables/useClassComposition";
import DXIcon from "../DXIcon/DXIcon.vue";

const props = defineProps({
  /** Текущее состояние (v-model) */
  modelValue: { type: Boolean, default: false },
  
  /** Иконка для активного состояния */
  activeIcon: { type: [Object, Function], required: true },
  /** Иконка для неактивного состояния */
  inactiveIcon: { type: [Object, Function], required: true },
  
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

/**
 * Обработчик переключения
 */
const handleToggle = () => {
  const newValue = !props.modelValue;
  emit("update:modelValue", newValue);
  emit("change", newValue);
};

/**
 * Текущая иконка в зависимости от состояния
 */
const currentIcon = computed(() => {
  return props.modelValue ? props.activeIcon : props.inactiveIcon;
});

/**
 * Текущий текст
 */
const currentLabel = computed(() => {
  return props.modelValue ? props.activeLabel : props.inactiveLabel;
});

/**
 * Размер иконки в зависимости от размера кнопки
 */
const iconSize = computed(() => {
  if (props.size === "sm") return "xs";
  if (props.size === "lg") return "md";
  return "sm";
});

/**
 * Классы размера
 */
const sizeClass = computed(() => {
  const hasLabel = Boolean(currentLabel.value);
  return useSize(props.size, hasLabel ? 'button' : 'buttonIcon');
});

/**
 * Текущий вариант в зависимости от состояния
 */
const currentVariantClass = computed(() => {
  const variant = props.modelValue ? props.activeVariant : props.inactiveVariant;
  return useVariantButton(variant);
});

/**
 * Все классы для кнопки
 */
const allClasses = computed(() => 
  useClassComposition(
    "toggle-btn inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
    sizeClass.value,
    currentVariantClass.value,
    {
      'w-full': props.block,
    }
  )
);
</script>

<style scoped>
.toggle-btn {
  user-select: none;
}

.toggle-btn:active:not(:disabled) {
  transform: scale(0.97);
}
</style>

