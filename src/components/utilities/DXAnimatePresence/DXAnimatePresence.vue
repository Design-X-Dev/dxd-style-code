<template>
  <Transition
    :name="transitionName"
    :mode="mode"
    :appear="appear"
    :data-component="'DXAnimatePresence'"
    :data-type="type"
    :data-duration="duration"
    v-bind="transitionConfig"
  >
    <slot v-if="show" />
  </Transition>
</template>

<script setup>
import { computed } from "vue";
import { useClassComposition } from "@/composables/useClassComposition";
import {
  FADE_TRANSITION,
  FADE_SCALE_TRANSITION,
  SLIDE_RIGHT_TRANSITION,
  SLIDE_LEFT_TRANSITION,
  SLIDE_UP_TRANSITION,
  SLIDE_DOWN_TRANSITION,
  useAnimationTransition,
} from "@/composables/useAnimation";

const props = defineProps({
  /**
   * Показывать/скрывать элемент
   * @default false
   */
  show: { type: Boolean, default: false },
  /**
   * Имя transition (используется для CSS классов)
   * @default 'fade'
   */
  name: { type: String, default: "fade" },
  /**
   * Режим transition: default | in-out | out-in
   * @default 'default'
   */
  mode: {
    type: String,
    default: "default",
    validator: (v) => ["default", "in-out", "out-in"].includes(v),
  },
  /**
   * Тип анимации: fade | fade-scale | slide-right | slide-left | slide-up | slide-down
   * @default 'fade'
   */
  type: {
    type: String,
    default: "fade",
    validator: (v) =>
      [
        "fade",
        "fade-scale",
        "slide-right",
        "slide-left",
        "slide-up",
        "slide-down",
      ].includes(v),
  },
  /**
   * Длительность анимации в миллисекундах
   * @default 200
   */
  duration: { type: Number, default: 200 },
  /**
   * Анимировать при первом появлении
   * @default false
   */
  appear: { type: Boolean, default: false },
});

/**
 * Имя transition для CSS классов
 * 
 * @description
 * Используется для генерации CSS классов анимации.
 * Если указан кастомный name, используется он, иначе генерируется на основе type.
 * 
 * @returns {string} Имя transition
 */
const transitionName = computed(() => {
  if (props.name !== "fade") {
    return props.name;
  }
  return props.type;
});

/**
 * Конфигурация transition на основе типа
 * 
 * @description
 * Возвращает конфигурацию transition из useAnimation composable
 * в зависимости от выбранного типа анимации.
 * 
 * @returns {Object} Конфигурация transition
 */
const transitionConfig = computed(() => {
  const configs = {
    fade: FADE_TRANSITION,
    "fade-scale": FADE_SCALE_TRANSITION,
    "slide-right": SLIDE_RIGHT_TRANSITION,
    "slide-left": SLIDE_LEFT_TRANSITION,
    "slide-up": SLIDE_UP_TRANSITION,
    "slide-down": SLIDE_DOWN_TRANSITION,
  };
  return configs[props.type] || FADE_TRANSITION;
});
</script>

<style scoped>
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity v-bind("duration + 'ms'") ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Fade scale transition */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all v-bind("duration + 'ms'") ease-out;
}

.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Slide right transition */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all v-bind("duration + 'ms'") ease-out;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* Slide left transition */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all v-bind("duration + 'ms'") ease-out;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Slide up transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all v-bind("duration + 'ms'") ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Slide down transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all v-bind("duration + 'ms'") ease-out;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>

