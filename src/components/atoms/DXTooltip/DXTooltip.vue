<template>
  <div
    class="relative inline-block"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @focus="handleFocus"
    @blur="handleBlur"
    data-component="DXTooltip"
  >
    <slot />
    <Transition v-bind="transitionProps">
      <div
        v-if="isVisible && hasContent"
        :class="tooltipClasses"
        :style="tooltipStyles"
        role="tooltip"
      >
        <slot name="content">{{ content }}</slot>
        <div :class="arrowClasses" />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted, useSlots } from "vue";
import { useSize } from "@/composables/useSize";
import { useVariantTooltip, useTooltipArrow, useTooltipPosition } from "@/composables/useVariant";
import { useAnimationTransition, useTooltipCustomTransition } from "@/composables/useAnimation";

const props = defineProps({
  /** Текст подсказки */
  content: { type: String, default: "" },
  /** Позиция: top | bottom | left | right */
  position: { type: String, default: "top" },
  /** Цвет: dark | light | primary | success | danger | warning | info */
  color: { type: String, default: "dark" },
  /** Размер: xs | sm | md | lg | xl */
  size: { type: String, default: "md" },
  /** Анимация: fade | fade-scale | slide-up | slide-down | slide-left | slide-right | tooltip-custom */
  animation: { type: String, default: "tooltip-custom" },
  /** Максимальная ширина */
  maxWidth: { type: String, default: "200px" },
  /** Задержка перед показом (мс) */
  delay: { type: Number, default: 100 },
});

const slots = useSlots();
const isVisible = ref(false);
const showTimeout = ref(null);
const hideTimeout = ref(null);

/**
 * Проверка наличия контента для отображения
 */
const hasContent = computed(() => {
  return Boolean(props.content || slots.content);
});

/**
 * Обработчик входа мыши
 */
const handleMouseEnter = () => {
  // Очищаем таймер скрытия, если он был установлен
  if (hideTimeout.value) {
    clearTimeout(hideTimeout.value);
    hideTimeout.value = null;
  }

  // Устанавливаем задержку перед показом
  showTimeout.value = setTimeout(() => {
    isVisible.value = true;
  }, props.delay);
};

/**
 * Обработчик выхода мыши
 */
const handleMouseLeave = () => {
  // Очищаем таймер показа
  if (showTimeout.value) {
    clearTimeout(showTimeout.value);
    showTimeout.value = null;
  }

  // Скрываем сразу без задержки
  isVisible.value = false;
};

/**
 * Обработчик фокуса
 */
const handleFocus = () => {
  handleMouseEnter();
};

/**
 * Обработчик потери фокуса
 */
const handleBlur = () => {
  handleMouseLeave();
};

/**
 * Конфигурация transition для анимации
 * Для tooltip-custom использует адаптивную анимацию в зависимости от позиции
 */
const transitionProps = computed(() => {
  if (props.animation === 'tooltip-custom') {
    return useTooltipCustomTransition(props.position);
  }
  return useAnimationTransition(props.animation);
});

/**
 * Классы для tooltip
 */
const tooltipClasses = computed(() => [
  "absolute z-50 rounded-lg whitespace-normal",
  useSize(props.size, "tooltip"),
  useTooltipPosition(props.position),
  useVariantTooltip(props.color),
]);

/**
 * Стили для tooltip
 */
const tooltipStyles = computed(() => ({
  maxWidth: props.maxWidth,
}));

/**
 * Классы для стрелки tooltip
 */
const arrowClasses = computed(() => {
  return useTooltipArrow(props.position, props.color);
});

/**
 * Очистка таймеров при размонтировании компонента
 */
onUnmounted(() => {
  if (showTimeout.value) {
    clearTimeout(showTimeout.value);
  }
  if (hideTimeout.value) {
    clearTimeout(hideTimeout.value);
  }
});
</script>

