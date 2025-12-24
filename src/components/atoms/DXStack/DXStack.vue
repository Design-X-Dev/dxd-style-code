<template>
  <component
    :is="tag"
    :class="stackClasses" 
    data-component="DXStack" 
    :data-direction="direction"
    :data-gap="gap"
    :data-align="align"
    :data-justify="justify"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { useSize } from "../../../composables/useSize";
import { useClassComposition } from "../../../composables/useClassComposition";

const props = defineProps({
  /** HTML тег */
  tag: { type: String, default: "div" },
  /** Направление: vertical | horizontal */
  direction: { type: String, default: "vertical" },
  /** Отступ между элементами: none | xs | sm | md | lg | xl | 2xl */
  gap: { type: String, default: "md" },
  /** Выравнивание: start | center | end | stretch */
  align: { type: String, default: "stretch" },
  /** Распределение: start | center | end | between | around */
  justify: { type: String, default: "start" },
  /** Разделители между элементами */
  dividers: { type: Boolean, default: false },
});

const BASE_CLASSES = "flex";

/**
 * Класс направления stack
 * 
 * @description
 * Определяет направление элементов в stack (вертикальное или горизонтальное).
 * 
 * @returns {string} Tailwind CSS класс для направления flex
 */
const directionClass = computed(() => {
  return props.direction === "horizontal" ? "flex-row" : "flex-col";
});

/**
 * Классы отступа между элементами
 * 
 * @description
 * Использует useSize composable для вычисления gap между элементами stack.
 * Поддерживает расширенные значения включая 2xl (специальная обработка).
 * 
 * @returns {string} Tailwind CSS класс для gap
 */
const gapClass = computed(() => {
  // Для 2xl используем специальную обработку, так как useSize не поддерживает это значение в размерной сетке
  if (props.gap === "2xl") {
    return "gap-12";
  }
  
  // Используем useSize для стандартных значений (none, xs, sm, md, lg, xl)
  return useSize(props.gap, 'spacing') || 'gap-4';
});

/**
 * Классы выравнивания элементов
 * 
 * @description
 * Определяет выравнивание элементов по поперечной оси (align-items).
 * 
 * @returns {string} Tailwind CSS класс для align-items
 */
const alignClass = computed(() => {
  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };
  return alignClasses[props.align] || alignClasses.stretch;
});

/**
 * Классы распределения элементов
 * 
 * @description
 * Определяет распределение элементов по главной оси (justify-content).
 * 
 * @returns {string} Tailwind CSS класс для justify-content
 */
const justifyClass = computed(() => {
  const justifyClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
  };
  return justifyClasses[props.justify] || justifyClasses.start;
});

/**
 * Классы разделителей
 * 
 * @description
 * Определяет, будут ли добавлены разделители между элементами.
 * Разделители зависят от направления: горизонтальные для vertical stack,
 * вертикальные для horizontal stack.
 * 
 * @returns {string|null} Tailwind CSS классы для разделителей или null
 */
const dividersClass = computed(() => {
  if (!props.dividers) return null;
  
  return props.direction === "horizontal"
    ? "divide-x divide-slate-200"
    : "divide-y divide-slate-200";
});

/**
 * Все классы для stack компонента
 * 
 * @description
 * Объединяет все классы stack контейнера (базовый класс, направление,
 * отступы, выравнивание, распределение, разделители) с использованием useClassComposition.
 * 
 * @returns {Array} Массив классов для применения к элементу
 */
const stackClasses = computed(() =>
  useClassComposition(
    BASE_CLASSES,
    directionClass.value,
    gapClass.value,
    alignClass.value,
    justifyClass.value,
    dividersClass.value
  )
);
</script>

