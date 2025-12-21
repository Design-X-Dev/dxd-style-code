<template>
  <label
    :class="labelClasses"
    data-component="DXToggle"
    :data-disabled="disabled"
    :data-checked="modelValue"
    :data-size="size"
    :data-color="color"
  >
    <button
      type="button"
      role="switch"
      :aria-checked="modelValue"
      :disabled="disabled"
      :class="buttonClasses"
      @click="handleToggle"
    >
      <span :class="indicatorClasses" />
    </button>
    <span v-if="label" :class="labelTextClasses">
      {{ label }}
    </span>
  </label>
</template>

<script setup>
import { computed } from "vue";
import { useSize } from "@/composables/useSize";
import { useVariantToggle } from "@/composables/useVariant";
import { useAnimation } from "@/composables/useAnimation";
import { useClassComposition } from "@/composables/useClassComposition";

const props = defineProps({
  /** Значение (v-model) */
  modelValue: { type: Boolean, default: false },
  /** Текст лейбла */
  label: { type: String, default: "" },
  /** Размер: xs | sm | md | lg | xl */
  size: { type: String, default: "md" },
  /** Цвет: slate | primary | success | danger | warning | info */
  color: { type: String, default: "slate" },
  /** Анимация: none | smooth */
  animation: { type: String, default: "smooth" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);

/**
 * Обработчик переключения
 */
const handleToggle = () => {
  if (!props.disabled) {
    emit("update:modelValue", !props.modelValue);
  }
};

/**
 * Размеры toggle (track и thumb)
 */
const toggleSizes = computed(() => {
  return useSize(props.size, "toggle");
});

/**
 * Вариант toggle (цвета для checked/unchecked)
 */
const toggleVariant = computed(() => {
  return useVariantToggle(props.color, props.modelValue);
});

/**
 * Классы для label
 */
const labelClasses = computed(() =>
  useClassComposition(
    "inline-flex items-center gap-2 cursor-pointer mr-4",
    {
      'opacity-60 cursor-not-allowed': props.disabled,
    }
  )
);

/**
 * Классы для кнопки (track)
 */
const buttonClasses = computed(() => {
  const baseClasses = `relative inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${toggleSizes.value.track}`;
  
  return useClassComposition(
    baseClasses,
    {
      [toggleVariant.value.current]: true,
      [toggleVariant.value.ring]: true,
    }
  );
});

/**
 * Классы для индикатора (thumb)
 */
const indicatorClasses = computed(() => {
  const baseClasses = `inline-block rounded-full bg-white ${toggleSizes.value.thumb} ${useAnimation(props.animation, 'toggle')}`;
  
  // Вычисляем смещение в зависимости от размера
  const translateClasses = getIndicatorTranslate(props.size);
  
  return useClassComposition(
    baseClasses,
    {
      [translateClasses.checked]: props.modelValue,
      [translateClasses.unchecked]: !props.modelValue,
    }
  );
});

/**
 * Получить классы смещения для индикатора в зависимости от размера
 * Вычисляется как: ширина track - ширина thumb - отступ справа
 */
function getIndicatorTranslate(size) {
  const translations = {
    xs: { checked: 'translate-x-4', unchecked: 'translate-x-0.5' }, // w-7 (28px) - w-3 (12px) - 2px = 14px ≈ translate-x-4
    sm: { checked: 'translate-x-5', unchecked: 'translate-x-0.5' }, // w-9 (36px) - w-3.5 (14px) - 2px = 20px = translate-x-5
    md: { checked: 'translate-x-6', unchecked: 'translate-x-1' },   // w-11 (44px) - w-4 (16px) - 4px = 24px = translate-x-6
    lg: { checked: 'translate-x-8', unchecked: 'translate-x-1' },   // w-14 (56px) - w-5 (20px) - 4px = 32px = translate-x-8
    xl: { checked: 'translate-x-9', unchecked: 'translate-x-1' },   // w-16 (64px) - w-6 (24px) - 4px = 36px = translate-x-9
  };
  
  return translations[size] || translations.md;
}

/**
 * Классы для текста лейбла
 */
const labelTextClasses = computed(() => {
  const sizeText = useSize(props.size, "text");
  return `${sizeText} text-slate-700 select-none`;
});
</script>

