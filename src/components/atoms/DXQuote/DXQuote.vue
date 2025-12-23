<template>
  <q
    :cite="cite"
    :class="quoteClasses"
    data-component="DXQuote"
    :data-variant="variant"
    :data-quote-style="quoteStyle"
  >
    <slot />
  </q>
</template>

<script setup>
import { computed } from "vue";
import { useClassComposition } from "../../../composables/useClassComposition";

const props = defineProps({
  /**
   * URL источника цитаты
   */
  cite: { type: String, default: null },
  /**
   * Вариант стилизации: default | highlighted
   * @default 'default'
   */
  variant: {
    type: String,
    default: "default",
    validator: (v) => ["default", "highlighted"].includes(v),
  },
  /**
   * Стиль кавычек: default | french | german
   * @default 'default'
   */
  quoteStyle: {
    type: String,
    default: "default",
    validator: (v) => ["default", "french", "german"].includes(v),
  },
});

/**
 * Классы для цитаты
 * 
 * @description
 * Вычисляет классы для inline-цитаты на основе варианта и стиля кавычек.
 * 
 * @returns {Array} Массив классов
 */
const quoteClasses = computed(() => {
  const baseClasses = "inline";
  
  const variantClasses = {
    default: "text-slate-700",
    highlighted: "text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded",
  };
  
  const quoteStyleClasses = {
    default: "",
    french: "dx-quote-french",
    german: "dx-quote-german",
  };
  
  return useClassComposition(
    baseClasses,
    variantClasses[props.variant] || variantClasses.default,
    quoteStyleClasses[props.quoteStyle] || quoteStyleClasses.default
  );
});
</script>

<style scoped>
/* Французские кавычки */
.dx-quote-french::before {
  content: "« ";
}

.dx-quote-french::after {
  content: " »";
}

/* Немецкие кавычки */
.dx-quote-german::before {
  content: "„";
}

.dx-quote-german::after {
  content: "“";
}

/* Стандартные кавычки (браузер по умолчанию) */
:not(.dx-quote-french):not(.dx-quote-german)::before,
:not(.dx-quote-french):not(.dx-quote-german)::after {
  content: none;
}
</style>

