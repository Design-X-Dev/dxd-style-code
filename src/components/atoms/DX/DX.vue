<template>
  <component
    :is="componentTag"
    :class="computedClass"
    data-component="DX"
    v-bind="componentAttrs"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed, useAttrs } from "vue";

const props = defineProps({
  /** HTML тег элемента (div, span, button, a, nav, header, section, article и т.д.) */
  as: {
    type: String,
    default: "div",
  },
  /** Дополнительные CSS классы */
  class: {
    type: [String, Array, Object],
    default: null,
  },
});

const attrs = useAttrs();

/**
 * Атрибуты для передачи на компонент (исключая class, который обрабатывается отдельно)
 * 
 * @description
 * В Vue 3 с <script setup>, props определенные через defineProps автоматически
 * не попадают в $attrs. Исключаем только class, так как он обрабатывается через computedClass.
 */
const componentAttrs = computed(() => {
  const { class: _, ...rest } = attrs;
  return rest;
});

/**
 * Определяет HTML тег для рендеринга
 * 
 * @description
 * Возвращает HTML тег из prop `as` или дефолтный `div`.
 * 
 * @returns {string} HTML тег для рендеринга
 */
const componentTag = computed(() => {
  return props.as || "div";
});

/**
 * Вычисляет классы для компонента
 * 
 * @description
 * Объединяет prop class с любыми классами из $attrs.
 * 
 * @returns {string|Array|Object} Классы для применения к элементу
 */
const computedClass = computed(() => {
  const classes = [];
  
  // Добавляем класс из prop class
  if (props.class) {
    classes.push(props.class);
  }
  
  // Добавляем класс из $attrs.class если есть
  if (attrs.class) {
    classes.push(attrs.class);
  }
  
  // Возвращаем массив если есть несколько классов, иначе одно значение
  return classes.length > 1 ? classes : classes[0] || null;
});

</script>

