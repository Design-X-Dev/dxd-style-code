<template>
  <nav 
    :aria-label="computedAriaLabel"
    :class="computedClass"
    data-component="DXNav"
    :data-type="type"
    v-bind="navAttrs"
  >
    <slot />
  </nav>
</template>

<script setup>
import { computed, useAttrs } from "vue";

const props = defineProps({
  /** Тип навигации: breadcrumb | pagination | menu | main | custom */
  type: {
    type: String,
    default: "main",
    validator: (value) => ["breadcrumb", "pagination", "menu", "main", "custom"].includes(value),
  },
  /** Кастомный aria-label (переопределяет автоматический label для типа) */
  ariaLabel: {
    type: String,
    default: null,
  },
  /** Дополнительные CSS классы */
  class: {
    type: [String, Array, Object],
    default: null,
  },
});

const attrs = useAttrs();

/**
 * Атрибуты для передачи на nav элемент (исключая class и aria-label, которые обрабатываются отдельно)
 * 
 * @description
 * В Vue 3 с <script setup>, props определенные через defineProps автоматически
 * не попадают в $attrs. Исключаем class и aria-label, так как они обрабатываются отдельно.
 */
const navAttrs = computed(() => {
  const { class: _, "aria-label": __, ...rest } = attrs;
  return rest;
});

/**
 * Автоматические aria-label для типов навигации
 * 
 * @description
 * Маппинг типов навигации на стандартные aria-label значения
 * для улучшения accessibility.
 */
const typeAriaLabels = {
  breadcrumb: "Breadcrumb",
  pagination: "Pagination",
  menu: "Navigation menu",
  main: "Main navigation",
};

/**
 * Вычисляет aria-label для nav элемента
 * 
 * @description
 * Приоритет:
 * 1. Если передан ariaLabel prop → используем его
 * 2. Если type !== 'custom' → используем автоматический label из typeAriaLabels
 * 3. Если type === 'custom' и нет ariaLabel → возвращаем null (не добавляем aria-label)
 * 
 * @returns {string|null} Значение aria-label или null
 */
const computedAriaLabel = computed(() => {
  // Если передан кастомный aria-label, используем его
  if (props.ariaLabel) {
    return props.ariaLabel;
  }
  
  // Если тип не custom, используем автоматический label
  if (props.type !== "custom") {
    return typeAriaLabels[props.type] || null;
  }
  
  // Для custom типа без ariaLabel не добавляем aria-label
  return null;
});

/**
 * Вычисляет классы для nav элемента
 * 
 * @description
 * Объединяет prop class с любыми классами из $attrs.class.
 * 
 * @returns {string|Array|Object|null} Классы для применения к элементу
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
  
  // Возвращаем массив если есть несколько классов, иначе одно значение или null
  return classes.length > 1 ? classes : classes[0] || null;
});
</script>

