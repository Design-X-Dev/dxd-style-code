<template>
  <div
    ref="containerRef"
    :class="containerClasses"
    data-component="DXStaggeredAnimation"
    :data-direction="direction"
    :data-transition="transition"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed, onMounted, watch, nextTick, ref, onBeforeUnmount } from "vue";
import { useClassComposition } from "../../../composables/useClassComposition";

const props = defineProps({
  /**
   * Задержка между элементами в миллисекундах
   * @default 100
   */
  delay: { type: Number, default: 100 },
  /**
   * Направление анимации: top-to-bottom | left-to-right | right-to-left | bottom-to-top
   * @default 'top-to-bottom'
   */
  direction: {
    type: String,
    default: "top-to-bottom",
    validator: (v) =>
      [
        "top-to-bottom",
        "left-to-right",
        "right-to-left",
        "bottom-to-top",
      ].includes(v),
  },
  /**
   * Тип transition: fade | fade-slide | scale
   * @default 'fade'
   */
  transition: {
    type: String,
    default: "fade",
    validator: (v) => ["fade", "fade-slide", "scale"].includes(v),
  },
  /**
   * Длительность анимации в миллисекундах
   * @default 300
   */
  duration: { type: Number, default: 300 },
  /**
   * Анимировать при монтировании
   * @default true
   */
  animateOnMount: { type: Boolean, default: true },
});

const emit = defineEmits(["animation-complete"]);

/**
 * Классы для контейнера
 * 
 * @description
 * Базовые классы для контейнера анимации.
 * 
 * @returns {Array} Массив классов
 */
const containerClasses = computed(() => useClassComposition("w-full"));

/**
 * Применение анимации к дочерним элементам
 * 
 * @description
 * Применяет анимацию с задержкой к каждому дочернему элементу.
 */
function applyStaggeredAnimation() {
  nextTick(() => {
    const container = document.querySelector(
      '[data-component="DXStaggeredAnimation"]'
    );
    if (!container) return;

    const children = Array.from(container.children);
    let completedCount = 0;

    children.forEach((child, index) => {
      const delay = index * props.delay;
      const childElement = child;

      // Устанавливаем начальное состояние
      childElement.style.opacity = "0";
      childElement.style.transition = `all ${props.duration}ms ease-out`;

      // Применяем начальные стили в зависимости от направления
      switch (props.direction) {
        case "top-to-bottom":
          childElement.style.transform = "translateY(-20px)";
          break;
        case "bottom-to-top":
          childElement.style.transform = "translateY(20px)";
          break;
        case "left-to-right":
          childElement.style.transform = "translateX(-20px)";
          break;
        case "right-to-left":
          childElement.style.transform = "translateX(20px)";
          break;
      }

      if (props.transition === "scale") {
        childElement.style.transform += " scale(0.95)";
      }

      // Применяем анимацию с задержкой
      setTimeout(() => {
        childElement.style.opacity = "1";
        childElement.style.transform = "translate(0, 0) scale(1)";

        // Отслеживаем завершение анимации
        setTimeout(() => {
          completedCount++;
          if (completedCount === children.length) {
            emit("animation-complete");
          }
        }, props.duration);
      }, delay);
    });
  });
}

// Применение анимации при монтировании
onMounted(() => {
  if (props.animateOnMount) {
    applyStaggeredAnimation();
  }
});

// Очистка при размонтировании (таймеры очищаются автоматически при размонтировании компонента)

// Реакция на изменение delay или direction
watch(
  [() => props.delay, () => props.direction, () => props.transition],
  () => {
    if (props.animateOnMount) {
      applyStaggeredAnimation();
    }
  }
);
</script>

<style scoped>
/* CSS переменные для анимации применяются через inline стили */
</style>

