<template>
  <component :is="tag" :class="boxClasses" data-component="DXBox" :data-position="position" :data-z-index="zIndex">
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { useSpacing } from "../../../composables/useSpacing";
import { useClassComposition } from "../../../composables/useClassComposition";

const props = defineProps({
  /** HTML тег */
  tag: { type: String, default: "div" },
  /** Padding: none | xs | sm | md | lg | xl */
  p: { type: String, default: "" },
  /** Padding X (horizontal) */
  px: { type: String, default: "" },
  /** Padding Y (vertical) */
  py: { type: String, default: "" },
  /** Margin: none | xs | sm | md | lg | xl | auto */
  m: { type: String, default: "" },
  /** Margin X (horizontal) */
  mx: { type: String, default: "" },
  /** Margin Y (vertical) */
  my: { type: String, default: "" },
  /** Скругление: none | sm | md | lg | xl | 2xl | full */
  rounded: { type: String, default: "" },
  /** Фон: white | slate | transparent */
  bg: { type: String, default: "" },
  /** Тень: none | sm | md | lg | xl */
  shadow: { type: String, default: "" },
  /** Рамка */
  border: { type: Boolean, default: false },
  /** Позиционирование: static | relative | absolute | fixed | sticky */
  position: { type: String, default: null },
  /** z-index: 0 | 10 | 20 | 30 | 40 | 50 | auto */
  zIndex: { type: String, default: null },
  /** Inset (top-0 right-0 bottom-0 left-0) */
  inset: { type: Boolean, default: false },
});

/**
 * Классы padding
 * 
 * @description
 * Вычисляет классы для padding используя useSpacing composable.
 * Поддерживает общий padding (p), горизонтальный (px) и вертикальный (py).
 * 
 * @returns {string|Object} Классы padding или объект для условных классов
 */
const paddingClasses = computed(() => {
  const classes = {};
  
  if (props.p) {
    const paddingClass = useSpacing(props.p, 'padding');
    if (paddingClass) classes[paddingClass] = true;
  }
  
  if (props.px) {
    const paddingXClass = useSpacing(props.px, 'paddingX');
    if (paddingXClass) classes[paddingXClass] = true;
  }
  
  if (props.py) {
    const paddingYClass = useSpacing(props.py, 'paddingY');
    if (paddingYClass) classes[paddingYClass] = true;
  }
  
  return Object.keys(classes).length > 0 ? classes : null;
});

/**
 * Классы margin
 * 
 * @description
 * Вычисляет классы для margin используя useSpacing composable.
 * Поддерживает общий margin (m), горизонтальный (mx) и вертикальный (my).
 * Для значения "auto" используется специальная обработка.
 * 
 * @returns {string|Object} Классы margin или объект для условных классов
 */
const marginClasses = computed(() => {
  const classes = {};
  
  if (props.m) {
    if (props.m === "auto") {
      classes["m-auto"] = true;
    } else {
      const marginClass = useSpacing(props.m, 'margin');
      if (marginClass) classes[marginClass] = true;
    }
  }
  
  if (props.mx) {
    if (props.mx === "auto") {
      classes["mx-auto"] = true;
    } else {
      const marginXClass = useSpacing(props.mx, 'marginX');
      if (marginXClass) classes[marginXClass] = true;
    }
  }
  
  if (props.my) {
    if (props.my === "auto") {
      classes["my-auto"] = true;
    } else {
      const marginYClass = useSpacing(props.my, 'marginY');
      if (marginYClass) classes[marginYClass] = true;
    }
  }
  
  return Object.keys(classes).length > 0 ? classes : null;
});

/**
 * Классы скругления углов
 * 
 * @description
 * Определяет классы для border-radius в зависимости от значения rounded prop.
 * 
 * @returns {string|null} Tailwind CSS класс для скругления или null
 */
const roundedClass = computed(() => {
  if (!props.rounded) return null;
  
  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
  };
  
  return roundedClasses[props.rounded] || `rounded-${props.rounded}`;
});

/**
 * Классы фона
 * 
 * @description
 * Определяет классы для background-color в зависимости от значения bg prop.
 * 
 * @returns {string|null} Tailwind CSS класс для фона или null
 */
const bgClass = computed(() => {
  if (!props.bg) return null;
  
  const bgClasses = {
    white: "bg-white",
    slate: "bg-slate-50",
    transparent: "bg-transparent",
  };
  
  return bgClasses[props.bg] || props.bg;
});

/**
 * Классы тени
 * 
 * @description
 * Определяет классы для box-shadow в зависимости от значения shadow prop.
 * 
 * @returns {string|null} Tailwind CSS класс для тени или null
 */
const shadowClass = computed(() => {
  if (!props.shadow) return null;
  
  const shadowClasses = {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };
  
  return shadowClasses[props.shadow] || `shadow-${props.shadow}`;
});

/**
 * Классы позиционирования
 * 
 * @description
 * Определяет CSS position для box компонента.
 * 
 * @returns {string|null} Tailwind CSS класс для позиционирования или null
 */
const positionClass = computed(() => {
  if (!props.position) return null;
  
  const positionClasses = {
    static: "static",
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed",
    sticky: "sticky",
  };
  
  return positionClasses[props.position] || null;
});

/**
 * Классы z-index
 * 
 * @description
 * Определяет z-index для box компонента.
 * 
 * @returns {string|null} Tailwind CSS класс для z-index или null
 */
const zIndexClass = computed(() => {
  if (!props.zIndex) return null;
  
  const zIndexClasses = {
    "0": "z-0",
    "10": "z-10",
    "20": "z-20",
    "30": "z-30",
    "40": "z-40",
    "50": "z-50",
    auto: "z-auto",
  };
  
  return zIndexClasses[props.zIndex] || null;
});

/**
 * Класс inset
 * 
 * @description
 * Применяет inset-0 (top-0 right-0 bottom-0 left-0) для абсолютного/фиксированного позиционирования.
 * 
 * @returns {string|null} Tailwind CSS класс для inset или null
 */
const insetClass = computed(() => {
  return props.inset ? "inset-0" : null;
});

/**
 * Все классы для box компонента
 * 
 * @description
 * Объединяет все классы стилизации (padding, margin, rounded, bg, shadow, border, position, zIndex, inset)
 * с использованием useClassComposition для единообразного подхода.
 * 
 * @returns {Array} Массив классов для применения к элементу
 */
const boxClasses = computed(() =>
  useClassComposition(
    paddingClasses.value,
    marginClasses.value,
    roundedClass.value,
    bgClass.value,
    shadowClass.value,
    positionClass.value,
    zIndexClass.value,
    insetClass.value,
    {
      "border border-slate-200": props.border,
    }
  )
);
</script>

