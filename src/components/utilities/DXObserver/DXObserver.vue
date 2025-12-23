<template>
  <div
    ref="rootElement"
    :class="observerClasses"
    data-component="DXObserver"
    :data-threshold="threshold"
    :data-once="once"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import { useClassComposition } from "@/composables/useClassComposition";

const props = defineProps({
  /**
   * Порог видимости (0.0 - 1.0)
   * Определяет, какая часть элемента должна быть видна для срабатывания
   * @default 0.1
   */
  threshold: {
    type: [Number, Array],
    default: 0.1,
    validator: (value) => {
      if (Array.isArray(value)) {
        return value.every((v) => v >= 0 && v <= 1);
      }
      return value >= 0 && value <= 1;
    },
  },
  /**
   * Отступы от root элемента (аналогично CSS margin)
   * Формат: "10px 20px 30px 40px" или "10px"
   * @default "0px"
   */
  rootMargin: { type: String, default: "0px" },
  /**
   * Срабатывать только один раз
   * После первого срабатывания observer отключается
   * @default false
   */
  once: { type: Boolean, default: false },
  /**
   * Root элемент для наблюдения (по умолчанию viewport)
   * Может быть селектором или HTMLElement
   * @default null
   */
  root: { type: [String, Object], default: null },
  /**
   * Отключить observer
   * @default false
   */
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(["intersect"]);

const rootElement = ref(null);
const observer = ref(null);
const hasIntersected = ref(false);

/**
 * Классы для контейнера observer
 * 
 * @description
 * Базовые классы для контейнера. Компонент не добавляет визуальных стилей,
 * так как является утилитой для отслеживания видимости.
 * 
 * @returns {Array} Массив классов
 */
const observerClasses = computed(() =>
  useClassComposition("w-full")
);

/**
 * Инициализация Intersection Observer
 * 
 * @description
 * Создает Intersection Observer с настройками из props.
 * Observer отслеживает видимость rootElement в viewport или указанном root элементе.
 * 
 * @returns {IntersectionObserver|null} Экземпляр observer или null если disabled
 */
function initObserver() {
  if (props.disabled || !rootElement.value) {
    return null;
  }

  // Если once и уже сработал, не создаем observer
  if (props.once && hasIntersected.value) {
    return null;
  }

  const options = {
    threshold: props.threshold,
    rootMargin: props.rootMargin,
  };

  // Если указан root элемент, добавляем его в опции
  if (props.root) {
    if (typeof props.root === "string") {
      const rootElement = document.querySelector(props.root);
      if (rootElement) {
        options.root = rootElement;
      } else {
        console.warn(`DXObserver: Root элемент "${props.root}" не найден`);
      }
    } else if (props.root instanceof HTMLElement) {
      options.root = props.root;
    }
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const isIntersecting = entry.isIntersecting;
      
      // Эмитим событие с информацией о пересечении
      emit("intersect", isIntersecting, entry);

      // Если once и элемент стал видимым, отмечаем и отключаем observer
      if (props.once && isIntersecting) {
        hasIntersected.value = true;
        disconnectObserver();
      }
    });
  }, options);

  obs.observe(rootElement.value);
  return obs;
}

/**
 * Отключение observer
 * 
 * @description
 * Отключает и очищает Intersection Observer.
 */
function disconnectObserver() {
  if (observer.value) {
    observer.value.disconnect();
    observer.value = null;
  }
}

// Инициализация при монтировании
onMounted(() => {
  if (!props.disabled) {
    observer.value = initObserver();
  }
});

// Очистка при размонтировании
onBeforeUnmount(() => {
  disconnectObserver();
});

// Реакция на изменение disabled
watch(
  () => props.disabled,
  (disabled) => {
    if (disabled) {
      disconnectObserver();
    } else {
      observer.value = initObserver();
    }
  }
);

// Реакция на изменение threshold или rootMargin
watch(
  [() => props.threshold, () => props.rootMargin, () => props.root],
  () => {
    if (!props.disabled) {
      disconnectObserver();
      observer.value = initObserver();
    }
  }
);
</script>

