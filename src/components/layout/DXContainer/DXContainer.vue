<template>
  <div 
    :class="containerClasses" 
    data-component="DXContainer" 
    :data-size="size"
    :data-padding="padding"
    :data-center="center"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useSpacing } from "@/composables/useSpacing";
import { useClassComposition } from "@/composables/useClassComposition";

const props = defineProps({
  /** Максимальная ширина: sm | md | lg | xl | 2xl | full */
  size: { type: String, default: "lg" },
  /** Центрировать контейнер */
  center: { type: Boolean, default: true },
  /** Горизонтальные отступы: none | xs | sm | md | lg | xl */
  padding: { type: String, default: "md" },
});

const BASE_CLASSES = "w-full";

/**
 * Классы максимальной ширины контейнера
 * 
 * @description
 * Определяет максимальную ширину контейнера в зависимости от размера экрана.
 * Используется для ограничения ширины контента на больших экранах.
 * 
 * @returns {string} Tailwind CSS класс для максимальной ширины
 */
const sizeClass = computed(() => {
  const sizeClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full",
  };
  return sizeClasses[props.size] || sizeClasses.lg;
});

/**
 * Классы горизонтальных отступов
 * 
 * @description
 * Использует useSpacing composable для унификации отступов.
 * Применяет горизонтальные отступы (padding-x) к контейнеру.
 * 
 * @returns {string} Tailwind CSS класс для горизонтальных отступов
 */
const paddingClass = computed(() => {
  return useSpacing(props.padding, 'paddingX');
});

/**
 * Все классы для контейнера
 * 
 * @description
 * Объединяет базовые классы, размер, отступы и центрирование
 * с использованием useClassComposition для единообразного подхода.
 * 
 * @returns {Array} Массив классов для применения к элементу
 */
const containerClasses = computed(() =>
  useClassComposition(
    BASE_CLASSES,
    sizeClass.value,
    paddingClass.value,
    {
      "mx-auto": props.center,
    }
  )
);
</script>

