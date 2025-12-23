<template>
  <Teleport :to="target" :disabled="disabled">
    <slot />
  </Teleport>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  /** 
   * Целевой контейнер для рендеринга
   * Может быть строкой (селектор или 'body') или DOM элементом
   * @default 'body'
   */
  to: {
    type: [String, Object],
    default: "body",
    validator: (value) => {
      if (typeof value === "string") {
        return value === "body" || value.startsWith("#") || value.startsWith(".");
      }
      return value instanceof HTMLElement;
    },
  },
  /** Отключить портал (рендерить в текущем месте) */
  disabled: { type: Boolean, default: false },
});

/**
 * Вычисляет целевой контейнер для Teleport
 * 
 * @description
 * Обрабатывает различные форматы целевого контейнера:
 * - Строка "body" → рендеринг в body
 * - Строка-селектор (например, "#app" или ".portal-container") → поиск элемента
 * - DOM элемент → использование напрямую
 * 
 * Если контейнер не найден, возвращает "body" как fallback.
 * 
 * @returns {string|HTMLElement} Целевой контейнер для Teleport
 */
const target = computed(() => {
  // Если это строка "body", возвращаем как есть
  if (props.to === "body") {
    return "body";
  }

  // Если это строка-селектор, пытаемся найти элемент
  if (typeof props.to === "string") {
    const element = document.querySelector(props.to);
    if (element) {
      return element;
    }
    // Если элемент не найден, возвращаем body как fallback
    console.warn(`DXPortal: Контейнер "${props.to}" не найден, используется body`);
    return "body";
  }

  // Если это DOM элемент, возвращаем его
  if (props.to instanceof HTMLElement) {
    return props.to;
  }

  // Fallback на body
  return "body";
});
</script>

