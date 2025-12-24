<template>
  <div :class="flexClasses" data-component="DXFlex" :data-height="height" :data-shrink="shrink">
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useSize } from "../../../composables/useSize";
import { useClassComposition } from "../../../composables/useClassComposition";

const props = defineProps({
  /** Направление: row | row-reverse | col | col-reverse */
  direction: { type: String, default: "row" },
  /** Выравнивание по главной оси: start | center | end | between | around | evenly */
  justify: { type: String, default: "start" },
  /** Выравнивание по поперечной оси: start | center | end | stretch | baseline */
  align: { type: String, default: "center" },
  /** Перенос: nowrap | wrap | wrap-reverse */
  wrap: { type: String, default: "nowrap" },
  /** Отступ между элементами: none | xs | sm | md | lg | xl */
  gap: { type: String, default: "md" },
  /** Inline flex */
  inline: { type: Boolean, default: false },
  /** Высота: full | auto | fit */
  height: { type: String, default: null },
  /** Flex shrink: 0 | 1 | auto */
  shrink: { type: [String, Boolean], default: null },
});

const BASE_CLASSES = "";

/**
 * Базовый класс flex (inline-flex или flex)
 * 
 * @description
 * Определяет, будет ли flex контейнер inline или block элементом.
 * 
 * @returns {string} Tailwind CSS класс для flex контейнера
 */
const flexBaseClass = computed(() => {
  return props.inline ? "inline-flex" : "flex";
});

/**
 * Классы направления flex
 * 
 * @description
 * Определяет направление главной оси flex контейнера.
 * 
 * @returns {string} Tailwind CSS класс для направления
 */
const directionClass = computed(() => {
  const directionClasses = {
    row: "flex-row",
    "row-reverse": "flex-row-reverse",
    col: "flex-col",
    "col-reverse": "flex-col-reverse",
  };
  return directionClasses[props.direction] || directionClasses.row;
});

/**
 * Классы выравнивания по главной оси
 * 
 * @description
 * Определяет выравнивание элементов по главной оси (justify-content).
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
    evenly: "justify-evenly",
  };
  return justifyClasses[props.justify] || justifyClasses.start;
});

/**
 * Классы выравнивания по поперечной оси
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
    baseline: "items-baseline",
  };
  return alignClasses[props.align] || alignClasses.center;
});

/**
 * Классы переноса элементов
 * 
 * @description
 * Определяет, будут ли элементы переноситься на новую строку (flex-wrap).
 * 
 * @returns {string} Tailwind CSS класс для flex-wrap
 */
const wrapClass = computed(() => {
  const wrapClasses = {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse",
  };
  return wrapClasses[props.wrap] || wrapClasses.nowrap;
});

/**
 * Классы отступа между элементами
 * 
 * @description
 * Использует useSize composable для вычисления gap между элементами.
 * Gap в flex контейнере работает как spacing между элементами.
 * 
 * @returns {string} Tailwind CSS класс для gap
 */
const gapClass = computed(() => {
  return useSize(props.gap, 'spacing') || 'gap-4';
});

/**
 * Классы высоты
 * 
 * @description
 * Определяет высоту flex контейнера.
 * Используется для растягивания контейнера на всю высоту родителя.
 * 
 * @returns {string|null} Tailwind CSS класс для высоты или null
 */
const heightClass = computed(() => {
  if (!props.height) return null;
  
  const heightClasses = {
    full: "h-full",
    auto: "h-auto",
    fit: "h-fit",
  };
  
  return heightClasses[props.height] || null;
});

/**
 * Классы flex-shrink
 * 
 * @description
 * Определяет поведение сжатия элемента в flex контейнере.
 * Используется для предотвращения сжатия элементов (shrink-0) или управления им.
 * 
 * @returns {string|null} Tailwind CSS класс для flex-shrink или null
 */
const shrinkClass = computed(() => {
  if (props.shrink === null || props.shrink === undefined) return null;
  
  // Если передан boolean, true = shrink-0, false = shrink
  if (typeof props.shrink === 'boolean') {
    return props.shrink ? "shrink-0" : "shrink";
  }
  
  // Если передан string
  const shrinkClasses = {
    "0": "shrink-0",
    "1": "shrink",
    auto: "shrink",
  };
  
  return shrinkClasses[props.shrink] || null;
});

/**
 * Все классы для flex компонента
 * 
 * @description
 * Объединяет все классы flex контейнера (базовый класс, направление,
 * выравнивание, перенос, отступы, высота, shrink) с использованием useClassComposition.
 * 
 * @returns {Array} Массив классов для применения к элементу
 */
const flexClasses = computed(() =>
  useClassComposition(
    BASE_CLASSES,
    flexBaseClass.value,
    directionClass.value,
    justifyClass.value,
    alignClass.value,
    wrapClass.value,
    gapClass.value,
    heightClass.value,
    shrinkClass.value
  )
);
</script>

