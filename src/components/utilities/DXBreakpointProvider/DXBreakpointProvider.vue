<template>
  <div
    :class="providerClasses"
    data-component="DXBreakpointProvider"
    :data-breakpoint="currentBreakpoint"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, computed, provide, onMounted, onBeforeUnmount, watch } from "vue";
import { useClassComposition } from "../../../composables/useClassComposition";

const props = defineProps({
  /**
   * Кастомные брейкпоинты
   * Формат: { xs: 0, sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 }
   * @default null
   */
  breakpoints: {
    type: Object,
    default: null,
  },
  /**
   * Задержка debounce для resize события в миллисекундах
   * @default 150
   */
  debounce: { type: Number, default: 150 },
});

const emit = defineEmits(["breakpoint-change"]);

// Стандартные брейкпоинты Tailwind CSS
const defaultBreakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

/**
 * Активные брейкпоинты
 * 
 * @description
 * Использует кастомные брейкпоинты если указаны, иначе стандартные Tailwind.
 * 
 * @returns {Object} Объект с брейкпоинтами
 */
const activeBreakpoints = computed(() => {
  return props.breakpoints || defaultBreakpoints;
});

const screenWidth = ref(typeof window !== "undefined" ? window.innerWidth : 0);
const screenHeight = ref(typeof window !== "undefined" ? window.innerHeight : 0);
const currentBreakpoint = ref("xs");
let resizeTimer = null;

/**
 * Классы для провайдера
 * 
 * @description
 * Базовые классы для контейнера провайдера.
 * 
 * @returns {Array} Массив классов
 */
const providerClasses = computed(() => useClassComposition("w-full h-full"));

/**
 * Определение текущего брейкпоинта
 * 
 * @description
 * Определяет текущий брейкпоинт на основе ширины экрана.
 * 
 * @param {number} width - Ширина экрана
 * @returns {string} Название брейкпоинта
 */
function getBreakpoint(width) {
  const breakpoints = activeBreakpoints.value;
  const sortedBreakpoints = Object.entries(breakpoints).sort(
    (a, b) => b[1] - a[1]
  );

  for (const [name, minWidth] of sortedBreakpoints) {
    if (width >= minWidth) {
      return name;
    }
  }

  return "xs";
}

/**
 * Обновление размеров экрана
 * 
 * @description
 * Обновляет ширину, высоту и текущий брейкпоинт при изменении размера окна.
 */
function updateScreenSize() {
  screenWidth.value = window.innerWidth;
  screenHeight.value = window.innerHeight;
  const newBreakpoint = getBreakpoint(screenWidth.value);

  if (newBreakpoint !== currentBreakpoint.value) {
    const oldBreakpoint = currentBreakpoint.value;
    currentBreakpoint.value = newBreakpoint;
    emit("breakpoint-change", newBreakpoint, oldBreakpoint);
  }
}

/**
 * Обработчик resize с debounce
 * 
 * @description
 * Обрабатывает изменение размера окна с задержкой для оптимизации производительности.
 */
function handleResize() {
  if (resizeTimer) {
    clearTimeout(resizeTimer);
  }

  resizeTimer = setTimeout(() => {
    updateScreenSize();
  }, props.debounce);
}

// Provide для дочерних компонентов
provide("breakpoints", activeBreakpoints);
provide("currentBreakpoint", computed(() => currentBreakpoint.value));
provide("screenWidth", computed(() => screenWidth.value));
provide("screenHeight", computed(() => screenHeight.value));

// Инициализация при монтировании
onMounted(() => {
  updateScreenSize();
  window.addEventListener("resize", handleResize);
});

// Очистка при размонтировании
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  if (resizeTimer) {
    clearTimeout(resizeTimer);
  }
});

// Реакция на изменение breakpoints
watch(
  () => props.breakpoints,
  () => {
    updateScreenSize();
  },
  { deep: true }
);
</script>

