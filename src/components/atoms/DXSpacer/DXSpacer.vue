<template>
  <div :class="spacerClasses" :style="spacerStyle" data-component="DXSpacer" aria-hidden="true" />
</template>

<script setup>
import { computed } from "vue";
import { useClassComposition } from "../../../composables/useClassComposition";

const props = defineProps({
  /** Размер: xs | sm | md | lg | xl или число в пикселях */
  size: { type: [String, Number], default: "md" },
  /** Направление: vertical | horizontal | both */
  direction: { type: String, default: "vertical" },
  /** Занять всё доступное пространство (flex-grow) */
  grow: { type: Boolean, default: false },
});

/**
 * Классы размера для строковых значений
 * 
 * @description
 * Определяет классы размера для предопределенных строковых значений.
 * Используется только для строковых значений, числовые значения обрабатываются через inline стили.
 * 
 * @returns {Object} Объект с классами для вертикального и горизонтального направления
 */
const sizeClasses = {
  xs: { v: "h-1", h: "w-1" },
  sm: { v: "h-2", h: "w-2" },
  md: { v: "h-4", h: "w-4" },
  lg: { v: "h-8", h: "w-8" },
  xl: { v: "h-12", h: "w-12" },
};

/**
 * Классы размера spacer
 * 
 * @description
 * Вычисляет классы размера на основе props.size и props.direction.
 * Если grow=true, возвращает flex-grow класс.
 * Для строковых значений использует предопределенные классы.
 * Для числовых значений возвращает пустой массив (размер задается через inline стили).
 * 
 * @returns {Array|string} Массив классов или строка для применения к элементу
 */
const spacerClasses = computed(() => {
  // Если grow, используем flex-grow
  if (props.grow) {
    return useClassComposition("flex-grow");
  }
  
  // Для числовых значений классы не нужны, размер задается через inline стили
  if (typeof props.size === "number") {
    return useClassComposition();
  }
  
  // Для строковых значений используем предопределенные классы
  const sizes = sizeClasses[props.size];
  if (sizes) {
    if (props.direction === "horizontal") {
      return useClassComposition(sizes.h);
    }
    if (props.direction === "both") {
      return useClassComposition(sizes.v, sizes.h);
    }
    return useClassComposition(sizes.v);
  }
  
  return useClassComposition();
});

/**
 * Inline стили для spacer
 * 
 * @description
 * Вычисляет inline стили для числовых значений размера.
 * Если grow=true, стили не нужны.
 * Для строковых значений стили не нужны (используются классы).
 * 
 * @returns {Object} Объект со стилями или пустой объект
 */
const spacerStyle = computed(() => {
  // Если grow, стили не нужны
  if (props.grow) return {};
  
  // Для числовых значений задаем размер через inline стили
  if (typeof props.size === "number") {
    const px = `${props.size}px`;
    if (props.direction === "horizontal") {
      return { width: px };
    }
    if (props.direction === "both") {
      return { height: px, width: px };
    }
    return { height: px };
  }
  
  // Для строковых значений стили не нужны
  return {};
});
</script>

